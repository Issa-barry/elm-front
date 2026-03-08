import {
  InputGroupModule
} from "./chunk-7BPZCMAL.js";
import {
  PrestataireService
} from "./chunk-VNHA2S3C.js";
import {
  FileUploadModule
} from "./chunk-WZQ2GLT2.js";
import "./chunk-5FPSLLEE.js";
import {
  TextareaModule
} from "./chunk-VPMPKPO3.js";
import {
  isValidPhoneNumber,
  parsePhoneNumberWithError
} from "./chunk-4YOSONNR.js";
import {
  COUNTRIES
} from "./chunk-O2HUXTPT.js";
import "./chunk-GRN6PHIQ.js";
import {
  Menu,
  MenuModule
} from "./chunk-YK5I6R27.js";
import {
  PhoneFormatPipe
} from "./chunk-JL62XEMH.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-B42BTUD5.js";
import "./chunk-Y2EGS7AG.js";
import {
  authorizationGuard
} from "./chunk-ZFQCIBR5.js";
import "./chunk-WEV7CZZY.js";
import {
  Toast,
  ToastModule
} from "./chunk-SXI4YLKA.js";
import "./chunk-2W47BJ2H.js";
import {
  AuthService
} from "./chunk-FWYLTE3T.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import {
  UsineContextService
} from "./chunk-GEBWCDCC.js";
import "./chunk-CSVYKJ4F.js";
import {
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-NJSYAAHU.js";
import "./chunk-XQFWCWDH.js";
import "./chunk-EXEPX633.js";
import "./chunk-3FL5D7QG.js";
import "./chunk-FQFMKS2Q.js";
import "./chunk-XNYJW7BL.js";
import "./chunk-L3HXWUUO.js";
import {
  Tag,
  TagModule
} from "./chunk-CAVP5JWM.js";
import "./chunk-LFMBOSV6.js";
import "./chunk-WBWDQQZU.js";
import "./chunk-F3L5EVFN.js";
import "./chunk-6MLBYEBX.js";
import "./chunk-IQKSNOBA.js";
import "./chunk-YPIU6GBB.js";
import "./chunk-V5XSXX3V.js";
import "./chunk-4NB56M3I.js";
import "./chunk-NGYBJXCA.js";
import {
  Select,
  SelectModule
} from "./chunk-7FPBHFED.js";
import "./chunk-WZGVHVRY.js";
import "./chunk-YZHJ5FSA.js";
import "./chunk-5OSG7M3V.js";
import {
  IconField,
  InputIcon
} from "./chunk-YHSSX73X.js";
import {
  InputText,
  InputTextModule
} from "./chunk-52XP6VLB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  PatternValidator
} from "./chunk-ZPTU3HTV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-CZVP2Z6G.js";
import "./chunk-6FDWWH3U.js";
import "./chunk-3MAO4O33.js";
import "./chunk-U7PUKEXO.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-5YV6R2XG.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import {
  Ripple,
  RippleModule
} from "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-6E6G4HCZ.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
} from "./chunk-DSAAE4AM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/pages/contacts/prestataires/prestataires-liste/prestataires-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["nom_complet", "email", "phone", "reference", "pays", "ville", "specialite", "type", "type_label"];
var _c2 = () => ({ "min-width": "150px" });
function PrestatairesListe_section_18_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 26);
    \u0275\u0275listener("click", function PrestatairesListe_section_18_article_1_Template_article_click_0_listener($event) {
      const prestataire_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, prestataire_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 30);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "phoneFormat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 31);
    \u0275\u0275element(10, "p-tag", 32);
    \u0275\u0275elementStart(11, "div", 33)(12, "button", 34);
    \u0275\u0275listener("click", function PrestatairesListe_section_18_article_1_Template_button_click_12_listener($event) {
      const prestataire_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, prestataire_r4.id));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const prestataire_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(prestataire_r4.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r4.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r4.email || \u0275\u0275pipeBind2(8, 7, prestataire_r4.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", prestataire_r4.is_active ? "Actif" : "Inactif")("severity", prestataire_r4.is_active ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
  }
}
function PrestatairesListe_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24);
    \u0275\u0275template(1, PrestatairesListe_section_18_article_1_Template, 13, 10, "article", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.mobileVisiblePrestataires)("ngForTrackBy", ctx_r4.trackByPrestataireId);
  }
}
function PrestatairesListe_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesListe_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Aucun prestataire.");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesListe_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PrestatairesListe_ng_template_19_div_0_Template, 2, 0, "div", 35)(1, PrestatairesListe_ng_template_19_div_1_Template, 2, 0, "div", 35);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && !ctx_r4.mobileFilteredPrestataires.length);
  }
}
function PrestatairesListe_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "button", 38);
    \u0275\u0275listener("click", function PrestatairesListe_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function PrestatairesListe_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function PrestatairesListe_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementEnd();
  }
}
function PrestatairesListe_ng_template_26_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PrestatairesListe_ng_template_26_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function PrestatairesListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "p-icon-field", 42);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("input", function PrestatairesListe_ng_template_26_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      const dt_r9 = \u0275\u0275reference(25);
      return \u0275\u0275resetView(ctx_r4.onGlobalFilter(dt_r9, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44)(5, "p-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function PrestatairesListe_ng_template_26_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.selectedStatus, $event) || (ctx_r4.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PrestatairesListe_ng_template_26_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.filterByStatus());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PrestatairesListe_ng_template_26_button_6_Template, 1, 0, "button", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c2));
    \u0275\u0275property("options", ctx_r4.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.selectedStatus);
    \u0275\u0275property("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canCreate);
  }
}
function PrestatairesListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 48)(2, "span", 49);
    \u0275\u0275text(3, " Nom complet ");
    \u0275\u0275element(4, "p-sortIcon", 50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 51)(6, "span", 49);
    \u0275\u0275text(7, " T\xE9l\xE9phone ");
    \u0275\u0275element(8, "p-sortIcon", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 53)(10, "span", 49);
    \u0275\u0275text(11, " Type ");
    \u0275\u0275element(12, "p-sortIcon", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 55)(14, "span", 49);
    \u0275\u0275text(15, " Adresse ");
    \u0275\u0275element(16, "p-sortIcon", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 57)(18, "span", 49);
    \u0275\u0275text(19, " Statut ");
    \u0275\u0275element(20, "p-sortIcon", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 59);
    \u0275\u0275text(22, " Actions ");
    \u0275\u0275elementEnd()();
  }
}
function PrestatairesListe_ng_template_30_p_tag_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 74);
  }
  if (rf & 2) {
    const prestataire_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("value", prestataire_r12.type_label)("severity", ctx_r4.getTypeSeverity(prestataire_r12.type));
  }
}
function PrestatairesListe_ng_template_30_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesListe_ng_template_30_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function PrestatairesListe_ng_template_30_button_31_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const prestataire_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleStatus($event, prestataire_r12.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prestataire_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("p-button-success", prestataire_r12.is_active)("p-button-danger", !prestataire_r12.is_active);
    \u0275\u0275property("icon", prestataire_r12.is_active ? "pi pi-lock-open" : "pi pi-lock")("pTooltip", prestataire_r12.is_active ? "D\xE9sactiver" : "Activer");
  }
}
function PrestatairesListe_ng_template_30_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function PrestatairesListe_ng_template_30_button_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prestataire_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deletePrestataire($event, prestataire_r12.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", "Supprimer");
  }
}
function PrestatairesListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 60)(1, "td")(2, "div", 49)(3, "div", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 64)(12, "span", 65);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, PrestatairesListe_ng_template_30_p_tag_16_Template, 1, 2, "p-tag", 66)(17, PrestatairesListe_ng_template_30_span_17_Template, 2, 0, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "div", 49);
    \u0275\u0275element(20, "span");
    \u0275\u0275elementStart(21, "div")(22, "div", 68);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 69);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275element(27, "p-tag", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "div", 71)(30, "button", 34);
    \u0275\u0275listener("click", function PrestatairesListe_ng_template_30_Template_button_click_30_listener($event) {
      const prestataire_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, prestataire_r12.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, PrestatairesListe_ng_template_30_button_31_Template, 1, 6, "button", 72)(32, PrestatairesListe_ng_template_30_button_32_Template, 1, 1, "button", 73);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prestataire_r12 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("pSelectableRow", prestataire_r12);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(prestataire_r12.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r12.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r12.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, prestataire_r12.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", prestataire_r12.type_label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !prestataire_r12.type_label);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("fi fi-", prestataire_r12.code_pays == null ? null : prestataire_r12.code_pays.toLowerCase(), " text-xl"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r12.ville);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r12.quartier);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", prestataire_r12.is_active ? "Actif" : "Inactif")("severity", prestataire_r12.is_active ? "success" : "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canDelete);
  }
}
function PrestatairesListe_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 78)(2, "div", 79);
    \u0275\u0275element(3, "i", 80);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun prestataire trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
