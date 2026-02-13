import { Routes } from '@angular/router';
import { ProduitsListe } from './produits-liste/produits-liste';
import { ProduitsNew } from './produits-new/produits-new';
import { ProduitsEdit } from './produits-edit/produits-edit';

 

export default [
    { path: '', component: ProduitsListe },
    { path: 'produits', component: ProduitsListe },
    { path: 'produits-new', component: ProduitsNew },
    { path: 'produits-edit/:id', component: ProduitsEdit },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
 