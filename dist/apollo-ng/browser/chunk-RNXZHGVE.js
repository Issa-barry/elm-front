import {
  EditorModule
} from "./chunk-7JELPVHZ.js";
import {
  ChipModule
} from "./chunk-MFFJ5EWO.js";
import {
  PRODUIT_STATUT_LABELS,
  PRODUIT_STATUT_SEVERITY,
  PRODUIT_TYPE_LABELS,
  Produit,
  ProduitService
} from "./chunk-F3FOOK4K.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-TULSERSG.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-3JNHDKKE.js";
import {
  ToolbarModule
} from "./chunk-6GYYIEGB.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-ZXKHRY7Z.js";
import "./chunk-BG5CWEYG.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-BGW6FHYT.js";
import "./chunk-ICSAYYTT.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-SXJWVAEX.js";
import {
  Dialog,
  DialogModule
} from "./chunk-V3RXVO6V.js";
import {
  authorizationGuard
} from "./chunk-FJO2OT2O.js";
import "./chunk-H7UPSY5A.js";
import {
  Toast,
  ToastModule
} from "./chunk-TMFAAIZM.js";
import "./chunk-CZYEBXKQ.js";
import {
  AuthService
} from "./chunk-JKMJDVN5.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-5M76Y6O2.js";
import "./chunk-B555S3BB.js";
import {
  UsineContextService
} from "./chunk-J6EUYIEM.js";
import "./chunk-CSVYKJ4F.js";
import {
  SortIcon,
  SortableColumn,
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
import "./chunk-25MJSVSI.js";
import "./chunk-QBTCSFIV.js";
import "./chunk-QRW46MGS.js";
import "./chunk-OWOPR7KK.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-LPYK5F7X.js";
import "./chunk-T2TIS5GO.js";
import "./chunk-YTLGTLNQ.js";
import "./chunk-PTG476NB.js";
import "./chunk-OP4G3N4V.js";
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
  NgModel,
  RequiredValidator
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
import {
  Ripple,
  RippleModule
} from "./chunk-SCR42GDN.js";
import {
  Fluid,
  FluidModule
} from "./chunk-CBEWEUNZ.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-AGBUVBVL.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-T6X6TYBW.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  Subject,
  ViewChild,
  ViewChildren,
  debounceTime,
  distinctUntilChanged,
  effect,
  forkJoin,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-HXF2V74O.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/pages/produits/produits-liste/produits-liste.ts
var _c0 = ["dt"];
var _c1 = () => ({ "min-width": "75rem" });
var _c2 = () => [10, 20, 30];
var _c3 = () => ({ width: "420px", maxWidth: "95vw" });
var _c4 = () => ({ width: "720px", maxWidth: "95vw" });
var _c5 = () => ({ width: "450px" });
var _c6 = () => ({ showDelay: 800 });
function ProduitsListe_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activeFiltersCount);
  }
}
function ProduitsListe_section_19_article_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 58);
  }
  if (rf & 2) {
    const produit_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", produit_r4.getImageUrl(), \u0275\u0275sanitizeUrl)("alt", produit_r4.nom);
  }
}
function ProduitsListe_section_19_article_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_section_19_article_1_p_tag_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 61);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function ProduitsListe_section_19_article_1_p_tag_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 62);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function ProduitsListe_section_19_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 41);
    \u0275\u0275listener("click", function ProduitsListe_section_19_article_1_Template_article_click_0_listener($event) {
      const produit_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProduitPrimaryAction($event, produit_r4));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275template(2, ProduitsListe_section_19_article_1_img_2_Template, 1, 2, "img", 43)(3, ProduitsListe_section_19_article_1_div_3_Template, 2, 0, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "div", 46)(6, "div", 47)(7, "div", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 50);
    \u0275\u0275element(12, "p-tag", 51);
    \u0275\u0275template(13, ProduitsListe_section_19_article_1_p_tag_13_Template, 1, 1, "p-tag", 52)(14, ProduitsListe_section_19_article_1_p_tag_14_Template, 1, 1, "p-tag", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 54)(16, "span", 55);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 56)(19, "button", 57);
    \u0275\u0275listener("click", function ProduitsListe_section_19_article_1_Template_button_click_19_listener($event) {
      const produit_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProduitPrimaryAction($event, produit_r4));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const produit_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", produit_r4.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !produit_r4.image_url);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(produit_r4.code || "Sans code");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatutLabel(produit_r4.statut))("severity", ctx_r1.getStatutSeverity(produit_r4.statut));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", produit_r4.is_global);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowCritiqueAlert(produit_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", produit_r4.qte_stock, " en stock \xB7 ", ctx_r1.formatCurrency(produit_r4.prix_vente));
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.needsStockOnlyAction(produit_r4) ? "pi pi-box" : "pi pi-chevron-right")("pTooltip", ctx_r1.getPrimaryActionTooltip(produit_r4))("disabled", !ctx_r1.canEditDefinition(produit_r4) && !ctx_r1.needsStockOnlyAction(produit_r4));
  }
}
function ProduitsListe_section_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 39);
    \u0275\u0275template(1, ProduitsListe_section_19_article_1_Template, 20, 13, "article", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.mobileVisibleProduits)("ngForTrackBy", ctx_r1.trackByProduitId);
  }
}
function ProduitsListe_ng_template_20_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1, "Chargement des produits...");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Aucun produit", ctx_r1.activeFiltersCount > 0 ? " pour ces filtres" : " trouv\xE9", ". ");
  }
}
function ProduitsListe_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProduitsListe_ng_template_20_div_0_Template, 2, 0, "div", 63)(1, ProduitsListe_ng_template_20_div_1_Template, 3, 1, "div", 63);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && !ctx_r1.produits.length);
  }
}
function ProduitsListe_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "p-button", 67);
    \u0275\u0275listener("onClick", function ProduitsListe_div_22_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMoreMobile());
    });
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ProduitsListe_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNewProduits());
    });
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275elementStart(2, "span", 70);
    \u0275\u0275text(3, "Nouveau produit");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "p-button", 72);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_39_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetMobileFiltersTemp());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 73);
    \u0275\u0275listener("onClick", function ProduitsListe_ng_template_39_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyMobileFilters());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function ProduitsListe_ng_template_44_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.produits.length, " r\xE9sultat", ctx_r1.produits.length > 1 ? "s" : "", " ");
  }
}
function ProduitsListe_ng_template_44_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_44_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToNewProduits());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "p-iconfield", 75);
    \u0275\u0275element(2, "p-inputicon", 17);
    \u0275\u0275elementStart(3, "input", 76);
    \u0275\u0275listener("input", function ProduitsListe_ng_template_44_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      const dt_r9 = \u0275\u0275reference(43);
      return \u0275\u0275resetView(ctx_r1.onGlobalFilter(dt_r9, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 77)(5, "p-select", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_44_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterStatut, $event) || (ctx_r1.filterStatut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ProduitsListe_ng_template_44_Template_p_select_onChange_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDesktopFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_44_Template_p_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterType, $event) || (ctx_r1.filterType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ProduitsListe_ng_template_44_Template_p_select_onChange_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDesktopFilterChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProduitsListe_ng_template_44_span_7_Template, 2, 2, "span", 80)(8, ProduitsListe_ng_template_44_button_8_Template, 1, 0, "button", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterStatut);
    \u0275\u0275property("options", ctx_r1.statutOptions)("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterType);
    \u0275\u0275property("options", ctx_r1.typeOptions)("showClear", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canCreate);
  }
}
function ProduitsListe_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 84);
    \u0275\u0275text(2, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 85)(4, "span", 86);
    \u0275\u0275text(5, "Code ");
    \u0275\u0275element(6, "p-sortIcon", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "th", 88)(8, "span", 86);
    \u0275\u0275text(9, "Nom ");
    \u0275\u0275element(10, "p-sortIcon", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "th", 90)(12, "span", 86);
    \u0275\u0275text(13, "Type ");
    \u0275\u0275element(14, "p-sortIcon", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "th", 92)(16, "span", 86);
    \u0275\u0275text(17, "Qt\xE9 ");
    \u0275\u0275element(18, "p-sortIcon", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 94)(20, "span", 86);
    \u0275\u0275text(21, "Status ");
    \u0275\u0275element(22, "p-sortIcon", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "th", 96);
    \u0275\u0275text(24, "Action");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsListe_ng_template_48_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 107);
  }
  if (rf & 2) {
    const produit_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", produit_r12.getImageUrl(), \u0275\u0275sanitizeUrl)("alt", produit_r12.nom);
  }
}
function ProduitsListe_ng_template_48_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 108);
  }
}
function ProduitsListe_ng_template_48_p_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 109);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function ProduitsListe_ng_template_48_p_tag_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 110);
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true);
  }
}
function ProduitsListe_ng_template_48_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_48_button_18_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const produit_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToEditProduit($event, produit_r12.id, produit_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const produit_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", ctx_r1.getDefinitionActionTooltip(produit_r12));
  }
}
function ProduitsListe_ng_template_48_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_48_button_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const produit_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openStockDialog($event, produit_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const produit_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", ctx_r1.getPrimaryActionTooltip(produit_r12));
  }
}
function ProduitsListe_ng_template_48_p_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 113);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_48_p_button_20_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const produit_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteProduct(produit_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rounded", true)("outlined", true);
  }
}
function ProduitsListe_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 97);
    \u0275\u0275listener("dblclick", function ProduitsListe_ng_template_48_Template_tr_dblclick_0_listener($event) {
      const produit_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRowDblClick($event, produit_r12));
    });
    \u0275\u0275elementStart(1, "td", 84);
    \u0275\u0275template(2, ProduitsListe_ng_template_48_img_2_Template, 1, 2, "img", 98)(3, ProduitsListe_ng_template_48_i_3_Template, 1, 0, "i", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 100)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProduitsListe_ng_template_48_p_tag_9_Template, 1, 1, "p-tag", 101)(10, ProduitsListe_ng_template_48_p_tag_10_Template, 1, 1, "p-tag", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275element(16, "p-tag", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ProduitsListe_ng_template_48_button_18_Template, 1, 1, "button", 104)(19, ProduitsListe_ng_template_48_button_19_Template, 1, 1, "button", 105)(20, ProduitsListe_ng_template_48_p_button_20_Template, 1, 2, "p-button", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const produit_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", ctx_r1.getDefinitionActionTooltip(produit_r12))("tooltipOptions", \u0275\u0275pureFunction0(16, _c6))("tooltipDisabled", !ctx_r1.canEditDefinition(produit_r12));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", produit_r12.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !produit_r12.image_url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r12.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(produit_r12.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", produit_r12.is_global);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.shouldShowCritiqueAlert(produit_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTypeLabel(produit_r12.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(produit_r12.qte_stock);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatutLabel(produit_r12.statut))("severity", ctx_r1.getStatutSeverity(produit_r12.statut));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEditDefinition(produit_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsStockOnlyAction(produit_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canArchiveProduct(produit_r12));
  }
}
function ProduitsListe_ng_template_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 118);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 119);
    \u0275\u0275text(4, "Produit systeme: mise a jour du stock uniquement.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stockProduit.nom);
  }
}
function ProduitsListe_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, ProduitsListe_ng_template_51_div_1_Template, 5, 1, "div", 115);
    \u0275\u0275elementStart(2, "div")(3, "label", 116);
    \u0275\u0275text(4, "Quantite en stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-inputnumber", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_51_Template_p_inputnumber_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockValue, $event) || (ctx_r1.stockValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.stockProduit);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockValue);
    \u0275\u0275property("min", 0)("minFractionDigits", 0)("maxFractionDigits", 0)("useGrouping", false);
  }
}
function ProduitsListe_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 120);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_53_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeStockDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 121);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_53_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveStockUpdate());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.stockDialogSaving);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r1.stockDialogSaving)("disabled", ctx_r1.stockDialogSaving);
  }
}
function ProduitsListe_ng_template_56_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 143)(1, "label", 144);
    \u0275\u0275text(2, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_div_0_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.code, $event) || (ctx_r1.produit.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.code);
    \u0275\u0275property("disabled", true);
  }
}
function ProduitsListe_ng_template_56_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 146);
    \u0275\u0275text(1, "Type obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_56_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 146);
    \u0275\u0275text(1, "Nom obligatoire.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsListe_ng_template_56_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 147);
    \u0275\u0275text(2, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 148);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_div_16_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.statut, $event) || (ctx_r1.produit.statut = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.statut);
    \u0275\u0275property("options", ctx_r1.statutOptions);
  }
}
function ProduitsListe_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ProduitsListe_ng_template_56_div_0_Template, 4, 2, "div", 122);
    \u0275\u0275elementStart(1, "div", 123)(2, "div")(3, "label", 124);
    \u0275\u0275text(4, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-select", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.type, $event) || (ctx_r1.produit.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProduitsListe_ng_template_56_small_6_Template, 2, 0, "small", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "label", 127);
    \u0275\u0275text(9, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.nom, $event) || (ctx_r1.produit.nom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ProduitsListe_ng_template_56_small_11_Template, 2, 0, "small", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "label", 129);
    \u0275\u0275text(14, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.description, $event) || (ctx_r1.produit.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ProduitsListe_ng_template_56_div_16_Template, 4, 2, "div", 115);
    \u0275\u0275elementStart(17, "div", 131)(18, "div", 132)(19, "label", 133);
    \u0275\u0275text(20, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-inputnumber", 134);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_inputnumber_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.qte_stock, $event) || (ctx_r1.produit.qte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 132)(23, "label", 135);
    \u0275\u0275text(24, "Co\xFBt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-inputnumber", 136);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_inputnumber_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.cout, $event) || (ctx_r1.produit.cout = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 131)(27, "div", 132)(28, "label", 137);
    \u0275\u0275text(29, "Prix achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p-inputnumber", 138);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_inputnumber_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.prix_achat, $event) || (ctx_r1.produit.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 132)(32, "label", 139);
    \u0275\u0275text(33, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-inputnumber", 140);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_inputnumber_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.prix_vente, $event) || (ctx_r1.produit.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div")(36, "label", 141);
    \u0275\u0275text(37, "Prix usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p-inputnumber", 142);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_ng_template_56_Template_p_inputnumber_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.produit.prix_usine, $event) || (ctx_r1.produit.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.produit == null ? null : ctx_r1.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.type);
    \u0275\u0275property("options", ctx_r1.typeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !ctx_r1.produit.type);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.nom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && !(ctx_r1.produit.nom == null ? null : ctx_r1.produit.nom.trim()));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.produit == null ? null : ctx_r1.produit.id);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.qte_stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.cout);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.prix_achat);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.prix_vente);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.produit.prix_usine);
  }
}
function ProduitsListe_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 120);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_58_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 149);
    \u0275\u0275listener("click", function ProduitsListe_ng_template_58_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProduit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving)("loading", ctx_r1.saving);
  }
}
var ProduitsListe = class _ProduitsListe {
  router;
  route;
  produitService;
  messageService;
  confirmationService;
  authService;
  usineContext;
  document;
  produits = [];
  produit = new Produit();
  loading = true;
  saving = false;
  stockDialog = false;
  stockDialogSaving = false;
  stockProduit = null;
  stockValue = null;
  filterFields = ["code", "nom", "description", "type", "statut", "qte_stock"];
  produitDialog = false;
  selectedProduits;
  submitted = false;
  typeOptions = [];
  statutOptions = [];
  dt;
  exportColumns;
  cols;
  get canCreate() {
    return this.authService.hasPermission("produits.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("produits.update");
  }
  get canDelete() {
    return this.authService.hasPermission("produits.delete");
  }
  get canManageSystemDefinition() {
    return this.hasSystemDefinitionAccess();
  }
  // Mobile pagination
  mobileSearchTerm = "";
  mobilePageSize = 8;
  mobileVisibleCount = this.mobilePageSize;
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  // ── Filtres actifs ────────────────────────────────────
  filterStatut = null;
  filterType = null;
  filterInStock = null;
  sortBy = "created_at";
  sortOrder = "desc";
  // ── Mobile filter drawer ──────────────────────────────
  mobileFilterVisible = false;
  tempFilterStatut = null;
  tempFilterType = null;
  tempFilterInStock = null;
  destroy$ = new Subject();
  searchSubject = new Subject();
  readyForUsineReload = false;
  constructor(router, route, produitService, messageService, confirmationService, authService, usineContext, document) {
    this.router = router;
    this.route = route;
    this.produitService = produitService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.authService = authService;
    this.usineContext = usineContext;
    this.document = document;
    effect(() => {
      this.usineContext.currentUsineId();
      if (!this.readyForUsineReload)
        return;
      this.loadWithFilters();
    });
  }
  ngOnInit() {
    this.initOptions();
    this.initColumns();
    this.syncMobilePwaMode();
    this.searchSubject.pipe(debounceTime(450), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.resetMobilePagination();
      this.syncUrl();
      this.loadWithFilters();
    });
    const params = this.route.snapshot.queryParams;
    this.filterStatut = params["statut"] || null;
    this.filterType = params["type"] || null;
    this.filterInStock = params["in_stock"] !== void 0 ? params["in_stock"] === "true" : null;
    this.sortBy = params["sort_by"] || "created_at";
    this.sortOrder = params["sort_order"] === "asc" ? "asc" : "desc";
    if (params["search"])
      this.mobileSearchTerm = params["search"];
    this.readyForUsineReload = true;
    this.loadWithFilters();
  }
  ngOnDestroy() {
    this.clearMobilePwaMode();
    this.destroy$.next();
    this.destroy$.complete();
  }
  onWindowResize() {
    this.syncMobilePwaMode();
  }
  // ── Chargement avec filtres ───────────────────────────
  loadWithFilters() {
    this.loading = true;
    const search = this.mobileSearchTerm.trim();
    const hasSearch = !!search;
    const hasFilters = !!(this.filterStatut || this.filterType || this.filterInStock !== null);
    const request$ = hasSearch || hasFilters ? this.produitService.search(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, search && { search }), this.filterStatut && { statut: this.filterStatut }), this.filterType && { type: this.filterType }), this.filterInStock !== null && { in_stock: this.filterInStock }), {
      sort_by: this.sortBy,
      sort_order: this.sortOrder
    })) : this.produitService.getAllFiltered({
      sort_by: this.sortBy,
      sort_order: this.sortOrder
    });
    request$.subscribe({
      next: (produits) => {
        this.produits = produits;
        this.resetMobilePagination();
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "Chargement des produits impossible");
      }
    });
  }
  // ── Sync URL ──────────────────────────────────────────
  syncUrl() {
    const queryParams = {};
    if (this.mobileSearchTerm.trim())
      queryParams["search"] = this.mobileSearchTerm.trim();
    if (this.filterStatut)
      queryParams["statut"] = this.filterStatut;
    if (this.filterType)
      queryParams["type"] = this.filterType;
    if (this.filterInStock !== null)
      queryParams["in_stock"] = String(this.filterInStock);
    if (this.sortBy !== "created_at")
      queryParams["sort_by"] = this.sortBy;
    if (this.sortOrder !== "desc")
      queryParams["sort_order"] = this.sortOrder;
    this.router.navigate([], { relativeTo: this.route, queryParams, replaceUrl: true });
  }
  // ── Desktop filters ───────────────────────────────────
  onDesktopFilterChange() {
    this.resetMobilePagination();
    this.syncUrl();
    this.loadWithFilters();
  }
  resetAllFilters() {
    this.filterStatut = null;
    this.filterType = null;
    this.filterInStock = null;
    this.mobileSearchTerm = "";
    this.resetMobilePagination();
    this.syncUrl();
    this.loadWithFilters();
  }
  get activeFiltersCount() {
    return [this.filterStatut, this.filterType, this.filterInStock].filter((v) => v !== null).length;
  }
  // ── Mobile filter drawer ──────────────────────────────
  openMobileFilters() {
    this.tempFilterStatut = this.filterStatut;
    this.tempFilterType = this.filterType;
    this.tempFilterInStock = this.filterInStock;
    this.mobileFilterVisible = true;
  }
  applyMobileFilters() {
    this.filterStatut = this.tempFilterStatut;
    this.filterType = this.tempFilterType;
    this.filterInStock = this.tempFilterInStock;
    this.mobileFilterVisible = false;
    this.resetMobilePagination();
    this.syncUrl();
    this.loadWithFilters();
  }
  resetMobileFiltersTemp() {
    this.tempFilterStatut = null;
    this.tempFilterType = null;
    this.tempFilterInStock = null;
  }
  // ── Mobile search (debounced) ─────────────────────────
  onMobileSearchChange(value) {
    this.mobileVisibleCount = this.mobilePageSize;
    this.searchSubject.next(value);
  }
  get mobileVisibleProduits() {
    return this.produits.slice(0, this.mobileVisibleCount);
  }
  get canLoadMoreMobile() {
    return this.mobileVisibleCount < this.produits.length;
  }
  loadMoreMobile() {
    this.mobileVisibleCount += this.mobilePageSize;
  }
  trackByProduitId(index, produit) {
    return produit.id || produit.code || index;
  }
  exportCSV() {
    this.dt.exportCSV();
  }
  initOptions() {
    this.typeOptions = Object.entries(PRODUIT_TYPE_LABELS).map(([value, label]) => ({
      label,
      value
    }));
    this.statutOptions = Object.entries(PRODUIT_STATUT_LABELS).map(([value, label]) => ({
      label,
      value
    }));
  }
  initColumns() {
    this.cols = [
      { field: "code", header: "Code", customExportHeader: "Product Code" },
      { field: "nom", header: "Nom" },
      { field: "image", header: "Image" },
      { field: "prix_vente", header: "Prix" },
      { field: "type", header: "Type" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  openNew() {
    this.produit = new Produit();
    this.submitted = false;
    this.produitDialog = true;
  }
  editProduct(produit) {
    this.produit = new Produit(__spreadValues({}, produit));
    this.produitDialog = true;
  }
  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected products?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        const ids = (this.selectedProduits ?? []).map((item) => item.id).filter((id) => !!id);
        if (ids.length === 0)
          return;
        forkJoin(ids.map((id) => this.produitService.delete(id))).subscribe({
          next: () => {
            this.produits = this.produits.filter((item) => !ids.includes(item.id));
            this.selectedProduits = null;
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Products Deleted", life: 3e3 });
          },
          error: (err) => this.showApiError(err, "Suppression impossible")
        });
      }
    });
  }
  hideDialog() {
    this.produitDialog = false;
    this.submitted = false;
  }
  deleteProduct(produit) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + (produit.nom || "this product") + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        if (!produit.id)
          return;
        this.produitService.delete(produit.id).subscribe({
          next: () => {
            this.produits = this.produits.filter((item) => item.id !== produit.id);
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Product Deleted", life: 3e3 });
          },
          error: (err) => this.showApiError(err, "Suppression impossible")
        });
      }
    });
  }
  getStatutSeverity(statut) {
    if (!statut)
      return PRODUIT_STATUT_SEVERITY.brouillon;
    return PRODUIT_STATUT_SEVERITY[statut] ?? PRODUIT_STATUT_SEVERITY.brouillon;
  }
  getStatutLabel(statut) {
    if (!statut)
      return PRODUIT_STATUT_LABELS.brouillon;
    return PRODUIT_STATUT_LABELS[statut] ?? PRODUIT_STATUT_LABELS.brouillon;
  }
  getTypeLabel(type) {
    if (!type)
      return "-";
    return PRODUIT_TYPE_LABELS[type] ?? type;
  }
  formatCurrency(value) {
    if (typeof value !== "number")
      return "-";
    return `${new Intl.NumberFormat("fr-GN", { maximumFractionDigits: 0 }).format(value)} GNF`;
  }
  /**
   * Affiche l'alerte "Critique" uniquement quand le seuil est réellement atteint.
   * - Produit non critique => jamais d'alerte.
   * - Seuil produit défini => alerte si qte_stock <= seuil.
   * - Sinon fallback backend (is_low_stock / is_out_of_stock).
   */
  shouldShowCritiqueAlert(produit) {
    if (!produit?.is_critique)
      return false;
    const stock = Number(produit.qte_stock);
    const seuil = produit.seuil_alerte_stock;
    const hasValidStock = Number.isFinite(stock);
    const hasCustomThreshold = typeof seuil === "number" && Number.isFinite(seuil);
    if (hasCustomThreshold && hasValidStock) {
      return stock <= seuil;
    }
    return produit.is_out_of_stock || produit.is_low_stock;
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  saveProduit() {
    this.submitted = true;
    if (!this.produit.nom?.trim() || !this.produit.type || this.saving)
      return;
    this.saving = true;
    const dto = {
      nom: this.produit.nom.trim(),
      type: this.produit.type,
      qte_stock: this.produit.qte_stock ?? 0,
      statut: this.produit.statut,
      cout: this.produit.cout ?? void 0,
      description: this.produit.description ?? void 0,
      prix_usine: this.produit.prix_usine ?? void 0,
      prix_vente: this.produit.prix_vente ?? void 0,
      prix_achat: this.produit.prix_achat ?? void 0
    };
    const isUpdate = !!this.produit.id;
    const request$ = isUpdate ? this.produitService.update(this.produit.id, dto) : this.produitService.create(dto);
    request$.subscribe({
      next: () => {
        this.produitDialog = false;
        this.produit = new Produit();
        this.submitted = false;
        this.saving = false;
        this.loadWithFilters();
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: isUpdate ? "Produit mis \xE0 jour" : "Produit cr\xE9\xE9",
          life: 3e3
        });
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "Sauvegarde impossible");
      }
    });
  }
  showApiError(err, fallback) {
    if (err.status === 422 && err.error?.errors) {
      const messages = Object.values(err.error.errors).flat();
      messages.forEach((msg) => this.messageService.add({ severity: "error", summary: "Validation", detail: msg, life: 5e3 }));
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail: this.extractErrorMessage(err, fallback),
        life: 5e3
      });
    }
  }
  extractErrorMessage(err, fallback) {
    if (typeof err?.error?.message === "string" && err.error.message.trim())
      return err.error.message;
    if (typeof err?.message === "string" && err.message.trim())
      return err.message;
    return fallback;
  }
  goToNewProduits() {
    this.router.navigate(["/produits/produits-new"]);
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  onRowDblClick(event, produit) {
    if (window.innerWidth <= this.mobileBreakpoint)
      return;
    if (!this.canEditDefinition(produit))
      return;
    const target = event.target;
    if (target.closest('button, a, input, textarea, select, [role="button"], .p-checkbox, .p-button, .p-link'))
      return;
    this.router.navigate(["/produits/produits-edit", produit.id]);
  }
  canEditDefinition(produit) {
    if (!this.canUpdate)
      return false;
    if (!produit?.is_global)
      return true;
    return this.canManageSystemDefinition;
  }
  canUpdateStock(produit) {
    return this.canUpdate && !!produit?.id;
  }
  needsStockOnlyAction(produit) {
    return !!produit?.is_global && !this.canEditDefinition(produit) && this.canUpdateStock(produit);
  }
  canArchiveProduct(produit) {
    if (!this.canDelete)
      return false;
    if (!produit?.is_global)
      return true;
    return this.canManageSystemDefinition;
  }
  getDefinitionActionTooltip(produit) {
    if (this.canEditDefinition(produit)) {
      return "Modifier";
    }
    if (produit?.is_global && this.canUpdate) {
      return "R\xE9serv\xE9 admin/manager (produit global)";
    }
    return "Voir";
  }
  goToEditProduit(event, produitId, produit) {
    event.stopPropagation();
    if (!this.canEditDefinition(produit)) {
      return;
    }
    this.router.navigate(["/produits/produits-edit", produitId]);
  }
  getPrimaryActionTooltip(produit) {
    if (this.canEditDefinition(produit)) {
      return "Modifier";
    }
    if (this.needsStockOnlyAction(produit)) {
      return "Mettre a jour le stock";
    }
    return "Voir";
  }
  onProduitPrimaryAction(event, produit) {
    if (this.canEditDefinition(produit)) {
      this.goToEditProduit(event, produit.id, produit);
      return;
    }
    if (this.needsStockOnlyAction(produit)) {
      this.openStockDialog(event, produit);
      return;
    }
    event.stopPropagation();
  }
  openStockDialog(event, produit) {
    event.stopPropagation();
    if (!this.canUpdateStock(produit) || !produit?.id)
      return;
    this.stockProduit = produit;
    this.stockValue = Number.isFinite(Number(produit.qte_stock)) ? Number(produit.qte_stock) : 0;
    this.stockDialog = true;
    this.stockDialogSaving = false;
  }
  closeStockDialog() {
    this.stockDialog = false;
    this.stockDialogSaving = false;
    this.stockProduit = null;
    this.stockValue = null;
  }
  saveStockUpdate() {
    if (!this.stockProduit?.id || this.stockDialogSaving)
      return;
    const stock = Number(this.stockValue);
    if (!Number.isInteger(stock) || stock < 0) {
      this.messageService.add({
        severity: "error",
        summary: "Validation",
        detail: "La quantit\xE9 de stock doit \xEAtre un entier sup\xE9rieur ou \xE9gal \xE0 0.",
        life: 5e3
      });
      return;
    }
    this.stockDialogSaving = true;
    this.produitService.updateStock(this.stockProduit.id, {
      quantite: stock,
      operation: "set"
    }).subscribe({
      next: (response) => {
        const updated = Produit.fromApi(response.produit);
        this.produits = this.produits.map((item) => item.id === updated.id ? updated : item);
        this.stockDialogSaving = false;
        if (response.stock_alert?.niveau !== "in_stock") {
          this.messageService.add({
            severity: "warn",
            summary: "Stock faible",
            detail: response.stock_alert.message ?? "Le stock est en dessous du seuil d'alerte.",
            life: 6e3
          });
        }
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Stock mis \xE0 jour avec succ\xE8s",
          life: 3e3
        });
        this.closeStockDialog();
      },
      error: (err) => {
        this.stockDialogSaving = false;
        this.showApiError(err, "Mise \xE0 jour du stock impossible");
      }
    });
  }
  /** Détermine si l'utilisateur peut modifier la définition des produits globaux (admin/manager). */
  hasSystemDefinitionAccess() {
    const user = this.authService.currentUser();
    if (!user)
      return false;
    const normalizedRoles = [...user.roles ?? [], ...user.role_names ?? []].map((role) => String(role).trim().toLowerCase().replace(/[\s_-]/g, "")).filter((role) => role.length > 0);
    return normalizedRoles.includes("adminentreprise") || normalizedRoles.includes("manager") || normalizedRoles.includes("superadmin");
  }
  resetMobilePagination() {
    this.mobileVisibleCount = this.mobilePageSize;
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.clearMobilePwaMode();
    }
  }
  clearMobilePwaMode() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  static \u0275fac = function ProduitsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsListe)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UsineContextService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsListe, selectors: [["app-produits-liste"]], viewQuery: function ProduitsListe_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, hostBindings: function ProduitsListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ProduitService, ConfirmationService])], decls: 61, vars: 44, consts: [["mobileListState", ""], ["footer", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["content", ""], [1, "produits-mobile-app"], [1, "mobile-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", "aria-label", "Retour \xE0 l'accueil", 1, "p-button-rounded", "p-button-text", "mobile-back", 3, "click"], [1, "mobile-title-wrap"], [1, "mobile-title"], [1, "mobile-subtitle"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", "aria-label", "Export", 1, "p-button-rounded", "p-button-text", "mobile-add", 3, "click"], [1, "mobile-scroll"], [1, "mobile-search-row"], [1, "mobile-search"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un produit...", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Filtres", 1, "mobile-filter-btn", 3, "click"], [1, "pi", "pi-filter"], ["class", "mobile-filter-badge", 4, "ngIf"], ["class", "mobile-list", 4, "ngIf", "ngIfElse"], ["class", "mobile-load-more", 4, "ngIf"], ["type", "button", "class", "mobile-fab", "aria-label", "Nouveau produit", 3, "click", 4, "ngIf"], ["position", "right", "styleClass", "mobile-filter-drawer", "header", "Filtres", 3, "visibleChange", "visible"], [1, "filter-drawer-body"], [1, "filter-group"], [1, "filter-label"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", "fluid", "", 3, "ngModelChange", "ngModel", "options", "showClear"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les types", "fluid", "", 3, "ngModelChange", "ngModel", "options", "showClear"], [1, "filter-toggle-row"], [1, "filter-label", "filter-label--inline"], [3, "ngModelChange", "ngModel"], [1, "card", "produits-desktop"], ["dataKey", "id", "currentPageReportTemplate", "  {first} \xE0 {last} sur {totalRecords} produits", 3, "value", "loading", "rows", "columns", "paginator", "globalFilterFields", "tableStyle", "rowHover", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Mettre a jour le stock", 3, "visibleChange", "onHide", "visible", "modal"], [3, "visibleChange", "visible", "header", "modal"], [1, "mobile-filter-badge"], [1, "mobile-list"], ["class", "mobile-produit-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mobile-produit-card", 3, "click"], [1, "mobile-card-media"], ["class", "mobile-card-thumb", 3, "src", "alt", 4, "ngIf"], ["class", "mobile-card-image-placeholder", "aria-hidden", "true", 4, "ngIf"], [1, "mobile-card-body"], [1, "mobile-card-top"], [1, "mobile-card-main"], [1, "mobile-code"], [1, "mobile-name"], [1, "flex", "flex-col", "items-end", "gap-1"], ["styleClass", "mobile-status-tag app-table-status", 3, "value", "severity"], ["value", "Global", "severity", "info", "icon", "pi pi-globe", 3, "rounded", 4, "ngIf"], ["value", "Critique", "severity", "warn", "icon", "pi pi-exclamation-triangle", 3, "rounded", 4, "ngIf"], [1, "mobile-card-footer"], [1, "mobile-card-summary"], [1, "mobile-card-actions"], ["pButton", "", "pRipple", "", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "mobile-chevron-action", 3, "click", "icon", "pTooltip", "disabled"], [1, "mobile-card-thumb", 3, "src", "alt"], ["aria-hidden", "true", 1, "mobile-card-image-placeholder"], [1, "pi", "pi-box"], ["value", "Global", "severity", "info", "icon", "pi pi-globe", 3, "rounded"], ["value", "Critique", "severity", "warn", "icon", "pi pi-exclamation-triangle", 3, "rounded"], ["class", "mobile-state", 4, "ngIf"], [1, "mobile-state"], [1, "pi", "pi-inbox", 2, "font-size", "2rem", "display", "block", "margin-bottom", "0.5rem"], [1, "mobile-load-more"], ["label", "Charger plus", "icon", "pi pi-angle-down", "styleClass", "mobile-load-more-btn", 3, "onClick"], ["type", "button", "aria-label", "Nouveau produit", 1, "mobile-fab", 3, "click"], [1, "pi", "pi-plus"], [1, "mobile-fab-label"], [1, "filter-drawer-footer"], ["label", "R\xE9initialiser", "severity", "secondary", "styleClass", "flex-1", 3, "onClick", "outlined"], ["label", "Appliquer", "styleClass", "flex-1", 3, "onClick"], [1, "desktop-products-caption"], [1, "desktop-products-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher un produit...", 1, "w-full", 3, "input"], [1, "desktop-products-actions"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", "styleClass", "desktop-filter-select", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les types", "styleClass", "desktop-filter-select", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["class", "desktop-filter-count", 4, "ngIf"], ["pButton", "", "outlined", "", "class", "flex-shrink-0", "icon", "pi pi-plus", "label", "Nouveau", 3, "click", 4, "ngIf"], [1, "desktop-filter-count"], ["pButton", "", "outlined", "", "icon", "pi pi-plus", "label", "Nouveau", 1, "flex-shrink-0", 3, "click"], [2, "width", "6.5rem"], ["pSortableColumn", "code", 2, "min-width", "16rem"], [1, "flex", "items-center", "gap-2"], ["field", "code"], ["pSortableColumn", "nom", 2, "min-width", "16rem"], ["field", "nom"], ["pSortableColumn", "type", 2, "min-width", "10rem"], ["field", "type"], ["pSortableColumn", "qte_stock", 2, "min-width", "12rem"], ["field", "qte_stock"], ["pSortableColumn", "statut", 2, "min-width", "12rem"], ["field", "statut"], [2, "min-width", "12rem"], ["tooltipPosition", "left", 1, "produit-row", 3, "dblclick", "pTooltip", "tooltipOptions", "tooltipDisabled"], ["style", "width: 64px; height: 64px; object-fit: contain;", "class", "rounded border border-surface-200", 3, "src", "alt", 4, "ngIf"], ["class", "pi pi-image text-surface-300 text-2xl", 4, "ngIf"], [2, "min-width", "16rem"], ["value", "Global", "severity", "info", "icon", "pi pi-globe", "styleClass", "ml-2", 3, "rounded", 4, "ngIf"], ["value", "Critique", "severity", "warn", "icon", "pi pi-exclamation-triangle", "styleClass", "ml-2", 3, "rounded", 4, "ngIf"], ["styleClass", "app-table-status", 3, "value", "severity"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "class", "p-button-rounded p-button-text p-button-sm mr-2", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-box", "class", "p-button-rounded p-button-text p-button-sm mr-2", "tooltipPosition", "top", 3, "pTooltip", "click", 4, "ngIf"], ["icon", "pi pi-trash", "severity", "danger", 3, "rounded", "outlined", "click", 4, "ngIf"], [1, "rounded", "border", "border-surface-200", 2, "width", "64px", "height", "64px", "object-fit", "contain", 3, "src", "alt"], [1, "pi", "pi-image", "text-surface-300", "text-2xl"], ["value", "Global", "severity", "info", "icon", "pi pi-globe", "styleClass", "ml-2", 3, "rounded"], ["value", "Critique", "severity", "warn", "icon", "pi pi-exclamation-triangle", "styleClass", "ml-2", 3, "rounded"], ["pButton", "", "pRipple", "", "icon", "pi pi-eye", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "mr-2", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "icon", "pi pi-box", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-sm", "mr-2", 3, "click", "pTooltip"], ["icon", "pi pi-trash", "severity", "danger", 3, "click", "rounded", "outlined"], [1, "flex", "flex-col", "gap-4"], [4, "ngIf"], ["for", "stock_value", 1, "block", "font-bold", "mb-2"], ["inputId", "stock_value", "fluid", "", 3, "ngModelChange", "ngModel", "min", "minFractionDigits", "maxFractionDigits", "useGrouping"], [1, "font-medium", "mb-2"], [1, "text-surface-500"], ["label", "Annuler", "icon", "pi pi-times", "text", "", 3, "click", "disabled"], ["label", "Enregistrer", "icon", "pi pi-check", 3, "click", "loading", "disabled"], ["class", "mb-4", 4, "ngIf"], [1, "flex", "flex-col", "gap-6"], ["for", "type", 1, "block", "font-bold", "mb-4"], ["inputId", "type", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["class", "text-red-500", 4, "ngIf"], ["for", "nom", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "nom", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "block", "font-bold", "mb-4"], ["id", "description", "pTextarea", "", "rows", "3", "cols", "20", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-6"], ["for", "qte_stock", 1, "block", "font-bold", "mb-4"], ["id", "qte_stock", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "cout", 1, "block", "font-bold", "mb-4"], ["id", "cout", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_achat", 1, "block", "font-bold", "mb-4"], ["id", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_vente", 1, "block", "font-bold", "mb-4"], ["id", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "prix_usine", 1, "block", "font-bold", "mb-4"], ["id", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "mb-4"], ["for", "code", 1, "block", "font-bold", "mb-4"], ["type", "text", "pInputText", "", "id", "code", "fluid", "", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-red-500"], ["for", "statut", 1, "block", "font-bold", "mb-4"], ["inputId", "statut", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un statut", "fluid", "", 3, "ngModelChange", "ngModel", "options"], ["label", "Enregistrer", "icon", "pi pi-check", 3, "click", "disabled", "loading"]], template: function ProduitsListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 7)(2, "header", 8)(3, "button", 9);
      \u0275\u0275listener("click", function ProduitsListe_Template_button_click_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goHome());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 10)(5, "h1", 11);
      \u0275\u0275text(6, "Produits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 12);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 13);
      \u0275\u0275listener("click", function ProduitsListe_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.exportCSV());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "section", 16)(13, "p-iconfield");
      \u0275\u0275element(14, "p-inputicon", 17);
      \u0275\u0275elementStart(15, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileSearchTerm, $event) || (ctx.mobileSearchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ProduitsListe_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMobileSearchChange($event));
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "button", 19);
      \u0275\u0275listener("click", function ProduitsListe_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openMobileFilters());
      });
      \u0275\u0275element(17, "i", 20);
      \u0275\u0275template(18, ProduitsListe_span_18_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ProduitsListe_section_19_Template, 2, 2, "section", 22)(20, ProduitsListe_ng_template_20_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(22, ProduitsListe_div_22_Template, 2, 0, "div", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ProduitsListe_button_23_Template, 4, 0, "button", 24);
      \u0275\u0275elementStart(24, "p-drawer", 25);
      \u0275\u0275twoWayListener("visibleChange", function ProduitsListe_Template_p_drawer_visibleChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mobileFilterVisible, $event) || (ctx.mobileFilterVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(25, "div", 26)(26, "div", 27)(27, "label", 28);
      \u0275\u0275text(28, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p-select", 29);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_Template_p_select_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.tempFilterStatut, $event) || (ctx.tempFilterStatut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 27)(31, "label", 28);
      \u0275\u0275text(32, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p-select", 30);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsListe_Template_p_select_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.tempFilterType, $event) || (ctx.tempFilterType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 27)(35, "div", 31)(36, "label", 32);
      \u0275\u0275text(37, "En stock uniquement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p-toggleswitch", 33);
      \u0275\u0275listener("ngModelChange", function ProduitsListe_Template_p_toggleswitch_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.tempFilterInStock = $event ? true : null);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(39, ProduitsListe_ng_template_39_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 34)(42, "p-table", 35, 2);
      \u0275\u0275template(44, ProduitsListe_ng_template_44_Template, 9, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(46, ProduitsListe_ng_template_46_Template, 25, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(48, ProduitsListe_ng_template_48_Template, 21, 17, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "p-dialog", 36);
      \u0275\u0275twoWayListener("visibleChange", function ProduitsListe_Template_p_dialog_visibleChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.stockDialog, $event) || (ctx.stockDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function ProduitsListe_Template_p_dialog_onHide_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeStockDialog());
      });
      \u0275\u0275template(51, ProduitsListe_ng_template_51_Template, 6, 6, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(53, ProduitsListe_ng_template_53_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p-dialog", 37);
      \u0275\u0275twoWayListener("visibleChange", function ProduitsListe_Template_p_dialog_visibleChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.produitDialog, $event) || (ctx.produitDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(56, ProduitsListe_ng_template_56_Template, 39, 13, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(58, ProduitsListe_ng_template_58_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(60, "p-confirmdialog");
    }
    if (rf & 2) {
      const mobileListState_r22 = \u0275\u0275reference(21);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.produits.length, " produit", ctx.produits.length > 1 ? "s" : "");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.mobileSearchTerm);
      \u0275\u0275advance();
      \u0275\u0275classProp("mobile-filter-btn--active", ctx.activeFiltersCount > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeFiltersCount > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.mobileVisibleProduits.length)("ngIfElse", mobileListState_r22);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.canLoadMoreMobile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canCreate);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("visible", ctx.mobileFilterVisible);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.tempFilterStatut);
      \u0275\u0275property("options", ctx.statutOptions)("showClear", true);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.tempFilterType);
      \u0275\u0275property("options", ctx.typeOptions)("showClear", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.tempFilterInStock === true);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.produits)("loading", ctx.loading)("rows", 10)("columns", ctx.cols)("paginator", true)("globalFilterFields", ctx.filterFields)("tableStyle", \u0275\u0275pureFunction0(39, _c1))("rowHover", true)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(40, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.stockDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(42, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.produitDialog);
      \u0275\u0275property("header", (ctx.produit == null ? null : ctx.produit.id) ? "Modifier un produit" : "Nouveau produit")("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(43, _c5));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    ButtonModule,
    ButtonDirective,
    Button,
    RippleModule,
    Ripple,
    ToastModule,
    Toast,
    ToolbarModule,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
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
    TooltipModule,
    Tooltip,
    DrawerModule,
    Drawer,
    ToggleSwitchModule,
    ToggleSwitch
  ], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.produits-mobile-app[_ngcontent-%COMP%] {\n  display: none;\n}\n.produits-desktop[_ngcontent-%COMP%]     .produit-row {\n  cursor: pointer;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #f9fbff;\n    --mobile-border: #dbe2ee;\n  }\n  .produits-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .produits-mobile-app[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background:\n      linear-gradient(\n        180deg,\n        #f3f5f9 0%,\n        #eaedf4 58%,\n        #e5eaf1 100%);\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .mobile-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back[_ngcontent-%COMP%], \n   .mobile-add[_ngcontent-%COMP%] {\n    width: 2.15rem;\n    height: 2.15rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.35rem;\n    line-height: 1.1;\n    font-weight: 800;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle[_ngcontent-%COMP%] {\n    margin: 0.2rem 0 0;\n    font-size: 0.76rem;\n    font-weight: 600;\n    color: var(--mobile-muted);\n  }\n  .mobile-search[_ngcontent-%COMP%] {\n    background: #f7f9fd;\n    border: 1.5px solid var(--mobile-border);\n    border-radius: 0.95rem;\n    padding: 0.35rem 0.55rem;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-iconfield[_ngcontent-%COMP%], \n   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    color: var(--mobile-text);\n    font-size: 0.96rem;\n  }\n  .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]::placeholder {\n    color: #92a0b7;\n  }\n  .mobile-quick-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    padding: 0 0.15rem;\n  }\n  .mobile-quick-actions[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .mobile-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.65rem;\n    margin-top: 1rem;\n  }\n  .mobile-produit-card[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 1rem;\n    padding: 0.9rem;\n    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-produit-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  }\n  .mobile-card-media[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n  }\n  .mobile-card-thumb[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    object-fit: contain;\n    border: 1px solid var(--mobile-border);\n    background: #fff;\n  }\n  .mobile-card-image-placeholder[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    background: #eef1f6;\n    border: 1px solid var(--mobile-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-image-placeholder[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    color: #92a0b7;\n  }\n  .mobile-card-body[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-top[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-bottom: 0.4rem;\n  }\n  .mobile-card-main[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-code[_ngcontent-%COMP%] {\n    margin-bottom: 0.1rem;\n    font-size: 0.72rem;\n    line-height: 1.2;\n    color: #8b98b0;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n  }\n  .mobile-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.25;\n    font-weight: 700;\n    color: var(--mobile-text);\n    word-break: break-word;\n  }\n  .mobile-card-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-summary[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    color: var(--mobile-muted);\n    font-weight: 600;\n  }\n  .mobile-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n  }\n  .mobile-chevron-action[_ngcontent-%COMP%] {\n    width: 2.05rem;\n    height: 2.05rem;\n    color: var(--mobile-muted) !important;\n    flex-shrink: 0;\n  }\n  .mobile-state[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    background: #f8faff;\n    border: 1px dashed var(--mobile-border);\n    border-radius: 1rem;\n    padding: 1rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more[_ngcontent-%COMP%] {\n    padding-top: 0.4rem;\n  }\n  .mobile-fab[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    font-weight: 700;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab[_ngcontent-%COMP%]:active {\n    transform: scale(0.96);\n  }\n  .mobile-fab[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n  .mobile-fab-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) and (min-width: 400px) {\n  .mobile-fab[_ngcontent-%COMP%] {\n    width: auto;\n    height: 3rem;\n    min-height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n  }\n  .mobile-fab-label[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%]     .mobile-action-btn {\n    width: 100%;\n    justify-content: flex-start;\n    border: 0 !important;\n    background: transparent !important;\n    color: #4f5d79 !important;\n    padding: 0.35rem 0.45rem !important;\n    font-weight: 700;\n    border-radius: 0.7rem;\n    box-shadow: none !important;\n  }\n  [_nghost-%COMP%]     .mobile-action-btn .p-button-icon {\n    color: var(--mobile-primary);\n    font-size: 0.95rem;\n  }\n  [_nghost-%COMP%]     .mobile-action-btn .p-button-label {\n    font-size: 0.95rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag {\n    font-size: 0.79rem;\n    font-weight: 700;\n    border-radius: 0.55rem;\n    padding: 0.22rem 0.55rem;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-success {\n    background: #d9f7e5;\n    color: #168f4a;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-warn, \n   [_nghost-%COMP%]     .mobile-status-tag.p-tag-warning {\n    background: #ffe8d3;\n    color: #dc6408;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-danger {\n    background: #ffe3e1;\n    color: #dd3f39;\n  }\n  [_nghost-%COMP%]     .mobile-status-tag.p-tag-secondary {\n    background: #e8edf6;\n    color: #64748b;\n  }\n  [_nghost-%COMP%]     .mobile-delete-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    border-radius: 999px !important;\n    border-color: #ffb9b4 !important;\n    color: #ef4444 !important;\n    background: rgba(255, 255, 255, 0.9) !important;\n  }\n  [_nghost-%COMP%]     .mobile-delete-action .p-button-icon {\n    font-size: 0.84rem;\n  }\n  [_nghost-%COMP%]     .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    justify-content: center;\n    font-weight: 700;\n    border: 1px solid #cfd7ff;\n    background: #eef2ff;\n    color: #4f5df4;\n  }\n  .app-dark   [_nghost-%COMP%] {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .produits-mobile-app[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .produits-mobile-app[_ngcontent-%COMP%] {\n    background: var(--p-surface-950);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-header[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-search[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-search[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    box-shadow: none;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]::placeholder, .app-dark   [_nghost-%COMP%]   .mobile-search[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]::placeholder {\n    color: var(--p-surface-500);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-produit-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-produit-card[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-produit-card[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .mobile-produit-card[_ngcontent-%COMP%]:active {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-card-image-placeholder[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-card-image-placeholder[_ngcontent-%COMP%] {\n    background: var(--p-surface-700);\n    border-color: var(--p-surface-600);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-card-image-placeholder[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-card-image-placeholder[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-code[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-code[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-state[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-action-btn {\n    color: var(--p-surface-300) !important;\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-action-btn .p-button-icon {\n    color: var(--p-primary-400);\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-status-tag.p-tag-success {\n    background: rgba(5, 150, 105, 0.2);\n    color: #34d399;\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-status-tag.p-tag-warn, \n   .app-dark   [_nghost-%COMP%]     .mobile-status-tag.p-tag-warning {\n    background: rgba(217, 119, 6, 0.2);\n    color: #fbbf24;\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-status-tag.p-tag-danger {\n    background: rgba(220, 38, 38, 0.2);\n    color: #f87171;\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-status-tag.p-tag-secondary {\n    background: var(--p-surface-700);\n    color: var(--p-surface-300);\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-delete-action {\n    border-color: var(--p-surface-600) !important;\n    background: var(--p-surface-700) !important;\n    color: #f87171 !important;\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-load-more-btn {\n    border-color: var(--p-surface-600);\n    background: var(--p-surface-800);\n    color: var(--p-primary-400);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media screen and (max-width: 768px) {\n  .mobile-search-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .mobile-search-row[_ngcontent-%COMP%]   .mobile-search[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .mobile-filter-btn[_ngcontent-%COMP%] {\n    position: relative;\n    width: 2.5rem;\n    height: 2.5rem;\n    flex-shrink: 0;\n    border-radius: 0.65rem;\n    border: 1.5px solid var(--mobile-border);\n    background: #f7f9fd;\n    color: var(--mobile-muted);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: background 0.15s ease, border-color 0.15s ease;\n  }\n  .mobile-filter-btn[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .mobile-filter-btn--active[_ngcontent-%COMP%] {\n    background: rgba(95, 107, 255, 0.1);\n    border-color: var(--mobile-primary);\n    color: var(--mobile-primary);\n  }\n  .mobile-filter-badge[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -0.3rem;\n    right: -0.3rem;\n    width: 1.15rem;\n    height: 1.15rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    font-size: 0.62rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    line-height: 1;\n  }\n  [_nghost-%COMP%]     .mobile-filter-drawer {\n    width: min(320px, 88vw) !important;\n  }\n  [_nghost-%COMP%]     .mobile-filter-drawer .p-drawer-content {\n    padding: 1rem 1.25rem;\n    overflow-y: auto;\n  }\n  [_nghost-%COMP%]     .mobile-filter-drawer .p-drawer-footer {\n    padding: 0.75rem 1.25rem 1rem;\n    border-top: 1px solid var(--mobile-border);\n  }\n  .filter-drawer-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1.25rem;\n  }\n  .filter-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .filter-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    color: #94a3b8;\n    margin-bottom: 0.1rem;\n  }\n  .filter-label--inline[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    font-size: 0.85rem;\n    text-transform: none;\n    letter-spacing: 0;\n    color: #334155;\n    font-weight: 600;\n  }\n  .filter-toggle-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.65rem 0;\n    border-top: 1px solid var(--mobile-border);\n    border-bottom: 1px solid var(--mobile-border);\n  }\n  .filter-drawer-footer[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.75rem;\n  }\n  .filter-drawer-footer[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-filter-btn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-filter-btn[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .mobile-filter-btn--active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .mobile-filter-btn--active[_ngcontent-%COMP%] {\n    background: rgba(var(--p-primary-400-rgb, 95, 107, 255), 0.15);\n    border-color: var(--p-primary-400);\n    color: var(--p-primary-400);\n  }\n  .app-dark[_nghost-%COMP%]   .filter-label--inline[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .filter-label--inline[_ngcontent-%COMP%] {\n    color: var(--p-surface-200);\n  }\n  .app-dark[_nghost-%COMP%]   .filter-toggle-row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .filter-toggle-row[_ngcontent-%COMP%] {\n    border-color: var(--p-surface-600);\n  }\n  .app-dark   [_nghost-%COMP%]     .mobile-filter-drawer .p-drawer-footer {\n    border-top-color: var(--p-surface-700);\n  }\n}\n.desktop-products-caption[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.85rem;\n}\n.desktop-products-search[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 22rem;\n}\n.desktop-products-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-left: auto;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 1200px) {\n  .desktop-products-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n[_nghost-%COMP%]     .desktop-filter-select {\n  min-width: 11rem;\n}\n.desktop-filter-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--p-surface-400);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.app-dark[_nghost-%COMP%]   .desktop-filter-count[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .desktop-filter-count[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n/*# sourceMappingURL=produits-liste.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsListe, [{
    type: Component,
    args: [{ selector: "app-produits-liste", standalone: true, imports: [
      CommonModule,
      TableModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      TextareaModule,
      SelectModule,
      InputNumberModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      TooltipModule,
      DrawerModule,
      ToggleSwitchModule
    ], providers: [MessageService, ProduitService, ConfirmationService], template: `<p-toast></p-toast>

<!-- ==================== MOBILE ==================== -->
<div class="produits-mobile-app">
    <header class="mobile-header">
        <button
            pButton
            pRipple
            icon="pi pi-arrow-left"
            class="p-button-rounded p-button-text mobile-back"
            aria-label="Retour \xE0 l'accueil"
            (click)="goHome()"
        ></button>

        <div class="mobile-title-wrap">
            <h1 class="mobile-title">Produits</h1>
            <p class="mobile-subtitle">{{ produits.length }} produit{{ produits.length > 1 ? 's' : '' }}</p>
        </div>
   
        <button
            pButton
            pRipple
            icon="pi pi-upload"
            class="p-button-rounded p-button-text mobile-add"
            aria-label="Export"
            (click)="exportCSV()"
        ></button>
    </header>

    <div class="mobile-scroll">

        <!-- Search + filter button -->
        <div class="mobile-search-row">
            <section class="mobile-search">
                <p-iconfield>
                    <p-inputicon styleClass="pi pi-search" />
                    <input
                        pInputText
                        type="text"
                        [(ngModel)]="mobileSearchTerm"
                        (ngModelChange)="onMobileSearchChange($event)"
                        placeholder="Rechercher un produit..."
                    />
                </p-iconfield>
            </section>
            <button
                type="button"
                class="mobile-filter-btn"
                [class.mobile-filter-btn--active]="activeFiltersCount > 0"
                (click)="openMobileFilters()"
                aria-label="Filtres"
            >
                <i class="pi pi-filter"></i>
                <span *ngIf="activeFiltersCount > 0" class="mobile-filter-badge">{{ activeFiltersCount }}</span>
            </button>
        </div>

        <section class="mobile-list" *ngIf="!loading && mobileVisibleProduits.length; else mobileListState">
            <article
                class="mobile-produit-card"
                *ngFor="let produit of mobileVisibleProduits; trackBy: trackByProduitId"
                (click)="onProduitPrimaryAction($event, produit)"
            >
                <div class="mobile-card-media">
                    <img
                        *ngIf="produit.image_url"
                        [src]="produit.getImageUrl()"
                        [alt]="produit.nom"
                        class="mobile-card-thumb"
                    />
                    <div *ngIf="!produit.image_url" class="mobile-card-image-placeholder" aria-hidden="true">
                        <i class="pi pi-box"></i>
                    </div>
                </div>
                <div class="mobile-card-body">
                    <div class="mobile-card-top">
                        <div class="mobile-card-main">
                            <div class="mobile-code">{{ produit.code || 'Sans code' }}</div>
                            <div class="mobile-name">{{ produit.nom }}</div>
                        </div>
                        <div class="flex flex-col items-end gap-1">
                            <p-tag
                                styleClass="mobile-status-tag app-table-status"
                                [value]="getStatutLabel(produit.statut)"
                                [severity]="getStatutSeverity(produit.statut)"
                            />
                            <p-tag
                                *ngIf="produit.is_global"
                                value="Global"
                                severity="info"
                                icon="pi pi-globe"
                                [rounded]="true"
                            />
                            <p-tag
                                *ngIf="shouldShowCritiqueAlert(produit)"
                                value="Critique"
                                severity="warn"
                                icon="pi pi-exclamation-triangle"
                                [rounded]="true"
                            />
                        </div>
                    </div>

                    <div class="mobile-card-footer">
                        <span class="mobile-card-summary">{{ produit.qte_stock }} en stock \xB7 {{ formatCurrency(produit.prix_vente) }}</span>
                        <div class="mobile-card-actions">
                            <button
                                pButton
                                pRipple
                                [icon]="needsStockOnlyAction(produit) ? 'pi pi-box' : 'pi pi-chevron-right'"
                                class="p-button-rounded p-button-text p-button-sm mobile-chevron-action"
                                [pTooltip]="getPrimaryActionTooltip(produit)"
                                tooltipPosition="top"
                                (click)="onProduitPrimaryAction($event, produit)"
                                [disabled]="!canEditDefinition(produit) && !needsStockOnlyAction(produit)"
                            ></button>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <ng-template #mobileListState>
            <div class="mobile-state" *ngIf="loading">Chargement des produits...</div>
            <div class="mobile-state" *ngIf="!loading && !produits.length">
                <i class="pi pi-inbox" style="font-size:2rem;display:block;margin-bottom:0.5rem;"></i>
                Aucun produit{{ activeFiltersCount > 0 ? ' pour ces filtres' : ' trouv\xE9' }}.
            </div>
        </ng-template>

        <div class="mobile-load-more" *ngIf="!loading && canLoadMoreMobile">
            <p-button
                label="Charger plus"
                icon="pi pi-angle-down"
                styleClass="mobile-load-more-btn"
                (onClick)="loadMoreMobile()"
            />
        </div>

    </div><!-- /mobile-scroll -->

    <button
        *ngIf="canCreate"
        type="button"
        class="mobile-fab"
        aria-label="Nouveau produit"
        (click)="goToNewProduits()"
    >
        <i class="pi pi-plus"></i>
        <span class="mobile-fab-label">Nouveau produit</span>
    </button>

    <!-- \u2500\u2500 Drawer filtres mobile \u2500\u2500 -->
    <p-drawer
        [(visible)]="mobileFilterVisible"
        position="right"
        styleClass="mobile-filter-drawer"
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
                <label class="filter-label">Type</label>
                <p-select
                    [(ngModel)]="tempFilterType"
                    [options]="typeOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Tous les types"
                    [showClear]="true"
                    fluid
                />
            </div>

            <div class="filter-group">
                <div class="filter-toggle-row">
                    <label class="filter-label filter-label--inline">En stock uniquement</label>
                    <p-toggleswitch
                        [ngModel]="tempFilterInStock === true"
                        (ngModelChange)="tempFilterInStock = $event ? true : null"
                    />
                </div>
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

</div><!-- /produits-mobile-app -->


<!-- ==================== DESKTOP ==================== -->
<div class="card produits-desktop">
    <p-table
        #dt
        [value]="produits"
        [loading]="loading"
        [rows]="10"
        [columns]="cols"
        [paginator]="true"
        [globalFilterFields]="filterFields"
        [tableStyle]="{ 'min-width': '75rem' }"
        [rowHover]="true"
        dataKey="id"
        currentPageReportTemplate="  {first} \xE0 {last} sur {totalRecords} produits"
        [showCurrentPageReport]="true"
        [rowsPerPageOptions]="[10, 20, 30]"
    >
        <ng-template #caption>
            <div class="desktop-products-caption">
                <p-iconfield class="desktop-products-search">
                    <p-inputicon styleClass="pi pi-search" />
                    <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Rechercher un produit..." class="w-full" />
                </p-iconfield>

                <div class="desktop-products-actions">
                    <p-select
                        [(ngModel)]="filterStatut"
                        [options]="statutOptions"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Tous les statuts"
                        [showClear]="true"
                        (onChange)="onDesktopFilterChange()"
                        styleClass="desktop-filter-select"
                    />
                    <p-select
                        [(ngModel)]="filterType"
                        [options]="typeOptions"
                        optionLabel="label"
                        optionValue="value"
                        placeholder="Tous les types"
                        [showClear]="true"
                        (onChange)="onDesktopFilterChange()"
                        styleClass="desktop-filter-select"
                    />
                    <span class="desktop-filter-count" *ngIf="!loading">
                        {{ produits.length }} r\xE9sultat{{ produits.length > 1 ? 's' : '' }}
                    </span>
                    <button
                        *ngIf="canCreate"
                        (click)="goToNewProduits()"
                        pButton
                        outlined
                        class="flex-shrink-0"
                        icon="pi pi-plus"
                        label="Nouveau"
                    ></button>
                </div>
            </div>
        </ng-template>
        <ng-template #header>
            <tr>
                <th style="width: 6.5rem">Image</th>
                <th style="min-width: 16rem" pSortableColumn="code">
                    <span class="flex items-center gap-2">Code <p-sortIcon field="code" /></span>
                </th>
                <th pSortableColumn="nom" style="min-width:16rem">
                    <span class="flex items-center gap-2">Nom <p-sortIcon field="nom" /></span>
                </th>
                <th pSortableColumn="type" style="min-width:10rem">
                    <span class="flex items-center gap-2">Type <p-sortIcon field="type" /></span>
                </th>
                <th pSortableColumn="qte_stock" style="min-width: 12rem">
                    <span class="flex items-center gap-2">Qt\xE9 <p-sortIcon field="qte_stock" /></span>
                </th>
                <th pSortableColumn="statut" style="min-width: 12rem">
                    <span class="flex items-center gap-2">Status <p-sortIcon field="statut" /></span>
                </th>
                <th style="min-width: 12rem">Action</th>
            </tr>
        </ng-template>
        <ng-template #body let-produit>
            <tr class="produit-row" (dblclick)="onRowDblClick($event, produit)" [pTooltip]="getDefinitionActionTooltip(produit)" tooltipPosition="left" [tooltipOptions]="{ showDelay: 800 }" [tooltipDisabled]="!canEditDefinition(produit)">
                <td style="width: 6.5rem">
                    <img
                        *ngIf="produit.image_url"
                        [src]="produit.getImageUrl()"
                        [alt]="produit.nom"
                        style="width: 64px; height: 64px; object-fit: contain;"
                        class="rounded border border-surface-200"
                    />
                    <i *ngIf="!produit.image_url" class="pi pi-image text-surface-300 text-2xl"></i>
                </td>
                <td style="min-width: 12rem">{{ produit.code }}</td>
                <td style="min-width: 16rem">
                    <span>{{ produit.nom }}</span>
                    <p-tag
                        *ngIf="produit.is_global"
                        value="Global"
                        severity="info"
                        icon="pi pi-globe"
                        [rounded]="true"
                        styleClass="ml-2"
                    />
                    <p-tag
                        *ngIf="shouldShowCritiqueAlert(produit)"
                        value="Critique"
                        severity="warn"
                        icon="pi pi-exclamation-triangle"
                        [rounded]="true"
                        styleClass="ml-2"
                    />
                </td>
                <td>{{ getTypeLabel(produit.type) }}</td>
                <td>{{ produit.qte_stock }}</td>
                <td>
                    <p-tag
                        [value]="getStatutLabel(produit.statut)"
                        [severity]="getStatutSeverity(produit.statut)"
                        styleClass="app-table-status"
                    />
                </td>
                <td>
                    <button
                        *ngIf="canEditDefinition(produit)"
                        pButton
                        pRipple
                        icon="pi pi-eye"
                        class="p-button-rounded p-button-text p-button-sm mr-2"
                        [pTooltip]="getDefinitionActionTooltip(produit)"
                        tooltipPosition="top"
                        (click)="goToEditProduit($event, produit.id, produit)"
                    ></button>
                    <button
                        *ngIf="needsStockOnlyAction(produit)"
                        pButton
                        pRipple
                        icon="pi pi-box"
                        class="p-button-rounded p-button-text p-button-sm mr-2"
                        [pTooltip]="getPrimaryActionTooltip(produit)"
                        tooltipPosition="top"
                        (click)="openStockDialog($event, produit)"
                    ></button>
                    <p-button
                        icon="pi pi-trash"
                        severity="danger"
                        [rounded]="true"
                        [outlined]="true"
                        (click)="deleteProduct(produit)"
                        *ngIf="canArchiveProduct(produit)"
                    />
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>

<p-dialog
    [(visible)]="stockDialog"
    [modal]="true"
    [style]="{ width: '420px', maxWidth: '95vw' }"
    header="Mettre a jour le stock"
    (onHide)="closeStockDialog()"
>
    <ng-template #content>
        <div class="flex flex-col gap-4">
            <div *ngIf="stockProduit">
                <div class="font-medium mb-2">{{ stockProduit.nom }}</div>
                <small class="text-surface-500">Produit systeme: mise a jour du stock uniquement.</small>
            </div>
            <div>
                <label for="stock_value" class="block font-bold mb-2">Quantite en stock</label>
                <p-inputnumber
                    inputId="stock_value"
                    [(ngModel)]="stockValue"
                    [min]="0"
                    [minFractionDigits]="0"
                    [maxFractionDigits]="0"
                    [useGrouping]="false"
                    fluid
                />
            </div>
        </div>
    </ng-template>

    <ng-template #footer>
        <p-button label="Annuler" icon="pi pi-times" text (click)="closeStockDialog()" [disabled]="stockDialogSaving" />
        <p-button
            label="Enregistrer"
            icon="pi pi-check"
            (click)="saveStockUpdate()"
            [loading]="stockDialogSaving"
            [disabled]="stockDialogSaving"
        />
    </ng-template>
</p-dialog>

<p-dialog
    [(visible)]="produitDialog"
    [style]="{ width: '720px', maxWidth: '95vw' }"
    [header]="produit?.id ? 'Modifier un produit' : 'Nouveau produit'"
    [modal]="true"
>
    <ng-template #content>
        <div *ngIf="produit?.id" class="mb-4">
            <label for="code" class="block font-bold mb-4">Code</label>
            <input type="text" pInputText id="code" [(ngModel)]="produit.code" [disabled]="true" fluid />
        </div>

        <div class="flex flex-col gap-6">
            <div>
                <label for="type" class="block font-bold mb-4">Type</label>
                <p-select
                    [(ngModel)]="produit.type"
                    inputId="type"
                    [options]="typeOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="S\xE9lectionner un type"
                    fluid
                />
                <small class="text-red-500" *ngIf="submitted && !produit.type">Type obligatoire.</small>
            </div>

            <div>
                <label for="nom" class="block font-bold mb-4">Nom</label>
                <input type="text" pInputText id="nom" [(ngModel)]="produit.nom" required autofocus fluid />
                <small class="text-red-500" *ngIf="submitted && !produit.nom?.trim()">Nom obligatoire.</small>
            </div>

            <div>
                <label for="description" class="block font-bold mb-4">Description</label>
                <textarea id="description" pTextarea [(ngModel)]="produit.description" rows="3" cols="20" fluid></textarea>
            </div>

            <div *ngIf="produit?.id">
                <label for="statut" class="block font-bold mb-4">Statut</label>
                <p-select
                    [(ngModel)]="produit.statut"
                    inputId="statut"
                    [options]="statutOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="S\xE9lectionner un statut"
                    fluid
                />
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6">
                    <label for="qte_stock" class="block font-bold mb-4">Quantit\xE9</label>
                    <p-inputnumber id="qte_stock" [(ngModel)]="produit.qte_stock" fluid />
                </div>
                <div class="col-span-6">
                    <label for="cout" class="block font-bold mb-4">Co\xFBt</label>
                    <p-inputnumber id="cout" [(ngModel)]="produit.cout" mode="currency" currency="GNF" locale="fr-GN" fluid />
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6">
                    <label for="prix_achat" class="block font-bold mb-4">Prix achat</label>
                    <p-inputnumber id="prix_achat" [(ngModel)]="produit.prix_achat" mode="currency" currency="GNF" locale="fr-GN" fluid />
                </div>
                <div class="col-span-6">
                    <label for="prix_vente" class="block font-bold mb-4">Prix vente</label>
                    <p-inputnumber id="prix_vente" [(ngModel)]="produit.prix_vente" mode="currency" currency="GNF" locale="fr-GN" fluid />
                </div>
            </div>

            <div>
                <label for="prix_usine" class="block font-bold mb-4">Prix usine</label>
                <p-inputnumber id="prix_usine" [(ngModel)]="produit.prix_usine" mode="currency" currency="GNF" locale="fr-GN" fluid />
            </div>
        </div>
    </ng-template>

    <ng-template #footer>
        <p-button label="Annuler" icon="pi pi-times" text (click)="hideDialog()" [disabled]="saving" />
        <p-button
            label="Enregistrer"
            icon="pi pi-check"
            (click)="saveProduit()"
            [disabled]="saving"
            [loading]="saving"
        />
    </ng-template>
</p-dialog>

<p-confirmdialog [style]="{ width: '450px' }" />
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/produits/produits-liste/produits-liste.scss */\n:host {\n  display: block;\n}\n.produits-mobile-app {\n  display: none;\n}\n.produits-desktop ::ng-deep .produit-row {\n  cursor: pointer;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --mobile-primary: #5f6bff;\n    --mobile-text: #334155;\n    --mobile-muted: #7f8ca3;\n    --mobile-card: #f9fbff;\n    --mobile-border: #dbe2ee;\n  }\n  .produits-desktop {\n    display: none;\n  }\n  .produits-mobile-app {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin-top: calc(-0.25rem - env(safe-area-inset-top));\n    margin-left: -0.875rem;\n    margin-right: -0.875rem;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem env(safe-area-inset-bottom);\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background:\n      linear-gradient(\n        180deg,\n        #f3f5f9 0%,\n        #eaedf4 58%,\n        #e5eaf1 100%);\n    animation: mobileFade 0.24s ease-out;\n  }\n  .mobile-header {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    gap: 0.55rem;\n    margin: 0 -0.875rem 0;\n    padding: calc(0.5rem + env(safe-area-inset-top)) calc(0.875rem + env(safe-area-inset-right)) 0.6rem calc(0.875rem + env(safe-area-inset-left));\n    background: var(--mobile-card);\n    border-bottom: 1px solid var(--mobile-border);\n    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);\n    position: sticky;\n    top: 0;\n    z-index: 30;\n  }\n  .mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 0.75rem;\n    padding-bottom: calc(4rem + env(safe-area-inset-bottom));\n  }\n  .mobile-back,\n  .mobile-add {\n    width: 2.15rem;\n    height: 2.15rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: var(--mobile-primary) !important;\n    background: rgba(95, 107, 255, 0.1) !important;\n  }\n  .mobile-title-wrap {\n    flex: 1;\n    min-width: 0;\n    text-align: center;\n  }\n  .mobile-title {\n    margin: 0;\n    font-size: 1.35rem;\n    line-height: 1.1;\n    font-weight: 800;\n    color: var(--mobile-text);\n  }\n  .mobile-subtitle {\n    margin: 0.2rem 0 0;\n    font-size: 0.76rem;\n    font-weight: 600;\n    color: var(--mobile-muted);\n  }\n  .mobile-search {\n    background: #f7f9fd;\n    border: 1.5px solid var(--mobile-border);\n    border-radius: 0.95rem;\n    padding: 0.35rem 0.55rem;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);\n  }\n  .mobile-search .p-iconfield,\n  .mobile-search .p-inputtext {\n    width: 100%;\n  }\n  .mobile-search .p-inputtext {\n    border: 0;\n    box-shadow: none;\n    background: transparent;\n    color: var(--mobile-text);\n    font-size: 0.96rem;\n  }\n  .mobile-search .p-inputtext::placeholder {\n    color: #92a0b7;\n  }\n  .mobile-quick-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    padding: 0 0.15rem;\n  }\n  .mobile-quick-actions p-button {\n    flex: 1;\n  }\n  .mobile-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.65rem;\n    margin-top: 1rem;\n  }\n  .mobile-produit-card {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n    background: var(--mobile-card);\n    border: 1px solid var(--mobile-border);\n    border-radius: 1rem;\n    padding: 0.9rem;\n    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);\n    cursor: pointer;\n    transition: box-shadow 0.2s ease;\n  }\n  .mobile-produit-card:active {\n    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);\n  }\n  .mobile-card-media {\n    flex-shrink: 0;\n  }\n  .mobile-card-thumb {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    object-fit: contain;\n    border: 1px solid var(--mobile-border);\n    background: #fff;\n  }\n  .mobile-card-image-placeholder {\n    width: 64px;\n    height: 64px;\n    border-radius: 0.65rem;\n    background: #eef1f6;\n    border: 1px solid var(--mobile-border);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .mobile-card-image-placeholder .pi {\n    font-size: 1.5rem;\n    color: #92a0b7;\n  }\n  .mobile-card-body {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-card-top {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n    margin-bottom: 0.4rem;\n  }\n  .mobile-card-main {\n    flex: 1;\n    min-width: 0;\n  }\n  .mobile-code {\n    margin-bottom: 0.1rem;\n    font-size: 0.72rem;\n    line-height: 1.2;\n    color: #8b98b0;\n    letter-spacing: 0.02em;\n    font-weight: 700;\n  }\n  .mobile-name {\n    font-size: 1rem;\n    line-height: 1.25;\n    font-weight: 700;\n    color: var(--mobile-text);\n    word-break: break-word;\n  }\n  .mobile-card-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n  }\n  .mobile-card-summary {\n    font-size: 0.8rem;\n    color: var(--mobile-muted);\n    font-weight: 600;\n  }\n  .mobile-card-actions {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n  }\n  .mobile-chevron-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    color: var(--mobile-muted) !important;\n    flex-shrink: 0;\n  }\n  .mobile-state {\n    margin-top: 1rem;\n    background: #f8faff;\n    border: 1px dashed var(--mobile-border);\n    border-radius: 1rem;\n    padding: 1rem;\n    text-align: center;\n    color: var(--mobile-muted);\n    font-size: 0.9rem;\n  }\n  .mobile-load-more {\n    padding-top: 0.4rem;\n  }\n  .mobile-fab {\n    position: fixed;\n    bottom: calc(1rem + env(safe-area-inset-bottom));\n    right: calc(1rem + env(safe-area-inset-right));\n    z-index: 25;\n    width: 3.5rem;\n    height: 3.5rem;\n    min-width: 3.5rem;\n    min-height: 3.5rem;\n    padding: 0;\n    border: none;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    box-shadow: 0 4px 14px rgba(95, 107, 255, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    font-weight: 700;\n    font-size: 0.9rem;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .mobile-fab:active {\n    transform: scale(0.96);\n  }\n  .mobile-fab .pi {\n    font-size: 1.35rem;\n  }\n  .mobile-fab-label {\n    display: none;\n  }\n}\n@media screen and (max-width: 768px) and (min-width: 400px) {\n  .mobile-fab {\n    width: auto;\n    height: 3rem;\n    min-height: 3rem;\n    padding: 0 1.25rem;\n    border-radius: 999px;\n  }\n  .mobile-fab-label {\n    display: inline;\n  }\n}\n@media screen and (max-width: 768px) {\n  :host ::ng-deep .mobile-action-btn {\n    width: 100%;\n    justify-content: flex-start;\n    border: 0 !important;\n    background: transparent !important;\n    color: #4f5d79 !important;\n    padding: 0.35rem 0.45rem !important;\n    font-weight: 700;\n    border-radius: 0.7rem;\n    box-shadow: none !important;\n  }\n  :host ::ng-deep .mobile-action-btn .p-button-icon {\n    color: var(--mobile-primary);\n    font-size: 0.95rem;\n  }\n  :host ::ng-deep .mobile-action-btn .p-button-label {\n    font-size: 0.95rem;\n  }\n  :host ::ng-deep .mobile-status-tag {\n    font-size: 0.79rem;\n    font-weight: 700;\n    border-radius: 0.55rem;\n    padding: 0.22rem 0.55rem;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-success {\n    background: #d9f7e5;\n    color: #168f4a;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-warn,\n  :host ::ng-deep .mobile-status-tag.p-tag-warning {\n    background: #ffe8d3;\n    color: #dc6408;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-danger {\n    background: #ffe3e1;\n    color: #dd3f39;\n  }\n  :host ::ng-deep .mobile-status-tag.p-tag-secondary {\n    background: #e8edf6;\n    color: #64748b;\n  }\n  :host ::ng-deep .mobile-delete-action {\n    width: 2.05rem;\n    height: 2.05rem;\n    border-radius: 999px !important;\n    border-color: #ffb9b4 !important;\n    color: #ef4444 !important;\n    background: rgba(255, 255, 255, 0.9) !important;\n  }\n  :host ::ng-deep .mobile-delete-action .p-button-icon {\n    font-size: 0.84rem;\n  }\n  :host ::ng-deep .mobile-load-more-btn {\n    width: 100%;\n    border-radius: 999px;\n    justify-content: center;\n    font-weight: 700;\n    border: 1px solid #cfd7ff;\n    background: #eef2ff;\n    color: #4f5df4;\n  }\n  :host-context(.app-dark) :host {\n    --mobile-primary: var(--p-primary-400);\n    --mobile-text: var(--p-surface-100);\n    --mobile-muted: var(--p-surface-400);\n    --mobile-card: var(--p-surface-800);\n    --mobile-border: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .produits-mobile-app {\n    background: var(--p-surface-950);\n  }\n  :host-context(.app-dark) .mobile-header {\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .mobile-search {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    box-shadow: none;\n  }\n  :host-context(.app-dark) .mobile-search .p-inputtext::placeholder {\n    color: var(--p-surface-500);\n  }\n  :host-context(.app-dark) .mobile-produit-card {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  }\n  :host-context(.app-dark) .mobile-produit-card:active {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n  }\n  :host-context(.app-dark) .mobile-card-image-placeholder {\n    background: var(--p-surface-700);\n    border-color: var(--p-surface-600);\n  }\n  :host-context(.app-dark) .mobile-card-image-placeholder .pi {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-code {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-state {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-action-btn {\n    color: var(--p-surface-300) !important;\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-action-btn .p-button-icon {\n    color: var(--p-primary-400);\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-status-tag.p-tag-success {\n    background: rgba(5, 150, 105, 0.2);\n    color: #34d399;\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-status-tag.p-tag-warn,\n  :host-context(.app-dark) :host ::ng-deep .mobile-status-tag.p-tag-warning {\n    background: rgba(217, 119, 6, 0.2);\n    color: #fbbf24;\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-status-tag.p-tag-danger {\n    background: rgba(220, 38, 38, 0.2);\n    color: #f87171;\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-status-tag.p-tag-secondary {\n    background: var(--p-surface-700);\n    color: var(--p-surface-300);\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-delete-action {\n    border-color: var(--p-surface-600) !important;\n    background: var(--p-surface-700) !important;\n    color: #f87171 !important;\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-load-more-btn {\n    border-color: var(--p-surface-600);\n    background: var(--p-surface-800);\n    color: var(--p-primary-400);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media screen and (max-width: 768px) {\n  .mobile-search-row {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .mobile-search-row .mobile-search {\n    flex: 1;\n  }\n  .mobile-filter-btn {\n    position: relative;\n    width: 2.5rem;\n    height: 2.5rem;\n    flex-shrink: 0;\n    border-radius: 0.65rem;\n    border: 1.5px solid var(--mobile-border);\n    background: #f7f9fd;\n    color: var(--mobile-muted);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: background 0.15s ease, border-color 0.15s ease;\n  }\n  .mobile-filter-btn .pi {\n    font-size: 1rem;\n  }\n  .mobile-filter-btn--active {\n    background: rgba(95, 107, 255, 0.1);\n    border-color: var(--mobile-primary);\n    color: var(--mobile-primary);\n  }\n  .mobile-filter-badge {\n    position: absolute;\n    top: -0.3rem;\n    right: -0.3rem;\n    width: 1.15rem;\n    height: 1.15rem;\n    border-radius: 50%;\n    background: var(--mobile-primary);\n    color: #fff;\n    font-size: 0.62rem;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    line-height: 1;\n  }\n  :host ::ng-deep .mobile-filter-drawer {\n    width: min(320px, 88vw) !important;\n  }\n  :host ::ng-deep .mobile-filter-drawer .p-drawer-content {\n    padding: 1rem 1.25rem;\n    overflow-y: auto;\n  }\n  :host ::ng-deep .mobile-filter-drawer .p-drawer-footer {\n    padding: 0.75rem 1.25rem 1rem;\n    border-top: 1px solid var(--mobile-border);\n  }\n  .filter-drawer-body {\n    display: flex;\n    flex-direction: column;\n    gap: 1.25rem;\n  }\n  .filter-group {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .filter-label {\n    font-size: 0.7rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    color: #94a3b8;\n    margin-bottom: 0.1rem;\n  }\n  .filter-label--inline {\n    margin-bottom: 0;\n    font-size: 0.85rem;\n    text-transform: none;\n    letter-spacing: 0;\n    color: #334155;\n    font-weight: 600;\n  }\n  .filter-toggle-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.65rem 0;\n    border-top: 1px solid var(--mobile-border);\n    border-bottom: 1px solid var(--mobile-border);\n  }\n  .filter-drawer-footer {\n    display: flex;\n    gap: 0.75rem;\n  }\n  .filter-drawer-footer .p-button {\n    flex: 1;\n  }\n  :host-context(.app-dark) .mobile-filter-btn {\n    background: var(--p-surface-800);\n    border-color: var(--p-surface-600);\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .mobile-filter-btn--active {\n    background: rgba(var(--p-primary-400-rgb, 95, 107, 255), 0.15);\n    border-color: var(--p-primary-400);\n    color: var(--p-primary-400);\n  }\n  :host-context(.app-dark) .filter-label--inline {\n    color: var(--p-surface-200);\n  }\n  :host-context(.app-dark) .filter-toggle-row {\n    border-color: var(--p-surface-600);\n  }\n  :host-context(.app-dark) :host ::ng-deep .mobile-filter-drawer .p-drawer-footer {\n    border-top-color: var(--p-surface-700);\n  }\n}\n.desktop-products-caption {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.85rem;\n}\n.desktop-products-search {\n  width: 100%;\n  max-width: 22rem;\n}\n.desktop-products-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-left: auto;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 1200px) {\n  .desktop-products-actions {\n    width: 100%;\n    margin-left: 0;\n    justify-content: flex-start;\n  }\n}\n:host ::ng-deep .desktop-filter-select {\n  min-width: 11rem;\n}\n.desktop-filter-count {\n  font-size: 0.82rem;\n  color: var(--p-surface-400);\n  font-weight: 500;\n  white-space: nowrap;\n}\n:host-context(.app-dark) .desktop-filter-count {\n  color: var(--p-surface-500);\n}\n/*# sourceMappingURL=produits-liste.css.map */\n'] }]
  }], () => [{ type: Router }, { type: ActivatedRoute }, { type: ProduitService }, { type: MessageService }, { type: ConfirmationService }, { type: AuthService }, { type: UsineContextService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }], onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsListe, { className: "ProduitsListe", filePath: "src/app/pages/produits/produits-liste/produits-liste.ts", lineNumber: 78 });
})();

// src/app/pages/produits/produits-form/produits-form.ts
var _c02 = ["buttonEl"];
function ProduitsForm_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function ProduitsForm_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Produit global \u2014 vous pouvez modifier la d\xE9finition (admin/manager).");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Produit global \u2014 d\xE9finition en lecture seule pour ce r\xF4le.");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275template(2, ProduitsForm_div_8_span_2_Template, 2, 0, "span", 12)(3, ProduitsForm_div_8_span_3_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canManageSystemDefinition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.canManageSystemDefinition);
  }
}
function ProduitsForm_div_10_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "i", 85);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Ajouter une photo");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_10_ng_template_3_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ProduitsForm_div_10_ng_template_3_div_2_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_10_ng_template_3_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_10_ng_template_3_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "p", 96);
    \u0275\u0275text(2, "Supprimer cette image ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 97)(4, "button", 98);
    \u0275\u0275listener("click", function ProduitsForm_div_10_ng_template_3_div_2_div_4_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteImage($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 99);
    \u0275\u0275listener("click", function ProduitsForm_div_10_ng_template_3_div_2_div_4_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelDeleteImage($event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ProduitsForm_div_10_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "img", 87);
    \u0275\u0275template(2, ProduitsForm_div_10_ng_template_3_div_2_button_2_Template, 2, 0, "button", 88)(3, ProduitsForm_div_10_ng_template_3_div_2_div_3_Template, 2, 0, "div", 89)(4, ProduitsForm_div_10_ng_template_3_div_2_div_4_Template, 6, 0, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.imagePreview || ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fieldsDisabled && !ctx_r1.confirmingDelete && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading && ctx_r1.selectedImageFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmingDelete);
  }
}
function ProduitsForm_div_10_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275listener("click", function ProduitsForm_div_10_ng_template_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      \u0275\u0275nextContext();
      const mobileFileUploader_r5 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.fieldsDisabled && mobileFileUploader_r5.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, ProduitsForm_div_10_ng_template_3_div_1_Template, 4, 0, "div", 15)(2, ProduitsForm_div_10_ng_template_3_div_2_Template, 5, 4, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.imagePreview && !ctx_r1.product.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview || ctx_r1.product.image_url);
  }
}
function ProduitsForm_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-fileUpload", 82, 0);
    \u0275\u0275listener("onSelect", function ProduitsForm_div_10_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload($event));
    });
    \u0275\u0275template(3, ProduitsForm_div_10_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("customUpload", true)("multiple", false)("showUploadButton", false)("showCancelButton", false)("auto", true)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_11_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 104);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.imageError, " ");
  }
}
function ProduitsForm_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "small", 101);
    \u0275\u0275element(2, "i", 102);
    \u0275\u0275text(3, "JPG, PNG, WebP \u2014 5 Mo max ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProduitsForm_div_11_small_4_Template, 3, 1, "small", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.imageError);
  }
}
function ProduitsForm_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "img", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProduitsForm_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "i", 106);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune image");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "label", 19);
    \u0275\u0275text(2, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_20_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.qte_stock, $event) || (ctx_r1.product.qte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.qte_stock);
    \u0275\u0275property("showButtons", true)("min", 0)("disabled", ctx_r1.isQteStockDisabled());
  }
}
function ProduitsForm_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 108);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2, " Stock non g\xE9r\xE9 pour les services ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Nom du produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_29_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Achat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_29_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_achat, $event) || (ctx_r1.product.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProduitsForm_div_29_small_4_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_achat);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_achat));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_achat) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_30_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_30_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_vente, $event) || (ctx_r1.product.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProduitsForm_div_30_small_4_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_vente);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_vente));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_vente) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_35_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Obligatoire ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2, "Usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_35_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_usine, $event) || (ctx_r1.product.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProduitsForm_div_35_small_4_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_usine);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "i", 112);
    \u0275\u0275text(2, " Au moins un prix requis pour un service. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 113);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-toggleswitch", 35);
    \u0275\u0275listener("ngModelChange", function ProduitsForm_div_37_Template_p_toggleswitch_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatutToggleChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.isActifSwitch);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isActifSwitch ? "Actif" : "Inactif");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isActifSwitch)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 114);
    \u0275\u0275element(2, "i", 115);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Ce produit sera cr\xE9\xE9 en ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". L'activation (globale puis par usine) se fait dans une \xE9tape distincte.");
    \u0275\u0275elementEnd()()();
  }
}
function ProduitsForm_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 71)(2, "span", 34);
    \u0275\u0275text(3, "Produit global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 116);
    \u0275\u0275text(5, "Disponible dans toutes les usines");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-toggleswitch", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_43_Template_p_toggleswitch_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.is_global, $event) || (ctx_r1.product.is_global = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.is_global);
    \u0275\u0275property("disabled", !ctx_r1.canToggleGlobal());
  }
}
function ProduitsForm_div_44_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSeuilAlerteStockErrorMessage(), " ");
  }
}
function ProduitsForm_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "label", 19);
    \u0275\u0275text(2, "Seuil d'alerte stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_44_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.seuil_alerte_stock, $event) || (ctx_r1.product.seuil_alerte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 108);
    \u0275\u0275element(5, "i", 50);
    \u0275\u0275text(6, " D\xE9clenche l'alerte quand le stock atteint ce seuil. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProduitsForm_div_44_small_7_Template, 2, 1, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.seuil_alerte_stock);
    \u0275\u0275property("showButtons", true)("min", 0)("minFractionDigits", 0)("maxFractionDigits", 0)("disabled", ctx_r1.isSeuilAlerteStockDisabled())("invalid", ctx_r1.submitted && ctx_r1.isSeuilAlerteStockInvalid());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isSeuilAlerteStockInvalid() && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "button", 119);
    \u0275\u0275listener("click", function ProduitsForm_div_45_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 120);
    \u0275\u0275listener("click", function ProduitsForm_div_45_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode === "create" ? ctx_r1.onCancel() : ctx_r1.cancelEditing());
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
function ProduitsForm_div_53_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Produit global \u2014 \xE9dition autoris\xE9e (admin/manager)");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_53_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Produit global \u2014 lecture seule pour ce r\xF4le");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275element(1, "i", 81);
    \u0275\u0275template(2, ProduitsForm_div_53_span_2_Template, 2, 0, "span", 12)(3, ProduitsForm_div_53_span_3_Template, 2, 0, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canManageSystemDefinition);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.canManageSystemDefinition);
  }
}
function ProduitsForm_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 122);
    \u0275\u0275listener("click", function ProduitsForm_button_54_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.enableEditing());
    });
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_small_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Nom du produit obligatoire. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_78_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Prix d'achat obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "p-inputnumber", 124);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_78_Template_p_inputnumber_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_achat, $event) || (ctx_r1.product.prix_achat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProduitsForm_div_78_small_2_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_achat);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_achat));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixAchatRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_achat) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_79_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, " Prix de vente obligatoire pour ce type. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "p-inputnumber", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_79_Template_p_inputnumber_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_vente, $event) || (ctx_r1.product.prix_vente = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProduitsForm_div_79_small_2_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_vente);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_vente));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixVenteRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_vente) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_80_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 109);
    \u0275\u0275text(1, ' Prix usine obligatoire pour "Fabricable". ');
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123)(1, "p-inputnumber", 126);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_80_Template_p_inputnumber_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.prix_usine, $event) || (ctx_r1.product.prix_usine = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ProduitsForm_div_80_small_2_Template, 2, 0, "small", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.prix_usine);
    \u0275\u0275property("min", 0)("disabled", ctx_r1.fieldsDisabled)("invalid", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isPrixUsineRequired() && ctx_r1.isPriceMissing(ctx_r1.product.prix_usine) && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275element(1, "i", 128);
    \u0275\u0275text(2, " Pour un service, renseignez au moins un prix : achat ou vente. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_89_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275element(1, "i", 136);
    \u0275\u0275elementStart(2, "span", 137);
    \u0275\u0275text(3, "Ajouter une image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 138);
    \u0275\u0275text(5, "Cliquez pour s\xE9lectionner");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_89_ng_template_3_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 145);
    \u0275\u0275listener("click", function ProduitsForm_div_89_ng_template_3_div_2_button_3_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImage($event));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_89_ng_template_3_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275element(1, "i", 147);
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_89_ng_template_3_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "p", 149);
    \u0275\u0275text(2, "Supprimer cette image ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 150)(4, "button", 98);
    \u0275\u0275listener("click", function ProduitsForm_div_89_ng_template_3_div_2_div_5_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.confirmDeleteImage($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 99);
    \u0275\u0275listener("click", function ProduitsForm_div_89_ng_template_3_div_2_div_5_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelDeleteImage($event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function ProduitsForm_div_89_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140);
    \u0275\u0275element(2, "img", 141);
    \u0275\u0275template(3, ProduitsForm_div_89_ng_template_3_div_2_button_3_Template, 2, 0, "button", 142)(4, ProduitsForm_div_89_ng_template_3_div_2_div_4_Template, 2, 0, "div", 143)(5, ProduitsForm_div_89_ng_template_3_div_2_div_5_Template, 6, 0, "div", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.imagePreview || ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.fieldsDisabled && !ctx_r1.confirmingDelete && !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading && ctx_r1.selectedImageFile);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.confirmingDelete);
  }
}
function ProduitsForm_div_89_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275listener("click", function ProduitsForm_div_89_ng_template_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      \u0275\u0275nextContext();
      const fileUploader_r22 = \u0275\u0275reference(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r1.fieldsDisabled && fileUploader_r22.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, ProduitsForm_div_89_ng_template_3_div_1_Template, 6, 0, "div", 133)(2, ProduitsForm_div_89_ng_template_3_div_2_Template, 6, 4, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.imagePreview && !ctx_r1.product.image_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.imagePreview || ctx_r1.product.image_url);
  }
}
function ProduitsForm_div_89_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 151);
    \u0275\u0275element(1, "i", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.imageError, " ");
  }
}
function ProduitsForm_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-fileUpload", 129, 2);
    \u0275\u0275listener("onSelect", function ProduitsForm_div_89_Template_p_fileUpload_onSelect_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUpload($event));
    });
    \u0275\u0275template(3, ProduitsForm_div_89_ng_template_3_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 130);
    \u0275\u0275element(6, "i", 102);
    \u0275\u0275text(7, "JPG, PNG, WebP \u2014 5 Mo max ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProduitsForm_div_89_small_8_Template, 3, 1, "small", 131);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("customUpload", true)("multiple", false)("showUploadButton", false)("showCancelButton", false)("auto", true)("disabled", ctx_r1.fieldsDisabled);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.imageError);
  }
}
function ProduitsForm_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275element(1, "img", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.product.getImageUrl(), \u0275\u0275sanitizeUrl);
  }
}
function ProduitsForm_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 153)(1, "span", 154);
    \u0275\u0275text(2, "Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 155);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-toggleswitch", 35);
    \u0275\u0275listener("ngModelChange", function ProduitsForm_div_96_Template_p_toggleswitch_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStatutToggleChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isActifSwitch ? "Actif" : "Inactif");
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isActifSwitch)("disabled", ctx_r1.fieldsDisabled);
  }
}
function ProduitsForm_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275element(1, "i", 115);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cr\xE9\xE9 en ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "brouillon");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \u2014 activation globale puis par usine dans une \xE9tape distincte.");
    \u0275\u0275elementEnd()();
  }
}
function ProduitsForm_div_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 71)(2, "span", 72);
    \u0275\u0275text(3, "Produit global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 73);
    \u0275\u0275text(5, "Disponible dans toutes les usines");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p-toggleswitch", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_105_Template_p_toggleswitch_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.is_global, $event) || (ctx_r1.product.is_global = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.is_global);
    \u0275\u0275property("disabled", !ctx_r1.canToggleGlobal());
  }
}
function ProduitsForm_div_106_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 159);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSeuilAlerteStockErrorMessage(), " ");
  }
}
function ProduitsForm_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2, "Seuil d'alerte stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "p-inputnumber", 156);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_106_Template_p_inputnumber_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.seuil_alerte_stock, $event) || (ctx_r1.product.seuil_alerte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 157);
    \u0275\u0275element(6, "i", 102);
    \u0275\u0275text(7, "D\xE9clenche l'alerte quand le stock atteint ce seuil. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProduitsForm_div_106_small_8_Template, 2, 1, "small", 158);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.seuil_alerte_stock);
    \u0275\u0275property("showButtons", true)("min", 0)("minFractionDigits", 0)("maxFractionDigits", 0)("disabled", ctx_r1.isSeuilAlerteStockDisabled())("invalid", ctx_r1.submitted && ctx_r1.isSeuilAlerteStockInvalid());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.submitted && ctx_r1.isSeuilAlerteStockInvalid() && ctx_r1.isEditing);
  }
}
function ProduitsForm_div_112_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 161);
    \u0275\u0275element(1, "i", 102);
    \u0275\u0275text(2, "Le stock n'est pas g\xE9r\xE9 pour les services. ");
    \u0275\u0275elementEnd();
  }
}
function ProduitsForm_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2, "Quantit\xE9 en stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 67)(4, "p-inputnumber", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_div_112_Template_p_inputnumber_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.product.qte_stock, $event) || (ctx_r1.product.qte_stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, ProduitsForm_div_112_small_5_Template, 3, 0, "small", 160);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.product.qte_stock);
    \u0275\u0275property("showButtons", true)("min", 0)("disabled", ctx_r1.isQteStockDisabled());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.product.type === "service");
  }
}
function ProduitsForm_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162)(1, "div", 163)(2, "button", 164);
    \u0275\u0275listener("click", function ProduitsForm_div_114_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 165);
    \u0275\u0275listener("click", function ProduitsForm_div_114_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode === "create" ? ctx_r1.onCancel() : ctx_r1.cancelEditing());
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
var ProduitsForm = class _ProduitsForm {
  static ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  static MAX_SIZE = 5 * 1024 * 1024;
  // 5 Mo
  buttonEl;
  mode = "create";
  initialData = null;
  loading = false;
  canManageSystemDefinition = false;
  submitForm = new EventEmitter();
  cancel = new EventEmitter();
  deleteImage = new EventEmitter();
  submitted = false;
  isEditing = false;
  // Options de type avec labels franÃ§ais
  typeOptions = [
    { label: PRODUIT_TYPE_LABELS.materiel, value: "materiel" },
    { label: PRODUIT_TYPE_LABELS.service, value: "service" },
    { label: PRODUIT_TYPE_LABELS.fabricable, value: "fabricable" },
    { label: PRODUIT_TYPE_LABELS.achat_vente, value: "achat_vente" }
  ];
  // Options de statut avec labels français
  statutOptions = [
    { label: PRODUIT_STATUT_LABELS.brouillon, value: "brouillon" },
    { label: PRODUIT_STATUT_LABELS.actif, value: "actif" },
    { label: PRODUIT_STATUT_LABELS.inactif, value: "inactif" }
  ];
  // Produit est une class -> on instancie
  product = new Produit({
    nom: "",
    code: "",
    prix_usine: null,
    prix_achat: null,
    prix_vente: null,
    qte_stock: 0,
    cout: null,
    statut: "brouillon",
    type: "materiel",
    in_stock: true,
    is_archived: false,
    is_critique: false,
    is_global: false,
    seuil_alerte_stock: null,
    description: null,
    image_url: null
  });
  selectedImageFile = null;
  imagePreview = null;
  imageError = null;
  confirmingDelete = false;
  ngOnInit() {
    if (this.initialData) {
      this.product = new Produit(this.initialData);
      this.imagePreview = this.initialData.image_url;
    }
    if (this.mode === "create") {
      this.isEditing = true;
    }
  }
  // =========================
  // VISIBILITÃ‰ / OBLIGATION
  // =========================
  // RÃ¨gles mÃ©tier:
  // - materiel     â†’ prix_achat obligatoire
  // - service      -> prix_achat ou prix_vente (au moins un), qte_stock = 0
  // - fabricable   â†’ prix_usine + prix_vente obligatoires
  // - achat_vente  â†’ prix_achat + prix_vente obligatoires
  isPrixUsineVisible() {
    return this.product.type === "fabricable";
  }
  isPrixUsineRequired() {
    return this.product.type === "fabricable";
  }
  isPrixAchatVisible() {
    return ["materiel", "service", "achat_vente"].includes(this.product.type);
  }
  isPrixVenteVisible() {
    return ["service", "fabricable", "achat_vente"].includes(this.product.type);
  }
  isPrixVenteRequired() {
    return ["fabricable", "achat_vente"].includes(this.product.type);
  }
  ngOnChanges(changes) {
    if (changes["initialData"]?.currentValue) {
      this.revokePreviewUrl();
      this.product = new Produit(changes["initialData"].currentValue);
      this.imagePreview = changes["initialData"].currentValue.image_url ?? null;
      if (this.mode === "edit") {
        this.isEditing = false;
        this.submitted = false;
        this.selectedImageFile = null;
        this.imageError = null;
        this.confirmingDelete = false;
      }
    }
    if (changes["mode"]?.currentValue === "create") {
      this.isEditing = true;
    }
  }
  isPrixAchatRequired() {
    return ["materiel", "achat_vente"].includes(this.product.type);
  }
  // Pour le type "service", qte_stock doit Ãªtre 0 et dÃ©sactivÃ©
  isQteStockDisabled() {
    return this.product.type === "service" || this.fieldsDisabled;
  }
  // Seuil d'alerte stock : caché/désactivé pour les services (pas de stock)
  isSeuilAlerteStockDisabled() {
    return this.product.type === "service" || this.fieldsDisabled;
  }
  /** true si le produit est critique et a un type avec stock (afficher le champ seuil) */
  isSeuilAlerteStockVisible() {
    return this.product.is_critique === true && this.product.type !== "service";
  }
  /** Validation : entier >= 0 si renseigné */
  isSeuilAlerteStockInvalid() {
    const v = this.product.seuil_alerte_stock;
    if (v === null || v === void 0)
      return false;
    const n = Number(v);
    return !Number.isInteger(n) || n < 0;
  }
  getSeuilAlerteStockErrorMessage() {
    const v = this.product.seuil_alerte_stock;
    if (v === null || v === void 0)
      return "";
    const n = Number(v);
    if (!Number.isInteger(n))
      return "Doit \xEAtre un nombre entier.";
    if (n < 0)
      return "Doit \xEAtre sup\xE9rieur ou \xE9gal \xE0 0.";
    return "";
  }
  // =========================
  // HELPERS NUMÃ‰RIQUES
  // =========================
  isValidPrice(value) {
    return typeof value === "number" && value >= 0;
  }
  isPriceMissing(value) {
    return value === null || value === void 0;
  }
  hasServicePrice() {
    return this.isValidPrice(this.product.prix_achat) || this.isValidPrice(this.product.prix_vente);
  }
  showServicePriceError() {
    return this.submitted && this.isEditing && this.product.type === "service" && !this.hasServicePrice();
  }
  // Switch statut (actif/inactif)
  get isActifSwitch() {
    return this.product.statut === "actif";
  }
  onStatutToggleChange(value) {
    this.product.statut = value ? "actif" : "inactif";
  }
  canToggleGlobal() {
    return this.canManageSystemDefinition && !this.fieldsDisabled;
  }
  // =========================
  // TYPE CHANGE
  // =========================
  onTypeChange() {
    if (!this.isPrixUsineVisible())
      this.product.prix_usine = null;
    if (!this.isPrixAchatVisible())
      this.product.prix_achat = null;
    if (!this.isPrixVenteVisible())
      this.product.prix_vente = null;
    if (this.product.type === "service") {
      this.product.qte_stock = 0;
    }
  }
  // =========================
  // VALIDATION
  // =========================
  isValid() {
    if (!this.product.nom?.trim() || !this.product.type)
      return false;
    if (this.isPrixUsineRequired() && !this.isValidPrice(this.product.prix_usine))
      return false;
    if (this.isPrixVenteRequired() && !this.isValidPrice(this.product.prix_vente))
      return false;
    if (this.isPrixAchatRequired() && !this.isValidPrice(this.product.prix_achat))
      return false;
    if (this.product.type === "service" && !this.hasServicePrice())
      return false;
    if (this.isSeuilAlerteStockInvalid())
      return false;
    return true;
  }
  // =========================
  // EDIT MODE
  // =========================
  enableEditing() {
    if (!this.canEditSystemDefinition())
      return;
    this.isEditing = true;
  }
  cancelEditing() {
    this.isEditing = false;
    this.submitted = false;
    this.selectedImageFile = null;
    if (this.initialData) {
      this.product = new Produit(this.initialData);
      this.imagePreview = this.initialData.image_url;
    } else {
      this.resetForm();
    }
  }
  // =========================
  // IMAGE UPLOAD
  // =========================
  onUpload(event) {
    if (!event?.files?.length)
      return;
    const file = event.files[0];
    this.imageError = null;
    if (!_ProduitsForm.ALLOWED_TYPES.includes(file.type)) {
      this.imageError = "Format non support\xE9. Utilisez JPG, PNG ou WebP.";
      return;
    }
    if (file.size > _ProduitsForm.MAX_SIZE) {
      this.imageError = "Fichier trop volumineux. Taille max : 5 Mo.";
      return;
    }
    this.revokePreviewUrl();
    this.selectedImageFile = file;
    this.imagePreview = URL.createObjectURL(file);
  }
  removeImage(event) {
    event.stopPropagation();
    if (this.selectedImageFile) {
      this.revokePreviewUrl();
      this.selectedImageFile = null;
      this.imagePreview = null;
      this.imageError = null;
    } else if (this.product.image_url) {
      this.confirmingDelete = true;
    }
  }
  confirmDeleteImage(event) {
    event.stopPropagation();
    this.confirmingDelete = false;
    this.product.image_url = null;
    this.imagePreview = null;
    this.deleteImage.emit();
  }
  cancelDeleteImage(event) {
    event.stopPropagation();
    this.confirmingDelete = false;
  }
  revokePreviewUrl() {
    if (this.imagePreview?.startsWith("blob:")) {
      URL.revokeObjectURL(this.imagePreview);
    }
  }
  ngOnDestroy() {
    this.revokePreviewUrl();
  }
  // =========================
  // SUBMIT
  // =========================
  onSubmit() {
    if (!this.canEditSystemDefinition())
      return;
    this.submitted = true;
    if (!this.isValid())
      return;
    const dto = {
      nom: this.product.nom.trim(),
      type: this.product.type,
      description: this.product.description?.trim() || void 0,
      cout: this.product.cout ?? void 0
    };
    if (this.mode === "edit") {
      dto.statut = this.product.statut;
      dto.qte_stock = this.product.qte_stock;
    }
    dto.is_critique = this.product.is_critique;
    if (this.canManageSystemDefinition) {
      dto.is_global = this.product.is_global;
    }
    const rawSeuil = this.product.seuil_alerte_stock;
    const hasValue = rawSeuil !== null && rawSeuil !== void 0 && !Number.isNaN(Number(rawSeuil));
    if (hasValue) {
      const n = Math.floor(Number(rawSeuil));
      dto.seuil_alerte_stock = n >= 0 ? n : null;
    } else {
      dto.seuil_alerte_stock = null;
    }
    if (this.product.prix_usine !== null)
      dto.prix_usine = this.product.prix_usine;
    if (this.product.prix_vente !== null)
      dto.prix_vente = this.product.prix_vente;
    if (this.product.prix_achat !== null)
      dto.prix_achat = this.product.prix_achat;
    if (this.selectedImageFile)
      dto.image = this.selectedImageFile;
    this.submitForm.emit(dto);
  }
  // =========================
  // CANCEL
  // =========================
  onCancel() {
    this.cancel.emit();
  }
  // =========================
  // UI STATE
  // =========================
  get fieldsDisabled() {
    return this.mode === "edit" && !this.isEditing || this.loading;
  }
  canEditSystemDefinition() {
    if (this.mode === "create")
      return true;
    if (!this.product?.is_global)
      return true;
    return this.canManageSystemDefinition;
  }
  getPrixHelperText() {
    switch (this.product.type) {
      case "materiel":
        return "Prix d'achat obligatoire";
      case "service":
        return "Pour un service, renseignez au moins un prix : achat ou vente";
      case "fabricable":
        return "Prix usine et prix de vente obligatoires";
      case "achat_vente":
        return "Prix d'achat et prix de vente obligatoires";
      default:
        return "S\xC3\xA9lectionnez un type de produit";
    }
  }
  // =========================
  // RESET
  // =========================
  resetForm() {
    this.revokePreviewUrl();
    this.submitted = false;
    this.selectedImageFile = null;
    this.imagePreview = null;
    this.imageError = null;
    this.product = new Produit({
      nom: "",
      code: "",
      prix_usine: null,
      prix_achat: null,
      prix_vente: null,
      qte_stock: 0,
      cout: null,
      statut: "brouillon",
      type: "materiel",
      in_stock: true,
      is_archived: false,
      is_critique: false,
      is_global: false,
      seuil_alerte_stock: null,
      description: null,
      image_url: null
    });
  }
  static \u0275fac = function ProduitsForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsForm, selectors: [["app-produits-form"]], viewQuery: function ProduitsForm_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonEl = _t);
    }
  }, inputs: { mode: "mode", initialData: "initialData", loading: "loading", canManageSystemDefinition: "canManageSystemDefinition" }, outputs: { submitForm: "submitForm", cancel: "cancel", deleteImage: "deleteImage" }, features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275NgOnChangesFeature], decls: 115, vars: 60, consts: [["mobileFileUploader", ""], ["content", ""], ["fileUploader", ""], [1, "card", "product-form"], [1, "mobile-form-container"], [1, "mobile-form-header"], ["pButton", "", "pRipple", "", "icon", "pi pi-arrow-left", 1, "p-button-rounded", "p-button-text", "mobile-form-back", 3, "click"], [1, "mobile-form-title-wrap"], [1, "mobile-form-title"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "class", "p-button-rounded p-button-text mobile-form-edit", 3, "click", 4, "ngIf"], ["class", "mx-3 mt-2 mb-1 px-3 py-2 rounded flex items-center gap-2 text-sm bg-blue-50 text-blue-700 border border-blue-200", 4, "ngIf"], [1, "mobile-image-card"], [4, "ngIf"], ["class", "px-3 pb-2", 4, "ngIf"], ["class", "mobile-upload-preview", 4, "ngIf"], ["class", "mobile-upload-placeholder", 4, "ngIf"], [1, "mobile-section-card"], [1, "mobile-meta-row"], [1, "mobile-meta-field"], [1, "mobile-field-label"], ["placeholder", "Type", "fluid", "", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled"], ["class", "mobile-meta-field", 4, "ngIf"], ["class", "mobile-info-hint", 4, "ngIf"], ["pInputText", "", "type", "text", "placeholder", "Nom du produit", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], ["class", "text-red-500", 4, "ngIf"], [1, "mobile-price-grid"], ["class", "mobile-price-item", 4, "ngIf"], [1, "mobile-price-item"], [1, "mobile-price-label"], ["mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled"], ["class", "mobile-service-alert", 4, "ngIf"], ["class", "mobile-section-card mobile-status-row", 4, "ngIf"], ["class", "mobile-section-card", 4, "ngIf"], [1, "mobile-section-card", "mobile-status-row"], [1, "mobile-status-label"], [1, "ml-auto", 3, "ngModelChange", "ngModel", "disabled"], ["class", "mobile-bottom-actions", 4, "ngIf"], [1, "desktop-form-container"], [1, "flex", "justify-between", "items-start", "gap-4", "mb-8", "form-header"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-bold", "text-2xl"], [1, "text-surface-500", "dark:text-surface-300"], ["class", "flex items-center gap-2 px-3 py-1.5 rounded text-sm bg-blue-50 text-blue-700 border border-blue-200", 4, "ngIf"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "secondary", "class", "w-auto", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-6", "flex-wrap"], [1, "col-span-12", "lg:col-span-8"], [1, "form-section", "mb-4"], [1, "type-selector-block"], [1, "form-field-label"], ["placeholder", "S\xE9lectionner un type", "fluid", "", 3, "ngModelChange", "onChange", "options", "ngModel", "disabled"], [1, "form-field-hint"], [1, "pi", "pi-info-circle"], [1, "grid", "grid-cols-12", "gap-5", "mt-4"], [1, "col-span-12"], ["for", "nom", 1, "form-field-label"], ["id", "nom", "pInputText", "", "type", "text", "fluid", "", 3, "ngModelChange", "ngModel", "disabled", "invalid"], [1, "prix-section-header"], [1, "flex", "gap-4"], ["class", "flex-1 min-w-0 price-field-anim", 4, "ngIf"], [1, "prix-helper-text"], ["class", "col-span-12 service-alert", 4, "ngIf"], [1, "form-section"], [1, "section-title"], [1, "pi", "pi-image", "mr-2"], ["class", "flex justify-center mt-2", 4, "ngIf"], [1, "col-span-12", "lg:col-span-4", "flex", "flex-col", "gap-y-4", "mt-7"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "block", "border-b", "border-surface-200", "dark:border-surface-700", "p-4"], [1, "p-4"], ["class", "bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded", 4, "ngIf"], ["class", "flex items-start gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2", 4, "ngIf"], [1, "bg-surface-100", "dark:bg-surface-700", "py-2", "px-4", "flex", "items-center", "rounded", "mt-2"], [1, "flex", "flex-col", "flex-1"], [1, "text-black/90", "dark:text-surface-0!", "font-bold"], [1, "text-surface-500"], ["class", "bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded mt-2", 4, "ngIf"], ["class", "border border-surface-200 dark:border-surface-700 rounded", 4, "ngIf"], ["inputId", "cout", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Co\xFBt", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled"], [1, "sticky", "top-6", "flex", "flex-col", "gap-4"], ["class", "form-section p-4", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", 1, "p-button-rounded", "p-button-text", "mobile-form-edit", 3, "click"], [1, "mx-3", "mt-2", "mb-1", "px-3", "py-2", "rounded", "flex", "items-center", "gap-2", "text-sm", "bg-blue-50", "text-blue-700", "border", "border-blue-200"], [1, "pi", "pi-globe"], ["name", "image", "accept", "image/*", "styleClass", "mobile-uploader", 3, "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "disabled"], [1, "mobile-upload-zone", 3, "click"], [1, "mobile-upload-placeholder"], [1, "pi", "pi-camera"], [1, "mobile-upload-preview"], ["alt", "Image du produit", 3, "src"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", "class", "mobile-remove-img", 3, "click", 4, "ngIf"], ["class", "mobile-upload-loading", 4, "ngIf"], ["class", "mobile-delete-confirm", 4, "ngIf"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", 1, "mobile-remove-img", 3, "click"], [1, "pi", "pi-times"], [1, "mobile-upload-loading"], [1, "pi", "pi-spin", "pi-spinner", "text-white", "text-3xl"], [1, "mobile-delete-confirm"], [1, "text-white", "text-sm", "font-semibold", "mb-3", "text-center"], [1, "flex", "gap-2", "justify-center"], ["pButton", "", "type", "button", "severity", "danger", "size", "small", "label", "Supprimer", 3, "click"], ["pButton", "", "type", "button", "severity", "secondary", "size", "small", "label", "Annuler", 3, "click"], [1, "px-3", "pb-2"], [1, "block", "text-center", "text-surface-400"], [1, "pi", "pi-info-circle", "mr-1"], ["class", "block text-center text-red-500 mt-1", 4, "ngIf"], [1, "block", "text-center", "text-red-500", "mt-1"], [1, "pi", "pi-exclamation-circle", "mr-1"], [1, "pi", "pi-image"], ["placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "disabled"], [1, "mobile-info-hint"], [1, "text-red-500"], ["mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "0", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], [1, "mobile-service-alert"], [1, "pi", "pi-exclamation-circle"], [1, "mobile-status-value"], [1, "flex", "items-start", "gap-2", "text-sm", "text-amber-700", "bg-amber-50", "border", "border-amber-200", "rounded", "px-3", "py-2"], [1, "pi", "pi-info-circle", "mt-0.5", "shrink-0"], [1, "text-surface-400", "text-xs"], ["placeholder", "Ex: 5 (vide = seuil global)", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "minFractionDigits", "maxFractionDigits", "disabled", "invalid"], [1, "mobile-bottom-actions"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "mobile-btn-save", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "mobile-btn-cancel", 3, "click", "disabled"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "rounded", "text-sm", "bg-blue-50", "text-blue-700", "border", "border-blue-200"], ["pButton", "", "pRipple", "", "label", "Modifier", "icon", "pi pi-pencil", "severity", "secondary", 1, "w-auto", 3, "click"], [1, "flex-1", "min-w-0", "price-field-anim"], ["inputId", "prix_achat", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix d'achat", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], ["inputId", "prix_vente", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix de vente", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], ["inputId", "prix_usine", "mode", "currency", "currency", "GNF", "locale", "fr-GN", "placeholder", "Prix usine", "fluid", "", 3, "ngModelChange", "ngModel", "min", "disabled", "invalid"], [1, "col-span-12", "service-alert"], [1, "pi", "pi-exclamation-circle", "mr-2"], ["name", "image", "accept", "image/*", "styleClass", "product-uploader border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded-lg", 3, "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto", "disabled"], [1, "block", "mt-2", "text-surface-400"], ["class", "block mt-1 text-red-500", 4, "ngIf"], [1, "w-full", "py-4", "upload-dropzone", 3, "click"], ["class", "h-48 flex flex-col justify-center items-center", 4, "ngIf"], ["class", "relative w-full flex justify-center py-3", 4, "ngIf"], [1, "h-48", "flex", "flex-col", "justify-center", "items-center"], [1, "pi", "pi-image", "text-primary", "text-4xl", "mb-4"], [1, "block", "font-semibold", "text-surface-900", "dark:text-surface-0", "text-lg"], [1, "text-surface-500", "text-sm", "mt-1"], [1, "relative", "w-full", "flex", "justify-center", "py-3"], [1, "relative", "inline-block"], ["alt", "Image du produit", 1, "max-h-72", "rounded", "shadow", "object-contain", 3, "src"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", "class", "absolute -top-2 -right-2", 3, "click", 4, "ngIf"], ["class", "absolute inset-0 flex items-center justify-center bg-surface-0/80 dark:bg-surface-900/80 rounded", 4, "ngIf"], ["class", "absolute inset-0 flex flex-col items-center justify-center rounded", "style", "background: rgba(0,0,0,0.65);", 4, "ngIf"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", "severity", "danger", 1, "absolute", "-top-2", "-right-2", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-surface-0/80", "dark:bg-surface-900/80", "rounded"], [1, "pi", "pi-spin", "pi-spinner", "text-primary", "text-3xl"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "rounded", 2, "background", "rgba(0,0,0,0.65)"], [1, "text-white", "text-sm", "font-semibold", "mb-3", "px-3", "text-center"], [1, "flex", "gap-2"], [1, "block", "mt-1", "text-red-500"], [1, "flex", "justify-center", "mt-2"], [1, "bg-surface-100", "dark:bg-surface-700", "py-2", "px-4", "flex", "items-center", "rounded"], [1, "text-black/90", "dark:text-surface-0!", "font-bold", "mr-4"], [1, "text-black/60", "dark:text-surface-0!", "font-semibold"], ["inputId", "seuil_alerte_stock_desktop", "placeholder", "Ex: 5 (vide = seuil global)", "fluid", "", 3, "ngModelChange", "ngModel", "showButtons", "min", "minFractionDigits", "maxFractionDigits", "disabled", "invalid"], [1, "text-surface-500", "block", "mt-2"], ["class", "text-red-500 block mt-1", 4, "ngIf"], [1, "text-red-500", "block", "mt-1"], ["class", "text-gray-500 block mt-2 mb-2 ml-4", 4, "ngIf"], [1, "text-gray-500", "block", "mt-2", "mb-2", "ml-4"], [1, "form-section", "p-4"], [1, "flex", "gap-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-check", 1, "flex-1", 3, "click", "label", "loading", "disabled"], ["pButton", "", "pRipple", "", "label", "Annuler", "icon", "pi pi-times", "severity", "secondary", 1, "flex-1", 3, "click", "disabled"]], template: function ProduitsForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "header", 5)(3, "button", 6);
      \u0275\u0275listener("click", function ProduitsForm_Template_button_click_3_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7)(5, "h1", 8);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, ProduitsForm_button_7_Template, 1, 0, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ProduitsForm_div_8_Template, 4, 2, "div", 10);
      \u0275\u0275elementStart(9, "div", 11);
      \u0275\u0275template(10, ProduitsForm_div_10_Template, 5, 6, "div", 12)(11, ProduitsForm_div_11_Template, 5, 1, "div", 13)(12, ProduitsForm_div_12_Template, 2, 1, "div", 14)(13, ProduitsForm_div_13_Template, 4, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 16)(15, "div", 17)(16, "div", 18)(17, "label", 19);
      \u0275\u0275text(18, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-select", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.type, $event) || (ctx.product.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ProduitsForm_Template_p_select_onChange_19_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, ProduitsForm_div_20_Template, 4, 4, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, ProduitsForm_small_21_Template, 3, 0, "small", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 16)(23, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.nom, $event) || (ctx.product.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, ProduitsForm_small_24_Template, 2, 0, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 16)(26, "label", 19);
      \u0275\u0275text(27, "Prix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 25);
      \u0275\u0275template(29, ProduitsForm_div_29_Template, 5, 5, "div", 26)(30, ProduitsForm_div_30_Template, 5, 5, "div", 26);
      \u0275\u0275elementStart(31, "div", 27)(32, "span", 28);
      \u0275\u0275text(33, "Co\xFBt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-inputnumber", 29);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.cout, $event) || (ctx.product.cout = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(35, ProduitsForm_div_35_Template, 5, 5, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, ProduitsForm_div_36_Template, 3, 0, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, ProduitsForm_div_37_Template, 6, 5, "div", 31)(38, ProduitsForm_div_38_Template, 8, 0, "div", 32);
      \u0275\u0275elementStart(39, "div", 33)(40, "span", 34);
      \u0275\u0275text(41, "Produit critique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p-toggleswitch", 35);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_toggleswitch_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.is_critique, $event) || (ctx.product.is_critique = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(43, ProduitsForm_div_43_Template, 7, 2, "div", 31)(44, ProduitsForm_div_44_Template, 8, 8, "div", 32)(45, ProduitsForm_div_45_Template, 3, 4, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 37)(47, "div", 38)(48, "div")(49, "span", 39);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "small", 40);
      \u0275\u0275text(52, " Renseignez les informations principales, les prix et le statut de publication. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(53, ProduitsForm_div_53_Template, 4, 2, "div", 41)(54, ProduitsForm_button_54_Template, 1, 0, "button", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p-fluid", 43)(56, "div", 44)(57, "div", 45)(58, "div", 46)(59, "label", 47);
      \u0275\u0275text(60, " Type de produit ");
      \u0275\u0275template(61, ProduitsForm_span_61_Template, 2, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "p-select", 48);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_select_ngModelChange_62_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.type, $event) || (ctx.product.type = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function ProduitsForm_Template_p_select_onChange_62_listener() {
        return ctx.onTypeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "small", 49);
      \u0275\u0275element(64, "i", 50);
      \u0275\u0275text(65, " Le type d\xE9termine les champs de prix et la gestion du stock. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 51)(67, "div", 52)(68, "label", 53);
      \u0275\u0275text(69, "Nom du produit ");
      \u0275\u0275template(70, ProduitsForm_span_70_Template, 2, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "input", 54);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_input_ngModelChange_71_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.nom, $event) || (ctx.product.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, ProduitsForm_small_72_Template, 2, 0, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 52)(74, "div", 55)(75, "label", 47);
      \u0275\u0275text(76, "Prix");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 56);
      \u0275\u0275template(78, ProduitsForm_div_78_Template, 3, 5, "div", 57)(79, ProduitsForm_div_79_Template, 3, 5, "div", 57)(80, ProduitsForm_div_80_Template, 3, 5, "div", 57);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "small", 58);
      \u0275\u0275element(82, "i", 50);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(84, ProduitsForm_div_84_Template, 3, 0, "div", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 60)(86, "div", 61);
      \u0275\u0275element(87, "i", 62);
      \u0275\u0275text(88, " Visuel du produit ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(89, ProduitsForm_div_89_Template, 9, 7, "div", 12)(90, ProduitsForm_div_90_Template, 2, 1, "div", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 64)(92, "div", 65)(93, "span", 66);
      \u0275\u0275text(94, "Etat du produit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 67);
      \u0275\u0275template(96, ProduitsForm_div_96_Template, 6, 3, "div", 68)(97, ProduitsForm_div_97_Template, 7, 0, "div", 69);
      \u0275\u0275elementStart(98, "div", 70)(99, "div", 71)(100, "span", 72);
      \u0275\u0275text(101, "Produit critique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "small", 73);
      \u0275\u0275text(103, "D\xE9clenche une alerte en cas de rupture de stock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "p-toggleswitch", 35);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_toggleswitch_ngModelChange_104_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.is_critique, $event) || (ctx.product.is_critique = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(105, ProduitsForm_div_105_Template, 7, 2, "div", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(106, ProduitsForm_div_106_Template, 9, 8, "div", 75);
      \u0275\u0275elementStart(107, "div", 65)(108, "span", 66);
      \u0275\u0275text(109, "Co\xFBt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 67)(111, "p-inputnumber", 76);
      \u0275\u0275twoWayListener("ngModelChange", function ProduitsForm_Template_p_inputnumber_ngModelChange_111_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.product.cout, $event) || (ctx.product.cout = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(112, ProduitsForm_div_112_Template, 6, 5, "div", 75);
      \u0275\u0275elementStart(113, "div", 77);
      \u0275\u0275template(114, ProduitsForm_div_114_Template, 4, 4, "div", 78);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Nouveau produit" : "D\xE9tails du produit", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing && ctx.canEditSystemDefinition());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.is_global);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.product.image_url);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && !ctx.product.image_url);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.type);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode !== "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product.type === "service");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.nom);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isPrixAchatVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixVenteVisible());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.cout);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixUsineVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServicePriceError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode !== "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "create");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.is_critique);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManageSystemDefinition || ctx.product.is_global);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSeuilAlerteStockVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.mode === "create" ? "Cr\xE9er un produit" : "D\xE9tails du produit", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.product.is_global);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "edit" && !ctx.isEditing && ctx.canEditSystemDefinition());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.typeOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.type);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.product.nom);
      \u0275\u0275property("disabled", ctx.fieldsDisabled)("invalid", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitted && !(ctx.product.nom == null ? null : ctx.product.nom.trim()) && ctx.isEditing);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.isPrixAchatVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixVenteVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isPrixUsineVisible());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.getPrixHelperText(), " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showServicePriceError());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isEditing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isEditing && ctx.product.image_url);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.mode !== "create");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode === "create");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.is_critique);
      \u0275\u0275property("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canManageSystemDefinition || ctx.product.is_global);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSeuilAlerteStockVisible());
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.product.cout);
      \u0275\u0275property("min", 0)("disabled", ctx.fieldsDisabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.mode !== "create");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isEditing);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    EditorModule,
    InputTextModule,
    InputText,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    FileUploadModule,
    FileUpload,
    ButtonModule,
    ButtonDirective,
    SelectModule,
    Select,
    ToggleSwitchModule,
    ToggleSwitch,
    RippleModule,
    Ripple,
    ChipModule,
    FluidModule,
    Fluid,
    InputNumberModule,
    InputNumber
  ], styles: ["\n\n.product-form[_ngcontent-%COMP%]   .mobile-form-container[_ngcontent-%COMP%] {\n  display: none;\n}\n.product-form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--surface-200);\n  padding-bottom: 1rem;\n}\n.product-form[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-200);\n  border-radius: 0.875rem;\n  background: var(--surface-0);\n  padding: 1.25rem;\n}\n.product-form[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.product-form[_ngcontent-%COMP%]   .side-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-color);\n  padding: 1rem 1rem 0.875rem;\n  border-bottom: 1px solid var(--surface-200);\n  background: color-mix(in srgb, var(--surface-50) 70%, transparent);\n}\n.product-form[_ngcontent-%COMP%]   .helper-chip[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--blue-100) 50%, transparent);\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-weight: 500;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill-active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.product-form[_ngcontent-%COMP%]   .status-pill-inactive[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.product-form[_ngcontent-%COMP%]   .service-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #991b1b;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 0.65rem 0.8rem;\n  font-size: 0.9rem;\n}\n.product-form[_ngcontent-%COMP%]   .upload-dropzone[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 0.75rem;\n  transition: background-color 0.2s ease;\n}\n.product-form[_ngcontent-%COMP%]   .upload-dropzone[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--primary-50) 35%, transparent);\n}\n.product-form[_ngcontent-%COMP%]   .type-selector-block[_ngcontent-%COMP%] {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--surface-200);\n}\n.product-form[_ngcontent-%COMP%]   .form-field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--surface-900);\n  margin-bottom: 0.5rem;\n}\n.product-form[_ngcontent-%COMP%]   .form-field-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.4rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n.product-form[_ngcontent-%COMP%]   .form-field-hint[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.product-form[_ngcontent-%COMP%]   .prix-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.product-form[_ngcontent-%COMP%]   .prix-helper-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.6rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n.product-form[_ngcontent-%COMP%]   .prix-helper-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n.product-form[_ngcontent-%COMP%]   .price-field-anim[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_priceFieldFade 0.18s ease-out;\n}\n@keyframes _ngcontent-%COMP%_priceFieldFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .type-selector-block[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .type-selector-block[_ngcontent-%COMP%] {\n  border-bottom-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .form-field-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .form-field-label[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .form-field-hint[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .form-field-hint[_ngcontent-%COMP%], \n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .prix-helper-text[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .prix-helper-text[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .status-pill-active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .status-pill-active[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.2);\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .status-pill-inactive[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .status-pill-inactive[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.2);\n  color: #fbbf24;\n}\n.app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .service-alert[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .service-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: var(--p-surface-600);\n  color: #f87171;\n}\n@media screen and (max-width: 768px) {\n  .product-form[_ngcontent-%COMP%] {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8f9fc !important;\n    margin: -0.5rem -0.875rem calc(-0.5rem - env(safe-area-inset-bottom));\n    padding: 0;\n    min-height: 100dvh;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 1rem calc(5.5rem + env(safe-area-inset-bottom));\n    animation: _ngcontent-%COMP%_mobileFade 0.24s ease-out;\n  }\n  .product-form[_ngcontent-%COMP%]   .desktop-form-container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding-bottom: 0.25rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-back[_ngcontent-%COMP%], \n   .product-form[_ngcontent-%COMP%]   .mobile-form-edit[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: #1e293b !important;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-title-wrap[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-form-title[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n    text-align: center;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-image-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1rem;\n    overflow: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader {\n    border: 0 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-header {\n    display: none;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-file-list {\n    display: none;\n  }\n  .product-form   [_nghost-%COMP%]     .mobile-uploader .p-fileupload-content {\n    padding: 0;\n    border: 0;\n    min-height: auto;\n    height: auto !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-zone[_ngcontent-%COMP%] {\n    cursor: pointer;\n    min-height: 11rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 11rem;\n    color: #94a3b8;\n    gap: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    color: #cbd5e1;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 600;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-preview[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 12rem;\n    width: auto;\n    border-radius: 0.75rem;\n    object-fit: contain;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-remove-img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 1.75rem !important;\n    height: 1.75rem !important;\n    border-radius: 999px !important;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-remove-img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-upload-loading[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(0, 0, 0, 0.45);\n    border-radius: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-delete-confirm[_ngcontent-%COMP%] {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.75rem;\n    background: rgba(0, 0, 0, 0.65);\n    padding: 1rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-section-card[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1rem;\n    padding: 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-field-label[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 0.7rem;\n    font-weight: 700;\n    color: #94a3b8;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    margin-bottom: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-price-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-service-alert[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n    margin-top: 0.6rem;\n    padding: 0.5rem 0.65rem;\n    background: #fef2f2;\n    border: 1px solid #fecaca;\n    border-radius: 0.65rem;\n    font-size: 0.8rem;\n    color: #991b1b;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-meta-row[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-meta-field[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-info-hint[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    margin-top: 0.5rem;\n    font-size: 0.75rem;\n    color: #94a3b8;\n    font-weight: 500;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-label[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 700;\n    color: #334155;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-value[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: #94a3b8;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-status-value.active[_ngcontent-%COMP%] {\n    color: #16a34a;\n  }\n  .product-form   [_nghost-%COMP%]     .p-inputtext, \n   .product-form   [_nghost-%COMP%]     .p-inputnumber-input, \n   .product-form   [_nghost-%COMP%]     .p-select-label {\n    font-size: 16px !important;\n    min-height: 2.65rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-bottom-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-btn-save[_ngcontent-%COMP%] {\n    flex: 1;\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    min-height: 2.75rem;\n  }\n  .product-form[_ngcontent-%COMP%]   .mobile-btn-cancel[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    border-radius: 0.75rem !important;\n    font-weight: 600 !important;\n    min-height: 2.75rem;\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%] {\n    background: var(--p-surface-950) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-back[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-back[_ngcontent-%COMP%], \n   .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-edit[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-edit[_ngcontent-%COMP%] {\n    color: var(--p-surface-100) !important;\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-form-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-0);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-image-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-image-card[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-upload-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: var(--p-surface-500);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-section-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-section-card[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-field-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-field-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-price-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-price-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-service-alert[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-service-alert[_ngcontent-%COMP%] {\n    background: rgba(220, 38, 38, 0.15);\n    border-color: var(--p-surface-600);\n    color: #f87171;\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-info-hint[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-info-hint[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-label[_ngcontent-%COMP%] {\n    color: var(--p-surface-200);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-value[_ngcontent-%COMP%] {\n    color: var(--p-surface-400);\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-value.active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-status-value.active[_ngcontent-%COMP%] {\n    color: #34d399;\n  }\n  .app-dark[_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-bottom-actions[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .product-form[_ngcontent-%COMP%]   .mobile-bottom-actions[_ngcontent-%COMP%] {\n    background: rgba(15, 23, 42, 0.92);\n    border-top-color: var(--p-surface-700);\n  }\n}\n@keyframes _ngcontent-%COMP%_mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-form.css.map */", "\n\n[_nghost-%COMP%]     .p-fileupload-header {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-file-list {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsForm, [{
    type: Component,
    args: [{ selector: "app-produits-form", standalone: true, imports: [
      CommonModule,
      EditorModule,
      InputTextModule,
      FormsModule,
      FileUploadModule,
      ButtonModule,
      SelectModule,
      ToggleSwitchModule,
      RippleModule,
      ChipModule,
      FluidModule,
      InputNumberModule
    ], providers: [MessageService], template: `<div class="card product-form">
    <!-- ==================== MOBILE LAYOUT ==================== -->
    <div class="mobile-form-container">
        <header class="mobile-form-header">
            <button
                pButton
                pRipple
                icon="pi pi-arrow-left"
                class="p-button-rounded p-button-text mobile-form-back"
                (click)="onCancel()"
            ></button>
            <div class="mobile-form-title-wrap">
                <h1 class="mobile-form-title">
                    {{ mode === 'create' ? 'Nouveau produit' : 'D\xE9tails du produit' }}
                </h1>
            </div>
            <button
                *ngIf="mode === 'edit' && !isEditing && canEditSystemDefinition()"
                pButton
                pRipple
                icon="pi pi-pencil"
                class="p-button-rounded p-button-text mobile-form-edit"
                (click)="enableEditing()"
            ></button>
        </header>

        <div *ngIf="product.is_global" class="mx-3 mt-2 mb-1 px-3 py-2 rounded flex items-center gap-2 text-sm bg-blue-50 text-blue-700 border border-blue-200">
            <i class="pi pi-globe"></i>
            <span *ngIf="canManageSystemDefinition">Produit global \u2014 vous pouvez modifier la d\xE9finition (admin/manager).</span>
            <span *ngIf="!canManageSystemDefinition">Produit global \u2014 d\xE9finition en lecture seule pour ce r\xF4le.</span>
        </div>

        <!-- Image en premier -->
        <div class="mobile-image-card"> 
            <div *ngIf="isEditing">
                <p-fileUpload
                    #mobileFileUploader
                    name="image"
                    (onSelect)="onUpload($event)"
                    [customUpload]="true"
                    [multiple]="false"
                    accept="image/*"
                    [showUploadButton]="false"
                    [showCancelButton]="false"
                    [auto]="true"
                    [disabled]="fieldsDisabled"
                    styleClass="mobile-uploader"
                >
                    <ng-template #content>
                        <div
                            class="mobile-upload-zone"
                            (click)="!fieldsDisabled && mobileFileUploader.advancedFileInput.nativeElement.click()"
                        >
                            <div *ngIf="!imagePreview && !product.image_url" class="mobile-upload-placeholder">
                                <i class="pi pi-camera"></i>
                                <span>Ajouter une photo</span>
                            </div>

                            <div *ngIf="imagePreview || product.image_url" class="mobile-upload-preview">
                                <img
                                    [src]="imagePreview || product.getImageUrl()"
                                    alt="Image du produit"
                                />
                                <!-- Bouton X (cach\xE9 pendant confirmation ou chargement) -->
                                <button
                                    *ngIf="!fieldsDisabled && !confirmingDelete && !loading"
                                    pButton
                                    pRipple
                                    rounded
                                    type="button"
                                    severity="danger"
                                    class="mobile-remove-img"
                                    (click)="removeImage($event)"
                                >
                                    <i class="pi pi-times"></i>
                                </button>
                                <!-- Overlay spinner pendant l'upload -->
                                <div
                                    *ngIf="loading && selectedImageFile"
                                    class="mobile-upload-loading"
                                >
                                    <i class="pi pi-spin pi-spinner text-white text-3xl"></i>
                                </div>
                                <!-- Overlay confirmation suppression -->
                                <div *ngIf="confirmingDelete" class="mobile-delete-confirm">
                                    <p class="text-white text-sm font-semibold mb-3 text-center">Supprimer cette image ?</p>
                                    <div class="flex gap-2 justify-center">
                                        <button pButton type="button" severity="danger" size="small" label="Supprimer" (click)="confirmDeleteImage($event)"></button>
                                        <button pButton type="button" severity="secondary" size="small" label="Annuler" (click)="cancelDeleteImage($event)"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                </p-fileUpload>
            </div>
            <div *ngIf="isEditing" class="px-3 pb-2">
                <small class="block text-center text-surface-400">
                    <i class="pi pi-info-circle mr-1"></i>JPG, PNG, WebP \u2014 5 Mo max
                </small>
                <small class="block text-center text-red-500 mt-1" *ngIf="imageError">
                    <i class="pi pi-exclamation-circle mr-1"></i>{{ imageError }}
                </small>
            </div>
            <div *ngIf="!isEditing && product.image_url" class="mobile-upload-preview">
                <img [src]="product.getImageUrl()" alt="Image du produit" />
            </div>
            <div *ngIf="!isEditing && !product.image_url" class="mobile-upload-placeholder">
                <i class="pi pi-image"></i>
                <span>Aucune image</span>
            </div>
        </div>

        <!-- Type + Stock en rang\xE9e compacte (en premier, champ structurant) -->
        <div class="mobile-section-card">
            <div class="mobile-meta-row">
                <div class="mobile-meta-field">
                    <label class="mobile-field-label">Type</label>
                    <p-select
                        [options]="typeOptions"
                        [(ngModel)]="product.type"
                        (onChange)="onTypeChange()"
                        [disabled]="fieldsDisabled"
                        placeholder="Type"
                        fluid
                    ></p-select>
                </div>
                <div class="mobile-meta-field" *ngIf="mode !== 'create'">
                    <label class="mobile-field-label">Stock</label>
                    <p-inputnumber
                        [(ngModel)]="product.qte_stock"
                        [showButtons]="true"
                        [min]="0"
                        [disabled]="isQteStockDisabled()"
                        placeholder="0"
                        fluid
                    ></p-inputnumber>
                </div>
            </div>
            <small class="mobile-info-hint" *ngIf="product.type === 'service'">
                <i class="pi pi-info-circle"></i> Stock non g\xE9r\xE9 pour les services
            </small>
        </div>

        <!-- Nom du produit -->
        <div class="mobile-section-card">
            <!-- <label class="mobile-field-label">Nom du produit</label> -->
            <input
                pInputText
                type="text"
                placeholder="Nom du produit"
                [(ngModel)]="product.nom"
                [disabled]="fieldsDisabled"
                [invalid]="submitted && !product.nom?.trim()"
                fluid
            />
            <small class="text-red-500" *ngIf="submitted && !product.nom?.trim() && isEditing">
                Nom du produit obligatoire.
            </small>
        </div>

        <!-- Prix en grille 2 colonnes -->
        <div class="mobile-section-card">
            <label class="mobile-field-label">Prix</label>
            <div class="mobile-price-grid">
                <div class="mobile-price-item" *ngIf="isPrixAchatVisible()">
                    <span class="mobile-price-label">Achat</span>
                    <p-inputnumber
                        [(ngModel)]="product.prix_achat"
                        mode="currency"
                        currency="GNF"
                        locale="fr-GN"
                        [min]="0"
                        [disabled]="fieldsDisabled"
                        [invalid]="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat)"
                        placeholder="0"
                        fluid
                    ></p-inputnumber>
                    <small class="text-red-500" *ngIf="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat) && isEditing">
                        Obligatoire
                    </small>
                </div>
                <div class="mobile-price-item" *ngIf="isPrixVenteVisible()">
                    <span class="mobile-price-label">Vente</span>
                    <p-inputnumber
                        [(ngModel)]="product.prix_vente"
                        mode="currency"
                        currency="GNF"
                        locale="fr-GN"
                        [min]="0"
                        [disabled]="fieldsDisabled"
                        [invalid]="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente)"
                        placeholder="0"
                        fluid
                    ></p-inputnumber>
                    <small class="text-red-500" *ngIf="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente) && isEditing">
                        Obligatoire
                    </small>
                </div>
                <div class="mobile-price-item">
                    <span class="mobile-price-label">Co\xFBt</span>
                    <p-inputnumber
                        [(ngModel)]="product.cout"
                        mode="currency"
                        currency="GNF"
                        locale="fr-GN"
                        [min]="0"
                        [disabled]="fieldsDisabled"
                        placeholder="0"
                        fluid
                    ></p-inputnumber>
                </div>
                <div class="mobile-price-item" *ngIf="isPrixUsineVisible()">
                    <span class="mobile-price-label">Usine</span>
                    <p-inputnumber
                        [(ngModel)]="product.prix_usine"
                        mode="currency"
                        currency="GNF"
                        locale="fr-GN"
                        [min]="0"
                        [disabled]="fieldsDisabled"
                        [invalid]="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine)"
                        placeholder="0"
                        fluid
                    ></p-inputnumber>
                    <small class="text-red-500" *ngIf="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine) && isEditing">
                        Obligatoire
                    </small>
                </div>
            </div>
            <div class="mobile-service-alert" *ngIf="showServicePriceError()">
                <i class="pi pi-exclamation-circle"></i>
                Au moins un prix requis pour un service.
            </div>
        </div>

        <!-- Status toggle (\xE9dition uniquement \u2014 \xE0 la cr\xE9ation toujours brouillon) -->
        <div class="mobile-section-card mobile-status-row" *ngIf="mode !== 'create'">
            <span class="mobile-status-label">Status</span>
            <span class="mobile-status-value" [class.active]="isActifSwitch">{{ isActifSwitch ? 'Actif' : 'Inactif' }}</span>
            <p-toggleswitch
                [ngModel]="isActifSwitch"
                (ngModelChange)="onStatutToggleChange($event)"
                [disabled]="fieldsDisabled"
                class="ml-auto"
            ></p-toggleswitch>
        </div>
        <!-- Bandeau info flux d'activation (cr\xE9ation uniquement) -->
        <div class="mobile-section-card" *ngIf="mode === 'create'">
            <div class="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2">
                <i class="pi pi-info-circle mt-0.5 shrink-0"></i>
                <span>Ce produit sera cr\xE9\xE9 en <strong>brouillon</strong>. L'activation (globale puis par usine) se fait dans une \xE9tape distincte.</span>
            </div>
        </div>

        <!-- Produit critique -->
        <div class="mobile-section-card mobile-status-row">
            <span class="mobile-status-label">Produit critique</span>
            <p-toggleswitch
                [(ngModel)]="product.is_critique"
                [disabled]="fieldsDisabled"
                class="ml-auto"
            ></p-toggleswitch>
        </div>

        <!-- Produit global (visible si admin/manager ou si d\xE9j\xE0 global) -->
        <div class="mobile-section-card mobile-status-row" *ngIf="canManageSystemDefinition || product.is_global">
            <div class="flex flex-col flex-1">
                <span class="mobile-status-label">Produit global</span>
                <small class="text-surface-400 text-xs">Disponible dans toutes les usines</small>
            </div>
            <p-toggleswitch
                [(ngModel)]="product.is_global"
                [disabled]="!canToggleGlobal()"
                class="ml-auto"
            ></p-toggleswitch>
        </div>

        <!-- Seuil d'alerte stock (masqu\xE9 pour type service) -->
        <div class="mobile-section-card" *ngIf="isSeuilAlerteStockVisible()">
            <label class="mobile-field-label">Seuil d'alerte stock</label>
            <p-inputnumber
                [(ngModel)]="product.seuil_alerte_stock"
                [showButtons]="true"
                [min]="0"
                [minFractionDigits]="0"
                [maxFractionDigits]="0"
                [disabled]="isSeuilAlerteStockDisabled()"
                placeholder="Ex: 5 (vide = seuil global)"
                [invalid]="submitted && isSeuilAlerteStockInvalid()"
                fluid
            ></p-inputnumber>
            <small class="mobile-info-hint">
                <i class="pi pi-info-circle"></i> D\xE9clenche l'alerte quand le stock atteint ce seuil.
            </small>
            <small class="text-red-500" *ngIf="submitted && isSeuilAlerteStockInvalid() && isEditing">
                {{ getSeuilAlerteStockErrorMessage() }}
            </small>
        </div>

        <!-- Boutons sticky en bas -->
        <div class="mobile-bottom-actions" *ngIf="isEditing">
            <button
                pButton
                pRipple
                [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"
                icon="pi pi-check"
                (click)="onSubmit()"
                [loading]="loading"
                [disabled]="!isValid() || loading"
                class="mobile-btn-save"
            ></button>
            <button
                pButton
                pRipple
                label="Annuler"
                icon="pi pi-times"
                severity="secondary"
                (click)="mode === 'create' ? onCancel() : cancelEditing()"
                [disabled]="loading"
                class="mobile-btn-cancel"
            ></button>
        </div>
    </div>

    <!-- ==================== DESKTOP LAYOUT ==================== -->
    <div class="desktop-form-container">
        <div class="flex justify-between items-start gap-4 mb-8 form-header">
            <div>
                <span class="block text-surface-900 dark:text-surface-0 font-bold text-2xl">
                    {{ mode === 'create' ? 'Cr\xE9er un produit' : 'D\xE9tails du produit' }}
                </span>
                <small class="text-surface-500 dark:text-surface-300">
                    Renseignez les informations principales, les prix et le statut de publication.
                </small>
            </div>

            <div *ngIf="product.is_global" class="flex items-center gap-2 px-3 py-1.5 rounded text-sm bg-blue-50 text-blue-700 border border-blue-200">
                <i class="pi pi-globe"></i>
                <span *ngIf="canManageSystemDefinition">Produit global \u2014 \xE9dition autoris\xE9e (admin/manager)</span>
                <span *ngIf="!canManageSystemDefinition">Produit global \u2014 lecture seule pour ce r\xF4le</span>
            </div>
            <button
                *ngIf="mode === 'edit' && !isEditing && canEditSystemDefinition()"
                pButton
                pRipple
                label="Modifier"
                icon="pi pi-pencil"
                severity="secondary"
                (click)="enableEditing()"
                class="w-auto"
            ></button>
        </div>

        <p-fluid class="grid grid-cols-12 gap-6 flex-wrap">
            <div class="col-span-12 lg:col-span-8">
                <!-- \u2500\u2500 BLOC PRINCIPAL : Type \u2192 Nom \u2192 Prix \u2500\u2500 -->
                <div class="form-section mb-4">

                    <!-- 1. Type de produit \u2014 champ structurant, s\xE9lectionn\xE9 en premier -->
                    <div class="type-selector-block">
                        <label class="form-field-label">
                            Type de produit <span class="text-red-500" *ngIf="isEditing">*</span>
                        </label>
                        <p-select
                            [options]="typeOptions"
                            [(ngModel)]="product.type"
                            (onChange)="onTypeChange()"
                            [disabled]="fieldsDisabled"
                            placeholder="S\xE9lectionner un type"
                            fluid
                        ></p-select>
                        <small class="form-field-hint">
                            <i class="pi pi-info-circle"></i>
                            Le type d\xE9termine les champs de prix et la gestion du stock.
                        </small>
                    </div>

                    <div class="grid grid-cols-12 gap-5 mt-4">

                        <!-- 2. Nom du produit -->
                        <div class="col-span-12">
                            <label class="form-field-label" for="nom">Nom du produit <span class="text-red-500" *ngIf="isEditing">*</span></label>
                            <input
                                id="nom"
                                pInputText
                                type="text"
                                 [(ngModel)]="product.nom"
                                [disabled]="fieldsDisabled"
                                [invalid]="submitted && !product.nom?.trim()"
                                fluid
                            />
                            <small class="text-red-500" *ngIf="submitted && !product.nom?.trim() && isEditing">
                                Nom du produit obligatoire.
                            </small>
                        </div>

                        <!-- 3. Bloc Prix \u2014 regroup\xE9s avec aide contextuelle selon le type -->
                        <div class="col-span-12">
                            <div class="prix-section-header">
                                <label class="form-field-label">Prix</label>

                            </div>
                            <div class="flex gap-4">
                                <div class="flex-1 min-w-0 price-field-anim" *ngIf="isPrixAchatVisible()">
                                    <p-inputnumber
                                        inputId="prix_achat"
                                        [(ngModel)]="product.prix_achat"
                                        mode="currency"
                                        currency="GNF"
                                        locale="fr-GN"
                                        [min]="0"
                                        [disabled]="fieldsDisabled"
                                        [invalid]="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat)"
                                        placeholder="Prix d'achat"
                                        fluid
                                    ></p-inputnumber>
                                    <small class="text-red-500" *ngIf="submitted && isPrixAchatRequired() && isPriceMissing(product.prix_achat) && isEditing">
                                        Prix d'achat obligatoire pour ce type.
                                    </small>
                                </div>

                                <div class="flex-1 min-w-0 price-field-anim" *ngIf="isPrixVenteVisible()">
                                    <p-inputnumber
                                        inputId="prix_vente"
                                        [(ngModel)]="product.prix_vente"
                                        mode="currency"
                                        currency="GNF"
                                        locale="fr-GN"
                                        [min]="0"
                                        [disabled]="fieldsDisabled"
                                        [invalid]="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente)"
                                        placeholder="Prix de vente"
                                        fluid
                                    ></p-inputnumber>
                                    <small class="text-red-500" *ngIf="submitted && isPrixVenteRequired() && isPriceMissing(product.prix_vente) && isEditing">
                                        Prix de vente obligatoire pour ce type.
                                    </small>
                                </div>

                                <div class="flex-1 min-w-0 price-field-anim" *ngIf="isPrixUsineVisible()">
                                    <p-inputnumber
                                        inputId="prix_usine"
                                        [(ngModel)]="product.prix_usine"
                                        mode="currency"
                                        currency="GNF"
                                        locale="fr-GN"
                                        [min]="0"
                                        [disabled]="fieldsDisabled"
                                        [invalid]="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine)"
                                        placeholder="Prix usine"
                                        fluid
                                    ></p-inputnumber>
                                    <small class="text-red-500" *ngIf="submitted && isPrixUsineRequired() && isPriceMissing(product.prix_usine) && isEditing">
                                        Prix usine obligatoire pour "Fabricable".
                                    </small>
                                </div>
                            </div>
                            <small class="prix-helper-text">
                                <i class="pi pi-info-circle"></i>
                                {{ getPrixHelperText() }}
                            </small>
                        </div>

                        <div class="col-span-12 service-alert" *ngIf="showServicePriceError()">
                            <i class="pi pi-exclamation-circle mr-2"></i>
                             Pour un service, renseignez au moins un prix : achat ou vente.
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <div class="section-title">
                        <i class="pi pi-image mr-2"></i>
                        Visuel du produit
                    </div>

                    <div *ngIf="isEditing">
                        <p-fileUpload
                            #fileUploader
                            name="image"
                            (onSelect)="onUpload($event)"
                            [customUpload]="true"
                            [multiple]="false"
                            accept="image/*"
                            [showUploadButton]="false"
                            [showCancelButton]="false"
                            [auto]="true"
                            [disabled]="fieldsDisabled"
                            styleClass="product-uploader border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded-lg"
                        >
                            <ng-template #content>
                                <div
                                    class="w-full py-4 upload-dropzone"
                                    (click)="!fieldsDisabled && fileUploader.advancedFileInput.nativeElement.click()"
                                >
                                    <div *ngIf="!imagePreview && !product.image_url" class="h-48 flex flex-col justify-center items-center">
                                        <i class="pi pi-image text-primary text-4xl mb-4"></i>
                                        <span class="block font-semibold text-surface-900 dark:text-surface-0 text-lg">Ajouter une image</span>
                                        <span class="text-surface-500 text-sm mt-1">Cliquez pour s\xE9lectionner</span>
                                    </div>

                                    <div *ngIf="imagePreview || product.image_url" class="relative w-full flex justify-center py-3">
                                        <div class="relative inline-block">
                                            <img
                                                [src]="imagePreview || product.getImageUrl()"
                                                alt="Image du produit"
                                                class="max-h-72 rounded shadow object-contain"
                                            />
                                            <!-- Bouton X (cach\xE9 pendant confirmation ou chargement) -->
                                            <button
                                                *ngIf="!fieldsDisabled && !confirmingDelete && !loading"
                                                pButton
                                                pRipple
                                                rounded
                                                type="button"
                                                severity="danger"
                                                class="absolute -top-2 -right-2"
                                                (click)="removeImage($event)"
                                            >
                                                <i class="pi pi-times"></i>
                                            </button>
                                            <!-- Overlay spinner pendant l'upload -->
                                            <div
                                                *ngIf="loading && selectedImageFile"
                                                class="absolute inset-0 flex items-center justify-center bg-surface-0/80 dark:bg-surface-900/80 rounded"
                                            >
                                                <i class="pi pi-spin pi-spinner text-primary text-3xl"></i>
                                            </div>
                                            <!-- Overlay confirmation suppression -->
                                            <div
                                                *ngIf="confirmingDelete"
                                                class="absolute inset-0 flex flex-col items-center justify-center rounded"
                                                style="background: rgba(0,0,0,0.65);"
                                            >
                                                <p class="text-white text-sm font-semibold mb-3 px-3 text-center">Supprimer cette image ?</p>
                                                <div class="flex gap-2">
                                                    <button pButton type="button" severity="danger" size="small" label="Supprimer" (click)="confirmDeleteImage($event)"></button>
                                                    <button pButton type="button" severity="secondary" size="small" label="Annuler" (click)="cancelDeleteImage($event)"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ng-template>
                        </p-fileUpload>
                        <small class="block mt-2 text-surface-400">
                            <i class="pi pi-info-circle mr-1"></i>JPG, PNG, WebP \u2014 5 Mo max
                        </small>
                        <small class="block mt-1 text-red-500" *ngIf="imageError">
                            <i class="pi pi-exclamation-circle mr-1"></i>{{ imageError }}
                        </small>
                    </div>

                    <div class="flex justify-center mt-2" *ngIf="!isEditing && product.image_url">
                        <img [src]="product.getImageUrl()" alt="Image du produit" class="max-h-72 rounded shadow object-contain" />
                    </div>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-4 flex flex-col gap-y-4 mt-7">
                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Etat du produit</span>
                    <div class="p-4">
                        <!-- Toggle statut (\xE9dition uniquement \u2014 \xE0 la cr\xE9ation toujours brouillon) -->
                        <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded" *ngIf="mode !== 'create'">
                            <span class="text-black/90 dark:text-surface-0! font-bold mr-4">Status:</span>
                            <span class="text-black/60 dark:text-surface-0! font-semibold">{{ isActifSwitch ? 'Actif' : 'Inactif' }}</span>
                            <p-toggleswitch
                                [ngModel]="isActifSwitch"
                                (ngModelChange)="onStatutToggleChange($event)"
                                [disabled]="fieldsDisabled"
                                class="ml-auto"
                            ></p-toggleswitch>
                        </div>
                        <!-- Bandeau info flux d'activation (cr\xE9ation uniquement) -->
                        <div class="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-2" *ngIf="mode === 'create'">
                            <i class="pi pi-info-circle mt-0.5 shrink-0"></i>
                            <span>Cr\xE9\xE9 en <strong>brouillon</strong> \u2014 activation globale puis par usine dans une \xE9tape distincte.</span>
                        </div>
                        <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded mt-2">
                            <div class="flex flex-col flex-1">
                                <span class="text-black/90 dark:text-surface-0! font-bold">Produit critique</span>
                                <small class="text-surface-500">D\xE9clenche une alerte en cas de rupture de stock</small>
                            </div>
                            <p-toggleswitch
                                [(ngModel)]="product.is_critique"
                                [disabled]="fieldsDisabled"
                                class="ml-auto"
                            ></p-toggleswitch>
                        </div>
                        <!-- Produit global (visible si admin/manager ou si d\xE9j\xE0 global) -->
                        <div class="bg-surface-100 dark:bg-surface-700 py-2 px-4 flex items-center rounded mt-2" *ngIf="canManageSystemDefinition || product.is_global">
                            <div class="flex flex-col flex-1">
                                <span class="text-black/90 dark:text-surface-0! font-bold">Produit global</span>
                                <small class="text-surface-500">Disponible dans toutes les usines</small>
                            </div>
                            <p-toggleswitch
                                [(ngModel)]="product.is_global"
                                [disabled]="!canToggleGlobal()"
                                class="ml-auto"
                            ></p-toggleswitch>
                        </div>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded" *ngIf="isSeuilAlerteStockVisible()">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Seuil d'alerte stock</span>
                    <div class="p-4">
                        <p-inputnumber
                            [(ngModel)]="product.seuil_alerte_stock"
                            inputId="seuil_alerte_stock_desktop"
                            [showButtons]="true"
                            [min]="0"
                            [minFractionDigits]="0"
                            [maxFractionDigits]="0"
                            [disabled]="isSeuilAlerteStockDisabled()"
                            placeholder="Ex: 5 (vide = seuil global)"
                            [invalid]="submitted && isSeuilAlerteStockInvalid()"
                            fluid
                        ></p-inputnumber>
                        <small class="text-surface-500 block mt-2">
                            <i class="pi pi-info-circle mr-1"></i>D\xE9clenche l'alerte quand le stock atteint ce seuil.
                        </small>
                        <small class="text-red-500 block mt-1" *ngIf="submitted && isSeuilAlerteStockInvalid() && isEditing">
                            {{ getSeuilAlerteStockErrorMessage() }}
                        </small>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Co\xFBt</span>
                    <div class="p-4">
                        <p-inputnumber
                            inputId="cout"
                            [(ngModel)]="product.cout"
                            mode="currency"
                            currency="GNF"
                            locale="fr-GN"
                            [min]="0"
                            [disabled]="fieldsDisabled"
                            placeholder="Co\xFBt"
                            fluid
                        ></p-inputnumber>
                    </div>
                </div>

                <div class="border border-surface-200 dark:border-surface-700 rounded" *ngIf="mode !== 'create'">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Quantit\xE9 en stock</span>
                    <div class="p-4">
                        <p-inputnumber
                            [(ngModel)]="product.qte_stock"
                            [showButtons]="true"
                            [min]="0"
                            [disabled]="isQteStockDisabled()"
                            placeholder="0"
                            fluid
                        ></p-inputnumber>
                    </div>
                    <small class="text-gray-500 block mt-2 mb-2 ml-4" *ngIf="product.type === 'service'">
                        <i class="pi pi-info-circle mr-1"></i>Le stock n'est pas g\xE9r\xE9 pour les services.
                    </small>
                </div>

                <div class="sticky top-6 flex flex-col gap-4">
                    <div class="form-section p-4" *ngIf="isEditing">
                        <div class="flex gap-3">
                            <button
                                pButton
                                pRipple
                                [label]="mode === 'create' ? 'Enregistrer' : 'Sauvegarder'"
                                icon="pi pi-check"
                                (click)="onSubmit()"
                                [loading]="loading"
                                [disabled]="!isValid() || loading"
                                class="flex-1"
                            ></button>
                            <button
                                pButton
                                pRipple
                                label="Annuler"
                                icon="pi pi-times"
                                severity="secondary"
                                (click)="mode === 'create' ? onCancel() : cancelEditing()"
                                [disabled]="loading"
                                class="flex-1"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </p-fluid>
    </div>
</div>
`, styles: ["/* src/app/pages/produits/produits-form/produits-form.scss */\n.product-form .mobile-form-container {\n  display: none;\n}\n.product-form .form-header {\n  border-bottom: 1px solid var(--surface-200);\n  padding-bottom: 1rem;\n}\n.product-form .form-section {\n  border: 1px solid var(--surface-200);\n  border-radius: 0.875rem;\n  background: var(--surface-0);\n  padding: 1.25rem;\n}\n.product-form .section-title {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n}\n.product-form .side-title {\n  font-weight: 700;\n  color: var(--text-color);\n  padding: 1rem 1rem 0.875rem;\n  border-bottom: 1px solid var(--surface-200);\n  background: color-mix(in srgb, var(--surface-50) 70%, transparent);\n}\n.product-form .helper-chip {\n  background: color-mix(in srgb, var(--blue-100) 50%, transparent);\n  border-radius: 999px;\n  padding: 0.35rem 0.7rem;\n  font-weight: 500;\n}\n.product-form .status-pill {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 0.2rem 0.6rem;\n}\n.product-form .status-pill-active {\n  background: #dcfce7;\n  color: #166534;\n}\n.product-form .status-pill-inactive {\n  background: #fef3c7;\n  color: #92400e;\n}\n.product-form .service-alert {\n  display: flex;\n  align-items: center;\n  color: #991b1b;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 0.5rem;\n  padding: 0.65rem 0.8rem;\n  font-size: 0.9rem;\n}\n.product-form .upload-dropzone {\n  cursor: pointer;\n  border-radius: 0.75rem;\n  transition: background-color 0.2s ease;\n}\n.product-form .upload-dropzone:hover {\n  background: color-mix(in srgb, var(--primary-50) 35%, transparent);\n}\n.product-form .type-selector-block {\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--surface-200);\n}\n.product-form .form-field-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--surface-900);\n  margin-bottom: 0.5rem;\n}\n.product-form .form-field-hint {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.4rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n.product-form .form-field-hint i {\n  font-size: 0.7rem;\n}\n.product-form .prix-section-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.product-form .prix-helper-text {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  margin-top: 0.6rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n}\n.product-form .prix-helper-text i {\n  font-size: 0.7rem;\n}\n.product-form .price-field-anim {\n  animation: priceFieldFade 0.18s ease-out;\n}\n@keyframes priceFieldFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n:host-context(.app-dark) .product-form .type-selector-block {\n  border-bottom-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .product-form .form-field-label {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .product-form .form-field-hint,\n:host-context(.app-dark) .product-form .prix-helper-text {\n  color: var(--p-surface-500);\n}\n:host-context(.app-dark) .product-form .status-pill-active {\n  background: rgba(5, 150, 105, 0.2);\n  color: #34d399;\n}\n:host-context(.app-dark) .product-form .status-pill-inactive {\n  background: rgba(217, 119, 6, 0.2);\n  color: #fbbf24;\n}\n:host-context(.app-dark) .product-form .service-alert {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: var(--p-surface-600);\n  color: #f87171;\n}\n@media screen and (max-width: 768px) {\n  .product-form {\n    border: 0 !important;\n    border-radius: 0 !important;\n    box-shadow: none !important;\n    background: #f8f9fc !important;\n    margin: -0.5rem -0.875rem calc(-0.5rem - env(safe-area-inset-bottom));\n    padding: 0;\n    min-height: 100dvh;\n  }\n  .product-form .mobile-form-container {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 1rem calc(5.5rem + env(safe-area-inset-bottom));\n    animation: mobileFade 0.24s ease-out;\n  }\n  .product-form .desktop-form-container {\n    display: none !important;\n  }\n  .product-form .mobile-form-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding-bottom: 0.25rem;\n  }\n  .product-form .mobile-form-back,\n  .product-form .mobile-form-edit {\n    width: 2.25rem;\n    height: 2.25rem;\n    border-radius: 999px;\n    flex-shrink: 0;\n    color: #1e293b !important;\n    background: transparent !important;\n    border: 0 !important;\n    box-shadow: none !important;\n  }\n  .product-form .mobile-form-title-wrap {\n    flex: 1;\n    min-width: 0;\n  }\n  .product-form .mobile-form-title {\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 700;\n    color: #1e293b;\n    letter-spacing: -0.01em;\n    text-align: center;\n  }\n  .product-form .mobile-image-card {\n    background: #fff;\n    border-radius: 1rem;\n    overflow: hidden;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form :host ::ng-deep .mobile-uploader {\n    border: 0 !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-header {\n    display: none;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-file-list {\n    display: none;\n  }\n  .product-form :host ::ng-deep .mobile-uploader .p-fileupload-content {\n    padding: 0;\n    border: 0;\n    min-height: auto;\n    height: auto !important;\n  }\n  .product-form .mobile-upload-zone {\n    cursor: pointer;\n    min-height: 11rem;\n  }\n  .product-form .mobile-upload-placeholder {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 11rem;\n    color: #94a3b8;\n    gap: 0.5rem;\n  }\n  .product-form .mobile-upload-placeholder i {\n    font-size: 2rem;\n    color: #cbd5e1;\n  }\n  .product-form .mobile-upload-placeholder span {\n    font-size: 0.85rem;\n    font-weight: 600;\n  }\n  .product-form .mobile-upload-preview {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 0.75rem;\n  }\n  .product-form .mobile-upload-preview img {\n    max-height: 12rem;\n    width: auto;\n    border-radius: 0.75rem;\n    object-fit: contain;\n  }\n  .product-form .mobile-remove-img {\n    position: absolute;\n    top: 0.5rem;\n    right: 0.5rem;\n    width: 1.75rem !important;\n    height: 1.75rem !important;\n    border-radius: 999px !important;\n  }\n  .product-form .mobile-remove-img i {\n    font-size: 0.7rem;\n  }\n  .product-form .mobile-upload-loading {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(0, 0, 0, 0.45);\n    border-radius: 0.75rem;\n  }\n  .product-form .mobile-delete-confirm {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 0.75rem;\n    background: rgba(0, 0, 0, 0.65);\n    padding: 1rem;\n  }\n  .product-form .mobile-section-card {\n    background: #fff;\n    border-radius: 1rem;\n    padding: 1rem;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.04);\n  }\n  .product-form .mobile-field-label {\n    display: block;\n    font-size: 0.7rem;\n    font-weight: 700;\n    color: #94a3b8;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    margin-bottom: 0.5rem;\n  }\n  .product-form .mobile-price-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form .mobile-price-item {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .product-form .mobile-price-label {\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: #64748b;\n  }\n  .product-form .mobile-service-alert {\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n    margin-top: 0.6rem;\n    padding: 0.5rem 0.65rem;\n    background: #fef2f2;\n    border: 1px solid #fecaca;\n    border-radius: 0.65rem;\n    font-size: 0.8rem;\n    color: #991b1b;\n  }\n  .product-form .mobile-meta-row {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 0.75rem;\n  }\n  .product-form .mobile-meta-field {\n    display: flex;\n    flex-direction: column;\n  }\n  .product-form .mobile-info-hint {\n    display: flex;\n    align-items: center;\n    gap: 0.3rem;\n    margin-top: 0.5rem;\n    font-size: 0.75rem;\n    color: #94a3b8;\n    font-weight: 500;\n  }\n  .product-form .mobile-status-row {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .product-form .mobile-status-label {\n    font-size: 0.85rem;\n    font-weight: 700;\n    color: #334155;\n  }\n  .product-form .mobile-status-value {\n    font-size: 0.85rem;\n    font-weight: 600;\n    color: #94a3b8;\n  }\n  .product-form .mobile-status-value.active {\n    color: #16a34a;\n  }\n  .product-form :host ::ng-deep .p-inputtext,\n  .product-form :host ::ng-deep .p-inputnumber-input,\n  .product-form :host ::ng-deep .p-select-label {\n    font-size: 16px !important;\n    min-height: 2.65rem;\n  }\n  .product-form .mobile-bottom-actions {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 50;\n    display: flex;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));\n    background: rgba(255, 255, 255, 0.92);\n    backdrop-filter: blur(16px);\n    -webkit-backdrop-filter: blur(16px);\n    border-top: 1px solid #e2e8f0;\n  }\n  .product-form .mobile-btn-save {\n    flex: 1;\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    min-height: 2.75rem;\n  }\n  .product-form .mobile-btn-cancel {\n    flex: 0 0 auto;\n    border-radius: 0.75rem !important;\n    font-weight: 600 !important;\n    min-height: 2.75rem;\n  }\n  :host-context(.app-dark) .product-form {\n    background: var(--p-surface-950) !important;\n  }\n  :host-context(.app-dark) .product-form .mobile-form-back,\n  :host-context(.app-dark) .product-form .mobile-form-edit {\n    color: var(--p-surface-100) !important;\n  }\n  :host-context(.app-dark) .product-form .mobile-form-title {\n    color: var(--p-surface-0);\n  }\n  :host-context(.app-dark) .product-form .mobile-image-card {\n    background: var(--p-surface-800);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  }\n  :host-context(.app-dark) .product-form .mobile-upload-placeholder {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .product-form .mobile-upload-placeholder i {\n    color: var(--p-surface-500);\n  }\n  :host-context(.app-dark) .product-form .mobile-section-card {\n    background: var(--p-surface-800);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n  }\n  :host-context(.app-dark) .product-form .mobile-field-label {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .product-form .mobile-price-label {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .product-form .mobile-service-alert {\n    background: rgba(220, 38, 38, 0.15);\n    border-color: var(--p-surface-600);\n    color: #f87171;\n  }\n  :host-context(.app-dark) .product-form .mobile-info-hint {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .product-form .mobile-status-label {\n    color: var(--p-surface-200);\n  }\n  :host-context(.app-dark) .product-form .mobile-status-value {\n    color: var(--p-surface-400);\n  }\n  :host-context(.app-dark) .product-form .mobile-status-value.active {\n    color: #34d399;\n  }\n  :host-context(.app-dark) .product-form .mobile-bottom-actions {\n    background: rgba(15, 23, 42, 0.92);\n    border-top-color: var(--p-surface-700);\n  }\n}\n@keyframes mobileFade {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=produits-form.css.map */\n", "/* angular:styles/component:scss;66765cb0843a060eecf05ccfd1291fb2b8e0274bb4a2f1d5627c389b9d942bce;C:/laragon/www/FRONT/elm-front/src/app/pages/produits/produits-form/produits-form.ts */\n:host ::ng-deep .p-fileupload-header {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-file-list {\n  display: none;\n}\n:host ::ng-deep .p-fileupload-content {\n  height: 20rem;\n}\n/*# sourceMappingURL=produits-form.css.map */\n"] }]
  }], null, { buttonEl: [{
    type: ViewChildren,
    args: ["buttonEl"]
  }], mode: [{
    type: Input
  }], initialData: [{
    type: Input
  }], loading: [{
    type: Input
  }], canManageSystemDefinition: [{
    type: Input
  }], submitForm: [{
    type: Output
  }], cancel: [{
    type: Output
  }], deleteImage: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsForm, { className: "ProduitsForm", filePath: "src/app/pages/produits/produits-form/produits-form.ts", lineNumber: 69 });
})();

// src/app/pages/produits/produits-new/produits-new.ts
var ProduitsNew = class _ProduitsNew {
  router;
  messageService;
  produitService;
  document;
  loading = false;
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  constructor(router, messageService, produitService, document) {
    this.router = router;
    this.messageService = messageService;
    this.produitService = produitService;
    this.document = document;
  }
  ngOnInit() {
    this.updateMobilePwaMode();
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onResize() {
    this.updateMobilePwaMode();
  }
  updateMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  // =============================
  // SUBMIT
  // =============================
  onSubmitForm(dto) {
    this.loading = true;
    const imageFile = dto.image ?? null;
    this.produitService.create(dto).subscribe({
      next: (createdProduit) => {
        if (imageFile && createdProduit.id) {
          this.uploadImageAfterCreate(createdProduit, imageFile);
        } else {
          this.handleSuccess("Produit cr\xE9\xE9 avec succ\xE8s", createdProduit);
        }
      },
      error: (err) => this.handleError("Erreur lors de la cr\xE9ation du produit", err)
    });
  }
  uploadImageAfterCreate(produit, file) {
    this.produitService.uploadProduitImage(produit.id, file).subscribe({
      next: (produitWithImage) => {
        this.handleSuccess("Produit cr\xE9\xE9 avec succ\xE8s", produitWithImage);
      },
      error: () => {
        this.messageService.add({
          severity: "warn",
          summary: "Attention",
          detail: "Produit cr\xE9\xE9, mais l'image n'a pas pu \xEAtre envoy\xE9e.",
          life: 5e3
        });
        this.loading = false;
        this.router.navigate(["/produits/produits-edit", produit.id]);
      }
    });
  }
  // =============================
  // CANCEL
  // =============================
  onCancel() {
    this.router.navigate(["/produits"]);
  }
  // =============================
  // SUCCESS
  // =============================
  handleSuccess(message, createdProduit) {
    this.messageService.add({
      severity: "success",
      summary: "Succ\xE8s",
      detail: message,
      life: 2e3
    });
    this.loading = false;
    if (createdProduit?.id) {
      this.router.navigate(["/produits/produits-edit", createdProduit.id]);
      return;
    }
    this.router.navigate(["/produits"]);
  }
  // =============================
  // ERROR
  // =============================
  handleError(fallback, err) {
    const detail = err?.error?.message || fallback;
    if (err?.status === 422 && err?.error?.errors) {
      const messages = Object.values(err.error.errors).flat();
      messages.forEach((msg) => {
        this.messageService.add({
          severity: "error",
          summary: detail,
          detail: msg,
          life: 5e3
        });
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail,
        life: 5e3
      });
    }
    this.loading = false;
    console.error(err);
  }
  static \u0275fac = function ProduitsNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsNew)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsNew, selectors: [["app-produits-new"]], hostBindings: function ProduitsNew_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsNew_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 1, consts: [["mode", "create", 3, "submitForm", "cancel", "loading"]], template: function ProduitsNew_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "app-produits-form", 0);
      \u0275\u0275listener("submitForm", function ProduitsNew_Template_app_produits_form_submitForm_1_listener($event) {
        return ctx.onSubmitForm($event);
      })("cancel", function ProduitsNew_Template_app_produits_form_cancel_1_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    ProduitsForm,
    ToastModule,
    Toast
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsNew, [{
    type: Component,
    args: [{ selector: "app-produits-new", standalone: true, imports: [
      CommonModule,
      ProduitsForm,
      ToastModule
    ], providers: [MessageService], template: '<p-toast />\r\n\r\n<app-produits-form\r\n    mode="create"\r\n    [loading]="loading"\r\n    (submitForm)="onSubmitForm($event)"\r\n    (cancel)="onCancel()">\r\n</app-produits-form>  ' }]
  }], () => [{ type: Router }, { type: MessageService }, { type: ProduitService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsNew, { className: "ProduitsNew", filePath: "src/app/pages/produits/produits-new/produits-new.ts", lineNumber: 23 });
})();

// src/app/pages/produits/produits-edit/produits-edit.ts
function ProduitsEdit_app_produits_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-produits-form", 1);
    \u0275\u0275listener("submitForm", function ProduitsEdit_app_produits_form_1_Template_app_produits_form_submitForm_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmitForm($event));
    })("cancel", function ProduitsEdit_app_produits_form_1_Template_app_produits_form_cancel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    })("deleteImage", function ProduitsEdit_app_produits_form_1_Template_app_produits_form_deleteImage_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeleteImage());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialData", ctx_r1.initialData)("canManageSystemDefinition", ctx_r1.canManageSystemDefinition)("loading", ctx_r1.loading);
  }
}
var ProduitsEdit = class _ProduitsEdit {
  route;
  router;
  produitService;
  authService;
  messageService;
  document;
  loading = false;
  produitId = null;
  initialData = null;
  get canManageSystemDefinition() {
    return this.hasSystemDefinitionAccess();
  }
  mobileBreakpoint = 768;
  mobilePwaClass = "produits-mobile-pwa";
  constructor(route, router, produitService, authService, messageService, document) {
    this.route = route;
    this.router = router;
    this.produitService = produitService;
    this.authService = authService;
    this.messageService = messageService;
    this.document = document;
  }
  ngOnInit() {
    this.updateMobilePwaMode();
    const idParam = this.route.snapshot.paramMap.get("id");
    const parsedId = idParam ? Number(idParam) : NaN;
    if (!Number.isFinite(parsedId) || parsedId <= 0) {
      this.router.navigate(["/produits"]);
      return;
    }
    this.produitId = parsedId;
    this.loadProduit(parsedId);
  }
  onSubmitForm(dto) {
    if (!this.produitId)
      return;
    this.loading = true;
    const imageFile = dto.image ?? null;
    this.produitService.update(this.produitId, dto).subscribe({
      next: (updatedProduit) => {
        if (imageFile) {
          this.uploadImageAfterUpdate(updatedProduit, imageFile);
        } else {
          this.initialData = updatedProduit;
          this.loading = false;
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Produit modifi\xE9 avec succ\xE8s",
            life: 3e3
          });
        }
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Erreur lors de la modification du produit");
      }
    });
  }
  onDeleteImage() {
    if (!this.produitId)
      return;
    this.loading = true;
    this.produitService.deleteProduitImage(this.produitId).subscribe({
      next: (updatedProduit) => {
        this.initialData = updatedProduit;
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Image supprim\xE9e avec succ\xE8s",
          life: 3e3
        });
      },
      error: (error) => {
        this.initialData = __spreadValues({}, this.initialData);
        this.loading = false;
        this.showApiError(error, "Impossible de supprimer l'image");
      }
    });
  }
  uploadImageAfterUpdate(produit, file) {
    this.produitService.uploadProduitImage(produit.id, file).subscribe({
      next: (produitWithImage) => {
        this.initialData = produitWithImage;
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Produit modifi\xE9 avec succ\xE8s",
          life: 3e3
        });
      },
      error: () => {
        this.initialData = produit;
        this.loading = false;
        this.messageService.add({
          severity: "warn",
          summary: "Attention",
          detail: "Produit modifi\xE9, mais l'image n'a pas pu \xEAtre envoy\xE9e.",
          life: 5e3
        });
      }
    });
  }
  onCancel() {
    this.router.navigate(["/produits"]);
  }
  loadProduit(id) {
    this.loading = true;
    this.produitService.getById(id).subscribe({
      next: (produit) => {
        this.initialData = produit;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Erreur lors du chargement du produit");
      }
    });
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  onResize() {
    this.updateMobilePwaMode();
  }
  updateMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  showApiError(error, fallback) {
    const detail = error?.error?.message || fallback;
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail,
      life: 5e3
    });
  }
  hasSystemDefinitionAccess() {
    const user = this.authService.currentUser();
    if (!user)
      return false;
    const normalizedRoles = [...user.roles ?? [], ...user.role_names ?? []].map((role) => String(role).trim().toLowerCase().replace(/[\s_-]/g, "")).filter((role) => role.length > 0);
    return normalizedRoles.includes("adminentreprise") || normalizedRoles.includes("manager") || normalizedRoles.includes("superadmin");
  }
  static \u0275fac = function ProduitsEdit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProduitsEdit)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProduitsEdit, selectors: [["app-produits-edit"]], hostBindings: function ProduitsEdit_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function ProduitsEdit_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 2, vars: 1, consts: [["mode", "edit", 3, "initialData", "canManageSystemDefinition", "loading", "submitForm", "cancel", "deleteImage", 4, "ngIf"], ["mode", "edit", 3, "submitForm", "cancel", "deleteImage", "initialData", "canManageSystemDefinition", "loading"]], template: function ProduitsEdit_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275template(1, ProduitsEdit_app_produits_form_1_Template, 1, 3, "app-produits-form", 0);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.initialData);
    }
  }, dependencies: [CommonModule, NgIf, ProduitsForm, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProduitsEdit, [{
    type: Component,
    args: [{ selector: "app-produits-edit", standalone: true, imports: [CommonModule, ProduitsForm, ToastModule], providers: [MessageService], template: '<p-toast />\n\n<app-produits-form\n    *ngIf="initialData"\n    mode="edit"\n    [initialData]="initialData"\n    [canManageSystemDefinition]="canManageSystemDefinition"\n    [loading]="loading"\n    (submitForm)="onSubmitForm($event)"\n    (cancel)="onCancel()"\n    (deleteImage)="onDeleteImage()">\n</app-produits-form>\n' }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ProduitService }, { type: AuthService }, { type: MessageService }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProduitsEdit, { className: "ProduitsEdit", filePath: "src/app/pages/produits/produits-edit/produits-edit.ts", lineNumber: 20 });
})();

// src/app/pages/produits/produits.routes.ts
var produits_routes_default = [
  {
    path: "",
    component: ProduitsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "produits", permissions: ["produits.read"] }
  },
  {
    path: "produits",
    component: ProduitsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "produits", permissions: ["produits.read"] }
  },
  {
    path: "produits-new",
    component: ProduitsNew,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "produits-new", permissions: ["produits.create"] }
  },
  {
    path: "produits-edit/:id",
    component: ProduitsEdit,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "produits-edit", permissions: ["produits.update"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  produits_routes_default as default
};
//# sourceMappingURL=chunk-RNXZHGVE.js.map
