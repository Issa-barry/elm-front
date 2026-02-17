import {
  FileUploadModule
} from "./chunk-PXXCZHHU.js";
import "./chunk-FAXGIH27.js";
import "./chunk-LY2SL74U.js";
import {
  isValidPhoneNumber,
  parsePhoneNumberWithError
} from "./chunk-JGT6B74A.js";
import {
  COUNTRIES
} from "./chunk-MFW4RCM3.js";
import {
  PrestataireService
} from "./chunk-L372NRZT.js";
import {
  InputGroupAddon
} from "./chunk-6Y6LUQCJ.js";
import {
  InputGroupModule
} from "./chunk-CJRBLZMU.js";
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
import "./chunk-A2LLWIIX.js";
import {
  Toast,
  ToastModule
} from "./chunk-MIKKBFN3.js";
import "./chunk-IAPVHBD4.js";
import {
  authorizationGuard
} from "./chunk-YMUHY675.js";
import {
  AuthService
} from "./chunk-66GARPBB.js";
import "./chunk-RTHJZPEL.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import {
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import {
  Select,
  SelectModule
} from "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import {
  Tag,
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
import "./chunk-2UZZQ3O5.js";
import "./chunk-YUZALO6D.js";
import "./chunk-YWX4RJZN.js";
import {
  IconField,
  InputIcon
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
import "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  ButtonDirective,
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
  MessageService,
  PrimeTemplate
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
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
  Input,
  Output,
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
} from "./chunk-FZZISKXM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/pages/contacts/prestateurs/prestateurs-liste/prestateurs-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["nom_complet", "email", "phone", "reference", "pays", "ville", "specialite", "type", "type_label"];
var _c2 = () => ({ "min-width": "150px" });
function PrestateursListe_section_17_article_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PrestateursListe_section_17_article_1_button_13_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const prestataire_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r4.deletePrestataire($event, prestataire_r4.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", "Supprimer");
  }
}
function PrestateursListe_section_17_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 26);
    \u0275\u0275listener("click", function PrestateursListe_section_17_article_1_Template_article_click_0_listener($event) {
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
    \u0275\u0275listener("click", function PrestateursListe_section_17_article_1_Template_button_click_12_listener($event) {
      const prestataire_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, prestataire_r4.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PrestateursListe_section_17_article_1_button_13_Template, 1, 1, "button", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const prestataire_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(prestataire_r4.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r4.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r4.email || \u0275\u0275pipeBind2(8, 8, prestataire_r4.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", prestataire_r4.is_active ? "Actif" : "Inactif")("severity", prestataire_r4.is_active ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canDelete);
  }
}
function PrestateursListe_section_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 24);
    \u0275\u0275template(1, PrestateursListe_section_17_article_1_Template, 14, 11, "article", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.mobileVisiblePrestataires)("ngForTrackBy", ctx_r4.trackByPrestataireId);
  }
}
function PrestateursListe_ng_template_18_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function PrestateursListe_ng_template_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Aucun prestataire.");
    \u0275\u0275elementEnd();
  }
}
function PrestateursListe_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PrestateursListe_ng_template_18_div_0_Template, 2, 0, "div", 37)(1, PrestateursListe_ng_template_18_div_1_Template, 2, 0, "div", 37);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r4.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.loading && !ctx_r4.mobileFilteredPrestataires.length);
  }
}
function PrestateursListe_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function PrestateursListe_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function PrestateursListe_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function PrestateursListe_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275elementEnd();
  }
}
function PrestateursListe_ng_template_25_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function PrestateursListe_ng_template_25_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.navigateToCreate());
    });
    \u0275\u0275elementEnd();
  }
}
function PrestateursListe_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "p-icon-field", 44);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 45);
    \u0275\u0275listener("input", function PrestateursListe_ng_template_25_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      const dt_r10 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(ctx_r4.onGlobalFilter(dt_r10, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 46)(5, "p-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function PrestateursListe_ng_template_25_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.selectedStatus, $event) || (ctx_r4.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function PrestateursListe_ng_template_25_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.filterByStatus());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PrestateursListe_ng_template_25_button_6_Template, 1, 0, "button", 48);
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
function PrestateursListe_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 50)(2, "span", 51);
    \u0275\u0275text(3, " Nom complet ");
    \u0275\u0275element(4, "p-sortIcon", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 53)(6, "span", 51);
    \u0275\u0275text(7, " T\xE9l\xE9phone ");
    \u0275\u0275element(8, "p-sortIcon", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 55)(10, "span", 51);
    \u0275\u0275text(11, " Type ");
    \u0275\u0275element(12, "p-sortIcon", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 57)(14, "span", 51);
    \u0275\u0275text(15, " Adresse ");
    \u0275\u0275element(16, "p-sortIcon", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 59)(18, "span", 51);
    \u0275\u0275text(19, " Statut ");
    \u0275\u0275element(20, "p-sortIcon", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 61);
    \u0275\u0275text(22, " Actions ");
    \u0275\u0275elementEnd()();
  }
}
function PrestateursListe_ng_template_29_p_tag_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 72);
  }
  if (rf & 2) {
    const prestataire_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("value", prestataire_r13.type_label)("severity", ctx_r4.getTypeSeverity(prestataire_r13.type));
  }
}
function PrestateursListe_ng_template_29_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function PrestateursListe_ng_template_29_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function PrestateursListe_ng_template_29_button_31_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const prestataire_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleStatus($event, prestataire_r13.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prestataire_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("p-button-success", prestataire_r13.is_active)("p-button-danger", !prestataire_r13.is_active);
    \u0275\u0275property("icon", prestataire_r13.is_active ? "pi pi-lock-open" : "pi pi-lock")("pTooltip", prestataire_r13.is_active ? "D\xE9sactiver" : "Activer");
  }
}
function PrestateursListe_ng_template_29_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PrestateursListe_ng_template_29_button_32_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const prestataire_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.deletePrestataire($event, prestataire_r13.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", "Supprimer");
  }
}
function PrestateursListe_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62)(1, "td")(2, "div", 51)(3, "div", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "div", 66)(12, "span", 67);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "phoneFormat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275template(16, PrestateursListe_ng_template_29_p_tag_16_Template, 1, 2, "p-tag", 68)(17, PrestateursListe_ng_template_29_span_17_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "div", 51);
    \u0275\u0275element(20, "span");
    \u0275\u0275elementStart(21, "div")(22, "div", 70);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 71);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275element(27, "p-tag", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td")(29, "div", 73)(30, "button", 34);
    \u0275\u0275listener("click", function PrestateursListe_ng_template_29_Template_button_click_30_listener($event) {
      const prestataire_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToEdit($event, prestataire_r13.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, PrestateursListe_ng_template_29_button_31_Template, 1, 6, "button", 74)(32, PrestateursListe_ng_template_29_button_32_Template, 1, 1, "button", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prestataire_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("pSelectableRow", prestataire_r13);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r4.getInitials(prestataire_r13.nom_complet), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r13.nom_complet);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r13.reference);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 18, prestataire_r13.phone, "INT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", prestataire_r13.type_label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !prestataire_r13.type_label);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("fi fi-", prestataire_r13.code_pays == null ? null : prestataire_r13.code_pays.toLowerCase(), " text-xl"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(prestataire_r13.ville);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prestataire_r13.quartier);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", prestataire_r13.is_active ? "Actif" : "Inactif")("severity", prestataire_r13.is_active ? "success" : "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", ctx_r4.canUpdate ? "Modifier" : "Voir")("disabled", !ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canUpdate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.canDelete);
  }
}
function PrestateursListe_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 77)(2, "div", 78);
    \u0275\u0275element(3, "i", 79);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucun prestataire trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
