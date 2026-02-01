import { AuthService } from '@/services/auth/auth.service';
import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
 
export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Lire la valeur du signal avec ()
  if (!authService.isAuthenticated()) {
    return true;
  }

  // Si déjà connecté, rediriger vers le dashboard
  router.navigate(['/dashboard']);
  return false;
};