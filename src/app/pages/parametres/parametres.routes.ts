import { Routes } from '@angular/router';
import { ParametresListe } from './parametres-liste/parametres-liste';
 
export default [
    { path: '', component: ParametresListe, data: { breadcrumb: 'Paramètres' } },
     { path: 'parametres', component: ParametresListe, data: { breadcrumb: 'Paramètres' } },
] as Routes;