var PrestateursListe = class _PrestateursListe {
  prestataireService;
  router;
  messageService;
  confirmationService;
  authService;
  document;
  prestataires = [];
  selectedPrestataire = null;
  loading = false;
  selectedStatus = null;
  mobileSearchTerm = "";
  mobilePageSize = 10;
  mobileVisibleCount = this.mobilePageSize;
  mobileBreakpoint = 768;
  mobilePwaClass = "prestateurs-mobile-pwa";
  statusOptions = [
    { label: "Actif", value: true },
    { label: "Inactif", value: false }
  ];
  mobileStatusMenuItems = [
    { label: "Tous les statuts", command: () => this.applyMobileStatusFilter(null) },
    { label: "Actif", command: () => this.applyMobileStatusFilter(true) },
    { label: "Inactif", command: () => this.applyMobileStatusFilter(false) }
  ];
  canCreate = false;
  canUpdate = false;
  canDelete = false;
  constructor(prestataireService, router, messageService, confirmationService, authService, document) {
    this.prestataireService = prestataireService;
    this.router = router;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.document = document;
    this.canCreate = this.authService.hasPermission("prestataires.create");
    this.canUpdate = this.authService.hasPermission("prestataires.update");
    this.canDelete = this.authService.hasPermission("prestataires.delete");
  }
  ngOnInit() {
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
    this.router.navigate(["contacts/prestateurs/new"]);
  }
  /**
   * Sélection d'une ligne - navigation vers l'édition
   */
  onRowSelect(event) {
    this.router.navigate(["contacts/prestateurs/edit", event.data.id]);
  }
  /**
   * Voir les détails d'un prestataire
   */
  goToEdit(event, prestataireId) {
    event.stopPropagation();
    this.router.navigate(["contacts/prestateurs/edit/", prestataireId]);
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
              detail: "Impossible de supprimer le prestataire"
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
  static \u0275fac = function PrestateursListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestateursListe)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestateursListe, selectors: [["app-prestateurs-liste"]], hostBindings: function PrestateursListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function PrestateursListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 33, vars: 20, consts: [["statusMenu", ""], ["mobileListState", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "prestateurs-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["appendTo", "body", "styleClass", "mobile-status-menu", 3, "model", "popup"], ["pButton", "", "pRipple", "", "icon", "pi pi-filter", "aria-label", "Filtrer par statut", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Nom, email, t\xE9l\xE9phone...", 1, "w-full", 3, "ngModelChange", "ngModel"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["class", "mobile-load-more", 4, "ngIf"], ["type", "button", "class", "mobile-fab", "aria-label", "Nouveau prestataire", 3, "click", 4, "ngIf"], [1, "card", "prestateurs-desktop"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "  {first} / {last} de {totalRecords} entr\xE9es", "selectionMode", "single", "styleClass", "cursor-pointer", 3, "selectionChange", "onRowSelect", "value", "paginator", "rows", "showCurrentPageReport", "loading", "rowsPerPageOptions", "globalFilterFields", "selection", "rowHover"], [1, "mobile-list"], ["class", "mobile-user-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-user-card", 3, "click"], ["aria-hidden", "true", 1, "mobile-card-avatar"], [1, "mobile-card-body"], [1, "mobile-card-name"], [1, "mobile-card-meta"], [1, "mobile-card-footer"], ["styleClass", "mobile-status-tag", 3, "value", "severity"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "pTooltip", "disabled"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "class", "p-button-rounded p-button-text p-button-danger p-button-sm", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-danger", "p-button-sm", 3, "click", "pTooltip"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], [1, "mobile-load-more"], ["pButton", "", "label", "Charger plus", "icon", "pi pi-angle-down", 1, "mobile-load-more-btn", 3, "click"], ["type", "button", "aria-label", "Nouveau prestataire", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-user-plus"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un prestataire...", 1, "w-full", 3, "input"], [1, "flex", "gap-2", "w-full", "sm:w-auto", "flex-order-0", "sm:flex-order-1"], ["placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "options", "ngModel", "showClear"], ["pButton", "", "outlined", "", "class", "flex-shrink-0", "icon", "pi pi-user-plus", "label", "Nouveau", 3, "click", 4, "ngIf"], ["pButton", "", "outlined", "", "icon", "pi pi-user-plus", "label", "Nouveau", 1, "flex-shrink-0", 3, "click"], ["pSortableColumn", "nom_complet", 1, "white-space-nowrap", 2, "width", "25%"], [1, "flex", "items-center", "gap-2"], ["field", "nom_complet"], ["pSortableColumn", "phone", 1, "white-space-nowrap", 2, "width", "15%"], ["field", "phone"], ["pSortableColumn", "type", 1, "white-space-nowrap", 2, "width", "12%"], ["field", "type"], ["pSortableColumn", "pays", 1, "white-space-nowrap", 2, "width", "18%"], ["field", "pays"], ["pSortableColumn", "is_active", 1, "white-space-nowrap", 2, "width", "10%"], ["field", "is_active"], [1, "white-space-nowrap", 2, "width", "10%"], [3, "pSelectableRow"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "bg-primary-100", "text-primary-700", "font-semibold"], [1, "font-semibold"], [1, "text-sm", "text-surface-500", "mt-1"], [1, "flex", "items-center", "gap-1"], [1, "text-surface-700"], [3, "value", "severity", 4, "ngIf"], ["class", "text-surface-400", 4, "ngIf"], [1, "font-medium"], [1, "text-sm", "text-surface-500"], [3, "value", "severity"], [1, "flex", "gap-2"], ["pButton", "", "pRipple", "", "class", "p-button-rounded p-button-text p-button-sm", "tooltipPosition", "top", 3, "icon", "p-button-success", "p-button-danger", "pTooltip", "click", 4, "ngIf"], [1, "text-surface-400"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", 3, "click", "icon", "pTooltip"], ["colspan", "6", 1, "text-center", "py-8"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-users", "text-4xl"]], template: function PrestateursListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-confirmDialog");
      \u0275\u0275elementStart(1, "div", 7)(2, "header", 8)(3, "button", 9);
      \u0275\u0275listener("click", function PrestateursListe_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 10)(5, "h1", 11);
      \u0275\u0275text(6, "Prestataires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 12);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "p-menu", 13, 0);
      \u0275\u0275elementStart(11, "button", 14);
      \u0275\u0275listener("click", function PrestateursListe_Template_button_click_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        const statusMenu_r2 = \u0275\u0275reference(10);
        return \u0275\u0275resetView(statusMenu_r2.toggle($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 15)(13, "section", 16)(14, "p-icon-field");
      \u0275\u0275element(15, "p-inputicon", 17);
      \u0275\u0275elementStart(16, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursListe_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function PrestateursListe_Template_input_ngModelChange_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, PrestateursListe_section_17_Template, 2, 2, "section", 19)(18, PrestateursListe_ng_template_18_Template, 2, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(20, PrestateursListe_div_20_Template, 2, 0, "div", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, PrestateursListe_button_21_Template, 2, 0, "button", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 22)(23, "p-table", 23, 2);
      \u0275\u0275twoWayListener("selectionChange", function PrestateursListe_Template_p_table_selectionChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedPrestataire, $event) || (ctx.selectedPrestataire = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onRowSelect", function PrestateursListe_Template_p_table_onRowSelect_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onRowSelect($event));
      });
      \u0275\u0275template(25, PrestateursListe_ng_template_25_Template, 7, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(27, PrestateursListe_ng_template_27_Template, 23, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(29, PrestateursListe_ng_template_29_Template, 33, 21, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(31, PrestateursListe_ng_template_31_Template, 6, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const mobileListState_r16 = \u0275\u0275reference(19);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.mobileFilteredPrestataires.length, " prestataire", ctx.mobileFilteredPrestataires.length !== 1 ? "s" : "");
      \u0275\u0275advance();
      \u0275\u0275property("model", ctx.mobileStatusMenuItems)("popup", true);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisiblePrestataires.length)("ngIfElse", mobileListState_r16);
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
    PhoneFormatPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.prestateurs-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .prestateurs-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .prestateurs-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=prestateurs-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestateursListe, [{
    type: Component,
    args: [{ selector: "app-prestateurs-liste", standalone: true, providers: [MessageService, ConfirmationService], imports: [
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
      PhoneFormatPipe
    ], template: `<p-confirmDialog></p-confirmDialog>\r
\r
<!-- Mobile: app-like list (\u2264768px) -->\r
<div class="prestateurs-mobile-app">\r
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
            <p-tag\r
              [value]="prestataire.is_active ? 'Actif' : 'Inactif'"\r
              [severity]="prestataire.is_active ? 'success' : 'danger'"\r
              styleClass="mobile-status-tag"\r
            />\r
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
              <button\r
                *ngIf="canDelete"\r
                pButton\r
                pRipple\r
                icon="pi pi-trash"\r
                class="p-button-rounded p-button-text p-button-danger p-button-sm"\r
                [pTooltip]="'Supprimer'"\r
                tooltipPosition="top"\r
                (click)="$event.stopPropagation(); deletePrestataire($event, prestataire.id)"\r
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
<div class="card prestateurs-desktop">\r
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
          <p-tag\r
            [value]="prestataire.is_active ? 'Actif' : 'Inactif'"\r
            [severity]="prestataire.is_active ? 'success' : 'danger'"\r
          ></p-tag>\r
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
`, styles: ["/* src/app/pages/contacts/prestateurs/prestateurs-liste/prestateurs-liste.scss */\n:host {\n  display: block;\n}\n.prestateurs-mobile-app {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #ffffff;\n    --mobile-border: #e2e8f0;\n  }\n  .prestateurs-desktop {\n    display: none;\n  }\n  .prestateurs-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100dvh;\n    height: 100vh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: #f8fafc;\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 50%;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.15rem 0 0;\n    font-size: 0.8rem;\n    font-weight: 500;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.75rem;\n    padding: 0.4rem 0.6rem;\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    font-size: 0.95rem;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.6rem;\n    margin-top: 1rem;\n  }\n  .mobile-user-card {\n    display: flex;\n    align-items: center;\n    gap: 0.875rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 0.875rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-user-card:active {\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  }\n  .mobile-card-avatar {\n    width: 2.75rem;\n    height: 2.75rem;\n    min-width: 2.75rem;\n    min-height: 2.75rem;\n    border-radius: 50%;\n    background:\n      linear-gradient(\n        135deg,\n        var(--mobile-primary) 0%,\n        #7c8aff 100%);\n    color: #fff;\n    font-size: 0.8rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-name {\n    font-size: 1rem;\n    font-weight: 600;\n    color: var(--mobile-text);\n    line-height: 1.3;\n  }\n  .mobile-card-meta {\n    font-size: 0.85rem;\n    color: var(--mobile-muted);\n    margin-top: 0.2rem;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-top: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .mobile-card-actions .p-button {\n    width: 2rem;\n    height: 2rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.75rem;\n    padding: 0.2rem 0.5rem;\n    border-radius: 999px;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: var(--mobile-card);\n    border: 1px dashed var(--mobile-border);\n    border-radius: 0.875rem;\n    padding: 1.5rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.5rem;\n  }\n  .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    font-weight: 600;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=prestateurs-liste.css.map */\n"] }]
  }], () => [{ type: PrestataireService }, { type: Router }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestateursListe, { className: "PrestateursListe", filePath: "src/app/pages/contacts/prestateurs/prestateurs-liste/prestateurs-liste.ts", lineNumber: 46 });
})();

// src/app/models/prestataire.model.ts
var PRESTATAIRE_TYPES = [
  { value: "machiniste", label: "Machiniste" },
  { value: "mecanicien", label: "M\xE9canicien" },
  { value: "consultant", label: "Consultant" },
  { value: "fournisseur", label: "Fournisseur" }
];

// src/app/pages/contacts/prestateurs/prestateurs-from/prestateurs-from.ts
function PrestateursFrom_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_small_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Type obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_17_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Raison sociale obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 32);
    \u0275\u0275text(2, " Raison sociale ");
    \u0275\u0275template(3, PrestateursFrom_div_17_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_div_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.raison_sociale, $event) || (ctx_r1.model.raison_sociale = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestateursFrom_div_17_small_5_Template, 2, 0, "small", 10);
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
function PrestateursFrom_div_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_18_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 34);
    \u0275\u0275text(2, " Nom ");
    \u0275\u0275template(3, PrestateursFrom_div_18_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_div_18_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.nom, $event) || (ctx_r1.model.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestateursFrom_div_18_small_5_Template, 2, 0, "small", 10);
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
function PrestateursFrom_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_19_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Pr\xE9nom obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "label", 36);
    \u0275\u0275text(2, " Pr\xE9nom ");
    \u0275\u0275template(3, PrestateursFrom_div_19_span_3_Template, 2, 0, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_div_19_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.prenom, $event) || (ctx_r1.model.prenom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PrestateursFrom_div_19_small_5_Template, 2, 0, "small", 10);
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
function PrestateursFrom_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r5.flag, \u0275\u0275sanitizeUrl)("alt", country_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r5.name);
  }
}
function PrestateursFrom_ng_template_28_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", country_r6.flag, \u0275\u0275sanitizeUrl)("alt", country_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r6.dialCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r6.name);
  }
}
function PrestateursFrom_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PrestateursFrom_ng_template_28_div_0_Template, 6, 4, "div", 41);
  }
  if (rf & 2) {
    const country_r6 = ctx.$implicit;
    \u0275\u0275property("ngIf", country_r6);
  }
}
function PrestateursFrom_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_small_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, " T\xE9l\xE9phone obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.phoneError, " ");
  }
}
function PrestateursFrom_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Ville obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 31);
    \u0275\u0275text(1, " Quartier obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function PrestateursFrom_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function PrestateursFrom_div_48_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 45);
    \u0275\u0275listener("click", function PrestateursFrom_div_48_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r1.mode === "create" ? "Enregistrer" : "Sauvegarder")("loading", ctx_r1.loading)("disabled", !ctx_r1.isValid() || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var PrestateursFrom = class _PrestateursFrom {
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
  // Validation du téléphone
  phoneError = null;
  phoneCountry = "GN";
  // Guinée par défaut
  // Liste des pays pour le sélecteur
  countries = COUNTRIES;
  ngOnInit() {
    this.type_piece_identite = [
      { name: "Carte d'identit\xE9", code: "CI" },
      { name: "Passport", code: "PASSPORT" },
      { name: "Permis de conduire", code: "PERMIS" }
    ];
    this.initializeModel();
  }
  ngOnChanges(changes) {
    if (changes["initialData"]) {
      const change = changes["initialData"];
      if (change.currentValue && Object.keys(change.currentValue).length > 0) {
        console.log("NgOnChanges - Nouvelles donn\xE9es:", change.currentValue);
        this.initializeModel();
      }
    }
  }
  initializeModel() {
    console.log("InitializeModel appel\xE9 avec:", this.initialData);
    this.model = this.initialData ? __spreadValues({}, this.initialData) : {};
    if (this.mode === "create" && !this.model.ville?.trim()) {
      this.model.ville = "Conakry";
    }
    console.log("Model apr\xE8s initialisation:", this.model);
    if (this.mode === "create") {
      this.isEditing = true;
    } else if (this.mode === "edit" && this.initialData) {
      this.isEditing = true;
    }
    if (this.model.code_pays) {
      this.phoneCountry = this.model.code_pays;
      console.log("Pays d\xE9tect\xE9 depuis code_pays:", this.phoneCountry);
    } else if (this.model.phone) {
      this.detectPhoneCountry(this.model.phone);
      console.log("Pays d\xE9tect\xE9 depuis phone:", this.phoneCountry);
    }
    this.submitted = false;
    this.phoneError = null;
  }
  // Détecter le pays depuis le numéro de téléphone
  detectPhoneCountry(phone) {
    try {
      const phoneNumber = parsePhoneNumberWithError(phone);
      if (phoneNumber && phoneNumber.country) {
        this.phoneCountry = phoneNumber.country;
      }
    } catch (error) {
    }
  }
  // Valider le numéro de téléphone
  validatePhone() {
    if (!this.model.phone?.trim()) {
      this.phoneError = "T\xE9l\xE9phone obligatoire.";
      return false;
    }
    try {
      const isValid = isValidPhoneNumber(this.model.phone, this.phoneCountry);
      if (!isValid) {
        this.phoneError = `Num\xE9ro invalide pour ${this.getCountryName(this.phoneCountry)}.`;
        return false;
      }
      const phoneNumber = parsePhoneNumberWithError(this.model.phone, this.phoneCountry);
      if (phoneNumber) {
        this.model.phone = phoneNumber.formatInternational();
        this.model.code_pays = this.phoneCountry;
        this.model.pays = this.getCountryName(this.phoneCountry);
        this.phoneError = null;
        return true;
      }
      this.phoneError = "Format de num\xE9ro invalide.";
      return false;
    } catch (error) {
      this.phoneError = "Format de num\xE9ro invalide.";
      return false;
    }
  }
  // Obtenir le nom du pays
  getCountryName(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.name : code;
  }
  // Obtenir l'indicatif du pays sélectionné
  getSelectedCountryDialCode() {
    const country = this.countries.find((c) => c.code === this.phoneCountry);
    return country ? country.dialCode : "";
  }
  // Obtenir le drapeau du pays
  getCountryFlag(code) {
    const country = this.countries.find((c) => c.code === code);
    return country ? country.flag : "";
  }
  // Événement déclenché lors du changement de pays
  onCountryChange() {
    if (this.model.phone) {
      this.validatePhone();
    }
  }
  // Événement déclenché lors de la saisie du téléphone
  onPhoneInput() {
    if (this.submitted) {
      this.validatePhone();
    }
  }
  // Événement déclenché lors de la perte de focus du champ téléphone
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
  }
  onSubmit() {
    this.submitted = true;
    if (!this.isValid()) {
      return;
    }
    this.submitForm.emit(__spreadValues({}, this.model));
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
    const reference = this.model.reference?.trim();
    return reference ? `Modification prestataire` : "Modification prestataire";
  }
  static \u0275fac = function PrestateursFrom_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestateursFrom)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestateursFrom, selectors: [["app-prestateurs-from"]], inputs: { mode: "mode", initialData: "initialData", loading: "loading" }, outputs: { submitForm: "submitForm", cancel: "cancel" }, features: [\u0275\u0275NgOnChangesFeature], decls: 49, vars: 31, consts: [[1, "card"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal", "mr-4"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12", "md:col-span-12"], ["for", "type", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["class", "text-red-500", 4, "ngIf"], ["id", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "ngModel", "options", "disabled", "invalid"], ["class", "mb-6 col-span-12 md:col-span-12", 4, "ngIf"], ["class", "mb-6 col-span-12 md:col-span-6", 4, "ngIf"], [1, "mb-6", "col-span-12"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "md:col-span-4"], ["for", "codePays", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "codePays", "optionLabel", "name", "optionValue", "code", "placeholder", "S\xE9lectionner un pays", "fluid", "", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [1, "col-span-12", "md:col-span-8"], ["for", "phone", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-3", "block"], ["id", "phone", "type", "tel", "pInputText", "", "fluid", "", "placeholder", "Exemple: 622 00 00 00", 3, "ngModelChange", "input", "blur", "ngModel", "invalid", "disabled"], ["class", "text-red-500 block mt-2", 4, "ngIf"], [1, "mb-6", "col-span-12", "md:col-span-6"], ["for", "ville", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "ville", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "quartier", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "quartier", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["class", "col-span-12 flex gap-2", 4, "ngIf"], [1, "text-red-500"], ["for", "raison_sociale", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "raison_sociale", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "nom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], ["for", "prenom", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "prenom", "type", "text", "pInputText", "", "fluid", "", 3, "ngModelChange", "ngModel", "invalid", "disabled"], [1, "flex", "items-center", "gap-2"], [1, "w-5", "h-auto", "rounded-sm", 3, "src", "alt"], [1, "font-semibold", "text-primary"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "text-red-500", "block", "mt-2"], [1, "col-span-12", "flex", "gap-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "w-auto", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "w-auto", 3, "click", "disabled"]], template: function PrestateursFrom_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275element(6, "div", 5);
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, " Les champs s'affiche en fonctin du type de prestateur. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, " Type de prestataire ");
      \u0275\u0275template(14, PrestateursFrom_span_14_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_Template_p_select_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.type, $event) || (ctx.model.type = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, PrestateursFrom_small_16_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, PrestateursFrom_div_17_Template, 6, 5, "div", 12)(18, PrestateursFrom_div_18_Template, 6, 5, "div", 13)(19, PrestateursFrom_div_19_Template, 6, 5, "div", 13);
      \u0275\u0275elementStart(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "label", 17);
      \u0275\u0275text(24, " Pays ");
      \u0275\u0275template(25, PrestateursFrom_span_25_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-select", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_Template_p_select_ngModelChange_26_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneCountry, $event) || (ctx.phoneCountry = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function PrestateursFrom_Template_p_select_onChange_26_listener() {
        return ctx.onCountryChange();
      });
      \u0275\u0275template(27, PrestateursFrom_ng_template_27_Template, 6, 4, "ng-template", 19)(28, PrestateursFrom_ng_template_28_Template, 1, 1, "ng-template", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 21)(30, "label", 22);
      \u0275\u0275text(31, " T\xE9l\xE9phone ");
      \u0275\u0275template(32, PrestateursFrom_span_32_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
        return $event;
      });
      \u0275\u0275listener("input", function PrestateursFrom_Template_input_input_33_listener() {
        return ctx.onPhoneInput();
      })("blur", function PrestateursFrom_Template_input_blur_33_listener() {
        return ctx.onPhoneBlur();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, PrestateursFrom_small_34_Template, 2, 0, "small", 24)(35, PrestateursFrom_small_35_Template, 2, 1, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 25)(37, "label", 26);
      \u0275\u0275text(38, " Ville ");
      \u0275\u0275template(39, PrestateursFrom_span_39_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "input", 27);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_Template_input_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.ville, $event) || (ctx.model.ville = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, PrestateursFrom_small_41_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 25)(43, "label", 28);
      \u0275\u0275text(44, " Quartier ");
      \u0275\u0275template(45, PrestateursFrom_span_45_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function PrestateursFrom_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.model.quartier, $event) || (ctx.model.quartier = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, PrestateursFrom_small_47_Template, 2, 0, "small", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, PrestateursFrom_div_48_Template, 3, 4, "div", 30);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.formTitle, " ");
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
  }, dependencies: [
    CommonModule,
    NgIf,
    Select,
    InputText,
    TextareaModule,
    FileUploadModule,
    PrimeTemplate,
    ButtonModule,
    ButtonDirective,
    InputGroupModule,
    RippleModule,
    Ripple,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestateursFrom, [{
    type: Component,
    args: [{ selector: "app-prestateurs-from", standalone: true, imports: [
      CommonModule,
      Select,
      InputText,
      TextareaModule,
      FileUploadModule,
      InputGroupAddon,
      ButtonModule,
      InputGroupModule,
      RippleModule,
      FormsModule
    ], template: `<div class="card">\r
  <div class="flex justify-between items-center mb-6">\r
    <span class="text-surface-900 dark:text-surface-0 text-xl font-bold">\r
      {{ formTitle }}\r
    </span>\r
  </div>\r
  \r
  <div class="grid grid-cols-12 gap-4">\r
    <div class="col-span-12 lg:col-span-2">\r
      <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">\r
        <!-- Prestateur -->\r
      </div>\r
      <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">\r
       Les champs s'affiche en fonctin du type de prestateur.\r
      </p>\r
    </div>\r
\r
    <div class="col-span-12 lg:col-span-10">\r
      <div class="grid grid-cols-12 gap-4">\r
        <!-- Type de prestataire -->\r
        <div class="mb-6 col-span-12 md:col-span-12">\r
          <label for="type" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Type de prestataire <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <p-select\r
            id="type"\r
            [(ngModel)]="model.type"\r
            [options]="prestataireTypes"\r
            optionLabel="label"\r
            optionValue="value"\r
            placeholder="S\xE9lectionner un type"\r
            [disabled]="fieldsDisabled"\r
            [invalid]="submitted && !model.type"\r
            fluid\r
          ></p-select>\r
          <small class="text-red-500" *ngIf="submitted && !model.type && isEditing">\r
            Type obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Raison sociale (visible uniquement pour fournisseur) -->\r
        <div class="mb-6 col-span-12 md:col-span-12" *ngIf="model.type === 'fournisseur'">\r
          <label for="raison_sociale" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Raison sociale <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="raison_sociale"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.raison_sociale"\r
            [invalid]="submitted && !model.raison_sociale?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.raison_sociale?.trim() && isEditing">\r
            Raison sociale obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Nom (masqu\xE9 pour fournisseur) -->\r
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="model.type !== 'fournisseur'">\r
          <label for="nom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Nom <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="nom"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.nom"\r
            [invalid]="submitted && !model.nom?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.nom?.trim() && isEditing">\r
            Nom obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Pr\xE9nom (masqu\xE9 pour fournisseur) -->\r
        <div class="mb-6 col-span-12 md:col-span-6" *ngIf="model.type !== 'fournisseur'">\r
          <label for="prenom" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Pr\xE9nom <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="prenom"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.prenom"\r
            [invalid]="submitted && !model.prenom?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.prenom?.trim() && isEditing">\r
            Pr\xE9nom obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- T\xE9l\xE9phone avec s\xE9lecteur de pays -->\r
        <div class="mb-6 col-span-12">\r
          <!-- <label class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">\r
            T\xE9l\xE9phone <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label> -->\r
          \r
          <div class="grid grid-cols-12 gap-3">\r
            <!-- S\xE9lecteur de pays -->\r
            <div class="col-span-12 md:col-span-4">\r
              <label for="codePays" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">\r
                Pays <span class="text-red-500" *ngIf="isEditing">*</span>\r
              </label>\r
              <p-select\r
                id="codePays"\r
                [(ngModel)]="phoneCountry"\r
                [options]="countries"\r
                optionLabel="name"\r
                optionValue="code"\r
                placeholder="S\xE9lectionner un pays"\r
                [disabled]="fieldsDisabled"\r
                (onChange)="onCountryChange()"\r
                fluid\r
              >\r
                <ng-template let-country pTemplate="item">\r
                  <div class="flex items-center gap-2">\r
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />\r
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>\r
                    <span>{{ country.name }}</span>\r
                  </div>\r
                </ng-template>\r
                <ng-template let-country pTemplate="selectedItem">\r
                  <div class="flex items-center gap-2" *ngIf="country">\r
                    <img [src]="country.flag" [alt]="country.name" class="w-5 h-auto rounded-sm" />\r
                    <span class="font-semibold text-primary">{{ country.dialCode }}</span>\r
                    <span>{{ country.name }}</span>\r
                  </div>\r
                </ng-template>\r
              </p-select>\r
            </div>\r
\r
            <!-- Champ t\xE9l\xE9phone -->\r
            <div class="col-span-12 md:col-span-8">\r
              <label for="phone" class="font-medium text-surface-900 dark:text-surface-0 mb-3 block">\r
                T\xE9l\xE9phone <span class="text-red-500" *ngIf="isEditing">*</span>\r
              </label>\r
              <input\r
                id="phone"\r
                type="tel"\r
                pInputText\r
                fluid\r
                [(ngModel)]="model.phone"\r
                [invalid]="(submitted || phoneError) && (!model.phone?.trim() || !!phoneError)"\r
                [disabled]="fieldsDisabled"\r
                (input)="onPhoneInput()"\r
                (blur)="onPhoneBlur()"\r
                placeholder="Exemple: 622 00 00 00"\r
              />\r
            </div>\r
          </div>\r
\r
          <!-- Messages d'erreur pour le t\xE9l\xE9phone -->\r
          <small class="text-red-500 block mt-2" *ngIf="submitted && !model.phone?.trim() && isEditing">\r
            T\xE9l\xE9phone obligatoire.\r
          </small>\r
          <small class="text-red-500 block mt-2" *ngIf="phoneError && model.phone?.trim() && isEditing">\r
            {{ phoneError }}\r
          </small>\r
          \r
          <!-- Indication du format attendu -->\r
          <!-- <small class="text-surface-500 dark:text-surface-400 block mt-2" *ngIf="isEditing && !phoneError && !fieldsDisabled">\r
            Format: {{ getCountryName(phoneCountry) }} ({{ getSelectedCountryDialCode() }})\r
          </small> -->\r
        </div>\r
\r
        <!-- Ville -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="ville" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Ville <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="ville"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.ville"\r
            [invalid]="submitted && !model.ville?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.ville?.trim() && isEditing">\r
            Ville obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Quartier -->\r
        <div class="mb-6 col-span-12 md:col-span-6">\r
          <label for="quartier" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">\r
            Quartier <span class="text-red-500" *ngIf="isEditing">*</span>\r
          </label>\r
          <input\r
            id="quartier"\r
            type="text"\r
            pInputText\r
            fluid\r
            [(ngModel)]="model.quartier"\r
            [invalid]="submitted && !model.quartier?.trim()"\r
            [disabled]="fieldsDisabled"\r
          />\r
          <small class="text-red-500" *ngIf="submitted && !model.quartier?.trim() && isEditing">\r
            Quartier obligatoire.\r
          </small>\r
        </div>\r
\r
        <!-- Boutons -->\r
        <div class="col-span-12 flex gap-2" *ngIf="isEditing">\r
          <button\r
            pButton\r
            pRipple\r
            [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"\r
            icon="pi pi-check"\r
            (click)="onSubmit()"\r
            [loading]="loading"\r
            [disabled]="!isValid() || loading"\r
            class="w-auto"\r
          ></button>\r
          \r
          <button\r
            pButton\r
            pRipple\r
            label="Annuler"\r
            icon="pi pi-times"\r
            severity="secondary"\r
            (click)="onCancel()"\r
            [disabled]="loading"\r
            class="w-auto"\r
          ></button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestateursFrom, { className: "PrestateursFrom", filePath: "src/app/pages/contacts/prestateurs/prestateurs-from/prestateurs-from.ts", lineNumber: 34 });
})();

// src/app/pages/contacts/prestateurs/prestateurs-new/prestateurs-new.ts
var PrestateursNew = class _PrestateursNew {
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
    this.router.navigate(["contacts/prestateurs"]);
  }
  onSubmit(data) {
    this.loading = true;
    const payload = {
      nom: data.nom || "",
      prenom: data.prenom || "",
      phone: data.phone || "",
      pays: data.pays || "Guin\xE9e",
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
            summary: "Succ\xE8s",
            detail: "Prestataire cr\xE9\xE9 avec succ\xE8s"
          });
          setTimeout(() => {
            this.router.navigate(["contacts/prestateurs"]);
          }, 1500);
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la cr\xE9ation:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error.error?.message || "Erreur lors de la cr\xE9ation du prestataire"
        });
        this.loading = false;
      }
    });
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
  static \u0275fac = function PrestateursNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestateursNew)(\u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestateursNew, selectors: [["app-prestateurs-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 2, consts: [[3, "submitForm", "cancel", "mode", "loading"]], template: function PrestateursNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-prestateurs-from", 0);
      \u0275\u0275listener("submitForm", function PrestateursNew_Template_app_prestateurs_from_submitForm_1_listener($event) {
        return ctx.onSubmit($event);
      })("cancel", function PrestateursNew_Template_app_prestateurs_from_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("mode", "create")("loading", ctx.loading);
    }
  }, dependencies: [CommonModule, PrestateursFrom, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestateursNew, [{
    type: Component,
    args: [{ selector: "app-prestateurs-new", standalone: true, imports: [CommonModule, PrestateursFrom, ToastModule], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<app-prestateurs-from\r
  [mode]="'create'"\r
  [loading]="loading"\r
  (submitForm)="onSubmit($event)"\r
  (cancel)="onCancel()"\r
></app-prestateurs-from>` }]
  }], () => [{ type: PrestataireService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestateursNew, { className: "PrestateursNew", filePath: "src/app/pages/contacts/prestateurs/prestateurs-new/prestateurs-new.ts", lineNumber: 18 });
})();

// src/app/pages/contacts/prestateurs/prestateurs-edit/prestateurs-edit.ts
function PrestateursEdit_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function PrestateursEdit_app_prestateurs_from_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-prestateurs-from", 11);
    \u0275\u0275listener("submitForm", function PrestateursEdit_app_prestateurs_from_10_Template_app_prestateurs_from_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit($event));
    })("cancel", function PrestateursEdit_app_prestateurs_from_10_Template_app_prestateurs_from_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("mode", "edit")("initialData", ctx_r1.prestateursData)("loading", ctx_r1.loading);
  }
}
var PrestateursEdit = class _PrestateursEdit {
  route;
  router;
  prestataireService;
  messageService;
  loading = false;
  prestateurId = null;
  prestateursData = null;
  constructor(route, router, prestataireService, messageService) {
    this.route = route;
    this.router = router;
    this.prestataireService = prestataireService;
    this.messageService = messageService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.prestateurId = parseInt(id, 10);
      this.loadPrestataire(this.prestateurId);
    }
  }
  loadPrestataire(id) {
    this.loading = true;
    this.prestataireService.getPrestataire(id).subscribe({
      next: (response) => {
        if (response.success && response.data) {
          const prestataire = response.data;
          this.prestateursData = {
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
    if (!this.prestateurId)
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
    this.prestataireService.updatePrestataire(this.prestateurId, payload).subscribe({
      next: (response) => {
        if (response.success) {
          this.prestateursData = __spreadProps(__spreadValues({}, data), {
            reference: data.reference || this.prestateursData?.reference
          });
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Prestataire modifi\xE9 avec succ\xE8s"
          });
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("Erreur lors de la modification:", error);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: error.error?.message || "Erreur lors de la modification du prestataire"
        });
        this.loading = false;
      }
    });
  }
  onCancel() {
    this.router.navigate(["contacts/prestateurs"]);
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
  static \u0275fac = function PrestateursEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrestateursEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PrestataireService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrestateursEdit, selectors: [["app-prestateurs-edit"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 11, vars: 2, consts: [[1, "edit-page"], [1, "edit-mobile-header"], ["type", "button", "aria-label", "Retour \xE0 la liste", 1, "edit-back", 3, "click"], [1, "pi", "pi-arrow-left"], [1, "edit-title"], [1, "edit-header-spacer"], [1, "edit-content"], ["class", "flex justify-center items-center h-96", 4, "ngIf"], [3, "mode", "initialData", "loading", "submitForm", "cancel", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "h-96"], [1, "pi", "pi-spin", "pi-spinner", "text-4xl", "text-primary"], [3, "submitForm", "cancel", "mode", "initialData", "loading"]], template: function PrestateursEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "header", 1)(3, "button", 2);
      \u0275\u0275listener("click", function PrestateursEdit_Template_button_click_3_listener() {
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
      \u0275\u0275template(9, PrestateursEdit_div_9_Template, 2, 0, "div", 7)(10, PrestateursEdit_app_prestateurs_from_10_Template, 1, 3, "app-prestateurs-from", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.loading && !ctx.prestateursData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.prestateursData);
    }
  }, dependencies: [CommonModule, NgIf, PrestateursFrom, ToastModule, Toast], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.edit-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.edit-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .edit-title[_ngcontent-%COMP%] {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n  }\n  .edit-header-spacer[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=prestateurs-edit.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrestateursEdit, [{
    type: Component,
    args: [{ selector: "app-prestateurs-edit", standalone: true, imports: [CommonModule, PrestateursFrom, ToastModule], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<div class="edit-page">\r
  <header class="edit-mobile-header">\r
    <button\r
      type="button"\r
      class="edit-back"\r
      aria-label="Retour \xE0 la liste"\r
      (click)="onCancel()"\r
    >\r
      <i class="pi pi-arrow-left"></i>\r
    </button>\r
    <h1 class="edit-title">Modifier le prestataire</h1>\r
    <span class="edit-header-spacer"></span>\r
  </header>\r
\r
  <div class="edit-content">\r
    <div *ngIf="loading && !prestateursData" class="flex justify-center items-center h-96">\r
      <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>\r
    </div>\r
\r
    <app-prestateurs-from\r
      *ngIf="prestateursData"\r
      [mode]="'edit'"\r
      [initialData]="prestateursData"\r
      [loading]="loading"\r
      (submitForm)="onSubmit($event)"\r
      (cancel)="onCancel()"\r
    ></app-prestateurs-from>\r
  </div>\r
</div>`, styles: ["/* src/app/pages/contacts/prestateurs/prestateurs-edit/prestateurs-edit.scss */\n:host {\n  display: block;\n}\n.edit-mobile-header {\n  display: none;\n}\n.edit-content {\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .edit-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem calc(-0.875rem - env(safe-area-inset-bottom));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    padding: 0;\n    padding-left: env(safe-area-inset-left);\n    padding-right: env(safe-area-inset-right);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n  .edit-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) 0.75rem 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--surface-card);\n    border-bottom: 1px solid var(--surface-border);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .edit-back {\n    width: 2.25rem;\n    height: 2.25rem;\n    min-width: 2.25rem;\n    border: none;\n    border-radius: 50%;\n    background: var(--p-primary-50);\n    color: var(--p-primary-500);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .edit-back .pi {\n    font-size: 1.1rem;\n  }\n  .edit-title {\n    flex: 1;\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: var(--text-color);\n    min-width: 0;\n  }\n  .edit-header-spacer {\n    width: 2.25rem;\n    min-width: 2.25rem;\n  }\n  .edit-content {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.875rem;\n    padding-bottom: calc(1rem + env(safe-area-inset-bottom));\n  }\n}\n/*# sourceMappingURL=prestateurs-edit.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: PrestataireService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrestateursEdit, { className: "PrestateursEdit", filePath: "src/app/pages/contacts/prestateurs/prestateurs-edit/prestateurs-edit.ts", lineNumber: 18 });
})();

// src/app/pages/contacts/prestateurs/prestateurs.routes.ts
var prestateurs_routes_default = [
  {
    path: "",
    component: PrestateursListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["prestataires.read"] }
  },
  {
    path: "prestateurs",
    component: PrestateursListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["prestataires.read"] }
  },
  {
    path: "new",
    component: PrestateursNew,
    canActivate: [authorizationGuard],
    data: { permissions: ["prestataires.create"] }
  },
  {
    path: "edit/:id",
    component: PrestateursEdit,
    canActivate: [authorizationGuard],
    data: { permissions: ["prestataires.update"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  prestateurs_routes_default as default
};
//# sourceMappingURL=chunk-XLDRVCGQ.js.map
