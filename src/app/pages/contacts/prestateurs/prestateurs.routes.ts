import { Routes } from '@angular/router';
import { authorizationGuard } from '@/guards/authorization.guard';
import { PrestateursListe } from './prestateurs-liste/prestateurs-liste';
import { PrestateursNew } from './prestateurs-new/prestateurs-new';
import { PrestateursEdit } from './prestateurs-edit/prestateurs-edit';
 

export default [
    {
        path: '',
        component: PrestateursListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'prestateurs',  permissions: ['prestataires.read'] },
    },
    {
        path: 'prestateurs',
        component: PrestateursListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'prestateurs',  permissions: ['prestataires.read'] },
    },
    {
        path: 'new',
        component: PrestateursNew,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'new',  permissions: ['prestataires.create'] },
    },
    {
        path: 'edit/:id',
        component: PrestateursEdit,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'edit',  permissions: ['prestataires.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
