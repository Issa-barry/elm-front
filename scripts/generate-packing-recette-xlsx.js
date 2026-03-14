/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const OUTPUT_DIR = path.resolve(__dirname, '..', 'docs', 'recette');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'Cahier_Recette_Packing_Front.xlsx');

const headers = [
  'id',
  'domaine',
  'sous_domaine',
  'titre_test',
  'pre_requis',
  'etapes',
  'resultat_attendu',
  'donnees_test',
  'priorite',
  'type_test',
  'statut_exec',
  'resultat_observe',
  'ticket_anomalie',
  'testeur',
  'date_execution',
  'build_version',
  'regle_couverte',
  'poids',
];

const weightMap = {
  Critique: 5,
  Haute: 4,
  Moyenne: 3,
  Basse: 2,
};

const cases = [];
let seq = 1;

function addCase({
  domaine,
  sousDomaine,
  titre,
  preRequis,
  etapes,
  attendu,
  donnees = '',
  priorite = 'Moyenne',
  type = 'Positif',
  regle = '',
}) {
  const id = `PK-${String(seq).padStart(3, '0')}`;
  seq += 1;

  cases.push({
    id,
    domaine,
    sous_domaine: sousDomaine,
    titre_test: titre,
    pre_requis: preRequis,
    etapes,
    resultat_attendu: attendu,
    donnees_test: donnees,
    priorite,
    type_test: type,
    statut_exec: 'NON TESTE',
    resultat_observe: '',
    ticket_anomalie: '',
    testeur: '',
    date_execution: '',
    build_version: '',
    regle_couverte: regle,
    poids: weightMap[priorite] || 3,
  });
}

function addFormValidationCases(screen) {
  const commonPreReq =
    'Utilisateur connecte avec droit create; liste des prestataires chargee; parametre prix par rouleau configure.';
  const fields = [
    {
      label: 'Machiniste',
      etape: 'laisser le prestataire vide puis enregistrer',
      attendu: 'blocage front avec message de champ requis',
      rule: 'prestataire_id.required',
    },
    {
      label: 'Date',
      etape: 'vider la date puis enregistrer',
      attendu: 'blocage front avec message date obligatoire',
      rule: 'date.required',
    },
    {
      label: 'Nombre de rouleaux',
      etape: 'mettre 0 puis enregistrer',
      attendu: 'blocage front sur nb_rouleaux > 0',
      rule: 'nb_rouleaux.required / min metier front',
    },
    {
      label: 'Prix par rouleau',
      etape: 'mettre 0 puis enregistrer',
      attendu: 'blocage front sur prix_par_rouleau > 0',
      rule: 'prix_par_rouleau.required / min metier front',
    },
  ];

  fields.forEach((f) => {
    addCase({
      domaine: 'Creation/Edition',
      sousDomaine: `Validation front ${screen}`,
      titre: `${screen} - Champ obligatoire: ${f.label}`,
      preRequis: commonPreReq,
      etapes: `Ouvrir l'ecran ${screen}; ${f.etape}.`,
      attendu: f.attendu,
      priorite: 'Haute',
      type: 'Negatif',
      regle: f.rule,
    });
  });
}

// 1) Navigation et UX de base packing
addCase({
  domaine: 'Navigation',
  sousDomaine: 'Liste packing',
  titre: 'Ouverture de la page liste packing',
  preRequis: 'Utilisateur authentifie avec droit packings.read.',
  etapes: 'Naviguer vers /packings.',
  attendu: 'La liste se charge sans erreur; spinner puis donnees/etat vide.',
  priorite: 'Critique',
  type: 'Positif',
  regle: 'GET /packings',
});

addCase({
  domaine: 'Navigation',
  sousDomaine: 'Creation packing',
  titre: 'Ouverture ecran creation',
  preRequis: 'Utilisateur avec droit packings.create.',
  etapes: 'Cliquer sur Nouveau packing depuis la liste.',
  attendu: 'Le formulaire de creation s affiche avec les champs attendus.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'Routing /packings/packings-new',
});

addCase({
  domaine: 'Navigation',
  sousDomaine: 'Edition packing',
  titre: 'Ouverture ecran edition depuis la liste',
  preRequis: 'Au moins un packing existe et droit packings.update.',
  etapes: 'Cliquer sur Modifier depuis une ligne de la liste.',
  attendu: 'La page edition s ouvre et pre-remplit le packing cible.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'GET /packings/{id}',
});

addCase({
  domaine: 'Navigation',
  sousDomaine: 'Bouton retour formulaire',
  titre: 'Annulation creation renvoie vers la liste',
  preRequis: 'Formulaire creation ouvert.',
  etapes: 'Cliquer sur Retour/Annuler.',
  attendu: 'Retour vers /packings sans creation.',
  priorite: 'Moyenne',
  type: 'Positif',
});

addCase({
  domaine: 'Navigation',
  sousDomaine: 'Bouton retour formulaire',
  titre: 'Annulation edition renvoie vers la liste',
  preRequis: 'Formulaire edition ouvert.',
  etapes: 'Cliquer sur Retour/Annuler.',
  attendu: 'Retour vers /packings sans sauvegarde.',
  priorite: 'Moyenne',
  type: 'Positif',
});

