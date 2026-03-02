import { Component, OnInit, effect, signal } from '@angular/core';
import { StatsWidget } from './ecommerce/statswidget';
import { RecentSalesWidget } from './ecommerce/recentsaleswidget';
import { RevenueOverViewWidget } from "./ecommerce/revenueoverviewwidget";
import { SalesByCategoryWidget } from "./ecommerce/salesbycategorywidget";
import { TopProductsWidget } from "./ecommerce/topproductswidget";
import { UsineContextService } from '@/services/usine/usine-context.service';

@Component({
    selector: 'app-ecommerce-dashboard',
    standalone: true,
    imports: [StatsWidget, RecentSalesWidget, RevenueOverViewWidget, SalesByCategoryWidget, TopProductsWidget],
    template: `
    @for (key of [refreshKey()]; track key) {
    <div class="grid grid-cols-12 gap-8">
            <app-stats-widget />
            <div class="col-span-12 xl:col-span-9">
             <app-revenue-overview-widget />
            </div>
        <div class="col-span-12 xl:col-span-3">
            <app-sales-by-category-widget />
        </div>
    </div>
    }
    `
})
export class EcommerceDashboard implements OnInit {
    refreshKey = signal(0);
    private readyForUsineReload = false;

    constructor(private usineContext: UsineContextService) {
        effect(() => {
            this.usineContext.currentUsineId();
            this.usineContext.isConsolidated();
            if (!this.readyForUsineReload) return;
            this.refreshKey.update((value) => value + 1);
        });
    }

    ngOnInit(): void {
        this.readyForUsineReload = true;
    }
}
