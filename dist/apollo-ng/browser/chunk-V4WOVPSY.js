import {
  ProductService
} from "./chunk-3HMY66K3.js";
import {
  ChartModule,
  UIChart
} from "./chunk-MKOX4E2Y.js";
import {
  Rating,
  RatingModule
} from "./chunk-JYSPRXTZ.js";
import {
  LayoutService
} from "./chunk-GWE5GNKF.js";
import {
  PackingService
} from "./chunk-FJELNUDV.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
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
import "./chunk-MTEYTWK3.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-IEELAHW7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import {
  UsineContextService
} from "./chunk-7GQXFRTV.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-K7KGEHY2.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  Button,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-IRKOPIT4.js";
import {
  RippleModule
} from "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  FilterMatchMode
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  Injectable,
  Subject,
  Subscription,
  ViewChild,
  computed,
  debounceTime,
  effect,
  inject,
  map,
  setClassMetadata,
  signal,
  takeUntil,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/services/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/dashboard`;
  getStats(period = "this_month", days) {
    let params = new HttpParams().set("period", period);
    if (period === "last_x_days" && days != null) {
      params = params.set("days", days.toString());
    }
    return this.http.get(`${this.baseUrl}/stats`, { params }).pipe(map((res) => res.data));
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/dashboard/dashboard-period.service.ts
var PERIOD_LABELS = {
  today: "Aujourd'hui",
  yesterday: "Hier",
  this_week: "Cette semaine",
  last_week: "Semaine derni\xE8re",
  this_month: "Ce mois",
  last_month: "Mois dernier",
  q1: "T1 (Jan\u2013Mar)",
  q2: "T2 (Avr\u2013Jun)",
  q3: "T3 (Jul\u2013Sep)",
  q4: "T4 (Oct\u2013D\xE9c)",
  s1: "S1 (Jan\u2013Jun)",
  s2: "S2 (Jul\u2013D\xE9c)",
  this_year: "Cette ann\xE9e",
  last_year: "Ann\xE9e derni\xE8re",
  last_x_days: "X derniers jours"
};
var DashboardPeriodService = class _DashboardPeriodService {
  period = signal("this_month", ...ngDevMode ? [{ debugName: "period" }] : []);
  customDays = signal(30, ...ngDevMode ? [{ debugName: "customDays" }] : []);
  currentLabel = computed(() => {
    const p = this.period();
    if (p === "last_x_days")
      return `${this.customDays()} derniers jours`;
    return PERIOD_LABELS[p];
  }, ...ngDevMode ? [{ debugName: "currentLabel" }] : []);
  setPeriod(p) {
    this.period.set(p);
  }
  setCustomDays(days) {
    this.customDays.set(days);
  }
  static \u0275fac = function DashboardPeriodService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardPeriodService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardPeriodService, factory: _DashboardPeriodService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPeriodService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/dashboards/ecommerce/statswidget.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ({ strokeWidth: "2px", stroke: a0 });
function StatsWidget_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "p-skeleton", 2)(3, "p-skeleton", 3);
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "p-skeleton", 6)(7, "p-skeleton", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275element(9, "p-skeleton", 8);
    \u0275\u0275elementEnd()()()();
  }
}
function StatsWidget_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StatsWidget_Conditional_0_For_1_Template, 10, 0, "div", 0, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function StatsWidget_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trendIcon(ctx_r0.stats.prestataires.trend));
  }
}
function StatsWidget_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trendIcon(ctx_r0.stats.packings.trend));
  }
}
function StatsWidget_Conditional_1_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trendIcon(ctx_r0.stats.utilisateurs.trend));
  }
}
function StatsWidget_Conditional_1_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trendIcon(ctx_r0.stats.vehicules.trend));
  }
}
function StatsWidget_Conditional_1_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.trendIcon(ctx_r0.stats.rouleaux_stock.trend));
  }
}
function StatsWidget_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 9);
    \u0275\u0275text(3, "Prestataires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "span", 12);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, StatsWidget_Conditional_1_Conditional_13_Template, 1, 2, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 14);
    \u0275\u0275element(16, "path");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div", 0)(18, "div", 1)(19, "span", 9);
    \u0275\u0275text(20, "Packing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 4)(24, "div", 5)(25, "span", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "span", 12);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, StatsWidget_Conditional_1_Conditional_30_Template, 1, 2, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 14);
    \u0275\u0275element(33, "path");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 0)(35, "div", 1)(36, "span", 9);
    \u0275\u0275text(37, "Utilisateurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 10);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 4)(41, "div", 5)(42, "span", 11);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "span", 12);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(47, StatsWidget_Conditional_1_Conditional_47_Template, 1, 2, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 14);
    \u0275\u0275element(50, "path");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(51, "div", 0)(52, "div", 1)(53, "span", 9);
    \u0275\u0275text(54, "V\xE9hicules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 10);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 4)(58, "div", 5)(59, "span", 11);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div")(62, "span", 12);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, StatsWidget_Conditional_1_Conditional_64_Template, 1, 2, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 14);
    \u0275\u0275element(67, "path");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "div", 0)(69, "div", 1)(70, "span", 9);
    \u0275\u0275text(71, "Rouleaux en stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 10);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 4)(75, "div", 5)(76, "span", 11);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div")(79, "span", 12);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(81, StatsWidget_Conditional_1_Conditional_81_Template, 1, 2, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(83, "svg", 14);
    \u0275\u0275element(84, "path");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.periodSubtitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.prestataires.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.trendClass(ctx_r0.stats.prestataires.trend));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDelta(ctx_r0.stats.prestataires.delta_pct));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.stats.prestataires.trend !== "flat" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(45, _c1, ctx_r0.strokeColor(ctx_r0.stats.prestataires.trend)));
    \u0275\u0275attribute("d", ctx_r0.sparklinePath(ctx_r0.stats.prestataires.sparkline));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.periodSubtitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.packings.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.trendClass(ctx_r0.stats.packings.trend));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDelta(ctx_r0.stats.packings.delta_pct));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.stats.packings.trend !== "flat" ? 30 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(47, _c1, ctx_r0.strokeColor(ctx_r0.stats.packings.trend)));
    \u0275\u0275attribute("d", ctx_r0.sparklinePath(ctx_r0.stats.packings.sparkline));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.periodSubtitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.utilisateurs.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.trendClass(ctx_r0.stats.utilisateurs.trend));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDelta(ctx_r0.stats.utilisateurs.delta_pct));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.stats.utilisateurs.trend !== "flat" ? 47 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(49, _c1, ctx_r0.strokeColor(ctx_r0.stats.utilisateurs.trend)));
    \u0275\u0275attribute("d", ctx_r0.sparklinePath(ctx_r0.stats.utilisateurs.sparkline));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.periodSubtitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.vehicules.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.trendClass(ctx_r0.stats.vehicules.trend));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDelta(ctx_r0.stats.vehicules.delta_pct));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.stats.vehicules.trend !== "flat" ? 64 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(51, _c1, ctx_r0.strokeColor(ctx_r0.stats.vehicules.trend)));
    \u0275\u0275attribute("d", ctx_r0.sparklinePath(ctx_r0.stats.vehicules.sparkline));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.periodSubtitle());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.stats.rouleaux_stock.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.trendClass(ctx_r0.stats.rouleaux_stock.trend));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDelta(ctx_r0.stats.rouleaux_stock.delta_pct));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.stats.rouleaux_stock.trend !== "flat" ? 81 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(53, _c1, ctx_r0.strokeColor(ctx_r0.stats.rouleaux_stock.trend)));
    \u0275\u0275attribute("d", ctx_r0.sparklinePath(ctx_r0.stats.rouleaux_stock.sparkline));
  }
}
var StatsWidget = class _StatsWidget {
  dashboardService = inject(DashboardService);
  periodService = inject(DashboardPeriodService);
  stats = null;
  loading = true;
  cancel$ = new Subject();
  /** Recharge uniquement quand period change, ou quand customDays change si period === last_x_days */
  effectKey = computed(() => {
    const period = this.periodService.period();
    const days = period === "last_x_days" ? this.periodService.customDays() : 0;
    return { period, days };
  }, ...ngDevMode ? [{ debugName: "effectKey" }] : []);
  constructor() {
    effect(() => {
      const { period, days } = this.effectKey();
      untracked(() => this.load(period, days));
    });
  }
  ngOnDestroy() {
    this.cancel$.next();
    this.cancel$.complete();
  }
  load(period, days) {
    this.loading = true;
    this.stats = null;
    this.cancel$.next();
    this.dashboardService.getStats(period, period === "last_x_days" ? days : void 0).pipe(takeUntil(this.cancel$)).subscribe({
      next: (data) => {
        this.stats = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  // ── Sous-titre période ────────────────────────────
  periodSubtitle() {
    const label = this.periodService.currentLabel();
    if (!this.stats)
      return label;
    const { from, to } = this.stats.period;
    return `${label} \u2022 ${this.formatDateRange(from, to)}`;
  }
  formatDateRange(from, to) {
    const f = /* @__PURE__ */ new Date(from + "T00:00:00");
    const t = /* @__PURE__ */ new Date(to + "T00:00:00");
    if (from === to) {
      return f.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    }
    const sameMonthYear = f.getMonth() === t.getMonth() && f.getFullYear() === t.getFullYear();
    if (sameMonthYear) {
      return `${f.getDate()}\u2013${t.getDate()} ${t.toLocaleDateString("fr-FR", { month: "short", year: "numeric" })}`;
    }
    const fmt = (d) => d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
    return `${fmt(f)} \u2013 ${fmt(t)}`;
  }
  // ── Helpers ───────────────────────────────────────
  sparklinePath(points) {
    if (!points || points.length < 2)
      return "";
    const W = 258, H = 96, pad = 5;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const step = (W - pad * 2) / (points.length - 1);
    return points.map((p, i) => {
      const x = pad + i * step;
      const y = H - pad - (p - min) / range * (H - pad * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
  }
  trendClass(trend) {
    if (trend === "up")
      return "text-green-500";
    if (trend === "down")
      return "text-pink-500";
    return "text-surface-400";
  }
  trendIcon(trend) {
    if (trend === "up")
      return "pi pi-arrow-up text-xs ml-2";
    if (trend === "down")
      return "pi pi-arrow-down text-xs ml-2";
    return "";
  }
  strokeColor(trend) {
    return trend === "down" ? "var(--p-pink-500)" : "var(--primary-color)";
  }
  formatDelta(delta) {
    if (delta === null)
      return "\u2014";
    return `${delta >= 0 ? "+" : ""}${delta}%`;
  }
  static \u0275fac = function StatsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsWidget, selectors: [["app-stats-widget"]], hostVars: 2, hostBindings: function StatsWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, decls: 2, vars: 2, consts: [[1, "col-span-12", "md:col-span-6", "xl:col-span-3"], [1, "card", "h-full"], ["height", "1.5rem", "width", "60%"], ["height", "0.75rem", "width", "40%", "styleClass", "mt-1 mb-4"], [1, "flex", "justify-between", "items-start"], [1, "w-6/12"], ["height", "2.5rem", "width", "80%", "styleClass", "mb-2"], ["height", "1rem", "width", "50%"], ["height", "4rem"], [1, "font-semibold", "text-lg"], [1, "text-xs", "text-surface-400", "mt-0.5", "mb-4"], [1, "text-4xl", "font-bold", "text-surface-900", "dark:text-surface-0"], [1, "font-medium"], [3, "class"], ["width", "100%", "viewBox", "0 0 258 96", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"]], template: function StatsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StatsWidget_Conditional_0_Template, 2, 1);
      \u0275\u0275conditionalCreate(1, StatsWidget_Conditional_1_Template, 85, 55);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.stats ? 1 : -1);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-stats-widget",
      imports: [CommonModule, SkeletonModule],
      template: `
        @if (loading) {
            @for (i of [1, 2, 3, 4, 5]; track i) {
                <div class="col-span-12 md:col-span-6 xl:col-span-3">
                    <div class="card h-full">
                        <p-skeleton height="1.5rem" width="60%" />
                        <p-skeleton height="0.75rem" width="40%" styleClass="mt-1 mb-4" />
                        <div class="flex justify-between items-start">
                            <div class="w-6/12">
                                <p-skeleton height="2.5rem" width="80%" styleClass="mb-2" />
                                <p-skeleton height="1rem" width="50%" />
                            </div>
                            <div class="w-6/12">
                                <p-skeleton height="4rem" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        }

        @if (!loading && stats) {
            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Prestataires</span>
                    <div class="text-xs text-surface-400 mt-0.5 mb-4">{{ periodSubtitle() }}</div>
                    <div class="flex justify-between items-start">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.prestataires.value }}</span>
                            <div [class]="trendClass(stats.prestataires.trend)">
                                <span class="font-medium">{{ formatDelta(stats.prestataires.delta_pct) }}</span>
                                @if (stats.prestataires.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.prestataires.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.prestataires.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.prestataires.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Packing</span>
                    <div class="text-xs text-surface-400 mt-0.5 mb-4">{{ periodSubtitle() }}</div>
                    <div class="flex justify-between items-start">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.packings.value }}</span>
                            <div [class]="trendClass(stats.packings.trend)">
                                <span class="font-medium">{{ formatDelta(stats.packings.delta_pct) }}</span>
                                @if (stats.packings.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.packings.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.packings.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.packings.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Utilisateurs</span>
                    <div class="text-xs text-surface-400 mt-0.5 mb-4">{{ periodSubtitle() }}</div>
                    <div class="flex justify-between items-start">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.utilisateurs.value }}</span>
                            <div [class]="trendClass(stats.utilisateurs.trend)">
                                <span class="font-medium">{{ formatDelta(stats.utilisateurs.delta_pct) }}</span>
                                @if (stats.utilisateurs.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.utilisateurs.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.utilisateurs.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.utilisateurs.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">V\xE9hicules</span>
                    <div class="text-xs text-surface-400 mt-0.5 mb-4">{{ periodSubtitle() }}</div>
                    <div class="flex justify-between items-start">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.vehicules.value }}</span>
                            <div [class]="trendClass(stats.vehicules.trend)">
                                <span class="font-medium">{{ formatDelta(stats.vehicules.delta_pct) }}</span>
                                @if (stats.vehicules.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.vehicules.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.vehicules.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.vehicules.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-6 xl:col-span-3">
                <div class="card h-full">
                    <span class="font-semibold text-lg">Rouleaux en stock</span>
                    <div class="text-xs text-surface-400 mt-0.5 mb-4">{{ periodSubtitle() }}</div>
                    <div class="flex justify-between items-start">
                        <div class="w-6/12">
                            <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">{{ stats.rouleaux_stock.value }}</span>
                            <div [class]="trendClass(stats.rouleaux_stock.trend)">
                                <span class="font-medium">{{ formatDelta(stats.rouleaux_stock.delta_pct) }}</span>
                                @if (stats.rouleaux_stock.trend !== 'flat') {
                                    <i [class]="trendIcon(stats.rouleaux_stock.trend)"></i>
                                }
                            </div>
                        </div>
                        <div class="w-6/12">
                            <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    [attr.d]="sparklinePath(stats.rouleaux_stock.sparkline)"
                                    [style]="{ strokeWidth: '2px', stroke: strokeColor(stats.rouleaux_stock.trend) }"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        }
    `,
      host: {
        "[style.display]": '"contents"'
      }
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsWidget, { className: "StatsWidget", filePath: "src/app/pages/dashboards/ecommerce/statswidget.ts", lineNumber: 170 });
})();

// src/app/pages/dashboards/ecommerce/recentsaleswidget.ts
var _c02 = ["dt"];
var _c12 = () => ({ borderRadius: "2rem" });
var _c2 = () => ["name", "category", "price", "inventoryStatus"];
function RecentSalesWidget_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11)(2, "span", 12);
    \u0275\u0275text(3, "Name ");
    \u0275\u0275element(4, "p-sortIcon", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 14)(6, "span", 12);
    \u0275\u0275text(7, "Category ");
    \u0275\u0275element(8, "p-sortIcon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 16)(10, "span", 12);
    \u0275\u0275text(11, "Price ");
    \u0275\u0275element(12, "p-sortIcon", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 18)(14, "span", 12);
    \u0275\u0275text(15, "Status ");
    \u0275\u0275element(16, "p-sortIcon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "View");
    \u0275\u0275elementEnd()();
  }
}
function RecentSalesWidget_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 21)(9, "p-tag", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275element(12, "p-button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, product_r3.price, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("severity", ctx_r3.getBadgeSeverity(product_r3.inventoryStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r3.inventoryStatus);
  }
}
var RecentSalesWidget = class _RecentSalesWidget {
  productService;
  products;
  filterSalesTable = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  };
  cols;
  exportColumns;
  dt;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products = data);
    this.cols = [
      {
        field: "code",
        header: "Code",
        customExportHeader: "Product Code"
      },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "price", header: "Price" },
      { field: "inventoryStatus", header: "Inventory Status" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  onFilterGlobal(event) {
    const target = event.target;
    if (target) {
      this.dt.filterGlobal(target.value, "contains");
    }
  }
  getBadgeSeverity(inventoryStatus) {
    switch (inventoryStatus.toLowerCase()) {
      case "instock":
        return "success";
      case "lowstock":
        return "warn";
      case "outofstock":
        return "danger";
      default:
        return "info";
    }
  }
  static \u0275fac = function RecentSalesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentSalesWidget)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentSalesWidget, selectors: [["app-recent-sales-widget"]], viewQuery: function RecentSalesWidget_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 15, vars: 10, consts: [["dt", ""], ["header", ""], ["body", ""], [1, "card"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4", "md:mb-0"], [1, "inline-flex", "items-center"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "w-full", 3, "input"], ["icon", "pi pi-upload", "rounded", "", "pTooltip", "Export", 1, "mx-4", "export-target-button", 3, "click"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows", "columns", "globalFilterFields", "exportHeader"], ["pSortableColumn", "name"], [1, "flex", "items-center", "gap-2"], ["field", "name"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "status"], ["field", "status"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [3, "severity"], [2, "width", "15%"], ["icon", "pi pi-search", "outlined", "", "rounded", ""]], template: function RecentSalesWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
      \u0275\u0275text(3, " Recent Sales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "p-iconfield");
      \u0275\u0275element(6, "p-inputicon", 7);
      \u0275\u0275elementStart(7, "input", 8);
      \u0275\u0275listener("input", function RecentSalesWidget_Template_input_input_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterGlobal($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 9);
      \u0275\u0275listener("click", function RecentSalesWidget_Template_p_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        const dt_r2 = \u0275\u0275reference(10);
        return \u0275\u0275resetView(dt_r2.exportCSV());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-table", 10, 0);
      \u0275\u0275template(11, RecentSalesWidget_ng_template_11_Template, 19, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, RecentSalesWidget_ng_template_13_Template, 13, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c12));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.products)("paginator", true)("rows", 5)("columns", ctx.cols)("globalFilterFields", \u0275\u0275pureFunction0(9, _c2))("exportHeader", "customExportHeader");
    }
  }, dependencies: [
    CommonModule,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    RippleModule,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    FormsModule,
    TooltipModule,
    Tooltip,
    TagModule,
    Tag,
    CurrencyPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSalesWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-recent-sales-widget",
      imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        RippleModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
        FormsModule,
        TooltipModule,
        TagModule
      ],
      template: ` <div class="card">
        <div
            class="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
        >
            <div
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4 md:mb-0"
            >
                Recent Sales
            </div>
            <div class="inline-flex items-center">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input
                        pInputText
                        type="text"
                        (input)="onFilterGlobal($event)"
                        placeholder="Search"
                        [style]="{ borderRadius: '2rem' }"
                        class="w-full"
                    />
                </p-iconfield>
                <p-button
                    icon="pi pi-upload"
                    class="mx-4 export-target-button"
                    rounded
                    pTooltip="Export"
                    (click)="dt.exportCSV()"
                />
            </div>
        </div>
        <p-table
            #dt
            [value]="products"
            [paginator]="true"
            [rows]="5"
            [columns]="cols"
            responsiveLayout="scroll"
            [globalFilterFields]="[
                'name',
                'category',
                'price',
                'inventoryStatus',
            ]"
            [exportHeader]="'customExportHeader'"
        >
            <ng-template #header>
                <tr>
                    <th pSortableColumn="name">
                        <span class="flex items-center gap-2">Name <p-sortIcon field="name"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="category">
                        <span class="flex items-center gap-2">Category <p-sortIcon field="category"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="price">
                        <span class="flex items-center gap-2">Price <p-sortIcon field="price"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="status">
                        <span class="flex items-center gap-2">Status <p-sortIcon field="status"></p-sortIcon></span>
                    </th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 35%; min-width: 7rem;">
                        {{ product.name }}
                    </td>
                    <td style="width: 35%; min-width: 7rem;">
                        {{ product.category }}
                    </td>
                    <td style="width: 35%; min-width: 8rem;">
                        {{ product.price | currency: 'USD' }}
                    </td>
                    <td style="width: 35%; min-width: 8rem;">
                        <p-tag
                            [severity]="
                                getBadgeSeverity(product.inventoryStatus)
                            "
                            >{{ product.inventoryStatus }}</p-tag
                        >
                    </td>
                    <td style="width: 15%;">
                        <p-button icon="pi pi-search" outlined rounded />
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
      providers: [ProductService]
    }]
  }], () => [{ type: ProductService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentSalesWidget, { className: "RecentSalesWidget", filePath: "src/app/pages/dashboards/ecommerce/recentsaleswidget.ts", lineNumber: 131 });
})();

