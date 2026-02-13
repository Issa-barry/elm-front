import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Landing } from '@/pages/landing/landing';
import { Notfound } from '@/pages/notfound/notfound';
import { guestGuard } from '@/guards/guest.guard';
import { authGuard } from '@/guards/auth.guard';
 
 

export const appRoutes: Routes = [
    // Routes protégées (nécessitent une authentification)
    {
        path: '',
        component: AppLayout,
        canActivate: [authGuard], // ← Protection globale de toutes les routes avec layout
        children: [
            {
                path: '',
                loadComponent: () => import('./app/pages/dashboards/ecommercedashboard').then(c => c.EcommerceDashboard),
                data: { breadcrumb: 'E-Commerce Dashboard' },
            },
            {
                path: 'comptabilite',
                loadChildren: () => import('@/pages/comptabilite/comptabilite.routes'),
            },
            {
                path: 'contacts',
                loadChildren: () => import('@/pages/contacts/contacts.routes'),
            },
            {
                path: 'packings',
                loadChildren: () => import('@/pages/packings/packings.routes'),
            },
            {
                path: 'produits',
                loadChildren: () => import('@/pages/produits/produits.routes'),
            },
             {
                path: 'parametres',
                loadChildren: () => import('@/pages/parametres/parametres.routes'),
            },
            {
                path: 'roles',
                loadChildren: () => import('@/pages/roles/roles.routes'),
            },
            {
                path: 'dashboard-banking',
                loadComponent: () => import('./app/pages/dashboards/bankingdashboard').then(c => c.BankingDashboard),
                data: { breadcrumb: 'Banking Dashboard' },
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'UI Kit' },
                loadChildren: () => import('@/pages/uikit/uikit.routes'),
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'Documentation' },
                loadComponent: () => import('./app/pages/documentation/documentation').then(c => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes'),
            },
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: { breadcrumb: 'Apps' },
            },
            {
                path: 'blocks',
                data: { breadcrumb: 'Free Blocks' },
                loadChildren: () => import('./app/pages/blocks/blocks.routes')
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: { breadcrumb: 'E-Commerce' },
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes'),
            },
        ],
    },

    // Routes publiques (accessibles sans authentification)
    { 
        path: 'landing', 
        component: Landing 
    },
    { 
        path: 'notfound', 
        component: Notfound 
    },

    // Routes d'authentification (accessibles uniquement si NON connecté)
    {
        path: 'auth',
        canActivate: [guestGuard], // ← Protection : redirige vers dashboard si déjà connecté
        loadChildren: () => import('@/pages/auth/auth.routes'),
    },

    // Route 404
    { 
        path: '**', 
        redirectTo: '/notfound' 
    },
];