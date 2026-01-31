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

 import { User } from '@/models/user.model';
import { CustomerService } from '@/pages/service/customer.service';
import { UserService } from '@/services/users/users.service';


@Component({
  selector: 'app-prestateurs',
  standalone: true,
  providers: [CustomerService, MessageService, ConfirmationService],
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
    ConfirmDialogModule
  ],
})
export class Prestateurs implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  loading = false;
  selectedStatus: boolean | null = null;

  statusOptions = [
    { label: 'Actif', value: true },
    { label: 'Inactif', value: false }
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  /**
   * Charger la liste des utilisateurs
   */
  loadUsers() {
    this.loading = true;
    
    const filters = this.selectedStatus !== null 
      ? { is_active: this.selectedStatus }
      : undefined;

    this.userService.getUsers(filters).subscribe({
      next: (response) => {
        if (response.success) {
          // Gérer pagination ou liste simple
          this.users = Array.isArray(response.data) 
            ? response.data 
            : response.data.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les utilisateurs'
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
    this.loadUsers();
  }

  /**
   * Naviguer vers la création d'un utilisateur
   */
  navigateToCreateUser() {
    this.router.navigate(['contacts/prestateurs/new']);
  }

  /**
   * Sélection d'une ligne - navigation vers l'édition
   */
  onRowSelect(event: any) {
    this.router.navigate(['contacts/users', event.data.id, 'edit']);
  }

  /**
   * Voir les détails d'un utilisateur
   */
  viewUser(event: Event, userId: number) {
    event.stopPropagation();
    this.router.navigate(['contacts/users', userId]);
  }

  /**
   * Basculer le statut actif/inactif
   */
  toggleStatus(event: Event, userId: number) {
    event.stopPropagation();
    
    const user = this.users.find(u => u.id === userId);
    const action = user?.is_active ? 'désactiver' : 'activer';

    this.confirmationService.confirm({
      message: `Voulez-vous vraiment ${action} cet utilisateur ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.userService.toggleUserStatus(userId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: response.message
              });
              this.loadUsers();
            }
          },
          error: (error) => {
            console.error('Erreur:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de changer le statut de l\'utilisateur'
            });
          }
        });
      }
    });
  }

  /**
   * Supprimer un utilisateur
   */
  deleteUser(event: Event, userId: number) {
    event.stopPropagation();

    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ? Cette action est irréversible.',
      header: 'Confirmation de suppression',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui, supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.userService.deleteUser(userId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Succès',
                detail: 'Utilisateur supprimé avec succès'
              });
              this.loadUsers();
            }
          },
          error: (error) => {
            console.error('Erreur:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erreur',
              detail: 'Impossible de supprimer l\'utilisateur'
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
    
    // Supprimer le code pays s'il existe au début
    const cleanPhone = phone.replace(/^\+\d+/, '').trim();
    
    // Formater par groupe de 2 chiffres
    return cleanPhone.replace(/(\d{2})(?=\d)/g, '$1 ');
  }
}