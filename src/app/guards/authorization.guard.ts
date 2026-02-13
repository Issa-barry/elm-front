import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthService } from '@/services/auth/auth.service';

function hasAtLeastOne(required: string[] | undefined, current: string[] | undefined): boolean {
  if (!required || required.length === 0) {
    return true;
  }

  if (!current || current.length === 0) {
    // Fallback permissif: le backend reste la source d'autorite.
    return true;
  }

  return required.some(item => current.includes(item));
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

  const hasRole = hasAtLeastOne(requiredRoles, userRoles);
  const hasPermission = hasAtLeastOne(requiredPermissions, userPermissions);

  if (hasRole && hasPermission) {
    return true;
  }

  return router.createUrlTree(['/notfound']);
};