addCase({
  domaine: 'UX',
  sousDomaine: 'Formulaire packing',
  titre: 'Affichage du montant calcule en temps reel',
  preRequis: 'Formulaire creation ouvert.',
  etapes: 'Saisir nb_rouleaux=12 puis prix_par_rouleau=35000.',
  attendu: 'Montant total affiche 420000 GNF sans rechargement.',
  donnees: '12 x 35000',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'montant = nb_rouleaux * prix_par_rouleau',
});

addCase({
  domaine: 'UX',
  sousDomaine: 'Formulaire packing',
  titre: 'Soumission via touche Entree',
  preRequis: 'Formulaire valide.',
  etapes: 'Completer tous les champs requis puis appuyer sur Entree.',
  attendu: 'La soumission est declenchee une seule fois.',
  priorite: 'Moyenne',
  type: 'Robustesse',
});

addCase({
  domaine: 'UX',
  sousDomaine: 'Chargement',
  titre: 'Etat loading pendant creation',
  preRequis: 'Reseau lent simule (throttling).',
  etapes: 'Soumettre un packing valide en creation.',
  attendu: 'Overlay/loading visible; bouton desactive; pas de double envoi.',
  priorite: 'Haute',
  type: 'Robustesse',
});

addCase({
  domaine: 'UX',
  sousDomaine: 'Chargement',
  titre: 'Etat loading pendant edition',
  preRequis: 'Ecran edition ouvert.',
  etapes: 'Modifier un champ et sauvegarder.',
  attendu: 'Bouton loading actif, puis retour liste apres succes.',
  priorite: 'Moyenne',
  type: 'Robustesse',
});

// 2) Validations front desktop/mobile
addFormValidationCases('Desktop');
addFormValidationCases('Mobile');

addCase({
  domaine: 'Validation Front',
  sousDomaine: 'Selection prestataire',
  titre: 'Filtre prestataires: seuls les machinistes (sauf selection existante) sont visibles',
  preRequis: 'Prestataires de types differents disponibles en base.',
  etapes: 'Ouvrir le select prestataire dans le formulaire desktop.',
  attendu: 'La liste montre les machinistes; la valeur deja selectionnee reste visible.',
  priorite: 'Moyenne',
  type: 'Positif',
});

addCase({
  domaine: 'Validation Front',
  sousDomaine: 'Date',
  titre: 'Format date envoye au backend',
  preRequis: 'Formulaire creation pret.',
  etapes: 'Selectionner une date et soumettre; observer payload reseau.',
  attendu: 'Le champ date est envoye au format YYYY-MM-DD.',
  priorite: 'Haute',
  type: 'Robustesse',
  regle: 'formatDate().split(\"T\")[0]',
});

addCase({
  domaine: 'Validation Front',
  sousDomaine: 'Prix par defaut',
  titre: 'Prefill du prix par rouleau depuis parametre',
  preRequis: 'Parametre prix_rouleau_defaut configure > 0.',
  etapes: 'Ouvrir la creation packing.',
  attendu: 'Le champ prix_par_rouleau est pre-rempli avec la valeur par defaut.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'GET prix rouleau defaut',
});

