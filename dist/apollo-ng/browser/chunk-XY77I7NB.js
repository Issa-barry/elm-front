import {
  CommissionDetailDialog,
  CommissionVenteService
} from "./chunk-VZQCMIJV.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-TULSERSG.js";
import {
  StatCardWidget
} from "./chunk-RYZVOHUZ.js";
import "./chunk-X6Z3NY64.js";
import {
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY
} from "./chunk-ZJQGPEDN.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-WA64UDJV.js";
import "./chunk-BGW6FHYT.js";
import "./chunk-V3RXVO6V.js";
import "./chunk-H7UPSY5A.js";
import {
  Toast,
  ToastModule
} from "./chunk-TMFAAIZM.js";
import "./chunk-CZYEBXKQ.js";
import "./chunk-CSVYKJ4F.js";
import {
  Table,
  TableModule
} from "./chunk-YIRPSO3A.js";
import "./chunk-TK4BOLNL.js";
import "./chunk-IVTZJVRN.js";
import "./chunk-WYPIUMEN.js";
import "./chunk-LFNR57IJ.js";
import "./chunk-CVJBRNAF.js";
import "./chunk-SW4MZC6Q.js";
import {
  Tag,
  TagModule
} from "./chunk-AOALFFEO.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-25MJSVSI.js";
import "./chunk-QBTCSFIV.js";
import "./chunk-QRW46MGS.js";
import "./chunk-OWOPR7KK.js";
import "./chunk-LPYK5F7X.js";
import "./chunk-T2TIS5GO.js";
import "./chunk-YTLGTLNQ.js";
import "./chunk-PTG476NB.js";
import {
  HttpParams
} from "./chunk-OP4G3N4V.js";
import {
  Select,
  SelectModule
} from "./chunk-QSEARSIQ.js";
import "./chunk-RZNPFGUI.js";
import "./chunk-6E4MQ4P5.js";
import "./chunk-LXNRGYDD.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-X57GOT3J.js";
import {
  InputText,
  InputTextModule
} from "./chunk-ZJMXLI5D.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BF3NO5XV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-YSXAGVDG.js";
import "./chunk-LSX5YOHQ.js";
import "./chunk-P6BGZM46.js";
import "./chunk-URYLESXH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-4A7IHHEF.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-VB3XNU3Q.js";
import "./chunk-BKCBW4AP.js";
import "./chunk-SCR42GDN.js";
import "./chunk-CBEWEUNZ.js";
import {
  MessageService
} from "./chunk-AGBUVBVL.js";
import {
  CommonModule,
  Location
} from "./chunk-T6X6TYBW.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  HostListener,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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
  ɵɵtwoWayProperty
} from "./chunk-HXF2V74O.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commission-vente-liste/commission-vente-liste.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [10, 20, 50];
var _c2 = () => ({ "min-width": "170px" });
var _c3 = () => [1, 2, 3, 4, 5];
var _c4 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.id;
function CommissionVenteListe_Conditional_1_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-card-widget", 16);
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    \u0275\u0275property("title", card_r3.title)("value", card_r3.value)("subtitle", card_r3.subtitle)("variant", card_r3.variant);
  }
}
function CommissionVenteListe_Conditional_1_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "p-skeleton", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275element(3, "p-skeleton", 30)(4, "p-skeleton", 31);
    \u0275\u0275elementEnd()();
  }
}
function CommissionVenteListe_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommissionVenteListe_Conditional_1_Conditional_14_For_1_Template, 5, 0, "div", 27, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CommissionVenteListe_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune commission trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function CommissionVenteListe_Conditional_1_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 34);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_1_Conditional_16_For_1_Template_article_click_0_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r5));
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38);
    \u0275\u0275element(9, "p-tag", 39);
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 41);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_1_Conditional_16_For_1_Template_button_click_12_listener($event) {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r5));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getAvatarColor(c_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(c_r5), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r5.livreur == null ? null : c_r5.livreur.prenom, " ", c_r5.livreur == null ? null : c_r5.livreur.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (c_r5.commande == null ? null : c_r5.commande.reference) ?? "\u2014", " \xB7 ", (c_r5.vehicule == null ? null : c_r5.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatutLabel(c_r5.statut))("severity", ctx_r1.getStatutSeverity(c_r5.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(c_r5.montant_commission_total));
  }
}
function CommissionVenteListe_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommissionVenteListe_Conditional_1_Conditional_16_For_1_Template, 13, 10, "article", 33, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.commissions());
  }
}
function CommissionVenteListe_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "p-button", 42);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_1_Conditional_17_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadCommissions(ctx_r1.currentPage() - 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 44);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_1_Conditional_17_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadCommissions(ctx_r1.currentPage() + 1));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", ctx_r1.currentPage() === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.currentPage(), " / ", ctx_r1.Math.ceil(ctx_r1.totalRecords() / ctx_r1.perPage()));
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true)("disabled", ctx_r1.currentPage() * ctx_r1.perPage() >= ctx_r1.totalRecords());
  }
}
function CommissionVenteListe_Conditional_1_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "p-button", 46);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_1_ng_template_32_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetMobileFiltersTemp());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 47);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_1_ng_template_32_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyMobileFilters());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function CommissionVenteListe_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "header", 8)(2, "button", 9);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "h1", 11);
    \u0275\u0275text(5, "Commissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMobileFilters());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15);
    \u0275\u0275repeaterCreate(11, CommissionVenteListe_Conditional_1_For_12_Template, 1, 4, "app-stat-card-widget", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275conditionalCreate(14, CommissionVenteListe_Conditional_1_Conditional_14_Template, 2, 1)(15, CommissionVenteListe_Conditional_1_Conditional_15_Template, 4, 0, "div", 18)(16, CommissionVenteListe_Conditional_1_Conditional_16_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, CommissionVenteListe_Conditional_1_Conditional_17_Template, 5, 6, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-drawer", 20);
    \u0275\u0275twoWayListener("visibleChange", function CommissionVenteListe_Conditional_1_Template_p_drawer_visibleChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mobileFilterVisible, $event) || (ctx_r1.mobileFilterVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "div", 21)(20, "div", 22)(21, "label", 23);
    \u0275\u0275text(22, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_1_Template_p_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempFilterStatut, $event) || (ctx_r1.tempFilterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "label", 23);
    \u0275\u0275text(26, "Date d\xE9but");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p-datepicker", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_1_Template_p_datepicker_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempFilterDateDebut, $event) || (ctx_r1.tempFilterDateDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 22)(29, "label", 23);
    \u0275\u0275text(30, "Date fin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p-datepicker", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_1_Template_p_datepicker_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tempFilterDateFin, $event) || (ctx_r1.tempFilterDateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, CommissionVenteListe_Conditional_1_ng_template_32_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.totalRecords(), " r\xE9sultat(s)");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.commissionStatCards);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.loading() ? 14 : ctx_r1.commissions().length === 0 ? 15 : 16);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.totalRecords() > ctx_r1.perPage() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("visible", ctx_r1.mobileFilterVisible);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempFilterStatut);
    \u0275\u0275property("options", ctx_r1.statutOptions)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempFilterDateDebut);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tempFilterDateFin);
    \u0275\u0275property("showClear", true);
  }
}
function CommissionVenteListe_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-card-widget", 16);
  }
  if (rf & 2) {
    const card_r9 = ctx.$implicit;
    \u0275\u0275property("title", card_r9.title)("value", card_r9.value)("subtitle", card_r9.subtitle)("variant", card_r9.variant);
  }
}
function CommissionVenteListe_Conditional_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "p-iconfield", 52);
    \u0275\u0275element(3, "p-inputicon", 53);
    \u0275\u0275elementStart(4, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_2_ng_template_5_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 55)(6, "p-select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatut, $event) || (ctx_r1.filterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_select_onChange_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-datepicker", 57);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_datepicker_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDateDebut, $event) || (ctx_r1.filterDateDebut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-datepicker", 58);
    \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_datepicker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDateFin, $event) || (ctx_r1.filterDateFin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 60);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_button_onClick_11_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 61);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_2_ng_template_5_Template_p_button_onClick_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetFilters());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "span", 62);
    \u0275\u0275text(14, "Commissions sur ventes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchTerm);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c2));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatut);
    \u0275\u0275property("options", ctx_r1.statutOptions);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDateDebut);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDateFin);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.totalRecords(), " r\xE9sultat", ctx_r1.totalRecords() > 1 ? "s" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
  }
}
function CommissionVenteListe_Conditional_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 63);
    \u0275\u0275text(2, "R\xE9f. commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 64);
    \u0275\u0275text(4, "V\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 65);
    \u0275\u0275text(6, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 66);
    \u0275\u0275text(8, "Commission totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 67);
    \u0275\u0275text(10, "Part livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 67);
    \u0275\u0275text(12, "Part propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 68);
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 69);
    \u0275\u0275text(16, "Date \xE9ligibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th", 70);
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_Conditional_2_ng_template_9_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatMontant(c_r12.part_proprietaire), " ");
  }
}
function CommissionVenteListe_Conditional_2_ng_template_9_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_Conditional_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 71);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_2_ng_template_9_Template_tr_click_0_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r12));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 72);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 73);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 74);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 75);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 76)(12, "span", 77);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 78);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 78);
    \u0275\u0275conditionalCreate(17, CommissionVenteListe_Conditional_2_ng_template_9_Conditional_17_Template, 1, 1)(18, CommissionVenteListe_Conditional_2_ng_template_9_Conditional_18_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 80);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 81);
    \u0275\u0275listener("click", function CommissionVenteListe_Conditional_2_ng_template_9_Template_td_click_23_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(24, "p-button", 82);
    \u0275\u0275listener("onClick", function CommissionVenteListe_Conditional_2_ng_template_9_Template_p_button_onClick_24_listener() {
      const c_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r12));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r12.commande == null ? null : c_r12.commande.reference) ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r12.vehicule == null ? null : c_r12.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r12.vehicule == null ? null : c_r12.vehicule.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r12.livreur == null ? null : c_r12.livreur.prenom, " ", c_r12.livreur == null ? null : c_r12.livreur.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(c_r12.montant_commission_total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(c_r12.part_livreur));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.parseFloat(c_r12.part_proprietaire) > 0 ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.getStatutLabel(c_r12.statut))("severity", ctx_r1.getStatutSeverity(c_r12.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(c_r12.eligible_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommissionVenteListe_Conditional_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 83)(2, "div", 84);
    \u0275\u0275element(3, "i", 85);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune commission trouv\xE9e");
    \u0275\u0275elementEnd()()()();
  }
}
function CommissionVenteListe_Conditional_2_ng_template_13_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_Conditional_2_ng_template_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, CommissionVenteListe_Conditional_2_ng_template_13_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c4));
  }
}
function CommissionVenteListe_Conditional_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommissionVenteListe_Conditional_2_ng_template_13_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function CommissionVenteListe_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, CommissionVenteListe_Conditional_2_For_2_Template, 1, 4, "app-stat-card-widget", 16, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "p-table", 49);
    \u0275\u0275listener("onLazyLoad", function CommissionVenteListe_Conditional_2_Template_p_table_onLazyLoad_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275template(5, CommissionVenteListe_Conditional_2_ng_template_5_Template, 15, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, CommissionVenteListe_Conditional_2_ng_template_7_Template, 18, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, CommissionVenteListe_Conditional_2_ng_template_9_Template, 25, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, CommissionVenteListe_Conditional_2_ng_template_11_Template, 6, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, CommissionVenteListe_Conditional_2_ng_template_13_Template, 2, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.commissionStatCards);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.commissions())("loading", ctx_r1.loading())("lazy", true)("paginator", true)("rows", ctx_r1.perPage())("totalRecords", ctx_r1.totalRecords())("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c1))("rowHover", true)("showCurrentPageReport", true);
  }
}
function CommissionVenteListe_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commission-detail-dialog", 86);
    \u0275\u0275listener("visibleChange", function CommissionVenteListe_Conditional_3_Template_app_commission_detail_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detailVisible.set($event));
    })("onVersementDone", function CommissionVenteListe_Conditional_3_Template_app_commission_detail_dialog_onVersementDone_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVersementDone());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("commissionId", ctx_r1.selectedCommissionId())("visible", ctx_r1.detailVisible());
  }
}
var CommissionVenteListe = class _CommissionVenteListe {
  commissionService;
  messageService;
  location = inject(Location);
  commissions = signal([], ...ngDevMode ? [{ debugName: "commissions" }] : []);
  totalRecords = signal(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  perPage = signal(20, ...ngDevMode ? [{ debugName: "perPage" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  // Filtres (propriétés simples pour [(ngModel)] direct — plus fiable avec PrimeNG)
  filterStatut = "";
  filterDateDebut = null;
  filterDateFin = null;
  searchTerm = "";
  // Dialog détail
  selectedCommissionId = signal(null, ...ngDevMode ? [{ debugName: "selectedCommissionId" }] : []);
  detailVisible = signal(false, ...ngDevMode ? [{ debugName: "detailVisible" }] : []);
  isMobile = signal(typeof window !== "undefined" ? window.innerWidth <= 768 : false, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  mobileFilterVisible = false;
  // Valeurs temporaires du drawer (appliquées seulement au clic "Appliquer")
  tempFilterStatut = "";
  tempFilterDateDebut = null;
  tempFilterDateFin = null;
  onResize() {
    this.isMobile.set(window.innerWidth <= 768);
  }
  goBack() {
    this.location.back();
  }
  openMobileFilters() {
    this.tempFilterStatut = this.filterStatut;
    this.tempFilterDateDebut = this.filterDateDebut;
    this.tempFilterDateFin = this.filterDateFin;
    this.mobileFilterVisible = true;
  }
  applyMobileFilters() {
    this.filterStatut = this.tempFilterStatut;
    this.filterDateDebut = this.tempFilterDateDebut;
    this.filterDateFin = this.tempFilterDateFin;
    this.mobileFilterVisible = false;
    this.loadCommissions(1);
  }
  resetMobileFiltersTemp() {
    this.tempFilterStatut = "";
    this.tempFilterDateDebut = null;
    this.tempFilterDateFin = null;
  }
  parseFloat = parseFloat;
  Math = Math;
  AVATAR_COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#ef4444",
    "#14b8a6"
  ];
  statutOptions = [
    { label: "Tous les statuts", value: "" },
    { label: "En attente", value: "en_attente" },
    { label: "\xC9ligible", value: "eligible" },
    { label: "Partiellement vers\xE9e", value: "partiellement_versee" },
    { label: "Vers\xE9e", value: "versee" },
    { label: "Annul\xE9e", value: "annulee" }
  ];
  get commissionStatCards() {
    return [
      {
        title: "Commission totale",
        value: 325e4,
        subtitle: "du 01 au 15 fevrier 2026",
        variant: "primary"
      },
      {
        title: "Part propri\xE9taire",
        value: 125e4,
        subtitle: "du 01 au 15 fevrier 2026",
        variant: "default"
      },
      {
        title: "Part livreur",
        value: 85e4,
        subtitle: "du 01 au 15 fevrier 2026",
        variant: "default"
      }
    ];
  }
  constructor(commissionService, messageService) {
    this.commissionService = commissionService;
    this.messageService = messageService;
  }
  ngOnInit() {
    if (this.isMobile())
      this.loadCommissions(1);
  }
  buildParams(page = 1) {
    let params = new HttpParams().set("page", String(page)).set("per_page", String(this.perPage()));
    if (this.filterStatut)
      params = params.set("statut", this.filterStatut);
    if (this.filterDateDebut)
      params = params.set("date_debut", this.toIsoDate(this.filterDateDebut));
    if (this.filterDateFin)
      params = params.set("date_fin", this.toIsoDate(this.filterDateFin));
    return params;
  }
  toIsoDate(d) {
    return d.toISOString().split("T")[0];
  }
  loadCommissions(page = 1) {
    this.loading.set(true);
    this.commissionService.getAll(this.buildParams(page)).subscribe({
      next: (resp) => {
        this.commissions.set(resp.data?.data ?? []);
        this.totalRecords.set(resp.data?.total ?? 0);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.showApiError(err);
      }
    });
  }
  onPageChange(event) {
    const rows = event.rows ?? 20;
    const page = Math.floor((event.first ?? 0) / rows) + 1;
    this.perPage.set(rows);
    this.currentPage.set(page);
    this.loadCommissions(page);
  }
  applyFilters() {
    this.loadCommissions(1);
  }
  resetFilters() {
    this.filterStatut = "";
    this.filterDateDebut = null;
    this.filterDateFin = null;
    this.loadCommissions(1);
  }
  openDetail(c) {
    this.selectedCommissionId.set(c.id);
    this.detailVisible.set(true);
  }
  onVersementDone() {
    this.loadCommissions(this.currentPage());
  }
  getStatutLabel(s) {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_COMMISSION_SEVERITY[s] ?? "info";
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
    return new Date(d).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  getInitials(c) {
    const p = c.livreur?.prenom?.[0] ?? "";
    const n = c.livreur?.nom?.[0] ?? "";
    return (p + n).toUpperCase() || "?";
  }
  getAvatarColor(c) {
    const key = (c.livreur?.prenom ?? "") + (c.livreur?.nom ?? "");
    let hash = 0;
    for (let i = 0; i < key.length; i++)
      hash = key.charCodeAt(i) + ((hash << 5) - hash);
    return this.AVATAR_COLORS[Math.abs(hash) % this.AVATAR_COLORS.length];
  }
  showApiError(err) {
    const e = err;
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail: e?.error?.message ?? "Une erreur est survenue.",
      life: 5e3
    });
  }
  static \u0275fac = function CommissionVenteListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommissionVenteListe)(\u0275\u0275directiveInject(CommissionVenteService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionVenteListe, selectors: [["app-commission-vente-liste"]], hostBindings: function CommissionVenteListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CommissionVenteListe_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 4, vars: 2, consts: [["footer", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "cv-app"], [3, "commissionId", "visible"], [1, "cv-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "p-button-rounded", "p-button-text", "cv-header__back-btn", 3, "click"], [1, "cv-header__title-wrap"], [1, "cv-header__title"], [1, "cv-header__subtitle"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", 1, "p-button-rounded", "p-button-text", "cv-header__filter-btn", 3, "click"], [1, "cv-scroll"], [1, "grid", "grid-cols-12", "gap-3", "mb-5"], [3, "title", "value", "subtitle", "variant"], [1, "cv-list"], [1, "cv-empty"], [1, "cv-pagination"], ["position", "right", "styleClass", "cv-filter-drawer", "header", "Filtres", 3, "visibleChange", "visible"], [1, "filter-drawer-body"], [1, "filter-group"], [1, "filter-label"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", "fluid", "", 3, "ngModelChange", "ngModel", "options", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Du\u2026", "fluid", "", "appendTo", "body", 3, "ngModelChange", "ngModel", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Au\u2026", "fluid", "", "appendTo", "body", 3, "ngModelChange", "ngModel", "showClear"], [1, "cv-card", "cv-card--skeleton"], ["shape", "circle", "size", "2.75rem"], [1, "cv-card__body"], ["height", "0.9rem", "width", "60%", "styleClass", "mb-2"], ["height", "0.75rem", "width", "40%"], [1, "pi", "pi-percentage"], [1, "cv-card"], [1, "cv-card", 3, "click"], [1, "cv-card__avatar"], [1, "cv-card__name"], [1, "cv-card__meta"], [1, "cv-card__footer"], ["styleClass", "app-table-status", 3, "value", "severity"], [1, "cv-card__montant"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", 1, "p-button-rounded", "p-button-text", "p-button-sm", "cv-card__action", 3, "click"], ["icon", "pi pi-chevron-left", 3, "onClick", "outlined", "disabled"], [1, "cv-pagination__info"], ["icon", "pi pi-chevron-right", 3, "onClick", "outlined", "disabled"], [1, "filter-drawer-footer"], ["label", "R\xE9initialiser", "severity", "secondary", "styleClass", "flex-1", 3, "onClick", "outlined"], ["label", "Appliquer", "styleClass", "flex-1", 3, "onClick"], [1, "card"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "{first} / {last} de {totalRecords} commissions", "styleClass", "p-datatable-sm", 3, "onLazyLoad", "value", "loading", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "rowHover", "showCurrentPageReport"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "xl:flex-row", "xl:items-center", "xl:justify-between", "gap-3"], [1, "w-full", "xl:max-w-sm"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher une commission...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-wrap", "items-center", "gap-2", "xl:justify-end"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "ngModel", "options"], ["dateFormat", "dd/mm/yy", "placeholder", "Du...", "inputStyleClass", "w-32", 3, "ngModelChange", "ngModel", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Au...", "inputStyleClass", "w-32", 3, "ngModelChange", "ngModel", "showClear"], [1, "text-sm", "text-surface-500", "px-1"], ["label", "Filtrer", "icon", "pi pi-filter", 3, "onClick"], ["label", "R\xE9initialiser", "icon", "pi pi-filter-slash", "severity", "secondary", 3, "onClick", "outlined"], [1, "text-xl", "font-semibold"], [2, "width", "18%"], [2, "width", "16%"], [2, "width", "13%"], [1, "text-right", 2, "width", "11%"], [1, "text-right", 2, "width", "10%"], [2, "width", "10%"], [2, "width", "9%"], [2, "width", "3%"], [1, "cursor-pointer", 3, "click"], [1, "font-mono", "text-sm", "font-semibold"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-surface-400"], [1, "text-sm"], [1, "text-right"], [1, "font-semibold", "text-primary"], [1, "text-right", "text-sm"], [1, "text-surface-300"], [1, "text-sm", "text-surface-500"], [3, "click"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Voir le d\xE9tail", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["colspan", "9", 1, "text-center", "py-10"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-percentage", "text-4xl"], [3, "visibleChange", "onVersementDone", "commissionId", "visible"]], template: function CommissionVenteListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275conditionalCreate(1, CommissionVenteListe_Conditional_1_Template, 34, 11, "div", 6)(2, CommissionVenteListe_Conditional_2_Template, 15, 10);
      \u0275\u0275conditionalCreate(3, CommissionVenteListe_Conditional_3_Template, 1, 2, "app-commission-detail-dialog", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isMobile() ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.selectedCommissionId() ? 3 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    TagModule,
    Tag,
    ButtonModule,
    ButtonDirective,
    Button,
    ToastModule,
    Toast,
    SkeletonModule,
    Skeleton,
    SelectModule,
    Select,
    DatePickerModule,
    DatePicker,
    TooltipModule,
    Tooltip,
    InputTextModule,
    InputText,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    CommissionDetailDialog,
    StatCardWidget,
    DrawerModule,
    Drawer
  ], styles: ["\n\n[_nghost-%COMP%] {\n  --cv-primary: #5f6bff;\n  --cv-text: #334155;\n  --cv-muted: #7f8ca3;\n  --cv-card: #ffffff;\n  --cv-border: #e2e8f0;\n  --cv-bg: #f8fafc;\n}\n.cv-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n  height: 100dvh;\n  overflow: hidden;\n  margin-top: calc(-0.25rem - env(safe-area-inset-top));\n  margin-left: -0.875rem;\n  margin-right: -0.875rem;\n  margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n  background: var(--cv-bg);\n  animation: _ngcontent-%COMP%_cvFade 0.22s ease-out;\n}\n.cv-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: calc(0.6rem + env(safe-area-inset-top)) 1rem 0.6rem;\n  background: var(--cv-card);\n  border-bottom: 1px solid var(--cv-border);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.cv-header__title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.cv-header__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--cv-text);\n}\n.cv-header__subtitle[_ngcontent-%COMP%] {\n  margin: 0.1rem 0 0;\n  font-size: 0.78rem;\n  color: var(--cv-muted);\n}\n.cv-header__back-btn[_ngcontent-%COMP%] {\n  width: 2.25rem !important;\n  height: 2.25rem !important;\n  border-radius: 50% !important;\n  color: var(--cv-text) !important;\n  flex-shrink: 0;\n}\n.cv-header__filter-btn[_ngcontent-%COMP%] {\n  width: 2.25rem !important;\n  height: 2.25rem !important;\n  border-radius: 50% !important;\n  color: var(--cv-primary) !important;\n  background: rgba(95, 107, 255, 0.1) !important;\n}\n.cv-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 0.75rem 0.875rem calc(4rem + env(safe-area-inset-bottom));\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.filter-drawer-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--cv-muted);\n}\n.filter-drawer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding-top: 0.25rem;\n}\n.cv-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.cv-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  background: var(--cv-card);\n  border: 1px solid var(--cv-border);\n  border-radius: 0.875rem;\n  padding: 0.875rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: box-shadow 0.2s ease;\n}\n.cv-card[_ngcontent-%COMP%]:active {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.cv-card--skeleton[_ngcontent-%COMP%] {\n  min-height: 5rem;\n  cursor: default;\n  box-shadow: none;\n}\n.cv-card__avatar[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  min-width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cv-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cv-card__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--cv-text);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-card__meta[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--cv-muted);\n  margin-top: 0.15rem;\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.cv-card__montant[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--cv-primary);\n  margin-left: auto;\n}\n.cv-card__action[_ngcontent-%COMP%] {\n  width: 2rem !important;\n  height: 2rem !important;\n  flex-shrink: 0;\n}\n.cv-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 2.5rem 1rem;\n  background: var(--cv-card);\n  border: 1px dashed var(--cv-border);\n  border-radius: 0.875rem;\n  color: var(--cv-muted);\n  font-size: 0.9rem;\n}\n.cv-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.cv-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding-bottom: 0.5rem;\n}\n.cv-pagination__info[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--cv-muted);\n}\n@keyframes _ngcontent-%COMP%_cvFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.app-dark[_nghost-%COMP%], .app-dark   [_nghost-%COMP%] {\n  --cv-primary: var(--p-primary-400);\n  --cv-text: var(--p-surface-100);\n  --cv-muted: var(--p-surface-400);\n  --cv-card: var(--p-surface-800);\n  --cv-border: var(--p-surface-600);\n  --cv-bg: var(--p-surface-950);\n}\n/*# sourceMappingURL=commission-vente-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionVenteListe, [{
    type: Component,
    args: [{ selector: "app-commission-vente-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      TagModule,
      ButtonModule,
      ToastModule,
      SkeletonModule,
      SelectModule,
      DatePickerModule,
      TooltipModule,
      InputTextModule,
      IconFieldModule,
      InputIconModule,
      CommissionDetailDialog,
      StatCardWidget,
      DrawerModule
    ], providers: [MessageService], template: `<p-toast />

@if (isMobile()) {

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     MOBILE  (\u2264 768 px)
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="cv-app">

  <!-- \u2500\u2500 Header sticky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="cv-header">
    <button
      pButton pRipple
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text cv-header__back-btn"
      (click)="goBack()"
    ></button>
    <div class="cv-header__title-wrap">
      <h1 class="cv-header__title">Commissions</h1>
      <p class="cv-header__subtitle">{{ totalRecords() }} r\xE9sultat(s)</p>
    </div>
    <button
      pButton pRipple
      icon="pi pi-filter"
      class="p-button-rounded p-button-text cv-header__filter-btn"
      (click)="openMobileFilters()"
    ></button>
  </header>

  <!-- \u2500\u2500 Zone scrollable \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cv-scroll">

    <!-- Stats widget -->
    <div class="grid grid-cols-12 gap-3 mb-5">
      @for (card of commissionStatCards; track card.title) {
        <app-stat-card-widget
          [title]="card.title"
          [value]="card.value"
          [subtitle]="card.subtitle"
          [variant]="card.variant"
        />
      }
    </div>


    <!-- Liste de cartes -->
    <div class="cv-list">

      @if (loading()) {
        @for (_ of [1, 2, 3, 4]; track $index) {
          <div class="cv-card cv-card--skeleton">
            <p-skeleton shape="circle" size="2.75rem" />
            <div class="cv-card__body">
              <p-skeleton height="0.9rem" width="60%" styleClass="mb-2" />
              <p-skeleton height="0.75rem" width="40%" />
            </div>
          </div>
        }
      } @else if (commissions().length === 0) {
        <div class="cv-empty">
          <i class="pi pi-percentage"></i>
          <span>Aucune commission trouv\xE9e</span>
        </div>
      } @else {
        @for (c of commissions(); track c.id) {
          <article class="cv-card" (click)="openDetail(c)">
            <div class="cv-card__avatar" [style.background]="getAvatarColor(c)">
              {{ getInitials(c) }}
            </div>
            <div class="cv-card__body">
              <div class="cv-card__name">{{ c.livreur?.prenom }} {{ c.livreur?.nom }}</div>
              <div class="cv-card__meta">{{ c.commande?.reference ?? '\u2014' }} \xB7 {{ c.vehicule?.nom_vehicule ?? '\u2014' }}</div>
              <div class="cv-card__footer">
                <p-tag [value]="getStatutLabel(c.statut)" [severity]="getStatutSeverity(c.statut)" styleClass="app-table-status" />
                <span class="cv-card__montant">{{ formatMontant(c.montant_commission_total) }}</span>
                <button pButton pRipple icon="pi pi-eye"
                  class="p-button-rounded p-button-text p-button-sm cv-card__action"
                  (click)="$event.stopPropagation(); openDetail(c)"></button>
              </div>
            </div>
          </article>
        }
      }

    </div>

    <!-- Pagination mobile -->
    @if (totalRecords() > perPage()) {
      <div class="cv-pagination">
        <p-button icon="pi pi-chevron-left" [outlined]="true"
          [disabled]="currentPage() === 1"
          (onClick)="loadCommissions(currentPage() - 1)" />
        <span class="cv-pagination__info">{{ currentPage() }} / {{ Math.ceil(totalRecords() / perPage()) }}</span>
        <p-button icon="pi pi-chevron-right" [outlined]="true"
          [disabled]="currentPage() * perPage() >= totalRecords()"
          (onClick)="loadCommissions(currentPage() + 1)" />
      </div>
    }

  </div><!-- /cv-scroll -->
  <!-- \u2500\u2500 Drawer filtres \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <p-drawer
    [(visible)]="mobileFilterVisible"
    position="right"
    styleClass="cv-filter-drawer"
    header="Filtres"
  >
    <div class="filter-drawer-body">

      <div class="filter-group">
        <label class="filter-label">Statut</label>
        <p-select
          [(ngModel)]="tempFilterStatut"
          [options]="statutOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Tous les statuts"
          [showClear]="true"
          fluid
        />
      </div>

      <div class="filter-group">
        <label class="filter-label">Date d\xE9but</label>
        <p-datepicker [(ngModel)]="tempFilterDateDebut" dateFormat="dd/mm/yy" [showClear]="true" placeholder="Du\u2026" fluid appendTo="body" />
      </div>

      <div class="filter-group">
        <label class="filter-label">Date fin</label>
        <p-datepicker [(ngModel)]="tempFilterDateFin" dateFormat="dd/mm/yy" [showClear]="true" placeholder="Au\u2026" fluid appendTo="body" />
      </div>

    </div>

    <ng-template #footer>
      <div class="filter-drawer-footer">
        <p-button
          label="R\xE9initialiser"
          severity="secondary"
          [outlined]="true"
          (onClick)="resetMobileFiltersTemp()"
          styleClass="flex-1"
        />
        <p-button
          label="Appliquer"
          (onClick)="applyMobileFilters()"
          styleClass="flex-1"
        />
      </div>
    </ng-template>
  </p-drawer>

</div><!-- /cv-app -->

} @else {

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
     DESKTOP
     \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="grid grid-cols-12 gap-3 mb-5">
  @for (card of commissionStatCards; track card.title) {
    <app-stat-card-widget
      [title]="card.title"
      [value]="card.value"
      [subtitle]="card.subtitle"
      [variant]="card.variant"
    />
  }
</div>

<div class="card">
  <p-table
    [value]="commissions()"
    [loading]="loading()"
    [lazy]="true"
    (onLazyLoad)="onPageChange($event)"
    [paginator]="true"
    [rows]="perPage()"
    [totalRecords]="totalRecords()"
    [rowsPerPageOptions]="[10, 20, 50]"
    [rowHover]="true"
    responsiveLayout="scroll"
    currentPageReportTemplate="{first} / {last} de {totalRecords} commissions"
    [showCurrentPageReport]="true"
    styleClass="p-datatable-sm"
  >
    <ng-template #caption>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3">
          <p-iconfield class="w-full xl:max-w-sm">
            <p-inputicon styleClass="pi pi-search" />
            <input
              pInputText
              type="text"
              class="w-full"
              [(ngModel)]="searchTerm"
              placeholder="Rechercher une commission..."
            />
          </p-iconfield>

          <div class="flex flex-wrap items-center gap-2 xl:justify-end">
            <p-select
              [(ngModel)]="filterStatut"
              [options]="statutOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Tous les statuts"
              [style]="{ 'min-width': '170px' }"
              (onChange)="applyFilters()"
            />
            <p-datepicker
              [(ngModel)]="filterDateDebut"
              dateFormat="dd/mm/yy"
              [showClear]="true"
              placeholder="Du..."
              inputStyleClass="w-32"
            />
            <p-datepicker
              [(ngModel)]="filterDateFin"
              dateFormat="dd/mm/yy"
              [showClear]="true"
              placeholder="Au..."
              inputStyleClass="w-32"
            />
            <span class="text-sm text-surface-500 px-1">
              {{ totalRecords() }} r\xE9sultat{{ totalRecords() > 1 ? 's' : '' }}
            </span>
            <p-button label="Filtrer" icon="pi pi-filter" (onClick)="applyFilters()" />
            <p-button
              label="R\xE9initialiser"
              icon="pi pi-filter-slash"
              [outlined]="true"
              severity="secondary"
              (onClick)="resetFilters()"
            />
          </div>
        </div>

        <span class="text-xl font-semibold">Commissions sur ventes</span>
      </div>
    </ng-template>

    <ng-template #header>
      <tr>
        <th style="width:18%">R\xE9f. commande</th>
        <th style="width:16%">V\xE9hicule</th>
        <th style="width:13%">Livreur</th>
        <th style="width:11%" class="text-right">Commission totale</th>
        <th style="width:10%" class="text-right">Part livreur</th>
        <th style="width:10%" class="text-right">Part propri\xE9taire</th>
        <th style="width:10%">Statut</th>
        <th style="width:9%">Date \xE9ligibilit\xE9</th>
        <th style="width:3%"></th>
      </tr>
    </ng-template>

    <ng-template #body let-c>
      <tr class="cursor-pointer" (click)="openDetail(c)">
        <td><span class="font-mono text-sm font-semibold">{{ c.commande?.reference ?? '\u2014' }}</span></td>
        <td>
          <div class="font-medium text-sm">{{ c.vehicule?.nom_vehicule }}</div>
          <code class="text-xs text-surface-400">{{ c.vehicule?.immatriculation }}</code>
        </td>
        <td class="text-sm">{{ c.livreur?.prenom }} {{ c.livreur?.nom }}</td>
        <td class="text-right">
          <span class="font-semibold text-primary">{{ formatMontant(c.montant_commission_total) }}</span>
        </td>
        <td class="text-right text-sm">{{ formatMontant(c.part_livreur) }}</td>
        <td class="text-right text-sm">
          @if (parseFloat(c.part_proprietaire) > 0) {
            {{ formatMontant(c.part_proprietaire) }}
          } @else {
            <span class="text-surface-300">\u2014</span>
          }
        </td>
        <td>
          <p-tag [value]="getStatutLabel(c.statut)" [severity]="getStatutSeverity(c.statut)" styleClass="app-table-status" />
        </td>
        <td class="text-sm text-surface-500">{{ formatDate(c.eligible_at) }}</td>
        <td (click)="$event.stopPropagation()">
          <p-button icon="pi pi-eye" severity="info" [text]="true" [rounded]="true"
                    pTooltip="Voir le d\xE9tail" tooltipPosition="top"
                    (onClick)="openDetail(c)" />
        </td>
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td colspan="9" class="text-center py-10">
          <div class="flex flex-col items-center gap-3 text-surface-500">
            <i class="pi pi-percentage text-4xl"></i>
            <span>Aucune commission trouv\xE9e</span>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template #loadingbody>
      @for (_ of [1, 2, 3, 4, 5]; track $index) {
        <tr>
          @for (__ of [1, 2, 3, 4, 5, 6, 7, 8, 9]; track $index) {
            <td><p-skeleton /></td>
          }
        </tr>
      }
    </ng-template>

  </p-table>

</div>

} <!-- end desktop -->

@if (selectedCommissionId()) {
  <app-commission-detail-dialog
    [commissionId]="selectedCommissionId()!"
    [visible]="detailVisible()"
    (visibleChange)="detailVisible.set($event)"
    (onVersementDone)="onVersementDone()"
  />
}
`, styles: ["/* src/app/pages/ventes/commission-vente-liste/commission-vente-liste.scss */\n:host {\n  --cv-primary: #5f6bff;\n  --cv-text: #334155;\n  --cv-muted: #7f8ca3;\n  --cv-card: #ffffff;\n  --cv-border: #e2e8f0;\n  --cv-bg: #f8fafc;\n}\n.cv-app {\n  display: flex;\n  flex-direction: column;\n  min-height: 100dvh;\n  height: 100dvh;\n  overflow: hidden;\n  margin-top: calc(-0.25rem - env(safe-area-inset-top));\n  margin-left: -0.875rem;\n  margin-right: -0.875rem;\n  margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n  background: var(--cv-bg);\n  animation: cvFade 0.22s ease-out;\n}\n.cv-header {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: calc(0.6rem + env(safe-area-inset-top)) 1rem 0.6rem;\n  background: var(--cv-card);\n  border-bottom: 1px solid var(--cv-border);\n  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 30;\n}\n.cv-header__title-wrap {\n  display: flex;\n  flex-direction: column;\n}\n.cv-header__title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: var(--cv-text);\n}\n.cv-header__subtitle {\n  margin: 0.1rem 0 0;\n  font-size: 0.78rem;\n  color: var(--cv-muted);\n}\n.cv-header__back-btn {\n  width: 2.25rem !important;\n  height: 2.25rem !important;\n  border-radius: 50% !important;\n  color: var(--cv-text) !important;\n  flex-shrink: 0;\n}\n.cv-header__filter-btn {\n  width: 2.25rem !important;\n  height: 2.25rem !important;\n  border-radius: 50% !important;\n  color: var(--cv-primary) !important;\n  background: rgba(95, 107, 255, 0.1) !important;\n}\n.cv-scroll {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 0.75rem 0.875rem calc(4rem + env(safe-area-inset-bottom));\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.filter-drawer-body {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  padding: 0.5rem 0;\n}\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.filter-label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--cv-muted);\n}\n.filter-drawer-footer {\n  display: flex;\n  gap: 0.75rem;\n  padding-top: 0.25rem;\n}\n.cv-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.cv-card {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  background: var(--cv-card);\n  border: 1px solid var(--cv-border);\n  border-radius: 0.875rem;\n  padding: 0.875rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: box-shadow 0.2s ease;\n}\n.cv-card:active {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.cv-card--skeleton {\n  min-height: 5rem;\n  cursor: default;\n  box-shadow: none;\n}\n.cv-card__avatar {\n  width: 2.75rem;\n  min-width: 2.75rem;\n  height: 2.75rem;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cv-card__body {\n  flex: 1;\n  min-width: 0;\n}\n.cv-card__name {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--cv-text);\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-card__meta {\n  font-size: 0.82rem;\n  color: var(--cv-muted);\n  margin-top: 0.15rem;\n  font-family: monospace;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-card__footer {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.cv-card__montant {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--cv-primary);\n  margin-left: auto;\n}\n.cv-card__action {\n  width: 2rem !important;\n  height: 2rem !important;\n  flex-shrink: 0;\n}\n.cv-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 2.5rem 1rem;\n  background: var(--cv-card);\n  border: 1px dashed var(--cv-border);\n  border-radius: 0.875rem;\n  color: var(--cv-muted);\n  font-size: 0.9rem;\n}\n.cv-empty i {\n  font-size: 2rem;\n}\n.cv-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding-bottom: 0.5rem;\n}\n.cv-pagination__info {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--cv-muted);\n}\n@keyframes cvFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host-context(.app-dark) {\n  --cv-primary: var(--p-primary-400);\n  --cv-text: var(--p-surface-100);\n  --cv-muted: var(--p-surface-400);\n  --cv-card: var(--p-surface-800);\n  --cv-border: var(--p-surface-600);\n  --cv-bg: var(--p-surface-950);\n}\n/*# sourceMappingURL=commission-vente-liste.css.map */\n"] }]
  }], () => [{ type: CommissionVenteService }, { type: MessageService }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionVenteListe, { className: "CommissionVenteListe", filePath: "src/app/pages/ventes/commission-vente-liste/commission-vente-liste.ts", lineNumber: 61 });
})();
export {
  CommissionVenteListe
};
//# sourceMappingURL=chunk-XY77I7NB.js.map
