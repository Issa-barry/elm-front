import {
  StyleClassModule
} from "./chunk-QIVDWNGU.js";
import {
  ToggleSwitchModule
} from "./chunk-LW2YGCJ5.js";
import {
  RatingModule
} from "./chunk-YG2LKA2M.js";
import {
  ProductService
} from "./chunk-HDCRFM5C.js";
import {
  MoneyPipe
} from "./chunk-W7IE5BS4.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-GZ7D5YLH.js";
import {
  TextareaModule
} from "./chunk-4UOI4QYW.js";
import {
  PhoneFormatPipe
} from "./chunk-I52ZMC4J.js";
import {
  Menu,
  MenuModule
} from "./chunk-HBQ7KAGJ.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-G5PVWGBM.js";
import {
  Dialog,
  DialogModule
} from "./chunk-A2LLWIIX.js";
import {
  Toast,
  ToastModule
} from "./chunk-MIKKBFN3.js";
import "./chunk-IAPVHBD4.js";
import {
  authorizationGuard
} from "./chunk-YMUHY675.js";
import {
  AuthService,
  environment
} from "./chunk-66GARPBB.js";
import "./chunk-RTHJZPEL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import {
  Select,
  SelectModule
} from "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import {
  TagModule
} from "./chunk-V7LXRUI7.js";
import "./chunk-5KB4S2LF.js";
import "./chunk-TRKKYFQF.js";
import "./chunk-5ATNZ2IU.js";
import "./chunk-CJAMEXZR.js";
import "./chunk-CF4ML4KQ.js";
import "./chunk-46OYJGUM.js";
import "./chunk-TITTMCJA.js";
import "./chunk-TEXAILZL.js";
import {
  RadioButtonModule
} from "./chunk-2UZZQ3O5.js";
import "./chunk-YUZALO6D.js";
import "./chunk-YWX4RJZN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VJUJTGB6.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-3ISV5J4X.js";
import "./chunk-SJAYAKU2.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  Button,
  ButtonDirective,
  ButtonIcon,
  ButtonLabel,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  Output,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/models/facture-packing.model.ts
var MODE_PAIEMENT_LABELS = {
  especes: "Esp\xE8ces",
  virement: "Virement bancaire",
  cheque: "Ch\xE8que",
  mobile_money: "Mobile Money"
};
var FACTURE_PACKING_STATUT_LABELS = {
  impayee: "Impay\xE9e",
  partielle: "Partiellement pay\xE9e",
  payee: "Pay\xE9e",
  annulee: "Annul\xE9e"
};
var FACTURE_PACKING_STATUT_SEVERITY = {
  impayee: "danger",
  partielle: "warn",
  payee: "success",
  annulee: "secondary"
};
var FacturePacking = class {
  id;
  reference;
  prestataire_id;
  date;
  montant_total;
  nb_packings;
  date_paiement;
  mode_paiement;
  statut;
  notes;
  created_by;
  validated_by;
  created_at;
  updated_at;
  deleted_at;
  // Appended attributes
  statut_label;
  prestataire_nom;
  montant_verse;
  montant_restant;
  mode_paiement_label;
  total_rouleaux;
  prix_par_rouleau;
  // Relations
  prestataire;
  packings;
  versements;
  creator;
  constructor(data = {}) {
    this.id = data.id ?? 0;
    this.reference = data.reference ?? "";
    this.prestataire_id = data.prestataire_id ?? 0;
    this.date = data.date ?? "";
    this.montant_total = data.montant_total ?? 0;
    this.nb_packings = data.nb_packings ?? 0;
    this.date_paiement = data.date_paiement ?? null;
    this.mode_paiement = data.mode_paiement ?? null;
    this.statut = data.statut ?? "impayee";
    this.notes = data.notes ?? null;
    this.created_by = data.created_by ?? null;
    this.validated_by = data.validated_by ?? null;
    this.created_at = data.created_at ?? "";
    this.updated_at = data.updated_at ?? "";
    this.deleted_at = data.deleted_at ?? null;
    this.statut_label = data.statut_label ?? FACTURE_PACKING_STATUT_LABELS[this.statut] ?? "";
    this.prestataire_nom = data.prestataire_nom ?? null;
    this.montant_verse = data.montant_verse ?? 0;
    this.montant_restant = data.montant_restant ?? 0;
    this.mode_paiement_label = data.mode_paiement_label ?? "";
    this.total_rouleaux = data.total_rouleaux ?? 0;
    this.prix_par_rouleau = data.prix_par_rouleau ?? 0;
    this.prestataire = data.prestataire;
    this.packings = data.packings;
    this.versements = data.versements;
    this.creator = data.creator;
  }
};
var ComptabilitePrestataire = class {
  prestataire_id;
  prestataire_nom;
  prestataire_phone;
  prestataire_type;
  // Packings non encore facturés
  nb_packings_non_factures;
  montant_non_facture;
  // Factures en cours (facturées mais pas soldées)
  nb_factures_en_cours;
  montant_facture;
  montant_verse;
  montant_restant_facture;
  // Total dû (non facturé + restant sur factures)
  montant_total_du;
  // Dernière date d'activité
  derniere_date;
  // Statut calculé
  statut;
  constructor(data = {}) {
    this.prestataire_id = data.prestataire_id ?? 0;
    this.prestataire_nom = data.prestataire_nom ?? "";
    this.prestataire_phone = data.prestataire_phone ?? "";
    this.prestataire_type = data.prestataire_type ?? "";
    this.nb_packings_non_factures = data.nb_packings_non_factures ?? 0;
    this.montant_non_facture = data.montant_non_facture ?? 0;
    this.nb_factures_en_cours = data.nb_factures_en_cours ?? 0;
    this.montant_facture = data.montant_facture ?? 0;
    this.montant_verse = data.montant_verse ?? 0;
    this.montant_restant_facture = data.montant_restant_facture ?? 0;
    this.montant_total_du = data.montant_total_du ?? 0;
    this.derniere_date = data.derniere_date ?? null;
    this.statut = this.montant_total_du === 0 ? "solde" : this.montant_verse > 0 ? "partiel" : "impaye";
  }
};
var ComptabiliteSummary = class {
  date_debut;
  date_fin;
  nb_prestataires;
  // Totaux non facturés
  total_non_facture;
  // Totaux facturés
  total_facture;
  total_verse;
  total_restant_facture;
  // Total global dû
  montant_global_du;
  // Total global (facturé + non facturé)
  montant_total;
  prestataires;
  constructor(data = {}) {
    this.date_debut = data.date_debut ?? null;
    this.date_fin = data.date_fin ?? null;
    this.nb_prestataires = data.nb_prestataires ?? 0;
    this.total_non_facture = data.total_non_facture ?? 0;
    this.total_facture = data.total_facture ?? 0;
    this.total_verse = data.total_verse ?? 0;
    this.total_restant_facture = data.total_restant_facture ?? 0;
    this.montant_global_du = data.montant_global_du ?? 0;
    this.montant_total = this.total_facture + this.total_non_facture;
    this.prestataires = (data.prestataires ?? []).map((p) => new ComptabilitePrestataire(p));
  }
};
var PreviewFacturePacking = class {
  prestataire_id;
  date_debut;
  date_fin;
  nb_packings;
  montant_total;
  total_rouleaux;
  packings;
  constructor(data = {}) {
    this.prestataire_id = data.prestataire_id ?? 0;
    this.date_debut = data.date_debut ?? "";
    this.date_fin = data.date_fin ?? "";
    this.nb_packings = data.nb_packings ?? 0;
    this.montant_total = data.montant_total ?? 0;
    this.total_rouleaux = data.total_rouleaux ?? 0;
    this.packings = data.packings ?? [];
  }
};

