import { Component, OnInit, Output, EventEmitter, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { InputNumberModule } from 'primeng/inputnumber';

import { FacturePaiementService } from '@/services/comptabilite/facture-paiement/facture-paiement.service';
import {
  ComptabilitePrestataire,
  ComptabiliteSummary,
  PreviewFacturePacking,
  StoreFacturePackingDto,
  StoreVersementDto,
  FacturePacking, 
  Versement,
  VersementIndexResponse,
  ModePaiement,
  MODE_PAIEMENT_LABELS,
} from '@/models/facture-packing.model';

interface Column {
  field: string;
  header: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

interface ModePaiementOption {
  label: string;
  value: ModePaiement;
}

@Component({
  selector: 'app-comptabilite-packing-tableau',
  templateUrl: './comptabilite-packing-tableau.html',
  styleUrl: './comptabilite-packing-tableau.scss',
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
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    DatePickerModule,
    TextareaModule,
    TooltipModule,
    InputNumberModule,
    ToggleSwitchModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class ComptabilitePackingTableau implements OnInit {
  @Output() dataChanged = new EventEmitter<void>();

  filterFields: string[] = ['prestataire_nom', 'prestataire_phone', 'montant_total_du'];

  prestataires = signal<ComptabilitePrestataire[]>([]);
  selectedPrestataires: ComptabilitePrestataire[] | null = null;
  comptaSummary: ComptabiliteSummary | null = null;
  loading: boolean = false;

  // Filtres période
  filtrePeriodeDebut: Date | null = null;
  filtrePeriodeFin: Date | null = null;

  // Filtre statut
  filtreStatut: string | null = null;
  statutOptions = [
    { label: 'Tous', value: null },
    { label: 'Impayé', value: 'impaye' },
    { label: 'Partiel', value: 'partiel' },
    { label: 'Soldé', value: 'solde' },
  ];

  selectedItem: ComptabilitePrestataire | null = null;

  modesPaiement: ModePaiementOption[] = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
  ];

  // Dialog prévisualisation
  previewDialog: boolean = false;
  previewData: PreviewFacturePacking | null = null;
  previewLoading: boolean = false;

  // Dialog paiement (unifié)
  versementDialog: boolean = false;
  facturerLoading: boolean = false;
  allFacturesPrestataire: FacturePacking[] = [];
  facturesPrestataire: FacturePacking[] = [];
  showFacturesPayees: boolean = false;
  selectedFacture: FacturePacking | null = null;
  versementData: {
    montant: number | null;
    date_versement: Date | null;
    mode_paiement: ModePaiement;
    notes: string;
  } = {
    montant: null,
    date_versement: null,
    mode_paiement: 'especes',
    notes: '',
  };
  versementLoading: boolean = false;
  versementSaving: boolean = false;
  versementSubmitted: boolean = false;

  // Dialog historique versements
  historiqueDialog: boolean = false;
  historiqueData: VersementIndexResponse | null = null;
  historiqueLoading: boolean = false;

  @ViewChild('dt') dt!: Table;
  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private router: Router,
    private factureService: FacturePaiementService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadComptabilite();
    this.initColumns();
  }

  initColumns() {
    this.cols = [
      { field: 'prestataire_nom', header: 'Prestataire' },
      { field: 'prestataire_phone', header: 'Téléphone' },
      { field: 'nb_packings_non_factures', header: 'Non facturés' },
      { field: 'montant_non_facture', header: 'Mnt non facturé' },
      { field: 'montant_facture', header: 'Facturé' },
      { field: 'montant_verse', header: 'Versé' },
      { field: 'montant_restant_facture', header: 'Reste facture' },
      { field: 'montant_total_du', header: 'Total dû' },
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  loadComptabilite() {
    this.loading = true;
    const filters: any = {};

    if (this.filtrePeriodeDebut) {
      filters.periode_debut = this.formatDate(this.filtrePeriodeDebut);
    }
    if (this.filtrePeriodeFin) {
      filters.periode_fin = this.formatDate(this.filtrePeriodeFin);
    }

    this.factureService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.comptaSummary = new ComptabiliteSummary(response.data);
        this.applyStatutFilter();
        this.loading = false;
        this.dataChanged.emit();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger la comptabilité',
          life: 3000,
        });
        this.loading = false;
      },
    });
  }

  applyStatutFilter() {
    if (!this.comptaSummary) return;
    if (this.filtreStatut) {
      this.prestataires.set(
        this.comptaSummary.prestataires.filter(p => p.statut === this.filtreStatut)
      );
    } else {
      this.prestataires.set(this.comptaSummary.prestataires);
    }
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openPreview(item: ComptabilitePrestataire) {
    const periodeDebut = this.filtrePeriodeDebut ? this.formatDate(this.filtrePeriodeDebut) : '2000-01-01';
    const periodeFin = this.filtrePeriodeFin ? this.formatDate(this.filtrePeriodeFin) : '2099-12-31';

    this.selectedItem = item;
    this.previewDialog = true;
    this.previewLoading = true;
    this.previewData = null;

    this.factureService.getPreview(item.prestataire_id, periodeDebut, periodeFin).subscribe({
      next: (response) => {
        this.previewData = new PreviewFacturePacking(response.data);
        this.previewLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger la prévisualisation',
          life: 3000,
        });
        this.previewLoading = false;
        this.previewDialog = false;
      },
    });
  }

  // ========================= Facturation =========================

  facturerNonFactures() {
    if (!this.selectedItem || this.facturerLoading) return;

    this.facturerLoading = true;

    const periodeDebut = this.filtrePeriodeDebut ? this.formatDate(this.filtrePeriodeDebut) : '2000-01-01';
    const periodeFin = this.filtrePeriodeFin ? this.formatDate(this.filtrePeriodeFin) : '2099-12-31';

    const dto: StoreFacturePackingDto = {
      prestataire_id: this.selectedItem.prestataire_id,
      periode_debut: periodeDebut,
      periode_fin: periodeFin,
    };

    this.factureService.createFacture(dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: `Facture ${response.data.reference} créée`,
          life: 3000,
        });
        this.facturerLoading = false;
        if (this.selectedItem) {
          this.selectedItem.nb_packings_non_factures = 0;
          this.selectedItem.montant_non_facture = 0;
        }
        this.reloadFacturesInDialog();
        this.loadComptabilite();
      },
      error: (error) => {
        const msg = error?.error?.message || 'Impossible de créer la facture';
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.facturerLoading = false;
      },
    });
  }

  reloadFacturesInDialog() {
    if (!this.selectedItem) return;
    this.factureService.getFactures({ prestataire_id: this.selectedItem.prestataire_id }).subscribe({
      next: (response) => {
        this.allFacturesPrestataire = (response.data || []).map((p: any) => new FacturePacking(p));
        this.applyFacturesFilter();
        if (this.facturesPrestataire.length > 0) {
          this.selectedFacture = this.facturesPrestataire[0];
        }
      },
    });
  }

  applyFacturesFilter() {
    if (this.showFacturesPayees) {
      this.facturesPrestataire = [...this.allFacturesPrestataire];
    } else {
      this.facturesPrestataire = this.allFacturesPrestataire
        .filter((f: FacturePacking) => f.statut === 'impayee' || f.statut === 'partielle');
    }
  }

  onToggleShowPayees() {
    const previousSelected = this.selectedFacture;
    this.applyFacturesFilter();
    if (previousSelected && this.facturesPrestataire.find(f => f.id === previousSelected.id)) {
      this.selectedFacture = this.facturesPrestataire.find(f => f.id === previousSelected.id)!;
    } else if (this.facturesPrestataire.length > 0) {
      this.selectedFacture = this.facturesPrestataire[0];
      this.onFactureChange();
    } else {
      this.selectedFacture = null;
    }
  }

  // ========================= Versements =========================

  openVersement(item: ComptabilitePrestataire) {
    this.selectedItem = item;
    this.selectedFacture = null;
    this.versementDialog = true;
    this.versementLoading = true;
    this.versementSubmitted = false;
    this.showFacturesPayees = false;
    this.allFacturesPrestataire = [];
    this.facturesPrestataire = [];
    this.resetVersementForm();

    this.factureService.getFactures({ prestataire_id: item.prestataire_id }).subscribe({
      next: (response) => {
        this.allFacturesPrestataire = (response.data || []).map((p: any) => new FacturePacking(p));
        this.applyFacturesFilter();
        if (this.facturesPrestataire.length > 0) {
          this.selectedFacture = this.facturesPrestataire[0];
          this.versementData.montant = this.selectedFacture.montant_restant;
        }
        this.versementLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les factures',
          life: 3000,
        });
        this.versementLoading = false;
        this.versementDialog = false;
      },
    });
  }

  resetVersementForm() {
    this.versementData = {
      montant: null,
      date_versement: new Date(),
      mode_paiement: 'especes',
      notes: '',
    };
    this.versementSubmitted = false;
  }

  onFactureChange() {
    if (this.selectedFacture) {
      this.versementData.montant = this.selectedFacture.montant_restant;
    }
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
        this.loadComptabilite();
      },
      error: (error) => {
        const msg = error?.error?.message || 'Impossible d\'enregistrer le versement';
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
            // Recharger l'historique
            if (this.historiqueData) {
              this.openHistorique({ id: factureId } as FacturePacking);
            }
            this.loadComptabilite();
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

  goToDetail(item: ComptabilitePrestataire) {
    this.router.navigate(['/comptabilite/comptabilite-packing-detail', item.prestataire_id], {
      queryParams: {
        prestataire_nom: item.prestataire_nom,
        prestataire_phone: item.prestataire_phone,
      },
    });
  }
}
