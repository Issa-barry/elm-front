import { Routes } from '@angular/router';

import { authorizationGuard } from '@/guards/authorization.guard';
import { OrganisationsListe } from './organisations-liste/organisations-liste';
import { OrganisationsDetail } from './organisations-detail/organisations-detail';

export default [
  {
    path: '',
    component: OrganisationsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'organisations', roles: ['super_admin', 'super-admin'] },
  },
  {
    path: ':id',
    component: OrganisationsDetail,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'organisation-detail', roles: ['super_admin', 'super-admin'] },
  },
] as Routes;
