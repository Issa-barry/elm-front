import { Routes } from '@angular/router';
 import { ComptabilitePackingListe } from './comptabilite-packing-liste/comptabilite-packing-liste';
import { ComptabilitePackingDetail } from './comptabilite-packing-detail/comptabilite-packing-detail';



export default [
    { path: '', component: ComptabilitePackingListe },
    { path: 'comptabilite-packing-liste', component: ComptabilitePackingListe },
    { path: 'comptabilite-packing-detail/:id', component: ComptabilitePackingDetail },
     { path: '**', redirectTo: '/notfound' }
] as Routes;
