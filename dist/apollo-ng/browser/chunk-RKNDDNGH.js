import {
  StatCardWidget
} from "./chunk-RYZVOHUZ.js";
import {
  DashboardService
} from "./chunk-6ZQCDU4C.js";
import {
  ProductService
} from "./chunk-RP7ATEOL.js";
import {
  ChartModule,
  UIChart
} from "./chunk-VGL76XOP.js";
import {
  LayoutService
} from "./chunk-AO7XXCDH.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-WA64UDJV.js";
import {
  AuthService
} from "./chunk-JKMJDVN5.js";
import {
  Router
} from "./chunk-5M76Y6O2.js";
import "./chunk-B555S3BB.js";
import "./chunk-J6EUYIEM.js";
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
import "./chunk-25MJSVSI.js";
import "./chunk-QBTCSFIV.js";
import "./chunk-QRW46MGS.js";
import "./chunk-OWOPR7KK.js";
import "./chunk-LPYK5F7X.js";
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
import "./chunk-X57GOT3J.js";
import "./chunk-ZJMXLI5D.js";
import {
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
  ButtonModule
} from "./chunk-VB3XNU3Q.js";
import "./chunk-BKCBW4AP.js";
import "./chunk-SCR42GDN.js";
import {
  FluidModule
} from "./chunk-CBEWEUNZ.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-AGBUVBVL.js";
import {
  CommonModule,
  DecimalPipe,
  isPlatformBrowser
} from "./chunk-T6X6TYBW.js";
import "./chunk-WWG27WRZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Observable,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  assertInInjectionContext,
  computed,
  debounceTime,
  effect,
  finalize,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-HXF2V74O.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/dashboards/finance/widgets/headerwidget2.ts
var _c0 = () => ({ "min-width": "160px" });
var HeaderWidget2 = class _HeaderWidget2 {
  auth = inject(AuthService);
  period = "this_month";
  periodChange = new EventEmitter();
  periodOptions = [
    { label: "Ce mois", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "Cette annee", value: "this_year" },
    { label: "Cette semaine", value: "this_week" }
  ];
  nomComplet = computed(() => this.auth.currentUser()?.nom_complet ?? "", ...ngDevMode ? [{ debugName: "nomComplet" }] : []);
  lastLoginLabel = computed(() => {
    const dt = this.auth.currentUser()?.last_login_at;
    if (!dt)
      return "Premiere connexion";
    const d = new Date(dt);
    const date = d.toLocaleDateString("fr-FR");
    const time = d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    return `Derniere connexion le ${date} a ${time}`;
  }, ...ngDevMode ? [{ debugName: "lastLoginLabel" }] : []);
  onPeriodChange(value) {
    this.periodChange.emit(value);
  }
  static \u0275fac = function HeaderWidget2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderWidget2)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderWidget2, selectors: [["app-header-widget2"]], inputs: { period: "period" }, outputs: { periodChange: "periodChange" }, decls: 15, vars: 7, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-4"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-m-12.png", 1, "w-16", "h-16", "shrink-0"], [1, "flex", "flex-col", "items-center", "sm:items-start"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-xl"], [1, "text-surface-600", "dark:text-surface-200", "m-0"], [1, "flex", "items-center", "gap-3", "flex-nowrap", "sm:ml-auto"], [1, "flex", "items-center", "gap-2", "shrink-0"], [1, "hidden", "sm:block"], ["pTooltip", "Exchange", "tooltipPosition", "bottom", "icon", "pi pi-arrows-h", "outlined", "", "rounded", ""], ["pTooltip", "Withdraw", "tooltipPosition", "bottom", "icon", "pi pi-download", "outlined", "", "rounded", ""], ["pTooltip", "Send", "tooltipPosition", "bottom", "icon", "pi pi-send", "rounded", ""], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"]], template: function HeaderWidget2_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "p-button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "p-button", 10)(13, "p-button", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-select", 12);
      \u0275\u0275listener("ngModelChange", function HeaderWidget2_Template_p_select_ngModelChange_14_listener($event) {
        return ctx.onPeriodChange($event);
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.nomComplet());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lastLoginLabel());
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c0));
      \u0275\u0275property("options", ctx.periodOptions)("ngModel", ctx.period);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, ButtonModule, Button, SelectModule, Select, TooltipModule, Tooltip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderWidget2, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-header-widget2",
      imports: [FormsModule, ButtonModule, SelectModule, TooltipModule],
      template: `
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img alt="avatar" src="/demo/images/avatar/circle/avatar-m-12.png" class="w-16 h-16 shrink-0" />
                <div class="flex flex-col items-center sm:items-start">
                    <span class="text-surface-900 dark:text-surface-0 font-bold text-xl">{{ nomComplet() }}</span>
                    <p class="text-surface-600 dark:text-surface-200 m-0">{{ lastLoginLabel() }}</p>
                </div>
            </div>

            <div class="flex items-center gap-3 flex-nowrap sm:ml-auto">
                <div class="flex items-center gap-2 shrink-0">
                    <div class="hidden sm:block">
                        <p-button pTooltip="Exchange" tooltipPosition="bottom" icon="pi pi-arrows-h" outlined rounded />
                    </div>
                    <p-button pTooltip="Withdraw" tooltipPosition="bottom" icon="pi pi-download" outlined rounded />
                    <p-button pTooltip="Send" tooltipPosition="bottom" icon="pi pi-send" rounded />
                </div>

                <p-select
                    [options]="periodOptions"
                    [ngModel]="period"
                    (ngModelChange)="onPeriodChange($event)"
                    optionLabel="label"
                    optionValue="value"
                    [style]="{ 'min-width': '160px' }"
                />
            </div>
        </div>
    `
    }]
  }], null, { period: [{
    type: Input
  }], periodChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderWidget2, { className: "HeaderWidget2", filePath: "src/app/pages/dashboards/finance/widgets/headerwidget2.ts", lineNumber: 44 });
})();