// 3) Validation backend StorePackingRequest
[
  {
    titre: 'prestataire_id obligatoire',
    payload: 'prestataire_id absent',
    attendu: '422 + message "Le prestataire est obligatoire."',
    regle: 'prestataire_id.required',
  },
  {
    titre: 'prestataire_id entier',
    payload: 'prestataire_id = "abc"',
    attendu: '422 + message "Le prestataire est invalide."',
    regle: 'prestataire_id.integer',
  },
  {
    titre: 'prestataire_id existe dans usine courante',
    payload: 'prestataire_id d une autre usine',
    attendu: '422 + message "Le prestataire selectionne est introuvable."',
    regle: 'prestataire exists + scope usine',
  },
  {
    titre: 'date obligatoire',
    payload: 'date absente',
    attendu: '422 + message "La date est obligatoire."',
    regle: 'date.required',
  },
  {
    titre: 'date valide',
    payload: 'date = "31-31-2026"',
    attendu: '422 + message "La date est invalide."',
    regle: 'date.date',
  },
  {
    titre: 'nb_rouleaux obligatoire',
    payload: 'nb_rouleaux absent',
    attendu: '422 + message "Le nombre de rouleaux est obligatoire."',
    regle: 'nb_rouleaux.required',
  },
  {
    titre: 'nb_rouleaux entier',
    payload: 'nb_rouleaux = 2.5',
    attendu: '422 + message "Le nombre de rouleaux doit etre un entier."',
    regle: 'nb_rouleaux.integer',
  },
  {
    titre: 'nb_rouleaux >= 0',
    payload: 'nb_rouleaux = -1',
    attendu: '422 + message "Le nombre de rouleaux ne peut pas etre negatif."',
    regle: 'nb_rouleaux.min',
  },
  {
    titre: 'prix_par_rouleau entier',
    payload: 'prix_par_rouleau = "abc"',
    attendu: '422 + message "Le prix par rouleau doit etre un entier."',
    regle: 'prix_par_rouleau.integer',
  },
  {
    titre: 'prix_par_rouleau >= 0',
    payload: 'prix_par_rouleau = -100',
    attendu: '422 + message "Le prix par rouleau ne peut pas etre negatif."',
    regle: 'prix_par_rouleau.min',
  },
  {
    titre: 'statut enum valide',
    payload: 'statut = "pending"',
    attendu: '422 + message sur enum a_valider|valide|annule',
    regle: 'statut.enum',
  },
  {
    titre: 'facture_id entier',
    payload: 'facture_id = "xyz"',
    attendu: '422 + message "La facture est invalide."',
    regle: 'facture_id.integer',
  },
  {
    titre: 'facture_id existe dans usine courante',
    payload: 'facture_id autre usine',
    attendu: '422 + message "La facture fournie est introuvable."',
    regle: 'facture_id exists + scope usine',
  },
  {
    titre: 'notes doit etre une chaine',
    payload: 'notes = objet JSON',
    attendu: '422 + message "Les notes doivent etre une chaine de caracteres."',
    regle: 'notes.string',
  },
  {
    titre: 'montant interdit en entree',
    payload: 'montant force dans payload',
    attendu: '422 + message "Le montant est calcule automatiquement par le serveur."',
    regle: 'montant.prohibited',
  },
].forEach((tc) => {
  addCase({
    domaine: 'Validation API',
    sousDomaine: 'StorePackingRequest',
    titre: `API create - ${tc.titre}`,
    preRequis: 'Acces API create packing; token valide.',
    etapes: `Depuis le front (DevTools/Replay) ou Postman, envoyer un payload invalide: ${tc.payload}.`,
    attendu: tc.attendu,
    donnees: tc.payload,
    priorite: 'Critique',
    type: 'Negatif',
    regle: tc.regle,
  });
});

addCase({
  domaine: 'Validation API',
  sousDomaine: 'StorePackingRequest',
  titre: 'Prix par rouleau absent: fallback parametre automatique',
  preRequis: 'Parametre prix par defaut configure.',
  etapes: 'Soumettre sans prix_par_rouleau.',
  attendu: 'Creation acceptee avec prix_par_rouleau = parametre par defaut.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'prepareForValidation() -> Parametre::getPrixRouleauDefaut()',
});

// 4) Stock et regles metier
[
  {
    titre: 'Produit rouleau non configure',
    pre: 'Parametre produit rouleau absent.',
    etapes: 'Soumettre creation avec nb_rouleaux > 0.',
    attendu: "422 avec erreur nb_rouleaux: produit rouleau n est pas configure.",
    type: 'Negatif',
    prio: 'Critique',
    regle: 'withValidator -> getProduitRouleau()',
  },
  {
    titre: 'Stock insuffisant a la creation',
    pre: 'Stock rouleau = 20.',
    etapes: 'Soumettre creation avec nb_rouleaux = 25.',
    attendu: '422 avec message stock insuffisant et stock disponible.',
    type: 'Negatif',
    prio: 'Critique',
    regle: 'withValidator stock check',
  },
  {
    titre: 'Stock egal a la quantite demandee',
    pre: 'Stock rouleau = 50.',
    etapes: 'Creer packing avec nb_rouleaux = 50.',
    attendu: 'Creation autorisee; stock atteint 0 apres validation.',
    type: 'Positif',
    prio: 'Haute',
    regle: 'qte_stock >= nb_rouleaux',
  },
  {
    titre: 'Alerte stock in_stock',
    pre: 'Stock restant strictement > seuil low stock.',
    etapes: 'Creer un packing valide.',
    attendu: 'Reponse contient stock_alert.niveau = in_stock et message null.',
    type: 'Positif',
    prio: 'Moyenne',
    regle: 'stock_alert in_store',
  },
  {
    titre: 'Alerte stock low_stock',
    pre: 'Stock restant <= seuil et > 0 apres creation.',
    etapes: 'Creer un packing valide.',
    attendu: 'Reponse contient stock_alert.niveau = low_stock avec message explicite.',
    type: 'Positif',
    prio: 'Haute',
    regle: 'stock_alert low_stock',
  },
  {
    titre: 'Alerte stock out_of_stock',
    pre: 'Stock va tomber a 0 apres creation.',
    etapes: 'Creer un packing valide utilisant le stock restant.',
    attendu: 'Reponse contient stock_alert.niveau = out_of_stock et message de reapro.',
    type: 'Positif',
    prio: 'Haute',
    regle: 'stock_alert out_of_stock',
  },
].forEach((tc) =>
  addCase({
    domaine: 'Stock',
    sousDomaine: 'Controle produit rouleau',
    titre: tc.titre,
    preRequis: tc.pre,
    etapes: tc.etapes,
    attendu: tc.attendu,
    priorite: tc.prio,
    type: tc.type,
    regle: tc.regle,
  })
);

