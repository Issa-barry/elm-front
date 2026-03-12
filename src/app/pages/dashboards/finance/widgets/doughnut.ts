import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ChartData, ChartOptions } from 'chart.js';
import { LayoutService } from '@/layout/service/layout.service';
import { DashboardService } from '@/services/dashboard/dashboard.service';
import { DashboardPeriodService } from '@/services/dashboard/dashboard-period.service';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { SkeletonModule } from 'primeng/skeleton';
import { debounceTime } from 'rxjs';

interface ParTypeItem {
    type_vehicule: string;
    label: string;
    ca_total: number;
    nb_commandes: number;
}

@Component({
    selector: 'app-doughnut-widget',
    standalone: true,
    imports: [CommonModule, SkeletonModule, ChartModule, FluidModule],
    template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card flex flex-col items-center">
                <div class="flex w-full items-center justify-between mb-4">
                    <div class="font-semibold text-xl">Commandes par type de vehicule</div>
                    <span class="text-sm text-surface-500">{{ periodService.currentLabel() }}</span>
                </div>

                @if (loading()) {
                    <p-skeleton height="200px" width="200px" borderRadius="50%" />
                } @else if (errorMessage()) {
                    <p class="text-red-500 text-sm">{{ errorMessage() }}</p>
                } @else if (!hasData()) {
                    <p class="text-surface-500 text-sm">Aucune donnee disponible pour cette periode.</p>
                } @else {
                    <p-chart type="doughnut" [data]="pieData" [options]="pieOptions"></p-chart>
                }
            </div>
        </div>
    `
})
export class DoughnutWidget {
    readonly periodService = inject(DashboardPeriodService);

    loading = signal(false);
    errorMessage = signal<string | null>(null);
    private rawData = signal<ParTypeItem[]>([]);
    readonly hasData = computed(() => {
        const items = this.rawData();
        if (!items.length) return false;
        return items.reduce((sum, item) => sum + (Number(item.ca_total) || 0), 0) > 0;
    });

    pieData: ChartData<'doughnut'> = { labels: [], datasets: [] };
    pieOptions: ChartOptions<'doughnut'> = {};

    private readonly dashboardService = inject(DashboardService);
    private readonly layoutService = inject(LayoutService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly platformId = inject(PLATFORM_ID);

    constructor() {
        this.layoutService.configUpdate$
            .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.initCharts());

        effect(() => {
            const period = this.periodService.period();
            const days = this.periodService.customDays();
            this.load(period, days);
        });
    }

    private load(period = this.periodService.period(), days = this.periodService.customDays()): void {
        this.loading.set(true);
        this.errorMessage.set(null);

        this.dashboardService
            .getVentesParTypeVehicule(period, days)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (res) => {
                    this.rawData.set(res?.par_type ?? []);
                    this.initCharts();
                    this.loading.set(false);
                },
                error: () => {
                    this.rawData.set([]);
                    this.errorMessage.set('Erreur de chargement');
                    this.loading.set(false);
                }
            });
    }

    initCharts(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        const colorMap: Record<string, string> = {
            camion: documentStyle.getPropertyValue('--p-indigo-500'),
            tricycle: documentStyle.getPropertyValue('--p-purple-500'),
            vanne: documentStyle.getPropertyValue('--p-teal-500')
        };
        const hoverMap: Record<string, string> = {
            camion: documentStyle.getPropertyValue('--p-indigo-400'),
            tricycle: documentStyle.getPropertyValue('--p-purple-400'),
            vanne: documentStyle.getPropertyValue('--p-teal-400')
        };

        const gray500 = documentStyle.getPropertyValue('--p-gray-500');
        const gray400 = documentStyle.getPropertyValue('--p-gray-400');
        const items = this.rawData();

        this.pieData = {
            labels: items.map((i) => i.label),
            datasets: [{
                data: items.map((i) => i.ca_total),
                backgroundColor: items.map((i) => colorMap[i.type_vehicule] ?? gray500),
                hoverBackgroundColor: items.map((i) => hoverMap[i.type_vehicule] ?? gray400)
            }]
        };

        this.pieOptions = {
            plugins: {
                legend: { labels: { usePointStyle: true, color: textColor } },
                tooltip: {
                    callbacks: {
                        label: (ctx: any) => {
                            const item = items[ctx.dataIndex];
                            if (!item) return '';
                            return [
                                ` ${item.nb_commandes} commande(s)`,
                                ` CA : ${item.ca_total.toLocaleString('fr-FR')} GNF`
                            ];
                        }
                    }
                }
            }
        };
    }
}
