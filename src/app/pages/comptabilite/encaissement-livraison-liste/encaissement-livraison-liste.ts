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
  EncaissementVente,
  MODE_PAIEMENT_OPTIONS,
  StoreEncaissementVenteDto,
  ModePaiement,
} from '@/models/vente.model';

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
  encaissements = signal<EncaissementVente[]>([]);

  loading = false;
  saving = false;
  dialogVisible = false;

  createForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;

  get canCreate(): boolean { return this.authService.hasPermission('encaissements.create'); }

  // Stats calculées (montant est une string décimale côté API)
  totalEncaisse = computed(() =>
    this.encaissements().reduce((sum, e) => sum + parseFloat(String(e.montant ?? 0)), 0)
  );

  constructor(
    private fb: FormBuilder,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.initForm();
    this.loadEncaissements();
  }

  private initForm() {
    this.createForm = this.fb.group({
      facture_vente_id: [null, [Validators.required, Validators.min(1)]],
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
  }

  loadEncaissements() {
    this.loading = true;
    this.factureService.getEncaissements().subscribe({
      next: (resp) => {
        this.encaissements.set(resp.data?.data ?? []);
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
    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: v.facture_vente_id,
      montant: v.montant,
      mode_paiement: v.mode_paiement as ModePaiement,
      date_encaissement: this.formatDate(v.date_encaissement),
      note: v.note || undefined,
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

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
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
