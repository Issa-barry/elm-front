import { Component, inject, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '@/services/auth/auth.service';

@Component({
    standalone: true,
    selector: 'app-header-widget2',
    imports: [ButtonModule, TooltipModule],
    template: `
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img
                    alt="avatar"
                    src="/demo/images/avatar/circle/avatar-m-12.png"
                    class="w-16 h-16 shrink-0"
                />
                <div class="flex flex-col items-center sm:items-start">
                    <span
                        class="text-surface-900 dark:text-surface-0 font-bold text-4xl"
                        > {{ nomComplet() }}</span
                    >
                    <p class="text-surface-600 dark:text-surface-200 m-0">
                        {{ lastLoginLabel() }}
                    </p>
                </div>
            </div>
            <div class="flex gap-2 sm:ml-auto">
                <p-button
                    pTooltip="Exchange"
                    tooltipPosition="bottom"
                    icon="pi pi-arrows-h"
                    outlined
                    rounded
                ></p-button>
                <p-button
                    pTooltip="Withdraw"
                    tooltipPosition="bottom"
                    icon="pi pi-download"
                    outlined
                    rounded
                ></p-button>
                <p-button
                    pTooltip="Send"
                    tooltipPosition="bottom"
                    icon="pi pi-send"
                    rounded
                ></p-button>
            </div>
        </div>
    `,
})
export class HeaderWidget2 {
    private auth = inject(AuthService);

    nomComplet = computed(() => this.auth.currentUser()?.nom_complet ?? '');

    lastLoginLabel = computed(() => {
        const dt = this.auth.currentUser()?.last_login_at;
        if (!dt) return 'Première connexion';
        const d = new Date(dt);
        const date = d.toLocaleDateString('fr-FR');
        const time = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        return `Dernière connexion le ${date} à ${time}`;
    });
}