// 5) Workflow statut/facture
[
  {
    titre: 'Creation sans statut explicite (statut par defaut)',
    etapes: 'Creer packing depuis front sans envoyer le champ statut (scenario standard).',
    attendu: 'Packing final en statut valide; facture creee; message "cree, valide et facture generee".',
    regle: 'STATUT_DEFAUT=valide + validation immediate',
  },
  {
    titre: 'Creation avec statut a_valider',
    etapes: 'Soumettre payload avec statut=a_valider.',
    attendu: 'Packing cree a_valider sans facture immediate.',
    regle: 'doImmediateValidation=false',
  },
  {
    titre: 'Creation avec statut annule',
    etapes: 'Soumettre payload avec statut=annule.',
    attendu: 'Packing cree annule sans validation ni facture.',
    regle: 'enum annule autorise',
  },
  {
    titre: 'Validation d un packing annule interdite',
    etapes: 'Tenter de valider un packing en statut annule.',
    attendu: 'Erreur metier: un packing annule ne peut pas etre valide.',
    regle: 'Packing::valider guard annule',
  },
  {
    titre: 'Validation d un packing deja valide',
    etapes: 'Rejouer la validation sur un packing deja valide.',
    attendu: 'Aucune double facturation; retourne facture existante.',
    regle: 'Packing::valider idempotence',
  },
  {
    titre: 'Annulation d un packing valide avec compensation stock',
    etapes: 'Annuler packing valide.',
    attendu: 'Statut devient annule et stock rouleaux est restaure.',
    regle: 'annuler(compenserStock=true)',
  },
  {
    titre: 'Annulation d un packing deja annule',
    etapes: 'Relancer annulation sur meme packing.',
    attendu: 'Operation idempotente sans effet secondaire.',
    regle: 'annuler() early return',
  },
  {
    titre: 'Facture date basee sur date packing',
    etapes: 'Creer packing date J-3 en validation immediate.',
    attendu: 'Facture creee avec date = date packing (pas date systeme).',
    regle: 'factureDate = packing->date',
  },
  {
    titre: 'Reference packing auto-generee',
    etapes: 'Creer un packing puis observer reference.',
    attendu: 'Format PACK-YYYYMMDD-XXXX unique et incremente.',
    regle: 'generateReference()',
  },
  {
    titre: 'Montant calcule serveur',
    etapes: 'Creer packing nb=7 prix=33000.',
    attendu: 'Montant persiste a 231000, independant d un montant fourni client.',
    regle: 'prepareForPersistence + calculerMontant()',
  },
].forEach((tc) =>
  addCase({
    domaine: 'Workflow metier',
    sousDomaine: 'Statut et Facture',
    titre: tc.titre,
    preRequis: 'Donnees de test disponibles (prestataire + stock + droits).',
    etapes: tc.etapes,
    attendu: tc.attendu,
    priorite: 'Critique',
    type: tc.titre.includes('interdite') ? 'Negatif' : 'Positif',
    regle: tc.regle,
  })
);

// 6) Liste, recherche, filtres
[
  'Recherche par reference',
  'Recherche par nom prestataire',
  'Recherche par prenom prestataire',
  'Recherche par telephone prestataire',
  'Recherche par statut label',
].forEach((label) =>
  addCase({
    domaine: 'Liste packing',
    sousDomaine: 'Recherche',
    titre: `Champ recherche - ${label}`,
    preRequis: 'Jeu de donnees varie sur plusieurs packings.',
    etapes: `Saisir une valeur correspondant a: ${label}.`,
    attendu: 'La liste est filtree uniquement sur les lignes correspondantes.',
    priorite: 'Moyenne',
    type: 'Positif',
  })
);

[
  { statut: 'all', attendu: 'tous les statuts visibles' },
  { statut: 'a_valider', attendu: 'uniquement les packings a valider' },
  { statut: 'valide', attendu: 'uniquement les packings valides' },
  { statut: 'annule', attendu: 'uniquement les packings annules' },
].forEach((s) =>
  addCase({
    domaine: 'Liste packing',
    sousDomaine: 'Filtre statut',
    titre: `Filtre statut = ${s.statut}`,
    preRequis: 'Au moins un packing par statut.',
    etapes: `Appliquer le filtre ${s.statut} depuis desktop puis mobile.`,
    attendu: s.attendu,
    priorite: 'Haute',
    type: 'Positif',
    regle: 'Query param statut',
  })
);

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Filtre periode',
  titre: 'Filtre date - plage complete',
  preRequis: 'Packings sur plusieurs dates.',
  etapes: 'Selectionner date_debut et date_fin puis appliquer.',
  attendu: 'Seuls les packings inclus dans la plage sont retournes.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'Query params date_debut/date_fin',
});

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Filtre periode',
  titre: 'Selection de la 1ere date uniquement',
  preRequis: 'Liste ouverte.',
  etapes: 'Selectionner seulement date_debut dans le range picker.',
  attendu: 'Pas de refresh API tant que date_fin non choisie.',
  priorite: 'Moyenne',
  type: 'Robustesse',
});

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Filtres',
  titre: 'Effacer les filtres',
  preRequis: 'Un filtre statut et/ou periode est actif.',
  etapes: 'Cliquer sur Effacer les filtres.',
  attendu: 'Retour a statut=all, periode vide, et rechargement complet.',
  priorite: 'Moyenne',
  type: 'Positif',
});

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Pagination',
  titre: 'Pagination desktop 10/25/50',
  preRequis: 'Plus de 50 packings de test.',
  etapes: 'Changer taille de page puis naviguer entre pages.',
  attendu: 'Le nombre de lignes correspond a la taille choisie.',
  priorite: 'Moyenne',
  type: 'Positif',
});

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Suppression',
  titre: 'Suppression packing avec confirmation',
  preRequis: 'Droit packings.delete + packing supprimable.',
  etapes: 'Cliquer supprimer puis confirmer dans le dialog.',
  attendu: 'Packing retire de la liste et toast succes.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'DELETE /packings/{id}',
});