// src/app/services/comptabilite/facture-paiement/facture-paiement.service.ts
var FacturePaiementService = class _FacturePaiementService {
  http;
  apiUrl = `${environment.apiUrl}/facture-packings`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Liste des factures avec filtres optionnels
   */
  getFactures(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.prestataire_id) {
        params = params.set("prestataire_id", filters.prestataire_id.toString());
      }
      if (filters.date_debut) {
        params = params.set("date_debut", filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set("date_fin", filters.date_fin);
      }
      if (filters.statut) {
        params = params.set("statut", filters.statut);
      }
      if (filters.soldee !== void 0) {
        params = params.set("soldee", filters.soldee.toString());
      }
      if (filters.search) {
        params = params.set("search", filters.search);
      }
      if (filters.sort_by) {
        params = params.set("sort_by", filters.sort_by);
      }
      if (filters.sort_order) {
        params = params.set("sort_order", filters.sort_order);
      }
      if (filters.per_page) {
        params = params.set("per_page", filters.per_page.toString());
      }
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Détail d'une facture
   */
  getFacture(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Prévisualisation avant facturation
   */
  getPreview(prestataireId, dateDebut, dateFin) {
    const params = new HttpParams().set("prestataire_id", prestataireId.toString()).set("date_debut", dateDebut).set("date_fin", dateFin);
    return this.http.get(`${this.apiUrl}/preview`, { params });
  }
  /**
   * Comptabilité - récapitulatif par prestataire
   */
  getComptabilite(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.date_debut) {
        params = params.set("date_debut", filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set("date_fin", filters.date_fin);
      }
      if (filters.prestataire_id) {
        params = params.set("prestataire_id", filters.prestataire_id.toString());
      }
    }
    return this.http.get(`${this.apiUrl}/comptabilite`, { params });
  }
  /**
   * Créer une facture
   */
  createFacture(data) {
    return this.http.post(this.apiUrl, data);
  }
  /**
   * Supprimer une facture
   */
  deleteFacture(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // ========================= Versements =========================
  /**
   * Liste des versements d'une facture
   */
  getVersements(factureId) {
    return this.http.get(`${this.apiUrl}/${factureId}/versements`);
  }
  /**
   * Créer un versement
   */
  createVersement(factureId, data) {
    return this.http.post(`${this.apiUrl}/${factureId}/versements`, data);
  }
  /**
   * Supprimer un versement
   */
  deleteVersement(factureId, versementId) {
    return this.http.delete(`${this.apiUrl}/${factureId}/versements/${versementId}`);
  }
  static \u0275fac = function FacturePaiementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FacturePaiementService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FacturePaiementService, factory: _FacturePaiementService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacturePaiementService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/comptabilite/components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget.ts
var StatsComptabilitePackingWidget = class _StatsComptabilitePackingWidget {
  paiementService;
  summary = null;
  constructor(paiementService) {
    this.paiementService = paiementService;
  }
  ngOnInit() {
    this.loadStats();
  }
  loadStats(filters) {
    this.paiementService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.summary = new ComptabiliteSummary(response.data);
      }
    });
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  static \u0275fac = function StatsComptabilitePackingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsComptabilitePackingWidget)(\u0275\u0275directiveInject(FacturePaiementService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsComptabilitePackingWidget, selectors: [["app-stats-comptabilite-packing-widget"]], hostVars: 2, hostBindings: function StatsComptabilitePackingWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, decls: 40, vars: 13, consts: [[1, "col-span-12"], [1, "stats-bar"], [1, "stats-bar__item"], [1, "stats-bar__icon"], [1, "pi", "pi-wallet"], [1, "stats-bar__value"], [1, "stats-bar__label"], [1, "stats-bar__divider"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-arrow-right"], [1, "pi", "pi-users"]], template: function StatsComptabilitePackingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275domElement(4, "i", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div")(6, "div", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "money");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 6);
      \u0275\u0275text(10, "Montant total");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(11, "div", 7);
      \u0275\u0275domElementStart(12, "div", 2)(13, "div", 3);
      \u0275\u0275domElement(14, "i", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "div")(16, "div", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "money");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "div", 6);
      \u0275\u0275text(20, "Total pay\xE9");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(21, "div", 7);
      \u0275\u0275domElementStart(22, "div", 2)(23, "div", 3);
      \u0275\u0275domElement(24, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div")(26, "div", 5);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "money");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 6);
      \u0275\u0275text(30, "Reste \xE0 payer");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElement(31, "div", 7);
      \u0275\u0275domElementStart(32, "div", 2)(33, "div", 3);
      \u0275\u0275domElement(34, "i", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "div")(36, "div", 5);
      \u0275\u0275text(37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(38, "div", 6);
      \u0275\u0275text(39, "Prestataires");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.summary ? \u0275\u0275pipeBind2(8, 4, ctx.summary.montant_total, "GNF") : "--");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.summary ? \u0275\u0275pipeBind2(18, 7, ctx.summary.total_verse, "GNF") : "--");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.summary ? \u0275\u0275pipeBind2(28, 10, ctx.summary.montant_global_du, "GNF") : "--");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.summary ? ctx.summary.nb_prestataires : "--");
    }
  }, dependencies: [CommonModule, MoneyPipe], styles: ["\n\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  gap: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stats-bar__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1.5rem;\n}\n.stats-bar__divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.stats-bar__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.stats-bar__value[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.stats-bar__label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n@media (max-width: 768px) {\n  .stats-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.35rem;\n    padding: 0.75rem;\n    border-radius: 16px;\n    box-shadow: none;\n  }\n  .stats-bar__item[_ngcontent-%COMP%] {\n    padding: 0.65rem 0.5rem;\n    width: 100%;\n    gap: 0.75rem;\n  }\n  .stats-bar__divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n  .stats-bar__icon[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n    font-size: 1rem;\n  }\n  .stats-bar__value[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n.app-dark[_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-700);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__divider[_ngcontent-%COMP%] {\n  background: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__icon[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__value[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__label[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n/*# sourceMappingURL=stats-comptabilite-packing-widget.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsComptabilitePackingWidget, [{
    type: Component,
    args: [{ selector: "app-stats-comptabilite-packing-widget", standalone: true, imports: [CommonModule, MoneyPipe], host: {
      "[style.display]": '"contents"'
    }, template: `<!-- Single unified stats bar -->\r
<div class="col-span-12">\r
    <div class="stats-bar">\r
        <div class="stats-bar__item">\r
            <div class="stats-bar__icon">\r
                <i class="pi pi-wallet"></i>\r
            </div>\r
            <div>\r
                <div class="stats-bar__value">{{ summary ? (summary.montant_total | money:'GNF') : '--' }}</div>\r
                <div class="stats-bar__label">Montant total</div>\r
            </div>\r
        </div>\r
\r
        <div class="stats-bar__divider"></div>\r
\r
        <div class="stats-bar__item">\r
            <div class="stats-bar__icon">\r
                <i class="pi pi-check-circle"></i>\r
            </div>\r
            <div>\r
                <div class="stats-bar__value">{{ summary ?  (summary.total_verse | money:'GNF') : '--' }}</div>\r
                <div class="stats-bar__label">Total pay\xE9</div>\r
            </div>\r
        </div>\r
\r
        <div class="stats-bar__divider"></div>\r
\r
        <div class="stats-bar__item">\r
            <div class="stats-bar__icon">\r
                <i class="pi pi-arrow-right"></i>\r
            </div>\r
            <div>\r
                <div class="stats-bar__value">{{ summary ?  (summary.montant_global_du | money:'GNF') : '--' }}</div>\r
                <div class="stats-bar__label">Reste \xE0 payer</div>\r
            </div>\r
        </div>\r
\r
        <div class="stats-bar__divider"></div>\r
\r
        <div class="stats-bar__item">\r
            <div class="stats-bar__icon">\r
                <i class="pi pi-users"></i>\r
            </div>\r
            <div>\r
                <div class="stats-bar__value">{{ summary ? summary.nb_prestataires : '--' }}</div>\r
                <div class="stats-bar__label">Prestataires</div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/pages/comptabilite/components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget.scss */\n.stats-bar {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  gap: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stats-bar__item {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1.5rem;\n}\n.stats-bar__divider {\n  width: 1px;\n  height: 40px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.stats-bar__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.stats-bar__value {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.stats-bar__label {\n  font-size: 0.78rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n@media (max-width: 768px) {\n  .stats-bar {\n    flex-direction: column;\n    gap: 0.35rem;\n    padding: 0.75rem;\n    border-radius: 16px;\n    box-shadow: none;\n  }\n  .stats-bar__item {\n    padding: 0.65rem 0.5rem;\n    width: 100%;\n    gap: 0.75rem;\n  }\n  .stats-bar__divider {\n    width: 100%;\n    height: 1px;\n  }\n  .stats-bar__icon {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n    font-size: 1rem;\n  }\n  .stats-bar__value {\n    font-size: 1.2rem;\n  }\n}\n:host-context(.app-dark) .stats-bar {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-700);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n:host-context(.app-dark) .stats-bar__divider {\n  background: var(--p-surface-600);\n}\n:host-context(.app-dark) .stats-bar__icon {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .stats-bar__value {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .stats-bar__label {\n  color: var(--p-surface-400);\n}\n/*# sourceMappingURL=stats-comptabilite-packing-widget.css.map */\n"] }]
  }], () => [{ type: FacturePaiementService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsComptabilitePackingWidget, { className: "StatsComptabilitePackingWidget", filePath: "src/app/pages/comptabilite/components/stats-comptabilite-packing-widget/stats-comptabilite-packing-widget.ts", lineNumber: 17 });
})();

// src/app/pages/comptabilite/components/comptabilite-packing-tableau/comptabilite-packing-tableau.ts
var _c0 = ["dt"];
var _c1 = () => [10, 20, 30];
var _c2 = () => ({ width: "800px" });
var _c3 = () => ({ width: "450px" });
var _c4 = (a0, a1, a2) => ({ "compta-mobile-status-badge--danger": a0, "compta-mobile-status-badge--warn": a1, "compta-mobile-status-badge--success": a2 });
var _c5 = (a0, a1, a2) => ({ "status-badge--danger": a0, "status-badge--warn": a1, "status-badge--success": a2 });
function ComptabilitePackingTableau_section_6_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 22);
    \u0275\u0275listener("click", function ComptabilitePackingTableau_section_6_article_1_Template_article_click_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goToDetail(item_r3));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 26);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27)(10, "span", 28);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 29);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 30);
    \u0275\u0275listener("click", function ComptabilitePackingTableau_section_6_article_1_Template_button_click_14_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.goToDetail(item_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitials(item_r3.prestataire_nom), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.prestataire_nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(8, 7, item_r3.prestataire_phone, "INT"), " \xB7 ", ctx_r3.formatDateDisplay(item_r3.derniere_date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(item_r3.montant_facture));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c4, item_r3.statut === "impaye", item_r3.statut === "partiel", item_r3.statut === "solde"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getStatutLabel(item_r3.statut));
  }
}
function ComptabilitePackingTableau_section_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275template(1, ComptabilitePackingTableau_section_6_article_1_Template, 15, 14, "article", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.mobileVisiblePrestataires)("ngForTrackBy", ctx_r3.trackByPrestataireId);
  }
}
function ComptabilitePackingTableau_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingTableau_ng_template_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Aucun prestataire.");
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingTableau_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComptabilitePackingTableau_ng_template_7_div_0_Template, 2, 0, "div", 31)(1, ComptabilitePackingTableau_ng_template_7_div_1_Template, 2, 0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.loading && !ctx_r3.mobileFilteredPrestataires.length);
  }
}
function ComptabilitePackingTableau_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function ComptabilitePackingTableau_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function ComptabilitePackingTableau_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "p-datepicker", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingTableau_ng_template_12_Template_p_datepicker_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filtrePeriodeDebut, $event) || (ctx_r3.filtrePeriodeDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-datepicker", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingTableau_ng_template_12_Template_p_datepicker_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filtrePeriodeFin, $event) || (ctx_r3.filtrePeriodeFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 38);
    \u0275\u0275listener("onClick", function ComptabilitePackingTableau_ng_template_12_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.loadComptabilite());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filtrePeriodeDebut);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filtrePeriodeFin);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ComptabilitePackingTableau_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "p-select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingTableau_ng_template_14_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.filtreStatut, $event) || (ctx_r3.filtreStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ComptabilitePackingTableau_ng_template_14_Template_p_select_onChange_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyStatutFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 41);
    \u0275\u0275listener("onClick", function ComptabilitePackingTableau_ng_template_14_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.exportCSV());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.filtreStatut);
    \u0275\u0275property("options", ctx_r3.statutOptions);
  }
}
function ComptabilitePackingTableau_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "h5", 43);
    \u0275\u0275text(2, "Comptabilit\xE9 Packing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield", 44);
    \u0275\u0275element(4, "p-inputicon", 12);
    \u0275\u0275elementStart(5, "input", 45);
    \u0275\u0275listener("input", function ComptabilitePackingTableau_ng_template_18_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      const dt_r9 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(ctx_r3.onGlobalFilter(dt_r9, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ComptabilitePackingTableau_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 46)(2, "span", 47);
    \u0275\u0275text(3, "Prestataire ");
    \u0275\u0275element(4, "p-sortIcon", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th")(6, "span", 47);
    \u0275\u0275text(7, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "th", 49)(9, "span", 47);
    \u0275\u0275text(10, "Date ");
    \u0275\u0275element(11, "p-sortIcon", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 51)(13, "span", 52);
    \u0275\u0275text(14, "Total ");
    \u0275\u0275element(15, "p-sortIcon", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 54)(17, "span", 52);
    \u0275\u0275text(18, "Pay\xE9 ");
    \u0275\u0275element(19, "p-sortIcon", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "th", 56)(21, "span", 52);
    \u0275\u0275text(22, "Reste d\xFB ");
    \u0275\u0275element(23, "p-sortIcon", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th", 58)(25, "span", 59);
    \u0275\u0275text(26, "Statut ");
    \u0275\u0275element(27, "p-sortIcon", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "th", 61);
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingTableau_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62);
    \u0275\u0275listener("dblclick", function ComptabilitePackingTableau_ng_template_22_Template_tr_dblclick_0_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToDetail(item_r11));
    });
    \u0275\u0275elementStart(1, "td")(2, "div", 63)(3, "span", 64);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 67);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 68);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 67);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 69)(19, "span", 70);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 69)(22, "p-button", 71);
    \u0275\u0275listener("click", function ComptabilitePackingTableau_ng_template_22_Template_p_button_click_22_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToDetail(item_r11));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "var(--p-primary-50)")("color", "var(--p-primary-600)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.getInitials(item_r11.prestataire_nom), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.prestataire_nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 15, item_r11.prestataire_phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDateDisplay(item_r11.derniere_date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(item_r11.montant_facture));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(item_r11.montant_verse));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(item_r11.montant_restant_facture));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c5, item_r11.statut === "impaye", item_r11.statut === "partiel", item_r11.statut === "solde"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r11.statut === "impaye" ? "Impay\xE9" : item_r11.statut === "partiel" ? "Partiel" : "Sold\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingTableau_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 72)(2, "div", 73);
    \u0275\u0275element(3, "i", 74);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun prestataire trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
function ComptabilitePackingTableau_ng_template_27_div_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "R\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 82);
    \u0275\u0275text(6, "Rouleaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 82);
    \u0275\u0275text(8, "Montant");
    \u0275\u0275elementEnd()();
  }
}
function ComptabilitePackingTableau_ng_template_27_div_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 85);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const packing_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(packing_r12.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDateDisplay(packing_r12.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(packing_r12.nb_rouleaux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(packing_r12.montant));
  }
}
function ComptabilitePackingTableau_ng_template_27_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "span")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " packings");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "span", 79);
    \u0275\u0275elementStart(7, "span")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " rouleaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p-table", 81);
    \u0275\u0275template(14, ComptabilitePackingTableau_ng_template_27_div_0_ng_template_14_Template, 9, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(16, ComptabilitePackingTableau_ng_template_27_div_0_ng_template_16_Template, 9, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.previewData.nb_packings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.previewData.total_rouleaux);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatCurrency(ctx_r3.previewData.montant_total));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r3.previewData.packings)("rows", 10)("paginator", ctx_r3.previewData.packings.length > 10)("rowHover", true);
  }
}
function ComptabilitePackingTableau_ng_template_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "i", 87);
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingTableau_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ComptabilitePackingTableau_ng_template_27_div_0_Template, 18, 7, "div", 75)(1, ComptabilitePackingTableau_ng_template_27_div_1_Template, 2, 0, "div", 76);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.previewData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.previewLoading);
  }
}
function ComptabilitePackingTableau_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 88);
    \u0275\u0275listener("click", function ComptabilitePackingTableau_ng_template_29_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.previewDialog = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
var ComptabilitePackingTableau = class _ComptabilitePackingTableau {
  router;
  factureService;
  messageService;
  dataChanged = new EventEmitter();
  filterFields = ["prestataire_nom", "prestataire_phone", "montant_total_du"];
  prestataires = signal([], ...ngDevMode ? [{ debugName: "prestataires" }] : []);
  selectedPrestataires = null;
  comptaSummary = null;
  loading = false;
  // Filtres période
  filtrePeriodeDebut = null;
  filtrePeriodeFin = null;
  // Filtre statut
  filtreStatut = null;
  statutOptions = [
    { label: "Tous", value: null },
    { label: "Impay\xE9", value: "impaye" },
    { label: "Partiel", value: "partiel" },
    { label: "Sold\xE9", value: "solde" }
  ];
  selectedItem = null;
  // Dialog prévisualisation
  previewDialog = false;
  previewData = null;
  previewLoading = false;
  // Facturation
  facturerLoading = false;
  dt;
  exportColumns;
  cols;
  // Mobile list
  mobileSearchTerm = "";
  mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;
  constructor(router, factureService, messageService) {
    this.router = router;
    this.factureService = factureService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadComptabilite();
    this.initColumns();
  }
  initColumns() {
    this.cols = [
      { field: "prestataire_nom", header: "Prestataire" },
      { field: "prestataire_phone", header: "T\xE9l\xE9phone" },
      { field: "nb_packings_non_factures", header: "Non factur\xE9s" },
      { field: "montant_non_facture", header: "Mnt non factur\xE9" },
      { field: "montant_facture", header: "Factur\xE9" },
      { field: "montant_verse", header: "Vers\xE9" },
      { field: "montant_restant_facture", header: "Reste facture" },
      { field: "montant_total_du", header: "Total d\xFB" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  loadComptabilite() {
    this.loading = true;
    const filters = {};
    if (this.filtrePeriodeDebut) {
      filters.date_debut = this.formatDate(this.filtrePeriodeDebut);
    }
    if (this.filtrePeriodeFin) {
      filters.date_fin = this.formatDate(this.filtrePeriodeFin);
    }
    this.factureService.getComptabilite(filters).subscribe({
      next: (response) => {
        this.comptaSummary = new ComptabiliteSummary(response.data);
        this.applyStatutFilter();
        this.loading = false;
        this.dataChanged.emit(filters);
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger la comptabilit\xE9",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  applyStatutFilter() {
    if (!this.comptaSummary)
      return;
    this.mobileVisibleCount = this.mobilePageSize;
    if (this.filtreStatut) {
      this.prestataires.set(this.comptaSummary.prestataires.filter((p) => p.statut === this.filtreStatut));
    } else {
      this.prestataires.set(this.comptaSummary.prestataires);
    }
  }
  /** Appelé depuis le parent (liste mobile) pour le filtre statut */
  applyMobileStatut(value) {
    this.filtreStatut = value;
    this.applyStatutFilter();
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openPreview(item) {
    const periodeDebut = this.filtrePeriodeDebut ? this.formatDate(this.filtrePeriodeDebut) : "2000-01-01";
    const periodeFin = this.filtrePeriodeFin ? this.formatDate(this.filtrePeriodeFin) : "2099-12-31";
    this.selectedItem = item;
    this.previewDialog = true;
    this.previewLoading = true;
    this.previewData = null;
    this.factureService.getPreview(item.prestataire_id, periodeDebut, periodeFin).subscribe({
      next: (response) => {
        this.previewData = new PreviewFacturePacking(response.data);
        this.previewLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger la pr\xE9visualisation",
          life: 3e3
        });
        this.previewLoading = false;
        this.previewDialog = false;
      }
    });
  }
  // ========================= Facturation =========================
  facturerNonFactures() {
    if (!this.selectedItem || this.facturerLoading)
      return;
    this.facturerLoading = true;
    const periodeDebut = this.filtrePeriodeDebut ? this.formatDate(this.filtrePeriodeDebut) : "2000-01-01";
    const periodeFin = this.filtrePeriodeFin ? this.formatDate(this.filtrePeriodeFin) : "2099-12-31";
    const dto = {
      prestataire_id: this.selectedItem.prestataire_id,
      date_debut: periodeDebut,
      date_fin: periodeFin
    };
    this.factureService.createFacture(dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: `Facture ${response.data.reference} cr\xE9\xE9e`,
          life: 3e3
        });
        this.facturerLoading = false;
        if (this.selectedItem) {
          this.selectedItem.nb_packings_non_factures = 0;
          this.selectedItem.montant_non_facture = 0;
        }
        this.loadComptabilite();
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible de cr\xE9er la facture";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: msg,
          life: 5e3
        });
        this.facturerLoading = false;
      }
    });
  }
  formatDate(date) {
    if (!date)
      return "";
    if (typeof date === "string")
      return date;
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  formatDateDisplay(dateStr) {
    if (dateStr == null || dateStr === "")
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR");
  }
  goToDetail(item) {
    this.router.navigate(["/comptabilite/comptabilite-packing-detail", item.prestataire_id], {
      queryParams: {
        prestataire_nom: item.prestataire_nom,
        prestataire_phone: item.prestataire_phone
      }
    });
  }
  getInitials(nomComplet) {
    if (!nomComplet || !nomComplet.trim()) {
      return "--";
    }
    const parts = nomComplet.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  get mobileFilteredPrestataires() {
    const list = this.prestataires();
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term)
      return list;
    return list.filter((p) => (p.prestataire_nom || "").toLowerCase().includes(term) || (p.prestataire_phone || "").replace(/\s/g, "").includes(term.replace(/\s/g, "")));
  }
  get mobileVisiblePrestataires() {
    return this.mobileFilteredPrestataires.slice(0, this.mobileVisibleCount);
  }
  get canLoadMoreMobile() {
    return this.mobileVisibleCount < this.mobileFilteredPrestataires.length;
  }
  onMobileSearchChange() {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }
  trackByPrestataireId(_index, p) {
    return p.prestataire_id;
  }
  getStatutLabel(statut) {
    return statut === "impaye" ? "Impay\xE9" : statut === "partiel" ? "Partiel" : "Sold\xE9";
  }
  static \u0275fac = function ComptabilitePackingTableau_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingTableau)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FacturePaiementService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingTableau, selectors: [["app-comptabilite-packing-tableau"]], viewQuery: function ComptabilitePackingTableau_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, outputs: { dataChanged: "dataChanged" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 32, vars: 24, consts: [["mobileListState", ""], ["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["content", ""], ["footer", ""], [1, "compta-tableau-mobile"], [1, "compta-mobile-search"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Prestataire, t\xE9l\xE9phone...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "compta-mobile-list", 4, "ngIf", "ngIfElse"], ["class", "compta-mobile-load-more", 4, "ngIf"], [1, "card", "tableau-card", "compta-table-card", "compta-tableau-desktop"], ["styleClass", "mb-6 compta-toolbar"], ["styleClass", "compta-data-table", "dataKey", "prestataire_id", "currentPageReportTemplate", " {first} \xE0 {last} sur {totalRecords} prestataires", 3, "selectionChange", "value", "rows", "columns", "paginator", "globalFilterFields", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "loading"], ["header", "Pr\xE9visualisation", 3, "visibleChange", "visible", "modal", "draggable"], [1, "compta-mobile-list"], ["class", "compta-mobile-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "compta-mobile-card", 3, "click"], ["aria-hidden", "true", 1, "compta-mobile-card-avatar"], [1, "compta-mobile-card-body"], [1, "compta-mobile-card-name"], [1, "compta-mobile-card-meta"], [1, "compta-mobile-card-footer"], [1, "compta-mobile-card-summary"], [1, "compta-mobile-status-badge", 3, "ngClass"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-right", "pTooltip", "D\xE9tail", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "compta-mobile-action-btn", 3, "click"], ["class", "compta-mobile-state", 4, "ngIf"], [1, "compta-mobile-state"], [1, "compta-mobile-load-more"], ["pButton", "", "label", "Charger plus", "icon", "pi pi-angle-down", 1, "compta-mobile-load-more-btn", 3, "click"], [1, "compta-toolbar__start"], ["dateFormat", "dd/mm/yy", "placeholder", "Date d\xE9but", "inputStyleClass", "w-full", "styleClass", "compta-toolbar__date", 3, "ngModelChange", "ngModel", "showIcon"], ["dateFormat", "dd/mm/yy", "placeholder", "Date fin", "inputStyleClass", "w-full", "styleClass", "compta-toolbar__date", 3, "ngModelChange", "ngModel", "showIcon"], ["icon", "pi pi-filter", "severity", "primary", "styleClass", "compta-toolbar__filter-btn", "pTooltip", "Appliquer les filtres", 3, "onClick", "rounded", "outlined"], [1, "compta-toolbar__end"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Statut", "styleClass", "compta-toolbar__status", 3, "ngModelChange", "onChange", "ngModel", "options"], ["label", "Export", "icon", "pi pi-download", "severity", "secondary", "styleClass", "compta-toolbar__export-btn", 3, "onClick"], [1, "table-caption"], [1, "m-0"], [1, "table-caption__search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 3, "input"], ["pSortableColumn", "prestataire_nom"], [1, "col-header"], ["field", "prestataire_nom"], ["pSortableColumn", "derniere_date"], ["field", "derniere_date"], ["pSortableColumn", "montant_facture", 1, "text-right"], [1, "col-header", "justify-end"], ["field", "montant_facture"], ["pSortableColumn", "montant_verse", 1, "text-right"], ["field", "montant_verse"], ["pSortableColumn", "montant_restant_facture", 1, "text-right"], ["field", "montant_restant_facture"], ["pSortableColumn", "statut", 1, "text-center"], [1, "col-header", "justify-center"], ["field", "statut"], [1, "text-center", 2, "width", "5rem"], [1, "table-row", 3, "dblclick"], [1, "cell-prestataire"], [1, "cell-prestataire__avatar"], [1, "cell-prestataire__name"], [1, "cell-secondary", "cell-bold"], [1, "text-right", "cell-mono", "cell-bold"], [1, "text-right", "cell-mono", "cell-success"], [1, "text-center"], [1, "status-badge", 3, "ngClass"], ["icon", "pi pi-arrow-right", "severity", "secondary", "pTooltip", "D\xE9tail", 3, "click", "text", "rounded"], ["colspan", "8"], [1, "empty-state"], [1, "pi", "pi-inbox"], ["class", "flex flex-col gap-4", 4, "ngIf"], ["class", "flex items-center justify-center p-12", 4, "ngIf"], [1, "flex", "flex-col", "gap-4"], [1, "preview-summary"], [1, "preview-summary__sep"], [1, "ml-auto", "text-xl", "font-bold", "text-primary"], ["styleClass", "p-datatable-sm", 3, "value", "rows", "paginator", "rowHover"], [1, "text-right"], [1, "font-medium"], [1, "cell-secondary"], [1, "text-right", "font-semibold"], [1, "flex", "items-center", "justify-center", "p-12"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-surface-300"], ["label", "Fermer", 3, "click", "text"]], template: function ComptabilitePackingTableau_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 10)(2, "section", 11)(3, "p-iconfield");
      \u0275\u0275element(4, "p-inputicon", 12);
      \u0275\u0275elementStart(5, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingTableau_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ComptabilitePackingTableau_Template_input_ngModelChange_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(6, ComptabilitePackingTableau_section_6_Template, 2, 2, "section", 14)(7, ComptabilitePackingTableau_ng_template_7_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ComptabilitePackingTableau_div_9_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 16)(11, "p-toolbar", 17);
      \u0275\u0275template(12, ComptabilitePackingTableau_ng_template_12_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(14, ComptabilitePackingTableau_ng_template_14_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-table", 18, 3);
      \u0275\u0275twoWayListener("selectionChange", function ComptabilitePackingTableau_Template_p_table_selectionChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedPrestataires, $event) || (ctx.selectedPrestataires = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(18, ComptabilitePackingTableau_ng_template_18_Template, 6, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(20, ComptabilitePackingTableau_ng_template_20_Template, 29, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(22, ComptabilitePackingTableau_ng_template_22_Template, 23, 22, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(24, ComptabilitePackingTableau_ng_template_24_Template, 6, 0, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "p-dialog", 19);
      \u0275\u0275twoWayListener("visibleChange", function ComptabilitePackingTableau_Template_p_dialog_visibleChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.previewDialog, $event) || (ctx.previewDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(27, ComptabilitePackingTableau_ng_template_27_Template, 2, 2, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(29, ComptabilitePackingTableau_ng_template_29_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "p-confirmdialog");
    }
    if (rf & 2) {
      const mobileListState_r14 = \u0275\u0275reference(8);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisiblePrestataires.length)("ngIfElse", mobileListState_r14);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.canLoadMoreMobile);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.prestataires())("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", ctx.filterFields);
      \u0275\u0275twoWayProperty("selection", ctx.selectedPrestataires);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(21, _c1))("loading", ctx.loading);
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.previewDialog);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c3));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    ButtonDirective,
    Button,
    RippleModule,
    Ripple,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    DialogModule,
    Dialog,
    TagModule,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog,
    DatePickerModule,
    DatePicker,
    TextareaModule,
    TooltipModule,
    Tooltip,
    InputNumberModule,
    ToggleSwitchModule,
    PhoneFormatPipe
  ], styles: ["\n\n.compta-tableau-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.compta-mobile-search[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n[_nghost-%COMP%]     .compta-mobile-search .p-iconfield, \n[_nghost-%COMP%]     .compta-mobile-search .p-inputtext {\n  width: 100%;\n}\n.compta-mobile-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.compta-mobile-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.compta-mobile-card[_ngcontent-%COMP%]:active {\n  background: var(--p-surface-100);\n}\n.compta-mobile-card-avatar[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 10px;\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.compta-mobile-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.compta-mobile-card-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--p-surface-900);\n  line-height: 1.3;\n}\n.compta-mobile-card-meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--p-surface-500);\n  margin-top: 0.2rem;\n}\n.compta-mobile-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.compta-mobile-card-summary[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.compta-mobile-status-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.compta-mobile-status-badge--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.compta-mobile-status-badge--warn[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.compta-mobile-status-badge--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.compta-mobile-action-btn[_ngcontent-%COMP%] {\n  color: var(--p-primary-600) !important;\n}\n.compta-mobile-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.compta-mobile-load-more[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: flex;\n  justify-content: center;\n}\n.compta-mobile-load-more-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 18rem;\n}\n@media (max-width: 768px) {\n  .compta-tableau-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .compta-tableau-desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.tableau-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;\n  overflow: hidden;\n}\n.compta-table-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]     .compta-toolbar.p-toolbar {\n  padding: 1rem;\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  background: var(--p-surface-50);\n}\n.compta-toolbar__start[_ngcontent-%COMP%], \n.compta-toolbar__end[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]     .compta-toolbar__date.p-datepicker, \n[_nghost-%COMP%]     .compta-toolbar__status.p-select {\n  width: 10rem;\n}\n[_nghost-%COMP%]     .compta-toolbar__filter-btn.p-button, \n[_nghost-%COMP%]     .compta-toolbar__export-btn.p-button {\n  height: 2.5rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-caption {\n  padding: 1.5rem 1.75rem 1.75rem;\n  border-bottom: 1px solid var(--p-surface-100);\n  margin-bottom: 0;\n}\n.table-caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]     .table-caption__search .p-iconfield, \n[_nghost-%COMP%]     .table-caption__search .p-inputtext {\n  width: 100%;\n}\n[_nghost-%COMP%]     .compta-data-table .p-datatable-table {\n  min-width: 55rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n.col-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-500);\n}\n.table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.cell-prestataire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cell-prestataire__avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.cell-prestataire__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--p-surface-800);\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n  font-size: 0.9rem;\n}\n.cell-mono[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.9rem;\n}\n.cell-success[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.cell-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n.status-badge--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.status-badge--warn[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.status-badge--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.preview-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--p-surface-600);\n}\n.preview-summary__sep[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]     .compta-table-card.card {\n    padding: 1rem;\n    border-radius: 16px;\n  }\n  [_nghost-%COMP%]     .compta-toolbar.p-toolbar {\n    padding: 0.75rem;\n    margin-bottom: 0.75rem;\n    gap: 0.625rem;\n  }\n  [_nghost-%COMP%]     .compta-toolbar .p-toolbar-start, \n   [_nghost-%COMP%]     .compta-toolbar .p-toolbar-end {\n    width: 100%;\n  }\n  .compta-toolbar__start[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n    gap: 0.5rem;\n  }\n  .compta-toolbar__end[_ngcontent-%COMP%] {\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.5rem;\n  }\n  [_nghost-%COMP%]     .compta-toolbar__date.p-datepicker, \n   [_nghost-%COMP%]     .compta-toolbar__status.p-select {\n    width: 100%;\n  }\n  .table-caption[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  [_nghost-%COMP%]     .p-datatable .p-datatable-caption {\n    padding: 1rem;\n  }\n  [_nghost-%COMP%]     .compta-data-table .p-datatable-table {\n    min-width: 46rem;\n  }\n  [_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th, \n   [_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n    padding: 0.85rem 0.9rem;\n  }\n}\n.app-dark[_nghost-%COMP%]   .cell-prestataire__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cell-prestataire__name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .cell-bold[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cell-bold[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .col-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .col-header[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--danger[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--warn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--success[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .preview-summary[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .preview-summary[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]     .compta-toolbar.p-toolbar, .app-dark   [_nghost-%COMP%]     .compta-toolbar.p-toolbar {\n  background: var(--p-surface-700);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]     .p-datatable .p-datatable-caption, .app-dark   [_nghost-%COMP%]     .p-datatable .p-datatable-caption {\n  border-bottom-color: var(--p-surface-700);\n}\n/*# sourceMappingURL=comptabilite-packing-tableau.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingTableau, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-tableau", standalone: true, imports: [
      CommonModule,
      TableModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      SelectModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      DatePickerModule,
      TextareaModule,
      TooltipModule,
      InputNumberModule,
      ToggleSwitchModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />\r
\r
<!-- Mobile: list as cards (\u2264768px) -->\r
<div class="compta-tableau-mobile">\r
    <section class="compta-mobile-search">\r
        <p-iconfield>\r
            <p-inputicon styleClass="pi pi-search" />\r
            <input\r
                pInputText\r
                type="text"\r
                [(ngModel)]="mobileSearchTerm"\r
                (ngModelChange)="onMobileSearchChange()"\r
                placeholder="Prestataire, t\xE9l\xE9phone..."\r
                class="w-full"\r
            />\r
        </p-iconfield>\r
    </section>\r
\r
    <section class="compta-mobile-list" *ngIf="!loading && mobileVisiblePrestataires.length; else mobileListState">\r
        <article\r
            class="compta-mobile-card"\r
            *ngFor="let item of mobileVisiblePrestataires; trackBy: trackByPrestataireId"\r
            (click)="goToDetail(item)"\r
        >\r
            <div class="compta-mobile-card-avatar" aria-hidden="true">\r
                {{ getInitials(item.prestataire_nom) }}\r
            </div>\r
            <div class="compta-mobile-card-body">\r
                <div class="compta-mobile-card-name">{{ item.prestataire_nom }}</div>\r
                <div class="compta-mobile-card-meta">{{ item.prestataire_phone | phoneFormat:'INT' }} \xB7 {{ formatDateDisplay(item.derniere_date) }}</div>\r
                <div class="compta-mobile-card-footer">\r
                    <span class="compta-mobile-card-summary">{{ formatCurrency(item.montant_facture) }}</span>\r
                    <span\r
                        class="compta-mobile-status-badge"\r
                        [ngClass]="{\r
                            'compta-mobile-status-badge--danger': item.statut === 'impaye',\r
                            'compta-mobile-status-badge--warn': item.statut === 'partiel',\r
                            'compta-mobile-status-badge--success': item.statut === 'solde'\r
                        }"\r
                    >{{ getStatutLabel(item.statut) }}</span>\r
                    <button\r
                        pButton\r
                        pRipple\r
                        icon="pi pi-arrow-right"\r
                        class="p-button-rounded p-button-text p-button-sm compta-mobile-action-btn"\r
                        pTooltip="D\xE9tail"\r
                        tooltipPosition="top"\r
                        (click)="$event.stopPropagation(); goToDetail(item)"\r
                    ></button>\r
                </div>\r
            </div>\r
        </article>\r
    </section>\r
\r
    <ng-template #mobileListState>\r
        <div class="compta-mobile-state" *ngIf="loading">Chargement...</div>\r
        <div class="compta-mobile-state" *ngIf="!loading && !mobileFilteredPrestataires.length">Aucun prestataire.</div>\r
    </ng-template>\r
\r
    <div class="compta-mobile-load-more" *ngIf="!loading && canLoadMoreMobile">\r
        <button pButton label="Charger plus" icon="pi pi-angle-down" class="compta-mobile-load-more-btn" (click)="loadMoreMobile()"></button>\r
    </div>\r
</div>\r
\r
<!-- Desktop: toolbar + table -->\r
<div class="card tableau-card compta-table-card compta-tableau-desktop">\r
    <p-toolbar styleClass="mb-6 compta-toolbar">\r
        <ng-template #start>\r
            <div class="compta-toolbar__start">\r
                <p-datepicker\r
                    [(ngModel)]="filtrePeriodeDebut"\r
                    dateFormat="dd/mm/yy"\r
                    [showIcon]="true"\r
                    placeholder="Date d&eacute;but"\r
                    inputStyleClass="w-full"\r
                    styleClass="compta-toolbar__date"\r
                />\r
                <p-datepicker\r
                    [(ngModel)]="filtrePeriodeFin"\r
                    dateFormat="dd/mm/yy"\r
                    [showIcon]="true"\r
                    placeholder="Date fin"\r
                    inputStyleClass="w-full"\r
                    styleClass="compta-toolbar__date"\r
                />\r
                <p-button\r
                    icon="pi pi-filter"\r
                    severity="primary"\r
                    [rounded]="true"\r
                    [outlined]="true"\r
                    styleClass="compta-toolbar__filter-btn"\r
                    pTooltip="Appliquer les filtres"\r
                    (onClick)="loadComptabilite()"\r
                />\r
            </div>\r
        </ng-template>\r
\r
        <ng-template #end>\r
            <div class="compta-toolbar__end">\r
                <p-select\r
                    [(ngModel)]="filtreStatut"\r
                    [options]="statutOptions"\r
                    optionLabel="label"\r
                    optionValue="value"\r
                    placeholder="Statut"\r
                    styleClass="compta-toolbar__status"\r
                    (onChange)="applyStatutFilter()"\r
                />\r
                <p-button\r
                    label="Export"\r
                    icon="pi pi-download"\r
                    severity="secondary"\r
                    styleClass="compta-toolbar__export-btn"\r
                    (onClick)="exportCSV()"\r
                />\r
            </div>\r
        </ng-template>\r
    </p-toolbar>\r
\r
    <p-table\r
        #dt\r
        [value]="prestataires()"\r
        [rows]="10"\r
        [columns]="cols"\r
        [paginator]="true"\r
        [globalFilterFields]="filterFields"\r
        styleClass="compta-data-table"\r
        [(selection)]="selectedPrestataires"\r
        [rowHover]="true"\r
        dataKey="prestataire_id"\r
        currentPageReportTemplate=" {first} &agrave; {last} sur {totalRecords} prestataires"\r
        [showCurrentPageReport]="true"\r
        [rowsPerPageOptions]="[10, 20, 30]"\r
        [loading]="loading"\r
    >\r
        <ng-template #caption>\r
            <div class="table-caption">\r
                <h5 class="m-0">Comptabilit&eacute; Packing</h5>\r
                <p-iconfield class="table-caption__search">\r
                    <p-inputicon styleClass="pi pi-search" />\r
                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Rechercher..." />\r
                </p-iconfield>\r
            </div>\r
        </ng-template>\r
\r
        <ng-template #header>\r
            <tr>\r
                <th pSortableColumn="prestataire_nom">\r
                    <span class="col-header">Prestataire <p-sortIcon field="prestataire_nom" /></span>\r
                </th>\r
                <th><span class="col-header">T&eacute;l&eacute;phone</span></th>\r
                <th pSortableColumn="derniere_date">\r
                    <span class="col-header">Date <p-sortIcon field="derniere_date" /></span>\r
                </th>\r
                <th pSortableColumn="montant_facture" class="text-right">\r
                    <span class="col-header justify-end">Total <p-sortIcon field="montant_facture" /></span>\r
                </th>\r
                <th pSortableColumn="montant_verse" class="text-right">\r
                    <span class="col-header justify-end">Pay&eacute; <p-sortIcon field="montant_verse" /></span>\r
                </th>\r
                <th pSortableColumn="montant_restant_facture" class="text-right">\r
                    <span class="col-header justify-end">Reste d&ucirc; <p-sortIcon field="montant_restant_facture" /></span>\r
                </th>\r
                <th pSortableColumn="statut" class="text-center">\r
                    <span class="col-header justify-center">Statut <p-sortIcon field="statut" /></span>\r
                </th>\r
                <th class="text-center" style="width: 5rem"></th>\r
            </tr>\r
        </ng-template>\r
\r
        <ng-template #body let-item>\r
            <tr class="table-row" (dblclick)="goToDetail(item)">\r
                <td>\r
                    <div class="cell-prestataire">\r
                        <span class="cell-prestataire__avatar" [style.background]="'var(--p-primary-50)'" [style.color]="'var(--p-primary-600)'">\r
                            {{ getInitials(item.prestataire_nom) }}\r
                        </span>\r
                        <span class="cell-prestataire__name">{{ item.prestataire_nom }}</span>\r
                    </div>\r
                </td>\r
                <td class="cell-secondary cell-bold">{{ item.prestataire_phone | phoneFormat:'INT' }}</td>\r
                <td class="cell-secondary cell-bold">{{ formatDateDisplay(item.derniere_date) }}</td>\r
                <td class="text-right cell-mono cell-bold">{{ formatCurrency(item.montant_facture) }}</td>\r
                <td class="text-right cell-mono cell-success">{{ formatCurrency(item.montant_verse) }}</td>\r
                <td class="text-right cell-mono cell-bold">{{ formatCurrency(item.montant_restant_facture) }}</td>\r
                <td class="text-center">\r
                    <span class="status-badge" [ngClass]="{\r
                        'status-badge--danger': item.statut === 'impaye',\r
                        'status-badge--warn': item.statut === 'partiel',\r
                        'status-badge--success': item.statut === 'solde'\r
                    }">\r
                        {{ item.statut === 'impaye' ? 'Impay&eacute;' : item.statut === 'partiel' ? 'Partiel' : 'Sold&eacute;' }}\r
                    </span>\r
                </td>\r
                <td class="text-center">\r
                    <p-button icon="pi pi-arrow-right" severity="secondary" [text]="true" [rounded]="true" pTooltip="D&eacute;tail" (click)="goToDetail(item)" />\r
                </td>\r
            </tr>\r
        </ng-template>\r
\r
        <ng-template #emptymessage>\r
            <tr>\r
                <td colspan="8">\r
                    <div class="empty-state">\r
                        <i class="pi pi-inbox"></i>\r
                        <span>Aucun prestataire trouv&eacute;</span>\r
                    </div>\r
                </td>\r
            </tr>\r
        </ng-template>\r
    </p-table>\r
</div>\r
\r
<p-dialog [(visible)]="previewDialog" [style]="{ width: '800px' }" header="Pr&eacute;visualisation" [modal]="true" [draggable]="false">\r
    <ng-template #content>\r
        <div class="flex flex-col gap-4" *ngIf="previewData">\r
            <div class="preview-summary">\r
                <span><strong>{{ previewData.nb_packings }}</strong> packings</span>\r
                <span class="preview-summary__sep"></span>\r
                <span><strong>{{ previewData.total_rouleaux }}</strong> rouleaux</span>\r
                <span class="ml-auto text-xl font-bold text-primary">{{ formatCurrency(previewData.montant_total) }}</span>\r
            </div>\r
\r
            <p-table [value]="previewData.packings" [rows]="10" [paginator]="previewData.packings.length > 10" [rowHover]="true" styleClass="p-datatable-sm">\r
                <ng-template #header>\r
                    <tr>\r
                        <th>R&eacute;f&eacute;rence</th>\r
                        <th>Date</th>\r
                        <th class="text-right">Rouleaux</th>\r
                        <th class="text-right">Montant</th>\r
                    </tr>\r
                </ng-template>\r
                <ng-template #body let-packing>\r
                    <tr>\r
                        <td class="font-medium">{{ packing.reference }}</td>\r
                        <td class="cell-secondary">{{ formatDateDisplay(packing.date) }}</td>\r
                        <td class="text-right">{{ packing.nb_rouleaux }}</td>\r
                        <td class="text-right font-semibold">{{ formatCurrency(packing.montant) }}</td>\r
                    </tr>\r
                </ng-template>\r
            </p-table>\r
        </div>\r
        <div *ngIf="previewLoading" class="flex items-center justify-center p-12">\r
            <i class="pi pi-spin pi-spinner text-3xl text-surface-300"></i>\r
        </div>\r
    </ng-template>\r
    <ng-template #footer>\r
        <p-button label="Fermer" [text]="true" (click)="previewDialog = false" />\r
    </ng-template>\r
</p-dialog>\r
\r
<p-confirmdialog [style]="{ width: '450px' }" />\r
`, styles: ["/* src/app/pages/comptabilite/components/comptabilite-packing-tableau/comptabilite-packing-tableau.scss */\n.compta-tableau-mobile {\n  display: none;\n}\n.compta-mobile-search {\n  margin-bottom: 0.75rem;\n}\n:host ::ng-deep .compta-mobile-search .p-iconfield,\n:host ::ng-deep .compta-mobile-search .p-inputtext {\n  width: 100%;\n}\n.compta-mobile-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.compta-mobile-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.compta-mobile-card:active {\n  background: var(--p-surface-100);\n}\n.compta-mobile-card-avatar {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 10px;\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.compta-mobile-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.compta-mobile-card-name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--p-surface-900);\n  line-height: 1.3;\n}\n.compta-mobile-card-meta {\n  font-size: 0.85rem;\n  color: var(--p-surface-500);\n  margin-top: 0.2rem;\n}\n.compta-mobile-card-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.compta-mobile-card-summary {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.compta-mobile-status-badge {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.compta-mobile-status-badge--danger {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.compta-mobile-status-badge--warn {\n  background: #fffbeb;\n  color: #d97706;\n}\n.compta-mobile-status-badge--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.compta-mobile-action-btn {\n  color: var(--p-primary-600) !important;\n}\n.compta-mobile-state {\n  text-align: center;\n  padding: 2rem 1rem;\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.compta-mobile-load-more {\n  margin-top: 0.75rem;\n  display: flex;\n  justify-content: center;\n}\n.compta-mobile-load-more-btn {\n  width: 100%;\n  max-width: 18rem;\n}\n@media (max-width: 768px) {\n  .compta-tableau-mobile {\n    display: block;\n  }\n  .compta-tableau-desktop {\n    display: none !important;\n  }\n}\n.tableau-card {\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;\n  overflow: hidden;\n}\n.compta-table-card {\n  margin-bottom: 0;\n}\n:host ::ng-deep .compta-toolbar.p-toolbar {\n  padding: 1rem;\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  background: var(--p-surface-50);\n}\n.compta-toolbar__start,\n.compta-toolbar__end {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n:host ::ng-deep .compta-toolbar__date.p-datepicker,\n:host ::ng-deep .compta-toolbar__status.p-select {\n  width: 10rem;\n}\n:host ::ng-deep .compta-toolbar__filter-btn.p-button,\n:host ::ng-deep .compta-toolbar__export-btn.p-button {\n  height: 2.5rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-caption {\n  padding: 1.5rem 1.75rem 1.75rem;\n  border-bottom: 1px solid var(--p-surface-100);\n  margin-bottom: 0;\n}\n.table-caption {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n:host ::ng-deep .table-caption__search .p-iconfield,\n:host ::ng-deep .table-caption__search .p-inputtext {\n  width: 100%;\n}\n:host ::ng-deep .compta-data-table .p-datatable-table {\n  min-width: 55rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n.col-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-500);\n}\n.table-row {\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.cell-prestataire {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cell-prestataire__avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  flex-shrink: 0;\n}\n.cell-prestataire__name {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--p-surface-800);\n}\n.cell-secondary {\n  color: var(--p-surface-400);\n  font-size: 0.9rem;\n}\n.cell-mono {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.9rem;\n}\n.cell-success {\n  color: #059669;\n}\n.cell-bold {\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n}\n.status-badge--danger {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.status-badge--warn {\n  background: #fffbeb;\n  color: #d97706;\n}\n.status-badge--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state i {\n  font-size: 2.5rem;\n}\n.empty-state span {\n  font-size: 0.9rem;\n}\n.preview-summary {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--p-surface-600);\n}\n.preview-summary__sep {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n}\n@media (max-width: 768px) {\n  :host ::ng-deep .compta-table-card.card {\n    padding: 1rem;\n    border-radius: 16px;\n  }\n  :host ::ng-deep .compta-toolbar.p-toolbar {\n    padding: 0.75rem;\n    margin-bottom: 0.75rem;\n    gap: 0.625rem;\n  }\n  :host ::ng-deep .compta-toolbar .p-toolbar-start,\n  :host ::ng-deep .compta-toolbar .p-toolbar-end {\n    width: 100%;\n  }\n  .compta-toolbar__start {\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n    gap: 0.5rem;\n  }\n  .compta-toolbar__end {\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 0.5rem;\n  }\n  :host ::ng-deep .compta-toolbar__date.p-datepicker,\n  :host ::ng-deep .compta-toolbar__status.p-select {\n    width: 100%;\n  }\n  .table-caption {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n  }\n  :host ::ng-deep .p-datatable .p-datatable-caption {\n    padding: 1rem;\n  }\n  :host ::ng-deep .compta-data-table .p-datatable-table {\n    min-width: 46rem;\n  }\n  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th,\n  :host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n    padding: 0.85rem 0.9rem;\n  }\n}\n:host-context(.app-dark) .cell-prestataire__name,\n:host-context(.app-dark) .cell-bold {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .col-header {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .status-badge--danger {\n  background: rgba(220, 38, 38, 0.12);\n}\n:host-context(.app-dark) .status-badge--warn {\n  background: rgba(217, 119, 6, 0.12);\n}\n:host-context(.app-dark) .status-badge--success {\n  background: rgba(5, 150, 105, 0.12);\n}\n:host-context(.app-dark) .preview-summary {\n  background: var(--p-surface-700);\n}\n:host-context(.app-dark) ::ng-deep .compta-toolbar.p-toolbar {\n  background: var(--p-surface-700);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) ::ng-deep .p-datatable .p-datatable-caption {\n  border-bottom-color: var(--p-surface-700);\n}\n/*# sourceMappingURL=comptabilite-packing-tableau.css.map */\n"] }]
  }], () => [{ type: Router }, { type: FacturePaiementService }, { type: MessageService }], { dataChanged: [{
    type: Output
  }], dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingTableau, { className: "ComptabilitePackingTableau", filePath: "src/app/pages/comptabilite/components/comptabilite-packing-tableau/comptabilite-packing-tableau.ts", lineNumber: 75 });
})();

