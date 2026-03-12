import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { ChartData, ChartOptions } from 'chart.js';
import { LayoutService } from '@/layout/service/layout.service';
import { DashboardService } from '@/services/dashboard/dashboard.service';
import { DashboardPeriodService } from '@/services/dashboard/dashboard-period.service';
import { ChartModule } from 'primeng/chart';
import { FluidModule } from 'primeng/fluid';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { debounceTime } from 'rxjs';

interface EvolutionStatutResponse {
    period: { key: string; from: string; to: string; granularity: string };
    labels: string[];
    datasets: Array<{ statut: string; label: string; data: number[] }>;
}

@Component({
    selector: 'app-bar-widget',
    standalone: true,
    imports: [CommonModule, ChartModule, FluidModule, ProgressSpinnerModule],
    template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Evolution CA Payees vs Impayees</h2>
                    <span class="text-sm text-surface-500">{{ periodService.currentLabel() }}</span>
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
    readonly periodService = inject(DashboardPeriodService);

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
            .subscribe(() => this.chartOptions.set(this.buildOptions()));

        effect(() => {
            const period = this.periodService.period();
            const days = this.periodService.customDays();
            this.load(period, days);
        });
    }

    private load(
        period = this.periodService.period(),
        days = this.periodService.customDays()
    ): void {
        this.loading.set(true);
        this.error.set(null);

        this.dashboardService
            .getVentesEvolutionParStatut(period, period === 'last_x_days' ? days : null)
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
                legend: { position: 'top', labels: { color: textColor } },
                tooltip: {
                    callbacks: {
                        label: (ctx: any) =>
                            `${ctx.dataset.label}: ${Number(ctx.parsed.y ?? 0).toLocaleString('fr-FR')} GNF`
                    }
                }
            },
            scales: {
                x: { stacked: false, grid: { display: false }, ticks: { color: textColorSecondary } },
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
        if (!isPlatformBrowser(this.platformId)) return fallback;
        const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return value || fallback;
    }
}
