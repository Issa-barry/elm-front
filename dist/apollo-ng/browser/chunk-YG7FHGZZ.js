import {
  AutoCompleteModule
} from "./chunk-FDIW5MJX.js";
import {
  PrestataireService
} from "./chunk-IELTKTVK.js";
import {
  InputGroupAddon
} from "./chunk-I4Q23SYM.js";
import {
  InputGroup
} from "./chunk-ZBL7AMN6.js";
import {
  environment
} from "./chunk-PPDE6QN3.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-GUNNI5O7.js";
import "./chunk-IFPN5NGS.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-7DLMVGDO.js";
import {
  Dialog,
  DialogModule
} from "./chunk-GU6CNOKS.js";
import {
  Toast,
  ToastModule
} from "./chunk-ZG66MDSF.js";
import "./chunk-KZ2XEJBQ.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-SNWJRZDT.js";
import {
  Router
} from "./chunk-VYPJWBQM.js";
import "./chunk-K745LLV4.js";
import "./chunk-QM3EJKHT.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-VYTCGADS.js";
import "./chunk-HX6AAUEU.js";
import "./chunk-U3BOOR2A.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-ATTBT5LJ.js";
import "./chunk-M54353BN.js";
import "./chunk-S7EQZUZC.js";
import "./chunk-FT7WFYEI.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-H2TDPVQC.js";
import "./chunk-GM56SEQR.js";
import "./chunk-OYDBCBVT.js";
import {
  Select,
  SelectModule
} from "./chunk-ADT2GN44.js";
import "./chunk-X3MCY454.js";
import "./chunk-BICDQRLL.js";
import "./chunk-JPETFPPG.js";
import "./chunk-KG7RE235.js";
import "./chunk-UHMM7FE7.js";
import "./chunk-SUK52LSR.js";
import {
  Tag,
  TagModule
} from "./chunk-KX7MGO2E.js";
import "./chunk-3UGMWDW4.js";
import "./chunk-UONKXDMG.js";
import "./chunk-KFLL2YOX.js";
import "./chunk-WQC3TYUA.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-EXWZQDGS.js";
import {
  InputText,
  InputTextModule
} from "./chunk-YW263GEX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HEGGX7RQ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-HZAHIETM.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HURDVDQD.js";
import "./chunk-CUNICK74.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  Pipe,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5J4QQBGF.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/models/packing.model.ts
var PACKING_STATUT_LABELS = {
  en_cours: "En cours",
  termine: "Termin\xE9",
  paye: "Pay\xE9",
  annule: "Annul\xE9"
};
var PACKING_STATUT_SEVERITY = {
  en_cours: "info",
  termine: "warn",
  paye: "success",
  annule: "danger"
};

