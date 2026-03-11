import {
  Textarea,
  TextareaModule
} from "./chunk-BZYMN2OQ.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-3GKIIVSI.js";
import {
  Dialog,
  DialogModule
} from "./chunk-DQ4T5ATO.js";
import {
  authorizationGuard
} from "./chunk-6UL5U7NG.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Table,
  TableModule
} from "./chunk-5YYGCZZ3.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-36C26MQ6.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import "./chunk-DB24SVBI.js";
import "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-IEELAHW7.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import {
  UsineContextService
} from "./chunk-7GQXFRTV.js";
import {
  environment
} from "./chunk-CSVYKJ4F.js";
import {
  HttpClient
} from "./chunk-K7KGEHY2.js";
import "./chunk-MHHPFZ62.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VA6E3YEN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-LK4MJDWN.js";
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
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgForOf,
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
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/services/sites/site.service.ts
var SiteService = class _SiteService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/sites`;
  getAll() {
    return this.http.get(this.apiBase).pipe(map((response) => this.normalizeCollection(response.data)));
  }
  getById(id) {
    return this.http.get(`${this.apiBase}/${id}`).pipe(map((response) => this.normalizeItem(response.data)));
  }
  create(payload) {
    return this.http.post(this.apiBase, payload).pipe(map((response) => this.normalizeItem(response.data)));
  }
  update(id, payload) {
    return this.http.patch(`${this.apiBase}/${id}`, payload).pipe(map((response) => this.normalizeItem(response.data)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/${id}`).pipe(map(() => void 0));
  }
  setDefault(id) {
    return this.http.patch(`${this.apiBase}/${id}/set-default`, {}).pipe(map(() => void 0));
  }
  normalizeCollection(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }
    if (payload && typeof payload === "object") {
      const data = payload.data;
      if (Array.isArray(data)) {
        return data;
      }
    }
    return [];
  }
  normalizeItem(payload) {
    if (payload && typeof payload === "object") {
      const data = payload.data;
      if (data && typeof data === "object") {
        return data;
      }
      return payload;
    }
    throw new Error("Reponse API invalide");
  }
  static \u0275fac = function SiteService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteService, factory: _SiteService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/sites/sites-liste/sites-liste.ts
