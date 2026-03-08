import {
  OrganisationService
} from "./chunk-Z7AG6F36.js";
import {
  ForfaitService
} from "./chunk-ULHC4U2R.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-VPMPKPO3.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-B42BTUD5.js";
import {
  Dialog,
  DialogModule
} from "./chunk-Y2EGS7AG.js";
import {
  authorizationGuard
} from "./chunk-ZFQCIBR5.js";
import "./chunk-WEV7CZZY.js";
import {
  AuthService
} from "./chunk-FWYLTE3T.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import "./chunk-GEBWCDCC.js";
import "./chunk-CSVYKJ4F.js";
import {
  Table,
  TableModule
} from "./chunk-NJSYAAHU.js";
import "./chunk-XQFWCWDH.js";
import "./chunk-EXEPX633.js";
import "./chunk-3FL5D7QG.js";
import "./chunk-FQFMKS2Q.js";
import "./chunk-XNYJW7BL.js";
import "./chunk-L3HXWUUO.js";
import "./chunk-LFMBOSV6.js";
import "./chunk-WBWDQQZU.js";
import "./chunk-F3L5EVFN.js";
import "./chunk-6MLBYEBX.js";
import "./chunk-IQKSNOBA.js";
import "./chunk-YPIU6GBB.js";
import "./chunk-V5XSXX3V.js";
import "./chunk-4NB56M3I.js";
import "./chunk-NGYBJXCA.js";
import {
  Select,
  SelectModule
} from "./chunk-7FPBHFED.js";
import "./chunk-WZGVHVRY.js";
import "./chunk-YZHJ5FSA.js";
import "./chunk-5OSG7M3V.js";
import "./chunk-YHSSX73X.js";
import {
  InputText,
  InputTextModule
} from "./chunk-52XP6VLB.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZPTU3HTV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-CZVP2Z6G.js";
import "./chunk-6FDWWH3U.js";
import "./chunk-3MAO4O33.js";
import "./chunk-U7PUKEXO.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-5YV6R2XG.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import {
  ConfirmationService,
  MessageService,
  PrimeTemplate
} from "./chunk-6E6G4HCZ.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DSAAE4AM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/organisations/organisations-liste/organisations-liste.ts
var _c0 = () => ({ width: "48rem", maxWidth: "96vw" });
var _c1 = (a0, a1, a2) => ({ "bg-gray-100 text-gray-700": a0, "bg-blue-100 text-blue-700": a1, "bg-yellow-100 text-yellow-700": a2 });
var _c2 = (a0, a1, a2) => ({ "bg-green-100 text-green-700": a0, "bg-gray-100 text-gray-600": a1, "bg-orange-100 text-orange-700": a2 });
var _c3 = (a0) => ["/organisations", a0];
function OrganisationsListe_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 34);
    \u0275\u0275listener("click", function OrganisationsListe_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateDialog());
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275text(6, "Forfait");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 35);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function OrganisationsListe_ng_template_10_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function OrganisationsListe_ng_template_10_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const item_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditDialog(item_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function OrganisationsListe_ng_template_10_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function OrganisationsListe_ng_template_10_button_20_Template_button_click_0_listener() {
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "code", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span", 39);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 35)(17, "div", 40);
    \u0275\u0275element(18, "button", 41);
    \u0275\u0275template(19, OrganisationsListe_ng_template_10_button_19_Template, 1, 0, "button", 42)(20, OrganisationsListe_ng_template_10_button_20_Template, 1, 0, "button", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c1, (item_r4.forfait == null ? null : item_r4.forfait.slug) === "starter", (item_r4.forfait == null ? null : item_r4.forfait.slug) === "standard", (item_r4.forfait == null ? null : item_r4.forfait.slug) === "premium"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((item_r4.forfait == null ? null : item_r4.forfait.nom) ?? "Aucun");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(15, _c2, item_r4.statut === "active", item_r4.statut === "inactive" || item_r4.statut === "archived", item_r4.statut === "suspended"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getStatutLabel(item_r4.statut));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.email || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.phone || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c3, item_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canUpdate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete());
  }
}
function OrganisationsListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, " Aucune organisation disponible. ");
    \u0275\u0275elementEnd()();
  }
}
var OrganisationsListe = class _OrganisationsListe {
  organisationService = inject(OrganisationService);
  forfaitService = inject(ForfaitService);
  authService = inject(AuthService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  formBuilder = inject(FormBuilder);
  organisations = [];
  forfaits = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  editingId = null;
  statutOptions = [
    { label: "Actif", value: "active" },
    { label: "Inactif", value: "inactive" },
    { label: "Suspendu", value: "suspended" }
  ];
  get forfaitSelectOptions() {
    return [
      { label: "Aucun", value: null },
      ...this.forfaits.filter((f) => f.is_active).map((f) => ({ label: f.nom, value: f.id }))
    ];
  }
  getStatutLabel(statut) {
    const map = {
      active: "Actif",
      inactive: "Inactif",
      suspended: "Suspendu",
      archived: "Archiv\xE9"
    };
    return map[statut ?? ""] ?? (statut || "\u2014");
  }
  organisationForm = this.formBuilder.group({
    nom: ["", [Validators.required, Validators.maxLength(191)]],
    code: ["", [Validators.required, Validators.maxLength(50)]],
    email: ["", [Validators.email, Validators.maxLength(191)]],
    phone: ["", [Validators.maxLength(50)]],
    pays: ["", [Validators.maxLength(100)]],
    ville: ["", [Validators.maxLength(100)]],
    quartier: ["", [Validators.maxLength(100)]],
    adresse: ["", [Validators.maxLength(500)]],
    description: [""],
    statut: ["active"],
    forfait_id: [null]
  });
  ngOnInit() {
    this.loadOrganisations();
    this.loadForfaits();
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
  loadForfaits() {
    this.forfaitService.getAll().subscribe({
      next: (items) => this.forfaits = items,
      error: () => {
      }
    });
  }
  openCreateDialog() {
    this.editingId = null;
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
      statut: "active",
      forfait_id: null
    });
    this.dialogVisible = true;
  }
  openEditDialog(item) {
    this.editingId = item.id;
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
      statut: item.statut ? String(item.statut) : "active",
      forfait_id: item.forfait_id ?? item.forfait?.id ?? null
    });
    this.dialogVisible = true;
  }
  closeDialog() {
    this.dialogVisible = false;
    this.saving = false;
  }
  submitForm() {
    this.organisationForm.markAllAsTouched();
    if (this.organisationForm.invalid || this.saving)
      return;
    const payload = this.buildPayload();
    this.saving = true;
    const request$ = this.editingId ? this.organisationService.update(this.editingId, payload) : this.organisationService.create(payload);
    request$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: this.editingId ? "Organisation mise \xE0 jour." : "Organisation cr\xE9\xE9e.",
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
            this.messageService.add({ severity: "success", summary: "Succ\xE8s", detail: "Organisation supprim\xE9e.", life: 3e3 });
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
      email: this.nullIfEmpty(raw.email ?? ""),
      phone: this.nullIfEmpty(raw.phone ?? ""),
      pays: this.nullIfEmpty(raw.pays ?? ""),
      ville: this.nullIfEmpty(raw.ville ?? ""),
      quartier: this.nullIfEmpty(raw.quartier ?? ""),
      adresse: this.nullIfEmpty(raw.adresse ?? ""),
      description: this.nullIfEmpty(raw.description ?? ""),
      statut: this.nullIfEmpty(raw.statut ?? "") ?? "active",
      forfait_id: raw.forfait_id ?? null
    };
  }
  nullIfEmpty(value) {
    const cleaned = value.trim();
    return cleaned.length > 0 ? cleaned : null;
  }
  showApiError(error, fallback) {
    if (error?.status === 422 && error?.error?.errors) {
      const messages = Object.values(error.error.errors).flat();
      messages.forEach((message) => this.messageService.add({ severity: "error", summary: "Validation", detail: message, life: 5e3 }));
      return;
    }
    const detail = typeof error?.error?.message === "string" && error.error.message || typeof error?.message === "string" && error.message || fallback;
    this.messageService.add({ severity: "error", summary: "Erreur", detail, life: 5e3 });
  }
  static \u0275fac = function OrganisationsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationsListe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganisationsListe, selectors: [["app-organisations-liste"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 78, vars: 14, consts: [[1, "card", "organisations-page"], [1, "org-page-header"], [1, "org-page-header__text"], [1, "m-0", "text-2xl", "font-semibold"], [1, "m-0", "text-color-secondary"], ["class", "org-page-header__actions", 4, "ngIf"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "org-dialog", 3, "visibleChange", "onHide", "visible", "header", "modal", "draggable"], [1, "grid", "org-form-grid", 3, "ngSubmit", "formGroup"], [1, "col-12"], [1, "m-0", "mb-3", "text-sm", "font-semibold", "text-color-secondary", "uppercase", 2, "letter-spacing", ".05em"], [1, "col-12", "md:col-6"], [1, "block", "mb-2", "font-medium"], [1, "text-red-500"], ["pInputText", "", "type", "text", "formControlName", "nom", "placeholder", "Ex: ELM Guin\xE9e", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "code", "placeholder", "Ex: ELM-GN", 1, "w-full"], [1, "col-12", "mt-2"], ["pInputText", "", "type", "email", "formControlName", "email", "placeholder", "contact@exemple.com", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "phone", "placeholder", "+224 6X XX XX XX", 1, "w-full"], [1, "col-12", "md:col-4"], ["pInputText", "", "type", "text", "formControlName", "pays", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "ville", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "quartier", 1, "w-full"], ["pInputText", "", "type", "text", "formControlName", "adresse", 1, "w-full"], ["pTextarea", "", "rows", "2", "formControlName", "description", 1, "w-full"], ["formControlName", "statut", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", 3, "options"], ["formControlName", "forfait_id", "optionLabel", "label", "optionValue", "value", "styleClass", "w-full", "placeholder", "Aucun forfait", 3, "options"], [1, "col-12", "org-actions"], ["pButton", "", "type", "button", "label", "Annuler", 1, "p-button-text", 3, "click"], ["pButton", "", "type", "submit", "icon", "pi pi-save", "label", "Enregistrer", 3, "loading"], [1, "org-page-header__actions"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouvelle organisation", 1, "org-create-btn", 3, "click"], [1, "text-right"], [1, "font-semibold"], [1, "text-sm", "border-round", "px-2", "py-1", "surface-100", "text-color-secondary"], [1, "border-round", "px-2", "text-xs", "font-semibold", "white-space-nowrap", "bg-gray-100", "text-gray-600", 2, "padding-top", "3px", "padding-bottom", "3px", 3, "ngClass"], [1, "border-round", "px-2", "text-xs", "font-semibold", "white-space-nowrap", 2, "padding-top", "3px", "padding-bottom", "3px", 3, "ngClass"], [1, "flex", "justify-content-end", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", "pTooltip", "Voir le d\xE9tail", 1, "p-button-text", "p-button-sm", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-text p-button-sm", "icon", "pi pi-pencil", "pTooltip", "Modifier", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "class", "p-button-text p-button-danger p-button-sm", "icon", "pi pi-trash", "pTooltip", "Supprimer", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "pTooltip", "Modifier", 1, "p-button-text", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Supprimer", 1, "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "7", 1, "text-center", "text-color-secondary", "py-5"]], template: function OrganisationsListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Organisations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Gestion des organisations (super admin).");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, OrganisationsListe_div_7_Template, 2, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p-table", 6);
      \u0275\u0275template(9, OrganisationsListe_ng_template_9_Template, 15, 0, "ng-template", 7)(10, OrganisationsListe_ng_template_10_Template, 21, 21, "ng-template", 8)(11, OrganisationsListe_ng_template_11_Template, 3, 0, "ng-template", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function OrganisationsListe_Template_p_dialog_visibleChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function OrganisationsListe_Template_p_dialog_onHide_12_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(13, "form", 11);
      \u0275\u0275listener("ngSubmit", function OrganisationsListe_Template_form_ngSubmit_13_listener() {
        return ctx.submitForm();
      });
      \u0275\u0275elementStart(14, "div", 12)(15, "p", 13);
      \u0275\u0275text(16, "Identit\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 14)(18, "label", 15);
      \u0275\u0275text(19, "Nom ");
      \u0275\u0275elementStart(20, "span", 16);
      \u0275\u0275text(21, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "label", 15);
      \u0275\u0275text(25, "Code ");
      \u0275\u0275elementStart(26, "span", 16);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "p", 13);
      \u0275\u0275text(31, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 14)(33, "label", 15);
      \u0275\u0275text(34, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "label", 15);
      \u0275\u0275text(38, "T\xE9l\xE9phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 19)(41, "p", 13);
      \u0275\u0275text(42, "Localisation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 22)(44, "label", 15);
      \u0275\u0275text(45, "Pays");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 22)(48, "label", 15);
      \u0275\u0275text(49, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 22)(52, "label", 15);
      \u0275\u0275text(53, "Quartier");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 12)(56, "label", 15);
      \u0275\u0275text(57, "Adresse");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 12)(60, "label", 15);
      \u0275\u0275text(61, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "textarea", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 19)(64, "p", 13);
      \u0275\u0275text(65, "Configuration");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 14)(67, "label", 15);
      \u0275\u0275text(68, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "p-select", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 14)(71, "label", 15);
      \u0275\u0275text(72, "Forfait");
      \u0275\u0275elementEnd();
      \u0275\u0275element(73, "p-select", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 30)(75, "button", 31);
      \u0275\u0275listener("click", function OrganisationsListe_Template_button_click_75_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(76, "button", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(77, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.canCreate());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.organisations)("loading", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("header", ctx.dialogTitle)("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.organisationForm);
      \u0275\u0275advance(56);
      \u0275\u0275property("options", ctx.statutOptions);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.forfaitSelectOptions);
      \u0275\u0275advance(3);
      \u0275\u0275property("loading", ctx.saving);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TableModule, Table, PrimeTemplate, ButtonModule, ButtonDirective, DialogModule, Dialog, InputTextModule, InputText, SelectModule, Select, TextareaModule, Textarea, TooltipModule, Tooltip, ConfirmDialogModule, ConfirmDialog], styles: ["\n\n.organisations-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n.org-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.org-page-header__text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.org-page-header__actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]     .org-create-btn.p-button {\n  background: #5f6bff;\n  border-color: #5f6bff;\n  border-radius: 0.7rem;\n  font-weight: 600;\n  padding-inline: 1rem;\n}\n[_nghost-%COMP%]     .org-create-btn.p-button:hover {\n  background: #5560e8;\n  border-color: #5560e8;\n}\n[_nghost-%COMP%]     .org-form-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 0.85rem 1rem;\n  align-items: start;\n}\n[_nghost-%COMP%]     .org-form-grid > .col-12 {\n  grid-column: span 12;\n  min-width: 0;\n}\n[_nghost-%COMP%]     .org-form-grid label {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n[_nghost-%COMP%]     .org-form-grid input.p-inputtext, \n[_nghost-%COMP%]     .org-form-grid textarea.p-inputtextarea, \n[_nghost-%COMP%]     .org-form-grid .p-select {\n  width: 100%;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]     .org-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--surface-border);\n}\n[_nghost-%COMP%]     .org-dialog .p-dialog-header {\n  padding: 1.25rem 1.25rem 0.5rem;\n}\n[_nghost-%COMP%]     .org-dialog .p-dialog-header {\n  border-bottom: none;\n}\n[_nghost-%COMP%]     .org-dialog .p-dialog-content {\n  padding: 0.75rem 1.25rem 1rem;\n  max-height: 72vh;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  [_nghost-%COMP%]     .org-form-grid > .md\\:col-6 {\n    grid-column: span 6;\n  }\n  [_nghost-%COMP%]     .org-form-grid > .md\\:col-4 {\n    grid-column: span 4;\n  }\n}\n@media (max-width: 767px) {\n  .org-page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .org-page-header__actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n    justify-content: flex-end;\n  }\n  [_nghost-%COMP%]     .org-form-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  [_nghost-%COMP%]     .org-form-grid > .col-12, \n   [_nghost-%COMP%]     .org-form-grid > .md\\:col-6, \n   [_nghost-%COMP%]     .org-form-grid > .md\\:col-4 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=organisations-liste.css.map */"] });
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
      DialogModule,
      InputTextModule,
      SelectModule,
      TextareaModule,
      TooltipModule,
      ConfirmDialogModule
    ], providers: [ConfirmationService], template: `<div class="card organisations-page">
  <div class="org-page-header">
    <div class="org-page-header__text">
      <h2 class="m-0 text-2xl font-semibold">Organisations</h2>
      <p class="m-0 text-color-secondary">Gestion des organisations (super admin).</p>
    </div>
    <div class="org-page-header__actions" *ngIf="canCreate()">
      <button
        pButton
        type="button"
        icon="pi pi-plus"
        label="Nouvelle organisation"
        class="org-create-btn"
        (click)="openCreateDialog()"
      ></button>
    </div>
  </div>

  <p-table [value]="organisations" [loading]="loading" dataKey="id" responsiveLayout="scroll">
    <ng-template pTemplate="header">
      <tr>
        <th>Nom</th>
        <th>Code</th>
        <th>Forfait</th>
        <th>Statut</th>
        <th>Email</th>
        <th>T\xE9l\xE9phone</th>
        <th class="text-right">Actions</th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-item>
      <tr>
        <td class="font-semibold">{{ item.nom }}</td>
        <td>
          <code class="text-sm border-round px-2 py-1 surface-100 text-color-secondary">{{ item.code }}</code>
        </td>
        <td>
          <span
            class="border-round px-2 text-xs font-semibold white-space-nowrap bg-gray-100 text-gray-600"
            style="padding-top: 3px; padding-bottom: 3px;"
            [ngClass]="{
              'bg-gray-100 text-gray-700':     item.forfait?.slug === 'starter',
              'bg-blue-100 text-blue-700':     item.forfait?.slug === 'standard',
              'bg-yellow-100 text-yellow-700': item.forfait?.slug === 'premium'
            }"
          >{{ item.forfait?.nom ?? 'Aucun' }}</span>
        </td>
        <td>
          <span
            class="border-round px-2 text-xs font-semibold white-space-nowrap"
            style="padding-top: 3px; padding-bottom: 3px;"
            [ngClass]="{
              'bg-green-100 text-green-700':   item.statut === 'active',
              'bg-gray-100 text-gray-600':     item.statut === 'inactive' || item.statut === 'archived',
              'bg-orange-100 text-orange-700': item.statut === 'suspended'
            }"
          >{{ getStatutLabel(item.statut) }}</span>
        </td>
        <td>{{ item.email || '\u2014' }}</td>
        <td>{{ item.phone || '\u2014' }}</td>
        <td class="text-right">
          <div class="flex justify-content-end gap-2">
            <button pButton pRipple type="button" class="p-button-text p-button-sm"
              icon="pi pi-eye" pTooltip="Voir le d\xE9tail"
              [routerLink]="['/organisations', item.id]"></button>
            <button *ngIf="canUpdate()" pButton pRipple type="button" class="p-button-text p-button-sm"
              icon="pi pi-pencil" pTooltip="Modifier"
              (click)="openEditDialog(item)"></button>
            <button *ngIf="canDelete()" pButton pRipple type="button" class="p-button-text p-button-danger p-button-sm"
              icon="pi pi-trash" pTooltip="Supprimer"
              (click)="confirmDelete(item)"></button>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template pTemplate="emptymessage">
      <tr>
        <td colspan="7" class="text-center text-color-secondary py-5">
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
  [style]="{ width: '48rem', maxWidth: '96vw' }"
  styleClass="org-dialog"
  [draggable]="false"
  (onHide)="closeDialog()"
>
  <form class="grid org-form-grid" [formGroup]="organisationForm" (ngSubmit)="submitForm()">

    <div class="col-12">
      <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Identit\xE9</p>
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Nom <span class="text-red-500">*</span></label>
      <input pInputText type="text" class="w-full" formControlName="nom" placeholder="Ex: ELM Guin\xE9e" />
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Code <span class="text-red-500">*</span></label>
      <input pInputText type="text" class="w-full" formControlName="code" placeholder="Ex: ELM-GN" />
    </div>

    <div class="col-12 mt-2">
      <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Contact</p>
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Email</label>
      <input pInputText type="email" class="w-full" formControlName="email" placeholder="contact@exemple.com" />
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">T\xE9l\xE9phone</label>
      <input pInputText type="text" class="w-full" formControlName="phone" placeholder="+224 6X XX XX XX" />
    </div>

    <div class="col-12 mt-2">
      <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Localisation</p>
    </div>
    <div class="col-12 md:col-4">
      <label class="block mb-2 font-medium">Pays</label>
      <input pInputText type="text" class="w-full" formControlName="pays" />
    </div>
    <div class="col-12 md:col-4">
      <label class="block mb-2 font-medium">Ville</label>
      <input pInputText type="text" class="w-full" formControlName="ville" />
    </div>
    <div class="col-12 md:col-4">
      <label class="block mb-2 font-medium">Quartier</label>
      <input pInputText type="text" class="w-full" formControlName="quartier" />
    </div>
    <div class="col-12">
      <label class="block mb-2 font-medium">Adresse</label>
      <input pInputText type="text" class="w-full" formControlName="adresse" />
    </div>
    <div class="col-12">
      <label class="block mb-2 font-medium">Description</label>
      <textarea pTextarea rows="2" class="w-full" formControlName="description"></textarea>
    </div>

    <div class="col-12 mt-2">
      <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Configuration</p>
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Statut</label>
      <p-select
        [options]="statutOptions" formControlName="statut"
        optionLabel="label" optionValue="value" styleClass="w-full"
      />
    </div>
    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Forfait</label>
      <p-select
        [options]="forfaitSelectOptions" formControlName="forfait_id"
        optionLabel="label" optionValue="value" styleClass="w-full"
        placeholder="Aucun forfait"
      />
    </div>

    <div class="col-12 org-actions">
      <button pButton type="button" class="p-button-text" label="Annuler" (click)="closeDialog()"></button>
      <button pButton type="submit" icon="pi pi-save" [loading]="saving" label="Enregistrer"></button>
    </div>
  </form>
</p-dialog>

<p-confirmDialog></p-confirmDialog>
`, styles: ["/* src/app/pages/organisations/organisations-liste/organisations-liste.scss */\n.organisations-page {\n  border-radius: 1rem;\n}\n.org-page-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.org-page-header__text {\n  min-width: 0;\n}\n.org-page-header__actions {\n  margin-left: auto;\n  display: flex;\n  justify-content: flex-end;\n}\n:host ::ng-deep .org-create-btn.p-button {\n  background: #5f6bff;\n  border-color: #5f6bff;\n  border-radius: 0.7rem;\n  font-weight: 600;\n  padding-inline: 1rem;\n}\n:host ::ng-deep .org-create-btn.p-button:hover {\n  background: #5560e8;\n  border-color: #5560e8;\n}\n:host ::ng-deep .org-form-grid {\n  display: grid;\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n  gap: 0.85rem 1rem;\n  align-items: start;\n}\n:host ::ng-deep .org-form-grid > .col-12 {\n  grid-column: span 12;\n  min-width: 0;\n}\n:host ::ng-deep .org-form-grid label {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n:host ::ng-deep .org-form-grid input.p-inputtext,\n:host ::ng-deep .org-form-grid textarea.p-inputtextarea,\n:host ::ng-deep .org-form-grid .p-select {\n  width: 100%;\n  box-sizing: border-box;\n}\n:host ::ng-deep .org-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--surface-border);\n}\n:host ::ng-deep .org-dialog .p-dialog-header {\n  padding: 1.25rem 1.25rem 0.5rem;\n}\n:host ::ng-deep .org-dialog .p-dialog-header {\n  border-bottom: none;\n}\n:host ::ng-deep .org-dialog .p-dialog-content {\n  padding: 0.75rem 1.25rem 1rem;\n  max-height: 72vh;\n  overflow: auto;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .org-form-grid > .md\\:col-6 {\n    grid-column: span 6;\n  }\n  :host ::ng-deep .org-form-grid > .md\\:col-4 {\n    grid-column: span 4;\n  }\n}\n@media (max-width: 767px) {\n  .org-page-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .org-page-header__actions {\n    margin-left: 0;\n    justify-content: flex-end;\n  }\n  :host ::ng-deep .org-form-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  :host ::ng-deep .org-form-grid > .col-12,\n  :host ::ng-deep .org-form-grid > .md\\:col-6,\n  :host ::ng-deep .org-form-grid > .md\\:col-4 {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=organisations-liste.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganisationsListe, { className: "OrganisationsListe", filePath: "src/app/pages/organisations/organisations-liste/organisations-liste.ts", lineNumber: 42 });
})();

