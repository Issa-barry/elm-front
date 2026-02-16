import { Routes } from '@angular/router';
import { authorizationGuard } from '@/guards/authorization.guard';
 import { PrestateursNew } from './prestateurs/prestateurs-new/prestateurs-new';
 
export default [
    // {
    //     path: '',
    //     component: PrestateursListe,
    //     canActivate: [authorizationGuard],
    //     data: { permissions: ['prestataires.read'] },
    // },
    {
        path: 'prestateurs',
        loadChildren: () => import('@/pages/contacts/prestateurs/prestateurs.routes')
    },
   
    {
        path: 'utilisateurs',
        loadChildren: () => import('@/pages/contacts/utilisateurs/utilisateurs.routes')
    },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
