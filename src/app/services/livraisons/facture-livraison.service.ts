import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  FactureLivraison,
  StoreFactureLivraisonDto,
  EncaissementLivraison,
  StoreEncaissementLivraisonDto,
  CommissionCalcul,
  PaiementCommissionDto,
  StoreDeductionDto,
} from '@/models/livraison.model';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class FactureLivraisonService {
  private readonly facturesUrl = `${environment.apiUrl}/livraisons/factures`;
  private readonly encaissementsUrl = `${environment.apiUrl}/encaissements-livraisons`;

  constructor(private http: HttpClient) {}

  // ── Factures simplifiées ──────────────────────────────────────────────
  getFactures(): Observable<ApiResponse<FactureLivraison[]>> {
    return this.http.get<ApiResponse<FactureLivraison[]>>(this.facturesUrl);
  }

  getFacture(id: number): Observable<ApiResponse<FactureLivraison>> {
    return this.http.get<ApiResponse<FactureLivraison>>(`${this.facturesUrl}/${id}`);
  }

  createFacture(data: StoreFactureLivraisonDto): Observable<ApiResponse<FactureLivraison>> {
    return this.http.post<ApiResponse<FactureLivraison>>(this.facturesUrl, data);
  }

  // ── Commissions ───────────────────────────────────────────────────────
  getCommissionCalcul(factureId: number): Observable<ApiResponse<CommissionCalcul>> {
    return this.http.get<ApiResponse<CommissionCalcul>>(
      `${this.facturesUrl}/${factureId}/commissions/calcul`
    );
  }

  payerCommission(factureId: number, data: PaiementCommissionDto): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(
      `${this.facturesUrl}/${factureId}/commissions/paiement`,
      data
    );
  }

  // ── Déductions ────────────────────────────────────────────────────────
  addDeduction(factureId: number, data: StoreDeductionDto): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(
      `${this.facturesUrl}/${factureId}/deductions`,
      data
    );
  }

  // ── Encaissements (workflow classique) ────────────────────────────────
  getEncaissements(search?: string): Observable<ApiResponse<EncaissementLivraison[]>> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    return this.http.get<ApiResponse<EncaissementLivraison[]>>(this.encaissementsUrl, { params });
  }

  createEncaissement(
    data: StoreEncaissementLivraisonDto
  ): Observable<ApiResponse<EncaissementLivraison>> {
    return this.http.post<ApiResponse<EncaissementLivraison>>(this.encaissementsUrl, data);
  }
}
