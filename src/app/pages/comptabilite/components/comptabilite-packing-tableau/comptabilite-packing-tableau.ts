import { Component, OnInit, signal, ViewChild } from '@angular/core';
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

import { PackingPaiementService } from '@/services/comptabilite/packing-paiement/packing-paiement.service';
import {
  ComptabilitePrestataire,
  ComptabiliteSummary,
  PreviewPaiementPacking,
  StorePaiementPackingDto,
  ModePaiement,
  MODE_PAIEMENT_LABELS,
} from '@/models/paiement-packing.model';

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
  ],
  providers: [MessageService, ConfirmationService],
})
export class ComptabilitePackingTableau implements OnInit {
  filterFields: string[] = ['prestataire_nom', 'prestataire_phone', 'montant_total_du'];

  prestataires = signal<ComptabilitePrestataire[]>([]);
  selectedPrestataires: ComptabilitePrestataire[] | null = null;
  comptaSummary: ComptabiliteSummary | null = null;
  loading: boolean = false;
  saving: boolean = false;
  submitted: boolean = false;

  // Filtres période
  filtrePeriodeDebut: Date | null = null;
  filtrePeriodeFin: Date | null = null;

  // Dialog paiement
  paiementDialog: boolean = false;
  selectedItem: ComptabilitePrestataire | null = null;
  paiementData: {
    periode_debut: Date | null;
    periode_fin: Date | null;
    date_paiement: Date | null;
    mode_paiement: ModePaiement;
    notes: string;
  } = {
    periode_debut: null,
    periode_fin: null,
    date_paiement: null,
    mode_paiement: 'especes',
    notes: '',
  };

  modesPaiement: ModePaiementOption[] = [
    { label: MODE_PAIEMENT_LABELS.especes, value: 'especes' },
    { label: MODE_PAIEMENT_LABELS.virement, value: 'virement' },
    { label: MODE_PAIEMENT_LABELS.cheque, value: 'cheque' },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: 'mobile_money' },
  ];

  // Dialog prévisualisation
  previewDialog: boolean = false;
  previewData: PreviewPaiementPacking | null = null;
  previewLoading: boolean = false;

  @ViewChild('dt') dt!: Table;
  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private paiementService: PackingPaiementService,
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

    this.paiementService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.comptaSummary = new ComptabiliteSummary(response.data);
        this.prestataires.set(this.comptaSummary.prestataires);
        this.loading = false;
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

  exportCSV() {
    this.dt.exportCSV();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openPaiement(item: ComptabilitePrestataire) {
    this.selectedItem = item;
    this.paiementData = {
      periode_debut: this.filtrePeriodeDebut ? new Date(this.filtrePeriodeDebut) : null,
      periode_fin: this.filtrePeriodeFin ? new Date(this.filtrePeriodeFin) : null,
      date_paiement: new Date(),
      mode_paiement: 'especes',
      notes: '',
    };
    this.submitted = false;
    this.paiementDialog = true;
  }

  hidePaiementDialog() {
    this.paiementDialog = false;
    this.submitted = false;
  }

  savePaiement() {
    this.submitted = true;

    if (!this.selectedItem || !this.paiementData.periode_debut || !this.paiementData.periode_fin || !this.paiementData.date_paiement || this.saving) {
      return;
    }

    this.saving = true;

    const dto: StorePaiementPackingDto = {
      prestataire_id: this.selectedItem.prestataire_id,
      periode_debut: this.formatDate(this.paiementData.periode_debut),
      periode_fin: this.formatDate(this.paiementData.periode_fin),
      date_paiement: this.formatDate(this.paiementData.date_paiement),
      mode_paiement: this.paiementData.mode_paiement,
      notes: this.paiementData.notes || undefined,
    };

    this.paiementService.createPaiement(dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: `Paiement ${response.data.reference} créé avec succès`,
          life: 3000,
        });
        this.paiementDialog = false;
        this.saving = false;
        this.loadComptabilite();
      },
      error: (error) => {
        const msg = error?.error?.message || 'Impossible de créer le paiement';
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: msg,
          life: 5000,
        });
        this.saving = false;
      },
    });
  }

  openPreview(item: ComptabilitePrestataire) {
    const periodeDebut = this.filtrePeriodeDebut ? this.formatDate(this.filtrePeriodeDebut) : '2000-01-01';
    const periodeFin = this.filtrePeriodeFin ? this.formatDate(this.filtrePeriodeFin) : '2099-12-31';

    this.selectedItem = item;
    this.previewDialog = true;
    this.previewLoading = true;
    this.previewData = null;

    this.paiementService.getPreview(item.prestataire_id, periodeDebut, periodeFin).subscribe({
      next: (response) => {
        this.previewData = new PreviewPaiementPacking(response.data);
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
}
