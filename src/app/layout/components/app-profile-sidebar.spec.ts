import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { of } from 'rxjs';

import { AppProfileSidebar } from './app-profile-sidebar';
import { ApiNotification } from '@/models/notification.model';

describe('AppProfileSidebar', () => {
    const sampleNotification: ApiNotification = {
        id: 'notif-1',
        type: 'rupture_stock',
        read_at: null,
        created_at: new Date().toISOString(),
        data: {
            type: 'rupture_stock',
            produit_id: 42,
            nom: 'Rouleau',
            code: 'PRD-42',
            qte_stock: 0,
            statut: 'rupture_stock',
            message: 'Rupture detectee',
            date: new Date().toISOString(),
        },
    };

    function setup() {
        TestBed.configureTestingModule({});

        const layoutState = signal({
            profileSidebarVisible: false,
            configSidebarVisible: false,
            sidebarActive: false,
            anchored: false,
            overlaySubmenuActive: false,
            activeMenuItem: null,
            staticMenuDesktopInactive: false,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false,
        } as any);

        const layoutServiceMock = { layoutState };
        const authServiceMock = {
            currentUser: signal({
                nom_complet: 'Issa BARRY',
                reference: 'USR-20260225-0001',
                roles: ['admin_entreprise'],
            } as any),
            logout: jasmine.createSpy('logout').and.returnValue(of({})),
        };
        const usineContextMock = {
            currentUsine: signal({ nom: 'Usine Principale' } as any),
        };
        const notificationServiceMock = {
            getNotifications: jasmine.createSpy('getNotifications').and.returnValue(of({
                notifications: [sampleNotification],
                unread_count: 1,
            })),
            markAllAsRead: jasmine.createSpy('markAllAsRead').and.returnValue(of({ unread_count: 0 })),
            markAsRead: jasmine.createSpy('markAsRead').and.returnValue(of({ unread_count: 0 })),
        };
        const routerMock = {
            navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true)),
        };

        const component = TestBed.runInInjectionContext(() =>
            new AppProfileSidebar(
                layoutServiceMock as any,
                authServiceMock as any,
                usineContextMock as any,
                notificationServiceMock as any,
                routerMock as any
            )
        );

        return {
            component,
            layoutState,
            notificationServiceMock,
            routerMock,
        };
    }

    it('should load notifications when the drawer becomes visible', () => {
        const { component, layoutState, notificationServiceMock } = setup();

        expect(notificationServiceMock.getNotifications).not.toHaveBeenCalled();
        layoutState.update((state) => ({ ...state, profileSidebarVisible: true }));
        TestBed.flushEffects();

        expect(notificationServiceMock.getNotifications).toHaveBeenCalledWith(true);
        expect(component.notifications.length).toBe(1);
        expect(component.unreadCount).toBe(1);
    });

    it('should mark all notifications as read', () => {
        const { component, notificationServiceMock } = setup();

        component.notifications = [
            { ...sampleNotification, read_at: null },
            { ...sampleNotification, id: 'notif-2', read_at: null },
        ];
        component.unreadCount = 2;

        component.markAllAsRead();

        expect(notificationServiceMock.markAllAsRead).toHaveBeenCalled();
        expect(component.unreadCount).toBe(0);
        expect(component.notifications.every((notif) => !!notif.read_at)).toBeTrue();
    });

    it('should mark notification as read then navigate to product detail', () => {
        const { component, notificationServiceMock, routerMock } = setup();
        const notif = { ...sampleNotification, read_at: null };

        component.onNotifClick(notif);

        expect(notificationServiceMock.markAsRead).toHaveBeenCalledWith('notif-1');
        expect(routerMock.navigate).toHaveBeenCalledWith(['/produits/produits-edit', 42]);
    });
});
