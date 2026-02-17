import {
  Divider,
  DividerModule
} from "./chunk-GUS3FLSY.js";
import {
  PERMISSION_ACTIONS
} from "./chunk-HY56XI2G.js";
import {
  Password,
  PasswordModule
} from "./chunk-U5EV76QZ.js";
import "./chunk-PDC4WNQS.js";
import {
  RoleService
} from "./chunk-J7K4IVT7.js";
import {
  ParametresService
} from "./chunk-NQ4DNQ2K.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-G5PVWGBM.js";
import {
  Dialog,
  DialogModule
} from "./chunk-A2LLWIIX.js";
import {
  Toast,
  ToastModule
} from "./chunk-MIKKBFN3.js";
import "./chunk-IAPVHBD4.js";
import {
  AuthService
} from "./chunk-66GARPBB.js";
import "./chunk-RTHJZPEL.js";
import {
  Router,
  RouterModule
} from "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import {
  Tag,
  TagModule
} from "./chunk-V7LXRUI7.js";
import "./chunk-5KB4S2LF.js";
import "./chunk-TRKKYFQF.js";
import "./chunk-5ATNZ2IU.js";
import "./chunk-CJAMEXZR.js";
import "./chunk-CF4ML4KQ.js";
import "./chunk-46OYJGUM.js";
import "./chunk-TITTMCJA.js";
import "./chunk-TEXAILZL.js";
import "./chunk-2UZZQ3O5.js";
import "./chunk-YUZALO6D.js";
import "./chunk-YWX4RJZN.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-VJUJTGB6.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-3ISV5J4X.js";
import "./chunk-SJAYAKU2.js";
import "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  Button,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  catchError,
  forkJoin,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
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
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/parametres/components/parametres-packing/parametres-packing.ts
function ParametresPacking_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ParametresPacking_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
var ParametresPacking = class _ParametresPacking {
  parametresService;
  messageService;
  loading = false;
  saving = false;
  errorMessage = "";
  successMessage = "";
  idRouleauPacking = "";
  prixRouleauDefaut = 0;
  idRouleauParam;
  prixRouleauParam;
  produitRouleauKey = "produit_rouleau_id";
  legacyProduitRouleauKey = "id_rouleau_packing";
  constructor(parametresService, messageService) {
    this.parametresService = parametresService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadPackingParametres();
  }
  loadPackingParametres() {
    this.loading = true;
    this.errorMessage = "";
    this.parametresService.getParametres("packing").subscribe({
      next: (response) => {
        const params = response.data.parametres ?? [];
        this.idRouleauParam = params.find((p) => p.cle === this.produitRouleauKey) ?? params.find((p) => p.cle === this.legacyProduitRouleauKey);
        this.prixRouleauParam = params.find((p) => p.cle === "prix_rouleau_defaut");
        this.idRouleauPacking = this.idRouleauParam?.valeur?.toString() ?? "";
        this.prixRouleauDefaut = Number(this.prixRouleauParam?.valeur ?? 0) || 0;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = "Impossible de charger les parametres.";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: this.errorMessage,
          life: 3e3
        });
        this.loading = false;
      }
    });
  }
  savePackingParametres() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.idRouleauParam || !this.prixRouleauParam) {
      this.errorMessage = "Parametres packing introuvables (produit_rouleau_id / prix_rouleau_defaut).";
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail: this.errorMessage,
        life: 3e3
      });
      return;
    }
    const produitRouleauId = Number(this.idRouleauPacking);
    if (!Number.isFinite(produitRouleauId)) {
      this.errorMessage = 'Le champ "ID du produit rouleau" doit etre numerique.';
      this.messageService.add({
        severity: "warn",
        summary: "Validation",
        detail: this.errorMessage,
        life: 3e3
      });
      return;
    }
    this.saving = true;
    forkJoin([
      this.parametresService.updateParametre(this.idRouleauParam.id, {
        valeur: produitRouleauId
      }).pipe(catchError(() => of(null))),
      this.parametresService.updateParametre(this.prixRouleauParam.id, {
        valeur: Number(this.prixRouleauDefaut || 0)
      }).pipe(catchError(() => of(null)))
    ]).subscribe({
      next: (results) => {
        const hasError = results.some((r) => r === null);
        if (hasError) {
          this.errorMessage = "Une ou plusieurs mises a jour ont echoue.";
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: this.errorMessage,
            life: 3e3
          });
        } else {
          this.successMessage = "Parametres mis a jour avec succes.";
          this.messageService.add({
            severity: "success",
            summary: "Succes",
            detail: this.successMessage,
            life: 3e3
          });
        }
        this.saving = false;
      },
      error: () => {
        this.errorMessage = "Erreur lors de la sauvegarde.";
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: this.errorMessage,
          life: 3e3
        });
        this.saving = false;
      }
    });
  }
  static \u0275fac = function ParametresPacking_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresPacking)(\u0275\u0275directiveInject(ParametresService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresPacking, selectors: [["app-parametres-packing"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 17, vars: 8, consts: [[1, "flex", "flex-col", "gap-8"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg", "leading-tight"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["class", "text-green-600 text-sm", 4, "ngIf"], [1, "flex", "gap-12", "flex-col-reverse", "md:flex-row"], [1, "flex-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-2"], ["for", "produit_rouleau_id", 1, "text-surface-900", "dark:text-surface-0"], ["id", "produit_rouleau_id", "type", "number", "min", "0", "step", "1", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["for", "prix_rouleau_defaut", 1, "text-surface-900", "dark:text-surface-0"], ["id", "prix_rouleau_defaut", "type", "number", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["label", "Enregistrer", "icon", "pi pi-save", 3, "onClick", "loading", "disabled"], [1, "text-red-500", "text-sm"], [1, "text-green-600", "text-sm"]], template: function ParametresPacking_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Parametres Packing");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ParametresPacking_div_3_Template, 2, 1, "div", 2)(4, ParametresPacking_div_4_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
      \u0275\u0275text(9, "ID du produit rouleau (packing)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresPacking_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.idRouleauPacking, $event) || (ctx.idRouleauPacking = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6)(12, "label", 9);
      \u0275\u0275text(13, "Prix par defaut du rouleau de packing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresPacking_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.prixRouleauDefaut, $event) || (ctx.prixRouleauDefaut = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "div")(16, "p-button", 11);
      \u0275\u0275listener("onClick", function ParametresPacking_Template_p_button_onClick_16_listener() {
        return ctx.savePackingParametres();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.idRouleauPacking);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.prixRouleauDefaut);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.saving)("disabled", ctx.loading || ctx.saving);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, ButtonModule, Button, DividerModule, InputTextModule, InputText, ToastModule, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresPacking, [{
    type: Component,
    args: [{ selector: "app-parametres-packing", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DividerModule, InputTextModule, ToastModule, RouterModule], providers: [MessageService], template: ' \r\n      <div class="flex flex-col gap-8">\r\n        <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg leading-tight">Parametres Packing</div>\r\n\r\n        <div *ngIf="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>\r\n        <div *ngIf="successMessage" class="text-green-600 text-sm">{{ successMessage }}</div>\r\n\r\n        <div class="flex gap-12 flex-col-reverse md:flex-row">\r\n          <div class="flex-auto flex flex-col gap-6">\r\n            <div class="flex flex-col gap-2">\r\n              <label for="produit_rouleau_id" class="text-surface-900 dark:text-surface-0">ID du produit rouleau (packing)</label>\r\n              <input\r\n                id="produit_rouleau_id"\r\n                type="number"\r\n                min="0"\r\n                step="1"\r\n                pInputText\r\n                class="w-full"\r\n                [(ngModel)]="idRouleauPacking"\r\n                [disabled]="loading || saving"\r\n              />\r\n            </div>\r\n\r\n            <div class="flex flex-col gap-2">\r\n              <label for="prix_rouleau_defaut" class="text-surface-900 dark:text-surface-0">Prix par defaut du rouleau de packing</label>\r\n              <input\r\n                id="prix_rouleau_defaut"\r\n                type="number"\r\n                pInputText\r\n                class="w-full"\r\n                [(ngModel)]="prixRouleauDefaut"\r\n                [disabled]="loading || saving"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <p-button\r\n            label="Enregistrer"\r\n            icon="pi pi-save"\r\n            [loading]="saving"\r\n            [disabled]="loading || saving"\r\n            (onClick)="savePackingParametres()"\r\n          ></p-button>\r\n        </div>\r\n      </div>\r\n ' }]
  }], () => [{ type: ParametresService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresPacking, { className: "ParametresPacking", filePath: "src/app/pages/parametres/components/parametres-packing/parametres-packing.ts", lineNumber: 23 });
})();

// src/app/pages/parametres/components/parametres-profile/parametres-profile.ts
function ParametresProfile_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ParametresProfile_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
var ParametresProfile = class _ParametresProfile {
  authService;
  messageService;
  loading = false;
  saving = false;
  profileLoaded = false;
  errorMessage = "";
  successMessage = "";
  form = {
    nom: "",
    prenom: "",
    email: "",
    ville: "",
    quartier: ""
  };
  constructor(authService, messageService) {
    this.authService = authService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    this.profileLoaded = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.authService.me().subscribe({
      next: (response) => {
        const user = this.extractUserFromPayload(response?.data) ?? this.authService.currentUser();
        if (!user) {
          this.errorMessage = "Impossible de charger le profile.";
          this.pushMessage("error", "Erreur", this.errorMessage);
          this.loading = false;
          return;
        }
        this.applyUserToForm(user);
        this.profileLoaded = true;
        this.loading = false;
      },
      error: () => {
        const fallbackUser = this.authService.currentUser();
        if (fallbackUser) {
          this.applyUserToForm(fallbackUser);
          this.profileLoaded = true;
          this.loading = false;
          return;
        }
        this.errorMessage = "Impossible de charger le profile.";
        this.pushMessage("error", "Erreur", this.errorMessage);
        this.loading = false;
      }
    });
  }
  saveProfile() {
    if (this.loading || this.saving || !this.profileLoaded) {
      return;
    }
    this.errorMessage = "";
    this.successMessage = "";
    const payload = this.buildUpdatePayload();
    this.saving = true;
    this.authService.updateProfile(payload).subscribe({
      next: (response) => {
        const user = this.extractUserFromPayload(response?.data) ?? this.authService.currentUser();
        if (user) {
          this.applyUserToForm(user);
        }
        this.successMessage = response?.message || "Profil mis a jour avec succes.";
        this.pushMessage("success", "Succes", this.successMessage);
        this.saving = false;
      },
      error: (error) => {
        this.errorMessage = this.extractErrorMessage(error);
        this.pushMessage("error", "Erreur", this.errorMessage);
        this.saving = false;
      }
    });
  }
  buildUpdatePayload() {
    const nom = this.form.nom.trim();
    const prenom = this.form.prenom.trim();
    const email = this.form.email.trim();
    const ville = this.form.ville.trim();
    const quartier = this.form.quartier.trim();
    const payload = {};
    if (nom.length > 0) {
      payload.nom = nom;
    }
    if (prenom.length > 0) {
      payload.prenom = prenom;
    }
    payload.email = email.length > 0 ? email : null;
    if (ville.length > 0) {
      payload.ville = ville;
    }
    if (quartier.length > 0) {
      payload.quartier = quartier;
    }
    return payload;
  }
  applyUserToForm(user) {
    this.form = {
      nom: user.nom ?? "",
      prenom: user.prenom ?? "",
      email: user.email ?? "",
      ville: user.ville ?? "",
      quartier: user.quartier ?? ""
    };
  }
  extractUserFromPayload(payload) {
    if (!payload || typeof payload !== "object") {
      return null;
    }
    const source = payload.user ?? payload;
    if (!source || typeof source !== "object") {
      return null;
    }
    return source;
  }
  extractErrorMessage(error) {
    const validationErrors = error?.error?.errors;
    if (validationErrors && typeof validationErrors === "object") {
      for (const value of Object.values(validationErrors)) {
        if (Array.isArray(value)) {
          const first = value.find((item) => typeof item === "string");
          if (typeof first === "string" && first.trim().length > 0) {
            return first;
          }
        }
      }
    }
    if (typeof error?.error?.message === "string" && error.error.message.trim().length > 0) {
      return error.error.message;
    }
    return "Erreur lors de la mise a jour du profile.";
  }
  pushMessage(severity, summary, detail) {
    this.messageService.add({
      severity,
      summary,
      detail,
      life: 3e3
    });
  }
  static \u0275fac = function ParametresProfile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresProfile)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresProfile, selectors: [["app-parametres-profile"]], decls: 28, vars: 14, consts: [[1, "flex", "flex-col", "gap-8"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg", "leading-tight"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["class", "text-green-600 text-sm", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "flex", "flex-col", "gap-2"], ["for", "profile_nom", 1, "text-surface-900", "dark:text-surface-0"], ["id", "profile_nom", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["for", "profile_prenom", 1, "text-surface-900", "dark:text-surface-0"], ["id", "profile_prenom", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "flex-col", "gap-2", "md:col-span-2"], ["for", "profile_email", 1, "text-surface-900", "dark:text-surface-0"], ["id", "profile_email", "type", "email", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["for", "profile_ville", 1, "text-surface-900", "dark:text-surface-0"], ["id", "profile_ville", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["for", "profile_quartier", 1, "text-surface-900", "dark:text-surface-0"], ["id", "profile_quartier", "type", "text", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["label", "Enregistrer", "icon", "pi pi-save", 3, "onClick", "loading", "disabled"], [1, "text-red-500", "text-sm"], [1, "text-green-600", "text-sm"]], template: function ParametresProfile_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Parametres Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ParametresProfile_div_3_Template, 2, 1, "div", 2)(4, ParametresProfile_div_4_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "label", 6);
      \u0275\u0275text(8, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresProfile_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.nom, $event) || (ctx.form.nom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 8);
      \u0275\u0275text(12, "Prenom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresProfile_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.prenom, $event) || (ctx.form.prenom = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "label", 11);
      \u0275\u0275text(16, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresProfile_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 5)(19, "label", 13);
      \u0275\u0275text(20, "Ville");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresProfile_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.ville, $event) || (ctx.form.ville = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 5)(23, "label", 15);
      \u0275\u0275text(24, "Quartier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresProfile_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.quartier, $event) || (ctx.form.quartier = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div")(27, "p-button", 17);
      \u0275\u0275listener("onClick", function ParametresProfile_Template_p_button_onClick_27_listener() {
        return ctx.saveProfile();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nom);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.prenom);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.ville);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.quartier);
      \u0275\u0275property("disabled", ctx.loading || ctx.saving);
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.saving)("disabled", ctx.loading || ctx.saving);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, InputTextModule, InputText], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresProfile, [{
    type: Component,
    args: [{ selector: "app-parametres-profile", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, InputTextModule], template: '<div class="flex flex-col gap-8">\r\n  <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg leading-tight">Parametres Profile</div>\r\n\r\n  <div *ngIf="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>\r\n  <div *ngIf="successMessage" class="text-green-600 text-sm">{{ successMessage }}</div>\r\n\r\n  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">\r\n    <div class="flex flex-col gap-2">\r\n      <label for="profile_nom" class="text-surface-900 dark:text-surface-0">Nom</label>\r\n      <input\r\n        id="profile_nom"\r\n        type="text"\r\n        pInputText\r\n        class="w-full"\r\n        [(ngModel)]="form.nom"\r\n        [disabled]="loading || saving"\r\n      />\r\n    </div>\r\n\r\n    <div class="flex flex-col gap-2">\r\n      <label for="profile_prenom" class="text-surface-900 dark:text-surface-0">Prenom</label>\r\n      <input\r\n        id="profile_prenom"\r\n        type="text"\r\n        pInputText\r\n        class="w-full"\r\n        [(ngModel)]="form.prenom"\r\n        [disabled]="loading || saving"\r\n      />\r\n    </div>\r\n\r\n    <div class="flex flex-col gap-2 md:col-span-2">\r\n      <label for="profile_email" class="text-surface-900 dark:text-surface-0">Email</label>\r\n      <input\r\n        id="profile_email"\r\n        type="email"\r\n        pInputText\r\n        class="w-full"\r\n        [(ngModel)]="form.email"\r\n        [disabled]="loading || saving"\r\n      />\r\n    </div>\r\n\r\n    <div class="flex flex-col gap-2">\r\n      <label for="profile_ville" class="text-surface-900 dark:text-surface-0">Ville</label>\r\n      <input\r\n        id="profile_ville"\r\n        type="text"\r\n        pInputText\r\n        class="w-full"\r\n        [(ngModel)]="form.ville"\r\n        [disabled]="loading || saving"\r\n      />\r\n    </div>\r\n\r\n    <div class="flex flex-col gap-2">\r\n      <label for="profile_quartier" class="text-surface-900 dark:text-surface-0">Quartier</label>\r\n      <input\r\n        id="profile_quartier"\r\n        type="text"\r\n        pInputText\r\n        class="w-full"\r\n        [(ngModel)]="form.quartier"\r\n        [disabled]="loading || saving"\r\n      />\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <p-button\r\n      label="Enregistrer"\r\n      icon="pi pi-save"\r\n      [loading]="saving"\r\n      [disabled]="loading || saving"\r\n      (onClick)="saveProfile()"\r\n    ></p-button>\r\n  </div>\r\n</div>\r\n' }]
  }], () => [{ type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresProfile, { className: "ParametresProfile", filePath: "src/app/pages/parametres/components/parametres-profile/parametres-profile.ts", lineNumber: 18 });
})();

