import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { CardModule } from 'primeng/card';

import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  EncaissementLivraison,
  MODE_PAIEMENT_OPTIONS,
  StoreEncaissementLivraisonDto,
  ModePaiementLivraison,
} from '@/models/livraison.model';

@Component({
  selector: 'app-encaissement-livraison-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    InputNumberModule,
    TagModule,
    SkeletonModule,
    DialogModule,
    SelectModule,
    DatePickerModule,
    InputIconModule,
    IconFieldModule,
    CardModule,
  ],
  providers: [MessageService],
  templateUrl: './encaissement-livraison-liste.html',
})
export class EncaissementLivraisonListe implements OnInit {
  encaissements = signal<EncaissementLivraison[]>([]);

  loading = false;
  saving = false;
  dialogVisible = false;

  createForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;

  canCreate = false;

  // Stats calculées
  totalEncaisse = computed(() =>
    this.encaissements().reduce((sum, e) => sum + (e.montant ?? 0), 0)
  );

  constructor(
    private fb: FormBuilder,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.canCreate = this.authService.hasPermission('encaissements.create');
  }

  ngOnInit() {
    this.initForm();
    this.loadEncaissements();
  }

  private initForm() {
    this.createForm = this.fb.group({
      facture_livraison_id: [null],
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      notes: [''],
    });
  }

  loadEncaissements() {
    this.loading = true;
    this.factureService.getEncaissements().subscribe({
      next: (resp) => {
        this.encaissements.set(Array.isArray(resp.data) ? resp.data : []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, 'charger les encaissements');
      },
    });
  }

  openCreateDialog() {
    this.initForm();
    this.dialogVisible = true;
  }

  onSaveEncaissement() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.saving) return;

    const v = this.createForm.value;
    const dto: StoreEncaissementLivraisonDto = {
      montant: v.montant,
      mode_paiement: v.mode_paiement as ModePaiementLivraison,
      date_encaissement: this.formatDate(v.date_encaissement),
      notes: v.notes || undefined,
      facture_livraison_id: v.facture_livraison_id || undefined,
    };

    this.saving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Encaissement enregistré.',
          life: 3000,
        });
        this.loadEncaissements();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, 'Impossible d\'enregistrer l\'encaissement');
      },
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  isInvalid(name: string): boolean {
    const c = this.createForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  formatDate(d: Date | string): string {
    if (!d) return '';
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toISOString().split('T')[0];
  }

  formatDateDisplay(d: string | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  formatMontant(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n ?? 0) + ' GNF';
  }

  getModePaiementLabel(mode: string): string {
    return MODE_PAIEMENT_OPTIONS.find((m) => m.value === mode)?.label ?? mode;
  }

  private showApiError(err: any, action: string) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat() as string[];
      msgs.forEach((m) =>
        this.messageService.add({ severity: 'error', summary: 'Erreur de validation', detail: m, life: 5000 })
      );
      return;
    }
    const summaryMap: Record<number, string> = {
      401: 'Session expirée',
      403: 'Accès refusé',
      404: 'Introuvable',
      409: 'Conflit',
      0: 'Serveur inaccessible',
    };
    const detailMap: Record<number, string> = {
      401: 'Votre session a expiré. Veuillez vous reconnecter.',
      403: `Vous n'avez pas la permission de ${action}.`,
      404: 'La ressource demandée est introuvable.',
      0: 'Impossible de joindre le serveur. Vérifiez votre connexion réseau.',
    };
    this.messageService.add({
      severity: err.status === 409 ? 'warn' : 'error',
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ''}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5000,
    });
  }
}