var PrestatairesListe = class _PrestatairesListe {
  prestataireService;
  router;
  messageService;
  confirmationService;
  authService;
  usineContext;
  document;
  prestataires = [];
  selectedPrestataire = null;
  loading = false;
  selectedStatus = null;
  mobileSearchTerm = "";
  mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;
  mobileBreakpoint = 768;
  mobilePwaClass = "prestataires-mobile-pwa";
  readyForUsineReload = false;
  statusOptions = [
    { label: "Actif", value: true },
    { label: "Inactif", value: false }
  ];
  mobileStatusMenuItems = [
    { label: "Tous les statuts", command: () => this.applyMobileStatusFilter(null) },
    { label: "Actif", command: () => this.applyMobileStatusFilter(true) },
    { label: "Inactif", command: () => this.applyMobileStatusFilter(false) }
  ];
  get canCreate() {
    return this.authService.hasPermission("prestataires.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("prestataires.update");
  }
  get canDelete() {
    return this.authService.hasPermission("prestataires.delete");
  }
  constructor(prestataireService, router, messageService, confirmationService, authService, usineContext, document) {
    this.prestataireService = prestataireService;
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.usineContext = usineContext;
    this.document = document;
    effect(() => {
      this.usineContext.currentUsineId();
      if (!this.readyForUsineReload)
        return;
      this.loadPrestataires();
    });
  }
  ngOnInit() {
    this.readyForUsineReload = true;
    this.loadPrestataires();
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
  onMobileSearchChange() {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  get mobileFilteredPrestataires() {
    const term = this.mobileSearchTerm.trim().toLowerCase();
    if (!term)
      return this.prestataires;
    return this.prestataires.filter((p) => p.nom_complet && p.nom_complet.toLowerCase().includes(term) || p.email && p.email.toLowerCase().includes(term) || p.phone && p.phone.replace(/\s/g, "").includes(term) || p.reference && p.reference.toLowerCase().includes(term) || p.type_label && p.type_label.toLowerCase().includes(term));
  }
  get mobileVisiblePrestataires() {
    return this.mobileFilteredPrestataires.slice(0, this.mobileVisibleCount);
  }
  get canLoadMoreMobile() {
    return this.mobileVisibleCount < this.mobileFilteredPrestataires.length;
  }
  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }
  trackByPrestataireId(_index, p) {
    return p.id;
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
  /**
   * Charger la liste des prestataires
   */
  loadPrestataires() {
    this.loading = true;
    const filters = this.selectedStatus !== null ? { is_active: this.selectedStatus } : void 0;
    this.prestataireService.getPrestataires(filters).subscribe({
      next: (response) => {
        if (response.success) {
          this.prestataires = Array.isArray(response.data) ? response.data : response.data.data;
          this.mobileVisibleCount = this.mobilePageSize;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des prestataires:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les prestataires"
        });
        this.loading = false;
      }
    });
  }
  /**
   * Recherche globale dans le tableau
   */
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  /**
   * Filtrer par statut
   */
  filterByStatus() {
    this.loadPrestataires();
  }
  applyMobileStatusFilter(status) {
    this.selectedStatus = status;
    this.loadPrestataires();
  }
  /**
   * Naviguer vers la création d'un prestataire
   */
  navigateToCreate() {
    this.router.navigate(["contacts/prestataires/new"]);
  }
  /**
   * Sélection d'une ligne - navigation vers l'édition
   */
  onRowSelect(event) {
    this.router.navigate(["contacts/prestataires/edit", event.data.id]);
  }
  /**
   * Voir les détails d'un prestataire
   */
  goToEdit(event, prestataireId) {
    event.stopPropagation();
    this.router.navigate(["contacts/prestataires/edit/", prestataireId]);
  }
  /**
   * Basculer le statut actif/inactif
   */
  toggleStatus(event, prestataireId) {
    event.stopPropagation();
    const prestataire = this.prestataires.find((p) => p.id === prestataireId);
    const action = prestataire?.is_active ? "d\xE9sactiver" : "activer";
    this.confirmationService.confirm({
      message: `Voulez-vous vraiment ${action} ce prestataire ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Oui",
      rejectLabel: "Non",
      accept: () => {
        this.prestataireService.togglePrestataireStatus(prestataireId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: "success",
                summary: "Succ\xE8s",
                detail: response.message
              });
              this.loadPrestataires();
            }
          },
          error: (error) => {
            console.error("Erreur:", error);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: "Impossible de changer le statut du prestataire"
            });
          }
        });
      }
    });
  }
  /**
   * Supprimer un prestataire
   */
  deletePrestataire(event, prestataireId) {
    event.stopPropagation();
    this.confirmationService.confirm({
      message: "\xCAtes-vous s\xFBr de vouloir supprimer ce prestataire ? Cette action est irr\xE9versible.",
      header: "Confirmation de suppression",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Oui, supprimer",
      rejectLabel: "Annuler",
      acceptButtonStyleClass: "p-button-danger",
      accept: () => {
        this.prestataireService.deletePrestataire(prestataireId).subscribe({
          next: (response) => {
            if (response.success) {
              this.messageService.add({
                severity: "success",
                summary: "Succ\xE8s",
                detail: "Prestataire supprim\xE9 avec succ\xE8s"
              });
              this.loadPrestataires();
            }
          },
          error: (error) => {
            console.error("Erreur:", error);
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: this.getApiErrorDetail(error, "Impossible de supprimer le prestataire")
            });
          }
        });
      }
    });
  }
  /**
   * Obtenir les initiales du nom complet
   */
  getInitials(nomComplet) {
    if (!nomComplet)
      return "??";
    const parts = nomComplet.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return nomComplet.substring(0, 2).toUpperCase();
  }
  /**
   * Formater le numéro de téléphone
   */
  formatPhone(phone) {
    if (!phone)
      return "-";
    const cleanPhone = phone.replace(/^\+\d{1,3}/, "").trim();
    return cleanPhone.replace(/(\d{2})(?=\d)/g, "$1 ");
  }
  /**
   * Obtenir la couleur du tag selon le type
   */
  getTypeSeverity(type) {
    const severities = {
      "machiniste": "info",
      "mecanicien": "warn",
      "consultant": "success",
      "fournisseur": "danger"
    };
    return type ? severities[type] : "secondary";
  }
  getApiErrorDetail(error, fallback) {
    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join("; ");
    }
    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }
    return fallback;
  }
  extractApiMessage(error) {
    const message = error?.error?.message;
    if (typeof message !== "string") {
      return null;
    }
    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 ? trimmedMessage : null;
  }
  extractValidationMessages(error) {
    const validationErrors = error?.error?.errors;
    if (!validationErrors || typeof validationErrors !== "object") {
      return [];
    }
    return Object.values(validationErrors).flatMap((value) => Array.isArray(value) ? value : [value]).map((message) => String(message).trim()).filter((message) => message.length > 0);
  }
  static \u0275fac = function PrestatairesListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestatairesListe)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestatairesListe, selectors: [["app-prestataires-liste"]], hostBindings: function PrestatairesListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function PrestatairesListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 34, vars: 20, consts: [["statusMenu", ""], ["mobileListState", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "prestataires-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, email, t\xE9l\xE9phone...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["class", "mobile-load-more", 4, "ngIf"], ["type", "button", "class", "mobile-fab", "aria-label", "Nouveau prestataire", 3, "click", 4, "ngIf"], [1, "card", "prestataires-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} entr\xE9es", "selectionMode", "single", "styleClass", "cursor-pointer", 3, "selectionChange", "onRowSelect", "value", "paginator", "rows", "showCurrentPageReport", "loading", "rowsPerPageOptions", "globalFilterFields", "selection", "rowHover"], [1, "mobile-list"], ["class", "mobile-user-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-user-card", 3, "click"], ["aria-hidden", "true", 1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag app-table-status", 3, "value", "severity"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "pTooltip", "disabled"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], [1, "mobile-load-more"], ["pButton", "", "label", "Charger plus", "icon", "pi pi-angle-down", 1, "mobile-load-more-btn", 3, "click"], ["type", "button", "aria-label", "Nouveau prestataire", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-user-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un prestataire...", 1, "w-full", 3, "input"], [1, "flex", "gap-2", "w-full", "sm:w-auto", "flex-order-0", "sm:flex-order-1"], ["placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["pButton", "", "outlined", "", "class", "flex-shrink-0", "icon", "pi pi-user-plus", "label", "Nouveau", 3, "click", 4, "ngIf"], ["pButton", "", "outlined", "", "icon", "pi pi-user-plus", "label", "Nouveau", 1, "flex-shrink-0", 3, "click"], ["pSortableColumn", "nom_complet", 1, "white-space-nowrap", 2, "width", "25%"], [1, "flex", "items-center", "gap-2"], ["field", "nom_complet"], ["pSortableColumn", "phone", 1, "white-space-nowrap", 2, "width", "15%"], ["field", "phone"], ["pSortableColumn", "type", 1, "white-space-nowrap", 2, "width", "12%"], ["field", "type"], ["pSortableColumn", "pays", 1, "white-space-nowrap", 2, "width", "18%"], ["field", "pays"], ["pSortableColumn", "is_active", 1, "white-space-nowrap", 2, "width", "10%"], ["field", "is_active"], [1, "white-space-nowrap", 2, "width", "10%"], [3, "pSelectableRow"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "bg-primary-100", "text-primary-700", "font-semibold"], [1, "font-semibold"], [1, "text-sm", "text-surface-500", "mt-1"], [1, "flex", "items-center", "gap-1"], [1, "text-surface-700"], [3, "value", "severity", 4, "ngIf"], ["class", "text-surface-400", 4, "ngIf"], [1, "font-medium"], [1, "text-sm", "text-surface-500"], ["styleClass", "app-table-status", 3, "value", "severity"], [1, "flex", "gap-2"], ["pButton", "", "pRipple", "", "class", "p-button-rounded p-button-text p-button-sm", "tooltipPosition", "top", 3, "icon", "p-button-success", "p-button-danger", "pTooltip", "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "class", "p-button-rounded p-button-text p-button-danger p-button-sm", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngIf"], [3, "value", "severity"], [1, "text-surface-400"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "icon", "pTooltip"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-danger", "p-button-sm", 3, "click", "pTooltip"], ["colspan", "6", 1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-users", "text-4xl"]], template: function PrestatairesListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "div", 7)(3, "header", 8)(4, "button", 9);
      \u0275\u0275listener("click", function PrestatairesListe_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 10)(6, "h1", 11);
      \u0275\u0275text(7, "Prestataires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 12);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "p-menu", 13, 0);
      \u0275\u0275elementStart(12, "button", 14);
      \u0275\u0275listener("click", function PrestatairesListe_Template_button_click_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statusMenu_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(statusMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 15)(14, "section", 16)(15, "p-icon-field");
      \u0275\u0275element(16, "p-inputicon", 17);
      \u0275\u0275elementStart(17, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesListe_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PrestatairesListe_Template_input_ngModelChange_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, PrestatairesListe_section_18_Template, 2, 2, "section", 19)(19, PrestatairesListe_ng_template_19_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(21, PrestatairesListe_div_21_Template, 2, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, PrestatairesListe_button_22_Template, 2, 0, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 22)(24, "p-table", 23, 2);
      \u0275\u0275twoWayListener("selectionChange", function PrestatairesListe_Template_p_table_selectionChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedPrestataire, $event) || (ctx.selectedPrestataire = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onRowSelect", function PrestatairesListe_Template_p_table_onRowSelect_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRowSelect($event));
      });
      \u0275\u0275template(26, PrestatairesListe_ng_template_26_Template, 7, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, PrestatairesListe_ng_template_28_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(30, PrestatairesListe_ng_template_30_Template, 33, 21, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(32, PrestatairesListe_ng_template_32_Template, 6, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r15 = \u0275\u0275reference(20);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.mobileFilteredPrestataires.length, " prestataire", ctx.mobileFilteredPrestataires.length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileStatusMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisiblePrestataires.length)("ngIfElse", mobileListState_r15);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.canLoadMoreMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.prestataires)("paginator", true)("rows", 10)("showCurrentPageReport", true)("loading", ctx.loading)("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c0))("globalFilterFields", \u0275\u0275pureFunction0(19, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedPrestataire);
      \u0275\u0275property("rowHover", true);
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
    SelectableRow,
    SortIcon,
    InputTextModule,
    InputText,
    ButtonModule,
    ButtonDirective,
    RippleModule,
    Ripple,
    IconField,
    InputIcon,
    TagModule,
    Tag,
    TooltipModule,
    Tooltip,
    SelectModule,
    Select,
    ConfirmDialogModule,
    ConfirmDialog,
    MenuModule,
    Menu,
    ToastModule,
    Toast,
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.prestataires-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .prestataires-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .prestataires-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .prestataires-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .prestataires-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-user-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=prestataires-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestatairesListe, [{
    type: Component,
    args: [{ selector: "app-prestataires-liste", standalone: true, providers: [MessageService, ConfirmationService], imports: [
      CommonModule,
      FormsModule,
      TableModule,
      InputTextModule,
      ButtonModule,
      RippleModule,
      IconField,
      InputIcon,
      TagModule,
      TooltipModule,
      SelectModule,
      ConfirmDialogModule,
      MenuModule,
      PhoneFormatPipe,
      ToastModule
    ], template: `<p-toast></p-toast>\r
<p-confirmDialog></p-confirmDialog>\r
\r
<!-- Mobile: app-like list (\xC3\u0192\xC2\xA2\xC3\xA2\xE2\u201A\xAC\xC2\xB0\xC3\u201A\xC2\xA4768px) -->\r
<div class="prestataires-mobile-app">\r
  <header class="mobile-header">\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-arrow-left"\r
      class="p-button-rounded p-button-text mobile-back"\r
      aria-label="Retour \xE0 l'accueil"\r
      (click)="goHome()"\r
    ></button>\r
    <div class="mobile-title-wrap">\r
      <h1 class="mobile-title">Prestataires</h1>\r
      <p class="mobile-subtitle">{{ mobileFilteredPrestataires.length }} prestataire{{ mobileFilteredPrestataires.length !== 1 ? 's' : '' }}</p>\r
    </div>\r
    <p-menu\r
      #statusMenu\r
      [model]="mobileStatusMenuItems"\r
      [popup]="true"\r
      appendTo="body"\r
      styleClass="mobile-status-menu"\r
    />\r
    <button\r
      pButton\r
      pRipple\r
      icon="pi pi-filter"\r
      class="p-button-rounded p-button-text mobile-add"\r
      aria-label="Filtrer par statut"\r
      (click)="statusMenu.toggle($event)"\r
    ></button>\r
  </header>\r
\r
  <div class="mobile-scroll">\r
    <section class="mobile-search">\r
      <p-icon-field>\r
        <p-inputicon class="pi pi-search" />\r
        <input\r
          pInputText\r
          type="text"\r
          [(ngModel)]="mobileSearchTerm"\r
          (ngModelChange)="onMobileSearchChange()"\r
          placeholder="Nom, email, t\xE9l\xE9phone..."\r
          class="w-full"\r
        />\r
      </p-icon-field>\r
    </section>\r
\r
    <section class="mobile-list" *ngIf="!loading && mobileVisiblePrestataires.length; else mobileListState">\r
      <article\r
        class="mobile-user-card"\r
        *ngFor="let prestataire of mobileVisiblePrestataires; trackBy: trackByPrestataireId"\r
        (click)="goToEdit($event, prestataire.id)"\r
      >\r
        <div class="mobile-card-avatar" aria-hidden="true">\r
          {{ getInitials(prestataire.nom_complet) }}\r
        </div>\r
        <div class="mobile-card-body">\r
          <div class="mobile-card-name">{{ prestataire.nom_complet }}</div>\r
          <div class="mobile-card-meta">{{ prestataire.email || (prestataire.phone | phoneFormat:'INT') }}</div>\r
          <div class="mobile-card-footer">\r
            <p-tag
              [value]="prestataire.is_active ? 'Actif' : 'Inactif'"
              [severity]="prestataire.is_active ? 'success' : 'danger'"
              styleClass="mobile-status-tag app-table-status"
            />
            <div class="mobile-card-actions">\r
              <button\r
                pButton\r
                pRipple\r
                icon="pi pi-eye"\r
                class="p-button-rounded p-button-text p-button-sm"\r
                [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"\r
                tooltipPosition="top"\r
                (click)="goToEdit($event, prestataire.id)"\r
                [disabled]="!canUpdate"\r
              ></button>\r
            </div>\r
          </div>\r
        </div>\r
      </article>\r
    </section>\r
\r
    <ng-template #mobileListState>\r
      <div class="mobile-state" *ngIf="loading">Chargement...</div>\r
      <div class="mobile-state" *ngIf="!loading && !mobileFilteredPrestataires.length">Aucun prestataire.</div>\r
    </ng-template>\r
\r
    <div class="mobile-load-more" *ngIf="!loading && canLoadMoreMobile">\r
      <button pButton label="Charger plus" icon="pi pi-angle-down" class="mobile-load-more-btn" (click)="loadMoreMobile()"></button>\r
    </div>\r
  </div>\r
\r
  <button\r
    *ngIf="canCreate"\r
    type="button"\r
    class="mobile-fab"\r
    aria-label="Nouveau prestataire"\r
    (click)="navigateToCreate()"\r
  >\r
    <i class="pi pi-user-plus"></i>\r
  </button>\r
</div>\r
\r
<!-- Desktop: table -->\r
<div class="card prestataires-desktop">\r
  <p-table\r
    #dt\r
    [value]="prestataires"\r
    [paginator]="true"\r
    paginatorDropdownAppendTo="body"\r
    [rows]="10"\r
    [showCurrentPageReport]="true"\r
    [loading]="loading"\r
    responsiveLayout="scroll"\r
    currentPageReportTemplate="  {first} / {last} de {totalRecords} entr\xE9es"\r
    [rowsPerPageOptions]="[10, 25, 50]"\r
    [globalFilterFields]="['nom_complet', 'email', 'phone', 'reference', 'pays', 'ville', 'specialite', 'type', 'type_label']"\r
    selectionMode="single"\r
    [(selection)]="selectedPrestataire"\r
    (onRowSelect)="onRowSelect($event)"\r
    [rowHover]="true"\r
    styleClass="cursor-pointer"\r
  >\r
    <ng-template #caption>\r
      <div class="flex flex-wrap gap-2 items-center justify-between">\r
        <p-icon-field class="w-full sm:w-80 order-1 sm:order-0">\r
          <p-inputicon class="pi pi-search" />\r
          <input\r
            pInputText \r
            type="text"\r
            (input)="onGlobalFilter(dt, $event)"\r
            placeholder="Rechercher un prestataire..."\r
            class="w-full"\r
          />\r
        </p-icon-field>\r
\r
        <div class="flex gap-2 w-full sm:w-auto flex-order-0 sm:flex-order-1">\r
          <!-- Filtre par statut -->\r
          <p-select\r
            [options]="statusOptions"\r
            [(ngModel)]="selectedStatus"\r
            (onChange)="filterByStatus()"\r
            placeholder="Tous les statuts"\r
            [style]="{ 'min-width': '150px' }"\r
            [showClear]="true"\r
          ></p-select>\r
\r
          <!-- Bouton Nouveau -->\r
          <button\r
            *ngIf="canCreate"\r
            (click)="navigateToCreate()"\r
            pButton\r
            outlined\r
            class="flex-shrink-0"\r
            icon="pi pi-user-plus"\r
            label="Nouveau"\r
          ></button>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #header>\r
      <tr>\r
        <th pSortableColumn="nom_complet" class="white-space-nowrap" style="width:25%">\r
          <span class="flex items-center gap-2">\r
            Nom complet <p-sortIcon field="nom_complet"></p-sortIcon>\r
          </span>\r
        </th>\r
        \r
        <th pSortableColumn="phone" class="white-space-nowrap" style="width:15%">\r
          <span class="flex items-center gap-2">\r
            T\xE9l\xE9phone <p-sortIcon field="phone"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th pSortableColumn="type" class="white-space-nowrap" style="width:12%">\r
          <span class="flex items-center gap-2">\r
            Type <p-sortIcon field="type"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th pSortableColumn="pays" class="white-space-nowrap" style="width:18%">\r
          <span class="flex items-center gap-2">\r
            Adresse <p-sortIcon field="pays"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th pSortableColumn="is_active" class="white-space-nowrap" style="width:10%">\r
          <span class="flex items-center gap-2">\r
            Statut <p-sortIcon field="is_active"></p-sortIcon>\r
          </span>\r
        </th>\r
        <th class="white-space-nowrap" style="width:10%">\r
          Actions\r
        </th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #body let-prestataire>\r
      <tr [pSelectableRow]="prestataire">\r
        <td>\r
          <div class="flex items-center gap-2">\r
            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-semibold">\r
              {{ getInitials(prestataire.nom_complet) }}\r
            </div>\r
            <div>\r
              <div class="font-semibold">{{ prestataire.nom_complet }}</div>\r
              <div class="text-sm text-surface-500 mt-1">{{ prestataire.reference }}</div>\r
            </div>\r
          </div>\r
        </td> \r
        <td>\r
          <div class="flex items-center gap-1">\r
             <span class="text-surface-700">{{ prestataire.phone | phoneFormat:'INT' }}</span>\r
          </div>\r
        </td>\r
        <td>\r
          <p-tag\r
            *ngIf="prestataire.type_label"\r
            [value]="prestataire.type_label"\r
            [severity]="getTypeSeverity(prestataire.type)"\r
          ></p-tag>\r
          <span *ngIf="!prestataire.type_label" class="text-surface-400">-</span>\r
        </td>\r
        <td>\r
          <div class="flex items-center gap-2">\r
            <span class="fi fi-{{ prestataire.code_pays?.toLowerCase() }} text-xl"></span>\r
            <div>\r
              <div class="font-medium">{{ prestataire.ville }}</div>\r
              <div class="text-sm text-surface-500">{{ prestataire.quartier }}</div>\r
            </div>\r
          </div>\r
        </td>\r
        <td>\r
          <p-tag
            [value]="prestataire.is_active ? 'Actif' : 'Inactif'"
            [severity]="prestataire.is_active ? 'success' : 'danger'"
            styleClass="app-table-status"
          ></p-tag>
        </td>\r
        <td>\r
          \r
          <div class="flex gap-2">\r
            <button\r
              pButton\r
              pRipple\r
              icon="pi pi-eye"\r
              class="p-button-rounded p-button-text p-button-sm"\r
              [pTooltip]="canUpdate ? 'Modifier' : 'Voir'"\r
              tooltipPosition="top"\r
              (click)="goToEdit($event, prestataire.id)"\r
              [disabled]="!canUpdate"\r
            ></button>\r
            <button\r
              *ngIf="canUpdate"\r
              pButton\r
              pRipple\r
              [icon]="prestataire.is_active ? 'pi pi-lock-open' : 'pi pi-lock'"\r
              class="p-button-rounded p-button-text p-button-sm"\r
              [class.p-button-success]="prestataire.is_active"\r
              [class.p-button-danger]="!prestataire.is_active"\r
              [pTooltip]="prestataire.is_active ? 'D\xE9sactiver' : 'Activer'"\r
              tooltipPosition="top"\r
              (click)="toggleStatus($event, prestataire.id)"\r
            ></button>\r
            <button\r
              *ngIf="canDelete"\r
              pButton\r
              pRipple\r
              icon="pi pi-trash"\r
              class="p-button-rounded p-button-text p-button-danger p-button-sm"\r
              [pTooltip]="'Supprimer'"\r
              tooltipPosition="top"\r
              (click)="deletePrestataire($event, prestataire.id)"\r
            ></button>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #emptymessage>\r
      <tr>\r
        <td colspan="6" class="text-center py-8">\r
          <div class="flex flex-col items-center gap-3 text-surface-500">\r
            <i class="pi pi-users text-4xl"></i>\r
            <span>Aucun prestataire trouv\xE9</span>\r
          </div>\r
        </td>\r
      </tr>\r
    </ng-template>\r
  </p-table>\r
</div>\r
`, styles: ["/* src/app/pages/contacts/prestataires/prestataires-liste/prestataires-liste.scss */\n:host {\n  display: block;\n}\n.prestataires-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .prestataires-desktop {\n    display: none;\n  }\n  .prestataires-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .prestataires-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=prestataires-liste.css.map */\n"] }]
  }], () => [{ type: PrestataireService }, { type: Router }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: UsineContextService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestatairesListe, { className: "PrestatairesListe", filePath: "src/app/pages/contacts/prestataires/prestataires-liste/prestataires-liste.ts", lineNumber: 49 });
})();

// src/app/models/prestataire.model.ts
var PRESTATAIRE_TYPES = [
  { value: "machiniste", label: "Machiniste" },
  { value: "mecanicien", label: "Mecanicien" },
  { value: "consultant", label: "Consultant" },
  { value: "fournisseur", label: "Fournisseur" }
];

// src/app/pages/contacts/prestataires/prestataires-from/prestataires-from.ts
function PrestatairesFrom_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function PrestatairesFrom_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function PrestatairesFrom_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Type obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_18_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Raison sociale obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label", 35);
    \u0275\u0275text(2, " Raison sociale ");
    \u0275\u0275template(3, PrestatairesFrom_div_18_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_div_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.raison_sociale, $event) || (ctx_r1.model.raison_sociale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestatairesFrom_div_18_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.raison_sociale);
    \u0275\u0275property("invalid", ctx_r1.submitted && !(ctx_r1.model.raison_sociale == null ? null : ctx_r1.model.raison_sociale.trim()))("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !(ctx_r1.model.raison_sociale == null ? null : ctx_r1.model.raison_sociale.trim()) && ctx_r1.isEditing);
  }
}
function PrestatairesFrom_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_19_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Prenom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 37);
    \u0275\u0275text(2, " Prenom ");
    \u0275\u0275template(3, PrestatairesFrom_div_19_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_div_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.prenom, $event) || (ctx_r1.model.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestatairesFrom_div_19_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.prenom);
    \u0275\u0275property("invalid", ctx_r1.submitted && !(ctx_r1.model.prenom == null ? null : ctx_r1.model.prenom.trim()))("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !(ctx_r1.model.prenom == null ? null : ctx_r1.model.prenom.trim()) && ctx_r1.isEditing);
  }
}
function PrestatairesFrom_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_20_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "label", 39);
    \u0275\u0275text(2, " Nom ");
    \u0275\u0275template(3, PrestatairesFrom_div_20_span_3_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_div_20_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.nom, $event) || (ctx_r1.model.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestatairesFrom_div_20_small_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditing);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.nom);
    \u0275\u0275property("invalid", ctx_r1.submitted && !(ctx_r1.model.nom == null ? null : ctx_r1.model.nom.trim()))("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !(ctx_r1.model.nom == null ? null : ctx_r1.model.nom.trim()) && ctx_r1.isEditing);
  }
}
function PrestatairesFrom_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r6.flag, \u0275\u0275sanitizeUrl)("alt", country_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r6.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r6.name);
  }
}
function PrestatairesFrom_ng_template_29_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r7.flag, \u0275\u0275sanitizeUrl)("alt", country_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r7.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r7.name);
  }
}
function PrestatairesFrom_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PrestatairesFrom_ng_template_29_div_0_Template, 6, 4, "div", 44);
  }
  if (rf & 2) {
    const country_r7 = ctx.$implicit;
    \u0275\u0275property("ngIf", country_r7);
  }
}
function PrestatairesFrom_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 45);
    \u0275\u0275text(1, " Telephone obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.phoneError, " ");
  }
}
function PrestatairesFrom_small_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Indicatif applique automatiquement: ", ctx_r1.getSelectedCountryDialCode(), " ");
  }
}
function PrestatairesFrom_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_small_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Ville obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_small_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 34);
    \u0275\u0275text(1, " Quartier obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestatairesFrom_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "button", 49);
    \u0275\u0275listener("click", function PrestatairesFrom_div_50_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 50);
    \u0275\u0275listener("click", function PrestatairesFrom_div_50_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("label", ctx_r1.mode === "create" ? "Enregistrer" : "Sauvegarder")("loading", ctx_r1.loading)("disabled", !ctx_r1.isValid() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var PrestatairesFrom = class _PrestatairesFrom {
  mode = "create";
  initialData = null;
  loading = false;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  submitted = false;
  isEditing = false;
  model = {};
  type_piece_identite = [];
  prestataireTypes = PRESTATAIRE_TYPES;
  phoneError = null;
  phoneCountry = "GN";
  countries = COUNTRIES;
  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identite", code: "CI" },
      { name: "Passeport", code: "PASSPORT" },
      { name: "Permis de conduire", code: "PERMIS" }
    ];
    this.initializeModel();
  }
  ngOnChanges(changes) {
    if (changes["initialData"]) {
      const nextValue = changes["initialData"].currentValue;
      if (nextValue && Object.keys(nextValue).length > 0) {
        this.initializeModel();
      }
    }
  }
  initializeModel() {
    this.model = this.initialData ? __spreadValues({}, this.initialData) : {};
    if (this.mode === "create" && !this.model.ville?.trim()) {
      this.model.ville = "Conakry";
    }
    this.isEditing = this.mode === "create";
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
    this.model.phone = this.extractLocalPhone(this.model.phone, this.phoneCountry);
    this.model.code_pays = this.phoneCountry;
    this.model.pays = this.getCountryName(this.phoneCountry);
    this.submitted = false;
    this.phoneError = null;
  }
  detectPhoneCountry(phone) {
    try {
      const parsed = parsePhoneNumberWithError(phone);
      if (parsed?.country) {
        this.phoneCountry = parsed.country;
      }
    } catch {
    }
  }
  sanitizePhoneDigits(value) {
    return (value || "").replace(/\D/g, "");
  }
  getDialCode(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.dialCode : "";
  }
  getDialDigits(code) {
    return this.getDialCode(code).replace("+", "");
  }
  extractLocalPhone(phone, countryCode) {
    if (!phone) {
      return "";
    }
    const raw = String(phone).trim();
    if (!raw) {
      return "";
    }
    try {
      const parsed = parsePhoneNumberWithError(raw);
      if (parsed?.nationalNumber) {
        return this.sanitizePhoneDigits(parsed.nationalNumber);
      }
    } catch {
    }
    const digits = this.sanitizePhoneDigits(raw);
    const dialDigits = this.getDialDigits(countryCode);
    if (dialDigits && digits.startsWith(dialDigits)) {
      return digits.slice(dialDigits.length);
    }
    return digits;
  }
  toInternationalPhone(localDigits) {
    return `${this.getSelectedCountryDialCode()}${localDigits}`;
  }
  // Phone input is local-only digits (without dial code shown in country selector)
  validatePhone() {
    const localDigits = this.sanitizePhoneDigits(this.model.phone);
    this.model.phone = localDigits;
    if (!localDigits) {
      this.phoneError = "Telephone obligatoire.";
      return false;
    }
    const selectedDialCode = this.getSelectedCountryDialCode();
    const selectedCountry = this.getCountryName(this.phoneCountry);
    if (!selectedDialCode) {
      this.phoneError = "Veuillez selectionner un pays.";
      return false;
    }
    const internationalPhone = this.toInternationalPhone(localDigits);
    const isValid = isValidPhoneNumber(internationalPhone, this.phoneCountry);
    if (!isValid) {
      this.phoneError = `Numero invalide pour ${selectedCountry}.`;
      return false;
    }
    this.phoneError = null;
    this.model.code_pays = this.phoneCountry;
    this.model.pays = selectedCountry;
    return true;
  }
  getCountryName(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.name : code;
  }
  getSelectedCountryDialCode() {
    return this.getDialCode(this.phoneCountry);
  }
  getCountryFlag(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.flag : "";
  }
  onCountryChange() {
    this.model.code_pays = this.phoneCountry;
    this.model.pays = this.getCountryName(this.phoneCountry);
    if (this.model.phone) {
      this.validatePhone();
      return;
    }
    this.phoneError = null;
  }
  onPhoneInput(event) {
    const input = event.target;
    const rawValue = input ? input.value : String(this.model.phone || "");
    const normalized = this.sanitizePhoneDigits(rawValue);
    if (input && input.value !== normalized) {
      input.value = normalized;
    }
    this.model.phone = normalized;
    if (this.submitted) {
      this.validatePhone();
    } else if (!normalized) {
      this.phoneError = null;
    }
  }
  onPhoneBeforeInput(event) {
    if (!event.data) {
      return;
    }
    if (/\D/.test(event.data)) {
      event.preventDefault();
    }
  }
  onPhoneKeyDown(event) {
    if (event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    const allowedKeys = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End", "Enter"];
    if (allowedKeys.includes(event.key)) {
      return;
    }
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }
  onPhoneBlur() {
    if (this.model.phone?.trim()) {
      this.validatePhone();
    }
  }
  isValid() {
    if (!this.model.type) {
      return false;
    }
    if (this.model.type === "fournisseur") {
      const fournisseurValidation = !!(this.model.raison_sociale?.trim() && this.model.phone?.trim() && this.model.ville?.trim() && this.model.quartier?.trim());
      if (!fournisseurValidation) {
        return false;
      }
    } else {
      const basicValidation = !!(this.model.nom?.trim() && this.model.prenom?.trim() && this.model.phone?.trim() && this.model.ville?.trim() && this.model.quartier?.trim());
      if (!basicValidation) {
        return false;
      }
    }
    return this.validatePhone();
  }
  enableEditing() {
    this.isEditing = true;
  }
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.phoneError = null;
    this.model = this.initialData ? __spreadValues({}, this.initialData) : {};
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
    }
    this.model.phone = this.extractLocalPhone(this.model.phone, this.phoneCountry);
  }
  onSubmit() {
    this.submitted = true;
    if (!this.isValid()) {
      return;
    }
    const localDigits = this.sanitizePhoneDigits(this.model.phone);
    const internationalPhone = this.toInternationalPhone(localDigits);
    let normalizedPhone = internationalPhone;
    try {
      const parsed = parsePhoneNumberWithError(internationalPhone, this.phoneCountry);
      if (parsed?.number) {
        normalizedPhone = parsed.number;
      }
    } catch {
    }
    this.submitForm.emit(__spreadProps(__spreadValues({}, this.model), {
      phone: normalizedPhone,
      code_pays: this.phoneCountry,
      pays: this.getCountryName(this.phoneCountry)
    }));
  }
  onCancel() {
    this.cancel.emit();
  }
  get fieldsDisabled() {
    return this.mode === "edit" && !this.isEditing || this.loading;
  }
  get formTitle() {
    if (this.mode === "create") {
      return "Ajout prestataire";
    }
    return "Modification prestataire";
  }
  static \u0275fac = function PrestatairesFrom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestatairesFrom)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestatairesFrom, selectors: [["app-prestataires-from"]], inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 51, vars: 33, consts: [[1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], ["pButton", "", "pRipple", "", "type", "button", "label", "Modifier", "icon", "pi pi-pencil", "severity", "secondary", 3, "outlined", "click", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal", "mr-4"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12", "md:col-span-12"], ["for", "type", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["class", "text-red-500", 4, "ngIf"], ["id", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "Selectionner un type", "fluid", "", 3, "ngModelChange", "ngModel", "options", "disabled", "invalid"], ["class", "mb-6 col-span-12 md:col-span-12", 4, "ngIf"], ["class", "mb-6 col-span-12 md:col-span-6", 4, "ngIf"], [1, "mb-6", "col-span-12"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "md:col-span-4"], ["for", "codePays", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "codePays", "optionLabel", "name", "optionValue", "code", "placeholder", "Selectionner un pays", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "col-span-12", "md:col-span-8"], ["for", "phone", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "phone", "type", "tel", "pInputText", "", "fluid", "", "inputmode", "numeric", "pattern", "[0-9]*", "autocomplete", "tel-national", "placeholder", "Numero local sans indicatif", 3, "ngModelChange", "beforeinput", "keydown", "input", "blur", "ngModel", "invalid", "disabled"], ["class", "text-red-500 block mt-2", 4, "ngIf"], ["class", "text-surface-500 dark:text-surface-400 block mt-2", 4, "ngIf"], [1, "mb-6", "col-span-12", "md:col-span-6"], ["for", "ville", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "ville", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "quartier", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "quartier", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["class", "col-span-12 prestataires-form-actions", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Modifier", "icon", "pi pi-pencil", "severity", "secondary", 3, "click", "outlined"], [1, "text-red-500"], ["for", "raison_sociale", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "raison_sociale", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "prenom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "prenom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "nom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "text-red-500", "block", "mt-2"], [1, "text-surface-500", "dark:text-surface-400", "block", "mt-2"], [1, "col-span-12", "prestataires-form-actions"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "prestataires-form-submit", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "prestataires-form-cancel", 3, "click", "disabled"]], template: function PrestatairesFrom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, PrestatairesFrom_button_4_Template, 1, 1, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5);
      \u0275\u0275element(7, "div", 6);
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " Les champs s'affichent en fonction du type de prestataire. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 4)(12, "div", 9)(13, "label", 10);
      \u0275\u0275text(14, " Type de prestataire ");
      \u0275\u0275template(15, PrestatairesFrom_span_15_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_Template_p_select_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.type, $event) || (ctx.model.type = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, PrestatairesFrom_small_17_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, PrestatairesFrom_div_18_Template, 6, 5, "div", 13)(19, PrestatairesFrom_div_19_Template, 6, 5, "div", 14)(20, PrestatairesFrom_div_20_Template, 6, 5, "div", 14);
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "label", 18);
      \u0275\u0275text(25, " Pays ");
      \u0275\u0275template(26, PrestatairesFrom_span_26_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p-select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_Template_p_select_ngModelChange_27_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function PrestatairesFrom_Template_p_select_onChange_27_listener() {
        return ctx.onCountryChange();
      });
      \u0275\u0275template(28, PrestatairesFrom_ng_template_28_Template, 6, 4, "ng-template", 20)(29, PrestatairesFrom_ng_template_29_Template, 1, 1, "ng-template", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 22)(31, "label", 23);
      \u0275\u0275text(32, " Telephone ");
      \u0275\u0275template(33, PrestatairesFrom_span_33_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
        return $event;
      });
      \u0275\u0275listener("beforeinput", function PrestatairesFrom_Template_input_beforeinput_34_listener($event) {
        return ctx.onPhoneBeforeInput($event);
      })("keydown", function PrestatairesFrom_Template_input_keydown_34_listener($event) {
        return ctx.onPhoneKeyDown($event);
      })("input", function PrestatairesFrom_Template_input_input_34_listener($event) {
        return ctx.onPhoneInput($event);
      })("blur", function PrestatairesFrom_Template_input_blur_34_listener() {
        return ctx.onPhoneBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(35, PrestatairesFrom_small_35_Template, 2, 0, "small", 25)(36, PrestatairesFrom_small_36_Template, 2, 1, "small", 25)(37, PrestatairesFrom_small_37_Template, 2, 1, "small", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 27)(39, "label", 28);
      \u0275\u0275text(40, " Ville ");
      \u0275\u0275template(41, PrestatairesFrom_span_41_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.ville, $event) || (ctx.model.ville = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, PrestatairesFrom_small_43_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 27)(45, "label", 30);
      \u0275\u0275text(46, " Quartier ");
      \u0275\u0275template(47, PrestatairesFrom_span_47_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function PrestatairesFrom_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.quartier, $event) || (ctx.model.quartier = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, PrestatairesFrom_small_49_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, PrestatairesFrom_div_50_Template, 4, 4, "div", 32);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.formTitle, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.type);
      \u0275\u0275property("options", ctx.prestataireTypes)("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !ctx.model.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !ctx.model.type && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.type === "fournisseur");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.type !== "fournisseur");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.model.type !== "fournisseur");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneCountry);
      \u0275\u0275property("options", ctx.countries)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.phone);
      \u0275\u0275property("invalid", (ctx.submitted || ctx.phoneError) && (!(ctx.model.phone == null ? null : ctx.model.phone.trim()) || !!ctx.phoneError))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.phone == null ? null : ctx.model.phone.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.phoneError && (ctx.model.phone == null ? null : ctx.model.phone.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.phoneError && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.ville);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.ville == null ? null : ctx.model.ville.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.ville == null ? null : ctx.model.ville.trim()) && ctx.isEditing);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.model.quartier);
      \u0275\u0275property("invalid", ctx.submitted && !(ctx.model.quartier == null ? null : ctx.model.quartier.trim()))("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.model.quartier == null ? null : ctx.model.quartier.trim()) && ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [CommonModule, NgIf, Select, InputText, TextareaModule, FileUploadModule, PrimeTemplate, ButtonModule, ButtonDirective, InputGroupModule, RippleModule, Ripple, FormsModule, DefaultValueAccessor, NgControlStatus, PatternValidator, NgModel], styles: ["\n\n.prestataires-form-actions[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n}\n.prestataires-form-actions[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.prestataires-form-actions[_ngcontent-%COMP%]     .p-button {\n  min-height: 2.5rem;\n  min-width: 7rem;\n}\n@media (max-width: 768px) {\n  .prestataires-form-actions[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  .prestataires-form-actions[_ngcontent-%COMP%]     .p-button {\n    width: 100%;\n    justify-content: center;\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=prestataires-from.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestatairesFrom, [{
    type: Component,
    args: [{ selector: "app-prestataires-from", standalone: true, imports: [CommonModule, Select, InputText, TextareaModule, FileUploadModule, ButtonModule, InputGroupModule, RippleModule, FormsModule], template: `<div class="card">
  <div class="flex justify-between items-center mb-6">
    <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">
      {{ formTitle }}
    </span>
    <button
      *ngIf="mode === 'edit' && !isEditing"
      pButton
      pRipple
      type="button"
      label="Modifier"
      icon="pi pi-pencil"
      severity="secondary"
      [outlined]="true"
      (click)="enableEditing()"
    ></button>
  </div>

  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 lg:col-span-2">
      <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4"></div>
      <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">
        Les champs s'affichent en fonction du type de prestataire.
      </p>
    </div>

    <div class="col-span-12 lg:col-span-10">
      <div class="grid grid-cols-12 gap-4">
        <div class="mb-6 col-span-12 md:col-span-12">
          <label for="type" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Type de prestataire <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <p-select
            id="type"
            [(ngModel)]="model.type"
            [options]="prestataireTypes"
            optionLabel="label"
            optionValue="value"
            placeholder="Selectionner un type"
            [disabled]="fieldsDisabled"
            [invalid]="submitted && !model.type"
            fluid
          ></p-select>
          <small class="text-red-500" *ngIf="submitted && !model.type && isEditing">
            Type obligatoire.
          </small>
        </div>

        <div class="mb-6 col-span-12 md:col-span-12" *ngIf="model.type === 'fournisseur'">
          <label for="raison_sociale" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Raison sociale <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="raison_sociale"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.raison_sociale"
            [invalid]="submitted && !model.raison_sociale?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.raison_sociale?.trim() && isEditing">
            Raison sociale obligatoire.
          </small>
        </div>

        
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="model.type !== 'fournisseur'">
          <label for="prenom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Prenom <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.prenom"
            [invalid]="submitted && !model.prenom?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.prenom?.trim() && isEditing">
            Prenom obligatoire.
          </small>
        </div>

        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="model.type !== 'fournisseur'">
          <label for="nom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Nom <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="nom"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.nom"
            [invalid]="submitted && !model.nom?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.nom?.trim() && isEditing">
            Nom obligatoire.
          </small>
        </div>


        <div class="mb-6 col-span-12">
          <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 md:col-span-4">
              <label for="codePays" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">
                Pays <span class="text-red-500" *ngIf="isEditing">*</span>
              </label>
              <p-select
                id="codePays"
                [(ngModel)]="phoneCountry"
                [options]="countries"
                optionLabel="name"
                optionValue="code"
                placeholder="Selectionner un pays"
                [disabled]="fieldsDisabled"
                (onChange)="onCountryChange()"
                fluid
              >
                <ng-template let-country pTemplate="item">
                  <div class="flex items-center gap-2">
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>
                    <span>{{ country.name }}</span>
                  </div>
                </ng-template>
                <ng-template let-country pTemplate="selectedItem">
                  <div class="flex items-center gap-2" *ngIf="country">
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>
                    <span>{{ country.name }}</span>
                  </div>
                </ng-template>
              </p-select>
            </div>

            <div class="col-span-12 md:col-span-8">
              <label for="phone" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">
                Telephone <span class="text-red-500" *ngIf="isEditing">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                pInputText
                fluid
                inputmode="numeric"
                pattern="[0-9]*"
                autocomplete="tel-national"
                [(ngModel)]="model.phone"
                [invalid]="(submitted || phoneError) && (!model.phone?.trim() || !!phoneError)"
                [disabled]="fieldsDisabled"
                (beforeinput)="onPhoneBeforeInput($event)"
                (keydown)="onPhoneKeyDown($event)"
                (input)="onPhoneInput($event)"
                (blur)="onPhoneBlur()"
                placeholder="Numero local sans indicatif"
              />
            </div>
          </div>

          <small class="text-red-500 block mt-2" *ngIf="submitted && !model.phone?.trim() && isEditing">
            Telephone obligatoire.
          </small>
          <small class="text-red-500 block mt-2" *ngIf="phoneError && model.phone?.trim() && isEditing">
            {{ phoneError }}
          </small>
          <small class="text-surface-500 dark:text-surface-400 block mt-2" *ngIf="!phoneError && isEditing">
            Indicatif applique automatiquement: {{ getSelectedCountryDialCode() }}
          </small>
        </div>

        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="ville" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Ville <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="ville"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.ville"
            [invalid]="submitted && !model.ville?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.ville?.trim() && isEditing">
            Ville obligatoire.
          </small>
        </div>

        <div class="mb-6 col-span-12 md:col-span-6">
          <label for="quartier" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">
            Quartier <span class="text-red-500" *ngIf="isEditing">*</span>
          </label>
          <input
            id="quartier"
            type="text"
            pInputText
            fluid
            [(ngModel)]="model.quartier"
            [invalid]="submitted && !model.quartier?.trim()"
            [disabled]="fieldsDisabled"
          />
          <small class="text-red-500" *ngIf="submitted && !model.quartier?.trim() && isEditing">
            Quartier obligatoire.
          </small>
        </div>

        <div class="col-span-12 prestataires-form-actions" *ngIf="isEditing">
          <div class="flex flex-wrap items-center gap-3">
            <button
              pButton
              pRipple
              [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"
              icon="pi pi-check"
              (click)="onSubmit()"
              [loading]="loading"
              [disabled]="!isValid() || loading"
              class="prestataires-form-submit"
            ></button>
            <button
              pButton
              pRipple
              label="Annuler"
              icon="pi pi-times"
              severity="secondary"
              (click)="onCancel()"
              [disabled]="loading"
              class="prestataires-form-cancel"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/contacts/prestataires/prestataires-from/prestataires-from.scss */\n.prestataires-form-actions {\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n}\n.prestataires-form-actions .flex {\n  align-items: center;\n}\n.prestataires-form-actions ::ng-deep .p-button {\n  min-height: 2.5rem;\n  min-width: 7rem;\n}\n@media (max-width: 768px) {\n  .prestataires-form-actions .flex {\n    flex-direction: column;\n    width: 100%;\n  }\n  .prestataires-form-actions ::ng-deep .p-button {\n    width: 100%;\n    justify-content: center;\n    min-width: unset;\n  }\n}\n/*# sourceMappingURL=prestataires-from.css.map */\n"] }]
  }], null, { mode: [{
    type: Input
  }], initialData: [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestatairesFrom, { className: "PrestatairesFrom", filePath: "src/app/pages/contacts/prestataires/prestataires-from/prestataires-from.ts", lineNumber: 23 });
})();

// src/app/pages/contacts/prestataires/prestataires-new/prestataires-new.ts
var PrestatairesNew = class _PrestatairesNew {
  prestataireService;
  messageService;
  router;
  loading = false;
  constructor(prestataireService, messageService, router) {
    this.prestataireService = prestataireService;
    this.messageService = messageService;
    this.router = router;
  }
  onCancel() {
    this.router.navigate(["contacts/prestataires"]);
  }
  onSubmit(data) {
    this.loading = true;
    const payload = {
      nom: data.nom || "",
      prenom: data.prenom || "",
      phone: data.phone || "",
      pays: data.pays || "Guinee",
      code_pays: data.code_pays || "GN",
      code_phone_pays: this.getCodePhonePays(data.code_pays || "GN"),
      ville: data.ville || "",
      quartier: data.quartier || void 0,
      adresse: data.adresse || void 0,
      raison_sociale: data.raison_sociale || void 0,
      email: data.email || void 0,
      specialite: data.specialite || void 0,
      type: data.type || void 0,
      tarif_horaire: data.tarif_horaire || void 0,
      notes: data.notes || void 0
    };
    console.log(payload);
    this.prestataireService.createPrestataire(payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: "success",
            summary: "Succes",
            detail: "Prestataire cree avec succes"
          });
          const id = response.data?.id;
          setTimeout(() => {
            if (id != null) {
              this.router.navigate(["contacts/prestataires/edit", id]);
            } else {
              this.router.navigate(["contacts/prestataires"]);
            }
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la creation:", error);
        const errorDetail = this.getApiErrorDetail(error, "Erreur lors de la creation du prestataire");
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: errorDetail
        });
        this.loading = false;
      }
    });
  }
  getApiErrorDetail(error, fallback) {
    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join("; ");
    }
    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }
    return fallback;
  }
  extractApiMessage(error) {
    const message = error?.error?.message;
    if (typeof message !== "string") {
      return null;
    }
    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 ? trimmedMessage : null;
  }
  extractValidationMessages(error) {
    const validationErrors = error?.error?.errors;
    if (!validationErrors || typeof validationErrors !== "object") {
      return [];
    }
    return Object.values(validationErrors).flatMap((value) => Array.isArray(value) ? value : [value]).map((message) => String(message).trim()).filter((message) => message.length > 0);
  }
  getCodePhonePays(codeCountry) {
    const codes = {
      "GN": "+224",
      "SL": "+232",
      "LR": "+231",
      "CI": "+225",
      "SN": "+221",
      "ML": "+223",
      "BF": "+226",
      "NE": "+227",
      "TG": "+228",
      "BJ": "+229",
      "GH": "+233",
      "NG": "+234",
      "GM": "+220",
      "GW": "+245",
      "CV": "+238",
      "MR": "+222",
      "FR": "+33",
      "BE": "+32",
      "CH": "+41",
      "LU": "+352",
      "CA": "+1",
      "US": "+1"
    };
    return codes[codeCountry] || "+224";
  }
  static \u0275fac = function PrestatairesNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestatairesNew)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestatairesNew, selectors: [["app-prestataires-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 2, consts: [[3, "submitForm", "cancel", "mode", "loading"]], template: function PrestatairesNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-prestataires-from", 0);
      \u0275\u0275listener("submitForm", function PrestatairesNew_Template_app_prestataires_from_submitForm_1_listener($event) {
        return ctx.onSubmit($event);
      })("cancel", function PrestatairesNew_Template_app_prestataires_from_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("mode", "create")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, PrestatairesFrom, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestatairesNew, [{
    type: Component,
    args: [{ selector: "app-prestataires-new", standalone: true, imports: [CommonModule, PrestatairesFrom, ToastModule], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<app-prestataires-from\r
  [mode]="'create'"\r
  [loading]="loading"\r
  (submitForm)="onSubmit($event)"\r
  (cancel)="onCancel()"\r
></app-prestataires-from>\r
` }]
  }], () => [{ type: PrestataireService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestatairesNew, { className: "PrestatairesNew", filePath: "src/app/pages/contacts/prestataires/prestataires-new/prestataires-new.ts", lineNumber: 18 });
})();

// src/app/pages/contacts/prestataires/prestataires-edit/prestataires-edit.ts
function PrestatairesEdit_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function PrestatairesEdit_app_prestataires_from_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-prestataires-from", 11);
    \u0275\u0275listener("submitForm", function PrestatairesEdit_app_prestataires_from_10_Template_app_prestataires_from_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("cancel", function PrestatairesEdit_app_prestataires_from_10_Template_app_prestataires_from_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mode", "edit")("initialData", ctx_r1.prestatairesData)("loading", ctx_r1.loading);
  }
}
var PrestatairesEdit = class _PrestatairesEdit {
  route;
  router;
  prestataireService;
  messageService;
  loading = false;
  prestataireId = null;
  prestatairesData = null;
  constructor(route, router, prestataireService, messageService) {
    this.route = route;
    this.router = router;
    this.prestataireService = prestataireService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.prestataireId = parseInt(id, 10);
      this.loadPrestataire(this.prestataireId);
    }
  }
  loadPrestataire(id) {
    this.loading = true;
    this.prestataireService.getPrestataire(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const prestataire = response.data;
          this.prestatairesData = {
            id: prestataire.id,
            reference: prestataire.reference,
            type: prestataire.type || void 0,
            nom: prestataire.nom,
            prenom: prestataire.prenom,
            raison_sociale: prestataire.raison_sociale || void 0,
            phone: prestataire.phone,
            email: prestataire.email || void 0,
            pays: prestataire.pays,
            code_pays: prestataire.code_pays,
            code_phone_pays: prestataire.code_phone_pays,
            ville: prestataire.ville,
            quartier: prestataire.quartier || void 0,
            adresse: prestataire.adresse || void 0,
            specialite: prestataire.specialite || void 0,
            tarif_horaire: prestataire.tarif_horaire || void 0,
            notes: prestataire.notes || void 0
          };
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Erreur lors du chargement du prestataire"
        });
        this.loading = false;
      }
    });
  }
  onSubmit(data) {
    if (!this.prestataireId)
      return;
    this.loading = true;
    const payload = {
      nom: data.nom,
      prenom: data.prenom,
      phone: data.phone,
      pays: data.pays,
      code_pays: data.code_pays,
      code_phone_pays: this.getCodePhonePays(data.code_pays || "GN"),
      ville: data.ville,
      quartier: data.quartier || void 0,
      adresse: data.adresse || void 0,
      raison_sociale: data.raison_sociale || void 0,
      email: data.email || void 0,
      specialite: data.specialite || void 0,
      type: data.type || void 0,
      tarif_horaire: data.tarif_horaire || void 0,
      notes: data.notes || void 0
    };
    this.prestataireService.updatePrestataire(this.prestataireId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.messageService.add({
            severity: "success",
            summary: "Succes",
            detail: "Prestataire modifie avec succes"
          });
          this.loadPrestataire(this.prestataireId);
        } else {
          this.loading = false;
        }
      },
      error: (error) => {
        console.error("Erreur lors de la modification:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: this.getApiErrorDetail(error, "Erreur lors de la modification du prestataire")
        });
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["contacts/prestataires"]);
  }
  getCodePhonePays(codeCountry) {
    const codes = {
      GN: "+224",
      SL: "+232",
      LR: "+231",
      CI: "+225",
      SN: "+221",
      ML: "+223",
      BF: "+226",
      NE: "+227",
      TG: "+228",
      BJ: "+229",
      GH: "+233",
      NG: "+234",
      GM: "+220",
      GW: "+245",
      CV: "+238",
      MR: "+222",
      FR: "+33",
      BE: "+32",
      CH: "+41",
      LU: "+352",
      CA: "+1",
      US: "+1"
    };
    return codes[codeCountry] || "+224";
  }
  getApiErrorDetail(error, fallback) {
    const validationMessages = this.extractValidationMessages(error);
    if (validationMessages.length > 0) {
      return validationMessages.join("; ");
    }
    const apiMessage = this.extractApiMessage(error);
    if (apiMessage) {
      return apiMessage;
    }
    return fallback;
  }
  extractApiMessage(error) {
    const message = error?.error?.message;
    if (typeof message !== "string") {
      return null;
    }
    const trimmedMessage = message.trim();
    return trimmedMessage.length > 0 ? trimmedMessage : null;
  }
  extractValidationMessages(error) {
    const validationErrors = error?.error?.errors;
    if (!validationErrors || typeof validationErrors !== "object") {
      return [];
    }
    return Object.values(validationErrors).flatMap((value) => Array.isArray(value) ? value : [value]).map((message) => String(message).trim()).filter((message) => message.length > 0);
  }
  static \u0275fac = function PrestatairesEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestatairesEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestatairesEdit, selectors: [["app-prestataires-edit"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 11, vars: 2, consts: [[1, "edit-page"], [1, "edit-mobile-header"], ["type", "button", "aria-label", "Retour a la liste", 1, "edit-back", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "edit-title"], [1, "edit-header-spacer"], [1, "edit-content"], ["class", "flex justify-center items-center h-96", 4, "ngIf"], [3, "mode", "initialData", "loading", "submitForm", "cancel", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-96"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl", "text-primary"], [3, "submitForm", "cancel", "mode", "initialData", "loading"]], template: function PrestatairesEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "header", 1)(3, "button", 2);
      \u0275\u0275listener("click", function PrestatairesEdit_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275element(4, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 4);
      \u0275\u0275text(6, "Modifier le prestataire");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275template(9, PrestatairesEdit_div_9_Template, 2, 0, "div", 7)(10, PrestatairesEdit_app_prestataires_from_10_Template, 1, 3, "app-prestataires-from", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.prestatairesData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.prestatairesData);
    }
  }, dependencies: [CommonModule, NgIf, PrestatairesFrom, ToastModule, Toast], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.edit-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .edit-title[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=prestataires-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestatairesEdit, [{
    type: Component,
    args: [{ selector: "app-prestataires-edit", standalone: true, imports: [CommonModule, PrestatairesFrom, ToastModule], providers: [MessageService], template: `<p-toast></p-toast>

<div class="edit-page">
  <header class="edit-mobile-header">
    <button type="button" class="edit-back" aria-label="Retour a la liste" (click)="onCancel()">
      <i class="pi pi-arrow-left"></i>
    </button>
    <h1 class="edit-title">Modifier le prestataire</h1>
    <span class="edit-header-spacer"></span>
  </header>

  <div class="edit-content">
    <div *ngIf="loading && !prestatairesData" class="flex justify-center items-center h-96">
      <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>
    </div>

    <app-prestataires-from
      *ngIf="prestatairesData"
      [mode]="'edit'"
      [initialData]="prestatairesData"
      [loading]="loading"
      (submitForm)="onSubmit($event)"
      (cancel)="onCancel()"
    ></app-prestataires-from>
  </div>
</div>
`, styles: ["/* src/app/pages/contacts/prestataires/prestataires-edit/prestataires-edit.scss */\n:host {\n  display: block;\n}\n.edit-mobile-header {\n  display: none;\n}\n.edit-content {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back .pi {\n    font-size: 1.1rem;\n  }\n  .edit-title {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n    text-align: center;\n  }\n  .edit-header-spacer {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=prestataires-edit.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: PrestataireService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestatairesEdit, { className: "PrestatairesEdit", filePath: "src/app/pages/contacts/prestataires/prestataires-edit/prestataires-edit.ts", lineNumber: 19 });
})();

// src/app/pages/contacts/prestataires/prestataires.routes.ts
var prestataires_routes_default = [
  {
    path: "",
    component: PrestatairesListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "prestataires", permissions: ["prestataires.read"] }
  },
  {
    path: "prestataires",
    component: PrestatairesListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "prestataires", permissions: ["prestataires.read"] }
  },
  {
    path: "new",
    component: PrestatairesNew,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "new", permissions: ["prestataires.create"] }
  },
  {
    path: "edit/:id",
    component: PrestatairesEdit,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "edit", permissions: ["prestataires.update"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  prestataires_routes_default as default
};
//# sourceMappingURL=chunk-VGOISDDA.js.map
