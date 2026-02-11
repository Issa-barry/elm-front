import { Prestataire } from './prestataire.model';

// Types pour le statut du packing
export type PackingStatut = 'a_valider' | 'valide' | 'annule';

// Labels français pour l'affichage
export const PACKING_STATUT_LABELS: Record<PackingStatut, string> = {
  a_valider: 'À valider',
  valide: 'Validé',
  annule: 'Annulé'
};

export type PackingStatutSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

// Severities PrimeNG pour les tags de statut
export const PACKING_STATUT_SEVERITY: Record<PackingStatut, PackingStatutSeverity> = {
  a_valider: 'warn',
  valide: 'success',
  annule: 'danger'
};

// Interface principale Packing
export interface Packing {
  id: number;
  prestataire_id: number;
  reference: string;
  date: string | Date;
  nb_rouleaux: number;
  prix_par_rouleau: number;
  montant: number;
  statut: PackingStatut;
  facture_id: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;

  // Appended
  statut_label?: string;
  prestataire_nom?: string;

  // Relation
  prestataire?: Prestataire;
}

// DTO pour création
export interface CreatePackingDto {
  prestataire_id: number;
  date: string;
  nb_rouleaux: number;
  prix_par_rouleau: number;
  statut?: PackingStatut;
  notes?: string;
}

// DTO pour mise à jour
export interface UpdatePackingDto {
  prestataire_id?: number;
  date?: string;
  nb_rouleaux?: number;
  prix_par_rouleau?: number;
  statut?: PackingStatut;
  notes?: string;
}

// Interface pour les filtres
export interface PackingFilters {
  prestataire_id?: number;
  statut?: PackingStatut;
  date_debut?: string;
  date_fin?: string;
  non_payes?: boolean;
  search?: string;
  sort_by?: 'date' | 'created_at' | 'montant' | 'nb_rouleaux' | 'statut';
  sort_order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

// Interface pour le changement de statut
export interface ChangePackingStatutDto {
  statut: PackingStatut;
}
