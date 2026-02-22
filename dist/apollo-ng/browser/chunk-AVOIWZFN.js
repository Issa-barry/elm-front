import {
  environment
} from "./chunk-S4S52KAB.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-F6SKB3CY.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GLCXFY3U.js";

// src/app/services/vehicules/vehicule.service.ts
var VehiculeService = class _VehiculeService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getVehicules(filters) {
    let params = new HttpParams();
    if (filters?.search)
      params = params.set("search", filters.search);
    if (filters?.per_page)
      params = params.set("per_page", String(filters.per_page));
    return this.http.get(`${this.baseUrl}/vehicules`, { params });
  }
  getVehicule(id) {
    return this.http.get(`${this.baseUrl}/vehicules/${id}`);
  }
  /** Création one-shot : véhicule + propriétaire + livreur + commission en une seule requête */
  createOneShot(formData) {
    return this.http.post(`${this.baseUrl}/livraisons/one-shot`, formData);
  }
  static \u0275fac = function VehiculeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VehiculeService, factory: _VehiculeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  VehiculeService
};
//# sourceMappingURL=chunk-AVOIWZFN.js.map
