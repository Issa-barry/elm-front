import { Routes } from '@angular/router';
import { ProduitsListe } from './produits-liste/produits-liste';
import { ProduitsNew } from './produits-new/produits-new';
import { ProduitsEdit } from './produits-edit/produits-edit';
import { authorizationGuard } from '@/guards/authorization.guard';

export default [
    {
        path: '',
        component: ProduitsListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['produits.read'] },
    },
    {
        path: 'produits',
        component: ProduitsListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['produits.read'] },
    },
    {
        path: 'produits-new',
        component: ProduitsNew,
        canActivate: [authorizationGuard],
        data: { permissions: ['produits.create'] },
    },
    {
        path: 'produits-edit/:id',
        component: ProduitsEdit,
        canActivate: [authorizationGuard],
        data: { permissions: ['produits.update'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
