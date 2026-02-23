export type StatutFacture = 'impayee' | 'partiel' | 'payee' | 'annulee';
export type ModePaiement = 'especes' | 'mobile_money' | 'virement' | 'cheque';

export const STATUT_FACTURE_LABELS: Record<StatutFacture, string> = {
  impayee: 'Impayée',
  partiel: 'Partielle',
  payee: 'Payée',
  annulee: 'Annulée',
};

export const STATUT_FACTURE_SEVERITY: Record<
  StatutFacture,
  'success' | 'info' | 'warn' | 'danger' | 'secondary'
> = {
  impayee: 'danger',
  partiel: 'warn',
  payee: 'success',
  annulee: 'secondary',
};

export const MODE_PAIEMENT_OPTIONS: { label: string; value: ModePaiement }[] = [
  { label: 'Espèces', value: 'especes' },
  { label: 'Mobile Money', value: 'mobile_money' },
  { label: 'Virement', value: 'virement' },
  { label: 'Chèque', value: 'cheque' },
];

// ── Véhicule (résumé dans les factures/commandes) ─────────────────────

export interface FactureVenteVehicule {
  id: number;
  nom_vehicule: string;
  immatriculation: string;
  proprietaire?: { nom: string; prenom: string; phone?: string };
  livreurPrincipal?: { nom: string; prenom: string; phone?: string };
  livreur_principal?: { nom: string; prenom: string; phone?: string };
}

// ── Factures ──────────────────────────────────────────────────────────

export interface FactureVente {
  id: number;
  reference: string;
  vehicule_id: number;
  commande_vente_id: number;
  usine_id: number;
  montant_brut: string;
  montant_net: string;
  montant_encaisse: number;
  montant_restant: number;
  statut_facture: StatutFacture;
  vehicule?: FactureVenteVehicule;
  encaissements?: EncaissementVente[];
  created_at: string;
}

// ── Encaissements ─────────────────────────────────────────────────────

export interface EncaissementVente {
  id: number;
  facture_vente_id: number;
  montant: string;
  date_encaissement: string;
  mode_paiement: ModePaiement;
  note?: string;
}

export interface StoreEncaissementVenteDto {
  facture_vente_id: number;
  montant: number;
  date_encaissement: string;
  mode_paiement: ModePaiement;
  note?: string;
}

// ── Commandes ─────────────────────────────────────────────────────────

export interface LigneCommandeVente {
  id: number;
  commande_vente_id: number;
  produit_id: number;
  qte: number;
  prix_usine_snapshot: number;
  prix_vente_snapshot: number;
  total_ligne: string;
  produit?: { id: number; nom: string };
}

export interface CommandeVente {
  id: number;
  usine_id: number;
  vehicule_id: number;
  reference: string;
  total_commande: string;
  vehicule?: FactureVenteVehicule;
  lignes?: LigneCommandeVente[];
  facture?: Pick<
    FactureVente,
    'id' | 'reference' | 'montant_brut' | 'montant_net' | 'statut_facture' | 'montant_encaisse' | 'montant_restant' | 'encaissements'
  >;
  created_at: string;
}

export interface StoreLigneCommandeDto {
  produit_id: number;
  qte: number;
  prix_vente?: number;
}

export interface StoreCommandeVenteDto {
  vehicule_id: number;
  lignes: StoreLigneCommandeDto[];
}

export interface UpdateCommandeVenteDto {
  vehicule_id?: number;
  lignes?: StoreLigneCommandeDto[];
}
