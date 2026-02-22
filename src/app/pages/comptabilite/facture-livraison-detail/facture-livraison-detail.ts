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

import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  FactureLivraison,
  CommissionCalcul,
  FACTURE_LIV_STATUT_LABELS,
  FACTURE_LIV_STATUT_SEVERITY,
  FactureLivraisonStatut,
  MODE_PAIEMENT_OPTIONS,
  PaiementCommissionDto,
} from '@/models/livraison.model';

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
  ],
  providers: [MessageService],
  templateUrl: './facture-livraison-detail.html',
})
export class FactureLivraisonDetail implements OnInit {
  facture: FactureLivraison | null = null;
  commission: CommissionCalcul | null = null;

  loading = false;
  commissionLoading = false;
  payerLoading = false;

  commissionDialogVisible = false;
  commissionForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;

  canCommission = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.canCommission = this.authService.hasPermission('commissions.create');
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/notfound']);
      return;
    }
    this.initCommissionForm();
    this.loadFacture(id);
  }

  private initCommissionForm() {
    this.commissionForm = this.fb.group({
      mode_paiement: ['especes', Validators.required],
      notes: [''],
    });
  }

  loadFacture(id: number) {
    this.loading = true;
    this.factureService.getFacture(id).subscribe({
      next: (resp) => {
        this.facture = resp.data;
        this.loading = false;
        if (resp.data.commission) {
          this.commission = resp.data.commission;
        }
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: err.status === 404
            ? 'Cette facture n\'existe pas ou a été supprimée.'
            : this.httpErrorDetail(err, 'charger la facture'),
          life: 4000,
        });
        setTimeout(() => this.router.navigate(['/comptabilite/factures-livraison']), 2500);
      },
    });
  }

  calculerCommission() {
    if (!this.facture) return;
    this.commissionLoading = true;
    this.factureService.getCommissionCalcul(this.facture.id).subscribe({
      next: (resp) => {
        this.commission = resp.data;
        this.commissionLoading = false;
      },
      error: (err) => {
        this.commissionLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, 'calculer la commission'),
          life: 4000,
        });
      },
    });
  }

  openPayerDialog() {
    this.initCommissionForm();
    this.commissionDialogVisible = true;
  }

  onPayerCommission() {
    this.commissionForm.markAllAsTouched();
    if (this.commissionForm.invalid || !this.facture || this.payerLoading) return;

    const dto: PaiementCommissionDto = {
      mode_paiement: this.commissionForm.value.mode_paiement,
      notes: this.commissionForm.value.notes || undefined,
    };

    this.payerLoading = true;
    this.factureService.payerCommission(this.facture.id, dto).subscribe({
      next: () => {
        this.payerLoading = false;
        this.commissionDialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Commission payée',
          detail: 'Le paiement de la commission a été enregistré.',
          life: 4000,
        });
        // Recharger pour récupérer la commission à jour
        this.loadFacture(this.facture!.id);
      },
      error: (err) => {
        this.payerLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, 'enregistrer le paiement de la commission'),
          life: 5000,
        });
      },
    });
  }

  goBack() {
    this.router.navigate(['/comptabilite/factures-livraison']);
  }

  // ── Règle métier : le bouton "Payer commission" est actif uniquement
  //   si la facture est entièrement payée ET la commission pas encore réglée
  get canPayCommission(): boolean {
    return (
      this.facture?.statut === 'payee' &&
      this.commission !== null &&
      this.commission?.est_payee === false
    );
  }

  getStatutLabel(s: FactureLivraisonStatut): string {
    return FACTURE_LIV_STATUT_LABELS[s] ?? s;
  }

  getStatutSeverity(s: FactureLivraisonStatut) {
    return FACTURE_LIV_STATUT_SEVERITY[s] ?? 'info';
  }

  formatMontant(n: number | undefined | null): string {
    if (n == null) return '—';
    return new Intl.NumberFormat('fr-FR').format(n) + ' GNF';
  }

  formatDate(d: string | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR');
  }

  get progressPct(): number {
    if (!this.facture?.montant || !this.facture.montant_encaisse) return 0;
    return Math.min(100, Math.round((this.facture.montant_encaisse / this.facture.montant) * 100));
  }

  private httpErrorSummary(err: any): string {
    if (err.status === 401) return 'Session expirée';
    if (err.status === 403) return 'Accès refusé';
    if (err.status === 404) return 'Introuvable';
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
