import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '@/layout/service/layout.service';
import { DashboardService, VehiculeParType } from '@/services/dashboard/dashboard.service';

const BG_PALETTE = ['--p-primary-700', '--p-primary-500', '--p-primary-400', '--p-primary-300', '--p-primary-100'];
const HOVER_PALETTE = ['--p-primary-600', '--p-primary-400', '--p-primary-300', '--p-primary-200', '--p-primary-50'];

@Component({
    standalone: true,
    selector: 'app-sales-by-category-widget',
    imports: [CommonModule, ChartModule, SkeletonModule],
    template: `
        <div class="card h-full">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-12">Categorie de véhicule</div>
            @if (loading) {
                <div class="flex justify-center">
                    <p-skeleton shape="circle" size="300px" />
                </div>
            } @else {
                <p-chart type="pie" [data]="pieData" height="300" [options]="pieOptions"></p-chart>
            }
        </div>
    `
})
export class SalesByCategoryWidget implements OnInit, OnDestroy {
    pieData: any;
    pieOptions: any;
    loading = true;

    private vehiculesParType: VehiculeParType[] = [];
    private readonly subscription = new Subscription();
    private readonly layoutService = inject(LayoutService);
    private readonly dashboardService = inject(DashboardService);

    ngOnInit(): void {
        this.subscription.add(
            this.layoutService.configUpdate$
                .pipe(debounceTime(50))
                .subscribe(() => this.initChart())
        );

        this.subscription.add(
            this.dashboardService.getStats().subscribe({
                next: (data) => {
                    this.vehiculesParType = data.vehicules_par_type ?? [];
                    this.loading = false;
                    this.initChart();
                },
                error: (err) => {
                    console.error('[SalesByCategoryWidget] Erreur chargement stats:', err);
                    this.loading = false;
                    this.initChart();
                }
            })
        );
    }

    initChart(): void {
        const style = getComputedStyle(document.documentElement);
        const textColor = style.getPropertyValue('--text-color');

        this.pieData = {
            labels: this.vehiculesParType.map((v) => v.label),
            datasets: [
                {
                    data: this.vehiculesParType.map((v) => v.count),
                    backgroundColor: this.vehiculesParType.map((_, i) =>
                        style.getPropertyValue(BG_PALETTE[i % BG_PALETTE.length])
                    ),
                    hoverBackgroundColor: this.vehiculesParType.map((_, i) =>
                        style.getPropertyValue(HOVER_PALETTE[i % HOVER_PALETTE.length])
                    )
                }
            ]
        };

        this.pieOptions = {
            animation: { duration: 0 },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        font: { weight: 700 },
                        padding: 28
                    },
                    position: 'bottom'
                }
            }
        };
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
