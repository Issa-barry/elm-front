import { Component, HostListener, OnInit, signal, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule, TableLazyLoadEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TooltipModule } from 'primeng/tooltip';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { CommissionVenteService } from '@/services/ventes/commission-vente.service';
import { CommissionDetailDialog } from '../commission-detail-dialog/commission-detail-dialog';
import { StatCardWidget, type StatCardVariant } from '@/pages/dashboards/finance/widgets/statcardwidget';
import {
  CommissionVente,
  StatutCommission,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
} from '@/models/vente.model';

interface CommissionStatCard {
  title: string;
  value: number;
  subtitle: string;
  variant: StatCardVariant;
}

interface CommissionStatsData {
  totalCommission: number;
  partLivreur: number;
  partProprietaire: number;
  count: number;
}

@Component({
  selector: 'app-commission-vente-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    ToastModule,
    SkeletonModule,
    SelectModule,
    DatePickerModule,
    TooltipModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    CommissionDetailDialog,
    StatCardWidget,
    DrawerModule,
  ],
  providers: [MessageService],
  templateUrl: './commission-vente-liste.html',
  styleUrls: ['./commission-vente-liste.scss'],
})
export class CommissionVenteListe implements OnInit {
  private location = inject(Location);
  commissions = signal<CommissionVente[]>([]);
  totalRecords = signal(0);
  loading = signal(false);
  statsLoading = signal(false);
  perPage = signal(20);
  currentPage = signal(1);

  // Filtres (propriétés simples pour [(ngModel)] direct — plus fiable avec PrimeNG)
  filterStatut = '';
  filterDateDebut: Date | null = null;
  filterDateFin: Date | null = null;
  searchTerm = '';

  // Dialog détail
  selectedCommissionId = signal<number | null>(null);
  detailVisible = signal(false);
  commissionStats = signal<CommissionStatsData>({
    totalCommission: 0,
    partLivreur: 0,
    partProprietaire: 0,
    count: 0,
  });

  isMobile = signal(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  mobileFilterVisible = false;

  // Valeurs temporaires du drawer (appliquées seulement au clic "Appliquer")
  tempFilterStatut = '';
  tempFilterDateDebut: Date | null = null;
  tempFilterDateFin: Date | null = null;

  @HostListener('window:resize')
  onResize(): void { this.isMobile.set(window.innerWidth <= 768); }

  goBack(): void { this.location.back(); }

  openMobileFilters(): void {
    this.tempFilterStatut = this.filterStatut;
    this.tempFilterDateDebut = this.filterDateDebut;
    this.tempFilterDateFin = this.filterDateFin;
    this.mobileFilterVisible = true;
  }

  applyMobileFilters(): void {
    this.filterStatut = this.tempFilterStatut;
    this.filterDateDebut = this.tempFilterDateDebut;
    this.filterDateFin = this.tempFilterDateFin;
    this.mobileFilterVisible = false;
    this.loadCommissionStats();
    this.loadCommissions(1);
  }

  resetMobileFiltersTemp(): void {
    this.tempFilterStatut = '';
    this.tempFilterDateDebut = null;
    this.tempFilterDateFin = null;
  }

  parseFloat = parseFloat;
  Math = Math;

  private readonly AVATAR_COLORS = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
    '#10b981', '#3b82f6', '#ef4444', '#14b8a6',
  ];

  readonly statutOptions = [
    { label: 'Tous les statuts', value: '' },
    { label: 'En attente', value: 'en_attente' },
    { label: 'Éligible', value: 'eligible' },
    { label: 'Partiellement versée', value: 'partiellement_versee' },
    { label: 'Versée', value: 'versee' },
    { label: 'Annulée', value: 'annulee' },
  ];

  get commissionStatCards(): CommissionStatCard[] {
    const stats = this.commissionStats();
    const subtitle = this.buildStatsSubtitle(stats.count);

    return [
      {
        title: 'Commission totale',
        value: stats.totalCommission,
        subtitle,
        variant: 'primary',
      },
      {
        title: 'Part proprietaire',
        value: stats.partProprietaire,
        subtitle,
        variant: 'default',
      },
      {
        title: 'Part livreur',
        value: stats.partLivreur,
        subtitle,
        variant: 'default',
      },
    ];
  }

  constructor(
    private commissionService: CommissionVenteService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadCommissionStats();
    if (this.isMobile()) this.loadCommissions(1);
  }

  private buildParams(page = 1): HttpParams {
    let params = new HttpParams()
      .set('page', String(page))
      .set('per_page', String(this.perPage()));
    if (this.filterStatut) params = params.set('statut', this.filterStatut);
    if (this.filterDateDebut) params = params.set('date_debut', this.toIsoDate(this.filterDateDebut));
    if (this.filterDateFin) params = params.set('date_fin', this.toIsoDate(this.filterDateFin));
    return params;
  }

