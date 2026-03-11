import { Component, OnInit, Output, EventEmitter, signal, computed, effect } from '@angular/core';
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

import { PackingService } from '@/services/packing/packing.service';
import { Packing } from '@/models/packing.model';
import {
  ComptabilitePrestataire,
  ComptabiliteSummary,
  ComptabiliteFilters,
} from '@/models/facture-packing.model';
import { PhoneFormatPipe } from '@/pipes/phone-format.pipe';
import { MoneyPipe } from '@/pipes/money.pipe';
import { UsineContextService } from '@/services/usine/usine-context.service';

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
    MoneyPipe,
  ],
  providers: [MessageService],
})
export class ComptabilitePackingTableau implements OnInit {
  @Output() dataChanged = new EventEmitter<ComptabiliteFilters>();

  private allPrestataires = signal<ComptabilitePrestataire[]>([]);

  searchQuery = signal<string>('');
  filtreStatut = signal<string | null>(null);
  filtrePeriodeDebut: Date | null = null;
  filtrePeriodeFin: Date | null = null;
  loading = false;

  mobileFilterMenuItems: MenuItem[] = [];
  private hasInitializedUsineWatcher = false;

  statutOptions = [
    { label: 'Tous', value: null },
    { label: 'Impaye', value: 'impaye' },
    { label: 'Partiel', value: 'partiel' },
    { label: 'Solde', value: 'solde' },
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
      (p.prestataire_phone || '').replace(/\s/g, '').includes(query.replace(/\s/g, '')),
    );
  });

  constructor(
    private router: Router,
    private packingService: PackingService,
    private messageService: MessageService,
    private usineContext: UsineContextService,
  ) {
    effect(() => {
      this.usineContext.currentUsineId();
      this.usineContext.isConsolidated();

      if (!this.hasInitializedUsineWatcher) {
        this.hasInitializedUsineWatcher = true;
        return;
      }

      this.loadComptabilite();
    });
  }

  ngOnInit(): void {
    this.loadComptabilite();
    this.mobileFilterMenuItems = [
      { label: 'Tous',    icon: 'pi pi-list',         command: () => this.filtreStatut.set(null) },
      { label: 'Impaye',  icon: 'pi pi-times-circle', command: () => this.filtreStatut.set('impaye') },
      { label: 'Partiel', icon: 'pi pi-clock',        command: () => this.filtreStatut.set('partiel') },
      { label: 'Solde',   icon: 'pi pi-check-circle', command: () => this.filtreStatut.set('solde') },
    ];
  }

  goBack(): void { this.router.navigate(['/']); }

  loadComptabilite(): void {
    this.loading = true;
    const filters: ComptabiliteFilters = {};
    if (this.filtrePeriodeDebut) filters.date_debut = this.formatDate(this.filtrePeriodeDebut);
    if (this.filtrePeriodeFin) filters.date_fin = this.formatDate(this.filtrePeriodeFin);

    this.packingService.getPackings({
      date_debut: filters.date_debut,
      date_fin: filters.date_fin,
      per_page: 500,
    }).subscribe({
      next: (response) => {
        const packings: Packing[] = 'data' in response && Array.isArray(response.data)
          ? response.data as Packing[]
          : ((response as any).data?.data ?? []) as Packing[];

        const summary = this.buildSummaryFromPackings(packings, filters);
        this.allPrestataires.set(summary.prestataires);
        this.loading = false;
        this.dataChanged.emit(filters);
      },
      error: (error) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: error?.error?.message || 'Impossible de charger les packings.',
          life: 5000,
        });
      },
    });
  }

  private buildSummaryFromPackings(packings: Packing[], filters: ComptabiliteFilters): ComptabiliteSummary {
    type Aggregate = {
      prestataire_id: number;
      prestataire_nom: string;
      prestataire_phone: string;
      derniere_date: string | null;
      montant_facture: number;
      montant_verse: number;
      montant_restant_facture: number;
    };

    const byPrestataire = new Map<number, Aggregate>();

    for (const packing of packings) {
      const prestataireId = packing.prestataire_id;
      if (!prestataireId) continue;

      const fullName = packing.prestataire_nom
        ?? `${packing.prestataire?.prenom ?? ''} ${packing.prestataire?.nom ?? ''}`.trim()
        ?? `Prestataire #${prestataireId}`;
      const phone = packing.prestataire?.phone ?? '';
      const date = typeof packing.date === 'string' ? packing.date : (packing.date?.toString() ?? null);

      const current = byPrestataire.get(prestataireId) ?? {
        prestataire_id: prestataireId,
        prestataire_nom: fullName,
        prestataire_phone: phone,
        derniere_date: null,
        montant_facture: 0,
        montant_verse: 0,
        montant_restant_facture: 0,
      };

      current.montant_facture += packing.montant ?? 0;
      current.montant_verse += packing.montant_verse ?? 0;
      current.montant_restant_facture += packing.montant_restant ?? 0;
      current.derniere_date = this.getMostRecentDate(current.derniere_date, date);

      byPrestataire.set(prestataireId, current);
    }

    const prestataires = Array.from(byPrestataire.values()).map((item) => new ComptabilitePrestataire({
      prestataire_id: item.prestataire_id,
      prestataire_nom: item.prestataire_nom,
      prestataire_phone: item.prestataire_phone,
      prestataire_type: '',
      nb_packings_non_factures: 0,
      montant_non_facture: 0,
      nb_factures_en_cours: 0,
      montant_facture: item.montant_facture,
      montant_verse: item.montant_verse,
      montant_restant_facture: item.montant_restant_facture,
      montant_total_du: item.montant_restant_facture,
      derniere_date: item.derniere_date,
    }));

    const totalFacture = prestataires.reduce((sum, p) => sum + p.montant_facture, 0);
    const totalVerse = prestataires.reduce((sum, p) => sum + p.montant_verse, 0);
    const totalRestant = prestataires.reduce((sum, p) => sum + p.montant_restant_facture, 0);

    return new ComptabiliteSummary({
      date_debut: filters.date_debut ?? null,
      date_fin: filters.date_fin ?? null,
      nb_prestataires: prestataires.length,
      total_non_facture: 0,
      total_facture: totalFacture,
      total_verse: totalVerse,
      total_restant_facture: totalRestant,
      montant_global_du: totalRestant,
      prestataires,
    });
  }

  private getMostRecentDate(current: string | null, candidate: string | null): string | null {
    if (!candidate) return current;
    if (!current) return candidate;
    const currentTime = new Date(current).getTime();
    const candidateTime = new Date(candidate).getTime();
    if (Number.isNaN(currentTime)) return candidate;
    if (Number.isNaN(candidateTime)) return current;
    return candidateTime > currentTime ? candidate : current;
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
    return statut === 'impaye' ? 'Impaye' : statut === 'partiel' ? 'Partiel' : 'Solde';
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
