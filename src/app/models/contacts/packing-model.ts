// src/app/models/packing/packing-model.ts
import { ContactInterface } from '@/models/contacts/contact-interface';

export class PackingModel {
  id?: string;
  contact_id?: string;
  contact?: ContactInterface;
  date_debut?: Date | null;
  date_fin?: Date | null;
  nombre_rouleaux?: number;
  statut?: 'en_cours' | 'termine' | 'annule';
  created_at?: string;
  updated_at?: string;

  constructor(data?: Partial<PackingModel>) { // ✅ Corrigé de Packing à PackingModel
    if (data) {
      Object.assign(this, data);
      
      // Convertir les dates string en Date
      if (data.date_debut && typeof data.date_debut === 'string') {
        this.date_debut = new Date(data.date_debut);
      }
      
      if (data.date_fin && typeof data.date_fin === 'string') {
        this.date_fin = new Date(data.date_fin);
      }
    }
  }
}