// src/app/pages/dashboards/finance/widgets/caparstatutwidget.ts
var _c02 = () => ({ "min-width": "180px" });
var _c1 = () => [1, 2, 3, 4, 5];
function caParStatutWidget_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 10);
  }
}
function caParStatutWidget_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, caParStatutWidget_Conditional_6_For_2_Template, 1, 0, "p-skeleton", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function caParStatutWidget_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 12);
    \u0275\u0275listener("onClick", function caParStatutWidget_Conditional_7_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function caParStatutWidget_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " Aucune donnee disponible pour cette periode. ");
    \u0275\u0275elementEnd();
  }
}
function caParStatutWidget_Conditional_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "CA Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nb commandes");
    \u0275\u0275elementEnd()();
  }
}
function caParStatutWidget_Conditional_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tag", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const tag_r4 = \u0275\u0275nextContext(2).getStatutTag(row_r3.statut_facture);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", tag_r4.value)("severity", tag_r4.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 4, row_r3.ca_total, "1.0-0"), " GNF");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.nb_commandes);
  }
}
function caParStatutWidget_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 13);
    \u0275\u0275template(1, caParStatutWidget_Conditional_9_ng_template_1_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, caParStatutWidget_Conditional_9_ng_template_3_Template, 8, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.rows)("rows", 6);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Total CA (hors annulees): ", \u0275\u0275pipeBind2(8, 5, ctx_r1.totalCa, "1.0-0"), " GNF");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Total commandes: ", ctx_r1.totalCommandes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Les factures annulees (", ctx_r1.nbCommandesAnnulees, " commande(s)) ne sont pas prises en compte dans le CA. ");
  }
}
var caParStatutWidget = class _caParStatutWidget {
  dashboardService = inject(DashboardService);
  periodOptions = [
    { label: "Aujourd'hui", value: "today" },
    { label: "Cette semaine", value: "this_week" },
    { label: "Ce mois", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "Cette annee", value: "this_year" }
  ];
  selectedPeriod = "this_month";
  rows = [];
  loading = false;
  errorMessage = null;
  get totalCa() {
    return this.rows.filter((item) => item.statut_facture !== "annulee").reduce((sum, item) => sum + (item.ca_total ?? 0), 0);
  }
  get totalCommandes() {
    return this.rows.reduce((sum, item) => sum + (item.nb_commandes ?? 0), 0);
  }
  get nbCommandesAnnulees() {
    return this.rows.filter((item) => item.statut_facture === "annulee").reduce((sum, item) => sum + (item.nb_commandes ?? 0), 0);
  }
  ngOnInit() {
    this.loadData();
  }
  onPeriodChange() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.errorMessage = null;
    this.dashboardService.getVentesParTypeVehicule(this.selectedPeriod).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => {
        this.rows = data?.par_statut ?? [];
      },
      error: () => {
        this.rows = [];
        this.errorMessage = "Impossible de charger le CA par statut.";
      }
    });
  }
  getStatutTag(statut) {
    const map = {
      payee: { value: "Payee", severity: "success" },
      partiel: { value: "Partielle", severity: "warn" },
      impayee: { value: "Impayee", severity: "danger" },
      annulee: { value: "Annulee", severity: "secondary" }
    };
    return map[statut];
  }
  static \u0275fac = function caParStatutWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _caParStatutWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _caParStatutWidget, selectors: [["app-ca-par-statut-widget"]], decls: 10, vars: 6, consts: [["header", ""], ["body", ""], [1, "card"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], [1, "sm:ml-auto"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "items-start", "gap-3", "p-3", "border-1", "border-round", "surface-border"], [1, "text-sm", "text-surface-500", "p-3", "border-1", "border-round", "surface-border"], ["height", "2.6rem", "borderRadius", "8px"], [1, "text-sm", "text-red-500"], ["label", "Reessayer", "icon", "pi pi-refresh", "size", "small", 3, "onClick"], [3, "value", "rows"], [1, "text-xs", "text-surface-500", "mt-8", "flex", "flex-wrap", "gap-2"], [1, "text-xs", "text-surface-500", "mt-3"], [3, "value", "severity"]], template: function caParStatutWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275text(3, " CA par statut de facture ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "p-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function caParStatutWidget_Template_p_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function caParStatutWidget_Template_p_select_onChange_5_listener() {
        return ctx.onPeriodChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, caParStatutWidget_Conditional_6_Template, 3, 1, "div", 7)(7, caParStatutWidget_Conditional_7_Template, 4, 1, "div", 8)(8, caParStatutWidget_Conditional_8_Template, 2, 0, "div", 9)(9, caParStatutWidget_Conditional_9_Template, 15, 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c02));
      \u0275\u0275property("options", ctx.periodOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 6 : ctx.errorMessage ? 7 : ctx.rows.length === 0 ? 8 : 9);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, TableModule, Table, TagModule, Tag, SelectModule, Select, SkeletonModule, Skeleton, ButtonModule, Button, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(caParStatutWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-ca-par-statut-widget",
      imports: [CommonModule, FormsModule, TableModule, TagModule, SelectModule, SkeletonModule, ButtonModule],
      template: `
        <div class="card">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold">
                    CA par statut de facture
                </div>
                <div class="sm:ml-auto">
                    <p-select
                        [options]="periodOptions"
                        [(ngModel)]="selectedPeriod"
                        (onChange)="onPeriodChange()"
                        optionLabel="label"
                        optionValue="value"
                        [style]="{ 'min-width': '180px' }"
                    />
                </div> 
            </div>

            @if (loading) {
                <div class="flex flex-col gap-2">
                    @for (_ of [1, 2, 3, 4, 5]; track $index) {
                        <p-skeleton height="2.6rem" borderRadius="8px"></p-skeleton>
                    }
                </div>
            } @else if (errorMessage) {
                <div class="flex flex-col items-start gap-3 p-3 border-1 border-round surface-border">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            } @else if (rows.length === 0) {
                <div class="text-sm text-surface-500 p-3 border-1 border-round surface-border">
                    Aucune donnee disponible pour cette periode.
                </div>
            } @else {
                <p-table [value]="rows" [rows]="6">
                    <ng-template #header>
                        <tr>
                            <th>Statut</th>
                            <th>CA Total</th>
                            <th>Nb commandes</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>
                                @let tag = getStatutTag(row.statut_facture);
                                <p-tag [value]="tag.value" [severity]="tag.severity"></p-tag>
                            </td>
                            <td>{{ row.ca_total | number:'1.0-0' }} GNF</td>
                            <td>{{ row.nb_commandes }}</td>
                        </tr>
                    </ng-template>
                </p-table>

                <div class="text-xs text-surface-500 mt-8 flex flex-wrap gap-2">
                    <span>Total CA (hors annulees): {{ totalCa | number:'1.0-0' }} GNF</span>
                    <span>-</span>
                    <span>Total commandes: {{ totalCommandes }}</span>
                </div>
                <div class="text-xs text-surface-500 mt-3">
                    Les factures annulees ({{ nbCommandesAnnulees }} commande(s)) ne sont pas prises en compte dans le CA.
                </div>
            }
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(caParStatutWidget, { className: "caParStatutWidget", filePath: "src/app/pages/dashboards/finance/widgets/caparstatutwidget.ts", lineNumber: 93 });
})();

// src/app/pages/dashboards/finance/widgets/encaissementwidget.ts
var _forTrack0 = ($index, $item) => $item.title;
function EncaissementWidget_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "span", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 4);
    \u0275\u0275listener("onClick", function EncaissementWidget_Conditional_0_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EncaissementWidget_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-stat-card-widget", 1);
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", card_r3.title)("value", card_r3.value)("subtitle", card_r3.subtitle)("loading", ctx_r1.loading)("variant", card_r3.variant);
  }
}
function EncaissementWidget_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 5);
    \u0275\u0275text(2, "Aucune donnee disponible pour cette periode.");
    \u0275\u0275elementEnd()();
  }
}
var EncaissementWidget = class _EncaissementWidget {
  dashboardService = inject(DashboardService);
  period = "this_month";
  stat = null;
  loading = false;
  errorMessage = null;
  get cards() {
    return [
      {
        title: "Total Factures",
        value: this.stat?.total_factures ?? 0,
        subtitle: `${this.stat?.nb_factures_total ?? 0} facture(s)`,
        variant: "primary"
      },
      {
        title: "Factures payees",
        value: this.stat?.factures_payees ?? 0,
        subtitle: `${this.stat?.nb_factures_payees ?? 0} facture(s)`,
        variant: "default"
      },
      {
        title: "Reste a encaisser",
        value: this.stat?.reste_a_encaisser ?? 0,
        subtitle: `${this.stat?.nb_factures_impayees ?? 0} en attente`,
        variant: "default"
      }
    ];
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnChanges(changes) {
    if (changes["period"] && !changes["period"].firstChange) {
      this.loadData();
    }
  }
  loadData() {
    this.loading = true;
    this.errorMessage = null;
    this.dashboardService.getVentesEncaissements(this.period).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => {
        this.stat = data ?? null;
      },
      error: () => {
        this.stat = null;
        this.errorMessage = "Impossible de charger les statistiques d encaissement.";
      }
    });
  }
  static \u0275fac = function EncaissementWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncaissementWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncaissementWidget, selectors: [["app-encaissement-widget"]], hostVars: 2, hostBindings: function EncaissementWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, inputs: { period: "period" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "col-span-12"], [3, "title", "value", "subtitle", "loading", "variant"], [1, "card", "p-3", "border-1", "border-round", "surface-border", "flex", "items-center", "justify-between", "gap-3"], [1, "text-sm", "text-red-500"], ["label", "Reessayer", "icon", "pi pi-refresh", "size", "small", 3, "onClick"], [1, "card", "p-3", "text-sm", "text-surface-500"]], template: function EncaissementWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, EncaissementWidget_Conditional_0_Template, 5, 1, "div", 0);
      \u0275\u0275repeaterCreate(1, EncaissementWidget_For_2_Template, 1, 5, "app-stat-card-widget", 1, _forTrack0);
      \u0275\u0275conditionalCreate(3, EncaissementWidget_Conditional_3_Template, 3, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.errorMessage ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cards);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading && !ctx.errorMessage && !ctx.stat ? 3 : -1);
    }
  }, dependencies: [CommonModule, ButtonModule, Button, StatCardWidget], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncaissementWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-encaissement-widget",
      imports: [CommonModule, ButtonModule, StatCardWidget],
      template: `
        @if (errorMessage) {
            <div class="col-span-12">
                <div class="card p-3 border-1 border-round surface-border flex items-center justify-between gap-3">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            </div>
        }

        @for (card of cards; track card.title) {
            <app-stat-card-widget [title]="card.title" [value]="card.value" [subtitle]="card.subtitle" [loading]="loading" [variant]="card.variant" />
        }

        @if (!loading && !errorMessage && !stat) {
            <div class="col-span-12">
                <div class="card p-3 text-sm text-surface-500">Aucune donnee disponible pour cette periode.</div>
            </div>
        }
    `,
      host: {
        "[style.display]": '"contents"'
      }
    }]
  }], null, { period: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncaissementWidget, { className: "EncaissementWidget", filePath: "src/app/pages/dashboards/finance/widgets/encaissementwidget.ts", lineNumber: 47 });
})();

// src/app/pages/dashboards/finance/widgets/vehiculewidget.ts
var _c03 = () => ({ "min-width": "180px" });
var _c12 = () => [1, 2, 3, 4, 5];
function VehiculewWidget_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 9);
  }
}
function VehiculewWidget_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, VehiculewWidget_Conditional_6_For_2_Template, 1, 0, "p-skeleton", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c12));
  }
}
function VehiculewWidget_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 11);
    \u0275\u0275listener("onClick", function VehiculewWidget_Conditional_7_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadData());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function VehiculewWidget_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, " Aucune donnee disponible pour cette periode. ");
    \u0275\u0275elementEnd();
  }
}
function VehiculewWidget_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r1.chartData)("options", ctx_r1.chartOptions);
  }
}
var VehiculewWidget = class _VehiculewWidget {
  cd;
  chartData = { labels: [], datasets: [] };
  chartOptions;
  periodOptions = [
    { label: "Cette annee", value: "this_year" },
    { label: "Annee passee", value: "last_year" },
    { label: "Ce semestre", value: "s1" },
    { label: "Ce trimestre", value: "q1" },
    { label: "Ce mois", value: "this_month" }
  ];
  selectedPeriod = "this_year";
  loading = false;
  errorMessage = null;
  evolutionData = null;
  platformId = inject(PLATFORM_ID);
  layoutService = inject(LayoutService);
  dashboardService = inject(DashboardService);
  constructor(cd) {
    this.cd = cd;
  }
  themeEffect = effect(() => {
    if (this.layoutService.transitionComplete()) {
      this.initChart(this.evolutionData ?? void 0);
    }
  }, ...ngDevMode ? [{ debugName: "themeEffect" }] : []);
  ngOnInit() {
    this.loadData();
  }
  onPeriodChange() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    this.errorMessage = null;
    this.dashboardService.getVentesEvolutionParType(this.selectedPeriod).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => {
        this.evolutionData = data ?? null;
        this.initChart(this.evolutionData ?? void 0);
      },
      error: () => {
        this.evolutionData = null;
        this.chartData = { labels: [], datasets: [] };
        this.errorMessage = "Impossible de charger l'evolution du CA par type.";
        this.initChart();
      }
    });
  }
  initChart(apiData) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const datasets = apiData?.datasets ?? [];
    this.chartData = {
      labels: apiData?.labels ?? [],
      datasets: datasets.map((ds, i) => {
        const isFilled = i === datasets.length - 1;
        return {
          label: ds.label,
          data: ds.data,
          fill: isFilled,
          tension: 0.4,
          borderColor: this.typeColor(ds.type_vehicule, documentStyle),
          backgroundColor: isFilled ? "rgba(99,102,220,0.2)" : void 0
        };
      })
    };
    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.65,
      animation: {
        duration: 0
      },
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              let label = context.dataset?.label ? `${context.dataset.label}: ` : "";
              const value = context.parsed?.y;
              if (value !== null && value !== void 0) {
                label += `${new Intl.NumberFormat("fr-GN", {
                  style: "decimal",
                  maximumFractionDigits: 0
                }).format(value)} GNF`;
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
    this.cd.markForCheck();
  }
  typeColor(type, style2) {
    const map = {
      camion: style2.getPropertyValue("--p-green-500"),
      tricycle: "#6366f1",
      vanne: style2.getPropertyValue("--p-blue-500"),
      moto: style2.getPropertyValue("--p-orange-500"),
      pick_up: style2.getPropertyValue("--p-yellow-500"),
      autre: style2.getPropertyValue("--p-gray-400")
    };
    return map[type] ?? style2.getPropertyValue("--p-primary-500");
  }
  static \u0275fac = function VehiculewWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VehiculewWidget)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehiculewWidget, selectors: [["app-vehicule-widget"]], decls: 10, vars: 6, consts: [[1, "card", "h-full"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-3", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], [1, "sm:ml-auto"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "onChange", "options", "ngModel"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "items-start", "gap-3", "p-3", "border-1", "border-round", "surface-border"], [1, "text-sm", "text-surface-500", "p-3", "border-1", "border-round", "surface-border"], ["type", "line", 3, "data", "options"], ["height", "2.4rem", "borderRadius", "8px"], [1, "text-sm", "text-red-500"], ["label", "Reessayer", "icon", "pi pi-refresh", "size", "small", 3, "onClick"]], template: function VehiculewWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Part vehicule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "p-select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function VehiculewWidget_Template_p_select_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function VehiculewWidget_Template_p_select_onChange_5_listener() {
        return ctx.onPeriodChange();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(6, VehiculewWidget_Conditional_6_Template, 3, 1, "div", 5)(7, VehiculewWidget_Conditional_7_Template, 4, 1, "div", 6)(8, VehiculewWidget_Conditional_8_Template, 2, 0, "div", 7)(9, VehiculewWidget_Conditional_9_Template, 1, 2, "p-chart", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c03));
      \u0275\u0275property("options", ctx.periodOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 6 : ctx.errorMessage ? 7 : !(ctx.chartData == null ? null : ctx.chartData.labels == null ? null : ctx.chartData.labels.length) ? 8 : 9);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ChartModule, UIChart, SelectModule, Select, SkeletonModule, Skeleton, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehiculewWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-vehicule-widget",
      imports: [CommonModule, FormsModule, ChartModule, SelectModule, SkeletonModule, ButtonModule],
      template: `
        <div class="card h-full">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold">Part vehicule</div>
                <div class="sm:ml-auto">
                    <p-select
                        [options]="periodOptions"
                        [(ngModel)]="selectedPeriod"
                        (onChange)="onPeriodChange()"
                        optionLabel="label"
                        optionValue="value"
                        [style]="{ 'min-width': '180px' }"
                    />
                </div>
            </div>

            @if (loading) {
                <div class="flex flex-col gap-2">
                    @for (_ of [1, 2, 3, 4, 5]; track $index) {
                        <p-skeleton height="2.4rem" borderRadius="8px"></p-skeleton>
                    }
                </div>
            } @else if (errorMessage) {
                <div class="flex flex-col items-start gap-3 p-3 border-1 border-round surface-border">
                    <span class="text-sm text-red-500">{{ errorMessage }}</span>
                    <p-button label="Reessayer" icon="pi pi-refresh" size="small" (onClick)="loadData()" />
                </div>
            } @else if (!chartData?.labels?.length) {
                <div class="text-sm text-surface-500 p-3 border-1 border-round surface-border">
                    Aucune donnee disponible pour cette periode.
                </div>
            } @else {
                <p-chart type="line" [data]="chartData" [options]="chartOptions"></p-chart>
            }
        </div>
    `
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehiculewWidget, { className: "VehiculewWidget", filePath: "src/app/pages/dashboards/finance/widgets/vehiculewidget.ts", lineNumber: 58 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var PROGRESSSPINNER_INSTANCE = new InjectionToken("PROGRESSSPINNER_INSTANCE");
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  $pcProgressSpinner = inject(PROGRESSSPINNER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 5,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle, {
      provide: PROGRESSSPINNER_INSTANCE,
      useExisting: _ProgressSpinner
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressSpinner
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 10,
    consts: [["viewBox", "25 25 50 50", 3, "pBind"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 3, "pBind"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275property("pBind", ctx.ptm("spin"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275property("pBind", ctx.ptm("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <svg [class]="cx('spin')" [pBind]="ptm('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
            <circle [class]="cx('circle')" [pBind]="ptm('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle, {
        provide: PROGRESSSPINNER_INSTANCE,
        useExisting: ProgressSpinner
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressSpinner
      }],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/dashboards/finance/widgets/barWidget.ts
function BarWidget_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "p-progressSpinner", 8);
    \u0275\u0275elementEnd();
  }
}
function BarWidget_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function BarWidget_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.chartData())("options", ctx_r0.chartOptions());
  }
}
var BarWidget = class _BarWidget {
  periodOptions = [
    { label: "Aujourd'hui", value: "today" },
    { label: "Hier", value: "yesterday" },
    { label: "Cette semaine", value: "this_week" },
    { label: "Semaine derniere", value: "last_week" },
    { label: "Ce mois", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "T1", value: "q1" },
    { label: "T2", value: "q2" },
    { label: "T3", value: "q3" },
    { label: "T4", value: "q4" },
    { label: "S1", value: "s1" },
    { label: "S2", value: "s2" },
    { label: "Cette annee", value: "this_year" },
    { label: "Annee derniere", value: "last_year" }
  ];
  selectedPeriod = signal("this_year", ...ngDevMode ? [{ debugName: "selectedPeriod" }] : []);
  dashboardService = inject(DashboardService);
  layoutService = inject(LayoutService);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  chartData = signal(null, ...ngDevMode ? [{ debugName: "chartData" }] : []);
  chartOptions = signal(this.buildOptions(), ...ngDevMode ? [{ debugName: "chartOptions" }] : []);
  constructor() {
    this.layoutService.configUpdate$.pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.chartOptions.set(this.buildOptions());
    });
    effect(() => {
      const period = this.selectedPeriod();
      this.load(period);
    });
  }
  load(period) {
    this.loading.set(true);
    this.error.set(null);
    this.dashboardService.getVentesEvolutionParStatut(period).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (d) => {
        this.chartData.set({
          labels: d.labels,
          datasets: d.datasets.map((ds) => {
            const colors = {
              payee: "#22c55e",
              partiel: "#f97316",
              impayee: "#ef4444"
            };
            return {
              label: ds.label,
              data: ds.data,
              backgroundColor: colors[ds.statut] ?? "#94a3b8",
              borderRadius: 4,
              borderSkipped: false
            };
          })
        });
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erreur de chargement");
        this.loading.set(false);
      }
    });
  }
  buildOptions() {
    const textColor = this.readCssVar("--text-color", "#1f2937");
    const textColorSecondary = this.readCssVar("--text-color-secondary", "#6b7280");
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              return `${ctx.dataset.label}: ${Number(ctx.parsed.y ?? 0).toLocaleString("fr-FR")} GNF`;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: false,
          grid: {
            display: false
          },
          ticks: {
            color: textColorSecondary
          }
        },
        y: {
          stacked: false,
          ticks: {
            color: textColorSecondary,
            callback: (v) => Number(v).toLocaleString("fr-FR")
          }
        }
      }
    };
  }
  readCssVar(name, fallback) {
    if (!isPlatformBrowser(this.platformId)) {
      return fallback;
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }
  static \u0275fac = function BarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarWidget, selectors: [["app-bar-widget"]], decls: 9, vars: 3, consts: [[1, "col-span-12", "xl:col-span-6"], [1, "card"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-slate-800", "dark:text-slate-100"], ["optionLabel", "label", "optionValue", "value", "styleClass", "w-48", 3, "ngModelChange", "options", "ngModel"], [1, "flex", "justify-center", "items-center", "h-48"], [1, "text-red-500", "text-center"], ["type", "bar", "height", "300px", 3, "data", "options"], ["strokeWidth", "4"]], template: function BarWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Evolution CA Payees vs Impayees");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-select", 4);
      \u0275\u0275listener("ngModelChange", function BarWidget_Template_p_select_ngModelChange_5_listener($event) {
        return ctx.selectedPeriod.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, BarWidget_Conditional_6_Template, 2, 0, "div", 5)(7, BarWidget_Conditional_7_Template, 2, 1, "p", 6)(8, BarWidget_Conditional_8_Template, 1, 2, "p-chart", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("options", ctx.periodOptions)("ngModel", ctx.selectedPeriod());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.error() ? 7 : ctx.chartData() ? 8 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, SelectModule, Select, ChartModule, UIChart, FluidModule, ProgressSpinnerModule, ProgressSpinner], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarWidget, [{
    type: Component,
    args: [{
      selector: "app-bar-widget",
      standalone: true,
      imports: [CommonModule, FormsModule, SelectModule, ChartModule, FluidModule, ProgressSpinnerModule],
      template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">Evolution CA Payees vs Impayees</h2>
                    <p-select
                        [options]="periodOptions"
                        [ngModel]="selectedPeriod()"
                        (ngModelChange)="selectedPeriod.set($event)"
                        optionLabel="label"
                        optionValue="value"
                        styleClass="w-48"
                    />
                </div>

                @if (loading()) {
                    <div class="flex justify-center items-center h-48">
                        <p-progressSpinner strokeWidth="4" />
                    </div>
                } @else if (error()) {
                    <p class="text-red-500 text-center">{{ error() }}</p>
                } @else if (chartData()) {
                    <p-chart type="bar" [data]="chartData()!" [options]="chartOptions()" height="300px"></p-chart>
                }
            </div>
        </div>
    `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarWidget, { className: "BarWidget", filePath: "src/app/pages/dashboards/finance/widgets/barwidget.ts", lineNumber: 52 });
})();

