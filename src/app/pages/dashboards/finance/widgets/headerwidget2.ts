import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
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
    private brokenPhotoUrl = signal<string | null>(null);

    @Input() period: VentesEncaissementsPeriod = 'this_month';
    @Output() periodChange = new EventEmitter<VentesEncaissementsPeriod>();

    readonly periodOptions: { label: string; value: VentesEncaissementsPeriod }[] = [
        { label: 'Ce mois', value: 'this_month' },
        { label: 'Mois dernier', value: 'last_month' },
        { label: 'Cette annee', value: 'this_year' },
        { label: 'Cette semaine', value: 'this_week' }
    ];

    nomComplet = computed(() => this.auth.currentUser()?.nom_complet ?? '');
    profileInitial = computed(() => {
        const user = this.auth.currentUser();
        const prenomTokens = this.getNameTokens(user?.prenom);
        const nomTokens = this.getNameTokens(user?.nom);

        // Cas standard: prenom + nom => ex: Moussa Sidibe => MS
        if (prenomTokens.length > 0 && nomTokens.length > 0) {
            return `${this.getInitial(prenomTokens[0])}${this.getInitial(nomTokens[0])}`.toUpperCase();
        }

        // Cas avec 2 prenoms et nom absent => ex: Jean Claude => JC
        if (prenomTokens.length >= 2) {
            return `${this.getInitial(prenomTokens[0])}${this.getInitial(prenomTokens[1])}`.toUpperCase();
        }

        if (prenomTokens.length === 1) {
            return this.getInitial(prenomTokens[0]).toUpperCase();
        }

        if (nomTokens.length >= 2) {
            return `${this.getInitial(nomTokens[0])}${this.getInitial(nomTokens[1])}`.toUpperCase();
        }

        if (nomTokens.length === 1) {
            return this.getInitial(nomTokens[0]).toUpperCase();
        }

        const fullNameTokens = this.getNameTokens(this.nomComplet());
        if (fullNameTokens.length >= 2) {
            return `${this.getInitial(fullNameTokens[0])}${this.getInitial(fullNameTokens[fullNameTokens.length - 1])}`.toUpperCase();
        }

        if (fullNameTokens.length === 1) {
            return this.getInitial(fullNameTokens[0]).toUpperCase();
        }

        return 'U';
    });

    profilePhotoUrl = computed(() => {
        const user = this.auth.currentUser() as Record<string, unknown> | null;
        if (!user) {
            return null;
        }

        const candidates = ['photo_url', 'avatar_url', 'profile_photo_url', 'image_url', 'avatar', 'photo', 'image'];
        for (const key of candidates) {
            const value = user[key];
            const url = this.normalizePhotoValue(value);
            if (url) {
                return url === this.brokenPhotoUrl() ? null : url;
            }
        }

        return null;
    });

    userRoleLabel = computed(() => {
        const user = this.auth.currentUser();
        if (!user) {
            return 'Role : Utilisateur';
        }

        const roleCandidates = [...(user.roles ?? []), ...(user.role_names ?? [])]
            .map((value) => value?.trim())
            .filter((value): value is string => !!value);
        const uniqueRoles = Array.from(new Set(roleCandidates));

        const primaryRole = uniqueRoles[0] ?? user.type_label ?? user.type ?? 'Utilisateur';
        return `Role : ${this.formatRoleLabel(primaryRole)}`;
    });

    onPeriodChange(value: VentesEncaissementsPeriod): void {
        this.periodChange.emit(value);
    }

    onProfilePhotoError(failedUrl: string): void {
        this.brokenPhotoUrl.set(failedUrl);
    }

    private normalizePhotoValue(value: unknown): string | null {
        if (typeof value === 'string' && value.trim().length > 0) {
            return value.trim();
        }

        if (value && typeof value === 'object') {
            const objectValue = value as Record<string, unknown>;
            const nested = [objectValue['url'], objectValue['src'], objectValue['path']];
            for (const candidate of nested) {
                if (typeof candidate === 'string' && candidate.trim().length > 0) {
                    return candidate.trim();
                }
            }
        }

        return null;
    }

    private getNameTokens(value: string | null | undefined): string[] {
        return (value ?? '')
            .trim()
            .split(/\s+/)
            .filter((token) => token.length > 0);
    }

    private getInitial(token: string): string {
        return token.charAt(0);
    }

    private formatRoleLabel(role: string): string {
        return role
            .replace(/[_-]+/g, ' ')
            .trim()
            .replace(/\s+/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }
}
