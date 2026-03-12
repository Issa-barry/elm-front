import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { finalize } from 'rxjs';
import {
    DashboardService,
    EncaissementStat,
} from '@/services/dashboard/dashboard.service';
import { DashboardPeriodService } from '@/services/dashboard/dashboard-period.service';
import { StatCardWidget, type StatCardVariant } from './statcardwidget';

interface EncaissementCard {
    title: string;
    value: number;
    subtitle: string;
    variant: StatCardVariant;
}

@Component({
    standalone: true,
    selector: 'app-encaissement-widget',
    imports: [CommonModule, ButtonModule, StatCardWidget],
    template: `
        @if (errorMessage) {
            <div class="col-span-12">
                <div class="card p-3 border-1 border-round surface-border flex items-center justify-between gap-3">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            </div>
        }

        @for (card of cards; track card.title) {
            <app-stat-card-widget [title]="card.title" [value]="card.value" [subtitle]="card.subtitle" [loading]="loading" [variant]="card.variant" />
        }

        @if (!loading && !errorMessage && !stat) {
            <div class="col-span-12">
                <div class="card p-3 text-sm text-surface-500">Aucune donnee disponible pour cette periode.</div>
            </div>
        }
    `,
    host: {
        '[style.display]': '"contents"'
    }
})
export class EncaissementWidget {
    private readonly dashboardService = inject(DashboardService);
    private readonly periodService = inject(DashboardPeriodService);
    private readonly destroyRef = inject(DestroyRef);

    stat: EncaissementStat | null = null;
    loading = false;
    errorMessage: string | null = null;

    constructor() {
        effect(() => {
            const period = this.periodService.period();
            const days = this.periodService.customDays();
            this.loadData(period, days);
        });
    }

    get cards(): EncaissementCard[] {
        return [
            {
                title: 'Total Factures',
                value: this.stat?.total_factures ?? 0,
                subtitle: `${this.stat?.nb_factures_total ?? 0} facture(s)`,
                variant: 'primary'
            },
            {
                title: 'Factures payees',
                value: this.stat?.factures_payees ?? 0,
                subtitle: `${this.stat?.nb_factures_payees ?? 0} facture(s)`,
                variant: 'default'
            },
            {
                title: 'Reste a encaisser',
                value: this.stat?.reste_a_encaisser ?? 0,
                subtitle: `${this.stat?.nb_factures_impayees ?? 0} en attente`,
                variant: 'default'
            }
        ];
    }

    loadData(
        period = this.periodService.period(),
        days = this.periodService.customDays()
    ): void {
        this.loading = true;
        this.errorMessage = null;

        this.dashboardService
            .getVentesEncaissements(period, days)
            .pipe(
                finalize(() => (this.loading = false)),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe({
                next: (data) => {
                    this.stat = data ?? null;
                },
                error: () => {
                    this.stat = null;
                    this.errorMessage = 'Impossible de charger les statistiques d encaissement.';
                }
            });
    }
}
