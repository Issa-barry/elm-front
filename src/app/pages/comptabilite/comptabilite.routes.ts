import { Routes } from '@angular/router';
import { ComptabilitePackingListe } from './comptabilite-packing-liste/comptabilite-packing-liste';
import { ComptabilitePackingDetail } from './comptabilite-packing-detail/comptabilite-packing-detail';
import { authorizationGuard } from '@/guards/authorization.guard';

export default [
    {
        path: '',
        component: ComptabilitePackingListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['facture-packings.read'] },
    },
    {
        path: 'comptabilite-packing-liste',
        component: ComptabilitePackingListe,
        canActivate: [authorizationGuard],
        data: { permissions: ['facture-packings.read'] },
    },
    {
        path: 'comptabilite-packing-detail/:id',
        component: ComptabilitePackingDetail,
        canActivate: [authorizationGuard],
        data: { permissions: ['facture-packings.read'] },
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