// src/app/pages/dashboards/ecommerce/salesbycategorywidget.ts
function SalesByCategoryWidget_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "p-skeleton", 4);
    \u0275\u0275elementEnd();
  }
}
function SalesByCategoryWidget_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chart", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("data", ctx_r0.pieData)("options", ctx_r0.pieOptions);
  }
}
var BG_PALETTE = ["--p-primary-700", "--p-primary-500", "--p-primary-400", "--p-primary-300", "--p-primary-100"];
var HOVER_PALETTE = ["--p-primary-600", "--p-primary-400", "--p-primary-300", "--p-primary-200", "--p-primary-50"];
var SalesByCategoryWidget = class _SalesByCategoryWidget {
  pieData;
  pieOptions;
  loading = true;
  vehiculesParType = [];
  subscription = new Subscription();
  layoutService = inject(LayoutService);
  dashboardService = inject(DashboardService);
  ngOnInit() {
    this.subscription.add(this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => this.initChart()));
    this.subscription.add(this.dashboardService.getStats().subscribe({
      next: (data) => {
        this.vehiculesParType = data.vehicules_par_type ?? [];
        this.loading = false;
        this.initChart();
      },
      error: (err) => {
        console.error("[SalesByCategoryWidget] Erreur chargement stats:", err);
        this.loading = false;
        this.initChart();
      }
    }));
  }
  initChart() {
    const style = getComputedStyle(document.documentElement);
    const textColor = style.getPropertyValue("--text-color");
    this.pieData = {
      labels: this.vehiculesParType.map((v) => v.label),
      datasets: [
        {
          data: this.vehiculesParType.map((v) => v.count),
          backgroundColor: this.vehiculesParType.map((_, i) => style.getPropertyValue(BG_PALETTE[i % BG_PALETTE.length])),
          hoverBackgroundColor: this.vehiculesParType.map((_, i) => style.getPropertyValue(HOVER_PALETTE[i % HOVER_PALETTE.length]))
        }
      ]
    };
    this.pieOptions = {
      animation: { duration: 0 },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: { weight: 700 },
            padding: 28
          },
          position: "bottom"
        }
      }
    };
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function SalesByCategoryWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesByCategoryWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesByCategoryWidget, selectors: [["app-sales-by-category-widget"]], decls: 5, vars: 1, consts: [[1, "card", "h-full"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-12"], [1, "flex", "justify-center"], ["type", "pie", "height", "300", 3, "data", "options"], ["shape", "circle", "size", "300px"]], template: function SalesByCategoryWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Categorie de v\xE9hicule");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, SalesByCategoryWidget_Conditional_3_Template, 2, 0, "div", 2)(4, SalesByCategoryWidget_Conditional_4_Template, 1, 2, "p-chart", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading ? 3 : 4);
    }
  }, dependencies: [CommonModule, ChartModule, UIChart, SkeletonModule, Skeleton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesByCategoryWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-sales-by-category-widget",
      imports: [CommonModule, ChartModule, SkeletonModule],
      template: `
        <div class="card h-full">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-12">Categorie de v\xE9hicule</div>
            @if (loading) {
                <div class="flex justify-center">
                    <p-skeleton shape="circle" size="300px" />
                </div>
            } @else {
                <p-chart type="pie" [data]="pieData" height="300" [options]="pieOptions"></p-chart>
            }
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesByCategoryWidget, { className: "SalesByCategoryWidget", filePath: "src/app/pages/dashboards/ecommerce/salesbycategorywidget.ts", lineNumber: 29 });
})();

// src/app/pages/dashboards/ecommerce/topproductswidget.ts
function TopProductsWidget_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "div", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-rating", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TopProductsWidget_ng_container_4_li_1_Template_p_rating_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const product_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.rating, $event) || (product_r2.rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r2.image, \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", product_r2.rating);
    \u0275\u0275property("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(9, 6, product_r2.price, "USD", "symbol", "1.0-0"), " ");
  }
}
function TopProductsWidget_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TopProductsWidget_ng_container_4_li_1_Template, 10, 11, "li", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 < 6);
  }
}
var TopProductsWidget = class _TopProductsWidget {
  productService;
  products;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products = data);
  }
  static \u0275fac = function TopProductsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopProductsWidget)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopProductsWidget, selectors: [["app-top-products-widget"]], features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 5, vars: 1, consts: [[1, "card", "h-full"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], [1, "list-none", "p-0", "m-0"], [4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between p-4", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "p-4"], [1, "inline-flex", "items-center"], ["width", "75", 1, "shadow", "shrink-0", 3, "src", "alt"], [1, "flex", "flex-col", "ml-4"], [1, "font-medium", "text-lg", "mb-1"], [3, "ngModelChange", "ngModel", "readonly"], [1, "ml-auto", "font-semibold", "text-xl", "p-text-secondary"]], template: function TopProductsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Top Products ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 2);
      \u0275\u0275template(4, TopProductsWidget_ng_container_4_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.products);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RatingModule, Rating, FormsModule, NgControlStatus, NgModel, CurrencyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopProductsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-top-products-widget",
      imports: [CommonModule, RatingModule, FormsModule],
      template: `<div class="card h-full">
        <div
            class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4"
        >
            Top Products
        </div>
        <ul class="list-none p-0 m-0">
            <ng-container *ngFor="let product of products; let i = index">
                <li *ngIf="i < 6" class="flex items-center justify-between p-4">
                    <div class="inline-flex items-center">
                        <img
                  [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                            [alt]="product.name"
                            width="75"
                            class="shadow shrink-0"
                        />
                        <div class="flex flex-col ml-4">
                            <span class="font-medium text-lg mb-1">{{
                                product.name
                            }}</span>
                            <p-rating
                                [(ngModel)]="product.rating"
                                [readonly]="true"
                            ></p-rating>
                        </div>
                    </div>
                    <span
                        class="ml-auto font-semibold text-xl p-text-secondary"
                    >
                    {{ product.price | currency:'USD':'symbol':'1.0-0' }}
                    </span>
                </li>
            </ng-container>
        </ul>
    </div> `,
      providers: [ProductService]
    }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopProductsWidget, { className: "TopProductsWidget", filePath: "src/app/pages/dashboards/ecommerce/topproductswidget.ts", lineNumber: 48 });
})();

// src/app/pages/dashboards/ecommerce/dashboard-period-selector.ts
function DashboardPeriodSelector_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputnumber", 3);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardPeriodSelector_Conditional_2_Template_p_inputnumber_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customDays, $event) || (ctx_r1.customDays = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onInput", function DashboardPeriodSelector_Conditional_2_Template_p_inputnumber_onInput_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDaysChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customDays);
    \u0275\u0275property("min", 1)("max", 365)("useGrouping", false);
  }
}
var DashboardPeriodSelector = class _DashboardPeriodSelector {
  periodService = inject(DashboardPeriodService);
  selectedPeriod = this.periodService.period();
  customDays = this.periodService.customDays();
  groups = [
    { label: "Jour", items: [
      { label: "Aujourd'hui", value: "today" },
      { label: "Hier", value: "yesterday" }
    ] },
    { label: "Semaine", items: [
      { label: "Cette semaine", value: "this_week" },
      { label: "Semaine derni\xE8re", value: "last_week" }
    ] },
    { label: "Mois", items: [
      { label: "Ce mois", value: "this_month" },
      { label: "Mois dernier", value: "last_month" }
    ] },
    { label: "Trimestre", items: [
      { label: "T1 (Jan\u2013Mar)", value: "q1" },
      { label: "T2 (Avr\u2013Jun)", value: "q2" },
      { label: "T3 (Jul\u2013Sep)", value: "q3" },
      { label: "T4 (Oct\u2013D\xE9c)", value: "q4" }
    ] },
    { label: "Semestre", items: [
      { label: "S1 (Jan\u2013Jun)", value: "s1" },
      { label: "S2 (Jul\u2013D\xE9c)", value: "s2" }
    ] },
    { label: "Ann\xE9e", items: [
      { label: "Cette ann\xE9e", value: "this_year" },
      { label: "Ann\xE9e derni\xE8re", value: "last_year" }
    ] },
    { label: "Personnalis\xE9", items: [
      { label: "X derniers jours", value: "last_x_days" }
    ] }
  ];
  onPeriodChange() {
    this.periodService.setPeriod(this.selectedPeriod);
  }
  onDaysChange(event) {
    const val = event?.value ?? this.customDays;
    if (val >= 1) {
      this.periodService.setCustomDays(val);
      this.periodService.setPeriod("last_x_days");
    }
  }
  static \u0275fac = function DashboardPeriodSelector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardPeriodSelector)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPeriodSelector, selectors: [["app-dashboard-period-selector"]], decls: 3, vars: 4, consts: [[1, "flex", "items-center", "gap-2"], ["optionLabel", "label", "optionValue", "value", "optionGroupLabel", "label", "optionGroupChildren", "items", 1, "w-52", 3, "ngModelChange", "onChange", "options", "ngModel", "group"], ["suffix", " j", "inputStyleClass", "w-20", "styleClass", "w-24", 3, "ngModel", "min", "max", "useGrouping"], ["suffix", " j", "inputStyleClass", "w-20", "styleClass", "w-24", 3, "ngModelChange", "onInput", "ngModel", "min", "max", "useGrouping"]], template: function DashboardPeriodSelector_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p-select", 1);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardPeriodSelector_Template_p_select_ngModelChange_1_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function DashboardPeriodSelector_Template_p_select_onChange_1_listener() {
        return ctx.onPeriodChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, DashboardPeriodSelector_Conditional_2_Template, 1, 4, "p-inputnumber", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("options", ctx.groups);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275property("group", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedPeriod === "last_x_days" ? 2 : -1);
    }
  }, dependencies: [SelectModule, Select, InputNumberModule, InputNumber, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPeriodSelector, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-dashboard-period-selector",
      imports: [SelectModule, InputNumberModule, FormsModule],
      template: `
        <div class="flex items-center gap-2">
            <p-select
                [options]="groups"
                [(ngModel)]="selectedPeriod"
                optionLabel="label"
                optionValue="value"
                [group]="true"
                optionGroupLabel="label"
                optionGroupChildren="items"
                class="w-52"
                (onChange)="onPeriodChange()"
            />
            @if (selectedPeriod === 'last_x_days') {
                <p-inputnumber
                    [(ngModel)]="customDays"
                    [min]="1"
                    [max]="365"
                    [useGrouping]="false"
                    suffix=" j"
                    inputStyleClass="w-20"
                    styleClass="w-24"
                    (onInput)="onDaysChange($event)"
                />
            }
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPeriodSelector, { className: "DashboardPeriodSelector", filePath: "src/app/pages/dashboards/ecommerce/dashboard-period-selector.ts", lineNumber: 49 });
})();