addCase({
  domaine: 'Liste packing',
  sousDomaine: 'Suppression',
  titre: 'Suppression annulee depuis le dialog',
  preRequis: 'Dialog de suppression affiche.',
  etapes: 'Cliquer Annuler dans la confirmation.',
  attendu: 'Aucune suppression executee.',
  priorite: 'Moyenne',
  type: 'Negatif',
});

// 7) Permissions et securite
[
  {
    perm: 'packings.create',
    attendu: 'Sans permission, bouton Nouveau packing absent (desktop + FAB mobile).',
  },
  {
    perm: 'packings.update',
    attendu: 'Sans permission, action Modifier absente.',
  },
  {
    perm: 'packings.delete',
    attendu: 'Sans permission, action Supprimer absente.',
  },
].forEach((p) =>
  addCase({
    domaine: 'Permissions',
    sousDomaine: 'Liste packing',
    titre: `Visibilite actions selon permission ${p.perm}`,
    preRequis: 'Tester avec 2 profils: avec et sans permission.',
    etapes: `Ouvrir la liste packing avec un compte sans ${p.perm}.`,
    attendu: p.attendu,
    priorite: 'Haute',
    type: 'Securite',
    regle: `AuthService.hasPermission(${p.perm})`,
  })
);

addCase({
  domaine: 'Securite',
  sousDomaine: 'Cross-usine',
  titre: 'Tentative creation avec prestataire d une autre usine',
  preRequis: 'Connaissance d un prestataire externe a l usine courante.',
  etapes: 'Modifier le payload (DevTools) pour injecter un prestataire_id hors usine.',
  attendu: '422, creation refusee.',
  priorite: 'Critique',
  type: 'Securite',
  regle: 'Rule::exists prestataires where usine_id',
});

addCase({
  domaine: 'Securite',
  sousDomaine: 'Integrite payload',
  titre: 'Tentative forcer montant different du calcul',
  preRequis: 'Creation packing via front.',
  etapes: 'Intercepter requete et ajouter un montant incoherent (ex: 1 GNF).',
  attendu: 'Requete rejetee (champ montant prohibited).',
  priorite: 'Critique',
  type: 'Securite',
  regle: 'montant.prohibited',
});

addCase({
  domaine: 'Securite',
  sousDomaine: 'Gestion erreurs',
  titre: 'Structure d erreur validation 422',
  preRequis: 'Provoquer une erreur de validation.',
  etapes: 'Soumettre un payload invalide puis inspecter la reponse.',
  attendu: 'JSON contient success=false, message global et objet errors par champ.',
  priorite: 'Haute',
  type: 'Robustesse',
  regle: 'failedValidation()',
});

// 8) Comptabilite / facturation / paiement
addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Liste prestataires',
  titre: 'Ouverture page comptabilite packing',
  preRequis: 'Donnees factures packing disponibles.',
  etapes: 'Naviguer vers comptabilite packing liste.',
  attendu: 'Tableau/carte prestataires charge avec totaux.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'GET /facture-packings/comptabilite',
});

[
  { statut: 'impaye', label: 'Impaye' },
  { statut: 'partiel', label: 'Partiel' },
  { statut: 'solde', label: 'Solde' },
].forEach((s) =>
  addCase({
    domaine: 'Comptabilite',
    sousDomaine: 'Filtres statut',
    titre: `Filtre comptabilite statut ${s.label}`,
    preRequis: `Au moins un prestataire ${s.label}.`,
    etapes: `Appliquer filtre ${s.label} sur desktop et menu mobile.`,
    attendu: `Seuls les prestataires ${s.label} restent visibles.`,
    priorite: 'Moyenne',
    type: 'Positif',
  })
);

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Detail prestataire',
  titre: 'Ouverture detail factures d un prestataire',
  preRequis: 'Depuis liste comptabilite, un prestataire existe.',
  etapes: 'Cliquer sur une ligne/carte prestataire.',
  attendu: 'Navigation vers detail avec factures, totaux et actions.',
  priorite: 'Haute',
  type: 'Positif',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Paiement facture',
  titre: 'Ouverture slideover paiement',
  preRequis: 'Facture non payee + permission versements.create.',
  etapes: 'Cliquer action Payer sur une facture.',
  attendu: 'Panneau paiement ouvert avec montant restant pre-rempli.',
  priorite: 'Haute',
  type: 'Positif',
});

