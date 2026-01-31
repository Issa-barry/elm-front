import { AuthService } from '@/services/auth/auth.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // Ne pas définir Content-Type pour FormData (le navigateur le fait automatiquement)
  const isFormData = req.body instanceof FormData;

  const headers: Record<string, string> = {
    Accept: 'application/json'
  };

  // Ajouter le token si disponible
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Ajouter Content-Type seulement si ce n'est pas un FormData
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  req = req.clone({ setHeaders: headers });

  return next(req);
};