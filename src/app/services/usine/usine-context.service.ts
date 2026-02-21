import { Injectable, computed, signal } from '@angular/core';
import { AccessibleUsine, MeResponse } from '@/models/usine.model';

const STORAGE_KEY = 'usine_context';

interface PersistedUsineContext {
  currentUsineId:   number | null;
  defaultUsineId:   number | null;
  isSiegeUser:      boolean;
  accessibleUsines: AccessibleUsine[];
  isConsolidated:   boolean;
}

/**
 * Store signals pour le contexte multi-usine.
 * Persiste dans sessionStorage (même durée de vie que le token auth).
 */
@Injectable({ providedIn: 'root' })
export class UsineContextService {
  // ── État interne ──────────────────────────────────────
  private readonly _currentUsineId   = signal<number | null>(null);
  private readonly _defaultUsineId   = signal<number | null>(null);
  private readonly _isSiegeUser      = signal<boolean>(false);
  private readonly _accessibleUsines = signal<AccessibleUsine[]>([]);
  private readonly _isConsolidated   = signal<boolean>(false);

  // ── Signaux publics (lecture seule) ──────────────────
  readonly currentUsineId   = this._currentUsineId.asReadonly();
  readonly defaultUsineId   = this._defaultUsineId.asReadonly();
  readonly isSiegeUser      = this._isSiegeUser.asReadonly();
  readonly accessibleUsines = this._accessibleUsines.asReadonly();
  readonly isConsolidated   = this._isConsolidated.asReadonly();

  /** Objet AccessibleUsine correspondant à l'usine courante */
  readonly currentUsine = computed<AccessibleUsine | null>(() => {
    const id = this._currentUsineId();
    if (id === null) return null;
    return this._accessibleUsines().find(u => u.id === id) ?? null;
  });

  /**
   * Valeur à envoyer dans le header X-Usine-Id.
   * null = ne pas envoyer le header (vue consolidée siège).
   */
  readonly headerUsineId = computed<number | null>(() => {
    if (this._isConsolidated()) return null;
    return this._currentUsineId();
  });

  constructor() {
    this.restoreFromStorage();
  }

  // ── Actions publiques ─────────────────────────────────

  /**
   * Hydrate le store depuis la réponse /auth/me.
   * Appelé après chaque login ET après rafraîchissement du profil.
   */
  hydrateFromMe(me: MeResponse): void {
    this._isSiegeUser.set(me.is_siege_user);
    this._accessibleUsines.set(me.accessible_usines ?? []);
    this._defaultUsineId.set(me.default_usine_id);

    const currentId = me.current_usine_id ?? me.default_usine_id;
    this._currentUsineId.set(currentId);

    // Siège sans usine courante → vue consolidée par défaut
    const goConsolidated = me.is_siege_user && currentId === null;
    this._isConsolidated.set(goConsolidated);

    this.persist();
  }

  /**
   * Changer d'usine active.
   */
  switchUsine(usineId: number): void {
    this._currentUsineId.set(usineId);
    this._isConsolidated.set(false);
    this.persist();
  }

  /**
   * Activer la vue consolidée (siège uniquement).
   * Ignoré silencieusement pour les non-siège (sécurité).
   */
  enableConsolidatedView(): void {
    if (!this._isSiegeUser()) return;
    this._currentUsineId.set(null);
    this._isConsolidated.set(true);
    this.persist();
  }

  /**
   * Revenir à l'usine par défaut (fallback après erreur 403/404).
   */
  fallbackToDefault(): void {
    const defaultId = this._defaultUsineId();

    if (defaultId !== null) {
      this.switchUsine(defaultId);
      return;
    }

    if (this._isSiegeUser()) {
      this.enableConsolidatedView();
      return;
    }

    // Cas extrême : pas de défaut, prendre la première accessible
    const first = this._accessibleUsines()[0];
    if (first) {
      this.switchUsine(first.id);
    }
  }

  /**
   * Réinitialiser complètement (déconnexion).
   */
  clear(): void {
    this._currentUsineId.set(null);
    this._defaultUsineId.set(null);
    this._isSiegeUser.set(false);
    this._accessibleUsines.set([]);
    this._isConsolidated.set(false);
    sessionStorage.removeItem(STORAGE_KEY);
  }

  // ── Persistance ───────────────────────────────────────

  private persist(): void {
    const ctx: PersistedUsineContext = {
      currentUsineId:   this._currentUsineId(),
      defaultUsineId:   this._defaultUsineId(),
      isSiegeUser:      this._isSiegeUser(),
      accessibleUsines: this._accessibleUsines(),
      isConsolidated:   this._isConsolidated(),
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ctx));
  }

  private restoreFromStorage(): void {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const ctx: PersistedUsineContext = JSON.parse(raw);
      this._currentUsineId.set(ctx.currentUsineId ?? null);
      this._defaultUsineId.set(ctx.defaultUsineId ?? null);
      this._isSiegeUser.set(ctx.isSiegeUser ?? false);
      this._accessibleUsines.set(ctx.accessibleUsines ?? []);
      this._isConsolidated.set(ctx.isConsolidated ?? false);
    } catch {
      // Ignore les erreurs de parsing silencieusement
    }
  }
}
