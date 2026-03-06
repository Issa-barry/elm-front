import {
  OrganisationService
} from "./chunk-XMQVZEEL.js";
import {
  authorizationGuard
} from "./chunk-6UL5U7NG.js";
import "./chunk-A74EIJKM.js";
import "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import {
  Table,
  TableModule
} from "./chunk-YJFTPERB.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-FF4N4CLH.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import {
  Tag,
  TagModule
} from "./chunk-24JO5SYM.js";
import "./chunk-EZGYU3RQ.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-IEELAHW7.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import "./chunk-7GQXFRTV.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-K7KGEHY2.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import "./chunk-VA6E3YEN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import {
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/services/billing/billing.service.ts
var BillingService = class _BillingService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/billing`;
  getEvents(filters) {
    let params = new HttpParams();
    if (filters?.organisation_id) {
      params = params.set("organisation_id", filters.organisation_id.toString());
    }
    if (filters?.status) {
      params = params.set("status", filters.status);
    }
    if (filters?.forfait) {
      params = params.set("forfait", filters.forfait);
    }
    return this.http.get(`${this.apiBase}/events`, { params }).pipe(map((res) => res.data));
  }
  markPaid(id) {
    return this.http.patch(`${this.apiBase}/events/${id}/paid`, {}).pipe(map((res) => res.data));
  }
  static \u0275fac = function BillingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BillingService, factory: _BillingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/billing/billing-events/billing-events.ts
var _c0 = () => ({ minWidth: "220px" });
var _c1 = () => ({ minWidth: "180px" });
var _c2 = () => ({ minWidth: "170px" });
function BillingEvents_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Forfait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "R\xE9f. user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Type d'event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 18);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function BillingEvents_ng_template_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.forfaitBadgeClass(event_r1.organisation == null ? null : event_r1.organisation.forfait == null ? null : event_r1.organisation.forfait.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r1.organisation == null ? null : event_r1.organisation.forfait == null ? null : event_r1.organisation.forfait.nom);
  }
}
function BillingEvents_ng_template_13_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function BillingEvents_ng_template_13_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function BillingEvents_ng_template_13_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const event_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markPaid(event_r1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("loading", ctx_r1.markingPaidId === event_r1.id)("disabled", ctx_r1.markingPaidId !== null);
  }
}
function BillingEvents_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, BillingEvents_ng_template_13_ng_container_7_Template, 3, 2, "ng-container", 21)(8, BillingEvents_ng_template_13_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "code", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 19);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 18);
    \u0275\u0275template(24, BillingEvents_ng_template_13_button_24_Template, 1, 2, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const noForfait_r4 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r1.organisation == null ? null : event_r1.organisation.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", event_r1.organisation == null ? null : event_r1.organisation.code, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", event_r1.organisation == null ? null : event_r1.organisation.forfait)("ngIfElse", noForfait_r4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r1.user == null ? null : event_r1.user.nom_complet);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r1.user == null ? null : event_r1.user.reference);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getEventTypeLabel(event_r1.event_type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatAmount(event_r1.amount));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatusConfig(event_r1.status).label)("severity", ctx_r1.getStatusConfig(event_r1.status).severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(event_r1.occurred_at));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canMarkPaid(event_r1));
  }
}
function BillingEvents_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, " Aucun event de facturation trouv\xE9. ");
    \u0275\u0275elementEnd()();
  }
}
var BILLING_STATUS = {
  pending: { label: "En attente", severity: "warn" },
  invoiced: { label: "Factur\xE9", severity: "info" },
  paid: { label: "Pay\xE9", severity: "success" },
  cancelled: { label: "Annul\xE9", severity: "secondary" }
};
var EVENT_TYPE_LABELS = {
  user_created: "Cr\xE9ation compte"
};
var BillingEvents = class _BillingEvents {
  billingService = inject(BillingService);
  organisationService = inject(OrganisationService);
  messageService = inject(MessageService);
  events = [];
  organisations = [];
  loading = false;
  markingPaidId = null;
  filterOrganisationId = null;
  filterStatus = null;
  filterForfait = null;
  forfaitOptions = [
    { label: "Tous les forfaits", value: null },
    { label: "Starter", value: "starter" },
    { label: "Standard", value: "standard" },
    { label: "Premium", value: "premium" }
  ];
  statusOptions = [
    { label: "Tous les statuts", value: null },
    { label: "En attente", value: "pending" },
    { label: "Factur\xE9", value: "invoiced" },
    { label: "Pay\xE9", value: "paid" },
    { label: "Annul\xE9", value: "cancelled" }
  ];
  ngOnInit() {
    this.loadOrganisations();
    this.loadEvents();
  }
  loadOrganisations() {
    this.organisationService.getAll().subscribe({
      next: (items) => this.organisations = items,
      error: () => {
      }
    });
  }
  loadEvents() {
    this.loading = true;
    const filters = {};
    if (this.filterOrganisationId)
      filters.organisation_id = this.filterOrganisationId;
    if (this.filterStatus)
      filters.status = this.filterStatus;
    if (this.filterForfait)
      filters.forfait = this.filterForfait;
    this.billingService.getEvents(filters).subscribe({
      next: (data) => {
        this.events = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "Chargement des events impossible.");
      }
    });
  }
  onFilterChange() {
    this.loadEvents();
  }
  canMarkPaid(event) {
    return event.status === "pending" || event.status === "invoiced";
  }
  markPaid(event) {
    if (this.markingPaidId !== null)
      return;
    this.markingPaidId = event.id;
    this.billingService.markPaid(event.id).subscribe({
      next: (updated) => {
        const idx = this.events.findIndex((e) => e.id === updated.id);
        if (idx !== -1) {
          this.events = [
            ...this.events.slice(0, idx),
            updated,
            ...this.events.slice(idx + 1)
          ];
        }
        this.markingPaidId = null;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Event marqu\xE9 comme pay\xE9.",
          life: 3e3
        });
      },
      error: (err) => {
        this.markingPaidId = null;
        this.showApiError(err, "Impossible de marquer comme pay\xE9.");
      }
    });
  }
  getStatusConfig(status) {
    return BILLING_STATUS[status] ?? { label: status, severity: "secondary" };
  }
  getEventTypeLabel(type) {
    return EVENT_TYPE_LABELS[type] ?? type;
  }
  forfaitBadgeClass(slug) {
    return {
      "bg-gray-100 text-gray-700": slug === "starter",
      "bg-blue-100 text-blue-700": slug === "standard",
      "bg-yellow-100 text-yellow-700": slug === "premium",
      "bg-gray-100 text-gray-600": !slug || !["starter", "standard", "premium"].includes(slug)
    };
  }
  formatAmount(amount) {
    const n = parseFloat(amount);
    if (isNaN(n))
      return amount;
    return new Intl.NumberFormat("fr-GN", { style: "currency", currency: "GNF", minimumFractionDigits: 0 }).format(n);
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "-";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  get totalPending() {
    return this.events.filter((e) => e.status === "pending").reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }
  get totalPaid() {
    return this.events.filter((e) => e.status === "paid").reduce((sum, e) => sum + parseFloat(e.amount), 0);
  }
  get organisationOptions() {
    return [
      { label: "Toutes les organisations", value: null },
      ...this.organisations.map((o) => ({ label: `${o.nom} (${o.code})`, value: o.id }))
    ];
  }
  showApiError(error, fallback) {
    const detail = typeof error?.error?.message === "string" && error.error.message || typeof error?.message === "string" && error.message || fallback;
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail,
      life: 5e3
    });
  }
  static \u0275fac = function BillingEvents_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BillingEvents)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BillingEvents, selectors: [["app-billing-events"]], decls: 26, vars: 19, consts: [["noForfait", ""], [1, "card"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "gap-3", "flex-wrap"], [1, "m-0", "text-2xl", "font-semibold"], [1, "m-0", "text-color-secondary"], [1, "flex", "gap-3", "mb-4", "flex-wrap"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Toutes les organisations", 3, "ngModelChange", "onChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", 3, "ngModelChange", "onChange", "options", "ngModel"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les forfaits", 3, "ngModelChange", "onChange", "options", "ngModel"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "gap-4", "mt-4", "pt-4", "border-top-1", "surface-border", "flex-wrap"], [1, "flex", "align-items-center", "gap-2"], [1, "text-color-secondary"], [1, "font-bold", "text-orange-500"], [1, "font-bold", "text-green-500"], [1, "text-right"], [1, "font-semibold"], [1, "text-color-secondary", "text-sm", "ml-1"], [4, "ngIf", "ngIfElse"], [1, "text-sm"], [3, "value", "severity"], ["pButton", "", "type", "button", "label", "Marquer pay\xE9", "icon", "pi pi-check", "class", "p-button-success p-button-sm p-button-outlined", 3, "loading", "disabled", "click", 4, "ngIf"], [1, "border-round", "px-2", "text-xs", "font-semibold", "white-space-nowrap", 2, "padding-top", "3px", "padding-bottom", "3px", 3, "ngClass"], ["pButton", "", "type", "button", "label", "Marquer pay\xE9", "icon", "pi pi-check", 1, "p-button-success", "p-button-sm", "p-button-outlined", 3, "click", "loading", "disabled"], ["colspan", "9", 1, "text-center", "text-color-secondary", "py-5"]], template: function BillingEvents_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
      \u0275\u0275text(4, "Facturation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Events de facturation par organisation.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 5)(8, "p-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function BillingEvents_Template_p_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterOrganisationId, $event) || (ctx.filterOrganisationId = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function BillingEvents_Template_p_select_onChange_8_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function BillingEvents_Template_p_select_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function BillingEvents_Template_p_select_onChange_9_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function BillingEvents_Template_p_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.filterForfait, $event) || (ctx.filterForfait = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function BillingEvents_Template_p_select_onChange_10_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p-table", 9);
      \u0275\u0275template(12, BillingEvents_ng_template_12_Template, 19, 0, "ng-template", 10)(13, BillingEvents_ng_template_13_Template, 25, 12, "ng-template", 11)(14, BillingEvents_ng_template_14_Template, 3, 0, "ng-template", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "span", 15);
      \u0275\u0275text(18, "Total en attente :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 16);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 14)(22, "span", 15);
      \u0275\u0275text(23, "Total pay\xE9 :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c0));
      \u0275\u0275property("options", ctx.organisationOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterOrganisationId);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c1));
      \u0275\u0275property("options", ctx.statusOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c2));
      \u0275\u0275property("options", ctx.forfaitOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.filterForfait);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.events)("loading", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.totalPending.toString()));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.formatAmount(ctx.totalPaid.toString()));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, NgControlStatus, NgModel, TableModule, Table, PrimeTemplate, ButtonModule, ButtonDirective, SelectModule, Select, TagModule, Tag, TooltipModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BillingEvents, [{
    type: Component,
    args: [{ selector: "app-billing-events", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      SelectModule,
      TagModule,
      TooltipModule
    ], template: `<div class="card">
  <!-- En-t\xEAte -->
  <div class="flex align-items-center justify-content-between mb-4 gap-3 flex-wrap">
    <div>
      <h2 class="m-0 text-2xl font-semibold">Facturation</h2>
      <p class="m-0 text-color-secondary">Events de facturation par organisation.</p>
    </div>
  </div>

  <!-- Filtres -->
  <div class="flex gap-3 mb-4 flex-wrap">
    <p-select
      [options]="organisationOptions"
      [(ngModel)]="filterOrganisationId"
      optionLabel="label"
      optionValue="value"
      placeholder="Toutes les organisations"
      [style]="{ minWidth: '220px' }"
      (onChange)="onFilterChange()"
    />
    <p-select
      [options]="statusOptions"
      [(ngModel)]="filterStatus"
      optionLabel="label"
      optionValue="value"
      placeholder="Tous les statuts"
      [style]="{ minWidth: '180px' }"
      (onChange)="onFilterChange()"
    />
    <p-select
      [options]="forfaitOptions"
      [(ngModel)]="filterForfait"
      optionLabel="label"
      optionValue="value"
      placeholder="Tous les forfaits"
      [style]="{ minWidth: '170px' }"
      (onChange)="onFilterChange()"
    />
  </div>

  <!-- Tableau -->
  <p-table [value]="events" [loading]="loading" dataKey="id" responsiveLayout="scroll">
    <ng-template pTemplate="header">
      <tr>
        <th>Organisation</th>
        <th>Forfait</th>
        <th>Utilisateur</th>
        <th>R\xE9f. user</th>
        <th>Type d'event</th>
        <th>Montant</th>
        <th>Statut</th>
        <th>Date</th>
        <th class="text-right">Actions</th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-event>
      <tr>
        <td>
          <span class="font-semibold">{{ event.organisation?.nom }}</span>
          <span class="text-color-secondary text-sm ml-1">({{ event.organisation?.code }})</span>
        </td>
        <td>
          <ng-container *ngIf="event.organisation?.forfait; else noForfait">
            <span
              class="border-round px-2 text-xs font-semibold white-space-nowrap"
              style="padding-top: 3px; padding-bottom: 3px;"
              [ngClass]="forfaitBadgeClass(event.organisation?.forfait?.slug)"
            >{{ event.organisation?.forfait?.nom }}</span>
          </ng-container>
          <ng-template #noForfait>
            <span class="text-color-secondary">\u2014</span>
          </ng-template>
        </td>
        <td>{{ event.user?.nom_complet }}</td>
        <td>
          <code class="text-sm">{{ event.user?.reference }}</code>
        </td>
        <td>{{ getEventTypeLabel(event.event_type) }}</td>
        <td class="font-semibold">{{ formatAmount(event.amount) }}</td>
        <td>
          <p-tag
            [value]="getStatusConfig(event.status).label"
            [severity]="getStatusConfig(event.status).severity"
          />
        </td>
        <td>{{ formatDate(event.occurred_at) }}</td>
        <td class="text-right">
          <button
            *ngIf="canMarkPaid(event)"
            pButton
            type="button"
            label="Marquer pay\xE9"
            icon="pi pi-check"
            class="p-button-success p-button-sm p-button-outlined"
            [loading]="markingPaidId === event.id"
            [disabled]="markingPaidId !== null"
            (click)="markPaid(event)"
          ></button>
        </td>
      </tr>
    </ng-template>

    <ng-template pTemplate="emptymessage">
      <tr>
        <td colspan="9" class="text-center text-color-secondary py-5">
          Aucun event de facturation trouv\xE9.
        </td>
      </tr>
    </ng-template>
  </p-table>

  <!-- Totaux -->
  <div class="flex gap-4 mt-4 pt-4 border-top-1 surface-border flex-wrap">
    <div class="flex align-items-center gap-2">
      <span class="text-color-secondary">Total en attente :</span>
      <span class="font-bold text-orange-500">{{ formatAmount(totalPending.toString()) }}</span>
    </div>
    <div class="flex align-items-center gap-2">
      <span class="text-color-secondary">Total pay\xE9 :</span>
      <span class="font-bold text-green-500">{{ formatAmount(totalPaid.toString()) }}</span>
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BillingEvents, { className: "BillingEvents", filePath: "src/app/pages/billing/billing-events/billing-events.ts", lineNumber: 42 });
})();

// src/app/pages/billing/billing.routes.ts
var billing_routes_default = [
  {
    path: "",
    component: BillingEvents,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "billing", roles: ["super_admin", "super-admin"] }
  }
];
export {
  billing_routes_default as default
};
//# sourceMappingURL=chunk-4LAQMW66.js.map
