import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

function firstValidationError(errors: unknown): string | null {
  if (!errors || typeof errors !== 'object') return null;

  const entries = Object.values(errors as Record<string, unknown>);
  for (const entry of entries) {
    if (Array.isArray(entry) && typeof entry[0] === 'string' && entry[0].trim().length > 0) {
      return entry[0];
    }
  }

  return null;
}

function resolveMessage(error: HttpErrorResponse): string {
  const payload = error.error;

  if (typeof payload?.message === 'string' && payload.message.trim().length > 0) {
    return payload.message;
  }

  const validation = firstValidationError(payload?.errors);
  if (validation) return validation;

  switch (error.status) {
    case 403:
      return 'Vous n\'avez pas la permission pour cette action.';
    case 404:
      return 'Ressource introuvable.';
    case 422:
      return 'Donnees invalides. Verifiez le formulaire.';
    default:
      if (error.status >= 500) {
        return 'Erreur serveur. Veuillez reessayer plus tard.';
      }
      return 'Une erreur est survenue.';
  }
}

function shouldDisplay(error: HttpErrorResponse, url: string): boolean {
  if (error.status === 0 || error.status === 401) return false;
  if (url.includes('/auth/login')) return false;
  return [403, 404, 422].includes(error.status) || error.status >= 500;
}

export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && shouldDisplay(error, req.url)) {
        const summary =
          error.status === 422 ? 'Validation' : error.status === 403 ? 'Acces refuse' : error.status === 404 ? 'Introuvable' : 'Erreur';

        messageService.add({
          severity: error.status >= 500 ? 'error' : error.status === 422 ? 'warn' : 'error',
          summary,
          detail: resolveMessage(error),
          life: 5000,
        });
      }

      return throwError(() => error);
    })
  );
};
