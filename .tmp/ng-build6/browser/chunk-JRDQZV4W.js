import {
  VehiculeService
} from "./chunk-RZ4LU2Q7.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-QHAUGTLE.js";
import {
  ToolbarModule
} from "./chunk-SNFY5X5Q.js";
import {
  StyleClass,
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import {
  UsineService
} from "./chunk-2NFIMWKH.js";
import {
  parsePhoneNumberWithError
} from "./chunk-4YOSONNR.js";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_CODE,
  getCountryByCode
} from "./chunk-O2HUXTPT.js";
import {
  MessageModule
} from "./chunk-6DEF5LE6.js";
import {
  Menu,
  MenuModule
} from "./chunk-MIZEJNDH.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-3GKIIVSI.js";
import {
  PhoneFormatPipe
} from "./chunk-F5DZ3BGT.js";
import "./chunk-DQ4T5ATO.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-5YYGCZZ3.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-36C26MQ6.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import {
  Tag,
  TagModule
} from "./chunk-24JO5SYM.js";
import "./chunk-DB24SVBI.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-IEELAHW7.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import {
  UsineContextService
} from "./chunk-7GQXFRTV.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-MHHPFZ62.js";
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
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
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
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import {
  Ripple,
  RippleModule
} from "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  Injectable,
  Input,
  computed,
  forkJoin,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/models/vehicule.model.ts
var TYPE_VEHICULE_OPTIONS = [
  { label: "Camion", value: "camion" },
  { label: "Vanne", value: "vanne" },
  { label: "Tricycle", value: "tricycle" },
  { label: "Pick-up", value: "pick_up" },
  { label: "Autre", value: "autre" }
];
var CAPACITE_DEFAULTS = {
  camion: 300,
  vanne: 150,
  tricycle: 70,
  pick_up: 100
};
var TYPE_VEHICULE_LABELS = {
  camion: "Camion",
  vanne: "Vanne",
  tricycle: "Tricycle",
  pick_up: "Pick-up",
  autre: "Autre"
};

