import {
  Router
} from "./chunk-FHW6CQ6W.js";
import {
  HttpClient
} from "./chunk-R3LUQ3Y4.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  inject,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-FZZISKXM.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "http://127.0.0.1:8000/api/v1",
  // Chemin de base pour les images produits
  productImagesPath: "assets/demo/images/produits/"
};

// src/app/services/auth/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  API_URL = `${environment.apiUrl}/auth`;
  TOKEN_KEY = "access_token";
  USER_KEY = "user";
  // Signals pour gérer l'état
  currentUser = signal(this.getUserFromStorage(), ...ngDevMode ? [{ debugName: "currentUser" }] : []);
  isAuthenticated = signal(this.hasToken(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  // BehaviorSubject pour compatibilité avec les observables
  currentUserSubject = new BehaviorSubject(this.getUserFromStorage());
  currentUser$ = this.currentUserSubject.asObservable();
  constructor() {
    this.initializeAuth();
  }
  /**
   * Initialiser l'authentification au démarrage
   */
  initializeAuth() {
    const token = this.getToken();
    const user = this.getUserFromStorage();
    if (token && user) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      this.currentUserSubject.next(user);
      this.refreshCurrentUserProfile();
    } else {
      this.clearAuth();
    }
  }
  /**
   * Inscription
   */
  register(data) {
    return this.http.post(`${this.API_URL}/register`, data).pipe(tap((response) => {
      if (response.success && response.data) {
        this.handleAuthSuccess(response.data);
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Connexion
   */
  login(credentials) {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(tap((response) => {
      if (response.success && response.data) {
        this.handleAuthSuccess(response.data);
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Déconnexion
   */
  logout() {
    return this.http.post(`${this.API_URL}/logout`, {}).pipe(tap(() => {
      this.clearAuth();
      this.router.navigate(["/auth/login"]);
    }), catchError((error) => {
      this.clearAuth();
      this.router.navigate(["/auth/login"]);
      return this.handleError(error);
    }));
  }
  /**
   * Déconnexion de tous les appareils
   */
  logoutAll() {
    return this.http.post(`${this.API_URL}/logout-all`, {}).pipe(tap(() => {
      this.clearAuth();
      this.router.navigate(["/auth/login"]);
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Obtenir le profil de l'utilisateur connecté
   */
  me() {
    return this.http.get(`${this.API_URL}/me`).pipe(tap((response) => {
      if (response.success && response.data) {
        const user = this.extractUserFromPayload(response.data);
        if (user) {
          this.setUser(user);
        }
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Mettre à jour le profil
   */
  updateProfile(data) {
    return this.http.put(`${this.API_URL}/profile`, data).pipe(tap((response) => {
      if (response.success && response.data) {
        this.setUser(response.data);
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Changer le mot de passe
   */
  changePassword(data) {
    return this.http.post(`${this.API_URL}/change-password`, data).pipe(catchError((error) => this.handleError(error)));
  }
  /**
   * Rafraîchir le token
   */
  refreshToken() {
    return this.http.post(`${this.API_URL}/refresh-token`, {}).pipe(tap((response) => {
      if (response.success && response.data) {
        this.setToken(response.data.access_token);
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Vérifier la validité du token
   */
  checkToken() {
    return this.http.get(`${this.API_URL}/check-token`).pipe(tap((response) => {
      if (response.success && response.data?.user) {
        this.setUser(response.data.user);
      }
    }), catchError((error) => this.handleError(error)));
  }
  /**
   * Gérer le succès de l'authentification
   */
  handleAuthSuccess(data) {
    this.setToken(data.access_token);
    const user = this.extractUserFromPayload(data) ?? data.user;
    this.setUser(user);
    this.refreshCurrentUserProfile();
  }
  /**
   * Sauvegarder le token
   */
  setToken(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  /**
   * Récupérer le token
   */
  getToken() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  /**
   * Vérifier si un token existe
   */
  hasToken() {
    return !!this.getToken();
  }
  /**
   * Sauvegarder l'utilisateur
   */
  setUser(user) {
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUser.set(user);
    this.isAuthenticated.set(true);
    this.currentUserSubject.next(user);
  }
  /**
   * Récupérer l'utilisateur depuis le storage
   */
  getUserFromStorage() {
    const userJson = sessionStorage.getItem(this.USER_KEY);
    if (!userJson) {
      return null;
    }
    try {
      const parsed = JSON.parse(userJson);
      return this.extractUserFromPayload(parsed);
    } catch {
      return null;
    }
  }
  refreshCurrentUserProfile() {
    this.me().subscribe({
      next: () => {
      },
      error: () => {
      }
    });
  }
  extractUserFromPayload(payload) {
    const source = payload?.user ?? payload;
    if (!source || typeof source !== "object") {
      return null;
    }
    const user = __spreadValues({}, source);
    const permissions = this.mergeUniqueStrings(this.normalizePermissions(source?.permissions), this.normalizePermissions(payload?.permissions));
    if (permissions.length > 0) {
      user.permissions = permissions;
    }
    const roles = this.mergeUniqueStrings(this.normalizeStringList(source?.roles), this.normalizeStringList(payload?.roles));
    if (roles.length > 0) {
      user.roles = roles;
    }
    return user;
  }
  normalizeStringList(value) {
    if (!Array.isArray(value)) {
      return [];
    }
    return value.map((item) => {
      if (typeof item === "string") {
        return item.trim();
      }
      if (item && typeof item === "object" && typeof item.name === "string") {
        return item.name.trim();
      }
      return "";
    }).filter((item) => item.length > 0);
  }
  normalizePermissions(value) {
    if (!value) {
      return [];
    }
    if (Array.isArray(value)) {
      return value.map((item) => {
        if (typeof item === "string") {
          return item.trim();
        }
        if (item && typeof item === "object" && typeof item.name === "string") {
          return item.name.trim();
        }
        return "";
      }).filter((item) => item.length > 0);
    }
    if (typeof value === "object") {
      return Object.entries(value).flatMap(([module, actions]) => {
        if (Array.isArray(actions)) {
          return actions.filter((action) => typeof action === "string" && action.trim().length > 0).map((action) => `${module}.${action.trim()}`);
        }
        if (actions && typeof actions === "object") {
          return Object.entries(actions).filter(([, enabled]) => !!enabled).map(([action]) => `${module}.${action}`);
        }
        if (typeof actions === "string" && actions.trim().length > 0) {
          return [`${module}.${actions.trim()}`];
        }
        return [];
      });
    }
    return [];
  }
  mergeUniqueStrings(...arrays) {
    const set = /* @__PURE__ */ new Set();
    arrays.flat().forEach((item) => {
      const value = item.trim();
      if (value.length > 0) {
        set.add(value);
      }
    });
    return Array.from(set);
  }
  /**
   * Nettoyer toutes les données d'authentification
   */
  clearAuth() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.currentUserSubject.next(null);
  }
  /**
   * Gérer les erreurs HTTP
   */
  handleError(error) {
    console.error("Erreur API:", error);
    if (error.status === 401) {
      this.clearAuth();
      this.router.navigate(["/auth/login"]);
    }
    return throwError(() => error);
  }
  /**
  * Vérifier si l'utilisateur est connecté
  */
  isLoggedIn() {
    return this.hasToken() && this.currentUser() !== null;
  }
  /**
   * Vérifier si l'utilisateur possède une permission
   */
  hasPermission(permission) {
    const user = this.currentUser();
    if (!user)
      return false;
    const permissions = user.permissions ?? [];
    if (permissions.length === 0)
      return true;
    return permissions.includes(permission);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  environment,
  AuthService
};
//# sourceMappingURL=chunk-66GARPBB.js.map
