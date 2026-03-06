import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-K7KGEHY2.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-ZUORBSMF.js";

// src/app/services/organisations/organisation.service.ts
var OrganisationService = class _OrganisationService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/organisations`;
  getAll() {
    return this.http.get(this.apiBase).pipe(map((response) => this.normalizeCollection(response.data)));
  }
  getById(id) {
    return this.http.get(`${this.apiBase}/${id}`).pipe(map((response) => this.normalizeItem(response.data)));
  }
  create(payload) {
    return this.http.post(this.apiBase, payload).pipe(map((response) => this.normalizeItem(response.data)));
  }
  update(id, payload) {
    return this.http.put(`${this.apiBase}/${id}`, payload).pipe(map((response) => this.normalizeItem(response.data)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/${id}`).pipe(map(() => void 0));
  }
  normalizeCollection(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }
    if (payload && typeof payload === "object") {
      const data = payload.data;
      if (Array.isArray(data)) {
        return data;
      }
    }
    return [];
  }
  normalizeItem(payload) {
    if (payload && typeof payload === "object") {
      const data = payload.data;
      if (data && typeof data === "object") {
        return data;
      }
      return payload;
    }
    throw new Error("Reponse API invalide");
  }
  static \u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OrganisationService
};
//# sourceMappingURL=chunk-XMQVZEEL.js.map
