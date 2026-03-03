import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Landing } from '@/pages/landing/landing';
import { Notfound } from '@/pages/notfound/notfound';
import { guestGuard } from '@/guards/guest.guard';
import { authGuard } from '@/guards/auth.guard';
import { authorizationGuard } from '@/guards/authorization.guard';
 
 

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
                data: { breadcrumb: 'accueil' },
            },
            {
                path: 'comptabilite',
                loadChildren: () => import('@/pages/comptabilite/comptabilite.routes'),
                            data: { breadcrumb: 'comptabilite' },
},
            {
                path: 'contacts',
                loadChildren: () => import('@/pages/contacts/contacts.routes'),
                            data: { breadcrumb: 'contacts' },
},
            {
                path: 'packings',
                loadChildren: () => import('@/pages/packings/packings.routes'),
                            data: { breadcrumb: 'packings' },
},
            {
                path: 'produits',
                loadChildren: () => import('@/pages/produits/produits.routes'),
                            data: { breadcrumb: 'produits' },
},
            {
                path: 'vehicules',
                loadChildren: () => import('@/pages/vehicules/vehicules.routes'),
                            data: { breadcrumb: 'vehicules' },
},
            {
                path: 'ventes',
                loadChildren: () => import('@/pages/ventes/ventes.routes'),
                            data: { breadcrumb: 'ventes' },
},
             {
                path: 'parametres',
                loadChildren: () => import('@/pages/parametres/parametres.routes'),
                            data: { breadcrumb: 'parametres' },
},
            {
                path: 'roles',
                canActivate: [authorizationGuard],
                data: { breadcrumb: 'roles',  roles: ['admin_entreprise'] },
                loadChildren: () => import('@/pages/roles/roles.routes'),
            },
            {
                path: 'dashboard-banking',
                loadComponent: () => import('./app/pages/dashboards/bankingdashboard').then(c => c.BankingDashboard),
                data: { breadcrumb: 'dashboard-banking' },
            },
            {
                path: 'uikit',
                data: { breadcrumb: 'uikit' },
                loadChildren: () => import('@/pages/uikit/uikit.routes'),
            },
            {
                path: 'documentation',
                data: { breadcrumb: 'documentation' },
                loadComponent: () => import('./app/pages/documentation/documentation').then(c => c.Documentation)
            },
            {
                path: 'pages',
                loadChildren: () => import('@/pages/pages.routes'),
                            data: { breadcrumb: 'pages' },
},
            {
                path: 'apps',
                loadChildren: () => import('@/apps/apps.routes'),
                data: { breadcrumb: 'apps' },
            },
            {
                path: 'blocks',
                data: { breadcrumb: 'blocks' },
                loadChildren: () => import('./app/pages/blocks/blocks.routes')
            },
            {
                path: 'ecommerce',
                loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
                data: { breadcrumb: 'ecommerce' },
            },
            {
                path: 'profile',
                loadChildren: () => import('@/pages/usermanagement/usermanagement.routes'),
                            data: { breadcrumb: 'profile' },
},
        ],
    },

    // Routes publiques (accessibles sans authentification)
    { 
        path: 'landing', 
        component: Landing, 
            data: { breadcrumb: 'landing' },
},
    { 
        path: 'notfound', 
        component: Notfound, 
            data: { breadcrumb: 'notfound' },
},

    // Routes d'authentification (accessibles uniquement si NON connecté)
    {
        path: 'auth',
        canActivate: [guestGuard], // ← Protection : redirige vers dashboard si déjà connecté
        loadChildren: () => import('@/pages/auth/auth.routes'),
            data: { breadcrumb: 'auth' },
},

    // Route 404
    { 
        path: '**', 
        redirectTo: '/notfound' 
    },
];
