import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { SkeletonModule } from 'primeng/skeleton';
import { CommissionVenteService } from '@/services/ventes/commission-vente.service';

interface CommissionStats {
  eligibleCount: number;
  eligibleMontant: number;
  enAttenteCount: number;
  partiellementCount: number;
  verseeCount: number;
}

@Component({
  selector: 'app-commission-stats-widget',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './commission-stats-widget.html',
})
export class CommissionStatsWidget implements OnInit, OnChanges {
  /** Incrémenter depuis le parent pour forcer un rechargement */
  @Input() refreshTrigger = 0;

  stats = signal<CommissionStats | null>(null);
  loading = signal(true);

  constructor(private service: CommissionVenteService) {}

  ngOnInit(): void {
    this.load();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refreshTrigger'] && !changes['refreshTrigger'].firstChange) {
      this.load();
    }
  }

  load(): void {
    this.loading.set(true);
    forkJoin({
      eligible: this.service.getAll(new HttpParams().set('per_page', '200').set('statut', 'eligible')),
      enAttente: this.service.getAll(new HttpParams().set('per_page', '1').set('statut', 'en_attente')),
      partiellement: this.service.getAll(new HttpParams().set('per_page', '1').set('statut', 'partiellement_versee')),
      versee: this.service.getAll(new HttpParams().set('per_page', '1').set('statut', 'versee')),
    }).subscribe({
      next: (r) => {
        const eligibleItems = r.eligible.data?.data ?? [];
        const eligibleMontant = eligibleItems.reduce(
          (sum, c) => sum + parseFloat(c.montant_commission_total),
          0
        );
        this.stats.set({
          eligibleCount: r.eligible.data?.total ?? 0,
          eligibleMontant,
          enAttenteCount: r.enAttente.data?.total ?? 0,
          partiellementCount: r.partiellement.data?.total ?? 0,
          verseeCount: r.versee.data?.total ?? 0,
        });
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  fmt(n: number): string {
    return new Intl.NumberFormat('fr-FR').format(n) + ' GNF';
  }
}
