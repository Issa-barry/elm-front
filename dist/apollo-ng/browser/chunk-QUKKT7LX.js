import {
  environment
} from "./chunk-YPWQOW2Z.js";
import {
  HttpClient
} from "./chunk-PPMOL7YY.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UJSDGQXU.js";

// src/app/services/role/role.service.ts
var RoleService = class _RoleService {
  http;
  apiUrl = `${environment.apiUrl}/roles`;
  permissionsUrl = `${environment.apiUrl}/permissions`;
  usersUrl = `${environment.apiUrl}/users`;
  constructor(http) {
    this.http = http;
  }
  getRoles() {
    return this.http.get(this.apiUrl);
  }
  getRole(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createRole(dto) {
    return this.http.post(this.apiUrl, dto);
  }
  updateRole(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }
  deleteRole(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updatePermissions(id, dto) {
    return this.http.put(`${this.apiUrl}/${id}/permissions`, dto);
  }
  getPermissions() {
    return this.http.get(this.permissionsUrl).pipe(catchError((error) => {
      if (error?.status === 404) {
        return this.http.get(`${this.apiUrl}/permissions`);
      }
      return throwError(() => error);
    }));
  }
  assignRole(userId, role) {
    return this.http.post(`${this.apiUrl}/assign/${userId}`, { role });
  }
  getUserRoles(userId) {
    return this.http.get(`${this.usersUrl}/${userId}/roles`);
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RoleService
};
//# sourceMappingURL=chunk-QUKKT7LX.js.map
