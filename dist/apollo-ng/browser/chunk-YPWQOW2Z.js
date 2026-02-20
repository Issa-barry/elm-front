import {
  Router
} from "./chunk-A2YYJMVO.js";
import {
  HttpClient
} from "./chunk-PPMOL7YY.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-UJSDGQXU.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/services/usine/usine-context.service.ts
var STORAGE_KEY = "usine_context";
var UsineContextService = class _UsineContextService {
  // ── État interne ──────────────────────────────────────
  _currentUsineId = signal(null, ...ngDevMode ? [{ debugName: "_currentUsineId" }] : []);
  _defaultUsineId = signal(null, ...ngDevMode ? [{ debugName: "_defaultUsineId" }] : []);
  _isSiegeUser = signal(false, ...ngDevMode ? [{ debugName: "_isSiegeUser" }] : []);
  _accessibleUsines = signal([], ...ngDevMode ? [{ debugName: "_accessibleUsines" }] : []);
  _isConsolidated = signal(false, ...ngDevMode ? [{ debugName: "_isConsolidated" }] : []);
  // ── Signaux publics (lecture seule) ──────────────────
  currentUsineId = this._currentUsineId.asReadonly();
  defaultUsineId = this._defaultUsineId.asReadonly();
  isSiegeUser = this._isSiegeUser.asReadonly();
  accessibleUsines = this._accessibleUsines.asReadonly();
  isConsolidated = this._isConsolidated.asReadonly();
  /** Objet AccessibleUsine correspondant à l'usine courante */
  currentUsine = computed(() => {
    const id = this._currentUsineId();
    if (id === null)
      return null;
    return this._accessibleUsines().find((u) => u.id === id) ?? null;
  }, ...ngDevMode ? [{ debugName: "currentUsine" }] : []);
  /**
   * Valeur à envoyer dans le header X-Usine-Id.
   * null = ne pas envoyer le header (vue consolidée siège).
   */
  headerUsineId = computed(() => {
    if (this._isConsolidated())
      return null;
    return this._currentUsineId();
  }, ...ngDevMode ? [{ debugName: "headerUsineId" }] : []);
  constructor() {
    this.restoreFromStorage();
  }
  // ── Actions publiques ─────────────────────────────────
  /**
   * Hydrate le store depuis la réponse /auth/me.
   * Appelé après chaque login ET après rafraîchissement du profil.
   */
  hydrateFromMe(me) {
    this._isSiegeUser.set(me.is_siege_user);
    this._accessibleUsines.set(me.accessible_usines ?? []);
    this._defaultUsineId.set(me.default_usine_id);
    const currentId = me.current_usine_id ?? me.default_usine_id;
    this._currentUsineId.set(currentId);
    const goConsolidated = me.is_siege_user && currentId === null;
    this._isConsolidated.set(goConsolidated);
    this.persist();
  }
  /**
   * Changer d'usine active.
   */
  switchUsine(usineId) {
    this._currentUsineId.set(usineId);
    this._isConsolidated.set(false);
    this.persist();
  }
  /**
   * Activer la vue consolidée (siège uniquement).
   * Ignoré silencieusement pour les non-siège (sécurité).
   */
  enableConsolidatedView() {
    if (!this._isSiegeUser())
      return;
    this._currentUsineId.set(null);
    this._isConsolidated.set(true);
    this.persist();
  }
  /**
   * Revenir à l'usine par défaut (fallback après erreur 403/404).
   */
  fallbackToDefault() {
    const defaultId = this._defaultUsineId();
    if (defaultId !== null) {
      this.switchUsine(defaultId);
      return;
    }
    if (this._isSiegeUser()) {
      this.enableConsolidatedView();
      return;
    }
    const first = this._accessibleUsines()[0];
    if (first) {
      this.switchUsine(first.id);
    }
  }
  /**
   * Réinitialiser complètement (déconnexion).
   */
  clear() {
    this._currentUsineId.set(null);
    this._defaultUsineId.set(null);
    this._isSiegeUser.set(false);
    this._accessibleUsines.set([]);
    this._isConsolidated.set(false);
    sessionStorage.removeItem(STORAGE_KEY);
  }
  // ── Persistance ───────────────────────────────────────
  persist() {
    const ctx = {
      currentUsineId: this._currentUsineId(),
      defaultUsineId: this._defaultUsineId(),
      isSiegeUser: this._isSiegeUser(),
      accessibleUsines: this._accessibleUsines(),
      isConsolidated: this._isConsolidated()
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ctx));
  }
  restoreFromStorage() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw)
        return;
      const ctx = JSON.parse(raw);
      this._currentUsineId.set(ctx.currentUsineId ?? null);
      this._defaultUsineId.set(ctx.defaultUsineId ?? null);
      this._isSiegeUser.set(ctx.isSiegeUser ?? false);
      this._accessibleUsines.set(ctx.accessibleUsines ?? []);
      this._isConsolidated.set(ctx.isConsolidated ?? false);
    } catch {
    }
  }
  static \u0275fac = function UsineContextService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsineContextService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsineContextService, factory: _UsineContextService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsineContextService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

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
  usineContext = inject(UsineContextService);
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
   * Obtenir le profil de l'utilisateur connecté.
   * La réponse /auth/me retourne un MeResponse enrichi (usines, rôles, permissions).
   * On hydrate le store usine après chaque appel réussi.
   */
  me() {
    return this.http.get(`${this.API_URL}/me`).pipe(tap((response) => {
      if (response.success && response.data) {
        const user = this.extractUserFromPayload(response.data);
        if (user) {
          this.setUser(user);
        }
        this.usineContext.hydrateFromMe(response.data);
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
   * Nettoyer toutes les données d'authentification (y compris contexte usine)
   */
  clearAuth() {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.currentUserSubject.next(null);
    this.usineContext.clear();
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
  UsineContextService,
  environment,
  AuthService
};
//# sourceMappingURL=chunk-YPWQOW2Z.js.map
