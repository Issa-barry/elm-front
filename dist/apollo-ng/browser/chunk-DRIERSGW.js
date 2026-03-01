import {
  AuthService
} from "./chunk-CL3X32VF.js";
import {
  Router
} from "./chunk-N3I2MPIX.js";
import {
  inject
} from "./chunk-SKXAAURP.js";

// src/app/guards/authorization.guard.ts
var MODULE_ALIASES = {
  produit: "produit",
  produits: "produit",
  product: "produit",
  products: "produit",
  packing: "packing",
  packings: "packing",
  prestataire: "prestataire",
  prestataires: "prestataire",
  utilisateur: "utilisateur",
  utilisateurs: "utilisateur",
  user: "utilisateur",
  users: "utilisateur",
  role: "role",
  roles: "role",
  commande: "commande",
  commandes: "commande",
  encaissement: "encaissement",
  encaissements: "encaissement",
  facturepacking: "facturepacking",
  facturepackings: "facturepacking",
  facturelivraison: "facturelivraison",
  facturelivraisons: "facturelivraison",
  factureslivraison: "facturelivraison",
  factureslivraisons: "facturelivraison"
};
function normalizeRole(value) {
  return value.trim().toLowerCase();
}
function normalizeModule(value) {
  const compact = value.trim().toLowerCase().replace(/[\s_-]+/g, "");
  if (compact.length === 0) {
    return "";
  }
  if (MODULE_ALIASES[compact]) {
    return MODULE_ALIASES[compact];
  }
  if (compact.endsWith("s") && compact.length > 1) {
    const singular = compact.slice(0, -1);
    return MODULE_ALIASES[singular] ?? singular;
  }
  return compact;
}
function normalizePermission(value) {
  const raw = value.trim().toLowerCase();
  if (raw.length === 0) {
    return "";
  }
  const lastDot = raw.lastIndexOf(".");
  if (lastDot < 0) {
    return normalizeModule(raw);
  }
  const modulePart = normalizeModule(raw.slice(0, lastDot));
  const actionPart = raw.slice(lastDot + 1).replace(/[\s_-]+/g, "");
  return `${modulePart}.${actionPart}`;
}
function hasAtLeastOneRole(required, current) {
  if (!required || required.length === 0) {
    return true;
  }
  if (!current || current.length === 0) {
    return true;
  }
  const normalizedCurrent = new Set(current.map(normalizeRole).filter((item) => item.length > 0));
  return required.some((item) => normalizedCurrent.has(normalizeRole(item)));
}
function hasAtLeastOnePermission(required, current) {
  if (!required || required.length === 0) {
    return true;
  }
  if (!current || current.length === 0) {
    return true;
  }
  const normalizedCurrent = new Set(current.map(normalizePermission).filter((item) => item.length > 0));
  return required.some((item) => normalizedCurrent.has(normalizePermission(item)));
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
  const hasRole = hasAtLeastOneRole(requiredRoles, userRoles);
  const hasPermission = hasAtLeastOnePermission(requiredPermissions, userPermissions);
  if (hasRole && hasPermission) {
    return true;
  }
  return router.createUrlTree(["/"]);
};

export {
  authorizationGuard
};
//# sourceMappingURL=chunk-DRIERSGW.js.map
