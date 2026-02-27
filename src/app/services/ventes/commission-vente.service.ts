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

@Injectable({ providedIn: 'root' })
export class CommissionVenteService {
  private readonly url = `${environment.apiUrl}/ventes/commissions`;

  constructor(private http: HttpClient) {}

  getAll(
    params: HttpParams
  ): Observable<ApiResponse<FlatPaginated<CommissionVente>>> {
    return this.http.get<ApiResponse<FlatPaginated<CommissionVente>>>(this.url, { params });
  }

  getById(id: number): Observable<ApiResponse<CommissionVente>> {
    return this.http.get<ApiResponse<CommissionVente>>(`${this.url}/${id}`);
  }

  /** Pas de montant_verse : le back utilise automatiquement montant_attendu */
  verser(
    id: number,
    type: BeneficiaireType,
    note?: string,
    date_versement?: string
  ): Observable<ApiResponse<null>> {
    const body: Record<string, string> = {};
    if (note) body['note'] = note;
    if (date_versement) body['date_versement'] = date_versement;
    return this.http.post<ApiResponse<null>>(
      `${this.url}/${id}/versements/${type}`,
      body
    );
  }
}
