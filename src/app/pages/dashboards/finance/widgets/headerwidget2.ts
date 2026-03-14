import { Component, EventEmitter, Input, Output, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '@/services/auth/auth.service';
import { VentesEncaissementsPeriod } from '@/services/dashboard/dashboard.service';

@Component({
    standalone: true,
    selector: 'app-header-widget2',
    imports: [FormsModule, ButtonModule, SelectModule, TooltipModule],
    template: `
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <div class="w-16 h-16 shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl select-none">
                        {{ initiales() }}
                    </div>
                <div class="flex flex-col items-center sm:items-start">
                    <span class="text-surface-900 dark:text-surface-0 font-bold text-xl">{{ nomComplet() }}</span>
                    <p class="text-surface-600 dark:text-surface-200 m-0">{{ lastLoginLabel() }}</p>
                </div>
            </div>

            <div class="flex items-center gap-3 flex-nowrap sm:ml-auto">
                <div class="flex items-center gap-2 shrink-0">
                    <div class="hidden sm:block">
                        <p-button pTooltip="Exchange" tooltipPosition="bottom" icon="pi pi-arrows-h" outlined rounded />
                    </div>
                    <p-button pTooltip="Withdraw" tooltipPosition="bottom" icon="pi pi-download" outlined rounded />
                    <p-button pTooltip="Send" tooltipPosition="bottom" icon="pi pi-send" rounded />
                </div>

                <p-select
                    [options]="periodOptions"
                    [ngModel]="period"
                    (ngModelChange)="onPeriodChange($event)"
                    optionLabel="label"
                    optionValue="value"
                    [style]="{ 'min-width': '160px' }"
                />
            </div>
        </div>
    `
})
export class HeaderWidget2 {
    private auth = inject(AuthService);

    @Input() period: VentesEncaissementsPeriod = 'this_month';
    @Output() periodChange = new EventEmitter<VentesEncaissementsPeriod>();

    readonly periodOptions: { label: string; value: VentesEncaissementsPeriod }[] = [
        { label: 'Ce mois', value: 'this_month' },
        { label: 'Mois dernier', value: 'last_month' },
        { label: 'Cette annee', value: 'this_year' },
        { label: 'Cette semaine', value: 'this_week' }
    ];

    nomComplet = computed(() => this.auth.currentUser()?.nom_complet ?? '');

    initiales = computed(() => {
        const u = this.auth.currentUser();
        if (!u) return '?';
        const p = (u.prenom?.[0] ?? '').toUpperCase();
        const n = (u.nom?.[0] ?? '').toUpperCase();
        return p + n || '?';
    });

    lastLoginLabel = computed(() => {
        const dt = this.auth.currentUser()?.last_login_at;
        if (!dt) return 'Premiere connexion';
        const d = new Date(dt);
        const date = d.toLocaleDateString('fr-FR');
        const time = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        return `Derniere connexion le ${date} a ${time}`;
    });

    onPeriodChange(value: VentesEncaissementsPeriod): void {
        this.periodChange.emit(value);
    }
}
