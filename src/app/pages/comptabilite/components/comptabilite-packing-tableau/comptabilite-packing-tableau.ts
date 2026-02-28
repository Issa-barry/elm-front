import { Component, OnInit, Output, EventEmitter, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { DatePickerModule } from 'primeng/datepicker';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

import { FacturePaiementService } from '@/services/comptabilite/facture-paiement/facture-paiement.service';
import {
  ComptabilitePrestataire,
  ComptabiliteSummary,
  ComptabiliteFilters,
} from '@/models/facture-packing.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';

@Component({
  selector: 'app-comptabilite-packing-tableau',
  templateUrl: './comptabilite-packing-tableau.html',
  styleUrl: './comptabilite-packing-tableau.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    SelectModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    DatePickerModule,
    TooltipModule,
    SkeletonModule,
    MenuModule,
    RippleModule,
    PhoneFormatPipe,
  ],
  providers: [MessageService],
})
export class ComptabilitePackingTableau implements OnInit {
  @Output() dataChanged = new EventEmitter<ComptabiliteFilters>();

  private comptaSummary: ComptabiliteSummary | null = null;
  private allPrestataires = signal<ComptabilitePrestataire[]>([]);

  searchQuery = signal<string>('');
  filtreStatut = signal<string | null>(null);
  filtrePeriodeDebut: Date | null = null;
  filtrePeriodeFin: Date | null = null;
  loading = false;

  mobileFilterMenuItems: MenuItem[] = [];

  statutOptions = [
    { label: 'Tous', value: null },
    { label: 'Impayé', value: 'impaye' },
    { label: 'Partiel', value: 'partiel' },
    { label: 'Soldé', value: 'solde' },
  ];

  filteredPrestataires = computed(() => {
    const statut = this.filtreStatut();
    const query = this.searchQuery().toLowerCase().trim();
    let list = this.allPrestataires();

    if (statut) {
      list = list.filter(p => p.statut === statut);
    }
    if (!query) return list;
    return list.filter(p =>
      (p.prestataire_nom || '').toLowerCase().includes(query) ||
      (p.prestataire_phone || '').replace(/\s/g, '').includes(query.replace(/\s/g, ''))
    );
  });

  constructor(
    private router: Router,
    private factureService: FacturePaiementService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.loadComptabilite();
    this.mobileFilterMenuItems = [
      { label: 'Tous',    icon: 'pi pi-list',         command: () => this.filtreStatut.set(null) },
      { label: 'Impayé',  icon: 'pi pi-times-circle', command: () => this.filtreStatut.set('impaye') },
      { label: 'Partiel', icon: 'pi pi-clock',        command: () => this.filtreStatut.set('partiel') },
      { label: 'Soldé',   icon: 'pi pi-check-circle', command: () => this.filtreStatut.set('solde') },
    ];
  }

  goBack(): void { this.router.navigate(['/']); }

  loadComptabilite(): void {
    this.loading = true;
    const filters: ComptabiliteFilters = {};
    if (this.filtrePeriodeDebut) filters.date_debut = this.formatDate(this.filtrePeriodeDebut);
    if (this.filtrePeriodeFin) filters.date_fin = this.formatDate(this.filtrePeriodeFin);

    this.factureService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.comptaSummary = new ComptabiliteSummary(response.data);
        this.allPrestataires.set(this.comptaSummary.prestataires);
        this.loading = false;
        this.dataChanged.emit(filters);
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de charger la comptabilité.', life: 5000 });
      },
    });
  }

  setStatutFilter(value: string | null): void {
    this.filtreStatut.set(value);
  }

  clearFilters(): void {
    this.filtrePeriodeDebut = null;
    this.filtrePeriodeFin = null;
    this.filtreStatut.set(null);
    this.loadComptabilite();
  }

  goToDetail(item: ComptabilitePrestataire): void {
    this.router.navigate(['/comptabilite/comptabilite-packing-detail', item.prestataire_id], {
      queryParams: {
        prestataire_nom: item.prestataire_nom,
        prestataire_phone: item.prestataire_phone,
      },
    });
  }

  getStatutLabel(statut: string): string {
    return statut === 'impaye' ? 'Impayé' : statut === 'partiel' ? 'Partiel' : 'Soldé';
  }

  getStatutSeverity(statut: string): 'success' | 'warn' | 'danger' | 'secondary' {
    if (statut === 'solde') return 'success';
    if (statut === 'partiel') return 'warn';
    return 'danger';
  }

  getInitials(nomComplet?: string): string {
    if (!nomComplet?.trim()) return '--';
    const parts = nomComplet.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(value) + ' GNF';
  }

  formatDateDisplay(dateStr: string | null | undefined): string {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('fr-FR');
  }

  private formatDate(date: Date | string): string {
    if (!date) return '';
    if (typeof date === 'string') return date;
    return date.toISOString().split('T')[0];
  }
}
