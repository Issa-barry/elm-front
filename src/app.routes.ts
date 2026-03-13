import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';

import { authGuard } from '@/guards/auth.guard';
import { authorizationGuard } from '@/guards/authorization.guard';
import { guestGuard } from '@/guards/guest.guard';
import { AppLayout } from '@/layout/components/app.layout';

import { AuthService } from '@/services/auth/auth.service';


const landingOrDashboardGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return router.createUrlTree(['/dashboard-finance']);
  }

  return router.createUrlTree(['/auth/login']);
};

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [landingOrDashboardGuard],
    children: [],
  },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard-finance',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./app/pages/dashboards/ecommercedashboard').then((c) => c.EcommerceDashboard),
        data: { breadcrumb: 'dashboard' },
      },
      {
        path: 'dashboard-banking',
        loadComponent: () => import('./app/pages/dashboards/bankingdashboard').then((c) => c.BankingDashboard),
        data: { breadcrumb: 'dashboard-banking' },
      },
      {
        path: 'dashboard-finance',
        loadComponent: () => import('./app/pages/dashboards/finance/finance').then((c) => c.Finance),
        data: { breadcrumb: 'dashboard-ventes' },
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
        path: 'billing',
        loadChildren: () => import('@/pages/billing/billing.routes'),
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'billing', roles: ['super_admin', 'super-admin'] },
      },
      {
        path: 'forfaits',
        loadChildren: () => import('@/pages/forfaits/forfaits.routes'),
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'forfaits', roles: ['super_admin', 'super-admin'] },
      },
      {
        path: 'organisations',
        loadChildren: () => import('@/pages/organisations/organisations.routes'),
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'organisations', roles: ['super_admin', 'super-admin'] },
      },
      {
        path: 'sites',
        loadChildren: () => import('@/pages/sites/sites.routes'),
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'sites', permissions: ['sites.read'] },
      },
      {
        path: 'parametres',
        loadChildren: () => import('@/pages/parametres/parametres.routes'),
        data: { breadcrumb: 'parametres' },
      },
      {
        path: 'roles',
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'roles', roles: ['admin_entreprise', 'super_admin', 'super-admin'] },
        loadChildren: () => import('@/pages/roles/roles.routes'),
      },
      {
        path: 'profile',
        loadComponent: () => import('@/pages/profile/profile-overview/profile-overview').then((c) => c.ProfileOverview),
        data: { breadcrumb: 'profile' },
      },
      {
        path: 'usermanagement',
        loadChildren: () => import('@/pages/usermanagement/usermanagement.routes'),
        data: { breadcrumb: 'usermanagement' },
      },
      
      {
        path: 'uikit',
        loadChildren: () => import('@/pages/uikit/uikit.routes'),
        data: { breadcrumb: 'uikit' },
      },
      {
        path: 'documentation',
        loadComponent: () => import('./app/pages/documentation/documentation').then((c) => c.Documentation),
        data: { breadcrumb: 'documentation' },
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
        loadChildren: () => import('./app/pages/blocks/blocks.routes'),
        data: { breadcrumb: 'blocks' },
      },
      {
        path: 'ecommerce',
        loadChildren: () => import('@/pages/ecommerce/ecommerce.routes'),
        data: { breadcrumb: 'ecommerce' },
      },
    ],
  },
  {
    path: 'landing',
    loadComponent: () => import('@/pages/landing/landing2/landing2').then((c) => c.Landing2),
    data: { breadcrumb: 'landing' },
  },
  {
    path: 'notfound',
    loadComponent: () => import('@/pages/notfound/notfound').then((c) => c.Notfound),
    data: { breadcrumb: 'notfound' },
  },
  {
    path: 'login',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadChildren: () => import('@/pages/auth/auth.routes'),
    data: { breadcrumb: 'auth' },
  },
  {
    path: '**',
    redirectTo: '/notfound',
  },
];
