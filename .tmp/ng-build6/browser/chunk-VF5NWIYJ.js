// src/app/models/vente.model.ts
var STATUT_FACTURE_LABELS = {
  impayee: "Impay\xE9e",
  partiel: "Partielle",
  payee: "Pay\xE9e",
  annulee: "Annul\xE9e"
};
var STATUT_FACTURE_SEVERITY = {
  impayee: "danger",
  partiel: "warn",
  payee: "success",
  annulee: "secondary"
};
var MODE_PAIEMENT_OPTIONS = [
  { label: "Esp\xE8ces", value: "especes" },
  { label: "Mobile Money", value: "mobile_money" },
  { label: "Virement", value: "virement" },
  { label: "Ch\xE8que", value: "cheque" }
];
var STATUT_COMMISSION_LABELS = {
  en_attente: "En attente",
  eligible: "\xC9ligible",
  partiellement_versee: "Partiellement vers\xE9e",
  versee: "Vers\xE9e",
  annulee: "Annul\xE9e"
};
var STATUT_COMMISSION_SEVERITY = {
  en_attente: "warn",
  eligible: "info",
  partiellement_versee: "secondary",
  versee: "success",
  annulee: "danger"
};
var STATUT_VERSEMENT_LABELS = {
  en_attente: "En attente",
  effectue: "Effectu\xE9",
  annule: "Annul\xE9"
};
var STATUT_VERSEMENT_SEVERITY = {
  en_attente: "warn",
  effectue: "success",
  annule: "danger"
};

export {
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY,
  MODE_PAIEMENT_OPTIONS,
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
  STATUT_VERSEMENT_LABELS,
  STATUT_VERSEMENT_SEVERITY
};
//# sourceMappingURL=chunk-VF5NWIYJ.js.map