var _c0 = () => ({ width: "44rem", maxWidth: "96vw" });
var _c1 = (a0) => ["/sites", a0];
function SitesListe_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function SitesListe_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function SitesListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function SitesListe_ng_template_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "(defaut)");
    \u0275\u0275elementEnd();
  }
}
function SitesListe_ng_template_10_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function SitesListe_ng_template_10_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDefault(item_r4));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isDefaultSite(item_r4));
  }
}
function SitesListe_ng_template_10_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function SitesListe_ng_template_10_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditDialog(item_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function SitesListe_ng_template_10_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function SitesListe_ng_template_10_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(item_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function SitesListe_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275template(3, SitesListe_ng_template_10_span_3_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 29)(13, "div", 31);
    \u0275\u0275element(14, "button", 32);
    \u0275\u0275template(15, SitesListe_ng_template_10_button_15_Template, 1, 1, "button", 33)(16, SitesListe_ng_template_10_button_16_Template, 1, 0, "button", 34)(17, SitesListe_ng_template_10_button_17_Template, 1, 0, "button", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r4.nom, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isDefaultSite(item_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.code || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.type || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.statut || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.ville || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canSetDefault());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canUpdate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function SitesListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "Aucun site disponible.");
    \u0275\u0275elementEnd()();
  }
}
function SitesListe_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.label);
  }
}
function SitesListe_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.label);
  }
}
var SitesListe = class _SitesListe {
  siteService = inject(SiteService);
  authService = inject(AuthService);
  contextService = inject(UsineContextService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  formBuilder = inject(FormBuilder);
  sites = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  submitted = false;
  editingId = null;
  typeOptions = [
    { label: "Siege", value: "siege" },
    { label: "Production", value: "production" },
    { label: "Distribution", value: "distribution" },
    { label: "Stockage", value: "stockage" },
    { label: "Mixte", value: "mixte" }
  ];
  statutOptions = [
    { label: "Actif", value: "active" },
    { label: "Inactif", value: "inactive" },
    { label: "Archive", value: "archived" }
  ];
  siteForm = this.formBuilder.nonNullable.group({
    nom: ["", [Validators.required, Validators.maxLength(255)]],
    code: ["", [Validators.required, Validators.maxLength(50)]],
    type: ["production", [Validators.required]],
    statut: ["active"],
    localisation: ["", [Validators.maxLength(255)]],
    pays: ["", [Validators.maxLength(100)]],
    ville: ["", [Validators.maxLength(100)]],
    quartier: ["", [Validators.maxLength(100)]],
    description: ["", [Validators.maxLength(2e3)]],
    parent_id: [""]
  });
  ngOnInit() {
    this.loadSites();
  }
  canCreate() {
    return this.authService.hasAnyPermission(["sites.create"]);
  }
  canUpdate() {
    return this.authService.hasAnyPermission(["sites.update"]);
  }
  canDelete() {
    return this.authService.hasAnyPermission(["sites.delete"]);
  }
  canSetDefault() {
    return this.authService.hasAnyPermission(["sites.read"]);
  }
  isDefaultSite(item) {
    return this.contextService.defaultUsineId() === item.id;
  }
  get dialogTitle() {
    return this.editingId ? "Modifier le site" : "Nouveau site";
  }
  loadSites() {
    this.loading = true;
    this.siteService.getAll().subscribe({
      next: (items) => {
        this.sites = items;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Chargement des sites impossible.");
      }
    });
  }
  openCreateDialog() {
    this.editingId = null;
    this.submitted = false;
    this.siteForm.reset({
      nom: "",
      code: "",
      type: "production",
      statut: "active",
      localisation: "",
      pays: "",
      ville: "",
      quartier: "",
      description: "",
      parent_id: ""
    });
    this.dialogVisible = true;
  }
  openEditDialog(item) {
    this.editingId = item.id;
    this.submitted = false;
    this.siteForm.reset({
      nom: item.nom ?? "",
      code: item.code ?? "",
      type: item.type ? String(item.type) : "production",
      statut: item.statut ? String(item.statut) : "active",
      localisation: item.localisation ?? "",
      pays: item.pays ?? "",
      ville: item.ville ?? "",
      quartier: item.quartier ?? "",
      description: item.description ?? "",
      parent_id: item.parent_id ? String(item.parent_id) : ""
    });
    this.dialogVisible = true;
  }
  closeDialog() {
    this.dialogVisible = false;
    this.submitted = false;
    this.saving = false;
  }
  submitForm() {
    this.submitted = true;
    if (this.siteForm.invalid || this.saving) {
      this.siteForm.markAllAsTouched();
      return;
    }
    this.saving = true;
    const payload = this.buildPayload();
    const request$ = this.editingId ? this.siteService.update(this.editingId, payload) : this.siteService.create(payload);
    request$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: this.editingId ? "Site mis a jour." : "Site cree.",
          life: 3e3
        });
        this.loadSites();
      },
      error: (error) => {
        this.saving = false;
        this.showApiError(error, "Enregistrement du site impossible.");
      }
    });
  }
  setDefault(item) {
    this.siteService.setDefault(item.id).subscribe({
      next: () => {
        this.contextService.switchUsine(item.id);
        this.authService.me().subscribe({
          next: () => {
          },
          error: () => {
          }
        });
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: "Site par defaut mis a jour.",
          life: 3e3
        });
      },
      error: (error) => this.showApiError(error, "Impossible de changer le site par defaut.")
    });
  }
  confirmDelete(item) {
    this.confirmationService.confirm({
      header: "Suppression",
      message: `Supprimer le site ${item.nom} ?`,
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger p-button-sm",
      rejectButtonStyleClass: "p-button-text p-button-sm",
      accept: () => {
        this.siteService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succes",
              detail: "Site supprime.",
              life: 3e3
            });
            this.loadSites();
          },
          error: (error) => this.showApiError(error, "Suppression du site impossible.")
        });
      }
    });
  }
  buildPayload() {
    const raw = this.siteForm.getRawValue();
    const parentIdValue = raw.parent_id.trim();
    const parsedParentId = Number(parentIdValue);
    return {
      nom: raw.nom.trim(),
      code: raw.code.trim().toUpperCase(),
      type: raw.type.trim(),
      statut: this.nullIfEmpty(raw.statut) ?? void 0,
      localisation: this.nullIfEmpty(raw.localisation),
      pays: this.nullIfEmpty(raw.pays),
      ville: this.nullIfEmpty(raw.ville),
      quartier: this.nullIfEmpty(raw.quartier),
      description: this.nullIfEmpty(raw.description),
      parent_id: parentIdValue.length > 0 && Number.isInteger(parsedParentId) ? parsedParentId : null
    };
  }
  nullIfEmpty(value) {
    const cleaned = value.trim();
    return cleaned.length > 0 ? cleaned : null;
  }
  showApiError(error, fallback) {
    if (error?.status === 422 && error?.error?.errors) {
      const messages = Object.values(error.error.errors).flat();
      messages.forEach((message) => {
        this.messageService.add({
          severity: "error",
          summary: "Validation",
          detail: message,
          life: 5e3
        });
      });
      return;
    }
    const detail = typeof error?.error?.message === "string" && error.error.message || typeof error?.message === "string" && error.message || fallback;
    this.messageService.add({
      severity: "error",
      summary: "Erreur",
      detail,
      life: 5e3
    });
  }
  static \u0275fac = function SitesListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SitesListe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SitesListe, selectors: [["app-sites-liste"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 60, vars: 14, consts: [[1, "card", "sites-page"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "gap-3", "flex-wrap"], [1, "m-0", "text-2xl", "font-semibold"], [1, "m-0", "text-color-secondary"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouveau site", 3, "click", 4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "onHide", "visible", "header", "modal", "draggable"], [1, "grid", 3, "ngSubmit", "formGroup"], [1, "col-12", "md:col-6"], [1, "block", "mb-2"], ["pInputText", "", "type", "text", "formControlName", "nom", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "code", "placeholder", "Ex: MATOTO", 1, "w-full"], ["formControlName", "type", 1, "w-full", "p-inputtext"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "statut", 1, "w-full", "p-inputtext"], ["pInputText", "", "type", "text", "formControlName", "pays", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "ville", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "quartier", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "localisation", 1, "w-full"], ["pInputText", "", "type", "number", "formControlName", "parent_id", 1, "w-full"], [1, "col-12"], ["pTextarea", "", "rows", "3", "formControlName", "description", 1, "w-full"], [1, "col-12", "flex", "justify-content-end", "gap-2", "mt-2"], ["pButton", "", "type", "button", "label", "Annuler", 1, "p-button-text", 3, "click"], ["pButton", "", "type", "submit", "label", "Enregistrer", 3, "loading"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouveau site", 3, "click"], [1, "text-right"], ["class", "ml-2 text-xs text-primary", 4, "ngIf"], [1, "flex", "justify-content-end", "gap-2"], ["pButton", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-text", "p-button-sm", 3, "routerLink"], ["pButton", "", "type", "button", "class", "p-button-text p-button-sm", "icon", "pi pi-star", 3, "disabled", "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "p-button-text p-button-sm", "icon", "pi pi-pencil", 3, "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "p-button-text p-button-danger p-button-sm", "icon", "pi pi-trash", 3, "click", 4, "ngIf"], [1, "ml-2", "text-xs", "text-primary"], ["pButton", "", "type", "button", "icon", "pi pi-star", 1, "p-button-text", "p-button-sm", 3, "click", "disabled"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-text", "p-button-sm", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "6", 1, "text-center", "text-color-secondary", "py-5"], [3, "value"]], template: function SitesListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestion des sites et du contexte metier.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, SitesListe_button_7_Template, 1, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-table", 5);
      \u0275\u0275template(9, SitesListe_ng_template_9_Template, 13, 0, "ng-template", 6)(10, SitesListe_ng_template_10_Template, 18, 12, "ng-template", 7)(11, SitesListe_ng_template_11_Template, 3, 0, "ng-template", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-dialog", 9);
      \u0275\u0275twoWayListener("visibleChange", function SitesListe_Template_p_dialog_visibleChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function SitesListe_Template_p_dialog_onHide_12_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(13, "form", 10);
      \u0275\u0275listener("ngSubmit", function SitesListe_Template_form_ngSubmit_13_listener() {
        return ctx.submitForm();
      });
      \u0275\u0275elementStart(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "Nom *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11)(19, "label", 12);
      \u0275\u0275text(20, "Code *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 12);
      \u0275\u0275text(24, "Type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 15);
      \u0275\u0275template(26, SitesListe_option_26_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 11)(28, "label", 12);
      \u0275\u0275text(29, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 17);
      \u0275\u0275template(31, SitesListe_option_31_Template, 2, 2, "option", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 11)(33, "label", 12);
      \u0275\u0275text(34, "Pays");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 11)(37, "label", 12);
      \u0275\u0275text(38, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 11)(41, "label", 12);
      \u0275\u0275text(42, "Quartier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 11)(45, "label", 12);
      \u0275\u0275text(46, "Localisation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 11)(49, "label", 12);
      \u0275\u0275text(50, "ID site parent");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 23)(53, "label", 12);
      \u0275\u0275text(54, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "textarea", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 25)(57, "button", 26);
      \u0275\u0275listener("click", function SitesListe_Template_button_click_57_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "button", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(59, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.canCreate());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.sites)("loading", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("header", ctx.dialogTitle)("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.siteForm);
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.typeOptions);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.statutOptions);
      \u0275\u0275advance(27);
      \u0275\u0275property("loading", ctx.saving);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TableModule, Table, PrimeTemplate, ButtonModule, ButtonDirective, DialogModule, Dialog, InputTextModule, InputText, TextareaModule, Textarea, ConfirmDialogModule, ConfirmDialog], styles: ["\n\n.sites-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=sites-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SitesListe, [{
    type: Component,
    args: [{ selector: "app-sites-liste", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      ConfirmDialogModule
    ], providers: [ConfirmationService], template: `<div class="card sites-page">
  <div class="flex align-items-center justify-content-between mb-4 gap-3 flex-wrap">
    <div>
      <h2 class="m-0 text-2xl font-semibold">Sites</h2>
      <p class="m-0 text-color-secondary">Gestion des sites et du contexte metier.</p>
    </div>
    <button
      *ngIf="canCreate()"
      pButton
      type="button"
      icon="pi pi-plus"
      label="Nouveau site"
      (click)="openCreateDialog()"
    ></button>
  </div>

  <p-table [value]="sites" [loading]="loading" dataKey="id" responsiveLayout="scroll">
    <ng-template pTemplate="header">
      <tr>
        <th>Nom</th>
        <th>Code</th>
        <th>Type</th>
        <th>Statut</th>
        <th>Ville</th>
        <th class="text-right">Actions</th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-item>
      <tr>
        <td>
          {{ item.nom }}
          <span *ngIf="isDefaultSite(item)" class="ml-2 text-xs text-primary">(defaut)</span>
        </td>
        <td>{{ item.code || '-' }}</td>
        <td>{{ item.type || '-' }}</td>
        <td>{{ item.statut || '-' }}</td>
        <td>{{ item.ville || '-' }}</td>
        <td class="text-right">
          <div class="flex justify-content-end gap-2">
            <button
              pButton
              type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-eye"
              [routerLink]="['/sites', item.id]"
            ></button>
            <button
              *ngIf="canSetDefault()"
              pButton
              type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-star"
              [disabled]="isDefaultSite(item)"
              (click)="setDefault(item)"
            ></button>
            <button
              *ngIf="canUpdate()"
              pButton
              type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-pencil"
              (click)="openEditDialog(item)"
            ></button>
            <button
              *ngIf="canDelete()"
              pButton
              type="button"
              class="p-button-text p-button-danger p-button-sm"
              icon="pi pi-trash"
              (click)="confirmDelete(item)"
            ></button>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template pTemplate="emptymessage">
      <tr>
        <td colspan="6" class="text-center text-color-secondary py-5">Aucun site disponible.</td>
      </tr>
    </ng-template>
  </p-table>
</div>

<p-dialog
  [(visible)]="dialogVisible"
  [header]="dialogTitle"
  [modal]="true"
  [style]="{ width: '44rem', maxWidth: '96vw' }"
  [draggable]="false"
  (onHide)="closeDialog()"
>
  <form class="grid" [formGroup]="siteForm" (ngSubmit)="submitForm()">
    <div class="col-12 md:col-6">
      <label class="block mb-2">Nom *</label>
      <input pInputText type="text" class="w-full" formControlName="nom" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Code *</label>
      <input pInputText type="text" class="w-full" formControlName="code" placeholder="Ex: MATOTO" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Type *</label>
      <select class="w-full p-inputtext" formControlName="type">
        <option *ngFor="let item of typeOptions" [value]="item.value">{{ item.label }}</option>
      </select>
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Statut</label>
      <select class="w-full p-inputtext" formControlName="statut">
        <option *ngFor="let item of statutOptions" [value]="item.value">{{ item.label }}</option>
      </select>
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Pays</label>
      <input pInputText type="text" class="w-full" formControlName="pays" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Ville</label>
      <input pInputText type="text" class="w-full" formControlName="ville" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Quartier</label>
      <input pInputText type="text" class="w-full" formControlName="quartier" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Localisation</label>
      <input pInputText type="text" class="w-full" formControlName="localisation" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">ID site parent</label>
      <input pInputText type="number" class="w-full" formControlName="parent_id" />
    </div>

    <div class="col-12">
      <label class="block mb-2">Description</label>
      <textarea pTextarea rows="3" class="w-full" formControlName="description"></textarea>
    </div>

    <div class="col-12 flex justify-content-end gap-2 mt-2">
      <button pButton type="button" class="p-button-text" label="Annuler" (click)="closeDialog()"></button>
      <button pButton type="submit" [loading]="saving" label="Enregistrer"></button>
    </div>
  </form>
</p-dialog>

<p-confirmDialog></p-confirmDialog>\r
`, styles: ["/* src/app/pages/sites/sites-liste/sites-liste.scss */\n.sites-page {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=sites-liste.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SitesListe, { className: "SitesListe", filePath: "src/app/pages/sites/sites-liste/sites-liste.ts", lineNumber: 37 });
})();

// src/app/pages/sites/sites-detail/sites-detail.ts
function SitesDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function SitesDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function SitesDetail_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "strong");
    \u0275\u0275text(3, "Nom:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10)(6, "strong");
    \u0275\u0275text(7, "Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10)(10, "strong");
    \u0275\u0275text(11, "Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "strong");
    \u0275\u0275text(15, "Statut:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "strong");
    \u0275\u0275text(19, "Pays:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10)(22, "strong");
    \u0275\u0275text(23, "Ville:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10)(26, "strong");
    \u0275\u0275text(27, "Quartier:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 10)(30, "strong");
    \u0275\u0275text(31, "Localisation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 11)(34, "strong");
    \u0275\u0275text(35, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.code || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.type || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.statut || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.pays || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.ville || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.quartier || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.localisation || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.site.description || "-");
  }
}
var SitesDetail = class _SitesDetail {
  route = inject(ActivatedRoute);
  siteService = inject(SiteService);
  site = null;
  loading = false;
  errorMessage = null;
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    const id = Number(idParam);
    if (!Number.isInteger(id) || id <= 0) {
      this.errorMessage = "Site invalide.";
      return;
    }
    this.loadSite(id);
  }
  loadSite(id) {
    this.loading = true;
    this.errorMessage = null;
    this.siteService.getById(id).subscribe({
      next: (item) => {
        this.site = item;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = typeof error?.error?.message === "string" && error.error.message || "Chargement du site impossible.";
      }
    });
  }
  static \u0275fac = function SitesDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SitesDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SitesDetail, selectors: [["app-sites-detail"]], decls: 8, vars: 3, consts: [[1, "card", "site-detail-page"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "flex-wrap", "gap-2"], [1, "m-0", "text-2xl", "font-semibold"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", "label", "Retour", "routerLink", "/sites", 1, "p-button-text"], ["class", "text-color-secondary py-4", 4, "ngIf"], ["class", "text-red-500 py-4", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "text-color-secondary", "py-4"], [1, "text-red-500", "py-4"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "col-12"]], template: function SitesDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Detail site");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, SitesDetail_div_5_Template, 2, 0, "div", 4)(6, SitesDetail_div_6_Template, 2, 1, "div", 5)(7, SitesDetail_div_7_Template, 37, 9, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.site);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, ButtonModule, ButtonDirective], styles: ["\n\n.site-detail-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=sites-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SitesDetail, [{
    type: Component,
    args: [{ selector: "app-sites-detail", standalone: true, imports: [CommonModule, RouterModule, ButtonModule], template: `<div class="card site-detail-page">
  <div class="flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <h2 class="m-0 text-2xl font-semibold">Detail site</h2>
    <button pButton type="button" icon="pi pi-arrow-left" label="Retour" class="p-button-text" routerLink="/sites"></button>
  </div>

  <div *ngIf="loading" class="text-color-secondary py-4">Chargement...</div>
  <div *ngIf="!loading && errorMessage" class="text-red-500 py-4">{{ errorMessage }}</div>

  <div *ngIf="!loading && site" class="grid">
    <div class="col-12 md:col-6"><strong>Nom:</strong> {{ site.nom }}</div>
    <div class="col-12 md:col-6"><strong>Code:</strong> {{ site.code || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Type:</strong> {{ site.type || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Statut:</strong> {{ site.statut || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Pays:</strong> {{ site.pays || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Ville:</strong> {{ site.ville || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Quartier:</strong> {{ site.quartier || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Localisation:</strong> {{ site.localisation || '-' }}</div>
    <div class="col-12"><strong>Description:</strong> {{ site.description || '-' }}</div>
  </div>
</div>\r
`, styles: ["/* src/app/pages/sites/sites-detail/sites-detail.scss */\n.site-detail-page {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=sites-detail.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SitesDetail, { className: "SitesDetail", filePath: "src/app/pages/sites/sites-detail/sites-detail.ts", lineNumber: 16 });
})();

// src/app/pages/sites/sites.routes.ts
var sites_routes_default = [
  {
    path: "",
    component: SitesListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "sites", permissions: ["sites.read"] }
  },
  {
    path: ":id",
    component: SitesDetail,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "site-detail", permissions: ["sites.read"] }
  }
];
export {
  sites_routes_default as default
};
//# sourceMappingURL=chunk-OPNQ34AM.js.map
