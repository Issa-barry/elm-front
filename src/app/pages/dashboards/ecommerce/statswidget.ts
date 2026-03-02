import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { DashboardService, DashboardStats } from '@/services/dashboard/dashboard.service';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, SkeletonModule],
    template: `
        @if (loading) {
            @for (i of [1, 2, 3, 4]; track i) {
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <p-skeleton height="1.5rem" width="60%" />
                        <div class="flex justify-between items-start mt-4">
                            <div class="w-6/12">
                                <p-skeleton height="2.5rem" width="80%" styleClass="mb-2" />
                                <p-skeleton height="1rem" width="50%" />
                            </div>
                            <div class="w-6/12">
                                <p-skeleton height="4rem" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        }

        @if (!loading && stats) {
            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Prestataires</span>
                    <div class="flex justify-between items-start mt-4">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.prestataires.value }}</span>
                            <div [class]="trendClass(stats.prestataires.trend)">
                                <span class="font-medium">{{ formatDelta(stats.prestataires.delta_pct) }}</span>
                                @if (stats.prestataires.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.prestataires.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.prestataires.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.prestataires.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Packing</span>
                    <div class="flex justify-between items-start mt-4">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.utilisateurs.value }}</span>
                            <div [class]="trendClass(stats.utilisateurs.trend)">
                                <span class="font-medium">{{ formatDelta(stats.utilisateurs.delta_pct) }}</span>
                                @if (stats.utilisateurs.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.utilisateurs.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.utilisateurs.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.utilisateurs.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Utilisateurs</span>
                    <div class="flex justify-between items-start mt-4">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.utilisateurs.value }}</span>
                            <div [class]="trendClass(stats.utilisateurs.trend)">
                                <span class="font-medium">{{ formatDelta(stats.utilisateurs.delta_pct) }}</span>
                                @if (stats.utilisateurs.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.utilisateurs.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.utilisateurs.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.utilisateurs.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Véhicules</span>
                    <div class="flex justify-between items-start mt-4">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.vehicules.value }}</span>
                            <div [class]="trendClass(stats.vehicules.trend)">
                                <span class="font-medium">{{ formatDelta(stats.vehicules.delta_pct) }}</span>
                                @if (stats.vehicules.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.vehicules.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.vehicules.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.vehicules.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Rouleaux en stock</span>
                    <div class="flex justify-between items-start mt-4">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.rouleaux_stock.value }}</span>
                            <div [class]="trendClass(stats.rouleaux_stock.trend)">
                                <span class="font-medium">{{ formatDelta(stats.rouleaux_stock.delta_pct) }}</span>
                                @if (stats.rouleaux_stock.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.rouleaux_stock.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.rouleaux_stock.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.rouleaux_stock.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        }
    `,
    host: {
        '[style.display]': '"contents"'
    }
})
export class StatsWidget implements OnInit {
    @Input() period: string = 'this_month';

    private readonly dashboardService = inject(DashboardService);

    stats: DashboardStats | null = null;
    loading = true;

    ngOnInit(): void {
        this.dashboardService.getStats(this.period).subscribe({
            next: (data) => {
                this.stats = data;
                this.loading = false;
            },
            error: (err) => {
                console.error('[StatsWidget] Erreur chargement stats:', err);
                this.loading = false;
            }
        });
    }

    sparklinePath(points: number[]): string {
        if (!points || points.length < 2) return '';
        const W = 258, H = 96, pad = 5;
        const min = Math.min(...points);
        const max = Math.max(...points);
        const range = max - min || 1;
        const step = (W - pad * 2) / (points.length - 1);
        return points
            .map((p, i) => {
                const x = pad + i * step;
                const y = H - pad - ((p - min) / range) * (H - pad * 2);
                return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
            })
            .join(' ');
    }

    trendClass(trend: string): string {
        if (trend === 'up') return 'text-green-500';
        if (trend === 'down') return 'text-pink-500';
        return 'text-surface-400';
    }

    trendIcon(trend: string): string {
        if (trend === 'up') return 'pi pi-arrow-up text-xs ml-2';
        if (trend === 'down') return 'pi pi-arrow-down text-xs ml-2';
        return '';
    }

    strokeColor(trend: string): string {
        return trend === 'down' ? 'var(--p-pink-500)' : 'var(--primary-color)';
    }

    formatDelta(delta: number | null): string {
        if (delta === null) return '—';
        return `${delta >= 0 ? '+' : ''}${delta}%`;
    }
}
