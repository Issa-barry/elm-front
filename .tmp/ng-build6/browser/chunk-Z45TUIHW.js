import {
  ToolbarModule
} from "./chunk-SNFY5X5Q.js";
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
import "./chunk-7GQXFRTV.js";
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

// src/app/services/organisations/organisation.service.ts
var OrganisationService = class _OrganisationService {
  http = inject(HttpClient);
  apiBase = `${environment.apiUrl}/organisations`;
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
    return this.http.put(`${this.apiBase}/${id}`, payload).pipe(map((response) => this.normalizeItem(response.data)));
  }
  delete(id) {
    return this.http.delete(`${this.apiBase}/${id}`).pipe(map(() => void 0));
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
  static \u0275fac = function OrganisationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganisationService, factory: _OrganisationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/organisations/organisations-liste/organisations-liste.ts
var _c0 = () => ({ width: "42rem", maxWidth: "96vw" });
var _c1 = (a0) => ["/organisations", a0];
function OrganisationsListe_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function OrganisationsListe_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function OrganisationsListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Telephone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 30);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationsListe_ng_template_10_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function OrganisationsListe_ng_template_10_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditDialog(item_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function OrganisationsListe_ng_template_10_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function OrganisationsListe_ng_template_10_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete(item_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function OrganisationsListe_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 30)(12, "div", 31);
    \u0275\u0275element(13, "button", 32);
    \u0275\u0275template(14, OrganisationsListe_ng_template_10_button_14_Template, 1, 0, "button", 33)(15, OrganisationsListe_ng_template_10_button_15_Template, 1, 0, "button", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.statut || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.phone || "-");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canUpdate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function OrganisationsListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, " Aucune organisation disponible. ");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationsListe_option_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    \u0275\u0275property("value", status_r6.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r6.label);
  }
}
var OrganisationsListe = class _OrganisationsListe {
  organisationService = inject(OrganisationService);
  authService = inject(AuthService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  formBuilder = inject(FormBuilder);
  organisations = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  submitted = false;
  editingId = null;
  statutOptions = [
    { label: "Actif", value: "active" },
    { label: "Inactif", value: "inactive" },
    { label: "Suspendu", value: "suspended" }
  ];
  organisationForm = this.formBuilder.nonNullable.group({
    nom: ["", [Validators.required, Validators.maxLength(191)]],
    code: ["", [Validators.required, Validators.maxLength(50)]],
    email: ["", [Validators.email, Validators.maxLength(191)]],
    phone: ["", [Validators.maxLength(50)]],
    pays: ["", [Validators.maxLength(100)]],
    ville: ["", [Validators.maxLength(100)]],
    quartier: ["", [Validators.maxLength(100)]],
    adresse: ["", [Validators.maxLength(500)]],
    description: [""],
    statut: ["active"]
  });
  ngOnInit() {
    this.loadOrganisations();
  }
  canCreate() {
    return this.authService.hasAnyRole(["super_admin", "super-admin"]) || this.authService.hasAnyPermission(["organisations.create"]);
  }
  canUpdate() {
    return this.authService.hasAnyRole(["super_admin", "super-admin"]) || this.authService.hasAnyPermission(["organisations.update"]);
  }
  canDelete() {
    return this.authService.hasAnyRole(["super_admin", "super-admin"]) || this.authService.hasAnyPermission(["organisations.delete"]);
  }
  get dialogTitle() {
    return this.editingId ? "Modifier l'organisation" : "Nouvelle organisation";
  }
  loadOrganisations() {
    this.loading = true;
    this.organisationService.getAll().subscribe({
      next: (items) => {
        this.organisations = items;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.showApiError(error, "Chargement des organisations impossible.");
      }
    });
  }
  openCreateDialog() {
    this.editingId = null;
    this.submitted = false;
    this.organisationForm.reset({
      nom: "",
      code: "",
      email: "",
      phone: "",
      pays: "",
      ville: "",
      quartier: "",
      adresse: "",
      description: "",
      statut: "active"
    });
    this.dialogVisible = true;
  }
  openEditDialog(item) {
    this.editingId = item.id;
    this.submitted = false;
    this.organisationForm.reset({
      nom: item.nom ?? "",
      code: item.code ?? "",
      email: item.email ?? "",
      phone: item.phone ?? "",
      pays: item.pays ?? "",
      ville: item.ville ?? "",
      quartier: item.quartier ?? "",
      adresse: item.adresse ?? "",
      description: item.description ?? "",
      statut: item.statut ? String(item.statut) : "active"
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
    if (this.organisationForm.invalid || this.saving) {
      this.organisationForm.markAllAsTouched();
      return;
    }
    const payload = this.buildPayload();
    this.saving = true;
    const request$ = this.editingId ? this.organisationService.update(this.editingId, payload) : this.organisationService.create(payload);
    request$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succes",
          detail: this.editingId ? "Organisation mise a jour." : "Organisation creee.",
          life: 3e3
        });
        this.loadOrganisations();
      },
      error: (error) => {
        this.saving = false;
        this.showApiError(error, "Enregistrement impossible.");
      }
    });
  }
  confirmDelete(item) {
    this.confirmationService.confirm({
      header: "Suppression",
      message: `Supprimer l'organisation ${item.nom} ?`,
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger p-button-sm",
      rejectButtonStyleClass: "p-button-text p-button-sm",
      accept: () => {
        this.organisationService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succes",
              detail: "Organisation supprimee.",
              life: 3e3
            });
            this.loadOrganisations();
          },
          error: (error) => this.showApiError(error, "Suppression impossible.")
        });
      }
    });
  }
  buildPayload() {
    const raw = this.organisationForm.getRawValue();
    return {
      nom: raw.nom.trim(),
      code: raw.code.trim(),
      email: this.nullIfEmpty(raw.email),
      phone: this.nullIfEmpty(raw.phone),
      pays: this.nullIfEmpty(raw.pays),
      ville: this.nullIfEmpty(raw.ville),
      quartier: this.nullIfEmpty(raw.quartier),
      adresse: this.nullIfEmpty(raw.adresse),
      description: this.nullIfEmpty(raw.description),
      statut: this.nullIfEmpty(raw.statut) ?? "active"
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
  static \u0275fac = function OrganisationsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationsListe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganisationsListe, selectors: [["app-organisations-liste"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 59, vars: 13, consts: [[1, "card", "organisations-page"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "gap-3", "flex-wrap"], [1, "m-0", "text-2xl", "font-semibold"], [1, "m-0", "text-color-secondary"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouvelle organisation", 3, "click", 4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "onHide", "visible", "header", "modal", "draggable"], [1, "grid", 3, "ngSubmit", "formGroup"], [1, "col-12", "md:col-6"], [1, "block", "mb-2"], ["pInputText", "", "type", "text", "formControlName", "nom", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "code", 1, "w-full"], ["pInputText", "", "type", "email", "formControlName", "email", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "phone", 1, "w-full"], [1, "col-12", "md:col-4"], ["pInputText", "", "type", "text", "formControlName", "pays", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "ville", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "quartier", 1, "w-full"], [1, "col-12"], ["pInputText", "", "type", "text", "formControlName", "adresse", 1, "w-full"], ["pTextarea", "", "rows", "3", "formControlName", "description", 1, "w-full"], ["formControlName", "statut", 1, "w-full", "p-inputtext"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-12", "flex", "justify-content-end", "gap-2", "mt-2"], ["pButton", "", "type", "button", "label", "Annuler", 1, "p-button-text", 3, "click"], ["pButton", "", "type", "submit", "label", "Enregistrer", 3, "loading"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouvelle organisation", 3, "click"], [1, "text-right"], [1, "flex", "justify-content-end", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-text", "p-button-sm", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-text p-button-sm", "icon", "pi pi-pencil", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-text p-button-danger p-button-sm", "icon", "pi pi-trash", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-text", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "6", 1, "text-center", "text-color-secondary", "py-5"], [3, "value"]], template: function OrganisationsListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Organisations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestion des organisations (super admin).");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, OrganisationsListe_button_7_Template, 1, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-table", 5);
      \u0275\u0275template(9, OrganisationsListe_ng_template_9_Template, 13, 0, "ng-template", 6)(10, OrganisationsListe_ng_template_10_Template, 16, 10, "ng-template", 7)(11, OrganisationsListe_ng_template_11_Template, 3, 0, "ng-template", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-dialog", 9);
      \u0275\u0275twoWayListener("visibleChange", function OrganisationsListe_Template_p_dialog_visibleChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function OrganisationsListe_Template_p_dialog_onHide_12_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(13, "form", 10);
      \u0275\u0275listener("ngSubmit", function OrganisationsListe_Template_form_ngSubmit_13_listener() {
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
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11)(27, "label", 12);
      \u0275\u0275text(28, "Telephone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17)(31, "label", 12);
      \u0275\u0275text(32, "Pays");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17)(35, "label", 12);
      \u0275\u0275text(36, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275element(37, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 17)(39, "label", 12);
      \u0275\u0275text(40, "Quartier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 21)(43, "label", 12);
      \u0275\u0275text(44, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 21)(47, "label", 12);
      \u0275\u0275text(48, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "textarea", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 17)(51, "label", 12);
      \u0275\u0275text(52, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "select", 24);
      \u0275\u0275template(54, OrganisationsListe_option_54_Template, 2, 2, "option", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 26)(56, "button", 27);
      \u0275\u0275listener("click", function OrganisationsListe_Template_button_click_56_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "button", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(58, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.canCreate());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.organisations)("loading", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("header", ctx.dialogTitle)("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.organisationForm);
      \u0275\u0275advance(41);
      \u0275\u0275property("ngForOf", ctx.statutOptions);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.saving);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TableModule,
    Table,
    PrimeTemplate,
    ButtonModule,
    ButtonDirective,
    ToolbarModule,
    DialogModule,
    Dialog,
    InputTextModule,
    InputText,
    TextareaModule,
    Textarea,
    ConfirmDialogModule,
    ConfirmDialog
  ], styles: ["\n\n.organisations-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=organisations-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationsListe, [{
    type: Component,
    args: [{ selector: "app-organisations-liste", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      ToolbarModule,
      DialogModule,
      InputTextModule,
      TextareaModule,
      ConfirmDialogModule
    ], providers: [ConfirmationService], template: `<div class="card organisations-page">
  <div class="flex align-items-center justify-content-between mb-4 gap-3 flex-wrap">
    <div>
      <h2 class="m-0 text-2xl font-semibold">Organisations</h2>
      <p class="m-0 text-color-secondary">Gestion des organisations (super admin).</p>
    </div>
    <button
      *ngIf="canCreate()"
      pButton
      type="button"
      icon="pi pi-plus"
      label="Nouvelle organisation"
      (click)="openCreateDialog()"
    ></button>
  </div>

  <p-table [value]="organisations" [loading]="loading" dataKey="id" responsiveLayout="scroll">
    <ng-template pTemplate="header">
      <tr>
        <th>Nom</th>
        <th>Code</th>
        <th>Statut</th>
        <th>Email</th>
        <th>Telephone</th>
        <th class="text-right">Actions</th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-item>
      <tr>
        <td>{{ item.nom }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.statut || '-' }}</td>
        <td>{{ item.email || '-' }}</td>
        <td>{{ item.phone || '-' }}</td>
        <td class="text-right">
          <div class="flex justify-content-end gap-2">
            <button
              pButton
              pRipple
              type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-eye"
              [routerLink]="['/organisations', item.id]"
            ></button>
            <button
              *ngIf="canUpdate()"
              pButton
              pRipple
              type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-pencil"
              (click)="openEditDialog(item)"
            ></button>
            <button
              *ngIf="canDelete()"
              pButton
              pRipple
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
        <td colspan="6" class="text-center text-color-secondary py-5">
          Aucune organisation disponible.
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>

<p-dialog
  [(visible)]="dialogVisible"
  [header]="dialogTitle"
  [modal]="true"
  [style]="{ width: '42rem', maxWidth: '96vw' }"
  [draggable]="false"
  (onHide)="closeDialog()"
>
  <form class="grid" [formGroup]="organisationForm" (ngSubmit)="submitForm()">
    <div class="col-12 md:col-6">
      <label class="block mb-2">Nom *</label>
      <input pInputText type="text" class="w-full" formControlName="nom" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Code *</label>
      <input pInputText type="text" class="w-full" formControlName="code" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Email</label>
      <input pInputText type="email" class="w-full" formControlName="email" />
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2">Telephone</label>
      <input pInputText type="text" class="w-full" formControlName="phone" />
    </div>

    <div class="col-12 md:col-4">
      <label class="block mb-2">Pays</label>
      <input pInputText type="text" class="w-full" formControlName="pays" />
    </div>

    <div class="col-12 md:col-4">
      <label class="block mb-2">Ville</label>
      <input pInputText type="text" class="w-full" formControlName="ville" />
    </div>

    <div class="col-12 md:col-4">
      <label class="block mb-2">Quartier</label>
      <input pInputText type="text" class="w-full" formControlName="quartier" />
    </div>

    <div class="col-12">
      <label class="block mb-2">Adresse</label>
      <input pInputText type="text" class="w-full" formControlName="adresse" />
    </div>

    <div class="col-12">
      <label class="block mb-2">Description</label>
      <textarea pTextarea rows="3" class="w-full" formControlName="description"></textarea>
    </div>

    <div class="col-12 md:col-4">
      <label class="block mb-2">Statut</label>
      <select class="w-full p-inputtext" formControlName="statut">
        <option *ngFor="let status of statutOptions" [value]="status.value">{{ status.label }}</option>
      </select>
    </div>

    <div class="col-12 flex justify-content-end gap-2 mt-2">
      <button pButton type="button" class="p-button-text" label="Annuler" (click)="closeDialog()"></button>
      <button pButton type="submit" [loading]="saving" label="Enregistrer"></button>
    </div>
  </form>
</p-dialog>

<p-confirmDialog></p-confirmDialog>\r
`, styles: ["/* src/app/pages/organisations/organisations-liste/organisations-liste.scss */\n.organisations-page {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=organisations-liste.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganisationsListe, { className: "OrganisationsListe", filePath: "src/app/pages/organisations/organisations-liste/organisations-liste.ts", lineNumber: 38 });
})();

// src/app/pages/organisations/organisations-detail/organisations-detail.ts
function OrganisationsDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrganisationsDetail_div_6_Template(rf, ctx) {
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
function OrganisationsDetail_div_7_Template(rf, ctx) {
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
    \u0275\u0275text(11, "Statut:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 10)(14, "strong");
    \u0275\u0275text(15, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "strong");
    \u0275\u0275text(19, "Telephone:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 10)(22, "strong");
    \u0275\u0275text(23, "Pays:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10)(26, "strong");
    \u0275\u0275text(27, "Ville:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 10)(30, "strong");
    \u0275\u0275text(31, "Quartier:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 11)(34, "strong");
    \u0275\u0275text(35, "Adresse:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11)(38, "strong");
    \u0275\u0275text(39, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.nom);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.code);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.statut || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.email || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.phone || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.pays || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.ville || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.quartier || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.adresse || "-");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.organisation.description || "-");
  }
}
var OrganisationsDetail = class _OrganisationsDetail {
  route = inject(ActivatedRoute);
  organisationService = inject(OrganisationService);
  organisation = null;
  loading = false;
  errorMessage = null;
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get("id");
    const id = Number(idParam);
    if (!Number.isInteger(id) || id <= 0) {
      this.errorMessage = "Organisation invalide.";
      return;
    }
    this.loadOrganisation(id);
  }
  loadOrganisation(id) {
    this.loading = true;
    this.errorMessage = null;
    this.organisationService.getById(id).subscribe({
      next: (item) => {
        this.organisation = item;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = typeof error?.error?.message === "string" && error.error.message || "Chargement de l'organisation impossible.";
      }
    });
  }
  static \u0275fac = function OrganisationsDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationsDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganisationsDetail, selectors: [["app-organisations-detail"]], decls: 8, vars: 3, consts: [[1, "card", "organisation-detail-page"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "flex-wrap", "gap-2"], [1, "m-0", "text-2xl", "font-semibold"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", "label", "Retour", "routerLink", "/organisations", 1, "p-button-text"], ["class", "text-color-secondary py-4", 4, "ngIf"], ["class", "text-red-500 py-4", 4, "ngIf"], ["class", "grid", 4, "ngIf"], [1, "text-color-secondary", "py-4"], [1, "text-red-500", "py-4"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "col-12"]], template: function OrganisationsDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Detail organisation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, OrganisationsDetail_div_5_Template, 2, 0, "div", 4)(6, OrganisationsDetail_div_6_Template, 2, 1, "div", 5)(7, OrganisationsDetail_div_7_Template, 41, 10, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.organisation);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, ButtonModule, ButtonDirective], styles: ["\n\n.organisation-detail-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=organisations-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationsDetail, [{
    type: Component,
    args: [{ selector: "app-organisations-detail", standalone: true, imports: [CommonModule, RouterModule, ButtonModule], template: `<div class="card organisation-detail-page">
  <div class="flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <h2 class="m-0 text-2xl font-semibold">Detail organisation</h2>
    <button pButton type="button" icon="pi pi-arrow-left" label="Retour" class="p-button-text" routerLink="/organisations"></button>
  </div>

  <div *ngIf="loading" class="text-color-secondary py-4">Chargement...</div>
  <div *ngIf="!loading && errorMessage" class="text-red-500 py-4">{{ errorMessage }}</div>

  <div *ngIf="!loading && organisation" class="grid">
    <div class="col-12 md:col-6"><strong>Nom:</strong> {{ organisation.nom }}</div>
    <div class="col-12 md:col-6"><strong>Code:</strong> {{ organisation.code }}</div>
    <div class="col-12 md:col-6"><strong>Statut:</strong> {{ organisation.statut || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Email:</strong> {{ organisation.email || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Telephone:</strong> {{ organisation.phone || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Pays:</strong> {{ organisation.pays || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Ville:</strong> {{ organisation.ville || '-' }}</div>
    <div class="col-12 md:col-6"><strong>Quartier:</strong> {{ organisation.quartier || '-' }}</div>
    <div class="col-12"><strong>Adresse:</strong> {{ organisation.adresse || '-' }}</div>
    <div class="col-12"><strong>Description:</strong> {{ organisation.description || '-' }}</div>
  </div>
</div>\r
`, styles: ["/* src/app/pages/organisations/organisations-detail/organisations-detail.scss */\n.organisation-detail-page {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=organisations-detail.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganisationsDetail, { className: "OrganisationsDetail", filePath: "src/app/pages/organisations/organisations-detail/organisations-detail.ts", lineNumber: 16 });
})();

// src/app/pages/organisations/organisations.routes.ts
var organisations_routes_default = [
  {
    path: "",
    component: OrganisationsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "organisations", roles: ["super_admin", "super-admin"] }
  },
  {
    path: ":id",
    component: OrganisationsDetail,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "organisation-detail", roles: ["super_admin", "super-admin"] }
  }
];
export {
  organisations_routes_default as default
};
//# sourceMappingURL=chunk-Z45TUIHW.js.map
