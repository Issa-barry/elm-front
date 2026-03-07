import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, PLATFORM_ID, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutService } from '@/layout/service/layout.service';
import {
    DashboardService,
    DashboardVentesEvolutionData,
    VentesEvolutionDataset,
    VentesEvolutionPeriod
} from '@/services/dashboard/dashboard.service';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { finalize } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-vehicule-widget',
    imports: [CommonModule, FormsModule, ChartModule, SelectModule, SkeletonModule, ButtonModule],
    template: `
        <div class="card h-full">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold">Part vehicule</div>
                <div class="sm:ml-auto">
                    <p-select
                        [options]="periodOptions"
                        [(ngModel)]="selectedPeriod"
                        (onChange)="onPeriodChange()"
                        optionLabel="label"
                        optionValue="value"
                        [style]="{ 'min-width': '180px' }"
                    />
                </div>
            </div>

            @if (loading) {
                <div class="flex flex-col gap-2">
                    @for (_ of [1, 2, 3, 4, 5]; track $index) {
                        <p-skeleton height="2.4rem" borderRadius="8px"></p-skeleton>
                    }
                </div>
            } @else if (errorMessage) {
                <div class="flex flex-col items-start gap-3 p-3 border-1 border-round surface-border">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            } @else if (!chartData?.labels?.length) {
                <div class="text-sm text-surface-500 p-3 border-1 border-round surface-border">
                    Aucune donnee disponible pour cette periode.
                </div>
            } @else {
                <p-chart type="line" [data]="chartData" [options]="chartOptions"></p-chart>
            }
        </div>
    `
})
export class VehiculewWidget implements OnInit {
    chartData: { labels: string[]; datasets: any[] } = { labels: [], datasets: [] };
    chartOptions: any;

    readonly periodOptions: { label: string; value: VentesEvolutionPeriod }[] = [
        { label: 'Cette annee', value: 'this_year' },
        { label: 'Annee passee', value: 'last_year' },
        { label: 'Ce semestre', value: 's1' },
        { label: 'Ce trimestre', value: 'q1' },
        { label: 'Ce mois', value: 'this_month' }
    ];

    selectedPeriod: VentesEvolutionPeriod = 'this_year';
    loading = false;
    errorMessage: string | null = null;
    private evolutionData: DashboardVentesEvolutionData | null = null;

    private readonly platformId = inject(PLATFORM_ID);
    private readonly layoutService = inject(LayoutService);
    private readonly dashboardService = inject(DashboardService);

    constructor(private readonly cd: ChangeDetectorRef) {}

    themeEffect = effect(() => {
        if (this.layoutService.transitionComplete()) {
            this.initChart(this.evolutionData ?? undefined);
        }
    });

    ngOnInit(): void {
        this.loadData();
    }

    onPeriodChange(): void {
        this.loadData();
    }

    loadData(): void {
        this.loading = true;
        this.errorMessage = null;

        this.dashboardService
            .getVentesEvolutionParType(this.selectedPeriod)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
                next: (data) => {
                    this.evolutionData = data ?? null;
                    this.initChart(this.evolutionData ?? undefined);
                },
                error: () => {
                    this.evolutionData = null;
                    this.chartData = { labels: [], datasets: [] };
                    this.errorMessage = "Impossible de charger l'evolution du CA par type.";
                    this.initChart();
                }
            });
    }

    initChart(apiData?: { labels: string[]; datasets: VentesEvolutionDataset[] }): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const datasets = apiData?.datasets ?? [];

        this.chartData = {
            labels: apiData?.labels ?? [],
            datasets: datasets.map((ds, i) => {
                const isFilled = i === datasets.length - 1;
                return {
                    label: ds.label,
                    data: ds.data,
                    fill: isFilled,
                    tension: 0.4,
                    borderColor: this.typeColor(ds.type_vehicule, documentStyle),
                    backgroundColor: isFilled ? 'rgba(99,102,220,0.2)' : undefined
                };
            })
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.65,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (context: any) => {
                            let label = context.dataset?.label ? `${context.dataset.label}: ` : '';
                            const value = context.parsed?.y;

                            if (value !== null && value !== undefined) {
                                label += `${new Intl.NumberFormat('fr-GN', {
                                    style: 'decimal',
                                    maximumFractionDigits: 0
                                }).format(value)} GNF`;
                            }

                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        this.cd.markForCheck();
    }

    typeColor(type: string, style: CSSStyleDeclaration): string {
        const map: Record<string, string> = {
            camion: style.getPropertyValue('--p-green-500'),
            tricycle: '#6366f1',
            vanne: style.getPropertyValue('--p-blue-500'),
            moto: style.getPropertyValue('--p-orange-500'),
            pick_up: style.getPropertyValue('--p-yellow-500'),
            autre: style.getPropertyValue('--p-gray-400')
        };

        return map[type] ?? style.getPropertyValue('--p-primary-500');
    }
}
