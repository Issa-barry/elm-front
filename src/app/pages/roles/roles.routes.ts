import { Routes } from '@angular/router';
import { RolesListe } from './roles-liste/roles-liste';
import { RolesEdit } from './roles-edit/roles-edit';

export default [
    { path: '', component: RolesListe },
    { path: 'edit/:id', component: RolesEdit },
    { path: '**', redirectTo: '/notfound' },
] as Routes;
