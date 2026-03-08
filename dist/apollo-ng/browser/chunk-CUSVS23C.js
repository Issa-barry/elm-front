import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-NGYBJXCA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-DSAAE4AM.js";

// src/app/services/usine/usine.service.ts
var UsineService = class _UsineService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/sites`;
  /** RÃ©cupÃ©rer toutes les usines accessibles */
  getAll() {
    return this.http.get(this.apiBase);
  }
  getById(id) {
    return this.http.get(`${this.apiBase}/${id}`);
  }
  /** CrÃ©er une usine (siÃ¨ge uniquement) */
  create(dto) {
    return this.http.post(this.apiBase, dto);
  }
  /** Mettre Ã  jour une usine (siÃ¨ge uniquement) */
  update(id, dto) {
    return this.http.patch(`${this.apiBase}/${id}`, dto);
  }
  /** DÃ©finir l'usine par dÃ©faut pour l'utilisateur courant */
  setDefault(id) {
    return this.http.patch(`${this.apiBase}/${id}/set-default`, {});
  }
  /** Assigner un utilisateur Ã  une usine (siÃ¨ge uniquement) */
  assignUser(usineId, dto) {
    return this.http.post(`${this.apiBase}/${usineId}/users`, dto);
  }
  /** Retirer un utilisateur d'une usine (siÃ¨ge uniquement) */
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
//# sourceMappingURL=chunk-CUSVS23C.js.map
