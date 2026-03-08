import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { finalize } from 'rxjs';
import {
    DashboardService,
    EncaissementStat,
    VentesEncaissementsPeriod
} from '@/services/dashboard/dashboard.service';
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
export class EncaissementWidget implements OnInit, OnChanges {
    private readonly dashboardService = inject(DashboardService);

    @Input() period: VentesEncaissementsPeriod = 'this_month';
    stat: EncaissementStat | null = null;
    loading = false;
    errorMessage: string | null = null;

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

    ngOnInit(): void {
        this.loadData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['period'] && !changes['period'].firstChange) {
            this.loadData();
        }
    }

    loadData(): void {
        this.loading = true;
        this.errorMessage = null;

        this.dashboardService
            .getVentesEncaissements(this.period)
            .pipe(finalize(() => (this.loading = false)))
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