// src/app/pages/dashboards/finance/widgets/doughnut.ts
var _c04 = () => ({ "min-width": "160px" });
function DoughnutWidget_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 5);
  }
}
function DoughnutWidget_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function DoughnutWidget_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Aucune donnee disponible pour cette periode.");
    \u0275\u0275elementEnd();
  }
}
function DoughnutWidget_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.pieData)("options", ctx_r0.pieOptions);
  }
}
var DoughnutWidget = class _DoughnutWidget {
  periodOptions = [
    { label: "Aujourd'hui", value: "today" },
    { label: "Ce mois", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "Cette annee", value: "this_year" },
    { label: "Annee derniere", value: "last_year" }
  ];
  selectedPeriod = signal("this_month", ...ngDevMode ? [{ debugName: "selectedPeriod" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  rawData = signal([], ...ngDevMode ? [{ debugName: "rawData" }] : []);
  hasData = computed(() => {
    const items = this.rawData();
    if (!items.length) {
      return false;
    }
    const totalCa = items.reduce((sum, item) => sum + (Number(item.ca_total) || 0), 0);
    return totalCa > 0;
  }, ...ngDevMode ? [{ debugName: "hasData" }] : []);
  pieData = { labels: [], datasets: [] };
  pieOptions = {};
  dashboardService = inject(DashboardService);
  layoutService = inject(LayoutService);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID);
  constructor() {
    this.layoutService.configUpdate$.pipe(debounceTime(50), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.initCharts();
    });
    effect(() => {
      this.load(this.selectedPeriod());
    });
  }
  load(period) {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.dashboardService.getVentesParTypeVehicule(period).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.rawData.set(res?.par_type ?? []);
        this.initCharts();
        this.loading.set(false);
      },
      error: () => {
        this.rawData.set([]);
        this.errorMessage.set("Erreur de chargement");
        this.loading.set(false);
      }
    });
  }
  initCharts() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const colorMap = {
      camion: documentStyle.getPropertyValue("--p-indigo-500"),
      tricycle: documentStyle.getPropertyValue("--p-purple-500"),
      vanne: documentStyle.getPropertyValue("--p-teal-500")
    };
    const hoverMap = {
      camion: documentStyle.getPropertyValue("--p-indigo-400"),
      tricycle: documentStyle.getPropertyValue("--p-purple-400"),
      vanne: documentStyle.getPropertyValue("--p-teal-400")
    };
    const gray500 = documentStyle.getPropertyValue("--p-gray-500");
    const gray400 = documentStyle.getPropertyValue("--p-gray-400");
    const items = this.rawData();
    this.pieData = {
      labels: items.map((i) => i.label),
      datasets: [
        {
          data: items.map((i) => i.ca_total),
          backgroundColor: items.map((i) => colorMap[i.type_vehicule] ?? gray500),
          hoverBackgroundColor: items.map((i) => hoverMap[i.type_vehicule] ?? gray400)
        }
      ]
    };
    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const item = items[ctx.dataIndex];
              if (!item) {
                return "";
              }
              return [
                ` ${item.nb_commandes} commande(s)`,
                ` CA : ${item.ca_total.toLocaleString("fr-FR")} GNF`
              ];
            }
          }
        }
      }
    };
  }
  static \u0275fac = function DoughnutWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DoughnutWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DoughnutWidget, selectors: [["app-doughnut-widget"]], decls: 10, vars: 6, consts: [[1, "col-span-12", "xl:col-span-6"], [1, "card", "flex", "flex-col", "items-center"], [1, "flex", "w-full", "items-center", "justify-between", "mb-4"], [1, "font-semibold", "text-xl"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"], ["height", "200px", "width", "200px", "borderRadius", "50%"], [1, "text-red-500", "text-sm"], [1, "text-surface-500", "text-sm"], ["type", "doughnut", 3, "data", "options"]], template: function DoughnutWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Commandes par type de vehicule");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-select", 4);
      \u0275\u0275listener("ngModelChange", function DoughnutWidget_Template_p_select_ngModelChange_5_listener($event) {
        return ctx.selectedPeriod.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, DoughnutWidget_Conditional_6_Template, 1, 0, "p-skeleton", 5)(7, DoughnutWidget_Conditional_7_Template, 2, 1, "p", 6)(8, DoughnutWidget_Conditional_8_Template, 2, 0, "p", 7)(9, DoughnutWidget_Conditional_9_Template, 1, 2, "p-chart", 8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c04));
      \u0275\u0275property("options", ctx.periodOptions)("ngModel", ctx.selectedPeriod());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 6 : ctx.errorMessage() ? 7 : !ctx.hasData() ? 8 : 9);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, SelectModule, Select, SkeletonModule, Skeleton, ChartModule, UIChart, FluidModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DoughnutWidget, [{
    type: Component,
    args: [{
      selector: "app-doughnut-widget",
      standalone: true,
      imports: [CommonModule, FormsModule, SelectModule, SkeletonModule, ChartModule, FluidModule],
      template: `
        <div class="col-span-12 xl:col-span-6">
            <div class="card flex flex-col items-center">
                <div class="flex w-full items-center justify-between mb-4">
                    <div class="font-semibold text-xl">Commandes par type de vehicule</div>
                    <p-select
                        [options]="periodOptions"
                        [ngModel]="selectedPeriod()"
                        (ngModelChange)="selectedPeriod.set($event)"
                        optionLabel="label"
                        optionValue="value"
                        [style]="{ 'min-width': '160px' }"
                    />
                </div>

                @if (loading()) {
                    <p-skeleton height="200px" width="200px" borderRadius="50%" />
                } @else if (errorMessage()) {
                    <p class="text-red-500 text-sm">{{ errorMessage() }}</p>
                } @else if (!hasData()) {
                    <p class="text-surface-500 text-sm">Aucune donnee disponible pour cette periode.</p>
                } @else {
                    <p-chart type="doughnut" [data]="pieData" [options]="pieOptions"></p-chart>
                }
            </div>
        </div>
    `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DoughnutWidget, { className: "DoughnutWidget", filePath: "src/app/pages/dashboards/finance/widgets/doughnut.ts", lineNumber: 53 });
})();

// src/app/pages/dashboards/finance/finance-mobile.ts
var _c05 = ["slider"];
var _forTrack02 = ($index, $item) => $item.label;
function FinanceMobile_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 12);
  }
}
function FinanceMobile_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ((tmp_2_0 = ctx_r1.stat()) == null ? null : tmp_2_0.total_factures) ?? 0, "1.0-0"), " GNF ");
  }
}
function FinanceMobile_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 12);
  }
}
function FinanceMobile_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ((tmp_2_0 = ctx_r1.stat()) == null ? null : tmp_2_0.factures_payees) ?? 0, "1.0-0"), " GNF ");
  }
}
function FinanceMobile_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 12);
  }
}
function FinanceMobile_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ((tmp_2_0 = ctx_r1.stat()) == null ? null : tmp_2_0.reste_a_encaisser) ?? 0, "1.0-0"), " GNF ");
  }
}
function FinanceMobile_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 22);
  }
  if (rf & 2) {
    const $index_r3 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fm-dot--active", ctx_r1.activeSlide() === $index_r3);
  }
}
function FinanceMobile_For_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function FinanceMobile_For_40_Template_button_click_0_listener() {
      const module_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToModule(module_r5.route));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(module_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r5.label);
  }
}
var FinanceMobile = class _FinanceMobile {
  period = "this_month";
  periodChange = new EventEmitter();
  sliderRef;
  dashboardService = inject(DashboardService);
  router = inject(Router);
  // Données encaissement chargées ici — pas via EncaissementWidget
  stat = signal(null, ...ngDevMode ? [{ debugName: "stat" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  // 3 slides : total / payees / reste
  slideCount = 3;
  slidesArray = Array.from({ length: this.slideCount }, (_, i) => i);
  activeSlide = signal(0, ...ngDevMode ? [{ debugName: "activeSlide" }] : []);
  moduleShortcuts = [
    { label: "Dashboard", icon: "pi pi-th-large", route: "/dashboard" },
    { label: "Accueil", icon: "pi pi-home", route: "/dashboard-finance" },
    { label: "Commissions", icon: "pi pi-percentage", route: "/ventes/commissions" },
    { label: "Ventes", icon: "pi pi-shopping-cart", route: "/ventes/commandes" },
    { label: "Produits", icon: "pi pi-box", route: "/produits" },
    { label: "Packing", icon: "pi pi-inbox", route: "/packings" },
    { label: "Prestataires", icon: "pi pi-users", route: "/contacts/prestataires" },
    { label: "Utilisateurs", icon: "pi pi-user", route: "/contacts/utilisateurs" },
    { label: "Vehicules", icon: "pi pi-car", route: "/vehicules" }
  ];
  observer;
  ngOnInit() {
    this.loadStat();
  }
  ngOnChanges(changes) {
    if (changes["period"] && !changes["period"].firstChange) {
      this.loadStat();
    }
  }
  ngAfterViewInit() {
    this.initSlideObserver();
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  onPeriodChange(p) {
    this.periodChange.emit(p);
  }
  goToModule(route) {
    this.router.navigateByUrl(route);
  }
  loadStat() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.dashboardService.getVentesEncaissements(this.period).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (data) => this.stat.set(data ?? null),
      error: () => {
        this.stat.set(null);
        this.errorMessage.set("Erreur de chargement");
      }
    });
  }
  initSlideObserver() {
    const slider = this.sliderRef?.nativeElement;
    if (!slider)
      return;
    const slides = slider.querySelectorAll(".fm-slide");
    if (!slides.length)
      return;
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const idx = Array.from(slides).indexOf(entry.target);
          if (idx !== -1)
            this.activeSlide.set(idx);
        }
      }
    }, { root: slider, threshold: 0.5 });
    slides.forEach((s) => this.observer.observe(s));
  }
  static \u0275fac = function FinanceMobile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinanceMobile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceMobile, selectors: [["app-finance-mobile"]], viewQuery: function FinanceMobile_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sliderRef = _t.first);
    }
  }, inputs: { period: "period" }, outputs: { periodChange: "periodChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 41, vars: 7, consts: [["slider", ""], [1, "fm-layout"], [1, "fm-header"], [3, "periodChange", "period"], [1, "fm-slider"], [1, "fm-slide"], [1, "fm-stat-card", "fm-stat-card--primary"], ["viewBox", "0 0 900 600", "preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "fm-stat-card__bg"], ["width", "900", "height", "600", "fill", "var(--p-primary-600)"], ["d", "M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L0 601Z", "fill", "var(--p-primary-500)"], [1, "fm-stat-card__content"], [1, "fm-stat-card__label"], ["width", "10rem", "height", "2rem", "borderRadius", "6px"], [1, "fm-stat-card__value"], [1, "fm-stat-card__sub"], [1, "fm-stat-card"], [1, "fm-stat-card__content", "fm-stat-card__content--centered"], [1, "fm-stat-card__value", "fm-stat-card__value--primary"], [1, "fm-dots"], [1, "fm-dot", 3, "fm-dot--active"], [1, "fm-modules"], ["type", "button", 1, "fm-tile"], [1, "fm-dot"], ["type", "button", 1, "fm-tile", 3, "click"]], template: function FinanceMobile_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "app-header-widget2", 3);
      \u0275\u0275listener("periodChange", function FinanceMobile_Template_app_header_widget2_periodChange_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPeriodChange($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 4, 0)(5, "section", 5)(6, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 7);
      \u0275\u0275element(8, "rect", 8)(9, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11);
      \u0275\u0275text(12, "Total Factures");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, FinanceMobile_Conditional_13_Template, 1, 0, "p-skeleton", 12)(14, FinanceMobile_Conditional_14_Template, 3, 4, "div", 13);
      \u0275\u0275elementStart(15, "div", 14);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 5)(18, "div", 15)(19, "div", 16)(20, "div", 11);
      \u0275\u0275text(21, "Factures pay\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, FinanceMobile_Conditional_22_Template, 1, 0, "p-skeleton", 12)(23, FinanceMobile_Conditional_23_Template, 3, 4, "div", 17);
      \u0275\u0275elementStart(24, "div", 14);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "section", 5)(27, "div", 15)(28, "div", 16)(29, "div", 11);
      \u0275\u0275text(30, "Reste \xE0 encaisser");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, FinanceMobile_Conditional_31_Template, 1, 0, "p-skeleton", 12)(32, FinanceMobile_Conditional_32_Template, 3, 4, "div", 17);
      \u0275\u0275elementStart(33, "div", 14);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 18);
      \u0275\u0275repeaterCreate(36, FinanceMobile_For_37_Template, 1, 2, "span", 19, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 20);
      \u0275\u0275repeaterCreate(39, FinanceMobile_For_40_Template, 4, 3, "button", 21, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_5_0;
      let tmp_7_0;
      \u0275\u0275advance(2);
      \u0275\u0275property("period", ctx.period);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.loading() ? 13 : 14);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx.stat()) == null ? null : tmp_3_0.nb_factures_total) ?? 0, " facture(s) ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 22 : 23);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx.stat()) == null ? null : tmp_5_0.nb_factures_payees) ?? 0, " facture(s) ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loading() ? 31 : 32);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ((tmp_7_0 = ctx.stat()) == null ? null : tmp_7_0.nb_factures_impayees) ?? 0, " en attente ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.slidesArray);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.moduleShortcuts);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton, HeaderWidget2, DecimalPipe], styles: ["\n\n.fm-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding-top: env(safe-area-inset-top);\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.fm-slider[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.fm-slider[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.fm-slide[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  min-width: 100%;\n  scroll-snap-align: start;\n}\n.fm-stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 1rem;\n  overflow: hidden;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  min-height: 180px;\n  display: flex;\n  align-items: stretch;\n}\n.fm-stat-card--primary[_ngcontent-%COMP%] {\n  border: none;\n}\n.fm-stat-card__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.fm-stat-card__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.fm-stat-card__content--centered[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.fm-stat-card__label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.fm-stat-card--primary[_ngcontent-%COMP%]   .fm-stat-card__label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.fm-stat-card[_ngcontent-%COMP%]:not(.fm-stat-card--primary)   .fm-stat-card__label[_ngcontent-%COMP%] {\n  color: var(--p-surface-700);\n}\n.fm-stat-card__value[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin-top: 0.5rem;\n}\n.fm-stat-card--primary[_ngcontent-%COMP%]   .fm-stat-card__value[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.fm-stat-card__value--primary[_ngcontent-%COMP%] {\n  color: var(--p-primary-500);\n}\n.fm-stat-card__sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.8;\n}\n.fm-stat-card--primary[_ngcontent-%COMP%]   .fm-stat-card__sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.fm-stat-card[_ngcontent-%COMP%]:not(.fm-stat-card--primary)   .fm-stat-card__sub[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n.fm-widget-wrap[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.fm-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.375rem;\n  margin-top: -0.25rem;\n}\n.fm-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.fm-dot--active[_ngcontent-%COMP%] {\n  background: var(--p-primary-500);\n  transform: scale(1.35);\n}\n.fm-modules[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));\n}\n.fm-tile[_ngcontent-%COMP%] {\n  aspect-ratio: 1/1;\n  border-radius: 0.875rem;\n  border: 1px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  color: var(--p-surface-700);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.35rem;\n  transition: background 0.15s ease, transform 0.15s ease;\n  cursor: pointer;\n}\n.fm-tile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--p-primary-500);\n}\n.fm-tile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  line-height: 1.1;\n  text-align: center;\n}\n.fm-tile[_ngcontent-%COMP%]:active {\n  transform: scale(0.94);\n  background: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .fm-stat-card[_ngcontent-%COMP%]:not(.fm-stat-card--primary), .app-dark   [_nghost-%COMP%]   .fm-stat-card[_ngcontent-%COMP%]:not(.fm-stat-card--primary) {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-700);\n}\n.fm-stat-card:not(.fm-stat-card--primary)   .app-dark[_nghost-%COMP%]   .fm-stat-card__label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fm-stat-card__label[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.fm-stat-card:not(.fm-stat-card--primary)   .app-dark[_nghost-%COMP%]   .fm-stat-card__sub[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fm-stat-card__sub[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .fm-dot[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fm-dot[_ngcontent-%COMP%] {\n  background: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .fm-dot--active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fm-dot--active[_ngcontent-%COMP%] {\n  background: var(--p-primary-400);\n}\n.app-dark[_nghost-%COMP%]   .fm-tile[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .fm-tile[_ngcontent-%COMP%] {\n  border-color: var(--p-surface-700);\n  background: var(--p-surface-800);\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .fm-tile[_ngcontent-%COMP%]:active, .app-dark   [_nghost-%COMP%]   .fm-tile[_ngcontent-%COMP%]:active {\n  background: var(--p-surface-700);\n}\n/*# sourceMappingURL=finance-mobile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinanceMobile, [{
    type: Component,
    args: [{ selector: "app-finance-mobile", standalone: true, imports: [CommonModule, SkeletonModule, HeaderWidget2], template: `<div class="fm-layout">

    <!-- En-t\xEAte : avatar + nom + s\xE9lecteur de p\xE9riode -->
    <div class="fm-header">
        <app-header-widget2
            [period]="period"
            (periodChange)="onPeriodChange($event)"
        />
    </div>

    <!-- Slider horizontal scroll-snap : un slide = un \xE9cran de carte -->
    <div class="fm-slider" #slider>

        <!-- \u2500\u2500 Slide 1 : Total Factures \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="fm-slide">
            <div class="fm-stat-card fm-stat-card--primary">
                <svg viewBox="0 0 900 600" class="fm-stat-card__bg" preserveAspectRatio="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="var(--p-primary-600)" />
                    <path d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L0 601Z"
                          fill="var(--p-primary-500)" />
                </svg>
                <div class="fm-stat-card__content">
                    <div class="fm-stat-card__label">Total Factures</div>
                    @if (loading()) {
                        <p-skeleton width="10rem" height="2rem" borderRadius="6px" />
                    } @else {
                        <div class="fm-stat-card__value">
                            {{ (stat()?.total_factures ?? 0) | number:'1.0-0' }} GNF
                        </div>
                    }
                    <div class="fm-stat-card__sub">
                        {{ stat()?.nb_factures_total ?? 0 }} facture(s)
                    </div>
                </div>
            </div>
        </section>

        <!-- \u2500\u2500 Slide 2 : Factures pay\xE9es \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="fm-slide">
            <div class="fm-stat-card">
                <div class="fm-stat-card__content fm-stat-card__content--centered">
                    <div class="fm-stat-card__label">Factures pay\xE9es</div>
                    @if (loading()) {
                        <p-skeleton width="10rem" height="2rem" borderRadius="6px" />
                    } @else {
                        <div class="fm-stat-card__value fm-stat-card__value--primary">
                            {{ (stat()?.factures_payees ?? 0) | number:'1.0-0' }} GNF
                        </div>
                    }
                    <div class="fm-stat-card__sub">
                        {{ stat()?.nb_factures_payees ?? 0 }} facture(s)
                    </div>
                </div>
            </div>
        </section>

        <!-- \u2500\u2500 Slide 3 : Reste \xE0 encaisser \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <section class="fm-slide">
            <div class="fm-stat-card">
                <div class="fm-stat-card__content fm-stat-card__content--centered">
                    <div class="fm-stat-card__label">Reste \xE0 encaisser</div>
                    @if (loading()) {
                        <p-skeleton width="10rem" height="2rem" borderRadius="6px" />
                    } @else {
                        <div class="fm-stat-card__value fm-stat-card__value--primary">
                            {{ (stat()?.reste_a_encaisser ?? 0) | number:'1.0-0' }} GNF
                        </div>
                    }
                    <div class="fm-stat-card__sub">
                        {{ stat()?.nb_factures_impayees ?? 0 }} en attente
                    </div>
                </div>
            </div>
        </section>

    </div>

    <!-- Indicateur de slides (dots) -->
    <div class="fm-dots">
        @for (_ of slidesArray; track $index) {
            <span class="fm-dot" [class.fm-dot--active]="activeSlide() === $index"></span>
        }
    </div>

    <!-- Raccourcis modules -->
    <div class="fm-modules">
        @for (module of moduleShortcuts; track module.label) {
            <button type="button" class="fm-tile" (click)="goToModule(module.route)">
                <i [class]="module.icon"></i>
                <span>{{ module.label }}</span>
            </button>
        }
    </div>

</div>
`, styles: ["/* src/app/pages/dashboards/finance/finance-mobile.scss */\n.fm-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding-top: env(safe-area-inset-top);\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.fm-slider {\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.fm-slider::-webkit-scrollbar {\n  display: none;\n}\n.fm-slide {\n  flex: 0 0 100%;\n  min-width: 100%;\n  scroll-snap-align: start;\n}\n.fm-stat-card {\n  position: relative;\n  border-radius: 1rem;\n  overflow: hidden;\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  min-height: 180px;\n  display: flex;\n  align-items: stretch;\n}\n.fm-stat-card--primary {\n  border: none;\n}\n.fm-stat-card__bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.fm-stat-card__content {\n  position: relative;\n  z-index: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.fm-stat-card__content--centered {\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.fm-stat-card__label {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.fm-stat-card--primary .fm-stat-card__label {\n  color: #fff;\n}\n.fm-stat-card:not(.fm-stat-card--primary) .fm-stat-card__label {\n  color: var(--p-surface-700);\n}\n.fm-stat-card__value {\n  font-size: 1.75rem;\n  font-weight: 700;\n  margin-top: 0.5rem;\n}\n.fm-stat-card--primary .fm-stat-card__value {\n  color: #fff;\n}\n.fm-stat-card__value--primary {\n  color: var(--p-primary-500);\n}\n.fm-stat-card__sub {\n  font-size: 0.85rem;\n  opacity: 0.8;\n}\n.fm-stat-card--primary .fm-stat-card__sub {\n  color: rgba(255, 255, 255, 0.85);\n}\n.fm-stat-card:not(.fm-stat-card--primary) .fm-stat-card__sub {\n  color: var(--p-surface-500);\n}\n.fm-widget-wrap {\n  display: block;\n  width: 100%;\n}\n.fm-dots {\n  display: flex;\n  justify-content: center;\n  gap: 0.375rem;\n  margin-top: -0.25rem;\n}\n.fm-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--p-surface-300);\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.fm-dot--active {\n  background: var(--p-primary-500);\n  transform: scale(1.35);\n}\n.fm-modules {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.5rem;\n  padding-bottom: calc(0.75rem + env(safe-area-inset-bottom));\n}\n.fm-tile {\n  aspect-ratio: 1/1;\n  border-radius: 0.875rem;\n  border: 1px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  color: var(--p-surface-700);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.35rem;\n  transition: background 0.15s ease, transform 0.15s ease;\n  cursor: pointer;\n}\n.fm-tile i {\n  font-size: 1.05rem;\n  color: var(--p-primary-500);\n}\n.fm-tile span {\n  font-size: 0.78rem;\n  font-weight: 600;\n  line-height: 1.1;\n  text-align: center;\n}\n.fm-tile:active {\n  transform: scale(0.94);\n  background: var(--p-surface-100);\n}\n:host-context(.app-dark) .fm-stat-card:not(.fm-stat-card--primary) {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-700);\n}\n.fm-stat-card:not(.fm-stat-card--primary) :host-context(.app-dark) .fm-stat-card__label {\n  color: var(--p-surface-100);\n}\n.fm-stat-card:not(.fm-stat-card--primary) :host-context(.app-dark) .fm-stat-card__sub {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .fm-dot {\n  background: var(--p-surface-600);\n}\n:host-context(.app-dark) .fm-dot--active {\n  background: var(--p-primary-400);\n}\n:host-context(.app-dark) .fm-tile {\n  border-color: var(--p-surface-700);\n  background: var(--p-surface-800);\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .fm-tile:active {\n  background: var(--p-surface-700);\n}\n/*# sourceMappingURL=finance-mobile.css.map */\n"] }]
  }], null, { period: [{
    type: Input
  }], periodChange: [{
    type: Output
  }], sliderRef: [{
    type: ViewChild,
    args: ["slider", { static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceMobile, { className: "FinanceMobile", filePath: "src/app/pages/dashboards/finance/finance-mobile.ts", lineNumber: 34 });
})();

// src/app/pages/dashboards/finance/finance.ts
function Finance_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-finance-mobile", 2);
    \u0275\u0275listener("periodChange", function Finance_Conditional_0_Template_app_finance_mobile_periodChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEncaissementPeriodChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("period", ctx_r1.encaissementPeriod);
  }
}
function Finance_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-header-widget2", 3);
    \u0275\u0275listener("periodChange", function Finance_Conditional_1_Template_app_header_widget2_periodChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEncaissementPeriodChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "app-encaissement-widget", 0);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275element(4, "app-bar-widget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275element(6, "app-doughnut-widget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275element(8, "app-ca-par-statut-widget");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("period", ctx_r1.encaissementPeriod);
    \u0275\u0275advance();
    \u0275\u0275property("period", ctx_r1.encaissementPeriod);
  }
}
var Finance = class _Finance {
  isMobile = signal(this.getIsMobileViewport(), ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  encaissementPeriod = "this_month";
  constructor() {
  }
  onEncaissementPeriodChange(period) {
    this.encaissementPeriod = period;
  }
  onResize() {
    this.isMobile.set(this.getIsMobileViewport());
  }
  getIsMobileViewport() {
    return typeof window !== "undefined" ? window.innerWidth <= 768 : false;
  }
  static \u0275fac = function Finance_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Finance)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Finance, selectors: [["app-finance"]], hostBindings: function Finance_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function Finance_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 2, vars: 1, consts: [[3, "period"], [1, "grid", "grid-cols-12", "gap-8"], [3, "periodChange", "period"], [1, "col-span-12", 3, "periodChange", "period"], [1, "col-span-12", "xl:col-span-12"], [1, "col-span-12", "xl:col-span-6"], [1, "col-span-12", "lg:col-span-6"]], template: function Finance_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, Finance_Conditional_0_Template, 1, 1, "app-finance-mobile", 0)(1, Finance_Conditional_1_Template, 9, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isMobile() ? 0 : 1);
    }
  }, dependencies: [HeaderWidget2, caParStatutWidget, EncaissementWidget, BarWidget, DoughnutWidget, FinanceMobile], styles: ["\n\n/*# sourceMappingURL=finance.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Finance, [{
    type: Component,
    args: [{ selector: "app-finance", standalone: true, imports: [HeaderWidget2, caParStatutWidget, EncaissementWidget, VehiculewWidget, BarWidget, DoughnutWidget, FinanceMobile], providers: [ProductService], template: '@if (isMobile()) {\n    <!-- Composant mobile d\xE9di\xE9 \u2014 layout slider + modules shortcuts -->\n    <app-finance-mobile\n        [period]="encaissementPeriod"\n        (periodChange)="onEncaissementPeriodChange($event)"\n    />\n} @else {\n    <!-- Layout desktop : inchang\xE9 -->\n    <div class="grid grid-cols-12 gap-8">\n        <app-header-widget2\n            class="col-span-12"\n            [period]="encaissementPeriod"\n            (periodChange)="onEncaissementPeriodChange($event)"\n        />\n        <app-encaissement-widget [period]="encaissementPeriod" />\n\n        <div class="col-span-12 xl:col-span-12">\n            <app-bar-widget />\n        </div>\n\n        <div class="col-span-12 xl:col-span-6">\n            <app-doughnut-widget />\n        </div>\n\n        <div class="col-span-12 lg:col-span-6">\n            <app-ca-par-statut-widget />\n        </div>\n\n        <!-- <div class="col-span-12 xl:col-span-12">\n            <app-vehicule-widget />\n        </div> -->\n\n        <!-- <div class="col-span-12 xl:col-span-4">\n            <app-recent-transactions-widget />\n        </div>\n\n        <div class="col-span-12 lg:col-span-6">\n            <app-recent-transactions-two-widget />\n        </div> -->\n    </div>\n}\n', styles: ["/* src/app/pages/dashboards/finance/finance.scss */\n/*# sourceMappingURL=finance.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Finance, { className: "Finance", filePath: "src/app/pages/dashboards/finance/finance.ts", lineNumber: 20 });
})();
export {
  Finance
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.3.16
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-RKNDDNGH.js.map
