import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ChartData, ChartOptions } from 'chart.js';
import { LayoutService } from '@/layout/service/layout.service';
import { DashboardService, VentesEvolutionStatutPeriod } from '@/services/dashboard/dashboard.service';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SelectModule } from 'primeng/select';
import { debounceTime } from 'rxjs';

interface EvolutionStatutResponse {
    period: { key: string; from: string; to: string; granularity: string };
    labels: string[];
    datasets: Array<{ statut: string; label: string; data: number[] }>;
}

@Component({
    selector: 'app-bar-widget',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectModule, ChartModule, FluidModule, ProgressSpinnerModule],
    template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Evolution CA Payees vs Impayees</h2>
                    <p-select
                        [options]="periodOptions"
                        [ngModel]="selectedPeriod()"
                        (ngModelChange)="selectedPeriod.set($event)"
                        optionLabel="label"
                        optionValue="value"
                        styleClass="w-48"
                    />
                </div>

                @if (loading()) {
                    <div class="flex justify-center items-center h-48">
                        <p-progressSpinner strokeWidth="4" />
                    </div>
                } @else if (error()) {
                    <p class="text-red-500 text-center">{{ error() }}</p>
                } @else if (chartData()) {
                    <p-chart type="bar" [data]="chartData()!" [options]="chartOptions()" height="300px"></p-chart>
                }
            </div>
        </div>
    `
})
export class BarWidget {
    readonly periodOptions: { label: string; value: VentesEvolutionStatutPeriod }[] = [
        { label: "Aujourd'hui", value: 'today' },
        { label: 'Hier', value: 'yesterday' },
        { label: 'Cette semaine', value: 'this_week' },
        { label: 'Semaine derniere', value: 'last_week' },
        { label: 'Ce mois', value: 'this_month' },
        { label: 'Mois dernier', value: 'last_month' },
        { label: 'T1', value: 'q1' },
        { label: 'T2', value: 'q2' },
        { label: 'T3', value: 'q3' },
        { label: 'T4', value: 'q4' },
        { label: 'S1', value: 's1' },
        { label: 'S2', value: 's2' },
        { label: 'Cette annee', value: 'this_year' },
        { label: 'Annee derniere', value: 'last_year' }
    ];
    selectedPeriod = signal<VentesEvolutionStatutPeriod>('this_year');

    private readonly dashboardService = inject(DashboardService);
    private readonly layoutService = inject(LayoutService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly platformId = inject(PLATFORM_ID);

    loading = signal(false);
    error = signal<string | null>(null);
    chartData = signal<ChartData<'bar'> | null>(null);
    chartOptions = signal<ChartOptions<'bar'>>(this.buildOptions());

    constructor() {
        this.layoutService.configUpdate$
            .pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                this.chartOptions.set(this.buildOptions());
            });

        effect(() => {
            const period = this.selectedPeriod();
            this.load(period);
        });
    }

    private load(period: VentesEvolutionStatutPeriod): void {
        this.loading.set(true);
        this.error.set(null);

        this.dashboardService
            .getVentesEvolutionParStatut(period)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (d: EvolutionStatutResponse) => {

                    this.chartData.set({
                        labels: d.labels,
                        datasets: d.datasets.map((ds) => {
                            const colors: Record<string, string> = {
                                payee: '#22c55e',
                                partiel: '#f97316',
                                impayee: '#ef4444'
                            };

                            return {
                                label: ds.label,
                                data: ds.data,
                                backgroundColor: colors[ds.statut] ?? '#94a3b8',
                                borderRadius: 4,
                                borderSkipped: false
                            };
                        })
                    });

                    this.loading.set(false);
                },
                error: () => {
                    this.error.set('Erreur de chargement');
                    this.loading.set(false);
                }
            });
    }

    private buildOptions(): ChartOptions<'bar'> {
        const textColor = this.readCssVar('--text-color', '#1f2937');
        const textColorSecondary = this.readCssVar('--text-color-secondary', '#6b7280');

        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: textColor
                    }
                },
                tooltip: {
                    callbacks: {
                        label: (ctx: any) => {
                            return `${ctx.dataset.label}: ${Number(ctx.parsed.y ?? 0).toLocaleString('fr-FR')} GNF`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: false,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: textColorSecondary
                    }
                },
                y: {
                    stacked: false,
                    ticks: {
                        color: textColorSecondary,
                        callback: (v: string | number) => Number(v).toLocaleString('fr-FR')
                    }
                }
            }
        };
    }

    private readCssVar(name: string, fallback: string): string {
        if (!isPlatformBrowser(this.platformId)) {
            return fallback;
        }

        const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return value || fallback;
    }
}
