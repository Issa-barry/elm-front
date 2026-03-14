import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { Vehicule, TYPE_VEHICULE_LABELS } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-vehicule-liste',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    TooltipModule,
    InputIconModule,
    IconFieldModule,
    MenuModule,
    RippleModule,
    ConfirmDialogModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './vehicule-liste.html',
  styleUrl: './vehicule-liste.scss',
})
export class VehiculeListe implements OnInit {
  vehicules = signal<Vehicule[]>([]);
  loading = false;
  get canCreate(): boolean { return this.authService.hasPermission('vehicules.create'); }
  get canUpdate(): boolean { return this.authService.hasPermission('vehicules.update'); }
  get canDelete(): boolean { return this.authService.hasPermission('vehicules.delete'); }

  // ─── Mobile ────────────────────────────────────────────────────────────────
  searchQuery = signal<string>('');
  selectedFilter = signal<string>('all');
  mobileFilterMenuItems: MenuItem[] = [];

  total = computed(() => this.vehicules().length);

  filteredVehicules = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.vehicules();
    return this.vehicules().filter((v) => this.matchesSearch(v, q));
  });

  constructor(
    private vehiculeService: VehiculeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loadVehicules();
    this.mobileFilterMenuItems = [
      { label: 'Tous',     icon: 'pi pi-list',          command: () => { this.selectedFilter.set('all');    this.loadVehicules(); } },
      { label: 'Actifs',   icon: 'pi pi-check-circle',  command: () => { this.selectedFilter.set('actif');  this.loadVehicules(); } },
      { label: 'Inactifs', icon: 'pi pi-times-circle',  command: () => { this.selectedFilter.set('inactif'); this.loadVehicules(); } },
    ];
  }

  loadVehicules() {
    this.loading = true;
    const statut = this.selectedFilter();
    const filters = statut !== 'all' ? { statut: statut as 'actif' | 'inactif' } : undefined;
    this.vehiculeService.getAll(filters).subscribe({
      next: (resp) => {
        this.vehicules.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, 'charger les véhicules'),
          life: 5000,
        });
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goNew() {
    this.router.navigate(['/vehicules/nouveau']);
  }

  goEdit(v: Vehicule) {
    this.router.navigate(['/vehicules', v.id, 'edit']);
  }

  toggleStatus(v: Vehicule) {
    const action = v.is_active ? 'désactiver' : 'activer';
    this.confirmationService.confirm({
      message: `Voulez-vous ${action} le véhicule <strong>${v.nom_vehicule}</strong> ?`,
      header: v.is_active ? 'Désactiver le véhicule' : 'Activer le véhicule',
      icon: v.is_active ? 'pi pi-lock' : 'pi pi-lock-open',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: v.is_active ? 'Désactiver' : 'Activer', severity: v.is_active ? 'warn' : 'success' },
      accept: () => {
        const fd = new FormData();
        fd.append('is_active', v.is_active ? '0' : '1');
        this.vehiculeService.update(v.id, fd).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Succès', detail: `Véhicule ${v.is_active ? 'désactivé' : 'activé'}.`, life: 3000 });
            this.loadVehicules();
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Impossible de modifier le statut.', life: 5000 }),
        });
      },
    });
  }

  deleteVehicule(v: Vehicule) {
    this.confirmationService.confirm({
      message: `Supprimer définitivement <strong>${v.nom_vehicule}</strong> (${v.immatriculation}) ?`,
      header: 'Supprimer le véhicule',
      icon: 'pi pi-trash',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Supprimer', severity: 'danger' },
      accept: () => {
        this.vehiculeService.delete(v.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Supprimé', detail: `${v.nom_vehicule} supprimé.`, life: 3000 });
            this.vehicules.update(list => list.filter(x => x.id !== v.id));
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Impossible de supprimer.', life: 5000 }),
        });
      },
    });
  }

  getInitials(v: Vehicule): string {
    const words = (v.nom_vehicule ?? '').split(' ').filter(Boolean);
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return (words[0]?.substring(0, 2) ?? '??').toUpperCase();
  }

  getTypeLabel(v: Vehicule): string {
    return TYPE_VEHICULE_LABELS[v.type_vehicule] ?? v.type_vehicule;
  }

  private matchesSearch(v: Vehicule, query: string): boolean {
    const owner = v.proprietaire
      ? `${v.proprietaire.prenom ?? ''} ${v.proprietaire.nom ?? ''} ${v.proprietaire.phone ?? ''}`
      : '';
    const driver = v.livreur_principal
      ? `${v.livreur_principal.prenom ?? ''} ${v.livreur_principal.nom ?? ''} ${v.livreur_principal.phone ?? ''}`
      : '';
    const searchable = [
      v.nom_vehicule,
      v.immatriculation,
      v.marque,
      v.modele,
      v.type_vehicule,
      this.getTypeLabel(v),
      owner,
      driver,
      v.is_active ? 'actif' : 'inactif',
    ]
      .filter((value) => !!value)
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  }

  private httpErrorSummary(err: any): string {
    if (err.status === 401) return 'Session expirée';
    if (err.status === 403) return 'Accès refusé';
    if (err.status === 0) return 'Serveur inaccessible';
    return `Erreur ${err.status || ''}`.trim();
  }

  private httpErrorDetail(err: any, action: string): string {
    if (err.status === 401) return 'Votre session a expiré. Veuillez vous reconnecter.';
    if (err.status === 403) return `Vous n'avez pas la permission de ${action}.`;
    if (err.status === 0) return 'Impossible de joindre le serveur.';
    return err.error?.message || `Une erreur inattendue est survenue (${action}).`;
  }
}
