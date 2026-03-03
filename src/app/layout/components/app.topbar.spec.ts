import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppTopbar } from './app.topbar';

describe('AppTopbar', () => {
    function setup() {
        const layoutServiceMock = {
            onMenuToggle: jasmine.createSpy('onMenuToggle'),
            showConfigSidebar: jasmine.createSpy('showConfigSidebar'),
            showProfileSidebar: jasmine.createSpy('showProfileSidebar'),
        };

        const notificationServiceMock = {
            getNotifications: jasmine.createSpy('getNotifications').and.returnValue(of({
                notifications: [],
                unread_count: 3,
            })),
        };

        const component = new AppTopbar(layoutServiceMock as any, notificationServiceMock as any);
        return { component, layoutServiceMock, notificationServiceMock };
    }

    it('should open profile sidebar on avatar click', () => {
        const { component, layoutServiceMock } = setup();
        component.onProfileClick();
        expect(layoutServiceMock.showProfileSidebar).toHaveBeenCalled();
    });

    it('should load unread notifications count on init', fakeAsync(() => {
        const { component, notificationServiceMock } = setup();

        component.ngOnInit();
        tick(0);

        expect(notificationServiceMock.getNotifications).toHaveBeenCalledWith(true);
        expect(component.unreadCount).toBe(3);

        component.ngOnDestroy();
    }));
});
