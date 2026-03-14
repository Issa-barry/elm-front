import { Routes } from '@angular/router';
import { authorizationGuard } from '@/guards/authorization.guard';
import { PrestatairesListe } from './prestataires-liste/prestataires-liste';
import { PrestatairesNew } from './prestataires-new/prestataires-new';
import { PrestatairesEdit } from './prestataires-edit/prestataires-edit';
 

export default [
    {
        path: '',
        component: PrestatairesListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'prestataires',  permissions: ['prestataires.read'] },
    },
    {
        path: 'prestataires',
        component: PrestatairesListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'prestataires',  permissions: ['prestataires.read'] },
    },
    {
        path: 'new',
        component: PrestatairesNew,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'new',  permissions: ['prestataires.create'] },
    },
    {
        path: 'edit/:id',
        component: PrestatairesEdit,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'edit',  permissions: ['prestataires.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
