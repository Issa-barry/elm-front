import { Routes } from '@angular/router';
import { ParametresListe } from './parametres-liste/parametres-liste';
 
export default [
    { path: '', component: ParametresListe, data: { breadcrumb: 'parametres' } },
     { path: 'parametres', component: ParametresListe, data: { breadcrumb: 'parametres' } },
] as Routes;