// src/app/pages/parametres/components/parametres-auth/parametres-auth.ts
function ParametresAuth_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["current_password"]);
  }
}
function ParametresAuth_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["new_password"]);
  }
}
function ParametresAuth_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fieldErrors["new_password_confirmation"]);
  }
}
var ParametresAuth = class _ParametresAuth {
  authService;
  messageService;
  saving = false;
  fieldErrors = {};
  form = {
    current_password: "",
    new_password: "",
    new_password_confirmation: ""
  };
  constructor(authService, messageService) {
    this.authService = authService;
    this.messageService = messageService;
  }
  changePassword() {
    this.fieldErrors = {};
    if (!this.form.current_password) {
      this.fieldErrors["current_password"] = "Le mot de passe actuel est obligatoire";
      return;
    }
    if (!this.form.new_password) {
      this.fieldErrors["new_password"] = "Le nouveau mot de passe est obligatoire";
      return;
    }
    if (this.form.new_password.length < 8) {
      this.fieldErrors["new_password"] = "Le mot de passe doit contenir au moins 8 caract\xE8res";
      return;
    }
    if (this.form.new_password !== this.form.new_password_confirmation) {
      this.fieldErrors["new_password_confirmation"] = "Les mots de passe ne correspondent pas";
      return;
    }
    const payload = {
      current_password: this.form.current_password,
      new_password: this.form.new_password,
      new_password_confirmation: this.form.new_password_confirmation
    };
    this.saving = true;
    this.authService.changePassword(payload).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: response?.message || "Mot de passe modifi\xE9 avec succ\xE8s",
          life: 3e3
        });
        this.form = { current_password: "", new_password: "", new_password_confirmation: "" };
        this.saving = false;
      },
      error: (error) => {
        const validationErrors = error?.error?.errors;
        if (validationErrors && typeof validationErrors === "object") {
          for (const [key, value] of Object.entries(validationErrors)) {
            if (Array.isArray(value) && value.length > 0) {
              this.fieldErrors[key] = value[0];
            }
          }
        }
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: this.extractErrorMessage(error),
          life: 5e3
        });
        this.saving = false;
      }
    });
  }
  extractErrorMessage(error) {
    const validationErrors = error?.error?.errors;
    if (validationErrors && typeof validationErrors === "object") {
      for (const value of Object.values(validationErrors)) {
        if (Array.isArray(value)) {
          const first = value.find((item) => typeof item === "string");
          if (typeof first === "string" && first.trim().length > 0) {
            return first;
          }
        }
      }
    }
    if (typeof error?.error?.message === "string" && error.error.message.trim().length > 0) {
      return error.error.message;
    }
    return "Erreur lors du changement de mot de passe";
  }
  static \u0275fac = function ParametresAuth_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresAuth)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresAuth, selectors: [["app-parametres-auth"]], decls: 23, vars: 17, consts: [[1, "flex", "flex-col", "gap-8"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg", "leading-tight"], [1, "grid", "grid-cols-1", "gap-6", 2, "max-width", "500px"], [1, "flex", "flex-col", "gap-2"], ["for", "current_password", 1, "text-surface-900", "dark:text-surface-0"], ["id", "current_password", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "disabled"], ["class", "text-red-500", 4, "ngIf"], ["for", "new_password", 1, "text-surface-900", "dark:text-surface-0"], ["id", "new_password", "styleClass", "w-full", "inputStyleClass", "w-full", "promptLabel", "Entrez un mot de passe", "weakLabel", "Faible", "mediumLabel", "Moyen", "strongLabel", "Fort", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "disabled"], [1, "text-surface-500"], ["for", "new_password_confirmation", 1, "text-surface-900", "dark:text-surface-0"], ["id", "new_password_confirmation", "styleClass", "w-full", "inputStyleClass", "w-full", 3, "ngModelChange", "ngModel", "toggleMask", "feedback", "disabled"], ["label", "Modifier le mot de passe", "icon", "pi pi-key", 3, "onClick", "loading", "disabled"], [1, "text-red-500"]], template: function ParametresAuth_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Changer le mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6, "Mot de passe actuel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-password", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresAuth_Template_p_password_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.current_password, $event) || (ctx.form.current_password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ParametresAuth_small_8_Template, 2, 1, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 3)(10, "label", 7);
      \u0275\u0275text(11, "Nouveau mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-password", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresAuth_Template_p_password_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.new_password, $event) || (ctx.form.new_password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "small", 9);
      \u0275\u0275text(14, "Min. 8 caract\xE8res, majuscule, minuscule et chiffre");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ParametresAuth_small_15_Template, 2, 1, "small", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 3)(17, "label", 10);
      \u0275\u0275text(18, "Confirmer le nouveau mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-password", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresAuth_Template_p_password_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.new_password_confirmation, $event) || (ctx.form.new_password_confirmation = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, ParametresAuth_small_20_Template, 2, 1, "small", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div")(22, "p-button", 12);
      \u0275\u0275listener("onClick", function ParametresAuth_Template_p_button_onClick_22_listener() {
        return ctx.changePassword();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.current_password);
      \u0275\u0275property("toggleMask", true)("feedback", false)("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fieldErrors["current_password"]);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.new_password);
      \u0275\u0275property("toggleMask", true)("feedback", true)("disabled", ctx.saving);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.fieldErrors["new_password"]);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.new_password_confirmation);
      \u0275\u0275property("toggleMask", true)("feedback", false)("disabled", ctx.saving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fieldErrors["new_password_confirmation"]);
      \u0275\u0275advance(2);
      \u0275\u0275property("loading", ctx.saving)("disabled", ctx.saving);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, PasswordModule, Password], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresAuth, [{
    type: Component,
    args: [{ selector: "app-parametres-auth", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, PasswordModule], template: `<div class="flex flex-col gap-8">\r
  <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg leading-tight">Changer le mot de passe</div>\r
\r
  <div class="grid grid-cols-1 gap-6" style="max-width: 500px;">\r
    <div class="flex flex-col gap-2">\r
      <label for="current_password" class="text-surface-900 dark:text-surface-0">Mot de passe actuel</label>\r
      <p-password\r
        id="current_password"\r
        [(ngModel)]="form.current_password"\r
        [toggleMask]="true"\r
        [feedback]="false"\r
        styleClass="w-full"\r
        inputStyleClass="w-full"\r
        [disabled]="saving"\r
       ></p-password>\r
      <small class="text-red-500" *ngIf="fieldErrors['current_password']">{{ fieldErrors['current_password'] }}</small>\r
    </div>\r
\r
    <div class="flex flex-col gap-2">\r
      <label for="new_password" class="text-surface-900 dark:text-surface-0">Nouveau mot de passe</label>\r
      <p-password\r
        id="new_password"\r
        [(ngModel)]="form.new_password"\r
        [toggleMask]="true"\r
        [feedback]="true"\r
        styleClass="w-full"\r
        inputStyleClass="w-full"\r
        [disabled]="saving"\r
         promptLabel="Entrez un mot de passe"\r
        weakLabel="Faible"\r
        mediumLabel="Moyen"\r
        strongLabel="Fort"\r
      ></p-password>\r
      <small class="text-surface-500">Min. 8 caract\xE8res, majuscule, minuscule et chiffre</small>\r
      <small class="text-red-500" *ngIf="fieldErrors['new_password']">{{ fieldErrors['new_password'] }}</small>\r
    </div>\r
\r
    <div class="flex flex-col gap-2">\r
      <label for="new_password_confirmation" class="text-surface-900 dark:text-surface-0">Confirmer le nouveau mot de passe</label>\r
      <p-password\r
        id="new_password_confirmation"\r
        [(ngModel)]="form.new_password_confirmation"\r
        [toggleMask]="true"\r
        [feedback]="false"\r
        styleClass="w-full"\r
        inputStyleClass="w-full"\r
        [disabled]="saving"\r
       ></p-password>\r
      <small class="text-red-500" *ngIf="fieldErrors['new_password_confirmation']">{{ fieldErrors['new_password_confirmation'] }}</small>\r
    </div>\r
  </div>\r
\r
  <div>\r
    <p-button\r
      label="Modifier le mot de passe"\r
      icon="pi pi-key"\r
      [loading]="saving"\r
      [disabled]="saving"\r
      (onClick)="changePassword()"\r
    ></p-button>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: AuthService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresAuth, { className: "ParametresAuth", filePath: "src/app/pages/parametres/components/parametres-auth/parametres-auth.ts", lineNumber: 17 });
})();

// src/app/pages/parametres/components/parametres-roles-permissions/parametres-roles-permissions.ts
var _c0 = ["dt"];
var _c1 = () => ({ borderRadius: "2rem" });
var _c2 = () => ["role.name"];
var _c3 = () => [5, 10];
var _c4 = () => ({ width: "450px" });
function ParametresRolesPermissions_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 17)(2, "span", 18);
    \u0275\u0275text(3, "Nom ");
    \u0275\u0275element(4, "p-sortIcon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 20)(6, "span", 18);
    \u0275\u0275text(7, "Date de cr\xE9ation ");
    \u0275\u0275element(8, "p-sortIcon", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 22)(10, "span", 23);
    \u0275\u0275text(11, "Permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "th", 24);
    \u0275\u0275elementEnd();
  }
}
function ParametresRolesPermissions_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "div", 26)(3, "span", 27);
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275element(10, "p-tag", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 33)(13, "p-button", 34);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_13_Template_p_button_click_13_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.deleteRole(item_r3);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 35);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_13_Template_p_button_click_14_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.editRole(item_r3));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "var(--p-primary-50)")("color", "var(--p-primary-600)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.role.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDate(item_r3.role.created_at), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.countPermissions(item_r3) + " permissions");
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ParametresRolesPermissions_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36)(2, "div", 37);
    \u0275\u0275element(3, "i", 38);
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "Aucun r\xF4le trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
function ParametresRolesPermissions_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 40);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_23_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createDialog = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 41);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_23_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createRole());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("disabled", ctx_r3.creating);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.creating || !ctx_r3.newRoleName.trim())("loading", ctx_r3.creating);
  }
}
var ParametresRolesPermissions = class _ParametresRolesPermissions {
  roleService;
  messageService;
  confirmationService;
  router;
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  loading = false;
  createDialog = false;
  newRoleName = "";
  creating = false;
  dt;
  constructor(roleService, messageService, confirmationService, router) {
    this.roleService = roleService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.router = router;
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading = true;
    this.roleService.getRoles().subscribe({
      next: (response) => {
        const payload = response?.data;
        const roles = Array.isArray(payload) ? payload : Array.isArray(payload?.roles) ? payload.roles : Array.isArray(payload?.data) ? payload.data : [];
        this.roles.set(roles.map((item) => this.normalizeRoleItem(item)));
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de charger les r\xF4les",
          life: 5e3
        });
        this.loading = false;
      }
    });
  }
  countPermissions(item) {
    return item.modules.reduce((count, m) => {
      return count + PERMISSION_ACTIONS.filter((a) => m.permissions[a]).length;
    }, 0);
  }
  onFilterGlobal(event) {
    const target = event.target;
    if (target) {
      this.dt.filterGlobal(target.value, "contains");
    }
  }
  openCreateDialog() {
    this.newRoleName = "";
    this.createDialog = true;
  }
  createRole() {
    if (!this.newRoleName.trim() || this.creating)
      return;
    this.creating = true;
    this.roleService.createRole({ name: this.newRoleName.trim() }).subscribe({
      next: () => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "R\xF4le cr\xE9\xE9 avec succ\xE8s",
          life: 3e3
        });
        this.createDialog = false;
        this.creating = false;
        this.loadRoles();
      },
      error: (err) => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: err?.error?.message || "Impossible de cr\xE9er le r\xF4le",
          life: 5e3
        });
        this.creating = false;
      }
    });
  }
  editRole(item) {
    this.router.navigate(["/roles/edit", item.role.id]);
  }
  deleteRole(item) {
    if (item.role.name === "admin") {
      this.messageService.add({
        severity: "warn",
        summary: "Attention",
        detail: "Le r\xF4le admin ne peut pas \xEAtre supprim\xE9",
        life: 3e3
      });
      return;
    }
    this.confirmationService.confirm({
      message: `\xCAtes-vous s\xFBr de vouloir supprimer le r\xF4le "${item.role.name}" ?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.roleService.deleteRole(item.role.id).subscribe({
          next: () => {
            this.messageService.add({
              severity: "success",
              summary: "Succ\xE8s",
              detail: "R\xF4le supprim\xE9",
              life: 3e3
            });
            this.loadRoles();
          },
          error: (err) => {
            this.messageService.add({
              severity: "error",
              summary: "Erreur",
              detail: err?.error?.message || "Impossible de supprimer le r\xF4le",
              life: 5e3
            });
          }
        });
      }
    });
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    return new Date(dateStr).toLocaleDateString("fr-FR");
  }
  normalizeRoleItem(item) {
    if (item?.role && Array.isArray(item?.modules)) {
      return item;
    }
    const role = {
      id: Number(item?.id ?? 0),
      name: String(item?.name ?? ""),
      created_at: String(item?.created_at ?? "")
    };
    const permissionNames = Array.isArray(item?.permissions) ? item.permissions.map((p) => typeof p === "string" ? p : p?.name).filter((p) => typeof p === "string" && p.includes(".")) : [];
    const modulesMap = /* @__PURE__ */ new Map();
    permissionNames.forEach((permission) => {
      const [module, action] = permission.split(".");
      if (!module || !action)
        return;
      if (!modulesMap.has(module))
        modulesMap.set(module, /* @__PURE__ */ new Set());
      modulesMap.get(module)?.add(action);
    });
    const modules = Array.from(modulesMap.entries()).map(([module, actions]) => ({
      module,
      permissions: {
        create: actions.has("create"),
        read: actions.has("read"),
        update: actions.has("update"),
        delete: actions.has("delete")
      }
    }));
    return { role, modules };
  }
  static \u0275fac = function ParametresRolesPermissions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresRolesPermissions)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresRolesPermissions, selectors: [["app-parametres-roles-permissions"]], viewQuery: function ParametresRolesPermissions_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 26, vars: 22, consts: [["dt", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4", "md:mb-0"], [1, "inline-flex", "items-center", "gap-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 1, "w-full", 3, "input"], ["icon", "pi pi-plus", "rounded", "", "pTooltip", "Ajouter un r\xF4le", 3, "click"], ["responsiveLayout", "scroll", "dataKey", "role.id", 3, "value", "paginator", "rows", "globalFilterFields", "rowHover", "loading", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Nouveau r\xF4le", 3, "visibleChange", "visible", "modal"], [1, "flex", "flex-col", "gap-4", "pt-2"], ["for", "roleName", 1, "block", "font-bold", "mb-2"], ["pInputText", "", "id", "roleName", "placeholder", "Ex: editeur, manager...", 1, "w-full", 3, "ngModelChange", "keydown.enter", "ngModel"], ["pSortableColumn", "role.name"], [1, "flex", "items-center", "gap-2"], ["field", "role.name"], ["pSortableColumn", "role.created_at"], ["field", "role.created_at"], [1, "text-center"], [1, "flex", "items-center", "justify-center", "gap-2"], [2, "width", "8rem"], [2, "min-width", "10rem"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-9", "h-9", "rounded-lg", "text-sm", "flex-shrink-0"], [1, "pi", "pi-shield"], [1, "font-semibold", "text-surface-800", "dark:text-surface-100", "capitalize"], [1, "text-surface-500", 2, "min-width", "8rem"], [1, "text-center", 2, "min-width", "8rem"], ["severity", "info", 3, "value"], [1, "flex", "items-center", "justify-end", "gap-1"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 3, "click", "text", "rounded"], ["icon", "pi pi-pencil", "severity", "secondary", "pTooltip", "Modifier", 3, "click", "text", "rounded"], ["colspan", "4"], [1, "flex", "flex-col", "items-center", "gap-3", "py-12", "text-surface-300"], [1, "pi", "pi-shield", "text-4xl"], [1, "text-sm"], ["label", "Annuler", "icon", "pi pi-times", 3, "click", "text", "disabled"], ["label", "Cr\xE9er", "icon", "pi pi-check", 3, "click", "disabled", "loading"]], template: function ParametresRolesPermissions_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
      \u0275\u0275text(3, " R\xF4les & Permissions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 8)(5, "p-iconfield");
      \u0275\u0275element(6, "p-inputicon", 9);
      \u0275\u0275elementStart(7, "input", 10);
      \u0275\u0275listener("input", function ParametresRolesPermissions_Template_input_input_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterGlobal($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 11);
      \u0275\u0275listener("click", function ParametresRolesPermissions_Template_p_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCreateDialog());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-table", 12, 0);
      \u0275\u0275template(11, ParametresRolesPermissions_ng_template_11_Template, 13, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, ParametresRolesPermissions_ng_template_13_Template, 15, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, ParametresRolesPermissions_ng_template_15_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-dialog", 13);
      \u0275\u0275twoWayListener("visibleChange", function ParametresRolesPermissions_Template_p_dialog_visibleChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.createDialog, $event) || (ctx.createDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(18, "div", 14)(19, "div")(20, "label", 15);
      \u0275\u0275text(21, "Nom du r\xF4le");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ParametresRolesPermissions_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newRoleName, $event) || (ctx.newRoleName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown.enter", function ParametresRolesPermissions_Template_input_keydown_enter_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createRole());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, ParametresRolesPermissions_ng_template_23_Template, 2, 4, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "p-confirmdialog");
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(17, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.roles())("paginator", true)("rows", 5)("globalFilterFields", \u0275\u0275pureFunction0(18, _c2))("rowHover", true)("loading", ctx.loading)("showCurrentPageReport", false)("rowsPerPageOptions", \u0275\u0275pureFunction0(19, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(20, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.createDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.newRoleName);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c4));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    InputTextModule,
    InputText,
    DialogModule,
    Dialog,
    TagModule,
    Tag,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    ConfirmDialogModule,
    ConfirmDialog,
    TooltipModule,
    Tooltip
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresRolesPermissions, [{
    type: Component,
    args: [{ selector: "app-parametres-roles-permissions", standalone: true, imports: [
      CommonModule,
      FormsModule,
      TableModule,
      ButtonModule,
      InputTextModule,
      DialogModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      ConfirmDialogModule,
      TooltipModule
    ], providers: [ConfirmationService], template: `<div class="flex flex-col gap-6">
  <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
    <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4 md:mb-0">
      R\xF4les & Permissions
    </div>
    <div class="inline-flex items-center gap-2">
      <p-iconfield>
        <p-inputicon class="pi pi-search" />
        <input
          pInputText
          type="text"
          (input)="onFilterGlobal($event)"
          placeholder="Rechercher..."
          [style]="{ borderRadius: '2rem' }"
          class="w-full"
        />
      </p-iconfield>
      <p-button
        icon="pi pi-plus"
        rounded
        pTooltip="Ajouter un r\xF4le"
        (click)="openCreateDialog()"
      />
    </div>
  </div>

  <p-table
    #dt
    [value]="roles()"
    [paginator]="true"
    [rows]="5"
    [globalFilterFields]="['role.name']"
    responsiveLayout="scroll"
    [rowHover]="true"
    dataKey="role.id"
    [loading]="loading"
    [showCurrentPageReport]="false"
     [rowsPerPageOptions]="[5, 10]"
  >
    <ng-template #header>
      <tr>
        <th pSortableColumn="role.name">
          <span class="flex items-center gap-2">Nom <p-sortIcon field="role.name"></p-sortIcon></span>
        </th>
        <th pSortableColumn="role.created_at">
          <span class="flex items-center gap-2">Date de cr\xE9ation <p-sortIcon field="role.created_at"></p-sortIcon></span>
        </th>
        <th class="text-center">
          <span class="flex items-center justify-center gap-2">Permissions</span>
        </th>
        <th style="width: 8rem;"></th>
      </tr>
    </ng-template>
    <ng-template #body let-item>
      <tr>
        <td style="min-width: 10rem;">
          <div class="flex items-center gap-3">
            <span
              class="flex items-center justify-center w-9 h-9 rounded-lg text-sm flex-shrink-0"
              [style.background]="'var(--p-primary-50)'"
              [style.color]="'var(--p-primary-600)'"
            >
              <i class="pi pi-shield"></i>
            </span>
            <span class="font-semibold text-surface-800 dark:text-surface-100 capitalize">{{ item.role.name }}</span>
          </div>
        </td>
        <td style="min-width: 8rem;" class="text-surface-500">
          {{ formatDate(item.role.created_at) }}
        </td>
        <td class="text-center" style="min-width: 8rem;">
          <p-tag [value]="countPermissions(item) + ' permissions'" severity="info" />
        </td>
        <td>
          <div class="flex items-center justify-end gap-1">
            <p-button
              icon="pi pi-trash"
              severity="danger"
              [text]="true"
              [rounded]="true"
              pTooltip="Supprimer"
              (click)="deleteRole(item); $event.stopPropagation()"
            />
            <p-button
              icon="pi pi-pencil"
              severity="secondary"
              [text]="true"
              [rounded]="true"
              pTooltip="Modifier"
              (click)="editRole(item)"
            />
          </div>
        </td>
      </tr>
    </ng-template>
    <ng-template #emptymessage>
      <tr>
        <td colspan="4">
          <div class="flex flex-col items-center gap-3 py-12 text-surface-300">
            <i class="pi pi-shield text-4xl"></i>
            <span class="text-sm">Aucun r\xF4le trouv\xE9</span>
          </div>
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>

<!-- Dialog Cr\xE9ation -->
<p-dialog
  [(visible)]="createDialog"
  [style]="{ width: '450px' }"
  header="Nouveau r\xF4le"
  [modal]="true"
>
  <div class="flex flex-col gap-4 pt-2">
    <div>
      <label for="roleName" class="block font-bold mb-2">Nom du r\xF4le</label>
      <input
        pInputText
        id="roleName"
        [(ngModel)]="newRoleName"
        placeholder="Ex: editeur, manager..."
        class="w-full"
        (keydown.enter)="createRole()"
      />
    </div>
  </div>
  <ng-template #footer>
    <p-button label="Annuler" icon="pi pi-times" [text]="true" (click)="createDialog = false" [disabled]="creating" />
    <p-button
      label="Cr\xE9er"
      icon="pi pi-check"
      (click)="createRole()"
      [disabled]="creating || !newRoleName.trim()"
      [loading]="creating"
    />
  </ng-template>
</p-dialog>

<p-confirmdialog [style]="{ width: '450px' }" />
` }]
  }], () => [{ type: RoleService }, { type: MessageService }, { type: ConfirmationService }, { type: Router }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresRolesPermissions, { className: "ParametresRolesPermissions", filePath: "src/app/pages/parametres/components/parametres-roles-permissions/parametres-roles-permissions.ts", lineNumber: 39 });
})();

// src/app/pages/parametres/parametres-liste/parametres-liste.ts
function ParametresListe_app_parametres_profile_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-profile");
  }
}
function ParametresListe_app_parametres_auth_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-auth");
  }
}
function ParametresListe_app_parametres_packing_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-packing");
  }
}
function ParametresListe_app_parametres_roles_permissions_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-roles-permissions");
  }
}
var ParametresListe = class _ParametresListe {
  activeSection = "profile";
  setActiveSection(section) {
    this.activeSection = section;
  }
  onSectionClick(event, section) {
    event.preventDefault();
    event.stopPropagation();
    this.setActiveSection(section);
  }
  isActive(section) {
    return this.activeSection === section;
  }
  static \u0275fac = function ParametresListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresListe)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresListe, selectors: [["app-parametres-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 36, vars: 12, consts: [[1, "rounded-t-3xl", "bg-surface-0", "dark:bg-surface-900", "flex-auto", "py-6", "lg:py-8", "px-8", "lg:px-20"], [1, "flex", "flex-col", "w-full", "pb-8", "gap-2"], [1, "mt-0", "text-surface-900", "dark:text-surface-0", "font-medium", "text-2xl", "leading-tight"], [1, "mt-0", "text-surface-500", "dark:text-surface-300", "leading-tight"], [1, "grid", "grid-cols-12", "gap-4", "py-6", "lg:py-8"], [1, "col-span-12", "lg:col-span-2"], [1, "list-none", "m-0", "p-0", "hidden", "lg:flex", "flex-col", "justify-start"], [1, "-ml-[2px]", 3, "ngClass"], ["href", "#", 1, "w-full", "text-left", "flex", "items-center", "py-3", "px-4", "font-medium", "transition-colors", "hover:text-primary", 3, "click", "ngClass"], [1, "pi", "pi-user", "mr-2", "text-base!", "leading-normal!"], [1, "pi", "pi-lock", "mr-2", "text-base!", "leading-normal!"], [1, "pi", "pi-cog", "mr-2", "text-base!", "leading-normal!"], [1, "pi", "pi-shield", "mr-2", "text-base!", "leading-normal!"], [1, "col-span-12", "lg:col-span-10", "xl:col-span-10", "bg-surface-0", "dark:bg-surface-900", "p-8", "rounded-2xl", "flex-auto"], [4, "ngIf"]], template: function ParametresListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h2", 2);
      \u0275\u0275text(4, "Parametres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestion des parametres de l'application");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "p-divider");
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "ul", 6)(11, "li", 7)(12, "a", 8);
      \u0275\u0275listener("click", function ParametresListe_Template_a_click_12_listener($event) {
        return ctx.onSectionClick($event, "profile");
      });
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Profile");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "li", 7)(17, "a", 8);
      \u0275\u0275listener("click", function ParametresListe_Template_a_click_17_listener($event) {
        return ctx.onSectionClick($event, "auth");
      });
      \u0275\u0275element(18, "i", 10);
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Authentification");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li", 7)(22, "a", 8);
      \u0275\u0275listener("click", function ParametresListe_Template_a_click_22_listener($event) {
        return ctx.onSectionClick($event, "packing");
      });
      \u0275\u0275element(23, "i", 11);
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Packing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "li", 7)(27, "a", 8);
      \u0275\u0275listener("click", function ParametresListe_Template_a_click_27_listener($event) {
        return ctx.onSectionClick($event, "roles");
      });
      \u0275\u0275element(28, "i", 12);
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "R\xF4les & Permissions");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(31, "div", 13);
      \u0275\u0275template(32, ParametresListe_app_parametres_profile_32_Template, 1, 0, "app-parametres-profile", 14)(33, ParametresListe_app_parametres_auth_33_Template, 1, 0, "app-parametres-auth", 14)(34, ParametresListe_app_parametres_packing_34_Template, 1, 0, "app-parametres-packing", 14)(35, ParametresListe_app_parametres_roles_permissions_35_Template, 1, 0, "app-parametres-roles-permissions", 14);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngClass", ctx.isActive("profile") ? "border-l-2 border-primary" : "border-l-2 border-surface-200 dark:border-surface-700");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isActive("profile") ? "text-primary" : "text-surface-700 dark:text-surface-200");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isActive("auth") ? "border-l-2 border-primary" : "border-l-2 border-surface-200 dark:border-surface-700");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isActive("auth") ? "text-primary" : "text-surface-700 dark:text-surface-200");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isActive("packing") ? "border-l-2 border-primary" : "border-l-2 border-surface-200 dark:border-surface-700");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isActive("packing") ? "text-primary" : "text-surface-700 dark:text-surface-200");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", ctx.isActive("roles") ? "border-l-2 border-primary" : "border-l-2 border-surface-200 dark:border-surface-700");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.isActive("roles") ? "text-primary" : "text-surface-700 dark:text-surface-200");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isActive("profile"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isActive("auth"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isActive("packing"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isActive("roles"));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ParametresAuth, DividerModule, Divider, ToastModule, Toast, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresListe, [{
    type: Component,
    args: [{ selector: "app-parametres-liste", standalone: true, imports: [CommonModule, ParametresAuth, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions], providers: [MessageService], template: `<p-toast></p-toast>\r
\r
<div class="rounded-t-3xl bg-surface-0 dark:bg-surface-900 flex-auto py-6 lg:py-8 px-8 lg:px-20">\r
  <div class="flex flex-col w-full pb-8 gap-2">\r
    <h2 class="mt-0 text-surface-900 dark:text-surface-0 font-medium text-2xl leading-tight">Parametres</h2>\r
    <p class="mt-0 text-surface-500 dark:text-surface-300 leading-tight">Gestion des parametres de l'application</p>\r
  </div>\r
\r
  <p-divider></p-divider>\r
\r
  <div class="grid grid-cols-12 gap-4 py-6 lg:py-8">\r
    <div class="col-span-12 lg:col-span-2">\r
      <ul class="list-none m-0 p-0 hidden lg:flex flex-col justify-start">\r
        <li class="-ml-[2px]" [ngClass]="isActive('profile') ? 'border-l-2 border-primary' : 'border-l-2 border-surface-200 dark:border-surface-700'">\r
          <a\r
            href="#"\r
            class="w-full text-left flex items-center py-3 px-4 font-medium transition-colors hover:text-primary"\r
            [ngClass]="isActive('profile') ? 'text-primary' : 'text-surface-700 dark:text-surface-200'"\r
            (click)="onSectionClick($event, 'profile')"\r
          >\r
            <i class="pi pi-user mr-2 text-base! leading-normal!"></i>\r
            <span>Profile</span>\r
          </a>\r
        </li>\r
        <li class="-ml-[2px]" [ngClass]="isActive('auth') ? 'border-l-2 border-primary' : 'border-l-2 border-surface-200 dark:border-surface-700'">\r
          <a\r
            href="#"\r
            class="w-full text-left flex items-center py-3 px-4 font-medium transition-colors hover:text-primary"\r
            [ngClass]="isActive('auth') ? 'text-primary' : 'text-surface-700 dark:text-surface-200'"\r
            (click)="onSectionClick($event, 'auth')"\r
          >\r
            <i class="pi pi-lock mr-2 text-base! leading-normal!"></i>\r
            <span>Authentification</span>\r
          </a>\r
        </li>\r
        <li class="-ml-[2px]" [ngClass]="isActive('packing') ? 'border-l-2 border-primary' : 'border-l-2 border-surface-200 dark:border-surface-700'">\r
          <a\r
            href="#"\r
            class="w-full text-left flex items-center py-3 px-4 font-medium transition-colors hover:text-primary"\r
            [ngClass]="isActive('packing') ? 'text-primary' : 'text-surface-700 dark:text-surface-200'"\r
            (click)="onSectionClick($event, 'packing')"\r
          >\r
            <i class="pi pi-cog mr-2 text-base! leading-normal!"></i>\r
            <span>Packing</span>\r
          </a>\r
        </li>\r
        <li class="-ml-[2px]" [ngClass]="isActive('roles') ? 'border-l-2 border-primary' : 'border-l-2 border-surface-200 dark:border-surface-700'">\r
          <a\r
            href="#"\r
            class="w-full text-left flex items-center py-3 px-4 font-medium transition-colors hover:text-primary"\r
            [ngClass]="isActive('roles') ? 'text-primary' : 'text-surface-700 dark:text-surface-200'"\r
            (click)="onSectionClick($event, 'roles')"\r
          >\r
            <i class="pi pi-shield mr-2 text-base! leading-normal!"></i>\r
            <span>R\xF4les & Permissions</span>\r
          </a>\r
        </li>\r
      </ul>\r
    </div>\r
    <div class="col-span-12 lg:col-span-10 xl:col-span-10 bg-surface-0 dark:bg-surface-900 p-8 rounded-2xl flex-auto">\r
      <app-parametres-profile *ngIf="isActive('profile')"></app-parametres-profile>\r
      <app-parametres-auth *ngIf="isActive('auth')"></app-parametres-auth>\r
      <app-parametres-packing *ngIf="isActive('packing')"></app-parametres-packing>\r
      <app-parametres-roles-permissions *ngIf="isActive('roles')"></app-parametres-roles-permissions>\r
     </div>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresListe, { className: "ParametresListe", filePath: "src/app/pages/parametres/parametres-liste/parametres-liste.ts", lineNumber: 22 });
})();

// src/app/pages/parametres/parametres.routes.ts
var parametres_routes_default = [
  { path: "", component: ParametresListe, data: { breadcrumb: "Param\xE8tres" } },
  { path: "parametres", component: ParametresListe, data: { breadcrumb: "Param\xE8tres" } }
];
export {
  parametres_routes_default as default
};
//# sourceMappingURL=chunk-3VCXMMF7.js.map
