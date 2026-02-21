import { Component, OnInit, Output, EventEmitter, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  ComptabiliteFilters,
  PreviewFacturePacking,
  StoreFacturePackingDto,
} from '@/models/facture-packing.model';
import { pipe } from 'rxjs';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

interface Column {
  field: string;
  header: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
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
    PhoneFormatPipe,
  ],
  providers: [MessageService],
})
export class ComptabilitePackingTableau implements OnInit {
  @Output() dataChanged = new EventEmitter<ComptabiliteFilters>();

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

  // Dialog prévisualisation
  previewDialog: boolean = false;
  previewData: PreviewFacturePacking | null = null;
  previewLoading: boolean = false;

  // Facturation
  facturerLoading: boolean = false;

  @ViewChild('dt') dt!: Table;
  exportColumns!: ExportColumn[];
  cols!: Column[];

  // Mobile list
  mobileSearchTerm = '';
  readonly mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;

  constructor(
    private router: Router,
    private factureService: FacturePaiementService,
    private messageService: MessageService,
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
      filters.date_debut = this.formatDate(this.filtrePeriodeDebut);
    }
    if (this.filtrePeriodeFin) {
      filters.date_fin = this.formatDate(this.filtrePeriodeFin);
    }

    this.factureService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.comptaSummary = new ComptabiliteSummary(response.data);
        this.applyStatutFilter();
        this.loading = false;
        this.dataChanged.emit(filters);
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
    this.mobileVisibleCount = this.mobilePageSize;
    if (this.filtreStatut) {
      this.prestataires.set(
        this.comptaSummary.prestataires.filter(p => p.statut === this.filtreStatut)
      );
    } else {
      this.prestataires.set(this.comptaSummary.prestataires);
    }
  }

  /** Appelé depuis le parent (liste mobile) pour le filtre statut */
  applyMobileStatut(value: string | null) {
    this.filtreStatut = value;
    this.applyStatutFilter();
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
      date_debut: periodeDebut,
      date_fin: periodeFin,
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

  formatDateDisplay(dateStr: string | null | undefined): string {
    if (dateStr == null || dateStr === '') return '';
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

  getInitials(nomComplet?: string): string {
    if (!nomComplet || !nomComplet.trim()) {
      return '--';
    }

    const parts = nomComplet.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  get mobileFilteredPrestataires(): ComptabilitePrestataire[] {
    const list = this.prestataires();
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term) return list;
    return list.filter(
      (p) =>
        (p.prestataire_nom || '').toLowerCase().includes(term) ||
        (p.prestataire_phone || '').replace(/\s/g, '').includes(term.replace(/\s/g, ''))
    );
  }

  get mobileVisiblePrestataires(): ComptabilitePrestataire[] {
    return this.mobileFilteredPrestataires.slice(0, this.mobileVisibleCount);
  }

  get canLoadMoreMobile(): boolean {
    return this.mobileVisibleCount < this.mobileFilteredPrestataires.length;
  }

  onMobileSearchChange() {
    this.mobileVisibleCount = this.mobilePageSize;
  }

  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }

  trackByPrestataireId(_index: number, p: ComptabilitePrestataire): number {
    return p.prestataire_id;
  }

  getStatutLabel(statut: string): string {
    return statut === 'impaye' ? 'Impayé' : statut === 'partiel' ? 'Partiel' : 'Soldé';
  }
}
