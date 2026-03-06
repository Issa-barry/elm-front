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
      data: { breadcrumb: 'commandes' },
},
  {
    path: 'commandes/:id',
    loadComponent: () => import('./commande-vente-detail2/commande-vente-detail2').then(c => c.CommandeVenteDetail2),
      data: { breadcrumb: 'commandes' },
},
  {
    path: 'factures-vente-liste2',
    loadComponent: () => import('./facture-vente-liste2/facture-vente-liste2').then(c => c.FactureVenteListe2),
      data: { breadcrumb: 'factures-vente-liste2' },
},
  {
    path: 'factures-vente-detail2/:id',
    loadComponent: () => import('./facture-vente-detail2/facture-vente-detail2').then(c => c.FactureVenteDetail2),
      data: { breadcrumb: 'factures-vente-detail2' },
},
{
  path: 'factures-vente-detail3/:id',
  loadComponent: () => import('./facture-vente-detail3/facture-vente-detail3').then(c => c.FactureVenteDetail3),
    data: { breadcrumb: 'factures-vente-detail3' },
},
{
  path: 'factures-vente-detail4/:id',
  loadComponent: () => import('./facture-vente-detail4/facture-vente-detail4').then(c => c.FactureVenteDetail4),
    data: { breadcrumb: 'factures-vente-detail2' },
},
  {
    path: 'factures-vente',
    loadComponent: () => import('./facture-vente-liste/facture-vente-liste').then(c => c.FactureVenteListe),
      data: { breadcrumb: 'factures-vente' },
},
  {
    path: 'factures',
    loadComponent: () => import('./facture-vente-liste/facture-vente-liste').then(c => c.FactureVenteListe),
      data: { breadcrumb: 'factures' },
},
  {
    path: 'factures/:id',
    loadComponent: () => import('./facture-vente-detail/facture-vente-detail').then(c => c.FactureVenteDetail),
      data: { breadcrumb: 'factures' },
},
  {
    path: 'encaissements',
    loadComponent: () => import('./encaissement-vente-liste/encaissement-vente-liste').then(c => c.EncaissementVenteListe),
      data: { breadcrumb: 'encaissements' },
},
  {
    path: 'commissions',
    loadComponent: () => import('./commission-vente-liste/commission-vente-liste').then(c => c.CommissionVenteListe),
      data: { breadcrumb: 'commissions' },
},
  {
    path: 'commissions2',
    loadComponent: () => import('./commissions/comission-vente-liste2/comission-vente-liste2').then(c => c.ComissionVenteListe2),
      data: { breadcrumb: 'commissions2' },
},
  { path: '**', redirectTo: '/notfound' },
] as Routes;
