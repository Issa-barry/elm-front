import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user';
const LOGIN_PATH = '/auth/login';

function clearSessionAndRedirectToLogin(): void {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);

  const currentPath = `${window.location.pathname}${window.location.search}`;
  if (window.location.pathname === LOGIN_PATH) {
    return;
  }

  const returnUrl = encodeURIComponent(currentPath);
  window.location.assign(`${LOGIN_PATH}?returnUrl=${returnUrl}`);
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const isFormData = req.body instanceof FormData;

  const headers: Record<string, string> = {
    Accept: 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  const authReq = req.clone({ setHeaders: headers });

  return next(authReq).pipe(
    catchError((error: unknown) => {
      if (
        error instanceof HttpErrorResponse &&
        error.status === 401 &&
        !authReq.url.includes('/auth/login')
      ) {
        clearSessionAndRedirectToLogin();
      }

      return throwError(() => error);
    })
  );
};
