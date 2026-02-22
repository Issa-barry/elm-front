import {
  VehiculeService
} from "./chunk-AVOIWZFN.js";
import {
  Card,
  CardModule
} from "./chunk-OPA5WH75.js";
import {
  DividerModule
} from "./chunk-ROA6GDYR.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-2K6C5UQG.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-F3WSM7X3.js";
import {
  authorizationGuard
} from "./chunk-7TXYQDMF.js";
import {
  AuthService
} from "./chunk-S4S52KAB.js";
import {
  Toast,
  ToastModule
} from "./chunk-YKJGQ77C.js";
import "./chunk-D6OMB5HR.js";
import {
  Router,
  RouterModule
} from "./chunk-RDWQPZ6C.js";
import "./chunk-5BMWV7F3.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-YUBBUZ6W.js";
import "./chunk-GUP2PCS6.js";
import "./chunk-ZFKFGXE3.js";
import "./chunk-Z7ZKYBW2.js";
import "./chunk-QWVYTRV2.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-75CKZPHG.js";
import "./chunk-VT4FEFQM.js";
import {
  TagModule
} from "./chunk-IIUI2SVE.js";
import "./chunk-L5ZX63AX.js";
import "./chunk-ZAIBSTL5.js";
import "./chunk-V6PRFSIJ.js";
import "./chunk-WVMZKPPT.js";
import "./chunk-YCFI2AFC.js";
import "./chunk-4J4YC6YG.js";
import "./chunk-AGLSA46G.js";
import "./chunk-3JVPVW6A.js";
import "./chunk-VCYPUXCC.js";
import "./chunk-7JWM7J45.js";
import "./chunk-5IJ6RLG6.js";
import "./chunk-DN6EAZ7J.js";
import "./chunk-7PC7QT7C.js";
import "./chunk-L3QYT2V6.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-2HP6QM3D.js";
import {
  InputText,
  InputTextModule
} from "./chunk-2UXUSHFD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-T4T6HQ4A.js";
import {
  TooltipModule
} from "./chunk-QFHQ36EE.js";
import "./chunk-F6SKB3CY.js";
import "./chunk-JYS7P26Z.js";
import {
  Button,
  ButtonModule
} from "./chunk-WEMW4IDS.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-US7FFCOY.js";
import "./chunk-N5SOATWJ.js";
import "./chunk-QAAAVCDU.js";
import "./chunk-QXL6UX2T.js";
import {
  MessageService
} from "./chunk-CNYAMY4G.js";
import {
  CommonModule,
  NgClass
} from "./chunk-BBWBDWCR.js";
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
  ɵɵpureFunction1,
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
  ɵɵtextInterpolate2
} from "./chunk-GLCXFY3U.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/vehicules/vehicule-liste/vehicule-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["marque", "modele", "immatriculation", "proprietaire.nom", "livreur.nom"];
var _c2 = () => [1, 2, 3, 4, 5];
var _c3 = () => [1, 2, 3, 4, 5, 6];
function VehiculeListe_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 11);
    \u0275\u0275element(1, "i", 12);
    \u0275\u0275text(2, " V\xE9hicules ");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function VehiculeListe_ng_template_5_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNew());
    });
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VehiculeListe_ng_template_5_Conditional_0_Template, 1, 0, "p-button", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.canCreate ? 0 : -1);
  }
}
function VehiculeListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-iconfield");
    \u0275\u0275element(2, "p-inputicon", 16);
    \u0275\u0275elementStart(3, "input", 17);
    \u0275\u0275listener("input", function VehiculeListe_ng_template_9_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      const dt_r4 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(ctx_r1.onGlobalFilter(dt_r4, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function VehiculeListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275text(2, " V\xE9hicule ");
    \u0275\u0275element(3, "p-sortIcon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 20);
    \u0275\u0275text(5, " Immatriculation ");
    \u0275\u0275element(6, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, " Ajout\xE9 le ");
    \u0275\u0275element(15, "p-sortIcon", 25);
    \u0275\u0275elementEnd()();
  }
}
function VehiculeListe_ng_template_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", v_r5.proprietaire.prenom, " ", v_r5.proprietaire.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r5.proprietaire.telephone);
  }
}
function VehiculeListe_ng_template_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", v_r5.livreur.prenom, " ", v_r5.livreur.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r5.livreur.telephone);
  }
}
function VehiculeListe_ng_template_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 30);
    \u0275\u0275text(2, "Prop.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " \xA0/\xA0 ");
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7, "Livr.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", v_r5.commission_proprietaire_pct, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", v_r5.commission_livreur_pct, "%");
  }
}
function VehiculeListe_ng_template_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 26)(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td")(8, "code", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275conditionalCreate(11, VehiculeListe_ng_template_13_Conditional_11_Template, 5, 3)(12, VehiculeListe_ng_template_13_Conditional_12_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275conditionalCreate(14, VehiculeListe_ng_template_13_Conditional_14_Template, 5, 3)(15, VehiculeListe_ng_template_13_Conditional_15_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275conditionalCreate(17, VehiculeListe_ng_template_13_Conditional_17_Template, 10, 2, "div", 31)(18, VehiculeListe_ng_template_13_Conditional_18_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(v_r5), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", v_r5.marque, " ", v_r5.modele);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r5.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(v_r5.proprietaire ? 11 : 12);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(v_r5.livreur ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(v_r5.commission_proprietaire_pct != null ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(v_r5.created_at));
  }
}
function VehiculeListe_ng_template_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("onClick", function VehiculeListe_ng_template_15_Conditional_5_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goNew());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function VehiculeListe_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4, "Aucun v\xE9hicule enregistr\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VehiculeListe_ng_template_15_Conditional_5_Template, 1, 1, "p-button", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.canCreate ? 5 : -1);
  }
}
function VehiculeListe_ng_template_17_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function VehiculeListe_ng_template_17_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, VehiculeListe_ng_template_17_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function VehiculeListe_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, VehiculeListe_ng_template_17_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
var VehiculeListe = class _VehiculeListe {
  vehiculeService;
  messageService;
  authService;
  router;
  vehicules = signal([], ...ngDevMode ? [{ debugName: "vehicules" }] : []);
  loading = false;
  canCreate = false;
  constructor(vehiculeService, messageService, authService, router) {
    this.vehiculeService = vehiculeService;
    this.messageService = messageService;
    this.authService = authService;
    this.router = router;
    this.canCreate = this.authService.hasPermission("vehicules.create");
  }
  ngOnInit() {
    this.loadVehicules();
  }
  loadVehicules() {
    this.loading = true;
    this.vehiculeService.getVehicules().subscribe({
      next: (resp) => {
        this.vehicules.set(Array.isArray(resp.data) ? resp.data : []);
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les v\xE9hicules",
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  goNew() {
    this.router.navigate(["/vehicules/nouveau"]);
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  getInitials(v) {
    return `${v.marque?.charAt(0) ?? ""}${v.modele?.charAt(0) ?? ""}`.toUpperCase();
  }
  static \u0275fac = function VehiculeListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeListe)(\u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeListe, selectors: [["app-vehicule-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 19, vars: 9, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "card"], ["styleClass", "mb-4"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", "currentPageReportTemplate", "{first} \xE0 {last} sur {totalRecords} v\xE9hicules", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields", "showCurrentPageReport"], [1, "text-xl", "font-semibold", "m-0", "flex", "align-items-center", "gap-2"], [1, "pi", "pi-car", "text-primary"], ["label", "Nouveau v\xE9hicule", "icon", "pi pi-plus"], ["label", "Nouveau v\xE9hicule", "icon", "pi pi-plus", 3, "onClick"], [1, "flex", "justify-end"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher (marque, immatriculation\u2026)", 1, "w-full", "md:w-20rem", 3, "input"], ["pSortableColumn", "marque", 2, "min-width", "12rem"], ["field", "marque"], ["pSortableColumn", "immatriculation", 2, "min-width", "10rem"], ["field", "immatriculation"], [2, "min-width", "12rem"], [2, "min-width", "10rem"], ["pSortableColumn", "created_at", 2, "min-width", "9rem"], ["field", "created_at"], [1, "flex", "align-items-center", "gap-2"], [1, "inline-flex", "align-items-center", "justify-content-center", "border-circle", "bg-primary", "text-white", "font-bold", "text-xs", 2, "width", "2rem", "height", "2rem"], [1, "font-medium"], [1, "text-sm", "surface-100", "px-2", "py-1", "border-round"], [1, "text-color-secondary"], [1, "text-sm"], [1, "text-color-secondary", "text-sm"], ["colspan", "6", 1, "text-center", "py-8"], [1, "pi", "pi-car", "text-4xl", "mb-3", "block", 2, "opacity", ".25"], [1, "text-color-secondary", "m-0"], ["label", "Cr\xE9er le premier v\xE9hicule", "icon", "pi pi-plus", "styleClass", "mt-3", 3, "text"], ["label", "Cr\xE9er le premier v\xE9hicule", "icon", "pi pi-plus", "styleClass", "mt-3", 3, "onClick", "text"]], template: function VehiculeListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 8)(2, "p-toolbar", 9);
      \u0275\u0275template(3, VehiculeListe_ng_template_3_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, VehiculeListe_ng_template_5_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 10, 2);
      \u0275\u0275template(9, VehiculeListe_ng_template_9_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, VehiculeListe_ng_template_11_Template, 16, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, VehiculeListe_ng_template_13_Template, 21, 8, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(15, VehiculeListe_ng_template_15_Template, 6, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(17, VehiculeListe_ng_template_17_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.vehicules())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(7, _c0))("globalFilterFields", \u0275\u0275pureFunction0(8, _c1))("showCurrentPageReport", true);
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    InputTextModule,
    InputText,
    SkeletonModule,
    Skeleton,
    TagModule,
    TooltipModule,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField
  ], encapsulation: 2 });
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
      IconFieldModule
    ], providers: [MessageService], template: `<p-toast />

<div class="card">
  <p-toolbar styleClass="mb-4">
    <ng-template #start>
      <h2 class="text-xl font-semibold m-0 flex align-items-center gap-2">
        <i class="pi pi-car text-primary"></i>
        V\xE9hicules
      </h2>
    </ng-template>
    <ng-template #end>
      @if (canCreate) {
        <p-button
          label="Nouveau v\xE9hicule"
          icon="pi pi-plus"
          (onClick)="goNew()"
        />
      }
    </ng-template>
  </p-toolbar>

  <p-table
    #dt
    [value]="vehicules()"
    [loading]="loading"
    [paginator]="true"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    [globalFilterFields]="['marque', 'modele', 'immatriculation', 'proprietaire.nom', 'livreur.nom']"
    styleClass="p-datatable-gridlines"
    responsiveLayout="scroll"
    currentPageReportTemplate="{first} \xE0 {last} sur {totalRecords} v\xE9hicules"
    [showCurrentPageReport]="true"
  >
    <ng-template #caption>
      <div class="flex justify-end">
        <p-iconfield>
          <p-inputicon class="pi pi-search" />
          <input
            pInputText
            type="text"
            placeholder="Rechercher (marque, immatriculation\u2026)"
            (input)="onGlobalFilter(dt, $event)"
            class="w-full md:w-20rem"
          />
        </p-iconfield>
      </div>
    </ng-template>

    <ng-template #header>
      <tr>
        <th pSortableColumn="marque" style="min-width:12rem">
          V\xE9hicule <p-sortIcon field="marque" />
        </th>
        <th pSortableColumn="immatriculation" style="min-width:10rem">
          Immatriculation <p-sortIcon field="immatriculation" />
        </th>
        <th style="min-width:12rem">Propri\xE9taire</th>
        <th style="min-width:12rem">Livreur</th>
        <th style="min-width:10rem">Commission</th>
        <th pSortableColumn="created_at" style="min-width:9rem">
          Ajout\xE9 le <p-sortIcon field="created_at" />
        </th>
      </tr>
    </ng-template>

    <ng-template #body let-v>
      <tr>
        <td>
          <div class="flex align-items-center gap-2">
            <span
              class="inline-flex align-items-center justify-content-center border-circle bg-primary text-white font-bold text-xs"
              style="width:2rem;height:2rem"
            >
              {{ getInitials(v) }}
            </span>
            <span class="font-medium">{{ v.marque }} {{ v.modele }}</span>
          </div>
        </td>
        <td>
          <code class="text-sm surface-100 px-2 py-1 border-round">{{ v.immatriculation }}</code>
        </td>
        <td>
          @if (v.proprietaire) {
            <span class="font-medium">{{ v.proprietaire.prenom }} {{ v.proprietaire.nom }}</span>
            <br />
            <span class="text-color-secondary text-sm">{{ v.proprietaire.telephone }}</span>
          } @else {
            <span class="text-color-secondary">\u2014</span>
          }
        </td>
        <td>
          @if (v.livreur) {
            <span class="font-medium">{{ v.livreur.prenom }} {{ v.livreur.nom }}</span>
            <br />
            <span class="text-color-secondary text-sm">{{ v.livreur.telephone }}</span>
          } @else {
            <span class="text-color-secondary">\u2014</span>
          }
        </td>
        <td>
          @if (v.commission_proprietaire_pct != null) {
            <div class="text-sm">
              <span class="text-color-secondary">Prop.</span>
              <strong> {{ v.commission_proprietaire_pct }}%</strong>
              &nbsp;/&nbsp;
              <span class="text-color-secondary">Livr.</span>
              <strong> {{ v.commission_livreur_pct }}%</strong>
            </div>
          } @else {
            <span class="text-color-secondary">\u2014</span>
          }
        </td>
        <td class="text-color-secondary text-sm">{{ formatDate(v.created_at) }}</td>
      </tr>
    </ng-template>

    <ng-template #emptymessage>
      <tr>
        <td colspan="6" class="text-center py-8">
          <i class="pi pi-car text-4xl mb-3 block" style="opacity:.25"></i>
          <p class="text-color-secondary m-0">Aucun v\xE9hicule enregistr\xE9.</p>
          @if (canCreate) {
            <p-button
              label="Cr\xE9er le premier v\xE9hicule"
              icon="pi pi-plus"
              [text]="true"
              styleClass="mt-3"
              (onClick)="goNew()"
            />
          }
        </td>
      </tr>
    </ng-template>

    <ng-template #loadingbody>
      @for (_ of [1, 2, 3, 4, 5]; track $index) {
        <tr>
          @for (__ of [1, 2, 3, 4, 5, 6]; track $index) {
            <td><p-skeleton /></td>
          }
        </tr>
      }
    </ng-template>
  </p-table>
</div>
` }]
  }], () => [{ type: VehiculeService }, { type: MessageService }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeListe, { className: "VehiculeListe", filePath: "src/app/pages/vehicules/vehicule-liste/vehicule-liste.ts", lineNumber: 42 });
})();

