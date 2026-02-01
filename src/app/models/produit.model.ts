// models/produit.model.ts

export interface UserBasic {
  id: number;
  nom: string;
  prenom: string;
  email?: string;
}

// Enums alignés avec l'API Laravel
export type ProduitStatut = 'brouillon' | 'actif' | 'inactif' | 'archive' | 'rupture_stock';
export type ProduitType = 'materiel' | 'service' | 'fabricable' | 'achat_vente';

// Labels français pour l'affichage
export const PRODUIT_TYPE_LABELS: Record<ProduitType, string> = {
  materiel: 'Matériel',
  service: 'Service',
  fabricable: 'Fabricable',
  achat_vente: 'Achat/Vente'
};

export const PRODUIT_STATUT_LABELS: Record<ProduitStatut, string> = {
  brouillon: 'Brouillon',
  actif: 'Actif',
  inactif: 'Inactif',
  archive: 'Archivé',
  rupture_stock: 'Rupture de stock'
};

export type ProduitStatutSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

// Severites PrimeNG pour les tags de statut
export const PRODUIT_STATUT_SEVERITY: Record<ProduitStatut, ProduitStatutSeverity> = {
  brouillon: 'secondary',
  actif: 'success',
  inactif: 'danger',
  archive: 'danger',
  rupture_stock: 'warn'
};

// Classes CSS pour les badges de statut
export const PRODUIT_STATUT_COLORS: Record<ProduitStatut, string> = {
  brouillon: 'bg-gray-100 text-gray-800',
  actif: 'bg-green-100 text-green-800',
  inactif: 'bg-yellow-100 text-yellow-800',
  archive: 'bg-red-100 text-red-800',
  rupture_stock: 'bg-orange-100 text-orange-800'
};

export class Produit {
  id: number = 0;
  nom: string = '';
  code: string = '';

  // ✅ IMPORTANT: en UI on veut pouvoir mettre null quand non applicable
  prix_usine: number | null = null;
  prix_vente: number | null = null;
  prix_achat: number | null = null;

  qte_stock: number = 0;

  // ✅ number, pas string
  cout: number | null = null;

  statut: ProduitStatut = 'brouillon';
  type: ProduitType = 'materiel';


  in_stock: boolean = true;
  is_archived: boolean = false;

  archived_at: string | null = null;
  description: string | null = null;
  image_url: string | null = null;

  created_by: number | null = null;
  updated_by: number | null = null;
  deleted_by: number | null = null;
  archived_by: number | null = null;

  created_at: string = '';
  updated_at: string = '';
  deleted_at: string | null = null;

  creator?: UserBasic;
  updater?: UserBasic;
  archiver?: UserBasic;
  deleter?: UserBasic;

  created_by_name?: string | null;
  updated_by_name?: string | null;
  archived_by_name?: string | null;
  deleted_by_name?: string | null;

  constructor(data?: Partial<Produit>) {
    if (data) Object.assign(this, data);
  }

  /** 
   * Retourne l'URL complète de l'image.
   * Si image_url est juste un nom de fichier, ajoute le chemin de base.
   */
  getImageUrl(defaultImage: string = 'assets/demo/images/no-product.png'): string {
    if (!this.image_url) return defaultImage;

    // Si c'est déjà une URL complète (http:// ou https://), la retourner telle quelle
    if (this.image_url.startsWith('http://') || this.image_url.startsWith('https://')) {
      return this.image_url;
    }

    // Sinon, c'est juste un nom de fichier, ajouter le chemin de base
    return `assets/demo/images/produits/${this.image_url}`;
  }

  // ✅ format en number
  formatPrix(prix: number | null, currency: string = 'GNF'): string {
    const value = typeof prix === 'number' ? prix : 0;
    return `${value.toLocaleString('fr-FR')} ${currency}`;
  }

  static fromApi(data: any): Produit {
    // si l’API renvoie des strings, tu peux caster ici
    return new Produit({
      ...data,
      prix_usine: data?.prix_usine !== null && data?.prix_usine !== undefined ? Number(data.prix_usine) : null,
      prix_vente: data?.prix_vente !== null && data?.prix_vente !== undefined ? Number(data.prix_vente) : null,
      prix_achat: data?.prix_achat !== null && data?.prix_achat !== undefined ? Number(data.prix_achat) : null,
      cout: data?.cout !== null && data?.cout !== undefined ? Number(data.cout) : null,
    });
  }

  static fromApiArray(data: any[]): Produit[] {
    return data.map(item => Produit.fromApi(item));
  }
}

// ✅ DTO pour création (prix optionnels car dépend du type)
export interface CreateProduitDto {
  nom: string;
  type: ProduitType;
  qte_stock: number;

  code?: string;
  statut?: ProduitStatut;
  cout?: number;
  description?: string;

  prix_usine?: number;
  prix_vente?: number;
  prix_achat?: number;

  image?: File;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// Interface pour la pagination
export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

// Interface pour les paramètres de recherche/filtrage
export interface ProduitSearchParams {
  search?: string;
  type?: ProduitType;
  statut?: ProduitStatut;
  in_stock?: boolean;
  page?: number;
  per_page?: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
}

// Interface pour les statistiques
export interface ProduitStatistics {
  total: number;
  brouillons: number;
  actifs: number;
  inactifs: number;
  archives: number;
  rupture_stock: number;
  valeur_stock_total: number;
  par_type: {
    type: ProduitType;
    count: number;
  }[];
}

// DTO pour la mise à jour du stock
export interface UpdateStockDto {
  qte_stock: number;
  operation?: 'set' | 'add' | 'subtract';
}

// DTO pour le changement de statut
export interface ChangeStatusDto {
  statut: ProduitStatut;
}

