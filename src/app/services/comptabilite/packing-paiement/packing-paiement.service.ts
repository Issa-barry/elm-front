import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  PaiementPacking,
  StorePaiementPackingDto,
  ComptabiliteSummary,
  PreviewPaiementPacking,
  PaiementPackingFilters,
  ComptabiliteFilters,
  StoreVersementDto,
  VersementIndexResponse,
  VersementStoreResponse,
} from '@/models/paiement-packing.model';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class PackingPaiementService {
  private readonly apiUrl = `${environment.apiUrl}/paiement-packings`;

  constructor(private http: HttpClient) {}

  /**
   * Liste des paiements avec filtres optionnels
   */
  getPaiements(filters?: PaiementPackingFilters): Observable<ApiResponse<PaiementPacking[]>> {
    let params = new HttpParams();

    if (filters) {
      if (filters.prestataire_id) {
        params = params.set('prestataire_id', filters.prestataire_id.toString());
      }
      if (filters.periode_debut) {
        params = params.set('periode_debut', filters.periode_debut);
      }
      if (filters.periode_fin) {
        params = params.set('periode_fin', filters.periode_fin);
      }
      if (filters.date_paiement_debut) {
        params = params.set('date_paiement_debut', filters.date_paiement_debut);
      }
      if (filters.date_paiement_fin) {
        params = params.set('date_paiement_fin', filters.date_paiement_fin);
      }
      if (filters.mode_paiement) {
        params = params.set('mode_paiement', filters.mode_paiement);
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
    }

    return this.http.get<ApiResponse<PaiementPacking[]>>(this.apiUrl, { params });
  }

  /**
   * Détail d'un paiement
   */
  getPaiement(id: number): Observable<ApiResponse<PaiementPacking>> {
    return this.http.get<ApiResponse<PaiementPacking>>(`${this.apiUrl}/${id}`);
  }

  /**
   * Prévisualisation avant paiement
   */
  getPreview(prestataireId: number, periodeDebut: string, periodeFin: string): Observable<ApiResponse<PreviewPaiementPacking>> {
    const params = new HttpParams()
      .set('prestataire_id', prestataireId.toString())
      .set('periode_debut', periodeDebut)
      .set('periode_fin', periodeFin);

    return this.http.get<ApiResponse<PreviewPaiementPacking>>(`${this.apiUrl}/preview`, { params });
  }

  /**
   * Comptabilité - récapitulatif par prestataire
   */
  getComptabilite(filters?: ComptabiliteFilters): Observable<ApiResponse<ComptabiliteSummary>> {
    let params = new HttpParams();

    if (filters) {
      if (filters.periode_debut) {
        params = params.set('periode_debut', filters.periode_debut);
      }
      if (filters.periode_fin) {
        params = params.set('periode_fin', filters.periode_fin);
      }
      if (filters.prestataire_id) {
        params = params.set('prestataire_id', filters.prestataire_id.toString());
      }
    }

    return this.http.get<ApiResponse<ComptabiliteSummary>>(`${this.apiUrl}/comptabilite`, { params });
  }

  /**
   * Créer un paiement groupé
   */
  createPaiement(data: StorePaiementPackingDto): Observable<ApiResponse<PaiementPacking>> {
    return this.http.post<ApiResponse<PaiementPacking>>(this.apiUrl, data);
  }

  /**
   * Annuler/supprimer un paiement
   */
  deletePaiement(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  // ========================= Versements =========================

  /**
   * Liste des versements d'un paiement
   */
  getVersements(paiementId: number): Observable<ApiResponse<VersementIndexResponse>> {
    return this.http.get<ApiResponse<VersementIndexResponse>>(`${this.apiUrl}/${paiementId}/versements`);
  }

  /**
   * Créer un versement
   */
  createVersement(paiementId: number, data: StoreVersementDto): Observable<ApiResponse<VersementStoreResponse>> {
    return this.http.post<ApiResponse<VersementStoreResponse>>(`${this.apiUrl}/${paiementId}/versements`, data);
  }

  /**
   * Supprimer un versement
   */
  deleteVersement(paiementId: number, versementId: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${paiementId}/versements/${versementId}`);
  }
}
