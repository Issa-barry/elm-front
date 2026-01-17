import { Routes } from '@angular/router';
import { Prestateurs } from './prestateurs/prestateurs';
import { PrestateursNew } from './prestateurs-new/prestateurs-new';
 

export default [
     { path: '', component: Prestateurs },
    { path: 'prestateurs', component: Prestateurs },
    { path: 'prestateurs/new', component: PrestateursNew },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
