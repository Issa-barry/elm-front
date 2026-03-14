import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
    let service: LayoutService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LayoutService],
        });
        service = TestBed.inject(LayoutService);
    });

    afterEach(() => {
        document.documentElement.classList.remove('app-dark');
    });

    it('should open profile sidebar', () => {
        service.showProfileSidebar();
        expect(service.layoutState().profileSidebarVisible).toBeTrue();
    });

    it('should open and close config sidebar', () => {
        service.showConfigSidebar();
        expect(service.layoutState().configSidebarVisible).toBeTrue();

        service.hideConfigSidebar();
        expect(service.layoutState().configSidebarVisible).toBeFalse();
    });

    it('should toggle static desktop menu on desktop mode', () => {
        service.layoutConfig.update((cfg) => ({ ...cfg, menuMode: 'static' }));
        spyOn(service, 'isDesktop').and.returnValue(true);

        const initial = !!service.layoutState().staticMenuDesktopInactive;
        service.onMenuToggle();

        expect(service.layoutState().staticMenuDesktopInactive).toBe(!initial);
    });

    it('should toggle static mobile menu on mobile mode', () => {
        service.layoutConfig.update((cfg) => ({ ...cfg, menuMode: 'static' }));
        spyOn(service, 'isDesktop').and.returnValue(false);

        const initial = !!service.layoutState().staticMenuMobileActive;
        service.onMenuToggle();

        expect(service.layoutState().staticMenuMobileActive).toBe(!initial);
    });

    it('should toggle overlay menu when menu mode is overlay', () => {
        service.layoutConfig.update((cfg) => ({ ...cfg, menuMode: 'overlay' }));
        spyOn(service, 'isDesktop').and.returnValue(true);

        const initial = !!service.layoutState().overlayMenuActive;
        service.onMenuToggle();

        expect(service.layoutState().overlayMenuActive).toBe(!initial);
    });
});
