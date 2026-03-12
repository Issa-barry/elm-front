import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '@/services/auth/auth.service';
import { DashboardPeriodService, DashboardPeriod } from '@/services/dashboard/dashboard-period.service';

interface PeriodOption { label: string; value: DashboardPeriod; }
interface PeriodGroup  { label: string; items: PeriodOption[]; }

@Component({
    standalone: true,
    selector: 'app-header-widget2',
    imports: [FormsModule, ButtonModule, SelectModule, InputNumberModule, TooltipModule],
    template: `
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <div
                    class="w-16 h-16 shrink-0 rounded-full border border-primary bg-primary overflow-hidden flex items-center justify-center"
                >
                    @if (profilePhotoUrl(); as photoUrl) {
                        <img
                            [src]="photoUrl"
                            alt="Photo de profil"
                            class="w-full h-full object-cover"
                            (error)="onProfilePhotoError(photoUrl)"
                        />
                    } @else {
                        <span class="text-white font-semibold text-xl leading-none select-none">{{ profileInitial() }}</span>
                    }
                </div>
                <div class="flex flex-col items-center sm:items-start">
                    <span class="text-surface-900 dark:text-surface-0 font-bold text-xl">{{ nomComplet() }}</span>
                    <p class="text-surface-600 dark:text-surface-200 m-0">{{ userRoleLabel() }}</p>
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

                <div class="flex items-center gap-2">
                    <p-select
                        [options]="periodGroups"
                        [ngModel]="periodService.period()"
                        (ngModelChange)="periodService.setPeriod($event)"
                        optionLabel="label"
                        optionValue="value"
                        [group]="true"
                        optionGroupLabel="label"
                        optionGroupChildren="items"
                        appendTo="body"
                        styleClass="w-52"
                    />
                    @if (periodService.period() === 'last_x_days') {
                        <p-inputnumber
                            [ngModel]="periodService.customDays()"
                            (ngModelChange)="periodService.setCustomDays($event)"
                            [min]="1"
                            [max]="365"
                            [useGrouping]="false"
                            suffix=" j"
                            inputStyleClass="w-20"
                            styleClass="w-24"
                        />
                    }
                </div>
            </div>
        </div>
    `
})
export class HeaderWidget2 {
    private auth = inject(AuthService);
    readonly periodService = inject(DashboardPeriodService);
    private brokenPhotoUrl = signal<string | null>(null);

    readonly periodGroups: PeriodGroup[] = [
        { label: 'Jour', items: [
            { label: "Aujourd'hui", value: 'today' },
            { label: 'Hier',        value: 'yesterday' },
        ]},
        { label: 'Semaine', items: [
            { label: 'Cette semaine',    value: 'this_week' },
            { label: 'Semaine dernière', value: 'last_week' },
        ]},
        { label: 'Mois', items: [
            { label: 'Ce mois',      value: 'this_month' },
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

    nomComplet = computed(() => this.auth.currentUser()?.nom_complet ?? '');
    profileInitial = computed(() => {
        const user = this.auth.currentUser();
        const prenomTokens = this.getNameTokens(user?.prenom);
        const nomTokens = this.getNameTokens(user?.nom);

        if (prenomTokens.length > 0 && nomTokens.length > 0) {
            return `${this.getInitial(prenomTokens[0])}${this.getInitial(nomTokens[0])}`.toUpperCase();
        }
        if (prenomTokens.length >= 2) {
            return `${this.getInitial(prenomTokens[0])}${this.getInitial(prenomTokens[1])}`.toUpperCase();
        }
        if (prenomTokens.length === 1) return this.getInitial(prenomTokens[0]).toUpperCase();
        if (nomTokens.length >= 2) {
            return `${this.getInitial(nomTokens[0])}${this.getInitial(nomTokens[1])}`.toUpperCase();
        }
        if (nomTokens.length === 1) return this.getInitial(nomTokens[0]).toUpperCase();

        const fullNameTokens = this.getNameTokens(this.nomComplet());
        if (fullNameTokens.length >= 2) {
            return `${this.getInitial(fullNameTokens[0])}${this.getInitial(fullNameTokens[fullNameTokens.length - 1])}`.toUpperCase();
        }
        if (fullNameTokens.length === 1) return this.getInitial(fullNameTokens[0]).toUpperCase();
        return 'U';
    });

    profilePhotoUrl = computed(() => {
        const user = this.auth.currentUser() as Record<string, unknown> | null;
        if (!user) return null;

        const candidates = ['photo_url', 'avatar_url', 'profile_photo_url', 'image_url', 'avatar', 'photo', 'image'];
        for (const key of candidates) {
            const url = this.normalizePhotoValue(user[key]);
            if (url) return url === this.brokenPhotoUrl() ? null : url;
        }
        return null;
    });

    userRoleLabel = computed(() => {
        const user = this.auth.currentUser();
        if (!user) return 'Role : Utilisateur';

        const roleCandidates = [...(user.roles ?? []), ...(user.role_names ?? [])]
            .map((v) => v?.trim())
            .filter((v): v is string => !!v);
        const uniqueRoles = Array.from(new Set(roleCandidates));
        const primaryRole = uniqueRoles[0] ?? user.type_label ?? user.type ?? 'Utilisateur';
        return `Role : ${this.formatRoleLabel(primaryRole)}`;
    });

    onProfilePhotoError(failedUrl: string): void {
        this.brokenPhotoUrl.set(failedUrl);
    }

    private normalizePhotoValue(value: unknown): string | null {
        if (typeof value === 'string' && value.trim().length > 0) return value.trim();
        if (value && typeof value === 'object') {
            const o = value as Record<string, unknown>;
            for (const k of ['url', 'src', 'path']) {
                if (typeof o[k] === 'string' && (o[k] as string).trim().length > 0) {
                    return (o[k] as string).trim();
                }
            }
        }
        return null;
    }

    private getNameTokens(value: string | null | undefined): string[] {
        return (value ?? '').trim().split(/\s+/).filter((t) => t.length > 0);
    }

    private getInitial(token: string): string { return token.charAt(0); }

    private formatRoleLabel(role: string): string {
        return role.replace(/[_-]+/g, ' ').trim().replace(/\s+/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
    }
}
