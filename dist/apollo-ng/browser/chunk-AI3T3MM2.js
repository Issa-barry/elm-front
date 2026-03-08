import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-OP4G3N4V.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-HXF2V74O.js";

// src/app/services/forfaits/forfait.service.ts
var ForfaitService = class _ForfaitService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/billing/forfaits`;
  getAll() {
    return this.http.get(this.apiBase).pipe(map((r) => r.data));
  }
  create(dto) {
    return this.http.post(this.apiBase, dto).pipe(map((r) => r.data));
  }
  update(id, dto) {
    return this.http.put(`${this.apiBase}/${id}`, dto).pipe(map((r) => r.data));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/${id}`);
  }
  static \u0275fac = function ForfaitService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForfaitService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ForfaitService, factory: _ForfaitService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForfaitService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ForfaitService
};
//# sourceMappingURL=chunk-AI3T3MM2.js.map
