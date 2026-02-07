import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parametre, PeriodesResponse, UpdateParametreDto } from '@/models/parametres.model';
import { environment } from 'src/environments/environment.development';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ParametresListResponse {
  parametres: Parametre[];
  groupes: Record<string, string>;
}

@Injectable({
  providedIn: 'root',
})
export class ParametresService {
  private readonly apiUrl = `${environment.apiUrl}/parametres`;

  constructor(private http: HttpClient) {}

  /**
   * Récupérer tous les paramètres (avec filtre optionnel par groupe)
   */
  getParametres(groupe?: string): Observable<ApiResponse<ParametresListResponse>> {
    let params = new HttpParams();
    if (groupe) {
      params = params.set('groupe', groupe);
    }
    return this.http.get<ApiResponse<ParametresListResponse>>(this.apiUrl, { params });
  }

  /**
   * Mettre à jour un paramètre
   */
  updateParametre(id: number, data: UpdateParametreDto): Observable<ApiResponse<Parametre>> {
    return this.http.put<ApiResponse<Parametre>>(`${this.apiUrl}/${id}`, data);
  }

  /**
   * Récupérer les périodes disponibles pour un mois/année
   */
  getPeriodes(mois?: number, annee?: number): Observable<ApiResponse<PeriodesResponse>> {
    let params = new HttpParams();
    if (mois) {
      params = params.set('mois', mois.toString());
    }
    if (annee) {
      params = params.set('annee', annee.toString());
    }
    return this.http.get<ApiResponse<PeriodesResponse>>(`${this.apiUrl}/periodes`, { params });
  }
}