// src/app/pages/vehicules/vehicules/vehicule-liste/vehicule-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7];
var _forTrack0 = ($index, $item) => $item.id;
function VehiculeListe_Conditional_18_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", v_r4.photo_url, \u0275\u0275sanitizeUrl)("alt", v_r4.nom_vehicule);
  }
}
function VehiculeListe_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getInitials(v_r4));
  }
}
function VehiculeListe_Conditional_18_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function VehiculeListe_Conditional_18_For_2_Conditional_11_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const v_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.goEdit(v_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 37);
    \u0275\u0275listener("click", function VehiculeListe_Conditional_18_For_2_Conditional_11_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const v_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.toggleStatus(v_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("icon", v_r4.is_active ? "pi pi-lock" : "pi pi-lock-open")("severity", v_r4.is_active ? "warn" : "success")("pTooltip", v_r4.is_active ? "D\xE9sactiver" : "Activer");
  }
}
function VehiculeListe_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 27);
    \u0275\u0275listener("click", function VehiculeListe_Conditional_18_For_2_Template_article_click_0_listener() {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goEdit(v_r4));
    });
    \u0275\u0275conditionalCreate(1, VehiculeListe_Conditional_18_For_2_Conditional_1_Template, 1, 2, "img", 28)(2, VehiculeListe_Conditional_18_For_2_Conditional_2_Template, 2, 1, "div", 29);
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275element(9, "p-tag", 34);
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275conditionalCreate(11, VehiculeListe_Conditional_18_For_2_Conditional_11_Template, 2, 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r4.photo_url ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r4.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", v_r4.immatriculation, " \xB7 ", ctx_r4.getTypeLabel(v_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", v_r4.is_active ? "Actif" : "Inactif")("severity", v_r4.is_active ? "success" : "warn");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate ? 11 : -1);
  }
}
function VehiculeListe_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20);
    \u0275\u0275repeaterCreate(1, VehiculeListe_Conditional_18_For_2_Template, 12, 7, "article", 26, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.filteredVehicules());
  }
}
function VehiculeListe_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, "Aucun v\xE9hicule trouv\xE9.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function VehiculeListe_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function VehiculeListe_ng_template_26_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p-iconfield", 41);
    \u0275\u0275element(2, "p-inputicon", 18);
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275listener("ngModelChange", function VehiculeListe_ng_template_26_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275conditionalCreate(5, VehiculeListe_ng_template_26_Conditional_5_Template, 1, 0, "button", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r4.searchQuery());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canCreate ? 5 : -1);
  }
}
function VehiculeListe_ng_template_28_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 46)(2, "span", 47);
    \u0275\u0275text(3, " V\xE9hicule ");
    \u0275\u0275element(4, "p-sortIcon", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 49)(6, "span", 47);
    \u0275\u0275text(7, " Immatriculation ");
    \u0275\u0275element(8, "p-sortIcon", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 51);
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 52);
    \u0275\u0275text(12, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 52);
    \u0275\u0275text(14, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 53);
    \u0275\u0275text(16, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, VehiculeListe_ng_template_28_Conditional_17_Template, 2, 0, "th", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 17 : -1);
  }
}
function VehiculeListe_ng_template_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 55);
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", v_r10.photo_url, \u0275\u0275sanitizeUrl)("alt", v_r10.nom_vehicule);
  }
}
function VehiculeListe_ng_template_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(v_r10), " ");
  }
}
function VehiculeListe_ng_template_30_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", v_r10.marque, " ", v_r10.modele);
  }
}
function VehiculeListe_ng_template_30_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", v_r10.proprietaire.prenom, " ", v_r10.proprietaire.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, v_r10.proprietaire.phone));
  }
}
function VehiculeListe_ng_template_30_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_30_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", v_r10.livreur_principal.prenom, " ", v_r10.livreur_principal.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, v_r10.livreur_principal.phone));
  }
}
function VehiculeListe_ng_template_30_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_30_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function VehiculeListe_ng_template_30_Conditional_26_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const v_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goEdit(v_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "button", 74);
    \u0275\u0275listener("click", function VehiculeListe_ng_template_30_Conditional_26_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const v_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleStatus(v_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("icon", v_r10.is_active ? "pi pi-lock" : "pi pi-lock-open")("severity", v_r10.is_active ? "warn" : "success")("pTooltip", v_r10.is_active ? "D\xE9sactiver" : "Activer");
  }
}
function VehiculeListe_ng_template_30_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function VehiculeListe_ng_template_30_Conditional_26_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const v_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteVehicule(v_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_30_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 71);
    \u0275\u0275conditionalCreate(2, VehiculeListe_ng_template_30_Conditional_26_Conditional_2_Template, 2, 3);
    \u0275\u0275conditionalCreate(3, VehiculeListe_ng_template_30_Conditional_26_Conditional_3_Template, 1, 0, "button", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canDelete ? 3 : -1);
  }
}
function VehiculeListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 47);
    \u0275\u0275conditionalCreate(3, VehiculeListe_ng_template_30_Conditional_3_Template, 1, 2, "img", 55)(4, VehiculeListe_ng_template_30_Conditional_4_Template, 2, 1, "span", 56);
    \u0275\u0275elementStart(5, "div", 57)(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, VehiculeListe_ng_template_30_Conditional_8_Template, 2, 2, "div", 59);
    \u0275\u0275elementStart(9, "code", 60);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 61);
    \u0275\u0275element(12, "p-tag", 62);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 63)(14, "code", 64);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 65);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 66);
    \u0275\u0275conditionalCreate(19, VehiculeListe_ng_template_30_Conditional_19_Template, 6, 5)(20, VehiculeListe_ng_template_30_Conditional_20_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 66);
    \u0275\u0275conditionalCreate(22, VehiculeListe_ng_template_30_Conditional_22_Template, 6, 5)(23, VehiculeListe_ng_template_30_Conditional_23_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 68);
    \u0275\u0275element(25, "p-tag", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, VehiculeListe_ng_template_30_Conditional_26_Template, 4, 2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r10 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(v_r10.photo_url ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r10.nom_vehicule);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r10.marque || v_r10.modele ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r10.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", v_r10.is_active ? "Actif" : "Inactif")("severity", v_r10.is_active ? "success" : "warn");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r10.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getTypeLabel(v_r10));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(v_r10.proprietaire ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(v_r10.livreur_principal ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", v_r10.is_active ? "Actif" : "Inactif")("severity", v_r10.is_active ? "success" : "warn");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 26 : -1);
  }
}
function VehiculeListe_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 76)(2, "div", 77);
    \u0275\u0275element(3, "i", 78);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun v\xE9hicule trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r4.canUpdate || ctx_r4.canDelete ? 7 : 6);
  }
}
function VehiculeListe_ng_template_34_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_34_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, VehiculeListe_ng_template_34_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function VehiculeListe_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, VehiculeListe_ng_template_34_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
var VehiculeListe = class _VehiculeListe {
  vehiculeService;
  messageService;
  confirmationService;
  authService;
  router;
  vehicules = signal([], ...ngDevMode ? [{ debugName: "vehicules" }] : []);
  loading = false;
  get canCreate() {
    return this.authService.hasPermission("vehicules.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("vehicules.update");
  }
  get canDelete() {
    return this.authService.hasPermission("vehicules.delete");
  }
  // ─── Mobile ────────────────────────────────────────────────────────────────
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  mobileFilterMenuItems = [];
  total = computed(() => this.vehicules().length, ...ngDevMode ? [{ debugName: "total" }] : []);
  filteredVehicules = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q)
      return this.vehicules();
    return this.vehicules().filter((v) => this.matchesSearch(v, q));
  }, ...ngDevMode ? [{ debugName: "filteredVehicules" }] : []);
  constructor(vehiculeService, messageService, confirmationService, authService, router) {
    this.vehiculeService = vehiculeService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.loadVehicules();
    this.mobileFilterMenuItems = [
      { label: "Tous", icon: "pi pi-list", command: () => {
        this.selectedFilter.set("all");
        this.loadVehicules();
      } },
      { label: "Actifs", icon: "pi pi-check-circle", command: () => {
        this.selectedFilter.set("actif");
        this.loadVehicules();
      } },
      { label: "Inactifs", icon: "pi pi-times-circle", command: () => {
        this.selectedFilter.set("inactif");
        this.loadVehicules();
      } }
    ];
  }
  loadVehicules() {
    this.loading = true;
    const statut = this.selectedFilter();
    const filters = statut !== "all" ? { statut } : void 0;
    this.vehiculeService.getAll(filters).subscribe({
      next: (resp) => {
        this.vehicules.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: this.httpErrorSummary(err),
          detail: this.httpErrorDetail(err, "charger les v\xE9hicules"),
          life: 5e3
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  goNew() {
    this.router.navigate(["/vehicules/nouveau"]);
  }
  goEdit(v) {
    this.router.navigate(["/vehicules", v.id, "edit"]);
  }
  toggleStatus(v) {
    const action = v.is_active ? "d\xE9sactiver" : "activer";
    this.confirmationService.confirm({
      message: `Voulez-vous ${action} le v\xE9hicule <strong>${v.nom_vehicule}</strong> ?`,
      header: v.is_active ? "D\xE9sactiver le v\xE9hicule" : "Activer le v\xE9hicule",
      icon: v.is_active ? "pi pi-lock" : "pi pi-lock-open",
      rejectButtonProps: { label: "Annuler", severity: "secondary", outlined: true },
      acceptButtonProps: { label: v.is_active ? "D\xE9sactiver" : "Activer", severity: v.is_active ? "warn" : "success" },
      accept: () => {
        const fd = new FormData();
        fd.append("is_active", v.is_active ? "0" : "1");
        this.vehiculeService.update(v.id, fd).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Succ\xE8s", detail: `V\xE9hicule ${v.is_active ? "d\xE9sactiv\xE9" : "activ\xE9"}.`, life: 3e3 });
            this.loadVehicules();
          },
          error: (err) => this.messageService.add({ severity: "error", summary: "Erreur", detail: err.error?.message || "Impossible de modifier le statut.", life: 5e3 })
        });
      }
    });
  }
  deleteVehicule(v) {
    this.confirmationService.confirm({
      message: `Supprimer d\xE9finitivement <strong>${v.nom_vehicule}</strong> (${v.immatriculation}) ?`,
      header: "Supprimer le v\xE9hicule",
      icon: "pi pi-trash",
      rejectButtonProps: { label: "Annuler", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "Supprimer", severity: "danger" },
      accept: () => {
        this.vehiculeService.delete(v.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Supprim\xE9", detail: `${v.nom_vehicule} supprim\xE9.`, life: 3e3 });
            this.vehicules.update((list) => list.filter((x) => x.id !== v.id));
          },
          error: (err) => this.messageService.add({ severity: "error", summary: "Erreur", detail: err.error?.message || "Impossible de supprimer.", life: 5e3 })
        });
      }
    });
  }
  getInitials(v) {
    const words = (v.nom_vehicule ?? "").split(" ").filter(Boolean);
    if (words.length >= 2)
      return (words[0][0] + words[1][0]).toUpperCase();
    return (words[0]?.substring(0, 2) ?? "??").toUpperCase();
  }
  getTypeLabel(v) {
    return TYPE_VEHICULE_LABELS[v.type_vehicule] ?? v.type_vehicule;
  }
  matchesSearch(v, query) {
    const owner = v.proprietaire ? `${v.proprietaire.prenom ?? ""} ${v.proprietaire.nom ?? ""} ${v.proprietaire.phone ?? ""}` : "";
    const driver = v.livreur_principal ? `${v.livreur_principal.prenom ?? ""} ${v.livreur_principal.nom ?? ""} ${v.livreur_principal.phone ?? ""}` : "";
    const searchable = [
      v.nom_vehicule,
      v.immatriculation,
      v.marque,
      v.modele,
      v.type_vehicule,
      this.getTypeLabel(v),
      owner,
      driver,
      v.is_active ? "actif" : "inactif"
    ].filter((value) => !!value).join(" ").toLowerCase();
    return searchable.includes(query);
  }
  httpErrorSummary(err) {
    if (err.status === 401)
      return "Session expir\xE9e";
    if (err.status === 403)
      return "Acc\xE8s refus\xE9";
    if (err.status === 0)
      return "Serveur inaccessible";
    return `Erreur ${err.status || ""}`.trim();
  }
  httpErrorDetail(err, action) {
    if (err.status === 401)
      return "Votre session a expir\xE9. Veuillez vous reconnecter.";
    if (err.status === 403)
      return `Vous n'avez pas la permission de ${action}.`;
    if (err.status === 0)
      return "Impossible de joindre le serveur.";
    return err.error?.message || `Une erreur inattendue est survenue (${action}).`;
  }
  static \u0275fac = function VehiculeListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeListe)(\u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeListe, selectors: [["app-vehicule-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 36, vars: 17, consts: [["filterMenu", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "vehicules-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-action-btn", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer", 1, "p-button-rounded", "p-button-text", "mobile-action-btn", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], ["iconPosition", "left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, immatriculation\u2026", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "mobile-list"], [1, "mobile-state"], ["type", "button", "aria-label", "Nouveau v\xE9hicule", 1, "mobile-fab"], [1, "vehicules-desktop"], [1, "card"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} v\xE9hicules", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "rowHover"], [1, "mobile-vehicule-card"], [1, "mobile-vehicule-card", 3, "click"], [1, "mobile-card-avatar-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Modifier", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "icon", "severity", "pTooltip"], ["type", "button", "aria-label", "Nouveau v\xE9hicule", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un v\xE9hicule...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "w-full", "sm:w-auto", "flex-order-0", "sm:flex-order-1"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau", 1, "flex-shrink-0"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau", 1, "flex-shrink-0", 3, "click"], ["pSortableColumn", "nom_vehicule"], [1, "flex", "items-center", "gap-2"], ["field", "nom_vehicule"], ["pSortableColumn", "immatriculation", 1, "hidden", "sm:table-cell", 2, "width", "12%"], ["field", "immatriculation"], [1, "hidden", "md:table-cell", 2, "width", "9%"], [1, "hidden", "lg:table-cell", 2, "width", "17%"], [1, "hidden", "sm:table-cell", "text-center", 2, "width", "9%"], [1, "text-center", 2, "width", "5%"], [1, "rounded", "flex-shrink-0", 2, "width", "48px", "height", "48px", "object-fit", "cover", 3, "src", "alt"], [1, "inline-flex", "items-center", "justify-center", "rounded", "bg-primary", "text-white", "font-bold", "text-sm", "flex-shrink-0", 2, "width", "48px", "height", "48px"], [1, "min-w-0"], [1, "font-medium", "truncate"], [1, "text-xs", "text-surface-400"], [1, "sm:hidden", "text-xs", "surface-100", "px-1", "py-0.5", "rounded"], [1, "sm:hidden", "mt-1"], [3, "value", "severity"], [1, "hidden", "sm:table-cell"], [1, "text-sm", "surface-100", "px-2", "py-1", "border-round"], [1, "hidden", "md:table-cell", "text-sm"], [1, "hidden", "lg:table-cell"], [1, "text-surface-400"], [1, "hidden", "sm:table-cell", "text-center"], [1, "font-medium", "text-sm"], [1, "text-surface-400", "text-xs"], [1, "flex", "gap-1", "justify-center"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "text", "", "rounded", "", "size", "small", "tooltipPosition", "top", 3, "click", "icon", "severity", "pTooltip"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top", 3, "click"], [1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-car", "text-4xl"]], template: function VehiculeListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "div", 7)(3, "header", 8)(4, "button", 9);
      \u0275\u0275listener("click", function VehiculeListe_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 10)(6, "h1", 11);
      \u0275\u0275text(7, "V\xE9hicules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 12);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "p-menu", 13, 0);
      \u0275\u0275elementStart(12, "button", 14);
      \u0275\u0275listener("click", function VehiculeListe_Template_button_click_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        const filterMenu_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(filterMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 15)(14, "section", 16)(15, "p-iconfield", 17);
      \u0275\u0275element(16, "p-inputicon", 18);
      \u0275\u0275elementStart(17, "input", 19);
      \u0275\u0275listener("ngModelChange", function VehiculeListe_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(18, VehiculeListe_Conditional_18_Template, 3, 0, "section", 20);
      \u0275\u0275conditionalCreate(19, VehiculeListe_Conditional_19_Template, 2, 0, "div", 21);
      \u0275\u0275conditionalCreate(20, VehiculeListe_Conditional_20_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, VehiculeListe_Conditional_21_Template, 2, 0, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 23)(23, "div", 24)(24, "p-table", 25, 1);
      \u0275\u0275template(26, VehiculeListe_ng_template_26_Template, 6, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, VehiculeListe_ng_template_28_Template, 18, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, VehiculeListe_ng_template_30_Template, 27, 13, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(32, VehiculeListe_ng_template_32_Template, 6, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(34, VehiculeListe_ng_template_34_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.total(), " v\xE9hicule", ctx.total() > 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileFilterMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredVehicules().length ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredVehicules().length === 0 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.canCreate ? 21 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.filteredVehicules())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(16, _c0))("showCurrentPageReport", true)("rowHover", true);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
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
    ToolbarModule,
    InputTextModule,
    InputText,
    SkeletonModule,
    Skeleton,
    TagModule,
    Tag,
    TooltipModule,
    Tooltip,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    MenuModule,
    Menu,
    RippleModule,
    Ripple,
    ConfirmDialogModule,
    ConfirmDialog,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.vehicules-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .vehicules-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .vehicules-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-action-btn[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-vehicule-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-vehicule-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-avatar-img[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .vehicules-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vehicules-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-vehicule-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-vehicule-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeListe, [{
    type: Component,
    args: [{ selector: "app-vehicule-liste", standalone: true, imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      SkeletonModule,
      TagModule,
      TooltipModule,
      InputIconModule,
      IconFieldModule,
      MenuModule,
      RippleModule,
      ConfirmDialogModule,
      PhoneFormatPipe
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />\r
<p-confirmdialog />\r
\r
<!-- ===== VUE MOBILE (\u2264768px) ===== -->\r
<div class="vehicules-mobile-app">\r
\r
  <header class="mobile-header">\r
    <button\r
      pButton pRipple\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text mobile-action-btn"\r
      aria-label="Retour"\r
      (click)="goBack()"\r
    ></button>\r
    <div class="mobile-title-wrap">\r
      <h1 class="mobile-title">V\xE9hicules</h1>\r
      <p class="mobile-subtitle">{{ total() }} v\xE9hicule{{ total() > 1 ? 's' : '' }}</p>\r
    </div>\r
    <p-menu #filterMenu [model]="mobileFilterMenuItems" [popup]="true" appendTo="body" />\r
    <button\r
      pButton pRipple\r
      icon="pi pi-filter"\r
      class="p-button-rounded p-button-text mobile-action-btn"\r
      aria-label="Filtrer"\r
      (click)="filterMenu.toggle($event)"\r
    ></button>\r
  </header>\r
\r
  <div class="mobile-scroll">\r
\r
    <section class="mobile-search">\r
      <p-iconfield iconPosition="left">\r
        <p-inputicon class="pi pi-search" />\r
        <input\r
          pInputText\r
          type="text"\r
          [ngModel]="searchQuery()"\r
          (ngModelChange)="searchQuery.set($event)"\r
          placeholder="Nom, immatriculation\u2026"\r
          class="w-full"\r
        />\r
      </p-iconfield>\r
    </section>\r
\r
    @if (!loading && filteredVehicules().length) {\r
      <section class="mobile-list">\r
        @for (v of filteredVehicules(); track v.id) {\r
          <article class="mobile-vehicule-card" (click)="goEdit(v)">\r
\r
            @if (v.photo_url) {\r
              <img class="mobile-card-avatar-img" [src]="v.photo_url" [alt]="v.nom_vehicule" />\r
            } @else {\r
              <div class="mobile-card-avatar" aria-hidden="true">{{ getInitials(v) }}</div>\r
            }\r
\r
            <div class="mobile-card-body">\r
              <div class="mobile-card-name">{{ v.nom_vehicule }}</div>\r
              <div class="mobile-card-meta">{{ v.immatriculation }} \xB7 {{ getTypeLabel(v) }}</div>\r
              <div class="mobile-card-footer">\r
                <p-tag\r
                  [value]="v.is_active ? 'Actif' : 'Inactif'"\r
                  [severity]="v.is_active ? 'success' : 'warn'"\r
                  styleClass="mobile-status-tag"\r
                />\r
                <div class="mobile-card-actions">\r
                  @if (canUpdate) {\r
                    <button\r
                      pButton pRipple\r
                      icon="pi pi-pencil"\r
                      class="p-button-rounded p-button-text p-button-sm"\r
                      pTooltip="Modifier" tooltipPosition="top"\r
                      (click)="goEdit(v); $event.stopPropagation()"\r
                    ></button>\r
                    <button\r
                      pButton pRipple\r
                      [icon]="v.is_active ? 'pi pi-lock' : 'pi pi-lock-open'"\r
                      [severity]="v.is_active ? 'warn' : 'success'"\r
                      class="p-button-rounded p-button-text p-button-sm"\r
                      [pTooltip]="v.is_active ? 'D\xE9sactiver' : 'Activer'" tooltipPosition="top"\r
                      (click)="toggleStatus(v); $event.stopPropagation()"\r
                    ></button>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
\r
          </article>\r
        }\r
      </section>\r
    }\r
\r
    @if (loading) {\r
      <div class="mobile-state">Chargement\u2026</div>\r
    }\r
\r
    @if (!loading && filteredVehicules().length === 0) {\r
      <div class="mobile-state">Aucun v\xE9hicule trouv\xE9.</div>\r
    }\r
\r
  </div>\r
\r
  @if (canCreate) {\r
    <button\r
      type="button"\r
      class="mobile-fab"\r
      aria-label="Nouveau v\xE9hicule"\r
      (click)="goNew()"\r
    >\r
      <i class="pi pi-plus"></i>\r
    </button>\r
  }\r
</div>\r
\r
<!-- ===== VUE DESKTOP (>768px) \u2014 inchang\xE9e ===== -->\r
<div class="vehicules-desktop">\r
  <div class="card">\r
    <p-table\r
      #dt\r
      [value]="filteredVehicules()"\r
      [loading]="loading"\r
      [paginator]="true"\r
      paginatorDropdownAppendTo="body"\r
      [rows]="10"\r
      [rowsPerPageOptions]="[10, 25, 50]"\r
      responsiveLayout="scroll"\r
      currentPageReportTemplate="  {first} / {last} de {totalRecords} v\xE9hicules"\r
      [showCurrentPageReport]="true"\r
      [rowHover]="true"\r
    >\r
      <ng-template #caption>\r
        <div class="flex flex-wrap gap-2 items-center justify-between">\r
          <p-iconfield class="w-full sm:w-80 order-1 sm:order-0">\r
            <p-inputicon class="pi pi-search" />\r
            <input\r
              pInputText\r
              type="text"\r
              placeholder="Rechercher un v\xE9hicule..."\r
              [ngModel]="searchQuery()"\r
              (ngModelChange)="searchQuery.set($event)"\r
              class="w-full"\r
            />\r
          </p-iconfield>\r
          <div class="flex gap-2 w-full sm:w-auto flex-order-0 sm:flex-order-1">\r
            @if (canCreate) {\r
              <button\r
                (click)="goNew()"\r
                pButton\r
                outlined\r
                class="flex-shrink-0"\r
                icon="pi pi-plus"\r
                label="Nouveau"\r
              ></button>\r
            }\r
          </div>\r
        </div>\r
      </ng-template>\r
\r
      <ng-template #header>\r
        <tr>\r
          <th pSortableColumn="nom_vehicule">\r
            <span class="flex items-center gap-2">\r
              V\xE9hicule <p-sortIcon field="nom_vehicule" />\r
            </span>\r
          </th>\r
          <th pSortableColumn="immatriculation" class="hidden sm:table-cell" style="width:12%">\r
            <span class="flex items-center gap-2">\r
              Immatriculation <p-sortIcon field="immatriculation" />\r
            </span>\r
          </th>\r
          <th class="hidden md:table-cell" style="width:9%">Type</th>\r
          <th class="hidden lg:table-cell" style="width:17%">Propri\xE9taire</th>\r
          <th class="hidden lg:table-cell" style="width:17%">Livreur</th>\r
          <th class="hidden sm:table-cell text-center" style="width:9%">Statut</th>\r
          @if (canUpdate || canDelete) {\r
            <th class="text-center" style="width:5%">Actions</th>\r
          }\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template #body let-v>\r
        <tr>\r
          <td>\r
            <div class="flex items-center gap-2">\r
              @if (v.photo_url) {\r
                <img\r
                  [src]="v.photo_url"\r
                  [alt]="v.nom_vehicule"\r
                  class="rounded flex-shrink-0"\r
                  style="width:48px;height:48px;object-fit:cover"\r
                />\r
              } @else {\r
                <span\r
                  class="inline-flex items-center justify-center rounded bg-primary text-white font-bold text-sm flex-shrink-0"\r
                  style="width:48px;height:48px"\r
                >\r
                  {{ getInitials(v) }}\r
                </span>\r
              }\r
              <div class="min-w-0">\r
                <div class="font-medium truncate">{{ v.nom_vehicule }}</div>\r
                @if (v.marque || v.modele) {\r
                  <div class="text-xs text-surface-400">{{ v.marque }} {{ v.modele }}</div>\r
                }\r
                <code class="sm:hidden text-xs surface-100 px-1 py-0.5 rounded">{{ v.immatriculation }}</code>\r
                <div class="sm:hidden mt-1">\r
                  <p-tag\r
                    [value]="v.is_active ? 'Actif' : 'Inactif'"\r
                    [severity]="v.is_active ? 'success' : 'warn'"\r
                  />\r
                </div>\r
              </div>\r
            </div>\r
          </td>\r
\r
          <td class="hidden sm:table-cell">\r
            <code class="text-sm surface-100 px-2 py-1 border-round">{{ v.immatriculation }}</code>\r
          </td>\r
\r
          <td class="hidden md:table-cell text-sm">{{ getTypeLabel(v) }}</td>\r
\r
          <td class="hidden lg:table-cell">\r
            @if (v.proprietaire) {\r
              <span class="font-medium text-sm">{{ v.proprietaire.prenom }} {{ v.proprietaire.nom }}</span>\r
              <br />\r
              <span class="text-surface-400 text-xs">{{ v.proprietaire.phone | phoneFormat }}</span>\r
            } @else {\r
              <span class="text-surface-400">\u2014</span>\r
            }\r
          </td>\r
\r
          <td class="hidden lg:table-cell">\r
            @if (v.livreur_principal) {\r
              <span class="font-medium text-sm">{{ v.livreur_principal.prenom }} {{ v.livreur_principal.nom }}</span>\r
              <br />\r
              <span class="text-surface-400 text-xs">{{ v.livreur_principal.phone | phoneFormat }}</span>\r
            } @else {\r
              <span class="text-surface-400">\u2014</span>\r
            }\r
          </td>\r
\r
          <td class="hidden sm:table-cell text-center">\r
            <p-tag\r
              [value]="v.is_active ? 'Actif' : 'Inactif'"\r
              [severity]="v.is_active ? 'success' : 'warn'"\r
            />\r
          </td>\r
\r
          @if (canUpdate || canDelete) {\r
            <td>\r
              <div class="flex gap-1 justify-center">\r
                @if (canUpdate) {\r
                  <button pButton type="button" icon="pi pi-pen-to-square"\r
                          text rounded size="small"\r
                          pTooltip="Modifier" tooltipPosition="top"\r
                          (click)="goEdit(v)"></button>\r
                  <button pButton type="button"\r
                          [icon]="v.is_active ? 'pi pi-lock' : 'pi pi-lock-open'"\r
                          [severity]="v.is_active ? 'warn' : 'success'"\r
                          text rounded size="small"\r
                          [pTooltip]="v.is_active ? 'D\xE9sactiver' : 'Activer'" tooltipPosition="top"\r
                          (click)="toggleStatus(v)"></button>\r
                }\r
                @if (canDelete) {\r
                  <button pButton type="button" icon="pi pi-trash"\r
                          severity="danger" text rounded size="small"\r
                          pTooltip="Supprimer" tooltipPosition="top"\r
                          (click)="deleteVehicule(v)"></button>\r
                }\r
              </div>\r
            </td>\r
          }\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template #emptymessage>\r
        <tr>\r
          <td [attr.colspan]="(canUpdate || canDelete) ? 7 : 6" class="text-center py-8">\r
            <div class="flex flex-col items-center gap-3 text-surface-500">\r
              <i class="pi pi-car text-4xl"></i>\r
              <span>Aucun v\xE9hicule trouv\xE9</span>\r
            </div>\r
          </td>\r
        </tr>\r
      </ng-template>\r
\r
      <ng-template #loadingbody>\r
        @for (_ of [1, 2, 3, 4, 5]; track $index) {\r
          <tr>\r
            @for (__ of [1, 2, 3, 4, 5, 6, 7]; track $index) {\r
              <td><p-skeleton /></td>\r
            }\r
          </tr>\r
        }\r
      </ng-template>\r
    </p-table>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/vehicules/vehicules/vehicule-liste/vehicule-liste.scss */\n:host {\n  display: block;\n}\n.vehicules-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .vehicules-desktop {\n    display: none;\n  }\n  .vehicules-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-action-btn {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-vehicule-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-vehicule-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-avatar-img {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .vehicules-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-vehicule-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-liste.css.map */\n"] }]
  }], () => [{ type: VehiculeService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeListe, { className: "VehiculeListe", filePath: "src/app/pages/vehicules/vehicules/vehicule-liste/vehicule-liste.ts", lineNumber: 51 });
})();

// src/app/services/proprietaires/proprietaire.service.ts
var ProprietaireService = class _ProprietaireService {
  http;
  baseUrl = `${environment.apiUrl}/proprietaires`;
  constructor(http) {
    this.http = http;
  }
  getAll(statut) {
    if (statut) {
      return this.http.get(this.baseUrl, { params: { statut } });
    }
    return this.http.get(this.baseUrl);
  }
  getOne(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function ProprietaireService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProprietaireService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProprietaireService, factory: _ProprietaireService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProprietaireService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/services/livreurs/livreur.service.ts
var LivreurService = class _LivreurService {
  http;
  baseUrl = `${environment.apiUrl}/livreurs`;
  constructor(http) {
    this.http = http;
  }
  getAll(statut) {
    if (statut) {
      return this.http.get(this.baseUrl, { params: { statut } });
    }
    return this.http.get(this.baseUrl);
  }
  getOne(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(this.baseUrl, data);
  }
  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static \u0275fac = function LivreurService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivreurService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LivreurService, factory: _LivreurService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivreurService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/vehicules/vehicules/vehicule-form/vehicule-form.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c12 = () => ({ standalone: true });
function VehiculeForm_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isEditMode ? "Mise a jour du vehicule..." : "Creation du vehicule...");
  }
}
function VehiculeForm_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function VehiculeForm_Conditional_23_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removePhoto());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.photoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("raised", true);
  }
}
function VehiculeForm_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 38);
    \u0275\u0275listener("click", function VehiculeForm_Conditional_24_Template_label_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const photoInput_r4 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(photoInput_r4.click());
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "jpg, png, webp \u2014 max 3 Mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 41, 0);
    \u0275\u0275listener("change", function VehiculeForm_Conditional_24_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhotoChange($event));
    });
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Le nom du v\xE9hicule est requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "L'immatriculation est requise.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Le type est requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_58_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, "Veuillez s\xE9lectionner une usine. ");
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 21);
    \u0275\u0275text(2, " Usine ");
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p-select", 42);
    \u0275\u0275listener("ngModelChange", function VehiculeForm_Conditional_58_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUsineChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, VehiculeForm_Conditional_58_Conditional_6_Template, 3, 0, "small", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r0.usineOptions())("ngModel", ctx_r0.usineContext.currentUsineId())("ngModelOptions", \u0275\u0275pureFunction0(5, _c12))("ngClass", \u0275\u0275pureFunction1(6, _c02, ctx_r0.usineContext.currentUsineId() === null));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.usineContext.currentUsineId() === null ? 6 : -1);
  }
}
function VehiculeForm_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 28);
  }
}
function VehiculeForm_Conditional_65_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", p_r6.prenom[0], "", p_r6.nom[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r6.prenom, " ", p_r6.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, p_r6.phone));
  }
}
function VehiculeForm_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-select", 29);
    \u0275\u0275template(1, VehiculeForm_Conditional_65_ng_template_1_Template, 9, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r0.proprietaires())("filter", true)("ngClass", \u0275\u0275pureFunction1(3, _c02, ctx_r0.isInvalid("proprietaire_id")));
  }
}
function VehiculeForm_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Veuillez s\xE9lectionner un propri\xE9taire.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeForm_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, "Aucun propri\xE9taire. ");
    \u0275\u0275elementStart(3, "a", 48);
    \u0275\u0275listener("click", function VehiculeForm_Conditional_67_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.router.navigate(["/vehicules/proprietaires"]));
    });
    \u0275\u0275text(4, "En cr\xE9er un");
    \u0275\u0275elementEnd()();
  }
}
function VehiculeForm_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 28);
  }
}
function VehiculeForm_Conditional_74_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", l_r8.prenom[0], "", l_r8.nom[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", l_r8.prenom, " ", l_r8.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, l_r8.phone));
  }
}
function VehiculeForm_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-select", 31);
    \u0275\u0275template(1, VehiculeForm_Conditional_74_ng_template_1_Template, 9, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r0.livreurs())("filter", true)("showClear", true);
  }
}
function VehiculeForm_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 50);
    \u0275\u0275text(5, " Activer ou d\xE9sactiver ce v\xE9hicule. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275element(7, "p-toggleswitch", 52);
    \u0275\u0275elementStart(8, "label", 53);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = ctx_r0.form.get("is_active")) == null ? null : tmp_1_0.value) ? "Actif" : "Inactif", " ");
  }
}
var VehiculeForm = class _VehiculeForm {
  fb;
  vehiculeService;
  proprietaireService;
  livreurService;
  usineService;
  messageService;
  router;
  usineContext;
  vehicule;
  get isEditMode() {
    return !!this.vehicule;
  }
  form;
  loading = false;
  loadingData = false;
  photoFile = null;
  photoPreview = null;
  usineOptions = signal([], ...ngDevMode ? [{ debugName: "usineOptions" }] : []);
  proprietaires = signal([], ...ngDevMode ? [{ debugName: "proprietaires" }] : []);
  livreurs = signal([], ...ngDevMode ? [{ debugName: "livreurs" }] : []);
  typeVehiculeOptions = TYPE_VEHICULE_OPTIONS;
  constructor(fb, vehiculeService, proprietaireService, livreurService, usineService, messageService, router, usineContext) {
    this.fb = fb;
    this.vehiculeService = vehiculeService;
    this.proprietaireService = proprietaireService;
    this.livreurService = livreurService;
    this.usineService = usineService;
    this.messageService = messageService;
    this.router = router;
    this.usineContext = usineContext;
    this.buildForm();
  }
  ngOnInit() {
    if (this.vehicule) {
      this.applyVehiculeToForm(this.vehicule);
    }
    const fromContext = this.usineContext.accessibleUsines();
    if (fromContext.length > 0) {
      this.usineOptions.set(fromContext);
    } else {
      this.usineService.getAll().subscribe({
        next: (resp) => {
          const list = (resp.data ?? []).map((u) => ({
            id: u.id,
            nom: u.nom,
            code: u.code,
            type: u.type,
            statut: u.statut
          }));
          this.usineOptions.set(list);
          if (list.length > 0 && this.usineContext.currentUsineId() === null) {
            const fallback = list.find((u) => u.id === this.usineContext.defaultUsineId()) ?? list[0];
            this.usineContext.switchUsine(fallback.id);
          }
        },
        error: () => {
        }
      });
    }
    this.loadingData = true;
    forkJoin({
      proprietaires: this.proprietaireService.getAll("actif"),
      livreurs: this.livreurService.getAll("actif")
    }).subscribe({
      next: ({ proprietaires, livreurs }) => {
        this.proprietaires.set((proprietaires.data?.data ?? []).map((p) => __spreadProps(__spreadValues({}, p), {
          _label: `${p.prenom} ${p.nom} - ${p.phone}`
        })));
        this.livreurs.set((livreurs.data?.data ?? []).map((l) => __spreadProps(__spreadValues({}, l), {
          _label: `${l.prenom} ${l.nom} - ${l.phone}`
        })));
        this.loadingData = false;
      },
      error: () => {
        this.loadingData = false;
        this.messageService.add({
          severity: "warn",
          summary: "Chargement partiel",
          detail: "Impossible de charger la liste des proprietaires / livreurs.",
          life: 5e3
        });
      }
    });
  }
  buildForm() {
    this.form = this.fb.group({
      nom_vehicule: ["", [Validators.required, Validators.maxLength(100)]],
      marque: [null, Validators.maxLength(100)],
      modele: [null, Validators.maxLength(100)],
      immatriculation: ["", [Validators.required, Validators.maxLength(20)]],
      type_vehicule: [null, Validators.required],
      capacite_packs: [null],
      proprietaire_id: [null, Validators.required],
      livreur_principal_id: [null],
      is_active: [true]
    });
  }
  get usineMissing() {
    return !this.isEditMode && this.usineContext.currentUsineId() === null;
  }
  onUsineChange(id) {
    this.usineContext.switchUsine(id);
  }
  onTypeVehiculeChange(type) {
    const ctrl = this.form.get("capacite_packs");
    if (!ctrl || ctrl.value || !type)
      return;
    const def = CAPACITE_DEFAULTS[type];
    if (def)
      ctrl.setValue(def);
  }
  onPhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    this.photoFile = file;
    const reader = new FileReader();
    reader.onload = () => this.photoPreview = reader.result;
    reader.readAsDataURL(file);
  }
  removePhoto() {
    this.photoFile = null;
    this.photoPreview = null;
  }
  isInvalid(name) {
    const c = this.form.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  onSubmit() {
    if (this.usineMissing) {
      this.messageService.add({
        severity: "warn",
        summary: "Usine requise",
        detail: "Veuillez selectionner une usine.",
        life: 5e3
      });
      return;
    }
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const req$ = this.isEditMode ? this.vehiculeService.update(this.vehicule.id, this.buildFormData()) : this.vehiculeService.create(this.buildFormData());
    req$.subscribe({
      next: (response) => {
        if (this.isEditMode && this.vehicule) {
          this.reloadEditedVehicule(this.vehicule.id);
          return;
        }
        this.loading = false;
        const createdId = response?.data?.id;
        if (createdId) {
          this.router.navigate(["/vehicules", createdId, "edit"]);
          return;
        }
        this.messageService.add({
          severity: "warn",
          summary: "Creation terminee",
          detail: "Vehicule cree, mais l'identifiant est introuvable pour ouvrir l'edition.",
          life: 4e3
        });
        this.router.navigate(["/vehicules"]);
      },
      error: (err) => {
        this.loading = false;
        this.handleApiError(err);
      }
    });
  }
  buildFormData() {
    const v = this.form.value;
    const fd = new FormData();
    if (!this.isEditMode) {
      const usineId = this.usineContext.currentUsineId();
      if (usineId != null) {
        fd.append("usine_id", String(usineId));
      }
    }
    fd.append("nom_vehicule", v.nom_vehicule);
    if (v.marque)
      fd.append("marque", v.marque);
    if (v.modele)
      fd.append("modele", v.modele);
    fd.append("immatriculation", v.immatriculation);
    fd.append("type_vehicule", v.type_vehicule);
    if (v.capacite_packs != null)
      fd.append("capacite_packs", String(v.capacite_packs));
    fd.append("proprietaire_id", String(v.proprietaire_id));
    if (v.livreur_principal_id != null)
      fd.append("livreur_principal_id", String(v.livreur_principal_id));
    fd.append("is_active", v.is_active ? "1" : "0");
    if (this.photoFile)
      fd.append("photo", this.photoFile);
    return fd;
  }
  reloadEditedVehicule(id) {
    this.vehiculeService.getOne(id).subscribe({
      next: (resp) => {
        this.vehicule = resp.data;
        this.applyVehiculeToForm(resp.data);
        this.photoFile = null;
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Vehicule mis a jour avec succes.",
          life: 3e3
        });
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: "warn",
          summary: "Mise a jour enregistree",
          detail: "Le vehicule est modifie mais le rechargement a echoue.",
          life: 5e3
        });
      }
    });
  }
  applyVehiculeToForm(vehicule) {
    this.photoPreview = vehicule.photo_url ?? null;
    this.form.patchValue({
      nom_vehicule: vehicule.nom_vehicule,
      marque: vehicule.marque ?? null,
      modele: vehicule.modele ?? null,
      immatriculation: vehicule.immatriculation,
      type_vehicule: vehicule.type_vehicule,
      capacite_packs: vehicule.capacite_packs,
      proprietaire_id: vehicule.proprietaire_id,
      livreur_principal_id: vehicule.livreur_principal_id ?? null,
      is_active: vehicule.is_active
    });
  }
  onCancel() {
    this.router.navigate(["/vehicules"]);
  }
  handleApiError(err) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat();
      msgs.forEach((m) => this.messageService.add({
        severity: "error",
        summary: "Erreur de validation",
        detail: m,
        life: 5e3
      }));
      return;
    }
    const configs = {
      401: {
        severity: "error",
        summary: "Session expiree",
        detail: "Votre session a expire. Veuillez vous reconnecter."
      },
      403: {
        severity: "error",
        summary: "Acces refuse",
        detail: "Vous n'avez pas la permission."
      },
      409: {
        severity: "warn",
        summary: "Conflit",
        detail: err.error?.message || "Cette immatriculation existe deja pour cette usine."
      },
      0: {
        severity: "error",
        summary: "Serveur inaccessible",
        detail: "Impossible de joindre le serveur."
      }
    };
    const cfg = configs[err.status] ?? {
      severity: "error",
      summary: `Erreur ${err.status || ""}`.trim(),
      detail: err.error?.message || "Une erreur inattendue est survenue."
    };
    this.messageService.add(__spreadProps(__spreadValues({}, cfg), { life: 5e3 }));
  }
  static \u0275fac = function VehiculeForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(ProprietaireService), \u0275\u0275directiveInject(LivreurService), \u0275\u0275directiveInject(UsineService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UsineContextService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeForm, selectors: [["app-vehicule-form"]], inputs: { vehicule: "vehicule" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 79, vars: 32, consts: [["photoInput", ""], ["item", ""], [1, "card", "vehicule-form"], ["aria-live", "polite", "aria-busy", "true", 1, "vf-loading-overlay"], [1, "mobile-vf-header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-vf-back", 3, "click"], [1, "mobile-vf-title-wrap"], [1, "mobile-vf-title"], [2, "width", "2.25rem", "flex-shrink", "0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold", "mb-6", "block", "vf-desktop-title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "vf-section", "grid", "grid-cols-12", "gap-4", "pb-8", "mb-8", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "vf-section-label", "col-span-12", "lg:col-span-2"], [1, "vf-section-title", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "col-span-12", "lg:col-span-10"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "flex", "flex-col", "items-start", "gap-2", "photo-upload-section"], [1, "vf-label", "font-medium", "text-surface-900", "dark:text-surface-0", "block"], [1, "text-surface-400", "text-sm", "font-normal", "ml-1"], [1, "vf-photo-preview", "relative", "inline-block"], [1, "vf-field", "mb-4", "col-span-12", "md:col-span-6", "flex", "flex-col", "gap-1"], [1, "vf-label", "font-medium", "text-surface-900", "dark:text-surface-0", "mb-1", "block"], [1, "text-red-500"], ["pInputText", "", "fluid", "", "formControlName", "nom_vehicule", "placeholder", "Ex : Camion Bleu 01"], ["pInputText", "", "fluid", "", "formControlName", "immatriculation", "placeholder", "RC-1234-AB"], ["formControlName", "type_vehicule", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner\u2026", "styleClass", "w-full", 3, "onChange", "options", "ngClass"], ["formControlName", "capacite_packs", "placeholder", "300", "styleClass", "w-full", 3, "min", "useGrouping"], [1, "vf-field", "mb-4", "col-span-12", "flex", "flex-col", "gap-1"], ["height", "2.5rem"], ["formControlName", "proprietaire_id", "optionLabel", "_label", "optionValue", "id", "placeholder", "Choisir un propri\xE9taire\u2026", "filterBy", "nom,prenom,phone", "styleClass", "w-full", "emptyMessage", "Aucun propri\xE9taire disponible", 3, "options", "filter", "ngClass"], [1, "text-orange-500"], ["formControlName", "livreur_principal_id", "optionLabel", "_label", "optionValue", "id", "placeholder", "Choisir un livreur\u2026 (optionnel)", "filterBy", "nom,prenom,phone", "styleClass", "w-full", "emptyMessage", "Aucun livreur disponible", 3, "options", "filter", "showClear"], [1, "vf-actions", "col-span-12", "flex", "gap-2", "justify-end"], ["pButton", "", "pRipple", "", "type", "button", "text", "", "label", "Annuler", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-check", 3, "label", "loading", "disabled"], [1, "pi", "pi-spin", "pi-spinner", "text-xl"], ["alt", "Aper\xE7u", 1, "rounded", "border", "border-surface-200", 2, "max-height", "9rem", "max-width", "18rem", "object-fit", "cover", "display", "block", 3, "src"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", "severity", "danger", "size", "small", 1, "absolute", "top-0", "right-0", "m-1", 3, "click", "rounded", "raised"], [1, "vf-upload-zone", "flex", "flex-col", "items-center", "justify-center", "cursor-pointer", "rounded", "border-2", "border-dashed", "surface-100", "hover:surface-200", "transition-colors", 2, "min-height", "7rem", "max-width", "18rem", "width", "100%", 3, "click"], [1, "pi", "pi-cloud-upload", "text-2xl", "text-surface-400", "mb-2"], [1, "text-surface-400", "text-sm", "text-center", "px-3"], ["type", "file", "accept", "image/jpeg,image/png,image/webp", 1, "hidden", 3, "change"], ["optionLabel", "nom", "optionValue", "id", "placeholder", "Choisir l'usine pour ce v\xE9hicule\u2026", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "ngModelOptions", "ngClass"], [1, "pi", "pi-exclamation-triangle", "mr-1"], [1, "flex", "items-center", "gap-2"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-white", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "1.75rem", "height", "1.75rem"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-surface-500"], [1, "text-primary", "cursor-pointer", "font-medium", 3, "click"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary-100", "text-primary", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "1.75rem", "height", "1.75rem"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal"], [1, "col-span-12", "lg:col-span-10", "flex", "items-center", "gap-3"], ["formControlName", "is_active", "inputId", "is_active"], ["for", "is_active", 1, "cursor-pointer", "text-sm", "font-medium", "text-surface-900", "dark:text-surface-0"]], template: function VehiculeForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275conditionalCreate(2, VehiculeForm_Conditional_2_Template, 4, 1, "div", 3);
      \u0275\u0275elementStart(3, "header", 4)(4, "button", 5);
      \u0275\u0275listener("click", function VehiculeForm_Template_button_click_4_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6)(6, "h1", 7);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 9);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "form", 10);
      \u0275\u0275listener("ngSubmit", function VehiculeForm_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13);
      \u0275\u0275text(15, "V\xE9hicule");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "label", 17);
      \u0275\u0275text(20, " Photo du v\xE9hicule ");
      \u0275\u0275elementStart(21, "span", 18);
      \u0275\u0275text(22, "(optionnelle)");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(23, VehiculeForm_Conditional_23_Template, 3, 3, "div", 19)(24, VehiculeForm_Conditional_24_Template, 6, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 20)(26, "label", 21);
      \u0275\u0275text(27, " Nom du v\xE9hicule ");
      \u0275\u0275elementStart(28, "span", 22);
      \u0275\u0275text(29, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(30, "input", 23);
      \u0275\u0275conditionalCreate(31, VehiculeForm_Conditional_31_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 20)(33, "label", 21);
      \u0275\u0275text(34, " Immatriculation ");
      \u0275\u0275elementStart(35, "span", 22);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(37, "input", 24);
      \u0275\u0275conditionalCreate(38, VehiculeForm_Conditional_38_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 20)(40, "label", 21);
      \u0275\u0275text(41, " Type de v\xE9hicule ");
      \u0275\u0275elementStart(42, "span", 22);
      \u0275\u0275text(43, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p-select", 25);
      \u0275\u0275listener("onChange", function VehiculeForm_Template_p_select_onChange_44_listener($event) {
        return ctx.onTypeVehiculeChange($event.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(45, VehiculeForm_Conditional_45_Template, 2, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 20)(47, "label", 21);
      \u0275\u0275text(48, " Capacit\xE9 (packs) ");
      \u0275\u0275elementStart(49, "span", 18);
      \u0275\u0275text(50, "\u2014 auto selon type");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "p-inputNumber", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 11)(53, "div", 12)(54, "div", 13);
      \u0275\u0275text(55, "Rattachement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 14)(57, "div", 15);
      \u0275\u0275conditionalCreate(58, VehiculeForm_Conditional_58_Template, 7, 8, "div", 27);
      \u0275\u0275elementStart(59, "div", 20)(60, "label", 21);
      \u0275\u0275text(61, " Propri\xE9taire ");
      \u0275\u0275elementStart(62, "span", 22);
      \u0275\u0275text(63, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(64, VehiculeForm_Conditional_64_Template, 1, 0, "p-skeleton", 28)(65, VehiculeForm_Conditional_65_Template, 3, 5, "p-select", 29);
      \u0275\u0275conditionalCreate(66, VehiculeForm_Conditional_66_Template, 2, 0, "small", 22);
      \u0275\u0275conditionalCreate(67, VehiculeForm_Conditional_67_Template, 5, 0, "small", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 20)(69, "label", 21);
      \u0275\u0275text(70, " Livreur principal ");
      \u0275\u0275elementStart(71, "span", 18);
      \u0275\u0275text(72, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(73, VehiculeForm_Conditional_73_Template, 1, 0, "p-skeleton", 28)(74, VehiculeForm_Conditional_74_Template, 3, 3, "p-select", 31);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(75, VehiculeForm_Conditional_75_Template, 10, 1, "div", 11);
      \u0275\u0275elementStart(76, "div", 32)(77, "button", 33);
      \u0275\u0275listener("click", function VehiculeForm_Template_button_click_77_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(78, "button", 34);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 2 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Modifier le v\xE9hicule" : "Nouveau v\xE9hicule");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Modifier le v\xE9hicule" : "Nouveau v\xE9hicule", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.photoPreview ? 23 : 24);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("nom_vehicule"))("ng-dirty", ctx.isInvalid("nom_vehicule"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("nom_vehicule") ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("immatriculation"))("ng-dirty", ctx.isInvalid("immatriculation"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("immatriculation") ? 38 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.typeVehiculeOptions)("ngClass", \u0275\u0275pureFunction1(30, _c02, ctx.isInvalid("type_vehicule")));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("type_vehicule") ? 45 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("min", 1)("useGrouping", false);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.isEditMode ? 58 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadingData ? 64 : 65);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isInvalid("proprietaire_id") ? 66 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loadingData && ctx.proprietaires().length === 0 ? 67 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadingData ? 73 : 74);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEditMode ? 75 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode ? "Enregistrer les modifications" : "Cr\xE9er le v\xE9hicule")("loading", ctx.loading)("disabled", ctx.usineMissing || ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    NgModel,
    ButtonModule,
    ButtonDirective,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    SelectModule,
    Select,
    ToastModule,
    Toast,
    TooltipModule,
    MessageModule,
    SkeletonModule,
    Skeleton,
    ToggleSwitchModule,
    ToggleSwitch,
    PhoneFormatPipe
  ], styles: ["\n\n.vehicule-form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.vf-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  color: #334155;\n  font-weight: 600;\n}\n.app-dark[_nghost-%COMP%]   .vf-loading-overlay[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vf-loading-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.55);\n  color: var(--p-surface-100);\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.mobile-vf-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .vehicule-form[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    min-height: 100dvh;\n  }\n  .vf-desktop-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-vf-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-vf-back[_ngcontent-%COMP%], \n   .mobile-vf-save[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-vf-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-vf-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .photo-upload-section[_ngcontent-%COMP%] {\n    order: -1;\n    align-items: stretch !important;\n  }\n  .vf-photo-preview[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n  .vf-photo-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    max-height: 14rem !important;\n    width: 100% !important;\n    border-radius: 0.75rem !important;\n    border: none !important;\n    object-fit: cover !important;\n    display: block;\n  }\n  .vf-upload-zone[_ngcontent-%COMP%] {\n    max-width: 100% !important;\n    width: 100% !important;\n    min-height: 9rem !important;\n    border-radius: 0.75rem !important;\n  }\n  .vf-section[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .vf-section-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .vf-field[_ngcontent-%COMP%]   .vf-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .photo-upload-section[_ngcontent-%COMP%]    > .vf-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n  }\n  .vf-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .vf-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .app-dark[_nghost-%COMP%]   .vehicule-form[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vehicule-form[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-vf-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-vf-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-vf-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-vf-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-100);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-vf-back[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-vf-back[_ngcontent-%COMP%], \n   .app-dark[_nghost-%COMP%]   .mobile-vf-save[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-vf-save[_ngcontent-%COMP%] {\n    color: var(--p-primary-400) !important;\n    background: rgba(var(--p-primary-400-rgb, 95, 107, 255), 0.1) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .vf-section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vf-section[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .vf-section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vf-section-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .vf-field[_ngcontent-%COMP%]   .vf-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vf-field[_ngcontent-%COMP%]   .vf-label[_ngcontent-%COMP%], \n   .app-dark[_nghost-%COMP%]   .photo-upload-section[_ngcontent-%COMP%]    > .vf-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .photo-upload-section[_ngcontent-%COMP%]    > .vf-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .vf-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vf-actions[_ngcontent-%COMP%] {\n    background: rgba(var(--p-surface-900-rgb, 15, 23, 42), 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeForm, [{
    type: Component,
    args: [{ selector: "app-vehicule-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      InputTextModule,
      InputNumberModule,
      SelectModule,
      ToastModule,
      TooltipModule,
      MessageModule,
      SkeletonModule,
      ToggleSwitchModule,
      PhoneFormatPipe
    ], providers: [MessageService], template: `<p-toast />

<div class="card vehicule-form">
  @if (loading) {
    <div class="vf-loading-overlay" aria-live="polite" aria-busy="true">
      <i class="pi pi-spin pi-spinner text-xl"></i>
      <span>{{ isEditMode ? 'Mise a jour du vehicule...' : 'Creation du vehicule...' }}</span>
    </div>
  }

  <!-- \u2550\u2550\u2550 HEADER MOBILE (sticky, cach\xE9 sur desktop via SCSS) \u2550\u2550\u2550 -->
  <header class="mobile-vf-header">
    <button
      pButton pRipple type="button"
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-vf-back"
      aria-label="Retour"
      (click)="onCancel()"
    ></button>
    <div class="mobile-vf-title-wrap">
      <h1 class="mobile-vf-title">{{ isEditMode ? 'Modifier le v\xE9hicule' : 'Nouveau v\xE9hicule' }}</h1>
    </div>
    <!-- placeholder pour garder le titre centr\xE9 -->
    <div style="width:2.25rem;flex-shrink:0"></div>
  </header>

  <!-- Titre desktop -->
  <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block vf-desktop-title">
    {{ isEditMode ? 'Modifier le v\xE9hicule' : 'Nouveau v\xE9hicule' }}
  </span>

  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

    <!-- \u2550\u2550 Section 1 : V\xE9hicule \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="vf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
      <div class="vf-section-label col-span-12 lg:col-span-2">
        <div class="vf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">V\xE9hicule</div>
      </div>
      <div class="col-span-12 lg:col-span-10">
        <div class="grid grid-cols-12 gap-4">

          <!-- Photo (remontera via order: -1 sur mobile) -->
          <div class="col-span-12 flex flex-col items-start gap-2 photo-upload-section">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 block">
              Photo du v\xE9hicule
              <span class="text-surface-400 text-sm font-normal ml-1">(optionnelle)</span>
            </label>
            @if (photoPreview) {
              <div class="vf-photo-preview relative inline-block">
                <img [src]="photoPreview" alt="Aper\xE7u"
                     class="rounded border border-surface-200"
                     style="max-height:9rem;max-width:18rem;object-fit:cover;display:block" />
                <button pButton pRipple type="button" icon="pi pi-times" severity="danger" size="small"
                        [rounded]="true" [raised]="true"
                        class="absolute top-0 right-0 m-1"
                        (click)="removePhoto()"></button>
              </div>
            } @else {
              <label class="vf-upload-zone flex flex-col items-center justify-center cursor-pointer rounded border-2 border-dashed surface-100 hover:surface-200 transition-colors"
                     style="min-height:7rem;max-width:18rem;width:100%"
                     (click)="photoInput.click()">
                <i class="pi pi-cloud-upload text-2xl text-surface-400 mb-2"></i>
                <span class="text-surface-400 text-sm text-center px-3">jpg, png, webp \u2014 max 3 Mo</span>
              </label>
              <input #photoInput type="file" accept="image/jpeg,image/png,image/webp"
                     class="hidden" (change)="onPhotoChange($event)" />
            }
          </div>

          <!-- Nom du v\xE9hicule -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Nom du v\xE9hicule <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="nom_vehicule" placeholder="Ex : Camion Bleu 01"
                   [class.ng-invalid]="isInvalid('nom_vehicule')"
                   [class.ng-dirty]="isInvalid('nom_vehicule')" />
            @if (isInvalid('nom_vehicule')) {
              <small class="text-red-500">Le nom du v\xE9hicule est requis.</small>
            }
          </div>

          <!-- Immatriculation -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Immatriculation <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="immatriculation" placeholder="RC-1234-AB"
                   [class.ng-invalid]="isInvalid('immatriculation')"
                   [class.ng-dirty]="isInvalid('immatriculation')" />
            @if (isInvalid('immatriculation')) {
              <small class="text-red-500">L'immatriculation est requise.</small>
            }
          </div>

          <!-- Type de v\xE9hicule -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Type de v\xE9hicule <span class="text-red-500">*</span>
            </label>
            <p-select
              formControlName="type_vehicule"
              [options]="typeVehiculeOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="S\xE9lectionner\u2026"
              styleClass="w-full"
              (onChange)="onTypeVehiculeChange($event.value)"
              [ngClass]="{'ng-invalid ng-dirty': isInvalid('type_vehicule')}"
            />
            @if (isInvalid('type_vehicule')) {
              <small class="text-red-500">Le type est requis.</small>
            }
          </div>

          <!-- Capacit\xE9 -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Capacit\xE9 (packs)
              <span class="text-surface-400 text-sm font-normal ml-1">\u2014 auto selon type</span>
            </label>
            <p-inputNumber formControlName="capacite_packs" [min]="1" placeholder="300"
                           [useGrouping]="false" styleClass="w-full" />
          </div>

        </div>
      </div>
    </div>

    <!-- \u2550\u2550 Section 2 : Rattachement \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="vf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
      <div class="vf-section-label col-span-12 lg:col-span-2">
        <div class="vf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Rattachement</div>
      </div>
      <div class="col-span-12 lg:col-span-10">
        <div class="grid grid-cols-12 gap-4">

          <!-- Usine (cr\xE9ation uniquement) -->
          @if (!isEditMode) {
            <div class="vf-field mb-4 col-span-12 flex flex-col gap-1">
              <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
                Usine <span class="text-red-500">*</span>
              </label>
              <p-select
                [options]="usineOptions()"
                [ngModel]="usineContext.currentUsineId()"
                [ngModelOptions]="{standalone: true}"
                (ngModelChange)="onUsineChange($event)"
                optionLabel="nom"
                optionValue="id"
                placeholder="Choisir l'usine pour ce v\xE9hicule\u2026"
                styleClass="w-full"
                [ngClass]="{'ng-invalid ng-dirty': usineContext.currentUsineId() === null}"
              />
              @if (usineContext.currentUsineId() === null) {
                <small class="text-orange-500">
                  <i class="pi pi-exclamation-triangle mr-1"></i>Veuillez s\xE9lectionner une usine.
                </small>
              }
            </div>
          }

          <!-- Propri\xE9taire -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Propri\xE9taire <span class="text-red-500">*</span>
            </label>
            @if (loadingData) {
              <p-skeleton height="2.5rem" />
            } @else {
              <p-select
                formControlName="proprietaire_id"
                [options]="proprietaires()"
                optionLabel="_label"
                optionValue="id"
                placeholder="Choisir un propri\xE9taire\u2026"
                [filter]="true"
                filterBy="nom,prenom,phone"
                styleClass="w-full"
                emptyMessage="Aucun propri\xE9taire disponible"
                [ngClass]="{'ng-invalid ng-dirty': isInvalid('proprietaire_id')}"
              >
                <ng-template #item let-p>
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs flex-shrink-0"
                          style="width:1.75rem;height:1.75rem">
                      {{ p.prenom[0] }}{{ p.nom[0] }}
                    </span>
                    <div>
                      <div class="font-medium text-sm">{{ p.prenom }} {{ p.nom }}</div>
                      <div class="text-xs text-surface-500">{{ p.phone | phoneFormat }}</div>
                    </div>
                  </div>
                </ng-template>
              </p-select>
            }
            @if (isInvalid('proprietaire_id')) {
              <small class="text-red-500">Veuillez s\xE9lectionner un propri\xE9taire.</small>
            }
            @if (!loadingData && proprietaires().length === 0) {
              <small class="text-orange-500">
                <i class="pi pi-exclamation-triangle mr-1"></i>Aucun propri\xE9taire.
                <a class="text-primary cursor-pointer font-medium"
                   (click)="router.navigate(['/vehicules/proprietaires'])">En cr\xE9er un</a>
              </small>
            }
          </div>

          <!-- Livreur principal -->
          <div class="vf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="vf-label font-medium text-surface-900 dark:text-surface-0 mb-1 block">
              Livreur principal
              <span class="text-surface-400 text-sm font-normal ml-1">(optionnel)</span>
            </label>
            @if (loadingData) {
              <p-skeleton height="2.5rem" />
            } @else {
              <p-select
                formControlName="livreur_principal_id"
                [options]="livreurs()"
                optionLabel="_label"
                optionValue="id"
                placeholder="Choisir un livreur\u2026 (optionnel)"
                [filter]="true"
                filterBy="nom,prenom,phone"
                [showClear]="true"
                styleClass="w-full"
                emptyMessage="Aucun livreur disponible"
              >
                <ng-template #item let-l>
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center rounded-full bg-primary-100 text-primary font-bold text-xs flex-shrink-0"
                          style="width:1.75rem;height:1.75rem">
                      {{ l.prenom[0] }}{{ l.nom[0] }}
                    </span>
                    <div>
                      <div class="font-medium text-sm">{{ l.prenom }} {{ l.nom }}</div>
                      <div class="text-xs text-surface-500">{{ l.phone | phoneFormat }}</div>
                    </div>
                  </div>
                </ng-template>
              </p-select>
            }
          </div>

        </div>
      </div>
    </div>

    <!-- \u2550\u2550 Section 3 : Statut (mode \xE9dition uniquement) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (isEditMode) {
      <div class="vf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
        <div class="vf-section-label col-span-12 lg:col-span-2">
          <div class="vf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Statut</div>
          <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal">
            Activer ou d\xE9sactiver ce v\xE9hicule.
          </p>
        </div>
        <div class="col-span-12 lg:col-span-10 flex items-center gap-3">
          <p-toggleswitch formControlName="is_active" inputId="is_active" />
          <label for="is_active" class="cursor-pointer text-sm font-medium text-surface-900 dark:text-surface-0">
            {{ form.get('is_active')?.value ? 'Actif' : 'Inactif' }}
          </label>
        </div>
      </div>
    }

    <!-- \u2550\u2550 Actions \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="vf-actions col-span-12 flex gap-2 justify-end">
      <button pButton pRipple type="button" text label="Annuler"
              (click)="onCancel()" [disabled]="loading"></button>
      <button pButton pRipple type="submit"
              [label]="isEditMode ? 'Enregistrer les modifications' : 'Cr\xE9er le v\xE9hicule'"
              icon="pi pi-check"
              [loading]="loading"
              [disabled]="usineMissing || loading"></button>
    </div>

  </form>
</div>
`, styles: ["/* src/app/pages/vehicules/vehicules/vehicule-form/vehicule-form.scss */\n.vehicule-form {\n  position: relative;\n}\n.vf-loading-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 50;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(2px);\n  backdrop-filter: blur(2px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  color: #334155;\n  font-weight: 600;\n}\n:host-context(.app-dark) .vf-loading-overlay {\n  background: rgba(15, 23, 42, 0.55);\n  color: var(--p-surface-100);\n}\n:host {\n  display: block;\n}\n.mobile-vf-header {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .vehicule-form {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    min-height: 100dvh;\n  }\n  .vf-desktop-title {\n    display: none;\n  }\n  .mobile-vf-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-vf-back,\n  .mobile-vf-save {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-vf-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-vf-title {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .photo-upload-section {\n    order: -1;\n    align-items: stretch !important;\n  }\n  .vf-photo-preview {\n    width: 100%;\n    display: block;\n  }\n  .vf-photo-preview img {\n    max-width: 100% !important;\n    max-height: 14rem !important;\n    width: 100% !important;\n    border-radius: 0.75rem !important;\n    border: none !important;\n    object-fit: cover !important;\n    display: block;\n  }\n  .vf-upload-zone {\n    max-width: 100% !important;\n    width: 100% !important;\n    min-height: 9rem !important;\n    border-radius: 0.75rem !important;\n  }\n  .vf-section {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .vf-section-title {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .vf-field .vf-label {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .photo-upload-section > .vf-label {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n  }\n  .vf-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .vf-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  :host-context(.app-dark) .vehicule-form {\n    background: var(--p-surface-950) !important;\n  }\n  :host-context(.app-dark) .mobile-vf-header {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-vf-title {\n    color: var(--p-surface-100);\n  }\n  :host-context(.app-dark) .mobile-vf-back,\n  :host-context(.app-dark) .mobile-vf-save {\n    color: var(--p-primary-400) !important;\n    background: rgba(var(--p-primary-400-rgb, 95, 107, 255), 0.1) !important;\n  }\n  :host-context(.app-dark) .vf-section {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  :host-context(.app-dark) .vf-section-title {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .vf-field .vf-label,\n  :host-context(.app-dark) .photo-upload-section > .vf-label {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .vf-actions {\n    background: rgba(var(--p-surface-900-rgb, 15, 23, 42), 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-form.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: VehiculeService }, { type: ProprietaireService }, { type: LivreurService }, { type: UsineService }, { type: MessageService }, { type: Router }, { type: UsineContextService }], { vehicule: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeForm, { className: "VehiculeForm", filePath: "src/app/pages/vehicules/vehicules/vehicule-form/vehicule-form.ts", lineNumber: 60 });
})();

// src/app/pages/vehicules/vehicules/vehicule-edit/vehicule-edit.ts
function VehiculeEdit_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-skeleton", 3)(2, "p-skeleton", 4)(3, "p-skeleton", 5)(4, "p-skeleton", 6);
    \u0275\u0275elementEnd();
  }
}
function VehiculeEdit_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vehicule-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("vehicule", ctx_r0.vehicule);
  }
}
function VehiculeEdit_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "V\xE9hicule introuvable.");
    \u0275\u0275elementEnd()();
  }
}
var VehiculeEdit = class _VehiculeEdit {
  route;
  vehiculeService;
  router;
  vehicule = null;
  loading = true;
  constructor(route, vehiculeService, router) {
    this.route = route;
    this.vehiculeService = vehiculeService;
    this.router = router;
  }
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    if (!id) {
      this.router.navigate(["/vehicules"]);
      return;
    }
    this.vehiculeService.getOne(id).subscribe({
      next: (resp) => {
        this.vehicule = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(["/vehicules"]);
      }
    });
  }
  static \u0275fac = function VehiculeEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeEdit, selectors: [["app-vehicule-edit"]], decls: 3, vars: 3, consts: [[1, "card"], [3, "vehicule"], [1, "card", "text-center", "py-12", "text-surface-500"], ["height", "2rem", "styleClass", "mb-4"], ["height", "1rem", "styleClass", "mb-6"], ["height", "12rem", "styleClass", "mb-4"], ["height", "8rem"], [1, "pi", "pi-exclamation-triangle", "text-4xl", "mb-4", "block", "text-orange-400"], [1, "text-lg"]], template: function VehiculeEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, VehiculeEdit_Conditional_0_Template, 5, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, VehiculeEdit_Conditional_1_Template, 1, 1, "app-vehicule-form", 1);
      \u0275\u0275conditionalCreate(2, VehiculeEdit_Conditional_2_Template, 4, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.vehicule ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.vehicule ? 2 : -1);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton, VehiculeForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeEdit, [{
    type: Component,
    args: [{
      selector: "app-vehicule-edit",
      standalone: true,
      imports: [CommonModule, SkeletonModule, VehiculeForm],
      template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="1rem" styleClass="mb-6" />
        <p-skeleton height="12rem" styleClass="mb-4" />
        <p-skeleton height="8rem" />
      </div>
    }
    @if (!loading && vehicule) {
      <app-vehicule-form [vehicule]="vehicule" />
    }
    @if (!loading && !vehicule) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">V\xE9hicule introuvable.</span>
      </div>
    }
  `
    }]
  }], () => [{ type: ActivatedRoute }, { type: VehiculeService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeEdit, { className: "VehiculeEdit", filePath: "src/app/pages/vehicules/vehicules/vehicule-edit/vehicule-edit.ts", lineNumber: 34 });
})();

// src/app/pages/vehicules/proprietaires/proprietaire-liste/proprietaire-liste.ts
var _c03 = () => [10, 25, 50];
var _c13 = () => [1, 2, 3, 4, 5];
var _c22 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function ProprietaireListe_section_18_article_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", p_r4.ville, " ");
  }
}
function ProprietaireListe_section_18_article_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 31);
  }
}
function ProprietaireListe_section_18_article_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 32);
  }
}
function ProprietaireListe_section_18_article_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.email);
  }
}
function ProprietaireListe_section_18_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 25);
    \u0275\u0275listener("click", function ProprietaireListe_section_18_article_1_Template_article_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goEdit(p_r4));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275conditionalCreate(9, ProprietaireListe_section_18_article_1_Conditional_9_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275conditionalCreate(11, ProprietaireListe_section_18_article_1_Conditional_11_Template, 1, 0, "p-tag", 31)(12, ProprietaireListe_section_18_article_1_Conditional_12_Template, 1, 0, "p-tag", 32);
    \u0275\u0275conditionalCreate(13, ProprietaireListe_section_18_article_1_Conditional_13_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r4.prenom[0], "", p_r4.nom[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fullName(p_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, p_r4.phone), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.ville ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.is_active ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r4.email ? 13 : -1);
  }
}
function ProprietaireListe_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23);
    \u0275\u0275template(1, ProprietaireListe_section_18_article_1_Template, 14, 9, "article", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.filteredProprietaires());
  }
}
function ProprietaireListe_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Aucun propri\xE9taire trouv\xE9.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProprietaireListe_ng_template_19_div_0_Template, 2, 0, "div", 34)(1, ProprietaireListe_ng_template_19_div_1_Template, 2, 0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && !ctx_r4.filteredProprietaires().length);
  }
}
function ProprietaireListe_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ProprietaireListe_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProprietaireListe_ng_template_24_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "p-iconfield", 39);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 40);
    \u0275\u0275listener("ngModelChange", function ProprietaireListe_ng_template_24_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 41)(5, "p-select", 42);
    \u0275\u0275listener("ngModelChange", function ProprietaireListe_ng_template_24_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setSelectedFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ProprietaireListe_ng_template_24_Conditional_6_Template, 1, 0, "button", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r4.searchQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r4.filterOptions)("ngModel", ctx_r4.selectedFilter());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canCreate ? 6 : -1);
  }
}
function ProprietaireListe_ng_template_26_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 56);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 45)(2, "span", 46);
    \u0275\u0275text(3, "Nom ");
    \u0275\u0275element(4, "p-sortIcon", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 48)(6, "span", 46);
    \u0275\u0275text(7, "Telephone ");
    \u0275\u0275element(8, "p-sortIcon", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 50);
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 51)(12, "span", 46);
    \u0275\u0275text(13, "Adresse ");
    \u0275\u0275element(14, "p-sortIcon", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "th", 53);
    \u0275\u0275text(16, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 53);
    \u0275\u0275text(18, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 54)(20, "span", 46);
    \u0275\u0275text(21, "Ajoute ");
    \u0275\u0275element(22, "p-sortIcon", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, ProprietaireListe_ng_template_26_Conditional_23_Template, 2, 0, "th", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 23 : -1);
  }
}
function ProprietaireListe_ng_template_28_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 61);
  }
}
function ProprietaireListe_ng_template_28_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 62);
  }
}
function ProprietaireListe_ng_template_28_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function ProprietaireListe_ng_template_28_Conditional_27_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goEdit(p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_28_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ProprietaireListe_ng_template_28_Conditional_27_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const p_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteProprietaire(p_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_28_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 64);
    \u0275\u0275conditionalCreate(2, ProprietaireListe_ng_template_28_Conditional_27_Conditional_2_Template, 1, 0, "button", 65);
    \u0275\u0275conditionalCreate(3, ProprietaireListe_ng_template_28_Conditional_27_Conditional_3_Template, 1, 0, "button", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canDelete ? 3 : -1);
  }
}
function ProprietaireListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 46)(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 58);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "td", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div")(15, "div", 58);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "td", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275conditionalCreate(22, ProprietaireListe_ng_template_28_Conditional_22_Template, 1, 0, "p-tag", 61)(23, ProprietaireListe_ng_template_28_Conditional_23_Template, 1, 0, "p-tag", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 63);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, ProprietaireListe_ng_template_28_Conditional_27_Template, 4, 2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", p_r10.prenom[0], "", p_r10.nom[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fullName(p_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, p_r10.phone));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r10.email || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r10.ville || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.quartier || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r10.pays || "-");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(p_r10.is_active ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r10.created_at ? \u0275\u0275pipeBind2(26, 13, p_r10.created_at, "dd/MM/yy") : "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 27 : -1);
  }
}
function ProprietaireListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 69)(2, "div", 70);
    \u0275\u0275element(3, "i", 71);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun proprietaire trouve");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r4.canUpdate || ctx_r4.canDelete ? 8 : 7);
  }
}
function ProprietaireListe_ng_template_32_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireListe_ng_template_32_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ProprietaireListe_ng_template_32_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c22));
  }
}
function ProprietaireListe_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProprietaireListe_ng_template_32_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c13));
  }
}
var ProprietaireListe = class _ProprietaireListe {
  proprietaireService;
  messageService;
  confirmationService;
  authService;
  router;
  proprietaires = signal([], ...ngDevMode ? [{ debugName: "proprietaires" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  filterOptions = [
    { label: "Tous", value: "all" },
    { label: "Actifs", value: "actif" },
    { label: "Inactifs", value: "inactif" }
  ];
  loading = false;
  get canCreate() {
    return this.authService.hasPermission("proprietaires.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("proprietaires.update");
  }
  get canDelete() {
    return this.authService.hasPermission("proprietaires.delete");
  }
  mobileFilterMenuItems = [];
  filteredProprietaires = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.proprietaires();
    if (!query)
      return list;
    return list.filter((proprietaire) => this.matchesSearch(proprietaire, query));
  }, ...ngDevMode ? [{ debugName: "filteredProprietaires" }] : []);
  constructor(proprietaireService, messageService, confirmationService, authService, router) {
    this.proprietaireService = proprietaireService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
    this.mobileFilterMenuItems = [
      { label: "Tous", icon: "pi pi-list", command: () => this.setSelectedFilter("all") },
      { label: "Actifs", icon: "pi pi-check-circle", command: () => this.setSelectedFilter("actif") },
      { label: "Inactifs", icon: "pi pi-times-circle", command: () => this.setSelectedFilter("inactif") }
    ];
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  load() {
    this.loading = true;
    const filter = this.selectedFilter();
    const statut = filter === "all" ? void 0 : filter;
    this.proprietaireService.getAll(statut).subscribe({
      next: (resp) => {
        this.proprietaires.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: "error", summary: "Erreur", detail: "Impossible de charger les propri\xE9taires.", life: 5e3 });
      }
    });
  }
  goNew() {
    this.router.navigate(["/vehicules/proprietaires/nouveau"]);
  }
  goEdit(p) {
    this.router.navigate(["/vehicules/proprietaires", p.id, "edit"]);
  }
  setSelectedFilter(value) {
    if (value === "all" || value === "actif" || value === "inactif") {
      this.selectedFilter.set(value);
    } else {
      this.selectedFilter.set("all");
    }
    this.load();
  }
  deleteProprietaire(p) {
    this.confirmationService.confirm({
      message: `Supprimer d\xE9finitivement <strong>${p.prenom} ${p.nom}</strong> ?`,
      header: "Supprimer le propri\xE9taire",
      icon: "pi pi-trash",
      rejectButtonProps: { label: "Annuler", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "Supprimer", severity: "danger" },
      accept: () => {
        this.proprietaireService.delete(p.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Supprim\xE9", detail: `${p.prenom} ${p.nom} supprim\xE9.`, life: 3e3 });
            this.proprietaires.update((list) => list.filter((x) => x.id !== p.id));
          },
          error: (err) => this.messageService.add({ severity: "error", summary: "Erreur", detail: err.error?.message || "Impossible de supprimer.", life: 5e3 })
        });
      }
    });
  }
  fullName(p) {
    return `${p.prenom} ${p.nom}`;
  }
  matchesSearch(p, query) {
    const searchable = [
      p.prenom,
      p.nom,
      p.phone,
      p.email,
      p.ville,
      p.quartier,
      p.pays,
      this.fullName(p),
      this.isProprietaireActive(p) ? "actif" : "inactif"
    ].filter((value) => !!value).join(" ").toLowerCase();
    return searchable.includes(query);
  }
  isProprietaireActive(p) {
    const status = p.is_active;
    return status === true || status === 1 || status === "1";
  }
  static \u0275fac = function ProprietaireListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProprietaireListe)(\u0275\u0275directiveInject(ProprietaireService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProprietaireListe, selectors: [["app-proprietaire-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 34, vars: 16, consts: [["filterMenu", ""], ["mobileListState", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "proprietaire-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, t\xE9l\xE9phone, ville...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["type", "button", "aria-label", "Nouveau propri\xE9taire", 1, "mobile-fab"], [1, "card", "proprietaire-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} proprietaires", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "rowHover"], [1, "mobile-list"], ["class", "mobile-proprietaire-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "mobile-proprietaire-card", 3, "click"], [1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["value", "Actif", "severity", "success", "styleClass", "mobile-status-tag"], ["value", "Inactif", "severity", "secondary", "styleClass", "mobile-status-tag"], [1, "mobile-card-email"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], ["type", "button", "aria-label", "Nouveau propri\xE9taire", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un proprietaire...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "w-full", "sm:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous", 1, "w-full", "sm:w-44", 3, "ngModelChange", "options", "ngModel"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau proprietaire"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau proprietaire", 3, "click"], ["pSortableColumn", "prenom", 2, "width", "22%"], [1, "flex", "items-center", "gap-2"], ["field", "prenom"], ["pSortableColumn", "phone", 2, "width", "15%"], ["field", "phone"], [2, "width", "20%"], ["pSortableColumn", "ville", 2, "width", "16%"], ["field", "ville"], [2, "width", "10%"], ["pSortableColumn", "created_at", 2, "width", "5%"], ["field", "created_at"], [1, "text-center", 2, "width", "5%"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-white", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "2rem", "height", "2rem"], [1, "font-medium"], [1, "text-sm"], [1, "text-sm", "text-surface-500"], ["value", "Actif", "severity", "success"], ["value", "Inactif", "severity", "secondary"], [1, "text-surface-500", "text-sm"], [1, "flex", "gap-1", "justify-center"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top", 3, "click"], [1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-user", "text-4xl"]], template: function ProprietaireListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "div", 7)(3, "header", 8)(4, "button", 9);
      \u0275\u0275listener("click", function ProprietaireListe_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 10)(6, "h1", 11);
      \u0275\u0275text(7, "Propri\xE9taires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 12);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "p-menu", 13, 0);
      \u0275\u0275elementStart(12, "button", 14);
      \u0275\u0275listener("click", function ProprietaireListe_Template_button_click_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        const filterMenu_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(filterMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 15)(14, "section", 16)(15, "p-iconfield");
      \u0275\u0275element(16, "p-inputicon", 17);
      \u0275\u0275elementStart(17, "input", 18);
      \u0275\u0275listener("ngModelChange", function ProprietaireListe_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, ProprietaireListe_section_18_Template, 2, 1, "section", 19)(19, ProprietaireListe_ng_template_19_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, ProprietaireListe_Conditional_21_Template, 2, 0, "button", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22);
      \u0275\u0275template(24, ProprietaireListe_ng_template_24_Template, 7, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, ProprietaireListe_ng_template_26_Template, 24, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, ProprietaireListe_ng_template_28_Template, 28, 16, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, ProprietaireListe_ng_template_30_Template, 6, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, ProprietaireListe_ng_template_32_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r12 = \u0275\u0275reference(20);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.filteredProprietaires().length, " propri\xE9taire", ctx.filteredProprietaires().length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileFilterMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredProprietaires().length)("ngIfElse", mobileListState_r12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.canCreate ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.filteredProprietaires())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(15, _c03))("showCurrentPageReport", true)("rowHover", true);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TableModule, Table, SortableColumn, SortIcon, ButtonModule, ButtonDirective, ToastModule, Toast, InputTextModule, InputText, SkeletonModule, Skeleton, TagModule, Tag, InputIconModule, InputIcon, IconFieldModule, IconField, SelectModule, Select, TooltipModule, Tooltip, ConfirmDialogModule, ConfirmDialog, MenuModule, Menu, RippleModule, Ripple, DatePipe, PhoneFormatPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.proprietaire-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .proprietaire-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proprietaire-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-proprietaire-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-proprietaire-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-email[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n    color: var(--mobile-muted);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 160px;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .proprietaire-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .proprietaire-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-proprietaire-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-proprietaire-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=proprietaire-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProprietaireListe, [{
    type: Component,
    args: [{ selector: "app-proprietaire-liste", standalone: true, imports: [
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
      TooltipModule,
      ConfirmDialogModule,
      MenuModule,
      RippleModule,
      PhoneFormatPipe
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmdialog />

<!-- \u2550\u2550 MOBILE : app shell (masqu\xE9 sur desktop) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="proprietaire-mobile-app">
  <header class="mobile-header">
    <button
      pButton pRipple
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-back"
      aria-label="Retour \xE0 l'accueil"
      (click)="goBack()"
    ></button>
    <div class="mobile-title-wrap">
      <h1 class="mobile-title">Propri\xE9taires</h1>
      <p class="mobile-subtitle">{{ filteredProprietaires().length }} propri\xE9taire{{ filteredProprietaires().length !== 1 ? 's' : '' }}</p>
    </div>
    <p-menu
      #filterMenu
      [model]="mobileFilterMenuItems"
      [popup]="true"
      appendTo="body"
      styleClass="mobile-status-menu"
    />
    <button
      pButton pRipple
      icon="pi pi-filter"
      class="p-button-rounded p-button-text mobile-add"
      aria-label="Filtrer par statut"
      (click)="filterMenu.toggle($event)"
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
          placeholder="Nom, t\xE9l\xE9phone, ville..."
          class="w-full"
        />
      </p-iconfield>
    </section>

    <section class="mobile-list" *ngIf="!loading && filteredProprietaires().length; else mobileListState">
      <article
        class="mobile-proprietaire-card"
        *ngFor="let p of filteredProprietaires()"
        (click)="goEdit(p)"
      >
        <div class="mobile-card-avatar">{{ p.prenom[0] }}{{ p.nom[0] }}</div>
        <div class="mobile-card-body">
          <div class="mobile-card-name">{{ fullName(p) }}</div>
          <div class="mobile-card-meta">
            {{ p.phone | phoneFormat }}
            @if (p.ville) { \xB7 {{ p.ville }} }
          </div>
          <div class="mobile-card-footer">
            @if (p.is_active) {
              <p-tag value="Actif" severity="success" styleClass="mobile-status-tag" />
            } @else {
              <p-tag value="Inactif" severity="secondary" styleClass="mobile-status-tag" />
            }
            @if (p.email) {
              <span class="mobile-card-email">{{ p.email }}</span>
            }
          </div>
        </div>
      </article>
    </section>

    <ng-template #mobileListState>
      <div class="mobile-state" *ngIf="loading">Chargement...</div>
      <div class="mobile-state" *ngIf="!loading && !filteredProprietaires().length">Aucun propri\xE9taire trouv\xE9.</div>
    </ng-template>
  </div>

  @if (canCreate) {
    <button
      type="button"
      class="mobile-fab"
      aria-label="Nouveau propri\xE9taire"
      (click)="goNew()"
    >
      <i class="pi pi-plus"></i>
    </button>
  }
</div>

<!-- \u2550\u2550 DESKTOP : tableau standard (masqu\xE9 sur mobile) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="card proprietaire-desktop">
  <p-table
    [value]="filteredProprietaires()"
    [loading]="loading"
    [paginator]="true"
    paginatorDropdownAppendTo="body"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    responsiveLayout="scroll"
    currentPageReportTemplate="  {first} / {last} de {totalRecords} proprietaires"
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
            placeholder="Rechercher un proprietaire..."
            [ngModel]="searchQuery()"
            (ngModelChange)="searchQuery.set($event)"
            class="w-full"
          />
        </p-iconfield>
        <div class="flex gap-2 w-full sm:w-auto">
          <p-select
            [options]="filterOptions"
            optionLabel="label"
            optionValue="value"
            [ngModel]="selectedFilter()"
            (ngModelChange)="setSelectedFilter($event)"
            placeholder="Tous"
            class="w-full sm:w-44"
          />
          @if (canCreate) {
            <button pButton outlined icon="pi pi-plus" label="Nouveau proprietaire" (click)="goNew()"></button>
          }
        </div>
      </div>
    </ng-template>

    <ng-template #header>
      <tr>
        <th pSortableColumn="prenom" style="width:22%">
          <span class="flex items-center gap-2">Nom <p-sortIcon field="prenom" /></span>
        </th>
        <th pSortableColumn="phone" style="width:15%">
          <span class="flex items-center gap-2">Telephone <p-sortIcon field="phone" /></span>
        </th>
        <th style="width:20%">Email</th>
        <th pSortableColumn="ville" style="width:16%">
          <span class="flex items-center gap-2">Adresse <p-sortIcon field="ville" /></span>
        </th>
        <th style="width:10%">Pays</th>
        <th style="width:10%">Statut</th>
        <th pSortableColumn="created_at" style="width:5%">
          <span class="flex items-center gap-2">Ajoute <p-sortIcon field="created_at" /></span>
        </th>
        @if (canUpdate || canDelete) {
          <th style="width:5%" class="text-center">Actions</th>
        }
      </tr>
    </ng-template>

    <ng-template #body let-p>
      <tr>
        <td>
          <div class="flex items-center gap-2">
            <span
              class="inline-flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs flex-shrink-0"
              style="width:2rem;height:2rem"
            >
              {{ p.prenom[0] }}{{ p.nom[0] }}
            </span>
            <div>
              <div class="font-medium">{{ fullName(p) }}</div>
            </div>
          </div>
        </td>
        <td class="text-sm">{{ p.phone | phoneFormat }}</td>
        <td class="text-sm text-surface-500">{{ p.email || '-' }}</td>
        <td>
          <div>
            <div class="font-medium">{{ p.ville || '-' }}</div>
            <div class="text-sm text-surface-500">{{ p.quartier || '-' }}</div>
          </div>
        </td>
        <td class="text-sm">{{ p.pays || '-' }}</td>
        <td>
          @if (p.is_active) {
            <p-tag value="Actif" severity="success" />
          } @else {
            <p-tag value="Inactif" severity="secondary" />
          }
        </td>
        <td class="text-surface-500 text-sm">
          {{ p.created_at ? (p.created_at | date:'dd/MM/yy') : '-' }}
        </td>
        @if (canUpdate || canDelete) {
          <td>
            <div class="flex gap-1 justify-center">
              @if (canUpdate) {
                <button
                  pButton type="button" icon="pi pi-pen-to-square"
                  text rounded size="small" pTooltip="Modifier" tooltipPosition="top"
                  (click)="goEdit(p)"
                ></button>
              }
              @if (canDelete) {
                <button
                  pButton type="button" icon="pi pi-trash" severity="danger"
                  text rounded size="small" pTooltip="Supprimer" tooltipPosition="top"
                  (click)="deleteProprietaire(p)"
                ></button>
              }
            </div>
          </td>
        }
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td [attr.colspan]="(canUpdate || canDelete) ? 8 : 7" class="text-center py-8">
          <div class="flex flex-col items-center gap-3 text-surface-500">
            <i class="pi pi-user text-4xl"></i>
            <span>Aucun proprietaire trouve</span>
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
`, styles: ["/* src/app/pages/vehicules/proprietaires/proprietaire-liste/proprietaire-liste.scss */\n:host {\n  display: block;\n}\n.proprietaire-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .proprietaire-desktop {\n    display: none;\n  }\n  .proprietaire-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-proprietaire-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-proprietaire-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-email {\n    font-size: 0.78rem;\n    color: var(--mobile-muted);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 160px;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .proprietaire-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-proprietaire-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-fab {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  :host-context(.app-dark) .mobile-fab:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=proprietaire-liste.css.map */\n"] }]
  }], () => [{ type: ProprietaireService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProprietaireListe, { className: "ProprietaireListe", filePath: "src/app/pages/vehicules/proprietaires/proprietaire-liste/proprietaire-liste.ts", lineNumber: 50 });
})();

