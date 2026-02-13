import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '@/models/user.model';
import { ApiResponse, AuthResponse, ChangePasswordRequest, LoginRequest, RegisterRequest, UpdateProfileRequest } from '@/models/auth.model';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private readonly API_URL = `${environment.apiUrl}/auth`;
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'user';

  // Signals pour gérer l'état
  currentUser = signal<User | null>(this.getUserFromStorage());
  isAuthenticated = signal<boolean>(this.hasToken());

  // BehaviorSubject pour compatibilité avec les observables
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Initialiser l'état au démarrage
    this.initializeAuth();
  } 

  /**
   * Initialiser l'authentification au démarrage
   */
  private initializeAuth(): void {
    const token = this.getToken();
    const user = this.getUserFromStorage();

    if (token && user) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      this.currentUserSubject.next(user);
    } else {
      this.clearAuth();
    }
  }

  /**
   * Inscription
   */
  register(data: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/register`, data).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.handleAuthSuccess(response.data);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Connexion
   */
  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.handleAuthSuccess(response.data);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Déconnexion
   */ 
  logout(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/logout`, {}).pipe(
      tap(() => {
        this.clearAuth();
        this.router.navigate(['/auth/login']);
      }),
      catchError(error => {
        // Même en cas d'erreur, on déconnecte l'utilisateur localement
        this.clearAuth();
        this.router.navigate(['/auth/login']);
        return this.handleError(error);
      })
    ); 
  }

  /**
   * Déconnexion de tous les appareils
   */
  logoutAll(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/logout-all`, {}).pipe(
      tap(() => {
        this.clearAuth();
        this.router.navigate(['/auth/login']);
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Obtenir le profil de l'utilisateur connecté
   */
  me(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API_URL}/me`).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setUser(response.data);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Mettre à jour le profil
   */
  updateProfile(data: UpdateProfileRequest): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(`${this.API_URL}/profile`, data).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setUser(response.data);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Changer le mot de passe
   */
  changePassword(data: ChangePasswordRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.API_URL}/change-password`, data).pipe(
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Rafraîchir le token
   */
  refreshToken(): Observable<ApiResponse<{ access_token: string; token_type: string; expires_in: number }>> {
    return this.http.post<ApiResponse<{ access_token: string; token_type: string; expires_in: number }>>(
      `${this.API_URL}/refresh-token`,
      {}
    ).pipe(
      tap(response => {
        if (response.success && response.data) {
          this.setToken(response.data.access_token);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Vérifier la validité du token
   */
  checkToken(): Observable<ApiResponse<{ valid: boolean; user: User }>> {
    return this.http.get<ApiResponse<{ valid: boolean; user: User }>>(`${this.API_URL}/check-token`).pipe(
      tap(response => {
        if (response.success && response.data?.user) {
          this.setUser(response.data.user);
        }
      }),
      catchError(error => this.handleError(error))
    );
  }

  /**
   * Gérer le succès de l'authentification
   */
  private handleAuthSuccess(data: { user: User; access_token: string }): void {
    this.setToken(data.access_token);
    this.setUser(data.user);
  }

  /**
   * Sauvegarder le token
   */
  setToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Récupérer le token
   */
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Vérifier si un token existe
   */
  hasToken(): boolean {
    return !!this.getToken();
  }

  /**
   * Sauvegarder l'utilisateur
   */
  private setUser(user: User): void {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUser.set(user);
    this.isAuthenticated.set(true);
    this.currentUserSubject.next(user);
  }

  /**
   * Récupérer l'utilisateur depuis le storage
   */
  private getUserFromStorage(): User | null {
    const userJson = sessionStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  /**
   * Nettoyer toutes les données d'authentification
   */
  private clearAuth(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.currentUserSubject.next(null);
  }

  /**
   * Gérer les erreurs HTTP
   */
  private handleError(error: any): Observable<never> {
    console.error('Erreur API:', error);
    
    // Si erreur 401, déconnecter l'utilisateur
    if (error.status === 401) {
      this.clearAuth();
      this.router.navigate(['/auth/login']);
    }
    
    return throwError(() => error);
  }

  /**
 * Vérifier si l'utilisateur est connecté
 */
  isLoggedIn(): boolean {
    return this.hasToken() && this.currentUser() !== null;
  }
}