// src/app/pages/comptabilite/comptabilite-packing-liste/comptabilite-packing-liste.ts
var ComptabilitePackingListe = class _ComptabilitePackingListe {
  router;
  document;
  mobileBreakpoint = 768;
  mobilePwaClass = "comptabilite-packing-mobile-pwa";
  mobileStatusMenuItems = [
    { label: "Tous", command: () => this.applyMobileStatut(null) },
    { label: "Impay\xE9", command: () => this.applyMobileStatut("impaye") },
    { label: "Partiel", command: () => this.applyMobileStatut("partiel") },
    { label: "Sold\xE9", command: () => this.applyMobileStatut("solde") }
  ];
  tableauRef;
  constructor(router, document) {
    this.router = router;
    this.document = document;
  }
  ngOnInit() {
    this.syncMobilePwaMode();
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onWindowResize() {
    this.syncMobilePwaMode();
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  applyMobileStatut(value) {
    this.tableauRef?.applyMobileStatut(value);
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  static \u0275fac = function ComptabilitePackingListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingListe)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingListe, selectors: [["app-comptabilite-packing-liste"]], viewQuery: function ComptabilitePackingListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ComptabilitePackingTableau, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableauRef = _t.first);
    }
  }, hostBindings: function ComptabilitePackingListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ComptabilitePackingListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService, ProductService])], decls: 16, vars: 2, consts: [["statusMenu", ""], ["statsWidget", ""], [1, "compta-mobile-shell", "compta-packing-mobile-app"], [1, "compta-packing-mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "compta-mobile-back", 3, "click"], [1, "compta-mobile-title-wrap"], [1, "compta-mobile-title"], [1, "compta-mobile-subtitle"], ["appendTo", "body", "styleClass", "compta-mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "compta-mobile-filter-btn", 3, "click"], [1, "compta-mobile-scroll"], [1, "compta-mobile-shell__stats", "grid", "grid-cols-12", "gap-6", "mb-6"], [1, "compta-mobile-shell__table", 3, "dataChanged"]], template: function ComptabilitePackingListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 2)(1, "header", 3)(2, "button", 4);
      \u0275\u0275listener("click", function ComptabilitePackingListe_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 5)(4, "h1", 6);
      \u0275\u0275text(5, "Comptabilit\xE9 Packing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 7);
      \u0275\u0275text(7, "Facturation prestataires");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "p-menu", 8, 0);
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function ComptabilitePackingListe_Template_button_click_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statusMenu_r2 = \u0275\u0275reference(9);
        return \u0275\u0275resetView(statusMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11);
      \u0275\u0275element(13, "app-stats-comptabilite-packing-widget", null, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "app-comptabilite-packing-tableau", 12);
      \u0275\u0275listener("dataChanged", function ComptabilitePackingListe_Template_app_comptabilite_packing_tableau_dataChanged_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statsWidget_r3 = \u0275\u0275reference(14);
        return \u0275\u0275resetView(statsWidget_r3.loadStats($event));
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("model", ctx.mobileStatusMenuItems)("popup", true);
    }
  }, dependencies: [
    CommonModule,
    ButtonModule,
    ButtonDirective,
    RippleModule,
    Ripple,
    MenuModule,
    Menu,
    StatsComptabilitePackingWidget,
    ComptabilitePackingTableau
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.compta-mobile-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.compta-mobile-shell__stats[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.compta-packing-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .compta-packing-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n  .app-dark[_nghost-%COMP%]   .compta-packing-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .compta-packing-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-900);\n  }\n  .compta-mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n  }\n  .compta-packing-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.5rem 0.6rem 0.25rem;\n    margin: 0 -0.875rem 0;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .app-dark[_nghost-%COMP%]   .compta-packing-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .compta-packing-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  .compta-mobile-back[_ngcontent-%COMP%] {\n    color: var(--p-primary-600) !important;\n  }\n  .compta-mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .compta-mobile-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    line-height: 1.2;\n  }\n  .app-dark[_nghost-%COMP%]   .compta-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .compta-mobile-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-0);\n  }\n  .compta-mobile-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: var(--p-surface-500);\n    margin: 0.15rem 0 0;\n  }\n  .compta-mobile-filter-btn[_ngcontent-%COMP%] {\n    color: var(--p-primary-600) !important;\n  }\n  .compta-mobile-shell__stats[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n/*# sourceMappingURL=comptabilite-packing-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingListe, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-liste", standalone: true, imports: [
      CommonModule,
      ButtonModule,
      RippleModule,
      MenuModule,
      StatsComptabilitePackingWidget,
      ComptabilitePackingTableau
    ], providers: [MessageService, ConfirmationService, ProductService], template: `<section class="compta-mobile-shell compta-packing-mobile-app">\r
  <header class="compta-packing-mobile-header">\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text compta-mobile-back"\r
      aria-label="Retour \xE0 l'accueil"\r
      (click)="goHome()"\r
    ></button>\r
    <div class="compta-mobile-title-wrap">\r
      <h1 class="compta-mobile-title">Comptabilit\xE9 Packing</h1>\r
      <p class="compta-mobile-subtitle">Facturation prestataires</p>\r
    </div>\r
    <p-menu\r
      #statusMenu\r
      [model]="mobileStatusMenuItems"\r
      [popup]="true"\r
      appendTo="body"\r
      styleClass="compta-mobile-status-menu"\r
    />\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-filter"\r
      class="p-button-rounded p-button-text compta-mobile-filter-btn"\r
      aria-label="Filtrer par statut"\r
      (click)="statusMenu.toggle($event)"\r
    ></button>\r
  </header>\r
\r
  <div class="compta-mobile-scroll">\r
    <div class="compta-mobile-shell__stats grid grid-cols-12 gap-6 mb-6">\r
      <app-stats-comptabilite-packing-widget #statsWidget></app-stats-comptabilite-packing-widget>\r
    </div>\r
    <app-comptabilite-packing-tableau\r
      class="compta-mobile-shell__table"\r
      (dataChanged)="statsWidget.loadStats($event)"\r
    ></app-comptabilite-packing-tableau>\r
  </div>\r
</section>\r
`, styles: ["/* src/app/pages/comptabilite/comptabilite-packing-liste/comptabilite-packing-liste.scss */\n:host {\n  display: block;\n}\n.compta-mobile-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.compta-mobile-shell__stats {\n  margin-bottom: 0;\n}\n.compta-packing-mobile-header {\n  display: none;\n}\n@media (max-width: 768px) {\n  .compta-packing-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n  :host-context(.app-dark) .compta-packing-mobile-app {\n    background: var(--p-surface-900);\n  }\n  .compta-mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n  }\n  .compta-packing-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.5rem 0.6rem 0.25rem;\n    margin: 0 -0.875rem 0;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  :host-context(.app-dark) .compta-packing-mobile-header {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  .compta-mobile-back {\n    color: var(--p-primary-600) !important;\n  }\n  .compta-mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .compta-mobile-title {\n    font-size: 1.25rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    line-height: 1.2;\n  }\n  :host-context(.app-dark) .compta-mobile-title {\n    color: var(--p-surface-0);\n  }\n  .compta-mobile-subtitle {\n    font-size: 0.8rem;\n    color: var(--p-surface-500);\n    margin: 0.15rem 0 0;\n  }\n  .compta-mobile-filter-btn {\n    color: var(--p-primary-600) !important;\n  }\n  .compta-mobile-shell__stats {\n    margin-bottom: 0 !important;\n  }\n}\n/*# sourceMappingURL=comptabilite-packing-liste.css.map */\n"] }]
  }], () => [{ type: Router }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { tableauRef: [{
    type: ViewChild,
    args: [ComptabilitePackingTableau]
  }], onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingListe, { className: "ComptabilitePackingListe", filePath: "src/app/pages/comptabilite/comptabilite-packing-liste/comptabilite-packing-liste.ts", lineNumber: 30 });
})();

