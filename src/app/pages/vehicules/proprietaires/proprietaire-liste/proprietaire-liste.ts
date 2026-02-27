import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SelectModule } from 'primeng/select';

import { ProprietaireService } from '@/services/proprietaires/proprietaire.service';
import { Proprietaire } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-proprietaire-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SkeletonModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    SelectModule,
    TooltipModule,
    ConfirmDialogModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './proprietaire-liste.html',
})
export class ProprietaireListe implements OnInit {
  proprietaires = signal<Proprietaire[]>([]);
  searchQuery = signal<string>('');
  selectedFilter = signal<'all' | 'actif' | 'inactif'>('all');
  filterOptions = [
    { label: 'Tous', value: 'all' },
    { label: 'Actifs', value: 'actif' },
    { label: 'Inactifs', value: 'inactif' },
  ];
  loading = false;
  canCreate = false;
  canUpdate = false;
  canDelete = false;

  filteredProprietaires = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.proprietaires();
    if (!query) return list;
    return list.filter((proprietaire) => this.matchesSearch(proprietaire, query));
  });

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
    const filter = this.selectedFilter();
    const statut = filter === 'all' ? undefined : filter as 'actif' | 'inactif';
    this.proprietaireService.getAll(statut).subscribe({
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
  setSelectedFilter(value: string): void {
    if (value === 'all' || value === 'actif' || value === 'inactif') {
      this.selectedFilter.set(value);
    } else {
      this.selectedFilter.set('all');
    }
    this.load();
  }

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

  fullName(p: Proprietaire): string { return `${p.prenom} ${p.nom}`; }

  private matchesSearch(p: Proprietaire, query: string): boolean {
    const searchable = [
      p.prenom,
      p.nom,
      p.phone,
      p.email,
      p.ville,
      p.quartier,
      p.pays,
      this.fullName(p),
      this.isProprietaireActive(p) ? 'actif' : 'inactif',
    ]
      .filter((value) => !!value)
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  }

  private isProprietaireActive(p: Proprietaire): boolean {
    const status = (p as { is_active: unknown }).is_active;
    return status === true || status === 1 || status === '1';
  }
}
