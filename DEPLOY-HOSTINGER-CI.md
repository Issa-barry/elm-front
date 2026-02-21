# Déploiement Hostinger — CI/CD GitHub Actions

## Flux de branches

```
feature/* (ex: agence)
      │
      ▼
     dev  ──────────────────────► build CI only (config: production)
      │
      ▼
  pre-prod ─────────────────────► build (config: preprod) + deploy preprod
      │
      ▼
    main ──────────────────────► build (config: production) + deploy prod
```

| Branche    | Config Angular | Déploiement            |
|------------|----------------|------------------------|
| `feature/*`| production     | aucun                  |
| `dev`      | production     | aucun (CI only)        |
| `pre-prod` | **preprod**    | Hostinger preprod      |
| `main`     | **production** | Hostinger prod         |

> Les PR déclenchent uniquement le job `build` (contrôle d'intégrité).
> Les jobs de déploiement ne s'exécutent que sur `push` ou `workflow_dispatch`.

---

## Environnements Angular

| Fichier                                      | Utilisé par config  |
|----------------------------------------------|---------------------|
| `src/environments/environment.ts`            | développement local |
| `src/environments/environment.preprod.ts`    | `preprod`           |
| `src/environments/environment.production.ts` | `production`        |

---

## Secrets GitHub à créer

Aller dans **GitHub → Settings → Secrets and variables → Actions**.

### Préprod

| Nom du secret                    | Valeur attendue                          |
|----------------------------------|------------------------------------------|
| `HOSTINGER_PREPROD_FTP_SERVER`   | Adresse FTP du serveur preprod Hostinger |
| `HOSTINGER_PREPROD_FTP_USERNAME` | Identifiant FTP preprod                  |
| `HOSTINGER_PREPROD_FTP_PASSWORD` | Mot de passe FTP preprod                 |

### Production

| Nom du secret                 | Valeur attendue                       |
|-------------------------------|---------------------------------------|
| `HOSTINGER_PROD_FTP_SERVER`   | Adresse FTP du serveur prod Hostinger |
| `HOSTINGER_PROD_FTP_USERNAME` | Identifiant FTP prod                  |
| `HOSTINGER_PROD_FTP_PASSWORD` | Mot de passe FTP prod                 |

> Les anciens secrets `HOSTINGER_FTP_*` (sans suffixe env) ne sont plus utilisés
> et peuvent être supprimés après vérification.

---

## Dossiers cibles FTP

| Environnement | `server-dir` dans le workflow |
|---------------|-------------------------------|
| Preprod       | `/public_html/`               |
| Prod          | `/public_html/`               |

Adapter ces valeurs dans `.github/workflows/frontend-ci-cd.yml` si les deux
environnements sont hébergés sur des comptes/domaines différents.

---

## URL des environnements

| Environnement | URL                       |
|---------------|---------------------------|
| Preprod       | `https://usine-eau.eu/`   |
| Production    | *(à renseigner)*          |

---

## Lancer manuellement (`workflow_dispatch`)

1. Aller dans **GitHub → Actions → Frontend CI/CD**.
2. Cliquer sur **Run workflow**.
3. Sélectionner la branche cible :
   - `pre-prod` → build preprod + deploy preprod
   - `main`     → build production + deploy prod
4. Cliquer sur **Run workflow**.

---

## Comportement attendu après un merge

### Merge `dev` → `pre-prod`

1. GitHub Actions déclenche le workflow sur push `pre-prod`.
2. `build` : `ng build --configuration preprod` → remplace `environment.ts` par `environment.preprod.ts`.
3. `deploy-preprod` : upload FTP vers le serveur preprod.
4. `deploy-prod` : **ignoré** (`github.ref != 'refs/heads/main'`).

### Merge `pre-prod` → `main`

1. GitHub Actions déclenche le workflow sur push `main`.
2. `build` : `ng build --configuration production` → remplace `environment.ts` par `environment.production.ts`.
3. `deploy-prod` : upload FTP vers le serveur prod.
4. `deploy-preprod` : **ignoré** (`github.ref != 'refs/heads/pre-prod'`).

---

## Commandes locales équivalentes

```bash
# Build preprod
node ./node_modules/@angular/cli/bin/ng build --configuration preprod

# Build production
node ./node_modules/@angular/cli/bin/ng build --configuration production

# Vérification TypeScript (sans émission de fichiers)
npx tsc -p tsconfig.app.json --noEmit
```
