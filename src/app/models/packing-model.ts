// src/app/models/packing/packing-model.ts
import { ContactInterface } from '@/models/contacts/contact-interface';

export class PackingModel {
  id?: string;
  contact_id?: string;
  contact?: ContactInterface;
  date_debut?: Date | null;
  date_fin?: Date | null;
  nombre_rouleaux?: number;
  prix_rouleau?: number;
  montant: number = 0;
  statut?: 'en_cours' | 'termine' | 'annule';
  created_at?: string;
  updated_at?: string;

  constructor(data?: Partial<PackingModel>) {
    if (data) {
      Object.assign(this, data);
      
      // Convertir les dates string en Date
      if (data.date_debut && typeof data.date_debut === 'string') {
        this.date_debut = new Date(data.date_debut);
      }
      
      if (data.date_fin && typeof data.date_fin === 'string') {
        this.date_fin = new Date(data.date_fin);
      }

      // Calculer le montant automatiquement si non fourni
      if (!data.montant && data.nombre_rouleaux && data.prix_rouleau) {
        this.montant = data.nombre_rouleaux * data.prix_rouleau;
      }
    }
  }

  // Calculer le montant total
  calculateMontant(): number {
    if (this.nombre_rouleaux && this.prix_rouleau) {
      this.montant = this.nombre_rouleaux * this.prix_rouleau;
      return this.montant;
    }
    return this.montant || 0;
  }

  // Calculer le prix unitaire à partir du montant
  calculatePrixRouleau(): number {
    if (this.montant && this.nombre_rouleaux && this.nombre_rouleaux > 0) {
      this.prix_rouleau = this.montant / this.nombre_rouleaux;
      return this.prix_rouleau;
    }
    return this.prix_rouleau || 0;
  }
}