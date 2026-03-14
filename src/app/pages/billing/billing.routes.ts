import { Routes } from '@angular/router';

import { authorizationGuard } from '@/guards/authorization.guard';
import { BillingEvents } from './billing-events/billing-events';

export default [
  {
    path: '',
    component: BillingEvents,
    canActivate: [authorizationGuard],
    data: { breadcrumb: 'billing', roles: ['super_admin', 'super-admin'] },
  },
] as Routes;