[
  {
    titre: 'Paiement total du restant',
    montant: 'montant = montant_restant',
    attendu: 'Versement cree, facture passe payee, restant = 0.',
  },
  {
    titre: 'Paiement partiel',
    montant: 'montant < montant_restant',
    attendu: 'Versement cree, facture passe partielle, restant diminue.',
  },
  {
    titre: 'Montant nul refuse',
    montant: 'montant = 0',
    attendu: 'Bouton confirmer desactive ou sauvegarde refusee.',
  },
  {
    titre: 'Montant negatif refuse',
    montant: 'montant < 0',
    attendu: 'Saisie bloquee par min=1; aucune creation versement.',
  },
  {
    titre: 'Montant depassant le restant',
    montant: 'montant > montant_restant',
    attendu: 'Saisie bloquee par max ou rejet backend.',
  },
].forEach((tc) =>
  addCase({
    domaine: 'Comptabilite',
    sousDomaine: 'Paiement facture',
    titre: tc.titre,
    preRequis: 'Facture en cours (impayee/partielle).',
    etapes: `Ouvrir paiement puis tester scenario ${tc.montant}.`,
    attendu: tc.attendu,
    priorite: 'Critique',
    type: tc.titre.includes('refuse') || tc.titre.includes('depassant') ? 'Negatif' : 'Positif',
    regle: 'POST /facture-packings/{id}/versements',
  })
);

['especes', 'virement', 'mobile_money'].forEach((mode) =>
  addCase({
    domaine: 'Comptabilite',
    sousDomaine: 'Mode paiement',
    titre: `Versement avec mode ${mode}`,
    preRequis: 'Facture non soldee.',
    etapes: `Choisir mode ${mode}, saisir montant valide, confirmer.`,
    attendu: 'Versement cree avec le mode selectionne et visible en historique.',
    priorite: 'Moyenne',
    type: 'Positif',
    regle: 'mode_paiement enum',
  })
);

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Historique versements',
  titre: 'Consultation historique des versements',
  preRequis: 'Facture avec au moins un versement.',
  etapes: 'Cliquer sur action Historique.',
  attendu: 'Liste des versements affiche date, montant, mode et notes.',
  priorite: 'Moyenne',
  type: 'Positif',
  regle: 'GET /facture-packings/{id}/versements',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Historique versements',
  titre: 'Suppression versement depuis historique',
  preRequis: 'Permission versements.delete + versement existant.',
  etapes: 'Cliquer supprimer versement puis confirmer.',
  attendu: 'Versement supprime, historique rafraichi, totaux facture mis a jour.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'DELETE /facture-packings/{id}/versements/{versement_id}',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Suppression facture',
  titre: 'Suppression facture autorisee si montant_verse = 0',
  preRequis: 'Permission facture-packings.delete + facture sans versement.',
  etapes: 'Cliquer supprimer facture puis confirmer.',
  attendu: 'Facture supprimee et liste rechargee.',
  priorite: 'Haute',
  type: 'Positif',
  regle: 'DELETE /facture-packings/{id}',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Suppression facture',
  titre: 'Action supprimer masquee si montant_verse > 0',
  preRequis: 'Facture ayant deja un versement.',
  etapes: 'Observer la colonne actions sur la facture.',
  attendu: 'Le bouton supprimer facture nest pas disponible.',
  priorite: 'Haute',
  type: 'Securite',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Permissions',
  titre: 'Sans versements.create, action Payer masquee',
  preRequis: 'Compte sans permission versements.create.',
  etapes: 'Ouvrir detail comptabilite packing.',
  attendu: 'Aucun bouton Payer affiche.',
  priorite: 'Haute',
  type: 'Securite',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Permissions',
  titre: 'Sans versements.read, action Historique masquee',
  preRequis: 'Compte sans permission versements.read.',
  etapes: 'Ouvrir detail comptabilite packing.',
  attendu: 'Aucun bouton Historique affiche.',
  priorite: 'Moyenne',
  type: 'Securite',
});

addCase({
  domaine: 'Comptabilite',
  sousDomaine: 'Permissions',
  titre: 'Sans versements.delete, suppression versement indisponible',
  preRequis: 'Compte sans permission versements.delete.',
  etapes: 'Ouvrir historique versements.',
  attendu: 'Action supprimer absente dans l historique.',
  priorite: 'Moyenne',
  type: 'Securite',
});