// src/app/pages/vehicules/proprietaires/proprietaire-form/proprietaire-form.ts
var _c04 = () => ({ standalone: true });
function ProprietaireForm_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, "Pr\xE9nom requis.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, "Nom requis.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", c_r2.flag, \u0275\u0275sanitizeUrl)("alt", c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function ProprietaireForm_ng_template_41_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementStart(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", c_r3.flag, \u0275\u0275sanitizeUrl)("alt", c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function ProprietaireForm_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProprietaireForm_ng_template_41_div_0_Template, 6, 4, "div", 39);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", c_r3);
  }
}
function ProprietaireForm_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, "T\xE9l\xE9phone requis.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.phoneError);
  }
}
function ProprietaireForm_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, "Ville requise.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, "Quartier requis.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1, "Adresse email invalide.");
    \u0275\u0275elementEnd();
  }
}
function ProprietaireForm_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3, "Statut");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40);
    \u0275\u0275element(5, "p-toggleswitch", 41);
    \u0275\u0275elementStart(6, "label", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r3.form.get("is_active")) == null ? null : tmp_3_0.value) ? "Actif" : "Inactif", " ");
  }
}
var ProprietaireForm = class _ProprietaireForm {
  fb;
  proprietaireService;
  messageService;
  router;
  proprietaire;
  get isEditMode() {
    return !!this.proprietaire;
  }
  form;
  loading = false;
  submitted = false;
  phoneCountry = DEFAULT_COUNTRY_CODE;
  phoneError = null;
  countries = COUNTRIES;
  constructor(fb, proprietaireService, messageService, router) {
    this.fb = fb;
    this.proprietaireService = proprietaireService;
    this.messageService = messageService;
    this.router = router;
    this.buildForm();
  }
  ngOnInit() {
    if (this.proprietaire) {
      this.applyProprietaireToForm(this.proprietaire);
    }
  }
  buildForm() {
    this.form = this.fb.group({
      prenom: ["", [Validators.required, Validators.maxLength(100)]],
      nom: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.required, Validators.maxLength(20)]],
      email: ["", [Validators.email, Validators.maxLength(255)]],
      ville: ["Conakry", [Validators.required, Validators.maxLength(100)]],
      quartier: ["", [Validators.required, Validators.maxLength(100)]],
      is_active: [true]
    });
  }
  validatePhone() {
    const phoneControl = this.form.get("phone");
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = "Telephone obligatoire.";
      return false;
    }
    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry) {
      this.phoneError = "Pays invalide.";
      return false;
    }
    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = "Format invalide.";
      return false;
    }
    if (normalizedPhone.startsWith("+") && !normalizedPhone.startsWith(selectedCountry.dialCode)) {
      this.phoneError = `Le numero doit commencer par ${selectedCountry.dialCode} pour ${selectedCountry.name}.`;
      return false;
    }
    const phoneToParse = normalizedPhone.startsWith("+") ? normalizedPhone : `${selectedCountry.dialCode}${normalizedPhone}`;
    try {
      const parsed = parsePhoneNumberWithError(phoneToParse, this.phoneCountry);
      if (!parsed || !parsed.isValid()) {
        this.phoneError = `Numero invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }
      if (parsed.country && parsed.country !== this.phoneCountry) {
        const parsedDial = `+${parsed.countryCallingCode}`;
        this.phoneError = `Le prefixe ${parsedDial} ne correspond pas au pays ${selectedCountry.name}.`;
        return false;
      }
      phoneControl?.setValue(parsed.formatInternational(), { emitEvent: false });
      this.phoneError = null;
      return true;
    } catch {
      this.phoneError = "Format invalide.";
      return false;
    }
  }
  onPhoneInput() {
    if (this.submitted)
      this.validatePhone();
  }
  onPhoneBlur() {
    if (this.form.get("phone")?.value?.trim())
      this.validatePhone();
  }
  onCountryChange() {
    const phoneControl = this.form.get("phone");
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = null;
      return;
    }
    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry)
      return;
    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = "Format invalide.";
      return;
    }
    if (normalizedPhone.startsWith("+")) {
      try {
        const parsed = parsePhoneNumberWithError(normalizedPhone);
        if (parsed?.nationalNumber) {
          phoneControl?.setValue(`${selectedCountry.dialCode} ${parsed.nationalNumber}`, { emitEvent: false });
        }
      } catch {
      }
    } else {
      phoneControl?.setValue(`${selectedCountry.dialCode} ${normalizedPhone}`, { emitEvent: false });
    }
    this.validatePhone();
  }
  getCountryName(code) {
    return this.getCountry(code)?.name ?? code;
  }
  isInvalid(name) {
    const c = this.form.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    if (!this.validatePhone())
      return;
    const v = this.form.value;
    const pays = this.getCountryName(this.phoneCountry);
    this.loading = true;
    const req$ = this.isEditMode ? this.proprietaireService.update(this.proprietaire.id, {
      prenom: v.prenom,
      nom: v.nom,
      phone: v.phone,
      email: v.email || void 0,
      pays,
      ville: v.ville,
      quartier: v.quartier,
      is_active: v.is_active
    }) : this.proprietaireService.create({
      prenom: v.prenom,
      nom: v.nom,
      phone: v.phone,
      email: v.email || void 0,
      pays,
      ville: v.ville,
      quartier: v.quartier
    });
    req$.subscribe({
      next: () => {
        if (this.isEditMode && this.proprietaire) {
          this.reloadEditedProprietaire(this.proprietaire.id);
          return;
        }
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Proprietaire cree.",
          life: 3e3
        });
        setTimeout(() => this.router.navigate(["/vehicules/proprietaires"]), 1500);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 422 && err.error?.errors) {
          Object.values(err.error.errors).flat().forEach((m) => this.messageService.add({ severity: "error", summary: "Validation", detail: m, life: 5e3 }));
          return;
        }
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err.error?.message || "Erreur inattendue.",
          life: 5e3
        });
      }
    });
  }
  onCancel() {
    this.router.navigate(["/vehicules/proprietaires"]);
  }
  reloadEditedProprietaire(id) {
    this.proprietaireService.getOne(id).subscribe({
      next: (resp) => {
        this.proprietaire = resp.data;
        this.applyProprietaireToForm(resp.data);
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Proprietaire mis a jour.",
          life: 3e3
        });
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: "warn",
          summary: "Mise a jour enregistree",
          detail: "Le proprietaire est modifie mais le rechargement a echoue.",
          life: 5e3
        });
      }
    });
  }
  applyProprietaireToForm(proprietaire) {
    this.detectPhoneCountry(proprietaire.phone);
    this.form.patchValue({
      prenom: proprietaire.prenom,
      nom: proprietaire.nom,
      phone: proprietaire.phone,
      email: proprietaire.email ?? "",
      ville: proprietaire.ville ?? "Conakry",
      quartier: proprietaire.quartier ?? "",
      is_active: proprietaire.is_active
    });
  }
  detectPhoneCountry(phone) {
    this.phoneCountry = DEFAULT_COUNTRY_CODE;
    const safePhone = this.toPhoneCandidate(phone ?? "");
    if (!safePhone.startsWith("+"))
      return;
    try {
      const parsed = parsePhoneNumberWithError(safePhone);
      if (parsed?.country)
        this.phoneCountry = parsed.country;
    } catch {
    }
  }
  toPhoneCandidate(rawPhone) {
    const trimmed = rawPhone.trim();
    if (!trimmed)
      return "";
    const hasPlus = trimmed.startsWith("+");
    const digits = trimmed.replace(/\D/g, "");
    if (!digits)
      return "";
    return hasPlus ? `+${digits}` : digits;
  }
  getCountry(code) {
    return getCountryByCode(code) ?? this.countries.find((c) => c.code === code);
  }
  static \u0275fac = function ProprietaireForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProprietaireForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProprietaireService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProprietaireForm, selectors: [["app-proprietaire-form"]], inputs: { proprietaire: "proprietaire" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 76, vars: 42, consts: [["item", ""], ["selectedItem", ""], [1, "card", "proprietaire-form"], [1, "mobile-pf-header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-pf-back", 3, "click"], [1, "mobile-pf-title-wrap"], [1, "mobile-pf-title"], [2, "width", "2.25rem", "flex-shrink", "0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold", "mb-6", "block", "pf-desktop-title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "pf-section", "grid", "grid-cols-12", "gap-4", "pb-8", "mb-8", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "pf-section-label", "col-span-12", "lg:col-span-2"], [1, "pf-section-title", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "col-span-12", "lg:col-span-10"], [1, "grid", "grid-cols-12", "gap-4"], [1, "pf-field", "mb-4", "col-span-12", "md:col-span-6", "flex", "flex-col", "gap-1"], [1, "pf-label", "font-medium", "text-surface-900", "dark:text-surface-0"], [1, "text-red-500"], ["pInputText", "", "fluid", "", "formControlName", "prenom", "placeholder", "ex : Mamadou"], ["pInputText", "", "fluid", "", "formControlName", "nom", "placeholder", "ex : Diallo"], [1, "mb-4", "col-span-12"], [1, "grid", "grid-cols-12", "gap-3"], [1, "pf-field", "col-span-12", "md:col-span-4", "flex", "flex-col", "gap-1"], ["optionLabel", "name", "optionValue", "code", "placeholder", "Pays", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "ngModelOptions", "options"], [1, "pf-field", "col-span-12", "md:col-span-8", "flex", "flex-col", "gap-1"], ["pInputText", "", "fluid", "", "formControlName", "phone", "type", "tel", "placeholder", "ex : 622 00 00 00", 3, "input", "blur"], [1, "text-red-500", "block", "mt-1"], ["pInputText", "", "fluid", "", "formControlName", "ville", "placeholder", "ex : Conakry"], ["pInputText", "", "fluid", "", "formControlName", "quartier", "placeholder", "ex : Ratoma"], [1, "pf-field", "mb-4", "col-span-12", "flex", "flex-col", "gap-1"], [1, "text-surface-400", "text-sm", "font-normal", "ml-1"], ["pInputText", "", "fluid", "", "formControlName", "email", "type", "email", "placeholder", "ex : mamadou@exemple.com"], [1, "pf-actions", "flex", "gap-2", "justify-end"], ["pButton", "", "pRipple", "", "type", "button", "text", "", "label", "Annuler", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-check", 3, "label", "loading"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary", "text-sm"], [1, "text-sm"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "col-span-12", "lg:col-span-10", "flex", "items-center", "gap-3"], ["formControlName", "is_active", "inputId", "is_active"], ["for", "is_active", 1, "cursor-pointer", "text-sm", "font-medium", "text-surface-900", "dark:text-surface-0"]], template: function ProprietaireForm_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "button", 4);
      \u0275\u0275listener("click", function ProprietaireForm_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "h1", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 9);
      \u0275\u0275listener("ngSubmit", function ProprietaireForm_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
      \u0275\u0275text(14, "Identit\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "label", 16);
      \u0275\u0275text(19, " Pr\xE9nom ");
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 18);
      \u0275\u0275conditionalCreate(23, ProprietaireForm_Conditional_23_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "label", 16);
      \u0275\u0275text(26, " Nom ");
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "input", 19);
      \u0275\u0275conditionalCreate(30, ProprietaireForm_Conditional_30_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "label", 16);
      \u0275\u0275text(35, " Pays ");
      \u0275\u0275elementStart(36, "span", 17);
      \u0275\u0275text(37, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p-select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function ProprietaireForm_Template_p_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ProprietaireForm_Template_p_select_onChange_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryChange());
      });
      \u0275\u0275template(39, ProprietaireForm_ng_template_39_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(41, ProprietaireForm_ng_template_41_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 24)(44, "label", 16);
      \u0275\u0275text(45, " T\xE9l\xE9phone ");
      \u0275\u0275elementStart(46, "span", 17);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "input", 25);
      \u0275\u0275listener("input", function ProprietaireForm_Template_input_input_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPhoneInput());
      })("blur", function ProprietaireForm_Template_input_blur_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPhoneBlur());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(49, ProprietaireForm_Conditional_49_Template, 2, 0, "small", 26);
      \u0275\u0275conditionalCreate(50, ProprietaireForm_Conditional_50_Template, 2, 1, "small", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 15)(52, "label", 16);
      \u0275\u0275text(53, " Ville ");
      \u0275\u0275elementStart(54, "span", 17);
      \u0275\u0275text(55, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(56, "input", 27);
      \u0275\u0275conditionalCreate(57, ProprietaireForm_Conditional_57_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 15)(59, "label", 16);
      \u0275\u0275text(60, " Quartier ");
      \u0275\u0275elementStart(61, "span", 17);
      \u0275\u0275text(62, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(63, "input", 28);
      \u0275\u0275conditionalCreate(64, ProprietaireForm_Conditional_64_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 29)(66, "label", 16);
      \u0275\u0275text(67, " Email ");
      \u0275\u0275elementStart(68, "span", 30);
      \u0275\u0275text(69, "(facultatif)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(70, "input", 31);
      \u0275\u0275conditionalCreate(71, ProprietaireForm_Conditional_71_Template, 2, 0, "small", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(72, ProprietaireForm_Conditional_72_Template, 8, 1, "div", 10);
      \u0275\u0275elementStart(73, "div", 32)(74, "button", 33);
      \u0275\u0275listener("click", function ProprietaireForm_Template_button_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "button", 34);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Modifier le propri\xE9taire" : "Nouveau propri\xE9taire");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Modifier le propri\xE9taire" : "Nouveau propri\xE9taire", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(12);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("prenom"))("ng-dirty", ctx.isInvalid("prenom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("prenom") ? 23 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("nom"))("ng-dirty", ctx.isInvalid("nom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("nom") ? 30 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneCountry);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(41, _c04))("options", ctx.countries);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("phone") || !!ctx.phoneError)("ng-dirty", ctx.isInvalid("phone") || !!ctx.phoneError);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") && !ctx.phoneError ? 49 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneError ? 50 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("ville"))("ng-dirty", ctx.isInvalid("ville"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("ville") ? 57 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("quartier"))("ng-dirty", ctx.isInvalid("quartier"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("quartier") ? 64 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("email"))("ng-dirty", ctx.isInvalid("email"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("email") ? 71 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditMode ? 72 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode ? "Enregistrer" : "Cr\xE9er le propri\xE9taire")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, ButtonModule, ButtonDirective, InputTextModule, InputText, SelectModule, Select, ToastModule, Toast, ToggleSwitchModule, ToggleSwitch, RippleModule, Ripple], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.proprietaire-form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mobile-pf-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .proprietaire-form[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .pf-desktop-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-pf-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-pf-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-pf-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-pf-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .pf-section[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .pf-section-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .pf-section-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pf-field[_ngcontent-%COMP%]   .pf-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .pf-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .pf-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .app-dark[_nghost-%COMP%]   .proprietaire-form[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .proprietaire-form[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pf-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pf-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pf-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pf-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-100);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-pf-back[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-pf-back[_ngcontent-%COMP%] {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pf-section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pf-section[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pf-section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pf-section-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pf-field[_ngcontent-%COMP%]   .pf-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pf-field[_ngcontent-%COMP%]   .pf-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .pf-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .pf-actions[_ngcontent-%COMP%] {\n    background: rgba(15, 23, 42, 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=proprietaire-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProprietaireForm, [{
    type: Component,
    args: [{ selector: "app-proprietaire-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      InputTextModule,
      SelectModule,
      ToastModule,
      ToggleSwitchModule,
      RippleModule
    ], providers: [MessageService], template: `<p-toast />

<div class="card proprietaire-form">

  <!-- \u2550\u2550\u2550 HEADER MOBILE (sticky, cach\xE9 sur desktop via SCSS) \u2550\u2550\u2550 -->
  <header class="mobile-pf-header">
    <button
      pButton pRipple type="button"
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-pf-back"
      aria-label="Retour"
      (click)="onCancel()"
    ></button>
    <div class="mobile-pf-title-wrap">
      <h1 class="mobile-pf-title">{{ isEditMode ? 'Modifier le propri\xE9taire' : 'Nouveau propri\xE9taire' }}</h1>
    </div>
    <!-- placeholder pour centrer le titre -->
    <div style="width:2.25rem;flex-shrink:0"></div>
  </header>

  <!-- Titre desktop -->
  <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block pf-desktop-title">
    {{ isEditMode ? 'Modifier le propri\xE9taire' : 'Nouveau propri\xE9taire' }}
  </span>

  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

    <!-- \u2550\u2550 Identit\xE9 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
      <div class="pf-section-label col-span-12 lg:col-span-2">
        <div class="pf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Identit\xE9</div>
      </div>
      <div class="col-span-12 lg:col-span-10">
        <div class="grid grid-cols-12 gap-4">

          <div class="pf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
              Pr\xE9nom <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="prenom" placeholder="ex : Mamadou"
                   [class.ng-invalid]="isInvalid('prenom')" [class.ng-dirty]="isInvalid('prenom')" />
            @if (isInvalid('prenom')) {
              <small class="text-red-500">Pr\xE9nom requis.</small>
            }
          </div>

          <div class="pf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
              Nom <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="nom" placeholder="ex : Diallo"
                   [class.ng-invalid]="isInvalid('nom')" [class.ng-dirty]="isInvalid('nom')" />
            @if (isInvalid('nom')) {
              <small class="text-red-500">Nom requis.</small>
            }
          </div>

          <!-- Pays + T\xE9l\xE9phone -->
          <div class="mb-4 col-span-12">
            <div class="grid grid-cols-12 gap-3">

              <div class="pf-field col-span-12 md:col-span-4 flex flex-col gap-1">
                <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
                  Pays <span class="text-red-500">*</span>
                </label>
                <p-select
                  [(ngModel)]="phoneCountry"
                  [ngModelOptions]="{standalone: true}"
                  [options]="countries"
                  optionLabel="name"
                  optionValue="code"
                  placeholder="Pays"
                  (onChange)="onCountryChange()"
                  fluid
                >
                  <ng-template #item let-c>
                    <div class="flex items-center gap-2">
                      <img [src]="c.flag" [alt]="c.name" class="w-5 h-auto rounded-sm" />
                      <span class="font-semibold text-primary text-sm">{{ c.dialCode }}</span>
                      <span class="text-sm">{{ c.name }}</span>
                    </div>
                  </ng-template>
                  <ng-template #selectedItem let-c>
                    <div class="flex items-center gap-2" *ngIf="c">
                      <img [src]="c.flag" [alt]="c.name" class="w-5 h-auto rounded-sm" />
                      <span class="font-semibold text-primary text-sm">{{ c.dialCode }}</span>
                      <span class="text-sm">{{ c.name }}</span>
                    </div>
                  </ng-template>
                </p-select>
              </div>

              <div class="pf-field col-span-12 md:col-span-8 flex flex-col gap-1">
                <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
                  T\xE9l\xE9phone <span class="text-red-500">*</span>
                </label>
                <input pInputText fluid formControlName="phone" type="tel"
                       placeholder="ex : 622 00 00 00"
                       (input)="onPhoneInput()" (blur)="onPhoneBlur()"
                       [class.ng-invalid]="isInvalid('phone') || !!phoneError"
                       [class.ng-dirty]="isInvalid('phone') || !!phoneError" />
              </div>

            </div>

            @if (isInvalid('phone') && !phoneError) {
              <small class="text-red-500 block mt-1">T\xE9l\xE9phone requis.</small>
            }
            @if (phoneError) {
              <small class="text-red-500 block mt-1">{{ phoneError }}</small>
            }
          </div>

          <div class="pf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
              Ville <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="ville" placeholder="ex : Conakry"
                   [class.ng-invalid]="isInvalid('ville')" [class.ng-dirty]="isInvalid('ville')" />
            @if (isInvalid('ville')) {
              <small class="text-red-500">Ville requise.</small>
            }
          </div>

          <div class="pf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
              Quartier <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="quartier" placeholder="ex : Ratoma"
                   [class.ng-invalid]="isInvalid('quartier')" [class.ng-dirty]="isInvalid('quartier')" />
            @if (isInvalid('quartier')) {
              <small class="text-red-500">Quartier requis.</small>
            }
          </div>

          <!-- Email -->
          <div class="pf-field mb-4 col-span-12 flex flex-col gap-1">
            <label class="pf-label font-medium text-surface-900 dark:text-surface-0">
              Email
              <span class="text-surface-400 text-sm font-normal ml-1">(facultatif)</span>
            </label>
            <input pInputText fluid formControlName="email" type="email"
                   placeholder="ex : mamadou@exemple.com"
                   [class.ng-invalid]="isInvalid('email')" [class.ng-dirty]="isInvalid('email')" />
            @if (isInvalid('email')) {
              <small class="text-red-500">Adresse email invalide.</small>
            }
          </div>

        </div>
      </div>
    </div>

    <!-- \u2550\u2550 Statut (\xE9dition uniquement) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (isEditMode) {
      <div class="pf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
        <div class="pf-section-label col-span-12 lg:col-span-2">
          <div class="pf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Statut</div>
        </div>
        <div class="col-span-12 lg:col-span-10 flex items-center gap-3">
          <p-toggleswitch formControlName="is_active" inputId="is_active" />
          <label for="is_active" class="cursor-pointer text-sm font-medium text-surface-900 dark:text-surface-0">
            {{ form.get('is_active')?.value ? 'Actif' : 'Inactif' }}
          </label>
        </div>
      </div>
    }

    <!-- \u2550\u2550 Actions \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="pf-actions flex gap-2 justify-end">
      <button pButton pRipple type="button" text label="Annuler"
              (click)="onCancel()" [disabled]="loading"></button>
      <button pButton pRipple type="submit"
              [label]="isEditMode ? 'Enregistrer' : 'Cr\xE9er le propri\xE9taire'"
              icon="pi pi-check" [loading]="loading"></button>
    </div>

  </form>
</div>
`, styles: ["/* src/app/pages/vehicules/proprietaires/proprietaire-form/proprietaire-form.scss */\n:host {\n  display: block;\n}\n.proprietaire-form {\n  position: relative;\n}\n.mobile-pf-header {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .proprietaire-form {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .pf-desktop-title {\n    display: none;\n  }\n  .mobile-pf-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-pf-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-pf-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-pf-title {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .pf-section {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .pf-section-title {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .pf-section-label {\n    display: none;\n  }\n  .pf-field .pf-label {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .pf-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .pf-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  :host-context(.app-dark) .proprietaire-form {\n    background: var(--p-surface-950) !important;\n  }\n  :host-context(.app-dark) .mobile-pf-header {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-pf-title {\n    color: var(--p-surface-100);\n  }\n  :host-context(.app-dark) .mobile-pf-back {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  :host-context(.app-dark) .pf-section {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  :host-context(.app-dark) .pf-section-title {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .pf-field .pf-label {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .pf-actions {\n    background: rgba(15, 23, 42, 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=proprietaire-form.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ProprietaireService }, { type: MessageService }, { type: Router }], { proprietaire: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProprietaireForm, { className: "ProprietaireForm", filePath: "src/app/pages/vehicules/proprietaires/proprietaire-form/proprietaire-form.ts", lineNumber: 36 });
})();

// src/app/pages/vehicules/proprietaires/proprietaire-edit/proprietaire-edit.ts
function ProprietaireEdit_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-skeleton", 3)(2, "p-skeleton", 4)(3, "p-skeleton", 5);
    \u0275\u0275elementEnd();
  }
}
function ProprietaireEdit_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-proprietaire-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("proprietaire", ctx_r0.proprietaire);
  }
}
function ProprietaireEdit_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "Propri\xE9taire introuvable.");
    \u0275\u0275elementEnd()();
  }
}
var ProprietaireEdit = class _ProprietaireEdit {
  route;
  proprietaireService;
  router;
  proprietaire = null;
  loading = true;
  constructor(route, proprietaireService, router) {
    this.route = route;
    this.proprietaireService = proprietaireService;
    this.router = router;
  }
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    if (!id) {
      this.router.navigate(["/vehicules/proprietaires"]);
      return;
    }
    this.proprietaireService.getOne(id).subscribe({
      next: (resp) => {
        this.proprietaire = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(["/vehicules/proprietaires"]);
      }
    });
  }
  static \u0275fac = function ProprietaireEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProprietaireEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProprietaireService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProprietaireEdit, selectors: [["app-proprietaire-edit"]], decls: 3, vars: 3, consts: [[1, "card"], [3, "proprietaire"], [1, "card", "text-center", "py-12", "text-surface-500"], ["height", "2rem", "styleClass", "mb-4"], ["height", "10rem", "styleClass", "mb-4"], ["height", "8rem"], [1, "pi", "pi-exclamation-triangle", "text-4xl", "mb-4", "block", "text-orange-400"], [1, "text-lg"]], template: function ProprietaireEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProprietaireEdit_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, ProprietaireEdit_Conditional_1_Template, 1, 1, "app-proprietaire-form", 1);
      \u0275\u0275conditionalCreate(2, ProprietaireEdit_Conditional_2_Template, 4, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.proprietaire ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.proprietaire ? 2 : -1);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton, ProprietaireForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProprietaireEdit, [{
    type: Component,
    args: [{
      selector: "app-proprietaire-edit",
      standalone: true,
      imports: [CommonModule, SkeletonModule, ProprietaireForm],
      template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="10rem" styleClass="mb-4" />
        <p-skeleton height="8rem" />
      </div>
    }
    @if (!loading && proprietaire) {
      <app-proprietaire-form [proprietaire]="proprietaire" />
    }
    @if (!loading && !proprietaire) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">Propri\xE9taire introuvable.</span>
      </div>
    }
  `
    }]
  }], () => [{ type: ActivatedRoute }, { type: ProprietaireService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProprietaireEdit, { className: "ProprietaireEdit", filePath: "src/app/pages/vehicules/proprietaires/proprietaire-edit/proprietaire-edit.ts", lineNumber: 33 });
})();

