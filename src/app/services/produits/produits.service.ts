import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  ApiResponse,
  ChangeStatusDto,
  CreateProduitDto,
  PaginatedResponse,
  Produit,
  ProduitSearchParams,
  ProduitStatistics,
  UpdateStockDto
} from '@/models/produit.model';

@Injectable({
  providedIn: 'root' 
})
export class ProduitService {
  private apiUrl = `${environment.apiUrl}/produits`;

  constructor(private http: HttpClient) {}

  /**
   * GET /produits - Liste tous les produits (non archivés)
   */
  getAll(): Observable<Produit[]> {
    return this.http.get<ApiResponse<any[]>>(this.apiUrl).pipe(
      map(response => Produit.fromApiArray(response.data))
    );
  }

  /**
   * GET /produits/archived - Liste les produits archivés
   */
  getArchived(): Observable<Produit[]> {
    return this.http.get<ApiResponse<any[]>>(`${this.apiUrl}/archived`).pipe(
      map(response => Produit.fromApiArray(response.data))
    );
  }

  /**
   * GET /produits/search - Recherche avec filtres et pagination
   */
  search(params: ProduitSearchParams): Observable<PaginatedResponse<Produit>> {
    let httpParams = new HttpParams();

    if (params.search) httpParams = httpParams.set('search', params.search);
    if (params.type) httpParams = httpParams.set('type', params.type);
    if (params.statut) httpParams = httpParams.set('statut', params.statut);
    if (params.in_stock !== undefined) httpParams = httpParams.set('in_stock', params.in_stock.toString());
    if (params.page) httpParams = httpParams.set('page', params.page.toString());
    if (params.per_page) httpParams = httpParams.set('per_page', params.per_page.toString());
    if (params.sort_by) httpParams = httpParams.set('sort_by', params.sort_by);
    if (params.sort_order) httpParams = httpParams.set('sort_order', params.sort_order);

    return this.http.get<PaginatedResponse<any>>(`${this.apiUrl}/search`, { params: httpParams }).pipe(
      map(response => ({
        ...response,
        data: Produit.fromApiArray(response.data)
      }))
    );
  }

  /**
   * GET /produits/statistics - Statistiques des produits
   */
  getStatistics(): Observable<ProduitStatistics> {
    return this.http.get<ApiResponse<ProduitStatistics>>(`${this.apiUrl}/statistics`).pipe(
      map(response => response.data)
    );
  }

  /**
   * GET /produits/{id} - Récupère un produit par son ID
   */
  getById(id: number): Observable<Produit> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/${id}`).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * POST /produits - Crée un nouveau produit
   */
  create(dto: CreateProduitDto): Observable<Produit> {
    // Si image présente, utiliser FormData, sinon JSON
    if (dto.image) {
      const formData = this.toFormData(dto);
      return this.http.post<ApiResponse<any>>(this.apiUrl, formData).pipe(
        map(response => Produit.fromApi(response.data))
      );
    }

    const { image, ...jsonDto } = dto;
    return this.http.post<ApiResponse<any>>(this.apiUrl, jsonDto).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * PUT /produits/{id} - Met à jour un produit
   */
  update(id: number, dto: CreateProduitDto): Observable<Produit> {
    // Si image présente, utiliser FormData avec _method spoofing
    if (dto.image) {
      const formData = this.toFormData(dto);
      formData.append('_method', 'PUT');
      return this.http.post<ApiResponse<any>>(`${this.apiUrl}/${id}`, formData).pipe(
        map(response => Produit.fromApi(response.data))
      );
    }

    const { image, ...jsonDto } = dto;
    return this.http.put<ApiResponse<any>>(`${this.apiUrl}/${id}`, jsonDto).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * DELETE /produits/{id} - Supprime un produit (soft delete)
   */
  delete(id: number): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  /**
   * PATCH /produits/{id}/stock - Met à jour le stock d'un produit
   */
  updateStock(id: number, dto: UpdateStockDto): Observable<Produit> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/${id}/stock`, dto).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * PATCH /produits/{id}/status - Change le statut d'un produit
   */
  changeStatus(id: number, dto: ChangeStatusDto): Observable<Produit> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/${id}/status`, dto).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * PATCH /produits/{id}/archive - Archive un produit
   */
  archive(id: number): Observable<Produit> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/${id}/archive`, {}).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * PATCH /produits/{id}/unarchive - Désarchive un produit
   */
  unarchive(id: number): Observable<Produit> {
    return this.http.patch<ApiResponse<any>>(`${this.apiUrl}/${id}/unarchive`, {}).pipe(
      map(response => Produit.fromApi(response.data))
    );
  }

  /**
   * Conversion en FormData pour l'upload de fichiers
   */
  private toFormData(dto: CreateProduitDto): FormData {
    const formData = new FormData();

    // Ajouter les champs dans l'ordre correct pour Laravel
    if (dto.nom) formData.append('nom', dto.nom);
    if (dto.type) formData.append('type', dto.type);

    // qte_stock peut être 0, donc on vérifie !== undefined
    if (dto.qte_stock !== undefined && dto.qte_stock !== null) {
      formData.append('qte_stock', dto.qte_stock.toString());
    }

    // Prix (peuvent être undefined)
    if (dto.prix_usine !== undefined && dto.prix_usine !== null) {
      formData.append('prix_usine', dto.prix_usine.toString());
    }
    if (dto.prix_vente !== undefined && dto.prix_vente !== null) {
      formData.append('prix_vente', dto.prix_vente.toString());
    }
    if (dto.prix_achat !== undefined && dto.prix_achat !== null) {
      formData.append('prix_achat', dto.prix_achat.toString());
    }

    // Champs optionnels
    if (dto.statut) formData.append('statut', dto.statut);
    if (dto.description) formData.append('description', dto.description);
    if (dto.cout !== undefined && dto.cout !== null) {
      formData.append('cout', dto.cout.toString());
    }

    // Image en dernier
    if (dto.image instanceof File) {
      formData.append('image', dto.image, dto.image.name);
    }

    // Debug: afficher le contenu du FormData
    console.log('FormData content:');
    formData.forEach((value, key) => {
      console.log(`  ${key}:`, value);
    });

    return formData;
  }
}
