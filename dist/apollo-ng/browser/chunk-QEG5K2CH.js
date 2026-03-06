import {
  Divider,
  DividerModule
} from "./chunk-L7MB6DHN.js";
import {
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
  STATUT_VERSEMENT_LABELS,
  STATUT_VERSEMENT_SEVERITY
} from "./chunk-6AQT3D7V.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-BZYMN2OQ.js";
import {
  Dialog,
  DialogModule
} from "./chunk-PZSC3TY3.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import {
  Tag,
  TagModule
} from "./chunk-24JO5SYM.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-MTEYTWK3.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-K7KGEHY2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import {
  Button,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import {
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule
} from "./chunk-TGBATRWC.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";

// src/app/services/ventes/commission-vente.service.ts
var CommissionVenteService = class _CommissionVenteService {
  http;
  url = `${environment.apiUrl}/ventes/commissions`;
  constructor(http) {
    this.http = http;
  }
  getAll(params) {
    return this.http.get(this.url, { params });
  }
  getById(id) {
    return this.http.get(`${this.url}/${id}`);
  }
  /** Pas de montant_verse : le back utilise automatiquement montant_attendu */
  verser(id, type, note, date_versement) {
    const body = {};
    if (note)
      body["note"] = note;
    if (date_versement)
      body["date_versement"] = date_versement;
    return this.http.post(`${this.url}/${id}/versements/${type}`, body);
  }
  static \u0275fac = function CommissionVenteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommissionVenteService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommissionVenteService, factory: _CommissionVenteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionVenteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/ventes/commission-detail-dialog/commission-detail-dialog.ts
var _c0 = () => ({ width: "54rem", maxWidth: "96vw" });
var _c1 = () => ({ width: "30rem" });
var _c2 = () => [1, 2, 3, 4];
var _forTrack0 = ($index, $item) => $item.id;
function CommissionDetailDialog_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 5);
  }
}
function CommissionDetailDialog_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, CommissionDetailDialog_Conditional_2_For_2_Template, 1, 0, "p-skeleton", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const c_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", c_r2.proprietaire.prenom, " ", c_r2.proprietaire.nom);
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const c_r2 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Part propri\xE9taire (", 100 - ctx_r2.parseFloat(c_r2.taux_livreur_snapshot), "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(c_r2.part_proprietaire));
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const c_r2 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xC9ligible depuis le ", ctx_r2.formatDate(c_r2.eligible_at), " ");
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Vers\xE9 : ");
    \u0275\u0275elementStart(2, "strong", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(v_r4.montant_verse));
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(v_r4.verse_at));
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 32);
    \u0275\u0275listener("onClick", function CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_17_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const v_r4 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275nextContext(2);
      const c_r2 = \u0275\u0275readContextLet(0);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openVersementDialog(c_r2, v_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 7)(2, "div", 23);
    \u0275\u0275element(3, "i", 24);
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27)(9, "span");
    \u0275\u0275text(10, "Attendu : ");
    \u0275\u0275elementStart(11, "strong", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_13_Template, 4, 1, "span");
    \u0275\u0275conditionalCreate(14, CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_14_Template, 3, 1, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 29);
    \u0275\u0275element(16, "p-tag", 17);
    \u0275\u0275conditionalCreate(17, CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Conditional_17_Template, 1, 1, "p-button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    \u0275\u0275nextContext(2);
    const c_r2 = \u0275\u0275readContextLet(0);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.getBeneficiaireNom(c_r2, v_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", v_r4.beneficiaire_type === "livreur" ? "Livreur" : "Propri\xE9taire", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(v_r4.montant_attendu));
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r4.montant_verse ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r4.verse_at ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getVersementLabel(v_r4.statut))("severity", ctx_r2.getVersementSeverity(v_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canVerser(c_r2) && v_r4.statut === "en_attente" ? 17 : -1);
  }
}
function CommissionDetailDialog_Conditional_3_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 19);
    \u0275\u0275elementStart(1, "h4", 20);
    \u0275\u0275text(2, "Versements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275repeaterCreate(4, CommissionDetailDialog_Conditional_3_Conditional_35_For_5_Template, 18, 8, "div", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const c_r2 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(c_r2.versements);
  }
}
function CommissionDetailDialog_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "span", 8);
    \u0275\u0275text(4, "V\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
    \u0275\u0275text(11, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, CommissionDetailDialog_Conditional_3_Conditional_14_Template, 5, 2, "div", 7);
    \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
    \u0275\u0275text(17, "Taux livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "div", 13);
    \u0275\u0275text(23, "Commission totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 13);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 15);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, CommissionDetailDialog_Conditional_3_Conditional_31_Template, 5, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 16);
    \u0275\u0275element(33, "p-tag", 17);
    \u0275\u0275conditionalCreate(34, CommissionDetailDialog_Conditional_3_Conditional_34_Template, 3, 1, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, CommissionDetailDialog_Conditional_3_Conditional_35_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const c_r6 = \u0275\u0275storeLet(ctx_r2.commission());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r6.vehicule == null ? null : c_r6.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.vehicule == null ? null : c_r6.vehicule.immatriculation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", c_r6.livreur == null ? null : c_r6.livreur.prenom, " ", c_r6.livreur == null ? null : c_r6.livreur.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r6.proprietaire ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", c_r6.taux_livreur_snapshot, " %");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(c_r6.montant_commission_total));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Part livreur (", c_r6.taux_livreur_snapshot, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(c_r6.part_livreur));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.parseFloat(c_r6.part_proprietaire) > 0 ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getStatutLabel(c_r6.statut))("severity", ctx_r2.getStatutSeverity(c_r6.statut));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r6.eligible_at ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r6.versements && c_r6.versements.length > 0 ? 35 : -1);
  }
}
function CommissionDetailDialog_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4, " Confirmer le versement de ");
    \u0275\u0275elementStart(5, "strong", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " \xE0 ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 21)(12, "label", 37);
    \u0275\u0275text(13, "Date de versement ");
    \u0275\u0275elementStart(14, "span", 38);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-datepicker", 39);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionDetailDialog_Conditional_5_Template_p_datepicker_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementDate, $event) || (ctx_r2.versementDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21)(18, "label", 37);
    \u0275\u0275text(19, " Note / Justificatif ");
    \u0275\u0275elementStart(20, "span", 40);
    \u0275\u0275text(21, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionDetailDialog_Conditional_5_Template_textarea_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementNote, $event) || (ctx_r2.versementNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatMontant(ctx_r2.versementTarget().versement.montant_attendu), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.versementTarget().nom);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r2.versementTarget().versement.beneficiaire_type === "livreur" ? "Livreur" : "Propri\xE9taire", ") ? ");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementDate);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementNote);
  }
}
function CommissionDetailDialog_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 42);
    \u0275\u0275listener("onClick", function CommissionDetailDialog_ng_template_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.versementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 43);
    \u0275\u0275listener("onClick", function CommissionDetailDialog_ng_template_6_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmVersement());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("disabled", ctx_r2.versementLoading);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.versementLoading);
  }
}
var CommissionDetailDialog = class _CommissionDetailDialog {
  commissionService;
  messageService;
  commissionId;
  visible = false;
  visibleChange = new EventEmitter();
  onVersementDone = new EventEmitter();
  commission = signal(null, ...ngDevMode ? [{ debugName: "commission" }] : []);
  loadingDetail = signal(false, ...ngDevMode ? [{ debugName: "loadingDetail" }] : []);
  versementDialogVisible = false;
  versementTarget = signal(null, ...ngDevMode ? [{ debugName: "versementTarget" }] : []);
  versementNote = "";
  versementDate = /* @__PURE__ */ new Date();
  versementLoading = false;
  parseFloat = parseFloat;
  constructor(commissionService, messageService) {
    this.commissionService = commissionService;
    this.messageService = messageService;
  }
  ngOnChanges(changes) {
    if (changes["visible"]?.currentValue === true && this.commissionId) {
      this.loadDetail();
    }
    if (changes["visible"]?.currentValue === false) {
      this.commission.set(null);
    }
  }
  loadDetail() {
    this.loadingDetail.set(true);
    this.commissionService.getById(this.commissionId).subscribe({
      next: (resp) => {
        this.commission.set(resp.data ?? null);
        this.loadingDetail.set(false);
      },
      error: (err) => {
        this.loadingDetail.set(false);
        const e = err;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: e?.error?.message ?? "Impossible de charger la commission.",
          life: 5e3
        });
      }
    });
  }
  onDialogHide() {
    this.visibleChange.emit(false);
    this.commission.set(null);
  }
  canVerser(c) {
    return c.statut === "eligible" || c.statut === "partiellement_versee";
  }
  getBeneficiaireNom(c, v) {
    if (v.beneficiaire_type === "livreur") {
      return c.livreur ? `${c.livreur.prenom} ${c.livreur.nom}` : "\u2014";
    }
    return c.proprietaire ? `${c.proprietaire.prenom} ${c.proprietaire.nom}` : "\u2014";
  }
  openVersementDialog(c, v) {
    this.versementTarget.set({
      commissionId: c.id,
      versement: v,
      nom: this.getBeneficiaireNom(c, v)
    });
    this.versementNote = "";
    this.versementDate = /* @__PURE__ */ new Date();
    this.versementDialogVisible = true;
  }
  confirmVersement() {
    const target = this.versementTarget();
    if (!target || this.versementLoading)
      return;
    this.versementLoading = true;
    const dateIso = this.versementDate instanceof Date ? this.versementDate.toISOString().split("T")[0] : String(this.versementDate);
    this.commissionService.verser(target.commissionId, target.versement.beneficiaire_type, this.versementNote || void 0, dateIso).subscribe({
      next: () => {
        this.versementLoading = false;
        this.versementDialogVisible = false;
        const montant = this.formatMontant(target.versement.montant_attendu);
        this.messageService.add({
          severity: "success",
          summary: "Versement effectu\xE9",
          detail: `Versement de ${montant} effectu\xE9 avec succ\xE8s`,
          life: 4e3
        });
        this.loadDetail();
        this.onVersementDone.emit();
      },
      error: (err) => {
        this.versementLoading = false;
        const e = err;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: e?.error?.message ?? "Une erreur est survenue.",
          life: 5e3
        });
      }
    });
  }
  getStatutLabel(s) {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_COMMISSION_SEVERITY[s] ?? "info";
  }
  getVersementLabel(s) {
    return STATUT_VERSEMENT_LABELS[s] ?? s;
  }
  getVersementSeverity(s) {
    return STATUT_VERSEMENT_SEVERITY[s] ?? "info";
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  formatDate(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  static \u0275fac = function CommissionDetailDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommissionDetailDialog)(\u0275\u0275directiveInject(CommissionVenteService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionDetailDialog, selectors: [["app-commission-detail-dialog"]], inputs: { commissionId: "commissionId", visible: "visible" }, outputs: { visibleChange: "visibleChange", onVersementDone: "onVersementDone" }, features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275NgOnChangesFeature], decls: 8, vars: 16, consts: [["footer", ""], [3, "visibleChange", "onHide", "header", "visible", "modal", "draggable", "resizable"], [1, "flex", "flex-col", "gap-3", "p-2"], ["header", "Confirmer le versement", "appendTo", "body", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "gap-4", "py-2"], ["height", "2.5rem", "borderRadius", "6px"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "mb-5"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide"], [1, "font-medium"], [1, "text-xs", "text-surface-400"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-3", "mb-5"], [1, "p-3", "surface-50", "border-round", "border-1", "surface-border", "text-center"], [1, "text-xs", "text-surface-400", "mb-1"], [1, "font-bold", "text-lg", "text-primary"], [1, "font-bold", "text-base"], [1, "flex", "flex-wrap", "items-center", "gap-3", "mb-4"], [3, "value", "severity"], [1, "pi", "pi-calendar", "text-xs", "mr-1"], ["styleClass", "my-3"], [1, "font-semibold", "text-sm", "mb-3", "text-surface-700"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-3", "p-3", "surface-50", "border-round", "border-1", "surface-border"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-user", "text-xs", "text-surface-400"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-surface-400", "surface-100", "px-1.5", "py-0.5", "border-round"], [1, "flex", "flex-wrap", "gap-4", "text-xs", "text-surface-500"], [1, "text-surface-700"], [1, "flex", "items-center", "gap-2", "flex-shrink-0"], ["label", "Verser", "icon", "pi pi-send", "size", "small", "severity", "success", 3, "outlined"], [1, "text-green-600"], ["label", "Verser", "icon", "pi pi-send", "size", "small", "severity", "success", 3, "onClick", "outlined"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-send", "text-primary", "text-2xl", "flex-shrink-0", "mt-0.5"], [1, "m-0", "text-sm", "leading-relaxed"], [1, "text-primary"], [1, "text-sm", "font-medium"], [1, "text-red-500"], ["dateFormat", "dd/mm/yy", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "ngModel", "showIcon"], [1, "text-surface-400", "font-normal"], ["pTextarea", "", "rows", "3", "placeholder", "Ex : Esp\xE8ces au bureau, Virement Mobile Money\u2026", 1, "w-full", "text-sm", "resize-none", 3, "ngModelChange", "ngModel"], ["label", "Annuler", "severity", "secondary", 3, "onClick", "outlined", "disabled"], ["label", "Confirmer le versement", "icon", "pi pi-check", "severity", "success", 3, "onClick", "loading"]], template: function CommissionDetailDialog_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-dialog", 1);
      \u0275\u0275listener("visibleChange", function CommissionDetailDialog_Template_p_dialog_visibleChange_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleChange.emit($event));
      })("onHide", function CommissionDetailDialog_Template_p_dialog_onHide_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDialogHide());
      });
      \u0275\u0275conditionalCreate(2, CommissionDetailDialog_Conditional_2_Template, 3, 1, "div", 2)(3, CommissionDetailDialog_Conditional_3_Template, 36, 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-dialog", 3);
      \u0275\u0275twoWayListener("visibleChange", function CommissionDetailDialog_Template_p_dialog_visibleChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.versementDialogVisible, $event) || (ctx.versementDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(5, CommissionDetailDialog_Conditional_5_Template, 23, 6, "div", 4);
      \u0275\u0275template(6, CommissionDetailDialog_ng_template_6_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275property("header", "Commission \u2014 " + (((tmp_2_0 = ctx.commission()) == null ? null : tmp_2_0.commande == null ? null : tmp_2_0.commande.reference) ?? ""))("visible", ctx.visible)("modal", true)("draggable", false)("resizable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingDetail() ? 2 : ctx.commission() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.versementDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.versementTarget() ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    SkeletonModule,
    Skeleton,
    DividerModule,
    Divider,
    TextareaModule,
    Textarea,
    DatePickerModule,
    DatePicker
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionDetailDialog, [{
    type: Component,
    args: [{ selector: "app-commission-detail-dialog", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DialogModule,
      TagModule,
      ButtonModule,
      ToastModule,
      SkeletonModule,
      DividerModule,
      TextareaModule,
      DatePickerModule
    ], providers: [MessageService], template: `<p-toast />

<!-- \u2500\u2500 Dialog principal : D\xE9tail de la commission \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<p-dialog
  [header]="'Commission \u2014 ' + (commission()?.commande?.reference ?? '')"
  [visible]="visible"
  (visibleChange)="visibleChange.emit($event)"
  (onHide)="onDialogHide()"
  [modal]="true"
  [style]="{ width: '54rem', maxWidth: '96vw' }"
  [draggable]="false"
  [resizable]="false"
>
  @if (loadingDetail()) {
    <div class="flex flex-col gap-3 p-2">
      @for (_ of [1, 2, 3, 4]; track $index) {
        <p-skeleton height="2.5rem" borderRadius="6px" />
      }
    </div>
  } @else if (commission()) {
    @let c = commission()!;

    <!-- \u2500\u2500 Informations g\xE9n\xE9rales \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">

      <div class="flex flex-col gap-1">
        <span class="text-xs font-semibold text-surface-400 uppercase tracking-wide">V\xE9hicule</span>
        <span class="font-medium">{{ c.vehicule?.nom_vehicule }}</span>
        <code class="text-xs text-surface-400">{{ c.vehicule?.immatriculation }}</code>
      </div>

      <div class="flex flex-col gap-1">
        <span class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Livreur</span>
        <span class="font-medium">{{ c.livreur?.prenom }} {{ c.livreur?.nom }}</span>
      </div>

      @if (c.proprietaire) {
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Propri\xE9taire</span>
          <span class="font-medium">{{ c.proprietaire.prenom }} {{ c.proprietaire.nom }}</span>
        </div>
      }

      <div class="flex flex-col gap-1">
        <span class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Taux livreur</span>
        <span class="font-medium">{{ c.taux_livreur_snapshot }} %</span>
      </div>

    </div>

    <!-- \u2500\u2500 Montants \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">

      <div class="p-3 surface-50 border-round border-1 surface-border text-center">
        <div class="text-xs text-surface-400 mb-1">Commission totale</div>
        <div class="font-bold text-lg text-primary">{{ formatMontant(c.montant_commission_total) }}</div>
      </div>

      <div class="p-3 surface-50 border-round border-1 surface-border text-center">
        <div class="text-xs text-surface-400 mb-1">Part livreur ({{ c.taux_livreur_snapshot }}%)</div>
        <div class="font-bold text-base">{{ formatMontant(c.part_livreur) }}</div>
      </div>

      @if (parseFloat(c.part_proprietaire) > 0) {
        <div class="p-3 surface-50 border-round border-1 surface-border text-center">
          <div class="text-xs text-surface-400 mb-1">Part propri\xE9taire ({{ 100 - parseFloat(c.taux_livreur_snapshot) }}%)</div>
          <div class="font-bold text-base">{{ formatMontant(c.part_proprietaire) }}</div>
        </div>
      }

    </div>

    <!-- \u2500\u2500 Statut + Date \xE9ligibilit\xE9 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex flex-wrap items-center gap-3 mb-4">
      <p-tag [value]="getStatutLabel(c.statut)" [severity]="getStatutSeverity(c.statut)" />
      @if (c.eligible_at) {
        <span class="text-xs text-surface-400">
          <i class="pi pi-calendar text-xs mr-1"></i>\xC9ligible depuis le {{ formatDate(c.eligible_at) }}
        </span>
      }
    </div>

    <!-- \u2500\u2500 Section Versements \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (c.versements && c.versements.length > 0) {
      <p-divider styleClass="my-3" />
      <h4 class="font-semibold text-sm mb-3 text-surface-700">Versements</h4>

      <div class="flex flex-col gap-2">
        @for (v of c.versements; track v.id) {
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3
                      surface-50 border-round border-1 surface-border">

            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <i class="pi pi-user text-xs text-surface-400"></i>
                <span class="font-medium text-sm">{{ getBeneficiaireNom(c, v) }}</span>
                <span class="text-xs text-surface-400 surface-100 px-1.5 py-0.5 border-round">
                  {{ v.beneficiaire_type === 'livreur' ? 'Livreur' : 'Propri\xE9taire' }}
                </span>
              </div>
              <div class="flex flex-wrap gap-4 text-xs text-surface-500">
                <span>Attendu : <strong class="text-surface-700">{{ formatMontant(v.montant_attendu) }}</strong></span>
                @if (v.montant_verse) {
                  <span>Vers\xE9 : <strong class="text-green-600">{{ formatMontant(v.montant_verse) }}</strong></span>
                }
                @if (v.verse_at) {
                  <span><i class="pi pi-calendar text-xs mr-1"></i>{{ formatDate(v.verse_at) }}</span>
                }
              </div>
            </div>

            <div class="flex items-center gap-2 flex-shrink-0">
              <p-tag [value]="getVersementLabel(v.statut)" [severity]="getVersementSeverity(v.statut)" />
              @if (canVerser(c) && v.statut === 'en_attente') {
                <p-button
                  label="Verser"
                  icon="pi pi-send"
                  size="small"
                  [outlined]="true"
                  severity="success"
                  (onClick)="openVersementDialog(c, v)"
                />
              }
            </div>

          </div>
        }
      </div>
    }

  }
</p-dialog>

<!-- \u2500\u2500 Sous-dialog : Confirmation de versement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<p-dialog
  header="Confirmer le versement"
  [(visible)]="versementDialogVisible"
  [modal]="true"
  [style]="{ width: '30rem' }"
  [draggable]="false"
  appendTo="body"
>
  @if (versementTarget()) {
    <div class="flex flex-col gap-4 py-2">

      <div class="flex items-start gap-3">
        <i class="pi pi-send text-primary text-2xl flex-shrink-0 mt-0.5"></i>
        <p class="m-0 text-sm leading-relaxed">
          Confirmer le versement de
          <strong class="text-primary">
            {{ formatMontant(versementTarget()!.versement.montant_attendu) }}
          </strong>
          \xE0 <strong>{{ versementTarget()!.nom }}</strong>
          ({{ versementTarget()!.versement.beneficiaire_type === 'livreur' ? 'Livreur' : 'Propri\xE9taire' }}) ?
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">Date de versement <span class="text-red-500">*</span></label>
        <p-datepicker
          [(ngModel)]="versementDate"
          dateFormat="dd/mm/yy"
          [showIcon]="true"
          styleClass="w-full"
          inputStyleClass="w-full"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium">
          Note / Justificatif
          <span class="text-surface-400 font-normal">(optionnel)</span>
        </label>
        <textarea pTextarea rows="3" class="w-full text-sm resize-none"
                  [(ngModel)]="versementNote"
                  placeholder="Ex : Esp\xE8ces au bureau, Virement Mobile Money\u2026"></textarea>
      </div>

    </div>
  }

  <ng-template #footer>
    <p-button label="Annuler" severity="secondary" [outlined]="true"
              (onClick)="versementDialogVisible = false"
              [disabled]="versementLoading" />
    <p-button label="Confirmer le versement" icon="pi pi-check" severity="success"
              (onClick)="confirmVersement()"
              [loading]="versementLoading" />
  </ng-template>
</p-dialog>
` }]
  }], () => [{ type: CommissionVenteService }, { type: MessageService }], { commissionId: [{
    type: Input
  }], visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], onVersementDone: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionDetailDialog, { className: "CommissionDetailDialog", filePath: "src/app/pages/ventes/commission-detail-dialog/commission-detail-dialog.ts", lineNumber: 59 });
})();

export {
  CommissionVenteService,
  CommissionDetailDialog
};
//# sourceMappingURL=chunk-QEG5K2CH.js.map
