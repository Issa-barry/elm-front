import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-OP4G3N4V.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-HXF2V74O.js";

// src/app/services/packing/packing.service.ts
var PackingService = class _PackingService {
  http;
  apiUrl = `${environment.apiUrl}/packings`;
  constructor(http) {
    this.http = http;
  }
  getPackings(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.prestataire_id)
        params = params.set("prestataire_id", filters.prestataire_id.toString());
      if (filters.statut)
        params = params.set("statut", filters.statut);
      if (filters.date_debut)
        params = params.set("date_debut", filters.date_debut);
      if (filters.date_fin)
        params = params.set("date_fin", filters.date_fin);
      if (filters.non_payes)
        params = params.set("non_payes", filters.non_payes.toString());
      if (filters.search)
        params = params.set("search", filters.search);
      if (filters.sort_by)
        params = params.set("sort_by", filters.sort_by);
      if (filters.sort_order)
        params = params.set("sort_order", filters.sort_order);
      if (filters.per_page)
        params = params.set("per_page", filters.per_page.toString());
      if (filters.page)
        params = params.set("page", filters.page.toString());
    }
    return this.http.get(this.apiUrl, { params });
  }
  getPacking(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createPacking(data) {
    return this.http.post(this.apiUrl, data);
  }
  updatePacking(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  changeStatut(id, data) {
    return this.http.patch(`${this.apiUrl}/${id}/statut`, data);
  }
  deletePacking(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // ========================= Versements =========================
  getVersements(packingId) {
    return this.http.get(`${this.apiUrl}/${packingId}/versements`);
  }
  createVersement(packingId, data) {
    return this.http.post(`${this.apiUrl}/${packingId}/versements`, data);
  }
  deleteVersement(packingId, versementId) {
    return this.http.delete(`${this.apiUrl}/${packingId}/versements/${versementId}`);
  }
  getStats(period = "this_week") {
    return this.http.get(`${this.apiUrl}/stats`, {
      params: { period }
    });
  }
  static \u0275fac = function PackingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PackingService, factory: _PackingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PackingService
};
//# sourceMappingURL=chunk-37SREINF.js.map
