import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthService } from '@/services/auth/auth.service';
import { User } from '@/models/user.model';

const MODULE_ALIASES: Record<string, string> = {
  produit: 'produit',
  produits: 'produit',
  product: 'produit',
  products: 'produit',
  packing: 'packing',
  packings: 'packing',
  prestataire: 'prestataire',
  prestataires: 'prestataire',
  utilisateur: 'utilisateur',
  utilisateurs: 'utilisateur',
  user: 'utilisateur',
  users: 'utilisateur',
  role: 'role',
  roles: 'role',
  commande: 'commande',
  commandes: 'commande',
  encaissement: 'encaissement',
  encaissements: 'encaissement',
  facturepacking: 'facturepacking',
  facturepackings: 'facturepacking',
  facturelivraison: 'facturelivraison',
  facturelivraisons: 'facturelivraison',
  factureslivraison: 'facturelivraison',
  factureslivraisons: 'facturelivraison',
  site: 'site',
  sites: 'site',
  organisation: 'organisation',
  organisations: 'organisation',
};

function normalizeRole(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normalizeModule(value: string): string {
  const compact = value.trim().toLowerCase().replace(/[\s_-]+/g, '');
  if (compact.length === 0) return '';

  if (MODULE_ALIASES[compact]) {
    return MODULE_ALIASES[compact];
  }

  if (compact.endsWith('s') && compact.length > 1) {
    const singular = compact.slice(0, -1);
    return MODULE_ALIASES[singular] ?? singular;
  }

  return compact;
}

function normalizePermission(value: string): string {
  const raw = value.trim().toLowerCase();
  if (raw.length === 0) return '';

  const lastDot = raw.lastIndexOf('.');
  if (lastDot < 0) {
    return normalizeModule(raw);
  }

  const modulePart = normalizeModule(raw.slice(0, lastDot));
  const actionPart = raw.slice(lastDot + 1).replace(/[\s_-]+/g, '');
  return `${modulePart}.${actionPart}`;
}

function userRoles(user: User): string[] {
  return [...(user.roles ?? []), ...(user.role_names ?? [])]
    .map((role) => normalizeRole(role))
    .filter((role) => role.length > 0);
}

function hasAtLeastOneRole(required: string[] | undefined, current: string[]): boolean {
  if (!required || required.length === 0) return true;
  if (current.length === 0) return false;

  const normalizedCurrent = new Set(current);
  return required.some((item) => normalizedCurrent.has(normalizeRole(item)));
}

function hasAtLeastOnePermission(required: string[] | undefined, current: string[], isSuperAdmin: boolean): boolean {
  if (!required || required.length === 0) return true;
  if (isSuperAdmin) return true;
  if (current.length === 0) return false;

  const normalizedCurrent = new Set(current.map((item) => normalizePermission(item)).filter((item) => item.length > 0));
  return required.some((item) => normalizedCurrent.has(normalizePermission(item)));
}

export const authorizationGuard: CanActivateFn = (route): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.currentUser();
  if (!user) {
    return router.createUrlTree(['/auth/login']);
  }

  const requiredRoles = route.data?.['roles'] as string[] | undefined;
  const requiredPermissions = route.data?.['permissions'] as string[] | undefined;

  const roles = userRoles(user);
  const isSuperAdmin = roles.includes('superadmin');
  const permissions = user.permissions ?? [];

  const hasRole = hasAtLeastOneRole(requiredRoles, roles);
  const hasPermission = hasAtLeastOnePermission(requiredPermissions, permissions, isSuperAdmin);

  if (hasRole && hasPermission) {
    return true;
  }

  return router.createUrlTree(['/']);
};
