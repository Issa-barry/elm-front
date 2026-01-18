export interface ProduitInterface {
    nom: string;
    prix_usine: string;
    prix_vente: string;
    prix_achat: string;
    qte_stock: number;
    cout: number;
    code: string;
    statut: string;
    type: string;
    inStock: boolean;
    description: string;
    images: ProduitImage[];
    created_at?: string;
    updated_at?: string;
}

export interface ProduitImage {
    name: string;
    imageURL: string;
}