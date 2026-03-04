import { Routes } from '@angular/router';

import { authorizationGuard } from '@/guards/authorization.guard';
import { SitesListe } from './sites-liste/sites-liste';
import { SitesDetail } from './sites-detail/sites-detail';

export default [
  {
    path: '',
    component: SitesListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'sites', permissions: ['sites.read'] },
  },
  {
    path: ':id',
    component: SitesDetail,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'site-detail', permissions: ['sites.read'] },
  },
] as Routes;
