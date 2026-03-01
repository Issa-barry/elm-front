import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-7U237DEN.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-SKXAAURP.js";

// src/app/services/vehicules/vehicule.service.ts
var VehiculeService = class _VehiculeService {
  http;
  baseUrl = `${environment.apiUrl}/vehicules`;
  constructor(http) {
    this.http = http;
  }
  getAll(filters) {
    let params = new HttpParams();
    if (filters?.search)
      params = params.set("search", filters.search);
    if (filters?.per_page)
      params = params.set("per_page", String(filters.per_page));
    if (filters?.statut)
      params = params.set("statut", filters.statut);
    if (params.keys().length > 0) {
      return this.http.get(this.baseUrl, { params });
    }
    return this.http.get(this.baseUrl);
  }
  getOne(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(formData) {
    return this.http.post(this.baseUrl, formData);
  }
  update(id, formData) {
    return this.http.post(`${this.baseUrl}/${id}`, formData);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
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
//# sourceMappingURL=chunk-ODW2XKIT.js.map
