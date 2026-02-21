# Déploiement sur Hostinger

## 1. Build de l’application

**Option A – Dossier prêt à déployer (recommandé)**  
Génère le build puis copie tout dans **`dist/apollo-ng-deploy/`** (à envoyer tel quel sur Hostinger) :

```bash
npm run build:deploy
```

**Option B – Build classique**  
Génère **`dist/apollo-ng/`**. Les fichiers à déployer sont dans **`dist/apollo-ng/browser/`** :

```bash
npm run build
```

---

## 2. Déploiement à la racine du site (ex. https://mondomaine.com/)

1. Ouvre **Gestionnaire de fichiers** (ou FTP) dans Hostinger.
2. Va dans **`public_html`**.
3. **Supprime** tout le contenu actuel de `public_html` (ou sauvegarde-le ailleurs si besoin).
4. **Envoie tout le contenu** soit de **`dist/apollo-ng-deploy/`** (si tu as utilisé `npm run build:deploy`), soit de **`dist/apollo-ng/browser/`** (si tu as utilisé `npm run build`), **dans** `public_html` :
   - `index.html` à la racine de `public_html`
   - `.htaccess` à la racine de `public_html`
   - dossiers `demo/`, `layout/`, `media/`, etc.
   - fichiers `main-*.js`, `polyfills-*.js`, `styles-*.css`, `chunk-*.js`

Tu dois avoir par exemple :

```
public_html/
  index.html
  .htaccess
  main-XXXXX.js
  polyfills-XXXXX.js
  styles-XXXXX.css
  chunk-*.js
  demo/
  layout/
  media/
  ...
```

5. L’app est disponible sur **https://mondomaine.com/** (ou **https://mondomaine.com/#/** avec le mode hash).

---

## 3. Déploiement dans un sous-dossier (ex. https://mondomaine.com/app/)

Si le site doit être dans **https://mondomaine.com/app/** :

1. Build avec le bon `base-href` :

```bash
ng build --configuration=production --base-href /app/
```

2. Dans Hostinger, va dans **`public_html`**.
3. Crée un dossier **`app`** (s’il n’existe pas).
4. Envoie **tout le contenu** de **`dist/apollo-ng-deploy/`** (ou de **`dist/apollo-ng/browser/`**) **dans** `public_html/app/`.

L’app sera accessible sur **https://mondomaine.com/app/#/**.

---

## 4. Vérifications

- **Page blanche au refresh** (ex. sur `https://ton-domaine.com/#/auth/login`) : le **`.htaccess`** doit être bien pris en compte par Hostinger (Apache). Il contient `DirectoryIndex index.html` et des règles pour renvoyer `index.html` sur toute requête, afin qu’un rechargement sur une URL avec hash affiche bien l’app. Si ça ne marche pas, dans le **panneau Hostinger** vérifie que les Fichiers `.htaccess` sont autorisés (souvent dans « Paramètres avancés » ou « Configuration Apache »).
- **Page blanche** : ouvre la console du navigateur (F12 → Console) et regarde les erreurs (fichiers 404, erreurs JavaScript). Les URLs sont en **mode hash** (`#/auth/login`, etc.) pour éviter les 404 au refresh.
- Le fichier **`.htaccess`** est copié automatiquement depuis `public/` lors du build.
- **API** : en production l’app utilise l’URL définie dans `src/environments/environment.production.ts`. Vérifie que ce domaine est accessible (CORS si besoin).

---

## 5. Résumé des commandes utiles

| Situation                    | Commande |
|-----------------------------|----------|
| Build + dossier prêt déploy | `npm run build:deploy` |
| Build pour la racine        | `npm run build` |
| Build pour /app/            | `ng build --configuration=production --base-href /app/` puis copier `dist/apollo-ng/browser/` vers ton dossier de déploiement |

Après chaque nouveau déploiement, pense à vider le cache du navigateur (Ctrl+F5) ou à tester en navigation privée.
