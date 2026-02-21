import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResponse } from '@/models/auth.model';
import {
  AssignUserToUsineDto,
  CreateUsineDto,
  Usine,
  UpdateUsineDto,
} from '@/models/usine.model';

/**
 * Service HTTP pour tous les endpoints /usines.
 *
 * Endpoints (source : contrat API backend) :
 *   GET    /usines
 *   POST   /usines                       (siège uniquement)
 *   PATCH  /usines/{id}                  (siège uniquement)
 *   PATCH  /usines/{id}/set-default
 *   POST   /usines/{usineId}/users       (siège uniquement)
 *   DELETE /usines/{usineId}/users/{userId} (siège uniquement)
 */
@Injectable({ providedIn: 'root' })
export class UsineService {
  private readonly http    = inject(HttpClient);
  private readonly apiBase = `${environment.apiUrl}/usines`;

  /** Récupérer toutes les usines accessibles */
  getAll(): Observable<ApiResponse<Usine[]>> {
    return this.http.get<ApiResponse<Usine[]>>(this.apiBase);
  }

  /** Créer une usine (siège uniquement) */
  create(dto: CreateUsineDto): Observable<ApiResponse<Usine>> {
    return this.http.post<ApiResponse<Usine>>(this.apiBase, dto);
  }

  /** Mettre à jour une usine (siège uniquement) */
  update(id: number, dto: UpdateUsineDto): Observable<ApiResponse<Usine>> {
    return this.http.patch<ApiResponse<Usine>>(`${this.apiBase}/${id}`, dto);
  }

  /** Définir l'usine par défaut pour l'utilisateur courant */
  setDefault(id: number): Observable<ApiResponse<void>> {
    return this.http.patch<ApiResponse<void>>(`${this.apiBase}/${id}/set-default`, {});
  }

  /** Assigner un utilisateur à une usine (siège uniquement) */
  assignUser(usineId: number, dto: AssignUserToUsineDto): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.apiBase}/${usineId}/users`, dto);
  }

  /** Retirer un utilisateur d'une usine (siège uniquement) */
  removeUser(usineId: number, userId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${this.apiBase}/${usineId}/users/${userId}`
    );
  }
}
