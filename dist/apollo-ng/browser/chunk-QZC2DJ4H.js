import {
  PERMISSION_ACTIONS
} from "./chunk-HY56XI2G.js";
import {
  ParametresService
} from "./chunk-KAFGQ6RR.js";
import {
  ToggleSwitch,
  ToggleSwitchModule
} from "./chunk-QHAUGTLE.js";
import {
  Divider,
  DividerModule
} from "./chunk-L7MB6DHN.js";
import {
  Password,
  PasswordModule
} from "./chunk-FSV4P5UQ.js";
import "./chunk-PKJWJUHR.js";
import {
  RoleService
} from "./chunk-PEXQZYZZ.js";
import {
  ConfirmDialog,
  ConfirmDialogModule
} from "./chunk-3GKIIVSI.js";
import {
  Dialog,
  DialogModule
} from "./chunk-DQ4T5ATO.js";
import {
  AuthService
} from "./chunk-A74EIJKM.js";
import {
  Router,
  RouterModule
} from "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import {
  Toast,
  ToastModule
} from "./chunk-AYC4YOKB.js";
import "./chunk-5T35AX3S.js";
import {
  SortIcon,
  SortableColumn,
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
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-LK4MJDWN.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import {
  Button,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-EC5CTPX4.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  catchError,
  computed,
  forkJoin,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
} from "./chunk-ZUORBSMF.js";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresPacking, selectors: [["app-parametres-packing"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 17, vars: 9, consts: [[1, "flex", "flex-col", "gap-8"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg", "leading-tight"], ["class", "text-red-500 text-sm", 4, "ngIf"], ["class", "text-green-600 text-sm", 4, "ngIf"], [1, "flex", "gap-12", "flex-col-reverse", "md:flex-row"], [1, "flex-auto", "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "gap-2"], ["for", "produit_rouleau_id", 1, "text-surface-900", "dark:text-surface-0"], ["id", "produit_rouleau_id", "type", "number", "min", "0", "step", "1", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "readonly", "disabled"], ["for", "prix_rouleau_defaut", 1, "text-surface-900", "dark:text-surface-0"], ["id", "prix_rouleau_defaut", "type", "number", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel", "disabled"], ["label", "Enregistrer", "icon", "pi pi-save", 3, "onClick", "loading", "disabled"], [1, "text-red-500", "text-sm"], [1, "text-green-600", "text-sm"]], template: function ParametresPacking_Template(rf, ctx) {
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
      \u0275\u0275property("readonly", true)("disabled", ctx.loading);
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
    args: [{ selector: "app-parametres-packing", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DividerModule, InputTextModule, ToastModule, RouterModule], providers: [MessageService], template: ' \r\n      <div class="flex flex-col gap-8">\n        <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg leading-tight">Parametres Packing</div>\n\n        <div *ngIf="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</div>\n        <div *ngIf="successMessage" class="text-green-600 text-sm">{{ successMessage }}</div>\n\r\n        <div class="flex gap-12 flex-col-reverse md:flex-row">\r\n          <div class="flex-auto flex flex-col gap-6">\r\n            <div class="flex flex-col gap-2">\r\n              <label for="produit_rouleau_id" class="text-surface-900 dark:text-surface-0">ID du produit rouleau (packing)</label>\r\n              <input\n                id="produit_rouleau_id"\n                type="number"\n                min="0"\n                step="1"\n                pInputText\n                class="w-full"\n                [(ngModel)]="idRouleauPacking"\n                [readonly]="true"\n                [disabled]="loading"\n              />\n            </div>\n\r\n            <div class="flex flex-col gap-2">\r\n              <label for="prix_rouleau_defaut" class="text-surface-900 dark:text-surface-0">Prix par defaut du rouleau de packing</label>\r\n              <input\r\n                id="prix_rouleau_defaut"\r\n                type="number"\r\n                pInputText\n                class="w-full"\n                [(ngModel)]="prixRouleauDefaut"\n                [disabled]="loading || saving"\n              />\n            </div>\n          </div>\n        </div>\r\n\r\n        <div>\r\n          <p-button\r\n            label="Enregistrer"\n            icon="pi pi-save"\n            [loading]="saving"\n            [disabled]="loading || saving"\n            (onClick)="savePackingParametres()"\n          ></p-button>\n        </div>\n      </div>\n \n' }]
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
function ParametresRolesPermissions_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("click", function ParametresRolesPermissions_p_button_8_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
}
function ParametresRolesPermissions_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18)(2, "span", 19);
    \u0275\u0275text(3, "Nom ");
    \u0275\u0275element(4, "p-sortIcon", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 21)(6, "span", 19);
    \u0275\u0275text(7, "Date de cr\xE9ation ");
    \u0275\u0275element(8, "p-sortIcon", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 23)(10, "span", 24);
    \u0275\u0275text(11, "Permissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "th", 25);
    \u0275\u0275elementEnd();
  }
}
function ParametresRolesPermissions_ng_template_13_p_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_13_p_button_13_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const item_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.deleteRole(item_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ParametresRolesPermissions_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 26)(2, "div", 27)(3, "span", 28);
    \u0275\u0275element(4, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275element(10, "p-tag", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 34);
    \u0275\u0275template(13, ParametresRolesPermissions_ng_template_13_p_button_13_Template, 1, 2, "p-button", 35);
    \u0275\u0275elementStart(14, "p-button", 36);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_13_Template_p_button_click_14_listener() {
      const item_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editRole(item_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "var(--p-primary-50)")("color", "var(--p-primary-600)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.role.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(item_r6.role.created_at), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.countPermissions(item_r6) + " permissions");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isSuperAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ParametresRolesPermissions_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38)(2, "div", 39);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5, "Aucun r\xF4le trouv\xE9");
    \u0275\u0275elementEnd()()()();
  }
}
function ParametresRolesPermissions_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 42);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_23_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createDialog = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 43);
    \u0275\u0275listener("click", function ParametresRolesPermissions_ng_template_23_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createRole());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("text", true)("disabled", ctx_r2.creating);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.creating || !ctx_r2.newRoleName.trim())("loading", ctx_r2.creating);
  }
}
var ParametresRolesPermissions = class _ParametresRolesPermissions {
  roleService;
  authService;
  messageService;
  confirmationService;
  router;
  roles = signal([], ...ngDevMode ? [{ debugName: "roles" }] : []);
  loading = false;
  isSuperAdmin = computed(() => this.authService.hasAnyRole(["super_admin", "super-admin"]), ...ngDevMode ? [{ debugName: "isSuperAdmin" }] : []);
  createDialog = false;
  newRoleName = "";
  creating = false;
  dt;
  constructor(roleService, authService, messageService, confirmationService, router) {
    this.roleService = roleService;
    this.authService = authService;
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
    if (item.role.name === "admin_entreprise") {
      this.messageService.add({
        severity: "warn",
        summary: "Attention",
        detail: "Le r\xF4le admin_entreprise ne peut pas \xEAtre supprim\xE9",
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
    return new (__ngFactoryType__ || _ParametresRolesPermissions)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresRolesPermissions, selectors: [["app-parametres-roles-permissions"]], viewQuery: function ParametresRolesPermissions_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService])], decls: 26, vars: 23, consts: [["dt", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4", "md:mb-0"], [1, "inline-flex", "items-center", "gap-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 1, "w-full", 3, "input"], ["icon", "pi pi-plus", "rounded", "", "pTooltip", "Ajouter un r\xF4le", 3, "click", 4, "ngIf"], ["responsiveLayout", "scroll", "dataKey", "role.id", 3, "value", "paginator", "rows", "globalFilterFields", "rowHover", "loading", "showCurrentPageReport", "rowsPerPageOptions"], ["header", "Nouveau r\xF4le", 3, "visibleChange", "visible", "modal"], [1, "flex", "flex-col", "gap-4", "pt-2"], ["for", "roleName", 1, "block", "font-bold", "mb-2"], ["pInputText", "", "id", "roleName", "placeholder", "Ex: editeur, manager...", 1, "w-full", 3, "ngModelChange", "keydown.enter", "ngModel"], ["icon", "pi pi-plus", "rounded", "", "pTooltip", "Ajouter un r\xF4le", 3, "click"], ["pSortableColumn", "role.name"], [1, "flex", "items-center", "gap-2"], ["field", "role.name"], ["pSortableColumn", "role.created_at"], ["field", "role.created_at"], [1, "text-center"], [1, "flex", "items-center", "justify-center", "gap-2"], [2, "width", "8rem"], [2, "min-width", "10rem"], [1, "flex", "items-center", "gap-3"], [1, "flex", "items-center", "justify-center", "w-9", "h-9", "rounded-lg", "text-sm", "flex-shrink-0"], [1, "pi", "pi-shield"], [1, "font-semibold", "text-surface-800", "dark:text-surface-100", "capitalize"], [1, "text-surface-500", 2, "min-width", "8rem"], [1, "text-center", 2, "min-width", "8rem"], ["severity", "info", 3, "value"], [1, "flex", "items-center", "justify-end", "gap-1"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 3, "text", "rounded", "click", 4, "ngIf"], ["icon", "pi pi-pencil", "severity", "secondary", "pTooltip", "Voir / Modifier", 3, "click", "text", "rounded"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Supprimer", 3, "click", "text", "rounded"], ["colspan", "4"], [1, "flex", "flex-col", "items-center", "gap-3", "py-12", "text-surface-300"], [1, "pi", "pi-shield", "text-4xl"], [1, "text-sm"], ["label", "Annuler", "icon", "pi pi-times", 3, "click", "text", "disabled"], ["label", "Cr\xE9er", "icon", "pi pi-check", 3, "click", "disabled", "loading"]], template: function ParametresRolesPermissions_Template(rf, ctx) {
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
      \u0275\u0275template(8, ParametresRolesPermissions_p_button_8_Template, 1, 0, "p-button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p-table", 12, 0);
      \u0275\u0275template(11, ParametresRolesPermissions_ng_template_11_Template, 13, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, ParametresRolesPermissions_ng_template_13_Template, 15, 10, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, ParametresRolesPermissions_ng_template_15_Template, 6, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
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
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c1));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSuperAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.roles())("paginator", true)("rows", 5)("globalFilterFields", \u0275\u0275pureFunction0(19, _c2))("rowHover", true)("loading", ctx.loading)("showCurrentPageReport", false)("rowsPerPageOptions", \u0275\u0275pureFunction0(20, _c3));
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.createDialog);
      \u0275\u0275property("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.newRoleName);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(22, _c4));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TableModule, Table, SortableColumn, SortIcon, ButtonModule, Button, InputTextModule, InputText, DialogModule, Dialog, TagModule, Tag, InputIconModule, InputIcon, IconFieldModule, IconField, ConfirmDialogModule, ConfirmDialog, TooltipModule, Tooltip], encapsulation: 2 });
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
        *ngIf="isSuperAdmin()"
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
              *ngIf="isSuperAdmin()"
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
              pTooltip="Voir / Modifier"
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
  }], () => [{ type: RoleService }, { type: AuthService }, { type: MessageService }, { type: ConfirmationService }, { type: Router }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresRolesPermissions, { className: "ParametresRolesPermissions", filePath: "src/app/pages/parametres/components/parametres-roles-permissions/parametres-roles-permissions.ts", lineNumber: 40 });
})();

