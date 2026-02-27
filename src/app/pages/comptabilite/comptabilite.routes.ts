import { Routes } from '@angular/router';
import { ComptabilitePackingListe } from './comptabilite-packing-liste/comptabilite-packing-liste';
import { ComptabilitePackingDetail } from './comptabilite-packing-detail/comptabilite-packing-detail';
import { FactureLivraisonListe } from './facture-livraison-liste/facture-livraison-liste';
import { FactureLivraisonDetail } from './facture-livraison-detail/facture-livraison-detail';
import { EncaissementLivraisonListe } from './encaissement-livraison-liste/encaissement-livraison-liste';
import { authorizationGuard } from '@/guards/authorization.guard';

export default [
    // ── Factures packing (existant) ─────────────────────────────────────
    {
        path: '',
        component: ComptabilitePackingListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'comptabilite',  permissions: ['facture-packings.read'] },
    },
    {
        path: 'comptabilite-packing-liste',
        component: ComptabilitePackingListe,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'comptabilite-packing-liste',  permissions: ['facture-packings.read'] },
    },
    {
        path: 'comptabilite-packing-detail/:id',
        component: ComptabilitePackingDetail,
        canActivate: [authorizationGuard],
        data: { breadcrumb: 'comptabilite-packing-detail',  permissions: ['facture-packings.read'] },
    },

    // ── Factures livraison ───────────────────────────────────────────────
    {
        path: 'factures-livraison',
        component: FactureLivraisonListe,
            data: { breadcrumb: 'factures-livraison' },
},
    {
        path: 'factures-livraison/:id',
        component: FactureLivraisonDetail,
            data: { breadcrumb: 'factures-livraison' },
},

    // ── Encaissements livraison ──────────────────────────────────────────
    {
        path: 'encaissements-livraison',
        component: EncaissementLivraisonListe,
            data: { breadcrumb: 'encaissements-livraison' },
},

    { path: '**', redirectTo: '/notfound' },
] as Routes;
