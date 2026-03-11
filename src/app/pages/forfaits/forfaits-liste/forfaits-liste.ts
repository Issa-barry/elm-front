import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';

import { Forfait, ForfaitPayload, formatForfaitPrix } from '@/models/forfait.model';
import { ForfaitService } from '@/services/forfaits/forfait.service';

@Component({
  selector: 'app-forfaits-liste',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    TextareaModule,
    CheckboxModule,
    TooltipModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './forfaits-liste.html',
})
export class ForfaitsListe implements OnInit {
  private readonly forfaitService      = inject(ForfaitService);
  private readonly messageService      = inject(MessageService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly fb                  = inject(FormBuilder);

  forfaits: Forfait[] = [];
  loading  = false;
  saving   = false;
  dialogVisible = false;
  editingId: number | null = null;

  readonly forfaitForm = this.fb.nonNullable.group({
    slug:        ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-z0-9_-]+$/)]],
    nom:         ['', [Validators.required, Validators.maxLength(191)]],
    prix:        [0 as number | null],
    description: [''],
    is_active:   [true],
  });

  ngOnInit(): void {
    this.loadForfaits();
  }

  get dialogTitle(): string {
    return this.editingId ? 'Modifier le forfait' : 'Nouveau forfait';
  }

  loadForfaits(): void {
    this.loading = true;
    this.forfaitService.getAll().subscribe({
      next:  (items) => { this.forfaits = items; this.loading = false; },
      error: (err)   => { this.loading = false; this.showApiError(err, 'Chargement impossible.'); },
    });
  }

  openCreateDialog(): void {
    this.editingId = null;
    this.forfaitForm.reset({ slug: '', nom: '', prix: 0, description: '', is_active: true });
    this.forfaitForm.get('slug')!.enable();
    this.dialogVisible = true;
  }

  openEditDialog(item: Forfait): void {
    this.editingId = item.id;
    this.forfaitForm.reset({
      slug:        item.slug,
      nom:         item.nom,
      prix:        parseFloat(item.prix) || 0,
      description: item.description ?? '',
      is_active:   item.is_active,
    });
    // Slug non modifiable en édition (unique, côté back)
    this.forfaitForm.get('slug')!.disable();
    this.dialogVisible = true;
  }

  closeDialog(): void {
    this.dialogVisible = false;
    this.saving = false;
  }

  submitForm(): void {
    this.forfaitForm.markAllAsTouched();
    if (this.forfaitForm.invalid || this.saving) return;

    const raw = this.forfaitForm.getRawValue();
    const dto: ForfaitPayload = {
      slug:        raw.slug.trim(),
      nom:         raw.nom.trim(),
      prix:        raw.prix ?? 0,
      description: raw.description?.trim() || null,
      is_active:   raw.is_active,
    };

    this.saving = true;
    const req$ = this.editingId
      ? this.forfaitService.update(this.editingId, dto)
      : this.forfaitService.create(dto);

    req$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary:  'Succès',
          detail:   this.editingId ? 'Forfait mis à jour.' : 'Forfait créé.',
          life:     3000,
        });
        this.loadForfaits();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, 'Enregistrement impossible.');
      },
    });
  }

  confirmDelete(item: Forfait): void {
    this.confirmationService.confirm({
      header:  'Suppression',
      message: `Supprimer le forfait "${item.nom}" ?`,
      icon:    'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      rejectButtonStyleClass: 'p-button-text p-button-sm',
      accept: () => {
        this.forfaitService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary:  'Succès',
              detail:   'Forfait supprimé.',
              life:     3000,
            });
            this.loadForfaits();
          },
          error: (err) => this.showApiError(err, 'Suppression impossible.'),
        });
      },
    });
  }

  formatPrix(prix: string): string {
    return formatForfaitPrix(prix);
  }

  isInvalid(field: string): boolean {
    const c = this.forfaitForm.get(field)!;
    return c.invalid && (c.dirty || c.touched);
  }

  private showApiError(error: any, fallback: string): void {
    if (error?.status === 422 && error?.error?.errors) {
      Object.values(error.error.errors).flat().forEach((msg: any) =>
        this.messageService.add({ severity: 'error', summary: 'Validation', detail: msg, life: 5000 })
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
