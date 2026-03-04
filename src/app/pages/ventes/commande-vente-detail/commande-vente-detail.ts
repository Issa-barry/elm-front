import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

import { CommandeVenteService } from '@/services/ventes/commande-vente.service';
import { FactureLivraisonService } from '@/services/livraisons/facture-livraison.service';
import { AuthService } from '@/services/auth/auth.service';
import {
  CommandeVente,
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY,
  StatutFacture,
  MODE_PAIEMENT_OPTIONS,
  StoreEncaissementVenteDto,
} from '@/models/vente.model';

@Component({
  selector: 'app-commande-vente-detail',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    TagModule,
    SkeletonModule,
    ToastModule,
    TooltipModule,
    DialogModule,
    InputNumberModule,
    SelectModule,
    DatePickerModule,
    InputTextModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService],
  templateUrl: './commande-vente-detail.html',
})
export class CommandeVenteDetail implements OnInit {
  commande: CommandeVente | null = null;
  loading = false;
  get canUpdate(): boolean { return this.authService.hasPermission('commandes.update'); }
  get canEncaissement(): boolean { return this.authService.hasPermission('encaissements.create'); }

  encaissementDialogVisible = false;
  savingEncaissement = false;
  encaissementForm!: FormGroup;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private commandeService: CommandeVenteService,
    private factureService: FactureLivraisonService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.initEncaissementForm();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/notfound']);
      return;
    }
    this.loadCommande(id);
  }

  private initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ['especes', Validators.required],
      date_encaissement: [new Date(), Validators.required],
      note: [''],
    });
  }

  loadCommande(id: number) {
    this.loading = true;
    this.commandeService.getCommande(id).subscribe({
      next: (resp) => {
        this.commande = resp.data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: err.status === 404 ? 'Introuvable' : 'Erreur',
          detail: err.status === 404
            ? "Cette commande n'existe pas ou a été supprimée."
            : 'Impossible de charger la commande.',
          life: 4000,
        });
        setTimeout(() => this.router.navigate(['/ventes/commandes']), 2500);
      },
    });
  }

  get isLocked(): boolean {
    return (this.commande?.facture?.montant_encaisse ?? 0) > 0;
  }

  get progressPct(): number {
    if (!this.commande?.facture) return 0;
    const net = parseFloat(String(this.commande.facture.montant_net));
    if (!net) return 0;
    return Math.min(100, Math.round((this.commande.facture.montant_encaisse / net) * 100));
  }

  get canEncaisserFacture(): boolean {
    if (!this.commande?.facture) return false;
    return (
      this.canEncaissement &&
      this.commande.facture.statut_facture !== 'payee' &&
      this.commande.facture.statut_facture !== 'annulee'
    );
  }

  openEncaissementDialog() {
    this.initEncaissementForm();
    this.encaissementDialogVisible = true;
  }

  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || this.savingEncaissement) return;
    if (!this.commande?.facture?.id) return;

    const v = this.encaissementForm.value;
    const date = v.date_encaissement instanceof Date
      ? v.date_encaissement.toISOString().split('T')[0]
      : String(v.date_encaissement);

    const dto: StoreEncaissementVenteDto = {
      facture_vente_id: this.commande.facture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: date,
      note: v.note || undefined,
    };

    this.savingEncaissement = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.savingEncaissement = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Paiement enregistré',
          detail: 'Le paiement a été enregistré avec succès.',
          life: 3000,
        });
        this.loadCommande(this.commande!.id);
      },
      error: (err) => {
        this.savingEncaissement = false;
        if (err.status === 422 && err.error?.errors) {
          const msgs = Object.values(err.error.errors).flat() as string[];
          msgs.forEach(m =>
            this.messageService.add({ severity: 'error', summary: 'Erreur de validation', detail: m, life: 5000 })
          );
          return;
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: err.error?.message ?? "Impossible d'enregistrer le paiement.",
          life: 5000,
        });
      },
    });
  }

  isEncaissInvalid(name: string): boolean {
    const c = this.encaissementForm.get(name)!;
    return c.invalid && (c.dirty || c.touched);
  }

  goBack() {
    this.router.navigate(['/ventes/commandes']);
  }

  goEdit() {
    this.router.navigate(['/ventes/commandes'], { queryParams: { edit: this.commande?.id } });
  }

  goFacture() {
    if (this.commande?.facture?.id) {
      this.router.navigate(['/ventes/factures', this.commande.facture.id]);
    }
  }

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

  getStatutColor(s: StatutFacture): 'surface' | 'orange' | 'green' | 'red' {
    const map: Record<StatutFacture, 'surface' | 'orange' | 'green' | 'red'> = {
      impayee: 'red',
      partiel: 'orange',
      payee: 'green',
      annulee: 'surface',
    };
    return map[s] ?? 'surface';
  }

  getStatutIcon(s: StatutFacture): string {
    const map: Record<StatutFacture, string> = {
      impayee: 'pi-clock',
      partiel: 'pi-chart-pie',
      payee: 'pi-check',
      annulee: 'pi-times',
    };
    return map[s] ?? 'pi-circle';
  }

  getModeLabel(mode: string): string {
    const labels: Record<string, string> = {
      especes: 'Espèces',
      mobile_money: 'Mobile Money',
      virement: 'Virement bancaire',
      cheque: 'Chèque',
    };
    return labels[mode] ?? mode;
  }

  getModeIcon(mode: string): string {
    const map: Record<string, string> = {
      especes: 'pi-money-bill',
      mobile_money: 'pi-mobile',
      virement: 'pi-building',
      cheque: 'pi-file',
    };
    return map[mode] ?? 'pi-credit-card';
  }

  totalLignes(): number {
    return (this.commande?.lignes ?? []).reduce((sum, l) => sum + parseFloat(String(l.total_ligne ?? 0)), 0);
  }
}
