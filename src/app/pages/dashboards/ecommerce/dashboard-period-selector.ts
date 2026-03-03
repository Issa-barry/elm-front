import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DashboardPeriodService, DashboardPeriod } from '@/services/dashboard/dashboard-period.service';

interface PeriodOption {
    label: string;
    value: DashboardPeriod;
}

interface PeriodGroup {
    label: string;
    items: PeriodOption[];
}

@Component({
    standalone: true,
    selector: 'app-dashboard-period-selector',
    imports: [SelectModule, InputNumberModule, FormsModule],
    template: `
        <div class="flex items-center gap-2">
            <p-select
                [options]="groups"
                [(ngModel)]="selectedPeriod"
                optionLabel="label"
                optionValue="value"
                [group]="true"
                optionGroupLabel="label"
                optionGroupChildren="items"
                class="w-52"
                (onChange)="onPeriodChange()"
            />
            @if (selectedPeriod === 'last_x_days') {
                <p-inputnumber
                    [(ngModel)]="customDays"
                    [min]="1"
                    [max]="365"
                    [useGrouping]="false"
                    suffix=" j"
                    inputStyleClass="w-20"
                    styleClass="w-24"
                    (onInput)="onDaysChange($event)"
                />
            }
        </div>
    `,
})
export class DashboardPeriodSelector {
    private readonly periodService = inject(DashboardPeriodService);

    selectedPeriod: DashboardPeriod = this.periodService.period();
    customDays: number = this.periodService.customDays();

    readonly groups: PeriodGroup[] = [
        { label: 'Jour', items: [
            { label: "Aujourd'hui", value: 'today' },
            { label: 'Hier',        value: 'yesterday' },
        ]},
        { label: 'Semaine', items: [
            { label: 'Cette semaine',    value: 'this_week' },
            { label: 'Semaine dernière', value: 'last_week' },
        ]},
        { label: 'Mois', items: [
            { label: 'Ce mois',     value: 'this_month' },
            { label: 'Mois dernier', value: 'last_month' },
        ]},
        { label: 'Trimestre', items: [
            { label: 'T1 (Jan–Mar)', value: 'q1' },
            { label: 'T2 (Avr–Jun)', value: 'q2' },
            { label: 'T3 (Jul–Sep)', value: 'q3' },
            { label: 'T4 (Oct–Déc)', value: 'q4' },
        ]},
        { label: 'Semestre', items: [
            { label: 'S1 (Jan–Jun)', value: 's1' },
            { label: 'S2 (Jul–Déc)', value: 's2' },
        ]},
        { label: 'Année', items: [
            { label: 'Cette année',    value: 'this_year' },
            { label: 'Année dernière', value: 'last_year' },
        ]},
        { label: 'Personnalisé', items: [
            { label: 'X derniers jours', value: 'last_x_days' },
        ]},
    ];

    onPeriodChange(): void {
        this.periodService.setPeriod(this.selectedPeriod);
    }

    onDaysChange(event: any): void {
        const val = event?.value ?? this.customDays;
        if (val >= 1) {
            this.periodService.setCustomDays(val);
            this.periodService.setPeriod('last_x_days');
        }
    }
}
