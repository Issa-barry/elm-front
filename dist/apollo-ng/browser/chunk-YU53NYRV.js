import {
  ParametresService
} from "./chunk-ZT6H642Y.js";
import {
  LayoutService
} from "./chunk-KPTCPOPL.js";
import {
  ComptabiliteHistoriqueVersements,
  ComptabilitePackingPaiement,
  MODE_PAIEMENT_LABELS,
  MoneyPipe,
  PACKING_STATUT_LABELS,
  PACKING_STATUT_SEVERITY,
  PackingService
} from "./chunk-AHA65JMG.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-UWHPUST5.js";
import "./chunk-ENBQHHZG.js";
import {
  PrestataireService
} from "./chunk-YZP2JCL5.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-RJ2GYKMX.js";
import {
  Menu,
  MenuModule
} from "./chunk-PBCUKRJ4.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-6Q5PFFYS.js";
import {
  Dialog,
  DialogModule
} from "./chunk-3BPHQNXB.js";
import {
  PhoneFormatPipe
} from "./chunk-5T2XHLOC.js";
import {
  authorizationGuard
} from "./chunk-DRIERSGW.js";
import "./chunk-C5GRAO6X.js";
import {
  AuthService,
  UsineContextService
} from "./chunk-CL3X32VF.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-N3I2MPIX.js";
import "./chunk-4WV22ZEZ.js";
import "./chunk-CSVYKJ4F.js";
import {
  Toast,
  ToastModule
} from "./chunk-K65U6EBI.js";
import "./chunk-A7I32VT2.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-GUUEHQXU.js";
import "./chunk-ANXFJYSG.js";
import "./chunk-DS6WDG7G.js";
import "./chunk-OQUCAPHD.js";
import "./chunk-VFC4ZGOV.js";
import "./chunk-LDZPSMHJ.js";
import "./chunk-XMFE765I.js";
import {
  Tag,
  TagModule
} from "./chunk-FMK3YN5M.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-VHCEGT3E.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-D4DB7G5Q.js";
import "./chunk-UQFVREV6.js";
import "./chunk-GNS5B2OF.js";
import "./chunk-J7PQPFQ2.js";
import "./chunk-JDFDUAZW.js";
import "./chunk-HXWKNUGV.js";
import "./chunk-NGVVFXIQ.js";
import "./chunk-7U237DEN.js";
import {
  Select,
  SelectModule
} from "./chunk-TXVRC2SU.js";
import "./chunk-GSLAPXC6.js";
import "./chunk-RNBHJ3IS.js";
import "./chunk-XCVSS3ID.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-URQMWJE6.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-55R5VFNU.js";
import "./chunk-4WKDSNIY.js";
import {
  InputText,
  InputTextModule
} from "./chunk-DQKWWXZT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-FGSFU6DI.js";
import "./chunk-KWGIJUAU.js";
import "./chunk-ORG54PNZ.js";
import {
  ButtonDirective,
  ButtonLabel,
  ButtonModule
} from "./chunk-73OLBEDX.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3DMR3ILK.js";
import "./chunk-U4SWEEQT.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WLMAONDN.js";
import "./chunk-CUJZFPFM.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-MGF35FP6.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf
} from "./chunk-AR53T6NL.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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
} from "./chunk-SKXAAURP.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/packings/packing-liste/packing-liste.ts
var _c0 = () => ({ width: "28rem" });
var _c1 = () => ({ width: "36rem" });
var _c2 = () => [10, 25, 50];
var _c3 = () => ({ "min-width": "20rem" });
var _c4 = () => [1, 2, 3, 4, 5];
function PackingListe_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, "Montant requis.");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_Conditional_3_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, "Date requise.");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 33)(9, "label", 34);
    \u0275\u0275text(10, "Montant (GNF) ");
    \u0275\u0275elementStart(11, "span", 35);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p-inputnumber", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_Conditional_3_Template_p_inputnumber_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementData.montant, $event) || (ctx_r2.versementData.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, PackingListe_Conditional_3_Conditional_14_Template, 2, 0, "small", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 33)(16, "label", 34);
    \u0275\u0275text(17, "Date versement ");
    \u0275\u0275elementStart(18, "span", 35);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p-datepicker", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_Conditional_3_Template_p_datepicker_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementData.date_versement, $event) || (ctx_r2.versementData.date_versement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, PackingListe_Conditional_3_Conditional_21_Template, 2, 0, "small", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 33)(23, "label", 34);
    \u0275\u0275text(24, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_Conditional_3_Template_p_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementData.mode_paiement, $event) || (ctx_r2.versementData.mode_paiement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 33)(27, "label", 34);
    \u0275\u0275text(28, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_Conditional_3_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.versementData.notes, $event) || (ctx_r2.versementData.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedPacking.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Montant : ", ctx_r2.formatCurrency(ctx_r2.selectedPacking.montant), " \u2014 Restant : ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.selectedPacking.montant_restant));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementData.montant);
    \u0275\u0275property("min", 1)("max", ctx_r2.selectedPacking.montant_restant)("useGrouping", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.versementSubmitted && !ctx_r2.versementData.montant ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementData.date_versement);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.versementSubmitted && !ctx_r2.versementData.date_versement ? 21 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementData.mode_paiement);
    \u0275\u0275property("options", ctx_r2.modesPaiement);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.versementData.notes);
  }
}
function PackingListe_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PackingListe_ng_template_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideVersementDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 42);
    \u0275\u0275listener("click", function PackingListe_ng_template_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveVersement());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.versementSaving);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.versementSaving)("disabled", ctx_r2.versementSaving);
  }
}
function PackingListe_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementEnd();
  }
}
function PackingListe_Conditional_8_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, "Aucun versement enregistre.");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_Conditional_8_Conditional_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 52);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 52);
    \u0275\u0275text(4, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 52);
    \u0275\u0275text(6, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 52);
    \u0275\u0275text(8, "Par");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 52);
    \u0275\u0275text(10, "Heure");
    \u0275\u0275elementEnd()();
  }
}
function PackingListe_Conditional_8_Conditional_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateDisplay(v_r5.date_versement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(v_r5.montant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getModeLabel(v_r5.mode_paiement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((v_r5.creator == null ? null : v_r5.creator.nom_complet) || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateTime(v_r5.created_at));
  }
}
function PackingListe_Conditional_8_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 51);
    \u0275\u0275template(1, PackingListe_Conditional_8_Conditional_18_ng_template_1_Template, 11, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(3, PackingListe_Conditional_8_Conditional_18_ng_template_3_Template, 11, 5, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r2.historiqueData.versements)("tableStyle", \u0275\u0275pureFunction0(2, _c3));
  }
}
function PackingListe_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 44)(2, "div", 45)(3, "span", 46);
    \u0275\u0275text(4, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 47)(8, "span", 46);
    \u0275\u0275text(9, "Verse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 48);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 49)(13, "span", 46);
    \u0275\u0275text(14, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(17, PackingListe_Conditional_8_Conditional_17_Template, 2, 0, "div", 50)(18, PackingListe_Conditional_8_Conditional_18_Template, 5, 3, "p-table", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.historiqueData.packing.montant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.historiqueData.packing.montant_verse));
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-orange-50", ctx_r2.historiqueData.packing.montant_restant > 0)("bg-surface-50", ctx_r2.historiqueData.packing.montant_restant === 0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("text-orange-500", ctx_r2.historiqueData.packing.montant_restant > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(ctx_r2.historiqueData.packing.montant_restant));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.historiqueData.versements.length === 0 ? 17 : 18);
  }
}
function PackingListe_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275listener("click", function PackingListe_div_9_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobilePaiement());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 57)(3, "app-comptabilite-packing-paiement", 58);
    \u0275\u0275listener("onPay", function PackingListe_div_9_Template_app_comptabilite_packing_paiement_onPay_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMobilePay($event));
    })("onClose", function PackingListe_div_9_Template_app_comptabilite_packing_paiement_onClose_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobilePaiement());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("packing", ctx_r2.mobilePaiementPacking)("saving", ctx_r2.mobilePaiementSaving);
  }
}
function PackingListe_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275listener("click", function PackingListe_div_10_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileHistorique());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 57)(3, "app-comptabilite-historique-versements", 59);
    \u0275\u0275listener("onClose", function PackingListe_div_10_Template_app_comptabilite_historique_versements_onClose_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileHistorique());
    })("onDeleteVersement", function PackingListe_div_10_Template_app_comptabilite_historique_versements_onDeleteVersement_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onMobileHistoriqueDeleteVersement($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("data", ctx_r2.historiqueData)("loading", ctx_r2.historiqueLoading)("canDelete", ctx_r2.canDeleteVersement);
  }
}
function PackingListe_section_27_article_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Reste : ", ctx_r2.formatCurrency(p_r10.montant_restant));
  }
}
function PackingListe_section_27_article_1_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function PackingListe_section_27_article_1_Conditional_14_Conditional_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goFactureFromCard($event, p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_section_27_article_1_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function PackingListe_section_27_article_1_Conditional_14_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openVersementFromCard($event, p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_section_27_article_1_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function PackingListe_section_27_article_1_Conditional_14_Conditional_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openHistoriqueFromCard($event, p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_section_27_article_1_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function PackingListe_section_27_article_1_Conditional_14_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goEditFromCard($event, p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_section_27_article_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275conditionalCreate(1, PackingListe_section_27_article_1_Conditional_14_Conditional_1_Template, 1, 0, "button", 72);
    \u0275\u0275conditionalCreate(2, PackingListe_section_27_article_1_Conditional_14_Conditional_2_Template, 1, 0, "button", 73);
    \u0275\u0275conditionalCreate(3, PackingListe_section_27_article_1_Conditional_14_Conditional_3_Template, 1, 0, "button", 74);
    \u0275\u0275conditionalCreate(4, PackingListe_section_27_article_1_Conditional_14_Conditional_4_Template, 1, 0, "button", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canViewFacture ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCreateVersement && ctx_r2.canPay(p_r10) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canReadVersement ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canEditPacking(p_r10) ? 4 : -1);
  }
}
function PackingListe_section_27_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 62);
    \u0275\u0275listener("click", function PackingListe_section_27_article_1_Template_article_click_0_listener() {
      const p_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goEdit(p_r10));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 67);
    \u0275\u0275element(10, "p-tag", 68);
    \u0275\u0275elementStart(11, "span", 69);
    \u0275\u0275text(12);
    \u0275\u0275template(13, PackingListe_section_27_article_1_span_13_Template, 2, 1, "span", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, PackingListe_section_27_article_1_Conditional_14_Template, 5, 4, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getInitials(p_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r10.prestataire ? p_r10.prestataire.prenom + " " + p_r10.prestataire.nom : "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(8, 11, p_r10.prestataire == null ? null : p_r10.prestataire.phone), " - ", ctx_r2.formatDateDisplay(p_r10.date));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.getStatutLabel(p_r10.statut))("severity", ctx_r2.getStatutSeverity(p_r10.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", p_r10.nb_rouleaux, " rouleau", p_r10.nb_rouleaux !== 1 ? "x" : "", " \xB7 ", ctx_r2.formatCurrency(p_r10.montant), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r10.montant_restant > 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCreateVersement && ctx_r2.canPay(p_r10) || ctx_r2.canReadVersement || ctx_r2.canViewFacture || ctx_r2.canEditPacking(p_r10) ? 14 : -1);
  }
}
function PackingListe_section_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 60);
    \u0275\u0275template(1, PackingListe_section_27_article_1_Template, 15, 13, "article", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredPackings());
  }
}
function PackingListe_ng_template_28_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1, "Aucun packing trouve.");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PackingListe_ng_template_28_div_0_Template, 2, 0, "div", 80)(1, PackingListe_ng_template_28_div_1_Template, 2, 0, "div", 80);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.loading && !ctx_r2.filteredPackings().length);
  }
}
function PackingListe_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function PackingListe_Conditional_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goNew());
    });
    \u0275\u0275element(1, "i", 83);
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputnumber", 94);
    \u0275\u0275listener("ngModelChange", function PackingListe_ng_template_33_Conditional_7_Template_p_inputnumber_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onLastNDaysChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.lastNDaysValue)("min", 1)("useGrouping", false)("showButtons", false);
  }
}
function PackingListe_ng_template_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function PackingListe_ng_template_33_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_33_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function PackingListe_ng_template_33_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goNew());
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "p-iconfield", 85);
    \u0275\u0275element(2, "p-inputicon", 23);
    \u0275\u0275elementStart(3, "input", 86);
    \u0275\u0275listener("ngModelChange", function PackingListe_ng_template_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 87)(5, "p-select", 88);
    \u0275\u0275listener("ngModelChange", function PackingListe_ng_template_33_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setStatutFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-select", 89);
    \u0275\u0275listener("ngModelChange", function PackingListe_ng_template_33_Template_p_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onQuickDateFilterChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PackingListe_ng_template_33_Conditional_7_Template, 1, 4, "p-inputnumber", 90);
    \u0275\u0275elementStart(8, "p-datepicker", 91);
    \u0275\u0275twoWayListener("ngModelChange", function PackingListe_ng_template_33_Template_p_datepicker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.filterDateRange, $event) || (ctx_r2.filterDateRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function PackingListe_ng_template_33_Template_p_datepicker_onSelect_8_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDateRangeSelect());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, PackingListe_ng_template_33_Conditional_9_Template, 1, 0, "button", 92);
    \u0275\u0275conditionalCreate(10, PackingListe_ng_template_33_Conditional_10_Template, 1, 0, "button", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.searchQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.statutOptions)("ngModel", ctx_r2.selectedStatut());
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.quickDateFilterOptions)("ngModel", ctx_r2.selectedQuickDateFilter);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedQuickDateFilter === "last_n_days" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.filterDateRange);
    \u0275\u0275property("showIcon", true)("readonlyInput", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasActiveFilters() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCreate ? 10 : -1);
  }
}
function PackingListe_ng_template_35_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 113);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 97)(2, "span", 98);
    \u0275\u0275text(3, "Prestataire ");
    \u0275\u0275element(4, "p-sortIcon", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 100);
    \u0275\u0275text(6, "Telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 101)(8, "span", 98);
    \u0275\u0275text(9, "Date ");
    \u0275\u0275element(10, "p-sortIcon", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 103)(12, "span", 98);
    \u0275\u0275text(13, "Rouleaux ");
    \u0275\u0275element(14, "p-sortIcon", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "th", 105)(16, "span", 98);
    \u0275\u0275text(17, "Montant ");
    \u0275\u0275element(18, "p-sortIcon", 106);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 107)(20, "span", 98);
    \u0275\u0275text(21, "Verse ");
    \u0275\u0275element(22, "p-sortIcon", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "th", 109)(24, "span", 98);
    \u0275\u0275text(25, "Restant ");
    \u0275\u0275element(26, "p-sortIcon", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "th", 111)(28, "span", 98);
    \u0275\u0275text(29, "Statut ");
    \u0275\u0275element(30, "p-sortIcon", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, PackingListe_ng_template_35_Conditional_31_Template, 2, 0, "th", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(31);
    \u0275\u0275conditional(ctx_r2.hasActionsColumn ? 31 : -1);
  }
}
function PackingListe_ng_template_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "span", 117);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 118);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const p_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r20.prestataire.nom == null ? null : (tmp_11_0 = p_r20.prestataire.nom.charAt(0)) == null ? null : tmp_11_0.toUpperCase(), "", p_r20.prestataire.prenom == null ? null : (tmp_11_0 = p_r20.prestataire.prenom.charAt(0)) == null ? null : tmp_11_0.toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r20.prestataire.prenom, " ", p_r20.prestataire.nom);
  }
}
function PackingListe_ng_template_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 114);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_37_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "phoneFormat");
  }
  if (rf & 2) {
    const p_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, p_r20.prestataire.phone), " ");
  }
}
function PackingListe_ng_template_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function PackingListe_ng_template_37_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 124);
    \u0275\u0275listener("click", function PackingListe_ng_template_37_Conditional_20_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const p_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goFacture(p_r20));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_37_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function PackingListe_ng_template_37_Conditional_20_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const p_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openHistorique(p_r20));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_37_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275listener("click", function PackingListe_ng_template_37_Conditional_20_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const p_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goEdit(p_r20));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_37_Conditional_20_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 127);
    \u0275\u0275listener("click", function PackingListe_ng_template_37_Conditional_20_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const p_r20 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePacking(p_r20));
    });
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_37_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 119);
    \u0275\u0275conditionalCreate(2, PackingListe_ng_template_37_Conditional_20_Conditional_2_Template, 1, 0, "button", 120);
    \u0275\u0275conditionalCreate(3, PackingListe_ng_template_37_Conditional_20_Conditional_3_Template, 1, 0, "button", 121);
    \u0275\u0275conditionalCreate(4, PackingListe_ng_template_37_Conditional_20_Conditional_4_Template, 1, 0, "button", 122);
    \u0275\u0275conditionalCreate(5, PackingListe_ng_template_37_Conditional_20_Conditional_5_Template, 1, 0, "button", 123);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canViewFacture ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canReadVersement ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canEditPacking(p_r20) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 5 : -1);
  }
}
function PackingListe_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, PackingListe_ng_template_37_Conditional_2_Template, 5, 4, "div", 98)(3, PackingListe_ng_template_37_Conditional_3_Template, 2, 0, "span", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 53);
    \u0275\u0275conditionalCreate(5, PackingListe_ng_template_37_Conditional_5_Template, 2, 3)(6, PackingListe_ng_template_37_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 34);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 115);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 34)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275element(19, "p-tag", 116);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, PackingListe_ng_template_37_Conditional_20_Template, 6, 4, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r20.prestataire ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(p_r20.prestataire ? 5 : 6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDateDisplay(p_r20.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r20.nb_rouleaux);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(p_r20.montant));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(p_r20.montant_verse));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-orange-500", p_r20.montant_restant > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatCurrency(p_r20.montant_restant));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.getStatutLabel(p_r20.statut))("severity", ctx_r2.getStatutSeverity(p_r20.statut));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasActionsColumn ? 20 : -1);
  }
}
function PackingListe_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 128)(2, "div", 129);
    \u0275\u0275element(3, "i", 130);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun packing trouve");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.hasActionsColumn ? 9 : 8);
  }
}
function PackingListe_ng_template_41_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function PackingListe_ng_template_41_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, PackingListe_ng_template_41_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.skeletonCols);
  }
}
function PackingListe_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, PackingListe_ng_template_41_For_1_Template, 3, 0, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c4));
  }
}
var PackingListe = class _PackingListe {
  packingService;
  messageService;
  confirmationService;
  authService;
  router;
  usineContext;
  packings = signal([], ...ngDevMode ? [{ debugName: "packings" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedStatut = signal("all", ...ngDevMode ? [{ debugName: "selectedStatut" }] : []);
  filterDateRange = null;
  selectedQuickDateFilter = "none";
  lastNDaysValue = null;
  loading = false;
  canCreate = false;
  canViewFacture = false;
  canUpdate = false;
  canDelete = false;
  canReadVersement = false;
  canCreateVersement = false;
  canDeleteVersement = false;
  mobileBreakpoint = 768;
  mobileFilterMenuItems = [];
  skeletonCols = [];
  readyForUsineReload = false;
  // Versement dialog
  versementDialog = false;
  selectedPacking = null;
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
  // Historique dialog
  historiqueDialog = false;
  historiqueData = null;
  historiqueLoading = false;
  mobileHistoriqueVisible = false;
  // Slide-over paiement mobile
  mobilePaiementVisible = false;
  mobilePaiementPacking = null;
  mobilePaiementSaving = false;
  statutOptions = [
    { label: "Tous les statuts", value: "all" },
    { label: "Impayee", value: "impayee" },
    { label: "Partielle", value: "partielle" },
    { label: "Payee", value: "payee" },
    { label: "Annulee", value: "annulee" }
  ];
  quickDateFilterOptions = [
    { label: "Aucun filtre date", value: "none" },
    { label: "Aujourd'hui", value: "today" },
    { label: "Hier", value: "yesterday" },
    { label: "Cette semaine", value: "this_week" },
    { label: "Semaine derniere", value: "last_week" },
    { label: "Mois en cours", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "Annee en cours", value: "this_year" },
    { label: "Annee derniere", value: "last_year" },
    { label: "X derniers jours", value: "last_n_days" }
  ];
  filteredPackings = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.packings();
    if (!query)
      return list;
    return list.filter((packing) => {
      const searchable = [
        packing.reference,
        packing.prestataire?.nom,
        packing.prestataire?.prenom,
        packing.prestataire?.phone,
        this.getStatutLabel(packing.statut)
      ].filter(Boolean).join(" ").toLowerCase();
      return searchable.includes(query);
    });
  }, ...ngDevMode ? [{ debugName: "filteredPackings" }] : []);
  get hasActionsColumn() {
    return this.canViewFacture || this.canUpdate || this.canDelete || this.canCreateVersement || this.canReadVersement;
  }
  constructor(packingService, messageService, confirmationService, authService, router, usineContext) {
    this.packingService = packingService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.router = router;
    this.usineContext = usineContext;
    this.canCreate = this.authService.hasPermission("packings.create");
    this.canViewFacture = this.authService.hasPermission("packings.read") || this.authService.hasPermission("packings.update");
    this.canUpdate = this.authService.hasPermission("packings.update");
    this.canDelete = this.authService.hasPermission("packings.delete");
    this.canReadVersement = this.authService.hasPermission("versements.read");
    this.canCreateVersement = this.authService.hasPermission("versements.create");
    this.canDeleteVersement = false;
    this.skeletonCols = this.hasActionsColumn ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6, 7, 8];
    effect(() => {
      this.usineContext.currentUsineId();
      if (!this.readyForUsineReload)
        return;
      this.load();
    });
  }
  ngOnInit() {
    this.readyForUsineReload = true;
    this.load();
    this.mobileFilterMenuItems = [
      { label: "Tous", icon: "pi pi-list", command: () => this.setStatutFilter("all") },
      { label: "Impayee", icon: "pi pi-times-circle", command: () => this.setStatutFilter("impayee") },
      { label: "Partielle", icon: "pi pi-clock", command: () => this.setStatutFilter("partielle") },
      { label: "Payee", icon: "pi pi-check-circle", command: () => this.setStatutFilter("payee") },
      { label: "Annulee", icon: "pi pi-ban", command: () => this.setStatutFilter("annulee") }
    ];
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  load() {
    this.loading = true;
    const filters = {};
    const statut = this.selectedStatut();
    if (statut !== "all")
      filters["statut"] = statut;
    if (this.filterDateRange?.[0]) {
      const startDate = this.filterDateRange[0];
      const endDate = this.filterDateRange[1] ?? this.filterDateRange[0];
      filters["date_debut"] = this.formatDate(startDate);
      filters["date_fin"] = this.formatDate(endDate);
    }
    this.packingService.getPackings(Object.keys(filters).length ? filters : void 0).subscribe({
      next: (response) => {
        const data = "data" in response && Array.isArray(response.data) ? response.data : response.data?.data ?? [];
        this.packings.set(data);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les packings.",
          life: 5e3
        });
      }
    });
  }
  goNew() {
    this.router.navigate(["/packings/packings-new"]);
  }
  goEdit(packing) {
    if (!this.canEditPacking(packing))
      return;
    this.router.navigate(["/packings/packings-edit", packing.id]);
  }
  goFacture(packing) {
    if (!this.canViewFacture)
      return;
    this.router.navigate(["/packings/packings-facture", packing.id]);
  }
  openVersementFromCard(event, packing) {
    event.stopPropagation();
    if (this.isMobile) {
      this.openMobilePaiement(packing);
      return;
    }
    this.openVersement(packing);
  }
  openHistoriqueFromCard(event, packing) {
    event.stopPropagation();
    this.openHistorique(packing);
  }
  goEditFromCard(event, packing) {
    event.stopPropagation();
    this.goEdit(packing);
  }
  goFactureFromCard(event, packing) {
    event.stopPropagation();
    this.goFacture(packing);
  }
  openMobilePaiement(packing) {
    this.mobilePaiementPacking = packing;
    this.mobilePaiementVisible = true;
  }
  closeMobilePaiement() {
    this.mobilePaiementVisible = false;
    this.mobilePaiementPacking = null;
    this.mobilePaiementSaving = false;
  }
  onMobilePay(payload) {
    if (!this.mobilePaiementPacking || this.mobilePaiementSaving)
      return;
    this.mobilePaiementSaving = true;
    const dto = {
      montant: payload.montant,
      date_versement: this.formatDate(/* @__PURE__ */ new Date()),
      mode_paiement: payload.mode_paiement
    };
    this.packingService.createVersement(this.mobilePaiementPacking.id, dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistre`,
          life: 3e3
        });
        this.closeMobilePaiement();
        if (response.data?.packing) {
          this.packings.update((list) => list.map((p) => p.id === response.data.packing.id ? response.data.packing : p));
        } else {
          this.load();
        }
      },
      error: (error) => {
        const msg = error?.error?.message || "Impossible d'enregistrer le versement";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: msg,
          life: 5e3
        });
        this.mobilePaiementSaving = false;
      }
    });
  }
  setStatutFilter(value) {
    this.selectedStatut.set(value);
    this.load();
  }
  onDateRangeSelect() {
    this.selectedQuickDateFilter = "none";
    this.lastNDaysValue = null;
    if (this.filterDateRange?.[0])
      this.load();
  }
  onQuickDateFilterChange(value) {
    this.selectedQuickDateFilter = value;
    if (value === "none") {
      this.filterDateRange = null;
      this.lastNDaysValue = null;
      this.load();
      return;
    }
    if (value === "last_n_days") {
      const nbDays = this.lastNDaysValue && this.lastNDaysValue > 0 ? this.lastNDaysValue : 7;
      this.lastNDaysValue = nbDays;
      this.applyLastNDaysFilter(nbDays);
      return;
    }
    const [start, end] = this.getQuickDateRange(value);
    this.filterDateRange = [start, end];
    this.load();
  }
  onLastNDaysChange(value) {
    this.lastNDaysValue = value;
    if (this.selectedQuickDateFilter !== "last_n_days")
      return;
    if (!value || value < 1)
      return;
    this.applyLastNDaysFilter(value);
  }
  clearFilters() {
    this.selectedStatut.set("all");
    this.filterDateRange = null;
    this.selectedQuickDateFilter = "none";
    this.lastNDaysValue = null;
    this.load();
  }
  hasActiveFilters() {
    return !!this.filterDateRange || this.selectedStatut() !== "all";
  }
  deletePacking(packing) {
    this.confirmationService.confirm({
      message: `Supprimer definitivement le packing <strong>${packing.reference}</strong> ?`,
      header: "Supprimer le packing",
      icon: "pi pi-trash",
      rejectButtonProps: { label: "Annuler", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "Supprimer", severity: "danger" },
      accept: () => {
        this.packingService.deletePacking(packing.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Supprime",
              detail: `Packing ${packing.reference} supprime.`,
              life: 3e3
            });
            this.packings.update((list) => list.filter((item) => item.id !== packing.id));
          },
          error: (err) => this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: err.error?.message || "Impossible de supprimer.",
            life: 5e3
          })
        });
      }
    });
  }
  canPay(packing) {
    return packing.statut !== "annulee" && (packing.montant_restant ?? 0) > 0;
  }
  canEditPacking(packing) {
    return this.canUpdate && packing.statut === "impayee";
  }
  openVersement(packing) {
    this.selectedPacking = packing;
    this.versementDialog = true;
    this.versementSubmitted = false;
    this.versementData = {
      montant: packing.montant_restant,
      date_versement: /* @__PURE__ */ new Date(),
      mode_paiement: "especes",
      notes: ""
    };
  }
  hideVersementDialog() {
    this.versementDialog = false;
    this.selectedPacking = null;
    this.versementSubmitted = false;
  }
  saveVersement() {
    this.versementSubmitted = true;
    if (!this.selectedPacking || !this.versementData.montant || !this.versementData.date_versement || this.versementSaving) {
      return;
    }
    this.versementSaving = true;
    const dto = {
      montant: this.versementData.montant,
      date_versement: this.formatDate(this.versementData.date_versement),
      mode_paiement: this.versementData.mode_paiement,
      notes: this.versementData.notes || void 0
    };
    this.packingService.createVersement(this.selectedPacking.id, dto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: `Versement de ${this.formatCurrency(dto.montant)} enregistre`,
          life: 3e3
        });
        this.versementSaving = false;
        this.versementDialog = false;
        if (response.data?.packing) {
          this.packings.update((list) => list.map((p) => p.id === response.data.packing.id ? response.data.packing : p));
        } else {
          this.load();
        }
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
  openHistorique(packing) {
    if (this.isMobile) {
      this.mobileHistoriqueVisible = true;
    } else {
      this.historiqueDialog = true;
    }
    this.historiqueLoading = true;
    this.historiqueData = null;
    this.packingService.getVersements(packing.id).subscribe({
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
        this.mobileHistoriqueVisible = false;
      }
    });
  }
  closeMobileHistorique() {
    this.mobileHistoriqueVisible = false;
    this.historiqueLoading = false;
    this.historiqueData = null;
  }
  onMobileHistoriqueDeleteVersement(versement) {
    this.confirmDeleteVersement(versement);
  }
  confirmDeleteVersement(versement) {
    if (!this.canDeleteVersement)
      return;
    if (!this.historiqueData)
      return;
    const packingId = this.historiqueData.packing.id;
    this.confirmationService.confirm({
      message: `Supprimer le versement de ${this.formatCurrency(versement.montant)} ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Supprimer",
      rejectLabel: "Annuler",
      accept: () => {
        this.packingService.deleteVersement(packingId, versement.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succes",
              detail: "Versement supprime",
              life: 3e3
            });
            const packing = this.packings().find((p) => p.id === packingId);
            if (packing)
              this.openHistorique(packing);
            this.load();
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
  getInitials(packing) {
    const prenom = packing.prestataire?.prenom ?? "";
    const nom = packing.prestataire?.nom ?? "";
    if (!prenom && !nom)
      return "--";
    return `${prenom.charAt(0)}${nom.charAt(0)}`.toUpperCase();
  }
  getStatutLabel(statut) {
    return PACKING_STATUT_LABELS[statut] || statut;
  }
  getStatutSeverity(statut) {
    return PACKING_STATUT_SEVERITY[statut] || "info";
  }
  getModeLabel(mode) {
    return MODE_PAIEMENT_LABELS[mode] ?? mode;
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", { style: "decimal", minimumFractionDigits: 0 }).format(value) + " GNF";
  }
  formatDateDisplay(dateStr) {
    if (dateStr == null)
      return "-";
    const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
    return date.toLocaleDateString("fr-FR");
  }
  formatDateTime(dateStr) {
    if (!dateStr)
      return "-";
    const date = new Date(dateStr);
    return date.toLocaleString("fr-FR", { day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  }
  get isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= this.mobileBreakpoint;
  }
  applyLastNDaysFilter(days) {
    const today = this.toLocalDay(/* @__PURE__ */ new Date());
    const start = this.addDaysLocal(today, -(days - 1));
    this.filterDateRange = [start, today];
    this.load();
  }
  getQuickDateRange(filter) {
    const today = this.toLocalDay(/* @__PURE__ */ new Date());
    if (filter === "today")
      return [today, today];
    if (filter === "yesterday") {
      const yesterday = this.addDaysLocal(today, -1);
      return [yesterday, yesterday];
    }
    if (filter === "this_week") {
      const start2 = this.startOfWeekMonday(today);
      const end2 = this.addDaysLocal(start2, 6);
      return [start2, end2];
    }
    if (filter === "last_week") {
      const startCurrentWeek = this.startOfWeekMonday(today);
      const startLastWeek = this.addDaysLocal(startCurrentWeek, -7);
      const endLastWeek = this.addDaysLocal(startLastWeek, 6);
      return [startLastWeek, endLastWeek];
    }
    if (filter === "this_month") {
      const start2 = new Date(today.getFullYear(), today.getMonth(), 1);
      const end2 = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return [start2, end2];
    }
    if (filter === "last_month") {
      const start2 = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const end2 = new Date(today.getFullYear(), today.getMonth(), 0);
      return [start2, end2];
    }
    if (filter === "this_year") {
      const start2 = new Date(today.getFullYear(), 0, 1);
      const end2 = new Date(today.getFullYear(), 11, 31);
      return [start2, end2];
    }
    const start = new Date(today.getFullYear() - 1, 0, 1);
    const end = new Date(today.getFullYear() - 1, 11, 31);
    return [start, end];
  }
  startOfWeekMonday(date) {
    const day = date.getDay();
    const delta = day === 0 ? -6 : 1 - day;
    return this.addDaysLocal(date, delta);
  }
  addDaysLocal(date, nbDays) {
    const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    next.setDate(next.getDate() + nbDays);
    return next;
  }
  toLocalDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  formatDate(date) {
    if (!date)
      return "";
    if (typeof date === "string")
      return date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  static \u0275fac = function PackingListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingListe)(\u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsineContextService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingListe, selectors: [["app-packing-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 43, vars: 31, consts: [["footer", ""], ["statusMenu", ""], ["mobileListState", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], ["header", "Nouveau versement", 3, "visibleChange", "onHide", "visible", "modal", "closable"], [1, "flex", "flex-col", "gap-4"], ["header", "Historique des versements", 3, "visibleChange", "visible", "modal"], [1, "flex", "justify-center", "py-6"], ["class", "fixed inset-0 z-50", 4, "ngIf"], [1, "packing-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour a l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Prestataire, reference...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["type", "button", "aria-label", "Nouveau packing", 1, "mobile-fab"], [1, "card", "packing-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} packings", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "rowHover"], [1, "flex", "flex-col", "gap-1", "p-3", "bg-surface-50", "dark:bg-surface-800", "rounded-lg", "text-sm"], [1, "font-semibold"], [1, "text-surface-500"], [1, "text-orange-500", "font-medium"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium"], [1, "text-red-500"], ["placeholder", "0", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "max", "useGrouping"], [1, "text-red-500", "text-xs"], ["dateFormat", "dd/mm/yy", "placeholder", "Selectionner la date", "styleClass", "w-full", "inputStyleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options"], ["pTextarea", "", "rows", "2", "placeholder", "Optionnel...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", "outlined", "", 3, "click", "disabled"], ["pButton", "", "label", "Enregistrer", "icon", "pi pi-check", 3, "click", "loading", "disabled"], [1, "pi", "pi-spin", "pi-spinner", "text-2xl"], [1, "grid", "grid-cols-3", "gap-3", "text-sm"], [1, "flex", "flex-col", "gap-0.5", "p-3", "bg-surface-50", "dark:bg-surface-800", "rounded-lg"], [1, "text-surface-500", "text-xs"], [1, "flex", "flex-col", "gap-0.5", "p-3", "bg-green-50", "dark:bg-green-900/20", "rounded-lg"], [1, "font-semibold", "text-green-600"], [1, "flex", "flex-col", "gap-0.5", "p-3", "rounded-lg"], [1, "text-center", "text-surface-500", "py-4", "text-sm"], [3, "value", "tableStyle"], [1, "text-xs"], [1, "text-sm"], [1, "text-sm", "text-surface-500"], [1, "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-black/50", "animate-fadein", 3, "click"], [1, "mobile-paiement-slideover", "bg-surface-0", "dark:bg-surface-900", "absolute", "top-0", "right-0", "shadow-xl", "w-full", "md:w-108", "h-full", "animate-fadeinright"], [3, "onPay", "onClose", "packing", "saving"], [3, "onClose", "onDeleteVersement", "data", "loading", "canDelete"], [1, "mobile-list"], ["class", "mobile-packing-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "mobile-packing-card", 3, "click"], [1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-amounts"], [4, "ngIf"], [1, "mobile-card-actions"], ["pButton", "", "type", "button", "icon", "pi pi-eye", "severity", "secondary", "text", "", "rounded", "", "size", "small", "pTooltip", "Voir facture", "tooltipPosition", "left"], ["pButton", "", "type", "button", "icon", "pi pi-wallet", "severity", "success", "text", "", "rounded", "", "size", "small", "pTooltip", "Encaisser", "tooltipPosition", "left"], ["pButton", "", "type", "button", "icon", "pi pi-history", "severity", "info", "text", "", "rounded", "", "size", "small", "pTooltip", "Historique", "tooltipPosition", "left"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "left"], ["pButton", "", "type", "button", "icon", "pi pi-eye", "severity", "secondary", "text", "", "rounded", "", "size", "small", "pTooltip", "Voir facture", "tooltipPosition", "left", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-wallet", "severity", "success", "text", "", "rounded", "", "size", "small", "pTooltip", "Encaisser", "tooltipPosition", "left", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-history", "severity", "info", "text", "", "rounded", "", "size", "small", "pTooltip", "Historique", "tooltipPosition", "left", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "left", 3, "click"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], ["type", "button", "aria-label", "Nouveau packing", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un packing...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "gap-2", "w-full", "sm:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", 1, "w-full", "sm:w-44", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Periode rapide", 1, "w-full", "sm:w-52", 3, "ngModelChange", "options", "ngModel"], ["placeholder", "Nb jours", "suffix", " j", "inputStyleClass", "w-full", "styleClass", "w-full sm:w-32", 3, "ngModel", "min", "useGrouping", "showButtons"], ["selectionMode", "range", "dateFormat", "dd/mm/yy", "placeholder", "Periode", "inputStyleClass", "w-full", "styleClass", "w-52", 3, "ngModelChange", "onSelect", "ngModel", "showIcon", "readonlyInput"], ["pButton", "", "type", "button", "icon", "pi pi-filter-slash", "severity", "secondary", "outlined", "", "rounded", "", "pTooltip", "Reinitialiser filtres", "tooltipPosition", "top"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau packing"], ["placeholder", "Nb jours", "suffix", " j", "inputStyleClass", "w-full", "styleClass", "w-full sm:w-32", 3, "ngModelChange", "ngModel", "min", "useGrouping", "showButtons"], ["pButton", "", "type", "button", "icon", "pi pi-filter-slash", "severity", "secondary", "outlined", "", "rounded", "", "pTooltip", "Reinitialiser filtres", "tooltipPosition", "top", 3, "click"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau packing", 3, "click"], ["pSortableColumn", "prestataire.nom", 2, "width", "18%"], [1, "flex", "items-center", "gap-2"], ["field", "prestataire.nom"], [2, "width", "11%"], ["pSortableColumn", "date", 2, "width", "9%"], ["field", "date"], ["pSortableColumn", "nb_rouleaux", 2, "width", "8%"], ["field", "nb_rouleaux"], ["pSortableColumn", "montant", 2, "width", "11%"], ["field", "montant"], ["pSortableColumn", "montant_verse", 2, "width", "10%"], ["field", "montant_verse"], ["pSortableColumn", "montant_restant", 2, "width", "10%"], ["field", "montant_restant"], ["pSortableColumn", "statut", 2, "width", "10%"], ["field", "statut"], [1, "text-center", 2, "width", "13%"], [1, "text-surface-400"], [1, "text-sm", "font-medium", "text-green-600"], [3, "value", "severity"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-white", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "2rem", "height", "2rem"], [1, "font-medium"], [1, "flex", "gap-1", "justify-center"], ["pButton", "", "type", "button", "icon", "pi pi-eye", "severity", "secondary", "text", "", "rounded", "", "size", "small", "pTooltip", "Voir facture", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-history", "severity", "info", "text", "", "rounded", "", "size", "small", "pTooltip", "Historique versements", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-eye", "severity", "secondary", "text", "", "rounded", "", "size", "small", "pTooltip", "Voir facture", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-history", "severity", "info", "text", "", "rounded", "", "size", "small", "pTooltip", "Historique versements", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top", 3, "click"], [1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-inbox", "text-4xl"]], template: function PackingListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "p-dialog", 8);
      \u0275\u0275twoWayListener("visibleChange", function PackingListe_Template_p_dialog_visibleChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.versementDialog, $event) || (ctx.versementDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function PackingListe_Template_p_dialog_onHide_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.hideVersementDialog());
      });
      \u0275\u0275conditionalCreate(3, PackingListe_Conditional_3_Template, 30, 14, "div", 9);
      \u0275\u0275template(4, PackingListe_ng_template_4_Template, 2, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function PackingListe_Template_p_dialog_visibleChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.historiqueDialog, $event) || (ctx.historiqueDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(7, PackingListe_Conditional_7_Template, 2, 0, "div", 11)(8, PackingListe_Conditional_8_Template, 19, 10, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, PackingListe_div_9_Template, 4, 2, "div", 12)(10, PackingListe_div_10_Template, 4, 3, "div", 12);
      \u0275\u0275elementStart(11, "div", 13)(12, "header", 14)(13, "button", 15);
      \u0275\u0275listener("click", function PackingListe_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 16)(15, "h1", 17);
      \u0275\u0275text(16, "Packings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 18);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "p-menu", 19, 1);
      \u0275\u0275elementStart(21, "button", 20);
      \u0275\u0275listener("click", function PackingListe_Template_button_click_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statusMenu_r8 = \u0275\u0275reference(20);
        return \u0275\u0275resetView(statusMenu_r8.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 21)(23, "section", 22)(24, "p-iconfield");
      \u0275\u0275element(25, "p-inputicon", 23);
      \u0275\u0275elementStart(26, "input", 24);
      \u0275\u0275listener("ngModelChange", function PackingListe_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, PackingListe_section_27_Template, 2, 1, "section", 25)(28, PackingListe_ng_template_28_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, PackingListe_Conditional_30_Template, 2, 0, "button", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 27)(32, "p-table", 28);
      \u0275\u0275template(33, PackingListe_ng_template_33_Template, 11, 11, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(35, PackingListe_ng_template_35_Template, 32, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(37, PackingListe_ng_template_37_Template, 21, 12, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(39, PackingListe_ng_template_39_Template, 6, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(41, PackingListe_ng_template_41_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r25 = \u0275\u0275reference(29);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(28, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.versementDialog);
      \u0275\u0275property("modal", true)("closable", !ctx.versementSaving);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedPacking ? 3 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(29, _c1));
      \u0275\u0275twoWayProperty("visible", ctx.historiqueDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.historiqueLoading ? 7 : ctx.historiqueData ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.mobilePaiementVisible);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mobileHistoriqueVisible);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.filteredPackings().length, " packing", ctx.filteredPackings().length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileFilterMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredPackings().length)("ngIfElse", mobileListState_r25);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.canCreate && !ctx.mobilePaiementVisible && !ctx.mobileHistoriqueVisible ? 30 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.filteredPackings())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(30, _c2))("showCurrentPageReport", true)("rowHover", true);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    ButtonDirective,
    ToastModule,
    Toast,
    InputTextModule,
    InputText,
    SkeletonModule,
    Skeleton,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    SelectModule,
    Select,
    DatePickerModule,
    DatePicker,
    TooltipModule,
    Tooltip,
    ConfirmDialogModule,
    ConfirmDialog,
    MenuModule,
    Menu,
    RippleModule,
    Ripple,
    DialogModule,
    Dialog,
    InputNumberModule,
    InputNumber,
    TextareaModule,
    Textarea,
    ComptabilitePackingPaiement,
    ComptabiliteHistoriqueVersements,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.packing-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-paiement-slideover[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100%;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n}\n@media (max-width: 768px) {\n  .mobile-paiement-slideover[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1 1 0;\n    min-height: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .packing-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .packing-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-packing-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-packing-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.15rem;\n    margin-left: 0.15rem;\n    flex-shrink: 0;\n  }\n  [_nghost-%COMP%]     .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-amounts[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .packing-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .packing-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-packing-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-packing-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=packing-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingListe, [{
    type: Component,
    args: [{ selector: "app-packing-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      InputTextModule,
      SkeletonModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      SelectModule,
      DatePickerModule,
      TooltipModule,
      ConfirmDialogModule,
      MenuModule,
      RippleModule,
      PhoneFormatPipe,
      DialogModule,
      InputNumberModule,
      TextareaModule,
      ComptabilitePackingPaiement,
      ComptabiliteHistoriqueVersements
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmdialog />

<!-- \u2550\u2550\u2550 DIALOG VERSEMENT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog
  [(visible)]="versementDialog"
  [style]="{ width: '28rem' }"
  header="Nouveau versement"
  [modal]="true"
  [closable]="!versementSaving"
  (onHide)="hideVersementDialog()"
>
  @if (selectedPacking) {
    <div class="flex flex-col gap-4">
      <!-- Info packing -->
      <div class="flex flex-col gap-1 p-3 bg-surface-50 dark:bg-surface-800 rounded-lg text-sm">
        <div class="font-semibold">{{ selectedPacking.reference }}</div>
        <div class="text-surface-500">
          Montant : {{ formatCurrency(selectedPacking.montant) }} &mdash;
          Restant : <span class="text-orange-500 font-medium">{{ formatCurrency(selectedPacking.montant_restant) }}</span>
        </div>
      </div>

      <!-- Montant -->
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium">Montant (GNF) <span class="text-red-500">*</span></label>
        <p-inputnumber
          [(ngModel)]="versementData.montant"
          [min]="1"
          [max]="selectedPacking.montant_restant"
          [useGrouping]="true"
          placeholder="0"
          styleClass="w-full"
        />
        @if (versementSubmitted && !versementData.montant) {
          <small class="text-red-500 text-xs">Montant requis.</small>
        }
      </div>

      <!-- Date -->
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium">Date versement <span class="text-red-500">*</span></label>
        <p-datepicker
          [(ngModel)]="versementData.date_versement"
          [showIcon]="true"
          dateFormat="dd/mm/yy"
          placeholder="Selectionner la date"
          styleClass="w-full"
          inputStyleClass="w-full"
          appendTo="body"
        />
        @if (versementSubmitted && !versementData.date_versement) {
          <small class="text-red-500 text-xs">Date requise.</small>
        }
      </div>

      <!-- Mode paiement -->
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium">Mode de paiement</label>
        <p-select
          [(ngModel)]="versementData.mode_paiement"
          [options]="modesPaiement"
          optionLabel="label"
          optionValue="value"
          styleClass="w-full"
          appendTo="body"
        />
      </div>

      <!-- Notes -->
      <div class="flex flex-col gap-1">
        <label class="text-sm font-medium">Notes</label>
        <textarea
          pTextarea
          [(ngModel)]="versementData.notes"
          rows="2"
          placeholder="Optionnel..."
          class="w-full"
        ></textarea>
      </div>
    </div>
  }

  <ng-template #footer>
    <button
      pButton
      label="Annuler"
      icon="pi pi-times"
      severity="secondary"
      outlined
      [disabled]="versementSaving"
      (click)="hideVersementDialog()"
    ></button>
    <button
      pButton
      label="Enregistrer"
      icon="pi pi-check"
      [loading]="versementSaving"
      [disabled]="versementSaving"
      (click)="saveVersement()"
    ></button>
  </ng-template>
</p-dialog>

<!-- \u2550\u2550\u2550 DIALOG HISTORIQUE VERSEMENTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<p-dialog
  [(visible)]="historiqueDialog"
  [style]="{ width: '36rem' }"
  header="Historique des versements"
  [modal]="true"
>
  @if (historiqueLoading) {
    <div class="flex justify-center py-6">
      <i class="pi pi-spin pi-spinner text-2xl"></i>
    </div>
  } @else if (historiqueData) {
    <div class="flex flex-col gap-4">
      <!-- Summary -->
      <div class="grid grid-cols-3 gap-3 text-sm">
        <div class="flex flex-col gap-0.5 p-3 bg-surface-50 dark:bg-surface-800 rounded-lg">
          <span class="text-surface-500 text-xs">Montant</span>
          <span class="font-semibold">{{ formatCurrency(historiqueData.packing.montant) }}</span>
        </div>
        <div class="flex flex-col gap-0.5 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <span class="text-surface-500 text-xs">Verse</span>
          <span class="font-semibold text-green-600">{{ formatCurrency(historiqueData.packing.montant_verse) }}</span>
        </div>
        <div class="flex flex-col gap-0.5 p-3 rounded-lg" [class.bg-orange-50]="historiqueData.packing.montant_restant > 0" [class.bg-surface-50]="historiqueData.packing.montant_restant === 0">
          <span class="text-surface-500 text-xs">Restant</span>
          <span class="font-semibold" [class.text-orange-500]="historiqueData.packing.montant_restant > 0">{{ formatCurrency(historiqueData.packing.montant_restant) }}</span>
        </div>
      </div>

      <!-- Liste versements -->
      @if (historiqueData.versements.length === 0) {
        <div class="text-center text-surface-500 py-4 text-sm">Aucun versement enregistre.</div>
      } @else {
        <p-table [value]="historiqueData.versements" [tableStyle]="{ 'min-width': '20rem' }">
          <ng-template #header>
            <tr>
              <th class="text-xs">Date</th>
              <th class="text-xs">Montant</th>
              <th class="text-xs">Mode</th>
              <th class="text-xs">Par</th>
              <th class="text-xs">Heure</th>
            </tr>
          </ng-template>
          <ng-template #body let-v>
            <tr>
              <td class="text-sm">{{ formatDateDisplay(v.date_versement) }}</td>
              <td class="text-sm font-medium">{{ formatCurrency(v.montant) }}</td>
              <td class="text-sm text-surface-500">{{ getModeLabel(v.mode_paiement) }}</td>
              <td class="text-sm text-surface-500">{{ v.creator?.nom_complet || '-' }}</td>
              <td class="text-sm text-surface-500">{{ formatDateTime(v.created_at) }}</td>
            </tr>
          </ng-template>
        </p-table>
      }
    </div>
  }
</p-dialog>

<!-- Slide-over paiement mobile (meme composant que comptabilite) -->
<div class="fixed inset-0 z-50" *ngIf="mobilePaiementVisible">
  <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="closeMobilePaiement()"></div>
  <div class="mobile-paiement-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">
    <app-comptabilite-packing-paiement
      [packing]="mobilePaiementPacking"
      [saving]="mobilePaiementSaving"
      (onPay)="onMobilePay($event)"
      (onClose)="closeMobilePaiement()"
    ></app-comptabilite-packing-paiement>
  </div>
</div>

<!-- Slide-over historique mobile -->
<div class="fixed inset-0 z-50" *ngIf="mobileHistoriqueVisible">
  <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="closeMobileHistorique()"></div>
  <div class="mobile-paiement-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">
    <app-comptabilite-historique-versements
      [data]="historiqueData"
      [loading]="historiqueLoading"
      [canDelete]="canDeleteVersement"
      (onClose)="closeMobileHistorique()"
      (onDeleteVersement)="onMobileHistoriqueDeleteVersement($event)"
    ></app-comptabilite-historique-versements>
  </div>
</div>

<!-- MOBILE -->
<div class="packing-mobile-app">
  <header class="mobile-header">
    <button
      pButton
      pRipple
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-back"
      aria-label="Retour a l'accueil"
      (click)="goBack()"
    ></button>
    <div class="mobile-title-wrap">
      <h1 class="mobile-title">Packings</h1>
      <p class="mobile-subtitle">{{ filteredPackings().length }} packing{{ filteredPackings().length !== 1 ? 's' : '' }}</p>
    </div>
    <p-menu
      #statusMenu
      [model]="mobileFilterMenuItems"
      [popup]="true"
      appendTo="body"
      styleClass="mobile-status-menu"
    />
    <button
      pButton
      pRipple
      icon="pi pi-filter"
      class="p-button-rounded p-button-text mobile-add"
      aria-label="Filtrer"
      (click)="statusMenu.toggle($event)"
    ></button>
  </header>

  <div class="mobile-scroll">
    <section class="mobile-search">
      <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input
          pInputText
          type="text"
          [ngModel]="searchQuery()"
          (ngModelChange)="searchQuery.set($event)"
          placeholder="Prestataire, reference..."
          class="w-full"
        />
      </p-iconfield>
    </section>

    <section class="mobile-list" *ngIf="!loading && filteredPackings().length; else mobileListState">
      <article class="mobile-packing-card" *ngFor="let p of filteredPackings()" (click)="goEdit(p)">
        <div class="mobile-card-avatar">{{ getInitials(p) }}</div>
        <div class="mobile-card-body">
          <div class="mobile-card-name">
            {{ p.prestataire ? p.prestataire.prenom + ' ' + p.prestataire.nom : '-' }}
          </div>
          <div class="mobile-card-meta">{{ p.prestataire?.phone | phoneFormat }} - {{ formatDateDisplay(p.date) }}</div>
          <div class="mobile-card-footer">
            <p-tag
              [value]="getStatutLabel(p.statut)"
              [severity]="getStatutSeverity(p.statut)"
              styleClass="mobile-status-tag"
            />
            <span class="mobile-card-amounts">
              {{ p.nb_rouleaux }} rouleau{{ p.nb_rouleaux !== 1 ? 'x' : '' }} &middot; {{ formatCurrency(p.montant) }}
              <span *ngIf="p.montant_restant > 0"> &middot; Reste : {{ formatCurrency(p.montant_restant) }}</span>
            </span>
          </div>
        </div>
        @if ((canCreateVersement && canPay(p)) || canReadVersement || canViewFacture || canEditPacking(p)) {
          <div class="mobile-card-actions">
                  @if (canViewFacture) {
              <button
                pButton
                type="button"
                icon="pi pi-eye"
                severity="secondary"
                text
                rounded
                size="small"
                pTooltip="Voir facture"
                tooltipPosition="left"
                (click)="goFactureFromCard($event, p)"
              ></button>
            }
            @if (canCreateVersement && canPay(p)) {
              <button
                pButton
                type="button"
                icon="pi pi-wallet"
                severity="success"
                text
                rounded
                size="small"
                pTooltip="Encaisser"
                tooltipPosition="left"
                (click)="openVersementFromCard($event, p)"
              ></button>
            }
            @if (canReadVersement) {
              <button
                pButton
                type="button"
                icon="pi pi-history"
                severity="info"
                text
                rounded
                size="small"
                pTooltip="Historique"
                tooltipPosition="left"
                (click)="openHistoriqueFromCard($event, p)"
              ></button>
            }
      
            @if (canEditPacking(p)) {
              <button
                pButton
                type="button"
                icon="pi pi-pen-to-square"
                text
                rounded
                size="small"
                pTooltip="Modifier"
                tooltipPosition="left"
                (click)="goEditFromCard($event, p)"
              ></button>
            }
          </div>
        }
      </article>
    </section>

    <ng-template #mobileListState>
      <div class="mobile-state" *ngIf="loading">Chargement...</div>
      <div class="mobile-state" *ngIf="!loading && !filteredPackings().length">Aucun packing trouve.</div>
    </ng-template>
  </div>

  @if (canCreate && !mobilePaiementVisible && !mobileHistoriqueVisible) {
    <button type="button" class="mobile-fab" aria-label="Nouveau packing" (click)="goNew()">
      <i class="pi pi-plus"></i>
    </button>
  }
</div>

<!-- DESKTOP -->
<div class="card packing-desktop">
  <p-table
    [value]="filteredPackings()"
    [loading]="loading"
    [paginator]="true"
    paginatorDropdownAppendTo="body"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    responsiveLayout="scroll"
    currentPageReportTemplate="  {first} / {last} de {totalRecords} packings"
    [showCurrentPageReport]="true"
    [rowHover]="true"
  >
    <ng-template #caption>
      <div class="flex flex-wrap gap-2 items-center justify-between">
        <p-iconfield class="w-full sm:w-80 order-1 sm:order-0">
          <p-inputicon class="pi pi-search" />
          <input
            pInputText
            type="text"
            placeholder="Rechercher un packing..."
            [ngModel]="searchQuery()"
            (ngModelChange)="searchQuery.set($event)"
            class="w-full"
          />
        </p-iconfield>
        <div class="flex flex-wrap gap-2 w-full sm:w-auto">
          <p-select
            [options]="statutOptions"
            optionLabel="label"
            optionValue="value"
            [ngModel]="selectedStatut()"
            (ngModelChange)="setStatutFilter($event)"
            placeholder="Tous les statuts"
            class="w-full sm:w-44"
          />
          <p-select
            [options]="quickDateFilterOptions"
            optionLabel="label"
            optionValue="value"
            [ngModel]="selectedQuickDateFilter"
            (ngModelChange)="onQuickDateFilterChange($event)"
            placeholder="Periode rapide"
            class="w-full sm:w-52"
          />
          @if (selectedQuickDateFilter === 'last_n_days') {
            <p-inputnumber
              [ngModel]="lastNDaysValue"
              (ngModelChange)="onLastNDaysChange($event)"
              [min]="1"
              [useGrouping]="false"
              [showButtons]="false"
              placeholder="Nb jours"
              suffix=" j"
              inputStyleClass="w-full"
              styleClass="w-full sm:w-32"
            />
          }
          <p-datepicker
            [(ngModel)]="filterDateRange"
            selectionMode="range"
            dateFormat="dd/mm/yy"
            placeholder="Periode"
            [showIcon]="true"
            (onSelect)="onDateRangeSelect()"
            inputStyleClass="w-full"
            styleClass="w-52"
            [readonlyInput]="true"
          />
          @if (hasActiveFilters()) {
            <button
              pButton
              type="button"
              icon="pi pi-filter-slash"
              severity="secondary"
              outlined
              rounded
              pTooltip="Reinitialiser filtres"
              tooltipPosition="top"
              (click)="clearFilters()"
            ></button>
          }
          @if (canCreate) {
            <button pButton outlined icon="pi pi-plus" label="Nouveau packing" (click)="goNew()"></button>
          }
        </div>
      </div>
    </ng-template>

    <ng-template #header>
      <tr>
        <th pSortableColumn="prestataire.nom" style="width:18%">
          <span class="flex items-center gap-2">Prestataire <p-sortIcon field="prestataire.nom" /></span>
        </th>
        <th style="width:11%">Telephone</th>
        <th pSortableColumn="date" style="width:9%">
          <span class="flex items-center gap-2">Date <p-sortIcon field="date" /></span>
        </th>
        <th pSortableColumn="nb_rouleaux" style="width:8%">
          <span class="flex items-center gap-2">Rouleaux <p-sortIcon field="nb_rouleaux" /></span>
        </th>
        <th pSortableColumn="montant" style="width:11%">
          <span class="flex items-center gap-2">Montant <p-sortIcon field="montant" /></span>
        </th>
        <th pSortableColumn="montant_verse" style="width:10%">
          <span class="flex items-center gap-2">Verse <p-sortIcon field="montant_verse" /></span>
        </th>
        <th pSortableColumn="montant_restant" style="width:10%">
          <span class="flex items-center gap-2">Restant <p-sortIcon field="montant_restant" /></span>
        </th>
        <th pSortableColumn="statut" style="width:10%">
          <span class="flex items-center gap-2">Statut <p-sortIcon field="statut" /></span>
        </th>
        @if (hasActionsColumn) {
          <th style="width:13%" class="text-center">Actions</th>
        }
      </tr>
    </ng-template>

    <ng-template #body let-p>
      <tr>
        <td>
          @if (p.prestataire) {
            <div class="flex items-center gap-2">
              <span
                class="inline-flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs flex-shrink-0"
                style="width:2rem;height:2rem"
              >
                {{ p.prestataire.nom?.charAt(0)?.toUpperCase() }}{{ p.prestataire.prenom?.charAt(0)?.toUpperCase() }}
              </span>
              <span class="font-medium">{{ p.prestataire.prenom }} {{ p.prestataire.nom }}</span>
            </div>
          } @else {
            <span class="text-surface-400">-</span>
          }
        </td>
        <td class="text-sm">
          @if (p.prestataire) { {{ p.prestataire.phone | phoneFormat }} } @else { - }
        </td>
        <td class="text-sm">{{ formatDateDisplay(p.date) }}</td>
        <td class="text-sm font-medium">{{ p.nb_rouleaux }}</td>
        <td class="text-sm font-medium">{{ formatCurrency(p.montant) }}</td>
        <td class="text-sm font-medium text-green-600">{{ formatCurrency(p.montant_verse) }}</td>
        <td class="text-sm font-medium">
          <span [class.text-orange-500]="p.montant_restant > 0">{{ formatCurrency(p.montant_restant) }}</span>
        </td>
        <td>
          <p-tag [value]="getStatutLabel(p.statut)" [severity]="getStatutSeverity(p.statut)" />
        </td>
        @if (hasActionsColumn) {
          <td>
            <div class="flex gap-1 justify-center">
              @if (canViewFacture) {
                <button
                  pButton
                  type="button"
                  icon="pi pi-eye"
                  severity="secondary"
                  text
                  rounded
                  size="small"
                  pTooltip="Voir facture"
                  tooltipPosition="top"
                  (click)="goFacture(p)"
                ></button>
              }
              @if (canReadVersement) {
                <button
                  pButton
                  type="button"
                  icon="pi pi-history"
                  severity="info"
                  text
                  rounded
                  size="small"
                  pTooltip="Historique versements"
                  tooltipPosition="top"
                  (click)="openHistorique(p)"
                ></button>
              }
              @if (canEditPacking(p)) {
                <button
                  pButton
                  type="button"
                  icon="pi pi-pen-to-square"
                  text
                  rounded
                  size="small"
                  pTooltip="Modifier"
                  tooltipPosition="top"
                  (click)="goEdit(p)"
                ></button>
              }
              @if (canDelete) {
                <button
                  pButton
                  type="button"
                  icon="pi pi-trash"
                  severity="danger"
                  text
                  rounded
                  size="small"
                  pTooltip="Supprimer"
                  tooltipPosition="top"
                  (click)="deletePacking(p)"
                ></button>
              }
            </div>
          </td>
        }
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td [attr.colspan]="hasActionsColumn ? 9 : 8" class="text-center py-8">
          <div class="flex flex-col items-center gap-3 text-surface-500">
            <i class="pi pi-inbox text-4xl"></i>
            <span>Aucun packing trouve</span>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template #loadingbody>
      @for (_ of [1, 2, 3, 4, 5]; track $index) {
        <tr>
          @for (__ of skeletonCols; track $index) {
            <td><p-skeleton /></td>
          }
        </tr>
      }
    </ng-template>
  </p-table>
</div>
`, styles: ["/* src/app/pages/packings/packing-liste/packing-liste.scss */\n:host {\n  display: block;\n}\n.packing-mobile-app {\n  display: none;\n}\n@media (max-width: 768px) {\n  .mobile-paiement-slideover {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100%;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n}\n@media (max-width: 768px) {\n  .mobile-paiement-slideover > * {\n    flex: 1 1 0;\n    min-height: 0;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .packing-desktop {\n    display: none;\n  }\n  .packing-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-packing-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-packing-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-actions {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.15rem;\n    margin-left: 0.15rem;\n    flex-shrink: 0;\n  }\n  :host ::ng-deep .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-amounts {\n    font-size: 0.78rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .packing-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-packing-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-fab {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  :host-context(.app-dark) .mobile-fab:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=packing-liste.css.map */\n"] }]
  }], () => [{ type: PackingService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Router }, { type: UsineContextService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingListe, { className: "PackingListe", filePath: "src/app/pages/packings/packing-liste/packing-liste.ts", lineNumber: 91 });
})();

// src/app/pages/packings/packing-from/packing-from.ts
function PackingFrom_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.mode === "create" ? "Cr\xE9ation..." : "Enregistrement...");
  }
}
function PackingFrom_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r2.prenom == null ? null : p_r2.prenom[0], "", p_r2.nom == null ? null : p_r2.nom[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r2.prenom, " ", p_r2.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, p_r2.phone));
  }
}
function PackingFrom_ng_template_22_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r3.prenom, " ", p_r3.nom);
  }
}
function PackingFrom_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PackingFrom_ng_template_22_div_0_Template, 4, 2, "div", 42);
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", p_r3);
  }
}
function PackingFrom_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Veuillez s\xE9lectionner un machiniste.");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.dateError);
  }
}
function PackingFrom_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function PackingFrom_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.model.nb_rouleaux, " \xD7 ", \u0275\u0275pipeBind2(2, 2, ctx_r0.model.prix_par_rouleau, "1.0-0"), " ");
  }
}
var PackingFormModel = class {
  id;
  prestataire_id;
  prestataire;
  reference;
  date;
  nb_rouleaux = 0;
  prix_par_rouleau = 0;
  montant = 0;
  statut = "impayee";
  notes;
  constructor(data) {
    if (data) {
      this.id = data.id;
      this.prestataire_id = data.prestataire_id;
      this.prestataire = data.prestataire;
      this.reference = data.reference;
      this.date = data.date ? new Date(data.date) : null;
      this.nb_rouleaux = data.nb_rouleaux || 0;
      this.prix_par_rouleau = data.prix_par_rouleau || 0;
      this.montant = data.montant || 0;
      this.statut = data.statut || "impayee";
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
  defaultPrixRouleau = 0;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  submitted = false;
  model = new PackingFormModel();
  dateError = null;
  statutOptions = Object.keys(PACKING_STATUT_LABELS).map((k) => ({
    value: k,
    label: PACKING_STATUT_LABELS[k]
  }));
  ngOnChanges(changes) {
    if (changes["defaultPrixRouleau"] && !changes["defaultPrixRouleau"].firstChange && this.mode === "create" && this.defaultPrixRouleau > 0 && this.model.prix_par_rouleau === 0) {
      this.model.prix_par_rouleau = this.defaultPrixRouleau;
    }
  }
  ngOnInit() {
    this.model = this.initialData ? new PackingFormModel(this.initialData) : new PackingFormModel();
    if (!this.model.date) {
      this.model.date = /* @__PURE__ */ new Date();
    }
    if (this.mode === "create" && this.defaultPrixRouleau > 0) {
      this.model.prix_par_rouleau = this.defaultPrixRouleau;
    }
  }
  onPrixOrQuantityChange() {
    if (this.model.nb_rouleaux && this.model.prix_par_rouleau) {
      this.model.calculateMontant();
    }
  }
  validateDate() {
    if (!this.model.date) {
      this.dateError = "Date obligatoire.";
      return false;
    }
    this.dateError = null;
    return true;
  }
  onDateChange() {
    if (this.submitted)
      this.validateDate();
  }
  onDateBlur() {
    if (this.model.date)
      this.validateDate();
  }
  getSelectedPrestataire() {
    return this.filteredPrestataires.find((p) => p.id === this.model.prestataire_id);
  }
  get filteredPrestataires() {
    const selectedId = this.model.prestataire_id;
    return (this.prestataires ?? []).filter((p) => {
      if (selectedId && p.id === selectedId)
        return true;
      return p.type === "machiniste";
    });
  }
  isValid() {
    return !!(this.model.prestataire_id && this.model.date && this.model.nb_rouleaux && this.model.nb_rouleaux > 0 && this.model.prix_par_rouleau && this.model.prix_par_rouleau > 0) && this.validateDate();
  }
  resetForm() {
    this.submitted = false;
    this.dateError = null;
    this.model = new PackingFormModel();
  }
  formatDate(date) {
    if (!date)
      return "";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toISOString().split("T")[0];
  }
  onEnterKey(event) {
    event.preventDefault();
    this.onSubmit();
  }
  onSubmit() {
    this.submitted = true;
    if (!this.isValid())
      return;
    this.model.calculateMontant();
    const packingData = {
      prestataire_id: this.model.prestataire_id,
      date: this.formatDate(this.model.date),
      nb_rouleaux: this.model.nb_rouleaux,
      prix_par_rouleau: this.model.prix_par_rouleau,
      notes: this.model.notes ?? void 0
    };
    this.submitForm.emit(packingData);
  }
  onCancel() {
    this.cancel.emit();
  }
  get fieldsDisabled() {
    return this.loading;
  }
  static \u0275fac = function PackingFrom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingFrom)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingFrom, selectors: [["app-packing-from"]], inputs: { mode: "mode", initialData: "initialData", prestataires: "prestataires", loading: "loading", defaultPrixRouleau: "defaultPrixRouleau" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 72, vars: 35, consts: [[1, "card", "packing-from-card"], [1, "pfr-loading-overlay"], [1, "mobile-pfr-header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-pfr-back", 3, "click"], [1, "mobile-pfr-title-wrap"], [1, "mobile-pfr-title"], [2, "width", "2.25rem", "flex-shrink", "0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold", "mb-6", "pfr-desktop-title"], [1, "pfr-form", "flex", "flex-col", "gap-5", 3, "ngSubmit", "keydown.enter"], [1, "pfr-section", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "pfr-section-header", "px-5", "py-3", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "pfr-section-title", "text-surface-500", "dark:text-surface-400", "text-xs", "font-semibold", "uppercase", "tracking-wider"], [1, "px-5", "py-5", "pfr-field", "flex", "flex-col", "gap-1.5"], [1, "pfr-label", "text-sm", "font-medium", "text-surface-700", "dark:text-surface-300"], [1, "text-red-500"], ["name", "prestataire_id", "optionLabel", "nom", "optionValue", "id", "placeholder", "S\xE9lectionner un machiniste", "filterBy", "nom,prenom,phone", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options", "filter", "showClear", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "text-red-500", "text-xs"], [1, "px-5", "py-5", "flex", "flex-col", "gap-5"], [1, "pfr-field", "flex", "flex-col", "gap-1.5"], ["name", "date", "dateFormat", "dd/mm/yy", "placeholder", "S\xE9lectionner la date", "styleClass", "w-full", "inputStyleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "onSelect", "onBlur", "ngModel", "showIcon", "disabled"], [1, "grid", "grid-cols-3", "gap-4"], [1, "pfr-field", "col-span-1", "flex", "flex-col", "gap-1.5"], ["name", "nb_rouleaux", "placeholder", "0", "styleClass", "w-full", "inputStyleClass", "w-full text-center", 3, "ngModelChange", "ngModel", "showButtons", "min", "max", "useGrouping", "disabled"], [1, "pfr-field", "col-span-2", "flex", "flex-col", "gap-1.5"], ["name", "prix_par_rouleau", "placeholder", "0", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "useGrouping", "disabled"], ["name", "statut", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options", "disabled"], [1, "pfr-actions"], [1, "pfr-montant-row"], [1, "pfr-montant-left"], [1, "pfr-montant-icon"], [1, "pi", "pi-money-bill"], [1, "pfr-montant-label"], [1, "pfr-montant-value"], [1, "pfr-montant-calc"], ["type", "submit", "pButton", "", "pRipple", "", "icon", "pi pi-check", 3, "disabled", "loading", "label"], [1, "pi", "pi-spin", "pi-spinner", "text-xl"], [1, "flex", "items-center", "gap-3"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-white", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "2rem", "height", "2rem"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-surface-500"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-user", "text-primary"]], template: function PackingFrom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, PackingFrom_Conditional_1_Template, 4, 1, "div", 1);
      \u0275\u0275elementStart(2, "header", 2)(3, "button", 3);
      \u0275\u0275listener("click", function PackingFrom_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h2", 7);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 8);
      \u0275\u0275listener("ngSubmit", function PackingFrom_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      })("keydown.enter", function PackingFrom_Template_form_keydown_enter_10_listener($event) {
        return ctx.onEnterKey($event);
      });
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14, "Prestataire");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
      \u0275\u0275text(17, " Machiniste ");
      \u0275\u0275elementStart(18, "span", 14);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p-select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prestataire_id, $event) || (ctx.model.prestataire_id = $event);
        return $event;
      });
      \u0275\u0275template(21, PackingFrom_ng_template_21_Template, 9, 7, "ng-template", 16)(22, PackingFrom_ng_template_22_Template, 1, 1, "ng-template", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, PackingFrom_Conditional_23_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "div", 10)(26, "span", 11);
      \u0275\u0275text(27, "D\xE9tails");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "label", 13);
      \u0275\u0275text(31, " Date ");
      \u0275\u0275elementStart(32, "span", 14);
      \u0275\u0275text(33, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p-datepicker", 21);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_datepicker_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.date, $event) || (ctx.model.date = $event);
        return $event;
      });
      \u0275\u0275listener("onSelect", function PackingFrom_Template_p_datepicker_onSelect_34_listener() {
        return ctx.onDateChange();
      })("onBlur", function PackingFrom_Template_p_datepicker_onBlur_34_listener() {
        return ctx.onDateBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, PackingFrom_Conditional_35_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 22)(37, "div", 23)(38, "label", 13);
      \u0275\u0275text(39, " Rouleaux ");
      \u0275\u0275elementStart(40, "span", 14);
      \u0275\u0275text(41, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p-inputnumber", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.nb_rouleaux, $event) || (ctx.model.nb_rouleaux = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_42_listener() {
        return ctx.onPrixOrQuantityChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(43, PackingFrom_Conditional_43_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 25)(45, "label", 13);
      \u0275\u0275text(46, " Prix / rouleau (GNF) ");
      \u0275\u0275elementStart(47, "span", 14);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "p-inputnumber", 26);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.prix_par_rouleau, $event) || (ctx.model.prix_par_rouleau = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PackingFrom_Template_p_inputnumber_ngModelChange_49_listener() {
        return ctx.onPrixOrQuantityChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, PackingFrom_Conditional_50_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "div", 9)(52, "div", 10)(53, "span", 11);
      \u0275\u0275text(54, "Statut");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 12)(56, "label", 13);
      \u0275\u0275text(57, " Statut du packing ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p-select", 27);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFrom_Template_p_select_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.statut, $event) || (ctx.model.statut = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 28)(60, "div", 29)(61, "div", 30)(62, "div", 31);
      \u0275\u0275element(63, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div")(65, "div", 33);
      \u0275\u0275text(66, "Montant total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 34);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "money");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(70, PackingFrom_Conditional_70_Template, 3, 5, "div", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "button", 36);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.mode === "create" ? "Nouveau packing" : "Modifier le packing");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Nouveau packing" : "Modifier le packing", " ");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.prestataire_id);
      \u0275\u0275property("options", ctx.filteredPrestataires)("filter", true)("showClear", true)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.submitted && !ctx.model.prestataire_id ? 23 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.date);
      \u0275\u0275property("showIcon", true)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && ctx.dateError ? 35 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.nb_rouleaux);
      \u0275\u0275property("showButtons", false)("min", 1)("max", 9999)("useGrouping", false)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && (!ctx.model.nb_rouleaux || ctx.model.nb_rouleaux < 1) ? 43 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.prix_par_rouleau);
      \u0275\u0275property("min", 0)("useGrouping", true)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && (!ctx.model.prix_par_rouleau || ctx.model.prix_par_rouleau <= 0) ? 50 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.model.statut);
      \u0275\u0275property("options", ctx.statutOptions)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 33, ctx.model.montant));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.model.nb_rouleaux && ctx.model.prix_par_rouleau ? 70 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading)("loading", ctx.loading)("label", ctx.mode === "create" ? "Enregistrer" : "Sauvegarder");
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    DatePicker,
    Select,
    InputNumber,
    ButtonModule,
    ButtonDirective,
    PrimeTemplate,
    RippleModule,
    Ripple,
    DecimalPipe,
    MoneyPipe,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.packing-from-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (min-width: 769px) {\n  .packing-from-card[_ngcontent-%COMP%] {\n    max-width: 1120px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.pfr-montant-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--p-surface-200, #e2e8f0);\n  border-radius: 0.5rem;\n  background: var(--p-surface-50, #f8fafc);\n}\n.pfr-montant-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.pfr-montant-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  min-width: 2.25rem;\n  border-radius: 50%;\n  background: rgba(95, 107, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #5f6bff;\n  font-size: 1rem;\n}\n.pfr-montant-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--p-surface-400, #94a3b8);\n}\n.pfr-montant-value[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #5f6bff;\n  line-height: 1.1;\n}\n.pfr-montant-calc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--p-surface-400, #94a3b8);\n  text-align: right;\n  white-space: nowrap;\n}\n.pfr-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pfr-actions[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  align-self: flex-end;\n  min-width: 12rem;\n}\n.app-dark[_nghost-%COMP%]   .pfr-montant-row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-montant-row[_ngcontent-%COMP%] {\n  border-color: var(--p-surface-700);\n  background: var(--p-surface-800);\n}\n.mobile-pfr-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.pfr-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  color: #334155;\n  font-weight: 600;\n  border-radius: inherit;\n}\n.app-dark[_nghost-%COMP%]   .pfr-loading-overlay[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-loading-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  color: var(--p-surface-100);\n}\n@media screen and (max-width: 768px) {\n  .packing-from-card[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .pfr-desktop-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-pfr-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-pfr-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-pfr-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-pfr-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(10rem + env(safe-area-inset-bottom));\n  }\n  .pfr-section[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem;\n    border: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n    display: flex;\n    flex-direction: column;\n    gap: 0.875rem;\n  }\n  .pfr-section[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0.75rem;\n  }\n  .pfr-section-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8;\n  }\n  .pfr-field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n  }\n  .pfr-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n  }\n  .pfr-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 1rem calc(1rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.96);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .pfr-montant-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .pfr-montant-left[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.625rem;\n  }\n  .pfr-montant-icon[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border-radius: 50%;\n    background: rgba(95, 107, 255, 0.15);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #5f6bff;\n    font-size: 1rem;\n  }\n  .pfr-montant-label[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8;\n  }\n  .pfr-montant-value[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n    font-weight: 800;\n    color: #5f6bff;\n    line-height: 1.1;\n  }\n  .pfr-montant-calc[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    color: #94a3b8;\n    text-align: right;\n    white-space: nowrap;\n  }\n  .pfr-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .app-dark[_nghost-%COMP%]   .packing-from-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .packing-from-card[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pfr-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pfr-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pfr-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pfr-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-100);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pfr-back[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pfr-back[_ngcontent-%COMP%] {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pfr-section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-section[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n  }\n  .app-dark[_nghost-%COMP%]   .pfr-section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-section-title[_ngcontent-%COMP%], \n   .app-dark[_nghost-%COMP%]   .pfr-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pfr-montant-calc[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-montant-calc[_ngcontent-%COMP%], \n   .app-dark[_nghost-%COMP%]   .pfr-montant-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-montant-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .pfr-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pfr-actions[_ngcontent-%COMP%] {\n    background: rgba(15, 23, 42, 0.96);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=packing-from.css.map */"] });
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
      ButtonModule,
      RippleModule,
      MoneyPipe,
      PhoneFormatPipe
    ], template: `<div class="card packing-from-card">\r
  @if (loading) {\r
    <div class="pfr-loading-overlay">\r
      <i class="pi pi-spin pi-spinner text-xl"></i>\r
      <span>{{ mode === 'create' ? 'Cr\xE9ation...' : 'Enregistrement...' }}</span>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550\u2550 HEADER MOBILE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <header class="mobile-pfr-header">\r
    <button\r
      pButton pRipple type="button"\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text mobile-pfr-back"\r
      aria-label="Retour"\r
      (click)="onCancel()"\r
    ></button>\r
    <div class="mobile-pfr-title-wrap">\r
      <h1 class="mobile-pfr-title">{{ mode === 'create' ? 'Nouveau packing' : 'Modifier le packing' }}</h1>\r
    </div>\r
    <div style="width:2.25rem;flex-shrink:0"></div>\r
  </header>\r
\r
  <!-- \u2550\u2550\u2550 TITRE DESKTOP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <h2 class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 pfr-desktop-title">\r
    {{ mode === 'create' ? 'Nouveau packing' : 'Modifier le packing' }}\r
  </h2>\r
\r
  <form (ngSubmit)="onSubmit()" (keydown.enter)="onEnterKey($event)" class="pfr-form flex flex-col gap-5">\r
\r
    <!-- \u2550\u2550 Section Prestataire \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="pfr-section border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
      <div class="pfr-section-header px-5 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
        <span class="pfr-section-title text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Prestataire</span>\r
      </div>\r
      <div class="px-5 py-5 pfr-field flex flex-col gap-1.5">\r
        <label class="pfr-label text-sm font-medium text-surface-700 dark:text-surface-300">\r
          Machiniste <span class="text-red-500">*</span>\r
        </label>\r
        <p-select\r
          [(ngModel)]="model.prestataire_id"\r
          name="prestataire_id"\r
          [options]="filteredPrestataires"\r
          optionLabel="nom"\r
          optionValue="id"\r
          placeholder="S\xE9lectionner un machiniste"\r
          [filter]="true"\r
          filterBy="nom,prenom,phone"\r
          [showClear]="true"\r
          [disabled]="fieldsDisabled"\r
          styleClass="w-full"\r
          appendTo="body"\r
        >\r
          <ng-template let-p pTemplate="item">\r
            <div class="flex items-center gap-3">\r
              <span class="inline-flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs flex-shrink-0"\r
                    style="width:2rem;height:2rem">\r
                {{ p.prenom?.[0] }}{{ p.nom?.[0] }}\r
              </span>\r
              <div>\r
                <div class="font-medium text-sm">{{ p.prenom }} {{ p.nom }}</div>\r
                <div class="text-xs text-surface-500">{{ p.phone | phoneFormat }}</div>\r
              </div>\r
            </div>\r
          </ng-template>\r
          <ng-template let-p pTemplate="selectedItem">\r
            <div class="flex items-center gap-2" *ngIf="p">\r
              <i class="pi pi-user text-primary"></i>\r
              <span>{{ p.prenom }} {{ p.nom }}</span>\r
            </div>\r
          </ng-template>\r
        </p-select>\r
        @if (submitted && !model.prestataire_id) {\r
          <small class="text-red-500 text-xs">Veuillez s\xE9lectionner un machiniste.</small>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550 Section D\xE9tails \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="pfr-section border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
      <div class="pfr-section-header px-5 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
        <span class="pfr-section-title text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">D\xE9tails</span>\r
      </div>\r
      <div class="px-5 py-5 flex flex-col gap-5">\r
\r
        <!-- Date -->\r
        <div class="pfr-field flex flex-col gap-1.5">\r
          <label class="pfr-label text-sm font-medium text-surface-700 dark:text-surface-300">\r
            Date <span class="text-red-500">*</span>\r
          </label>\r
          <p-datepicker\r
            [(ngModel)]="model.date"\r
            name="date"\r
            [showIcon]="true"\r
            dateFormat="dd/mm/yy"\r
            placeholder="S\xE9lectionner la date"\r
            [disabled]="fieldsDisabled"\r
            (onSelect)="onDateChange()"\r
            (onBlur)="onDateBlur()"\r
            styleClass="w-full"\r
            inputStyleClass="w-full"
            appendTo="body"
          />
          @if (submitted && dateError) {\r
            <small class="text-red-500 text-xs">{{ dateError }}</small>\r
          }\r
        </div>\r
\r
        <!-- Rouleaux + Prix -->\r
        <div class="grid grid-cols-3 gap-4">\r
          <div class="pfr-field col-span-1 flex flex-col gap-1.5">\r
            <label class="pfr-label text-sm font-medium text-surface-700 dark:text-surface-300">\r
              Rouleaux <span class="text-red-500">*</span>\r
            </label>\r
            <p-inputnumber\r
              [(ngModel)]="model.nb_rouleaux"\r
              name="nb_rouleaux"\r
              (ngModelChange)="onPrixOrQuantityChange()"\r
              [showButtons]="false"\r
              [min]="1"\r
              [max]="9999"\r
              placeholder="0"\r
              [useGrouping]="false"\r
              [disabled]="fieldsDisabled"\r
              styleClass="w-full"\r
              inputStyleClass="w-full text-center"\r
            />\r
            @if (submitted && (!model.nb_rouleaux || model.nb_rouleaux < 1)) {\r
              <small class="text-red-500 text-xs">Requis.</small>\r
            }\r
          </div>\r
\r
          <div class="pfr-field col-span-2 flex flex-col gap-1.5">\r
            <label class="pfr-label text-sm font-medium text-surface-700 dark:text-surface-300">\r
              Prix / rouleau (GNF) <span class="text-red-500">*</span>\r
            </label>\r
            <p-inputnumber\r
              [(ngModel)]="model.prix_par_rouleau"\r
              name="prix_par_rouleau"\r
              (ngModelChange)="onPrixOrQuantityChange()"\r
              [min]="0"\r
              placeholder="0"\r
              [useGrouping]="true"\r
              [disabled]="fieldsDisabled"\r
              styleClass="w-full"\r
            />\r
            @if (submitted && (!model.prix_par_rouleau || model.prix_par_rouleau <= 0)) {\r
              <small class="text-red-500 text-xs">Requis.</small>\r
            }\r
          </div>\r
        </div>\r
\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550 Section Statut \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="pfr-section border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
      <div class="pfr-section-header px-5 py-3 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
        <span class="pfr-section-title text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Statut</span>\r
      </div>\r
      <div class="px-5 py-5 pfr-field flex flex-col gap-1.5">\r
        <label class="pfr-label text-sm font-medium text-surface-700 dark:text-surface-300">\r
          Statut du packing\r
        </label>\r
        <p-select\r
          [(ngModel)]="model.statut"\r
          name="statut"\r
          [options]="statutOptions"\r
          optionLabel="label"\r
          optionValue="value"\r
          [disabled]="fieldsDisabled"\r
          styleClass="w-full"\r
          appendTo="body"\r
        />\r
      </div>\r
    </div>\r
\r
    <!-- \u2550\u2550 Actions (sticky bas) \u2014 montant + bouton \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <div class="pfr-actions">\r
      <!-- Montant total -->\r
      <div class="pfr-montant-row">\r
        <div class="pfr-montant-left">\r
          <div class="pfr-montant-icon">\r
            <i class="pi pi-money-bill"></i>\r
          </div>\r
          <div>\r
            <div class="pfr-montant-label">Montant total</div>\r
            <div class="pfr-montant-value">{{ model.montant | money }}</div>\r
          </div>\r
        </div>\r
        @if (model.nb_rouleaux && model.prix_par_rouleau) {\r
          <div class="pfr-montant-calc">\r
            {{ model.nb_rouleaux }} \xD7 {{ model.prix_par_rouleau | number:'1.0-0' }}\r
          </div>\r
        }\r
      </div>\r
      <!-- Bouton submit -->\r
      <button\r
        type="submit"\r
        pButton pRipple\r
        [disabled]="loading"\r
        [loading]="loading"\r
        [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
        icon="pi pi-check"\r
      ></button>\r
    </div>\r
\r
  </form>\r
</div>\r
`, styles: ["/* src/app/pages/packings/packing-from/packing-from.scss */\n:host {\n  display: block;\n}\n.packing-from-card {\n  position: relative;\n}\n@media screen and (min-width: 769px) {\n  .packing-from-card {\n    max-width: 1120px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.pfr-montant-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding: 1rem 1.25rem;\n  border: 1px solid var(--p-surface-200, #e2e8f0);\n  border-radius: 0.5rem;\n  background: var(--p-surface-50, #f8fafc);\n}\n.pfr-montant-left {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.pfr-montant-icon {\n  width: 2.25rem;\n  height: 2.25rem;\n  min-width: 2.25rem;\n  border-radius: 50%;\n  background: rgba(95, 107, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #5f6bff;\n  font-size: 1rem;\n}\n.pfr-montant-label {\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: var(--p-surface-400, #94a3b8);\n}\n.pfr-montant-value {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #5f6bff;\n  line-height: 1.1;\n}\n.pfr-montant-calc {\n  font-size: 0.8rem;\n  color: var(--p-surface-400, #94a3b8);\n  text-align: right;\n  white-space: nowrap;\n}\n.pfr-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.pfr-actions button[type=submit] {\n  align-self: flex-end;\n  min-width: 12rem;\n}\n:host-context(.app-dark) .pfr-montant-row {\n  border-color: var(--p-surface-700);\n  background: var(--p-surface-800);\n}\n.mobile-pfr-header {\n  display: none;\n}\n.pfr-loading-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.75);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  color: #334155;\n  font-weight: 600;\n  border-radius: inherit;\n}\n:host-context(.app-dark) .pfr-loading-overlay {\n  background: rgba(15, 23, 42, 0.6);\n  color: var(--p-surface-100);\n}\n@media screen and (max-width: 768px) {\n  .packing-from-card {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .pfr-desktop-title {\n    display: none;\n  }\n  .mobile-pfr-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-pfr-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-pfr-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-pfr-title {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(10rem + env(safe-area-inset-bottom));\n  }\n  .pfr-section {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem;\n    border: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n    display: flex;\n    flex-direction: column;\n    gap: 0.875rem;\n  }\n  .pfr-section:last-of-type {\n    margin-bottom: 0.75rem;\n  }\n  .pfr-section-title {\n    font-size: 0.7rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8;\n  }\n  .pfr-field {\n    display: flex;\n    flex-direction: column;\n    gap: 0.3rem;\n  }\n  .pfr-label {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n  }\n  .pfr-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem 1rem calc(1rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.96);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .pfr-montant-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .pfr-montant-left {\n    display: flex;\n    align-items: center;\n    gap: 0.625rem;\n  }\n  .pfr-montant-icon {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border-radius: 50%;\n    background: rgba(95, 107, 255, 0.15);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #5f6bff;\n    font-size: 1rem;\n  }\n  .pfr-montant-label {\n    font-size: 0.65rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8;\n  }\n  .pfr-montant-value {\n    font-size: 1.35rem;\n    font-weight: 800;\n    color: #5f6bff;\n    line-height: 1.1;\n  }\n  .pfr-montant-calc {\n    font-size: 0.75rem;\n    color: #94a3b8;\n    text-align: right;\n    white-space: nowrap;\n  }\n  .pfr-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  :host-context(.app-dark) .packing-from-card {\n    background: var(--p-surface-950) !important;\n  }\n  :host-context(.app-dark) .mobile-pfr-header {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-pfr-title {\n    color: var(--p-surface-100);\n  }\n  :host-context(.app-dark) .mobile-pfr-back {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  :host-context(.app-dark) .pfr-section {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n  }\n  :host-context(.app-dark) .pfr-section-title,\n  :host-context(.app-dark) .pfr-label {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .pfr-montant-calc,\n  :host-context(.app-dark) .pfr-montant-label {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .pfr-actions {\n    background: rgba(15, 23, 42, 0.96);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=packing-from.css.map */\n"] }]
  }], null, { mode: [{
    type: Input
  }], initialData: [{
    type: Input
  }], prestataires: [{
    type: Input
  }], loading: [{
    type: Input
  }], defaultPrixRouleau: [{
    type: Input
  }], submitForm: [{
    type: Output
  }], cancel: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingFrom, { className: "PackingFrom", filePath: "src/app/pages/packings/packing-from/packing-from.ts", lineNumber: 63 });
})();

// src/app/pages/packings/packing-new/packing-new.ts
var PackingNew = class _PackingNew {
  prestataireService;
  packingService;
  parametresService;
  messageService;
  router;
  usineContext;
  prestataires = [];
  loading = false;
  defaultPrixRouleau = 0;
  constructor(prestataireService, packingService, parametresService, messageService, router, usineContext) {
    this.prestataireService = prestataireService;
    this.packingService = packingService;
    this.parametresService = parametresService;
    this.messageService = messageService;
    this.router = router;
    this.usineContext = usineContext;
    effect(() => {
      this.usineContext.currentUsineId();
      this.loadPrestataires();
    });
  }
  ngOnInit() {
    this.parametresService.getPrixRouleauDefaut().subscribe({
      next: (prix) => {
        this.defaultPrixRouleau = prix;
      },
      error: () => {
      }
    });
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
          this.router.navigate(["/packings"]);
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
    this.router.navigate(["/packings"]);
  }
  static \u0275fac = function PackingNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingNew)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(ParametresService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsineContextService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingNew, selectors: [["app-packing-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 4, consts: [[3, "submitForm", "cancel", "mode", "prestataires", "loading", "defaultPrixRouleau"]], template: function PackingNew_Template(rf, ctx) {
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
      \u0275\u0275property("mode", "create")("prestataires", ctx.prestataires)("loading", ctx.loading)("defaultPrixRouleau", ctx.defaultPrixRouleau);
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
  [defaultPrixRouleau]="defaultPrixRouleau"
  (submitForm)="onSubmit($event)"
  (cancel)="onCancel()">
</app-packing-from>
 ` }]
  }], () => [{ type: PrestataireService }, { type: PackingService }, { type: ParametresService }, { type: MessageService }, { type: Router }, { type: UsineContextService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingNew, { className: "PackingNew", filePath: "src/app/pages/packings/packing-new/packing-new.ts", lineNumber: 21 });
})();

// src/app/pages/packings/packing-edit/packing-edit.ts
function PackingEdit_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275element(2, "p-skeleton", 3)(3, "p-skeleton", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275element(5, "p-skeleton", 6)(6, "p-skeleton", 6)(7, "p-skeleton", 6)(8, "p-skeleton", 6);
    \u0275\u0275elementEnd()();
  }
}
function PackingEdit_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-packing-from", 7);
    \u0275\u0275listener("submitForm", function PackingEdit_Conditional_2_Template_app_packing_from_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("cancel", function PackingEdit_Conditional_2_Template_app_packing_from_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mode", "edit")("initialData", ctx_r1.packing)("prestataires", ctx_r1.prestataires)("loading", ctx_r1.loading);
  }
}
var PackingEdit = class _PackingEdit {
  prestataireService;
  packingService;
  messageService;
  router;
  route;
  packingForm;
  prestataires = [];
  packing = null;
  loading = false;
  packingLoading = false;
  packingId;
  constructor(prestataireService, packingService, messageService, router, route) {
    this.prestataireService = prestataireService;
    this.packingService = packingService;
    this.messageService = messageService;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id || isNaN(+id)) {
      this.router.navigate(["/packings"]);
      return;
    }
    this.packingId = +id;
    this.packingLoading = true;
    this.loadPrestataires();
    this.loadPacking();
  }
  loadPacking() {
    this.packingService.getPacking(this.packingId).subscribe({
      next: (response) => {
        this.packing = response.data;
        if (this.packing.statut !== "impayee") {
          this.messageService.add({
            severity: "warn",
            summary: "Edition non autorisee",
            detail: "Seuls les packings impayes sont modifiables.",
            life: 3e3
          });
          this.packingLoading = false;
          setTimeout(() => this.router.navigate(["/packings"]), 1e3);
          return;
        }
        this.packingLoading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement du packing :", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger le packing",
          life: 3e3
        });
        this.packingLoading = false;
        setTimeout(() => this.router.navigate(["/packings"]), 1500);
      }
    });
  }
  loadPrestataires() {
    this.prestataireService.getPrestataires().subscribe({
      next: (response) => {
        this.prestataires = this.extractPrestataires(response);
      },
      error: (err) => {
        console.error("Erreur lors du chargement des prestataires :", err);
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
    if (!this.packing || this.packing.statut !== "impayee") {
      this.messageService.add({
        severity: "warn",
        summary: "Edition non autorisee",
        detail: "Seuls les packings impayes sont modifiables.",
        life: 3e3
      });
      return;
    }
    this.loading = true;
    this.packingService.updatePacking(this.packingId, packingData).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Packing modifi\xE9 avec succ\xE8s",
          life: 3e3
        });
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(["/packings"]);
        }, 1e3);
      },
      error: (err) => {
        console.error("Erreur lors de la modification du packing :", err);
        const errBody = err?.error;
        const errors = errBody?.errors ? Object.values(errBody.errors).flat() : [];
        const detail = errors.length ? errors.join(" ") : errBody?.message || err?.message || "Impossible de modifier le packing";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail,
          life: 5e3
        });
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["/packings"]);
  }
  static \u0275fac = function PackingEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingEdit)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingEdit, selectors: [["app-packing-edit"]], viewQuery: function PackingEdit_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(PackingFrom, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.packingForm = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 3, vars: 1, consts: [[1, "card", "packing-edit-skeleton"], [3, "mode", "initialData", "prestataires", "loading"], [1, "pes-header"], ["shape", "circle", "size", "2.25rem"], ["width", "10rem", "height", "1.25rem"], [1, "pes-body"], ["width", "100%", "height", "2.5rem"], [3, "submitForm", "cancel", "mode", "initialData", "prestataires", "loading"]], template: function PackingEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275conditionalCreate(1, PackingEdit_Conditional_1_Template, 9, 0, "div", 0)(2, PackingEdit_Conditional_2_Template, 1, 4, "app-packing-from", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.packingLoading ? 1 : 2);
    }
  }, dependencies: [PackingFrom, ToastModule, Toast, Skeleton], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.packing-edit-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.pes-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pes-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .packing-edit-skeleton[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 1rem 0.875rem !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .app-dark[_nghost-%COMP%]   .packing-edit-skeleton[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .packing-edit-skeleton[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n}\n/*# sourceMappingURL=packing-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingEdit, [{
    type: Component,
    args: [{ selector: "app-packing-edit", standalone: true, imports: [PackingFrom, ToastModule, Skeleton], providers: [MessageService], template: `<p-toast />\r
\r
@if (packingLoading) {\r
  <!-- Skeleton plein \xE9cran pendant le chargement initial -->\r
  <div class="card packing-edit-skeleton">\r
    <div class="pes-header">\r
      <p-skeleton shape="circle" size="2.25rem" />\r
      <p-skeleton width="10rem" height="1.25rem" />\r
    </div>\r
    <div class="pes-body">\r
      <p-skeleton width="100%" height="2.5rem" />\r
      <p-skeleton width="100%" height="2.5rem" />\r
      <p-skeleton width="100%" height="2.5rem" />\r
      <p-skeleton width="100%" height="2.5rem" />\r
    </div>\r
  </div>\r
} @else {\r
  <app-packing-from\r
    [mode]="'edit'"\r
    [initialData]="packing"\r
    [prestataires]="prestataires"\r
    [loading]="loading"\r
    (submitForm)="onSubmit($event)"\r
    (cancel)="onCancel()">\r
  </app-packing-from>\r
}\r
`, styles: ["/* src/app/pages/packings/packing-edit/packing-edit.scss */\n:host {\n  display: block;\n}\n.packing-edit-skeleton {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.pes-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pes-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .packing-edit-skeleton {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 1rem 0.875rem !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  :host-context(.app-dark) .packing-edit-skeleton {\n    background: var(--p-surface-950) !important;\n  }\n}\n/*# sourceMappingURL=packing-edit.css.map */\n"] }]
  }], () => [{ type: PrestataireService }, { type: PackingService }, { type: MessageService }, { type: Router }, { type: ActivatedRoute }], { packingForm: [{
    type: ViewChild,
    args: [PackingFrom]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingEdit, { className: "PackingEdit", filePath: "src/app/pages/packings/packing-edit/packing-edit.ts", lineNumber: 20 });
})();

// src/app/pages/packings/packing-facture/packing-facture.ts
var _forTrack0 = ($index, $item) => $item.id;
function PackingFacture_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.usineAdresse);
  }
}
function PackingFacture_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.notes);
  }
}
function PackingFacture_Conditional_99_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const versement_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.formatDateDisplay(versement_r2.date_versement), " - ", ctx_r0.formatVersementMode(versement_r2), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatAmount(versement_r2.montant), " ");
  }
}
function PackingFacture_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275repeaterCreate(1, PackingFacture_Conditional_99_For_2_Template, 5, 3, "div", 56, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.versementsAffiches);
  }
}
function PackingFacture_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Aucun verssement");
    \u0275\u0275elementEnd();
  }
}
function PackingFacture_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 46);
    \u0275\u0275text(2, "Espece");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.totalEspeces));
  }
}
function PackingFacture_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 46);
    \u0275\u0275text(2, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.totalMobile));
  }
}
function PackingFacture_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 46);
    \u0275\u0275text(2, "Banque");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatAmount(ctx_r0.totalBanque));
  }
}
function PackingFacture_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Aucun versement");
    \u0275\u0275elementEnd();
  }
}
function PackingFacture_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Le montant ne doit pas depasser le reste a payer (", ctx_r0.formatAmount(ctx_r0.resteAPayer), ").");
  }
}
var PackingFacture = class _PackingFacture {
  route;
  router;
  layoutService;
  packingService;
  usineContext;
  authService;
  messageService;
  loading = false;
  encaissementSaving = false;
  canCreateVersement = false;
  packing = null;
  versements = [];
  encaissementMontant = null;
  encaissementMode = "especes";
  modesPaiement = [
    { label: MODE_PAIEMENT_LABELS.especes, value: "especes" },
    { label: MODE_PAIEMENT_LABELS.mobile_money, value: "mobile_money" },
    { label: MODE_PAIEMENT_LABELS.virement, value: "virement" },
    { label: MODE_PAIEMENT_LABELS.cheque, value: "cheque" }
  ];
  constructor(route, router, layoutService, packingService, usineContext, authService, messageService) {
    this.route = route;
    this.router = router;
    this.layoutService = layoutService;
    this.packingService = packingService;
    this.usineContext = usineContext;
    this.authService = authService;
    this.messageService = messageService;
    this.canCreateVersement = this.authService.hasPermission("versements.create");
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get("id");
      const id = idParam ? Number(idParam) : NaN;
      if (!id || Number.isNaN(id)) {
        this.router.navigate(["/packings"]);
        return;
      }
      this.loadPacking(id);
    });
  }
  get usineNom() {
    return this.usineContext.currentUsine()?.nom || "Usine";
  }
  get usineAdresse() {
    const nom = this.usineContext.currentUsine()?.nom;
    return nom ? `${nom}, Conakry, Guin\xE9e` : "";
  }
  get factureDate() {
    return this.formatDateDisplay(this.packing?.date);
  }
  get factureNumero() {
    return this.packing?.reference || "-";
  }
  get machinisteReference() {
    return this.packing?.prestataire?.reference || "-";
  }
  get prestataireNomComplet() {
    const nom = this.packing?.prestataire?.nom || "";
    const prenom = this.packing?.prestataire?.prenom || "";
    const fullName = `${prenom} ${nom}`.trim();
    return fullName || "-";
  }
  get prestatairePhone() {
    return this.packing?.prestataire?.phone ?? null;
  }
  get prestataireAdresse() {
    const ville = this.packing?.prestataire?.ville || "";
    const pays = this.packing?.prestataire?.pays || "";
    const location = [ville, pays].filter(Boolean).join(", ");
    return location || "-";
  }
  get quantiteRouleaux() {
    return this.packing?.nb_rouleaux || 0;
  }
  get prixUnitaire() {
    return this.packing?.prix_par_rouleau || 0;
  }
  get totalLigne() {
    return this.packing?.montant || 0;
  }
  get totalFacture() {
    return this.packing?.montant || 0;
  }
  get montantPaye() {
    return this.packing?.montant_verse || 0;
  }
  get resteAPayer() {
    return this.packing?.montant_restant || 0;
  }
  get modePaiementLabel() {
    if (!this.versements.length)
      return "-";
    const versementsTries = [...this.versements].sort((a, b) => {
      return new Date(b.date_versement).getTime() - new Date(a.date_versement).getTime();
    });
    const latest = versementsTries[0];
    return latest.mode_paiement_label || MODE_PAIEMENT_LABELS[latest.mode_paiement] || "-";
  }
  get versementsAffiches() {
    return [...this.versements].sort((a, b) => new Date(b.date_versement).getTime() - new Date(a.date_versement).getTime());
  }
  get notes() {
    return this.packing?.notes?.trim() || "-";
  }
  get totalEspeces() {
    return this.sumVersementsByMode("especes");
  }
  get totalMobile() {
    return this.sumVersementsByMode("mobile_money");
  }
  get totalBanque() {
    return this.sumVersementsByMode("virement") + this.sumVersementsByMode("cheque");
  }
  get totalEncaisse() {
    return this.versements.reduce((sum, versement) => sum + (versement.montant || 0), 0);
  }
  get isEncaissementMontantExceedsReste() {
    if (this.encaissementMontant == null)
      return false;
    if (this.resteAPayer <= 0)
      return false;
    return this.encaissementMontant > this.resteAPayer;
  }
  get canPay() {
    return this.canCreateVersement && !this.loading && !this.encaissementSaving && this.resteAPayer > 0 && !this.isEncaissementMontantExceedsReste;
  }
  formatAmount(value) {
    return `${new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)} FG`;
  }
  formatVersementMode(versement) {
    return versement.mode_paiement_label || MODE_PAIEMENT_LABELS[versement.mode_paiement] || versement.mode_paiement;
  }
  toggleSidebar() {
    this.layoutService.onMenuToggle();
  }
  downloadInvoice() {
    const invoice = document.getElementById("packing-facture-invoice");
    if (!invoice)
      return;
    const fileName = `${this.factureNumero || "facture-packing"}.html`;
    const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${this.factureNumero || "Facture packing"}</title>
  <style>
    body { margin: 0; padding: 24px; background: #f1f5f9; font-family: Arial, sans-serif; }
  </style>
</head>
<body>${invoice.outerHTML}</body>
</html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }
  printInvoice() {
    const oldTitle = document.title;
    document.title = this.factureNumero || "Facture packing";
    window.print();
    document.title = oldTitle;
  }
  payer() {
    if (!this.packing || !this.canPay)
      return;
    const packingId = this.packing.id;
    if (!this.encaissementMontant || this.encaissementMontant <= 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Montant requis",
        detail: "Saisissez un montant valide.",
        life: 3e3
      });
      return;
    }
    if (this.encaissementMontant > this.resteAPayer) {
      this.messageService.add({
        severity: "warn",
        summary: "Montant invalide",
        detail: "Le montant depasse le reste a payer.",
        life: 3e3
      });
      return;
    }
    const dto = {
      montant: this.encaissementMontant,
      date_versement: this.formatApiDate(/* @__PURE__ */ new Date()),
      mode_paiement: this.encaissementMode
    };
    this.encaissementSaving = true;
    this.packingService.createVersement(packingId, dto).subscribe({
      next: (response) => {
        if (response.data?.packing) {
          this.packing = response.data.packing;
        }
        if (response.data?.versement) {
          this.versements = [response.data.versement, ...this.versements];
        }
        this.syncEncaissementDefaults();
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: `Versement de ${this.formatAmount(dto.montant)} enregistre.`,
          life: 3e3
        });
        this.loadPacking(packingId);
      },
      error: (error) => {
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error?.error?.message || "Impossible d'enregistrer le versement.",
          life: 4e3
        });
      }
    });
  }
  loadPacking(id) {
    this.loading = true;
    this.packingService.getPacking(id).subscribe({
      next: (response) => {
        this.packing = response.data;
        this.syncEncaissementDefaults();
        this.loadVersements(id);
      },
      error: () => {
        this.loading = false;
        this.encaissementSaving = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger la facture packing.",
          life: 4e3
        });
      }
    });
  }
  loadVersements(id) {
    this.packingService.getVersements(id).subscribe({
      next: (response) => {
        this.versements = response.data?.versements || [];
        this.loading = false;
        this.encaissementSaving = false;
        this.syncEncaissementDefaults();
      },
      error: () => {
        this.versements = [];
        this.loading = false;
        this.encaissementSaving = false;
        this.syncEncaissementDefaults();
      }
    });
  }
  syncEncaissementDefaults() {
    const restant = this.resteAPayer;
    if (restant <= 0) {
      this.encaissementMontant = null;
      return;
    }
    if (this.encaissementMontant == null || this.encaissementMontant <= 0 || this.encaissementMontant > restant) {
      this.encaissementMontant = restant;
    }
  }
  sumVersementsByMode(mode) {
    return this.versements.filter((versement) => versement.mode_paiement === mode).reduce((sum, versement) => sum + (versement.montant || 0), 0);
  }
  formatDateDisplay(dateValue) {
    if (!dateValue)
      return "-";
    if (typeof dateValue === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      const [year, month, day] = dateValue.split("-");
      return `${day}/${month}/${year}`;
    }
    const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue;
    if (Number.isNaN(date.getTime()))
      return "-";
    return date.toLocaleDateString("fr-FR");
  }
  formatApiDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  static \u0275fac = function PackingFacture_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PackingFacture)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(PackingService), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PackingFacture, selectors: [["app-packing-facture"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 135, vars: 42, consts: [["position", "top-right", "appendTo", "body", 3, "baseZIndex", "preventOpenDuplicates"], [1, "packing-facture-actions", "w-full", "flex", "justify-end", "mb-4"], [1, "flex", "items-center", "gap-3"], ["pButton", "", "type", "button", "icon", "pi pi-arrows-h", "severity", "success", "pTooltip", "Fermer/Ouvrir menu", "tooltipPosition", "top", 3, "click", "outlined", "rounded"], ["pButton", "", "type", "button", "icon", "pi pi-download", "severity", "success", "pTooltip", "Telecharger la facture", "tooltipPosition", "top", 3, "click", "outlined", "rounded"], ["pButton", "", "type", "button", "icon", "pi pi-print", "severity", "success", "pTooltip", "Imprimer la facture", "tooltipPosition", "top", 3, "click", "rounded"], [1, "packing-facture-layout", "w-full", "flex", "flex-col", "md:flex-row", "items-start", "gap-6"], [1, "packing-facture-main", "w-full", "md:flex-1"], ["id", "packing-facture-invoice", 1, "card", "py-20", "px-12", "md:px-20", "overflow-auto"], [1, "flex", "flex-col", "items-start", "md:flex-row", "md:items-center", "md:justify-between", "border-b", "border-surface-200", "dark:border-surface-700", "pb-8", "min-w-max"], [1, "flex", "flex-col"], ["width", "48", "height", "50", "viewBox", "0 0 48 50", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fillRule", "evenodd", "clipRule", "evenodd", "d", "M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z", "fill", "var(--p-primary-color)"], [1, "my-4", "text-4xl", "font-bold", "text-surface-900", "dark:text-surface-0"], [1, "mb-2"], [1, "flex", "flex-col", "mt-8", "md:mt-0"], [1, "text-2xl", "font-semibold", "text-left", "md:text-right", "mb-4"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "font-semibold", "mr-12"], [1, "flex", "justify-between", "items-center"], [1, "mt-8", "mb-20", "flex", "flex-col"], [1, "mb-4", "text-2xl", "font-medium"], [1, "overflow-x-auto"], [1, "w-full", 2, "border-collapse", "collapse", "table-layout", "auto"], [1, "text-left", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "text-right", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap", "px-4"], [1, "text-right", "font-semibold", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "text-left", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "whitespace-nowrap"], [1, "text-right", "py-4", "border-b", "border-surface-200", "dark:border-surface-700", "px-4"], [1, "text-right", "py-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mt-20"], [1, "flex", "flex-col", "mb-4", "md:mb-0"], [1, "font-semibold", "mb-2"], [1, "text-surface-600", "dark:text-surface-300", "max-w-xs", "text-sm"], [1, "font-semibold", "mb-4", "md:mb-0"], [1, "flex", "flex-col", "gap-2", "mt-4", "pt-3", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "mt-3", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "packing-facture-sidepanel", "w-full", "md:w-80", "flex", "flex-col", "justify-start", "items-start", "gap-6"], [1, "w-full", "p-4", "md:p-6", "rounded-lg", "border", "border-surface-200", "dark:border-surface-700", "flex", "flex-col", "justify-start", "items-start", "gap-4", "md:gap-6", "overflow-hidden", "bg-surface-0", "dark:bg-surface-900"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "w-full", "py-2", "flex", "flex-col", "justify-start", "items-start", "gap-3", "md:gap-4"], [1, "w-full", "flex", "justify-start", "items-start", "gap-2"], [1, "w-full", "text-surface-500", "dark:text-surface-400", "text-sm", "leading-tight"], [1, "w-full", "flex", "justify-start", "items-start"], [1, "flex-1", "flex", "flex-col", "justify-start", "items-start"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex-1", "text-surface-700", "dark:text-surface-200", "text-sm", "md:text-base", "font-normal", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "md:text-base", "font-medium", "leading-tight"], [1, "text-orange-500", "text-sm", "md:text-base", "font-medium", "leading-tight"], [1, "w-full", "flex", "flex-col", "gap-2"], [1, "text-surface-900", "dark:text-surface-0", "text-sm", "font-medium"], ["inputStyleClass", "w-full", "styleClass", "w-full", "suffix", " FG", "placeholder", "0", 3, "ngModelChange", "ngModel", "min", "max", "invalid", "useGrouping"], [1, "text-red-500", "text-xs"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "appendTo", "body", 3, "ngModelChange", "ngModel", "options"], ["pButton", "", "severity", "contrast", 1, "w-full", 3, "click", "disabled", "loading"], ["pButtonLabel", ""], [1, "flex", "justify-between", "items-center", "gap-4", "text-sm"], [1, "text-surface-600", "dark:text-surface-300"], [1, "font-medium", "text-surface-900", "dark:text-surface-0"]], template: function PackingFacture_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function PackingFacture_Template_button_click_3_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 4);
      \u0275\u0275listener("click", function PackingFacture_Template_button_click_4_listener() {
        return ctx.downloadInvoice();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function PackingFacture_Template_button_click_5_listener() {
        return ctx.printInvoice();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 11);
      \u0275\u0275element(12, "path", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 13);
      \u0275\u0275text(14, " EAU-LA-MAMAN ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 14);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, PackingFacture_Conditional_17_Template, 2, 1, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "div", 16);
      \u0275\u0275text(20, " FACTURE PACKING ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "div", 17)(23, "span", 18);
      \u0275\u0275text(24, "DATE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 17)(28, "span", 18);
      \u0275\u0275text(29, "FACTURE #");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19)(33, "span", 18);
      \u0275\u0275text(34, "No MACHINISTE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 21);
      \u0275\u0275text(39, "Prestataire (Machiniste)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 14);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 14);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "phoneFormat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 22)(48, "table", 23)(49, "thead")(50, "tr")(51, "th", 24);
      \u0275\u0275text(52, " Description ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 25);
      \u0275\u0275text(54, " Quantite ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 25);
      \u0275\u0275text(56, " Prix unitaire ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 26);
      \u0275\u0275text(58, " Total ligne ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "tbody")(60, "tr")(61, "td", 27);
      \u0275\u0275text(62, " Rouleau ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "td", 28);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "td", 28);
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td", 29);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 30)(70, "div", 31)(71, "div", 32);
      \u0275\u0275text(72, "NOTES");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(73, PackingFacture_Conditional_73_Template, 2, 1, "span", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 10)(75, "div", 17)(76, "span", 18);
      \u0275\u0275text(77, "TVA #");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 19)(81, "span", 18);
      \u0275\u0275text(82, "TOTAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(85, "div", 30)(86, "div", 34);
      \u0275\u0275text(87, "Paiements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 10)(89, "div", 17)(90, "span", 18);
      \u0275\u0275text(91, "Montant paye");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span");
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 19)(95, "span", 18);
      \u0275\u0275text(96, "Reste a payer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(99, PackingFacture_Conditional_99_Template, 3, 0, "div", 35)(100, PackingFacture_Conditional_100_Template, 2, 0, "span", 36);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "div", 37)(102, "div", 38)(103, "div", 39);
      \u0275\u0275text(104, "Payer la facture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 40);
      \u0275\u0275conditionalCreate(106, PackingFacture_Conditional_106_Template, 5, 1, "div", 41);
      \u0275\u0275conditionalCreate(107, PackingFacture_Conditional_107_Template, 5, 1, "div", 41);
      \u0275\u0275conditionalCreate(108, PackingFacture_Conditional_108_Template, 5, 1, "div", 41);
      \u0275\u0275conditionalCreate(109, PackingFacture_Conditional_109_Template, 2, 0, "div", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 43)(111, "div", 44);
      \u0275\u0275element(112, "div", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(113, "div", 41)(114, "div", 46);
      \u0275\u0275text(115, "Pay\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 47);
      \u0275\u0275text(117);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 41)(119, "div", 46);
      \u0275\u0275text(120, "Reste");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div", 48);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 49)(124, "label", 50);
      \u0275\u0275text(125, "Montant \xE0 encaisser");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p-inputnumber", 51);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFacture_Template_p_inputnumber_ngModelChange_126_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.encaissementMontant, $event) || (ctx.encaissementMontant = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(127, PackingFacture_Conditional_127_Template, 2, 1, "small", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 49)(129, "label", 50);
      \u0275\u0275text(130, "Mode de paiement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "p-select", 53);
      \u0275\u0275twoWayListener("ngModelChange", function PackingFacture_Template_p_select_ngModelChange_131_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.encaissementMode, $event) || (ctx.encaissementMode = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "button", 54);
      \u0275\u0275listener("click", function PackingFacture_Template_button_click_132_listener() {
        return ctx.payer();
      });
      \u0275\u0275elementStart(133, "span", 55);
      \u0275\u0275text(134, "Payer");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("baseZIndex", 1100)("preventOpenDuplicates", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("outlined", true)("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("outlined", true)("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("rounded", true);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("Usine de ", ctx.usineNom);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.usineAdresse ? 17 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.factureDate);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.factureNumero);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.machinisteReference);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.prestataireNomComplet);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.prestatairePhone ? \u0275\u0275pipeBind2(44, 39, ctx.prestatairePhone, "INT") : "-");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.prestataireAdresse);
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate1(" ", ctx.quantiteRouleaux, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.prixUnitaire, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.formatAmount(ctx.totalLigne), " ");
      \u0275\u0275advance(5);
      \u0275\u0275conditional((ctx.packing == null ? null : ctx.packing.notes == null ? null : ctx.packing.notes.trim()) ? 73 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.totalFacture));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.montantPaye));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.resteAPayer));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.versementsAffiches.length > 0 ? 99 : 100);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.totalEspeces > 0 ? 106 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.totalMobile > 0 ? 107 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.totalBanque > 0 ? 108 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.totalEncaisse === 0 ? 109 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.totalEncaisse));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.resteAPayer));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.encaissementMontant);
      \u0275\u0275property("min", 1)("max", ctx.resteAPayer)("invalid", ctx.isEncaissementMontantExceedsReste)("useGrouping", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEncaissementMontantExceedsReste ? 127 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.encaissementMode);
      \u0275\u0275property("options", ctx.modesPaiement);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.canPay)("loading", ctx.encaissementSaving);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    ToastModule,
    Toast,
    ButtonModule,
    ButtonDirective,
    ButtonLabel,
    InputNumberModule,
    InputNumber,
    SelectModule,
    Select,
    TooltipModule,
    Tooltip,
    PhoneFormatPipe
  ], styles: ["\n\n@media print {\n  .packing-facture-actions[_ngcontent-%COMP%], \n   .packing-facture-sidepanel[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .packing-facture-layout[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .packing-facture-main[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  #packing-facture-invoice[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=packing-facture.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PackingFacture, [{
    type: Component,
    args: [{ selector: "app-packing-facture", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ToastModule,
      ButtonModule,
      InputNumberModule,
      SelectModule,
      TooltipModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast position="top-right" appendTo="body" [baseZIndex]="1100" [preventOpenDuplicates]="true" />

<div class="packing-facture-actions w-full flex justify-end mb-4">
    <div class="flex items-center gap-3">
        <button
            pButton
            type="button"
            icon="pi pi-arrows-h"
            severity="success"
            [outlined]="true"
            [rounded]="true"
            pTooltip="Fermer/Ouvrir menu"
            tooltipPosition="top"
            (click)="toggleSidebar()"
        ></button>
        <button
            pButton
            type="button"
            icon="pi pi-download"
            severity="success"
            [outlined]="true"
            [rounded]="true"
            pTooltip="Telecharger la facture"
            tooltipPosition="top"
            (click)="downloadInvoice()"
        ></button>
        <button
            pButton
            type="button"
            icon="pi pi-print"
            severity="success"
            [rounded]="true"
            pTooltip="Imprimer la facture"
            tooltipPosition="top"
            (click)="printInvoice()"
        ></button>
    </div>
</div>

<div class="packing-facture-layout w-full flex flex-col md:flex-row items-start gap-6">
    <div class="packing-facture-main w-full md:flex-1">
        <div id="packing-facture-invoice" class="card py-20 px-12 md:px-20 overflow-auto">
            <div
                class="flex flex-col items-start md:flex-row md:items-center md:justify-between border-b border-surface-200 dark:border-surface-700 pb-8 min-w-max"
            >
                <div class="flex flex-col">
                    <svg
                        width="48"
                        height="50"
                        viewBox="0 0 48 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z"
                            fill="var(--p-primary-color)"
                        />
                    </svg>
                    <div
                        class="my-4 text-4xl font-bold text-surface-900 dark:text-surface-0"
                    >
                        EAU-LA-MAMAN
                    </div>
                    <span class="mb-2">Usine de {{ usineNom }}</span>
                    @if (usineAdresse) {
                        <span>{{ usineAdresse }}</span>
                    }
                </div>
                <div class="flex flex-col mt-8 md:mt-0">
                    <div
                        class="text-2xl font-semibold text-left md:text-right mb-4"
                    >
                        FACTURE PACKING
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-semibold mr-12">DATE</span>
                            <span>{{ factureDate }}</span>
                        </div>
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-semibold mr-12">FACTURE #</span>
                            <span>{{ factureNumero }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold mr-12">No MACHINISTE</span>
                            <span>{{ machinisteReference }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 mb-20 flex flex-col">
                <div class="mb-4 text-2xl font-medium">Prestataire (Machiniste)</div>
                <span class="mb-2">{{ prestataireNomComplet }}</span>
                <span class="mb-2">{{ prestatairePhone ? (prestatairePhone | phoneFormat:'INT') : '-' }}</span>
                <span>{{ prestataireAdresse }}</span>
            </div>

            <div class="overflow-x-auto">
                <table
                    class="w-full"
                    style="border-collapse: collapse; table-layout: auto"
                >
                    <thead>
                        <tr>
                            <th
                                class="text-left font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap"
                            >
                                Description
                            </th>
                            <th
                                class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap px-4"
                            >
                                Quantite
                            </th>
                            <th
                                class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap px-4"
                            >
                                Prix unitaire
                            </th>
                            <th
                                class="text-right font-semibold py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap"
                            >
                                Total ligne
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                class="text-left py-4 border-b border-surface-200 dark:border-surface-700 whitespace-nowrap"
                            >
                                Rouleau
                            </td>
                            <td
                                class="text-right py-4 border-b border-surface-200 dark:border-surface-700 px-4"
                            >
                                {{ quantiteRouleaux }}
                            </td>
                            <td
                                class="text-right py-4 border-b border-surface-200 dark:border-surface-700 px-4"
                            >
                                {{ prixUnitaire }}
                            </td>
                            <td
                                class="text-right py-4 border-b border-surface-200 dark:border-surface-700"
                            >
                                {{ formatAmount(totalLigne) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div
                class="flex flex-col md:flex-row md:items-start md:justify-between mt-20"
            >
                <div class="flex flex-col mb-4 md:mb-0">
                    <div class="font-semibold mb-2">NOTES</div>
                    @if (packing?.notes?.trim()) {
                        <span class="text-surface-600 dark:text-surface-300 max-w-xs text-sm">{{ notes }}</span>
                    }
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-semibold mr-12">TVA #</span>
                        <span>0</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold mr-12">TOTAL</span>
                        <span>{{ formatAmount(totalFacture) }}</span>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col md:flex-row md:items-start md:justify-between mt-20"
            >
                <div class="font-semibold mb-4 md:mb-0">Paiements</div>
                <div class="flex flex-col">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-semibold mr-12">Montant paye</span>
                        <span>{{ formatAmount(montantPaye) }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold mr-12">Reste a payer</span>
                        <span>{{ formatAmount(resteAPayer) }}</span>
                    </div>
                    @if (versementsAffiches.length > 0) {
                        <div class="flex flex-col gap-2 mt-4 pt-3 border-t border-surface-200 dark:border-surface-700">
                            @for (versement of versementsAffiches; track versement.id) {
                                <div class="flex justify-between items-center gap-4 text-sm">
                                    <span class="text-surface-600 dark:text-surface-300">
                                        {{ formatDateDisplay(versement.date_versement) }} - {{ formatVersementMode(versement) }}
                                    </span>
                                    <span class="font-medium text-surface-900 dark:text-surface-0">
                                        {{ formatAmount(versement.montant) }}
                                    </span>
                                </div>
                            }
                        </div>
                    } @else {
                        <span class="mt-3 text-sm text-surface-500 dark:text-surface-400">Aucun verssement</span>
                    }
                </div>
            </div>
        </div>
    </div>

    <div class="packing-facture-sidepanel w-full md:w-80 flex flex-col justify-start items-start gap-6">
        <div class="w-full p-4 md:p-6 rounded-lg border border-surface-200 dark:border-surface-700 flex flex-col justify-start items-start gap-4 md:gap-6 overflow-hidden bg-surface-0 dark:bg-surface-900">
            <div class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Payer la facture</div>
            <div class="w-full py-2 flex flex-col justify-start items-start gap-3 md:gap-4">
                @if (totalEspeces > 0) {
                    <div class="w-full flex justify-start items-start gap-2">
                        <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Espece</div>
                        <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalEspeces) }}</div>
                    </div>
                }
                @if (totalMobile > 0) {
                    <div class="w-full flex justify-start items-start gap-2">
                        <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Mobile</div>
                        <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalMobile) }}</div>
                    </div>
                }
                @if (totalBanque > 0) {
                    <div class="w-full flex justify-start items-start gap-2">
                        <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Banque</div>
                        <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalBanque) }}</div>
                    </div>
                }
                @if (totalEncaisse === 0) {
                    <div class="w-full text-surface-500 dark:text-surface-400 text-sm leading-tight">Aucun versement</div>
                }
            </div>
            <div class="w-full flex justify-start items-start">
                <div class="flex-1 flex flex-col justify-start items-start">
                    <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>
                </div>
            </div>
            <div class="w-full flex justify-start items-start gap-2">
                <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Pay\xE9e</div>
                <div class="text-surface-900 dark:text-surface-0 text-sm md:text-base font-medium leading-tight">{{ formatAmount(totalEncaisse) }}</div>
            </div>
            <div class="w-full flex justify-start items-start gap-2">
                <div class="flex-1 text-surface-700 dark:text-surface-200 text-sm md:text-base font-normal leading-tight">Reste</div>
                <div class="text-orange-500 text-sm md:text-base font-medium leading-tight">{{ formatAmount(resteAPayer) }}</div>
            </div>

            <div class="w-full flex flex-col gap-2">
                <label class="text-surface-900 dark:text-surface-0 text-sm font-medium">Montant \xE0 encaisser</label>
                <p-inputnumber
                    [(ngModel)]="encaissementMontant"
                    [min]="1"
                    [max]="resteAPayer"
                    [invalid]="isEncaissementMontantExceedsReste"
                    [useGrouping]="true"
                    inputStyleClass="w-full"
                    styleClass="w-full"
                    suffix=" FG"
                    placeholder="0"
                />
                @if (isEncaissementMontantExceedsReste) {
                    <small class="text-red-500 text-xs">Le montant ne doit pas depasser le reste a payer ({{ formatAmount(resteAPayer) }}).</small>
                }
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="text-surface-900 dark:text-surface-0 text-sm font-medium">Mode de paiement</label>
                <p-select
                    [(ngModel)]="encaissementMode"
                    [options]="modesPaiement"
                    optionLabel="label"
                    optionValue="value"
                    styleClass="w-full"
                    appendTo="body"
                />
            </div>
        </div>

        <button pButton class="w-full" severity="contrast" [disabled]="!canPay" [loading]="encaissementSaving" (click)="payer()">
            <span pButtonLabel>Payer</span>
        </button>
    </div>
