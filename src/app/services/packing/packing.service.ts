import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Packing, CreatePackingDto, UpdatePackingDto, PackingFilters, ChangePackingStatutDto } from '@/models/packing.model';
import { environment } from 'src/environments/environment.development';

// Interfaces pour les réponses API
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: any[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PackingService {
  private readonly apiUrl = `${environment.apiUrl}/packings`;

  constructor(private http: HttpClient) {}

  /**
   * Récupérer la liste des packings avec filtres optionnels
   */
  getPackings(filters?: PackingFilters): Observable<ApiResponse<Packing[]> | PaginatedResponse<Packing>> {
    let params = new HttpParams();

    if (filters) {
      if (filters.prestataire_id) {
        params = params.set('prestataire_id', filters.prestataire_id.toString());
      }
      if (filters.statut) {
        params = params.set('statut', filters.statut);
      }
      if (filters.date_debut) {
        params = params.set('date_debut', filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set('date_fin', filters.date_fin);
      }
      if (filters.non_payes) {
        params = params.set('non_payes', filters.non_payes.toString());
      }
      if (filters.search) {
        params = params.set('search', filters.search);
      }
      if (filters.sort_by) {
        params = params.set('sort_by', filters.sort_by);
      }
      if (filters.sort_order) {
        params = params.set('sort_order', filters.sort_order);
      }
      if (filters.per_page) {
        params = params.set('per_page', filters.per_page.toString());
      }
      if (filters.page) {
        params = params.set('page', filters.page.toString());
      }
    }

    return this.http.get<ApiResponse<Packing[]> | PaginatedResponse<Packing>>(this.apiUrl, { params });
  }

  /**
   * Récupérer un packing par son ID
   */
  getPacking(id: number): Observable<ApiResponse<Packing>> {
    return this.http.get<ApiResponse<Packing>>(`${this.apiUrl}/${id}`);
  }

  /**
   * Créer un nouveau packing
   */
  createPacking(data: CreatePackingDto): Observable<ApiResponse<Packing>> {
    return this.http.post<ApiResponse<Packing>>(this.apiUrl, data);
  }

  /**
   * Mettre à jour un packing
   */
  updatePacking(id: number, data: UpdatePackingDto): Observable<ApiResponse<Packing>> {
    return this.http.put<ApiResponse<Packing>>(`${this.apiUrl}/${id}`, data);
  }

  /**
   * Changer le statut d'un packing
   */
  changeStatut(id: number, data: ChangePackingStatutDto): Observable<ApiResponse<Packing>> {
    return this.http.patch<ApiResponse<Packing>>(`${this.apiUrl}/${id}/statut`, data);
  }

  /**
   * Supprimer un packing
   */
  deletePacking(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  /**
   * Rechercher des packings
   */
  searchPackings(searchTerm: string): Observable<ApiResponse<Packing[]>> {
    const params = new HttpParams().set('search', searchTerm);
    return this.http.get<ApiResponse<Packing[]>>(this.apiUrl, { params });
  }

  /**
   * Obtenir les packings par prestataire
   */
  getPackingsByPrestataire(prestataireId: number): Observable<ApiResponse<Packing[]>> {
    const params = new HttpParams().set('prestataire_id', prestataireId.toString());
    return this.http.get<ApiResponse<Packing[]>>(this.apiUrl, { params });
  }

  /**
   * Obtenir les packings par statut
   */
  getPackingsByStatut(statut: string): Observable<ApiResponse<Packing[]>> {
    const params = new HttpParams().set('statut', statut);
    return this.http.get<ApiResponse<Packing[]>>(this.apiUrl, { params });
  }

  /**
   * Obtenir les packings non payés
   */
  getPackingsNonPayes(): Observable<ApiResponse<Packing[]>> {
    const params = new HttpParams().set('non_payes', 'true');
    return this.http.get<ApiResponse<Packing[]>>(this.apiUrl, { params });
  }

  /**
   * Obtenir les packings par période
   */
  getPackingsByPeriode(dateDebut: string, dateFin: string): Observable<ApiResponse<Packing[]>> {
    const params = new HttpParams()
      .set('date_debut', dateDebut)
      .set('date_fin', dateFin);
    return this.http.get<ApiResponse<Packing[]>>(this.apiUrl, { params });
  }

  /**
   * Obtenir les packings avec pagination
   */
  getPackingsPaginated(
    page: number = 1,
    perPage: number = 10,
    filters?: Omit<PackingFilters, 'page' | 'per_page'>
  ): Observable<PaginatedResponse<Packing>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    if (filters) {
      if (filters.prestataire_id) {
        params = params.set('prestataire_id', filters.prestataire_id.toString());
      }
      if (filters.statut) {
        params = params.set('statut', filters.statut);
      }
      if (filters.date_debut) {
        params = params.set('date_debut', filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set('date_fin', filters.date_fin);
      }
      if (filters.non_payes) {
        params = params.set('non_payes', filters.non_payes.toString());
      }
      if (filters.search) {
        params = params.set('search', filters.search);
      }
      if (filters.sort_by) {
        params = params.set('sort_by', filters.sort_by);
      }
      if (filters.sort_order) {
        params = params.set('sort_order', filters.sort_order);
      }
    }

    return this.http.get<PaginatedResponse<Packing>>(this.apiUrl, { params });
  }
}
