import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';

import { LayoutService } from '@/layout/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { AppUsineSelector } from './app.usine-selector';
import { NotificationService } from '@/services/notifications/notification.service';

@Component({
    selector: '[app-topbar]',
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [
        RouterModule,
        CommonModule,
        StyleClassModule,
        AppBreadcrumb,
        AppUsineSelector,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule,
        TooltipModule,
    ],
    styles: [`
        .avatar-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .avatar-wrap img {
            display: block;
            border-radius: 50%;
        }

        .avatar-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: var(--red-500, #ef4444);
            color: #fff;
            border-radius: 50%;
            min-width: 18px;
            height: 18px;
            font-size: 10px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 3px;
            pointer-events: none;
            border: 2px solid var(--surface-card, #fff);
            line-height: 1;
        }
    `],
    template: `
        <div class="layout-topbar">
            <div class="topbar-start">
                <button
                    #menubutton
                    type="button"
                    class="topbar-menubutton p-link p-trigger hover:cursor-pointer"
                    (click)="onMenuButtonClick()"
                >
                    <i class="pi pi-bars"></i>
                </button>
                <nav app-breadcrumb class="topbar-breadcrumb"></nav>
            </div>

            <div class="topbar-end">
                <ul class="topbar-menu">
                    <li class="topbar-search">
                        <p-iconfield>
                            <p-inputicon class="pi pi-search" />
                            <input type="text" pInputText placeholder="Rechercher..." class="w-48 sm:w-full" />
                        </p-iconfield>
                    </li>

                    <li class="topbar-usine hidden md:flex items-center">
                        <app-usine-selector />
                    </li>

                    <li class="ml-3">
                        <p-button icon="pi pi-palette" rounded (onClick)="onConfigButtonClick()" />
                    </li>

                    <li class="topbar-profile">
                        <button
                            type="button"
                            class="p-link hover:cursor-pointer"
                            (click)="onProfileClick()"
                            [pTooltip]="unreadCount > 0 ? unreadCount + ' notification(s) non lue(s)' : 'Mon profil'"
                            tooltipPosition="bottom"
                        >
                            <div class="avatar-wrap">
                                <img src="/layout/images/avatar.png" alt="Profil" />
                                <span class="avatar-badge" *ngIf="unreadCount > 0">
                                    {{ unreadCount > 99 ? '99+' : unreadCount }}
                                </span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `,
})
export class AppTopbar implements OnInit, OnDestroy {
    @ViewChild('menubutton') menuButton!: ElementRef;

    unreadCount = 0;

    private readonly destroy$ = new Subject<void>();

    constructor(
        public layoutService: LayoutService,
        private notificationService: NotificationService,
    ) {}

    ngOnInit(): void {
        timer(0, 60_000).pipe(
            switchMap(() => this.notificationService.getNotifications(true)),
            takeUntil(this.destroy$)
        ).subscribe({
            next: (res) => {
                this.unreadCount = res.unread_count;
            },
            error: () => {},
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onMenuButtonClick(): void {
        this.layoutService.onMenuToggle();
    }

    onConfigButtonClick(): void {
        this.layoutService.showConfigSidebar();
    }

    onProfileClick(): void {
        this.layoutService.showProfileSidebar();
    }
}
