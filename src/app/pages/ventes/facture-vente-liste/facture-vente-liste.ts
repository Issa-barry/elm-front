import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
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
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DatePickerModule } from 'primeng/datepicker';

import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  FactureVente,
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY,
  StatutFacture,
  MODE_PAIEMENT_OPTIONS,
  StoreEncaissementVenteDto,
  ModePaiement,
} from '@/models/vente.model';

@Component({
  selector: 'app-facture-vente-liste',
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
    SelectModule,
    TooltipModule,
    InputIconModule,
    IconFieldModule,
    DatePickerModule,
  ],
  providers: [MessageService],
  templateUrl: './facture-vente-liste.html',
  styleUrls: ['./facture-vente-liste.scss'],
})
export class FactureVenteListe implements OnInit {
  factures = signal<FactureVente[]>([]);

  loading = false;
  encaissementSaving = false;
  encaissementDialogVisible = false;

  encaissementForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  selectedFacture: FactureVente | null = null;

  canEncaissement = false;

  statutOptions = [
    { label: 'Toutes', value: null },
    { label: 'Impayées', value: 'impayee' },
    { label: 'Partielles', value: 'partiel' },
    { label: 'Payées', value: 'payee' },
    { label: 'Annulées', value: 'annulee' },
  ];
  selectedStatut: StatutFacture | null = null;

  constructor(
    private fb: FormBuilder,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private location: Location
  ) {
    this.canEncaissement = this.authService.hasPermission('encaissements.create');
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.initEncaissementForm();
    this.loadFactures();
  }

  private initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
  }

  loadFactures() {
    this.loading = true;
    const params = this.selectedStatut ? { statut: this.selectedStatut } : undefined;
    this.factureService.getFactures(params).subscribe({
      next: (resp) => {
        this.factures.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, 'charger les factures');
      },
    });
  }

  onStatutChange() {
    this.loadFactures();
  }

  goDetail(id: number) {
    this.router.navigate(['/ventes/factures', id]);
  }

  // ── Encaissement ──────────────────────────────────────────────────────

  canAddEncaissement(f: FactureVente): boolean {
    return this.canEncaissement && f.statut_facture !== 'payee' && f.statut_facture !== 'annulee';
  }

  openEncaissementDialog(facture: FactureVente) {
    this.selectedFacture = facture;
    this.initEncaissementForm();
    this.encaissementForm.patchValue({ montant: facture.montant_restant });
    this.encaissementDialogVisible = true;
  }

  isInvalid(name: string): boolean {
    const c = this.encaissementForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.selectedFacture || this.encaissementSaving) return;

    const v = this.encaissementForm.value;
    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: this.selectedFacture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement as ModePaiement,
      date_encaissement: this.formatDateIso(v.date_encaissement),
      note: v.note || undefined,
    };

    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementSaving = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Encaissement enregistré.',
          life: 3000,
        });
        this.loadFactures();
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.showApiError(err, "enregistrer l'encaissement");
      },
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }

  getStatutSeverity(s: StatutFacture) {
    return STATUT_FACTURE_SEVERITY[s] ?? 'info';
  }

  formatDateDisplay(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  formatDateIso(d: Date | string): string {
    if (!d) return '';
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toISOString().split('T')[0];
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
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
      401: 'Session expirée', 403: 'Accès refusé', 404: 'Introuvable', 409: 'Conflit', 0: 'Serveur inaccessible',
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
