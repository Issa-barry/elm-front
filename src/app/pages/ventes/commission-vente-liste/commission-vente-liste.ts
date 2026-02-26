import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { CommissionVenteService } from '@/services/ventes/commission-vente.service';
import { CommissionDetailDialog } from '../commission-detail-dialog/commission-detail-dialog';
import { CommissionStatsWidget } from './commission-stats-widget';
import {
  CommissionVente,
  StatutCommission,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
} from '@/models/vente.model';

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
    CommissionDetailDialog,
    CommissionStatsWidget,
  ],
  providers: [MessageService],
  templateUrl: './commission-vente-liste.html',
  styleUrls: ['./commission-vente-liste.scss'],
})
export class CommissionVenteListe {
  commissions = signal<CommissionVente[]>([]);
  totalRecords = signal(0);
  loading = signal(false);
  perPage = signal(20);
  currentPage = signal(1);

  // Filtres
  filterStatut = signal<string | null>(null);
  filterDateDebut = signal<Date | null>(null);
  filterDateFin = signal<Date | null>(null);

  // Dialog détail
  selectedCommissionId = signal<number | null>(null);
  detailVisible = signal(false);

  // Trigger rechargement du widget stats après un versement
  statsRefreshTrigger = signal(0);

  parseFloat = parseFloat;

  readonly statutOptions = [
    { label: 'Tous les statuts', value: null },
    { label: 'En attente', value: 'en_attente' },
    { label: 'Éligible', value: 'eligible' },
    { label: 'Partiellement versée', value: 'partiellement_versee' },
    { label: 'Versée', value: 'versee' },
    { label: 'Annulée', value: 'annulee' },
  ];

  constructor(
    private commissionService: CommissionVenteService,
    private messageService: MessageService
  ) {}

  loadData(page: number = 1, perPage: number = 20): void {
    this.loading.set(true);
    this.commissionService
      .getAll({
        page,
        per_page: perPage,
        statut: this.filterStatut() ?? undefined,
        date_debut: this.filterDateDebut()
          ? this.toDateString(this.filterDateDebut()!)
          : undefined,
        date_fin: this.filterDateFin()
          ? this.toDateString(this.filterDateFin()!)
          : undefined,
      })
      .subscribe({
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

  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? 20;
    const page = Math.floor((event.first ?? 0) / rows) + 1;
    this.perPage.set(rows);
    this.currentPage.set(page);
    this.loadData(page, rows);
  }

  applyFilters(): void {
    this.loadData(1, this.perPage());
  }

  resetFilters(): void {
    this.filterStatut.set(null);
    this.filterDateDebut.set(null);
    this.filterDateFin.set(null);
    this.loadData(1, this.perPage());
  }

  openDetail(c: CommissionVente): void {
    this.selectedCommissionId.set(c.id);
    this.detailVisible.set(true);
  }

  onVersementDone(): void {
    this.loadData(this.currentPage(), this.perPage());
    this.statsRefreshTrigger.update(v => v + 1);
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

  private toDateString(d: Date): string {
    return d.toISOString().split('T')[0];
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