// 9) Mobile / responsive / accessibilite / robustesse
[
  'Liste packing mobile: scroll fluide avec cartes',
  'Bouton FAB nouveau packing visible seulement si canCreate',
  'Menu filtre mobile par statut fonctionne',
  'Detail comptabilite mobile: slideover paiement plein ecran',
  'Detail comptabilite mobile: slideover historique plein ecran',
  'Fermeture slideover via bouton close',
  'Fermeture slideover via clic overlay',
].forEach((titre) =>
  addCase({
    domaine: 'Mobile',
    sousDomaine: 'Responsive',
    titre,
    preRequis: 'Executer sur viewport <= 768px.',
    etapes: `Reproduire le scenario: ${titre}.`,
    attendu: 'Comportement conforme sans debordement ni blocage interaction.',
    priorite: 'Moyenne',
    type: 'UX',
  })
);

[
  'Toast succes apres creation',
  'Toast erreur lors echec creation',
  'Toast succes apres suppression packing',
  'Toast erreur lors echec chargement liste',
  'Toast succes apres versement',
  'Toast erreur lors echec versement',
].forEach((titre) =>
  addCase({
    domaine: 'Messages',
    sousDomaine: 'Feedback utilisateur',
    titre,
    preRequis: 'Scenario correspondant prepare.',
    etapes: `Executer le scenario ${titre}.`,
    attendu: 'Toast affiche avec severite et message pertinents.',
    priorite: 'Moyenne',
    type: 'UX',
  })
);

addCase({
  domaine: 'Robustesse',
  sousDomaine: 'Rafraichissement',
  titre: 'Refresh navigateur sur page edition packing',
  preRequis: 'URL edition /packings/packings-edit/{id} valide.',
  etapes: 'Rafraichir la page (F5).',
  attendu: 'Donnees se rechargent correctement sans redirection anormale.',
  priorite: 'Moyenne',
  type: 'Robustesse',
});

addCase({
  domaine: 'Robustesse',
  sousDomaine: 'Rafraichissement',
  titre: 'Refresh sur detail comptabilite prestataire',
  preRequis: 'URL detail comptabilite ouverte.',
  etapes: 'Rafraichir la page.',
  attendu: 'Factures et totaux restent coherents apres reload.',
  priorite: 'Moyenne',
  type: 'Robustesse',
});

addCase({
  domaine: 'Performance',
  sousDomaine: 'Liste packing',
  titre: 'Recherche temps reel sur volume eleve',
  preRequis: 'Jeu > 500 packings.',
  etapes: 'Saisir rapidement plusieurs termes dans recherche.',
  attendu: 'Filtrage reactif sans gel UI notable.',
  priorite: 'Basse',
  type: 'Performance',
});

addCase({
  domaine: 'Performance',
  sousDomaine: 'Comptabilite',
  titre: 'Ouverture detail prestataire avec historique volumineux',
  preRequis: 'Prestataire avec nombreuses factures et versements.',
  etapes: 'Ouvrir detail puis historique.',
  attendu: 'Temps de chargement acceptable et UI stable.',
  priorite: 'Basse',
  type: 'Performance',
});

[
  { statut: 'a_valider', label: 'A valider' },
  { statut: 'valide', label: 'Valide' },
  { statut: 'annule', label: 'Annule' },
].forEach((s) => {
  addCase({
    domaine: 'Liste packing',
    sousDomaine: 'Affichage statut',
    titre: `Tag statut ${s.label} (couleur + libelle)`,
    preRequis: `Au moins un packing en statut ${s.statut}.`,
    etapes: 'Afficher la ligne en desktop et carte mobile.',
    attendu: 'Le libelle et la severite visuelle correspondent au statut.',
    priorite: 'Moyenne',
    type: 'UX',
    regle: 'PACKING_STATUT_LABELS + PACKING_STATUT_SEVERITY',
  });
});

