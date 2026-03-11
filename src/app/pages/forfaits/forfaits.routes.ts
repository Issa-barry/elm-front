import { Routes } from '@angular/router';

import { authorizationGuard } from '@/guards/authorization.guard';
import { ForfaitsListe } from './forfaits-liste/forfaits-liste';

export default [
  {
    path: '',
    component: ForfaitsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'forfaits', roles: ['super_admin', 'super-admin'] },
  },
] as Routes;
