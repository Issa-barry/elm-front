# Backoffice Front Architecture (Angular)

## 1) Core layers
- `src/app/interceptors/`
  - `auth.interceptor.ts`: injects Bearer token, handles 401 logout redirect.
  - `usine.interceptor.ts`: injects `X-Site-Id` from current context (`id` or `all`).
  - `api-error.interceptor.ts`: central API error UX (403/404/422/500).
- `src/app/services/auth/`
  - session lifecycle (`login`, `me`, `logout`), user/roles/permissions hydration.
- `src/app/services/usine/usine-context.service.ts`
  - global site context store (current/default, accessible sites, siege mode).

## 2) RBAC
- Route level: `authorization.guard.ts`
  - supports `roles` + `permissions` from route data.
  - normalizes role formats (`super_admin`, `super-admin`, etc.).
- UI level:
  - menu built from AuthService permission/role checks.
  - buttons/actions hidden when create/update/delete permission is missing.

## 3) Feature modules
- `src/app/pages/organisations/`
  - list + detail + CRUD (super admin).
- `src/app/pages/sites/`
  - list + detail + CRUD + set-default.
- `src/app/pages/profile/profile-overview/`
  - current user, roles, permissions, accessible sites.
- Existing business modules remain unchanged (packings, produits, ventes, etc.).

## 4) Routing
- `/dashboard`
- `/organisations` (super_admin)
- `/sites` (sites.read)
- `/profile`
- `/auth/login`

## 5) Backend contract alignment
- Base API: `/api/v1`
- Auth endpoints: `/auth/login`, `/auth/me`, `/auth/logout`
- Context header: `X-Site-Id: <id|all>`
- Resources:
  - `/organisations` CRUD
  - `/sites` CRUD + `/sites/{id}/set-default`
