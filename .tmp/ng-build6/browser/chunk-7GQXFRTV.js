import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-ZUORBSMF.js";

// src/app/services/usine/usine-context.service.ts
var STORAGE_KEY = "site_context";
var LEGACY_STORAGE_KEY = "usine_context";
var UsineContextService = class _UsineContextService {
  _currentUsineId = signal(null, ...ngDevMode ? [{ debugName: "_currentUsineId" }] : []);
  _defaultUsineId = signal(null, ...ngDevMode ? [{ debugName: "_defaultUsineId" }] : []);
  _isSiegeUser = signal(false, ...ngDevMode ? [{ debugName: "_isSiegeUser" }] : []);
  _accessibleUsines = signal([], ...ngDevMode ? [{ debugName: "_accessibleUsines" }] : []);
  _isConsolidated = signal(false, ...ngDevMode ? [{ debugName: "_isConsolidated" }] : []);
  currentUsineId = this._currentUsineId.asReadonly();
  defaultUsineId = this._defaultUsineId.asReadonly();
  isSiegeUser = this._isSiegeUser.asReadonly();
  accessibleUsines = this._accessibleUsines.asReadonly();
  isConsolidated = this._isConsolidated.asReadonly();
  currentUsine = computed(() => {
    const id = this._currentUsineId();
    if (id === null)
      return null;
    return this._accessibleUsines().find((site) => site.id === id) ?? null;
  }, ...ngDevMode ? [{ debugName: "currentUsine" }] : []);
  /**
   * Header value to send on API requests.
   * - number: one selected site
   * - 'all': consolidated HQ view
   * - null: not ready yet (before /auth/me hydration)
   */
  headerUsineId = computed(() => {
    if (this._isConsolidated()) {
      return this._isSiegeUser() ? "all" : null;
    }
    return this._currentUsineId();
  }, ...ngDevMode ? [{ debugName: "headerUsineId" }] : []);
  constructor() {
    this.restoreFromStorage();
  }
  hydrateFromMe(me) {
    const accessibleSites = me.accessible_sites ?? me.accessible_usines ?? [];
    const defaultSiteId = me.default_site_id ?? me.default_usine_id ?? null;
    const currentSiteId = me.current_site_id ?? me.current_usine_id ?? defaultSiteId;
    this._isSiegeUser.set(!!me.is_siege_user);
    this._accessibleUsines.set(accessibleSites);
    this._defaultUsineId.set(defaultSiteId);
    const knownSiteIds = new Set(accessibleSites.map((site) => site.id));
    const resolvedCurrent = currentSiteId !== null && knownSiteIds.has(currentSiteId) ? currentSiteId : defaultSiteId !== null && knownSiteIds.has(defaultSiteId) ? defaultSiteId : accessibleSites[0]?.id ?? null;
    this._currentUsineId.set(resolvedCurrent);
    this._isConsolidated.set(!!me.is_siege_user && resolvedCurrent === null);
    this.persist();
  }
  switchUsine(usineId) {
    const siteExists = this._accessibleUsines().some((site) => site.id === usineId);
    if (!siteExists)
      return;
    this._currentUsineId.set(usineId);
    this._isConsolidated.set(false);
    this.persist();
  }
  enableConsolidatedView() {
    if (!this._isSiegeUser())
      return;
    this._currentUsineId.set(null);
    this._isConsolidated.set(true);
    this.persist();
  }
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
  clear() {
    this._currentUsineId.set(null);
    this._defaultUsineId.set(null);
    this._isSiegeUser.set(false);
    this._accessibleUsines.set([]);
    this._isConsolidated.set(false);
    sessionStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(LEGACY_STORAGE_KEY);
  }
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
      const raw = sessionStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(LEGACY_STORAGE_KEY);
      if (!raw)
        return;
      const ctx = JSON.parse(raw);
      this._currentUsineId.set(ctx.currentUsineId ?? null);
      this._defaultUsineId.set(ctx.defaultUsineId ?? null);
      this._isSiegeUser.set(ctx.isSiegeUser ?? false);
      this._accessibleUsines.set(Array.isArray(ctx.accessibleUsines) ? ctx.accessibleUsines : []);
      this._isConsolidated.set(!!ctx.isConsolidated && !!ctx.isSiegeUser);
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(LEGACY_STORAGE_KEY);
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

export {
  UsineContextService
};
//# sourceMappingURL=chunk-7GQXFRTV.js.map