// src/app/pages/parametres/components/parametres-notifications/parametres-notifications.ts
function ParametresNotifications_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275text(2, " Chargement des param\xE8tres\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function ParametresNotifications_ng_container_4_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.stockActivesParam == null ? null : ctx_r1.stockActivesParam.description, " ");
  }
}
function ParametresNotifications_ng_container_4_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cooldownParam == null ? null : ctx_r1.cooldownParam.description, " ");
  }
}
function ParametresNotifications_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "p", 8);
    \u0275\u0275text(4, " Alertes automatiques envoy\xE9es aux admins pour les ruptures de stock sur les produits critiques. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10)(7, "span", 11);
    \u0275\u0275text(8, " Activer les notifications de rupture de stock ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ParametresNotifications_ng_container_4_span_9_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-toggleswitch", 13);
    \u0275\u0275twoWayListener("ngModelChange", function ParametresNotifications_ng_container_4_Template_p_toggleswitch_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.stockActives, $event) || (ctx_r1.stockActives = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 14)(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14, " D\xE9lai entre notifications (minutes) ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ParametresNotifications_ng_container_4_span_15_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-inputnumber", 15);
    \u0275\u0275twoWayListener("ngModelChange", function ParametresNotifications_ng_container_4_Template_p_inputnumber_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.cooldownMins, $event) || (ctx_r1.cooldownMins = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "p-button", 16);
    \u0275\u0275listener("onClick", function ParametresNotifications_ng_container_4_Template_p_button_onClick_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.stockActivesParam == null ? null : ctx_r1.stockActivesParam.description);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.stockActives);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", !ctx_r1.stockActives);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cooldownParam == null ? null : ctx_r1.cooldownParam.description);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cooldownMins);
    \u0275\u0275property("min", 0)("step", 5)("showButtons", true)("disabled", ctx_r1.saving || !ctx_r1.stockActives);
    \u0275\u0275advance(2);
    \u0275\u0275property("loading", ctx_r1.saving)("disabled", ctx_r1.saving);
  }
}
var ParametresNotifications = class _ParametresNotifications {
  parametresService;
  messageService;
  loading = false;
  saving = false;
  // Valeurs liées aux champs
  stockActives = false;
  cooldownMins = 60;
  // Références aux paramètres (pour récupérer l'id au moment du PUT)
  stockActivesParam;
  cooldownParam;
  constructor(parametresService, messageService) {
    this.parametresService = parametresService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.load();
  }
  // ── Chargement ────────────────────────────────────────
  load() {
    this.loading = true;
    this.parametresService.getParametres("general").subscribe({
      next: (response) => {
        const params = response.data.parametres ?? [];
        this.stockActivesParam = params.find((p) => p.cle === "notifications_stock_actives");
        this.cooldownParam = params.find((p) => p.cle === "notifications_stock_cooldown_minutes");
        this.stockActives = !!this.stockActivesParam?.valeur;
        this.cooldownMins = Number(this.cooldownParam?.valeur ?? 60) || 60;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de charger les param\xE8tres de notification.",
          life: 4e3
        });
        this.loading = false;
      }
    });
  }
  // ── Sauvegarde ────────────────────────────────────────
  save() {
    if (!this.stockActivesParam || !this.cooldownParam) {
      this.messageService.add({
        severity: "error",
        summary: "Erreur",
        detail: "Param\xE8tres introuvables. Rechargez la page.",
        life: 4e3
      });
      return;
    }
    if (this.cooldownMins < 0) {
      this.messageService.add({
        severity: "warn",
        summary: "Validation",
        detail: "Le d\xE9lai entre notifications ne peut pas \xEAtre n\xE9gatif.",
        life: 4e3
      });
      return;
    }
    this.saving = true;
    forkJoin([
      this.parametresService.updateParametre(this.stockActivesParam.id, { valeur: this.stockActives }).pipe(catchError(() => of(null))),
      this.parametresService.updateParametre(this.cooldownParam.id, { valeur: Math.floor(this.cooldownMins) }).pipe(catchError(() => of(null)))
    ]).subscribe({
      next: (results) => {
        const hasError = results.some((r) => r === null);
        if (hasError) {
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Une ou plusieurs mises \xE0 jour ont \xE9chou\xE9.",
            life: 4e3
          });
        } else {
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Param\xE8tres de notification enregistr\xE9s.",
            life: 3e3
          });
        }
        this.saving = false;
      },
      error: () => {
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Erreur lors de la sauvegarde.",
          life: 4e3
        });
        this.saving = false;
      }
    });
  }
  static \u0275fac = function ParametresNotifications_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresNotifications)(\u0275\u0275directiveInject(ParametresService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresNotifications, selectors: [["app-parametres-notifications"]], decls: 5, vars: 2, consts: [[1, "flex", "flex-col", "gap-8"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "text-lg", "leading-tight"], ["class", "text-surface-400 text-sm flex items-center gap-2", 4, "ngIf"], [4, "ngIf"], [1, "text-surface-400", "text-sm", "flex", "items-center", "gap-2"], [1, "pi", "pi-spin", "pi-spinner"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-xl", "overflow-hidden"], [1, "bg-surface-50", "dark:bg-surface-800", "px-6", "py-4", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "m-0", "text-sm", "text-surface-500", "dark:text-surface-300"], [1, "flex", "items-start", "justify-between", "gap-6", "px-6", "py-5", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "flex", "flex-col", "gap-1"], [1, "text-surface-900", "dark:text-surface-0", "font-medium"], ["class", "text-sm text-surface-500 dark:text-surface-400", 4, "ngIf"], [3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "items-start", "justify-between", "gap-6", "px-6", "py-5"], ["buttonLayout", "horizontal", "decrementButtonIcon", "pi pi-minus", "incrementButtonIcon", "pi pi-plus", "inputStyleClass", "w-20 text-center", 3, "ngModelChange", "ngModel", "min", "step", "showButtons", "disabled"], ["label", "Enregistrer", "icon", "pi pi-save", 3, "onClick", "loading", "disabled"], [1, "text-sm", "text-surface-500", "dark:text-surface-400"]], template: function ParametresNotifications_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Notifications de stock ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ParametresNotifications_div_3_Template, 3, 0, "div", 2)(4, ParametresNotifications_ng_container_4_Template, 19, 13, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, InputNumberModule, InputNumber, ToggleSwitchModule, ToggleSwitch], styles: ["\n\n.opacity-50[_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease;\n  pointer-events: none;\n}\n/*# sourceMappingURL=parametres-notifications.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresNotifications, [{
    type: Component,
    args: [{ selector: "app-parametres-notifications", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, InputNumberModule, ToggleSwitchModule], template: '<div class="flex flex-col gap-8">\n\n    <!-- Titre section -->\n    <div class="text-surface-900 dark:text-surface-0 font-semibold text-lg leading-tight">\n        Notifications de stock\n    </div>\n\n    <!-- \xC9tat chargement -->\n    <div *ngIf="loading" class="text-surface-400 text-sm flex items-center gap-2">\n        <i class="pi pi-spin pi-spinner"></i> Chargement des param\xE8tres\u2026\n    </div>\n\n    <ng-container *ngIf="!loading">\n\n        <!-- Card param\xE8tres -->\n        <div class="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden">\n\n            <!-- En-t\xEAte de la card -->\n            <div class="bg-surface-50 dark:bg-surface-800 px-6 py-4 border-b border-surface-200 dark:border-surface-700">\n                <p class="m-0 text-sm text-surface-500 dark:text-surface-300">\n                    Alertes automatiques envoy\xE9es aux admins pour les ruptures de stock sur les produits critiques.\n                </p>\n            </div>\n\n            <!-- Ligne 1 : Activer les notifications -->\n            <div class="flex items-start justify-between gap-6 px-6 py-5\n                        border-b border-surface-200 dark:border-surface-700">\n                <div class="flex flex-col gap-1">\n                    <span class="text-surface-900 dark:text-surface-0 font-medium">\n                        Activer les notifications de rupture de stock\n                    </span>\n                    <span class="text-sm text-surface-500 dark:text-surface-400"\n                          *ngIf="stockActivesParam?.description">\n                        {{ stockActivesParam?.description }}\n                    </span>\n                </div>\n                <p-toggleswitch\n                    [(ngModel)]="stockActives"\n                    [disabled]="saving"\n                />\n            </div>\n\n            <!-- Ligne 2 : D\xE9lai cooldown -->\n            <div class="flex items-start justify-between gap-6 px-6 py-5"\n                 [class.opacity-50]="!stockActives">\n                <div class="flex flex-col gap-1">\n                    <span class="text-surface-900 dark:text-surface-0 font-medium">\n                        D\xE9lai entre notifications (minutes)\n                    </span>\n                    <span class="text-sm text-surface-500 dark:text-surface-400"\n                          *ngIf="cooldownParam?.description">\n                        {{ cooldownParam?.description }}\n                    </span>\n                </div>\n                <p-inputnumber\n                    [(ngModel)]="cooldownMins"\n                    [min]="0"\n                    [step]="5"\n                    [showButtons]="true"\n                    buttonLayout="horizontal"\n                    decrementButtonIcon="pi pi-minus"\n                    incrementButtonIcon="pi pi-plus"\n                    [disabled]="saving || !stockActives"\n                    inputStyleClass="w-20 text-center"\n                />\n            </div>\n\n        </div>\n\n        <!-- Bouton enregistrer -->\n        <div>\n            <p-button\n                label="Enregistrer"\n                icon="pi pi-save"\n                [loading]="saving"\n                [disabled]="saving"\n                (onClick)="save()"\n            />\n        </div>\n\n    </ng-container>\n\n</div>\n', styles: ["/* src/app/pages/parametres/components/parametres-notifications/parametres-notifications.scss */\n.opacity-50 {\n  transition: opacity 0.2s ease;\n  pointer-events: none;\n}\n/*# sourceMappingURL=parametres-notifications.css.map */\n"] }]
  }], () => [{ type: ParametresService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresNotifications, { className: "ParametresNotifications", filePath: "src/app/pages/parametres/components/parametres-notifications/parametres-notifications.ts", lineNumber: 20 });
})();

// src/app/pages/parametres/parametres-liste/parametres-liste.ts
var _forTrack0 = ($index, $item) => $item.key;
function ParametresListe_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ParametresListe_For_11_Template_button_click_0_listener() {
      const section_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveSection(section_r2.key));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.isActive(section_r2.key) ? "parametres-nav-chip--active" : "");
    \u0275\u0275advance();
    \u0275\u0275classMap(section_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r2.label);
  }
}
function ParametresListe_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 9)(1, "button", 13);
    \u0275\u0275listener("click", function ParametresListe_For_15_Template_button_click_1_listener() {
      const section_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveSection(section_r5.key));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r2.isActive(section_r5.key) ? "parametres-nav-item--active" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isActive(section_r5.key) ? "text-primary" : "text-surface-700 dark:text-surface-200");
    \u0275\u0275advance();
    \u0275\u0275classMap(section_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r5.label);
  }
}
function ParametresListe_app_parametres_profile_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-profile");
  }
}
function ParametresListe_app_parametres_auth_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-auth");
  }
}
function ParametresListe_Conditional_19_app_parametres_packing_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-packing");
  }
}
function ParametresListe_Conditional_19_app_parametres_roles_permissions_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-roles-permissions");
  }
}
function ParametresListe_Conditional_19_app_parametres_notifications_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-parametres-notifications");
  }
}
function ParametresListe_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ParametresListe_Conditional_19_app_parametres_packing_0_Template, 1, 0, "app-parametres-packing", 11)(1, ParametresListe_Conditional_19_app_parametres_roles_permissions_1_Template, 1, 0, "app-parametres-roles-permissions", 11)(2, ParametresListe_Conditional_19_app_parametres_notifications_2_Template, 1, 0, "app-parametres-notifications", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.isActive("packing") && ctx_r2.canShowPackingSection());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isActive("roles"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isActive("notifications"));
  }
}
var ADMIN_SECTIONS = ["packing", "roles", "notifications"];
var ParametresListe = class _ParametresListe {
  authService;
  activeSection = "profile";
  isBrowser = typeof window !== "undefined";
  mobileLayoutMediaQuery = "(max-width: 1023.98px)";
  adminRoleKeys = /* @__PURE__ */ new Set(["adminentreprise", "superadmin"]);
  isMobileLayout = signal(false, ...ngDevMode ? [{ debugName: "isMobileLayout" }] : []);
  sections = [
    { key: "profile", label: "Profile", icon: "pi pi-user" },
    { key: "auth", label: "Authentification", icon: "pi pi-lock" },
    { key: "packing", label: "Packing", icon: "pi pi-cog", adminOnly: true },
    { key: "roles", label: "Roles & Permissions", icon: "pi pi-shield", adminOnly: true },
    { key: "notifications", label: "Notifications", icon: "pi pi-bell", adminOnly: true }
  ];
  isAdmin = computed(() => {
    const user = this.authService.currentUser();
    if (!user)
      return false;
    const roles = [...user.roles ?? [], ...user.role_names ?? []].map((role) => this.normalizeRole(role)).filter((role) => role.length > 0);
    return roles.some((role) => this.adminRoleKeys.has(role));
  }, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  visibleSections = computed(() => this.sections.filter((section) => {
    if (section.adminOnly && !this.isAdmin())
      return false;
    if (section.key === "packing" && this.isMobileLayout())
      return false;
    return true;
  }), ...ngDevMode ? [{ debugName: "visibleSections" }] : []);
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    if (!this.isBrowser)
      return;
    this.updateLayoutMode();
    window.addEventListener("resize", this.onResize);
  }
  ngOnDestroy() {
    if (!this.isBrowser)
      return;
    window.removeEventListener("resize", this.onResize);
  }
  setActiveSection(section) {
    if (ADMIN_SECTIONS.includes(section) && !this.isAdmin())
      return;
    if (section === "packing" && this.isMobileLayout())
      return;
    this.activeSection = section;
  }
  isActive(section) {
    return this.activeSection === section;
  }
  canShowPackingSection() {
    return !this.isMobileLayout();
  }
  onResize = () => {
    this.updateLayoutMode();
  };
  updateLayoutMode() {
    if (!this.isBrowser)
      return;
    const isMobile = window.matchMedia(this.mobileLayoutMediaQuery).matches;
    this.isMobileLayout.set(isMobile);
    if (isMobile && this.activeSection === "packing") {
      this.activeSection = "profile";
    }
  }
  normalizeRole(role) {
    return role.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  static \u0275fac = function ParametresListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ParametresListe)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParametresListe, selectors: [["app-parametres-liste"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 20, vars: 3, consts: [[1, "parametres-page", "rounded-t-3xl", "bg-surface-0", "dark:bg-surface-900", "flex-auto"], [1, "flex", "flex-col", "w-full", "pb-6", "md:pb-8", "gap-2"], [1, "mt-0", "text-surface-900", "dark:text-surface-0", "font-medium", "text-2xl", "leading-tight"], [1, "mt-0", "text-surface-500", "dark:text-surface-300", "leading-tight"], [1, "parametres-layout", "py-6", "lg:py-8"], ["aria-label", "Navigation des parametres", 1, "parametres-mobile-nav"], ["type", "button", 1, "parametres-nav-chip", 3, "ngClass"], [1, "parametres-desktop-nav"], [1, "parametres-nav-list"], [1, "parametres-nav-item", 3, "ngClass"], [1, "parametres-content", "bg-surface-0", "dark:bg-surface-900", "rounded-2xl", "flex-auto"], [4, "ngIf"], ["type", "button", 1, "parametres-nav-chip", 3, "click", "ngClass"], ["type", "button", 1, "parametres-nav-link", 3, "click", "ngClass"]], template: function ParametresListe_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "h2", 2);
      \u0275\u0275text(4, "Parametres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gestion des parametres de l'application");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "p-divider");
      \u0275\u0275elementStart(8, "div", 4)(9, "nav", 5);
      \u0275\u0275repeaterCreate(10, ParametresListe_For_11_Template, 4, 4, "button", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "aside", 7)(13, "ul", 8);
      \u0275\u0275repeaterCreate(14, ParametresListe_For_15_Template, 5, 5, "li", 9, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 10);
      \u0275\u0275template(17, ParametresListe_app_parametres_profile_17_Template, 1, 0, "app-parametres-profile", 11)(18, ParametresListe_app_parametres_auth_18_Template, 1, 0, "app-parametres-auth", 11);
      \u0275\u0275conditionalCreate(19, ParametresListe_Conditional_19_Template, 3, 3);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.visibleSections());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.visibleSections());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isActive("profile"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isActive("auth"));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isAdmin() ? 19 : -1);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, ParametresAuth, DividerModule, Divider, ToastModule, Toast, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions, ParametresNotifications], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.parametres-page[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.parametres-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.parametres-mobile-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.parametres-desktop-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n.parametres-mobile-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.parametres-nav-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  white-space: nowrap;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  border: 1px solid var(--p-surface-300);\n  background: var(--p-surface-0);\n  color: var(--p-text-color);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.parametres-nav-chip--active[_ngcontent-%COMP%] {\n  border-color: var(--p-primary-500);\n  background: color-mix(in srgb, var(--p-primary-500) 12%, transparent);\n  color: var(--p-primary-600);\n}\n.parametres-nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.parametres-nav-item[_ngcontent-%COMP%] {\n  margin-left: -2px;\n  border-left: 2px solid var(--p-surface-300);\n}\n.parametres-nav-item--active[_ngcontent-%COMP%] {\n  border-left-color: var(--p-primary-color);\n}\n.parametres-nav-link[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-align: left;\n  padding: 0.75rem 1rem;\n  font-weight: 600;\n}\n.parametres-content[_ngcontent-%COMP%] {\n  border: 1px solid var(--p-surface-200);\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n  .parametres-page[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .parametres-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .parametres-mobile-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .parametres-desktop-nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .parametres-page[_ngcontent-%COMP%] {\n    padding: 2rem 2.5rem;\n  }\n  .parametres-layout[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(13rem, 16rem) minmax(0, 1fr);\n    align-items: start;\n    gap: 1.25rem;\n  }\n  .parametres-content[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n}\n/*# sourceMappingURL=parametres-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParametresListe, [{
    type: Component,
    args: [{ selector: "app-parametres-liste", standalone: true, imports: [CommonModule, ParametresAuth, DividerModule, ToastModule, RouterModule, ParametresPacking, ParametresProfile, ParametresRolesPermissions, ParametresNotifications], providers: [MessageService], template: `<p-toast></p-toast>

<div class="parametres-page rounded-t-3xl bg-surface-0 dark:bg-surface-900 flex-auto">
  <div class="flex flex-col w-full pb-6 md:pb-8 gap-2">
    <h2 class="mt-0 text-surface-900 dark:text-surface-0 font-medium text-2xl leading-tight">Parametres</h2>
    <p class="mt-0 text-surface-500 dark:text-surface-300 leading-tight">Gestion des parametres de l'application</p>
  </div>

  <p-divider></p-divider>

  <div class="parametres-layout py-6 lg:py-8">
    <nav class="parametres-mobile-nav" aria-label="Navigation des parametres">
      @for (section of visibleSections(); track section.key) {
        <button
          type="button"
          class="parametres-nav-chip"
          [ngClass]="isActive(section.key) ? 'parametres-nav-chip--active' : ''"
          (click)="setActiveSection(section.key)"
        >
          <i [class]="section.icon"></i>
          <span>{{ section.label }}</span>
        </button>
      }
    </nav>

    <aside class="parametres-desktop-nav">
      <ul class="parametres-nav-list">
        @for (section of visibleSections(); track section.key) {
          <li class="parametres-nav-item" [ngClass]="isActive(section.key) ? 'parametres-nav-item--active' : ''">
            <button
              type="button"
              class="parametres-nav-link"
              [ngClass]="isActive(section.key) ? 'text-primary' : 'text-surface-700 dark:text-surface-200'"
              (click)="setActiveSection(section.key)"
            >
              <i [class]="section.icon"></i>
              <span>{{ section.label }}</span>
            </button>
          </li>
        }
      </ul>
    </aside>

    <div class="parametres-content bg-surface-0 dark:bg-surface-900 rounded-2xl flex-auto">
      <app-parametres-profile *ngIf="isActive('profile')"></app-parametres-profile>
      <app-parametres-auth *ngIf="isActive('auth')"></app-parametres-auth>
      @if (isAdmin()) {
        <app-parametres-packing *ngIf="isActive('packing') && canShowPackingSection()"></app-parametres-packing>
        <app-parametres-roles-permissions *ngIf="isActive('roles')"></app-parametres-roles-permissions>
        <app-parametres-notifications *ngIf="isActive('notifications')"></app-parametres-notifications>
      }
    </div>
  </div>
</div>\r
`, styles: ["/* src/app/pages/parametres/parametres-liste/parametres-liste.scss */\n:host {\n  display: block;\n}\n.parametres-page {\n  padding: 1rem;\n}\n.parametres-layout {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.parametres-mobile-nav {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.25rem;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.parametres-desktop-nav {\n  display: none;\n}\n.parametres-mobile-nav::-webkit-scrollbar {\n  display: none;\n}\n.parametres-nav-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  white-space: nowrap;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  border: 1px solid var(--p-surface-300);\n  background: var(--p-surface-0);\n  color: var(--p-text-color);\n  font-size: 0.875rem;\n  font-weight: 600;\n}\n.parametres-nav-chip--active {\n  border-color: var(--p-primary-500);\n  background: color-mix(in srgb, var(--p-primary-500) 12%, transparent);\n  color: var(--p-primary-600);\n}\n.parametres-nav-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.parametres-nav-item {\n  margin-left: -2px;\n  border-left: 2px solid var(--p-surface-300);\n}\n.parametres-nav-item--active {\n  border-left-color: var(--p-primary-color);\n}\n.parametres-nav-link {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  text-align: left;\n  padding: 0.75rem 1rem;\n  font-weight: 600;\n}\n.parametres-content {\n  border: 1px solid var(--p-surface-200);\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n  .parametres-page {\n    padding: 1.5rem;\n  }\n  .parametres-content {\n    padding: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .parametres-mobile-nav {\n    display: none;\n  }\n  .parametres-desktop-nav {\n    display: block;\n  }\n  .parametres-page {\n    padding: 2rem 2.5rem;\n  }\n  .parametres-layout {\n    display: grid;\n    grid-template-columns: minmax(13rem, 16rem) minmax(0, 1fr);\n    align-items: start;\n    gap: 1.25rem;\n  }\n  .parametres-content {\n    padding: 2rem;\n  }\n}\n/*# sourceMappingURL=parametres-liste.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParametresListe, { className: "ParametresListe", filePath: "src/app/pages/parametres/parametres-liste/parametres-liste.ts", lineNumber: 33 });
})();

// src/app/pages/parametres/parametres.routes.ts
var parametres_routes_default = [
  { path: "", component: ParametresListe, data: { breadcrumb: "parametres" } },
  { path: "parametres", component: ParametresListe, data: { breadcrumb: "parametres" } }
];
export {
  parametres_routes_default as default
};
//# sourceMappingURL=chunk-QZC2DJ4H.js.map
