import {
  environment
} from "./chunk-66GARPBB.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-R3LUQ3Y4.js";
import {
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FZZISKXM.js";

// src/app/services/parametres/parametres.service.ts
var ParametresService = class _ParametresService {
  http;
  apiUrl = `${environment.apiUrl}/parametres`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Récupérer tous les paramètres (avec filtre optionnel par groupe)
   */
  getParametres(groupe) {
    let params = new HttpParams();
    if (groupe) {
      params = params.set("groupe", groupe);
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Mettre à jour un paramètre
   */
  updateParametre(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /**
   * Récupérer les périodes disponibles pour un mois/année
   */
  getPrixRouleauDefaut() {
    return this.getParametres("packing").pipe(map((response) => {
      const parametre = response.data.parametres.find((p) => p.cle === "prix_rouleau_defaut");
      if (!parametre)
        return 0;
      const valeur = Number(parametre.valeur);
      return Number.isFinite(valeur) ? valeur : 0;
    }));
  }
  static \u0275fac = function ParametresService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParametresService, factory: _ParametresService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ParametresService
};
//# sourceMappingURL=chunk-NQ4DNQ2K.js.map