// src/app/pages/vehicules/livreurs/livreur-liste/livreur-liste.ts
var _c05 = () => [10, 25, 50];
var _c14 = () => [1, 2, 3, 4, 5];
function LivreurListe_section_18_article_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 31);
  }
}
function LivreurListe_section_18_article_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 32);
  }
}
function LivreurListe_section_18_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 25);
    \u0275\u0275listener("click", function LivreurListe_section_18_article_1_Template_article_click_0_listener() {
      const l_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goEdit(l_r4));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275conditionalCreate(10, LivreurListe_section_18_article_1_Conditional_10_Template, 1, 0, "p-tag", 31)(11, LivreurListe_section_18_article_1_Conditional_11_Template, 1, 0, "p-tag", 32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", l_r4.prenom[0], "", l_r4.nom[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.fullName(l_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, l_r4.phone));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(l_r4.is_active ? 10 : 11);
  }
}
function LivreurListe_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 23);
    \u0275\u0275template(1, LivreurListe_section_18_article_1_Template, 12, 7, "article", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.filteredLivreurs());
  }
}
function LivreurListe_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "Aucun livreur trouv\xE9.");
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivreurListe_ng_template_19_div_0_Template, 2, 0, "div", 33)(1, LivreurListe_ng_template_19_div_1_Template, 2, 0, "div", 33);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && !ctx_r4.filteredLivreurs().length);
  }
}
function LivreurListe_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function LivreurListe_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function LivreurListe_ng_template_24_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goNew());
    });
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "p-iconfield", 38);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 39);
    \u0275\u0275listener("ngModelChange", function LivreurListe_ng_template_24_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 40)(5, "p-select", 41);
    \u0275\u0275listener("ngModelChange", function LivreurListe_ng_template_24_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.setSelectedFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, LivreurListe_ng_template_24_Conditional_6_Template, 1, 0, "button", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r4.searchQuery());
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r4.filterOptions)("ngModel", ctx_r4.selectedFilter());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canCreate ? 6 : -1);
  }
}
function LivreurListe_ng_template_26_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 52);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 44)(2, "span", 45);
    \u0275\u0275text(3, "Nom ");
    \u0275\u0275element(4, "p-sortIcon", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 47)(6, "span", 45);
    \u0275\u0275text(7, "T\xE9l\xE9phone ");
    \u0275\u0275element(8, "p-sortIcon", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 49);
    \u0275\u0275text(10, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 50)(12, "span", 45);
    \u0275\u0275text(13, "Ajout\xE9 ");
    \u0275\u0275element(14, "p-sortIcon", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, LivreurListe_ng_template_26_Conditional_15_Template, 2, 0, "th", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 15 : -1);
  }
}
function LivreurListe_ng_template_28_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 56);
  }
}
function LivreurListe_ng_template_28_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 57);
  }
}
function LivreurListe_ng_template_28_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function LivreurListe_ng_template_28_Conditional_16_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const l_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goEdit(l_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_28_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function LivreurListe_ng_template_28_Conditional_16_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const l_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deleteLivreur(l_r10));
    });
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_28_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 59);
    \u0275\u0275conditionalCreate(2, LivreurListe_ng_template_28_Conditional_16_Conditional_2_Template, 1, 0, "button", 60);
    \u0275\u0275conditionalCreate(3, LivreurListe_ng_template_28_Conditional_16_Conditional_3_Template, 1, 0, "button", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.canDelete ? 3 : -1);
  }
}
function LivreurListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 45)(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, LivreurListe_ng_template_28_Conditional_11_Template, 1, 0, "p-tag", 56)(12, LivreurListe_ng_template_28_Conditional_12_Template, 1, 0, "p-tag", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 58);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, LivreurListe_ng_template_28_Conditional_16_Template, 4, 2, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", l_r10.prenom[0], "", l_r10.nom[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.fullName(l_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, l_r10.phone));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(l_r10.is_active ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", l_r10.created_at ? \u0275\u0275pipeBind2(15, 9, l_r10.created_at, "dd/MM/yy") : "-", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.canUpdate || ctx_r4.canDelete ? 16 : -1);
  }
}
function LivreurListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64)(2, "div", 65);
    \u0275\u0275element(3, "i", 66);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun livreur trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r4.canUpdate || ctx_r4.canDelete ? 5 : 4);
  }
}
function LivreurListe_ng_template_32_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function LivreurListe_ng_template_32_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, LivreurListe_ng_template_32_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c14));
  }
}
function LivreurListe_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LivreurListe_ng_template_32_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c14));
  }
}
var LivreurListe = class _LivreurListe {
  livreurService;
  messageService;
  confirmationService;
  authService;
  router;
  livreurs = signal([], ...ngDevMode ? [{ debugName: "livreurs" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  filterOptions = [
    { label: "Tous", value: "all" },
    { label: "Actifs", value: "actif" },
    { label: "Inactifs", value: "inactif" }
  ];
  loading = false;
  get canCreate() {
    return this.authService.hasPermission("livreurs.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("livreurs.update");
  }
  get canDelete() {
    return this.authService.hasPermission("livreurs.delete");
  }
  mobileFilterMenuItems = [];
  filteredLivreurs = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const list = this.livreurs();
    if (!query)
      return list;
    return list.filter((livreur) => this.matchesSearch(livreur, query));
  }, ...ngDevMode ? [{ debugName: "filteredLivreurs" }] : []);
  constructor(livreurService, messageService, confirmationService, authService, router) {
    this.livreurService = livreurService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.load();
    this.mobileFilterMenuItems = [
      { label: "Tous", icon: "pi pi-list", command: () => this.setSelectedFilter("all") },
      { label: "Actifs", icon: "pi pi-check-circle", command: () => this.setSelectedFilter("actif") },
      { label: "Inactifs", icon: "pi pi-times-circle", command: () => this.setSelectedFilter("inactif") }
    ];
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  load() {
    this.loading = true;
    const filter = this.selectedFilter();
    const statut = filter === "all" ? void 0 : filter;
    this.livreurService.getAll(statut).subscribe({
      next: (resp) => {
        this.livreurs.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.messageService.add({ severity: "error", summary: "Erreur", detail: "Impossible de charger les livreurs.", life: 5e3 });
      }
    });
  }
  goNew() {
    this.router.navigate(["/vehicules/livreurs/nouveau"]);
  }
  goEdit(l) {
    this.router.navigate(["/vehicules/livreurs", l.id, "edit"]);
  }
  setSelectedFilter(value) {
    if (value === "all" || value === "actif" || value === "inactif") {
      this.selectedFilter.set(value);
    } else {
      this.selectedFilter.set("all");
    }
    this.load();
  }
  deleteLivreur(l) {
    this.confirmationService.confirm({
      message: `Supprimer d\xE9finitivement <strong>${l.prenom} ${l.nom}</strong> ?`,
      header: "Supprimer le livreur",
      icon: "pi pi-trash",
      rejectButtonProps: { label: "Annuler", severity: "secondary", outlined: true },
      acceptButtonProps: { label: "Supprimer", severity: "danger" },
      accept: () => {
        this.livreurService.delete(l.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Supprim\xE9", detail: `${l.prenom} ${l.nom} supprim\xE9.`, life: 3e3 });
            this.livreurs.update((list) => list.filter((x) => x.id !== l.id));
          },
          error: (err) => this.messageService.add({ severity: "error", summary: "Erreur", detail: err.error?.message || "Impossible de supprimer.", life: 5e3 })
        });
      }
    });
  }
  fullName(l) {
    return `${l.prenom} ${l.nom}`;
  }
  matchesSearch(l, query) {
    const searchable = [
      l.prenom,
      l.nom,
      l.phone,
      this.fullName(l),
      this.isLivreurActive(l) ? "actif" : "inactif"
    ].filter((value) => !!value).join(" ").toLowerCase();
    return searchable.includes(query);
  }
  isLivreurActive(l) {
    const status = l.is_active;
    return status === true || status === 1 || status === "1";
  }
  static \u0275fac = function LivreurListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivreurListe)(\u0275\u0275directiveInject(LivreurService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivreurListe, selectors: [["app-livreur-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 34, vars: 16, consts: [["filterMenu", ""], ["mobileListState", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "livreur-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, t\xE9l\xE9phone...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["type", "button", "aria-label", "Nouveau livreur", 1, "mobile-fab"], [1, "card", "livreur-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} livreurs", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport", "rowHover"], [1, "mobile-list"], ["class", "mobile-livreur-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "mobile-livreur-card", 3, "click"], [1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["value", "Actif", "severity", "success", "styleClass", "mobile-status-tag"], ["value", "Inactif", "severity", "secondary", "styleClass", "mobile-status-tag"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], ["type", "button", "aria-label", "Nouveau livreur", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un livreur...", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "w-full", "sm:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous", 1, "w-full", "sm:w-44", 3, "ngModelChange", "options", "ngModel"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau livreur"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau livreur", 3, "click"], ["pSortableColumn", "prenom", 2, "width", "35%"], [1, "flex", "items-center", "gap-2"], ["field", "prenom"], ["pSortableColumn", "phone", 2, "width", "25%"], ["field", "phone"], [2, "width", "20%"], ["pSortableColumn", "created_at", 2, "width", "10%"], ["field", "created_at"], [1, "text-center", 2, "width", "10%"], [1, "inline-flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-white", "font-bold", "text-xs", "flex-shrink-0", 2, "width", "2rem", "height", "2rem"], [1, "font-medium"], [1, "text-sm"], ["value", "Actif", "severity", "success"], ["value", "Inactif", "severity", "secondary"], [1, "text-surface-500", "text-sm"], [1, "flex", "gap-1", "justify-center"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top"], ["pButton", "", "type", "button", "icon", "pi pi-pen-to-square", "text", "", "rounded", "", "size", "small", "pTooltip", "Modifier", "tooltipPosition", "top", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "severity", "danger", "text", "", "rounded", "", "size", "small", "pTooltip", "Supprimer", "tooltipPosition", "top", 3, "click"], [1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-truck", "text-4xl"]], template: function LivreurListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "div", 7)(3, "header", 8)(4, "button", 9);
      \u0275\u0275listener("click", function LivreurListe_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 10)(6, "h1", 11);
      \u0275\u0275text(7, "Livreurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 12);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "p-menu", 13, 0);
      \u0275\u0275elementStart(12, "button", 14);
      \u0275\u0275listener("click", function LivreurListe_Template_button_click_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        const filterMenu_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(filterMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 15)(14, "section", 16)(15, "p-iconfield");
      \u0275\u0275element(16, "p-inputicon", 17);
      \u0275\u0275elementStart(17, "input", 18);
      \u0275\u0275listener("ngModelChange", function LivreurListe_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, LivreurListe_section_18_Template, 2, 1, "section", 19)(19, LivreurListe_ng_template_19_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(21, LivreurListe_Conditional_21_Template, 2, 0, "button", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 21)(23, "p-table", 22);
      \u0275\u0275template(24, LivreurListe_ng_template_24_Template, 7, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, LivreurListe_ng_template_26_Template, 16, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, LivreurListe_ng_template_28_Template, 17, 12, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, LivreurListe_ng_template_30_Template, 6, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, LivreurListe_ng_template_32_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r12 = \u0275\u0275reference(20);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.filteredLivreurs().length, " livreur", ctx.filteredLivreurs().length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileFilterMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredLivreurs().length)("ngIfElse", mobileListState_r12);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.canCreate ? 21 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.filteredLivreurs())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(15, _c05))("showCurrentPageReport", true)("rowHover", true);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TableModule, Table, SortableColumn, SortIcon, ButtonModule, ButtonDirective, ToastModule, Toast, InputTextModule, InputText, SkeletonModule, Skeleton, TagModule, Tag, InputIconModule, InputIcon, IconFieldModule, IconField, SelectModule, Select, TooltipModule, Tooltip, ConfirmDialogModule, ConfirmDialog, MenuModule, Menu, RippleModule, Ripple, DatePipe, PhoneFormatPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.livreur-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .livreur-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .livreur-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-livreur-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-livreur-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .livreur-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .livreur-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-livreur-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-livreur-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-fab[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=livreur-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivreurListe, [{
    type: Component,
    args: [{ selector: "app-livreur-liste", standalone: true, imports: [
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
      TooltipModule,
      ConfirmDialogModule,
      MenuModule,
      RippleModule,
      PhoneFormatPipe
    ], providers: [MessageService, ConfirmationService], template: `<p-toast />
<p-confirmdialog />

<!-- \u2550\u2550 MOBILE : app shell (masqu\xE9 sur desktop) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="livreur-mobile-app">
  <header class="mobile-header">
    <button
      pButton pRipple
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-back"
      aria-label="Retour \xE0 l'accueil"
      (click)="goBack()"
    ></button>
    <div class="mobile-title-wrap">
      <h1 class="mobile-title">Livreurs</h1>
      <p class="mobile-subtitle">{{ filteredLivreurs().length }} livreur{{ filteredLivreurs().length !== 1 ? 's' : '' }}</p>
    </div>
    <p-menu
      #filterMenu
      [model]="mobileFilterMenuItems"
      [popup]="true"
      appendTo="body"
      styleClass="mobile-status-menu"
    />
    <button
      pButton pRipple
      icon="pi pi-filter"
      class="p-button-rounded p-button-text mobile-add"
      aria-label="Filtrer par statut"
      (click)="filterMenu.toggle($event)"
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
          placeholder="Nom, t\xE9l\xE9phone..."
          class="w-full"
        />
      </p-iconfield>
    </section>

    <section class="mobile-list" *ngIf="!loading && filteredLivreurs().length; else mobileListState">
      <article
        class="mobile-livreur-card"
        *ngFor="let l of filteredLivreurs()"
        (click)="goEdit(l)"
      >
        <div class="mobile-card-avatar">{{ l.prenom[0] }}{{ l.nom[0] }}</div>
        <div class="mobile-card-body">
          <div class="mobile-card-name">{{ fullName(l) }}</div>
          <div class="mobile-card-meta">{{ l.phone | phoneFormat }}</div>
          <div class="mobile-card-footer">
            @if (l.is_active) {
              <p-tag value="Actif" severity="success" styleClass="mobile-status-tag" />
            } @else {
              <p-tag value="Inactif" severity="secondary" styleClass="mobile-status-tag" />
            }
          </div>
        </div>
      </article>
    </section>

    <ng-template #mobileListState>
      <div class="mobile-state" *ngIf="loading">Chargement...</div>
      <div class="mobile-state" *ngIf="!loading && !filteredLivreurs().length">Aucun livreur trouv\xE9.</div>
    </ng-template>
  </div>

  @if (canCreate) {
    <button
      type="button"
      class="mobile-fab"
      aria-label="Nouveau livreur"
      (click)="goNew()"
    >
      <i class="pi pi-plus"></i>
    </button>
  }
</div>

<!-- \u2550\u2550 DESKTOP : tableau standard (masqu\xE9 sur mobile) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="card livreur-desktop">
  <p-table
    [value]="filteredLivreurs()"
    [loading]="loading"
    [paginator]="true"
    paginatorDropdownAppendTo="body"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    responsiveLayout="scroll"
    currentPageReportTemplate="  {first} / {last} de {totalRecords} livreurs"
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
            placeholder="Rechercher un livreur..."
            [ngModel]="searchQuery()"
            (ngModelChange)="searchQuery.set($event)"
            class="w-full"
          />
        </p-iconfield>
        <div class="flex gap-2 w-full sm:w-auto">
          <p-select
            [options]="filterOptions"
            optionLabel="label"
            optionValue="value"
            [ngModel]="selectedFilter()"
            (ngModelChange)="setSelectedFilter($event)"
            placeholder="Tous"
            class="w-full sm:w-44"
          />
          @if (canCreate) {
            <button pButton outlined icon="pi pi-plus" label="Nouveau livreur"
                    (click)="goNew()"></button>
          }
        </div>
      </div>
    </ng-template>

    <ng-template #header>
      <tr>
        <th pSortableColumn="prenom" style="width:35%">
          <span class="flex items-center gap-2">Nom <p-sortIcon field="prenom" /></span>
        </th>
        <th pSortableColumn="phone" style="width:25%">
          <span class="flex items-center gap-2">T\xE9l\xE9phone <p-sortIcon field="phone" /></span>
        </th>
        <th style="width:20%">Statut</th>
        <th pSortableColumn="created_at" style="width:10%">
          <span class="flex items-center gap-2">Ajout\xE9 <p-sortIcon field="created_at" /></span>
        </th>
        @if (canUpdate || canDelete) {
          <th style="width:10%" class="text-center">Actions</th>
        }
      </tr>
    </ng-template>

    <ng-template #body let-l>
      <tr>
        <td>
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center rounded-full bg-primary text-white font-bold text-xs flex-shrink-0"
                  style="width:2rem;height:2rem">
              {{ l.prenom[0] }}{{ l.nom[0] }}
            </span>
            <span class="font-medium">{{ fullName(l) }}</span>
          </div>
        </td>
        <td class="text-sm">{{ l.phone | phoneFormat }}</td>
        <td>
          @if (l.is_active) {
            <p-tag value="Actif" severity="success" />
          } @else {
            <p-tag value="Inactif" severity="secondary" />
          }
        </td>
        <td class="text-surface-500 text-sm">
          {{ l.created_at ? (l.created_at | date:'dd/MM/yy') : '-' }}
        </td>
        @if (canUpdate || canDelete) {
          <td>
            <div class="flex gap-1 justify-center">
              @if (canUpdate) {
                <button pButton type="button" icon="pi pi-pen-to-square"
                        text rounded size="small" pTooltip="Modifier" tooltipPosition="top"
                        (click)="goEdit(l)"></button>
              }
              @if (canDelete) {
                <button pButton type="button" icon="pi pi-trash" severity="danger"
                        text rounded size="small" pTooltip="Supprimer" tooltipPosition="top"
                        (click)="deleteLivreur(l)"></button>
              }
            </div>
          </td>
        }
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td [attr.colspan]="(canUpdate || canDelete) ? 5 : 4" class="text-center py-8">
          <div class="flex flex-col items-center gap-3 text-surface-500">
            <i class="pi pi-truck text-4xl"></i>
            <span>Aucun livreur trouv\xE9</span>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template #loadingbody>
      @for (_ of [1, 2, 3, 4, 5]; track $index) {
        <tr>
          @for (__ of [1, 2, 3, 4, 5]; track $index) {
            <td><p-skeleton /></td>
          }
        </tr>
      }
    </ng-template>
  </p-table>
</div>
`, styles: ["/* src/app/pages/vehicules/livreurs/livreur-liste/livreur-liste.scss */\n:host {\n  display: block;\n}\n.livreur-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .livreur-desktop {\n    display: none;\n  }\n  .livreur-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100dvh;\n    height: 100dvh;\n    overflow: hidden;\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem calc(0.875rem + env(safe-area-inset-right)) calc(4rem + env(safe-area-inset-bottom)) calc(0.875rem + env(safe-area-inset-left));\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n    margin-bottom: 1rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .mobile-livreur-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-livreur-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1.25rem + env(safe-area-inset-bottom));\n    right: calc(1.25rem + env(safe-area-inset-right));\n    z-index: 50;\n    width: 3.25rem;\n    height: 3.25rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    border: none;\n    box-shadow: 0 4px 16px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.25rem;\n    cursor: pointer;\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\n  }\n  .mobile-fab:active {\n    transform: scale(0.93);\n    box-shadow: 0 2px 8px rgba(95, 107, 255, 0.3);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .livreur-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-livreur-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-fab {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);\n  }\n  :host-context(.app-dark) .mobile-fab:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=livreur-liste.css.map */\n"] }]
  }], () => [{ type: LivreurService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivreurListe, { className: "LivreurListe", filePath: "src/app/pages/vehicules/livreurs/livreur-liste/livreur-liste.ts", lineNumber: 50 });
})();

// src/app/pages/vehicules/livreurs/livreur-form/livreur-form.ts
var _c06 = () => ({ standalone: true });
function LivreurForm_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Pr\xE9nom requis.");
    \u0275\u0275elementEnd();
  }
}
function LivreurForm_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "Nom requis.");
    \u0275\u0275elementEnd();
  }
}
function LivreurForm_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", c_r2.flag, \u0275\u0275sanitizeUrl)("alt", c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.name);
  }
}
function LivreurForm_ng_template_42_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", c_r3.flag, \u0275\u0275sanitizeUrl)("alt", c_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function LivreurForm_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivreurForm_ng_template_42_div_0_Template, 6, 4, "div", 33);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", c_r3);
  }
}
function LivreurForm_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1, "T\xE9l\xE9phone requis.");
    \u0275\u0275elementEnd();
  }
}
function LivreurForm_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.phoneError);
  }
}
function LivreurForm_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 13);
    \u0275\u0275text(5, " Activer ou d\xE9sactiver ce livreur. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275element(7, "p-toggleswitch", 35);
    \u0275\u0275elementStart(8, "label", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r3.form.get("is_active")) == null ? null : tmp_3_0.value) ? "Actif" : "Inactif", " ");
  }
}
var LivreurForm = class _LivreurForm {
  fb;
  livreurService;
  messageService;
  router;
  livreur;
  get isEditMode() {
    return !!this.livreur;
  }
  form;
  loading = false;
  submitted = false;
  phoneCountry = DEFAULT_COUNTRY_CODE;
  phoneError = null;
  countries = COUNTRIES;
  constructor(fb, livreurService, messageService, router) {
    this.fb = fb;
    this.livreurService = livreurService;
    this.messageService = messageService;
    this.router = router;
    this.buildForm();
  }
  ngOnInit() {
    if (this.livreur) {
      this.applyLivreurToForm(this.livreur);
    }
  }
  buildForm() {
    this.form = this.fb.group({
      prenom: ["", [Validators.required, Validators.maxLength(100)]],
      nom: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.required, Validators.maxLength(20)]],
      is_active: [true]
    });
  }
  validatePhone() {
    const phoneControl = this.form.get("phone");
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = "Telephone obligatoire.";
      return false;
    }
    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry) {
      this.phoneError = "Pays invalide.";
      return false;
    }
    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = "Format invalide.";
      return false;
    }
    if (normalizedPhone.startsWith("+") && !normalizedPhone.startsWith(selectedCountry.dialCode)) {
      this.phoneError = `Le numero doit commencer par ${selectedCountry.dialCode} pour ${selectedCountry.name}.`;
      return false;
    }
    const phoneToParse = normalizedPhone.startsWith("+") ? normalizedPhone : `${selectedCountry.dialCode}${normalizedPhone}`;
    try {
      const parsed = parsePhoneNumberWithError(phoneToParse, this.phoneCountry);
      if (!parsed || !parsed.isValid()) {
        this.phoneError = `Numero invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }
      if (parsed.country && parsed.country !== this.phoneCountry) {
        const parsedDial = `+${parsed.countryCallingCode}`;
        this.phoneError = `Le prefixe ${parsedDial} ne correspond pas au pays ${selectedCountry.name}.`;
        return false;
      }
      phoneControl?.setValue(parsed.formatInternational(), { emitEvent: false });
      this.phoneError = null;
      return true;
    } catch {
      this.phoneError = "Format invalide.";
      return false;
    }
  }
  onPhoneInput() {
    if (this.submitted)
      this.validatePhone();
  }
  onPhoneBlur() {
    if (this.form.get("phone")?.value?.trim())
      this.validatePhone();
  }
  onCountryChange() {
    const phoneControl = this.form.get("phone");
    const rawPhone = phoneControl?.value?.trim();
    if (!rawPhone) {
      this.phoneError = null;
      return;
    }
    const selectedCountry = this.getCountry(this.phoneCountry);
    if (!selectedCountry)
      return;
    const normalizedPhone = this.toPhoneCandidate(rawPhone);
    if (!normalizedPhone) {
      this.phoneError = "Format invalide.";
      return;
    }
    if (normalizedPhone.startsWith("+")) {
      try {
        const parsed = parsePhoneNumberWithError(normalizedPhone);
        if (parsed?.nationalNumber) {
          phoneControl?.setValue(`${selectedCountry.dialCode} ${parsed.nationalNumber}`, { emitEvent: false });
        }
      } catch {
      }
    } else {
      phoneControl?.setValue(`${selectedCountry.dialCode} ${normalizedPhone}`, { emitEvent: false });
    }
    this.validatePhone();
  }
  getCountryName(code) {
    return this.getCountry(code)?.name ?? code;
  }
  isInvalid(name) {
    const c = this.form.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    if (!this.validatePhone())
      return;
    const v = this.form.value;
    this.loading = true;
    const req$ = this.isEditMode ? this.livreurService.update(this.livreur.id, {
      prenom: v.prenom,
      nom: v.nom,
      phone: v.phone,
      is_active: v.is_active
    }) : this.livreurService.create({
      prenom: v.prenom,
      nom: v.nom,
      phone: v.phone
    });
    req$.subscribe({
      next: () => {
        if (this.isEditMode && this.livreur) {
          this.reloadEditedLivreur(this.livreur.id);
          return;
        }
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Livreur cree.",
          life: 3e3
        });
        setTimeout(() => this.router.navigate(["/vehicules/livreurs"]), 1500);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 422 && err.error?.errors) {
          Object.values(err.error.errors).flat().forEach((m) => this.messageService.add({ severity: "error", summary: "Validation", detail: m, life: 5e3 }));
          return;
        }
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err.error?.message || "Erreur inattendue.",
          life: 5e3
        });
      }
    });
  }
  onCancel() {
    this.router.navigate(["/vehicules/livreurs"]);
  }
  reloadEditedLivreur(id) {
    this.livreurService.getOne(id).subscribe({
      next: (resp) => {
        this.livreur = resp.data;
        this.applyLivreurToForm(resp.data);
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Livreur mis a jour.",
          life: 3e3
        });
      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: "warn",
          summary: "Mise a jour enregistree",
          detail: "Le livreur est modifie mais le rechargement a echoue.",
          life: 5e3
        });
      }
    });
  }
  applyLivreurToForm(livreur) {
    this.detectPhoneCountry(livreur.phone);
    this.form.patchValue({
      prenom: livreur.prenom,
      nom: livreur.nom,
      phone: livreur.phone,
      is_active: livreur.is_active
    });
  }
  detectPhoneCountry(phone) {
    this.phoneCountry = DEFAULT_COUNTRY_CODE;
    const safePhone = this.toPhoneCandidate(phone ?? "");
    if (!safePhone.startsWith("+"))
      return;
    try {
      const parsed = parsePhoneNumberWithError(safePhone);
      if (parsed?.country)
        this.phoneCountry = parsed.country;
    } catch {
    }
  }
  toPhoneCandidate(rawPhone) {
    const trimmed = rawPhone.trim();
    if (!trimmed)
      return "";
    const hasPlus = trimmed.startsWith("+");
    const digits = trimmed.replace(/\D/g, "");
    if (!digits)
      return "";
    return hasPlus ? `+${digits}` : digits;
  }
  getCountry(code) {
    return getCountryByCode(code) ?? this.countries.find((c) => c.code === code);
  }
  static \u0275fac = function LivreurForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivreurForm)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LivreurService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivreurForm, selectors: [["app-livreur-form"]], inputs: { livreur: "livreur" }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 56, vars: 27, consts: [["item", ""], ["selectedItem", ""], [1, "card", "livreur-form"], [1, "mobile-lf-header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-lf-back", 3, "click"], [1, "mobile-lf-title-wrap"], [1, "mobile-lf-title"], [2, "width", "2.25rem", "flex-shrink", "0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold", "mb-6", "block", "lf-desktop-title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "lf-section", "grid", "grid-cols-12", "gap-4", "pb-8", "mb-8", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "lf-section-label", "col-span-12", "lg:col-span-2"], [1, "lf-section-title", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal"], [1, "col-span-12", "lg:col-span-10"], [1, "grid", "grid-cols-12", "gap-4"], [1, "lf-field", "mb-4", "col-span-12", "md:col-span-6", "flex", "flex-col", "gap-1"], [1, "lf-label", "font-medium", "text-surface-900", "dark:text-surface-0"], [1, "text-red-500"], ["pInputText", "", "fluid", "", "formControlName", "prenom", "placeholder", "ex : Ibrahima"], ["pInputText", "", "fluid", "", "formControlName", "nom", "placeholder", "ex : Sylla"], [1, "mb-4", "col-span-12", "grid", "grid-cols-12", "gap-3"], [1, "lf-field", "col-span-12", "md:col-span-4", "flex", "flex-col", "gap-1"], ["optionLabel", "name", "optionValue", "code", "placeholder", "Pays", "styleClass", "w-full", 3, "ngModelChange", "onChange", "ngModel", "ngModelOptions", "options"], [1, "lf-field", "col-span-12", "md:col-span-8", "flex", "flex-col", "gap-1"], ["pInputText", "", "fluid", "", "formControlName", "phone", "type", "tel", "placeholder", "ex : 622 00 00 00", 3, "input", "blur"], [1, "lf-actions", "flex", "gap-2", "justify-end"], ["pButton", "", "pRipple", "", "type", "button", "text", "", "label", "Annuler", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "submit", "icon", "pi pi-check", 3, "label", "loading"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary", "text-sm"], [1, "text-sm"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "col-span-12", "lg:col-span-10", "flex", "items-center", "gap-3"], ["formControlName", "is_active", "inputId", "is_active"], ["for", "is_active", 1, "cursor-pointer", "text-sm", "font-medium", "text-surface-900", "dark:text-surface-0"]], template: function LivreurForm_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2)(2, "header", 3)(3, "button", 4);
      \u0275\u0275listener("click", function LivreurForm_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "h1", 6);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 9);
      \u0275\u0275listener("ngSubmit", function LivreurForm_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 11)(13, "div", 12);
      \u0275\u0275text(14, "Identit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 13);
      \u0275\u0275text(16, " Informations du livreur. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "label", 17);
      \u0275\u0275text(21, " Pr\xE9nom ");
      \u0275\u0275elementStart(22, "span", 18);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(24, "input", 19);
      \u0275\u0275conditionalCreate(25, LivreurForm_Conditional_25_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16)(27, "label", 17);
      \u0275\u0275text(28, " Nom ");
      \u0275\u0275elementStart(29, "span", 18);
      \u0275\u0275text(30, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(31, "input", 20);
      \u0275\u0275conditionalCreate(32, LivreurForm_Conditional_32_Template, 2, 0, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 21)(34, "div", 22)(35, "label", 17);
      \u0275\u0275text(36, " Pays ");
      \u0275\u0275elementStart(37, "span", 18);
      \u0275\u0275text(38, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p-select", 23);
      \u0275\u0275twoWayListener("ngModelChange", function LivreurForm_Template_p_select_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function LivreurForm_Template_p_select_onChange_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCountryChange());
      });
      \u0275\u0275template(40, LivreurForm_ng_template_40_Template, 6, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(42, LivreurForm_ng_template_42_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 24)(45, "label", 17);
      \u0275\u0275text(46, " T\xE9l\xE9phone ");
      \u0275\u0275elementStart(47, "span", 18);
      \u0275\u0275text(48, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "input", 25);
      \u0275\u0275listener("input", function LivreurForm_Template_input_input_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPhoneInput());
      })("blur", function LivreurForm_Template_input_blur_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPhoneBlur());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(50, LivreurForm_Conditional_50_Template, 2, 0, "small", 18);
      \u0275\u0275conditionalCreate(51, LivreurForm_Conditional_51_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(52, LivreurForm_Conditional_52_Template, 10, 1, "div", 10);
      \u0275\u0275elementStart(53, "div", 26)(54, "button", 27);
      \u0275\u0275listener("click", function LivreurForm_Template_button_click_54_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "button", 28);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Modifier le livreur" : "Nouveau livreur");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Modifier le livreur" : "Nouveau livreur", " ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("prenom"))("ng-dirty", ctx.isInvalid("prenom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("prenom") ? 25 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("nom"))("ng-dirty", ctx.isInvalid("nom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("nom") ? 32 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneCountry);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(26, _c06))("options", ctx.countries);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("phone") || !!ctx.phoneError)("ng-dirty", ctx.isInvalid("phone") || !!ctx.phoneError);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("phone") && !ctx.phoneError ? 50 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.phoneError ? 51 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isEditMode ? 52 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode ? "Enregistrer" : "Cr\xE9er le livreur")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormsModule, NgModel, ButtonModule, ButtonDirective, InputTextModule, InputText, SelectModule, Select, ToastModule, Toast, ToggleSwitchModule, ToggleSwitch, RippleModule, Ripple], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.livreur-form[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mobile-lf-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .livreur-form[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .lf-desktop-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-lf-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-lf-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-lf-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-lf-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .lf-section[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .lf-section-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .lf-section-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lf-field[_ngcontent-%COMP%]   .lf-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .lf-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .lf-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .app-dark[_nghost-%COMP%]   .livreur-form[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .livreur-form[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-lf-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-lf-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-lf-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-lf-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-100);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-lf-back[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-lf-back[_ngcontent-%COMP%] {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .lf-section[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .lf-section[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .lf-section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .lf-section-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .lf-field[_ngcontent-%COMP%]   .lf-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .lf-field[_ngcontent-%COMP%]   .lf-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .lf-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .lf-actions[_ngcontent-%COMP%] {\n    background: rgba(15, 23, 42, 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=livreur-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivreurForm, [{
    type: Component,
    args: [{ selector: "app-livreur-form", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      ButtonModule,
      InputTextModule,
      SelectModule,
      ToastModule,
      ToggleSwitchModule,
      RippleModule
    ], providers: [MessageService], template: `<p-toast />

<div class="card livreur-form">

  <!-- \u2550\u2550\u2550 HEADER MOBILE (sticky, cach\xE9 sur desktop via SCSS) \u2550\u2550\u2550 -->
  <header class="mobile-lf-header">
    <button
      pButton pRipple type="button"
      icon="pi pi-arrow-left"
      class="p-button-rounded p-button-text mobile-lf-back"
      aria-label="Retour"
      (click)="onCancel()"
    ></button>
    <div class="mobile-lf-title-wrap">
      <h1 class="mobile-lf-title">{{ isEditMode ? 'Modifier le livreur' : 'Nouveau livreur' }}</h1>
    </div>
    <!-- placeholder pour centrer le titre -->
    <div style="width:2.25rem;flex-shrink:0"></div>
  </header>

  <!-- Titre desktop -->
  <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block lf-desktop-title">
    {{ isEditMode ? 'Modifier le livreur' : 'Nouveau livreur' }}
  </span>

  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

    <!-- \u2550\u2550 Identit\xE9 \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="lf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
      <div class="lf-section-label col-span-12 lg:col-span-2">
        <div class="lf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Identit\xE9</div>
        <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal">
          Informations du livreur.
        </p>
      </div>
      <div class="col-span-12 lg:col-span-10">
        <div class="grid grid-cols-12 gap-4">

          <div class="lf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="lf-label font-medium text-surface-900 dark:text-surface-0">
              Pr\xE9nom <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="prenom" placeholder="ex : Ibrahima"
                   [class.ng-invalid]="isInvalid('prenom')" [class.ng-dirty]="isInvalid('prenom')" />
            @if (isInvalid('prenom')) {
              <small class="text-red-500">Pr\xE9nom requis.</small>
            }
          </div>

          <div class="lf-field mb-4 col-span-12 md:col-span-6 flex flex-col gap-1">
            <label class="lf-label font-medium text-surface-900 dark:text-surface-0">
              Nom <span class="text-red-500">*</span>
            </label>
            <input pInputText fluid formControlName="nom" placeholder="ex : Sylla"
                   [class.ng-invalid]="isInvalid('nom')" [class.ng-dirty]="isInvalid('nom')" />
            @if (isInvalid('nom')) {
              <small class="text-red-500">Nom requis.</small>
            }
          </div>

          <!-- Pays + T\xE9l\xE9phone -->
          <div class="mb-4 col-span-12 grid grid-cols-12 gap-3">
            <div class="lf-field col-span-12 md:col-span-4 flex flex-col gap-1">
              <label class="lf-label font-medium text-surface-900 dark:text-surface-0">
                Pays <span class="text-red-500">*</span>
              </label>
              <p-select
                [(ngModel)]="phoneCountry"
                [ngModelOptions]="{standalone: true}"
                [options]="countries"
                optionLabel="name"
                optionValue="code"
                placeholder="Pays"
                (onChange)="onCountryChange()"
                styleClass="w-full"
              >
                <ng-template #item let-c>
                  <div class="flex items-center gap-2">
                    <img [src]="c.flag" [alt]="c.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary text-sm">{{ c.dialCode }}</span>
                    <span class="text-sm">{{ c.name }}</span>
                  </div>
                </ng-template>
                <ng-template #selectedItem let-c>
                  <div class="flex items-center gap-2" *ngIf="c">
                    <img [src]="c.flag" [alt]="c.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary text-sm">{{ c.dialCode }}</span>
                    <span class="text-sm">{{ c.name }}</span>
                  </div>
                </ng-template>
              </p-select>
            </div>

            <div class="lf-field col-span-12 md:col-span-8 flex flex-col gap-1">
              <label class="lf-label font-medium text-surface-900 dark:text-surface-0">
                T\xE9l\xE9phone <span class="text-red-500">*</span>
              </label>
              <input pInputText fluid formControlName="phone" type="tel"
                     placeholder="ex : 622 00 00 00"
                     (input)="onPhoneInput()" (blur)="onPhoneBlur()"
                     [class.ng-invalid]="isInvalid('phone') || !!phoneError"
                     [class.ng-dirty]="isInvalid('phone') || !!phoneError" />
              @if (isInvalid('phone') && !phoneError) {
                <small class="text-red-500">T\xE9l\xE9phone requis.</small>
              }
              @if (phoneError) {
                <small class="text-red-500">{{ phoneError }}</small>
              }
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- \u2550\u2550 Statut (\xE9dition uniquement) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    @if (isEditMode) {
      <div class="lf-section grid grid-cols-12 gap-4 pb-8 mb-8 border-b border-surface-200 dark:border-surface-700">
        <div class="lf-section-label col-span-12 lg:col-span-2">
          <div class="lf-section-title text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Statut</div>
          <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal">
            Activer ou d\xE9sactiver ce livreur.
          </p>
        </div>
        <div class="col-span-12 lg:col-span-10 flex items-center gap-3">
          <p-toggleswitch formControlName="is_active" inputId="is_active" />
          <label for="is_active" class="cursor-pointer text-sm font-medium text-surface-900 dark:text-surface-0">
            {{ form.get('is_active')?.value ? 'Actif' : 'Inactif' }}
          </label>
        </div>
      </div>
    }

    <!-- \u2550\u2550 Actions \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <div class="lf-actions flex gap-2 justify-end">
      <button pButton pRipple type="button" text label="Annuler"
              (click)="onCancel()" [disabled]="loading"></button>
      <button pButton pRipple type="submit"
              [label]="isEditMode ? 'Enregistrer' : 'Cr\xE9er le livreur'"
              icon="pi pi-check" [loading]="loading"></button>
    </div>

  </form>
</div>
`, styles: ["/* src/app/pages/vehicules/livreurs/livreur-form/livreur-form.scss */\n:host {\n  display: block;\n}\n.livreur-form {\n  position: relative;\n}\n.mobile-lf-header {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .livreur-form {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8fafc !important;\n    padding: 0 !important;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    min-height: 100dvh;\n  }\n  .lf-desktop-title {\n    display: none;\n  }\n  .mobile-lf-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: #ffffff;\n    border-bottom: 1px solid #e2e8f0;\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-lf-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: #5f6bff !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .mobile-lf-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-lf-title {\n    margin: 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0.75rem 0.875rem calc(9rem + env(safe-area-inset-bottom));\n  }\n  .lf-section {\n    background: #ffffff;\n    border-radius: 1rem;\n    padding: 1rem !important;\n    margin-bottom: 0 !important;\n    border: 1px solid #e2e8f0 !important;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .lf-section-title {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.75rem !important;\n  }\n  .lf-section-label {\n    display: none;\n  }\n  .lf-field .lf-label {\n    font-size: 0.7rem !important;\n    font-weight: 700 !important;\n    text-transform: uppercase;\n    letter-spacing: 0.07em;\n    color: #94a3b8 !important;\n    margin-bottom: 0.35rem !important;\n  }\n  .lf-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 40;\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    -webkit-backdrop-filter: blur(16px);\n    backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .lf-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  :host-context(.app-dark) .livreur-form {\n    background: var(--p-surface-950) !important;\n  }\n  :host-context(.app-dark) .mobile-lf-header {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-lf-title {\n    color: var(--p-surface-100);\n  }\n  :host-context(.app-dark) .mobile-lf-back {\n    color: var(--p-primary-400) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  :host-context(.app-dark) .lf-section {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-700) !important;\n  }\n  :host-context(.app-dark) .lf-section-title {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .lf-field .lf-label {\n    color: var(--p-surface-400) !important;\n  }\n  :host-context(.app-dark) .lf-actions {\n    background: rgba(15, 23, 42, 0.92);\n    border-color: var(--p-surface-700);\n  }\n}\n/*# sourceMappingURL=livreur-form.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: LivreurService }, { type: MessageService }, { type: Router }], { livreur: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivreurForm, { className: "LivreurForm", filePath: "src/app/pages/vehicules/livreurs/livreur-form/livreur-form.ts", lineNumber: 36 });
})();

// src/app/pages/vehicules/livreurs/livreur-edit/livreur-edit.ts
function LivreurEdit_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "p-skeleton", 3)(2, "p-skeleton", 4)(3, "p-skeleton", 5);
    \u0275\u0275elementEnd();
  }
}
function LivreurEdit_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-livreur-form", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("livreur", ctx_r0.livreur);
  }
}
function LivreurEdit_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "Livreur introuvable.");
    \u0275\u0275elementEnd()();
  }
}
var LivreurEdit = class _LivreurEdit {
  route;
  livreurService;
  router;
  livreur = null;
  loading = true;
  constructor(route, livreurService, router) {
    this.route = route;
    this.livreurService = livreurService;
    this.router = router;
  }
  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    if (!id) {
      this.router.navigate(["/vehicules/livreurs"]);
      return;
    }
    this.livreurService.getOne(id).subscribe({
      next: (resp) => {
        this.livreur = resp.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(["/vehicules/livreurs"]);
      }
    });
  }
  static \u0275fac = function LivreurEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LivreurEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LivreurService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivreurEdit, selectors: [["app-livreur-edit"]], decls: 3, vars: 3, consts: [[1, "card"], [3, "livreur"], [1, "card", "text-center", "py-12", "text-surface-500"], ["height", "2rem", "styleClass", "mb-4"], ["height", "10rem", "styleClass", "mb-4"], ["height", "6rem"], [1, "pi", "pi-exclamation-triangle", "text-4xl", "mb-4", "block", "text-orange-400"], [1, "text-lg"]], template: function LivreurEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, LivreurEdit_Conditional_0_Template, 4, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, LivreurEdit_Conditional_1_Template, 1, 1, "app-livreur-form", 1);
      \u0275\u0275conditionalCreate(2, LivreurEdit_Conditional_2_Template, 4, 0, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.livreur ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && !ctx.livreur ? 2 : -1);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton, LivreurForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LivreurEdit, [{
    type: Component,
    args: [{
      selector: "app-livreur-edit",
      standalone: true,
      imports: [CommonModule, SkeletonModule, LivreurForm],
      template: `
    @if (loading) {
      <div class="card">
        <p-skeleton height="2rem" styleClass="mb-4" />
        <p-skeleton height="10rem" styleClass="mb-4" />
        <p-skeleton height="6rem" />
      </div>
    }
    @if (!loading && livreur) {
      <app-livreur-form [livreur]="livreur" />
    }
    @if (!loading && !livreur) {
      <div class="card text-center py-12 text-surface-500">
        <i class="pi pi-exclamation-triangle text-4xl mb-4 block text-orange-400"></i>
        <span class="text-lg">Livreur introuvable.</span>
      </div>
    }
  `
    }]
  }], () => [{ type: ActivatedRoute }, { type: LivreurService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivreurEdit, { className: "LivreurEdit", filePath: "src/app/pages/vehicules/livreurs/livreur-edit/livreur-edit.ts", lineNumber: 33 });
})();

// src/app/pages/vehicules/vehicules/vehicule-liste2/vehicule-liste2.ts
var _c07 = (a0, a1, a2) => ({ "px-2 py-1 rounded-md flex items-center gap-1": true, "bg-surface-100 dark:bg-surface-800": a0, "bg-orange-100 dark:bg-orange-900": a1, "bg-green-100 dark:bg-green-900": a2 });
var _c15 = (a0, a1, a2) => ({ "text-sm font-bold": true, "text-surface-600 dark:text-surface-300": a0, "text-orange-700 dark:text-orange-300": a1, "text-green-700 dark:text-green-300": a2 });
var _forTrack02 = ($index, $item) => $item.id;
function VehiculeListe2_Conditional_17_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 45);
    \u0275\u0275listener("error", function VehiculeListe2_Conditional_17_For_2_Conditional_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const v_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onImageError(v_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", v_r4.photo_url, \u0275\u0275sanitizeUrl)("alt", v_r4.nom_vehicule);
  }
}
function VehiculeListe2_Conditional_17_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(v_r4.nom_vehicule), " ");
  }
}
function VehiculeListe2_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 35);
    \u0275\u0275listener("click", function VehiculeListe2_Conditional_17_For_2_Template_article_click_0_listener() {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goEdit(v_r4));
    });
    \u0275\u0275conditionalCreate(1, VehiculeListe2_Conditional_17_For_2_Conditional_1_Template, 1, 2, "img", 36)(2, VehiculeListe2_Conditional_17_For_2_Conditional_2_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(3, "div", 38)(4, "div", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275element(9, "p-tag", 42);
    \u0275\u0275elementStart(10, "div", 43)(11, "button", 44);
    \u0275\u0275listener("click", function VehiculeListe2_Conditional_17_For_2_Template_button_click_11_listener($event) {
      const v_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      ctx_r4.goEdit(v_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(v_r4.photo_url ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r4.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", v_r4.immatriculation, " \xB7 ", ctx_r4.getTypeLabel(v_r4));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", v_r4.is_active ? "Actif" : "Inactif")("severity", v_r4.is_active ? "success" : "danger");
  }
}
function VehiculeListe2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14);
    \u0275\u0275repeaterCreate(1, VehiculeListe2_Conditional_17_For_2_Template, 12, 6, "article", 34, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.filteredOrders());
  }
}
function VehiculeListe2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Aucun v\xE9hicule trouv\xE9.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe2_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 46);
  }
}
function VehiculeListe2_For_41_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 76);
    \u0275\u0275listener("error", function VehiculeListe2_For_41_Conditional_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r9);
      const v_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onImageError(v_r8));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", v_r8.photo_url, \u0275\u0275sanitizeUrl)("alt", v_r8.nom_vehicule);
  }
}
function VehiculeListe2_For_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(v_r8.nom_vehicule), " ");
  }
}
function VehiculeListe2_For_41_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const v_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getLivreur(v_r8).is_active ? "Actif" : "Inactif", " ");
  }
}
function VehiculeListe2_For_41_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function VehiculeListe2_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 47);
    \u0275\u0275listener("click", function VehiculeListe2_For_41_Template_div_click_1_listener() {
      const v_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleChevron(v_r8.id));
    });
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49);
    \u0275\u0275conditionalCreate(4, VehiculeListe2_For_41_Conditional_4_Template, 1, 2, "img", 50)(5, VehiculeListe2_For_41_Conditional_5_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 52)(7, "div", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 55)(12, "div", 56)(13, "div", 57)(14, "span", 58);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 56)(17, "div", 59);
    \u0275\u0275element(18, "i");
    \u0275\u0275elementStart(19, "span", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 60)(22, "span", 61);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 62)(25, "button", 63);
    \u0275\u0275listener("click", function VehiculeListe2_For_41_Template_button_click_25_listener($event) {
      const v_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.goEdit(v_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(26, "i", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 65);
    \u0275\u0275listener("click", function VehiculeListe2_For_41_Template_button_click_27_listener($event) {
      const v_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      ctx_r4.toggleChevron(v_r8.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(28, "i", 66);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div")(30, "div", 67)(31, "div", 68)(32, "div", 69)(33, "div", 70)(34, "h3", 71);
    \u0275\u0275text(35, "Propri\xE9taire");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 72)(37, "div", 73)(38, "span", 74);
    \u0275\u0275text(39, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 75);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 73)(43, "span", 74);
    \u0275\u0275text(44, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 75);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "phoneFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 73)(49, "span", 74);
    \u0275\u0275text(50, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 75);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 73)(54, "span", 74);
    \u0275\u0275text(55, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 75);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 69)(59, "div", 70)(60, "h3", 71);
    \u0275\u0275text(61, "Livreur principal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 72)(63, "div", 73)(64, "span", 74);
    \u0275\u0275text(65, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 75);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 73)(69, "span", 74);
    \u0275\u0275text(70, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 75);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "phoneFormat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 73)(75, "span", 74);
    \u0275\u0275text(76, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 75);
    \u0275\u0275conditionalCreate(78, VehiculeListe2_For_41_Conditional_78_Template, 1, 1)(79, VehiculeListe2_For_41_Conditional_79_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 73)(81, "span", 74);
    \u0275\u0275text(82, "Date de cr\xE9ation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 75);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    let tmp_34_0;
    const v_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("pStyleClass", \u0275\u0275interpolate1(".order-content-", v_r8.id));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(v_r8.photo_url ? 4 : 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r8.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r8.immatriculation);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.getTypeLabel(v_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(34, _c07, ctx_r4.getStatusColor(v_r8) === "surface", ctx_r4.getStatusColor(v_r8) === "orange", ctx_r4.getStatusColor(v_r8) === "green"));
    \u0275\u0275advance();
    \u0275\u0275classMap("text-xs pi " + ctx_r4.getStatusIcon(v_r8) + " " + (ctx_r4.getStatusColor(v_r8) === "surface" ? "text-surface-600 dark:text-surface-300" : ctx_r4.getStatusColor(v_r8) === "orange" ? "text-orange-700 dark:text-orange-300" : "text-green-700 dark:text-green-300"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(38, _c15, ctx_r4.getStatusColor(v_r8) === "surface", ctx_r4.getStatusColor(v_r8) === "orange", ctx_r4.getStatusColor(v_r8) === "green"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getStatusLabel(v_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r8.capacite_packs);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("pStyleClass", \u0275\u0275interpolate1(".order-content-", v_r8.id))("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275classMap("pi pi-chevron-down chevron-icon-" + v_r8.id + " transition-transform duration-300");
    \u0275\u0275advance();
    \u0275\u0275classMap("order-content-" + v_r8.id + " hidden overflow-hidden");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r4.getProprietaireNom(v_r8));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 30, v_r8.proprietaire == null ? null : v_r8.proprietaire.phone));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((v_r8.proprietaire == null ? null : v_r8.proprietaire.ville) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(v_r8.created_at));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r4.getLivreurNom(v_r8));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 32, (tmp_34_0 = ctx_r4.getLivreur(v_r8)) == null ? null : tmp_34_0.phone));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r4.getLivreur(v_r8) ? 78 : 79);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.formatDate(v_r8.created_at));
  }
}
function VehiculeListe2_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 77);
    \u0275\u0275text(2, "Aucun v\xE9hicule trouv\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78);
    \u0275\u0275text(4, "Essayez de modifier vos crit\xE8res de recherche");
    \u0275\u0275elementEnd()();
  }
}
var VehiculeListe2 = class _VehiculeListe2 {
  vehiculeService;
  messageService;
  router;
  apiOrigin = this.extractApiOrigin();
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  selectedFilter = signal("all", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  vehicules = signal([], ...ngDevMode ? [{ debugName: "vehicules" }] : []);
  total = signal(0, ...ngDevMode ? [{ debugName: "total" }] : []);
  loading = false;
  filterOptions = [
    { label: "Tous", value: "all" },
    { label: "Actifs", value: "actif" },
    { label: "Inactifs", value: "inactif" }
  ];
  mobileFilterMenuItems = [];
  constructor(vehiculeService, messageService, router) {
    this.vehiculeService = vehiculeService;
    this.messageService = messageService;
    this.router = router;
  }
  ngOnInit() {
    this.loadVehicules();
    this.mobileFilterMenuItems = [
      { label: "Tous", icon: "pi pi-list", command: () => this.setSelectedFilter("all") },
      { label: "Actifs", icon: "pi pi-check-circle", command: () => this.setSelectedFilter("actif") },
      { label: "Inactifs", icon: "pi pi-times-circle", command: () => this.setSelectedFilter("inactif") }
    ];
  }
  loadVehicules() {
    this.loading = true;
    this.vehiculeService.getAll().subscribe({
      next: (resp) => {
        const mapped = (resp.data?.data ?? []).map((vehicule) => __spreadProps(__spreadValues({}, vehicule), {
          photo_url: this.resolvePhotoUrl(vehicule)
        }));
        this.vehicules.set(mapped);
        this.total.set(resp.data?.total ?? 0);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err.error?.message || "Impossible de charger les vehicules.",
          life: 5e3
        });
      }
    });
  }
  filteredOrders = computed(() => {
    let filtered = this.vehicules();
    const selected = this.selectedFilter();
    if (selected !== "all") {
      filtered = filtered.filter((v) => {
        const active = this.isVehiculeActive(v);
        return selected === "actif" ? active : !active;
      });
    }
    const query = this.searchQuery().toLowerCase().trim();
    if (query) {
      filtered = filtered.filter((v) => v.nom_vehicule.toLowerCase().includes(query) || v.immatriculation.toLowerCase().includes(query) || (v.marque ?? "").toLowerCase().includes(query) || (v.modele ?? "").toLowerCase().includes(query));
    }
    return filtered;
  }, ...ngDevMode ? [{ debugName: "filteredOrders" }] : []);
  setSelectedFilter(value) {
    if (value === "all" || value === "actif" || value === "inactif") {
      this.selectedFilter.set(value);
    } else {
      this.selectedFilter.set("all");
    }
  }
  goEdit(v) {
    this.router.navigate(["/vehicules", v.id, "edit"]);
  }
  goNew() {
    this.router.navigate(["/vehicules/nouveau"]);
  }
  goBack() {
    this.router.navigate(["/vehicules"]);
  }
  onImageError(vehicule) {
    if (!vehicule.photo_url)
      return;
    this.vehicules.update((list) => list.map((item) => item.id === vehicule.id ? __spreadProps(__spreadValues({}, item), { photo_url: null }) : item));
  }
  toggleChevron(vehiculeId) {
    const chevronElement = document.querySelector(`.chevron-icon-${vehiculeId}`);
    if (chevronElement) {
      chevronElement.classList.toggle("rotate-180");
    }
  }
  getInitials(name) {
    const words = (name ?? "").split(" ").filter(Boolean);
    if (words.length >= 2)
      return (words[0][0] + words[1][0]).toUpperCase();
    return (words[0]?.substring(0, 2) ?? "??").toUpperCase();
  }
  getTypeLabel(v) {
    return TYPE_VEHICULE_LABELS[v.type_vehicule] ?? v.type_vehicule;
  }
  getStatusColor(v) {
    return this.isVehiculeActive(v) ? "green" : "surface";
  }
  getStatusIcon(v) {
    return this.isVehiculeActive(v) ? "pi-check-circle" : "pi-times-circle";
  }
  getStatusLabel(v) {
    return this.isVehiculeActive(v) ? "Actif" : "Inactif";
  }
  getProprietaireNom(v) {
    const p = v.proprietaire;
    if (!p)
      return "-";
    return `${p.prenom} ${p.nom}`.trim();
  }
  getLivreur(v) {
    return v.livreur_principal ?? v.livreurPrincipal ?? null;
  }
  getLivreurNom(v) {
    const l = this.getLivreur(v);
    if (!l)
      return "-";
    return `${l.prenom} ${l.nom}`.trim();
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  isVehiculeActive(v) {
    const status = v.is_active;
    return status === true || status === 1 || status === "1";
  }
  resolvePhotoUrl(vehicule) {
    const raw = (vehicule.photo_url ?? vehicule.photo_path ?? "").trim();
    if (!raw)
      return null;
    if (/^https?:\/\//i.test(raw) || raw.startsWith("data:")) {
      return raw;
    }
    if (raw.startsWith("//")) {
      const protocol = this.apiOrigin.startsWith("https://") ? "https:" : "http:";
      return `${protocol}${raw}`;
    }
    if (!this.apiOrigin) {
      return raw;
    }
    if (raw.startsWith("/")) {
      return `${this.apiOrigin}${raw}`;
    }
    return `${this.apiOrigin}/${raw}`;
  }
  extractApiOrigin() {
    try {
      const url = new URL(environment.apiUrl);
      return `${url.protocol}//${url.host}`;
    } catch {
      return "";
    }
  }
  static \u0275fac = function VehiculeListe2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeListe2)(\u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeListe2, selectors: [["app-vehicule-liste2"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 43, vars: 14, consts: [["filterMenu", ""], [1, "vehicules-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-filter-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], ["iconPosition", "left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, immatriculation\u2026", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "mobile-list"], [1, "mobile-state"], ["type", "button", "aria-label", "Nouveau v\xE9hicule", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "vehicules-desktop", "bg-surface-0", "dark:bg-surface-900", "p-12", "md:p-20"], [1, "flex", "flex-col", "lg:flex-row", "md:justify-between", "items-start", "lg:items-end", "gap-4", "mb-8"], [1, "flex", "flex-col", "gap-2", "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-semibold", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-xl", "leading-tight"], [1, "flex", "flex-col", "md:flex-row", "items-start", "md:items-end", "gap-4"], [1, "w-full", "md:w-54"], [1, "pi", "pi-search", "text-surface-400"], ["pInputText", "", "placeholder", "Search", 1, "w-full", "px-3", "py-2", "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-300", "dark:border-surface-600", "rounded-md", "text-surface-900", "dark:text-surface-0", 3, "ngModelChange", "ngModel"], [1, "w-full", "md:w-auto"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Filter", "styleClass", "w-full md:w-40 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600", 3, "ngModelChange", "ngModel", "options", "appendTo"], ["pTemplate", "dropdownicon"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouveau vehicule", 1, "w-full", "md:w-auto", 3, "click"], [1, "flex", "flex-col", "gap-6"], [1, "bg-surface-0", "dark:bg-surface-900", "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden", "transition-all", "duration-300"], [1, "text-center", "py-12"], [1, "mobile-vehicule-card"], [1, "mobile-vehicule-card", 3, "click"], [1, "mobile-card-avatar-img", 3, "src", "alt"], ["aria-hidden", "true", 1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Modifier", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click"], [1, "mobile-card-avatar-img", 3, "error", "src", "alt"], [1, "pi", "pi-chevron-down", "text-surface-400"], ["enterFromClass", "hidden", "enterActiveClass", "animate-slidedown", "leaveToClass", "hidden", "leaveActiveClass", "animate-slideup", 1, "p-6", "flex", "flex-col", "lg:flex-row", "justify-start", "lg:items-center", "gap-6", "cursor-pointer", "hover:bg-surface-50", "dark:hover:bg-surface-800", "transition-colors", 3, "click", "pStyleClass"], [1, "flex", "items-center", "gap-4", "flex-1", "min-w-0", "vehicule-primary-col"], [1, "vehicule-photo-col"], [1, "vehicule-photo-lg", 3, "src", "alt"], [1, "vehicule-photo-fallback"], [1, "flex", "flex-col", "gap-2", "min-w-0"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-base", "leading-tight"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "gap-3", "sm:gap-4", "flex-1", "vehicule-meta-col"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1", "min-w-0"], [1, "px-2", "py-1", "bg-surface-100", "dark:bg-surface-800", "rounded-md"], [1, "text-surface-600", "dark:text-surface-300", "text-sm", "font-bold"], [3, "ngClass"], [1, "flex", "flex-col", "items-start", "sm:items-center", "flex-1"], [1, "text-surface-700", "dark:text-surface-300", "text-base", "font-semibold", "leading-tight"], [1, "flex", "items-center", "justify-center", "gap-1", "flex-1"], ["pButton", "", "severity", "secondary", "pTooltip", "Modifier", "tooltipPosition", "top", 1, "w-10", "h-10", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-pencil"], ["pButton", "", "severity", "secondary", "enterFromClass", "hidden", "enterActiveClass", "animate-slidedown", "leaveToClass", "hidden", "leaveActiveClass", "animate-slideup", 1, "w-10", "h-10", 3, "click", "text", "rounded", "pStyleClass"], ["pButtonIcon", ""], [1, "flex", "flex-col", "gap-6", "p-6", "border-t", "border-surface-200", "dark:border-surface-700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "overflow-hidden"], [1, "p-4", "bg-surface-50", "dark:bg-surface-800", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "p-6", "flex", "flex-col", "gap-5"], [1, "flex", "gap-2"], [1, "w-40", "text-surface-700", "dark:text-surface-300", "text-base", "leading-tight"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "vehicule-photo-lg", 3, "error", "src", "alt"], [1, "text-surface-500", "dark:text-surface-400", "text-lg", "mb-2"], [1, "text-surface-400", "dark:text-surface-500", "text-base"]], template: function VehiculeListe2_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "button", 3);
      \u0275\u0275listener("click", function VehiculeListe2_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "V\xE9hicules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "p-menu", 7, 0);
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function VehiculeListe2_Template_button_click_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        const filterMenu_r2 = \u0275\u0275reference(10);
        return \u0275\u0275resetView(filterMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 9)(13, "section", 10)(14, "p-iconfield", 11);
      \u0275\u0275element(15, "p-inputicon", 12);
      \u0275\u0275elementStart(16, "input", 13);
      \u0275\u0275listener("ngModelChange", function VehiculeListe2_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, VehiculeListe2_Conditional_17_Template, 3, 0, "section", 14);
      \u0275\u0275conditionalCreate(18, VehiculeListe2_Conditional_18_Template, 2, 0, "div", 15);
      \u0275\u0275conditionalCreate(19, VehiculeListe2_Conditional_19_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275listener("click", function VehiculeListe2_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goNew());
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 18)(23, "div", 19)(24, "div", 20)(25, "h1", 21);
      \u0275\u0275text(26, "Vehicules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 22);
      \u0275\u0275text(28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 23)(30, "div", 24)(31, "p-iconfield", 11);
      \u0275\u0275element(32, "p-inputicon", 25);
      \u0275\u0275elementStart(33, "input", 26);
      \u0275\u0275listener("ngModelChange", function VehiculeListe2_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.searchQuery.set($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 27)(35, "p-select", 28);
      \u0275\u0275listener("ngModelChange", function VehiculeListe2_Template_p_select_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setSelectedFilter($event));
      });
      \u0275\u0275template(36, VehiculeListe2_ng_template_36_Template, 1, 0, "ng-template", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 27)(38, "button", 30);
      \u0275\u0275listener("click", function VehiculeListe2_Template_button_click_38_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goNew());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 31);
      \u0275\u0275repeaterCreate(40, VehiculeListe2_For_41_Template, 85, 42, "div", 32, _forTrack02);
      \u0275\u0275conditionalCreate(42, VehiculeListe2_Conditional_42_Template, 5, 0, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.total(), " v\xE9hicule", ctx.total() > 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileFilterMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredOrders().length ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.filteredOrders().length === 0 ? 19 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Total = ", ctx.total());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.selectedFilter())("options", ctx.filterOptions)("appendTo", "body");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.filteredOrders());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filteredOrders().length === 0 ? 42 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    ButtonDirective,
    ButtonIcon,
    PrimeTemplate,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    MenuModule,
    Menu,
    RippleModule,
    Ripple,
    SelectModule,
    Select,
    StyleClassModule,
    StyleClass,
    TagModule,
    Tag,
    ToastModule,
    Toast,
    TooltipModule,
    Tooltip,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.vehicules-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (min-width: 769px) {\n  .vehicule-primary-col[_ngcontent-%COMP%] {\n    flex: 1.35;\n  }\n  .vehicule-meta-col[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .vehicule-photo-col[_ngcontent-%COMP%] {\n    width: 5.75rem;\n    min-width: 5.75rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vehicule-photo-lg[_ngcontent-%COMP%] {\n    width: 5.75rem;\n    height: 3.75rem;\n    border-radius: 0.75rem;\n    object-fit: cover;\n    background: var(--p-surface-100);\n    border: 1px solid var(--p-surface-200);\n    padding: 0.125rem;\n    display: block;\n  }\n  .vehicule-photo-fallback[_ngcontent-%COMP%] {\n    width: 5.75rem;\n    height: 3.75rem;\n    border-radius: 0.75rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background:\n      linear-gradient(\n        135deg,\n        #5f6bff 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  .app-dark[_nghost-%COMP%]   .vehicule-photo-lg[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vehicule-photo-lg[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .vehicules-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .vehicules-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-vehicule-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-vehicule-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-avatar-img[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .vehicules-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .vehicules-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-vehicule-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-vehicule-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-liste2.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeListe2, [{
    type: Component,
    args: [{ selector: "app-vehicule-liste2", standalone: true, imports: [
      CommonModule,
      RouterModule,
      PhoneFormatPipe,
      FormsModule,
      ButtonModule,
      IconFieldModule,
      InputIconModule,
      InputTextModule,
      MenuModule,
      RippleModule,
      SelectModule,
      StyleClassModule,
      TagModule,
      ToastModule,
      TooltipModule
    ], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<!-- ===== VUE MOBILE (\u2264768px) \u2014 m\xEAme pattern que utilisateurs-liste ===== -->\r
<div class="vehicules-mobile-app">\r
\r
  <header class="mobile-header">\r
    <button\r
      pButton pRipple\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text mobile-back"\r
      aria-label="Retour"\r
      (click)="goBack()"\r
    ></button>\r
    <div class="mobile-title-wrap">\r
      <h1 class="mobile-title">V\xE9hicules</h1>\r
      <p class="mobile-subtitle">{{ total() }} v\xE9hicule{{ total() > 1 ? 's' : '' }}</p>\r
    </div>\r
    <p-menu #filterMenu [model]="mobileFilterMenuItems" [popup]="true" appendTo="body" styleClass="mobile-filter-menu" />\r
    <button\r
      pButton pRipple\r
      icon="pi pi-filter"\r
      class="p-button-rounded p-button-text mobile-add"\r
      aria-label="Filtrer"\r
      (click)="filterMenu.toggle($event)"\r
    ></button>\r
  </header>\r
\r
  <div class="mobile-scroll">\r
\r
    <section class="mobile-search">\r
      <p-iconfield iconPosition="left">\r
        <p-inputicon class="pi pi-search" />\r
        <input\r
          pInputText\r
          type="text"\r
          [ngModel]="searchQuery()"\r
          (ngModelChange)="searchQuery.set($event)"\r
          placeholder="Nom, immatriculation\u2026"\r
          class="w-full"\r
        />\r
      </p-iconfield>\r
    </section>\r
\r
    @if (!loading && filteredOrders().length) {\r
      <section class="mobile-list">\r
        @for (v of filteredOrders(); track v.id) {\r
          <article class="mobile-vehicule-card" (click)="goEdit(v)">\r
\r
            <!-- Avatar : photo si disponible, sinon initiales -->
            @if (v.photo_url) {
              <img
                class="mobile-card-avatar-img"
                [src]="v.photo_url"
                [alt]="v.nom_vehicule"
                (error)="onImageError(v)"
              />
            } @else {
              <div class="mobile-card-avatar" aria-hidden="true">
                {{ getInitials(v.nom_vehicule) }}
              </div>\r
            }\r
\r
            <div class="mobile-card-body">\r
              <div class="mobile-card-name">{{ v.nom_vehicule }}</div>\r
              <div class="mobile-card-meta">{{ v.immatriculation }} \xB7 {{ getTypeLabel(v) }}</div>\r
              <div class="mobile-card-footer">\r
                <p-tag\r
                  [value]="v.is_active ? 'Actif' : 'Inactif'"\r
                  [severity]="v.is_active ? 'success' : 'danger'"\r
                  styleClass="mobile-status-tag"\r
                />\r
                <div class="mobile-card-actions">\r
                  <button\r
                    pButton pRipple\r
                    icon="pi pi-pencil"\r
                    class="p-button-rounded p-button-text p-button-sm"\r
                    pTooltip="Modifier"\r
                    tooltipPosition="top"\r
                    (click)="goEdit(v); $event.stopPropagation()"\r
                  ></button>\r
                </div>\r
              </div>\r
            </div>\r
\r
          </article>\r
        }\r
      </section>\r
    }\r
\r
    @if (loading) {\r
      <div class="mobile-state">Chargement\u2026</div>\r
    }\r
\r
    @if (!loading && filteredOrders().length === 0) {\r
      <div class="mobile-state">Aucun v\xE9hicule trouv\xE9.</div>\r
    }\r
\r
  </div>\r
\r
  <button\r
    type="button"\r
    class="mobile-fab"\r
    aria-label="Nouveau v\xE9hicule"\r
    (click)="goNew()"\r
  >\r
    <i class="pi pi-plus"></i>\r
  </button>\r
</div>\r
\r
<!-- ===== VUE DESKTOP (>768px) \u2014 inchang\xE9e ===== -->\r
<div class="vehicules-desktop bg-surface-0 dark:bg-surface-900 p-12 md:p-20">\r
    <div class="flex flex-col lg:flex-row md:justify-between items-start lg:items-end gap-4 mb-8">\r
        <div class="flex flex-col gap-2 flex-1">\r
            <h1 class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">Vehicules</h1>\r
            <p class="text-surface-500 dark:text-surface-400 text-xl leading-tight">Total = {{ total() }}</p>\r
        </div>\r
\r
        <div class="flex flex-col md:flex-row items-start md:items-end gap-4">\r
            <div class="w-full md:w-54">\r
                <p-iconfield iconPosition="left">\r
                    <p-inputicon class="pi pi-search text-surface-400"></p-inputicon>\r
                    <input\r
                        pInputText\r
                        [ngModel]="searchQuery()"\r
                        (ngModelChange)="searchQuery.set($event)"\r
                        placeholder="Search"\r
                        class="w-full px-3 py-2 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600 rounded-md text-surface-900 dark:text-surface-0"\r
                    />\r
                </p-iconfield>\r
            </div>\r
\r
            <div class="w-full md:w-auto">\r
                <p-select\r
                    [ngModel]="selectedFilter()"\r
                    (ngModelChange)="setSelectedFilter($event)"\r
                    [options]="filterOptions"\r
                    optionLabel="label"\r
                    optionValue="value"\r
                    placeholder="Filter"\r
                    styleClass="w-full md:w-40 bg-surface-0 dark:bg-surface-900 border border-surface-300 dark:border-surface-600"\r
                    [appendTo]="'body'"\r
                >\r
                    <ng-template pTemplate="dropdownicon">\r
                        <i class="pi pi-chevron-down text-surface-400"></i>\r
                    </ng-template>\r
                </p-select>\r
            </div>\r
\r
            <div class="w-full md:w-auto">\r
                <button\r
                    pButton\r
                    type="button"\r
                    icon="pi pi-plus"\r
                    label="Nouveau vehicule"\r
                    class="w-full md:w-auto"\r
                    (click)="goNew()"\r
                ></button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <div class="flex flex-col gap-6">\r
        @for (v of filteredOrders(); track v.id; let index = $index) {\r
            <div class="bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden transition-all duration-300">\r
                <div\r
                    class="p-6 flex flex-col lg:flex-row justify-start lg:items-center gap-6 cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors"\r
                    pStyleClass=".order-content-{{ v.id }}"\r
                    enterFromClass="hidden"\r
                    enterActiveClass="animate-slidedown"\r
                    leaveToClass="hidden"\r
                    leaveActiveClass="animate-slideup"\r
                    (click)="toggleChevron(v.id)"
                >
                    <div class="flex items-center gap-4 flex-1 min-w-0 vehicule-primary-col">
                        <div class="vehicule-photo-col">
                          @if (v.photo_url) {
                            <img
                              class="vehicule-photo-lg"
                              [src]="v.photo_url"
                              [alt]="v.nom_vehicule"
                              (error)="onImageError(v)"
                            />
                          } @else {
                            <span
                              class="vehicule-photo-fallback"
                            >
                              {{ getInitials(v.nom_vehicule) }}
                            </span>
                          }
                        </div>
                        <div class="flex flex-col gap-2 min-w-0">
                            <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ v.nom_vehicule }}</div>
                            <div class="text-surface-500 dark:text-surface-400 text-base leading-tight">{{ v.immatriculation }}</div>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-1 vehicule-meta-col">
                        <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                            <div class="px-2 py-1 bg-surface-100 dark:bg-surface-800 rounded-md">\r
                                <span class="text-surface-600 dark:text-surface-300 text-sm font-bold">{{ getTypeLabel(v) }}</span>\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex flex-col items-start sm:items-center flex-1 min-w-0">\r
                            <div\r
                                [ngClass]="{\r
                                    'px-2 py-1 rounded-md flex items-center gap-1': true,\r
                                    'bg-surface-100 dark:bg-surface-800': getStatusColor(v) === 'surface',\r
                                    'bg-orange-100 dark:bg-orange-900': getStatusColor(v) === 'orange',\r
                                    'bg-green-100 dark:bg-green-900': getStatusColor(v) === 'green'\r
                                }"\r
                            >\r
                                <i\r
                                    [class]="\r
                                        'text-xs pi ' +\r
                                        getStatusIcon(v) +\r
                                        ' ' +\r
                                        (getStatusColor(v) === 'surface'\r
                                            ? 'text-surface-600 dark:text-surface-300'\r
                                            : getStatusColor(v) === 'orange'\r
                                              ? 'text-orange-700 dark:text-orange-300'\r
                                              : 'text-green-700 dark:text-green-300')\r
                                    "\r
                                ></i>\r
                                <span\r
                                    [ngClass]="{\r
                                        'text-sm font-bold': true,\r
                                        'text-surface-600 dark:text-surface-300': getStatusColor(v) === 'surface',\r
                                        'text-orange-700 dark:text-orange-300': getStatusColor(v) === 'orange',\r
                                        'text-green-700 dark:text-green-300': getStatusColor(v) === 'green'\r
                                    }"\r
                                    >{{ getStatusLabel(v) }}</span\r
                                >\r
                            </div>\r
                        </div>\r
\r
                        <div class="flex flex-col items-start sm:items-center flex-1">\r
                            <span class="text-surface-700 dark:text-surface-300 text-base font-semibold leading-tight">{{ v.capacite_packs }}</span>\r
                        </div>\r
\r
                        <div class="flex items-center justify-center gap-1 flex-1">\r
                            <button\r
                                pButton\r
                                severity="secondary"\r
                                [text]="true"\r
                                [rounded]="true"\r
                                class="w-10 h-10"\r
                                pTooltip="Modifier"\r
                                tooltipPosition="top"\r
                                (click)="goEdit(v); $event.stopPropagation()"\r
                            >\r
                                <i class="pi pi-pencil" pButtonIcon></i>\r
                            </button>\r
                            <button\r
                                pButton\r
                                severity="secondary"\r
                                [text]="true"\r
                                [rounded]="true"\r
                                class="w-10 h-10"\r
                                pStyleClass=".order-content-{{ v.id }}"\r
                                enterFromClass="hidden"\r
                                enterActiveClass="animate-slidedown"\r
                                leaveToClass="hidden"\r
                                leaveActiveClass="animate-slideup"\r
                                (click)="toggleChevron(v.id); $event.stopPropagation()"\r
                            >\r
                                <i [class]="'pi pi-chevron-down chevron-icon-' + v.id + ' transition-transform duration-300'" pButtonIcon></i>\r
                            </button>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <div [class]="'order-content-' + v.id + ' hidden overflow-hidden'">\r
                    <div class="flex flex-col gap-6 p-6 border-t border-surface-200 dark:border-surface-700">\r
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
                            <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                                <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                    <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Propri\xE9taire</h3>\r
                                </div>\r
                                <div class="p-6 flex flex-col gap-5">\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Nom</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getProprietaireNom(v) }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Phone</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ v.proprietaire?.phone | phoneFormat }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Ville</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ v.proprietaire?.ville || '\u2014' }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Date de cr\xE9ation</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatDate(v.created_at) }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
\r
                            <div class="border border-surface-200 dark:border-surface-700 rounded-lg overflow-hidden">\r
                                <div class="p-4 bg-surface-50 dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700">\r
                                    <h3 class="text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Livreur principal</h3>\r
                                </div>\r
                                <div class="p-6 flex flex-col gap-5">\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Nom</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getLivreurNom(v) }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Phone</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ getLivreur(v)?.phone | phoneFormat }}</span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Statut</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">\r
                                            @if (getLivreur(v)) {\r
                                                {{ getLivreur(v)!.is_active ? 'Actif' : 'Inactif' }}\r
                                            } @else {\r
                                                \u2014\r
                                            }\r
                                        </span>\r
                                    </div>\r
                                    <div class="flex gap-2">\r
                                        <span class="w-40 text-surface-700 dark:text-surface-300 text-base leading-tight">Date de cr\xE9ation</span>\r
                                        <span class="flex-1 text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ formatDate(v.created_at) }}</span>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        }\r
