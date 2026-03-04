# Backoffice - How To Test

## 1) Configure API
- Set backend URL in:
  - `src/environments/environment.ts`
  - `src/environments/environment.production.ts`
- Example value: `http://127.0.0.1:8000/api/v1`

## 2) Run frontend
```bash
npm install
npm start
```

## 3) Login accounts (seed)
- super_admin: `+224666101001 / Staff@2025`
- super_admin: `+224666101002 / Staff@2025`
- admin_entreprise: `+224666101011 / Staff@2025`
- manager: `+224620000020 / Staff@2025`

## 4) Functional checks
1. Login with super_admin and verify menu shows `Organisations` and `Sites`.
2. Open `/organisations`:
   - create / edit / delete should work.
   - detail page `/organisations/:id` should load.
3. Open `/sites`:
   - create / edit / delete according to permissions.
   - click star action to set default site.
4. Open `/profile`:
   - roles, permissions and accessible sites should render.
5. Switch site in topbar:
   - network requests should include `X-Site-Id`.
   - HQ consolidated mode must send `X-Site-Id: all`.

## 5) Build
```bash
npm run build
```
