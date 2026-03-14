import { Routes } from '@angular/router';

export default [
    {
        path: 'prestataires',
        loadChildren: () => import('@/pages/contacts/prestataires/prestataires.routes'),
        data: { breadcrumb: 'prestataires' },
    },
    {
        path: 'utilisateurs',
        loadChildren: () => import('@/pages/contacts/utilisateurs/utilisateurs.routes'),
        data: { breadcrumb: 'utilisateurs' },
    },
    { path: '**', redirectTo: '/notfound' },
] as Routes;