</div>
`, styles: ["/* src/app/pages/packings/packing-facture/packing-facture.scss */\n@media print {\n  .packing-facture-actions,\n  .packing-facture-sidepanel {\n    display: none !important;\n  }\n  .packing-facture-layout {\n    display: block !important;\n  }\n  .packing-facture-main {\n    width: 100% !important;\n  }\n  #packing-facture-invoice {\n    padding: 0 !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=packing-facture.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: LayoutService }, { type: PackingService }, { type: UsineContextService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PackingFacture, { className: "PackingFacture", filePath: "src/app/pages/packings/packing-facture/packing-facture.ts", lineNumber: 36 });
})();

// src/app/pages/packings/packings.routes.ts
var packings_routes_default = [
  {
    path: "",
    component: PackingListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "packings", permissions: ["packings.read"] }
  },
  {
    path: "packings",
    component: PackingListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "packings", permissions: ["packings.read"] }
  },
  {
    path: "packings-new",
    component: PackingNew,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "packings-new", permissions: ["packings.create"] }
  },
  {
    path: "packings-edit/:id",
    component: PackingEdit,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "packings-edit", permissions: ["packings.update"] }
  },
  {
    path: "packings-facture/:id",
    component: PackingFacture,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "packings-facture", permissions: ["packings.read"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  packings_routes_default as default
};
//# sourceMappingURL=chunk-YU53NYRV.js.map
