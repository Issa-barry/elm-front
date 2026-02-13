import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { StyleClassModule } from 'primeng/styleclass';

import { FacturePaiementService } from '@/services/comptabilite/facture-paiement/facture-paiement.service';
import {
  FacturePacking,
  Versement,
  VersementIndexResponse,
  StoreVersementDto,
  ModePaiement,
  MODE_PAIEMENT_LABELS,
  FACTURE_PACKING_STATUT_SEVERITY,
  FacturePackingStatutSeverity,
} from '@/models/facture-packing.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { ComptabilitePackingPaiement, PaiementPayload } from '../components/comptabilite-packing-paiement/comptabilite-packing-paiement';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ComptabilitePackingPaiementDialog } from '../components/comptabilite-packing-paiement-dialog/comptabilite-packing-paiement-dialog';
import { MoneyPipe } from '@/pipes/money.pipe';

interface ModePaiementOption {
  label: string;
  value: ModePaiement;
}

@Component({
  selector: 'app-comptabilite-packing-detail',
  templateUrl: './comptabilite-packing-detail.html',
  styleUrl: './comptabilite-packing-detail.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    DatePickerModule,
    TextareaModule,
    TooltipModule,
    PhoneFormatPipe,
    StyleClassModule,
    ComptabilitePackingPaiement,
    ComptabilitePackingPaiementDialog,
        RatingModule,
        RadioButtonModule,
        MoneyPipe
 
  ],
  providers: [MessageService, ConfirmationService],
})
export class ComptabilitePackingDetail implements OnInit {
  prestataireId: number = 0;
  prestataireNom: string = '';
  prestatairePhone: string = '';

  factures = signal<FacturePacking[]>([]);
  loading: boolean = false;

  // Totaux 
  
  totalFacture: number = 0;
  totalVerse: number = 0;
  totalRestant: number = 0;

  // Dialog versement
  versementDialog: boolean = false;
  selectedFacture: FacturePacking | null = null;
  versementData: {
    montant: number | null;
    date_versement: Date | null;
    mode_paiement: ModePaiement;
    notes: string;
  } = {
    montant: null,
    date_versement: new Date(),
    mode_paiement: 'especes',
    notes: '',
  };
  versementSaving: boolean = false;
  versementSubmitted: boolean = false;

  modesPaiement: ModePaiementOption[] = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
  ];

  // Dialog historique versements
  historiqueDialog: boolean = false;
  historiqueData: VersementIndexResponse | null = null;
  historiqueLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private factureService: FacturePaiementService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.prestataireId = +params['id'] || 0;
    });
    this.route.queryParams.subscribe((params) => {
      this.prestataireNom = params['prestataire_nom'] || '';
      this.prestatairePhone = params['prestataire_phone'] || '';
    });
    if (this.prestataireId) {
      this.loadFactures();
    }
  }

  loadFactures() {
    this.loading = true;
    this.factureService.getFactures({ prestataire_id: this.prestataireId }).subscribe({
      next: (response) => {
        const data = (response.data || []).map((f: any) => new FacturePacking(f));
        this.factures.set(data);
        this.calculateTotals(data);
        this.loading = false;
        
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les factures',
          life: 3000,
        });
        this.loading = false;
      },
    });
  }

  calculateTotals(factures: FacturePacking[]) {
    this.totalFacture = factures.reduce((sum, f) => sum + f.montant_total, 0);
    this.totalVerse = factures.reduce((sum, f) => sum + f.montant_verse, 0);
    this.totalRestant = factures.reduce((sum, f) => sum + f.montant_restant, 0);
  }

  // ========================= Versement =========================

  openVersement(facture: FacturePacking) {
    this.selectedFacture = facture;
    this.versementDialog = true;
    this.versementSubmitted = false;
    this.versementData = {
      montant: facture.montant_restant,
      date_versement: new Date(),
      mode_paiement: 'especes',
      notes: '',
    };
  }

  hideVersementDialog() {
    this.versementDialog = false;
    this.selectedFacture = null;
    this.versementSubmitted = false;
  }

  saveVersement() {
    this.versementSubmitted = true;

    if (!this.selectedFacture || !this.versementData.montant || !this.versementData.date_versement || this.versementSaving) {
      return;
    }

    this.versementSaving = true;

    const dto: StoreVersementDto = {
      montant: this.versementData.montant,
      date_versement: this.formatDate(this.versementData.date_versement),
      mode_paiement: this.versementData.mode_paiement,
      notes: this.versementData.notes || undefined,
    };

    this.factureService.createVersement(this.selectedFacture.id, dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistré`,
          life: 3000,
        });
        this.versementSaving = false;
        this.versementDialog = false;
        this.loadFactures();
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.versementSaving = false;
      },
    });
  }

  // ========================= Historique versements =========================

  openHistorique(facture: FacturePacking) {
    this.historiqueDialog = true;
    this.historiqueLoading = true;
    this.historiqueData = null;

    this.factureService.getVersements(facture.id).subscribe({
      next: (response) => {
        this.historiqueData = response.data;
        this.historiqueLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les versements',
          life: 3000,
        });
        this.historiqueLoading = false;
        this.historiqueDialog = false;
      },
    });
  }

  confirmDeleteVersement(factureId: number, versement: Versement) {
    this.confirmationService.confirm({
      message: `Supprimer le versement de ${this.formatCurrency(versement.montant)} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.factureService.deleteVersement(factureId, versement.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Versement supprimé',
              life: 3000,
            });
            if (this.historiqueData) {
              this.openHistorique({ id: factureId } as FacturePacking);
            }
            this.loadFactures();
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de supprimer le versement',
              life: 3000,
            });
          },
        });
      },
    });
  }

  confirmDeleteFacture(facture: FacturePacking) {
    this.confirmationService.confirm({
      message: `Supprimer la facture ${facture.reference} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.factureService.deleteFacture(facture.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Facture supprimée',
              life: 3000,
            });
            this.loadFactures();
          },
          error: (error) => {
            const msg = error?.error?.message || 'Impossible de supprimer la facture';
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: msg,
              life: 5000,
            });
          },
        });
      },
    });
  }

  // ========================= Helpers =========================

  getStatutSeverity(statut: string): FacturePackingStatutSeverity {
    return (FACTURE_PACKING_STATUT_SEVERITY as any)[statut] ?? 'info';
  }

  formatDate(date: any): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }

  goBack() {
    this.router.navigate(['/comptabilite/comptabilite-packing-liste']);
  }

  // Slide-over paiement
  slideoverVisible: boolean = false;
  slideoverFacture: FacturePacking | null = null;
  slideoverSaving: boolean = false;

  openSlideoverPaiement(facture: FacturePacking) {
    this.slideoverFacture = facture;
    this.slideoverVisible = true;
  }

  closeSlideoverPaiement() {
    this.slideoverVisible = false;
    this.slideoverFacture = null;
  }

  onSlideoverPay(payload: PaiementPayload) {
    if (!this.slideoverFacture || this.slideoverSaving) return;

    this.slideoverSaving = true;

    const dto: StoreVersementDto = {
      montant: payload.montant,
      date_versement: this.formatDate(new Date()),
      mode_paiement: payload.mode_paiement,
    };

    this.factureService.createVersement(this.slideoverFacture.id, dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistré`,
          life: 3000,
        });
        this.slideoverSaving = false;
        this.closeSlideoverPaiement();
        this.loadFactures();
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.slideoverSaving = false;
      },
    });
  }
}
