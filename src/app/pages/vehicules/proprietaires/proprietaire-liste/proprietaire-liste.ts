import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
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

import { ProprietaireService } from '@/services/proprietaires/proprietaire.service';
import { Proprietaire } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';

@Component({
  selector: 'app-proprietaire-liste',
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
  templateUrl: './proprietaire-liste.html',
})
export class ProprietaireListe implements OnInit {
  proprietaires = signal<Proprietaire[]>([]);
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;

  constructor(
    private proprietaireService: ProprietaireService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.canCreate = this.authService.hasPermission('proprietaires.create');
    this.canUpdate = this.authService.hasPermission('proprietaires.update');
    this.canDelete = this.authService.hasPermission('proprietaires.delete');
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.proprietaireService.getAll().subscribe({
      next: (resp) => {
        this.proprietaires.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de charger les propriétaires.', life: 5000 });
      },
    });
  }

  goNew(): void { this.router.navigate(['/vehicules/proprietaires/nouveau']); }
  goEdit(p: Proprietaire): void { this.router.navigate(['/vehicules/proprietaires', p.id, 'edit']); }

  deleteProprietaire(p: Proprietaire): void {
    this.confirmationService.confirm({
      message: `Supprimer définitivement <strong>${p.prenom} ${p.nom}</strong> ?`,
      header: 'Supprimer le propriétaire',
      icon: 'pi pi-trash',
      rejectButtonProps: { label: 'Annuler', severity: 'secondary', outlined: true },
      acceptButtonProps: { label: 'Supprimer', severity: 'danger' },
      accept: () => {
        this.proprietaireService.delete(p.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Supprimé', detail: `${p.prenom} ${p.nom} supprimé.`, life: 3000 });
            this.proprietaires.update(list => list.filter(x => x.id !== p.id));
          },
          error: (err) => this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.error?.message || 'Impossible de supprimer.', life: 5000 }),
        });
      },
    });
  }

  onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  fullName(p: Proprietaire): string { return `${p.prenom} ${p.nom}`; }
}
