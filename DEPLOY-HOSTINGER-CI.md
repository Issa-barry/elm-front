# CI/CD Hostinger (Angular Front)

Ce document decrit le deploiement automatique aligne avec votre flux Git:

- branche feature (ex: `agence`) -> PR vers `dev`
- `dev` -> PR vers `pre-prod`
- `pre-prod` -> PR vers `main`

## Workflow utilise

Fichier: `.github/workflows/frontend-ci-cd.yml`

Comportement:

- `pull_request` sur `dev`, `pre-prod`, `main`: build uniquement
- `push` sur `dev`: build + deploy vers `/public_html/dev/`
- `push` sur `pre-prod`: build + deploy vers `/public_html/pre-prod/`
- `push` sur `main`: build + deploy vers `/public_html/` (production)
- `workflow_dispatch`: deploy manuel possible selon la branche choisie

## Secrets GitHub requis

Dans `Settings -> Secrets and variables -> Actions`, creer:

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`

Important: le nom du secret doit etre exact (`HOSTINGER_FTP_USERNAME` avec le `E` final).

## URLs attendues

- Dev: `https://votre-domaine.com/dev/` (ou sous-domaine configure vers ce dossier)
- Pre-prod: `https://votre-domaine.com/pre-prod/`
- Production: `https://votre-domaine.com/`
