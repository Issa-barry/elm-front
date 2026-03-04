import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

import { UsineContextService } from '@/services/usine/usine-context.service';

/** Routes that should never receive contextual site header. */
const EXCLUDED_PATHS = ['/auth/login', '/auth/register'];
/** Endpoints that do not accept consolidated HQ context ("all"). */
const CONCRETE_SITE_ONLY_PATHS = ['/roles', '/permissions'];

function isExcluded(url: string): boolean {
  return EXCLUDED_PATHS.some((path) => url.includes(path));
}

function requiresConcreteSite(url: string): boolean {
  return CONCRETE_SITE_ONLY_PATHS.some((path) => url.includes(path)) || /\/users\/\d+\/roles(?:\?|$|\/)/.test(url);
}

function resolveConcreteSiteId(siteCtx: UsineContextService): number | null {
  return siteCtx.currentUsineId() ?? siteCtx.defaultUsineId() ?? siteCtx.accessibleUsines()[0]?.id ?? null;
}

/**
 * Site context interceptor:
 * - injects X-Site-Id from current site context
 * - handles contextual 403/404 errors and falls back to default site
 */
export const usineInterceptor: HttpInterceptorFn = (req, next) => {
  const siteCtx = inject(UsineContextService);
  const messageService = inject(MessageService);

  let outReq = req;
  if (!isExcluded(req.url)) {
    let siteHeaderValue = siteCtx.headerUsineId();
    if (siteHeaderValue === 'all' && requiresConcreteSite(req.url)) {
      siteHeaderValue = resolveConcreteSiteId(siteCtx);
    }

    if (siteHeaderValue !== null) {
      outReq = req.clone({
        setHeaders: { 'X-Site-Id': String(siteHeaderValue) },
      });
    }
  }

  return next(outReq).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && !isExcluded(req.url)) {
        const message = typeof error.error?.message === 'string' ? error.error.message : '';

        if (error.status === 403 && (message.includes('site') || message.includes('Site') || message.includes('autorise'))) {
          messageService.add({
            severity: 'error',
            summary: 'Acces refuse',
            detail: 'Vous n\'etes pas autorise sur ce site. Retour au site par defaut.',
            life: 5000,
          });
          siteCtx.fallbackToDefault();
        } else if (error.status === 404 && (message.includes('site') || message.includes('Site') || message.includes('introuvable'))) {
          messageService.add({
            severity: 'warn',
            summary: 'Site introuvable',
            detail: 'Le site selectionne est introuvable. Retour au site par defaut.',
            life: 5000,
          });
          siteCtx.fallbackToDefault();
        }
      }

      return throwError(() => error);
    })
  );
};
