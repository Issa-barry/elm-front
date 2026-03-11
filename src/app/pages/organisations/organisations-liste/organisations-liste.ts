import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';

import { AuthService } from '@/services/auth/auth.service';
import { OrganisationService } from '@/services/organisations/organisation.service';
import { ForfaitService } from '@/services/forfaits/forfait.service';
import { Organisation, OrganisationPayload } from '@/models/organisation.model';
import { Forfait } from '@/models/forfait.model';

@Component({
  selector: 'app-organisations-liste',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    TooltipModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './organisations-liste.html',
  styleUrl: './organisations-liste.scss',
})
export class OrganisationsListe implements OnInit {
  private readonly organisationService = inject(OrganisationService);
  private readonly forfaitService      = inject(ForfaitService);
  private readonly authService         = inject(AuthService);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly formBuilder         = inject(FormBuilder);

  organisations: Organisation[] = [];
  forfaits:      Forfait[]      = [];
  loading  = false;
  saving   = false;
  dialogVisible = false;
  editingId: number | null = null;

  readonly statutOptions: Array<{ label: string; value: string }> = [
    { label: 'Actif',    value: 'active'    },
    { label: 'Inactif',  value: 'inactive'  },
    { label: 'Suspendu', value: 'suspended' },
  ];

  get forfaitSelectOptions(): Array<{ label: string; value: number | null }> {
    return [
      { label: 'Aucun', value: null },
      ...this.forfaits
        .filter((f) => f.is_active)
        .map((f) => ({ label: f.nom, value: f.id })),
    ];
  }

  getStatutLabel(statut: string | undefined): string {
    const map: Record<string, string> = {
      active:    'Actif',
      inactive:  'Inactif',
      suspended: 'Suspendu',
      archived:  'Archivé',
    };
    return map[statut ?? ''] ?? (statut || '—');
  }

  readonly organisationForm = this.formBuilder.group({
    nom:         ['', [Validators.required, Validators.maxLength(191)]],
    code:        ['', [Validators.required, Validators.maxLength(50)]],
    email:       ['', [Validators.email, Validators.maxLength(191)]],
    phone:       ['', [Validators.maxLength(50)]],
    pays:        ['', [Validators.maxLength(100)]],
    ville:       ['', [Validators.maxLength(100)]],
    quartier:    ['', [Validators.maxLength(100)]],
    adresse:     ['', [Validators.maxLength(500)]],
    description: [''],
    statut:      ['active'],
    forfait_id:  [null as number | null],
  });

  ngOnInit(): void {
    this.loadOrganisations();
    this.loadForfaits();
  }

  canCreate(): boolean {
    return this.authService.hasAnyRole(['super_admin', 'super-admin']) || this.authService.hasAnyPermission(['organisations.create']);
  }

  canUpdate(): boolean {
    return this.authService.hasAnyRole(['super_admin', 'super-admin']) || this.authService.hasAnyPermission(['organisations.update']);
  }

  canDelete(): boolean {
    return this.authService.hasAnyRole(['super_admin', 'super-admin']) || this.authService.hasAnyPermission(['organisations.delete']);
  }

  get dialogTitle(): string {
    return this.editingId ? "Modifier l'organisation" : 'Nouvelle organisation';
  }

  loadOrganisations(): void {
    this.loading = true;
    this.organisationService.getAll().subscribe({
      next:  (items) => { this.organisations = items; this.loading = false; },
      error: (error) => { this.loading = false; this.showApiError(error, 'Chargement des organisations impossible.'); },
    });
  }

  loadForfaits(): void {
    this.forfaitService.getAll().subscribe({
      next:  (items) => (this.forfaits = items),
      error: () => {},
    });
  }

  openCreateDialog(): void {
    this.editingId = null;
    this.organisationForm.reset({
      nom: '', code: '', email: '', phone: '',
      pays: '', ville: '', quartier: '', adresse: '',
      description: '', statut: 'active', forfait_id: null,
    });
    this.dialogVisible = true;
  }

  openEditDialog(item: Organisation): void {
    this.editingId = item.id;
    this.organisationForm.reset({
      nom:         item.nom         ?? '',
      code:        item.code        ?? '',
      email:       item.email       ?? '',
      phone:       item.phone       ?? '',
      pays:        item.pays        ?? '',
      ville:       item.ville       ?? '',
      quartier:    item.quartier    ?? '',
      adresse:     item.adresse     ?? '',
      description: item.description ?? '',
      statut:      item.statut ? String(item.statut) : 'active',
      forfait_id:  item.forfait_id ?? item.forfait?.id ?? null,
    });
    this.dialogVisible = true;
  }

  closeDialog(): void {
    this.dialogVisible = false;
    this.saving = false;
  }

  submitForm(): void {
    this.organisationForm.markAllAsTouched();
    if (this.organisationForm.invalid || this.saving) return;

    const payload = this.buildPayload();
    this.saving = true;

    const request$ = this.editingId
      ? this.organisationService.update(this.editingId, payload)
      : this.organisationService.create(payload);

    request$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary:  'Succès',
          detail:   this.editingId ? 'Organisation mise à jour.' : 'Organisation créée.',
          life:     3000,
        });
        this.loadOrganisations();
      },
      error: (error) => {
        this.saving = false;
        this.showApiError(error, 'Enregistrement impossible.');
      },
    });
  }

  confirmDelete(item: Organisation): void {
    this.confirmationService.confirm({
      header:  'Suppression',
      message: `Supprimer l'organisation ${item.nom} ?`,
      icon:    'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      rejectButtonStyleClass: 'p-button-text p-button-sm',
      accept: () => {
        this.organisationService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Organisation supprimée.', life: 3000 });
            this.loadOrganisations();
          },
          error: (error) => this.showApiError(error, 'Suppression impossible.'),
        });
      },
    });
  }

  private buildPayload(): OrganisationPayload {
    const raw = this.organisationForm.getRawValue();
    return {
      nom:         raw.nom!.trim(),
      code:        raw.code!.trim(),
      email:       this.nullIfEmpty(raw.email ?? ''),
      phone:       this.nullIfEmpty(raw.phone ?? ''),
      pays:        this.nullIfEmpty(raw.pays ?? ''),
      ville:       this.nullIfEmpty(raw.ville ?? ''),
      quartier:    this.nullIfEmpty(raw.quartier ?? ''),
      adresse:     this.nullIfEmpty(raw.adresse ?? ''),
      description: this.nullIfEmpty(raw.description ?? ''),
      statut:      this.nullIfEmpty(raw.statut ?? '') ?? 'active',
      forfait_id:  raw.forfait_id ?? null,
    };
  }

  private nullIfEmpty(value: string): string | null {
    const cleaned = value.trim();
    return cleaned.length > 0 ? cleaned : null;
  }

  private showApiError(error: any, fallback: string): void {
    if (error?.status === 422 && error?.error?.errors) {
      const messages = Object.values(error.error.errors).flat() as string[];
      messages.forEach((message) =>
        this.messageService.add({ severity: 'error', summary: 'Validation', detail: message, life: 5000 })
      );
      return;
    }
    const detail =
      (typeof error?.error?.message === 'string' && error.error.message) ||
      (typeof error?.message === 'string' && error.message) ||
      fallback;
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail, life: 5000 });
  }
}