// src/app/pages/dashboards/ecommerce/statistiquePackingwidget.ts
var StatistiquePackingWidget = class _StatistiquePackingWidget {
  layoutService;
  packingService;
  periods = [
    { label: "Aujourd'hui", value: "today" },
    { label: "Hier", value: "yesterday" },
    { label: "Cette semaine", value: "this_week" },
    { label: "Semaine derni\xE8re", value: "last_week" },
    { label: "Ce mois", value: "this_month" },
    { label: "Mois dernier", value: "last_month" },
    { label: "T1 (Jan-Mar)", value: "q1" },
    { label: "T2 (Avr-Jun)", value: "q2" },
    { label: "T3 (Jul-Sep)", value: "q3" },
    { label: "T4 (Oct-D\xE9c)", value: "q4" },
    { label: "1er semestre", value: "s1" },
    { label: "2\xE8me semestre", value: "s2" },
    { label: "Cette ann\xE9e", value: "this_year" },
    { label: "Ann\xE9e derni\xE8re", value: "last_year" }
  ];
  selectedPeriod = "this_week";
  barData;
  barOptions;
  subscription;
  lastLabels = [];
  lastPayee = [];
  lastImpayee = [];
  lastPartielle = [];
  constructor(layoutService, packingService) {
    this.layoutService = layoutService;
    this.packingService = packingService;
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => {
      this.initChart(this.lastLabels, this.lastPayee, this.lastImpayee, this.lastPartielle);
    });
  }
  ngOnInit() {
    this.initChart([], [], [], []);
    this.loadStats();
  }
  loadStats() {
    this.packingService.getStats(this.selectedPeriod).subscribe((res) => {
      const labels = res.data.labels ?? [];
      const payee = this.normalizeSeries(res.data.payee, labels.length);
      const impayee = this.normalizeSeries(res.data.impayee, labels.length);
      const partielle = this.normalizeSeries(res.data.partielle ?? res.data.partiellement_payee, labels.length);
      this.lastLabels = labels;
      this.lastPayee = payee;
      this.lastImpayee = impayee;
      this.lastPartielle = partielle;
      this.initChart(labels, payee, impayee, partielle);
    });
  }
  normalizeSeries(series, targetLength) {
    const values = series ?? [];
    if (values.length >= targetLength) {
      return values.slice(0, targetLength);
    }
    return [...values, ...Array(targetLength - values.length).fill(0)];
  }
  initChart(labels, payee, impayee, partielle) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const primary500 = documentStyle.getPropertyValue("--p-primary-500").trim() || "#6366f1";
    const primary200 = documentStyle.getPropertyValue("--p-primary-200").trim() || "#c7d2fe";
    const amber400 = documentStyle.getPropertyValue("--p-amber-400").trim() || "#f59e0b";
    this.barData = {
      labels,
      datasets: [
        {
          label: "Pay\xE9e",
          backgroundColor: primary500,
          barThickness: 12,
          borderRadius: 12,
          data: payee
        },
        {
          label: "Impay\xE9e",
          backgroundColor: primary200,
          barThickness: 12,
          borderRadius: 12,
          data: impayee
        },
        {
          label: "Partiellement payee",
          backgroundColor: amber400,
          barThickness: 12,
          borderRadius: 12,
          data: partielle
        }
      ]
    };
    this.barOptions = {
      animation: { duration: 0 },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: { weight: 700 },
            padding: 28
          },
          position: "bottom"
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: { weight: 500 }
          },
          grid: { display: false, drawBorder: false }
        },
        y: {
          ticks: { color: textColorSecondary },
          grid: { color: surfaceBorder, drawBorder: false }
        }
      }
    };
  }
  onPeriodChange() {
    this.loadStats();
  }
  static \u0275fac = function StatistiquePackingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatistiquePackingWidget)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(PackingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatistiquePackingWidget, selectors: [["app-statistique-packing-widget"]], decls: 6, vars: 4, consts: [[1, "card", "h-full"], [1, "flex", "items-start", "justify-between", "mb-12"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], ["optionLabel", "label", "optionValue", "value", 1, "w-56", 3, "ngModelChange", "onChange", "options", "ngModel"], ["type", "bar", "height", "300", 3, "data", "options"]], template: function StatistiquePackingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Statistiques Packing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function StatistiquePackingWidget_Template_p_select_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedPeriod, $event) || (ctx.selectedPeriod = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function StatistiquePackingWidget_Template_p_select_onChange_4_listener() {
        return ctx.onPeriodChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "p-chart", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.periods);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedPeriod);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.barData)("options", ctx.barOptions);
    }
  }, dependencies: [SelectModule, Select, ChartModule, UIChart, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatistiquePackingWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-statistique-packing-widget",
      imports: [SelectModule, ChartModule, FormsModule],
      template: ` <div class="card h-full">
        <div class="flex items-start justify-between mb-12">
            <span
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold"
                >Statistiques Packing</span
            >
            <p-select
                [options]="periods"
                [(ngModel)]="selectedPeriod"
                class="w-56"
                optionLabel="label"
                optionValue="value"
                (onChange)="onPeriodChange()"
            ></p-select>
        </div>
        <p-chart
            type="bar"
            height="300"
            [data]="barData"
            [options]="barOptions"
        ></p-chart>
    </div>`
    }]
  }], () => [{ type: LayoutService }, { type: PackingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatistiquePackingWidget, { className: "StatistiquePackingWidget", filePath: "src/app/pages/dashboards/ecommerce/statistiquepackingwidget.ts", lineNumber: 41 });
})();

