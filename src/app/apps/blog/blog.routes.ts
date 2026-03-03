import { Routes } from '@angular/router';

export default [
    {
        path: 'list',
        loadComponent: () => import('./list').then((c) => c.List),
        data: { breadcrumb: 'list' }
    },
    {
        path: 'detail',
        loadComponent: () => import('./detail').then((c) => c.Detail),
        data: { breadcrumb: 'detail' }
    },
    {
        path: 'edit',
        loadComponent: () => import('./edit').then((c) => c.Edit),
        data: { breadcrumb: 'edit' }
    }
] as Routes;