// src/app/pages/vehicules/vehicule-new/vehicule-new.ts
var _c02 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function VehiculeNew_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 39);
    \u0275\u0275text(4, "Informations v\xE9hicule");
    \u0275\u0275elementEnd()();
  }
}
function VehiculeNew_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "La marque est requise.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Le mod\xE8le est requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "L'immatriculation est requise.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "p-button", 41);
    \u0275\u0275listener("onClick", function VehiculeNew_Conditional_40_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removePhoto());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.photoPreview, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("raised", true);
  }
}
function VehiculeNew_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 42);
    \u0275\u0275listener("click", function VehiculeNew_Conditional_41_Template_label_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const photoInput_r5 = \u0275\u0275reference(5);
      return \u0275\u0275resetView(photoInput_r5.click());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275text(3, " Cliquez pour s\xE9lectionner une photo ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 45, 1);
    \u0275\u0275listener("change", function VehiculeNew_Conditional_41_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhotoChange($event));
    });
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 46);
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 39);
    \u0275\u0275text(4, "Propri\xE9taire du v\xE9hicule");
    \u0275\u0275elementEnd()();
  }
}
function VehiculeNew_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 39);
    \u0275\u0275text(4, "Livreur");
    \u0275\u0275elementEnd()();
  }
}
function VehiculeNew_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 12);
    \u0275\u0275text(1, "Requis.");
    \u0275\u0275elementEnd();
  }
}
function VehiculeNew_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 39);
    \u0275\u0275text(4, "R\xE9partition des commissions");
    \u0275\u0275elementEnd()();
  }
}
function VehiculeNew_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 La somme doit \xEAtre exactement ");
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2, "100%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, ". ");
  }
}
function VehiculeNew_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 Parfait ! ");
  }
}
function commissionSumValidator(group) {
  const pp = +(group.get("part_proprietaire")?.value ?? 0);
  const pl = +(group.get("part_livreur")?.value ?? 0);
  return pp + pl === 100 ? null : { commissionTotal: true };
}
var VehiculeNew = class _VehiculeNew {
  fb;
  vehiculeService;
  messageService;
  router;
  form;
  loading = false;
  photoFile = null;
  photoPreview = null;
  constructor(fb, vehiculeService, messageService, router) {
    this.fb = fb;
    this.vehiculeService = vehiculeService;
    this.messageService = messageService;
    this.router = router;
  }
  ngOnInit() {
    this.form = this.fb.group({
      // ── Véhicule
      marque: ["", [Validators.required, Validators.maxLength(100)]],
      modele: ["", [Validators.required, Validators.maxLength(100)]],
      immatriculation: ["", [Validators.required, Validators.maxLength(50)]],
      // ── Propriétaire
      proprietaire_nom: ["", Validators.required],
      proprietaire_prenom: ["", Validators.required],
      proprietaire_telephone: ["", Validators.required],
      proprietaire_email: ["", Validators.email],
      proprietaire_adresse: [""],
      // ── Livreur
      livreur_nom: ["", Validators.required],
      livreur_prenom: ["", Validators.required],
      livreur_telephone: ["", Validators.required],
      livreur_email: ["", Validators.email],
      // ── Commission
      part_proprietaire: [50, [Validators.required, Validators.min(0), Validators.max(100)]],
      part_livreur: [50, [Validators.required, Validators.min(0), Validators.max(100)]]
    }, { validators: commissionSumValidator });
  }
  // ── Photo ─────────────────────────────────────────────────────────────
  onPhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    this.photoFile = file;
    const reader = new FileReader();
    reader.onload = () => this.photoPreview = reader.result;
    reader.readAsDataURL(file);
  }
  removePhoto() {
    this.photoFile = null;
    this.photoPreview = null;
  }
  // ── Helpers ───────────────────────────────────────────────────────────
  field(name) {
    return this.form.get(name);
  }
  isInvalid(name) {
    const c = this.form.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  get commissionTotal() {
    return +(this.field("part_proprietaire").value ?? 0) + +(this.field("part_livreur").value ?? 0);
  }
  get commissionValid() {
    return this.commissionTotal === 100;
  }
  // ── Soumission ────────────────────────────────────────────────────────
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    if (!this.photoFile) {
      this.messageService.add({
        severity: "warn",
        summary: "Photo requise",
        detail: "Veuillez s\xE9lectionner une photo du v\xE9hicule.",
        life: 4e3
      });
      return;
    }
    const v = this.form.value;
    const fd = new FormData();
    fd.append("marque", v.marque);
    fd.append("modele", v.modele);
    fd.append("immatriculation", v.immatriculation);
    fd.append("photo", this.photoFile);
    fd.append("proprietaire_nom", v.proprietaire_nom);
    fd.append("proprietaire_prenom", v.proprietaire_prenom);
    fd.append("proprietaire_telephone", v.proprietaire_telephone);
    if (v.proprietaire_email)
      fd.append("proprietaire_email", v.proprietaire_email);
    if (v.proprietaire_adresse)
      fd.append("proprietaire_adresse", v.proprietaire_adresse);
    fd.append("livreur_nom", v.livreur_nom);
    fd.append("livreur_prenom", v.livreur_prenom);
    fd.append("livreur_telephone", v.livreur_telephone);
    if (v.livreur_email)
      fd.append("livreur_email", v.livreur_email);
    fd.append("part_proprietaire", String(v.part_proprietaire));
    fd.append("part_livreur", String(v.part_livreur));
    this.loading = true;
    this.vehiculeService.createOneShot(fd).subscribe({
      next: () => {
        this.loading = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "V\xE9hicule cr\xE9\xE9 avec succ\xE8s.",
          life: 3e3
        });
        setTimeout(() => this.router.navigate(["/vehicules"]), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.handleApiError(err);
      }
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
    } else if (err.status === 403) {
      this.messageService.add({
        severity: "error",
        summary: "Acc\xE8s refus\xE9",
        detail: "Vous n'avez pas les permissions n\xE9cessaires.",
        life: 5e3
      });
    } else if (err.status === 409) {
      this.messageService.add({
        severity: "warn",
        summary: "Conflit",
        detail: err.error?.message || "Ce v\xE9hicule existe d\xE9j\xE0.",
        life: 5e3
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail: err.error?.message || "Une erreur est survenue.",
        life: 5e3
      });
    }
  }
  static \u0275fac = function VehiculeNew_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculeNew)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculeNew, selectors: [["app-vehicule-new"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 137, vars: 76, consts: [["header", ""], ["photoInput", ""], [1, "p-4", "md:p-6", 2, "max-width", "56rem", "margin", "0 auto"], [1, "flex", "align-items-center", "gap-3", "mb-5"], ["icon", "pi pi-arrow-left", "severity", "secondary", "pTooltip", "Retour \xE0 la liste", 3, "onClick", "text"], [1, "text-2xl", "font-semibold", "m-0"], [1, "text-color-secondary", "text-sm", "m-0"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["styleClass", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "flex", "flex-col", "gap-1"], [1, "font-medium", "text-sm"], [1, "text-red-500"], ["pInputText", "", "formControlName", "marque", "placeholder", "Toyota, Mercedes\u2026"], ["pInputText", "", "formControlName", "modele", "placeholder", "Corolla, Sprinter\u2026"], ["pInputText", "", "formControlName", "immatriculation", "placeholder", "AB-123-CD"], [1, "relative", 2, "max-width", "100%"], ["pInputText", "", "formControlName", "proprietaire_nom", "placeholder", "Nom de famille"], ["pInputText", "", "formControlName", "proprietaire_prenom", "placeholder", "Pr\xE9nom"], ["pInputText", "", "formControlName", "proprietaire_telephone", "placeholder", "+224 6XX XX XX XX"], [1, "text-color-secondary"], ["pInputText", "", "formControlName", "proprietaire_email", "type", "email", "placeholder", "email@exemple.com"], [1, "flex", "flex-col", "gap-1", "md:col-span-2"], ["pInputText", "", "formControlName", "proprietaire_adresse", "placeholder", "Adresse compl\xE8te"], ["pInputText", "", "formControlName", "livreur_nom", "placeholder", "Nom de famille"], ["pInputText", "", "formControlName", "livreur_prenom", "placeholder", "Pr\xE9nom"], ["pInputText", "", "formControlName", "livreur_telephone", "placeholder", "+224 6XX XX XX XX"], ["pInputText", "", "formControlName", "livreur_email", "type", "email", "placeholder", "email@exemple.com"], ["styleClass", "mb-5"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "mb-4"], ["formControlName", "part_proprietaire", "suffix", "%", 3, "min", "max", "useGrouping", "ngClass"], ["formControlName", "part_livreur", "suffix", "%", 3, "min", "max", "useGrouping", "ngClass"], [1, "flex", "align-items-center", "gap-2", "p-3", "border-round", "text-sm", "font-medium", 2, "border", "1px solid currentColor", "opacity", ".85"], [1, "flex", "justify-content-end", "gap-3"], ["label", "Annuler", "severity", "secondary", 3, "onClick", "outlined", "disabled"], ["type", "submit", "label", "Cr\xE9er le v\xE9hicule", "icon", "pi pi-save", 3, "loading", "disabled"], [1, "flex", "align-items-center", "gap-2", "px-5", "pt-4", "pb-2"], [1, "flex", "align-items-center", "justify-content-center", "bg-primary", "border-circle", "text-white", 2, "width", "2rem", "height", "2rem"], [1, "pi", "pi-car", "text-sm"], [1, "text-base", "font-semibold", "m-0"], ["alt", "Aper\xE7u du v\xE9hicule", 1, "w-full", "border-round", 2, "max-height", "10rem", "object-fit", "cover", 3, "src"], ["icon", "pi pi-times", "severity", "danger", "size", "small", "styleClass", "absolute top-0 right-0 m-1", 3, "onClick", "rounded", "raised"], [1, "photo-drop-zone", "flex", "flex-col", "align-items-center", "justify-content-center", "cursor-pointer", "border-round", "border-2", "border-dashed", 2, "min-height", "8rem", 3, "click"], [1, "pi", "pi-upload", "text-3xl", "text-color-secondary", "mb-2"], [1, "text-color-secondary", "text-sm", "text-center", "px-2"], ["type", "file", "accept", "image/*", 1, "hidden", 3, "change"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-500", "border-circle", "text-white", 2, "width", "2rem", "height", "2rem"], [1, "pi", "pi-user", "text-sm"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-500", "border-circle", "text-white", 2, "width", "2rem", "height", "2rem"], [1, "pi", "pi-send", "text-sm"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-500", "border-circle", "text-white", 2, "width", "2rem", "height", "2rem"], [1, "pi", "pi-percentage", "text-sm"]], template: function VehiculeNew_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "p-button", 4);
      \u0275\u0275listener("onClick", function VehiculeNew_Template_p_button_onClick_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "h1", 5);
      \u0275\u0275text(6, "Nouveau v\xE9hicule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Enregistrement one-shot : v\xE9hicule, propri\xE9taire, livreur et commission.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "form", 7);
      \u0275\u0275listener("ngSubmit", function VehiculeNew_Template_form_ngSubmit_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(10, "p-card", 8);
      \u0275\u0275template(11, VehiculeNew_ng_template_11_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "label", 11);
      \u0275\u0275text(16, "Marque ");
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "input", 13);
      \u0275\u0275conditionalCreate(20, VehiculeNew_Conditional_20_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "label", 11);
      \u0275\u0275text(23, "Mod\xE8le ");
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(26, "input", 14);
      \u0275\u0275conditionalCreate(27, VehiculeNew_Conditional_27_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 10)(29, "label", 11);
      \u0275\u0275text(30, "Immatriculation ");
      \u0275\u0275elementStart(31, "span", 12);
      \u0275\u0275text(32, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(33, "input", 15);
      \u0275\u0275conditionalCreate(34, VehiculeNew_Conditional_34_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 10)(36, "label", 11);
      \u0275\u0275text(37, "Photo du v\xE9hicule ");
      \u0275\u0275elementStart(38, "span", 12);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, VehiculeNew_Conditional_40_Template, 3, 3, "div", 16)(41, VehiculeNew_Conditional_41_Template, 6, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "p-card", 8);
      \u0275\u0275template(43, VehiculeNew_ng_template_43_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(45, "div", 9)(46, "div", 10)(47, "label", 11);
      \u0275\u0275text(48, "Nom ");
      \u0275\u0275elementStart(49, "span", 12);
      \u0275\u0275text(50, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(51, "input", 17);
      \u0275\u0275conditionalCreate(52, VehiculeNew_Conditional_52_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 10)(54, "label", 11);
      \u0275\u0275text(55, "Pr\xE9nom ");
      \u0275\u0275elementStart(56, "span", 12);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "input", 18);
      \u0275\u0275conditionalCreate(59, VehiculeNew_Conditional_59_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 10)(61, "label", 11);
      \u0275\u0275text(62, "T\xE9l\xE9phone ");
      \u0275\u0275elementStart(63, "span", 12);
      \u0275\u0275text(64, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(65, "input", 19);
      \u0275\u0275conditionalCreate(66, VehiculeNew_Conditional_66_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 10)(68, "label", 11);
      \u0275\u0275text(69, "Email ");
      \u0275\u0275elementStart(70, "span", 20);
      \u0275\u0275text(71, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(72, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 22)(74, "label", 11);
      \u0275\u0275text(75, "Adresse ");
      \u0275\u0275elementStart(76, "span", 20);
      \u0275\u0275text(77, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "input", 23);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "p-card", 8);
      \u0275\u0275template(80, VehiculeNew_ng_template_80_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(82, "div", 9)(83, "div", 10)(84, "label", 11);
      \u0275\u0275text(85, "Nom ");
      \u0275\u0275elementStart(86, "span", 12);
      \u0275\u0275text(87, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(88, "input", 24);
      \u0275\u0275conditionalCreate(89, VehiculeNew_Conditional_89_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 10)(91, "label", 11);
      \u0275\u0275text(92, "Pr\xE9nom ");
      \u0275\u0275elementStart(93, "span", 12);
      \u0275\u0275text(94, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(95, "input", 25);
      \u0275\u0275conditionalCreate(96, VehiculeNew_Conditional_96_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 10)(98, "label", 11);
      \u0275\u0275text(99, "T\xE9l\xE9phone ");
      \u0275\u0275elementStart(100, "span", 12);
      \u0275\u0275text(101, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "input", 26);
      \u0275\u0275conditionalCreate(103, VehiculeNew_Conditional_103_Template, 2, 0, "small", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 10)(105, "label", 11);
      \u0275\u0275text(106, "Email ");
      \u0275\u0275elementStart(107, "span", 20);
      \u0275\u0275text(108, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(109, "input", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "p-card", 28);
      \u0275\u0275template(111, VehiculeNew_ng_template_111_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(113, "div", 29)(114, "div", 10)(115, "label", 11);
      \u0275\u0275text(116, "Part propri\xE9taire (%) ");
      \u0275\u0275elementStart(117, "span", 12);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "p-inputNumber", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 10)(121, "label", 11);
      \u0275\u0275text(122, "Part livreur (%) ");
      \u0275\u0275elementStart(123, "span", 12);
      \u0275\u0275text(124, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(125, "p-inputNumber", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 32);
      \u0275\u0275element(127, "i");
      \u0275\u0275elementStart(128, "span");
      \u0275\u0275text(129, " Total : ");
      \u0275\u0275elementStart(130, "strong");
      \u0275\u0275text(131);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(132, VehiculeNew_Conditional_132_Template, 4, 0)(133, VehiculeNew_Conditional_133_Template, 1, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "div", 33)(135, "p-button", 34);
      \u0275\u0275listener("onClick", function VehiculeNew_Template_p_button_onClick_135_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(136, "p-button", 35);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("marque"))("ng-dirty", ctx.isInvalid("marque"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("marque") ? 20 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("modele"))("ng-dirty", ctx.isInvalid("modele"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("modele") ? 27 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("immatriculation"))("ng-dirty", ctx.isInvalid("immatriculation"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("immatriculation") ? 34 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.photoPreview ? 40 : 41);
      \u0275\u0275advance(11);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("proprietaire_nom"))("ng-dirty", ctx.isInvalid("proprietaire_nom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("proprietaire_nom") ? 52 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("proprietaire_prenom"))("ng-dirty", ctx.isInvalid("proprietaire_prenom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("proprietaire_prenom") ? 59 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("proprietaire_telephone"))("ng-dirty", ctx.isInvalid("proprietaire_telephone"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("proprietaire_telephone") ? 66 : -1);
      \u0275\u0275advance(22);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("livreur_nom"))("ng-dirty", ctx.isInvalid("livreur_nom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("livreur_nom") ? 89 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("livreur_prenom"))("ng-dirty", ctx.isInvalid("livreur_prenom"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("livreur_prenom") ? 96 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("livreur_telephone"))("ng-dirty", ctx.isInvalid("livreur_telephone"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("livreur_telephone") ? 103 : -1);
      \u0275\u0275advance(16);
      \u0275\u0275property("min", 0)("max", 100)("useGrouping", false)("ngClass", \u0275\u0275pureFunction1(72, _c02, ctx.isInvalid("part_proprietaire")));
      \u0275\u0275advance(6);
      \u0275\u0275property("min", 0)("max", 100)("useGrouping", false)("ngClass", \u0275\u0275pureFunction1(74, _c02, ctx.isInvalid("part_livreur")));
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-green-50", ctx.commissionValid)("text-green-700", ctx.commissionValid)("bg-red-50", !ctx.commissionValid)("text-red-600", !ctx.commissionValid);
      \u0275\u0275advance();
      \u0275\u0275classMap(ctx.commissionValid ? "pi pi-check-circle" : "pi pi-exclamation-circle");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.commissionTotal, "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.commissionValid ? 132 : 133);
      \u0275\u0275advance(3);
      \u0275\u0275property("outlined", true)("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.form.invalid || !ctx.photoFile || ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    RouterModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    ToastModule,
    Toast,
    DividerModule,
    CardModule,
    Card
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculeNew, [{
    type: Component,
    args: [{ selector: "app-vehicule-new", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      ButtonModule,
      InputTextModule,
      InputNumberModule,
      ToastModule,
      DividerModule,
      CardModule
    ], providers: [MessageService], template: `<p-toast />

<div class="p-4 md:p-6" style="max-width:56rem;margin:0 auto">

  <!-- En-t\xEAte \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="flex align-items-center gap-3 mb-5">
    <p-button
      icon="pi pi-arrow-left"
      severity="secondary"
      [text]="true"
      pTooltip="Retour \xE0 la liste"
      (onClick)="onCancel()"
    />
    <div>
      <h1 class="text-2xl font-semibold m-0">Nouveau v\xE9hicule</h1>
      <p class="text-color-secondary text-sm m-0">Enregistrement one-shot : v\xE9hicule, propri\xE9taire, livreur et commission.</p>
    </div>
  </div>

  <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

    <!-- \u2500\u2500 Section 1 : V\xE9hicule \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <p-card styleClass="mb-4">
      <ng-template #header>
        <div class="flex align-items-center gap-2 px-5 pt-4 pb-2">
          <span class="flex align-items-center justify-content-center bg-primary border-circle text-white"
                style="width:2rem;height:2rem">
            <i class="pi pi-car text-sm"></i>
          </span>
          <h2 class="text-base font-semibold m-0">Informations v\xE9hicule</h2>
        </div>
      </ng-template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Marque -->
        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Marque <span class="text-red-500">*</span></label>
          <input
            pInputText
            formControlName="marque"
            placeholder="Toyota, Mercedes\u2026"
            [class.ng-invalid]="isInvalid('marque')"
            [class.ng-dirty]="isInvalid('marque')"
          />
          @if (isInvalid('marque')) {
            <small class="text-red-500">La marque est requise.</small>
          }
        </div>

        <!-- Mod\xE8le -->
        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Mod\xE8le <span class="text-red-500">*</span></label>
          <input
            pInputText
            formControlName="modele"
            placeholder="Corolla, Sprinter\u2026"
            [class.ng-invalid]="isInvalid('modele')"
            [class.ng-dirty]="isInvalid('modele')"
          />
          @if (isInvalid('modele')) {
            <small class="text-red-500">Le mod\xE8le est requis.</small>
          }
        </div>

        <!-- Immatriculation -->
        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Immatriculation <span class="text-red-500">*</span></label>
          <input
            pInputText
            formControlName="immatriculation"
            placeholder="AB-123-CD"
            [class.ng-invalid]="isInvalid('immatriculation')"
            [class.ng-dirty]="isInvalid('immatriculation')"
          />
          @if (isInvalid('immatriculation')) {
            <small class="text-red-500">L'immatriculation est requise.</small>
          }
        </div>

        <!-- Photo -->
        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Photo du v\xE9hicule <span class="text-red-500">*</span></label>

          @if (photoPreview) {
            <div class="relative" style="max-width:100%">
              <img
                [src]="photoPreview"
                alt="Aper\xE7u du v\xE9hicule"
                class="w-full border-round"
                style="max-height:10rem;object-fit:cover"
              />
              <p-button
                icon="pi pi-times"
                severity="danger"
                size="small"
                [rounded]="true"
                [raised]="true"
                styleClass="absolute top-0 right-0 m-1"
                (onClick)="removePhoto()"
              />
            </div>
          } @else {
            <label
              class="photo-drop-zone flex flex-col align-items-center justify-content-center cursor-pointer border-round border-2 border-dashed"
              style="min-height:8rem"
              (click)="photoInput.click()"
            >
              <i class="pi pi-upload text-3xl text-color-secondary mb-2"></i>
              <span class="text-color-secondary text-sm text-center px-2">
                Cliquez pour s\xE9lectionner une photo
              </span>
            </label>
            <input #photoInput type="file" accept="image/*" class="hidden" (change)="onPhotoChange($event)" />
          }
        </div>

      </div>
    </p-card>

    <!-- \u2500\u2500 Section 2 : Propri\xE9taire \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <p-card styleClass="mb-4">
      <ng-template #header>
        <div class="flex align-items-center gap-2 px-5 pt-4 pb-2">
          <span class="flex align-items-center justify-content-center bg-blue-500 border-circle text-white"
                style="width:2rem;height:2rem">
            <i class="pi pi-user text-sm"></i>
          </span>
          <h2 class="text-base font-semibold m-0">Propri\xE9taire du v\xE9hicule</h2>
        </div>
      </ng-template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Nom <span class="text-red-500">*</span></label>
          <input pInputText formControlName="proprietaire_nom" placeholder="Nom de famille"
            [class.ng-invalid]="isInvalid('proprietaire_nom')" [class.ng-dirty]="isInvalid('proprietaire_nom')" />
          @if (isInvalid('proprietaire_nom')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Pr\xE9nom <span class="text-red-500">*</span></label>
          <input pInputText formControlName="proprietaire_prenom" placeholder="Pr\xE9nom"
            [class.ng-invalid]="isInvalid('proprietaire_prenom')" [class.ng-dirty]="isInvalid('proprietaire_prenom')" />
          @if (isInvalid('proprietaire_prenom')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">T\xE9l\xE9phone <span class="text-red-500">*</span></label>
          <input pInputText formControlName="proprietaire_telephone" placeholder="+224 6XX XX XX XX"
            [class.ng-invalid]="isInvalid('proprietaire_telephone')" [class.ng-dirty]="isInvalid('proprietaire_telephone')" />
          @if (isInvalid('proprietaire_telephone')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Email <span class="text-color-secondary">(optionnel)</span></label>
          <input pInputText formControlName="proprietaire_email" type="email" placeholder="email@exemple.com" />
        </div>

        <div class="flex flex-col gap-1 md:col-span-2">
          <label class="font-medium text-sm">Adresse <span class="text-color-secondary">(optionnel)</span></label>
          <input pInputText formControlName="proprietaire_adresse" placeholder="Adresse compl\xE8te" />
        </div>

      </div>
    </p-card>

    <!-- \u2500\u2500 Section 3 : Livreur \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <p-card styleClass="mb-4">
      <ng-template #header>
        <div class="flex align-items-center gap-2 px-5 pt-4 pb-2">
          <span class="flex align-items-center justify-content-center bg-orange-500 border-circle text-white"
                style="width:2rem;height:2rem">
            <i class="pi pi-send text-sm"></i>
          </span>
          <h2 class="text-base font-semibold m-0">Livreur</h2>
        </div>
      </ng-template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Nom <span class="text-red-500">*</span></label>
          <input pInputText formControlName="livreur_nom" placeholder="Nom de famille"
            [class.ng-invalid]="isInvalid('livreur_nom')" [class.ng-dirty]="isInvalid('livreur_nom')" />
          @if (isInvalid('livreur_nom')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Pr\xE9nom <span class="text-red-500">*</span></label>
          <input pInputText formControlName="livreur_prenom" placeholder="Pr\xE9nom"
            [class.ng-invalid]="isInvalid('livreur_prenom')" [class.ng-dirty]="isInvalid('livreur_prenom')" />
          @if (isInvalid('livreur_prenom')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">T\xE9l\xE9phone <span class="text-red-500">*</span></label>
          <input pInputText formControlName="livreur_telephone" placeholder="+224 6XX XX XX XX"
            [class.ng-invalid]="isInvalid('livreur_telephone')" [class.ng-dirty]="isInvalid('livreur_telephone')" />
          @if (isInvalid('livreur_telephone')) { <small class="text-red-500">Requis.</small> }
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Email <span class="text-color-secondary">(optionnel)</span></label>
          <input pInputText formControlName="livreur_email" type="email" placeholder="email@exemple.com" />
        </div>

      </div>
    </p-card>

    <!-- \u2500\u2500 Section 4 : Commission \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <p-card styleClass="mb-5">
      <ng-template #header>
        <div class="flex align-items-center gap-2 px-5 pt-4 pb-2">
          <span class="flex align-items-center justify-content-center bg-green-500 border-circle text-white"
                style="width:2rem;height:2rem">
            <i class="pi pi-percentage text-sm"></i>
          </span>
          <h2 class="text-base font-semibold m-0">R\xE9partition des commissions</h2>
        </div>
      </ng-template>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Part propri\xE9taire (%) <span class="text-red-500">*</span></label>
          <p-inputNumber
            formControlName="part_proprietaire"
            [min]="0"
            [max]="100"
            suffix="%"
            [useGrouping]="false"
            [ngClass]="{'ng-invalid ng-dirty': isInvalid('part_proprietaire')}"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-medium text-sm">Part livreur (%) <span class="text-red-500">*</span></label>
          <p-inputNumber
            formControlName="part_livreur"
            [min]="0"
            [max]="100"
            suffix="%"
            [useGrouping]="false"
            [ngClass]="{'ng-invalid ng-dirty': isInvalid('part_livreur')}"
          />
        </div>

      </div>

      <!-- Indicateur total -->
      <div
        class="flex align-items-center gap-2 p-3 border-round text-sm font-medium"
        [class.bg-green-50]="commissionValid"
        [class.text-green-700]="commissionValid"
        [class.bg-red-50]="!commissionValid"
        [class.text-red-600]="!commissionValid"
        style="border:1px solid currentColor;opacity:.85"
      >
        <i [class]="commissionValid ? 'pi pi-check-circle' : 'pi pi-exclamation-circle'"></i>
        <span>
          Total : <strong>{{ commissionTotal }}%</strong>
          @if (!commissionValid) {
            &mdash; La somme doit \xEAtre exactement <strong>100%</strong>.
          } @else {
            &mdash; Parfait !
          }
        </span>
      </div>
    </p-card>

    <!-- \u2500\u2500 Actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex justify-content-end gap-3">
      <p-button
        label="Annuler"
        severity="secondary"
        [outlined]="true"
        (onClick)="onCancel()"
        [disabled]="loading"
      />
      <p-button
        type="submit"
        label="Cr\xE9er le v\xE9hicule"
        icon="pi pi-save"
        [loading]="loading"
        [disabled]="form.invalid || !photoFile || loading"
      />
    </div>

  </form>
</div>
` }]
  }], () => [{ type: FormBuilder }, { type: VehiculeService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculeNew, { className: "VehiculeNew", filePath: "src/app/pages/vehicules/vehicule-new/vehicule-new.ts", lineNumber: 46 });
})();

// src/app/pages/vehicules/vehicules.routes.ts
var vehicules_routes_default = [
  {
    path: "",
    component: VehiculeListe,
    canActivate: [authorizationGuard],
    data: { permissions: ["vehicules.read"] }
  },
  {
    path: "nouveau",
    component: VehiculeNew,
    canActivate: [authorizationGuard],
    data: { permissions: ["vehicules.create"] }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  vehicules_routes_default as default
};
//# sourceMappingURL=chunk-2AKK6WVC.js.map
