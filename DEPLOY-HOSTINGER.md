# Déploiement sur Hostinger

## Page blanche sur smartphone

Si l’application s’affiche sur desktop mais reste blanche sur mobile, voici ce qui a été mis en place et ce à vérifier.

### 1. Modifications dans le projet

- **Navigation non bloquante** : la première navigation ne bloque plus l’affichage. L’app peut se charger même si le réseau est lent ou si une garde échoue.
- **Gestion d’erreur au démarrage** : en cas d’échec au chargement de l’app, un message et un bouton « Réessayer » s’affichent au lieu d’une page blanche.

### 2. Déploiement

1. **Build** :  
   `npm run build`  
   Les fichiers à déployer se trouvent dans **`dist/apollo-ng/browser/`** (ou `dist/apollo-ng/` selon la version d’Angular).

2. **Contenu à envoyer sur Hostinger**  
   Envoyer **tout le contenu** du dossier `dist/apollo-ng/browser/` dans le répertoire prévu (souvent `public_html`), en conservant la structure (dossiers `assets`, etc.).  
   Le fichier **`.htaccess`** doit être à la **racine** de ce que sert le site (à côté de `index.html`).

3. **Base href**  
   - Site à la **racine** du domaine (ex. `https://mondomaine.com/`) : ne rien changer, `<base href="/">` dans `index.html` est correct.  
   - Site dans un **sous-dossier** (ex. `https://mondomaine.com/app/`) :  
     `ng build --base-href /app/`  
     puis déployer le contenu de `dist/apollo-ng/browser/` (par exemple dans `public_html/app/`).

### 3. Vérifications sur Hostinger

- **Réécriture d’URL (mod_rewrite)** : activée pour le site (souvent dans « Paramètres avancés » ou « Apache »).
- **.htaccess** : présent à la racine du site (à côté de `index.html`) et non ignoré par l’hébergeur.
- **HTTPS** : si le site est en HTTPS, les requêtes API doivent aussi être en HTTPS (pas de mixed content).

### 4. En cas de page blanche

- Sur mobile, ouvrir les **outils de développement** (Chrome remote debugging, Safari Web Inspector, etc.) et regarder l’onglet **Console** pour les erreurs JavaScript.
- Si le message « L’application n’a pas pu démarrer » s’affiche, recharger la page ou tester avec un navigateur à jour.
- Vérifier que l’URL d’accès est bien celle du site (avec ou sans sous-dossier) et que le **base href** correspond (voir point 3 ci-dessus).
