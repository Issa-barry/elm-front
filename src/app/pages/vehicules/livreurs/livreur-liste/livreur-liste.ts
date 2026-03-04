import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
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
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

import { LivreurService } from '@/services/livreurs/livreur.service';
import { Livreur } from '@/models/vehicule.model';
import { AuthService } from '@/services/auth/auth.service';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-livreur-liste',
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
    MenuModule,
    RippleModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './livreur-liste.html',
  styleUrl: './livreur-liste.scss',
})
export class LivreurListe implements OnInit {
  livreurs = signal<Livreur[]>([]);
  searchQuery = signal<string>('');
  selectedFilter = signal<'all' | 'actif' | 'inactif'>('all');
  filterOptions = [
    { label: 'Tous', value: 'all' },
    { label: 'Actifs', value: 'actif' },
    { label: 'Inactifs', value: 'inactif' },
  ];
  loading = false;
  get canCreate(): boolean { return this.authService.hasPermission('livreurs.create'); }
  get canUpdate(): boolean { return this.authService.hasPermission('livreurs.update'); }
  get canDelete(): boolean { return this.authService.hasPermission('livreurs.delete'); }

  mobileFilterMenuItems: MenuItem[] = [];

  filteredLivreurs = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.livreurs();
    if (!query) return list;
    return list.filter((livreur) => this.matchesSearch(livreur, query));
  });

  constructor(
    private livreurService: LivreurService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.load();
    this.mobileFilterMenuItems = [
      { label: 'Tous',     icon: 'pi pi-list',         command: () => this.setSelectedFilter('all') },
      { label: 'Actifs',   icon: 'pi pi-check-circle', command: () => this.setSelectedFilter('actif') },
      { label: 'Inactifs', icon: 'pi pi-times-circle', command: () => this.setSelectedFilter('inactif') },
    ];
  }

  goBack(): void { this.router.navigate(['/']); }

  load(): void {
    this.loading = true;
    const filter = this.selectedFilter();
    const statut = filter === 'all' ? undefined : filter as 'actif' | 'inactif';
    this.livreurService.getAll(statut).subscribe({
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

  setSelectedFilter(value: string): void {
    if (value === 'all' || value === 'actif' || value === 'inactif') {
      this.selectedFilter.set(value);
    } else {
      this.selectedFilter.set('all');
    }
    this.load();
  }

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

  fullName(l: Livreur): string { return `${l.prenom} ${l.nom}`; }

  private matchesSearch(l: Livreur, query: string): boolean {
    const searchable = [
      l.prenom,
      l.nom,
      l.phone,
      this.fullName(l),
      this.isLivreurActive(l) ? 'actif' : 'inactif',
    ]
      .filter((value) => !!value)
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  }

  private isLivreurActive(l: Livreur): boolean {
    const status = (l as { is_active: unknown }).is_active;
    return status === true || status === 1 || status === '1';
  }
}
