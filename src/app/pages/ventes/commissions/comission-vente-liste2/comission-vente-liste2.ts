import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { DividerModule } from 'primeng/divider';
import { forkJoin } from 'rxjs';

import { CommissionVenteService } from '@/services/ventes/commission-vente.service';
import { AuthService } from '@/services/auth/auth.service';
import { CommissionDetailDialog } from '../../commission-detail-dialog/commission-detail-dialog';
import {
  CommissionVente,
  StatutCommission,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
} from '@/models/vente.model';

interface CommissionStats {
  eligibleCount: number;
  eligibleMontant: number;
  enAttenteCount: number;
  partiellementCount: number;
  verseeCount: number;
  moyenneCommission: number;
}

@Component({
  selector: 'app-comission-vente-liste2',
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
    DividerModule,
    CommissionDetailDialog,
  ],
  providers: [MessageService],
  templateUrl: './comission-vente-liste2.html',
  styleUrl: './comission-vente-liste2.scss',
})
export class ComissionVenteListe2 implements OnInit {
  commissions = signal<CommissionVente[]>([]);
  totalRecords = signal(0);
  loading = signal(false);
  perPage = signal(20);
  currentPage = signal(1);

  stats = signal<CommissionStats | null>(null);
  statsLoading = signal(true);

  filterStatut = '';
  filterDateDebut: Date | null = null;
  filterDateFin: Date | null = null;

  selectedCommissionId = signal<number | null>(null);
  detailVisible = signal(false);

  parseFloat = parseFloat;

  readonly statutOptions = [
    { label: 'Tous les statuts', value: '' },
    { label: 'En attente', value: 'en_attente' },
    { label: 'Éligible', value: 'eligible' },
    { label: 'Partiellement versée', value: 'partiellement_versee' },
    { label: 'Versée', value: 'versee' },
    { label: 'Annulée', value: 'annulee' },
  ];

  private readonly AVATAR_COLORS = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
    '#10b981', '#3b82f6', '#ef4444', '#14b8a6',
  ];

  greeting = computed(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Bonjour';
    if (h < 18) return 'Bon après-midi';
    return 'Bonsoir';
  });

  userName = computed(() => {
    const user = this.authService.currentUser();
    if (user?.prenom) return user.prenom;
    if (user?.nom_complet) return user.nom_complet.split(' ')[0];
    return '';
  });

  userInitial = computed(() => this.userName()[0]?.toUpperCase() ?? '?');

  constructor(
    private commissionService: CommissionVenteService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadCommissions(1);
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

  loadStats(): void {
    this.statsLoading.set(true);
    forkJoin({
      eligible: this.commissionService.getAll(new HttpParams().set('per_page', '200').set('statut', 'eligible')),
      enAttente: this.commissionService.getAll(new HttpParams().set('per_page', '1').set('statut', 'en_attente')),
      partiellement: this.commissionService.getAll(new HttpParams().set('per_page', '1').set('statut', 'partiellement_versee')),
      versee: this.commissionService.getAll(new HttpParams().set('per_page', '1').set('statut', 'versee')),
    }).subscribe({
      next: (r) => {
        const eligibleItems = r.eligible.data?.data ?? [];
        const eligibleMontant = eligibleItems.reduce(
          (sum, c) => sum + parseFloat(c.montant_commission_total),
          0
        );
        const moyenne = eligibleItems.length > 0 ? eligibleMontant / eligibleItems.length : 0;
        this.stats.set({
          eligibleCount: r.eligible.data?.total ?? 0,
          eligibleMontant,
          enAttenteCount: r.enAttente.data?.total ?? 0,
          partiellementCount: r.partiellement.data?.total ?? 0,
          verseeCount: r.versee.data?.total ?? 0,
          moyenneCommission: moyenne,
        });
        this.statsLoading.set(false);
      },
      error: () => this.statsLoading.set(false),
    });
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
    this.loadCommissions(1);
  }

  resetFilters(): void {
    this.filterStatut = '';
    this.filterDateDebut = null;
    this.filterDateFin = null;
    this.loadCommissions(1);
  }

  openDetail(c: CommissionVente): void {
    this.selectedCommissionId.set(c.id);
    this.detailVisible.set(true);
  }

  onVersementDone(): void {
    this.loadCommissions(this.currentPage());
    this.loadStats();
  }

  getStatutLabel(s: StatutCommission): string {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }

  getStatutSeverity(s: StatutCommission) {
    return STATUT_COMMISSION_SEVERITY[s] ?? 'info';
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

  formatMontant(n: string | number | undefined | null): string {
    if (n == null || n === '') return '—';
    const num = typeof n === 'string' ? parseFloat(n) : n;
    return new Intl.NumberFormat('fr-FR').format(num) + ' GNF';
  }

  formatDate(d: string | null | undefined): string {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
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
