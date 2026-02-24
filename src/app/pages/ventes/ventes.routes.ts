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
    path: 'factures-vente-liste2',
    loadComponent: () => import('./facture-vente-liste2/facture-vente-liste2').then(c => c.FactureVenteListe2),
  },
  {
    path: 'factures-vente-detail2/:id',
    loadComponent: () => import('./facture-vente-detail2/facture-vente-detail2').then(c => c.FactureVenteDetail2),
  },
  {
    path: 'factures-vente',
    loadComponent: () => import('./facture-vente-liste/facture-vente-liste').then(c => c.FactureVenteListe),
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
