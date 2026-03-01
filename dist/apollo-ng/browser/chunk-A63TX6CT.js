import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-7U237DEN.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SKXAAURP.js";

// src/app/services/usine/usine.service.ts
var UsineService = class _UsineService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/usines`;
  /** Récupérer toutes les usines accessibles */
  getAll() {
    return this.http.get(this.apiBase);
  }
  /** Créer une usine (siège uniquement) */
  create(dto) {
    return this.http.post(this.apiBase, dto);
  }
  /** Mettre à jour une usine (siège uniquement) */
  update(id, dto) {
    return this.http.patch(`${this.apiBase}/${id}`, dto);
  }
  /** Définir l'usine par défaut pour l'utilisateur courant */
  setDefault(id) {
    return this.http.patch(`${this.apiBase}/${id}/set-default`, {});
  }
  /** Assigner un utilisateur à une usine (siège uniquement) */
  assignUser(usineId, dto) {
    return this.http.post(`${this.apiBase}/${usineId}/users`, dto);
  }
  /** Retirer un utilisateur d'une usine (siège uniquement) */
  removeUser(usineId, userId) {
    return this.http.delete(`${this.apiBase}/${usineId}/users/${userId}`);
  }
  static \u0275fac = function UsineService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsineService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsineService, factory: _UsineService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsineService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UsineService
};
//# sourceMappingURL=chunk-A63TX6CT.js.map
