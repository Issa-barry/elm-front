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
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { forkJoin } from 'rxjs';

import { PackingService } from '@/services/packing/packing.service';
import { Packing, CreatePackingDto, UpdatePackingDto, PACKING_STATUT_LABELS, PACKING_STATUT_SEVERITY, PackingStatut } from '@/models/packing.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { Prestataire } from '@/models/prestataire.model';
import { ParametresService } from '@/services/parametres/parametres.service';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

interface StatutOption {
  label: string; 
  value: PackingStatut;
}


@Component({
  selector: 'app-packing-liste',
  standalone: true,
   templateUrl: './packing-liste.html',
  styleUrl: './packing-liste.scss',
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
    AutoCompleteModule,
    TextareaModule,
    TooltipModule,
    SkeletonModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService, ConfirmationService]
})
export class PackingListe implements OnInit {
  filterFields: string[] = ['reference', 'prestataire.nom', 'prestataire.prenom', 'prestataire.phone', 'statut', 'montant'];

  packingDialog: boolean = false;
  packings = signal<Packing[]>([]);
  packing: Partial<Packing> = {};
  selectedPackings: Packing[] | null = null;
  submitted: boolean = false;
  loading: boolean = false;
  saving: boolean = false;
  dialogLoading: boolean = false;

  // Filtres
  filterDateRange: Date[] | null = null;
  filterStatut: string | null = null;

  // Prix rouleau par défaut (depuis les paramètres)
  prixRouleauDefaut: number = 0;

  // Pour l'autocomplete prestataire
  prestataires: Prestataire[] = [];
  filteredPrestataires: Prestataire[] = [];
  selectedPrestataire: Prestataire | null = null;

  statuses: StatutOption[] = [
    { label: 'À valider', value: 'a_valider' },
    { label: 'Validé', value: 'valide' },
    { label: 'Annulé', value: 'annule' }
  ];

  // Permissions
  canCreate: boolean = false;
  canUpdate: boolean = false;
  canDelete: boolean = false;

  @ViewChild('dt') dt!: Table;
  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private packingService: PackingService,
    private prestataireService: PrestataireService,
    private parametresService: ParametresService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {
    this.canCreate = this.authService.hasPermission('packings.create');
    this.canUpdate = this.authService.hasPermission('packings.update');
    this.canDelete = this.authService.hasPermission('packings.delete');
  }

  ngOnInit() {
    this.loadPackings();
    this.loadPrestataires();
    this.loadPrixRouleauDefaut();
    this.initColumns();
  }

  initColumns() {
    this.cols = [
      { field: 'reference', header: 'Référence' },
      { field: 'prestataire', header: 'Prestataire' },
      { field: 'date', header: 'Date' },
      { field: 'nb_rouleaux', header: 'Rouleaux' },
      { field: 'montant', header: 'Montant' },
      { field: 'statut', header: 'Statut' }
    ];

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }

  onDateRangeSelect() {
    if (this.filterDateRange && this.filterDateRange[1]) {
      this.loadPackings();
    }
  }

  onDateFilter() {
    this.loadPackings();
  }

  clearDateFilters() {
    this.filterDateRange = null;
    this.filterStatut = null;
    this.loadPackings();
  }

