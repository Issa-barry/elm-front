import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

import { UsineContextService } from '@/services/usine/usine-context.service';

/** Routes qui ne doivent jamais recevoir le header X-Usine-Id */
const EXCLUDED_PATHS = ['/auth/login', '/auth/register'];

function isExcluded(url: string): boolean {
  return EXCLUDED_PATHS.some(path => url.includes(path));
}

/**
 * Intercepteur multi-usine :
 *  1. Injecte X-Usine-Id sur toutes les requêtes métier (sauf login/register
 *     et vue consolidée siège).
 *  2. Gère les erreurs usine :
 *     - 403 "Accès à cette usine non autorisé." → toast + fallback usine
 *     - 404 "Usine non trouvée ou inactive."    → toast + fallback usine
 */
export const usineInterceptor: HttpInterceptorFn = (req, next) => {
  const usineCtx      = inject(UsineContextService);
  const messageService = inject(MessageService);

  // ── 1. Injection du header ──────────────────────────
  let outReq = req;
  if (!isExcluded(req.url)) {
    const usineId = usineCtx.headerUsineId(); // null = vue consolidée → pas de header
    if (usineId !== null) {
      outReq = req.clone({
        setHeaders: { 'X-Usine-Id': String(usineId) },
      });
    }
  }

  // ── 2. Gestion des erreurs usine ────────────────────
  return next(outReq).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && !isExcluded(req.url)) {
        const message: string = error.error?.message ?? '';

        if (error.status === 403 && message === 'Accès à cette usine non autorisé.') {
          messageService.add({
            severity: 'error',
            summary:  'Accès refusé',
            detail:   "Vous n'êtes pas autorisé à accéder à cette usine. Retour à l'usine par défaut.",
            life:     5000,
          });
          usineCtx.fallbackToDefault();
        } else if (error.status === 404 && message === 'Usine non trouvée ou inactive.') {
          messageService.add({
            severity: 'warn',
            summary:  'Usine introuvable',
            detail:   "L'usine sélectionnée est introuvable ou inactive. Retour à l'usine par défaut.",
            life:     5000,
          });
          usineCtx.fallbackToDefault();
        }
      }

      return throwError(() => error);
    })
  );
};