// src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.ts
function ComptabilitePackingPaiement_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, "Versement facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose.emit());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
    \u0275\u0275text(13, "Total facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
    \u0275\u0275text(19, "D\xE9j\xE0 vers\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 14);
    \u0275\u0275elementStart(24, "div", 10)(25, "div", 15);
    \u0275\u0275text(26, "Reste \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
    \u0275\u0275text(32, "Montant \xE0 verser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p-inputnumber", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingPaiement_div_0_Template_p_inputnumber_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.montant, $event) || (ctx_r1.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 17)(35, "div", 18);
    \u0275\u0275text(36, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20)(38, "div", 21);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("especes"));
    });
    \u0275\u0275element(39, "i", 22);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Esp\xE8ces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 21);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("virement"));
    });
    \u0275\u0275element(43, "i", 23);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Virement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 21);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("mobile_money"));
    });
    \u0275\u0275element(47, "i", 24);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Mobile");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(50, "div", 25)(51, "div", 26)(52, "div", 27)(53, "div", 12);
    \u0275\u0275text(54, "Montant \xE0 payer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 28);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "button", 29);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmer());
    });
    \u0275\u0275element(58, "i", 30);
    \u0275\u0275elementStart(59, "span", 31);
    \u0275\u0275text(60, "Confirmer le paiement");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.facture.reference.replace("FACT-PACK-", ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 19, ctx_r1.facture.montant_total, "GNF"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 22, ctx_r1.facture.montant_verse, "GNF"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 25, ctx_r1.facture.montant_restant, "GNF"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.montant);
    \u0275\u0275property("min", 1)("max", ctx_r1.facture.montant_restant)("useGrouping", true);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "especes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "virement");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "mobile_money");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.montant ? ctx_r1.formatCurrency(ctx_r1.montant) : "0 GNF");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.montant)("loading", ctx_r1.saving);
  }
}
var ComptabilitePackingPaiement = class _ComptabilitePackingPaiement {
  facture = null;
  saving = false;
  onPay = new EventEmitter();
  onClose = new EventEmitter();
  montant = null;
  selectedMode = "especes";
  ngOnChanges() {
    if (this.facture) {
      this.montant = this.facture.montant_restant;
      this.selectedMode = "especes";
    }
  }
  selectMode(mode) {
    this.selectedMode = mode;
  }
  confirmer() {
    if (!this.montant || this.montant <= 0 || !this.facture)
      return;
    this.onPay.emit({
      montant: this.montant,
      mode_paiement: this.selectedMode
    });
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  static \u0275fac = function ComptabilitePackingPaiement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingPaiement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingPaiement, selectors: [["app-comptabilite-packing-paiement"]], inputs: { facture: "facture", saving: "saving" }, outputs: { onPay: "onPay", onClose: "onClose" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "paiement-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900", 4, "ngIf"], [1, "paiement-panel", "flex", "flex-col", "h-full", "bg-surface-0", "dark:bg-surface-900"], [1, "paiement-header", "w-full", "flex-shrink-0", "p-6", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-start", "items-center"], [1, "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-normal", "mt-1"], ["pButton", "", 1, "w-10", "h-10", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-times"], [1, "paiement-body", "flex-1", "min-h-0", "w-full", "p-6", "flex", "flex-col", "justify-start", "items-start", "gap-6", "overflow-y-auto"], [1, "w-full", "p-5", "bg-surface-50", "dark:bg-surface-800", "rounded-xl", "flex", "flex-col", "justify-start", "items-start", "gap-4"], [1, "w-full", "flex", "justify-start", "items-start", "gap-6"], [1, "flex-1", "text-surface-500", "dark:text-surface-400", "text-base", "font-normal", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "text-base", "font-semibold", "leading-tight", 2, "color", "#059669"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "text-lg", "font-bold", "leading-tight", 2, "color", "#d97706"], [1, "w-full", "flex", "flex-col", "gap-3"], [1, "text-surface-500", "dark:text-surface-400", "text-xs", "font-semibold", "uppercase", "tracking-wider"], ["suffix", " GNF", "locale", "fr-FR", "inputStyleClass", "w-full text-right text-xl font-bold py-4", "styleClass", "w-full", "placeholder", "0", 3, "ngModelChange", "ngModel", "min", "max", "useGrouping"], [1, "w-full", "flex", "gap-3", "paiement-modes"], [1, "slideover-mode", 3, "click"], [1, "pi", "pi-money-bill"], [1, "pi", "pi-building"], [1, "pi", "pi-mobile"], [1, "paiement-footer", "w-full", "border-t", "border-surface-200", "dark:border-surface-700", "p-6", "flex", "flex-col", "gap-5", "flex-shrink-0"], [1, "w-full", "flex", "justify-start", "items-start", "gap-4"], [1, "flex", "justify-start", "items-end", "gap-2"], [1, "flex-1", "text-right", "text-surface-900", "dark:text-surface-0", "text-lg", "font-bold", "leading-tight"], ["pButton", "", "severity", "contrast", 1, "w-full", "py-3", 3, "click", "disabled", "loading"], ["pButtonIcon", "", 1, "pi", "pi-check", "mr-2"], ["pButtonLabel", ""]], template: function ComptabilitePackingPaiement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ComptabilitePackingPaiement_div_0_Template, 61, 28, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.facture);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, ButtonLabel, ButtonIcon, StyleClassModule, InputNumberModule, InputNumber, MoneyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.paiement-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .paiement-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .paiement-footer[_ngcontent-%COMP%] {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.slideover-mode[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.75rem;\n  border-radius: 12px;\n  border: 1.5px solid var(--p-surface-200);\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: var(--p-surface-500);\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.slideover-mode[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.slideover-mode[_ngcontent-%COMP%]:hover {\n  border-color: var(--p-surface-300);\n  background: var(--p-surface-50);\n}\n.slideover-mode--active[_ngcontent-%COMP%] {\n  border-color: var(--p-primary-500);\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  font-weight: 600;\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%] {\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%]:hover {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode--active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .slideover-mode--active[_ngcontent-%COMP%] {\n  border-color: var(--p-primary-500);\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--p-primary-400);\n}\n/*# sourceMappingURL=comptabilite-packing-paiement.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingPaiement, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-paiement", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, InputNumberModule, MoneyPipe, PhoneFormatPipe], template: `<div class="paiement-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900" *ngIf="facture">\r
    <!-- Header -->\r
    <div class="paiement-header w-full flex-shrink-0 p-6 border-b border-surface-200 dark:border-surface-700 flex justify-start items-center">\r
        <div class="flex-1">\r
            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ facture.reference.replace('FACT-PACK-', '') }}</div>\r
            <div class="text-surface-500 dark:text-surface-400 text-sm font-normal mt-1">Versement facture</div>\r
        </div>\r
        <button pButton [text]="true" [rounded]="true" class="w-10 h-10" (click)="onClose.emit()">\r
            <i pButtonIcon class="pi pi-times"></i>\r
        </button>\r
    </div>\r
\r
    <!-- Body (scroll sur mobile, footer reste visible) -->\r
    <div class="paiement-body flex-1 min-h-0 w-full p-6 flex flex-col justify-start items-start gap-6 overflow-y-auto">\r
        <!-- R\xE9sum\xE9 facture -->\r
        <div class="w-full p-5 bg-surface-50 dark:bg-surface-800 rounded-xl flex flex-col justify-start items-start gap-4">\r
            <div class="w-full flex justify-start items-start gap-6">\r
                <div class="flex-1 text-surface-500 dark:text-surface-400 text-base font-normal leading-tight">Total facture</div>\r
                <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{  facture.montant_total | money :'GNF'}}</div>\r
            </div>\r
            <div class="w-full flex justify-start items-start gap-6">\r
                <div class="flex-1 text-surface-500 dark:text-surface-400 text-base font-normal leading-tight">D\xE9j\xE0 vers\xE9</div>\r
                <div class="text-base font-semibold leading-tight" style="color: #059669">{{  facture.montant_verse | money :'GNF'}}</div>\r
            </div>\r
\r
            <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>\r
\r
            <div class="w-full flex justify-start items-start gap-6">\r
                <div class="flex-1 text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Reste \xE0 payer</div>\r
                <div class="text-lg font-bold leading-tight" style="color: #d97706">{{  facture.montant_restant | money :'GNF' }}</div>\r
            </div>\r
        </div> \r
\r
        <!-- Montant \xE0 verser -->\r
        <div class="w-full flex flex-col gap-3">\r
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Montant \xE0 verser</div>\r
            <p-inputnumber\r
                [(ngModel)]="montant"\r
                [min]="1"\r
                [max]="facture.montant_restant"\r
                suffix=" GNF"\r
                [useGrouping]="true"\r
                locale="fr-FR"\r
                inputStyleClass="w-full text-right text-xl font-bold py-4"\r
                styleClass="w-full"\r
                placeholder="0"\r
            ></p-inputnumber>\r
        </div>\r
\r
        <!-- Mode de paiement -->\r
        <div class="w-full flex flex-col gap-3">\r
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Mode de paiement</div>\r
            <div class="w-full flex gap-3 paiement-modes">\r
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'especes'" (click)="selectMode('especes')">\r
                    <i class="pi pi-money-bill"></i>\r
                    <span>Esp\xE8ces</span>\r
                </div>\r
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'virement'" (click)="selectMode('virement')">\r
                    <i class="pi pi-building"></i>\r
                    <span>Virement</span>\r
                </div>\r
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'mobile_money'" (click)="selectMode('mobile_money')">\r
                    <i class="pi pi-mobile"></i>\r
                    <span>Mobile</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Footer (toujours visible sur mobile) -->\r
    <div class="paiement-footer w-full border-t border-surface-200 dark:border-surface-700 p-6 flex flex-col gap-5 flex-shrink-0">\r
        <div class="w-full flex justify-start items-start gap-4">\r
            <div class="flex justify-start items-end gap-2">\r
                <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">Montant \xE0 payer</div>\r
            </div>\r
            <div class="flex-1 text-right text-surface-900 dark:text-surface-0 text-lg font-bold leading-tight">{{ montant ? formatCurrency(montant) : '0 GNF' }}</div>\r
        </div>\r
\r
        <button pButton class="w-full py-3" severity="contrast" (click)="confirmer()" [disabled]="saving || !montant" [loading]="saving">\r
            <i pButtonIcon class="pi pi-check mr-2"></i>\r
            <span pButtonLabel>Confirmer le paiement</span>\r
        </button>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.paiement-panel {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  :host {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .paiement-panel {\n    width: 100%;\n    max-width: 100%;\n  }\n  .paiement-footer {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.slideover-mode {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.75rem;\n  border-radius: 12px;\n  border: 1.5px solid var(--p-surface-200);\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: var(--p-surface-500);\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.slideover-mode i {\n  font-size: 1.25rem;\n}\n.slideover-mode:hover {\n  border-color: var(--p-surface-300);\n  background: var(--p-surface-50);\n}\n.slideover-mode--active {\n  border-color: var(--p-primary-500);\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  font-weight: 600;\n}\n:host-context(.app-dark) .slideover-mode {\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .slideover-mode:hover {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-500);\n}\n:host-context(.app-dark) .slideover-mode--active {\n  border-color: var(--p-primary-500);\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--p-primary-400);\n}\n/*# sourceMappingURL=comptabilite-packing-paiement.css.map */\n"] }]
  }], null, { facture: [{
    type: Input
  }], saving: [{
    type: Input
  }], onPay: [{
    type: Output
  }], onClose: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingPaiement, { className: "ComptabilitePackingPaiement", filePath: "src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.ts", lineNumber: 23 });
})();