// src/app/pages/dashboards/ecommercedashboard.ts
var _c03 = (a0) => [a0];
function EcommerceDashboard_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-dashboard-period-selector");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-stats-widget");
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275element(5, "app-statistique-packing-widget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275element(7, "app-sales-by-category-widget");
    \u0275\u0275elementEnd()();
  }
}
var EcommerceDashboard = class _EcommerceDashboard {
  usineContext;
  refreshKey = signal(0, ...ngDevMode ? [{ debugName: "refreshKey" }] : []);
  readyForUsineReload = false;
  constructor(usineContext) {
    this.usineContext = usineContext;
    effect(() => {
      this.usineContext.currentUsineId();
      this.usineContext.isConsolidated();
      if (!this.readyForUsineReload)
        return;
      this.refreshKey.update((value) => value + 1);
    });
  }
  ngOnInit() {
    this.readyForUsineReload = true;
  }
  static \u0275fac = function EcommerceDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcommerceDashboard)(\u0275\u0275directiveInject(UsineContextService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommerceDashboard, selectors: [["app-ecommerce-dashboard"]], decls: 2, vars: 2, consts: [[1, "grid", "grid-cols-12", "gap-8"], [1, "col-span-12", "flex", "justify-end"], [1, "col-span-12", "xl:col-span-9"], [1, "col-span-12", "xl:col-span-3"]], template: function EcommerceDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, EcommerceDashboard_For_1_Template, 8, 0, "div", 0, \u0275\u0275repeaterTrackByIdentity);
    }
    if (rf & 2) {
      \u0275\u0275repeater(\u0275\u0275pureFunction1(0, _c03, ctx.refreshKey()));
    }
  }, dependencies: [StatsWidget, StatistiquePackingWidget, SalesByCategoryWidget, DashboardPeriodSelector], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcommerceDashboard, [{
    type: Component,
    args: [{
      selector: "app-ecommerce-dashboard",
      standalone: true,
      imports: [StatsWidget, RecentSalesWidget, StatistiquePackingWidget, SalesByCategoryWidget, TopProductsWidget, DashboardPeriodSelector],
      template: `
    @for (key of [refreshKey()]; track key) {
    <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 flex justify-end">
                <app-dashboard-period-selector />
            </div>
            <app-stats-widget />
            <div class="col-span-12 xl:col-span-9">
             <app-statistique-packing-widget />
            </div>
        <div class="col-span-12 xl:col-span-3">
            <app-sales-by-category-widget />
        </div>
    </div>
    }
    `
    }]
  }], () => [{ type: UsineContextService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommerceDashboard, { className: "EcommerceDashboard", filePath: "src/app/pages/dashboards/ecommercedashboard.ts", lineNumber: 31 });
})();
export {
  EcommerceDashboard
};
//# sourceMappingURL=chunk-V4WOVPSY.js.map
