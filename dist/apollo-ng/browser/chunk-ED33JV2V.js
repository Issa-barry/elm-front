import {
  HttpClient
} from "./chunk-R3LUQ3Y4.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-FZZISKXM.js";

// src/app/pages/service/member.service.ts
var MemberService = class _MemberService {
  http;
  constructor(http) {
    this.http = http;
  }
  getMembers() {
    return this.http.get("/demo/data/members.json").toPromise().then((res) => res.data).then((data) => data);
  }
  static \u0275fac = function MemberService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MemberService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MemberService, factory: _MemberService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemberService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MemberService
};
//# sourceMappingURL=chunk-ED33JV2V.js.map
