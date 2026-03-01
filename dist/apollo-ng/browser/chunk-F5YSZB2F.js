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

// src/app/services/livraisons/facture-livraison.service.ts
var FactureLivraisonService = class _FactureLivraisonService {
  http;
  facturesUrl = `${environment.apiUrl}/ventes/factures`;
  encaissementsUrl = `${environment.apiUrl}/ventes/encaissements`;
  constructor(http) {
    this.http = http;
  }
  // ── Factures ──────────────────────────────────────────────────────────
  getFactures(params) {
    let httpParams = new HttpParams();
    if (params?.statut)
      httpParams = httpParams.set("statut", params.statut);
    if (params?.vehicule_id)
      httpParams = httpParams.set("vehicule_id", String(params.vehicule_id));
    return this.http.get(this.facturesUrl, {
      params: httpParams
    });
  }
  getFacture(id) {
    return this.http.get(`${this.facturesUrl}/${id}`);
  }
  annulerFacture(id) {
    return this.http.post(`${this.facturesUrl}/${id}/annuler`, {});
  }
  // ── Encaissements ─────────────────────────────────────────────────────
  getEncaissements(params) {
    let httpParams = new HttpParams();
    if (params?.facture_vente_id)
      httpParams = httpParams.set("facture_vente_id", String(params.facture_vente_id));
    return this.http.get(this.encaissementsUrl, {
      params: httpParams
    });
  }
  createEncaissement(data) {
    return this.http.post(this.encaissementsUrl, data);
  }
  static \u0275fac = function FactureLivraisonService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureLivraisonService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FactureLivraisonService, factory: _FactureLivraisonService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureLivraisonService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FactureLivraisonService
};
//# sourceMappingURL=chunk-F5YSZB2F.js.map
