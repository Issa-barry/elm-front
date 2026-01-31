import { AuthService } from '@/services/auth/auth.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
 

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Ajouter le token dans les headers si disponible
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  } else {
    req = req.clone({
      setHeaders: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  return next(req);
};