  private toIsoDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  loadCommissions(page = 1): void {
    this.loading.set(true);
    this.commissionService.getAll(this.buildParams(page)).subscribe({
      next: (resp) => {
        this.commissions.set(resp.data?.data ?? []);
        this.totalRecords.set(resp.data?.total ?? 0);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.loading.set(false);
        this.showApiError(err);
      },
    });
  }

  onPageChange(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? 20;
    const page = Math.floor((event.first ?? 0) / rows) + 1;
    this.perPage.set(rows);
    this.currentPage.set(page);
    this.loadCommissions(page);
  }

  applyFilters(): void {
    this.loadCommissionStats();
    this.loadCommissions(1);
  }

  resetFilters(): void {
    this.filterStatut = '';
    this.filterDateDebut = null;
    this.filterDateFin = null;
    this.loadCommissionStats();
    this.loadCommissions(1);
  }

  openDetail(c: CommissionVente): void {
    this.selectedCommissionId.set(c.id);
    this.detailVisible.set(true);
  }

  onVersementDone(): void {
    this.loadCommissionStats();
    this.loadCommissions(this.currentPage());
  }

  getStatutLabel(s: StatutCommission): string {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }

  getStatutSeverity(s: StatutCommission) {
    return STATUT_COMMISSION_SEVERITY[s] ?? 'info';
  }

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | null): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  getInitials(c: CommissionVente): string {
    const p = c.livreur?.prenom?.[0] ?? '';
    const n = c.livreur?.nom?.[0] ?? '';
    return (p + n).toUpperCase() || '?';
  }

  getAvatarColor(c: CommissionVente): string {
    const key = (c.livreur?.prenom ?? '') + (c.livreur?.nom ?? '');
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = key.charCodeAt(i) + ((hash << 5) - hash);
    return this.AVATAR_COLORS[Math.abs(hash) % this.AVATAR_COLORS.length];
  }

  private buildStatsParams(page: number, perPage: number): HttpParams {
    let params = new HttpParams()
      .set('page', String(page))
      .set('per_page', String(perPage));

    if (this.filterStatut) params = params.set('statut', this.filterStatut);
    if (this.filterDateDebut) params = params.set('date_debut', this.toIsoDate(this.filterDateDebut));
    if (this.filterDateFin) params = params.set('date_fin', this.toIsoDate(this.filterDateFin));

    return params;
  }

  private loadCommissionStats(): void {
    const perPage = 200;
    this.statsLoading.set(true);

    this.commissionService
      .getAll(this.buildStatsParams(1, perPage))
      .pipe(
        switchMap((resp) => {
          const firstPage = resp.data;
          const firstData = firstPage?.data ?? [];
          const lastPage = firstPage?.last_page ?? 1;

          if (lastPage <= 1) {
            return of(firstData);
          }

          const requests = Array.from({ length: lastPage - 1 }, (_, idx) =>
            this.commissionService.getAll(this.buildStatsParams(idx + 2, perPage))
          );

          return forkJoin(requests).pipe(
            map((results) => [
              ...firstData,
              ...results.flatMap((r) => r.data?.data ?? []),
            ])
          );
        })
      )
      .subscribe({
        next: (rows) => {
          const stats = rows.reduce(
            (acc, item) => {
              acc.totalCommission += this.toNumber(item.montant_commission_total);
              acc.partLivreur += this.toNumber(item.part_livreur);
              acc.partProprietaire += this.toNumber(item.part_proprietaire);
              acc.count += 1;
              return acc;
            },
            { totalCommission: 0, partLivreur: 0, partProprietaire: 0, count: 0 } as CommissionStatsData
          );

          this.commissionStats.set(stats);
          this.statsLoading.set(false);
        },
        error: () => {
          this.commissionStats.set({
            totalCommission: 0,
            partLivreur: 0,
            partProprietaire: 0,
            count: 0,
          });
          this.statsLoading.set(false);
        },
      });
  }

  private toNumber(value: string | number | null | undefined): number {
    if (value == null || value === '') return 0;
    const n = typeof value === 'number' ? value : Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  private buildStatsSubtitle(count: number): string {
    if (this.filterDateDebut && this.filterDateFin) {
      return `du ${this.formatDateInput(this.filterDateDebut)} au ${this.formatDateInput(this.filterDateFin)}`;
    }

    if (this.filterDateDebut) {
      return `a partir du ${this.formatDateInput(this.filterDateDebut)}`;
    }

    if (this.filterDateFin) {
      return `jusqu'au ${this.formatDateInput(this.filterDateFin)}`;
    }

    return `${count} commission${count > 1 ? 's' : ''}`;
  }

  private formatDateInput(value: Date): string {
    return value.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  private showApiError(err: unknown): void {
    const e = err as { error?: { message?: string } };
    this.messageService.add({
      severity: 'error',
      summary: 'Erreur',
      detail: e?.error?.message ?? 'Une erreur est survenue.',
      life: 5000,
    });
  }
}
