import {
  FactureLivraisonService
} from "./chunk-UC7NNZHT.js";
import {
  ToolbarModule
} from "./chunk-SNFY5X5Q.js";
import {
  MODE_PAIEMENT_OPTIONS,
  STATUT_FACTURE_LABELS,
  STATUT_FACTURE_SEVERITY
} from "./chunk-6AQT3D7V.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
  Router
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-XO5M4PM6.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-FF4N4CLH.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import {
  Tag,
  TagModule
} from "./chunk-24JO5SYM.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-MTEYTWK3.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-IEELAHW7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-7GQXFRTV.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import "./chunk-CSVYKJ4F.js";
import "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-GNGM6ZBM.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LK4MJDWN.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  Button,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵreference,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-liste/facture-vente-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["reference", "vehicule.nom_vehicule", "vehicule.immatriculation", "vehicule.livreurPrincipal.nom", "vehicule.livreurPrincipal.prenom", "vehicule.livreurPrincipal.phone", "vehicule.livreur_principal.nom", "vehicule.livreur_principal.prenom", "vehicule.livreur_principal.phone", "statut_facture"];
var _c2 = () => [1, 2, 3];
var _c3 = () => ({ "min-width": "160px" });
var _c4 = () => [1, 2, 3, 4, 5];
var _c5 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c6 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function FactureVenteListe_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function FactureVenteListe_For_9_Template_button_click_0_listener() {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedStatut = opt_r3.value;
      return \u0275\u0275resetView(ctx_r3.onStatutChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r3.selectedStatut === opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function FactureVenteListe_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "p-skeleton", 21);
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FactureVenteListe_Conditional_12_For_1_Template, 2, 0, "div", 20, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function FactureVenteListe_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275elementStart(2, "span", 23);
    \u0275\u0275text(3, "Aucune facture de vente");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteListe_Conditional_14_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", f_r6.vehicule.nom_vehicule, " \xB7 ", f_r6.vehicule.immatriculation, " ");
  }
}
function FactureVenteListe_Conditional_14_For_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 39);
    \u0275\u0275listener("onClick", function FactureVenteListe_Conditional_14_For_1_Conditional_29_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const f_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEncaissementDialog(f_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function FactureVenteListe_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 20)(1, "div", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, FactureVenteListe_Conditional_14_For_1_Conditional_5_Template, 2, 2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "div", 29)(10, "span", 30);
    \u0275\u0275text(11, "Brut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 29)(15, "span", 30);
    \u0275\u0275text(16, "Encaiss\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 29)(20, "span", 30);
    \u0275\u0275text(21, "Restant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 33);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 34)(25, "span", 35);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 36)(28, "p-button", 37);
    \u0275\u0275listener("onClick", function FactureVenteListe_Conditional_14_For_1_Template_p_button_onClick_28_listener() {
      const f_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goDetail(f_r6.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, FactureVenteListe_Conditional_14_For_1_Conditional_29_Template, 1, 2, "p-button", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r6.reference);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r6.vehicule ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("fv-badge fv-badge--", f_r6.statut_facture));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getStatutLabel(f_r6.statut_facture));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r6.montant_brut));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r6.montant_encaisse));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r6.montant_restant));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatDateDisplay(f_r6.created_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.canAddEncaissement(f_r6) ? 29 : -1);
  }
}
function FactureVenteListe_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FactureVenteListe_Conditional_14_For_1_Template, 30, 13, "article", 20, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r3.factures());
  }
}
function FactureVenteListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p-iconfield", 41);
    \u0275\u0275element(2, "p-inputicon", 42);
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("input", function FactureVenteListe_ng_template_18_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      const dt_r9 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(ctx_r3.onGlobalFilter(dt_r9, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44)(5, "p-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function FactureVenteListe_ng_template_18_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedStatut, $event) || (ctx_r3.selectedStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function FactureVenteListe_ng_template_18_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onStatutChange());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c3));
    \u0275\u0275property("options", ctx_r3.statutOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedStatut);
    \u0275\u0275property("showClear", true);
  }
}
function FactureVenteListe_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 46)(2, "span", 47);
    \u0275\u0275text(3, "Facture ");
    \u0275\u0275element(4, "p-sortIcon", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 49)(6, "span", 47);
    \u0275\u0275text(7, "V\xE9hicule ");
    \u0275\u0275element(8, "p-sortIcon", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 51)(10, "span", 47);
    \u0275\u0275text(11, "Livreur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 52)(13, "span", 47);
    \u0275\u0275text(14, "Montant brut ");
    \u0275\u0275element(15, "p-sortIcon", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 54)(17, "span", 47);
    \u0275\u0275text(18, "Encaiss\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 55)(20, "span", 47);
    \u0275\u0275text(21, "Restant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "th", 56)(23, "span", 47);
    \u0275\u0275text(24, "Statut ");
    \u0275\u0275element(25, "p-sortIcon", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "th", 58);
    \u0275\u0275text(27, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function FactureVenteListe_ng_template_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 66);
    \u0275\u0275element(2, "i", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(f_r11.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.vehicule.immatriculation);
  }
}
function FactureVenteListe_ng_template_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_ng_template_22_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const lv_r12 = \u0275\u0275readContextLet(8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, lv_r12.phone));
  }
}
function FactureVenteListe_ng_template_22_Conditional_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_ng_template_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, FactureVenteListe_ng_template_22_Conditional_9_Conditional_2_Template, 3, 3, "div", 70)(3, FactureVenteListe_ng_template_22_Conditional_9_Conditional_3_Template, 2, 0, "span", 60);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const lv_r12 = \u0275\u0275readContextLet(8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", lv_r12.prenom, " ", lv_r12.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r12.phone ? 2 : 3);
  }
}
function FactureVenteListe_ng_template_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_ng_template_22_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 39);
    \u0275\u0275listener("onClick", function FactureVenteListe_ng_template_22_Conditional_24_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const f_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEncaissementDialog(f_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function FactureVenteListe_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 59);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275conditionalCreate(5, FactureVenteListe_ng_template_22_Conditional_5_Template, 8, 2, "div", 47)(6, FactureVenteListe_ng_template_22_Conditional_6_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275declareLet(8);
    \u0275\u0275conditionalCreate(9, FactureVenteListe_ng_template_22_Conditional_9_Template, 4, 3)(10, FactureVenteListe_ng_template_22_Conditional_10_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 61);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 62);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 63);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 65)(23, "p-button", 37);
    \u0275\u0275listener("onClick", function FactureVenteListe_ng_template_22_Template_p_button_onClick_23_listener() {
      const f_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goDetail(f_r11.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, FactureVenteListe_ng_template_22_Conditional_24_Template, 1, 2, "p-button", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r11.reference);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(f_r11.vehicule ? 5 : 6);
    \u0275\u0275advance(3);
    const lv_r14 = \u0275\u0275storeLet((f_r11.vehicule == null ? null : f_r11.vehicule.livreurPrincipal) ?? (f_r11.vehicule == null ? null : f_r11.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(lv_r14 ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r11.montant_brut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r11.montant_encaisse));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(f_r11.montant_restant));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.getStatutLabel(f_r11.statut_facture))("severity", ctx_r3.getStatutSeverity(f_r11.statut_facture));
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.canAddEncaissement(f_r11) ? 24 : -1);
  }
}
function FactureVenteListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71)(2, "div", 72);
    \u0275\u0275element(3, "i", 22);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune facture de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 73);
    \u0275\u0275text(7, "Les factures sont g\xE9n\xE9r\xE9es automatiquement lors de la cr\xE9ation d'une commande.");
    \u0275\u0275elementEnd()()()();
  }
}
function FactureVenteListe_ng_template_26_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_ng_template_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, FactureVenteListe_ng_template_26_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c5));
  }
}
function FactureVenteListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FactureVenteListe_ng_template_26_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c4));
  }
}
function FactureVenteListe_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "span");
    \u0275\u0275text(2, "Restant \xE0 payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 93);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(ctx_r3.selectedFacture.montant_restant));
  }
}
function FactureVenteListe_Conditional_28_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 85);
    \u0275\u0275text(1, "Montant requis (minimum 1 GNF)");
    \u0275\u0275elementEnd();
  }
}
function FactureVenteListe_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 74);
    \u0275\u0275listener("click", function FactureVenteListe_Conditional_28_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 75)(3, "div", 76)(4, "h2", 77);
    \u0275\u0275text(5, "Enregistrer un encaissement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-button", 78);
    \u0275\u0275listener("onClick", function FactureVenteListe_Conditional_28_Template_p_button_onClick_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.encaissementDialogVisible = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 79);
    \u0275\u0275conditionalCreate(8, FactureVenteListe_Conditional_28_Conditional_8_Template, 5, 1, "div", 80);
    \u0275\u0275elementStart(9, "form", 81);
    \u0275\u0275listener("ngSubmit", function FactureVenteListe_Conditional_28_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveEncaissement());
    });
    \u0275\u0275elementStart(10, "div", 82)(11, "div", 83)(12, "label", 84);
    \u0275\u0275text(13, "Montant (GNF) ");
    \u0275\u0275elementStart(14, "span", 85);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "p-inputnumber", 86);
    \u0275\u0275conditionalCreate(17, FactureVenteListe_Conditional_28_Conditional_17_Template, 2, 0, "small", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 83)(19, "label", 84);
    \u0275\u0275text(20, "Mode de paiement ");
    \u0275\u0275elementStart(21, "span", 85);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "p-select", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 83)(25, "label", 84);
    \u0275\u0275text(26, "Date d'encaissement ");
    \u0275\u0275elementStart(27, "span", 85);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "p-datepicker", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 83)(31, "label", 84);
    \u0275\u0275text(32, "Note ");
    \u0275\u0275elementStart(33, "span", 89);
    \u0275\u0275text(34, "(optionnel)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(35, "input", 90);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 91)(37, "p-button", 92);
    \u0275\u0275listener("onClick", function FactureVenteListe_Conditional_28_Template_p_button_onClick_37_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSaveEncaissement());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedFacture ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.encaissementForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("min", 1)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(11, _c6, ctx_r3.isInvalid("montant")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isInvalid("montant") ? 17 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx_r3.modePaiementOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("showIcon", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("loading", ctx_r3.encaissementSaving);
  }
}
var FactureVenteListe = class _FactureVenteListe {
  fb;
  factureService;
  authService;
  messageService;
  router;
  factures = signal([], ...ngDevMode ? [{ debugName: "factures" }] : []);
  loading = false;
  encaissementSaving = false;
  encaissementDialogVisible = false;
  encaissementForm;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  selectedFacture = null;
  get canEncaissement() {
    return this.authService.hasPermission("encaissements.create");
  }
  statutOptions = [
    { label: "Toutes", value: null },
    { label: "Impay\xE9es", value: "impayee" },
    { label: "Partielles", value: "partiel" },
    { label: "Pay\xE9es", value: "payee" },
    { label: "Annul\xE9es", value: "annulee" }
  ];
  selectedStatut = null;
  constructor(fb, factureService, authService, messageService, router) {
    this.fb = fb;
    this.factureService = factureService;
    this.authService = authService;
    this.messageService = messageService;
    this.router = router;
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  ngOnInit() {
    this.initEncaissementForm();
    this.loadFactures();
  }
  initEncaissementForm() {
    this.encaissementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
  }
  loadFactures() {
    this.loading = true;
    const params = this.selectedStatut ? { statut: this.selectedStatut } : void 0;
    this.factureService.getFactures(params).subscribe({
      next: (resp) => {
        this.factures.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "charger les factures");
      }
    });
  }
  onStatutChange() {
    this.loadFactures();
  }
  goDetail(id) {
    this.router.navigate(["/ventes/factures-vente-detail3/", id]);
  }
  // ── Encaissement ──────────────────────────────────────────────────────
  canAddEncaissement(f) {
    return this.canEncaissement && f.statut_facture !== "payee" && f.statut_facture !== "annulee";
  }
  openEncaissementDialog(facture) {
    this.selectedFacture = facture;
    this.initEncaissementForm();
    this.encaissementForm.patchValue({ montant: facture.montant_restant });
    this.encaissementDialogVisible = true;
  }
  isInvalid(name) {
    const c = this.encaissementForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  onSaveEncaissement() {
    this.encaissementForm.markAllAsTouched();
    if (this.encaissementForm.invalid || !this.selectedFacture || this.encaissementSaving)
      return;
    const v = this.encaissementForm.value;
    const dto = {
      facture_vente_id: this.selectedFacture.id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: this.formatDateIso(v.date_encaissement),
      note: v.note || void 0
    };
    this.encaissementSaving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.encaissementSaving = false;
        this.encaissementDialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Encaissement enregistr\xE9.",
          life: 3e3
        });
        this.loadFactures();
      },
      error: (err) => {
        this.encaissementSaving = false;
        this.showApiError(err, "enregistrer l'encaissement");
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────────────────
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_FACTURE_SEVERITY[s] ?? "info";
  }
  formatDateDisplay(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR");
  }
  formatDateIso(d) {
    if (!d)
      return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toISOString().split("T")[0];
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  showApiError(err, action) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat();
      msgs.forEach((m) => this.messageService.add({ severity: "error", summary: "Erreur de validation", detail: m, life: 5e3 }));
      return;
    }
    const summaryMap = {
      401: "Session expir\xE9e",
      403: "Acc\xE8s refus\xE9",
      404: "Introuvable",
      409: "Conflit",
      0: "Serveur inaccessible"
    };
    const detailMap = {
      401: "Votre session a expir\xE9. Veuillez vous reconnecter.",
      403: `Vous n'avez pas la permission de ${action}.`,
      404: "La ressource demand\xE9e est introuvable.",
      0: "Impossible de joindre le serveur. V\xE9rifiez votre connexion r\xE9seau."
    };
    this.messageService.add({
      severity: err.status === 409 ? "warn" : "error",
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ""}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5e3
    });
  }
  static \u0275fac = function FactureVenteListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteListe)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteListe, selectors: [["app-facture-vente-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 29, vars: 14, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "fv-liste-page-wrap"], [1, "fv-liste-mobile-header"], ["icon", "pi pi-arrow-left", "styleClass", "fv-liste-mobile-back", "aria-label", "Retour", 3, "onClick", "text", "rounded"], [1, "fv-liste-mobile-title"], [2, "width", "2.5rem", "flex-shrink", "0"], [1, "fv-mobile-filters"], ["type", "button", 1, "fv-filter-chip", 3, "is-active"], [1, "fv-mobile-scroll"], [1, "fv-factures-mobile"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500", "py-12"], [1, "card", "fv-tableau-desktop"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "{first} / {last} de {totalRecords} factures", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields", "rowHover", "showCurrentPageReport"], [1, "fixed", "inset-0", "z-50"], ["type", "button", 1, "fv-filter-chip", 3, "click"], [1, "fv-facture-card"], ["height", "5.5rem"], [1, "pi", "pi-file-invoice", "text-4xl"], [1, "text-sm"], [1, "fv-facture-card__top"], [2, "min-width", "0"], [1, "fv-facture-card__ref"], [1, "fv-facture-card__vehicule"], [1, "fv-facture-card__amounts"], [1, "fv-amount-item"], [1, "fv-amount-label"], [1, "fv-amount-value"], [1, "fv-amount-value", "fv-amount-value--success"], [1, "fv-amount-value", "fv-amount-value--danger"], [1, "fv-facture-card__footer"], [1, "text-xs", "text-surface-400"], [1, "fv-facture-card__actions"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Voir d\xE9tail", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["icon", "pi pi-wallet", "severity", "success", "pTooltip", "Encaisser", "tooltipPosition", "top", 3, "text", "rounded"], ["icon", "pi pi-wallet", "severity", "success", "pTooltip", "Encaisser", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher une facture...", 1, "w-full", 3, "input"], [1, "flex", "gap-2", "w-full", "sm:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["pSortableColumn", "reference", 1, "white-space-nowrap", 2, "width", "18%"], [1, "flex", "items-center", "gap-2"], ["field", "reference"], ["pSortableColumn", "vehicule.nom_vehicule", 1, "white-space-nowrap", 2, "width", "16%"], ["field", "vehicule.nom_vehicule"], [1, "white-space-nowrap", 2, "width", "16%"], ["pSortableColumn", "montant_brut", 1, "white-space-nowrap", 2, "width", "12%"], ["field", "montant_brut"], [2, "width", "11%"], [2, "width", "10%"], ["pSortableColumn", "statut_facture", 1, "white-space-nowrap", 2, "width", "9%"], ["field", "statut_facture"], [2, "width", "9%"], [1, "font-semibold", "font-mono", "text-sm"], [1, "text-surface-300", "text-sm"], [1, "font-semibold"], [1, "text-sm", "text-green-600", "dark:text-green-400", "font-medium"], [1, "text-sm", "text-red-500", "dark:text-red-400", "font-medium"], [3, "value", "severity"], [1, "flex", "gap-1"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-surface-100", "text-surface-600", "flex-shrink-0"], [1, "pi", "pi-truck", "text-xs"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-surface-400", "font-mono"], [1, "text-xs", "text-surface-500"], ["colspan", "8", 1, "text-center", "py-10"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "text-sm", "text-surface-400"], [1, "absolute", "inset-0", "bg-black/50", "animate-fadein", 3, "click"], [1, "fv-enc-slideover", "bg-surface-0", "dark:bg-surface-900", "absolute", "top-0", "right-0", "shadow-xl", "w-full", "md:w-108", "h-full", "animate-fadeinright"], [1, "fv-enc-slideover-header"], [1, "fv-enc-slideover-title"], ["icon", "pi pi-times", "severity", "secondary", 3, "onClick", "text", "rounded"], [1, "fv-enc-slideover-body"], [1, "fv-enc-preview"], [3, "ngSubmit", "formGroup"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "font-medium", "text-sm"], [1, "text-red-500"], ["formControlName", "montant", "suffix", " GNF", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "min", "useGrouping", "ngClass"], ["formControlName", "mode_paiement", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["formControlName", "date_encaissement", "dateFormat", "dd/mm/yy", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "showIcon"], [1, "text-color-secondary", "text-xs"], ["pInputText", "", "formControlName", "note", "placeholder", "Remarques\u2026", 1, "w-full"], [1, "fv-enc-slideover-footer"], ["label", "Enregistrer", "icon", "pi pi-check", "fluid", "", 3, "onClick", "loading"], [1, "font-bold", "text-red-500"]], template: function FactureVenteListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 6)(2, "header", 7)(3, "p-button", 8);
      \u0275\u0275listener("onClick", function FactureVenteListe_Template_p_button_onClick_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 9);
      \u0275\u0275text(5, "Factures de vente");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 11);
      \u0275\u0275repeaterCreate(8, FactureVenteListe_For_9_Template, 2, 3, "button", 12, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 13)(11, "div", 14);
      \u0275\u0275conditionalCreate(12, FactureVenteListe_Conditional_12_Template, 2, 1)(13, FactureVenteListe_Conditional_13_Template, 4, 0, "div", 15)(14, FactureVenteListe_Conditional_14_Template, 2, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 16)(16, "p-table", 17, 0);
      \u0275\u0275template(18, FactureVenteListe_ng_template_18_Template, 6, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, FactureVenteListe_ng_template_20_Template, 28, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(22, FactureVenteListe_ng_template_22_Template, 25, 12, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(24, FactureVenteListe_ng_template_24_Template, 8, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(26, FactureVenteListe_ng_template_26_Template, 2, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(28, FactureVenteListe_Conditional_28_Template, 38, 13, "div", 18);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.statutOptions);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading ? 12 : ctx.factures().length === 0 ? 13 : 14);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.factures())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(12, _c0))("globalFilterFields", \u0275\u0275pureFunction0(13, _c1))("rowHover", true)("showCurrentPageReport", true);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.encaissementDialogVisible ? 28 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    ToolbarModule,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    TagModule,
    Tag,
    SkeletonModule,
    Skeleton,
    SelectModule,
    Select,
    TooltipModule,
    Tooltip,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    DatePickerModule,
    DatePicker,
    PhoneFormatPipe
  ], styles: ["\n\n@media (max-width: 768px) {\n  .fv-liste-page-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n}\n@media (max-width: 768px) {\n  .fv-mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem 0 1rem;\n  }\n}\n.fv-liste-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.fv-factures-mobile[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .fv-liste-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 0 0.75rem;\n    margin: 0 -0.875rem;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .app-dark[_nghost-%COMP%]   .fv-liste-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-liste-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  [_nghost-%COMP%]     .fv-liste-mobile-back.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  .fv-liste-mobile-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    flex: 1;\n    text-align: center;\n  }\n  .app-dark[_nghost-%COMP%]   .fv-liste-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-liste-mobile-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-0);\n  }\n  .fv-tableau-desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .fv-factures-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.fv-mobile-filters[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-mobile-filters[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n    overflow-x: auto;\n    padding: 0.75rem 0 0.25rem;\n    flex-shrink: 0;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .fv-mobile-filters[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n}\n.fv-filter-chip[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.35rem 0.875rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  color: var(--p-surface-600);\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.fv-filter-chip.is-active[_ngcontent-%COMP%] {\n  background: var(--p-primary-600);\n  border-color: var(--p-primary-600);\n  color: #fff;\n}\n.app-dark[_nghost-%COMP%]   .fv-filter-chip[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-filter-chip[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .fv-filter-chip.is-active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-filter-chip.is-active[_ngcontent-%COMP%] {\n  background: var(--p-primary-500);\n  border-color: var(--p-primary-500);\n  color: #fff;\n}\n.fv-facture-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.fv-facture-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.fv-facture-card__ref[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--p-surface-900);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.fv-facture-card__vehicule[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  margin-top: 0.2rem;\n}\n.fv-facture-card__amounts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n}\n.fv-amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.fv-amount-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  font-weight: 600;\n  color: var(--p-surface-400);\n}\n.fv-amount-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--p-surface-800);\n}\n.fv-amount-value--success[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.fv-amount-value--danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.fv-facture-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.fv-facture-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.fv-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.fv-badge--impayee[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.fv-badge--partiel[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.fv-badge--payee[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.fv-badge--annulee[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  color: var(--p-surface-500);\n}\n.fv-enc-slideover[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .fv-enc-slideover[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100vh;\n    min-height: 100dvh;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-sizing: border-box;\n  }\n}\n.fv-enc-slideover-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem 1rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-slideover-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n}\n.fv-enc-slideover-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1.5rem;\n}\n.fv-enc-slideover-footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem calc(1rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  margin-bottom: 1.25rem;\n  font-size: 0.875rem;\n  color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-facture-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-facture-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-facture-card__ref[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-facture-card__ref[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .fv-facture-card__vehicule[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-facture-card__vehicule[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-facture-card__footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-facture-card__footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fv-amount-value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-amount-value[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .fv-amount-value--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-amount-value--success[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .fv-amount-value--danger[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-amount-value--danger[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.app-dark[_nghost-%COMP%]   .fv-badge--impayee[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-badge--impayee[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  color: #f87171;\n}\n.app-dark[_nghost-%COMP%]   .fv-badge--partiel[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-badge--partiel[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.15);\n  color: #fbbf24;\n}\n.app-dark[_nghost-%COMP%]   .fv-badge--payee[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-badge--payee[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.15);\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .fv-badge--annulee[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-badge--annulee[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-header[_ngcontent-%COMP%] {\n  border-bottom-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-slideover-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-slideover-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .fv-enc-preview[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-enc-preview[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n@media (max-width: 768px) {\n  .app-dark[_nghost-%COMP%]   .fv-liste-page-wrap[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fv-liste-page-wrap[_ngcontent-%COMP%] {\n    background: var(--p-surface-900);\n  }\n}\n/*# sourceMappingURL=facture-vente-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteListe, [{
    type: Component,
    args: [{ selector: "app-facture-vente-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      InputNumberModule,
      TagModule,
      SkeletonModule,
      SelectModule,
      TooltipModule,
      InputIconModule,
      IconFieldModule,
      DatePickerModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />

<div class="fv-liste-page-wrap">

  <!-- \u2500\u2500 Mobile sticky header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <header class="fv-liste-mobile-header">
    <p-button
      icon="pi pi-arrow-left"
      [text]="true"
      [rounded]="true"
      styleClass="fv-liste-mobile-back"
      aria-label="Retour"
      (onClick)="goBack()"
    />
    <h1 class="fv-liste-mobile-title">Factures de vente</h1>
    <!-- Spacer pour centrer le titre -->
    <div style="width:2.5rem; flex-shrink:0"></div>
  </header>

  <!-- \u2500\u2500 Mobile filter chips \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="fv-mobile-filters">
    @for (opt of statutOptions; track opt.value) {
      <button
        type="button"
        class="fv-filter-chip"
        [class.is-active]="selectedStatut === opt.value"
        (click)="selectedStatut = $any(opt.value); onStatutChange()"
      >{{ opt.label }}</button>
    }
  </div>

  <!-- \u2500\u2500 Scrollable area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="fv-mobile-scroll">

    <!-- Mobile cards (\u2264 768px) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="fv-factures-mobile">
      @if (loading) {
        @for (_ of [1, 2, 3]; track $index) {
          <div class="fv-facture-card"><p-skeleton height="5.5rem" /></div>
        }
      } @else if (factures().length === 0) {
        <div class="flex flex-col items-center gap-3 text-surface-500 py-12">
          <i class="pi pi-file-invoice text-4xl"></i>
          <span class="text-sm">Aucune facture de vente</span>
        </div>
      } @else {
        @for (f of factures(); track f.id) {
          <article class="fv-facture-card">
            <div class="fv-facture-card__top">
              <div style="min-width:0">
                <div class="fv-facture-card__ref">{{ f.reference }}</div>
                @if (f.vehicule) {
                  <div class="fv-facture-card__vehicule">
                    {{ f.vehicule.nom_vehicule }} \xB7 {{ f.vehicule.immatriculation }}
                  </div>
                }
              </div>
              <span class="fv-badge fv-badge--{{ f.statut_facture }}">{{ getStatutLabel(f.statut_facture) }}</span>
            </div>

            <div class="fv-facture-card__amounts">
              <div class="fv-amount-item">
                <span class="fv-amount-label">Brut</span>
                <span class="fv-amount-value">{{ formatMontant(f.montant_brut) }}</span>
              </div>
              <div class="fv-amount-item">
                <span class="fv-amount-label">Encaiss\xE9</span>
                <span class="fv-amount-value fv-amount-value--success">{{ formatMontant(f.montant_encaisse) }}</span>
              </div>
              <div class="fv-amount-item">
                <span class="fv-amount-label">Restant</span>
                <span class="fv-amount-value fv-amount-value--danger">{{ formatMontant(f.montant_restant) }}</span>
              </div>
            </div>

            <div class="fv-facture-card__footer">
              <span class="text-xs text-surface-400">{{ formatDateDisplay(f.created_at) }}</span>
              <div class="fv-facture-card__actions">
                <p-button
                  icon="pi pi-eye"
                  severity="info"
                  [text]="true"
                  [rounded]="true"
                  pTooltip="Voir d\xE9tail"
                  tooltipPosition="top"
                  (onClick)="goDetail(f.id)"
                />
                @if (canAddEncaissement(f)) {
                  <p-button
                    icon="pi pi-wallet"
                    severity="success"
                    [text]="true"
                    [rounded]="true"
                    pTooltip="Encaisser"
                    tooltipPosition="top"
                    (onClick)="openEncaissementDialog(f)"
                  />
                }
              </div>
            </div>
          </article>
        }
      }
    </div>

    <!-- Desktop table (hidden \u2264 768px) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="card fv-tableau-desktop">
      <p-table
        #dt
        [value]="factures()"
        [loading]="loading"
        [paginator]="true"
        [rows]="10"
        [rowsPerPageOptions]="[10, 25, 50]"
        [globalFilterFields]="[
          'reference',
          'vehicule.nom_vehicule',
          'vehicule.immatriculation',
          'vehicule.livreurPrincipal.nom',
          'vehicule.livreurPrincipal.prenom',
          'vehicule.livreurPrincipal.phone',
          'vehicule.livreur_principal.nom',
          'vehicule.livreur_principal.prenom',
          'vehicule.livreur_principal.phone',
          'statut_facture'
        ]"
        [rowHover]="true"
        responsiveLayout="scroll"
        currentPageReportTemplate="{first} / {last} de {totalRecords} factures"
        [showCurrentPageReport]="true"
      >
        <ng-template #caption>
          <div class="flex flex-wrap gap-2 items-center justify-between">
            <p-iconfield class="w-full sm:w-80">
              <p-inputicon class="pi pi-search" />
              <input
                pInputText
                type="text"
                placeholder="Rechercher une facture..."
                (input)="onGlobalFilter(dt, $event)"
                class="w-full"
              />
            </p-iconfield>
            <div class="flex gap-2 w-full sm:w-auto">
              <p-select
                [options]="statutOptions"
                [(ngModel)]="selectedStatut"
                optionLabel="label"
                optionValue="value"
                (onChange)="onStatutChange()"
                placeholder="Tous les statuts"
                [showClear]="true"
                [style]="{ 'min-width': '160px' }"
              />
            </div>
          </div>
        </ng-template>

        <ng-template #header>
          <tr>
            <th pSortableColumn="reference" class="white-space-nowrap" style="width:18%">
              <span class="flex items-center gap-2">Facture <p-sortIcon field="reference" /></span>
            </th>
            <th pSortableColumn="vehicule.nom_vehicule" class="white-space-nowrap" style="width:16%">
              <span class="flex items-center gap-2">V\xE9hicule <p-sortIcon field="vehicule.nom_vehicule" /></span>
            </th>
            <th class="white-space-nowrap" style="width:16%">
              <span class="flex items-center gap-2">Livreur</span>
            </th>
            <th pSortableColumn="montant_brut" class="white-space-nowrap" style="width:12%">
              <span class="flex items-center gap-2">Montant brut <p-sortIcon field="montant_brut" /></span>
            </th>
            <th style="width:11%"><span class="flex items-center gap-2">Encaiss\xE9</span></th>
            <th style="width:10%"><span class="flex items-center gap-2">Restant</span></th>
            <th pSortableColumn="statut_facture" class="white-space-nowrap" style="width:9%">
              <span class="flex items-center gap-2">Statut <p-sortIcon field="statut_facture" /></span>
            </th>
            <th style="width:9%">Actions</th>
          </tr>
        </ng-template>

        <ng-template #body let-f>
          <tr>
            <td>
              <div class="font-semibold font-mono text-sm">{{ f.reference }}</div>
            </td>
            <td>
              @if (f.vehicule) {
                <div class="flex items-center gap-2">
                  <div class="flex items-center justify-center w-8 h-8 rounded-full bg-surface-100 text-surface-600 flex-shrink-0">
                    <i class="pi pi-truck text-xs"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium">{{ f.vehicule.nom_vehicule }}</div>
                    <div class="text-xs text-surface-400 font-mono">{{ f.vehicule.immatriculation }}</div>
                  </div>
                </div>
              } @else {
                <span class="text-surface-300 text-sm">\u2014</span>
              }
            </td>
            <td>
              @let lv = f.vehicule?.livreurPrincipal ?? f.vehicule?.livreur_principal;
              @if (lv) {
                <div class="text-sm font-medium">{{ lv.prenom }} {{ lv.nom }}</div>
                @if (lv.phone) {
                  <div class="text-xs text-surface-500">{{ lv.phone | phoneFormat }}</div>
                } @else {
                  <span class="text-surface-300 text-sm">-</span>
                }
              } @else {
                <span class="text-surface-300 text-sm">-</span>
              }
            </td>
            <td class="font-semibold">{{ formatMontant(f.montant_brut) }}</td>
            <td>
              <span class="text-sm text-green-600 dark:text-green-400 font-medium">{{ formatMontant(f.montant_encaisse) }}</span>
            </td>
            <td>
              <span class="text-sm text-red-500 dark:text-red-400 font-medium">{{ formatMontant(f.montant_restant) }}</span>
            </td>
            <td>
              <p-tag
                [value]="getStatutLabel(f.statut_facture)"
                [severity]="getStatutSeverity(f.statut_facture)"
              />
            </td>
            <td>
              <div class="flex gap-1">
                <p-button
                  icon="pi pi-eye"
                  severity="info"
                  [text]="true"
                  [rounded]="true"
                  pTooltip="Voir d\xE9tail"
                  tooltipPosition="top"
                  (onClick)="goDetail(f.id)"
                />
                @if (canAddEncaissement(f)) {
                  <p-button
                    icon="pi pi-wallet"
                    severity="success"
                    [text]="true"
                    [rounded]="true"
                    pTooltip="Encaisser"
                    tooltipPosition="top"
                    (onClick)="openEncaissementDialog(f)"
                  />
                }
              </div>
            </td>
          </tr>
        </ng-template>

        <ng-template #emptymessage>
          <tr>
            <td colspan="8" class="text-center py-10">
              <div class="flex flex-col items-center gap-3 text-surface-500">
                <i class="pi pi-file-invoice text-4xl"></i>
                <span>Aucune facture de vente</span>
                <span class="text-sm text-surface-400">Les factures sont g\xE9n\xE9r\xE9es automatiquement lors de la cr\xE9ation d'une commande.</span>
              </div>
            </td>
          </tr>
        </ng-template>

        <ng-template #loadingbody>
          @for (_ of [1, 2, 3, 4, 5]; track $index) {
            <tr>
              @for (__ of [1, 2, 3, 4, 5, 6, 7, 8]; track $index) {
                <td><p-skeleton /></td>
              }
            </tr>
          }
        </ng-template>
      </p-table>
    </div>

  </div><!-- /.fv-mobile-scroll -->

</div><!-- /.fv-liste-page-wrap -->


<!-- \u2500\u2500 Slideover encaissement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (encaissementDialogVisible) {
  <div class="fixed inset-0 z-50">
    <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="encaissementDialogVisible = false"></div>
    <div class="fv-enc-slideover bg-surface-0 dark:bg-surface-900 absolute top-0 right-0 shadow-xl w-full md:w-108 h-full animate-fadeinright">

      <div class="fv-enc-slideover-header">
        <h2 class="fv-enc-slideover-title">Enregistrer un encaissement</h2>
        <p-button
          icon="pi pi-times"
          severity="secondary"
          [text]="true"
          [rounded]="true"
          (onClick)="encaissementDialogVisible = false"
        />
      </div>

      <div class="fv-enc-slideover-body">
        @if (selectedFacture) {
          <div class="fv-enc-preview">
            <span>Restant \xE0 payer</span>
            <span class="font-bold text-red-500">{{ formatMontant(selectedFacture.montant_restant) }}</span>
          </div>
        }

        <form [formGroup]="encaissementForm" (ngSubmit)="onSaveEncaissement()">
          <div class="flex flex-col gap-4">

            <div class="flex flex-col gap-2">
              <label class="font-medium text-sm">Montant (GNF) <span class="text-red-500">*</span></label>
              <p-inputnumber
                formControlName="montant"
                [min]="1"
                [useGrouping]="true"
                suffix=" GNF"
                styleClass="w-full"
                inputStyleClass="w-full"
                [ngClass]="{ 'ng-invalid ng-dirty': isInvalid('montant') }"
              />
              @if (isInvalid('montant')) {
                <small class="text-red-500">Montant requis (minimum 1 GNF)</small>
              }
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-medium text-sm">Mode de paiement <span class="text-red-500">*</span></label>
              <p-select
                formControlName="mode_paiement"
                [options]="modePaiementOptions"
                optionLabel="label"
                optionValue="value"
                styleClass="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-medium text-sm">Date d'encaissement <span class="text-red-500">*</span></label>
              <p-datepicker
                formControlName="date_encaissement"
                dateFormat="dd/mm/yy"
                [showIcon]="true"
                styleClass="w-full"
                inputStyleClass="w-full"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label class="font-medium text-sm">Note <span class="text-color-secondary text-xs">(optionnel)</span></label>
              <input pInputText formControlName="note" placeholder="Remarques\u2026" class="w-full" />
            </div>

          </div>
        </form>
      </div>

      <div class="fv-enc-slideover-footer">
        <p-button
          label="Enregistrer"
          icon="pi pi-check"
          [loading]="encaissementSaving"
          (onClick)="onSaveEncaissement()"
          fluid
        />
      </div>

    </div>
  </div>
}
`, styles: ["/* src/app/pages/ventes/facture-vente-liste/facture-vente-liste.scss */\n@media (max-width: 768px) {\n  .fv-liste-page-wrap {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n}\n@media (max-width: 768px) {\n  .fv-mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem 0 1rem;\n  }\n}\n.fv-liste-mobile-header {\n  display: none;\n}\n.fv-factures-mobile {\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .fv-liste-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 0 0.75rem;\n    margin: 0 -0.875rem;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  :host-context(.app-dark) .fv-liste-mobile-header {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  :host ::ng-deep .fv-liste-mobile-back.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  .fv-liste-mobile-title {\n    font-size: 1.2rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    flex: 1;\n    text-align: center;\n  }\n  :host-context(.app-dark) .fv-liste-mobile-title {\n    color: var(--p-surface-0);\n  }\n  .fv-tableau-desktop {\n    display: none !important;\n  }\n  .fv-factures-mobile {\n    display: flex;\n  }\n}\n.fv-mobile-filters {\n  display: none;\n}\n@media (max-width: 768px) {\n  .fv-mobile-filters {\n    display: flex;\n    gap: 0.5rem;\n    overflow-x: auto;\n    padding: 0.75rem 0 0.25rem;\n    flex-shrink: 0;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n  .fv-mobile-filters::-webkit-scrollbar {\n    display: none;\n  }\n}\n.fv-filter-chip {\n  flex-shrink: 0;\n  padding: 0.35rem 0.875rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1.5px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  color: var(--p-surface-600);\n  transition:\n    background 0.15s ease,\n    border-color 0.15s ease,\n    color 0.15s ease;\n}\n.fv-filter-chip.is-active {\n  background: var(--p-primary-600);\n  border-color: var(--p-primary-600);\n  color: #fff;\n}\n:host-context(.app-dark) .fv-filter-chip {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .fv-filter-chip.is-active {\n  background: var(--p-primary-500);\n  border-color: var(--p-primary-500);\n  color: #fff;\n}\n.fv-facture-card {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.fv-facture-card__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.fv-facture-card__ref {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--p-surface-900);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.fv-facture-card__vehicule {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  margin-top: 0.2rem;\n}\n.fv-facture-card__amounts {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n}\n.fv-amount-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.fv-amount-label {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  font-weight: 600;\n  color: var(--p-surface-400);\n}\n.fv-amount-value {\n  font-size: 0.88rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--p-surface-800);\n}\n.fv-amount-value--success {\n  color: #059669;\n}\n.fv-amount-value--danger {\n  color: #dc2626;\n}\n.fv-facture-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.fv-facture-card__actions {\n  display: flex;\n  gap: 0.25rem;\n}\n.fv-badge {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.fv-badge--impayee {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.fv-badge--partiel {\n  background: #fffbeb;\n  color: #d97706;\n}\n.fv-badge--payee {\n  background: #ecfdf5;\n  color: #059669;\n}\n.fv-badge--annulee {\n  background: var(--p-surface-100);\n  color: var(--p-surface-500);\n}\n.fv-enc-slideover {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .fv-enc-slideover {\n    left: 0;\n    right: 0;\n    width: 100%;\n    min-height: 100vh;\n    min-height: 100dvh;\n    padding-top: env(safe-area-inset-top);\n    padding-bottom: env(safe-area-inset-bottom);\n    box-sizing: border-box;\n  }\n}\n.fv-enc-slideover-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem 1rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-slideover-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n}\n.fv-enc-slideover-body {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1.5rem;\n}\n.fv-enc-slideover-footer {\n  padding: 1rem 1.5rem calc(1rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n}\n.fv-enc-preview {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem;\n  background: var(--p-surface-50);\n  border-radius: 10px;\n  margin-bottom: 1.25rem;\n  font-size: 0.875rem;\n  color: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-facture-card {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-facture-card__ref {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .fv-facture-card__vehicule {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-facture-card__footer {\n  border-top-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .fv-amount-value {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .fv-amount-value--success {\n  color: #34d399;\n}\n:host-context(.app-dark) .fv-amount-value--danger {\n  color: #f87171;\n}\n:host-context(.app-dark) .fv-badge--impayee {\n  background: rgba(220, 38, 38, 0.15);\n  color: #f87171;\n}\n:host-context(.app-dark) .fv-badge--partiel {\n  background: rgba(217, 119, 6, 0.15);\n  color: #fbbf24;\n}\n:host-context(.app-dark) .fv-badge--payee {\n  background: rgba(5, 150, 105, 0.15);\n  color: #34d399;\n}\n:host-context(.app-dark) .fv-badge--annulee {\n  background: var(--p-surface-700);\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fv-enc-slideover-header {\n  border-bottom-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-enc-slideover-title {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .fv-enc-slideover-footer {\n  border-top-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .fv-enc-preview {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n@media (max-width: 768px) {\n  :host-context(.app-dark) .fv-liste-page-wrap {\n    background: var(--p-surface-900);\n  }\n}\n/*# sourceMappingURL=facture-vente-liste.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: FactureLivraisonService }, { type: AuthService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteListe, { className: "FactureVenteListe", filePath: "src/app/pages/ventes/facture-vente-liste/facture-vente-liste.ts", lineNumber: 61 });
})();
export {
  FactureVenteListe
};
//# sourceMappingURL=chunk-TC35G3IX.js.map
