import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ChartData, ChartOptions } from 'chart.js';
import { LayoutService } from '@/layout/service/layout.service';
import { DashboardService, VentesParTypePeriod } from '@/services/dashboard/dashboard.service';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { SelectModule } from 'primeng/select';
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
    imports: [CommonModule, FormsModule, SelectModule, SkeletonModule, ChartModule, FluidModule],
    template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card flex flex-col items-center">
                <div class="flex w-full items-center justify-between mb-4">
                    <div class="font-semibold text-xl">Commandes par type de vehicule</div>
                    <p-select
                        [options]="periodOptions"
                        [ngModel]="selectedPeriod()"
                        (ngModelChange)="selectedPeriod.set($event)"
                        optionLabel="label"
                        optionValue="value"
                        [style]="{ 'min-width': '160px' }"
                    />
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
    readonly periodOptions: { label: string; value: VentesParTypePeriod }[] = [
        { label: "Aujourd'hui", value: 'today' },
        { label: 'Ce mois', value: 'this_month' },
        { label: 'Mois dernier', value: 'last_month' },
        { label: 'Cette annee', value: 'this_year' },
        { label: 'Annee derniere', value: 'last_year' }
    ];

    selectedPeriod = signal<VentesParTypePeriod>('this_month');
    loading = signal(false);
    errorMessage = signal<string | null>(null);
    private rawData = signal<ParTypeItem[]>([]);
    readonly hasData = computed(() => {
        const items = this.rawData();
        if (!items.length) {
            return false;
        }
        const totalCa = items.reduce((sum, item) => sum + (Number(item.ca_total) || 0), 0);
        return totalCa > 0;
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
            .subscribe(() => {
                this.initCharts();
            });

        effect(() => {
            this.load(this.selectedPeriod());
        });
    }

    private load(period: VentesParTypePeriod): void {
        this.loading.set(true);
        this.errorMessage.set(null);

        this.dashboardService
            .getVentesParTypeVehicule(period)
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
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

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
            datasets: [
                {
                    data: items.map((i) => i.ca_total),
                    backgroundColor: items.map((i) => colorMap[i.type_vehicule] ?? gray500),
                    hoverBackgroundColor: items.map((i) => hoverMap[i.type_vehicule] ?? gray400)
                }
            ]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx: any) => {
                            const item = items[ctx.dataIndex];
                            if (!item) {
                                return '';
                            }

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
