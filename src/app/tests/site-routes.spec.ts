import { Route, Routes } from '@angular/router';

import { appRoutes } from '../../app.routes';
import ventesRoutes from '@/pages/ventes/ventes.routes';
import comptabiliteRoutes from '@/pages/comptabilite/comptabilite.routes';
import contactsRoutes from '@/pages/contacts/contacts.routes';
import prestateursRoutes from '@/pages/contacts/prestateurs/prestateurs.routes';
import utilisateursRoutes from '@/pages/contacts/utilisateurs/utilisateurs.routes';
import packingsRoutes from '@/pages/packings/packings.routes';
import produitsRoutes from '@/pages/produits/produits.routes';
import vehiculesRoutes from '@/pages/vehicules/vehicules.routes';
import rolesRoutes from '@/pages/roles/roles.routes';
import parametresRoutes from '@/pages/parametres/parametres.routes';
import usermanagementRoutes from '@/pages/usermanagement/usermanagement.routes';
import authRoutes from '@/pages/auth/auth.routes';

function flattenRoutes(routes: Routes, acc: Route[] = []): Route[] {
    for (const route of routes) {
        acc.push(route);
        if (route.children?.length) {
            flattenRoutes(route.children, acc);
        }
    }
    return acc;
}

function requiresBreadcrumb(route: Route): boolean {
    if (route.redirectTo) return false;
    if (route.path === '**') return false;

    const isShellContainer = route.path === '' && Array.isArray(route.children) && route.children.length > 0;
    if (isShellContainer) return false;

    return true;
}

function getRouteDataValue(route: Route, key: string): unknown {
    return route.data ? (route.data as Record<string, unknown>)[key] : undefined;
}

describe('Site Routes (hors templates PrimeNG)', () => {
    const routeGroups: Array<{ name: string; routes: Routes }> = [
        { name: 'app', routes: appRoutes },
        { name: 'ventes', routes: ventesRoutes },
        { name: 'comptabilite', routes: comptabiliteRoutes },
        { name: 'contacts', routes: contactsRoutes },
        { name: 'contacts/prestateurs', routes: prestateursRoutes },
        { name: 'contacts/utilisateurs', routes: utilisateursRoutes },
        { name: 'packings', routes: packingsRoutes },
        { name: 'produits', routes: produitsRoutes },
        { name: 'vehicules', routes: vehiculesRoutes },
        { name: 'roles', routes: rolesRoutes },
        { name: 'parametres', routes: parametresRoutes },
        { name: 'usermanagement', routes: usermanagementRoutes },
        { name: 'auth', routes: authRoutes },
    ];

    it('should define a breadcrumb for every business route that is not a redirect', () => {
        for (const group of routeGroups) {
            const routes = flattenRoutes(group.routes).filter(requiresBreadcrumb);

            for (const route of routes) {
                const breadcrumb = getRouteDataValue(route, 'breadcrumb');
                expect(typeof breadcrumb).withContext(`${group.name} -> path "${route.path}"`).toBe('string');
                expect((breadcrumb as string).trim().length)
                    .withContext(`${group.name} -> path "${route.path}" has empty breadcrumb`)
                    .toBeGreaterThan(0);
            }
        }
    });

    it('should keep expected breadcrumb labels on critical business urls', () => {
        const ventesCommandes = ventesRoutes.find((r) => r.path === 'commandes');
        const produitsListe = produitsRoutes.find((r) => r.path === '');
        const utilisateursListe = utilisateursRoutes.find((r) => r.path === '');

        expect(getRouteDataValue(ventesCommandes as Route, 'breadcrumb')).toBe('commandes');
        expect(getRouteDataValue(produitsListe as Route, 'breadcrumb')).toBe('produits');
        expect(getRouteDataValue(utilisateursListe as Route, 'breadcrumb')).toBe('utilisateurs');
    });
});
