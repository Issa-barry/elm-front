import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommissionVente, BeneficiaireType } from '@/models/vente.model';
import { ApiResponse } from '@/services/livraisons/facture-livraison.service';

/** Pagination plate retournée par l'API Laravel (sans meta imbriqué) */
export interface FlatPaginated<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface CommissionFilters {
  statut?: string;
  vehicule_id?: number;
  livreur_id?: number;
  date_debut?: string;
  date_fin?: string;
  page?: number;
  per_page?: number;
}

@Injectable({ providedIn: 'root' })
export class CommissionVenteService {
  private readonly url = `${environment.apiUrl}/ventes/commissions`;

  constructor(private http: HttpClient) {}

  getAll(
    filters?: CommissionFilters
  ): Observable<ApiResponse<FlatPaginated<CommissionVente>>> {
    let params = new HttpParams();
    if (filters?.statut) params = params.set('statut', filters.statut);
    if (filters?.vehicule_id) params = params.set('vehicule_id', String(filters.vehicule_id));
    if (filters?.livreur_id) params = params.set('livreur_id', String(filters.livreur_id));
    if (filters?.date_debut) params = params.set('date_debut', filters.date_debut);
    if (filters?.date_fin) params = params.set('date_fin', filters.date_fin);
    if (filters?.page) params = params.set('page', String(filters.page));
    if (filters?.per_page) params = params.set('per_page', String(filters.per_page));
    return this.http.get<ApiResponse<FlatPaginated<CommissionVente>>>(this.url, { params });
  }

  getById(id: number): Observable<ApiResponse<CommissionVente>> {
    return this.http.get<ApiResponse<CommissionVente>>(`${this.url}/${id}`);
  }

  /** Pas de montant_verse : le back utilise automatiquement montant_attendu */
  verser(
    id: number,
    type: BeneficiaireType,
    note?: string
  ): Observable<ApiResponse<null>> {
    return this.http.post<ApiResponse<null>>(
      `${this.url}/${id}/versements/${type}`,
      note ? { note } : {}
    );
  }
}
