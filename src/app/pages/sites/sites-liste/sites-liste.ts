import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';

import { AuthService } from '@/services/auth/auth.service';
import { SiteService } from '@/services/sites/site.service';
import { UsineContextService } from '@/services/usine/usine-context.service';
import { CreateSiteDto, Site, UpdateSiteDto } from '@/models/usine.model';

@Component({
  selector: 'app-sites-liste',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './sites-liste.html',
  styleUrl: './sites-liste.scss',
})
export class SitesListe implements OnInit {
  private readonly siteService = inject(SiteService);
  private readonly authService = inject(AuthService);
  private readonly contextService = inject(UsineContextService);
  private readonly messageService = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly formBuilder = inject(FormBuilder);

  sites: Site[] = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  submitted = false;
  editingId: number | null = null;

  readonly typeOptions: Array<{ label: string; value: string }> = [
    { label: 'Siege', value: 'siege' },
    { label: 'Production', value: 'production' },
    { label: 'Distribution', value: 'distribution' },
    { label: 'Stockage', value: 'stockage' },
    { label: 'Mixte', value: 'mixte' },
  ];

  readonly statutOptions: Array<{ label: string; value: string }> = [
    { label: 'Actif', value: 'active' },
    { label: 'Inactif', value: 'inactive' },
    { label: 'Archive', value: 'archived' },
  ];

  readonly siteForm = this.formBuilder.nonNullable.group({
    nom: ['', [Validators.required, Validators.maxLength(255)]],
    code: ['', [Validators.required, Validators.maxLength(50)]],
    type: ['production', [Validators.required]],
    statut: ['active'],
    localisation: ['', [Validators.maxLength(255)]],
    pays: ['', [Validators.maxLength(100)]],
    ville: ['', [Validators.maxLength(100)]],
    quartier: ['', [Validators.maxLength(100)]],
    description: ['', [Validators.maxLength(2000)]],
    parent_id: [''],
  });

  ngOnInit(): void {
    this.loadSites();
  }

  canCreate(): boolean {
    return this.authService.hasAnyPermission(['sites.create']);
  }

  canUpdate(): boolean {
    return this.authService.hasAnyPermission(['sites.update']);
  }

  canDelete(): boolean {
    return this.authService.hasAnyPermission(['sites.delete']);
  }

  canSetDefault(): boolean {
    return this.authService.hasAnyPermission(['sites.read']);
  }

  isDefaultSite(item: Site): boolean {
    return this.contextService.defaultUsineId() === item.id;
  }

  get dialogTitle(): string {
    return this.editingId ? 'Modifier le site' : 'Nouveau site';
  }

  loadSites(): void {
    this.loading = true;
    this.siteService.getAll().subscribe({
      next: (items) => {
        this.sites = items;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, 'Chargement des sites impossible.');
      },
    });
  }

  openCreateDialog(): void {
    this.editingId = null;
    this.submitted = false;
    this.siteForm.reset({
      nom: '',
      code: '',
      type: 'production',
      statut: 'active',
      localisation: '',
      pays: '',
      ville: '',
      quartier: '',
      description: '',
      parent_id: '',
    });
    this.dialogVisible = true;
  }

  openEditDialog(item: Site): void {
    this.editingId = item.id;
    this.submitted = false;
    this.siteForm.reset({
      nom: item.nom ?? '',
      code: item.code ?? '',
      type: item.type ? String(item.type) : 'production',
      statut: item.statut ? String(item.statut) : 'active',
      localisation: item.localisation ?? '',
      pays: item.pays ?? '',
      ville: item.ville ?? '',
      quartier: item.quartier ?? '',
      description: item.description ?? '',
      parent_id: item.parent_id ? String(item.parent_id) : '',
    });
    this.dialogVisible = true;
  }

  closeDialog(): void {
    this.dialogVisible = false;
    this.submitted = false;
    this.saving = false;
  }

  submitForm(): void {
    this.submitted = true;
    if (this.siteForm.invalid || this.saving) {
      this.siteForm.markAllAsTouched();
      return;
    }

    this.saving = true;
    const payload = this.buildPayload();

    const request$ = this.editingId
      ? this.siteService.update(this.editingId, payload)
      : this.siteService.create(payload as CreateSiteDto);

    request$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: this.editingId ? 'Site mis a jour.' : 'Site cree.',
          life: 3000,
        });
        this.loadSites();
      },
      error: (error) => {
        this.saving = false;
        this.showApiError(error, 'Enregistrement du site impossible.');
      },
    });
  }

  setDefault(item: Site): void {
    this.siteService.setDefault(item.id).subscribe({
      next: () => {
        this.contextService.switchUsine(item.id);
        this.authService.me().subscribe({
          next: () => {},
          error: () => {},
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Succes',
          detail: 'Site par defaut mis a jour.',
          life: 3000,
        });
      },
      error: (error) => this.showApiError(error, 'Impossible de changer le site par defaut.'),
    });
  }

  confirmDelete(item: Site): void {
    this.confirmationService.confirm({
      header: 'Suppression',
      message: `Supprimer le site ${item.nom} ?`,
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      rejectButtonStyleClass: 'p-button-text p-button-sm',
      accept: () => {
        this.siteService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succes',
              detail: 'Site supprime.',
              life: 3000,
            });
            this.loadSites();
          },
          error: (error) => this.showApiError(error, 'Suppression du site impossible.'),
        });
      },
    });
  }

  private buildPayload(): CreateSiteDto | UpdateSiteDto {
    const raw = this.siteForm.getRawValue();
    const parentIdValue = raw.parent_id.trim();
    const parsedParentId = Number(parentIdValue);

    return {
      nom: raw.nom.trim(),
      code: raw.code.trim().toUpperCase(),
      type: raw.type.trim(),
      statut: this.nullIfEmpty(raw.statut) ?? undefined,
      localisation: this.nullIfEmpty(raw.localisation),
      pays: this.nullIfEmpty(raw.pays),
      ville: this.nullIfEmpty(raw.ville),
      quartier: this.nullIfEmpty(raw.quartier),
      description: this.nullIfEmpty(raw.description),
      parent_id: parentIdValue.length > 0 && Number.isInteger(parsedParentId) ? parsedParentId : null,
    };
  }

  private nullIfEmpty(value: string): string | null {
    const cleaned = value.trim();
    return cleaned.length > 0 ? cleaned : null;
  }

  private showApiError(error: any, fallback: string): void {
    if (error?.status === 422 && error?.error?.errors) {
      const messages = Object.values(error.error.errors).flat() as string[];
      messages.forEach((message) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Validation',
          detail: message,
          life: 5000,
        });
      });
      return;
    }

    const detail =
      (typeof error?.error?.message === 'string' && error.error.message) ||
      (typeof error?.message === 'string' && error.message) ||
      fallback;

    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail,
      life: 5000,
    });
  }
}
