import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthService } from '@/services/auth/auth.service';

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
};

function normalizeRole(value: string): string {
  return value.trim().toLowerCase();
}

function normalizeModule(value: string): string {
  const compact = value.trim().toLowerCase().replace(/[\s_-]+/g, '');
  if (compact.length === 0) {
    return '';
  }

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
  if (raw.length === 0) {
    return '';
  }

  const lastDot = raw.lastIndexOf('.');
  if (lastDot < 0) {
    return normalizeModule(raw);
  }

  const modulePart = normalizeModule(raw.slice(0, lastDot));
  const actionPart = raw.slice(lastDot + 1).replace(/[\s_-]+/g, '');
  return `${modulePart}.${actionPart}`;
}

function hasAtLeastOneRole(required: string[] | undefined, current: string[] | undefined): boolean {
  if (!required || required.length === 0) {
    return true;
  }

  if (!current || current.length === 0) {
    // Fallback permissif: le backend reste la source d'autorite.
    return true;
  }

  const normalizedCurrent = new Set(current.map(normalizeRole).filter((item) => item.length > 0));
  return required.some((item) => normalizedCurrent.has(normalizeRole(item)));
}

function hasAtLeastOnePermission(required: string[] | undefined, current: string[] | undefined): boolean {
  if (!required || required.length === 0) {
    return true;
  }

  if (!current || current.length === 0) {
    // Fallback permissif: le backend reste la source d'autorite.
    return true;
  }

  const normalizedCurrent = new Set(current.map(normalizePermission).filter((item) => item.length > 0));
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

  const userRoles = user.roles ?? [];
  const userPermissions = user.permissions ?? [];

  const hasRole = hasAtLeastOneRole(requiredRoles, userRoles);
  const hasPermission = hasAtLeastOnePermission(requiredPermissions, userPermissions);

  if (hasRole && hasPermission) {
    return true;
  }

  return router.createUrlTree(['/']);
};
