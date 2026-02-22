import {
  AuthService
} from "./chunk-S4S52KAB.js";
import {
  Router
} from "./chunk-RDWQPZ6C.js";
import {
  inject
} from "./chunk-GLCXFY3U.js";

// src/app/guards/authorization.guard.ts
function hasAtLeastOne(required, current) {
  if (!required || required.length === 0) {
    return true;
  }
  if (!current || current.length === 0) {
    return true;
  }
  return required.some((item) => current.includes(item));
}
var authorizationGuard = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.currentUser();
  if (!user) {
    return router.createUrlTree(["/auth/login"]);
  }
  const requiredRoles = route.data?.["roles"];
  const requiredPermissions = route.data?.["permissions"];
  const userRoles = user.roles ?? [];
  const userPermissions = user.permissions ?? [];
  const hasRole = hasAtLeastOne(requiredRoles, userRoles);
  const hasPermission = hasAtLeastOne(requiredPermissions, userPermissions);
  if (hasRole && hasPermission) {
    return true;
  }
  return router.createUrlTree(["/"]);
};

export {
  authorizationGuard
};
//# sourceMappingURL=chunk-7TXYQDMF.js.map