\r
        @if (filteredOrders().length === 0) {\r
            <div class="text-center py-12">\r
                <div class="text-surface-500 dark:text-surface-400 text-lg mb-2">Aucun v\xE9hicule trouv\xE9</div>\r
                <div class="text-surface-400 dark:text-surface-500 text-base">Essayez de modifier vos crit\xE8res de recherche</div>\r
            </div>\r
        }\r
    </div>\r
</div>\r
`, styles: ["/* src/app/pages/vehicules/vehicules/vehicule-liste2/vehicule-liste2.scss */\n:host {\n  display: block;\n}\n.vehicules-mobile-app {\n  display: none;\n}\n@media screen and (min-width: 769px) {\n  .vehicule-primary-col {\n    flex: 1.35;\n  }\n  .vehicule-meta-col {\n    flex: 1;\n  }\n  .vehicule-photo-col {\n    width: 5.75rem;\n    min-width: 5.75rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vehicule-photo-lg {\n    width: 5.75rem;\n    height: 3.75rem;\n    border-radius: 0.75rem;\n    object-fit: cover;\n    background: var(--p-surface-100);\n    border: 1px solid var(--p-surface-200);\n    padding: 0.125rem;\n    display: block;\n  }\n  .vehicule-photo-fallback {\n    width: 5.75rem;\n    height: 3.75rem;\n    border-radius: 0.75rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background:\n      linear-gradient(\n        135deg,\n        #5f6bff 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  :host-context(.app-dark) .vehicule-photo-lg {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n  }\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .vehicules-desktop {\n    display: none;\n  }\n  .vehicules-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-vehicule-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-vehicule-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-avatar-img {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .vehicules-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-vehicule-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=vehicule-liste2.css.map */\n"] }]
  }], () => [{ type: VehiculeService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeListe2, { className: "VehiculeListe2", filePath: "src/app/pages/vehicules/vehicules/vehicule-liste2/vehicule-liste2.ts", lineNumber: 52 });
})();

// src/app/pages/vehicules/vehicules.routes.ts
var vehicules_routes_default = [
  // Véhicules
  { path: "", component: VehiculeListe, data: { breadcrumb: "vehicules" } },
  { path: "nouveau", component: VehiculeForm, data: { breadcrumb: "nouveau" } },
  { path: ":id/edit", component: VehiculeEdit, data: { breadcrumb: "edit" } },
  { path: "vehicules-liste2", component: VehiculeListe2, data: { breadcrumb: "vehicules-liste2" } },
  // Propriétaires
  { path: "proprietaires", component: ProprietaireListe, data: { breadcrumb: "proprietaires" } },
  { path: "proprietaires/nouveau", component: ProprietaireForm, data: { breadcrumb: "nouveau" } },
  { path: "proprietaires/:id/edit", component: ProprietaireEdit, data: { breadcrumb: "edit" } },
  // Livreurs
  { path: "livreurs", component: LivreurListe, data: { breadcrumb: "livreurs" } },
  { path: "livreurs/nouveau", component: LivreurForm, data: { breadcrumb: "nouveau" } },
  { path: "livreurs/:id/edit", component: LivreurEdit, data: { breadcrumb: "edit" } },
  { path: "**", redirectTo: "/notfound" }
];
export {
  vehicules_routes_default as default
};
//# sourceMappingURL=chunk-JRDQZV4W.js.map
