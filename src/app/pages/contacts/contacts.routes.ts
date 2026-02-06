import { Routes } from '@angular/router';
import { Prestateurs } from './prestateurs/prestateurs';
import { PrestateursNew } from './prestateurs-new/prestateurs-new';
import { PrestateursEdit } from './prestateurs-edit/prestateurs-edit';
 

export default [
     { path: '', component: Prestateurs },
    { path: 'prestateurs', component: Prestateurs },
    { path: 'prestateurs/new', component: PrestateursNew },
    { path: 'prestateurs/edit/:id', component: PrestateursEdit },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
