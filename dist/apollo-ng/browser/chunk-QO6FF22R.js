import {
  UsineContextService
} from "./chunk-GEBWCDCC.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-NGYBJXCA.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-DSAAE4AM.js";

// src/app/services/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  usineContext = inject(UsineContextService);
  baseUrl = `${environment.apiUrl}/dashboard`;
  getStats(period = "this_month", days) {
    let params = new HttpParams().set("period", period);
    if (period === "last_x_days" && days != null) {
      params = params.set("days", days.toString());
    }
    return this.http.get(`${this.baseUrl}/stats`, { params }).pipe(map((res) => res.data));
  }
  getVentesParTypeVehicule(period = "this_month") {
    const params = new HttpParams().set("period", period);
    const headers = this.getSiteHeaders();
    return this.http.get(`${this.baseUrl}/ventes/par-type-vehicule`, { params, headers }).pipe(map((res) => res.data));
  }
  getVentesEncaissements(period = "this_month") {
    const params = new HttpParams().set("period", period);
    const headers = this.getSiteHeaders();
    return this.http.get(`${this.baseUrl}/ventes/encaissements`, { params, headers }).pipe(map((res) => res.data));
  }
  getVentesEvolutionParType(period = "this_year") {
    const params = new HttpParams().set("period", period);
    const headers = this.getSiteHeaders();
    return this.http.get(`${this.baseUrl}/ventes/evolution-par-type`, { params, headers }).pipe(map((res) => res.data));
  }
  getVentesEvolutionParStatut(period = "this_year", days) {
    let params = new HttpParams().set("period", period);
    if (period === "last_x_days" && days) {
      params = params.set("days", String(days));
    }
    const headers = this.getSiteHeaders();
    return this.http.get(`${this.baseUrl}/ventes/evolution-par-statut`, { params, headers }).pipe(map((res) => res.data));
  }
  getSiteHeaders() {
    const siteHeaderValue = this.usineContext.headerUsineId();
    return siteHeaderValue !== null ? new HttpHeaders({ "X-Site-Id": String(siteHeaderValue) }) : void 0;
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DashboardService
};
//# sourceMappingURL=chunk-QO6FF22R.js.map
