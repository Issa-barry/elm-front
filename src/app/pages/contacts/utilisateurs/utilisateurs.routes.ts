import { Routes } from '@angular/router';
import { authorizationGuard } from '@/guards/authorization.guard';
import { UtilisateursListe } from './utilisateurs-liste/utilisateurs-liste';
import { UtilisateursNew } from './utilisateurs-new/utilisateurs-new';
import { UtilisateursEdit } from './utilisateurs-edit/utilisateurs-edit';
 
 

export default [
    {
        path: '',
        component: UtilisateursListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'utilisateurs',
        component: UtilisateursListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.read'] },
    },
    {
        path: 'new',
        component: UtilisateursNew,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.create'] },
    },
    {
        path: 'edit/:id',
        component: UtilisateursEdit,
        canActivate: [authorizationGuard],
        data: { permissions: ['prestataires.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