  loadPackings() {
    this.loading = true;
    const filters: any = {};
    if (this.filterDateRange?.[0]) {
      filters.date_debut = this.formatDate(this.filterDateRange[0]);
    }
    if (this.filterDateRange?.[1]) {
      filters.date_fin = this.formatDate(this.filterDateRange[1]);
    }
    if (this.filterStatut) {
      filters.statut = this.filterStatut;
    }
    this.packingService.getPackings(Object.keys(filters).length ? filters : undefined).subscribe({
      next: (response) => {
        const data = 'data' in response && Array.isArray(response.data)
          ? response.data
          : (response as any).data?.data || [];
        this.packings.set(data);
        this.loading = false;
        console.log(response);
        
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les packings',
          life: 3000
        });
        this.loading = false;
      }
    });
  }

  loadPrixRouleauDefaut() {
    this.parametresService.getPrixRouleauDefaut().subscribe({
      next: (prix) => {
        this.prixRouleauDefaut = prix;
      },
      error: () => {
        this.prixRouleauDefaut = 0;
      }
    });
  }

  loadPrestataires() {
    this.prestataireService.getActivePrestataires().subscribe({
      next: (response) => {
        // Filtrer uniquement les machinistes
        this.prestataires = response.data.filter(p => p.type === 'machiniste');
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les prestataires',
          life: 3000
        });
      }
    });
  }

  filterPrestataire(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.filteredPrestataires = this.prestataires.filter(p =>
      p.nom.toLowerCase().includes(query) ||
      p.prenom.toLowerCase().includes(query) ||
      p.phone.includes(query)
    );
  }

  exportCSV() {
    this.dt.exportCSV();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openNew() {
    this.selectedPrestataire = null;
    this.submitted = false;
    this.packingDialog = true;
    this.dialogLoading = true;

    forkJoin({
      prixRouleauDefaut: this.parametresService.getPrixRouleauDefaut(),
      prestataires: this.prestataireService.getActivePrestataires()
    }).subscribe({
      next: ({ prixRouleauDefaut, prestataires }) => {
        this.prixRouleauDefaut = prixRouleauDefaut;
        this.prestataires = prestataires.data.filter(p => p.type === 'machiniste');
        this.packing = {
          statut: 'valide',
          date: new Date(),
          nb_rouleaux: 0,
          prix_par_rouleau: this.prixRouleauDefaut,
          montant: 0
        };
        this.dialogLoading = false;
      },
      error: () => {
        this.packing = {
          statut: 'valide',
          date: new Date(),
          nb_rouleaux: 0,
          prix_par_rouleau: this.prixRouleauDefaut,
          montant: 0
        };
        this.dialogLoading = false;
      }
    });
  }

  editPacking(packing: Packing) {
    this.packing = {
      ...packing,
      date: packing.date ? new Date(packing.date) : undefined
    };
    this.selectedPrestataire = packing.prestataire || null;
    this.packingDialog = true;
  }

  deletePacking(packing: Packing) {
    this.confirmationService.confirm({
      message: `Êtes-vous sûr de vouloir supprimer le packing ${packing.reference} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.packingService.deletePacking(packing.id).subscribe({
          next: () => {
            this.packings.set(this.packings().filter((p) => p.id !== packing.id));
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Packing supprimé',
              life: 3000
            });
          },
          error: () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de supprimer le packing',
              life: 3000
            });
          }
        });
      }
    });
  }

  deleteSelectedPackings() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer les packings sélectionnés ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Supprimer chaque packing sélectionné
        this.selectedPackings?.forEach(packing => {
          this.packingService.deletePacking(packing.id).subscribe();
        });
        this.packings.set(this.packings().filter((p) => !this.selectedPackings?.includes(p)));
        this.selectedPackings = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Packings supprimés',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.packingDialog = false;
    this.submitted = false;
  }

  savePacking() {
    this.submitted = true;

    if (!this.selectedPrestataire || this.saving) {
      return;
    }

    this.saving = true;

    const packingData: CreatePackingDto | UpdatePackingDto = {
      prestataire_id: this.selectedPrestataire.id,
      date: this.formatDate(this.packing.date),
      nb_rouleaux: this.packing.nb_rouleaux || 0,
      prix_par_rouleau: this.packing.prix_par_rouleau || 0,
      statut: this.packing.statut,
      notes: this.packing.notes ?? undefined
    };

    if (this.packing.id) {
      // Mise à jour
      this.packingService.updatePacking(this.packing.id, packingData).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Packing mis à jour',
            life: 3000
          });
          this.packingDialog = false;
          this.packing = {};
          this.saving = false;
          this.loadPackings();
        },
        error: (err) => {
          this.showApiError(err, 'Impossible de mettre à jour le packing');
          this.saving = false;
        }
      });
    } else {
      // Création
      this.packingService.createPacking(packingData as CreatePackingDto).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Packing créé',
            life: 3000
          });
          this.packingDialog = false;
          this.packing = {};
          this.saving = false;
          this.loadPackings();
        },
        error: (err) => {
          this.showApiError(err, 'Impossible de créer le packing');
          this.saving = false;
        }
      });
    }
  }

  calculateMontant() {
    if (this.packing.nb_rouleaux && this.packing.prix_par_rouleau) {
      this.packing.montant = this.packing.nb_rouleaux * this.packing.prix_par_rouleau;
    }
  }

  formatDate(date: any): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }

  getStatutLabel(statut: PackingStatut): string {
    return PACKING_STATUT_LABELS[statut] || statut;
  }

  getStatutSeverity(statut: PackingStatut): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    return PACKING_STATUT_SEVERITY[statut] || 'info';
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR');
  }

  private showApiError(err: any, fallback: string): void {
    const summary = err.error?.message || fallback;

    if (err.status === 422 && err.error?.errors) {
      const messages = Object.values(err.error.errors).flat() as string[];
      messages.forEach(msg => {
        this.messageService.add({
          severity: 'error',
          summary,
          detail: msg,
          life: 5000
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary,
        detail: '',
        life: 5000
      });
    }
  }
}
