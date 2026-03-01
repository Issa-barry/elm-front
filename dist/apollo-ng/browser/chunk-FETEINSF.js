import {
  Card,
  CardModule
} from "./chunk-DTF4HQA7.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-WR7L22A7.js";
import {
  FactureLivraisonService
} from "./chunk-F5YSZB2F.js";
import {
  MODE_PAIEMENT_OPTIONS
} from "./chunk-VF5NWIYJ.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-UWHPUST5.js";
import {
  Dialog,
  DialogModule
} from "./chunk-P3S4PXJW.js";
import {
  AuthService
} from "./chunk-CL3X32VF.js";
import "./chunk-N3I2MPIX.js";
import "./chunk-4WV22ZEZ.js";
import "./chunk-C5GRAO6X.js";
import "./chunk-CSVYKJ4F.js";
import {
  Toast,
  ToastModule
} from "./chunk-K65U6EBI.js";
import "./chunk-A7I32VT2.js";
import {
  SortIcon,
  SortableColumn,
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
  TagModule
} from "./chunk-FMK3YN5M.js";
import {
  DatePicker,
  DatePickerModule
} from "./chunk-DBXKSYQP.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-D4DB7G5Q.js";
import "./chunk-UQFVREV6.js";
import "./chunk-J7PQPFQ2.js";
import "./chunk-JDFDUAZW.js";
import "./chunk-GNS5B2OF.js";
import "./chunk-HXWKNUGV.js";
import "./chunk-NGVVFXIQ.js";
import "./chunk-7U237DEN.js";
import {
  Select,
  SelectModule
} from "./chunk-2UOA5RIX.js";
import "./chunk-GSLAPXC6.js";
import "./chunk-RNBHJ3IS.js";
import "./chunk-XCVSS3ID.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-URQMWJE6.js";
import {
  InputText,
  InputTextModule
} from "./chunk-DQKWWXZT.js";
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
} from "./chunk-FGSFU6DI.js";
import "./chunk-55R5VFNU.js";
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
  CommonModule,
  NgClass
} from "./chunk-AR53T6NL.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  computed,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
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
} from "./chunk-SKXAAURP.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/encaissement-vente-liste/encaissement-vente-liste.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["mode_paiement", "note"];
var _c2 = () => ({ width: "30rem" });
var _c3 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _c4 = () => [1, 2, 3];
var _c5 = () => [1, 2, 3, 4, 5];
function EncaissementVenteListe_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 33);
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2, " Encaissements vente ");
    \u0275\u0275elementEnd();
  }
}
function EncaissementVenteListe_ng_template_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275listener("onClick", function EncaissementVenteListe_ng_template_25_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function EncaissementVenteListe_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EncaissementVenteListe_ng_template_25_Conditional_0_Template, 1, 0, "p-button", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.canCreate ? 0 : -1);
  }
}
function EncaissementVenteListe_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "p-iconfield");
    \u0275\u0275element(2, "p-inputicon", 38);
    \u0275\u0275elementStart(3, "input", 39);
    \u0275\u0275listener("input", function EncaissementVenteListe_ng_template_29_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r5 = \u0275\u0275reference(28);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r5, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function EncaissementVenteListe_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 40);
    \u0275\u0275text(2, " Date ");
    \u0275\u0275element(3, "p-sortIcon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 42);
    \u0275\u0275text(5, " Montant ");
    \u0275\u0275element(6, "p-sortIcon", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 44);
    \u0275\u0275text(8, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 45);
    \u0275\u0275text(10, "Facture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 44);
    \u0275\u0275text(12, "Notes");
    \u0275\u0275elementEnd()();
  }
}
function EncaissementVenteListe_ng_template_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const e_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" #", e_r6.facture_vente_id, " ");
  }
}
function EncaissementVenteListe_ng_template_33_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function EncaissementVenteListe_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 49);
    \u0275\u0275conditionalCreate(9, EncaissementVenteListe_ng_template_33_Conditional_9_Template, 1, 1)(10, EncaissementVenteListe_ng_template_33_Conditional_10_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 49);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateDisplay(e_r6.date_encaissement));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(e_r6.montant));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.getModePaiementLabel(e_r6.mode_paiement), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(e_r6.facture_vente_id ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r6.note || "\u2014");
  }
}
function EncaissementVenteListe_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "Aucun encaissement enregistr\xE9.");
    \u0275\u0275elementEnd()()();
  }
}
function EncaissementVenteListe_ng_template_37_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function EncaissementVenteListe_ng_template_37_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, EncaissementVenteListe_ng_template_37_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c5));
  }
}
function EncaissementVenteListe_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, EncaissementVenteListe_ng_template_37_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c4));
  }
}
function EncaissementVenteListe_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, "Montant requis (> 0).");
    \u0275\u0275elementEnd();
  }
}
function EncaissementVenteListe_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1, "ID facture requis.");
    \u0275\u0275elementEnd();
  }
}
function EncaissementVenteListe_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "p-button", 54);
    \u0275\u0275listener("onClick", function EncaissementVenteListe_ng_template_74_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSaveEncaissement());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.saving);
  }
}
var EncaissementVenteListe = class _EncaissementVenteListe {
  fb;
  factureService;
  authService;
  messageService;
  encaissements = signal([], ...ngDevMode ? [{ debugName: "encaissements" }] : []);
  loading = false;
  saving = false;
  dialogVisible = false;
  createForm;
  modePaiementOptions = MODE_PAIEMENT_OPTIONS;
  canCreate = false;
  totalEncaisse = computed(() => this.encaissements().reduce((sum, e) => sum + parseFloat(String(e.montant ?? 0)), 0), ...ngDevMode ? [{ debugName: "totalEncaisse" }] : []);
  constructor(fb, factureService, authService, messageService) {
    this.fb = fb;
    this.factureService = factureService;
    this.authService = authService;
    this.messageService = messageService;
    this.canCreate = this.authService.hasPermission("encaissements.create");
  }
  ngOnInit() {
    this.initForm();
    this.loadEncaissements();
  }
  initForm() {
    this.createForm = this.fb.group({
      facture_vente_id: [null, [Validators.required, Validators.min(1)]],
      montant: [null, [Validators.required, Validators.min(1)]],
      mode_paiement: ["especes", Validators.required],
      date_encaissement: [/* @__PURE__ */ new Date(), Validators.required],
      note: [""]
    });
  }
  loadEncaissements() {
    this.loading = true;
    this.factureService.getEncaissements().subscribe({
      next: (resp) => {
        this.encaissements.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "charger les encaissements");
      }
    });
  }
  openCreateDialog() {
    this.initForm();
    this.dialogVisible = true;
  }
  onSaveEncaissement() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.saving)
      return;
    const v = this.createForm.value;
    const dto = {
      facture_vente_id: v.facture_vente_id,
      montant: v.montant,
      mode_paiement: v.mode_paiement,
      date_encaissement: this.formatDate(v.date_encaissement),
      note: v.note || void 0
    };
    this.saving = true;
    this.factureService.createEncaissement(dto).subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Encaissement enregistr\xE9.",
          life: 3e3
        });
        this.loadEncaissements();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "enregistrer l'encaissement");
      }
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  isInvalid(name) {
    const c = this.createForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  formatDate(d) {
    if (!d)
      return "";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toISOString().split("T")[0];
  }
  formatDateDisplay(d) {
    if (!d)
      return "\u2014";
    return new Date(d).toLocaleDateString("fr-FR");
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  getModePaiementLabel(mode) {
    return MODE_PAIEMENT_OPTIONS.find((m) => m.value === mode)?.label ?? mode;
  }
  showApiError(err, action) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat();
      msgs.forEach((m) => this.messageService.add({ severity: "error", summary: "Erreur de validation", detail: m, life: 5e3 }));
      return;
    }
    const summaryMap = {
      401: "Session expir\xE9e",
      403: "Acc\xE8s refus\xE9",
      404: "Introuvable",
      409: "Conflit",
      0: "Serveur inaccessible"
    };
    const detailMap = {
      401: "Votre session a expir\xE9. Veuillez vous reconnecter.",
      403: `Vous n'avez pas la permission de ${action}.`,
      404: "La ressource demand\xE9e est introuvable.",
      0: "Impossible de joindre le serveur. V\xE9rifiez votre connexion r\xE9seau."
    };
    this.messageService.add({
      severity: err.status === 409 ? "warn" : "error",
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ""}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5e3
    });
  }
  static \u0275fac = function EncaissementVenteListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EncaissementVenteListe)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FactureLivraisonService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EncaissementVenteListe, selectors: [["app-encaissement-vente-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 76, vars: 31, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], ["footer", ""], [1, "flex", "flex-col", "gap-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "px-0"], [1, "flex", "align-items-center", "gap-3"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "text-green-700", "border-circle", 2, "width", "3rem", "height", "3rem"], [1, "pi", "pi-wallet", "text-xl"], [1, "text-color-secondary", "text-sm", "m-0"], [1, "text-2xl", "font-bold", "text-green-600", "m-0"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "text-blue-700", "border-circle", 2, "width", "3rem", "height", "3rem"], [1, "pi", "pi-list", "text-xl"], [1, "text-2xl", "font-bold", "m-0"], [1, "card"], ["styleClass", "mb-4"], ["styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", "currentPageReportTemplate", "{first} \xE0 {last} sur {totalRecords} encaissements", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields", "showCurrentPageReport"], ["header", "Nouvel encaissement", 3, "visibleChange", "visible", "modal", "draggable"], ["novalidate", "", 3, "formGroup"], [1, "flex", "flex-col", "gap-1"], [1, "font-medium", "text-sm"], [1, "text-red-500"], ["formControlName", "montant", "suffix", " GNF", "styleClass", "w-full", 3, "min", "useGrouping", "ngClass"], ["formControlName", "mode_paiement", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["formControlName", "date_encaissement", "dateFormat", "dd/mm/yy", "styleClass", "w-full", 3, "showIcon"], ["formControlName", "facture_vente_id", "placeholder", "ID de la facture", "styleClass", "w-full", 3, "useGrouping", "ngClass"], [1, "text-color-secondary"], ["pInputText", "", "formControlName", "note", "placeholder", "Remarques\u2026"], [1, "text-xl", "font-semibold", "m-0", "flex", "align-items-center", "gap-2"], [1, "pi", "pi-money-bill", "text-primary"], ["label", "Nouvel encaissement", "icon", "pi pi-plus"], ["label", "Nouvel encaissement", "icon", "pi pi-plus", 3, "onClick"], [1, "flex", "justify-end"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher\u2026", 1, "w-full", "md:w-20rem", 3, "input"], ["pSortableColumn", "date_encaissement", 2, "min-width", "10rem"], ["field", "date_encaissement"], ["pSortableColumn", "montant", 2, "min-width", "10rem"], ["field", "montant"], [2, "min-width", "10rem"], [2, "min-width", "8rem"], [1, "text-sm"], [1, "font-semibold", "text-green-600"], [1, "surface-100", "px-2", "py-1", "border-round", "text-sm"], [1, "text-color-secondary", "text-sm"], ["colspan", "5", 1, "text-center", "py-8"], [1, "pi", "pi-inbox", "text-4xl", "mb-3", "block", 2, "opacity", ".25"], [1, "text-color-secondary", "m-0"], [1, "w-full"], ["label", "Enregistrer", "icon", "pi pi-save", "fluid", "", 3, "onClick", "loading"]], template: function EncaissementVenteListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "p-card")(4, "div", 11)(5, "span", 12);
      \u0275\u0275element(6, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div")(8, "p", 14);
      \u0275\u0275text(9, "Total encaiss\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 15);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "p-card")(13, "div", 11)(14, "span", 16);
      \u0275\u0275element(15, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div")(17, "p", 14);
      \u0275\u0275text(18, "Nombre d'encaissements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 18);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(21, "div", 19)(22, "p-toolbar", 20);
      \u0275\u0275template(23, EncaissementVenteListe_ng_template_23_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(25, EncaissementVenteListe_ng_template_25_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p-table", 21, 2);
      \u0275\u0275template(29, EncaissementVenteListe_ng_template_29_Template, 4, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(31, EncaissementVenteListe_ng_template_31_Template, 13, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(33, EncaissementVenteListe_ng_template_33_Template, 13, 5, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(35, EncaissementVenteListe_ng_template_35_Template, 5, 0, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(37, EncaissementVenteListe_ng_template_37_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "p-dialog", 22);
      \u0275\u0275twoWayListener("visibleChange", function EncaissementVenteListe_Template_p_dialog_visibleChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(40, "form", 23)(41, "div", 9)(42, "div", 24)(43, "label", 25);
      \u0275\u0275text(44, "Montant (GNF) ");
      \u0275\u0275elementStart(45, "span", 26);
      \u0275\u0275text(46, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(47, "p-inputNumber", 27);
      \u0275\u0275conditionalCreate(48, EncaissementVenteListe_Conditional_48_Template, 2, 0, "small", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 24)(50, "label", 25);
      \u0275\u0275text(51, "Mode de paiement ");
      \u0275\u0275elementStart(52, "span", 26);
      \u0275\u0275text(53, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(54, "p-select", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 24)(56, "label", 25);
      \u0275\u0275text(57, "Date d'encaissement ");
      \u0275\u0275elementStart(58, "span", 26);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(60, "p-datepicker", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 24)(62, "label", 25);
      \u0275\u0275text(63, "ID facture de vente ");
      \u0275\u0275elementStart(64, "span", 26);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(66, "p-inputNumber", 30);
      \u0275\u0275conditionalCreate(67, EncaissementVenteListe_Conditional_67_Template, 2, 0, "small", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 24)(69, "label", 25);
      \u0275\u0275text(70, "Note ");
      \u0275\u0275elementStart(71, "span", 31);
      \u0275\u0275text(72, "(optionnel)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(73, "input", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(74, EncaissementVenteListe_ng_template_74_Template, 2, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.formatMontant(ctx.totalEncaisse()));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.encaissements().length);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.encaissements())("loading", ctx.loading)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(24, _c0))("globalFilterFields", \u0275\u0275pureFunction0(25, _c1))("showCurrentPageReport", true);
      \u0275\u0275advance(12);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(26, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.createForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("min", 1)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(27, _c3, ctx.isInvalid("montant")));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("montant") ? 48 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.modePaiementOptions);
      \u0275\u0275advance(6);
      \u0275\u0275property("showIcon", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("useGrouping", false)("ngClass", \u0275\u0275pureFunction1(29, _c3, ctx.isInvalid("facture_vente_id")));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("facture_vente_id") ? 67 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
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
    InputNumberModule,
    InputNumber,
    TagModule,
    SkeletonModule,
    Skeleton,
    DialogModule,
    Dialog,
    SelectModule,
    Select,
    DatePickerModule,
    DatePicker,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    CardModule,
    Card
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EncaissementVenteListe, [{
    type: Component,
    args: [{ selector: "app-encaissement-vente-liste", standalone: true, imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      InputNumberModule,
      TagModule,
      SkeletonModule,
      DialogModule,
      SelectModule,
      DatePickerModule,
      InputIconModule,
      IconFieldModule,
      CardModule
    ], providers: [MessageService], template: `<p-toast />

<div class="flex flex-col gap-4">

  <!-- Stats \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-0">
    <p-card>
      <div class="flex align-items-center gap-3">
        <span
          class="flex align-items-center justify-content-center bg-green-100 text-green-700 border-circle"
          style="width:3rem;height:3rem"
        >
          <i class="pi pi-wallet text-xl"></i>
        </span>
        <div>
          <p class="text-color-secondary text-sm m-0">Total encaiss\xE9</p>
          <p class="text-2xl font-bold text-green-600 m-0">{{ formatMontant(totalEncaisse()) }}</p>
        </div>
      </div>
    </p-card>
    <p-card>
      <div class="flex align-items-center gap-3">
        <span
          class="flex align-items-center justify-content-center bg-blue-100 text-blue-700 border-circle"
          style="width:3rem;height:3rem"
        >
          <i class="pi pi-list text-xl"></i>
        </span>
        <div>
          <p class="text-color-secondary text-sm m-0">Nombre d'encaissements</p>
          <p class="text-2xl font-bold m-0">{{ encaissements().length }}</p>
        </div>
      </div>
    </p-card>
  </div>

  <!-- Table \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="card">
    <p-toolbar styleClass="mb-4">
      <ng-template #start>
        <h2 class="text-xl font-semibold m-0 flex align-items-center gap-2">
          <i class="pi pi-money-bill text-primary"></i>
          Encaissements vente
        </h2>
      </ng-template>
      <ng-template #end>
        @if (canCreate) {
          <p-button label="Nouvel encaissement" icon="pi pi-plus" (onClick)="openCreateDialog()" />
        }
      </ng-template>
    </p-toolbar>

    <p-table
      #dt
      [value]="encaissements()"
      [loading]="loading"
      [paginator]="true"
      [rows]="10"
      [rowsPerPageOptions]="[10, 25, 50]"
      [globalFilterFields]="['mode_paiement', 'note']"
      styleClass="p-datatable-gridlines"
      responsiveLayout="scroll"
      currentPageReportTemplate="{first} \xE0 {last} sur {totalRecords} encaissements"
      [showCurrentPageReport]="true"
    >
      <ng-template #caption>
        <div class="flex justify-end">
          <p-iconfield>
            <p-inputicon class="pi pi-search" />
            <input
              pInputText
              type="text"
              placeholder="Rechercher\u2026"
              (input)="onGlobalFilter(dt, $event)"
              class="w-full md:w-20rem"
            />
          </p-iconfield>
        </div>
      </ng-template>

      <ng-template #header>
        <tr>
          <th pSortableColumn="date_encaissement" style="min-width:10rem">
            Date <p-sortIcon field="date_encaissement" />
          </th>
          <th pSortableColumn="montant" style="min-width:10rem">
            Montant <p-sortIcon field="montant" />
          </th>
          <th style="min-width:10rem">Mode de paiement</th>
          <th style="min-width:8rem">Facture</th>
          <th style="min-width:10rem">Notes</th>
        </tr>
      </ng-template>

      <ng-template #body let-e>
        <tr>
          <td class="text-sm">{{ formatDateDisplay(e.date_encaissement) }}</td>
          <td class="font-semibold text-green-600">{{ formatMontant(e.montant) }}</td>
          <td>
            <span class="surface-100 px-2 py-1 border-round text-sm">
              {{ getModePaiementLabel(e.mode_paiement) }}
            </span>
          </td>
          <td class="text-color-secondary text-sm">
            @if (e.facture_vente_id) {
              #{{ e.facture_vente_id }}
            } @else { \u2014 }
          </td>
          <td class="text-color-secondary text-sm">{{ e.note || '\u2014' }}</td>
        </tr>
      </ng-template>

      <ng-template #emptymessage>
        <tr>
          <td colspan="5" class="text-center py-8">
            <i class="pi pi-inbox text-4xl mb-3 block" style="opacity:.25"></i>
            <p class="text-color-secondary m-0">Aucun encaissement enregistr\xE9.</p>
          </td>
        </tr>
      </ng-template>

      <ng-template #loadingbody>
        @for (_ of [1, 2, 3]; track $index) {
          <tr>
            @for (__ of [1, 2, 3, 4, 5]; track $index) {
              <td><p-skeleton /></td>
            }
          </tr>
        }
      </ng-template>
    </p-table>
  </div>

</div>

<!-- \u2500\u2500 Dialog : Nouvel encaissement \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<p-dialog
  header="Nouvel encaissement"
  [(visible)]="dialogVisible"
  [modal]="true"
  [style]="{ width: '30rem' }"
  [draggable]="false"
>
  <form [formGroup]="createForm" novalidate>
    <div class="flex flex-col gap-4">

      <div class="flex flex-col gap-1">
        <label class="font-medium text-sm">Montant (GNF) <span class="text-red-500">*</span></label>
        <p-inputNumber
          formControlName="montant"
          [min]="1"
          suffix=" GNF"
          [useGrouping]="true"
          styleClass="w-full"
          [ngClass]="{'ng-invalid ng-dirty': isInvalid('montant')}"
        />
        @if (isInvalid('montant')) {
          <small class="text-red-500">Montant requis (> 0).</small>
        }
      </div>

      <div class="flex flex-col gap-1">
        <label class="font-medium text-sm">Mode de paiement <span class="text-red-500">*</span></label>
        <p-select
          formControlName="mode_paiement"
          [options]="modePaiementOptions"
          optionLabel="label"
          optionValue="value"
          styleClass="w-full"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="font-medium text-sm">Date d'encaissement <span class="text-red-500">*</span></label>
        <p-datepicker
          formControlName="date_encaissement"
          dateFormat="dd/mm/yy"
          [showIcon]="true"
          styleClass="w-full"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="font-medium text-sm">ID facture de vente <span class="text-red-500">*</span></label>
        <p-inputNumber
          formControlName="facture_vente_id"
          [useGrouping]="false"
          placeholder="ID de la facture"
          styleClass="w-full"
          [ngClass]="{'ng-invalid ng-dirty': isInvalid('facture_vente_id')}"
        />
        @if (isInvalid('facture_vente_id')) {
          <small class="text-red-500">ID facture requis.</small>
        }
      </div>

      <div class="flex flex-col gap-1">
        <label class="font-medium text-sm">Note <span class="text-color-secondary">(optionnel)</span></label>
        <input pInputText formControlName="note" placeholder="Remarques\u2026" />
      </div>

    </div>
  </form>

  <ng-template #footer>
    <div class="w-full">
      <p-button label="Enregistrer" icon="pi pi-save" (onClick)="onSaveEncaissement()" [loading]="saving" fluid />
    </div>
  </ng-template>
</p-dialog>
` }]
  }], () => [{ type: FormBuilder }, { type: FactureLivraisonService }, { type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EncaissementVenteListe, { className: "EncaissementVenteListe", filePath: "src/app/pages/ventes/encaissement-vente-liste/encaissement-vente-liste.ts", lineNumber: 55 });
})();
export {
  EncaissementVenteListe
};
//# sourceMappingURL=chunk-FETEINSF.js.map