// src/app/pages/comptabilite/components/comptabilite-packing-paiement-dialog/comptabilite-packing-paiement-dialog.ts
var ComptabilitePackingPaiementDialog = class _ComptabilitePackingPaiementDialog {
  static \u0275fac = function ComptabilitePackingPaiementDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingPaiementDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingPaiementDialog, selectors: [["app-comptabilite-packing-paiement-dialog"]], decls: 2, vars: 0, template: function ComptabilitePackingPaiementDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "comptabilite-packing-paiement-dialog works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingPaiementDialog, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-paiement-dialog", imports: [], template: "<p>comptabilite-packing-paiement-dialog works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingPaiementDialog, { className: "ComptabilitePackingPaiementDialog", filePath: "src/app/pages/comptabilite/components/comptabilite-packing-paiement-dialog/comptabilite-packing-paiement-dialog.ts", lineNumber: 9 });
})();

// src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.ts
function ComptabiliteHistoriqueVersements_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versement_r3.creator.name, " ");
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", versement_r3.notes, " ");
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const versement_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeleteVersement.emit(versement_r3));
    });
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275element(8, "i", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_span_10_Template, 3, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_11_Template, 2, 1, "div", 38)(12, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template, 3, 2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(versement_r3.montant), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versement_r3.mode_paiement_label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(versement_r3.date_versement), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", versement_r3.creator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", versement_r3.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_Template, 13, 6, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.data.versements.length, " versement", ctx_r1.data.versements.length > 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.data.versements);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3, "Aucun versement enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ComptabiliteHistoriqueVersements_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, "Historique des versements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function ComptabiliteHistoriqueVersements_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose.emit());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "Total facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
    \u0275\u0275text(19, "D\xE9j\xE0 vers\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 15);
    \u0275\u0275elementStart(23, "div", 11)(24, "span", 16);
    \u0275\u0275text(25, "Reste \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(28, ComptabiliteHistoriqueVersements_div_0_div_28_Template, 2, 0, "div", 18)(29, ComptabiliteHistoriqueVersements_div_0_div_29_Template, 4, 3, "div", 19)(30, ComptabiliteHistoriqueVersements_div_0_div_30_Template, 4, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "span", 23);
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data.reference.replace("FACT-PACK-", ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.montant_total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.montant_verse));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.montant_restant));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.data.versements.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.data.versements.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("historique-statut-badge--success", ctx_r1.data.is_soldee)("historique-statut-badge--warn", !ctx_r1.data.is_soldee);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.is_soldee ? "Sold\xE9" : "En cours", " ");
  }
}
var ComptabiliteHistoriqueVersements = class _ComptabiliteHistoriqueVersements {
  data = null;
  loading = false;
  canDelete = false;
  onClose = new EventEmitter();
  onDeleteVersement = new EventEmitter();
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR");
  }
  static \u0275fac = function ComptabiliteHistoriqueVersements_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabiliteHistoriqueVersements)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabiliteHistoriqueVersements, selectors: [["app-comptabilite-historique-versements"]], inputs: { data: "data", loading: "loading", canDelete: "canDelete" }, outputs: { onClose: "onClose", onDeleteVersement: "onDeleteVersement" }, decls: 1, vars: 1, consts: [["class", "historique-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900", 4, "ngIf"], [1, "historique-panel", "flex", "flex-col", "h-full", "bg-surface-0", "dark:bg-surface-900"], [1, "historique-header", "w-full", "flex-shrink-0", "p-6", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "items-center"], [1, "flex-1", "min-w-0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-normal", "mt-1"], ["pButton", "", 1, "w-10", "h-10", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-times"], [1, "historique-body", "flex-1", "min-h-0", "w-full", "overflow-y-auto"], [1, "p-6", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "w-full", "p-5", "bg-surface-50", "dark:bg-surface-800", "rounded-xl", "flex", "flex-col", "gap-4"], [1, "w-full", "flex", "justify-between", "items-center"], [1, "text-surface-500", "dark:text-surface-400", "text-base"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium"], [1, "text-base", "font-semibold", 2, "color", "#059669"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold"], [1, "text-lg", "font-bold", 2, "color", "#d97706"], ["class", "flex items-center justify-center p-12", 4, "ngIf"], ["class", "p-6 flex flex-col gap-3", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-3 py-16 text-surface-300 dark:text-surface-500", 4, "ngIf"], [1, "historique-footer", "w-full", "border-t", "border-surface-200", "dark:border-surface-700", "p-6", "flex-shrink-0"], [1, "flex", "items-center", "justify-between"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-medium"], [1, "historique-statut-badge", "text-sm", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "flex", "items-center", "justify-center", "p-12"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-surface-300"], [1, "p-6", "flex", "flex-col", "gap-3"], [1, "text-surface-500", "dark:text-surface-400", "text-xs", "font-semibold", "uppercase", "tracking-wider", "mb-1"], ["class", "versement-card p-4 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2", 4, "ngFor", "ngForOf"], [1, "versement-card", "p-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-bold", 2, "color", "#059669"], [1, "versement-mode-badge", "text-xs", "font-semibold", "px-2", "py-1", "rounded-full"], [1, "flex", "items-center", "gap-4", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1"], [1, "pi", "pi-calendar", "text-xs"], ["class", "flex items-center gap-1", 4, "ngIf"], ["class", "text-sm text-surface-400 dark:text-surface-500 italic", 4, "ngIf"], ["class", "flex justify-end pt-1", 4, "ngIf"], [1, "pi", "pi-user", "text-xs"], [1, "text-sm", "text-surface-400", "dark:text-surface-500", "italic"], [1, "flex", "justify-end", "pt-1"], ["pButton", "", "severity", "danger", 1, "w-8", "h-8", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-trash", "text-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-16", "text-surface-300", "dark:text-surface-500"], [1, "pi", "pi-inbox", "text-4xl"], [1, "text-sm"]], template: function ComptabiliteHistoriqueVersements_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ComptabiliteHistoriqueVersements_div_0_Template, 37, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ButtonModule, ButtonDirective, ButtonIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.historique-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .historique-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .historique-footer[_ngcontent-%COMP%] {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.versement-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n  transition: background 0.15s ease;\n}\n.versement-mode-badge[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.historique-statut-badge--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.historique-statut-badge--warn[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.app-dark[_nghost-%COMP%]   .versement-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .versement-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n}\n.app-dark[_nghost-%COMP%]   .versement-mode-badge[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .versement-mode-badge[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .historique-statut-badge--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .historique-statut-badge--success[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.12);\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .historique-statut-badge--warn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .historique-statut-badge--warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #fbbf24;\n}\n/*# sourceMappingURL=comptabilite-historique-versements.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabiliteHistoriqueVersements, [{
    type: Component,
    args: [{ selector: "app-comptabilite-historique-versements", standalone: true, imports: [CommonModule, ButtonModule], template: `<div class="historique-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900" *ngIf="data">
    <!-- Header -->
    <div class="historique-header w-full flex-shrink-0 p-6 border-b border-surface-200 dark:border-surface-700 flex items-center">
        <div class="flex-1 min-w-0">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ data.reference.replace('FACT-PACK-', '') }}</div>
            <div class="text-surface-500 dark:text-surface-400 text-sm font-normal mt-1">Historique des versements</div>
        </div>
        <button pButton [text]="true" [rounded]="true" class="w-10 h-10" (click)="onClose.emit()">
            <i pButtonIcon class="pi pi-times"></i>
        </button>
    </div>

    <!-- Body (scrollable) -->
    <div class="historique-body flex-1 min-h-0 w-full overflow-y-auto">
        <!-- R\xE9sum\xE9 facture -->
        <div class="p-6 border-b border-surface-200 dark:border-surface-700">
            <div class="w-full p-5 bg-surface-50 dark:bg-surface-800 rounded-xl flex flex-col gap-4">
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-500 dark:text-surface-400 text-base">Total facture</span>
                    <span class="text-surface-900 dark:text-surface-0 text-base font-medium">{{ formatCurrency(data.montant_total) }}</span>
                </div>
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-500 dark:text-surface-400 text-base">D\xE9j\xE0 vers\xE9</span>
                    <span class="text-base font-semibold" style="color: #059669">{{ formatCurrency(data.montant_verse) }}</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">Reste \xE0 payer</span>
                    <span class="text-lg font-bold" style="color: #d97706">{{ formatCurrency(data.montant_restant) }}</span>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div *ngIf="loading" class="flex items-center justify-center p-12">
            <i class="pi pi-spin pi-spinner text-3xl text-surface-300"></i>
        </div>

        <!-- Liste des versements -->
        <div *ngIf="!loading && data.versements.length > 0" class="p-6 flex flex-col gap-3">
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {{ data.versements.length }} versement{{ data.versements.length > 1 ? 's' : '' }}
            </div>

            <div
                *ngFor="let versement of data.versements"
                class="versement-card p-4 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
            >
                <div class="flex justify-between items-center">
                    <span class="text-surface-900 dark:text-surface-0 text-base font-bold" style="color: #059669">
                        {{ formatCurrency(versement.montant) }}
                    </span>
                    <span class="versement-mode-badge text-xs font-semibold px-2 py-1 rounded-full">
                        {{ versement.mode_paiement_label }}
                    </span>
                </div>

                <div class="flex items-center gap-4 text-sm text-surface-500 dark:text-surface-400">
                    <span class="flex items-center gap-1">
                        <i class="pi pi-calendar text-xs"></i>
                        {{ formatDate(versement.date_versement) }}
                    </span>
                    <span *ngIf="versement.creator" class="flex items-center gap-1">
                        <i class="pi pi-user text-xs"></i>
                        {{ versement.creator.name }}
                    </span>
                </div>

                <div *ngIf="versement.notes" class="text-sm text-surface-400 dark:text-surface-500 italic">
                    {{ versement.notes }}
                </div>

                <div *ngIf="canDelete" class="flex justify-end pt-1">
                    <button
                        pButton
                        [text]="true"
                        [rounded]="true"
                        severity="danger"
                        class="w-8 h-8"
                        (click)="onDeleteVersement.emit(versement)"
                    >
                        <i pButtonIcon class="pi pi-trash text-sm"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div *ngIf="!loading && data.versements.length === 0" class="flex flex-col items-center justify-center gap-3 py-16 text-surface-300 dark:text-surface-500">
            <i class="pi pi-inbox text-4xl"></i>
            <span class="text-sm">Aucun versement enregistr\xE9</span>
        </div>
    </div>

    <!-- Footer -->
    <div class="historique-footer w-full border-t border-surface-200 dark:border-surface-700 p-6 flex-shrink-0">
        <div class="flex items-center justify-between">
            <span class="text-surface-500 dark:text-surface-400 text-sm font-medium">Statut</span>
            <span
                class="historique-statut-badge text-sm font-semibold px-3 py-1 rounded-full"
                [class.historique-statut-badge--success]="data.is_soldee"
                [class.historique-statut-badge--warn]="!data.is_soldee"
            >
                {{ data.is_soldee ? 'Sold\xE9' : 'En cours' }}
            </span>
        </div>
    </div>
</div>
`, styles: ["/* src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.historique-panel {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  :host {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .historique-panel {\n    width: 100%;\n    max-width: 100%;\n  }\n  .historique-footer {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.versement-card {\n  background: var(--p-surface-0);\n  transition: background 0.15s ease;\n}\n.versement-mode-badge {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.historique-statut-badge--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.historique-statut-badge--warn {\n  background: #fffbeb;\n  color: #d97706;\n}\n:host-context(.app-dark) .versement-card {\n  background: var(--p-surface-800);\n}\n:host-context(.app-dark) .versement-mode-badge {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .historique-statut-badge--success {\n  background: rgba(5, 150, 105, 0.12);\n  color: #34d399;\n}\n:host-context(.app-dark) .historique-statut-badge--warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #fbbf24;\n}\n/*# sourceMappingURL=comptabilite-historique-versements.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], loading: [{
    type: Input
  }], canDelete: [{
    type: Input
  }], onClose: [{
    type: Output
  }], onDeleteVersement: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabiliteHistoriqueVersements, { className: "ComptabiliteHistoriqueVersements", filePath: "src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.ts", lineNumber: 13 });
})();

