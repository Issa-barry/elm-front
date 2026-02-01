import { AuthService } from '@/services/auth/auth.service';
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
 
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // console.log('AuthGuard: Vérification de l\'authentification', authService.isAuthenticated());

  // ✅ Utiliser le signal au lieu de la méthode
  if (authService.isAuthenticated()) {
    return true;
  }

  // Rediriger vers la page de login avec l'URL de retour
  router.navigate(['/auth/login'], {
    queryParams: { returnUrl: state.url }
  });
  return false;
};