# CI/CD Hostinger (Angular Front)

Ce document decrit le deploiement automatique aligne avec votre flux Git:

- branche feature (ex: `agence`) -> PR vers `dev`
- `dev` -> PR vers `pre-prod`
- `pre-prod` -> PR vers `main`

## Workflow utilise

Fichier: `.github/workflows/frontend-ci-cd.yml`

Comportement:

- `pull_request` sur `dev`, `pre-prod`, `main`: build uniquement
- `push` sur `pre-prod`: build + deploy vers `/public_html/` (preprod actuelle: `https://usine-eau.eu/`)
- `push` sur `dev` et `main`: build uniquement (pas de deploy automatique)
- `workflow_dispatch`: deploy manuel possible uniquement si la branche selectionnee est `pre-prod`

## Secrets GitHub requis

Dans `Settings -> Secrets and variables -> Actions`, creer:

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`

Important: le nom du secret doit etre exact (`HOSTINGER_FTP_USERNAME` avec le `E` final).

## URL attendue

- Pre-prod (actuelle): `https://usine-eau.eu/`
