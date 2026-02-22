import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { LivreurService } from '@/services/livreurs/livreur.service';
import { Livreur } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-livreur-liste',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    TooltipModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './livreur-liste.html',
})
export class LivreurListe implements OnInit {
  livreurs = signal<Livreur[]>([]);
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;

  constructor(
    private livreurService: LivreurService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.canCreate = this.authService.hasPermission('livreurs.create');
    this.canUpdate = this.authService.hasPermission('livreurs.update');
    this.canDelete = this.authService.hasPermission('livreurs.delete');
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.livreurService.getAll().subscribe({
      next: (resp) => {
        this.livreurs.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de charger les livreurs.', life: 5000 });
      },
    });
  }

  goNew(): void { this.router.navigate(['/vehicules/livreurs/nouveau']); }
  goEdit(l: Livreur): void { this.router.navigate(['/vehicules/livreurs', l.id, 'edit']); }

  deleteLivreur(l: Livreur): void {
    this.confirmationService.confirm({
      message: `Supprimer définitivement <strong>${l.prenom} ${l.nom}</strong> ?`,
      header: 'Supprimer le livreur',
      icon: 'pi pi-trash',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Supprimer', severity: 'danger' },
      accept: () => {
        this.livreurService.delete(l.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Supprimé', detail: `${l.prenom} ${l.nom} supprimé.`, life: 3000 });
            this.livreurs.update(list => list.filter(x => x.id !== l.id));
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Impossible de supprimer.', life: 5000 }),
        });
      },
    });
  }

  onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  fullName(l: Livreur): string { return `${l.prenom} ${l.nom}`; }
}
