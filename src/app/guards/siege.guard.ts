import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UsineContextService } from '@/services/usine/usine-context.service';

/**
 * Guard : réserve l'accès aux utilisateurs siège uniquement.
 * Redirige les autres vers la page d'accueil.
 */
export const siegeGuard: CanActivateFn = () => {
  const usineCtx = inject(UsineContextService);
  const router   = inject(Router);

  if (usineCtx.isSiegeUser()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
