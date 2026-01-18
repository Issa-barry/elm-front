// src/app/models/packing/packing-interface.ts
import { ContactInterface } from '@/models/contacts/contact-interface';

export interface PackingInterface {
  id?: string;
  contact_id?: string;
  contact?: ContactInterface;
  date_debut?: Date | string | null;
  date_fin?: Date | string | null; 
  nombre_rouleaux?: number;
  statut?: 'en_cours' | 'termine' | 'annule';
  created_at?: string;
  updated_at?: string;
}