// src/app/pages/comptabilite/comptabilite-packing-detail/comptabilite-packing-detail.ts
var _c02 = () => [10, 20, 30];
var _c12 = () => ({ "min-width": "55rem" });
var _c22 = () => ({ width: "750px" });
var _c32 = () => ({ "max-height": "70vh", "overflow": "auto" });
var _c42 = () => ({ width: "450px" });
var _c52 = (a0, a1, a2, a3) => ({ "detail-facture-card__badge--danger": a0, "detail-facture-card__badge--warn": a1, "detail-facture-card__badge--success": a2, "detail-facture-card__badge--secondary": a3 });
var _c6 = (a0, a1, a2, a3) => ({ "status-badge--danger": a0, "status-badge--warn": a1, "status-badge--success": a2, "status-badge--secondary": a3 });
function ComptabilitePackingDetail_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.prestatairePhone, "INT"));
  }
}
function ComptabilitePackingDetail_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r1.prestatairePhone, "INT"), " ");
  }
}
function ComptabilitePackingDetail_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSlideoverPaiement());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "app-comptabilite-packing-paiement", 45);
    \u0275\u0275listener("onPay", function ComptabilitePackingDetail_div_16_Template_app_comptabilite_packing_paiement_onPay_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSlideoverPay($event));
    })("onClose", function ComptabilitePackingDetail_div_16_Template_app_comptabilite_packing_paiement_onClose_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSlideoverPaiement());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("facture", ctx_r1.slideoverFacture)("saving", ctx_r1.slideoverSaving);
  }
}
function ComptabilitePackingDetail_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_17_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistoriqueSlideover());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 44)(3, "app-comptabilite-historique-versements", 46);
    \u0275\u0275listener("onClose", function ComptabilitePackingDetail_div_17_Template_app_comptabilite_historique_versements_onClose_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeHistoriqueSlideover());
    })("onDeleteVersement", function ComptabilitePackingDetail_div_17_Template_app_comptabilite_historique_versements_onDeleteVersement_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHistoriqueDeleteVersement($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r1.historiqueData)("loading", ctx_r1.historiqueLoading)("canDelete", ctx_r1.canDeleteVersement);
  }
}
function ComptabilitePackingDetail_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingDetail_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, "Aucune facture pour ce prestataire.");
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingDetail_div_51_article_1_p_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 65);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_51_article_1_p_button_22_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const facture_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSlideoverPaiement(facture_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_div_51_article_1_p_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 66);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_51_article_1_p_button_23_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const facture_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openHistorique(facture_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_div_51_article_1_p_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 67);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_51_article_1_p_button_24_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const facture_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteFacture(facture_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_div_51_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "span", 56);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 57);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 58);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 59)(19, "span", 60);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 61);
    \u0275\u0275template(22, ComptabilitePackingDetail_div_51_article_1_p_button_22_Template, 1, 2, "p-button", 62)(23, ComptabilitePackingDetail_div_51_article_1_p_button_23_Template, 1, 2, "p-button", 63)(24, ComptabilitePackingDetail_div_51_article_1_p_button_24_Template, 1, 2, "p-button", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const facture_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getReferenceShort(facture_r6.reference));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateDisplay(facture_r6.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", facture_r6.total_rouleaux, " rouleaux");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, facture_r6.montant_total, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Vers\xE9 : ", \u0275\u0275pipeBind2(14, 14, facture_r6.montant_verse, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Restant : ", \u0275\u0275pipeBind2(17, 17, facture_r6.montant_restant, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(20, _c52, facture_r6.statut === "impayee", facture_r6.statut === "partielle", facture_r6.statut === "payee", facture_r6.statut === "annulee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(facture_r6.statut_label);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canCreateVersement && facture_r6.statut !== "payee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canReadVersement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeleteFacture && facture_r6.montant_verse === 0);
  }
}
function ComptabilitePackingDetail_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275template(1, ComptabilitePackingDetail_div_51_article_1_Template, 25, 25, "article", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.factures());
  }
}
function ComptabilitePackingDetail_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "h5", 69);
    \u0275\u0275text(2, "Factures");
    \u0275\u0275elementEnd()();
  }
}
function ComptabilitePackingDetail_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 70)(2, "span", 71);
    \u0275\u0275text(3, "R\xE9f\xE9rence ");
    \u0275\u0275element(4, "p-sortIcon", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 73)(6, "span", 71);
    \u0275\u0275text(7, "Date ");
    \u0275\u0275element(8, "p-sortIcon", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 75)(10, "span", 76);
    \u0275\u0275text(11, "Rouleaux ");
    \u0275\u0275element(12, "p-sortIcon", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 78)(14, "span", 76);
    \u0275\u0275text(15, "Prix/rouleau");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 79)(17, "span", 76);
    \u0275\u0275text(18, "A payer ");
    \u0275\u0275element(19, "p-sortIcon", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "th", 81)(21, "span", 76);
    \u0275\u0275text(22, "Vers\xE9 ");
    \u0275\u0275element(23, "p-sortIcon", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "th", 78)(25, "span", 76);
    \u0275\u0275text(26, "Restant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "th", 83)(28, "span", 84);
    \u0275\u0275text(29, "Statut ");
    \u0275\u0275element(30, "p-sortIcon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "th", 86);
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingDetail_ng_template_58_p_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 65);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_58_p_button_24_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const facture_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openSlideoverPaiement(facture_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_ng_template_58_p_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 97);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_58_p_button_25_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const facture_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openHistorique(facture_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_ng_template_58_p_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 98);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_58_p_button_26_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const facture_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteFacture(facture_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 89);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 89);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 90);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 91);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 92)(20, "span", 93);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "div", 94);
    \u0275\u0275template(24, ComptabilitePackingDetail_ng_template_58_p_button_24_Template, 1, 2, "p-button", 62)(25, ComptabilitePackingDetail_ng_template_58_p_button_25_Template, 1, 2, "p-button", 95)(26, ComptabilitePackingDetail_ng_template_58_p_button_26_Template, 1, 2, "p-button", 96);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const facture_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getReferenceShort(facture_r10.reference));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateDisplay(facture_r10.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(facture_r10.total_rouleaux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, facture_r10.prix_par_rouleau, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, facture_r10.montant_total, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, facture_r10.montant_verse, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, facture_r10.montant_restant, "GNF"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(24, _c6, facture_r10.statut === "impayee", facture_r10.statut === "partielle", facture_r10.statut === "payee", facture_r10.statut === "annulee"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", facture_r10.statut_label, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.canCreateVersement && facture_r10.statut !== "payee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canReadVersement);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeleteFacture && facture_r10.montant_verse === 0);
  }
}
function ComptabilitePackingDetail_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 99)(2, "div", 100);
    \u0275\u0275element(3, "i", 101);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune facture pour ce prestataire");
    \u0275\u0275elementEnd()()()();
  }
}
function ComptabilitePackingDetail_div_63_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 112);
    \u0275\u0275text(1, "Montant requis.");
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingDetail_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 105);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Total : ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "span", 105);
    \u0275\u0275elementStart(11, "span", 106);
    \u0275\u0275text(12, "Vers\xE9 : ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "span", 105);
    \u0275\u0275elementStart(17, "span", 107);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 102)(21, "div", 36)(22, "label", 108);
    \u0275\u0275text(23, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p-select", 109);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingDetail_div_63_Template_p_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.versementData.mode_paiement, $event) || (ctx_r1.versementData.mode_paiement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 36)(26, "label", 108);
    \u0275\u0275text(27, "Montant \xE0 verser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p-inputnumber", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingDetail_div_63_Template_p_inputnumber_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.versementData.montant, $event) || (ctx_r1.versementData.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ComptabilitePackingDetail_div_63_small_29_Template, 2, 0, "small", 111);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getReferenceShort(ctx_r1.selectedFacture.reference));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 11, ctx_r1.selectedFacture.montant_total, "GNF"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 14, ctx_r1.selectedFacture.montant_verse, "GNF"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Restant : ", \u0275\u0275pipeBind2(19, 17, ctx_r1.selectedFacture.montant_restant, "GNF"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.versementData.mode_paiement);
    \u0275\u0275property("options", ctx_r1.modesPaiement);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.versementData.montant);
    \u0275\u0275property("min", 1)("max", ctx_r1.selectedFacture.montant_restant)("useGrouping", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.versementSubmitted && !ctx_r1.versementData.montant);
  }
}
function ComptabilitePackingDetail_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 113);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_64_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideVersementDialog());
    });
    \u0275\u0275elementStart(1, "span", 114);
    \u0275\u0275text(2, "Annuler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 115);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_64_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveVersement());
    });
    \u0275\u0275elementStart(4, "span", 114);
    \u0275\u0275text(5, "Enregistrer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.versementSaving)("loading", ctx_r1.versementSaving);
  }
}
function ComptabilitePackingDetail_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "i", 117);
    \u0275\u0275elementEnd();
  }
}
function ComptabilitePackingDetail_div_68_p_table_20_ng_template_1_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 125);
  }
}
function ComptabilitePackingDetail_div_68_p_table_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th")(2, "span", 71);
    \u0275\u0275text(3, "Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "th", 78)(5, "span", 76);
    \u0275\u0275text(6, "Montant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th")(8, "span", 71);
    \u0275\u0275text(9, "Mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "th")(11, "span", 71);
    \u0275\u0275text(12, "Notes");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ComptabilitePackingDetail_div_68_p_table_20_ng_template_1_th_13_Template, 1, 0, "th", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.canDeleteVersement);
  }
}
function ComptabilitePackingDetail_div_68_p_table_20_ng_template_3_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 92)(1, "p-button", 67);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_div_68_p_table_20_ng_template_3_td_9_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const versement_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteVersement(ctx_r1.historiqueData.facture_id, versement_r16));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabilitePackingDetail_div_68_p_table_20_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 127);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 126);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ComptabilitePackingDetail_div_68_p_table_20_ng_template_3_td_9_Template, 2, 2, "td", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDateDisplay(versement_r16.date_versement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(versement_r16.montant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versement_r16.mode_paiement_label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(versement_r16.notes || "-");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDeleteVersement);
  }
}
function ComptabilitePackingDetail_div_68_p_table_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 123);
    \u0275\u0275template(1, ComptabilitePackingDetail_div_68_p_table_20_ng_template_1_Template, 14, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(3, ComptabilitePackingDetail_div_68_p_table_20_ng_template_3_Template, 10, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r1.historiqueData.versements)("rowHover", true);
  }
}
function ComptabilitePackingDetail_div_68_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "i", 101);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucun versement enregistr\xE9");
    \u0275\u0275elementEnd()();
  }
}
function ComptabilitePackingDetail_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "span", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 105);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Total: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "span", 105);
    \u0275\u0275elementStart(10, "span", 106);
    \u0275\u0275text(11, "Vers\xE9: ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "span", 105);
    \u0275\u0275elementStart(15, "span", 119);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 120)(18, "span", 93);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, ComptabilitePackingDetail_div_68_p_table_20_Template, 5, 2, "p-table", 121)(21, ComptabilitePackingDetail_div_68_div_21_Template, 4, 0, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getReferenceShort(ctx_r1.historiqueData.reference));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.historiqueData.montant_total));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.historiqueData.montant_verse));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Restant: ", ctx_r1.formatCurrency(ctx_r1.historiqueData.montant_restant));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.historiqueData.is_soldee ? "status-badge--success" : "status-badge--warn");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.historiqueData.is_soldee ? "Sold\xE9" : "En cours", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.historiqueData.versements.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.historiqueData.versements.length === 0);
  }
}
function ComptabilitePackingDetail_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 129);
    \u0275\u0275listener("click", function ComptabilitePackingDetail_ng_template_69_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.historiqueDialog = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
var ComptabilitePackingDetail = class _ComptabilitePackingDetail {
  route;
  router;
  factureService;
  messageService;
  confirmationService;
  authService;
  document;
  mobileBreakpoint = 768;
  mobilePwaClass = "comptabilite-packing-detail-mobile-pwa";
  prestataireId = 0;
  prestataireNom = "";
  prestatairePhone = "";
  factures = signal([], ...ngDevMode ? [{ debugName: "factures" }] : []);
  loading = false;
  // Totaux 
  totalFacture = 0;
  totalVerse = 0;
  totalRestant = 0;
  // Dialog versement
  versementDialog = false;
  selectedFacture = null;
  versementData = {
    montant: null,
    date_versement: /* @__PURE__ */ new Date(),
    mode_paiement: "especes",
    notes: ""
  };
  versementSaving = false;
  versementSubmitted = false;
  modesPaiement = [
    { label: MODE_PAIEMENT_LABELS.especes, value: "especes" },
    { label: MODE_PAIEMENT_LABELS.virement, value: "virement" },
    { label: MODE_PAIEMENT_LABELS.cheque, value: "cheque" },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: "mobile_money" }
  ];
  // Dialog historique versements
  historiqueDialog = false;
  historiqueData = null;
  historiqueLoading = false;
  // Permissions
  canReadVersement = false;
  canCreateVersement = false;
  canDeleteVersement = false;
  canDeleteFacture = false;
  constructor(route, router, factureService, messageService, confirmationService, authService, document) {
    this.route = route;
    this.router = router;
    this.factureService = factureService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.document = document;
    this.canReadVersement = this.authService.hasPermission("versements.read");
    this.canCreateVersement = this.authService.hasPermission("versements.create");
    this.canDeleteVersement = this.authService.hasPermission("versements.delete");
    this.canDeleteFacture = this.authService.hasPermission("facture-packings.delete");
  }
  ngOnInit() {
    this.syncMobilePwaMode();
    this.route.params.subscribe((params) => {
      this.prestataireId = +params["id"] || 0;
    });
    this.route.queryParams.subscribe((params) => {
      this.prestataireNom = params["prestataire_nom"] || "";
      this.prestatairePhone = params["prestataire_phone"] || "";
    });
    if (this.prestataireId) {
      this.loadFactures();
    }
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onWindowResize() {
    this.syncMobilePwaMode();
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  loadFactures() {
    this.loading = true;
    this.factureService.getFactures({ prestataire_id: this.prestataireId }).subscribe({
      next: (response) => {
        const data = (response.data || []).map((f) => new FacturePacking(f));
        this.factures.set(data);
        this.calculateTotals(data);
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les factures",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  calculateTotals(factures) {
    this.totalFacture = factures.reduce((sum, f) => sum + f.montant_total, 0);
    this.totalVerse = factures.reduce((sum, f) => sum + f.montant_verse, 0);
    this.totalRestant = factures.reduce((sum, f) => sum + f.montant_restant, 0);
  }
  // ========================= Versement =========================
  openVersement(facture) {
    this.selectedFacture = facture;
    this.versementDialog = true;
    this.versementSubmitted = false;
    this.versementData = {
      montant: facture.montant_restant,
      date_versement: /* @__PURE__ */ new Date(),
      mode_paiement: "especes",
      notes: ""
    };
  }
  hideVersementDialog() {
    this.versementDialog = false;
    this.selectedFacture = null;
    this.versementSubmitted = false;
  }
  saveVersement() {
    this.versementSubmitted = true;
    if (!this.selectedFacture || !this.versementData.montant || !this.versementData.date_versement || this.versementSaving) {
      return;
    }
    this.versementSaving = true;
    const dto = {
      montant: this.versementData.montant,
      date_versement: this.formatDate(this.versementData.date_versement),
      mode_paiement: this.versementData.mode_paiement,
      notes: this.versementData.notes || void 0
    };
    this.factureService.createVersement(this.selectedFacture.id, dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistr\xE9`,
          life: 3e3
        });
        this.versementSaving = false;
        this.versementDialog = false;
        this.loadFactures();
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: msg,
          life: 5e3
        });
        this.versementSaving = false;
      }
    });
  }
  // ========================= Historique versements =========================
  openHistorique(facture) {
    if (this.isMobile) {
      this.historiqueSlideoverVisible = true;
    } else {
      this.historiqueDialog = true;
    }
    this.historiqueLoading = true;
    this.historiqueData = null;
    this.factureService.getVersements(facture.id).subscribe({
      next: (response) => {
        this.historiqueData = response.data;
        this.historiqueLoading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les versements",
          life: 3e3
        });
        this.historiqueLoading = false;
        this.historiqueDialog = false;
        this.historiqueSlideoverVisible = false;
      }
    });
  }
  closeHistoriqueSlideover() {
    this.historiqueSlideoverVisible = false;
    this.historiqueData = null;
  }
  onHistoriqueDeleteVersement(versement) {
    if (!this.historiqueData)
      return;
    this.confirmDeleteVersement(this.historiqueData.facture_id, versement);
  }
  confirmDeleteVersement(factureId, versement) {
    this.confirmationService.confirm({
      message: `Supprimer le versement de ${this.formatCurrency(versement.montant)} ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Supprimer",
      rejectLabel: "Annuler",
      accept: () => {
        this.factureService.deleteVersement(factureId, versement.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "Versement supprim\xE9",
              life: 3e3
            });
            if (this.historiqueData) {
              this.openHistorique({ id: factureId });
            }
            this.loadFactures();
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Impossible de supprimer le versement",
              life: 3e3
            });
          }
        });
      }
    });
  }
  confirmDeleteFacture(facture) {
    this.confirmationService.confirm({
      message: `Supprimer la facture ${facture.reference} ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Supprimer",
      rejectLabel: "Annuler",
      accept: () => {
        this.factureService.deleteFacture(facture.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "Facture supprim\xE9e",
              life: 3e3
            });
            this.loadFactures();
          },
          error: (error) => {
            const msg = error?.error?.message || "Impossible de supprimer la facture";
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: msg,
              life: 5e3
            });
          }
        });
      }
    });
  }
  // ========================= Helpers =========================
  getStatutSeverity(statut) {
    return FACTURE_PACKING_STATUT_SEVERITY[statut] ?? "info";
  }
  formatDate(date) {
    if (!date)
      return "";
    if (typeof date === "string")
      return date;
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  formatDateDisplay(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR");
  }
  getReferenceShort(ref) {
    return (ref || "").replace("FACT-PACK-", "");
  }
  goBack() {
    this.router.navigate(["/comptabilite/comptabilite-packing-liste"]);
  }
  // Slide-over historique (mobile)
  historiqueSlideoverVisible = false;
  get isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= this.mobileBreakpoint;
  }
  // Slide-over paiement
  slideoverVisible = false;
  slideoverFacture = null;
  slideoverSaving = false;
  openSlideoverPaiement(facture) {
    this.slideoverFacture = facture;
    this.slideoverVisible = true;
  }
  closeSlideoverPaiement() {
    this.slideoverVisible = false;
    this.slideoverFacture = null;
  }
  onSlideoverPay(payload) {
    if (!this.slideoverFacture || this.slideoverSaving)
      return;
    this.slideoverSaving = true;
    const dto = {
      montant: payload.montant,
      date_versement: this.formatDate(/* @__PURE__ */ new Date()),
      mode_paiement: payload.mode_paiement
    };
    this.factureService.createVersement(this.slideoverFacture.id, dto).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistr\xE9`,
          life: 3e3
        });
        this.slideoverSaving = false;
        this.closeSlideoverPaiement();
        this.loadFactures();
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: msg,
          life: 5e3
        });
        this.slideoverSaving = false;
      }
    });
  }
  static \u0275fac = function ComptabilitePackingDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingDetail)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FacturePaiementService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingDetail, selectors: [["app-comptabilite-packing-detail"]], hostBindings: function ComptabilitePackingDetail_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ComptabilitePackingDetail_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 72, vars: 52, consts: [["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["position", "top-right", "appendTo", "body", 3, "baseZIndex", "preventOpenDuplicates"], [1, "detail-page-wrap"], [1, "detail-mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 la liste", 1, "p-button-rounded", "p-button-text", "detail-mobile-back", 3, "click"], [1, "detail-mobile-title-wrap"], [1, "detail-mobile-title"], ["class", "detail-mobile-subtitle", 4, "ngIf"], [1, "detail-header", "detail-header--desktop"], [1, "detail-header__left"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Retour", 3, "click", "rounded", "text"], [1, "detail-header__name"], ["class", "detail-header__phone", 4, "ngIf"], ["class", "fixed inset-0 z-50", 4, "ngIf"], [1, "detail-mobile-scroll"], [1, "stats-bar", "mb-6"], [1, "stats-bar__item"], [1, "stats-bar__icon"], [1, "pi", "pi-wallet"], [1, "stats-bar__value"], [1, "stats-bar__label"], [1, "stats-bar__divider"], [1, "pi", "pi-check-circle"], [1, "pi", "pi-arrow-right"], [1, "detail-factures-mobile"], [1, "detail-factures-mobile__title"], ["class", "detail-factures-mobile__state", 4, "ngIf"], ["class", "detail-factures-mobile__list", 4, "ngIf"], [1, "card", "tableau-card", "detail-tableau-desktop"], ["dataKey", "id", "currentPageReportTemplate", "{first} \xE0 {last} sur {totalRecords} factures", 3, "value", "rows", "paginator", "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "loading", "tableStyle"], ["header", "Enregistrer un versement", 3, "visibleChange", "visible", "contentStyle", "modal", "blockScroll", "dismissableMask", "closeOnEscape"], ["class", "flex flex-col gap-4", 4, "ngIf"], [1, "mt-4"], ["header", "Historique des versements", 3, "visibleChange", "visible", "contentStyle", "modal", "blockScroll", "dismissableMask", "closeOnEscape"], ["class", "flex items-center justify-center p-12", 4, "ngIf"], [1, "detail-mobile-subtitle"], [1, "detail-header__phone"], [1, "pi", "pi-phone"], [1, "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-black/50", "animate-fadein", 3, "click"], [1, "detail-paiement-slideover", "bg-surface-0", "dark:bg-surface-900", "absolute", "top-0", "right-0", "shadow-xl", "w-full", "md:w-108", "h-full", "animate-fadeinright"], [3, "onPay", "onClose", "facture", "saving"], [3, "onClose", "onDeleteVersement", "data", "loading", "canDelete"], [1, "detail-factures-mobile__state"], [1, "detail-factures-mobile__list"], ["class", "detail-facture-card", 4, "ngFor", "ngForOf"], [1, "detail-facture-card"], [1, "detail-facture-card__main"], [1, "detail-facture-card__ref"], [1, "detail-facture-card__date"], [1, "detail-facture-card__rouleaux"], [1, "detail-facture-card__amounts"], [1, "detail-facture-card__total"], [1, "detail-facture-card__verse"], [1, "detail-facture-card__restant"], [1, "detail-facture-card__footer"], [1, "detail-facture-card__badge", 3, "ngClass"], [1, "detail-facture-card__actions"], ["icon", "pi pi-money-bill", "severity", "secondary", "pTooltip", "Payer", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-list", "severity", "info", "pTooltip", "Historique", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-money-bill", "severity", "secondary", "pTooltip", "Payer", 3, "click", "text", "rounded"], ["icon", "pi pi-list", "severity", "info", "pTooltip", "Historique", 3, "click", "text", "rounded"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 3, "click", "text", "rounded"], [1, "table-caption"], [1, "table-caption__title"], ["pSortableColumn", "reference"], [1, "col-header"], ["field", "reference"], ["pSortableColumn", "date"], ["field", "date"], ["pSortableColumn", "total_rouleaux", 1, "text-right"], [1, "col-header", "justify-end"], ["field", "total_rouleaux"], [1, "text-right"], ["pSortableColumn", "montant_total", 1, "text-right"], ["field", "montant_total"], ["pSortableColumn", "montant_verse", 1, "text-right"], ["field", "montant_verse"], ["pSortableColumn", "statut", 1, "text-center"], [1, "col-header", "justify-center"], ["field", "statut"], [2, "width", "10rem"], [1, "font-semibold"], [1, "cell-secondary", "font-semibold"], [1, "text-right", "cell-mono", "font-semibold"], [1, "text-right", "cell-mono", "cell-success", "font-semibold"], [1, "text-right", "cell-mono", "cell-bold"], [1, "text-center"], [1, "status-badge", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-1"], ["icon", "pi pi-list", "severity", "secondary", "pTooltip", "Historique versements", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "secondary", "pTooltip", "Supprimer", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-list", "severity", "secondary", "pTooltip", "Historique versements", 3, "click", "text", "rounded"], ["icon", "pi pi-trash", "severity", "secondary", "pTooltip", "Supprimer", 3, "click", "text", "rounded"], ["colspan", "9"], [1, "empty-state"], [1, "pi", "pi-inbox"], [1, "flex", "flex-col", "gap-4"], [1, "preview-summary"], [1, "font-bold"], [1, "preview-summary__sep"], [1, "cell-success"], [1, "font-bold", 2, "color", "#d97706"], [1, "block", "font-bold", "mb-2"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options"], ["suffix", " GNF", "locale", "fr-FR", "inputStyleClass", "w-full", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "max", "useGrouping"], ["class", "text-red-500", 4, "ngIf"], [1, "text-red-500"], ["pButton", "", 3, "click", "outlined"], ["pButtonLabel", ""], ["pButton", "", 3, "click", "disabled", "loading"], [1, "flex", "items-center", "justify-center", "p-12"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-surface-300"], [1, "font-bold", "text-lg"], [1, "cell-bold"], [1, "ml-auto"], [3, "value", "rowHover", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [3, "value", "rowHover"], ["style", "width: 4rem", 4, "ngIf"], [2, "width", "4rem"], [1, "cell-secondary"], [1, "text-right", "cell-mono", "cell-success", "font-bold"], ["class", "text-center", 4, "ngIf"], ["label", "Fermer", 3, "click", "text"]], template: function ComptabilitePackingDetail_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast", 5);
      \u0275\u0275elementStart(1, "div", 6)(2, "header", 7)(3, "button", 8);
      \u0275\u0275listener("click", function ComptabilitePackingDetail_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 9)(5, "h1", 10);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ComptabilitePackingDetail_p_7_Template, 3, 4, "p", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 12)(9, "div", 13)(10, "p-button", 14);
      \u0275\u0275listener("click", function ComptabilitePackingDetail_Template_p_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div")(12, "h4", 15);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, ComptabilitePackingDetail_span_14_Template, 4, 4, "span", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "div");
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ComptabilitePackingDetail_div_16_Template, 4, 2, "div", 17)(17, ComptabilitePackingDetail_div_17_Template, 4, 3, "div", 17);
      \u0275\u0275elementStart(18, "div", 18)(19, "div", 19)(20, "div", 20)(21, "div", 21);
      \u0275\u0275element(22, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div")(24, "div", 23);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 24);
      \u0275\u0275text(27, "Total \xE0 payer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(28, "div", 25);
      \u0275\u0275elementStart(29, "div", 20)(30, "div", 21);
      \u0275\u0275element(31, "i", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "div", 23);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275text(36, "Total vers\xE9");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(37, "div", 25);
      \u0275\u0275elementStart(38, "div", 20)(39, "div", 21);
      \u0275\u0275element(40, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "div", 23);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 24);
      \u0275\u0275text(45, "Reste \xE0 payer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 28)(47, "h3", 29);
      \u0275\u0275text(48, "Factures");
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, ComptabilitePackingDetail_div_49_Template, 2, 0, "div", 30)(50, ComptabilitePackingDetail_div_50_Template, 2, 0, "div", 30)(51, ComptabilitePackingDetail_div_51_Template, 2, 1, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 32)(53, "p-table", 33);
      \u0275\u0275template(54, ComptabilitePackingDetail_ng_template_54_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(56, ComptabilitePackingDetail_ng_template_56_Template, 32, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(58, ComptabilitePackingDetail_ng_template_58_Template, 27, 29, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(60, ComptabilitePackingDetail_ng_template_60_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(62, "p-dialog", 34);
      \u0275\u0275twoWayListener("visibleChange", function ComptabilitePackingDetail_Template_p_dialog_visibleChange_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.versementDialog, $event) || (ctx.versementDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(63, ComptabilitePackingDetail_div_63_Template, 30, 20, "div", 35)(64, ComptabilitePackingDetail_ng_template_64_Template, 6, 3, "ng-template", 36, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p-dialog", 37);
      \u0275\u0275twoWayListener("visibleChange", function ComptabilitePackingDetail_Template_p_dialog_visibleChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.historiqueDialog, $event) || (ctx.historiqueDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(67, ComptabilitePackingDetail_div_67_Template, 2, 0, "div", 38)(68, ComptabilitePackingDetail_div_68_Template, 22, 8, "div", 35)(69, ComptabilitePackingDetail_ng_template_69_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275property("baseZIndex", 1100)("preventOpenDuplicates", true);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.prestataireNom || "D\xE9tail");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.prestatairePhone);
      \u0275\u0275advance(3);
      \u0275\u0275property("rounded", true)("text", true);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.prestataireNom);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.prestatairePhone);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.slideoverVisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historiqueSlideoverVisible);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalFacture));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalVerse));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatCurrency(ctx.totalRestant));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.factures().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.factures().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.factures())("rows", 10)("paginator", true)("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(45, _c02))("loading", ctx.loading)("tableStyle", \u0275\u0275pureFunction0(46, _c12));
      \u0275\u0275advance(9);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c22));
      \u0275\u0275twoWayProperty("visible", ctx.versementDialog);
      \u0275\u0275property("contentStyle", \u0275\u0275pureFunction0(48, _c32))("modal", true)("blockScroll", true)("dismissableMask", false)("closeOnEscape", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFacture);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(49, _c22));
      \u0275\u0275twoWayProperty("visible", ctx.historiqueDialog);
      \u0275\u0275property("contentStyle", \u0275\u0275pureFunction0(50, _c32))("modal", true)("blockScroll", true)("dismissableMask", false)("closeOnEscape", false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historiqueLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.historiqueData);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(51, _c42));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonModule,
    ButtonDirective,
    Button,
    ButtonLabel,
    RippleModule,
    Ripple,
    ToastModule,
    Toast,
    ToolbarModule,
    InputTextModule,
    SelectModule,
    Select,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    ConfirmDialog,
    DatePickerModule,
    TextareaModule,
    TooltipModule,
    Tooltip,
    StyleClassModule,
    ComptabilitePackingPaiement,
    ComptabiliteHistoriqueVersements,
    RatingModule,
    RadioButtonModule,
    PhoneFormatPipe,
    MoneyPipe
  ], styles: ["\n\n@media (max-width: 768px) {\n  .detail-paiement-slideover[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100%;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n}\n@media (max-width: 768px) {\n  .detail-paiement-slideover[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    min-height: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .detail-page-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n  }\n}\n@media (max-width: 768px) {\n  .detail-mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.detail-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 1.75rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.detail-header__left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.detail-header__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-header__phone[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--p-surface-400);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.15rem;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stats-bar__item[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1.5rem;\n}\n.stats-bar__divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 40px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.stats-bar__icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.stats-bar__value[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.stats-bar__label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n.tableau-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;\n  overflow: hidden;\n}\n.table-caption__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.col-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-500);\n}\n.cell-secondary[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.cell-mono[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.9rem;\n}\n.cell-success[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.cell-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.status-badge--danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.status-badge--warn[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.status-badge--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.status-badge--secondary[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  color: var(--p-surface-500);\n}\n.preview-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--p-surface-600);\n  flex-wrap: wrap;\n}\n.preview-summary__sep[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n.detail-factures-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.detail-factures-mobile__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-factures-mobile__state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.detail-factures-mobile__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.detail-facture-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.detail-facture-card__main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n.detail-facture-card__ref[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--p-surface-900);\n}\n.detail-facture-card__date[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--p-surface-500);\n}\n.detail-facture-card__rouleaux[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--p-surface-500);\n}\n.detail-facture-card__amounts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.detail-facture-card__total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-facture-card__verse[_ngcontent-%COMP%], \n.detail-facture-card__restant[_ngcontent-%COMP%] {\n  color: var(--p-surface-600);\n  font-weight: 500;\n}\n.detail-facture-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.detail-facture-card__badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.detail-facture-card__badge--danger[_ngcontent-%COMP%], \n.detail-facture-card__badge--warn[_ngcontent-%COMP%], \n.detail-facture-card__badge--success[_ngcontent-%COMP%], \n.detail-facture-card__badge--secondary[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.detail-facture-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.detail-facture-card__actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  color: var(--p-surface-500) !important;\n}\n@media (max-width: 768px) {\n  .detail-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.5rem 0.6rem 0.25rem;\n    margin: 0 -0.875rem 0;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .app-dark[_nghost-%COMP%]   .detail-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  .detail-mobile-back[_ngcontent-%COMP%] {\n    color: var(--p-primary-600) !important;\n  }\n  .detail-mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .detail-mobile-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    line-height: 1.2;\n  }\n  .detail-mobile-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: var(--p-surface-500);\n    margin: 0.15rem 0 0;\n  }\n  .detail-header--desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .detail-factures-mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .detail-tableau-desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .stats-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem;\n  }\n  .stats-bar__item[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    width: 100%;\n  }\n  .stats-bar__divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n  }\n}\n.app-dark[_nghost-%COMP%]   .detail-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-mobile-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .detail-mobile-subtitle[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-mobile-subtitle[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card__ref[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__ref[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .detail-facture-card__total[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__total[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card__footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .detail-factures-mobile__title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-factures-mobile__title[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n.app-dark[_nghost-%COMP%]   .detail-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-header[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n}\n.app-dark[_nghost-%COMP%]   .detail-header__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-header__name[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__divider[_ngcontent-%COMP%] {\n  background: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__icon[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__icon[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .stats-bar__value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .stats-bar__value[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card__verse[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__verse[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .detail-facture-card__restant[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__restant[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card__badge--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__badge--danger[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .detail-facture-card__badge--warn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__badge--warn[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .detail-facture-card__badge--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__badge--success[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .detail-facture-card__badge--secondary[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__badge--secondary[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .detail-facture-card__actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .detail-facture-card__actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  color: var(--p-surface-400) !important;\n}\n.app-dark[_nghost-%COMP%]   .cell-prestataire__name[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cell-prestataire__name[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .cell-bold[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cell-bold[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .table-caption__title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .table-caption__title[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--danger[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--warn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--success[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.12);\n}\n.app-dark[_nghost-%COMP%]   .status-badge--secondary[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .status-badge--secondary[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .preview-summary[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .preview-summary[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n/*# sourceMappingURL=comptabilite-packing-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingDetail, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-detail", standalone: true, imports: [
      CommonModule,
      TableModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      SelectModule,
      InputNumberModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      DatePickerModule,
      TextareaModule,
      TooltipModule,
      PhoneFormatPipe,
      StyleClassModule,
      ComptabilitePackingPaiement,
      ComptabilitePackingPaiementDialog,
      ComptabiliteHistoriqueVersements,
      RatingModule,
      RadioButtonModule,
      MoneyPipe
    ], providers: [MessageService, ConfirmationService], template: `<p-toast position="top-right" appendTo="body" [baseZIndex]="1100" [preventOpenDuplicates]="true" />\r
\r
<div class="detail-page-wrap">\r
<!-- Mobile-only header (visible \u2264768px) -->\r
<header class="detail-mobile-header">\r
    <button\r
        pButton\r
        pRipple\r
        icon="pi pi-arrow-left"\r
        class="p-button-rounded p-button-text detail-mobile-back"\r
        aria-label="Retour \xE0 la liste"\r
        (click)="goBack()"\r
    ></button>\r
    <div class="detail-mobile-title-wrap">\r
        <h1 class="detail-mobile-title">{{ prestataireNom || 'D\xE9tail' }}</h1>\r
        <p class="detail-mobile-subtitle" *ngIf="prestatairePhone">{{ prestatairePhone | phoneFormat:'INT' }}</p>\r
    </div>\r
</header>\r
\r
<!-- Desktop header -->\r
<div class="detail-header detail-header--desktop">\r
    <div class="detail-header__left">\r
        <p-button icon="pi pi-arrow-left" severity="secondary" [rounded]="true" [text]="true" pTooltip="Retour" (click)="goBack()" />\r
        <div>\r
            <h4 class="detail-header__name">{{ prestataireNom }}</h4>\r
            <span class="detail-header__phone" *ngIf="prestatairePhone">\r
                <i class="pi pi-phone"></i> {{ prestatairePhone | phoneFormat:'INT' }}\r
            </span>\r
        </div>\r
    </div>\r
    <div></div>\r
</div>\r
\r
<!-- Slide-over paiement (full screen sur mobile) -->\r
<div class="fixed inset-0 z-50" *ngIf="slideoverVisible">\r
    <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="closeSlideoverPaiement()"></div>\r
    <div class="detail-paiement-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">\r
         <app-comptabilite-packing-paiement\r
            [facture]="slideoverFacture"\r
            [saving]="slideoverSaving"\r
            (onPay)="onSlideoverPay($event)"\r
            (onClose)="closeSlideoverPaiement()"\r
         ></app-comptabilite-packing-paiement>\r
    </div>\r
</div>\r
\r
<!-- Slide-over historique versements (full screen sur mobile) -->\r
<div class="fixed inset-0 z-50" *ngIf="historiqueSlideoverVisible">\r
    <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="closeHistoriqueSlideover()"></div>\r
    <div class="detail-paiement-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">\r
         <app-comptabilite-historique-versements\r
            [data]="historiqueData"\r
            [loading]="historiqueLoading"\r
            [canDelete]="canDeleteVersement"\r
            (onClose)="closeHistoriqueSlideover()"\r
            (onDeleteVersement)="onHistoriqueDeleteVersement($event)"\r
         ></app-comptabilite-historique-versements>\r
    </div>\r
</div>\r
\r
<!-- Contenu scrollable (full screen sur mobile) -->\r
<div class="detail-mobile-scroll">\r
<!-- Stats bar -->\r
<div class="stats-bar mb-6">\r
    <div class="stats-bar__item">\r
        <div class="stats-bar__icon"><i class="pi pi-wallet"></i></div>\r
        <div>\r
            <div class="stats-bar__value">{{ formatCurrency(totalFacture) }}</div>\r
            <div class="stats-bar__label">Total \xE0 payer</div>\r
        </div>\r
    </div>\r
    <div class="stats-bar__divider"></div>\r
    <div class="stats-bar__item">\r
        <div class="stats-bar__icon"><i class="pi pi-check-circle"></i></div>\r
        <div>\r
            <div class="stats-bar__value">{{ formatCurrency(totalVerse) }}</div>\r
            <div class="stats-bar__label">Total vers\xE9</div>\r
        </div>\r
    </div>\r
    <div class="stats-bar__divider"></div>\r
    <div class="stats-bar__item">\r
        <div class="stats-bar__icon"><i class="pi pi-arrow-right"></i></div>\r
        <div>\r
            <div class="stats-bar__value">{{ formatCurrency(totalRestant) }}</div>\r
            <div class="stats-bar__label">Reste \xE0 payer</div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Mobile: factures en cartes (\u2264768px) -->\r
<div class="detail-factures-mobile">\r
    <h3 class="detail-factures-mobile__title">Factures</h3>\r
    <div class="detail-factures-mobile__state" *ngIf="loading">Chargement...</div>\r
    <div class="detail-factures-mobile__state" *ngIf="!loading && factures().length === 0">Aucune facture pour ce prestataire.</div>\r
    <div class="detail-factures-mobile__list" *ngIf="!loading && factures().length">\r
        <article\r
            class="detail-facture-card"\r
            *ngFor="let facture of factures()"\r
        >\r
            <div class="detail-facture-card__main">\r
                <span class="detail-facture-card__ref">{{ getReferenceShort(facture.reference) }}</span>\r
                <span class="detail-facture-card__date">{{ formatDateDisplay(facture.date) }}</span>\r
                <span class="detail-facture-card__rouleaux">{{ facture.total_rouleaux }} rouleaux</span>\r
            </div>\r
            <div class="detail-facture-card__amounts">\r
                <span class="detail-facture-card__total">{{ facture.montant_total | money:'GNF' }}</span>\r
                <span class="detail-facture-card__verse">Vers\xE9 : {{ facture.montant_verse | money:'GNF' }}</span>\r
                <span class="detail-facture-card__restant">Restant : {{ facture.montant_restant | money:'GNF' }}</span>\r
            </div>\r
            <div class="detail-facture-card__footer">\r
                <span\r
                    class="detail-facture-card__badge"\r
                    [ngClass]="{\r
                        'detail-facture-card__badge--danger': facture.statut === 'impayee',\r
                        'detail-facture-card__badge--warn': facture.statut === 'partielle',\r
                        'detail-facture-card__badge--success': facture.statut === 'payee',\r
                        'detail-facture-card__badge--secondary': facture.statut === 'annulee'\r
                    }"\r
                >{{ facture.statut_label }}</span>\r
                <div class="detail-facture-card__actions">\r
                    <p-button\r
                        icon="pi pi-money-bill"\r
                        severity="secondary"\r
                        [text]="true"\r
                        [rounded]="true"\r
                        pTooltip="Payer"\r
                        (click)="openSlideoverPaiement(facture)"\r
                        *ngIf="canCreateVersement && facture.statut !== 'payee'"\r
                    />\r
                    <p-button\r
                        icon="pi pi-list"\r
                        severity="info"\r
                        [text]="true"\r
                        [rounded]="true"\r
                        pTooltip="Historique"\r
                        (click)="openHistorique(facture)"\r
                        *ngIf="canReadVersement"\r
                    />\r
                    <p-button\r
                        icon="pi pi-trash"\r
                        severity="danger"\r
                        [text]="true"\r
                        [rounded]="true"\r
                        pTooltip="Supprimer"\r
                        (click)="confirmDeleteFacture(facture)"\r
                        *ngIf="canDeleteFacture && facture.montant_verse === 0"\r
                    />\r
                </div>\r
            </div>\r
        </article>\r
    </div>\r
</div>\r
\r
<!-- Desktop: table des factures -->\r
<div class="card tableau-card detail-tableau-desktop">\r
    <p-table\r
        [value]="factures()"\r
        [rows]="10"\r
        [paginator]="true"\r
        [rowHover]="true"\r
        dataKey="id"\r
        currentPageReportTemplate="{first} \xE0 {last} sur {totalRecords} factures"\r
        [showCurrentPageReport]="true"\r
        [rowsPerPageOptions]="[10, 20, 30]"\r
        [loading]="loading"\r
        [tableStyle]="{ 'min-width': '55rem' }"\r
    >\r
        <ng-template #caption>\r
            <div class="table-caption">\r
                <h5 class="table-caption__title">Factures</h5>\r
            </div>\r
        </ng-template>\r
        <ng-template #header>\r
            <tr>\r
                <th pSortableColumn="reference">\r
                    <span class="col-header">R\xE9f\xE9rence <p-sortIcon field="reference" /></span>\r
                </th>\r
                <th pSortableColumn="date">\r
                    <span class="col-header">Date <p-sortIcon field="date" /></span>\r
                </th>\r
                <th pSortableColumn="total_rouleaux" class="text-right">\r
                    <span class="col-header justify-end">Rouleaux <p-sortIcon field="total_rouleaux" /></span>\r
                </th>\r
                <th class="text-right">\r
                    <span class="col-header justify-end">Prix/rouleau</span>\r
                </th>\r
                <th pSortableColumn="montant_total" class="text-right">\r
                    <span class="col-header justify-end">A payer <p-sortIcon field="montant_total" /></span>\r
                </th>\r
                <th pSortableColumn="montant_verse" class="text-right">\r
                    <span class="col-header justify-end">Vers\xE9 <p-sortIcon field="montant_verse" /></span>\r
                </th>\r
                <th class="text-right">\r
                    <span class="col-header justify-end">Restant</span>\r
                </th>\r
                <th pSortableColumn="statut" class="text-center">\r
                    <span class="col-header justify-center">Statut <p-sortIcon field="statut" /></span>\r
                </th>\r
                <th style="width: 10rem"></th>\r
            </tr>\r
        </ng-template>\r
        <ng-template #body let-facture>\r
            <tr>\r
                <td class="font-semibold">{{ getReferenceShort(facture.reference) }}</td>\r
                <td class="cell-secondary font-semibold">{{ formatDateDisplay(facture.date) }}</td>\r
                <td class="text-right cell-mono font-semibold">{{ facture.total_rouleaux }}</td>\r
                <td class="text-right cell-mono font-semibold">{{  facture.prix_par_rouleau | money :'GNF'}}</td>\r
                <td class="text-right cell-mono font-semibold">{{ facture.montant_total | money :'GNF'}}</td>\r
                <td class="text-right cell-mono cell-success font-semibold">{{  facture.montant_verse | money :'GNF'}}</td>\r
                <td class="text-right cell-mono cell-bold">{{ facture.montant_restant | money :'GNF'}}</td>\r
                <td class="text-center">\r
                    <span class="status-badge" [ngClass]="{\r
                        'status-badge--danger': facture.statut === 'impayee',\r
                        'status-badge--warn': facture.statut === 'partielle',\r
                        'status-badge--success': facture.statut === 'payee',\r
                        'status-badge--secondary': facture.statut === 'annulee'\r
                    }">\r
                        {{ facture.statut_label }}\r
                    </span>\r
                </td>\r
                <td>\r
                    <div class="flex items-center justify-end gap-1">\r
                        <p-button\r
                            icon="pi pi-money-bill"\r
                            severity="secondary"\r
                            [text]="true"\r
                            [rounded]="true"\r
                            pTooltip="Payer"\r
                            (click)="openSlideoverPaiement(facture)"\r
                            *ngIf="canCreateVersement && facture.statut !== 'payee'"\r
                        />\r
                        <p-button\r
                            icon="pi pi-list"\r
                            severity="secondary"\r
                            [text]="true"\r
                            [rounded]="true"\r
                            pTooltip="Historique versements"\r
                            (click)="openHistorique(facture)"\r
                            *ngIf="canReadVersement"\r
                        />\r
                        <p-button\r
                            icon="pi pi-trash"\r
                            severity="secondary"\r
                            [text]="true"\r
                            [rounded]="true"\r
                            pTooltip="Supprimer"\r
                            (click)="confirmDeleteFacture(facture)"\r
                            *ngIf="canDeleteFacture && facture.montant_verse === 0"\r
                        />\r
                    </div>\r
                </td>\r
            </tr>\r
        </ng-template>\r
        <ng-template #emptymessage>\r
            <tr>\r
                <td colspan="9">\r
                    <div class="empty-state">\r
                        <i class="pi pi-inbox"></i>\r
                        <span>Aucune facture pour ce prestataire</span>\r
                    </div>\r
                </td>\r
            </tr>\r
        </ng-template>\r
    </p-table>\r
</div>\r
</div><!-- /.detail-mobile-scroll -->\r
</div><!-- /.detail-page-wrap -->\r
\r
<!-- Dialog Versement -->\r
<p-dialog\r
    [(visible)]="versementDialog"\r
    [style]="{ width: '750px' }"\r
    [contentStyle]="{ 'max-height': '70vh', 'overflow': 'auto' }"\r
    header="Enregistrer un versement"\r
    [modal]="true"\r
    [blockScroll]="true"\r
    [dismissableMask]="false"\r
    [closeOnEscape]="false"\r
>\r
    <div class="flex flex-col gap-4" *ngIf="selectedFacture">\r
        <div class="preview-summary">\r
            <span class="font-bold">{{ getReferenceShort(selectedFacture.reference) }}</span>\r
            <span class="preview-summary__sep"></span>\r
            <span>Total : <strong>{{  selectedFacture.montant_total | money :'GNF'}}</strong></span>\r
            <span class="preview-summary__sep"></span>\r
            <span class="cell-success">Vers\xE9 : <strong>{{  selectedFacture.montant_verse | money :'GNF'}}</strong></span>\r
            <span class="preview-summary__sep"></span>\r
            <span class="font-bold" style="color: #d97706">Restant : {{ selectedFacture.montant_restant | money :'GNF'}}</span>\r
        </div>\r
\r
        <div class="flex flex-col gap-4">\r
            <div class="mt-4">\r
                <label class="block font-bold mb-2">Mode de paiement</label>\r
                <p-select\r
                    [(ngModel)]="versementData.mode_paiement"\r
                    [options]="modesPaiement"\r
                    optionLabel="label"\r
                    optionValue="value"\r
                    styleClass="w-full"\r
                    appendTo="body"\r
                />\r
            </div>\r
\r
            <div class="mt-4">\r
                <label class="block font-bold mb-2">Montant \xE0 verser</label>\r
                <p-inputnumber\r
                    [(ngModel)]="versementData.montant"\r
                    [min]="1"\r
                    [max]="selectedFacture.montant_restant"\r
                    suffix=" GNF"\r
                    [useGrouping]="true"\r
                    locale="fr-FR"\r
                    inputStyleClass="w-full"\r
                    styleClass="w-full"\r
                />\r
                <small class="text-red-500" *ngIf="versementSubmitted && !versementData.montant">Montant requis.</small>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <ng-template #footer class="mt-4">\r
        <button pButton [outlined]="true" (click)="hideVersementDialog()"> <span pButtonLabel>Annuler</span></button>\r
        <button pButton (click)="saveVersement()" [disabled]="versementSaving" [loading]="versementSaving"> <span pButtonLabel>Enregistrer</span> </button>\r
    </ng-template>\r
</p-dialog>\r
\r
<!-- Dialog Historique Versements -->\r
<p-dialog\r
    [(visible)]="historiqueDialog"\r
    [style]="{ width: '750px' }"\r
    [contentStyle]="{ 'max-height': '70vh', 'overflow': 'auto' }"\r
    header="Historique des versements"\r
    [modal]="true"\r
    [blockScroll]="true"\r
    [dismissableMask]="false"\r
    [closeOnEscape]="false"\r
>\r
    <div *ngIf="historiqueLoading" class="flex items-center justify-center p-12">\r
        <i class="pi pi-spin pi-spinner text-3xl text-surface-300"></i>\r
    </div>\r
\r
    <div *ngIf="historiqueData" class="flex flex-col gap-4">\r
        <div class="preview-summary">\r
            <span class="font-bold text-lg">{{ getReferenceShort(historiqueData.reference) }}</span>\r
            <span class="preview-summary__sep"></span>\r
            <span>Total: <strong>{{ formatCurrency(historiqueData.montant_total) }}</strong></span>\r
            <span class="preview-summary__sep"></span>\r
            <span class="cell-success">Vers\xE9: <strong>{{ formatCurrency(historiqueData.montant_verse) }}</strong></span>\r
            <span class="preview-summary__sep"></span>\r
            <span class="cell-bold">Restant: {{ formatCurrency(historiqueData.montant_restant) }}</span>\r
            <span class="ml-auto">\r
                <span class="status-badge" [ngClass]="historiqueData.is_soldee ? 'status-badge--success' : 'status-badge--warn'">\r
                    {{ historiqueData.is_soldee ? 'Sold\xE9' : 'En cours' }}\r
                </span>\r
            </span>\r
        </div>\r
\r
        <p-table [value]="historiqueData.versements" [rowHover]="true" *ngIf="historiqueData.versements.length > 0">\r
            <ng-template #header>\r
                <tr>\r
                    <th><span class="col-header">Date</span></th>\r
                    <th class="text-right"><span class="col-header justify-end">Montant</span></th>\r
                    <th><span class="col-header">Mode</span></th>\r
                    <th><span class="col-header">Notes</span></th>\r
                    <th style="width: 4rem" *ngIf="canDeleteVersement"></th>\r
                </tr>\r
            </ng-template>\r
            <ng-template #body let-versement>\r
                <tr>\r
                    <td class="cell-secondary">{{ formatDateDisplay(versement.date_versement) }}</td>\r
                    <td class="text-right cell-mono cell-success font-bold">{{ formatCurrency(versement.montant) }}</td>\r
                    <td>{{ versement.mode_paiement_label }}</td>\r
                    <td class="cell-secondary">{{ versement.notes || '-' }}</td>\r
                    <td class="text-center" *ngIf="canDeleteVersement">\r
                        <p-button icon="pi pi-trash" severity="danger" [text]="true" [rounded]="true" pTooltip="Supprimer" (click)="confirmDeleteVersement(historiqueData!.facture_id, versement)" />\r
                    </td>\r
                </tr>\r
            </ng-template>\r
        </p-table>\r
\r
        <div *ngIf="historiqueData.versements.length === 0" class="empty-state">\r
            <i class="pi pi-inbox"></i>\r
            <span>Aucun versement enregistr\xE9</span>\r
        </div>\r
    </div>\r
\r
    <ng-template #footer>\r
        <p-button label="Fermer" [text]="true" (click)="historiqueDialog = false" />\r
    </ng-template>\r
</p-dialog>\r
\r
<p-confirmdialog [style]="{ width: '450px' }" />\r
`, styles: ["/* src/app/pages/comptabilite/comptabilite-packing-detail/comptabilite-packing-detail.scss */\n@media (max-width: 768px) {\n  .detail-paiement-slideover {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100%;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n}\n@media (max-width: 768px) {\n  .detail-paiement-slideover > * {\n    flex: 1 1 0;\n    min-height: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n@media (max-width: 768px) {\n  .detail-page-wrap {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    min-height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n  }\n}\n@media (max-width: 768px) {\n  .detail-mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.detail-mobile-header {\n  display: none;\n}\n.detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 1.75rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.detail-header__left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.detail-header__name {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-header__phone {\n  font-size: 0.85rem;\n  color: var(--p-surface-400);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-top: 0.15rem;\n}\n.stats-bar {\n  display: flex;\n  align-items: center;\n  background: var(--p-surface-0);\n  border-radius: 14px;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n.stats-bar__item {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.5rem 1.5rem;\n}\n.stats-bar__divider {\n  width: 1px;\n  height: 40px;\n  background: var(--p-surface-200);\n  flex-shrink: 0;\n}\n.stats-bar__icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 1.1rem;\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.stats-bar__value {\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: var(--p-surface-900);\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n.stats-bar__label {\n  font-size: 0.78rem;\n  color: var(--p-surface-400);\n  margin-top: 2px;\n}\n.tableau-card {\n  border-radius: 14px !important;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04) !important;\n  overflow: hidden;\n}\n.table-caption__title {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.col-header {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--p-surface-500);\n}\n.cell-secondary {\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.cell-mono {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.9rem;\n}\n.cell-success {\n  color: #059669;\n}\n.cell-bold {\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.status-badge--danger {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.status-badge--warn {\n  background: #fffbeb;\n  color: #d97706;\n}\n.status-badge--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.status-badge--secondary {\n  background: var(--p-surface-100);\n  color: var(--p-surface-500);\n}\n.preview-summary {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  font-size: 0.9rem;\n  color: var(--p-surface-600);\n  flex-wrap: wrap;\n}\n.preview-summary__sep {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 3rem 0;\n  color: var(--p-surface-300);\n}\n.empty-state i {\n  font-size: 2.5rem;\n}\n.empty-state span {\n  font-size: 0.9rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem 1.25rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1.1rem 1.25rem;\n}\n.detail-factures-mobile {\n  display: none;\n}\n.detail-factures-mobile__title {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-factures-mobile__state {\n  text-align: center;\n  padding: 1.5rem 1rem;\n  color: var(--p-surface-500);\n  font-size: 0.9rem;\n}\n.detail-factures-mobile__list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.detail-facture-card {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.detail-facture-card__main {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n.detail-facture-card__ref {\n  font-weight: 700;\n  font-size: 0.95rem;\n  color: var(--p-surface-900);\n}\n.detail-facture-card__date {\n  font-size: 0.9rem;\n  color: var(--p-surface-500);\n}\n.detail-facture-card__rouleaux {\n  font-size: 0.85rem;\n  color: var(--p-surface-500);\n}\n.detail-facture-card__amounts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  font-size: 0.9rem;\n}\n.detail-facture-card__total {\n  font-weight: 700;\n  color: var(--p-surface-800);\n}\n.detail-facture-card__verse,\n.detail-facture-card__restant {\n  color: var(--p-surface-600);\n  font-weight: 500;\n}\n.detail-facture-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.detail-facture-card__badge {\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.detail-facture-card__badge--danger,\n.detail-facture-card__badge--warn,\n.detail-facture-card__badge--success,\n.detail-facture-card__badge--secondary {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.detail-facture-card__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.detail-facture-card__actions .p-button {\n  color: var(--p-surface-500) !important;\n}\n@media (max-width: 768px) {\n  .detail-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.5rem 0.6rem 0.25rem;\n    margin: 0 -0.875rem 0;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  :host-context(.app-dark) .detail-mobile-header {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  .detail-mobile-back {\n    color: var(--p-primary-600) !important;\n  }\n  .detail-mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .detail-mobile-title {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    line-height: 1.2;\n  }\n  .detail-mobile-subtitle {\n    font-size: 0.8rem;\n    color: var(--p-surface-500);\n    margin: 0.15rem 0 0;\n  }\n  .detail-header--desktop {\n    display: none !important;\n  }\n  .detail-factures-mobile {\n    display: block;\n  }\n  .detail-tableau-desktop {\n    display: none !important;\n  }\n  .stats-bar {\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem;\n  }\n  .stats-bar__item {\n    padding: 0.75rem 1rem;\n    width: 100%;\n  }\n  .stats-bar__divider {\n    width: 100%;\n    height: 1px;\n  }\n}\n:host-context(.app-dark) .detail-mobile-title {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .detail-mobile-subtitle {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .detail-facture-card {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .detail-facture-card__ref,\n:host-context(.app-dark) .detail-facture-card__total {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .detail-facture-card__footer {\n  border-top-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .detail-factures-mobile__title {\n  color: var(--p-surface-200);\n}\n:host-context(.app-dark) .detail-header {\n  background: var(--p-surface-800);\n}\n:host-context(.app-dark) .detail-header__name {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .stats-bar {\n  background: var(--p-surface-800);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n:host-context(.app-dark) .stats-bar__divider {\n  background: var(--p-surface-600);\n}\n:host-context(.app-dark) .stats-bar__icon {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .stats-bar__value {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .detail-facture-card__verse,\n:host-context(.app-dark) .detail-facture-card__restant {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .detail-facture-card__badge--danger,\n:host-context(.app-dark) .detail-facture-card__badge--warn,\n:host-context(.app-dark) .detail-facture-card__badge--success,\n:host-context(.app-dark) .detail-facture-card__badge--secondary {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .detail-facture-card__actions .p-button {\n  color: var(--p-surface-400) !important;\n}\n:host-context(.app-dark) .cell-prestataire__name,\n:host-context(.app-dark) .cell-bold {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .table-caption__title {\n  color: var(--p-surface-200);\n}\n:host-context(.app-dark) .status-badge--danger {\n  background: rgba(220, 38, 38, 0.12);\n}\n:host-context(.app-dark) .status-badge--warn {\n  background: rgba(217, 119, 6, 0.12);\n}\n:host-context(.app-dark) .status-badge--success {\n  background: rgba(5, 150, 105, 0.12);\n}\n:host-context(.app-dark) .status-badge--secondary {\n  background: var(--p-surface-700);\n}\n:host-context(.app-dark) .preview-summary {\n  background: var(--p-surface-700);\n}\n/*# sourceMappingURL=comptabilite-packing-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: FacturePaiementService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingDetail, { className: "ComptabilitePackingDetail", filePath: "src/app/pages/comptabilite/comptabilite-packing-detail/comptabilite-packing-detail.ts", lineNumber: 85 });
})();

// src/app/pages/comptabilite/comptabilite.routes.ts
var comptabilite_routes_default = [
  {
    path: "",
    component: ComptabilitePackingListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["facture-packings.read"] }
  },
  {
    path: "comptabilite-packing-liste",
    component: ComptabilitePackingListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["facture-packings.read"] }
  },
  {
    path: "comptabilite-packing-detail/:id",
    component: ComptabilitePackingDetail,
    canActivate: [authorizationGuard],
    data: { permissions: ["facture-packings.read"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  comptabilite_routes_default as default
};
//# sourceMappingURL=chunk-HZUA2NIF.js.map
