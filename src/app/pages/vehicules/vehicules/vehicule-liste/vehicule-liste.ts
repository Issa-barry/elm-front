import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule, Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { VehiculeService } from '@/services/vehicules/vehicule.service';
import { Vehicule, TYPE_VEHICULE_LABELS } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';

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
    RippleModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './vehicule-liste.html',
})
export class VehiculeListe implements OnInit {
  vehicules = signal<Vehicule[]>([]);
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;

  constructor(
    private vehiculeService: VehiculeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router
  ) {
    this.canCreate = this.authService.hasPermission('vehicules.create');
    this.canUpdate = this.authService.hasPermission('vehicules.update');
    this.canDelete = this.authService.hasPermission('vehicules.delete');
  }

  ngOnInit() {
    this.loadVehicules();
  }

  loadVehicules() {
    this.loading = true;
    this.vehiculeService.getAll().subscribe({
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

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  getInitials(v: Vehicule): string {
    const words = (v.nom_vehicule ?? '').split(' ').filter(Boolean);
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return (words[0]?.substring(0, 2) ?? '??').toUpperCase();
  }

  getTypeLabel(v: Vehicule): string {
    return TYPE_VEHICULE_LABELS[v.type_vehicule] ?? v.type_vehicule;
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
