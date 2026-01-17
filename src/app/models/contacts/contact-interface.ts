export interface ContactInterface {
  id?: string;
  nom?: string;
  prenom?: string;
  phone?: string;
  type_piece?: { name: string; code: string } | null;
  numero_piece?: string;
  adresse?: string;
  ville?: string;
  quartier?: string;
}
