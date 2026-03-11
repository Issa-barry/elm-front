import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

/**
 * Redirige vers /dashboard-finance si l'écran est mobile (≤768px).
 * Utilisé sur la route /dashboard pour que l'accueil mobile soit Finance.
 */
export const mobileHomeGuard = (): boolean | UrlTree => {
    const router = inject(Router);
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return router.createUrlTree(['/dashboard-finance']);
    }
    return true;
};
