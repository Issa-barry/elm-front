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

export default [
  // Véhicules
  { path: '',         component: VehiculeListe },
  { path: 'nouveau',  component: VehiculeForm  },
  { path: ':id/edit', component: VehiculeEdit  },

  // Propriétaires
  { path: 'proprietaires',          component: ProprietaireListe },
  { path: 'proprietaires/nouveau',  component: ProprietaireForm  },
  { path: 'proprietaires/:id/edit', component: ProprietaireEdit  },

  // Livreurs
  { path: 'livreurs',          component: LivreurListe },
  { path: 'livreurs/nouveau',  component: LivreurForm  },
  { path: 'livreurs/:id/edit', component: LivreurEdit  },

  { path: '**', redirectTo: '/notfound' },
] as Routes;