// src/app/services/packing/packing.service.ts
var PackingService = class _PackingService {
  http;
  apiUrl = `${environment.apiUrl}/packings`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Récupérer la liste des packings avec filtres optionnels
   */
  getPackings(filters) {
    let params = new HttpParams();
    if (filters) {
      if (filters.prestataire_id) {
        params = params.set("prestataire_id", filters.prestataire_id.toString());
      }
      if (filters.statut) {
        params = params.set("statut", filters.statut);
      }
      if (filters.date_debut) {
        params = params.set("date_debut", filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set("date_fin", filters.date_fin);
      }
      if (filters.non_payes) {
        params = params.set("non_payes", filters.non_payes.toString());
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
      if (filters.page) {
        params = params.set("page", filters.page.toString());
      }
    }
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Récupérer un packing par son ID
   */
  getPacking(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  /**
   * Créer un nouveau packing
   */
  createPacking(data) {
    return this.http.post(this.apiUrl, data);
  }
  /**
   * Mettre à jour un packing
   */
  updatePacking(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  /**
   * Changer le statut d'un packing
   */
  changeStatut(id, data) {
    return this.http.patch(`${this.apiUrl}/${id}/statut`, data);
  }
  /**
   * Supprimer un packing
   */
  deletePacking(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /**
   * Rechercher des packings
   */
  searchPackings(searchTerm) {
    const params = new HttpParams().set("search", searchTerm);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les packings par prestataire
   */
  getPackingsByPrestataire(prestataireId) {
    const params = new HttpParams().set("prestataire_id", prestataireId.toString());
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les packings par statut
   */
  getPackingsByStatut(statut) {
    const params = new HttpParams().set("statut", statut);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les packings non payés
   */
  getPackingsNonPayes() {
    const params = new HttpParams().set("non_payes", "true");
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les packings par période
   */
  getPackingsByPeriode(dateDebut, dateFin) {
    const params = new HttpParams().set("date_debut", dateDebut).set("date_fin", dateFin);
    return this.http.get(this.apiUrl, { params });
  }
  /**
   * Obtenir les packings avec pagination
   */
  getPackingsPaginated(page = 1, perPage = 10, filters) {
    let params = new HttpParams().set("page", page.toString()).set("per_page", perPage.toString());
    if (filters) {
      if (filters.prestataire_id) {
        params = params.set("prestataire_id", filters.prestataire_id.toString());
      }
      if (filters.statut) {
        params = params.set("statut", filters.statut);
      }
      if (filters.date_debut) {
        params = params.set("date_debut", filters.date_debut);
      }
      if (filters.date_fin) {
        params = params.set("date_fin", filters.date_fin);
      }
      if (filters.non_payes) {
        params = params.set("non_payes", filters.non_payes.toString());
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
    }
    return this.http.get(this.apiUrl, { params });
  }
  static \u0275fac = function PackingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PackingService, factory: _PackingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/packings/packing-liste/packing-liste.ts
var _c0 = ["dt"];
var _c1 = () => ({ "min-width": "75rem" });
var _c2 = () => [10, 20, 30];
var _c3 = () => ({ width: "750px" });
var _c4 = () => ({ width: "450px" });
function PackingListe_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 12);
    \u0275\u0275listener("onClick", function PackingListe_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_5_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("onClick", function PackingListe_ng_template_5_p_button_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearDateFilters());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function PackingListe_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_5_Template_p_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterStatut, $event) || (ctx_r2.filterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PackingListe_ng_template_5_Template_p_select_onChange_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-datepicker", 15);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_5_Template_p_datepicker_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterDateDebut, $event) || (ctx_r2.filterDateDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function PackingListe_ng_template_5_Template_p_datepicker_onSelect_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-datepicker", 16);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_5_Template_p_datepicker_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterDateFin, $event) || (ctx_r2.filterDateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function PackingListe_ng_template_5_Template_p_datepicker_onSelect_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateFilter());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PackingListe_ng_template_5_p_button_4_Template, 1, 2, "p-button", 17);
    \u0275\u0275elementStart(5, "p-button", 18);
    \u0275\u0275listener("onClick", function PackingListe_ng_template_5_Template_p_button_onClick_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterStatut);
    \u0275\u0275property("options", ctx_r2.statuses)("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterDateDebut);
    \u0275\u0275property("showIcon", true)("maxDate", ctx_r2.filterDateFin);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterDateFin);
    \u0275\u0275property("showIcon", true)("minDate", ctx_r2.filterDateDebut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filterDateDebut || ctx_r2.filterDateFin || ctx_r2.filterStatut);
  }
}
function PackingListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "h5", 21);
    \u0275\u0275text(2, "Gestion des Packings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 22);
    \u0275\u0275elementStart(5, "input", 23);
    \u0275\u0275listener("input", function PackingListe_ng_template_9_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r7 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r7, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function PackingListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 24);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 25)(4, "span", 13);
    \u0275\u0275text(5, "R\xE9f\xE9rence ");
    \u0275\u0275element(6, "p-sortIcon", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 27)(8, "span", 13);
    \u0275\u0275text(9, "Prestataire ");
    \u0275\u0275element(10, "p-sortIcon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 30)(14, "span", 13);
    \u0275\u0275text(15, "D\xE9but ");
    \u0275\u0275element(16, "p-sortIcon", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 32)(18, "span", 13);
    \u0275\u0275text(19, "Fin ");
    \u0275\u0275element(20, "p-sortIcon", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 34)(22, "span", 13);
    \u0275\u0275text(23, "Rouleaux ");
    \u0275\u0275element(24, "p-sortIcon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "th", 36)(26, "span", 13);
    \u0275\u0275text(27, "Montant ");
    \u0275\u0275element(28, "p-sortIcon", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "th", 38)(30, "span", 13);
    \u0275\u0275text(31, "Statut ");
    \u0275\u0275element(32, "p-sortIcon", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "th", 29);
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_13_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const packing_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", packing_r9.prestataire.nom, " ", packing_r9.prestataire.prenom, " ");
  }
}
function PackingListe_ng_template_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const packing_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(packing_r9.prestataire.phone);
  }
}
function PackingListe_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275element(2, "p-tableCheckbox", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, PackingListe_ng_template_13_span_6_Template, 2, 2, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, PackingListe_ng_template_13_span_8_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275element(18, "p-tag", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "p-button", 43);
    \u0275\u0275listener("click", function PackingListe_ng_template_13_Template_p_button_click_20_listener() {
      const packing_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editPacking(packing_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-button", 44);
    \u0275\u0275listener("click", function PackingListe_ng_template_13_Template_p_button_click_21_listener() {
      const packing_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePacking(packing_r9));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const packing_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", packing_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(packing_r9.reference);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", packing_r9.prestataire);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", packing_r9.prestataire);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateDisplay(packing_r9.date_debut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateDisplay(packing_r9.date_fin));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(packing_r9.nb_rouleaux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(packing_r9.montant));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getStatutLabel(packing_r9.statut))("severity", ctx_r2.getStatutSeverity(packing_r9.statut));
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function PackingListe_ng_template_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prestataire_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", prestataire_r11.prenom, " ", prestataire_r11.nom, " - ", prestataire_r11.phone);
  }
}
function PackingListe_ng_template_16_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "i", 66);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prestataire_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", prestataire_r12.prenom, " ", prestataire_r12.nom);
  }
}
function PackingListe_ng_template_16_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PackingListe_ng_template_16_ng_template_6_div_0_Template, 4, 2, "div", 67);
  }
  if (rf & 2) {
    const prestataire_r12 = ctx.$implicit;
    \u0275\u0275property("ngIf", prestataire_r12);
  }
}
function PackingListe_ng_template_16_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 68);
    \u0275\u0275text(1, "Le prestataire est requis.");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div")(2, "label", 46);
    \u0275\u0275text(3, "Prestataire (Machiniste)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedPrestataire, $event) || (ctx_r2.selectedPrestataire = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, PackingListe_ng_template_16_ng_template_5_Template, 4, 3, "ng-template", 48)(6, PackingListe_ng_template_16_ng_template_6_Template, 1, 1, "ng-template", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PackingListe_ng_template_16_small_7_Template, 2, 0, "small", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 51)(9, "div", 52)(10, "label", 53);
    \u0275\u0275text(11, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-datepicker", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_datepicker_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.date_debut, $event) || (ctx_r2.packing.date_debut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 52)(14, "label", 55);
    \u0275\u0275text(15, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-datepicker", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_datepicker_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.date_fin, $event) || (ctx_r2.packing.date_fin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 51)(18, "div", 52)(19, "label", 56);
    \u0275\u0275text(20, "Nombre de rouleaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-inputnumber", 57);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_inputnumber_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.nb_rouleaux, $event) || (ctx_r2.packing.nb_rouleaux = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onInput", function PackingListe_ng_template_16_Template_p_inputnumber_onInput_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calculateMontant());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 52)(23, "label", 58);
    \u0275\u0275text(24, "Prix du rouleau (GNF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-inputnumber", 59);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_inputnumber_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.prix_par_rouleau, $event) || (ctx_r2.packing.prix_par_rouleau = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onInput", function PackingListe_ng_template_16_Template_p_inputnumber_onInput_25_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calculateMontant());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 51)(27, "div", 52)(28, "label", 60);
    \u0275\u0275text(29, "Montant total (GNF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-inputnumber", 61);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_inputnumber_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.montant, $event) || (ctx_r2.packing.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 52)(32, "label", 62);
    \u0275\u0275text(33, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_p_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.statut, $event) || (ctx_r2.packing.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div")(36, "label", 64);
    \u0275\u0275text(37, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_16_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.packing.notes, $event) || (ctx_r2.packing.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedPrestataire);
    \u0275\u0275property("options", ctx_r2.prestataires)("filter", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.selectedPrestataire);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.date_debut);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.date_fin);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.nb_rouleaux);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.prix_par_rouleau);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.montant);
    \u0275\u0275property("min", 0)("readonly", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.statut);
    \u0275\u0275property("options", ctx_r2.statuses);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.packing.notes);
  }
}
function PackingListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 69);
    \u0275\u0275listener("click", function PackingListe_ng_template_18_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 70);
    \u0275\u0275listener("click", function PackingListe_ng_template_18_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePacking());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.saving);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.saving ? "Enregistrement..." : "Enregistrer")("icon", ctx_r2.saving ? "pi pi-spin pi-spinner" : "pi pi-check")("disabled", ctx_r2.saving)("loading", ctx_r2.saving);
  }
}
var PackingListe = class _PackingListe {
  packingService;
  prestataireService;
  messageService;
  confirmationService;
  filterFields = ["reference", "prestataire.nom", "prestataire.prenom", "prestataire.phone", "statut", "montant"];
  packingDialog = false;
  packings = signal([], ...ngDevMode ? [{ debugName: "packings" }] : []);
  packing = {};
  selectedPackings = null;
  submitted = false;
  loading = false;
  saving = false;
  // Filtres
  filterDateDebut = null;
  filterDateFin = null;
  filterStatut = null;
  // Pour l'autocomplete prestataire
  prestataires = [];
  filteredPrestataires = [];
  selectedPrestataire = null;
  statuses = [
    { label: "En cours", value: "en_cours" },
    { label: "Termin\xE9", value: "termine" },
    { label: "Pay\xE9", value: "paye" },
    { label: "Annul\xE9", value: "annule" }
  ];
  dt;
  exportColumns;
  cols;
  constructor(packingService, prestataireService, messageService, confirmationService) {
    this.packingService = packingService;
    this.prestataireService = prestataireService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.loadPackings();
    this.loadPrestataires();
    this.initColumns();
  }
  initColumns() {
    this.cols = [
      { field: "reference", header: "R\xE9f\xE9rence" },
      { field: "prestataire", header: "Prestataire" },
      { field: "date_debut", header: "D\xE9but" },
      { field: "date_fin", header: "Fin" },
      { field: "nb_rouleaux", header: "Rouleaux" },
      { field: "montant", header: "Montant" },
      { field: "statut", header: "Statut" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  onDateFilter() {
    this.loadPackings();
  }
  clearDateFilters() {
    this.filterDateDebut = null;
    this.filterDateFin = null;
    this.filterStatut = null;
    this.loadPackings();
  }
  loadPackings() {
    this.loading = true;
    const filters = {};
    if (this.filterDateDebut) {
      filters.date_debut = this.formatDate(this.filterDateDebut);
    }
    if (this.filterDateFin) {
      filters.date_fin = this.formatDate(this.filterDateFin);
    }
    if (this.filterStatut) {
      filters.statut = this.filterStatut;
    }
    this.packingService.getPackings(Object.keys(filters).length ? filters : void 0).subscribe({
      next: (response) => {
        const data = "data" in response && Array.isArray(response.data) ? response.data : response.data?.data || [];
        this.packings.set(data);
        this.loading = false;
        console.log(response);
      },
      error: (error) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les packings",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  loadPrestataires() {
    this.prestataireService.getActivePrestataires().subscribe({
      next: (response) => {
        this.prestataires = response.data.filter((p) => p.type === "machiniste");
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les prestataires",
          life: 3e3
        });
      }
    });
  }
  filterPrestataire(event) {
    const query = event.query.toLowerCase();
    this.filteredPrestataires = this.prestataires.filter((p) => p.nom.toLowerCase().includes(query) || p.prenom.toLowerCase().includes(query) || p.phone.includes(query));
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  openNew() {
    this.packing = {
      statut: "en_cours",
      nb_rouleaux: 0,
      prix_par_rouleau: 0,
      montant: 0
    };
    this.selectedPrestataire = null;
    this.submitted = false;
    this.packingDialog = true;
  }
  editPacking(packing) {
    this.packing = __spreadProps(__spreadValues({}, packing), {
      date_debut: packing.date_debut ? new Date(packing.date_debut) : void 0,
      date_fin: packing.date_fin ? new Date(packing.date_fin) : void 0
    });
    this.selectedPrestataire = packing.prestataire || null;
    this.packingDialog = true;
  }
  deletePacking(packing) {
    this.confirmationService.confirm({
      message: `\xCAtes-vous s\xFBr de vouloir supprimer le packing ${packing.reference} ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.packingService.deletePacking(packing.id).subscribe({
          next: () => {
            this.packings.set(this.packings().filter((p) => p.id !== packing.id));
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "Packing supprim\xE9",
              life: 3e3
            });
          },
          error: () => {
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Impossible de supprimer le packing",
              life: 3e3
            });
          }
        });
      }
    });
  }
  deleteSelectedPackings() {
    this.confirmationService.confirm({
      message: "\xCAtes-vous s\xFBr de vouloir supprimer les packings s\xE9lectionn\xE9s ?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.selectedPackings?.forEach((packing) => {
          this.packingService.deletePacking(packing.id).subscribe();
        });
        this.packings.set(this.packings().filter((p) => !this.selectedPackings?.includes(p)));
        this.selectedPackings = null;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Packings supprim\xE9s",
          life: 3e3
        });
      }
    });
  }
  hideDialog() {
    this.packingDialog = false;
    this.submitted = false;
  }
  savePacking() {
    this.submitted = true;
    if (!this.selectedPrestataire || this.saving) {
      return;
    }
    this.saving = true;
    this.messageService.add({
      severity: "info",
      summary: "En cours",
      detail: "Enregistrement en cours...",
      life: 2e3
    });
    const packingData = {
      prestataire_id: this.selectedPrestataire.id,
      date_debut: this.formatDate(this.packing.date_debut),
      date_fin: this.formatDate(this.packing.date_fin),
      nb_rouleaux: this.packing.nb_rouleaux || 0,
      prix_par_rouleau: this.packing.prix_par_rouleau || 0,
      montant: this.packing.montant || 0,
      statut: this.packing.statut,
      notes: this.packing.notes ?? void 0
    };
    if (this.packing.id) {
      this.packingService.updatePacking(this.packing.id, packingData).subscribe({
        next: (response) => {
          const index = this.packings().findIndex((p) => p.id === this.packing.id);
          if (index !== -1) {
            const updatedPackings = [...this.packings()];
            updatedPackings[index] = response.data;
            this.packings.set(updatedPackings);
          }
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Packing mis \xE0 jour",
            life: 3e3
          });
          this.packingDialog = false;
          this.packing = {};
          this.saving = false;
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Impossible de mettre \xE0 jour le packing",
            life: 3e3
          });
          this.saving = false;
        }
      });
    } else {
      this.packingService.createPacking(packingData).subscribe({
        next: (response) => {
          this.packings.set([...this.packings(), response.data]);
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Packing cr\xE9\xE9",
            life: 3e3
          });
          this.packingDialog = false;
          this.packing = {};
          this.saving = false;
        },
        error: () => {
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Impossible de cr\xE9er le packing",
            life: 3e3
          });
          this.saving = false;
        }
      });
    }
  }
  calculateMontant() {
    if (this.packing.nb_rouleaux && this.packing.prix_par_rouleau) {
      this.packing.montant = this.packing.nb_rouleaux * this.packing.prix_par_rouleau;
    }
  }
  formatDate(date) {
    if (!date)
      return "";
    if (typeof date === "string")
      return date;
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  }
  getStatutLabel(statut) {
    return PACKING_STATUT_LABELS[statut] || statut;
  }
  getStatutSeverity(statut) {
    return PACKING_STATUT_SEVERITY[statut] || "info";
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
  static \u0275fac = function PackingListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingListe)(\u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingListe, selectors: [["app-packing-liste"]], viewQuery: function PackingListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 21, vars: 21, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], ["footer", ""], [1, "card"], ["styleClass", "mb-12"], ["dataKey", "id", "currentPageReportTemplate", "Affichage {first} \xE0 {last} sur {totalRecords} packings", 3, "selectionChange", "value", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "selection", "rowHover", "showCurrentPageReport", "rowsPerPageOptions", "loading"], ["header", "D\xE9tails du packing", 3, "visibleChange", "visible", "modal"], ["label", "Ajouter packing", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], [1, "flex", "items-center", "gap-2"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Statut", "styleClass", "w-40", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Date d\xE9but", "inputStyleClass", "w-full", "styleClass", "w-40", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "maxDate"], ["dateFormat", "dd/mm/yy", "placeholder", "Date fin", "inputStyleClass", "w-full", "styleClass", "w-40", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "minDate"], ["icon", "pi pi-filter-slash", "severity", "secondary", "pTooltip", "Effacer les filtres", 3, "outlined", "rounded", "onClick", 4, "ngIf"], ["label", "Export", "icon", "pi pi-download", "severity", "secondary", 3, "onClick"], ["icon", "pi pi-filter-slash", "severity", "secondary", "pTooltip", "Effacer les filtres", 3, "onClick", "outlined", "rounded"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "reference", 2, "min-width", "10rem"], ["field", "reference"], ["pSortableColumn", "prestataire.nom", 2, "min-width", "14rem"], ["field", "prestataire.nom"], [2, "min-width", "10rem"], ["pSortableColumn", "date_debut", 2, "min-width", "10rem"], ["field", "date_debut"], ["pSortableColumn", "date_fin", 2, "min-width", "10rem"], ["field", "date_fin"], ["pSortableColumn", "nb_rouleaux", 2, "min-width", "8rem"], ["field", "nb_rouleaux"], ["pSortableColumn", "montant", 2, "min-width", "10rem"], ["field", "montant"], ["pSortableColumn", "statut", 2, "min-width", "10rem"], ["field", "statut"], [3, "value"], [4, "ngIf"], [3, "value", "severity"], ["icon", "pi pi-pencil", 1, "mr-2", 3, "click", "rounded", "outlined"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [1, "flex", "flex-col", "gap-6"], ["for", "prestataire", 1, "block", "font-bold", "mb-4"], ["optionLabel", "nom", "filterBy", "nom,prenom,phone", "placeholder", "S\xE9lectionner un prestataire", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "options", "filter"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], ["class", "text-red-500", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-6"], ["for", "date_debut", 1, "block", "font-bold", "mb-4"], ["dateFormat", "dd/mm/yy", "inputStyleClass", "w-full", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "showIcon"], ["for", "date_fin", 1, "block", "font-bold", "mb-4"], ["for", "nb_rouleaux", 1, "block", "font-bold", "mb-4"], ["id", "nb_rouleaux", "styleClass", "w-full", 3, "ngModelChange", "onInput", "ngModel", "min"], ["for", "prix_par_rouleau", 1, "block", "font-bold", "mb-4"], ["id", "prix_par_rouleau", "styleClass", "w-full", 3, "ngModelChange", "onInput", "ngModel", "min"], ["for", "montant", 1, "block", "font-bold", "mb-4"], ["id", "montant", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "readonly"], ["for", "statut", 1, "block", "font-bold", "mb-4"], ["optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un statut", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "options"], ["for", "notes", 1, "block", "font-bold", "mb-4"], ["pTextarea", "", "id", "notes", "rows", "3", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "pi", "pi-user", "text-primary"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "text-red-500"], ["label", "Annuler", "icon", "pi pi-times", "text", "", 3, "click", "disabled"], [3, "click", "label", "icon", "disabled", "loading"]], template: function PackingListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 8)(2, "p-toolbar", 9);
      \u0275\u0275template(3, PackingListe_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, PackingListe_ng_template_5_Template, 6, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 10, 2);
      \u0275\u0275twoWayListener("selectionChange", function PackingListe_Template_p_table_selectionChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedPackings, $event) || (ctx.selectedPackings = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, PackingListe_ng_template_9_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, PackingListe_ng_template_11_Template, 34, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, PackingListe_ng_template_13_Template, 22, 14, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function PackingListe_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.packingDialog, $event) || (ctx.packingDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, PackingListe_ng_template_16_Template, 39, 18, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(18, PackingListe_ng_template_18_Template, 2, 5, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.packings())("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", ctx.filterFields)("tableStyle", \u0275\u0275pureFunction0(17, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedPackings);
      \u0275\u0275property("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c2))("loading", ctx.loading);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.packingDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c4));
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    TableModule,
    Table,
    PrimeTemplate,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    InputTextModule,
    InputText,
    SelectModule,
    Select,
    InputNumberModule,
    InputNumber,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog,
    DatePickerModule,
    DatePicker,
    AutoCompleteModule,
    TextareaModule,
    Textarea,
    TooltipModule,
    Tooltip
  ], styles: ["\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-50);\n  color: var(--surface-700);\n  font-weight: 600;\n  padding: 1rem;\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-50);\n}\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n}\n[_nghost-%COMP%]     .dark .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-800);\n  color: var(--surface-200);\n}\n[_nghost-%COMP%]     .dark .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-800);\n}\n/*# sourceMappingURL=packing-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingListe, [{
    type: Component,
    args: [{ selector: "app-packing-liste", standalone: true, imports: [
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
      AutoCompleteModule,
      TextareaModule,
      TooltipModule
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />\r
\r
<div class="card">\r
    <p-toolbar styleClass="mb-12">\r
        <ng-template #start>\r
            <p-button label="Ajouter packing" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />\r
        </ng-template>\r
\r
        <ng-template #end>\r
            <div class="flex items-center gap-2">\r
                <p-select\r
                    [(ngModel)]="filterStatut"\r
                    [options]="statuses"\r
                    optionLabel="label"\r
                    optionValue="value"\r
                    placeholder="Statut"\r
                    [showClear]="true"\r
                    (onChange)="onDateFilter()"\r
                    styleClass="w-40"\r
                />\r
                <p-datepicker\r
                    [(ngModel)]="filterDateDebut"\r
                    dateFormat="dd/mm/yy"\r
                    placeholder="Date d\xE9but"\r
                    [showIcon]="true"\r
                    [maxDate]="filterDateFin"\r
                    (onSelect)="onDateFilter()"\r
                    inputStyleClass="w-full"\r
                    styleClass="w-40"\r
                />\r
                <p-datepicker\r
                    [(ngModel)]="filterDateFin"\r
                    dateFormat="dd/mm/yy"\r
                    placeholder="Date fin"\r
                    [showIcon]="true"\r
                    [minDate]="filterDateDebut"\r
                    (onSelect)="onDateFilter()"\r
                    inputStyleClass="w-full"\r
                    styleClass="w-40"\r
                />\r
                <p-button\r
                    icon="pi pi-filter-slash"\r
                    severity="secondary"\r
                    [outlined]="true"\r
                    [rounded]="true"\r
                    (onClick)="clearDateFilters()"\r
                    *ngIf="filterDateDebut || filterDateFin || filterStatut"\r
                    pTooltip="Effacer les filtres"\r
                />\r
                <p-button label="Export" icon="pi pi-download" severity="secondary" (onClick)="exportCSV()" />\r
            </div>\r
        </ng-template>\r
    </p-toolbar>\r
\r
    <p-table\r
        #dt\r
        [value]="packings()"\r
        [rows]="10"\r
        [columns]="cols"\r
        [paginator]="true"\r
        [globalFilterFields]="filterFields"\r
        [tableStyle]="{ 'min-width': '75rem' }"\r
        [(selection)]="selectedPackings"\r
        [rowHover]="true"\r
        dataKey="id"\r
        currentPageReportTemplate="Affichage {first} \xE0 {last} sur {totalRecords} packings"\r
        [showCurrentPageReport]="true"\r
        [rowsPerPageOptions]="[10, 20, 30]"\r
        [loading]="loading"\r
    >\r
        <ng-template #caption>\r
            <div class="flex items-center justify-between">\r
                <h5 class="m-0">Gestion des Packings</h5>\r
                <p-iconfield>\r
                    <p-inputicon styleClass="pi pi-search" />\r
                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Rechercher..." />\r
                </p-iconfield>\r
            </div>\r
        </ng-template>\r
        <ng-template #header>\r
            <tr>\r
                <th style="width: 3rem">\r
                    <p-tableHeaderCheckbox />\r
                </th>\r
                <th pSortableColumn="reference" style="min-width: 10rem">\r
                    <span class="flex items-center gap-2">R\xE9f\xE9rence\r
                    <p-sortIcon field="reference" /></span>\r
                </th>\r
                <th pSortableColumn="prestataire.nom" style="min-width: 14rem">\r
                    <span class="flex items-center gap-2">Prestataire\r
                    <p-sortIcon field="prestataire.nom" /></span>\r
                </th>\r
                <th style="min-width: 10rem">Phone</th>\r
                <th pSortableColumn="date_debut" style="min-width: 10rem">\r
                    <span class="flex items-center gap-2">D\xE9but\r
                    <p-sortIcon field="date_debut" /></span>\r
                </th>\r
                <th pSortableColumn="date_fin" style="min-width: 10rem">\r
                    <span class="flex items-center gap-2">Fin\r
                    <p-sortIcon field="date_fin" /></span>\r
                </th>\r
                <th pSortableColumn="nb_rouleaux" style="min-width: 8rem">\r
                    <span class="flex items-center gap-2">Rouleaux\r
                    <p-sortIcon field="nb_rouleaux" /></span>\r
                </th>\r
                <th pSortableColumn="montant" style="min-width: 10rem">\r
                    <span class="flex items-center gap-2">Montant\r
                    <p-sortIcon field="montant" /></span>\r
                </th>\r
                <th pSortableColumn="statut" style="min-width: 10rem">\r
                    <span class="flex items-center gap-2">Statut\r
                    <p-sortIcon field="statut" /></span>\r
                </th>\r
                <th style="min-width: 10rem"></th>\r
            </tr>\r
        </ng-template>\r
        <ng-template #body let-packing>\r
            <tr>\r
                <td style="width: 3rem">\r
                    <p-tableCheckbox [value]="packing" />\r
                </td>\r
                <td>{{ packing.reference }}</td>\r
                <td>\r
                    <span *ngIf="packing.prestataire">\r
                        {{ packing.prestataire.nom }} {{ packing.prestataire.prenom }}\r
                    </span>\r
                </td>\r
                <td>\r
                    <span *ngIf="packing.prestataire">{{ packing.prestataire.phone }}</span>\r
                </td>\r
                <td>{{ formatDateDisplay(packing.date_debut) }}</td>\r
                <td>{{ formatDateDisplay(packing.date_fin) }}</td>\r
                <td>{{ packing.nb_rouleaux }}</td>\r
                <td>{{ formatCurrency(packing.montant) }}</td>\r
                <td>\r
                    <p-tag [value]="getStatutLabel(packing.statut)" [severity]="getStatutSeverity(packing.statut)" />\r
                </td>\r
                <td>\r
                    <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editPacking(packing)" />\r
                    <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deletePacking(packing)" />\r
                </td>\r
            </tr>\r
        </ng-template>\r
    </p-table>\r
</div>\r
\r
<p-dialog [(visible)]="packingDialog" [style]="{ width: '750px' }" header="D\xE9tails du packing" [modal]="true">\r
    <ng-template #content>\r
        <div class="flex flex-col gap-6">\r
            <div>\r
                <label for="prestataire" class="block font-bold mb-4">Prestataire (Machiniste)</label>\r
                <p-select\r
                    [(ngModel)]="selectedPrestataire"\r
                    [options]="prestataires"\r
                    optionLabel="nom"\r
                    [filter]="true"\r
                    filterBy="nom,prenom,phone"\r
                    placeholder="S\xE9lectionner un prestataire"\r
                    styleClass="w-full"\r
                >\r
                    <ng-template let-prestataire pTemplate="item">\r
                        <div class="flex items-center gap-2">\r
                            <i class="pi pi-user text-primary"></i>\r
                            <span>{{ prestataire.prenom }} {{ prestataire.nom }} - {{ prestataire.phone }}</span>\r
                        </div>\r
                    </ng-template>\r
                    <ng-template let-prestataire pTemplate="selectedItem">\r
                        <div class="flex items-center gap-2" *ngIf="prestataire">\r
                            <i class="pi pi-user text-primary"></i>\r
                            <span>{{ prestataire.prenom }} {{ prestataire.nom }}</span>\r
                        </div>\r
                    </ng-template>\r
                </p-select>\r
                <small class="text-red-500" *ngIf="submitted && !selectedPrestataire">Le prestataire est requis.</small>\r
            </div>\r
\r
            <div class="grid grid-cols-12 gap-4">\r
                <div class="col-span-6">\r
                    <label for="date_debut" class="block font-bold mb-4">Date d\xE9but</label>\r
                    <p-datepicker\r
                        [(ngModel)]="packing.date_debut"\r
                        dateFormat="dd/mm/yy"\r
                        [showIcon]="true"\r
                        inputStyleClass="w-full"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
                <div class="col-span-6">\r
                    <label for="date_fin" class="block font-bold mb-4">Date fin</label>\r
                    <p-datepicker\r
                        [(ngModel)]="packing.date_fin"\r
                        dateFormat="dd/mm/yy"\r
                        [showIcon]="true"\r
                        inputStyleClass="w-full"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
            </div>\r
\r
            <div class="grid grid-cols-12 gap-4">\r
                <div class="col-span-6">\r
                    <label for="nb_rouleaux" class="block font-bold mb-4">Nombre de rouleaux</label>\r
                    <p-inputnumber\r
                        id="nb_rouleaux"\r
                        [(ngModel)]="packing.nb_rouleaux"\r
                        (onInput)="calculateMontant()"\r
                        [min]="0"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
                <div class="col-span-6">\r
                    <label for="prix_par_rouleau" class="block font-bold mb-4">Prix du rouleau (GNF)</label>\r
                    <p-inputnumber\r
                        id="prix_par_rouleau"\r
                        [(ngModel)]="packing.prix_par_rouleau"\r
                        (onInput)="calculateMontant()"\r
                        [min]="0"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
            </div>\r
\r
            <div class="grid grid-cols-12 gap-4">\r
                <div class="col-span-6">\r
                    <label for="montant" class="block font-bold mb-4">Montant total (GNF)</label>\r
                    <p-inputnumber\r
                        id="montant"\r
                        [(ngModel)]="packing.montant"\r
                        [min]="0"\r
                        [readonly]="true"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
                <div class="col-span-6">\r
                    <label for="statut" class="block font-bold mb-4">Statut</label>\r
                    <p-select\r
                        [(ngModel)]="packing.statut"\r
                        [options]="statuses"\r
                        optionLabel="label"\r
                        optionValue="value"\r
                        placeholder="S\xE9lectionner un statut"\r
                        styleClass="w-full"\r
                    />\r
                </div>\r
            </div>\r
\r
            <div>\r
                <label for="notes" class="block font-bold mb-4">Notes</label>\r
                <textarea\r
                    pTextarea\r
                    id="notes"\r
                    [(ngModel)]="packing.notes"\r
                    rows="3"\r
                    class="w-full"\r
                ></textarea>\r
            </div>\r
        </div>\r
    </ng-template>\r
\r
    <ng-template #footer>\r
        <p-button label="Annuler" icon="pi pi-times" text (click)="hideDialog()" [disabled]="saving" />\r
        <p-button\r
            [label]="saving ? 'Enregistrement...' : 'Enregistrer'"\r
            [icon]="saving ? 'pi pi-spin pi-spinner' : 'pi pi-check'"\r
            (click)="savePacking()"\r
            [disabled]="saving"\r
            [loading]="saving" />\r
    </ng-template>\r
</p-dialog>\r
\r
<p-confirmdialog [style]="{ width: '450px' }" />\r
`, styles: ["/* src/app/pages/packings/packing-liste/packing-liste.scss */\n:host ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-50);\n  color: var(--surface-700);\n  font-weight: 600;\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-50);\n}\n:host ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 0.75rem 1rem;\n}\n:host ::ng-deep .dark .p-datatable .p-datatable-thead > tr > th {\n  background-color: var(--surface-800);\n  color: var(--surface-200);\n}\n:host ::ng-deep .dark .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-800);\n}\n/*# sourceMappingURL=packing-liste.css.map */\n"] }]
  }], () => [{ type: PackingService }, { type: PrestataireService }, { type: MessageService }, { type: ConfirmationService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingListe, { className: "PackingListe", filePath: "src/app/pages/packings/packing-liste/packing-liste.ts", lineNumber: 73 });
})();

// src/app/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  transform(value, currency = "GNF", showSymbol = true) {
    if (value === null || value === void 0 || value === "") {
      return showSymbol ? "0 GNF" : "0";
    }
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num)) {
      return showSymbol ? "0 GNF" : "0";
    }
    const rounded = Math.round(num);
    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "  ");
    const symbol = currency === "EUR" ? "\u20AC" : "GNF";
    return showSymbol ? `${formatted} ${symbol}` : formatted;
  }
  static \u0275fac = function MoneyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyPipe, [{
    type: Pipe,
    args: [{
      name: "money",
      standalone: true,
      pure: true
    }]
  }], null, null);
})();

