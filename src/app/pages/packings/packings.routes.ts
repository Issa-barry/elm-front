import { Routes } from '@angular/router';
import { PackingListe } from './packing-liste/packing-liste';
import { PackingNew } from './packing-new/packing-new';
import { PackingEdit } from './packing-edit/packing-edit';
 

export default [
     { path: '', component: PackingListe },
    { path: 'packings', component: PackingListe },
    { path: 'packings-new', component: PackingNew },
    { path: 'packings/:id/edit', component: PackingEdit },
     { path: '**', redirectTo: '/notfound' }
] as Routes;