function buildWorkbook() {
  const wsCases = XLSX.utils.json_to_sheet(cases, { header: headers });

  wsCases['!cols'] = [
    { wch: 10 },
    { wch: 18 },
    { wch: 24 },
    { wch: 44 },
    { wch: 40 },
    { wch: 56 },
    { wch: 52 },
    { wch: 28 },
    { wch: 10 },
    { wch: 12 },
    { wch: 12 },
    { wch: 35 },
    { wch: 16 },
    { wch: 14 },
    { wch: 14 },
    { wch: 16 },
    { wch: 34 },
    { wch: 8 },
  ];

  wsCases['!autofilter'] = {
    ref: `A1:R${cases.length + 1}`,
  };

  const todayIso = new Date().toISOString().slice(0, 10);
  const wsSynthese = XLSX.utils.aoa_to_sheet([
    ['Cahier de Recette Packing - Synthese'],
    ['Date de generation', todayIso],
    [],
    ['Indicateur', 'Valeur'],
    ['Total cas'],
    ['Cas executes (OK + KO)'],
    ['Cas OK'],
    ['Cas KO'],
    ['Cas BLOQUE'],
    ['Cas NON TESTE'],
    [],
    ['% OK (sur executes)'],
    ['% KO (sur executes)'],
    ['% Couverture execution'],
    [],
    ['Score pondere total'],
    ['Score pondere OK'],
    ['Score pondere KO'],
    ['% OK pondere (sur total)'],
    ['% KO pondere (sur total)'],
    [],
    ['Domaine', 'Total', 'OK', 'KO', 'BLOQUE', 'NON TESTE', '% OK execute'],
  ]);

  wsSynthese.B5 = { f: 'COUNTA(Cas_de_recette!A2:A5000)' };
  wsSynthese.B6 = {
    f: 'COUNTIF(Cas_de_recette!J2:J5000,"OK")+COUNTIF(Cas_de_recette!J2:J5000,"KO")',
  };
  wsSynthese.B7 = { f: 'COUNTIF(Cas_de_recette!J2:J5000,"OK")' };
  wsSynthese.B8 = { f: 'COUNTIF(Cas_de_recette!J2:J5000,"KO")' };
  wsSynthese.B9 = { f: 'COUNTIF(Cas_de_recette!J2:J5000,"BLOQUE")' };
  wsSynthese.B10 = { f: 'COUNTIF(Cas_de_recette!J2:J5000,"NON TESTE")' };
  wsSynthese.B12 = { f: 'IF(B6=0,0,B7/B6)', z: '0.00%' };
  wsSynthese.B13 = { f: 'IF(B6=0,0,B8/B6)', z: '0.00%' };
  wsSynthese.B14 = { f: 'IF(B5=0,0,B6/B5)', z: '0.00%' };
  wsSynthese.B16 = { f: 'SUM(Cas_de_recette!R2:R5000)' };
  wsSynthese.B17 = { f: 'SUMIFS(Cas_de_recette!R2:R5000,Cas_de_recette!J2:J5000,"OK")' };
  wsSynthese.B18 = { f: 'SUMIFS(Cas_de_recette!R2:R5000,Cas_de_recette!J2:J5000,"KO")' };
  wsSynthese.B19 = { f: 'IF(B16=0,0,B17/B16)', z: '0.00%' };
  wsSynthese.B20 = { f: 'IF(B16=0,0,B18/B16)', z: '0.00%' };

  const domainList = [
    'Navigation',
    'UX',
    'Creation/Edition',
    'Validation Front',
    'Validation API',
    'Stock',
    'Workflow metier',
    'Liste packing',
    'Permissions',
    'Securite',
    'Comptabilite',
    'Mobile',
    'Messages',
    'Robustesse',
    'Performance',
  ];

  const domainStartRow = 24;
  domainList.forEach((d, i) => {
    const r = domainStartRow + i;
    wsSynthese[`A${r}`] = { t: 's', v: d };
    wsSynthese[`B${r}`] = { f: `COUNTIF(Cas_de_recette!B2:B5000,"${d}")` };
    wsSynthese[`C${r}`] = { f: `COUNTIFS(Cas_de_recette!B2:B5000,"${d}",Cas_de_recette!J2:J5000,"OK")` };
    wsSynthese[`D${r}`] = { f: `COUNTIFS(Cas_de_recette!B2:B5000,"${d}",Cas_de_recette!J2:J5000,"KO")` };
    wsSynthese[`E${r}`] = { f: `COUNTIFS(Cas_de_recette!B2:B5000,"${d}",Cas_de_recette!J2:J5000,"BLOQUE")` };
    wsSynthese[`F${r}`] = { f: `COUNTIFS(Cas_de_recette!B2:B5000,"${d}",Cas_de_recette!J2:J5000,"NON TESTE")` };
    wsSynthese[`G${r}`] = {
      f: `IF((C${r}+D${r})=0,0,C${r}/(C${r}+D${r}))`,
      z: '0.00%',
    };
  });

  wsSynthese['!cols'] = [
    { wch: 34 },
    { wch: 16 },
    { wch: 10 },
    { wch: 10 },
    { wch: 10 },
    { wch: 12 },
    { wch: 14 },
  ];

  const wsParams = XLSX.utils.aoa_to_sheet([
    ['Mode d emploi'],
    [
      'Renseigner la colonne "statut_exec" avec: OK, KO, BLOQUE ou NON TESTE. Les pourcentages dans la feuille Synthese se recalculent automatiquement.',
    ],
    [],
    ['Valeurs autorisees - statut_exec'],
    ['OK'],
    ['KO'],
    ['BLOQUE'],
    ['NON TESTE'],
    [],
    ['Priorites et poids'],
    ['Priorite', 'Poids'],
    ['Critique', 5],
    ['Haute', 4],
    ['Moyenne', 3],
    ['Basse', 2],
    [],
    ['Rappel metier packing'],
    ['Montant = nb_rouleaux * prix_par_rouleau'],
    ['Statuts: a_valider, valide, annule'],
    ['Stock insuffisant => creation refusee'],
    ['Champ montant interdit en entree API'],
  ]);
  wsParams['!cols'] = [{ wch: 90 }, { wch: 16 }];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, wsCases, 'Cas_de_recette');
  XLSX.utils.book_append_sheet(wb, wsSynthese, 'Synthese');
  XLSX.utils.book_append_sheet(wb, wsParams, 'Parametres');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  XLSX.writeFile(wb, OUTPUT_FILE);

  console.log(`Fichier genere: ${OUTPUT_FILE}`);
  console.log(`Nombre de cas: ${cases.length}`);
}

buildWorkbook();
