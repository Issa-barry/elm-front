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
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'prestateurs',
        component: PrestateursListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'new',
        component: PrestateursNew,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.create'] },
    },
    {
        path: 'edit/:id',
        component: PrestateursEdit,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
