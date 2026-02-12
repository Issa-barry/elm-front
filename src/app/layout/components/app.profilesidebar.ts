import { Component, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge';
import { LayoutService } from '@/layout/service/layout.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '@/services/auth/auth.service';
import { finalize } from 'rxjs';

@Component({
    selector: '[app-profilesidebar]',
    imports: [ButtonModule, DrawerModule, BadgeModule, RouterModule],
    template: `
        <p-drawer
            [visible]="visible()"
            (onHide)="onDrawerHide()"
            position="right"
            [closable]="!isLoggingOut"
            [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
            styleClass="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div class="flex flex-col mx-auto md:mx-0">
                <span class="mb-2 font-semibold">Welcome</span>
                <span class="text-surface-500 dark:text-surface-400 font-medium mb-8">Moussa Sidibé</span>

                <ul class="list-none m-0 p-0">
                    <li>
                        <a
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-user text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Profile</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">Mon compte</p>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a
                            [routerLink]="['/parametres']"
                            (click)="onDrawerHide()"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i class="pi pi-cog text-xl text-primary"></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">Paramètres</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">Gestion de paramètres</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            (click)="onLogout($event)"
                            [class.pointer-events-none]="isLoggingOut"
                            [class.opacity-60]="isLoggingOut"
                            class="cursor-pointer flex mb-4 p-4 items-center border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                        >
                            <span>
                                <i
                                    class="text-xl text-primary pi"
                                    [class.pi-spin]="isLoggingOut"
                                    [class.pi-spinner]="isLoggingOut"
                                    [class.pi-power-off]="!isLoggingOut"
                                ></i>
                            </span>
                            <div class="ml-4">
                                <span class="mb-2 font-semibold">{{ isLoggingOut ? 'Déconnexion...' : 'Déconnexion' }}</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0">
                                    {{ isLoggingOut ? 'Veuillez patienter' : 'Bouton de déconnexion' }}
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </p-drawer>
    `,
})
export class AppProfileSidebar {
    isLoggingOut = false;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    visible = computed(() => this.layoutService.layoutState().profileSidebarVisible);

    onDrawerHide() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: false,
        }));
    }

    onLogout(event: Event) {
        event.preventDefault();
        if (this.isLoggingOut) return;
        this.isLoggingOut = true;
        this.authService.logout().pipe(
            finalize(() => {
                this.isLoggingOut = false;
            })
        ).subscribe({
            error: () => {
                // Le service gère déjà la déconnexion locale et la redirection.
            }
        });
    }
}
