import { Routes } from '@angular/router';
import { PackingListe } from './packing-liste/packing-liste';
import { PackingNew } from './packing-new/packing-new';
import { PackingEdit } from './packing-edit/packing-edit';
import { authorizationGuard } from '@/guards/authorization.guard';

export default [
    {
        path: '',
        component: PackingListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['packings.read'] },
    },
    {
        path: 'packings',
        component: PackingListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['packings.read'] },
    },
    {
        path: 'packings-new',
        component: PackingNew,
        canActivate: [authorizationGuard],
        data: { permissions: ['packings.create'] },
    },
    {
        path: 'packings-edit/:id',
        component: PackingEdit,
        canActivate: [authorizationGuard],
        data: { permissions: ['packings.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
