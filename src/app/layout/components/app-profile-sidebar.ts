import { CommonModule } from '@angular/common';
import { Component, computed, effect } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { BadgeModule } from 'primeng/badge';

import { LayoutService } from '@/layout/service/layout.service';
import { AuthService } from '@/services/auth/auth.service';
import { NotificationService } from '@/services/notifications/notification.service';
import { ApiNotification } from '@/models/notification.model';
import { AppUsineSelector } from './app.usine-selector';
import { UsineContextService } from '@/services/usine/usine-context.service';

@Component({
    selector: '[app-profilesidebar]',
    imports: [CommonModule, ButtonModule, DrawerModule, BadgeModule, RouterModule, AppUsineSelector],
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
                <span class="mb-2 font-semibold">Role : {{ userRole() }}</span>
                <span class="text-surface-500 dark:text-surface-400 font-medium mb-2">{{ userName() }}</span>
                <span class="text-surface-500 dark:text-surface-400 font-medium mb-2">{{ userReference() }}</span>
                @if (usineName()) {
                    <span class="text-surface-500 dark:text-surface-400 font-medium mb-6 flex items-center gap-1">
                        <i class="pi pi-building text-xs"></i> {{ usineName() }}
                    </span>
                }

                <div class="mb-6 md:hidden">
                    <p class="text-xs font-semibold uppercase tracking-widest text-surface-400 m-0 mb-2">
                        <i class="pi pi-building mr-1"></i> Site
                    </p>
                    <app-usine-selector />
                </div>

                <ul class="list-none m-0 p-0">
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
                                <p class="text-surface-500 dark:text-surface-400 m-0">Gestion des paramètres</p>
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

            <div class="flex flex-col mt-8 mx-auto md:mx-0">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-semibold">Notifications</span>
                    <button
                        type="button"
                        class="text-primary text-xs bg-transparent border-none cursor-pointer"
                        (click)="markAllAsRead()"
                        [disabled]="loadingNotifs || unreadCount === 0"
                    >
                        Tout marquer lu
                    </button>
                </div>

                <span class="text-surface-500 dark:text-surface-400 font-medium mb-4">
                    Vous avez {{ unreadCount }} notification{{ unreadCount > 1 ? 's' : '' }}
                </span>

                <div
                    *ngIf="loadingNotifs"
                    class="text-surface-500 dark:text-surface-400 text-sm py-4 text-center"
                >
                    <i class="pi pi-spin pi-spinner mr-2"></i> Chargement...
                </div>

                <div
                    *ngIf="!loadingNotifs && notifications.length === 0"
                    class="text-surface-500 dark:text-surface-400 text-sm py-4 text-center border border-surface-200 dark:border-surface-700 rounded"
                >
                    Aucune notification
                </div>

                <ul class="list-none m-0 p-0" *ngIf="!loadingNotifs && notifications.length > 0">
                    <li *ngFor="let notif of notifications">
                        <a
                            (click)="onNotifClick(notif)"
                            class="cursor-pointer flex mb-3 p-3 items-start border border-surface-200 dark:border-surface-700 rounded hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-150"
                            [class.bg-surface-50]="!notif.read_at"
                            [class.dark:bg-surface-900]="!notif.read_at"
                        >
                            <span class="mt-1">
                                <i class="pi pi-bell text-sm text-primary"></i>
                            </span>
                            <div class="ml-3 flex-1 min-w-0">
                                <span class="mb-1 font-semibold block truncate">{{ notif.data.nom }}</span>
                                <p class="text-surface-500 dark:text-surface-400 m-0 text-xs truncate" [title]="notif.data.message">
                                    {{ notif.data.message || ('Code: ' + notif.data.code) }}
                                </p>
                                <p class="text-surface-400 m-0 text-xs mt-1">{{ relativeTime(notif.created_at) }}</p>
                            </div>
                            <p-badge *ngIf="!notif.read_at" value="Nouveau" severity="danger" />
                        </a>
                    </li>
                </ul>
            </div>
        </p-drawer>
    `,
})
export class AppProfileSidebar {
    isLoggingOut = false;
    loadingNotifs = false;
    unreadCount = 0;
    notifications: ApiNotification[] = [];

    private previousVisible = false;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private usineContext: UsineContextService,
        private notificationService: NotificationService,
        private router: Router
    ) {
        effect(() => {
            const isVisible = this.visible();
            if (isVisible && !this.previousVisible) {
                this.loadNotifications();
            }
            this.previousVisible = isVisible;
        });
    }

    visible = computed(() => this.layoutService.layoutState().profileSidebarVisible);

    userRole = computed(() => {
        const user = this.authService.currentUser();
        if (!user) return '';
        const roles = [...(user.roles ?? []), ...(user.role_names ?? [])];
        const uniqueRoles = roles.filter((role, index) => role && roles.indexOf(role) === index);
        return uniqueRoles.join(', ');
    });

    userName = computed(() => {
        const user = this.authService.currentUser();
        if (user?.nom_complet) return user.nom_complet;
        if (user?.prenom || user?.nom) return `${user?.prenom ?? ''} ${user?.nom ?? ''}`.trim();
        return '';
    });

    userReference = computed(() => this.authService.currentUser()?.reference ?? '');

    usineName = computed(() => this.usineContext.currentUsine()?.nom ?? '');

    onDrawerHide() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            profileSidebarVisible: false,
        }));
    }

    onLogout(event: Event) {
        event.preventDefault();
        if (this.isLoggingOut) return;

        this.onDrawerHide();

        this.isLoggingOut = true;
        this.authService.logout().pipe(
            finalize(() => {
                this.isLoggingOut = false;
            })
        ).subscribe({
            error: () => {},
        });
    }

    markAllAsRead(): void {
        if (this.loadingNotifs || this.unreadCount === 0) return;
        this.notificationService.markAllAsRead().subscribe({
            next: (res) => {
                this.unreadCount = res.unread_count;
                this.notifications = this.notifications.map((notif) => ({
                    ...notif,
                    read_at: notif.read_at ?? new Date().toISOString(),
                }));
            },
            error: () => {},
        });
    }

    onNotifClick(notif: ApiNotification): void {
        const navigateToProduct = () => {
            this.onDrawerHide();
            this.router.navigate(['/produits/produits-edit', notif.data.produit_id]);
        };

        if (notif.read_at) {
            navigateToProduct();
            return;
        }

        this.notificationService.markAsRead(notif.id).subscribe({
            next: (res) => {
                notif.read_at = new Date().toISOString();
                this.unreadCount = res.unread_count;
                navigateToProduct();
            },
            error: () => {
                navigateToProduct();
            },
        });
    }

    relativeTime(dateStr: string): string {
        const diffMs = Date.now() - new Date(dateStr).getTime();
        const mins = Math.floor(diffMs / 60_000);
        if (mins < 1) return 'A l\'instant';
        if (mins < 60) return `il y a ${mins} min`;
        const hours = Math.floor(mins / 60);
        if (hours < 24) return `il y a ${hours}h`;
        return `il y a ${Math.floor(hours / 24)}j`;
    }

    private loadNotifications(): void {
        this.loadingNotifs = true;
        this.notificationService.getNotifications(true).subscribe({
            next: (res) => {
                this.notifications = res.notifications;
                this.unreadCount = res.unread_count;
                this.loadingNotifs = false;
            },
            error: () => {
                this.loadingNotifs = false;
            },
        });
    }
}
