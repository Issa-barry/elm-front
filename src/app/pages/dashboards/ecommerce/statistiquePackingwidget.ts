import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '@/layout/service/layout.service';
import { PackingService } from '@/services/packing/packing.service';

interface PeriodOption {
    label: string;
    value: string;
}

@Component({
    standalone: true,
    selector: 'app-statistique-packing-widget',
    imports: [SelectModule, ChartModule, FormsModule],
    template: ` <div class="card h-full">
        <div class="flex items-start justify-between mb-12">
            <span
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold"
                >Statistiques Packing</span
            >
            <p-select
                [options]="periods"
                [(ngModel)]="selectedPeriod"
                class="w-56"
                optionLabel="label"
                optionValue="value"
                (onChange)="onPeriodChange()"
            ></p-select>
        </div>
        <p-chart
            type="bar"
            height="300"
            [data]="barData"
            [options]="barOptions"
        ></p-chart>
    </div>`,
})
export class StatistiquePackingWidget {
    periods: PeriodOption[] = [
        { label: "Aujourd'hui", value: 'today' },
        { label: 'Hier', value: 'yesterday' },
        { label: 'Cette semaine', value: 'this_week' },
        { label: 'Semaine dernière', value: 'last_week' },
        { label: 'Ce mois', value: 'this_month' },
        { label: 'Mois dernier', value: 'last_month' },
        { label: 'T1 (Jan-Mar)', value: 'q1' },
        { label: 'T2 (Avr-Jun)', value: 'q2' },
        { label: 'T3 (Jul-Sep)', value: 'q3' },
        { label: 'T4 (Oct-Déc)', value: 'q4' },
        { label: '1er semestre', value: 's1' },
        { label: '2ème semestre', value: 's2' },
        { label: 'Cette année', value: 'this_year' },
        { label: 'Année dernière', value: 'last_year' },
    ];

    selectedPeriod = 'this_week';

    barData: any;
    barOptions: any;
    subscription: Subscription;

    private lastLabels: string[] = [];
    private lastPayee: number[] = [];
    private lastImpayee: number[] = [];
    private lastPartielle: number[] = [];

    constructor(
        private layoutService: LayoutService,
        private packingService: PackingService,
    ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(50))
            .subscribe(() => {
                this.initChart(this.lastLabels, this.lastPayee, this.lastImpayee, this.lastPartielle);
            });
    }

    ngOnInit() {
        this.initChart([], [], [], []);
        this.loadStats();
    }

    loadStats() {
        this.packingService.getStats(this.selectedPeriod).subscribe((res) => {
            const labels = res.data.labels ?? [];
            const payee = this.normalizeSeries(res.data.payee, labels.length);
            const impayee = this.normalizeSeries(res.data.impayee, labels.length);
            const partielle = this.normalizeSeries(
                res.data.partielle ?? res.data.partiellement_payee,
                labels.length,
            );
            this.lastLabels = labels;
            this.lastPayee = payee;
            this.lastImpayee = impayee;
            this.lastPartielle = partielle;
            this.initChart(labels, payee, impayee, partielle);
        });
    }

    private normalizeSeries(series: number[] | undefined, targetLength: number): number[] {
        const values = series ?? [];
        if (values.length >= targetLength) {
            return values.slice(0, targetLength);
        }
        return [...values, ...Array(targetLength - values.length).fill(0)];
    }

    initChart(labels: string[], payee: number[], impayee: number[], partielle: number[]) {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const primary500 = documentStyle.getPropertyValue('--p-primary-500').trim() || '#6366f1';
        const primary200 = documentStyle.getPropertyValue('--p-primary-200').trim() || '#c7d2fe';
        const amber400 = documentStyle.getPropertyValue('--p-amber-400').trim() || '#f59e0b';

        this.barData = {
            labels,
            datasets: [
                {
                    label: 'Payée',
                    backgroundColor: primary500,
                    barThickness: 12,
                    borderRadius: 12,
                    data: payee,
                },
                {
                    label: 'Impayée',
                    backgroundColor: primary200,
                    barThickness: 12,
                    borderRadius: 12,
                    data: impayee,
                },
                {
                    label: 'Partiellement payee',
                    backgroundColor: amber400,
                    barThickness: 12,
                    borderRadius: 12,
                    data: partielle,
                },
            ],
        };

        this.barOptions = {
            animation: { duration: 0 },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        usePointStyle: true,
                        font: { weight: 700 },
                        padding: 28,
                    },
                    position: 'bottom',
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: { weight: 500 },
                    },
                    grid: { display: false, drawBorder: false },
                },
                y: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false },
                },
            },
        };
    }

    onPeriodChange() {
        this.loadStats();
    }
}
