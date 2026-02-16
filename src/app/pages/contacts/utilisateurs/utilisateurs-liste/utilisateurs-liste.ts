import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { SelectModule } from 'primeng/select';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuModule } from 'primeng/menu';

import { User } from '@/models/user.model';
import { UserService } from '@/services/users/users.service';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-utilisateurs-liste',
  standalone: true,
  templateUrl: './utilisateurs-liste.html',
  styleUrl: './utilisateurs-liste.scss',
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    IconField,
    InputIcon,
    TagModule,
    TooltipModule,
    SelectModule,
    ConfirmDialogModule,
    MenuModule,
    PhoneFormatPipe
  ],
  providers: [MessageService, ConfirmationService],
})
export class UtilisateursListe implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser: User | null = null;
  loading = false;
  selectedStatus: boolean | null = null;

  mobileSearchTerm = '';
  readonly mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;
  private readonly mobileBreakpoint = 768;
  private readonly mobilePwaClass = 'utilisateurs-mobile-pwa';

  statusOptions = [
    { label: 'Actif', value: true },
    { label: 'Inactif', value: false }
  ];

  mobileStatusMenuItems: MenuItem[] = [
    { label: 'Tous les statuts', command: () => this.applyMobileStatusFilter(null) },
    { label: 'Actif', command: () => this.applyMobileStatusFilter(true) },
    { label: 'Inactif', command: () => this.applyMobileStatusFilter(false) },
  ];

  canCreate = false;
  canUpdate = false;
  canDelete = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.canCreate = this.authService.hasPermission('users.create');
    this.canUpdate = this.authService.hasPermission('users.update');
    this.canDelete = this.authService.hasPermission('users.delete');
  }

  ngOnInit() {
    this.loadUsers();
    this.syncMobilePwaMode();
  }

  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.syncMobilePwaMode();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onMobileSearchChange() {
    this.mobileVisibleCount = this.mobilePageSize;
  }

  get mobileFilteredUsers(): User[] {
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term) return this.users;
    return this.users.filter(
      (u) =>
        (u.nom_complet && u.nom_complet.toLowerCase().includes(term)) ||
        (u.email && u.email.toLowerCase().includes(term)) ||
        (u.phone && u.phone.replace(/\s/g, '').includes(term)) ||
        (u.reference && u.reference.toLowerCase().includes(term))
    );
  }

  get mobileVisibleUsers(): User[] {
    return this.mobileFilteredUsers.slice(0, this.mobileVisibleCount);
  }

  get canLoadMoreMobile(): boolean {
    return this.mobileVisibleCount < this.mobileFilteredUsers.length;
  }

  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }

  trackByUserId(_index: number, user: User): number {
    return user.id;
  }

  private syncMobilePwaMode() {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }

  loadUsers() {
    this.loading = true;

    const filters = this.selectedStatus !== null
      ? { is_active: this.selectedStatus }
      : undefined;

    this.userService.getUsers(filters).subscribe({
      next: (response) => {
        if (response.success) {
          this.users = Array.isArray(response.data)
            ? response.data
            : response.data.data;
          this.mobileVisibleCount = this.mobilePageSize;
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

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  filterByStatus() {
    this.loadUsers();
  }

  applyMobileStatusFilter(status: boolean | null) {
    this.selectedStatus = status;
    this.loadUsers();
  }

  navigateToCreate() {
    this.router.navigate(['contacts/utilisateurs/new']);
  }

  onRowSelect(event: any) {
    this.router.navigate(['contacts/utilisateurs/edit', event.data.id]);
  }

  goToEdit(event: Event, userId: number) {
    event.stopPropagation();
    this.router.navigate(['contacts/utilisateurs/edit/', userId]);
  }

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

  getInitials(nomComplet: string): string {
    if (!nomComplet) return '??';

    const parts = nomComplet.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return nomComplet.substring(0, 2).toUpperCase();
  }

  getRoleSeverity(role: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    const severities: Record<string, 'success' | 'info' | 'warn' | 'danger'> = {
      'admin': 'danger',
      'manager': 'warn',
      'employe': 'info',
      'superviseur': 'success',
    };
    return severities[role?.toLowerCase()] || 'secondary';
  }
}
