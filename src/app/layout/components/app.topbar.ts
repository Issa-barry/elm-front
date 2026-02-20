import {
    Component, ElementRef, OnDestroy, OnInit,
    ViewChild, ViewEncapsulation
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Popover } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';

import { LayoutService } from '@/layout/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { NotificationService } from '@/services/notifications/notification.service';
import { ApiNotification } from '@/models/notification.model';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    // ViewEncapsulation.None : nécessaire pour styler le contenu du p-popover
    // qui est rendu dans l'overlay container hors du shadow DOM du composant
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterModule,
        CommonModule,
        StyleClassModule,
        AppBreadcrumb,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        Popover,
        TooltipModule,
    ],
    styles: [`
        /* ── Avatar + badge ──────────────────────────────── */
        .avatar-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .avatar-wrap img { display: block; border-radius: 50%; }

        .avatar-badge {
            position: absolute;
            top: -4px; right: -4px;
            background: var(--red-500, #ef4444);
            color: #fff;
            border-radius: 50%;
            min-width: 18px; height: 18px;
            font-size: 10px; font-weight: 700;
            display: flex; align-items: center; justify-content: center;
            padding: 0 3px;
            pointer-events: none;
            border: 2px solid var(--surface-card, #fff);
            line-height: 1;
        }

        /* ── Popover notifications ───────────────────────── */
        .notif-popover .p-popover-content {
            padding: 0;
            border-radius: 10px;
            overflow: hidden;
        }

        .notif-panel {
            width: 380px;
            max-height: 520px;
            display: flex;
            flex-direction: column;
        }

        /* En-tête */
        .notif-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.875rem 1rem;
            border-bottom: 1px solid var(--surface-border);
            flex-shrink: 0;
        }
        .notif-header__title {
            margin: 0;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-color);
        }
        .notif-btn-text {
            background: none; border: none;
            padding: 0.25rem 0.5rem;
            font-size: 0.78rem;
            color: var(--primary-color);
            cursor: pointer;
            border-radius: 4px;
            transition: background 0.15s;
        }
        .notif-btn-text:hover { background: var(--surface-hover); }
        .notif-btn-text:disabled { opacity: 0.4; cursor: default; }

        /* Liste */
        .notif-list { overflow-y: auto; flex: 1; }

        /* Item */
        .notif-item {
            display: flex;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            cursor: pointer;
            border-bottom: 1px solid var(--surface-border);
            transition: background 0.12s;
            align-items: flex-start;
        }
        .notif-item:last-child { border-bottom: none; }
        .notif-item:hover { background: var(--surface-hover); }
        .notif-item--unread { background: var(--blue-50, #eff6ff); }
        .notif-item--unread:hover { background: var(--blue-100, #dbeafe); }

        .notif-icon {
            width: 34px; height: 34px;
            border-radius: 50%;
            background: var(--orange-100, #ffedd5);
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; margin-top: 2px;
        }
        .notif-icon i { color: var(--orange-600, #ea580c); font-size: 0.85rem; }

        .notif-body { flex: 1; min-width: 0; }
        .notif-label {
            font-size: 0.75rem; font-weight: 600;
            color: var(--orange-700, #c2410c);
            margin-bottom: 0.15rem;
        }
        .notif-message {
            font-size: 0.8rem; color: var(--text-color);
            white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            margin-bottom: 0.25rem;
        }
        .notif-code { opacity: 0.6; }
        .notif-meta {
            display: flex; align-items: center;
            justify-content: space-between; gap: 0.5rem;
        }
        .notif-time { font-size: 0.72rem; color: var(--text-color-secondary); }
        .notif-read-btn {
            background: none; border: none; padding: 0;
            font-size: 0.72rem; color: var(--primary-color); cursor: pointer;
        }
        .notif-read-btn:hover { text-decoration: underline; }

        /* États vide / chargement */
        .notif-empty, .notif-loading {
            text-align: center;
            padding: 2.5rem 1rem;
            color: var(--text-color-secondary);
            font-size: 0.875rem;
        }
        .notif-empty i { font-size: 2rem; display: block; margin-bottom: 0.5rem; opacity: 0.4; }

        /* Pied */
        .notif-footer {
            padding: 0.625rem 1rem;
            border-top: 1px solid var(--surface-border);
            display: flex; justify-content: space-between; align-items: center;
            flex-shrink: 0;
        }
        .notif-profile-btn {
            display: flex; align-items: center; gap: 0.35rem;
            font-size: 0.8rem; color: var(--text-color-secondary);
            background: none; border: none; cursor: pointer;
            padding: 0.25rem 0.5rem; border-radius: 4px;
            transition: background 0.15s, color 0.15s;
        }
        .notif-profile-btn:hover { background: var(--surface-hover); color: var(--text-color); }
    `],
    template: `
    <div class="layout-topbar">

        <!-- ── Gauche ── -->
        <div class="topbar-start">
            <button #menubutton type="button"
                    class="topbar-menubutton p-link p-trigger hover:cursor-pointer"
                    (click)="onMenuButtonClick()">
                <i class="pi pi-bars"></i>
            </button>
            <nav app-breadcrumb class="topbar-breadcrumb"></nav>
        </div>

        <!-- ── Droite ── -->
        <div class="topbar-end">
            <ul class="topbar-menu">

                <li class="topbar-search">
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input type="text" pInputText placeholder="Rechercher..." class="w-48 sm:w-full" />
                    </p-iconfield>
                </li>

                <li class="ml-3">
                    <p-button icon="pi pi-palette" rounded (onClick)="onConfigButtonClick()" />
                </li>

                <!-- ── Avatar + overlay notifications ── -->
                <li class="topbar-profile">
                    <button type="button"
                            class="p-link hover:cursor-pointer"
                            (click)="onAvatarClick($event)"
                            [pTooltip]="unreadCount > 0 ? unreadCount + ' notification(s) non lue(s)' : 'Notifications'"
                            tooltipPosition="bottom">
                        <div class="avatar-wrap">
                            <img src="/layout/images/avatar.png" alt="Profil" />
                            <span class="avatar-badge" *ngIf="unreadCount > 0">
                                {{ unreadCount > 99 ? '99+' : unreadCount }}
                            </span>
                        </div>
                    </button>

                    <p-popover #notifPanel styleClass="notif-popover" (onShow)="onOverlayShow()">
                        <div class="notif-panel">

                            <!-- En-tête -->
                            <div class="notif-header">
                                <h3 class="notif-header__title">Notifications</h3>
                                <button class="notif-btn-text"
                                        (click)="markAllAsRead()"
                                        [disabled]="unreadCount === 0">
                                    Tout marquer comme lu
                                </button>
                            </div>

                            <!-- Liste -->
                            <div class="notif-list">

                                <div class="notif-loading" *ngIf="loadingNotifs">
                                    <i class="pi pi-spin pi-spinner"></i>&nbsp;Chargement…
                                </div>

                                <div class="notif-empty" *ngIf="!loadingNotifs && notifications.length === 0">
                                    <i class="pi pi-bell"></i>
                                    Aucune notification
                                </div>

                                <ng-container *ngIf="!loadingNotifs">
                                    <div class="notif-item"
                                         *ngFor="let notif of notifications"
                                         [class.notif-item--unread]="!notif.read_at"
                                         (click)="onNotifClick(notif)">

                                        <div class="notif-icon">
                                            <i class="pi pi-exclamation-triangle"></i>
                                        </div>

                                        <div class="notif-body">
                                            <div class="notif-label">Rupture de stock – Produit critique</div>
                                            <div class="notif-message" [title]="notif.data.message">
                                                {{ notif.data.nom }}
                                                <span class="notif-code">· {{ notif.data.code }}</span>
                                            </div>
                                            <div class="notif-meta">
                                                <span class="notif-time">{{ relativeTime(notif.created_at) }}</span>
                                                <button class="notif-read-btn"
                                                        *ngIf="!notif.read_at"
                                                        (click)="onMarkAsRead($event, notif)">
                                                    Marquer comme lu
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </ng-container>

                            </div><!-- /notif-list -->

                            <!-- Pied -->
                            <div class="notif-footer">
                                <button class="notif-profile-btn" (click)="openProfile()">
                                    <i class="pi pi-user"></i> Mon profil
                                </button>
                                <button class="notif-btn-text" (click)="closePanel()">Fermer</button>
                            </div>

                        </div>
                    </p-popover>

                </li>
            </ul>
        </div>

    </div>
    `
})
export class AppTopbar implements OnInit, OnDestroy {

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('notifPanel') notifPanel!: Popover;