// src/app/pages/packings/packing-from/packing-from.ts
function PackingFrom_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function PackingFrom_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2, " Modifier ");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 40);
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prestataire_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", prestataire_r3.prenom, " ", prestataire_r3.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r3.phone);
  }
}
function PackingFrom_ng_template_16_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prestataire_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", prestataire_r4.prenom, " ", prestataire_r4.nom);
  }
}
function PackingFrom_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PackingFrom_ng_template_16_div_0_Template, 4, 2, "div", 44);
  }
  if (rf & 2) {
    const prestataire_r4 = ctx.$implicit;
    \u0275\u0275property("ngIf", prestataire_r4);
  }
}
function PackingFrom_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1, " Veuillez s\xE9lectionner un machiniste ");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dateDebutError, " ");
  }
}
function PackingFrom_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dateFinError, " ");
  }
}
function PackingFrom_small_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dateRangeError, " ");
  }
}
function PackingFrom_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1, " Le nombre de rouleaux doit \xEAtre sup\xE9rieur \xE0 0 ");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_small_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1, " Le prix unitaire doit \xEAtre sup\xE9rieur \xE0 0 ");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.model.nb_rouleaux, " rouleaux \xD7 ", \u0275\u0275pipeBind2(3, 2, ctx_r1.model.prix_par_rouleau, "1.0-0"), " GNF ");
  }
}
function PackingFrom_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2, " Entrez la quantit\xE9 et le prix unitaire pour calculer le montant ");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54);
    \u0275\u0275element(3, "i", 55);
    \u0275\u0275elementStart(4, "span", 56);
    \u0275\u0275text(5, "R\xE9capitulatif");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 57)(7, "div", 58)(8, "div", 59);
    \u0275\u0275element(9, "i", 60);
    \u0275\u0275elementStart(10, "div", 61)(11, "div", 31);
    \u0275\u0275text(12, "Prestataire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 62);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 63);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 59);
    \u0275\u0275element(18, "i", 64);
    \u0275\u0275elementStart(19, "div", 61)(20, "div", 31);
    \u0275\u0275text(21, "P\xE9riode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 65);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 63);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "div", 58)(29, "div", 59);
    \u0275\u0275element(30, "i", 66);
    \u0275\u0275elementStart(31, "div", 61)(32, "div", 31);
    \u0275\u0275text(33, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 67);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 59);
    \u0275\u0275element(37, "i", 68);
    \u0275\u0275elementStart(38, "div", 61)(39, "div", 31);
    \u0275\u0275text(40, "Prix unitaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 65);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 69);
    \u0275\u0275element(45, "i", 70);
    \u0275\u0275elementStart(46, "div", 61)(47, "div", 31);
    \u0275\u0275text(48, "Montant total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 71);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate2(" ", (tmp_1_0 = ctx_r1.getSelectedPrestataire()) == null ? null : tmp_1_0.prenom, " ", (tmp_1_0 = ctx_r1.getSelectedPrestataire()) == null ? null : tmp_1_0.nom, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r1.getSelectedPrestataire()) == null ? null : tmp_2_0.phone, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(24, 9, ctx_r1.model.date_debut, "dd/MM/yyyy"), " - ", \u0275\u0275pipeBind2(25, 12, ctx_r1.model.date_fin, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.calculateDays(), " jour(s) ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.model.nb_rouleaux, " rouleaux ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 15, ctx_r1.model.prix_par_rouleau, "1.0-0"), " GNF ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 18, ctx_r1.model.montant, "1.0-0"), " GNF ");
  }
}
function PackingFrom_div_61_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.mode === "create" ? "Enregistrer" : "Sauvegarder");
  }
}
function PackingFrom_div_61_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enregistrement...");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "button", 73);
    \u0275\u0275listener("click", function PackingFrom_div_61_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275element(2, "i", 74);
    \u0275\u0275template(3, PackingFrom_div_61_span_3_Template, 2, 1, "span", 75)(4, PackingFrom_div_61_span_4_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 76);
    \u0275\u0275listener("click", function PackingFrom_div_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode === "create" ? ctx_r1.onCancel() : ctx_r1.cancelEditing());
    });
    \u0275\u0275element(6, "i", 77);
    \u0275\u0275text(7, " Annuler ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isValid() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275classProp("mr-2", !ctx_r1.loading);
    \u0275\u0275property("ngClass", ctx_r1.loading ? "pi-spin pi-spinner" : "pi-check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var PackingFormModel = class {
  id;
  prestataire_id;
  prestataire;
  reference;
  date_debut;
  date_fin;
  nb_rouleaux = 0;
  prix_par_rouleau = 0;
  montant = 0;
  statut = "en_cours";
  notes;
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.prestataire_id = data.prestataire_id;
      this.prestataire = data.prestataire;
      this.reference = data.reference;
      this.date_debut = data.date_debut ? new Date(data.date_debut) : null;
      this.date_fin = data.date_fin ? new Date(data.date_fin) : null;
      this.nb_rouleaux = data.nb_rouleaux || 0;
      this.prix_par_rouleau = data.prix_par_rouleau || 0;
      this.montant = data.montant || 0;
      this.statut = data.statut || "en_cours";
      this.notes = data.notes;
    }
  }
  calculateMontant() {
    this.montant = this.nb_rouleaux * this.prix_par_rouleau;
  }
};
var PackingFrom = class _PackingFrom {
  mode = "create";
  initialData = null;
  prestataires = [];
  loading = false;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  submitted = false;
  isEditing = false;
  model = new PackingFormModel();
  minDate = /* @__PURE__ */ new Date();
  dateDebutError = null;
  dateFinError = null;
  dateRangeError = null;
  ngOnInit() {
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
    if (this.mode === "create") {
      this.isEditing = true;
    }
  }
  // Calculer automatiquement le montant
  onPrixOrQuantityChange() {
    if (this.model.nb_rouleaux && this.model.prix_par_rouleau) {
      this.model.calculateMontant();
    }
  }
  // Validation de la date de début
  validateDateDebut() {
    if (!this.model.date_debut) {
      this.dateDebutError = "Date de d\xE9but obligatoire.";
      return false;
    }
    const dateDebut = new Date(this.model.date_debut);
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (dateDebut < today && this.mode === "create") {
      this.dateDebutError = "La date de d\xE9but ne peut pas \xEAtre dans le pass\xE9.";
      return false;
    }
    this.dateDebutError = null;
    return true;
  }
  // Validation de la date de fin
  validateDateFin() {
    if (!this.model.date_fin) {
      this.dateFinError = "Date de fin obligatoire.";
      return false;
    }
    this.dateFinError = null;
    return true;
  }
  // Validation de la plage de dates
  validateDateRange() {
    if (!this.model.date_debut || !this.model.date_fin) {
      return true;
    }
    const dateDebut = new Date(this.model.date_debut);
    const dateFin = new Date(this.model.date_fin);
    if (dateFin < dateDebut) {
      this.dateRangeError = "La date de fin doit \xEAtre sup\xE9rieure ou \xE9gale \xE0 la date de d\xE9but.";
      return false;
    }
    this.dateRangeError = null;
    return true;
  }
  // Événement déclenché lors du changement de date de début
  onDateDebutChange() {
    if (this.submitted) {
      this.validateDateDebut();
      this.validateDateRange();
    }
  }
  // Événement déclenché lors du changement de date de fin
  onDateFinChange() {
    if (this.submitted) {
      this.validateDateFin();
      this.validateDateRange();
    }
  }
  // Événement déclenché lors de la perte de focus des dates
  onDateBlur(field) {
    if (field === "debut" && this.model.date_debut) {
      this.validateDateDebut();
    } else if (field === "fin" && this.model.date_fin) {
      this.validateDateFin();
    }
    this.validateDateRange();
  }
  // Obtenir le nom complet du prestataire
  getPrestataireLabel(prestataire) {
    return `${prestataire.prenom} ${prestataire.nom} - ${prestataire.phone}`;
  }
  // Obtenir le prestataire sélectionné
  getSelectedPrestataire() {
    return this.filteredPrestataires.find((p) => p.id === this.model.prestataire_id);
  }
  // Filtrer les prestataires de type machiniste
  get filteredPrestataires() {
    const selectedId = this.model.prestataire_id;
    return (this.prestataires ?? []).filter((prestataire) => {
      if (selectedId && prestataire.id === selectedId)
        return true;
      return prestataire.type === "machiniste";
    });
  }
  // Getter pour la date minimum de fin (doit être >= date début)
  get minDateFin() {
    if (!this.model.date_debut) {
      return this.minDate;
    }
    return this.model.date_debut instanceof Date ? this.model.date_debut : new Date(this.model.date_debut);
  }
  // Calculer le nombre de jours
  calculateDays() {
    if (!this.model.date_debut || !this.model.date_fin) {
      return 0;
    }
    const debut = new Date(this.model.date_debut);
    const fin = new Date(this.model.date_fin);
    const diffTime = Math.abs(fin.getTime() - debut.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    return diffDays + 1;
  }
  // Validation complète
  isValid() {
    const basicValidation = !!(this.model.prestataire_id && this.model.date_debut && this.model.date_fin && this.model.nb_rouleaux && this.model.nb_rouleaux > 0 && this.model.prix_par_rouleau && this.model.prix_par_rouleau > 0);
    if (!basicValidation) {
      return false;
    }
    return this.validateDateDebut() && this.validateDateFin() && this.validateDateRange();
  }
  // Activer l'édition
  enableEditing() {
    this.isEditing = true;
  }
  // Annuler l'édition
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.dateDebutError = null;
    this.dateFinError = null;
    this.dateRangeError = null;
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
  }
  // Réinitialiser le formulaire (méthode publique)
  resetForm() {
    this.submitted = false;
    this.dateDebutError = null;
    this.dateFinError = null;
    this.dateRangeError = null;
    this.model = new PackingFormModel();
  }
  // Formater la date pour l'API
  formatDate(date) {
    if (!date)
      return "";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toISOString().split("T")[0];
  }
  // Soumettre le formulaire
  onSubmit() {
    this.submitted = true;
    if (!this.isValid()) {
      return;
    }
    this.model.calculateMontant();
    const packingData = {
      prestataire_id: this.model.prestataire_id,
      date_debut: this.formatDate(this.model.date_debut),
      date_fin: this.formatDate(this.model.date_fin),
      nb_rouleaux: this.model.nb_rouleaux,
      prix_par_rouleau: this.model.prix_par_rouleau,
      montant: this.model.montant,
      statut: this.model.statut,
      notes: this.model.notes ?? void 0
    };
    this.submitForm.emit(packingData);
  }
  // Annuler
  onCancel() {
    this.cancel.emit();
  }
  // Désactiver les champs en mode lecture
  get fieldsDisabled() {
    return this.mode === "edit" && !this.isEditing || this.loading;
  }
  // Vérifier si le formulaire a des erreurs
  hasErrors() {
    return !!(this.dateDebutError || this.dateFinError || this.dateRangeError);
  }
  static \u0275fac = function PackingFrom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingFrom)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingFrom, selectors: [["app-packing-from"]], inputs: { mode: "mode", initialData: "initialData", prestataires: "prestataires", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, decls: 62, vars: 42, consts: [[1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], ["pButton", "", "pRipple", "", "severity", "warn", "class", "w-auto", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12"], ["for", "prestataire", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["class", "text-red-500", 4, "ngIf"], ["id", "prestataire", "optionLabel", "nom", "optionValue", "id", "placeholder", "S\xE9lectionnez un machiniste", "filterBy", "nom,prenom,phone", "fluid", "", 3, "ngModelChange", "ngModel", "options", "filter", "showClear", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "md:col-span-6"], ["for", "dateDebut", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "dateDebut", "dateFormat", "dd/mm/yy", "placeholder", "S\xE9lectionnez la date", "fluid", "", 3, "ngModelChange", "onSelect", "onBlur", "ngModel", "showIcon", "minDate", "disabled"], ["class", "text-red-500 block mt-1", 4, "ngIf"], ["for", "dateFin", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "dateFin", "dateFormat", "dd/mm/yy", "placeholder", "S\xE9lectionnez la date", "fluid", "", 3, "ngModelChange", "onSelect", "onBlur", "ngModel", "showIcon", "minDate", "disabled"], ["class", "text-red-500 block mt-2", 4, "ngIf"], [1, "mb-6", "col-span-12", "grid", "grid-cols-12", "gap-3"], ["for", "nbRouleaux", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nbRouleaux", "placeholder", "Entrez le nombre", "mode", "decimal", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "max", "useGrouping", "disabled"], ["for", "prixRouleau", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "prixRouleau", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix par rouleau", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled"], [1, "bg-gradient-to-r", "from-primary/10", "to-primary/5", "border-l-4", "border-primary", "rounded-lg", "p-4"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-full", "bg-primary/20", "flex", "items-center", "justify-center"], [1, "pi", "pi-money-bill", "text-primary", "text-xl"], [1, "text-xs", "text-surface-600", "dark:text-surface-400", "mb-1"], [1, "text-3xl", "font-bold", "text-primary"], ["class", "text-sm text-surface-600 dark:text-surface-300 mt-3 flex items-center gap-2", 4, "ngIf"], ["class", "text-sm text-surface-500 dark:text-surface-400 mt-3 italic", 4, "ngIf"], ["class", "col-span-12 mb-6", 4, "ngIf"], ["class", "col-span-12 flex gap-2 mb-4", 4, "ngIf"], ["pButton", "", "pRipple", "", "severity", "warn", 1, "w-auto", 3, "click"], [1, "pi", "pi-pencil", "mr-2"], [1, "text-red-500"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "bg-primary/10"], [1, "pi", "pi-user", "text-primary"], [1, "font-medium"], [1, "text-sm", "text-surface-500"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [1, "text-red-500", "block", "mt-1"], [1, "text-red-500", "block", "mt-2"], [1, "text-sm", "text-surface-600", "dark:text-surface-300", "mt-3", "flex", "items-center", "gap-2"], [1, "pi", "pi-calculator", "text-surface-500"], [1, "text-sm", "text-surface-500", "dark:text-surface-400", "mt-3", "italic"], [1, "pi", "pi-info-circle", "mr-2"], [1, "col-span-12", "mb-6"], [1, "bg-blue-50", "dark:bg-blue-900/20", "border", "border-blue-200", "dark:border-blue-800", "rounded-lg", "p-5"], [1, "flex", "items-center", "gap-2", "mb-4"], [1, "pi", "pi-info-circle", "text-blue-600", "dark:text-blue-400", "text-lg"], [1, "font-bold", "text-blue-900", "dark:text-blue-100", "text-lg"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "space-y-3"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-user", "text-blue-600", "mt-1"], [1, "flex-1"], [1, "font-semibold", "text-surface-900", "dark:text-surface-0"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "pi", "pi-calendar", "text-blue-600", "mt-1"], [1, "font-medium", "text-surface-900", "dark:text-surface-0"], [1, "pi", "pi-box", "text-blue-600", "mt-1"], [1, "font-bold", "text-primary", "text-xl"], [1, "pi", "pi-tag", "text-blue-600", "mt-1"], [1, "flex", "items-start", "gap-3", "pt-3", "border-t", "border-blue-200", "dark:border-blue-700"], [1, "pi", "pi-wallet", "text-blue-600", "mt-1"], [1, "font-bold", "text-primary", "text-2xl"], [1, "col-span-12", "flex", "gap-2", "mb-4"], ["pButton", "", "pRipple", "", 1, "w-auto", 3, "click", "disabled"], [1, "pi", 3, "ngClass"], [4, "ngIf"], ["pButton", "", "pRipple", "", "severity", "secondary", 1, "w-auto", 3, "click", "disabled"], [1, "pi", "pi-times", "mr-2"]], template: function PackingFrom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, PackingFrom_button_4_Template, 3, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 4)(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, " Prestataire ");
      \u0275\u0275template(12, PackingFrom_span_12_Template, 2, 0, "span", 9);
      \u0275\u0275text(13, " (Machiniste) ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_select_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prestataire_id, $event) || (ctx.model.prestataire_id = $event);
        return $event;
      });
      \u0275\u0275template(15, PackingFrom_ng_template_15_Template, 8, 3, "ng-template", 11)(16, PackingFrom_ng_template_16_Template, 1, 1, "ng-template", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, PackingFrom_small_17_Template, 2, 0, "small", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 7)(19, "div", 13)(20, "div", 14)(21, "label", 15);
      \u0275\u0275text(22, " Date de d\xE9but ");
      \u0275\u0275template(23, PackingFrom_span_23_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p-datepicker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_datepicker_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.date_debut, $event) || (ctx.model.date_debut = $event);
        return $event;
      });
      \u0275\u0275listener("onSelect", function PackingFrom_Template_p_datepicker_onSelect_24_listener() {
        return ctx.onDateDebutChange();
      })("onBlur", function PackingFrom_Template_p_datepicker_onBlur_24_listener() {
        return ctx.onDateBlur("debut");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, PackingFrom_small_25_Template, 2, 1, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "label", 18);
      \u0275\u0275text(28, " Date de fin ");
      \u0275\u0275template(29, PackingFrom_span_29_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p-datepicker", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_datepicker_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.date_fin, $event) || (ctx.model.date_fin = $event);
        return $event;
      });
      \u0275\u0275listener("onSelect", function PackingFrom_Template_p_datepicker_onSelect_30_listener() {
        return ctx.onDateFinChange();
      })("onBlur", function PackingFrom_Template_p_datepicker_onBlur_30_listener() {
        return ctx.onDateBlur("fin");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, PackingFrom_small_31_Template, 2, 1, "small", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, PackingFrom_small_32_Template, 2, 1, "small", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 14)(35, "label", 22);
      \u0275\u0275text(36, " Nombre de rouleaux ");
      \u0275\u0275template(37, PackingFrom_span_37_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p-inputnumber", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.nb_rouleaux, $event) || (ctx.model.nb_rouleaux = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_38_listener() {
        return ctx.onPrixOrQuantityChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, PackingFrom_small_39_Template, 2, 0, "small", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 14)(41, "label", 24);
      \u0275\u0275text(42, " Prix unitaire (GNF) ");
      \u0275\u0275template(43, PackingFrom_span_43_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p-inputnumber", 25);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_44_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prix_par_rouleau, $event) || (ctx.model.prix_par_rouleau = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_44_listener() {
        return ctx.onPrixOrQuantityChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, PackingFrom_small_45_Template, 2, 0, "small", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29);
      \u0275\u0275element(51, "i", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "div", 31);
      \u0275\u0275text(54, " Montant total ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 32);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "money");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(58, PackingFrom_div_58_Template, 4, 5, "div", 33)(59, PackingFrom_div_59_Template, 3, 0, "div", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, PackingFrom_div_60_Template, 52, 21, "div", 35)(61, PackingFrom_div_61_Template, 8, 7, "div", 36);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Nouveau Packing" : "D\xE9tails du Packing", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.prestataire_id);
      \u0275\u0275property("options", ctx.filteredPrestataires)("filter", true)("showClear", true)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.submitted && !ctx.model.prestataire_id && ctx.isEditing);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.date_debut);
      \u0275\u0275property("showIcon", true)("minDate", ctx.minDate)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.dateDebutError && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.date_fin);
      \u0275\u0275property("showIcon", true)("minDate", ctx.minDateFin)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.dateFinError && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && ctx.dateRangeError && ctx.isEditing);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.nb_rouleaux);
      \u0275\u0275property("showButtons", true)("min", 1)("max", 9999)("useGrouping", false)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && (!ctx.model.nb_rouleaux || ctx.model.nb_rouleaux < 1) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.prix_par_rouleau);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && (!ctx.model.prix_par_rouleau || ctx.model.prix_par_rouleau <= 0) && ctx.isEditing);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 40, ctx.model.montant), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.model.nb_rouleaux && ctx.model.prix_par_rouleau);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.model.nb_rouleaux || !ctx.model.prix_par_rouleau);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.prestataire_id && ctx.model.date_debut && ctx.model.date_fin && ctx.model.nb_rouleaux && ctx.model.prix_par_rouleau && !ctx.hasErrors());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    FormsModule,
    NgControlStatus,
    NgModel,
    DatePicker,
    Select,
    InputNumber,
    Ripple,
    DecimalPipe,
    DatePipe,
    MoneyPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingFrom, [{
    type: Component,
    args: [{ selector: "app-packing-from", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePicker,
      Select,
      InputNumber,
      Button,
      InputGroup,
      InputGroupAddon,
      Ripple,
      MoneyPipe
    ], template: `<div class="card">\r
  <div class="flex justify-between items-center mb-6">\r
    <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">\r
      {{ mode === 'create' ? 'Nouveau Packing' : 'D\xE9tails du Packing' }}\r
    </span>\r
\r
    <!-- Bouton Modifier -->\r
    <button\r
      *ngIf="mode === 'edit' && !isEditing"\r
      pButton\r
      pRipple\r
      severity="warn"\r
      (click)="enableEditing()"\r
      class="w-auto">\r
      <i class="pi pi-pencil mr-2"></i>\r
      Modifier\r
    </button>\r
  </div>\r
\r
  <div class="grid grid-cols-12 gap-4">\r
    <div class="col-span-12 lg:col-span-2">\r
    </div>\r
\r
    <div class="col-span-12 lg:col-span-10">\r
      <div class="grid grid-cols-12 gap-4">\r
\r
        <!-- Prestataire -->\r
        <div class="mb-6 col-span-12">\r
          <label for="prestataire" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Prestataire <span class="text-red-500" *ngIf="isEditing">*</span> (Machiniste)\r
          </label>\r
          <p-select\r
            id="prestataire"\r
            [(ngModel)]="model.prestataire_id"\r
            [options]="filteredPrestataires"\r
            optionLabel="nom"\r
            optionValue="id"\r
            placeholder="S\xE9lectionnez un machiniste"\r
            [filter]="true"\r
            filterBy="nom,prenom,phone"\r
            [showClear]="true"\r
            [disabled]="fieldsDisabled"\r
            fluid>\r
            <ng-template let-prestataire pTemplate="item">\r
              <div class="flex items-center gap-3">\r
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">\r
                  <i class="pi pi-user text-primary"></i>\r
                </div>\r
                <div>\r
                  <div class="font-medium">{{ prestataire.prenom }} {{ prestataire.nom }}</div>\r
                  <div class="text-sm text-surface-500">{{ prestataire.phone }}</div>\r
                </div>\r
              </div>\r
            </ng-template>\r
\r
            <ng-template let-prestataire pTemplate="selectedItem">\r
              <div class="flex items-center gap-2" *ngIf="prestataire">\r
                <i class="pi pi-user text-primary"></i>\r
                <span>{{ prestataire.prenom }} {{ prestataire.nom }}</span>\r
              </div>\r
            </ng-template>\r
          </p-select>\r
          <small class="text-red-500" *ngIf="submitted && !model.prestataire_id && isEditing">\r
            Veuillez s\xE9lectionner un machiniste\r
          </small>\r
        </div>\r
\r
        <!-- Dates -->\r
        <div class="mb-6 col-span-12">\r
          <div class="grid grid-cols-12 gap-3">\r
            <!-- Date de d\xE9but -->\r
            <div class="col-span-12 md:col-span-6">\r
              <label for="dateDebut" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                Date de d\xE9but <span class="text-red-500" *ngIf="isEditing">*</span>\r
              </label>\r
              <p-datepicker\r
                id="dateDebut"\r
                [(ngModel)]="model.date_debut"\r
                [showIcon]="true"\r
                [minDate]="minDate"\r
                dateFormat="dd/mm/yy"\r
                placeholder="S\xE9lectionnez la date"\r
                [disabled]="fieldsDisabled"\r
                (onSelect)="onDateDebutChange()"\r
                (onBlur)="onDateBlur('debut')"\r
                fluid />\r
              <small class="text-red-500 block mt-1" *ngIf="submitted && dateDebutError && isEditing">\r
                {{ dateDebutError }}\r
              </small>\r
            </div>\r
\r
            <!-- Date de fin -->\r
            <div class="col-span-12 md:col-span-6">\r
              <label for="dateFin" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
                Date de fin <span class="text-red-500" *ngIf="isEditing">*</span>\r
              </label>\r
              <p-datepicker\r
                id="dateFin"\r
                [(ngModel)]="model.date_fin"\r
                [showIcon]="true"\r
                [minDate]="minDateFin"\r
                dateFormat="dd/mm/yy"\r
                placeholder="S\xE9lectionnez la date"\r
                [disabled]="fieldsDisabled"\r
                (onSelect)="onDateFinChange()"\r
                (onBlur)="onDateBlur('fin')"\r
                fluid />\r
              <small class="text-red-500 block mt-1" *ngIf="submitted && dateFinError && isEditing">\r
                {{ dateFinError }}\r
              </small>\r
            </div>\r
          </div>\r
\r
          <!-- Message d'erreur pour la plage de dates -->\r
          <small class="text-red-500 block mt-2" *ngIf="submitted && dateRangeError && isEditing">\r
            {{ dateRangeError }}\r
          </small>\r
        </div>\r
\r
        <!-- Nombre de rouleaux et Prix unitaire -->\r
        <div class="mb-6 col-span-12 grid grid-cols-12 gap-3">\r
          <!-- Nombre de rouleaux -->\r
          <div class="col-span-12 md:col-span-6">\r
            <label for="nbRouleaux" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
              Nombre de rouleaux <span class="text-red-500" *ngIf="isEditing">*</span>\r
            </label>\r
            <p-inputnumber\r
              id="nbRouleaux"\r
              [(ngModel)]="model.nb_rouleaux"\r
              (ngModelChange)="onPrixOrQuantityChange()"\r
              [showButtons]="true"\r
              [min]="1"\r
              [max]="9999"\r
              placeholder="Entrez le nombre"\r
              mode="decimal"\r
              [useGrouping]="false"\r
              [disabled]="fieldsDisabled"\r
              fluid />\r
            <small class="text-red-500" *ngIf="submitted && (!model.nb_rouleaux || model.nb_rouleaux < 1) && isEditing">\r
              Le nombre de rouleaux doit \xEAtre sup\xE9rieur \xE0 0\r
            </small>\r
          </div>\r
\r
          <!-- Prix unitaire -->\r
          <div class="col-span-12 md:col-span-6">\r
            <label for="prixRouleau" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
              Prix unitaire (GNF) <span class="text-red-500" *ngIf="isEditing">*</span>\r
            </label>\r
            <p-inputnumber\r
              id="prixRouleau"\r
              [(ngModel)]="model.prix_par_rouleau"\r
              (ngModelChange)="onPrixOrQuantityChange()"\r
              mode="currency"\r
              currency="GNF"\r
              locale="fr-GN"\r
              [min]="0"\r
              placeholder="Prix par rouleau"\r
              [disabled]="fieldsDisabled"\r
              fluid />\r
            <small class="text-red-500" *ngIf="submitted && (!model.prix_par_rouleau || model.prix_par_rouleau <= 0) && isEditing">\r
              Le prix unitaire doit \xEAtre sup\xE9rieur \xE0 0\r
            </small>\r
          </div>\r
        </div>\r
\r
        <!-- Montant total (toujours visible) -->\r
        <div class="mb-6 col-span-12">\r
          <div class="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-lg p-4">\r
            <div class="flex items-center justify-between">\r
              <div class="flex items-center gap-3">\r
                <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">\r
                  <i class="pi pi-money-bill text-primary text-xl"></i>\r
                </div>\r
                <div>\r
                  <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">\r
                    Montant total\r
                  </div>\r
                  <div class="text-3xl font-bold text-primary">\r
                    {{ model.montant | money }}\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
            <div class="text-sm text-surface-600 dark:text-surface-300 mt-3 flex items-center gap-2" *ngIf="model.nb_rouleaux && model.prix_par_rouleau">\r
              <i class="pi pi-calculator text-surface-500"></i>\r
              {{ model.nb_rouleaux }} rouleaux \xD7 {{ model.prix_par_rouleau | number:'1.0-0' }} GNF\r
            </div>\r
            <div class="text-sm text-surface-500 dark:text-surface-400 mt-3 italic" *ngIf="!model.nb_rouleaux || !model.prix_par_rouleau">\r
              <i class="pi pi-info-circle mr-2"></i>\r
              Entrez la quantit\xE9 et le prix unitaire pour calculer le montant\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- R\xE9capitulatif complet -->\r
        <div class="col-span-12 mb-6" *ngIf="model.prestataire_id && model.date_debut && model.date_fin && model.nb_rouleaux && model.prix_par_rouleau && !hasErrors()">\r
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5">\r
            <div class="flex items-center gap-2 mb-4">\r
              <i class="pi pi-info-circle text-blue-600 dark:text-blue-400 text-lg"></i>\r
              <span class="font-bold text-blue-900 dark:text-blue-100 text-lg">R\xE9capitulatif</span>\r
            </div>\r
\r
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
              <!-- Colonne 1 : Informations prestataire et p\xE9riode -->\r
              <div class="space-y-3">\r
                <div class="flex items-start gap-3">\r
                  <i class="pi pi-user text-blue-600 mt-1"></i>\r
                  <div class="flex-1">\r
                    <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">Prestataire</div>\r
                    <div class="font-semibold text-surface-900 dark:text-surface-0">\r
                      {{ getSelectedPrestataire()?.prenom }} {{ getSelectedPrestataire()?.nom }}\r
                    </div>\r
                    <div class="text-sm text-surface-500 dark:text-surface-400">\r
                      {{ getSelectedPrestataire()?.phone }}\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="flex items-start gap-3">\r
                  <i class="pi pi-calendar text-blue-600 mt-1"></i>\r
                  <div class="flex-1">\r
                    <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">P\xE9riode</div>\r
                    <div class="font-medium text-surface-900 dark:text-surface-0">\r
                      {{ model.date_debut | date:'dd/MM/yyyy' }} - {{ model.date_fin | date:'dd/MM/yyyy' }}\r
                    </div>\r
                    <div class="text-sm text-surface-500 dark:text-surface-400">\r
                      {{ calculateDays() }} jour(s)\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Colonne 2 : Informations financi\xE8res -->\r
              <div class="space-y-3">\r
                <div class="flex items-start gap-3">\r
                  <i class="pi pi-box text-blue-600 mt-1"></i>\r
                  <div class="flex-1">\r
                    <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">Quantit\xE9</div>\r
                    <div class="font-bold text-primary text-xl">\r
                      {{ model.nb_rouleaux }} rouleaux\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="flex items-start gap-3">\r
                  <i class="pi pi-tag text-blue-600 mt-1"></i>\r
                  <div class="flex-1">\r
                    <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">Prix unitaire</div>\r
                    <div class="font-medium text-surface-900 dark:text-surface-0">\r
                      {{ model.prix_par_rouleau | number:'1.0-0' }} GNF\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="flex items-start gap-3 pt-3 border-t border-blue-200 dark:border-blue-700">\r
                  <i class="pi pi-wallet text-blue-600 mt-1"></i>\r
                  <div class="flex-1">\r
                    <div class="text-xs text-surface-600 dark:text-surface-400 mb-1">Montant total</div>\r
                    <div class="font-bold text-primary text-2xl">\r
                      {{ model.montant | number:'1.0-0' }} GNF\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Boutons d'action -->\r
        <div class="col-span-12 flex gap-2 mb-4" *ngIf="isEditing">\r
          <button\r
            pButton\r
            pRipple\r
            (click)="onSubmit()"\r
            [disabled]="!isValid() || loading"\r
            class="w-auto">\r
            <i class="pi" [ngClass]="loading ? 'pi-spin pi-spinner' : 'pi-check'" [class.mr-2]="!loading"></i>\r
            <span *ngIf="!loading">{{ mode === 'create' ? 'Enregistrer' : 'Sauvegarder' }}</span>\r
            <span *ngIf="loading">Enregistrement...</span>\r
          </button>\r
\r
          <button\r
            pButton\r
            pRipple\r
            severity="secondary"\r
            (click)="mode === 'create' ? onCancel() : cancelEditing()"\r
            [disabled]="loading"\r
            class="w-auto">\r
            <i class="pi pi-times mr-2"></i>\r
            Annuler\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { mode: [{
    type: Input
  }], initialData: [{
    type: Input
  }], prestataires: [{
    type: Input
  }], loading: [{
    type: Input
  }], submitForm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingFrom, { className: "PackingFrom", filePath: "src/app/pages/packings/packing-from/packing-from.ts", lineNumber: 68 });
})();

// src/app/pages/packings/packing-new/packing-new.ts
var PackingNew = class _PackingNew {
  prestataireService;
  packingService;
  messageService;
  router;
  prestataires = [];
  loading = false;
  constructor(prestataireService, packingService, messageService, router) {
    this.prestataireService = prestataireService;
    this.packingService = packingService;
    this.messageService = messageService;
    this.router = router;
  }
  ngOnInit() {
    this.loadPrestataires();
  }
  loadPrestataires() {
    this.loading = true;
    this.prestataireService.getPrestataires().subscribe({
      next: (response) => {
        this.prestataires = this.extractPrestataires(response);
        this.loading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des prestataires :", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les prestataires",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  extractPrestataires(response) {
    const data = response?.data;
    if (Array.isArray(data))
      return data;
    if (data && Array.isArray(data.data))
      return data.data;
    return [];
  }
  onSubmit(packingData) {
    this.loading = true;
    this.packingService.createPacking(packingData).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Packing cr\xE9\xE9 avec succ\xE8s",
          life: 3e3
        });
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(["/packings/packings-liste"]);
        }, 1e3);
      },
      error: (err) => {
        console.error("Erreur lors de la cr\xE9ation du packing :", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de cr\xE9er le packing",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/packings/packings-liste"]);
  }
  static \u0275fac = function PackingNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingNew)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingNew, selectors: [["app-packing-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 3, consts: [[3, "submitForm", "cancel", "mode", "prestataires", "loading"]], template: function PackingNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-packing-from", 0);
      \u0275\u0275listener("submitForm", function PackingNew_Template_app_packing_from_submitForm_1_listener($event) {
        return ctx.onSubmit($event);
      })("cancel", function PackingNew_Template_app_packing_from_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("mode", "create")("prestataires", ctx.prestataires)("loading", ctx.loading);
    }
  }, dependencies: [PackingFrom, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingNew, [{
    type: Component,
    args: [{ selector: "app-packing-new", standalone: true, imports: [PackingFrom, ToastModule], providers: [MessageService], template: `<p-toast />
<app-packing-from
  [mode]="'create'"
  [prestataires]="prestataires"
  [loading]="loading"
  (submitForm)="onSubmit($event)"
  (cancel)="onCancel()">
</app-packing-from>
` }]
  }], () => [{ type: PrestataireService }, { type: PackingService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingNew, { className: "PackingNew", filePath: "src/app/pages/packings/packing-new/packing-new.ts", lineNumber: 19 });
})();

// src/app/pages/packings/packing-edit/packing-edit.ts
var PackingEdit = class _PackingEdit {
  static \u0275fac = function PackingEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingEdit)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingEdit, selectors: [["app-packing-edit"]], decls: 2, vars: 0, template: function PackingEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "packing-edit works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingEdit, [{
    type: Component,
    args: [{ selector: "app-packing-edit", imports: [], template: "<p>packing-edit works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingEdit, { className: "PackingEdit", filePath: "src/app/pages/packings/packing-edit/packing-edit.ts", lineNumber: 9 });
})();

// src/app/pages/packings/packings.routes.ts
var packings_routes_default = [
  { path: "", component: PackingListe },
  { path: "packings", component: PackingListe },
  { path: "packings-new", component: PackingNew },
  { path: "packings-edit/:id", component: PackingEdit },
  { path: "**", redirectTo: "/notfound" }
];
export {
  packings_routes_default as default
};
//# sourceMappingURL=chunk-YG7FHGZZ.js.map
