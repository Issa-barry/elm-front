import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PackingModel } from '@/models/packing-model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DatePicker } from 'primeng/datepicker';
import { TooltipModule } from 'primeng/tooltip';
import { MoneyPipe } from '@/pipes/money.pipe';
import { SelectModule } from 'primeng/select';

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
  packings: PackingModel[] = [];
  allPackings: PackingModel[] = []; // Stocker tous les packings
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
    { label: 'Annulé', value: 'annule' }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadPackings();
  }

  loadPackings(): void {
    this.loading = true;

    // TODO: Remplacer par votre service API avec filtres
    // this.packingService.getAll(this.dateDebutFilter, this.dateFinFilter, this.statutFilter).subscribe({
    //   next: (data) => {
    //     this.allPackings = data;
    //     this.applyFilters();
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     this.handleError('Erreur lors du chargement des packings', error);
    //     this.loading = false;
    //   }
    // });

    // Données de test
    setTimeout(() => {
      this.allPackings = this.getMockPackings();
      this.applyFilters();
      this.loading = false;
    }, 500);
  }

  // Appliquer tous les filtres
  applyFilters(): void {
    let filtered = [...this.allPackings];

    // Filtre par dates
    if (this.dateDebutFilter || this.dateFinFilter) {
      filtered = filtered.filter(packing => {
        const packingDebut = new Date(packing.date_debut!);
        const packingFin = new Date(packing.date_fin!);

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

  // Données de test
  getMockPackings(): PackingModel[] {
    return [
      new PackingModel({
        id: '1',
        contact_id: '1',
        contact: {
          id: '1',
          nom: 'Diallo',
          prenom: 'Mamadou',
          phone: '+224 622 00 00 01',
          ville: 'Conakry',
          quartier: 'Kaloum'
        },
        date_debut: new Date('2025-01-20'),
        date_fin: new Date('2025-01-25'),
        nombre_rouleaux: 150,
        prix_rouleau: 50000,
        montant: 7500000,
        statut: 'en_cours',
        created_at: '2025-01-18T10:00:00'
      }),
      new PackingModel({
        id: '2',
        contact_id: '2',
        contact: {
          id: '2',
          nom: 'Bah',
          prenom: 'Fatoumata',
          phone: '+224 622 00 00 02',
          ville: 'Conakry',
          quartier: 'Matam'
        },
        date_debut: new Date('2025-01-15'),
        date_fin: new Date('2025-01-18'),
        nombre_rouleaux: 200,
        prix_rouleau: 45000,
        montant: 9000000,
        statut: 'termine',
        created_at: '2025-01-14T14:30:00'
      }),
      new PackingModel({
        id: '3',
        contact_id: '3',
        contact: {
          id: '3',
          nom: 'Camara',
          prenom: 'Ibrahima',
          phone: '+224 622 00 00 03',
          ville: 'Conakry',
          quartier: 'Ratoma'
        },
        date_debut: new Date('2025-01-22'),
        date_fin: new Date('2025-01-30'),
        nombre_rouleaux: 300,
        prix_rouleau: 48000,
        montant: 14400000,
        statut: 'en_cours',
        created_at: '2025-01-18T09:15:00'
      }),
      new PackingModel({
        id: '4',
        contact_id: '4',
        contact: {
          id: '4',
          nom: 'Sylla',
          prenom: 'Aissatou',
          phone: '+224 622 00 00 04',
          ville: 'Conakry',
          quartier: 'Dixinn'
        },
        date_debut: new Date('2025-01-10'),
        date_fin: new Date('2025-01-15'),
        nombre_rouleaux: 120,
        prix_rouleau: 52000,
        montant: 6240000,
        statut: 'termine',
        created_at: '2025-01-09T08:30:00'
      }),
      new PackingModel({
        id: '5',
        contact_id: '5',
        contact: {
          id: '5',
          nom: 'Soumah',
          prenom: 'Mohamed',
          phone: '+224 622 00 00 05',
          ville: 'Conakry',
          quartier: 'Kaporo'
        },
        date_debut: new Date('2025-01-25'),
        date_fin: new Date('2025-02-05'),
        nombre_rouleaux: 250,
        prix_rouleau: 47000,
        montant: 11750000,
        statut: 'en_cours',
        created_at: '2025-01-18T11:45:00'
      })
    ];
  }

  // Navigation vers la création
  navigateToNew(): void {
    this.router.navigate(['/packings/packings-new']);
  }

  // Navigation vers l'édition
  navigateToEdit(packing: PackingModel): void {
    this.router.navigate(['/packings/packings-edit/', packing.id]);
  }

  // Voir les détails
  viewDetails(packing: PackingModel): void {
    this.router.navigate(['/packings/packings-edit/', packing.id]);
  }

  // Supprimer un packing
  deletePacking(packing: PackingModel, event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Êtes-vous sûr de vouloir supprimer ce packing de ${packing.contact?.prenom} ${packing.contact?.nom} ?`,
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

  confirmDelete(packing: PackingModel): void {
    this.loading = true;

    setTimeout(() => {
      this.allPackings = this.allPackings.filter(p => p.id !== packing.id);
      this.applyFilters();
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Packing supprimé avec succès',
        life: 3000
      });
      this.loading = false;
    }, 500);
  }

  // Obtenir la sévérité du tag selon le statut
  getStatutSeverity(statut?: string): 'success' | 'info' | 'warn' | 'danger' {
    switch (statut) {
      case 'en_cours':
        return 'info';
      case 'termine':
        return 'success';
      case 'annule':
        return 'danger';
      default:
        return 'warn';
    }
  }

  // Obtenir le label du statut
  getStatutLabel(statut?: string): string {
    switch (statut) {
      case 'en_cours':
        return 'En cours';
      case 'termine':
        return 'Terminé';
      case 'annule':
        return 'Annulé';
      default:
        return 'Inconnu';
    }
  }

  // Calculer le nombre de jours
  calculateDays(packing: PackingModel): number {
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