    unreadCount = 0;
    notifications: ApiNotification[] = [];
    loadingNotifs = false;

    private readonly destroy$ = new Subject<void>();

    constructor(
        public layoutService: LayoutService,
        private notificationService: NotificationService,
        private router: Router,
    ) {}

    // ── Lifecycle ────────────────────────────────────────

    ngOnInit(): void {
        // Polling : récupère le nombre de non-lues immédiatement puis toutes les 60 s
        timer(0, 60_000).pipe(
            switchMap(() => this.notificationService.getNotifications(true)),
            takeUntil(this.destroy$)
        ).subscribe(res => (this.unreadCount = res.unread_count));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    // ── Topbar existant ──────────────────────────────────

    onMenuButtonClick(): void {
        this.layoutService.onMenuToggle();
    }

    onConfigButtonClick(): void {
        this.layoutService.showConfigSidebar();
    }

    // ── Avatar + overlay ─────────────────────────────────

    onAvatarClick(event: Event): void {
        this.notifPanel.toggle(event);
    }

    /** Appelé à chaque ouverture du panel : charge la liste fraîche */
    onOverlayShow(): void {
        this.loadingNotifs = true;
        this.notificationService.getNotifications(true).subscribe({
            next: res => {
                this.notifications = res.notifications;
                this.unreadCount = res.unread_count;
                this.loadingNotifs = false;
            },
            error: () => { this.loadingNotifs = false; },
        });
    }

    closePanel(): void {
        this.notifPanel.hide();
    }

    openProfile(): void {
        this.notifPanel.hide();
        this.layoutService.showProfileSidebar();
    }

    // ── Actions notifications ────────────────────────────

    /** Clic sur une notification → marquer lue + naviguer */
    onNotifClick(notif: ApiNotification): void {
        if (!notif.read_at) {
            this.notificationService.markAsRead(notif.id).subscribe(res => {
                notif.read_at = new Date().toISOString();
                this.unreadCount = res.unread_count;
            });
        }
        this.notifPanel.hide();
        this.router.navigate(['/produits/produits-edit', notif.data.produit_id]);
    }

    /** Marquer UNE notification comme lue, SANS naviguer */
    onMarkAsRead(event: Event, notif: ApiNotification): void {
        event.stopPropagation();
        if (notif.read_at) return;
        this.notificationService.markAsRead(notif.id).subscribe(res => {
            notif.read_at = new Date().toISOString();
            this.unreadCount = res.unread_count;
        });
    }

    /** Marquer TOUTES les notifications comme lues */
    markAllAsRead(): void {
        this.notificationService.markAllAsRead().subscribe(res => {
            this.notifications.forEach(n => (n.read_at = new Date().toISOString()));
            this.unreadCount = res.unread_count;
        });
    }

    // ── Utilitaire date relative ─────────────────────────

    relativeTime(dateStr: string): string {
        const diffMs = Date.now() - new Date(dateStr).getTime();
        const mins  = Math.floor(diffMs / 60_000);
        if (mins < 1)   return 'À l\'instant';
        if (mins < 60)  return `il y a ${mins} min`;
        const hours = Math.floor(mins / 60);
        if (hours < 24) return `il y a ${hours}h`;
        return `il y a ${Math.floor(hours / 24)}j`;
    }
}
