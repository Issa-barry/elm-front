import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { Prestataire, PrestataireType } from '@/models/prestataire.model';
import { PrestataireService } from '@/services/prestataire/prestataire.service';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';


@Component({
  selector: 'app-prestateurs',
  standalone: true,
  providers: [MessageService, ConfirmationService],
  templateUrl: './prestateurs.html',
  styleUrl: './prestateurs.scss',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    IconField,
    InputIcon,
    TagModule,
    TooltipModule,
    SelectModule,
    ConfirmDialogModule,
    PhoneFormatPipe
  ],
})
export class Prestateurs implements OnInit {
  prestataires: Prestataire[] = [];
  selectedPrestataire: Prestataire | null = null;
  loading = false;
  selectedStatus: boolean | null = null;

  statusOptions = [
    { label: 'Actif', value: true },
    { label: 'Inactif', value: false }
  ];

  canCreate = false;
  canUpdate = false;
  canDelete = false;

  constructor(
    private prestataireService: PrestataireService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {
    this.canCreate = this.authService.hasPermission('prestataires.create');
    this.canUpdate = this.authService.hasPermission('prestataires.update');
    this.canDelete = this.authService.hasPermission('prestataires.delete');
  }

  ngOnInit() {
    this.loadPrestataires();
  }

  /**
   * Charger la liste des prestataires
   */
  loadPrestataires() {
    this.loading = true;

    const filters = this.selectedStatus !== null
      ? { is_active: this.selectedStatus }
      : undefined;

    this.prestataireService.getPrestataires(filters).subscribe({
      next: (response) => {
        if (response.success) {
          // Gérer pagination ou liste simple
          this.prestataires = Array.isArray(response.data)
            ? response.data
            : response.data.data;
        }
        console.log(response);
        
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des prestataires:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les prestataires'
        });
        this.loading = false;
      }
    });
  }

  /**
   * Recherche globale dans le tableau
   */
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  /**
   * Filtrer par statut
   */
  filterByStatus() {
    this.loadPrestataires();
  }

  /**
   * Naviguer vers la création d'un prestataire
   */
  navigateToCreate() {
    this.router.navigate(['contacts/prestateurs/new']);
  }

  /**
   * Sélection d'une ligne - navigation vers l'édition
   */
  onRowSelect(event: any) {
    this.router.navigate(['contacts/prestateurs/edit', event.data.id]);
  }

  /**
   * Voir les détails d'un prestataire
   */
  goToEdit(event: Event, prestataireId: number) {
    event.stopPropagation();
    this.router.navigate(['contacts/prestateurs/edit/', prestataireId]);
  }

  /**
   * Basculer le statut actif/inactif
   */
  toggleStatus(event: Event, prestataireId: number) {
    event.stopPropagation();

    const prestataire = this.prestataires.find(p => p.id === prestataireId);
    const action = prestataire?.is_active ? 'désactiver' : 'activer';

    this.confirmationService.confirm({
      message: `Voulez-vous vraiment ${action} ce prestataire ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.prestataireService.togglePrestataireStatus(prestataireId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: response.message
              });
              this.loadPrestataires();
            }
          },
          error: (error) => {
            console.error('Erreur:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de changer le statut du prestataire'
            });
          }
        });
      }
    });
  }

  /**
   * Supprimer un prestataire
   */
  deletePrestataire(event: Event, prestataireId: number) {
    event.stopPropagation();

    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer ce prestataire ? Cette action est irréversible.',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui, supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.prestataireService.deletePrestataire(prestataireId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: 'Prestataire supprimé avec succès'
              });
              this.loadPrestataires();
            }
          },
          error: (error) => {
            console.error('Erreur:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de supprimer le prestataire'
            });
          }
        });
      }
    });
  }

  /**
   * Obtenir les initiales du nom complet
   */
  getInitials(nomComplet: string): string {
    if (!nomComplet) return '??';

    const parts = nomComplet.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return nomComplet.substring(0, 2).toUpperCase();
  }

  /**
   * Formater le numéro de téléphone
   */
  formatPhone(phone: string): string {
    if (!phone) return '-';

    // Supprimer le code pays s'il existe au début (1-3 chiffres après +)
    const cleanPhone = phone.replace(/^\+\d{1,3}/, '').trim();

    // Formater par groupe de 2 chiffres
    return cleanPhone.replace(/(\d{2})(?=\d)/g, '$1 ');
  }

  /**
   * Obtenir la couleur du tag selon le type
   */
  getTypeSeverity(type: PrestataireType | null): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    const severities: Record<PrestataireType, 'success' | 'info' | 'warn' | 'danger'> = {
      'machiniste': 'info',
      'mecanicien': 'warn',
      'consultant': 'success',
      'fournisseur': 'danger'
    };
    return type ? severities[type] : 'secondary';
  }
}
