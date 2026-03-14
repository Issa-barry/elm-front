import { Routes } from '@angular/router';

// ── Véhicules ──────────────────────────────────────────────────────────────
import { VehiculeListe } from './vehicules/vehicule-liste/vehicule-liste';
import { VehiculeForm }  from './vehicules/vehicule-form/vehicule-form';
import { VehiculeEdit }  from './vehicules/vehicule-edit/vehicule-edit';

// ── Propriétaires ──────────────────────────────────────────────────────────
import { ProprietaireListe } from './proprietaires/proprietaire-liste/proprietaire-liste';
import { ProprietaireForm }  from './proprietaires/proprietaire-form/proprietaire-form';
import { ProprietaireEdit }  from './proprietaires/proprietaire-edit/proprietaire-edit';

// ── Livreurs ───────────────────────────────────────────────────────────────
import { LivreurListe } from './livreurs/livreur-liste/livreur-liste';
import { LivreurForm }  from './livreurs/livreur-form/livreur-form';
import { LivreurEdit }  from './livreurs/livreur-edit/livreur-edit';
import { VehiculeListe2 } from './vehicules/vehicule-liste2/vehicule-liste2';

export default [
  // Véhicules
  { path: '',         component: VehiculeListe, data: { breadcrumb: 'vehicules' }},
  { path: 'nouveau',  component: VehiculeForm, data: { breadcrumb: 'nouveau' }},
  { path: ':id/edit', component: VehiculeEdit, data: { breadcrumb: 'edit' }},

  { path: 'vehicules-liste2',         component: VehiculeListe2, data: { breadcrumb: 'vehicules-liste2' }},

  // Propriétaires
  { path: 'proprietaires',          component: ProprietaireListe, data: { breadcrumb: 'proprietaires' }},
  { path: 'proprietaires/nouveau',  component: ProprietaireForm, data: { breadcrumb: 'nouveau' }},
  { path: 'proprietaires/:id/edit', component: ProprietaireEdit, data: { breadcrumb: 'edit' }},

  // Livreurs
  { path: 'livreurs',          component: LivreurListe, data: { breadcrumb: 'livreurs' }},
  { path: 'livreurs/nouveau',  component: LivreurForm, data: { breadcrumb: 'nouveau' }},
  { path: 'livreurs/:id/edit', component: LivreurEdit, data: { breadcrumb: 'edit' }},

  { path: '**', redirectTo: '/notfound' },
] as Routes;
