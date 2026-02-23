import { Routes } from '@angular/router';
import { CommandeVenteListe } from './commande-vente-liste/commande-vente-liste';

export default [
  {
    path: '',
    redirectTo: 'commandes',
    pathMatch: 'full',
  },
  {
    path: 'commandes',
    component: CommandeVenteListe,
  },
  {
    path: 'commandes/:id',
    loadComponent: () => import('./commande-vente-detail/commande-vente-detail').then(c => c.CommandeVenteDetail),
  },
  {
    path: 'factures',
    loadComponent: () => import('./facture-vente-liste/facture-vente-liste').then(c => c.FactureVenteListe),
  },
  {
    path: 'factures/:id',
    loadComponent: () => import('./facture-vente-detail/facture-vente-detail').then(c => c.FactureVenteDetail),
  },
  {
    path: 'encaissements',
    loadComponent: () => import('./encaissement-vente-liste/encaissement-vente-liste').then(c => c.EncaissementVenteListe),
  },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
