import {
  ForfaitService
} from "./chunk-DRWCPTNQ.js";
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
import "./chunk-A74EIJKM.js";
import "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Table,
  TableModule
} from "./chunk-YJFTPERB.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-FF4N4CLH.js";
import "./chunk-XJQGXQLA.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import "./chunk-EZGYU3RQ.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-IEELAHW7.js";
import "./chunk-EAAVSGUN.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import "./chunk-7GQXFRTV.js";
import "./chunk-CSVYKJ4F.js";
import "./chunk-K7KGEHY2.js";
import "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
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
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LK4MJDWN.js";
import {
  Tooltip,
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
  ConfirmationService,
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/models/forfait.model.ts
function formatForfaitPrix(prix) {
  if (!prix)
    return "0 GNF";
  const n = parseFloat(prix);
  if (isNaN(n))
    return prix;
  return new Intl.NumberFormat("fr-FR").format(n) + " GNF";
}

// src/app/pages/forfaits/forfaits-liste/forfaits-liste.ts
var _c0 = () => ({ width: "38rem", maxWidth: "96vw" });
var _c1 = (a0, a1, a2) => ({ "bg-gray-100 text-gray-700": a0, "bg-blue-100 text-blue-700": a1, "bg-yellow-100 text-yellow-700": a2 });
var _c2 = (a0, a1) => ({ "bg-green-100 text-green-700": a0, "bg-gray-100 text-gray-600": a1 });
function ForfaitsListe_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Prix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 28);
    \u0275\u0275text(12, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ForfaitsListe_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "code", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 28)(15, "div", 33)(16, "button", 34);
    \u0275\u0275listener("click", function ForfaitsListe_ng_template_10_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditDialog(item_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function ForfaitsListe_ng_template_10_Template_button_click_17_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmDelete(item_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c1, item_r2.slug === "starter", item_r2.slug === "standard", item_r2.slug === "premium"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.slug);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatPrix(item_r2.prix));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c2, item_r2.is_active, !item_r2.is_active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.is_active ? "Actif" : "Inactif");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.description || "\u2014");
  }
}
function ForfaitsListe_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, " Aucun forfait disponible. ");
    \u0275\u0275elementEnd()();
  }
}
function ForfaitsListe_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1, " Slug requis (lettres minuscules, chiffres, - ou _). ");
    \u0275\u0275elementEnd();
  }
}
function ForfaitsListe_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, " Non modifiable apr\xE8s cr\xE9ation. ");
    \u0275\u0275elementEnd();
  }
}
function ForfaitsListe_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1, "Nom requis.");
    \u0275\u0275elementEnd();
  }
}
var ForfaitsListe = class _ForfaitsListe {
  forfaitService = inject(ForfaitService);
  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  fb = inject(FormBuilder);
  forfaits = [];
  loading = false;
  saving = false;
  dialogVisible = false;
  editingId = null;
  forfaitForm = this.fb.nonNullable.group({
    slug: ["", [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-z0-9_-]+$/)]],
    nom: ["", [Validators.required, Validators.maxLength(191)]],
    prix: [0],
    description: [""],
    is_active: [true]
  });
  ngOnInit() {
    this.loadForfaits();
  }
  get dialogTitle() {
    return this.editingId ? "Modifier le forfait" : "Nouveau forfait";
  }
  loadForfaits() {
    this.loading = true;
    this.forfaitService.getAll().subscribe({
      next: (items) => {
        this.forfaits = items;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "Chargement impossible.");
      }
    });
  }
  openCreateDialog() {
    this.editingId = null;
    this.forfaitForm.reset({ slug: "", nom: "", prix: 0, description: "", is_active: true });
    this.forfaitForm.get("slug").enable();
    this.dialogVisible = true;
  }
  openEditDialog(item) {
    this.editingId = item.id;
    this.forfaitForm.reset({
      slug: item.slug,
      nom: item.nom,
      prix: parseFloat(item.prix) || 0,
      description: item.description ?? "",
      is_active: item.is_active
    });
    this.forfaitForm.get("slug").disable();
    this.dialogVisible = true;
  }
  closeDialog() {
    this.dialogVisible = false;
    this.saving = false;
  }
  submitForm() {
    this.forfaitForm.markAllAsTouched();
    if (this.forfaitForm.invalid || this.saving)
      return;
    const raw = this.forfaitForm.getRawValue();
    const dto = {
      slug: raw.slug.trim(),
      nom: raw.nom.trim(),
      prix: raw.prix ?? 0,
      description: raw.description?.trim() || null,
      is_active: raw.is_active
    };
    this.saving = true;
    const req$ = this.editingId ? this.forfaitService.update(this.editingId, dto) : this.forfaitService.create(dto);
    req$.subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: this.editingId ? "Forfait mis \xE0 jour." : "Forfait cr\xE9\xE9.",
          life: 3e3
        });
        this.loadForfaits();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "Enregistrement impossible.");
      }
    });
  }
  confirmDelete(item) {
    this.confirmationService.confirm({
      header: "Suppression",
      message: `Supprimer le forfait "${item.nom}" ?`,
      icon: "pi pi-exclamation-triangle",
      acceptButtonStyleClass: "p-button-danger p-button-sm",
      rejectButtonStyleClass: "p-button-text p-button-sm",
      accept: () => {
        this.forfaitService.delete(item.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "Forfait supprim\xE9.",
              life: 3e3
            });
            this.loadForfaits();
          },
          error: (err) => this.showApiError(err, "Suppression impossible.")
        });
      }
    });
  }
  formatPrix(prix) {
    return formatForfaitPrix(prix);
  }
  isInvalid(field) {
    const c = this.forfaitForm.get(field);
    return c.invalid && (c.dirty || c.touched);
  }
  showApiError(error, fallback) {
    if (error?.status === 422 && error?.error?.errors) {
      Object.values(error.error.errors).flat().forEach((msg) => this.messageService.add({ severity: "error", summary: "Validation", detail: msg, life: 5e3 }));
      return;
    }
    const detail = typeof error?.error?.message === "string" && error.error.message || typeof error?.message === "string" && error.message || fallback;
    this.messageService.add({ severity: "error", summary: "Erreur", detail, life: 5e3 });
  }
  static \u0275fac = function ForfaitsListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForfaitsListe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForfaitsListe, selectors: [["app-forfaits-liste"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 46, vars: 20, consts: [[1, "card"], [1, "flex", "align-items-center", "justify-content-between", "mb-4", "gap-3", "flex-wrap"], [1, "m-0", "text-2xl", "font-semibold"], [1, "m-0", "text-color-secondary"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "label", "Nouveau forfait", 3, "click"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "onHide", "visible", "header", "modal", "draggable"], [1, "grid", 3, "ngSubmit", "formGroup"], [1, "col-12", "md:col-6"], [1, "block", "mb-2", "font-medium"], [1, "text-red-500"], ["pInputText", "", "type", "text", "formControlName", "slug", "placeholder", "ex: enterprise", 1, "w-full"], ["class", "text-red-500", 4, "ngIf"], ["class", "text-color-secondary", 4, "ngIf"], ["pInputText", "", "type", "text", "formControlName", "nom", "placeholder", "ex: Enterprise", 1, "w-full"], ["formControlName", "prix", "mode", "decimal", "locale", "fr-FR", "styleClass", "w-full", "placeholder", "0", 3, "min"], [1, "col-12", "md:col-6", "flex", "align-items-end", "pb-1"], [1, "flex", "align-items-center", "gap-2", "cursor-pointer"], ["formControlName", "is_active", 3, "binary"], [1, "font-medium"], [1, "col-12"], ["pTextarea", "", "rows", "2", "formControlName", "description", "placeholder", "Description courte du forfait\u2026", 1, "w-full"], [1, "col-12", "flex", "justify-content-end", "gap-2", "mt-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "type", "button", "label", "Annuler", 1, "p-button-text", 3, "click"], ["pButton", "", "type", "submit", "label", "Enregistrer", 3, "loading"], [1, "text-right"], [1, "font-semibold"], [1, "border-round", "px-2", "text-xs", "font-semibold", 2, "padding-top", "3px", "padding-bottom", "3px", 3, "ngClass"], [1, "text-sm", "border-round", "px-2", "py-1", "surface-100", "text-color-secondary"], [1, "text-color-secondary", "text-sm"], [1, "flex", "justify-content-end", "gap-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "pTooltip", "Modifier", 1, "p-button-text", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Supprimer", 1, "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "6", 1, "text-center", "text-color-secondary", "py-5"], [1, "text-color-secondary"]], template: function ForfaitsListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Forfaits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Plans d'abonnement propos\xE9s aux organisations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function ForfaitsListe_Template_button_click_7_listener() {
        return ctx.openCreateDialog();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-table", 5);
      \u0275\u0275template(9, ForfaitsListe_ng_template_9_Template, 13, 0, "ng-template", 6)(10, ForfaitsListe_ng_template_10_Template, 18, 14, "ng-template", 7)(11, ForfaitsListe_ng_template_11_Template, 3, 0, "ng-template", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "p-dialog", 9);
      \u0275\u0275twoWayListener("visibleChange", function ForfaitsListe_Template_p_dialog_visibleChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return $event;
      });
      \u0275\u0275listener("onHide", function ForfaitsListe_Template_p_dialog_onHide_12_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(13, "form", 10);
      \u0275\u0275listener("ngSubmit", function ForfaitsListe_Template_form_ngSubmit_13_listener() {
        return ctx.submitForm();
      });
      \u0275\u0275elementStart(14, "div", 11)(15, "label", 12);
      \u0275\u0275text(16, "Slug ");
      \u0275\u0275elementStart(17, "span", 13);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275template(20, ForfaitsListe_small_20_Template, 2, 0, "small", 15)(21, ForfaitsListe_small_21_Template, 2, 0, "small", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 12);
      \u0275\u0275text(24, "Nom ");
      \u0275\u0275elementStart(25, "span", 13);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275template(28, ForfaitsListe_small_28_Template, 2, 0, "small", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 11)(30, "label", 12);
      \u0275\u0275text(31, "Prix (GNF)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "p-inputnumber", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 19)(34, "label", 20);
      \u0275\u0275element(35, "p-checkbox", 21);
      \u0275\u0275elementStart(36, "span", 22);
      \u0275\u0275text(37, "Forfait actif");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 23)(39, "label", 12);
      \u0275\u0275text(40, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "textarea", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 25)(43, "button", 26);
      \u0275\u0275listener("click", function ForfaitsListe_Template_button_click_43_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "button", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(45, "p-confirmDialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.forfaits)("loading", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c0));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("header", ctx.dialogTitle)("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.forfaitForm);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("slug"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isInvalid("slug"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editingId);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("ng-invalid", ctx.isInvalid("nom"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isInvalid("nom"));
      \u0275\u0275advance(4);
      \u0275\u0275property("min", 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("binary", true);
      \u0275\u0275advance(9);
      \u0275\u0275property("loading", ctx.saving);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TableModule, Table, PrimeTemplate, ButtonModule, ButtonDirective, DialogModule, Dialog, InputTextModule, InputText, InputNumberModule, InputNumber, TextareaModule, Textarea, CheckboxModule, Checkbox, TooltipModule, Tooltip, ConfirmDialogModule, ConfirmDialog], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForfaitsListe, [{
    type: Component,
    args: [{ selector: "app-forfaits-liste", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      DialogModule,
      InputTextModule,
      InputNumberModule,
      TextareaModule,
      CheckboxModule,
      TooltipModule,
      ConfirmDialogModule
    ], providers: [ConfirmationService], template: `<div class="card">
  <div class="flex align-items-center justify-content-between mb-4 gap-3 flex-wrap">
    <div>
      <h2 class="m-0 text-2xl font-semibold">Forfaits</h2>
      <p class="m-0 text-color-secondary">Plans d'abonnement propos\xE9s aux organisations.</p>
    </div>
    <button pButton type="button" icon="pi pi-plus" label="Nouveau forfait" (click)="openCreateDialog()"></button>
  </div>

  <p-table [value]="forfaits" [loading]="loading" dataKey="id" responsiveLayout="scroll">
    <ng-template pTemplate="header">
      <tr>
        <th>Nom</th>
        <th>Slug</th>
        <th>Prix</th>
        <th>Statut</th>
        <th>Description</th>
        <th class="text-right">Actions</th>
      </tr>
    </ng-template>

    <ng-template pTemplate="body" let-item>
      <tr>
        <td class="font-semibold">
          <span
            class="border-round px-2 text-xs font-semibold"
            style="padding-top: 3px; padding-bottom: 3px;"
            [ngClass]="{
              'bg-gray-100 text-gray-700':     item.slug === 'starter',
              'bg-blue-100 text-blue-700':     item.slug === 'standard',
              'bg-yellow-100 text-yellow-700': item.slug === 'premium'
            }"
          >{{ item.nom }}</span>
        </td>
        <td>
          <code class="text-sm border-round px-2 py-1 surface-100 text-color-secondary">{{ item.slug }}</code>
        </td>
        <td class="font-semibold">{{ formatPrix(item.prix) }}</td>
        <td>
          <span
            class="border-round px-2 text-xs font-semibold"
            style="padding-top: 3px; padding-bottom: 3px;"
            [ngClass]="{
              'bg-green-100 text-green-700': item.is_active,
              'bg-gray-100 text-gray-600':  !item.is_active
            }"
          >{{ item.is_active ? 'Actif' : 'Inactif' }}</span>
        </td>
        <td class="text-color-secondary text-sm">{{ item.description || '\u2014' }}</td>
        <td class="text-right">
          <div class="flex justify-content-end gap-2">
            <button
              pButton pRipple type="button"
              class="p-button-text p-button-sm"
              icon="pi pi-pencil"
              pTooltip="Modifier"
              (click)="openEditDialog(item)"
            ></button>
            <button
              pButton pRipple type="button"
              class="p-button-text p-button-danger p-button-sm"
              icon="pi pi-trash"
              pTooltip="Supprimer"
              (click)="confirmDelete(item)"
            ></button>
          </div>
        </td>
      </tr>
    </ng-template>

    <ng-template pTemplate="emptymessage">
      <tr>
        <td colspan="6" class="text-center text-color-secondary py-5">
          Aucun forfait disponible.
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>

<!-- Dialog cr\xE9ation / modification -->
<p-dialog
  [(visible)]="dialogVisible"
  [header]="dialogTitle"
  [modal]="true"
  [style]="{ width: '38rem', maxWidth: '96vw' }"
  [draggable]="false"
  (onHide)="closeDialog()"
>
  <form class="grid" [formGroup]="forfaitForm" (ngSubmit)="submitForm()">

    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Slug <span class="text-red-500">*</span></label>
      <input
        pInputText type="text" class="w-full"
        formControlName="slug"
        placeholder="ex: enterprise"
        [class.ng-invalid]="isInvalid('slug')"
      />
      <small *ngIf="isInvalid('slug')" class="text-red-500">
        Slug requis (lettres minuscules, chiffres, - ou _).
      </small>
      <small *ngIf="editingId" class="text-color-secondary">
        Non modifiable apr\xE8s cr\xE9ation.
      </small>
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Nom <span class="text-red-500">*</span></label>
      <input
        pInputText type="text" class="w-full"
        formControlName="nom"
        placeholder="ex: Enterprise"
        [class.ng-invalid]="isInvalid('nom')"
      />
      <small *ngIf="isInvalid('nom')" class="text-red-500">Nom requis.</small>
    </div>

    <div class="col-12 md:col-6">
      <label class="block mb-2 font-medium">Prix (GNF)</label>
      <p-inputnumber
        formControlName="prix"
        [min]="0"
        mode="decimal"
        locale="fr-FR"
        styleClass="w-full"
        placeholder="0"
      />
    </div>

    <div class="col-12 md:col-6 flex align-items-end pb-1">
      <label class="flex align-items-center gap-2 cursor-pointer">
        <p-checkbox formControlName="is_active" [binary]="true" />
        <span class="font-medium">Forfait actif</span>
      </label>
    </div>

    <div class="col-12">
      <label class="block mb-2 font-medium">Description</label>
      <textarea pTextarea rows="2" class="w-full" formControlName="description" placeholder="Description courte du forfait\u2026"></textarea>
    </div>

    <div class="col-12 flex justify-content-end gap-2 mt-2 pt-3 border-top-1 surface-border">
      <button pButton type="button" class="p-button-text" label="Annuler" (click)="closeDialog()"></button>
      <button pButton type="submit" [loading]="saving" label="Enregistrer"></button>
    </div>
  </form>
</p-dialog>

<p-confirmDialog></p-confirmDialog>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForfaitsListe, { className: "ForfaitsListe", filePath: "src/app/pages/forfaits/forfaits-liste/forfaits-liste.ts", lineNumber: 38 });
})();

// src/app/pages/forfaits/forfaits.routes.ts
var forfaits_routes_default = [
  {
    path: "",
    component: ForfaitsListe,
    canActivate: [authorizationGuard],
    data: { breadcrumb: "forfaits", roles: ["super_admin", "super-admin"] }
  }
];
export {
  forfaits_routes_default as default
};
//# sourceMappingURL=chunk-LD7AI7HX.js.map
