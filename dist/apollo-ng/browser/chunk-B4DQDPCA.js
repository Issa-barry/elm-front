import {
  CommissionDetailDialog,
  CommissionVenteService
} from "./chunk-CUPSS3PD.js";
import "./chunk-3F5MALYX.js";
import {
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-UWHPUST5.js";
import "./chunk-RJ2GYKMX.js";
import "./chunk-P3S4PXJW.js";
import "./chunk-C5GRAO6X.js";
import "./chunk-CSVYKJ4F.js";
import {
  Toast,
  ToastModule
} from "./chunk-K65U6EBI.js";
import "./chunk-A7I32VT2.js";
import {
  Table,
  TableModule
} from "./chunk-TECCOVZK.js";
import "./chunk-ANXFJYSG.js";
import "./chunk-GTKNBISE.js";
import "./chunk-LDZPSMHJ.js";
import "./chunk-XMFE765I.js";
import "./chunk-VFC4ZGOV.js";
import "./chunk-DS6WDG7G.js";
import {
  Tag,
  TagModule
} from "./chunk-FMK3YN5M.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-DBXKSYQP.js";
import "./chunk-D4DB7G5Q.js";
import "./chunk-UQFVREV6.js";
import "./chunk-J7PQPFQ2.js";
import "./chunk-JDFDUAZW.js";
import "./chunk-GNS5B2OF.js";
import "./chunk-HXWKNUGV.js";
import "./chunk-NGVVFXIQ.js";
import {
  HttpParams
} from "./chunk-7U237DEN.js";
import {
  Select,
  SelectModule
} from "./chunk-2UOA5RIX.js";
import "./chunk-GSLAPXC6.js";
import "./chunk-RNBHJ3IS.js";
import "./chunk-XCVSS3ID.js";
import "./chunk-URQMWJE6.js";
import "./chunk-DQKWWXZT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FGSFU6DI.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-55R5VFNU.js";
import "./chunk-4WKDSNIY.js";
import "./chunk-KWGIJUAU.js";
import "./chunk-ORG54PNZ.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3DMR3ILK.js";
import {
  Button,
  ButtonModule
} from "./chunk-73OLBEDX.js";
import "./chunk-U4SWEEQT.js";
import "./chunk-WLMAONDN.js";
import "./chunk-CUJZFPFM.js";
import {
  MessageService
} from "./chunk-MGF35FP6.js";
import {
  CommonModule
} from "./chunk-AR53T6NL.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  Input,
  forkJoin,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SKXAAURP.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commission-vente-liste/commission-stats-widget.ts
var _c0 = () => [1, 2, 3, 4];
function CommissionStatsWidget_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 1);
  }
}
function CommissionStatsWidget_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275repeaterCreate(1, CommissionStatsWidget_Conditional_0_For_2_Template, 1, 0, "p-skeleton", 1, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function CommissionStatsWidget_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r1 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(s_r1.eligibleMontant), " ");
  }
}
function CommissionStatsWidget_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "i", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
    \u0275\u0275text(7, " \xC9ligibles \xE0 verser ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, CommissionStatsWidget_Conditional_1_Conditional_10_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 2)(12, "div", 9);
    \u0275\u0275element(13, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 5)(15, "div", 6);
    \u0275\u0275text(16, " En attente ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 11);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 2)(22, "div", 13);
    \u0275\u0275element(23, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
    \u0275\u0275text(26, " Part. vers\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 11);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 12);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 2)(32, "div", 15);
    \u0275\u0275element(33, "i", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 5)(35, "div", 6);
    \u0275\u0275text(36, " Vers\xE9es ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 12);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r3 = \u0275\u0275storeLet(\u0275\u0275nextContext().stats());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", s_r3.eligibleCount, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.eligibleMontant > 0 ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", s_r3.enAttenteCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r3.enAttenteCount > 1 ? "commissions" : "commission", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", s_r3.partiellementCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r3.partiellementCount > 1 ? "commissions" : "commission", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", s_r3.verseeCount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r3.verseeCount > 1 ? "commissions" : "commission", " ");
  }
}
var CommissionStatsWidget = class _CommissionStatsWidget {
  service;
  /** Incrémenter depuis le parent pour forcer un rechargement */
  refreshTrigger = 0;
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor(service) {
    this.service = service;
  }
  ngOnInit() {
    this.load();
  }
  ngOnChanges(changes) {
    if (changes["refreshTrigger"] && !changes["refreshTrigger"].firstChange) {
      this.load();
    }
  }
  load() {
    this.loading.set(true);
    forkJoin({
      eligible: this.service.getAll(new HttpParams().set("per_page", "200").set("statut", "eligible")),
      enAttente: this.service.getAll(new HttpParams().set("per_page", "1").set("statut", "en_attente")),
      partiellement: this.service.getAll(new HttpParams().set("per_page", "1").set("statut", "partiellement_versee")),
      versee: this.service.getAll(new HttpParams().set("per_page", "1").set("statut", "versee"))
    }).subscribe({
      next: (r) => {
        const eligibleItems = r.eligible.data?.data ?? [];
        const eligibleMontant = eligibleItems.reduce((sum, c) => sum + parseFloat(c.montant_commission_total), 0);
        this.stats.set({
          eligibleCount: r.eligible.data?.total ?? 0,
          eligibleMontant,
          enAttenteCount: r.enAttente.data?.total ?? 0,
          partiellementCount: r.partiellement.data?.total ?? 0,
          verseeCount: r.versee.data?.total ?? 0
        });
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  fmt(n) {
    return new Intl.NumberFormat("fr-FR").format(n) + " GNF";
  }
  static \u0275fac = function CommissionStatsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommissionStatsWidget)(\u0275\u0275directiveInject(CommissionVenteService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionStatsWidget, selectors: [["app-commission-stats-widget"]], inputs: { refreshTrigger: "refreshTrigger" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-3", "mb-5"], ["height", "7rem", "borderRadius", "12px"], [1, "flex", "items-start", "gap-3", "p-4", "surface-0", "border-1", "surface-border", "border-round-xl", "shadow-1"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "border-round-lg", "flex-shrink-0", 2, "background", "var(--p-blue-100, #dbeafe)", "color", "var(--p-blue-600, #2563eb)"], [1, "pi", "pi-send", "text-xl"], [1, "min-w-0", "flex-1"], [1, "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide", "mb-1", "truncate"], [1, "text-3xl", "font-bold", 2, "color", "var(--p-primary-color)"], [1, "text-xs", "text-surface-500", "mt-1", "truncate", "font-medium"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "border-round-lg", "flex-shrink-0", 2, "background", "var(--p-orange-100, #ffedd5)", "color", "var(--p-orange-500, #f97316)"], [1, "pi", "pi-clock", "text-xl"], [1, "text-3xl", "font-bold", "text-surface-700"], [1, "text-xs", "text-surface-400", "mt-1"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "border-round-lg", "flex-shrink-0", 2, "background", "var(--p-purple-100, #f3e8ff)", "color", "var(--p-purple-600, #9333ea)"], [1, "pi", "pi-percentage", "text-xl"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "border-round-lg", "flex-shrink-0", 2, "background", "var(--p-green-100, #dcfce7)", "color", "var(--p-green-600, #16a34a)"], [1, "pi", "pi-check-circle", "text-xl"], [1, "text-3xl", "font-bold", 2, "color", "var(--p-green-600, #16a34a)"]], template: function CommissionStatsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CommissionStatsWidget_Conditional_0_Template, 3, 1, "div", 0)(1, CommissionStatsWidget_Conditional_1_Template, 41, 9, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.stats() ? 1 : -1);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommissionStatsWidget, [{
    type: Component,
    args: [{ selector: "app-commission-stats-widget", standalone: true, imports: [CommonModule, SkeletonModule], template: `@if (loading()) {
  <!-- Skeletons -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
    @for (_ of [1, 2, 3, 4]; track $index) {
      <p-skeleton height="7rem" borderRadius="12px" />
    }
  </div>

} @else if (stats()) {
  @let s = stats()!;

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">

    <!-- \u2500\u2500 \xC9ligibles \xE0 verser \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex items-start gap-3 p-4 surface-0 border-1 surface-border border-round-xl shadow-1">
      <div class="flex items-center justify-center w-12 h-12 border-round-lg flex-shrink-0"
           style="background: var(--p-blue-100, #dbeafe); color: var(--p-blue-600, #2563eb)">
        <i class="pi pi-send text-xl"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-1 truncate">
          \xC9ligibles \xE0 verser
        </div>
        <div class="text-3xl font-bold" style="color: var(--p-primary-color)">
          {{ s.eligibleCount }}
        </div>
        @if (s.eligibleMontant > 0) {
          <div class="text-xs text-surface-500 mt-1 truncate font-medium">
            {{ fmt(s.eligibleMontant) }}
          </div>
        }
      </div>
    </div>

    <!-- \u2500\u2500 En attente \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex items-start gap-3 p-4 surface-0 border-1 surface-border border-round-xl shadow-1">
      <div class="flex items-center justify-center w-12 h-12 border-round-lg flex-shrink-0"
           style="background: var(--p-orange-100, #ffedd5); color: var(--p-orange-500, #f97316)">
        <i class="pi pi-clock text-xl"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-1 truncate">
          En attente
        </div>
        <div class="text-3xl font-bold text-surface-700">
          {{ s.enAttenteCount }}
        </div>
        <div class="text-xs text-surface-400 mt-1">
          {{ s.enAttenteCount > 1 ? 'commissions' : 'commission' }}
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Partiellement vers\xE9es \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex items-start gap-3 p-4 surface-0 border-1 surface-border border-round-xl shadow-1">
      <div class="flex items-center justify-center w-12 h-12 border-round-lg flex-shrink-0"
           style="background: var(--p-purple-100, #f3e8ff); color: var(--p-purple-600, #9333ea)">
        <i class="pi pi-percentage text-xl"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-1 truncate">
          Part. vers\xE9es
        </div>
        <div class="text-3xl font-bold text-surface-700">
          {{ s.partiellementCount }}
        </div>
        <div class="text-xs text-surface-400 mt-1">
          {{ s.partiellementCount > 1 ? 'commissions' : 'commission' }}
        </div>
      </div>
    </div>

    <!-- \u2500\u2500 Vers\xE9es \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="flex items-start gap-3 p-4 surface-0 border-1 surface-border border-round-xl shadow-1">
      <div class="flex items-center justify-center w-12 h-12 border-round-lg flex-shrink-0"
           style="background: var(--p-green-100, #dcfce7); color: var(--p-green-600, #16a34a)">
        <i class="pi pi-check-circle text-xl"></i>
      </div>
      <div class="min-w-0 flex-1">
        <div class="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-1 truncate">
          Vers\xE9es
        </div>
        <div class="text-3xl font-bold" style="color: var(--p-green-600, #16a34a)">
          {{ s.verseeCount }}
        </div>
        <div class="text-xs text-surface-400 mt-1">
          {{ s.verseeCount > 1 ? 'commissions' : 'commission' }}
        </div>
      </div>
    </div>

  </div>
}
` }]
  }], () => [{ type: CommissionVenteService }], { refreshTrigger: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionStatsWidget, { className: "CommissionStatsWidget", filePath: "src/app/pages/ventes/commission-vente-liste/commission-stats-widget.ts", lineNumber: 29 });
})();

// src/app/pages/ventes/commission-vente-liste/commission-vente-liste.ts
var _c02 = () => [10, 20, 50];
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
function CommissionVenteListe_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Commissions sur ventes");
    \u0275\u0275elementEnd()();
  }
}
function CommissionVenteListe_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 21);
    \u0275\u0275text(2, "R\xE9f. commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 22);
    \u0275\u0275text(4, "V\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 24);
    \u0275\u0275text(8, "Commission totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 25);
    \u0275\u0275text(10, "Part livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 25);
    \u0275\u0275text(12, "Part propri\xE9taire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 26);
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 27);
    \u0275\u0275text(16, "Date \xE9ligibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "th", 28);
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_ng_template_24_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatMontant(c_r3.part_proprietaire), " ");
  }
}
function CommissionVenteListe_ng_template_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29);
    \u0275\u0275listener("click", function CommissionVenteListe_ng_template_24_Template_tr_click_0_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDetail(c_r3));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "div", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 34)(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 36);
    \u0275\u0275conditionalCreate(17, CommissionVenteListe_ng_template_24_Conditional_17_Template, 1, 1)(18, CommissionVenteListe_ng_template_24_Conditional_18_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 40);
    \u0275\u0275listener("click", function CommissionVenteListe_ng_template_24_Template_td_click_23_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(24, "p-button", 41);
    \u0275\u0275listener("onClick", function CommissionVenteListe_ng_template_24_Template_p_button_onClick_24_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDetail(c_r3));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r3.commande == null ? null : c_r3.commande.reference) ?? "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r3.vehicule == null ? null : c_r3.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.vehicule == null ? null : c_r3.vehicule.immatriculation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r3.livreur == null ? null : c_r3.livreur.prenom, " ", c_r3.livreur == null ? null : c_r3.livreur.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(c_r3.montant_commission_total));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatMontant(c_r3.part_livreur));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.parseFloat(c_r3.part_proprietaire) > 0 ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r3.getStatutLabel(c_r3.statut))("severity", ctx_r3.getStatutSeverity(c_r3.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatDate(c_r3.eligible_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommissionVenteListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "div", 43);
    \u0275\u0275element(3, "i", 44);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune commission trouv\xE9e");
    \u0275\u0275elementEnd()()()();
  }
}
function CommissionVenteListe_ng_template_28_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function CommissionVenteListe_ng_template_28_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, CommissionVenteListe_ng_template_28_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function CommissionVenteListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommissionVenteListe_ng_template_28_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function CommissionVenteListe_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commission-detail-dialog", 45);
    \u0275\u0275listener("visibleChange", function CommissionVenteListe_Conditional_30_Template_app_commission_detail_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.detailVisible.set($event));
    })("onVersementDone", function CommissionVenteListe_Conditional_30_Template_app_commission_detail_dialog_onVersementDone_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onVersementDone());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("commissionId", ctx_r3.selectedCommissionId())("visible", ctx_r3.detailVisible());
  }
}
var CommissionVenteListe = class _CommissionVenteListe {
  commissionService;
  messageService;
  commissions = signal([], ...ngDevMode ? [{ debugName: "commissions" }] : []);
  totalRecords = signal(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  perPage = signal(20, ...ngDevMode ? [{ debugName: "perPage" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  // Filtres (propriétés simples pour [(ngModel)] direct — plus fiable avec PrimeNG)
  filterStatut = "";
  filterDateDebut = null;
  filterDateFin = null;
  // Dialog détail
  selectedCommissionId = signal(null, ...ngDevMode ? [{ debugName: "selectedCommissionId" }] : []);
  detailVisible = signal(false, ...ngDevMode ? [{ debugName: "detailVisible" }] : []);
  // Trigger rechargement du widget stats après un versement
  statsRefreshTrigger = signal(0, ...ngDevMode ? [{ debugName: "statsRefreshTrigger" }] : []);
  parseFloat = parseFloat;
  statutOptions = [
    { label: "Tous les statuts", value: "" },
    { label: "En attente", value: "en_attente" },
    { label: "\xC9ligible", value: "eligible" },
    { label: "Partiellement vers\xE9e", value: "partiellement_versee" },
    { label: "Vers\xE9e", value: "versee" },
    { label: "Annul\xE9e", value: "annulee" }
  ];
  constructor(commissionService, messageService) {
    this.commissionService = commissionService;
    this.messageService = messageService;
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
    this.statsRefreshTrigger.update((v) => v + 1);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommissionVenteListe, selectors: [["app-commission-vente-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 31, vars: 19, consts: [["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [3, "refreshTrigger"], [1, "card"], [1, "flex", "flex-wrap", "items-end", "gap-3", "mb-5"], [1, "flex", "flex-col", "gap-1", 2, "min-width", "13rem"], [1, "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", "styleClass", "w-full", 3, "ngModelChange", "onChange", "ngModel", "options"], [1, "flex", "flex-col", "gap-1"], ["dateFormat", "dd/mm/yy", "placeholder", "Du\u2026", "inputStyleClass", "w-36", 3, "ngModelChange", "ngModel", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Au\u2026", "inputStyleClass", "w-36", 3, "ngModelChange", "ngModel", "showClear"], [1, "flex", "gap-2", "pb-0.5"], ["label", "Filtrer", "icon", "pi pi-filter", 3, "onClick"], ["label", "R\xE9initialiser", "icon", "pi pi-filter-slash", "severity", "secondary", 3, "onClick", "outlined"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "{first} / {last} de {totalRecords} commissions", "styleClass", "p-datatable-sm", 3, "onLazyLoad", "value", "loading", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "rowHover", "showCurrentPageReport"], [3, "commissionId", "visible"], [1, "flex", "items-center"], [1, "text-xl", "font-semibold"], [2, "width", "18%"], [2, "width", "16%"], [2, "width", "13%"], [1, "text-right", 2, "width", "11%"], [1, "text-right", 2, "width", "10%"], [2, "width", "10%"], [2, "width", "9%"], [2, "width", "3%"], [1, "cursor-pointer", 3, "click"], [1, "font-mono", "text-sm", "font-semibold"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-surface-400"], [1, "text-sm"], [1, "text-right"], [1, "font-semibold", "text-primary"], [1, "text-right", "text-sm"], [1, "text-surface-300"], [3, "value", "severity"], [1, "text-sm", "text-surface-500"], [3, "click"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Voir le d\xE9tail", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["colspan", "9", 1, "text-center", "py-10"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-percentage", "text-4xl"], [3, "visibleChange", "onVersementDone", "commissionId", "visible"]], template: function CommissionVenteListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "app-commission-stats-widget", 5);
      \u0275\u0275elementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "label", 9);
      \u0275\u0275text(6, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Template_p_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function CommissionVenteListe_Template_p_select_onChange_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 11)(9, "label", 9);
      \u0275\u0275text(10, "Date d\xE9but");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-datepicker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Template_p_datepicker_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterDateDebut, $event) || (ctx.filterDateDebut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "label", 9);
      \u0275\u0275text(14, "Date fin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-datepicker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CommissionVenteListe_Template_p_datepicker_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterDateFin, $event) || (ctx.filterDateFin = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 14)(17, "p-button", 15);
      \u0275\u0275listener("onClick", function CommissionVenteListe_Template_p_button_onClick_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-button", 16);
      \u0275\u0275listener("onClick", function CommissionVenteListe_Template_p_button_onClick_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "p-table", 17);
      \u0275\u0275listener("onLazyLoad", function CommissionVenteListe_Template_p_table_onLazyLoad_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275template(20, CommissionVenteListe_ng_template_20_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(22, CommissionVenteListe_ng_template_22_Template, 18, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(24, CommissionVenteListe_ng_template_24_Template, 25, 13, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(26, CommissionVenteListe_ng_template_26_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(28, CommissionVenteListe_ng_template_28_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, CommissionVenteListe_Conditional_30_Template, 1, 2, "app-commission-detail-dialog", 18);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("refreshTrigger", ctx.statsRefreshTrigger());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatut);
      \u0275\u0275property("options", ctx.statutOptions);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDateDebut);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterDateFin);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance(3);
      \u0275\u0275property("outlined", true);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.commissions())("loading", ctx.loading())("lazy", true)("paginator", true)("rows", ctx.perPage())("totalRecords", ctx.totalRecords())("rowsPerPageOptions", \u0275\u0275pureFunction0(18, _c02))("rowHover", true)("showCurrentPageReport", true);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.selectedCommissionId() ? 30 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    TagModule,
    Tag,
    ButtonModule,
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
    CommissionDetailDialog,
    CommissionStatsWidget
  ], styles: ['@charset "UTF-8";\n\n\n\n/*# sourceMappingURL=commission-vente-liste.css.map */'] });
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
      CommissionDetailDialog,
      CommissionStatsWidget
    ], providers: [MessageService], template: `<p-toast />

<!-- \u2500\u2500 Widgets statistiques \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<app-commission-stats-widget [refreshTrigger]="statsRefreshTrigger()" />

<div class="card">

  <!-- \u2500\u2500 Filtres \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="flex flex-wrap items-end gap-3 mb-5">

    <div class="flex flex-col gap-1" style="min-width:13rem">
      <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Statut</label>
      <p-select
        [(ngModel)]="filterStatut"
        [options]="statutOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Tous les statuts"
        styleClass="w-full"
        (onChange)="applyFilters()"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Date d\xE9but</label>
      <p-datepicker
        [(ngModel)]="filterDateDebut"
        dateFormat="dd/mm/yy"
        [showClear]="true"
        placeholder="Du\u2026"
        inputStyleClass="w-36"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Date fin</label>
      <p-datepicker
        [(ngModel)]="filterDateFin"
        dateFormat="dd/mm/yy"
        [showClear]="true"
        placeholder="Au\u2026"
        inputStyleClass="w-36"
      />
    </div>

    <div class="flex gap-2 pb-0.5">
      <p-button label="Filtrer" icon="pi pi-filter" (onClick)="applyFilters()" />
      <p-button label="R\xE9initialiser" icon="pi pi-filter-slash" [outlined]="true"
                severity="secondary" (onClick)="resetFilters()" />
    </div>

  </div>

  <!-- \u2500\u2500 Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
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
      <div class="flex items-center">
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

        <td>
          <span class="font-mono text-sm font-semibold">{{ c.commande?.reference ?? '\u2014' }}</span>
        </td>

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
          <p-tag [value]="getStatutLabel(c.statut)" [severity]="getStatutSeverity(c.statut)" />
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

<!-- \u2500\u2500 Dialog d\xE9tail \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (selectedCommissionId()) {
  <app-commission-detail-dialog
    [commissionId]="selectedCommissionId()!"
    [visible]="detailVisible()"
    (visibleChange)="detailVisible.set($event)"
    (onVersementDone)="onVersementDone()"
  />
}
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/ventes/commission-vente-liste/commission-vente-liste.scss */\n/*# sourceMappingURL=commission-vente-liste.css.map */\n'] }]
  }], () => [{ type: CommissionVenteService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommissionVenteListe, { className: "CommissionVenteListe", filePath: "src/app/pages/ventes/commission-vente-liste/commission-vente-liste.ts", lineNumber: 46 });
})();
export {
  CommissionVenteListe
};
//# sourceMappingURL=chunk-B4DQDPCA.js.map
