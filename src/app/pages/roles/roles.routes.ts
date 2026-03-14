import { Routes } from '@angular/router';
import { RolesListe } from './roles-liste/roles-liste';
import { RolesEdit } from './roles-edit/roles-edit';

export default [
    { path: '', component: RolesListe, data: { breadcrumb: 'roles' }},
    { path: 'edit/:id', component: RolesEdit, data: { breadcrumb: 'edit' }},
    { path: '**', redirectTo: '/notfound' },
] as Routes;
