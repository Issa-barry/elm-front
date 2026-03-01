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

// src/app/services/ventes/commande-vente.service.ts
var CommandeVenteService = class _CommandeVenteService {
  http;
  url = `${environment.apiUrl}/ventes/commandes`;
  constructor(http) {
    this.http = http;
  }
  getCommandes(params) {
    let httpParams = new HttpParams();
    if (params?.vehicule_id)
      httpParams = httpParams.set("vehicule_id", String(params.vehicule_id));
    if (params?.page)
      httpParams = httpParams.set("page", String(params.page));
    return this.http.get(this.url, { params: httpParams });
  }
  getCommande(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  createCommande(data) {
    return this.http.post(this.url, data);
  }
  updateCommande(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  deleteCommande(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static \u0275fac = function CommandeVenteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommandeVenteService, factory: _CommandeVenteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CommandeVenteService
};
//# sourceMappingURL=chunk-SK5Q6OVQ.js.map
