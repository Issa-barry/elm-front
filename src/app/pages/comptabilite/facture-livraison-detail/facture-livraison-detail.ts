import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';

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
  selector: 'app-facture-livraison-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    TagModule,
    ToastModule,
    DialogModule,
    SelectModule,
    CardModule,
    SkeletonModule,
    DividerModule,
    TooltipModule,
    InputNumberModule,
    DatePickerModule,
    InputTextModule,
  ],
  providers: [MessageService],
  templateUrl: './facture-livraison-detail.html',
})
export class FactureLivraisonDetail implements OnInit {
  facture: FactureVente | null = null;

  loading = false;
  encaissementSaving = false;
  annulerLoading = false;

  encaissementDialogVisible = false;
  encaissementForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;

  annulerDialogVisible = false;

  get canEncaissement(): boolean { return this.authService.hasPermission('encaissements.create'); }
  get canUpdate(): boolean { return this.authService.hasPermission('factures-livraisons.update'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/notfound']);
      return;
    }
    this.initEncaissementForm();
    this.loadFacture(id);
  }

  private initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
  }

  loadFacture(id: number) {
    this.loading = true;
    this.factureService.getFacture(id).subscribe({
      next: (resp) => {
        this.facture = resp.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail:
            err.status === 404
              ? "Cette facture n'existe pas ou a été supprimée."
              : this.httpErrorDetail(err, 'charger la facture'),
          life: 4000,
        });
        setTimeout(() => this.router.navigate(['/comptabilite/factures-livraison']), 2500);
      },
    });
  }

  // ── Encaissement ──────────────────────────────────────────────────────

  openEncaissementDialog() {
    const restant = this.facture?.montant_restant ?? null;
    this.encaissementForm = this.fb.group({
      montant: [restant || null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
    this.encaissementDialogVisible = true;
  }

  isEncaissementInvalid(name: string): boolean {
    const c = this.encaissementForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.facture || this.encaissementSaving) return;

    const v = this.encaissementForm.value;
    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: this.facture.id,
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
        this.loadFacture(this.facture!.id);
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, "enregistrer l'encaissement"),
          life: 5000,
        });
      },
    });
  }

  // ── Annulation ────────────────────────────────────────────────────────

  openAnnulerDialog() {
    this.annulerDialogVisible = true;
  }

  confirmerAnnulation() {
    if (!this.facture || this.annulerLoading) return;
    this.annulerLoading = true;
    this.factureService.annulerFacture(this.facture.id).subscribe({
      next: () => {
        this.annulerLoading = false;
        this.annulerDialogVisible = false;
        this.messageService.add({
          severity: 'warn',
          summary: 'Facture annulée',
          detail: 'La facture a été annulée avec succès.',
          life: 4000,
        });
        this.loadFacture(this.facture!.id);
      },
      error: (err) => {
        this.annulerLoading = false;
        this.annulerDialogVisible = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, 'annuler la facture'),
          life: 5000,
        });
      },
    });
  }

  goBack() {
    this.router.navigate(['/comptabilite/factures-livraison']);
  }

  // ── Règles métier ─────────────────────────────────────────────────────

  get canAnnuler(): boolean {
    return (
      this.canUpdate &&
      !!this.facture &&
      this.facture.statut_facture === 'impayee'
    );
  }

  get canAddEncaissement(): boolean {
    return (
      this.canEncaissement &&
      !!this.facture &&
      this.facture.statut_facture !== 'payee' &&
      this.facture.statut_facture !== 'annulee'
    );
  }

  // ── Helpers ───────────────────────────────────────────────────────────

  getStatutLabel(s: StatutFacture): string {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }

  getStatutSeverity(s: StatutFacture) {
    return STATUT_FACTURE_SEVERITY[s] ?? 'info';
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  formatDateIso(d: Date | string): string {
    if (!d) return '';
    const date = typeof d === 'string' ? new Date(d) : d;
    return date.toISOString().split('T')[0];
  }

  get progressPct(): number {
    if (!this.facture) return 0;
    const net = parseFloat(this.facture.montant_net);
    if (!net) return 0;
    return Math.min(100, Math.round((this.facture.montant_encaisse / net) * 100));
  }

  private httpErrorSummary(err: any): string {
    if (err.status === 401) return 'Session expirée';
    if (err.status === 403) return 'Accès refusé';
    if (err.status === 404) return 'Introuvable';
    if (err.status === 409) return 'Conflit';
    if (err.status === 0) return 'Serveur inaccessible';
    return `Erreur ${err.status || ''}`.trim();
  }

  private httpErrorDetail(err: any, action: string): string {
    if (err.status === 401) return 'Votre session a expiré. Veuillez vous reconnecter.';
    if (err.status === 403) return `Vous n'avez pas la permission de ${action}.`;
    if (err.status === 404) return 'La ressource demandée est introuvable.';
    if (err.status === 0) return 'Impossible de joindre le serveur. Vérifiez votre connexion réseau.';
    return err.error?.message || `Une erreur inattendue est survenue (${action}).`;
  }
}
