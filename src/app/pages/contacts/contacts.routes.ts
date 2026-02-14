import { Routes } from '@angular/router';
import { Prestateurs } from './prestateurs/prestateurs';
import { PrestateursNew } from './prestateurs-new/prestateurs-new';
import { PrestateursEdit } from './prestateurs-edit/prestateurs-edit';
import { authorizationGuard } from '@/guards/authorization.guard';

export default [
    {
        path: '',
        component: Prestateurs,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'prestateurs',
        component: Prestateurs,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'prestateurs/new',
        component: PrestateursNew,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.create'] },
    },
    {
        path: 'prestateurs/edit/:id',
        component: PrestateursEdit,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
