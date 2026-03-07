import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { finalize } from 'rxjs';
import {
    DashboardService,
    EncaissementStat,
    VentesEncaissementsPeriod
} from '@/services/dashboard/dashboard.service';

@Component({
    standalone: true,
    selector: 'app-encaissement-widget',
    imports: [CommonModule, SkeletonModule, ButtonModule],
    template: `
        @if (errorMessage) {
            <div class="col-span-12">
                <div class="card p-3 border-1 border-round surface-border flex items-center justify-between gap-3">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            </div>
        }

        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card h-full relative overflow-hidden">
                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none">
                    <rect x="0" y="0" width="900" height="600" fill="var(--p-primary-600)"></rect>
                    <path
                        d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
                        fill="var(--p-primary-500)"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                    ></path>
                </svg>
                <div class="z-20 relative text-white">
                    <div class="text-xl font-semibold mb-6">Total Factures</div>
                    <div class="mb-1 font-semibold"></div>
                    @if (loading) {
                        <p-skeleton width="12rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                    } @else {
                        <div class="text-2xl mb-3 mt-4 font-bold">{{ (stat?.total_factures ?? 0) | number:'1.0-0' }} GNF</div>
                    }
                    <div class="text-sm opacity-90">{{ stat?.nb_factures_total ?? 0 }} facture(s)</div>
                </div>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card h-full flex flex-col items-center justify-center">
                <span class="text-surface-900 dark:text-surface-0 text-lg font-medium mb-6">Factures payees</span>
                @if (loading) {
                    <p-skeleton width="16rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                } @else {
                    <span class="text-2xl text-primary font-bold">{{ (stat?.factures_payees ?? 0) | number:'1.0-0' }} GNF</span>
                }
                <span class="text-sm text-surface-500 dark:text-surface-300 mt-3">{{ stat?.nb_factures_payees ?? 0 }} facture(s)</span>
            </div>
        </div>

        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card h-full flex flex-col items-center justify-center">
                <span class="text-surface-900 dark:text-surface-0 text-lg font-medium mb-6">Reste a encaisser</span>
                @if (loading) {
                    <p-skeleton width="16rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                } @else {
                    <span class="text-2xl text-primary font-bold">{{ (stat?.reste_a_encaisser ?? 0) | number:'1.0-0' }} GNF</span>
                }
                <span class="text-sm text-surface-500 dark:text-surface-300 mt-3">{{ stat?.nb_factures_impayees ?? 0 }} en attente</span>
            </div>
        </div>

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
