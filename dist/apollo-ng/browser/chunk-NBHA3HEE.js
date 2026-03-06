import {
  CommissionDetailDialog,
  CommissionVenteService
} from "./chunk-CDL4T3WE.js";
import {
  Divider,
  DividerModule
} from "./chunk-L7MB6DHN.js";
import {
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-MKX7CTMT.js";
import "./chunk-BZYMN2OQ.js";
import "./chunk-PZSC3TY3.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import "./chunk-2BDEB7LG.js";
import "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
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
import "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-7GQXFRTV.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
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
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-CSVYKJ4F.js";
import {
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
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  computed,
  forkJoin,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
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
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commissions/comission-vente-liste2/comission-vente-liste2.ts
var _c0 = () => [10, 20, 50];
var _c1 = () => [1, 2, 3, 4, 5];
var _c2 = () => [1, 2, 3, 4, 5, 6, 7];
function ComissionVenteListe2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 24)(1, "p-skeleton", 25);
  }
}
function ComissionVenteListe2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275element(3, "i", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatMontant((tmp_6_0 = ctx_r1.stats()) == null ? null : tmp_6_0.eligibleMontant));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_7_0 = ctx_r1.stats()) == null ? null : tmp_7_0.eligibleCount, " \xE9ligible(s) ");
  }
}
function ComissionVenteListe2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 24)(1, "p-skeleton", 25);
  }
}
function ComissionVenteListe2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 29);
    \u0275\u0275element(3, "i", 30);
    \u0275\u0275text(4, " par commission ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatMontant((tmp_6_0 = ctx_r1.stats()) == null ? null : tmp_6_0.moyenneCommission));
  }
}
function ComissionVenteListe2_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 24)(1, "p-skeleton", 25);
  }
}
function ComissionVenteListe2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275element(3, "i", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.stats()) == null ? null : tmp_6_0.enAttenteCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" + ", (tmp_7_0 = ctx_r1.stats()) == null ? null : tmp_7_0.partiellementCount, " partielles ");
  }
}
function ComissionVenteListe2_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 24)(1, "p-skeleton", 25);
  }
}
function ComissionVenteListe2_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 27);
    \u0275\u0275element(3, "i", 33);
    \u0275\u0275text(4, " sold\xE9es ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r1.stats()) == null ? null : tmp_6_0.verseeCount);
  }
}
function ComissionVenteListe2_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Commissions r\xE9centes");
    \u0275\u0275elementEnd();
  }
}
function ComissionVenteListe2_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "N\xB0 commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Livreur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "V\xE9hicule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 34);
    \u0275\u0275text(10, "Montant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th");
    \u0275\u0275elementEnd();
  }
}
function ComissionVenteListe2_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("click", function ComissionVenteListe2_ng_template_53_Template_tr_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r4));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "div", 38)(8, "div", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 40);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "td")(13, "div", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "code", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 34)(18, "span", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275element(21, "p-tag", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 45);
    \u0275\u0275listener("click", function ComissionVenteListe2_ng_template_53_Template_td_click_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(23, "p-button", 46);
    \u0275\u0275listener("onClick", function ComissionVenteListe2_ng_template_53_Template_p_button_onClick_23_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(c_r4));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r4.commande == null ? null : c_r4.commande.reference) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(c_r4.eligible_at));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r1.getAvatarColor(c_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getInitials(c_r4), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r4.livreur == null ? null : c_r4.livreur.prenom, " ", c_r4.livreur == null ? null : c_r4.livreur.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((c_r4.vehicule == null ? null : c_r4.vehicule.nom_vehicule) ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.vehicule == null ? null : c_r4.vehicule.immatriculation);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatMontant(c_r4.montant_commission_total));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getStatutLabel(c_r4.statut))("severity", ctx_r1.getStatutSeverity(c_r4.statut));
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComissionVenteListe2_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47)(2, "div", 48);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune commission trouv\xE9e");
    \u0275\u0275elementEnd()()()();
  }
}
function ComissionVenteListe2_ng_template_57_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function ComissionVenteListe2_ng_template_57_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, ComissionVenteListe2_ng_template_57_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c2));
  }
}
function ComissionVenteListe2_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ComissionVenteListe2_ng_template_57_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function ComissionVenteListe2_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commission-detail-dialog", 50);
    \u0275\u0275listener("visibleChange", function ComissionVenteListe2_Conditional_59_Template_app_commission_detail_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.detailVisible.set($event));
    })("onVersementDone", function ComissionVenteListe2_Conditional_59_Template_app_commission_detail_dialog_onVersementDone_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVersementDone());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("commissionId", ctx_r1.selectedCommissionId())("visible", ctx_r1.detailVisible());
  }
}
var ComissionVenteListe2 = class _ComissionVenteListe2 {
  commissionService;
  authService;
  messageService;
  commissions = signal([], ...ngDevMode ? [{ debugName: "commissions" }] : []);
  totalRecords = signal(0, ...ngDevMode ? [{ debugName: "totalRecords" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  perPage = signal(20, ...ngDevMode ? [{ debugName: "perPage" }] : []);
  currentPage = signal(1, ...ngDevMode ? [{ debugName: "currentPage" }] : []);
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  statsLoading = signal(true, ...ngDevMode ? [{ debugName: "statsLoading" }] : []);
  filterStatut = "";
  filterDateDebut = null;
  filterDateFin = null;
  selectedCommissionId = signal(null, ...ngDevMode ? [{ debugName: "selectedCommissionId" }] : []);
  detailVisible = signal(false, ...ngDevMode ? [{ debugName: "detailVisible" }] : []);
  parseFloat = parseFloat;
  statutOptions = [
    { label: "Tous les statuts", value: "" },
    { label: "En attente", value: "en_attente" },
    { label: "\xC9ligible", value: "eligible" },
    { label: "Partiellement vers\xE9e", value: "partiellement_versee" },
    { label: "Vers\xE9e", value: "versee" },
    { label: "Annul\xE9e", value: "annulee" }
  ];
  AVATAR_COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#ef4444",
    "#14b8a6"
  ];
  greeting = computed(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12)
      return "Bonjour";
    if (h < 18)
      return "Bon apr\xE8s-midi";
    return "Bonsoir";
  }, ...ngDevMode ? [{ debugName: "greeting" }] : []);
  userName = computed(() => {
    const user = this.authService.currentUser();
    if (user?.prenom)
      return user.prenom;
    if (user?.nom_complet)
      return user.nom_complet.split(" ")[0];
    return "";
  }, ...ngDevMode ? [{ debugName: "userName" }] : []);
  userInitial = computed(() => this.userName()[0]?.toUpperCase() ?? "?", ...ngDevMode ? [{ debugName: "userInitial" }] : []);
  constructor(commissionService, authService, messageService) {
    this.commissionService = commissionService;
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadStats();
    this.loadCommissions(1);
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
  loadStats() {
    this.statsLoading.set(true);
    forkJoin({
      eligible: this.commissionService.getAll(new HttpParams().set("per_page", "200").set("statut", "eligible")),
      enAttente: this.commissionService.getAll(new HttpParams().set("per_page", "1").set("statut", "en_attente")),
      partiellement: this.commissionService.getAll(new HttpParams().set("per_page", "1").set("statut", "partiellement_versee")),
      versee: this.commissionService.getAll(new HttpParams().set("per_page", "1").set("statut", "versee"))
    }).subscribe({
      next: (r) => {
        const eligibleItems = r.eligible.data?.data ?? [];
        const eligibleMontant = eligibleItems.reduce((sum, c) => sum + parseFloat(c.montant_commission_total), 0);
        const moyenne = eligibleItems.length > 0 ? eligibleMontant / eligibleItems.length : 0;
        this.stats.set({
          eligibleCount: r.eligible.data?.total ?? 0,
          eligibleMontant,
          enAttenteCount: r.enAttente.data?.total ?? 0,
          partiellementCount: r.partiellement.data?.total ?? 0,
          verseeCount: r.versee.data?.total ?? 0,
          moyenneCommission: moyenne
        });
        this.statsLoading.set(false);
      },
      error: () => this.statsLoading.set(false)
    });
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
    this.loadStats();
  }
  getStatutLabel(s) {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }
  getStatutSeverity(s) {
    return STATUT_COMMISSION_SEVERITY[s] ?? "info";
  }
  getInitials(c) {
    const p = c.livreur?.prenom?.[0] ?? "";
    const n = c.livreur?.nom?.[0] ?? "";
    return (p + n).toUpperCase() || "?";
  }
  getAvatarColor(c) {
    const key = (c.livreur?.prenom ?? "") + (c.livreur?.nom ?? "");
    let hash = 0;
    for (let i = 0; i < key.length; i++)
      hash = key.charCodeAt(i) + ((hash << 5) - hash);
    return this.AVATAR_COLORS[Math.abs(hash) % this.AVATAR_COLORS.length];
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
      month: "short",
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
  static \u0275fac = function ComissionVenteListe2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComissionVenteListe2)(\u0275\u0275directiveInject(CommissionVenteService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComissionVenteListe2, selectors: [["app-comission-vente-liste2"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 60, vars: 25, consts: [["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], [1, "card", "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "m-0"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-bold", "text-sm", "select-none", 2, "background", "var(--p-primary-color)"], [1, "flex", "flex-wrap", "justify-between", "items-end", "gap-3", "mb-5"], [1, "font-semibold", "text-lg"], [1, "flex", "flex-wrap", "items-end", "gap-3"], [1, "flex", "flex-col", "gap-1"], [1, "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Tous les statuts", "styleClass", "w-48", 3, "ngModelChange", "onChange", "ngModel", "options"], ["dateFormat", "dd/mm/yy", "placeholder", "Du\u2026", "inputStyleClass", "w-32", 3, "ngModelChange", "ngModel", "showClear"], ["dateFormat", "dd/mm/yy", "placeholder", "Au\u2026", "inputStyleClass", "w-32", 3, "ngModelChange", "ngModel", "showClear"], [1, "flex", "gap-2", "pb-0.5"], ["label", "Filtrer", "icon", "pi pi-filter", 3, "onClick"], ["label", "R\xE9initialiser", "icon", "pi pi-filter-slash", "severity", "secondary", 3, "onClick", "outlined"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-6", "mb-8"], [1, "text-surface-500", "text-sm", "m-0", "mb-1"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "{first} / {last} de {totalRecords}", "styleClass", "p-datatable-sm", 3, "onLazyLoad", "value", "loading", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "rowHover", "showCurrentPageReport"], [3, "commissionId", "visible"], ["height", "2rem", "styleClass", "mb-2"], ["height", "1.25rem", "width", "60%"], [1, "text-2xl", "font-bold", "mb-2"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-green-100", "text-green-700"], [1, "pi", "pi-arrow-up", "text-[10px]"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-blue-100", "text-blue-700"], [1, "pi", "pi-percentage", "text-[10px]"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-yellow-100", "text-yellow-700"], [1, "pi", "pi-clock", "text-[10px]"], [1, "pi", "pi-check", "text-[10px]"], [1, "text-right"], [1, "cursor-pointer", 3, "click"], [1, "font-mono", "text-sm", "font-semibold"], [1, "text-sm", "text-surface-500"], [1, "flex", "items-center", "gap-2"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-white", "shrink-0"], [1, "text-sm"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-surface-400"], [1, "font-semibold", "text-primary"], [3, "value", "severity"], [3, "click"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Voir le d\xE9tail", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["colspan", "7", 1, "text-center", "py-10"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [1, "pi", "pi-percentage", "text-4xl"], [3, "visibleChange", "onVersementDone", "commissionId", "visible"]], template: function ComissionVenteListe2_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "h2", 7);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 8);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 9)(8, "span", 10);
      \u0275\u0275text(9, "Aper\xE7u");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 11)(11, "div", 12)(12, "label", 13);
      \u0275\u0275text(13, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ComissionVenteListe2_Template_p_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterStatut, $event) || (ctx.filterStatut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onChange", function ComissionVenteListe2_Template_p_select_onChange_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "label", 13);
      \u0275\u0275text(17, "Date d\xE9but");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-datepicker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ComissionVenteListe2_Template_p_datepicker_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterDateDebut, $event) || (ctx.filterDateDebut = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
      \u0275\u0275text(21, "Date fin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p-datepicker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ComissionVenteListe2_Template_p_datepicker_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.filterDateFin, $event) || (ctx.filterDateFin = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 17)(24, "p-button", 18);
      \u0275\u0275listener("onClick", function ComissionVenteListe2_Template_p_button_onClick_24_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.applyFilters());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p-button", 19);
      \u0275\u0275listener("onClick", function ComissionVenteListe2_Template_p_button_onClick_25_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetFilters());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 20)(27, "div")(28, "p", 21);
      \u0275\u0275text(29, "Montant \xE9ligible");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, ComissionVenteListe2_Conditional_30_Template, 2, 0)(31, ComissionVenteListe2_Conditional_31_Template, 5, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "p", 21);
      \u0275\u0275text(34, "Commission moyenne");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(35, ComissionVenteListe2_Conditional_35_Template, 2, 0)(36, ComissionVenteListe2_Conditional_36_Template, 5, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div")(38, "p", 21);
      \u0275\u0275text(39, "En attente");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, ComissionVenteListe2_Conditional_40_Template, 2, 0)(41, ComissionVenteListe2_Conditional_41_Template, 5, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "p", 21);
      \u0275\u0275text(44, "Vers\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(45, ComissionVenteListe2_Conditional_45_Template, 2, 0)(46, ComissionVenteListe2_Conditional_46_Template, 5, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "p-divider");
      \u0275\u0275elementStart(48, "p-table", 22);
      \u0275\u0275listener("onLazyLoad", function ComissionVenteListe2_Template_p_table_onLazyLoad_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275template(49, ComissionVenteListe2_ng_template_49_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(51, ComissionVenteListe2_ng_template_51_Template, 14, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(53, ComissionVenteListe2_ng_template_53_Template, 24, 14, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(55, ComissionVenteListe2_ng_template_55_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(57, ComissionVenteListe2_ng_template_57_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(59, ComissionVenteListe2_Conditional_59_Template, 1, 2, "app-commission-detail-dialog", 23);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.greeting(), ", ", ctx.userName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.userInitial(), " ");
      \u0275\u0275advance(8);
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
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.statsLoading() ? 30 : 31);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.statsLoading() ? 35 : 36);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.statsLoading() ? 40 : 41);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.statsLoading() ? 45 : 46);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.commissions())("loading", ctx.loading())("lazy", true)("paginator", true)("rows", ctx.perPage())("totalRecords", ctx.totalRecords())("rowsPerPageOptions", \u0275\u0275pureFunction0(24, _c0))("rowHover", true)("showCurrentPageReport", true);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.selectedCommissionId() ? 59 : -1);
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
    DividerModule,
    Divider,
    CommissionDetailDialog
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComissionVenteListe2, [{
    type: Component,
    args: [{ selector: "app-comission-vente-liste2", standalone: true, imports: [
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
      DividerModule,
      CommissionDetailDialog
    ], providers: [MessageService], template: `<p-toast />\r
\r
<div class="card p-6">\r
\r
  <!-- \u2500\u2500 En-t\xEAte : salutation + avatar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="flex justify-between items-center mb-6">\r
    <h2 class="text-2xl font-bold m-0">{{ greeting() }}, {{ userName() }}</h2>\r
    <div\r
      class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm select-none"\r
      style="background: var(--p-primary-color)"\r
    >\r
      {{ userInitial() }}\r
    </div>\r
  </div> \r
\r
  <!-- \u2500\u2500 Aper\xE7u + tous les filtres \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="flex flex-wrap justify-between items-end gap-3 mb-5">\r
    <span class="font-semibold text-lg">Aper\xE7u</span>\r
\r
    <div class="flex flex-wrap items-end gap-3">\r
\r
      <div class="flex flex-col gap-1">\r
        <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Statut</label>\r
        <p-select\r
          [(ngModel)]="filterStatut"\r
          [options]="statutOptions"\r
          optionLabel="label"\r
          optionValue="value"\r
          placeholder="Tous les statuts"\r
          styleClass="w-48"\r
          (onChange)="applyFilters()"\r
        />\r
      </div>\r
\r
      <div class="flex flex-col gap-1">\r
        <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Date d\xE9but</label>\r
        <p-datepicker\r
          [(ngModel)]="filterDateDebut"\r
          dateFormat="dd/mm/yy"\r
          [showClear]="true"\r
          placeholder="Du\u2026"\r
          inputStyleClass="w-32"\r
        />\r
      </div>\r
\r
      <div class="flex flex-col gap-1">\r
        <label class="text-xs font-semibold text-surface-400 uppercase tracking-wide">Date fin</label>\r
        <p-datepicker\r
          [(ngModel)]="filterDateFin"\r
          dateFormat="dd/mm/yy"\r
          [showClear]="true"\r
          placeholder="Au\u2026"\r
          inputStyleClass="w-32"\r
        />\r
      </div>\r
\r
      <div class="flex gap-2 pb-0.5">\r
        <p-button label="Filtrer" icon="pi pi-filter" (onClick)="applyFilters()" />\r
        <p-button\r
          label="R\xE9initialiser"\r
          icon="pi pi-filter-slash"\r
          [outlined]="true"\r
          severity="secondary"\r
          (onClick)="resetFilters()"\r
        />\r
      </div>\r
\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 4 widgets statistiques \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">\r
\r
    <!-- Montant \xE9ligible -->\r
    <div>\r
      <p class="text-surface-500 text-sm m-0 mb-1">Montant \xE9ligible</p>\r
      @if (statsLoading()) {\r
        <p-skeleton height="2rem" styleClass="mb-2" />\r
        <p-skeleton height="1.25rem" width="60%" />\r
      } @else {\r
        <div class="text-2xl font-bold mb-2">{{ formatMontant(stats()?.eligibleMontant) }}</div>\r
        <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">\r
          <i class="pi pi-arrow-up text-[10px]"></i>\r
          {{ stats()?.eligibleCount }} \xE9ligible(s)\r
        </span>\r
      }\r
    </div>\r
\r
    <!-- Commission moyenne -->\r
    <div>\r
      <p class="text-surface-500 text-sm m-0 mb-1">Commission moyenne</p>\r
      @if (statsLoading()) {\r
        <p-skeleton height="2rem" styleClass="mb-2" />\r
        <p-skeleton height="1.25rem" width="60%" />\r
      } @else {\r
        <div class="text-2xl font-bold mb-2">{{ formatMontant(stats()?.moyenneCommission) }}</div>\r
        <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">\r
          <i class="pi pi-percentage text-[10px]"></i>\r
          par commission\r
        </span>\r
      }\r
    </div>\r
\r
    <!-- En attente -->\r
    <div>\r
      <p class="text-surface-500 text-sm m-0 mb-1">En attente</p>\r
      @if (statsLoading()) {\r
        <p-skeleton height="2rem" styleClass="mb-2" />\r
        <p-skeleton height="1.25rem" width="60%" />\r
      } @else {\r
        <div class="text-2xl font-bold mb-2">{{ stats()?.enAttenteCount }}</div>\r
        <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">\r
          <i class="pi pi-clock text-[10px]"></i>\r
          + {{ stats()?.partiellementCount }} partielles\r
        </span>\r
      }\r
    </div>\r
\r
    <!-- Vers\xE9es -->\r
    <div>\r
      <p class="text-surface-500 text-sm m-0 mb-1">Vers\xE9es</p>\r
      @if (statsLoading()) {\r
        <p-skeleton height="2rem" styleClass="mb-2" />\r
        <p-skeleton height="1.25rem" width="60%" />\r
      } @else {\r
        <div class="text-2xl font-bold mb-2">{{ stats()?.verseeCount }}</div>\r
        <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">\r
          <i class="pi pi-check text-[10px]"></i>\r
          sold\xE9es\r
        </span>\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <p-divider />\r
\r
  <!-- \u2500\u2500 Table commissions r\xE9centes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <p-table\r
    [value]="commissions()"\r
    [loading]="loading()"\r
    [lazy]="true"\r
    (onLazyLoad)="onPageChange($event)"\r
    [paginator]="true"\r
    [rows]="perPage()"\r
    [totalRecords]="totalRecords()"\r
    [rowsPerPageOptions]="[10, 20, 50]"\r
    [rowHover]="true"\r
    responsiveLayout="scroll"\r
    currentPageReportTemplate="{first} / {last} de {totalRecords}"\r
    [showCurrentPageReport]="true"\r
    styleClass="p-datatable-sm"\r
  >\r
\r
    <ng-template #caption>\r
      <span class="font-semibold text-lg">Commissions r\xE9centes</span>\r
    </ng-template>\r
\r
    <ng-template #header>\r
      <tr>\r
        <th>N\xB0 commande</th>\r
        <th>Date</th>\r
        <th>Livreur</th>\r
        <th>V\xE9hicule</th>\r
        <th class="text-right">Montant</th>\r
        <th>Statut</th>\r
        <th></th>\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #body let-c>\r
      <tr class="cursor-pointer" (click)="openDetail(c)">\r
\r
        <td>\r
          <span class="font-mono text-sm font-semibold">{{ c.commande?.reference ?? '\u2014' }}</span>\r
        </td>\r
\r
        <td class="text-sm text-surface-500">{{ formatDate(c.eligible_at) }}</td>\r
\r
        <td>\r
          <div class="flex items-center gap-2">\r
            <div\r
              class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"\r
              [style.background]="getAvatarColor(c)"\r
            >\r
              {{ getInitials(c) }}\r
            </div>\r
            <span class="text-sm">{{ c.livreur?.prenom }} {{ c.livreur?.nom }}</span>\r
          </div>\r
        </td>\r
\r
        <td>\r
          <div class="text-sm font-medium">{{ c.vehicule?.nom_vehicule ?? '\u2014' }}</div>\r
          <code class="text-xs text-surface-400">{{ c.vehicule?.immatriculation }}</code>\r
        </td>\r
\r
        <td class="text-right">\r
          <span class="font-semibold text-primary">{{ formatMontant(c.montant_commission_total) }}</span>\r
        </td>\r
\r
        <td>\r
          <p-tag [value]="getStatutLabel(c.statut)" [severity]="getStatutSeverity(c.statut)" />\r
        </td>\r
\r
        <td (click)="$event.stopPropagation()">\r
          <p-button\r
            icon="pi pi-eye"\r
            severity="info"\r
            [text]="true"\r
            [rounded]="true"\r
            pTooltip="Voir le d\xE9tail"\r
            tooltipPosition="top"\r
            (onClick)="openDetail(c)"\r
          />\r
        </td>\r
\r
      </tr>\r
    </ng-template>\r
\r
    <ng-template #emptymessage>\r
      <tr>\r
        <td colspan="7" class="text-center py-10">\r
          <div class="flex flex-col items-center gap-3 text-surface-500">\r
            <i class="pi pi-percentage text-4xl"></i>\r
            <span>Aucune commission trouv\xE9e</span>\r
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
\r
  </p-table>\r
\r
</div>\r
\r
@if (selectedCommissionId()) {\r
  <app-commission-detail-dialog\r
    [commissionId]="selectedCommissionId()!"\r
    [visible]="detailVisible()"\r
    (visibleChange)="detailVisible.set($event)"\r
    (onVersementDone)="onVersementDone()"\r
  />\r
}\r
` }]
  }], () => [{ type: CommissionVenteService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComissionVenteListe2, { className: "ComissionVenteListe2", filePath: "src/app/pages/ventes/commissions/comission-vente-liste2/comission-vente-liste2.ts", lineNumber: 57 });
})();
export {
  ComissionVenteListe2
};
//# sourceMappingURL=chunk-NBHA3HEE.js.map
