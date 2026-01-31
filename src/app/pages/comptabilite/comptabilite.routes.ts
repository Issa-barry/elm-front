import { Routes } from '@angular/router';
import { PackingPaiement } from './packing-paiement/packing-paiement';
import { ComptabilitePackingListe } from './comptabilite-packing-liste/comptabilite-packing-liste';



export default [
    { path: '', component: ComptabilitePackingListe },
    { path: 'comptabilite-packing', component: ComptabilitePackingListe },
    { path: 'packing-paiement', component: PackingPaiement },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
