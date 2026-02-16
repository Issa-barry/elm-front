# Plan de test – Produit-liste (mobile & desktop)

## Desktop (> 768px)

- [ ] La page affiche le **layout desktop** (card, toolbar, p-table, pagination).
- [ ] Aucun élément `.produits-mobile-app` visible (bloc masqué).
- [ ] Recherche globale, tri, export, création/suppression fonctionnent comme avant.
- [ ] Aucune régression visuelle (grilles, panels, paddings).

## Mobile (≤ 768px)

### Affichage plein écran & safe area

- [ ] La page occupe tout l’écran (100vh / 100dvh).
- [ ] Sur iPhone avec encoche/barre dynamique : pas de contenu sous la barre de statut ni sous l’indicateur d’accueil (padding safe-area visible).
- [ ] Le contenu central scrolle correctement ; le header reste en haut (sticky).

### Header type « app »

- [ ] Barre en haut avec : flèche retour (gauche), titre « Produits » (centré dans l’espace disponible), icône « + » à droite si droit création.
- [ ] Clic sur la flèche : retour en arrière (history) ou accueil si pas d’historique.
- [ ] Header reste fixe en haut pendant le scroll.

### Layout & interactions

- [ ] Champ de recherche en haut (sous le header), recherche en temps réel sur la liste.
- [ ] Liste en cartes verticales, zones de tap larges.
- [ ] Chaque carte affiche un **placeholder image** à gauche (carré 64×64, fond neutre, icône boîte).
- [ ] Tap sur une carte : navigation vers la fiche produit (édition/voir).
- [ ] Boutons Modifier (œil) et Supprimer dans la carte : Modifier ouvre la fiche, Supprimer ouvre la confirmation (sans déclencher la navigation de la carte).
- [ ] FAB « Nouveau produit » en bas à droite (si droit création) : ouvre la création.
- [ ] « Charger plus » en bas de liste si plus de résultats.

### Régressions

- [ ] Aucun impact sur le comportement desktop.
- [ ] Dialog création/édition et Confirm dialog s’ouvrent et se ferment correctement sur mobile.

## Navigateurs / appareils suggérés

- **Desktop** : Chrome, Firefox, Edge (fenêtre > 768px).
- **Mobile** : Chrome Android, Safari iOS (mode responsive ou appareil réel).
- **iOS** : vérifier safe-area (encoche, barre d’accueil).
- **Android** : vérifier barre de navigation et zone de contenu.
