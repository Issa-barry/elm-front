import { Routes } from '@angular/router';
import { PackingPaiement } from './packing-paiement/packing-paiement';
import { ComptabilitePackingListe } from './comptabilite-packing-liste/comptabilite-packing-liste';
import { ComptabilitePackingDetail } from './comptabilite-packing-detail/comptabilite-packing-detail';



export default [
    { path: '', component: ComptabilitePackingListe },
    { path: 'comptabilite-packing-liste', component: ComptabilitePackingListe },
    { path: 'comptabilite-packing-detail', component: ComptabilitePackingDetail },
    { path: 'comptabilite-packing-paiement', component: PackingPaiement },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
