import { Routes } from '@angular/router';
import { PackingListe } from './packing-liste/packing-liste';
import { PackingNew } from './packing-new/packing-new';
import { PackingEdit } from './packing-edit/packing-edit';
import { authorizationGuard } from '@/guards/authorization.guard';
import { PackingFacture } from './packing-facture/packing-facture';

export default [
    {
        path: '',
        component: PackingListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'packings',  permissions: ['packings.read'] },
    },
    {
        path: 'packings',
        component: PackingListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'packings',  permissions: ['packings.read'] },
    },
    {
        path: 'packings-new',
        component: PackingNew,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'packings-new',  permissions: ['packings.create'] },
    },
    {
        path: 'packings-edit/:id',
        component: PackingEdit,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'packings-edit',  permissions: ['packings.update'] },
    },
    {
        path: 'packings-facture/:id',
        component: PackingFacture,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'packings-facture',  permissions: ['packings.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