// src/app/pages/organisations/organisations-detail/organisations-detail.ts
var _c02 = (a0, a1, a2) => ({ "bg-green-100 text-green-700": a0, "bg-gray-100 text-gray-600": a1, "bg-orange-100 text-orange-700": a2 });
function OrganisationsDetail_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function OrganisationsDetail_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function OrganisationsDetail_div_7_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.forfaitBadgeClass(ctx_r0.organisation.forfait == null ? null : ctx_r0.organisation.forfait.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.organisation.forfait == null ? null : ctx_r0.organisation.forfait.nom);
  }
}
function OrganisationsDetail_div_7_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function OrganisationsDetail_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 10);
    \u0275\u0275text(2, "Identit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "span", 13);
    \u0275\u0275text(6, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 12)(10, "span", 13);
    \u0275\u0275text(11, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "code", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 12)(15, "span", 13);
    \u0275\u0275text(16, "Forfait");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, OrganisationsDetail_div_7_ng_container_17_Template, 3, 2, "ng-container", 16)(18, OrganisationsDetail_div_7_ng_template_18_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12)(21, "span", 13);
    \u0275\u0275text(22, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 17);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "p", 10);
    \u0275\u0275text(26, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "span", 13);
    \u0275\u0275text(30, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 12)(34, "span", 13);
    \u0275\u0275text(35, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "p", 10);
    \u0275\u0275text(39, "Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 18)(41, "div", 19)(42, "span", 13);
    \u0275\u0275text(43, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19)(47, "span", 13);
    \u0275\u0275text(48, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 19)(52, "span", 13);
    \u0275\u0275text(53, "Quartier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 20)(57, "span", 13);
    \u0275\u0275text(58, "Adresse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 20)(62, "span", 13);
    \u0275\u0275text(63, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const noForfait_r2 = \u0275\u0275reference(19);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.organisation.nom);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.code);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.organisation.forfait)("ngIfElse", noForfait_r2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c02, ctx_r0.organisation.statut === "active", ctx_r0.organisation.statut === "inactive" || ctx_r0.organisation.statut === "archived", ctx_r0.organisation.statut === "suspended"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.organisation.statut || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.organisation.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.phone || "\u2014");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.organisation.pays || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.ville || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.quartier || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.adresse || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.organisation.description || "\u2014");
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
  forfaitBadgeClass(slug) {
    return {
      "bg-gray-100 text-gray-700": slug === "starter",
      "bg-blue-100 text-blue-700": slug === "standard",
      "bg-yellow-100 text-yellow-700": slug === "premium",
      "bg-gray-100 text-gray-600": !slug || !["starter", "standard", "premium"].includes(slug)
    };
  }
  static \u0275fac = function OrganisationsDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganisationsDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganisationsDetail, selectors: [["app-organisations-detail"]], decls: 8, vars: 3, consts: [["noForfait", ""], [1, "card", "organisation-detail-page"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "flex-wrap", "gap-2"], [1, "m-0", "text-2xl", "font-semibold"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", "label", "Retour", "routerLink", "/organisations", 1, "p-button-text"], ["class", "text-color-secondary py-4", 4, "ngIf"], ["class", "text-red-500 py-4", 4, "ngIf"], [4, "ngIf"], [1, "text-color-secondary", "py-4"], [1, "text-red-500", "py-4"], [1, "m-0", "mb-3", "text-sm", "font-semibold", "text-color-secondary", "uppercase", 2, "letter-spacing", ".05em"], [1, "grid", "mb-4"], [1, "col-12", "md:col-6"], [1, "text-color-secondary", "text-sm", "block", "mb-1"], [1, "font-semibold", "text-lg"], [1, "border-round", "px-2", "py-1", "surface-100", "text-color", "font-semibold"], [4, "ngIf", "ngIfElse"], [1, "border-round", "px-2", "text-sm", "font-semibold", 2, "padding-top", "3px", "padding-bottom", "3px", 3, "ngClass"], [1, "grid", "mb-2"], [1, "col-12", "md:col-4"], [1, "col-12"], [1, "text-color-secondary"]], template: function OrganisationsDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
      \u0275\u0275text(3, "D\xE9tail organisation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, OrganisationsDetail_div_5_Template, 2, 0, "div", 5)(6, OrganisationsDetail_div_6_Template, 2, 1, "div", 6)(7, OrganisationsDetail_div_7_Template, 66, 17, "div", 7);
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
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterLink, ButtonModule, ButtonDirective], styles: ["\n\n.organisation-detail-page[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n}\n/*# sourceMappingURL=organisations-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganisationsDetail, [{
    type: Component,
    args: [{ selector: "app-organisations-detail", standalone: true, imports: [CommonModule, RouterModule, ButtonModule], template: `<div class="card organisation-detail-page">
  <div class="flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <h2 class="m-0 text-2xl font-semibold">D\xE9tail organisation</h2>
    <button pButton type="button" icon="pi pi-arrow-left" label="Retour" class="p-button-text" routerLink="/organisations"></button>
  </div>

  <div *ngIf="loading" class="text-color-secondary py-4">Chargement...</div>
  <div *ngIf="!loading && errorMessage" class="text-red-500 py-4">{{ errorMessage }}</div>

  <div *ngIf="!loading && organisation">

    <!-- Identit\xE9 -->
    <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Identit\xE9</p>
    <div class="grid mb-4">
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">Nom</span>
        <span class="font-semibold text-lg">{{ organisation.nom }}</span>
      </div>
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">Code</span>
        <code class="border-round px-2 py-1 surface-100 text-color font-semibold">{{ organisation.code }}</code>
      </div>
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">Forfait</span>
        <ng-container *ngIf="organisation.forfait; else noForfait">
          <span
            class="border-round px-2 text-sm font-semibold"
            style="padding-top: 3px; padding-bottom: 3px;"
            [ngClass]="forfaitBadgeClass(organisation.forfait?.slug)"
          >{{ organisation.forfait?.nom }}</span>
        </ng-container>
        <ng-template #noForfait><span class="text-color-secondary">\u2014</span></ng-template>
      </div>
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">Statut</span>
        <span
          class="border-round px-2 text-sm font-semibold"
          style="padding-top: 3px; padding-bottom: 3px;"
          [ngClass]="{
            'bg-green-100 text-green-700':   organisation.statut === 'active',
            'bg-gray-100 text-gray-600':     organisation.statut === 'inactive' || organisation.statut === 'archived',
            'bg-orange-100 text-orange-700': organisation.statut === 'suspended'
          }"
        >{{ organisation.statut || '\u2014' }}</span>
      </div>
    </div>

    <!-- Contact -->
    <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Contact</p>
    <div class="grid mb-4">
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">Email</span>
        <span>{{ organisation.email || '\u2014' }}</span>
      </div>
      <div class="col-12 md:col-6">
        <span class="text-color-secondary text-sm block mb-1">T\xE9l\xE9phone</span>
        <span>{{ organisation.phone || '\u2014' }}</span>
      </div>
    </div>

    <!-- Localisation -->
    <p class="m-0 mb-3 text-sm font-semibold text-color-secondary uppercase" style="letter-spacing:.05em">Localisation</p>
    <div class="grid mb-2">
      <div class="col-12 md:col-4">
        <span class="text-color-secondary text-sm block mb-1">Pays</span>
        <span>{{ organisation.pays || '\u2014' }}</span>
      </div>
      <div class="col-12 md:col-4">
        <span class="text-color-secondary text-sm block mb-1">Ville</span>
        <span>{{ organisation.ville || '\u2014' }}</span>
      </div>
      <div class="col-12 md:col-4">
        <span class="text-color-secondary text-sm block mb-1">Quartier</span>
        <span>{{ organisation.quartier || '\u2014' }}</span>
      </div>
      <div class="col-12">
        <span class="text-color-secondary text-sm block mb-1">Adresse</span>
        <span>{{ organisation.adresse || '\u2014' }}</span>
      </div>
      <div class="col-12">
        <span class="text-color-secondary text-sm block mb-1">Description</span>
        <span>{{ organisation.description || '\u2014' }}</span>
      </div>
    </div>

  </div>
</div>
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
//# sourceMappingURL=chunk-VLOUAJO3.js.map
