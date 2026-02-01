import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePicker } from 'primeng/datepicker';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { MoneyPipe } from '@/pipes/money.pipe';
import { PackingService } from '@/services/packing/packing.service';
import { Packing, PackingStatut, PACKING_STATUT_LABELS, PACKING_STATUT_SEVERITY } from '@/models/packing.model';

interface StatutOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-packing-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    DatePicker,
    MoneyPipe,
    TooltipModule,
    SelectModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './packing-liste.html',
  styleUrl: './packing-liste.scss',
})
export class PackingListe implements OnInit {
  packings: Packing[] = [];
  allPackings: Packing[] = [];
  loading = false;
  searchValue = '';

  // Filtres
  dateDebutFilter: Date | null = null;
  dateFinFilter: Date | null = null;
  statutFilter: string | null = null;

  // Options de statut
  statutOptions: StatutOption[] = [
    { label: 'Tous', value: '' },
    { label: 'En cours', value: 'en_cours' },
    { label: 'Terminé', value: 'termine' },
    { label: 'Payé', value: 'paye' },
    { label: 'Annulé', value: 'annule' }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private packingService: PackingService
  ) {}

  ngOnInit(): void {
    this.loadPackings();
  }

  loadPackings(): void {
    this.loading = true;

    this.packingService.getPackings().subscribe({
      next: (response) => {
        const data = 'data' in response && Array.isArray(response.data)
          ? response.data
          : (response as any).data?.data || [];
        this.allPackings = data;
        this.applyFilters();
        this.loading = false;
      },
      error: (error) => {
        this.handleError('Erreur lors du chargement des packings', error);
        this.loading = false;
      }
    });
  }

  // Appliquer tous les filtres
  applyFilters(): void {
    let filtered = [...this.allPackings];

    // Filtre par dates
    if (this.dateDebutFilter || this.dateFinFilter) {
      filtered = filtered.filter(packing => {
        const packingDebut = new Date(packing.date_debut);
        const packingFin = new Date(packing.date_fin);

        let matchDebut = true;
        let matchFin = true;

        if (this.dateDebutFilter) {
          matchDebut = packingDebut >= this.dateDebutFilter;
        }

        if (this.dateFinFilter) {
          matchFin = packingFin <= this.dateFinFilter;
        }

        return matchDebut && matchFin;
      });
    }

    // Filtre par statut
    if (this.statutFilter && this.statutFilter !== '') {
      filtered = filtered.filter(packing => packing.statut === this.statutFilter);
    }

    this.packings = filtered;
  }

  // Événement déclenché lors du changement de filtre
  onFilterChange(): void {
    this.applyFilters();
  }

  // Réinitialiser les filtres
  resetFilters(): void {
    this.dateDebutFilter = null;
    this.dateFinFilter = null;
    this.statutFilter = null;
    this.searchValue = '';
    this.applyFilters();
  }

  // Navigation vers la création
  navigateToNew(): void {
    this.router.navigate(['/packings/packings-new']);
  }

  // Navigation vers l'édition
  navigateToEdit(packing: Packing): void {
    this.router.navigate(['/packings/packings-edit/', packing.id]);
  }

  // Voir les détails
  viewDetails(packing: Packing): void {
    this.router.navigate(['/packings/packings-edit/', packing.id]);
  }

  // Supprimer un packing
  deletePacking(packing: Packing, event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Êtes-vous sûr de vouloir supprimer ce packing de ${packing.prestataire?.prenom} ${packing.prestataire?.nom} ?`,
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui, supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.confirmDelete(packing);
      }
    });
  }

  confirmDelete(packing: Packing): void {
    this.loading = true;

    this.packingService.deletePacking(packing.id).subscribe({
      next: () => {
        this.allPackings = this.allPackings.filter(p => p.id !== packing.id);
        this.applyFilters();
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Packing supprimé avec succès',
          life: 3000
        });
        this.loading = false;
      },
      error: (error) => {
        this.handleError('Erreur lors de la suppression', error);
        this.loading = false;
      }
    });
  }

  // Obtenir la sévérité du tag selon le statut
  getStatutSeverity(statut: PackingStatut): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    return PACKING_STATUT_SEVERITY[statut] || 'info';
  }

  // Obtenir le label du statut
  getStatutLabel(statut: PackingStatut): string {
    return PACKING_STATUT_LABELS[statut] || statut;
  }

  // Calculer le nombre de jours
  calculateDays(packing: Packing): number {
    if (!packing.date_debut || !packing.date_fin) {
      return 0;
    }

    const debut = new Date(packing.date_debut);
    const fin = new Date(packing.date_fin);
    const diffTime = Math.abs(fin.getTime() - debut.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays + 1;
  }

  // Filtrer globalement
  onGlobalFilter(table: any, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Gestion des erreurs
  private handleError(message: string, error?: any): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: message,
      life: 5000
    });
    console.error('Erreur:', error);
  }
}
