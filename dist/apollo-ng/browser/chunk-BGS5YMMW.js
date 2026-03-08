import {
  CommissionDetailDialog
} from "./chunk-MM6AM423.js";
import {
  VehiculeService
} from "./chunk-WR3AMNWK.js";
import {
  CommandeVenteService
} from "./chunk-L5SNKCQB.js";
import {
  ProduitService
} from "./chunk-5NUUS4AW.js";
import {
  Divider,
  DividerModule
} from "./chunk-6DPCLPVB.js";
import {
  STATUT_COMMISSION_LABELS,
  STATUT_COMMISSION_SEVERITY,
  STATUT_FACTURE_LABELS
} from "./chunk-ZJQGPEDN.js";
import {
  ToolbarModule
} from "./chunk-OZ2M7TI6.js";
import {
  Skeleton,
  SkeletonModule
} from "./chunk-LYQXVLW6.js";
import "./chunk-VPMPKPO3.js";
import {
  Menu,
  MenuModule
} from "./chunk-YK5I6R27.js";
import {
  PhoneFormatPipe
} from "./chunk-JL62XEMH.js";
import {
  Dialog,
  DialogModule
} from "./chunk-Y2EGS7AG.js";
import "./chunk-WEV7CZZY.js";
import {
  Toast,
  ToastModule
} from "./chunk-SXI4YLKA.js";
import "./chunk-2W47BJ2H.js";
import {
  AuthService
} from "./chunk-FWYLTE3T.js";
import {
  Router
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import "./chunk-GEBWCDCC.js";
import "./chunk-CSVYKJ4F.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-NJSYAAHU.js";
import "./chunk-XQFWCWDH.js";
import "./chunk-EXEPX633.js";
import "./chunk-3FL5D7QG.js";
import "./chunk-FQFMKS2Q.js";
import "./chunk-XNYJW7BL.js";
import "./chunk-L3HXWUUO.js";
import {
  Tag,
  TagModule
} from "./chunk-CAVP5JWM.js";
import "./chunk-LFMBOSV6.js";
import "./chunk-WBWDQQZU.js";
import "./chunk-F3L5EVFN.js";
import "./chunk-6MLBYEBX.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-IQKSNOBA.js";
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
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-YHSSX73X.js";
import {
  InputText,
  InputTextModule
} from "./chunk-52XP6VLB.js";
import {
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  Button,
  ButtonModule
} from "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import {
  MessageService
} from "./chunk-6E6G4HCZ.js";
import {
  CommonModule,
  NgClass
} from "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DSAAE4AM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/commande-vente-liste/commande-mobile-form/commande-mobile-form.ts
var _c0 = (a0) => ({ "ng-invalid ng-dirty": a0 });
function CommandeMobileForm_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "S\xE9lectionnez un v\xE9hicule.");
    \u0275\u0275elementEnd();
  }
}
function CommandeMobileForm_For_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CommandeMobileForm_For_27_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2, " Prix usine : ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_50_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.getPrixUsine(\u0275$index_50_r2)));
  }
}
function CommandeMobileForm_For_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 11);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CommandeMobileForm_For_27_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_50_r2 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.getTotalLigne(\u0275$index_50_r2)));
  }
}
function CommandeMobileForm_For_27_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeMobileForm_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 9)(2, "label", 25);
    \u0275\u0275text(3, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 26);
    \u0275\u0275listener("onChange", function CommandeMobileForm_For_27_Template_p_select_onChange_4_listener($event) {
      const \u0275$index_50_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProduitChange.emit({ i: \u0275$index_50_r2, id: $event.value }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CommandeMobileForm_For_27_Conditional_5_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeMobileForm_For_27_Conditional_6_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(7, "div", 28)(8, "div", 29)(9, "label", 25);
    \u0275\u0275text(10, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "p-inputNumber", 30);
    \u0275\u0275conditionalCreate(12, CommandeMobileForm_For_27_Conditional_12_Template, 2, 0, "small", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 31)(14, "label", 25);
    \u0275\u0275text(15, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "p-inputNumber", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 33);
    \u0275\u0275conditionalCreate(18, CommandeMobileForm_For_27_Conditional_18_Template, 2, 1, "span", 34)(19, CommandeMobileForm_For_27_Conditional_19_Template, 2, 0, "span", 35);
    \u0275\u0275elementStart(20, "p-button", 36);
    \u0275\u0275listener("onClick", function CommandeMobileForm_For_27_Template_p_button_onClick_20_listener() {
      const \u0275$index_50_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRemoveLigne.emit(\u0275$index_50_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_50_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", \u0275$index_50_r2);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.produitOptions)("filter", true)("ngClass", \u0275\u0275pureFunction1(16, _c0, ctx_r2.isLigneInvalid(\u0275$index_50_r2, "produit_id")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLigneInvalid(\u0275$index_50_r2, "produit_id") ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.getPrixUsine(\u0275$index_50_r2) > 0 ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(18, _c0, ctx_r2.isLigneInvalid(\u0275$index_50_r2, "prix_vente")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLigneInvalid(\u0275$index_50_r2, "prix_vente") ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 1)("useGrouping", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getTotalLigne(\u0275$index_50_r2) > 0 ? 18 : 19);
    \u0275\u0275advance(2);
    \u0275\u0275property("text", true)("rounded", true)("disabled", ctx_r2.lignes.length === 1);
  }
}
var CommandeMobileForm = class _CommandeMobileForm {
  editMode = false;
  saving = false;
  form;
  vehiculeOptions = [];
  produitOptions = [];
  produitData = /* @__PURE__ */ new Map();
  onSave = new EventEmitter();
  onClose = new EventEmitter();
  onAddLigne = new EventEmitter();
  onRemoveLigne = new EventEmitter();
  onProduitChange = new EventEmitter();
  get lignes() {
    return this.form.get("lignes");
  }
  get totalDialog() {
    if (!this.form)
      return 0;
    return this.lignes.controls.reduce((sum, ctrl) => {
      const qte = ctrl.get("qte")?.value ?? 0;
      const pv = ctrl.get("prix_vente")?.value ?? 0;
      return sum + pv * qte;
    }, 0);
  }
  getTotalLigne(i) {
    const ctrl = this.lignes.at(i);
    return (ctrl.get("prix_vente")?.value ?? 0) * (ctrl.get("qte")?.value ?? 0);
  }
  getPrixUsine(i) {
    const pid = this.lignes.at(i).get("produit_id")?.value;
    return this.produitData.get(pid)?.prixUsine ?? 0;
  }
  isInvalid(name) {
    const c = this.form?.get(name);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  isLigneInvalid(i, name) {
    const c = this.lignes?.at(i)?.get(name);
    return !!c && c.invalid && (c.dirty || c.touched);
  }
  formatMontant(n) {
    if (n == null || n === "")
      return "\u2014";
    const num = typeof n === "string" ? parseFloat(n) : n;
    return new Intl.NumberFormat("fr-FR").format(num) + " GNF";
  }
  static \u0275fac = function CommandeMobileForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeMobileForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeMobileForm, selectors: [["app-commande-mobile-form"]], inputs: { editMode: "editMode", saving: "saving", form: "form", vehiculeOptions: "vehiculeOptions", produitOptions: "produitOptions", produitData: "produitData" }, outputs: { onSave: "onSave", onClose: "onClose", onAddLigne: "onAddLigne", onRemoveLigne: "onRemoveLigne", onProduitChange: "onProduitChange" }, decls: 35, vars: 14, consts: [[1, "fixed", "inset-0", "z-50"], [1, "absolute", "inset-0", "bg-black/50", "animate-fadein", 3, "click"], [1, "cmf-panel", "animate-fadeinright"], [1, "cmf-header"], ["icon", "pi pi-times", "styleClass", "cmf-close-btn", 3, "onClick", "text", "rounded"], [1, "cmf-title"], [2, "width", "2.5rem", "flex-shrink", "0"], [1, "cmf-body"], ["novalidate", "", 3, "formGroup"], [1, "cmf-field"], [1, "cmf-label"], [1, "text-red-500"], ["formControlName", "vehicule_id", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un v\xE9hicule", "filterPlaceholder", "Rechercher\u2026", "styleClass", "w-full", 3, "options", "filter", "ngClass"], [1, "cmf-divider"], [1, "cmf-section"], [1, "cmf-section-header"], [1, "cmf-section-title"], ["label", "Ajouter", "icon", "pi pi-plus", "size", "small", 3, "onClick", "text"], ["formArrayName", "lignes", 1, "cmf-lignes"], [1, "cmf-ligne-card", 3, "formGroupName"], [1, "cmf-footer"], [1, "cmf-total-row"], [1, "cmf-total-label"], [1, "cmf-total-value"], ["icon", "pi pi-check", "styleClass", "w-full", 3, "onClick", "label", "loading"], [1, "cmf-field-label-sm"], ["formControlName", "produit_id", "optionLabel", "label", "optionValue", "value", "placeholder", "Choisir un produit\u2026", "filterPlaceholder", "Rechercher\u2026", "styleClass", "w-full", 3, "onChange", "options", "filter", "ngClass"], [1, "cmf-prix-usine"], [1, "cmf-inputs-row"], [1, "cmf-input-group"], ["formControlName", "prix_vente", "styleClass", "w-full", "inputStyleClass", "w-full text-right", 3, "min", "useGrouping", "ngClass"], [1, "cmf-input-group", "cmf-input-group--small"], ["formControlName", "qte", "styleClass", "w-full", "inputStyleClass", "w-full text-center", 3, "min", "useGrouping"], [1, "cmf-ligne-footer"], [1, "cmf-ligne-total"], [1, "cmf-ligne-total", "cmf-ligne-total--empty"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", 3, "onClick", "text", "rounded", "disabled"], [1, "pi", "pi-tag", "text-xs"]], template: function CommandeMobileForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275listener("click", function CommandeMobileForm_Template_div_click_1_listener() {
        return ctx.onClose.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
      \u0275\u0275listener("onClick", function CommandeMobileForm_Template_p_button_onClick_4_listener() {
        return ctx.onClose.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "form", 8)(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12, "V\xE9hicule ");
      \u0275\u0275elementStart(13, "span", 11);
      \u0275\u0275text(14, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(15, "p-select", 12);
      \u0275\u0275conditionalCreate(16, CommandeMobileForm_Conditional_16_Template, 2, 0, "small", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "div", 13);
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "span", 16);
      \u0275\u0275text(21, " Lignes ");
      \u0275\u0275elementStart(22, "span", 11);
      \u0275\u0275text(23, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p-button", 17);
      \u0275\u0275listener("onClick", function CommandeMobileForm_Template_p_button_onClick_24_listener() {
        return ctx.onAddLigne.emit();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 18);
      \u0275\u0275repeaterCreate(26, CommandeMobileForm_For_27_Template, 21, 20, "div", 19, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 20)(29, "div", 21)(30, "span", 22);
      \u0275\u0275text(31, "Total commande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 23);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "p-button", 24);
      \u0275\u0275listener("onClick", function CommandeMobileForm_Template_p_button_onClick_34_listener() {
        return ctx.onSave.emit();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.editMode ? "Modifier la commande" : "Nouvelle commande", " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.vehiculeOptions)("filter", true)("ngClass", \u0275\u0275pureFunction1(12, _c0, ctx.isInvalid("vehicule_id")));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isInvalid("vehicule_id") ? 16 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275property("text", true);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.lignes.controls);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.formatMontant(ctx.totalDialog));
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.editMode ? "Enregistrer les modifications" : "Cr\xE9er la commande")("loading", ctx.saving);
    }
  }, dependencies: [CommonModule, NgClass, ReactiveFormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, ButtonModule, Button, SelectModule, Select, InputNumberModule, InputNumber], styles: ["\n\n.cmf-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: var(--p-surface-0);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 1;\n}\n@media (min-width: 769px) {\n  .cmf-panel[_ngcontent-%COMP%] {\n    left: auto;\n    width: 36rem;\n    max-width: 96vw;\n  }\n}\n.cmf-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: calc(0.875rem + env(safe-area-inset-top)) 1rem 0.875rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n  background: var(--p-surface-0);\n}\n@media (min-width: 769px) {\n  .cmf-header[_ngcontent-%COMP%] {\n    padding-top: 0.875rem;\n  }\n}\n.cmf-title[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     .cmf-close-btn.p-button {\n  color: var(--p-surface-500) !important;\n}\n.cmf-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1rem 0.5rem;\n}\n.cmf-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-bottom: 0.75rem;\n}\n.cmf-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.cmf-field-label-sm[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--p-surface-400);\n}\n.cmf-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--p-surface-200);\n  margin: 0.5rem 0 1.25rem;\n}\n.cmf-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.875rem;\n}\n.cmf-section-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.cmf-lignes[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.cmf-ligne-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-50);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.cmf-prix-usine[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  color: var(--p-surface-500);\n  margin-top: -0.15rem;\n}\n.cmf-inputs-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 6rem;\n  gap: 0.75rem;\n  align-items: end;\n}\n.cmf-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.cmf-ligne-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.cmf-ligne-total[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--p-primary-600);\n}\n.cmf-ligne-total--empty[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n  font-weight: 400;\n}\n.cmf-info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--p-surface-100);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  margin-top: 0.25rem;\n  margin-bottom: 0.5rem;\n}\n.cmf-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.875rem 1rem;\n  padding-bottom: calc(0.875rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (min-width: 769px) {\n  .cmf-footer[_ngcontent-%COMP%] {\n    padding-bottom: 0.875rem;\n  }\n}\n.cmf-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.875rem;\n  background: var(--p-primary-50, #eef2ff);\n  border: 1px solid var(--p-primary-200, #c7d2fe);\n  border-radius: 8px;\n}\n.cmf-total-label[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.cmf-total-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--p-primary-600);\n  font-variant-numeric: tabular-nums;\n}\n.app-dark[_nghost-%COMP%]   .cmf-panel[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-panel[_ngcontent-%COMP%] {\n  background: var(--p-surface-900);\n}\n.app-dark[_nghost-%COMP%]   .cmf-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-header[_ngcontent-%COMP%] {\n  background: var(--p-surface-900);\n  border-bottom-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .cmf-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-0);\n}\n.app-dark[_nghost-%COMP%]   .cmf-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-label[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n.app-dark[_nghost-%COMP%]   .cmf-section-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-section-title[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .cmf-divider[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-divider[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .cmf-ligne-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-ligne-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .cmf-ligne-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-ligne-footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .cmf-prix-usine[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-prix-usine[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .cmf-info-box[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-info-box[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .cmf-footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-footer[_ngcontent-%COMP%] {\n  background: var(--p-surface-900);\n  border-top-color: var(--p-surface-700);\n}\n.app-dark[_nghost-%COMP%]   .cmf-total-row[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-total-row[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.app-dark[_nghost-%COMP%]   .cmf-total-label[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cmf-total-label[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n.app-dark   [_nghost-%COMP%]     .cmf-close-btn.p-button {\n  color: var(--p-surface-400) !important;\n}\n/*# sourceMappingURL=commande-mobile-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeMobileForm, [{
    type: Component,
    args: [{ selector: "app-commande-mobile-form", standalone: true, imports: [CommonModule, ReactiveFormsModule, ButtonModule, SelectModule, InputNumberModule], template: `<!-- Backdrop + slideover full-screen (mobile) / panneau lat\xE9ral (desktop) -->
<div class="fixed inset-0 z-50">

  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black/50 animate-fadein" (click)="onClose.emit()"></div>

  <!-- Panneau -->
  <div class="cmf-panel animate-fadeinright">

    <!-- \u2500\u2500 Header sticky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cmf-header">
      <p-button [text]="true" [rounded]="true" icon="pi pi-times"
                styleClass="cmf-close-btn" (onClick)="onClose.emit()" />
      <h2 class="cmf-title">
        {{ editMode ? 'Modifier la commande' : 'Nouvelle commande' }}
      </h2>
      <!-- Spacer pour centrer le titre -->
      <div style="width:2.5rem; flex-shrink:0"></div>
    </div>

    <!-- \u2500\u2500 Body scrollable \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cmf-body">
      <form [formGroup]="form" novalidate>

        <!-- V\xE9hicule -->
        <div class="cmf-field">
          <label class="cmf-label">V\xE9hicule <span class="text-red-500">*</span></label>
          <p-select
            formControlName="vehicule_id"
            [options]="vehiculeOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="S\xE9lectionner un v\xE9hicule"
            [filter]="true"
            filterPlaceholder="Rechercher\u2026"
            styleClass="w-full"
            [ngClass]="{'ng-invalid ng-dirty': isInvalid('vehicule_id')}"
          />
          @if (isInvalid('vehicule_id')) {
            <small class="text-red-500">S\xE9lectionnez un v\xE9hicule.</small>
          }
        </div>

        <div class="cmf-divider"></div>

        <!-- Lignes de commande -->
        <div class="cmf-section">
          <div class="cmf-section-header">
            <span class="cmf-section-title">
              Lignes <span class="text-red-500">*</span>
            </span>
            <p-button
              label="Ajouter"
              icon="pi pi-plus"
              [text]="true"
              size="small"
              (onClick)="onAddLigne.emit()"
            />
          </div>

          <div formArrayName="lignes" class="cmf-lignes">
            @for (ligne of lignes.controls; track $index; let i = $index) {
              <div [formGroupName]="i" class="cmf-ligne-card">

                <!-- Produit -->
                <div class="cmf-field">
                  <label class="cmf-field-label-sm">Produit</label>
                  <p-select
                    formControlName="produit_id"
                    [options]="produitOptions"
                    optionLabel="label"
                    optionValue="value"
                    placeholder="Choisir un produit\u2026"
                    [filter]="true"
                    filterPlaceholder="Rechercher\u2026"
                    styleClass="w-full"
                    [ngClass]="{'ng-invalid ng-dirty': isLigneInvalid(i, 'produit_id')}"
                    (onChange)="onProduitChange.emit({ i: i, id: $event.value })"
                  />
                  @if (isLigneInvalid(i, 'produit_id')) {
                    <small class="text-red-500">Requis</small>
                  }
                </div>

                <!-- Prix usine (lecture seule) -->
                @if (getPrixUsine(i) > 0) {
                  <div class="cmf-prix-usine">
                    <i class="pi pi-tag text-xs"></i>
                    Prix usine : <strong>{{ formatMontant(getPrixUsine(i)) }}</strong>
                  </div>
                }

                <!-- Prix vente + Quantit\xE9 -->
                <div class="cmf-inputs-row">
                  <div class="cmf-input-group">
                    <label class="cmf-field-label-sm">Prix vente</label>
                    <p-inputNumber
                      formControlName="prix_vente"
                      [min]="0"
                      [useGrouping]="true"
                      styleClass="w-full"
                      inputStyleClass="w-full text-right"
                      [ngClass]="{'ng-invalid ng-dirty': isLigneInvalid(i, 'prix_vente')}"
                    />
                    @if (isLigneInvalid(i, 'prix_vente')) {
                      <small class="text-red-500">Requis</small>
                    }
                  </div>
                  <div class="cmf-input-group cmf-input-group--small">
                    <label class="cmf-field-label-sm">Qt\xE9</label>
                    <p-inputNumber
                      formControlName="qte"
                      [min]="1"
                      [useGrouping]="false"
                      styleClass="w-full"
                      inputStyleClass="w-full text-center"
                    />
                  </div>
                </div>

                <!-- Total ligne + Supprimer -->
                <div class="cmf-ligne-footer">
                  @if (getTotalLigne(i) > 0) {
                    <span class="cmf-ligne-total">{{ formatMontant(getTotalLigne(i)) }}</span>
                  } @else {
                    <span class="cmf-ligne-total cmf-ligne-total--empty">\u2014</span>
                  }
                  <p-button
                    icon="pi pi-trash"
                    severity="danger"
                    [text]="true"
                    [rounded]="true"
                    size="small"
                    [disabled]="lignes.length === 1"
                    (onClick)="onRemoveLigne.emit(i)"
                  />
                </div>

              </div>
            }
          </div>
        </div><!-- /cmf-section -->

      </form>
    </div><!-- /cmf-body -->

    <!-- \u2500\u2500 Footer sticky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="cmf-footer">
      <div class="cmf-total-row">
        <span class="cmf-total-label">Total commande</span>
        <span class="cmf-total-value">{{ formatMontant(totalDialog) }}</span>
      </div>
      <p-button
        [label]="editMode ? 'Enregistrer les modifications' : 'Cr\xE9er la commande'"
        icon="pi pi-check"
        styleClass="w-full"
        (onClick)="onSave.emit()"
        [loading]="saving"
      />
    </div><!-- /cmf-footer -->

  </div><!-- /cmf-panel -->
</div>
`, styles: ["/* src/app/pages/ventes/commande-vente-liste/commande-mobile-form/commande-mobile-form.scss */\n.cmf-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: var(--p-surface-0);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 1;\n}\n@media (min-width: 769px) {\n  .cmf-panel {\n    left: auto;\n    width: 36rem;\n    max-width: 96vw;\n  }\n}\n.cmf-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: calc(0.875rem + env(safe-area-inset-top)) 1rem 0.875rem;\n  border-bottom: 1px solid var(--p-surface-200);\n  flex-shrink: 0;\n  background: var(--p-surface-0);\n}\n@media (min-width: 769px) {\n  .cmf-header {\n    padding-top: 0.875rem;\n  }\n}\n.cmf-title {\n  flex: 1;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n  color: var(--p-surface-900);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n:host ::ng-deep .cmf-close-btn.p-button {\n  color: var(--p-surface-500) !important;\n}\n.cmf-body {\n  flex: 1;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  padding: 1.25rem 1rem 0.5rem;\n}\n.cmf-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-bottom: 0.75rem;\n}\n.cmf-label {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.cmf-field-label-sm {\n  font-size: 0.72rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--p-surface-400);\n}\n.cmf-divider {\n  height: 1px;\n  background: var(--p-surface-200);\n  margin: 0.5rem 0 1.25rem;\n}\n.cmf-section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.875rem;\n}\n.cmf-section-title {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--p-surface-800);\n}\n.cmf-lignes {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.cmf-ligne-card {\n  background: var(--p-surface-50);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 10px;\n  padding: 0.875rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.cmf-prix-usine {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  color: var(--p-surface-500);\n  margin-top: -0.15rem;\n}\n.cmf-inputs-row {\n  display: grid;\n  grid-template-columns: 1fr 6rem;\n  gap: 0.75rem;\n  align-items: end;\n}\n.cmf-input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.cmf-ligne-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.cmf-ligne-total {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--p-primary-600);\n}\n.cmf-ligne-total--empty {\n  color: var(--p-surface-400);\n  font-weight: 400;\n}\n.cmf-info-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: var(--p-surface-100);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  margin-top: 0.25rem;\n  margin-bottom: 0.5rem;\n}\n.cmf-footer {\n  flex-shrink: 0;\n  padding: 0.875rem 1rem;\n  padding-bottom: calc(0.875rem + env(safe-area-inset-bottom));\n  border-top: 1px solid var(--p-surface-200);\n  background: var(--p-surface-0);\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (min-width: 769px) {\n  .cmf-footer {\n    padding-bottom: 0.875rem;\n  }\n}\n.cmf-total-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.625rem 0.875rem;\n  background: var(--p-primary-50, #eef2ff);\n  border: 1px solid var(--p-primary-200, #c7d2fe);\n  border-radius: 8px;\n}\n.cmf-total-label {\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--p-surface-700);\n}\n.cmf-total-value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--p-primary-600);\n  font-variant-numeric: tabular-nums;\n}\n:host-context(.app-dark) .cmf-panel {\n  background: var(--p-surface-900);\n}\n:host-context(.app-dark) .cmf-header {\n  background: var(--p-surface-900);\n  border-bottom-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .cmf-title {\n  color: var(--p-surface-0);\n}\n:host-context(.app-dark) .cmf-label {\n  color: var(--p-surface-200);\n}\n:host-context(.app-dark) .cmf-section-title {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .cmf-divider {\n  background: var(--p-surface-700);\n}\n:host-context(.app-dark) .cmf-ligne-card {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .cmf-ligne-footer {\n  border-top-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .cmf-prix-usine {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .cmf-info-box {\n  background: var(--p-surface-800);\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .cmf-footer {\n  background: var(--p-surface-900);\n  border-top-color: var(--p-surface-700);\n}\n:host-context(.app-dark) .cmf-total-row {\n  background: rgba(99, 102, 241, 0.08);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n:host-context(.app-dark) .cmf-total-label {\n  color: var(--p-surface-200);\n}\n:host-context(.app-dark) :host ::ng-deep .cmf-close-btn.p-button {\n  color: var(--p-surface-400) !important;\n}\n/*# sourceMappingURL=commande-mobile-form.css.map */\n"] }]
  }], null, { editMode: [{
    type: Input
  }], saving: [{
    type: Input
  }], form: [{
    type: Input
  }], vehiculeOptions: [{
    type: Input
  }], produitOptions: [{
    type: Input
  }], produitData: [{
    type: Input
  }], onSave: [{
    type: Output
  }], onClose: [{
    type: Output
  }], onAddLigne: [{
    type: Output
  }], onRemoveLigne: [{
    type: Output
  }], onProduitChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeMobileForm, { className: "CommandeMobileForm", filePath: "src/app/pages/ventes/commande-vente-liste/commande-mobile-form/commande-mobile-form.ts", lineNumber: 21 });
})();

// src/app/pages/ventes/commande-vente-liste/commande-vente-liste.ts
var _c02 = () => [10, 20, 50];
var _c1 = () => ["reference", "vehicule.nom_vehicule", "vehicule.immatriculation"];
var _c2 = () => ({ width: "32rem" });
var _c3 = () => [1, 2, 3, 4];
var _c4 = () => ({ "min-width": "160px" });
var _c5 = () => [1, 2, 3, 4, 5];
var _c6 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c7 = () => ({ width: "58rem", maxWidth: "96vw" });
var _c8 = (a0) => ({ "ng-invalid ng-dirty": a0 });
var _forTrack0 = ($index, $item) => $item.id;
function CommandeVenteListe_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommandeVenteListe_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 13);
  }
}
function CommandeVenteListe_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "p-skeleton", 39);
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommandeVenteListe_Conditional_14_For_1_Template, 2, 0, "div", 38, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c3));
  }
}
function CommandeVenteListe_Conditional_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 42);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_15_Conditional_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function CommandeVenteListe_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Aucune commande de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, CommandeVenteListe_Conditional_15_Conditional_4_Template, 1, 1, "p-button", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.canCreate ? 4 : -1);
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275element(1, "span", 67);
    \u0275\u0275elementStart(2, "span", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getStatutDotClass(c_r6.facture.statut_facture));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatutLabel(c_r6.facture.statut_facture));
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275element(1, "i", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", c_r6.vehicule.nom_vehicule, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xB7 ", c_r6.vehicule.immatriculation);
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const livreur_r7 = \u0275\u0275readContextLet(12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", livreur_r7.prenom, " ", livreur_r7.nom, " ");
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275text(2, " Annul\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2, " Verrouill\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 74);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_16_For_1_Conditional_31_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const c_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMobileEditAction($event, c_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("disabled", ctx_r2.isLocked(c_r6));
  }
}
function CommandeVenteListe_Conditional_16_For_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 75);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_16_For_1_Conditional_32_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const c_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMobileAnnulationAction($event, c_r6));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("disabled", ctx_r2.isAnnulee(c_r6));
  }
}
function CommandeVenteListe_Conditional_16_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275listener("click", function CommandeVenteListe_Conditional_16_For_1_Template_div_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goDetail(c_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 45)(3, "div", 46);
    \u0275\u0275element(4, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 49);
    \u0275\u0275conditionalCreate(8, CommandeVenteListe_Conditional_16_For_1_Conditional_8_Template, 4, 2, "span", 50)(9, CommandeVenteListe_Conditional_16_For_1_Conditional_9_Template, 2, 0, "span", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 52);
    \u0275\u0275conditionalCreate(11, CommandeVenteListe_Conditional_16_For_1_Conditional_11_Template, 5, 2, "div", 53);
    \u0275\u0275declareLet(12);
    \u0275\u0275conditionalCreate(13, CommandeVenteListe_Conditional_16_For_1_Conditional_13_Template, 3, 2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 55)(15, "div", 56)(16, "span", 57);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 58);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 56)(21, "span", 57);
    \u0275\u0275text(22, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 59);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 60)(26, "div");
    \u0275\u0275conditionalCreate(27, CommandeVenteListe_Conditional_16_For_1_Conditional_27_Template, 3, 0, "span", 61)(28, CommandeVenteListe_Conditional_16_For_1_Conditional_28_Template, 3, 0, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 63);
    \u0275\u0275element(30, "p-button", 64);
    \u0275\u0275conditionalCreate(31, CommandeVenteListe_Conditional_16_For_1_Conditional_31_Template, 1, 3, "p-button", 65);
    \u0275\u0275conditionalCreate(32, CommandeVenteListe_Conditional_16_For_1_Conditional_32_Template, 1, 3, "p-button", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r6.reference);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r6.facture ? 8 : 9);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r6.vehicule ? 11 : -1);
    \u0275\u0275advance();
    const livreur_r10 = \u0275\u0275storeLet((c_r6.vehicule == null ? null : c_r6.vehicule.livreurPrincipal) ?? (c_r6.vehicule == null ? null : c_r6.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(livreur_r10 ? 13 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(c_r6.total_commande));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(c_r6.created_at), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isAnnulee(c_r6) ? 27 : ctx_r2.isLocked(c_r6) ? 28 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canUpdate ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canDelete ? 32 : -1);
  }
}
function CommandeVenteListe_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommandeVenteListe_Conditional_16_For_1_Template, 33, 12, "div", 38, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.filteredCommandes);
  }
}
function CommandeVenteListe_ng_template_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 82);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_22_Conditional_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("outlined", true);
  }
}
function CommandeVenteListe_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "p-iconfield", 77);
    \u0275\u0275element(2, "p-inputicon", 16);
    \u0275\u0275elementStart(3, "input", 78);
    \u0275\u0275listener("input", function CommandeVenteListe_ng_template_22_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt_r12 = \u0275\u0275reference(21);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt_r12, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 79)(5, "p-select", 80);
    \u0275\u0275listener("ngModelChange", function CommandeVenteListe_ng_template_22_Template_p_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFiltreStatut($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteListe_ng_template_22_Conditional_6_Template, 1, 1, "p-button", 81);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c4));
    \u0275\u0275property("options", ctx_r2.statutOptions)("ngModel", ctx_r2.filtreStatut());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCreate ? 6 : -1);
  }
}
function CommandeVenteListe_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 83)(2, "span", 84);
    \u0275\u0275text(3, "Commande ");
    \u0275\u0275element(4, "p-sortIcon", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 86)(6, "span", 84);
    \u0275\u0275text(7, "V\xE9hicule ");
    \u0275\u0275element(8, "p-sortIcon", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 88)(10, "span", 84);
    \u0275\u0275text(11, "Livreur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 89)(13, "span", 84);
    \u0275\u0275text(14, "Total ");
    \u0275\u0275element(15, "p-sortIcon", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 91)(17, "span", 84);
    \u0275\u0275text(18, "Statut facture");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "th", 92)(20, "span", 84);
    \u0275\u0275text(21, "Commission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "th", 93)(23, "span", 84);
    \u0275\u0275text(24, "Date ");
    \u0275\u0275element(25, "p-sortIcon", 94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "th", 92);
    \u0275\u0275text(27, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "Annul\xE9e");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "code", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r15.vehicule.nom_vehicule);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r15.vehicule.immatriculation);
  }
}
function CommandeVenteListe_ng_template_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "phoneFormat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const livreur_r16 = \u0275\u0275readContextLet(13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, livreur_r16.phone));
  }
}
function CommandeVenteListe_ng_template_26_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CommandeVenteListe_ng_template_26_Conditional_14_Conditional_3_Template, 3, 3, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const livreur_r16 = \u0275\u0275readContextLet(13);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", livreur_r16.prenom, " ", livreur_r16.nom);
    \u0275\u0275advance();
    \u0275\u0275conditional(livreur_r16.phone ? 3 : -1);
  }
}
function CommandeVenteListe_ng_template_26_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275text(2, " Verrouill\xE9e ");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 110);
    \u0275\u0275element(2, "span", 67);
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, CommandeVenteListe_ng_template_26_Conditional_19_Conditional_5_Template, 3, 0, "span", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getStatutDotClass(c_r15.facture.statut_facture));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getStatutLabel(c_r15.facture.statut_facture));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLocked(c_r15) ? 5 : -1);
  }
}
function CommandeVenteListe_ng_template_26_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 112);
  }
}
function CommandeVenteListe_ng_template_26_Conditional_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-tag", 114);
    \u0275\u0275listener("click", function CommandeVenteListe_ng_template_26_Conditional_22_Conditional_1_Template_p_tag_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const c_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCommissionDetail(c_r15.commission.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.formatMontant(c_r15.commission.montant_commission_total))("severity", ctx_r2.getCommissionSeverity(c_r15.commission.statut));
  }
}
function CommandeVenteListe_ng_template_26_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CommandeVenteListe_ng_template_26_Conditional_22_Conditional_0_Template, 1, 0, "p-tag", 112)(1, CommandeVenteListe_ng_template_26_Conditional_22_Conditional_1_Template, 1, 2, "p-tag", 113);
  }
  if (rf & 2) {
    const c_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(c_r15.commission.statut === "versee" ? 0 : 1);
  }
}
function CommandeVenteListe_ng_template_26_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_26_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 115);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_26_Conditional_29_Template_p_button_onClick_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const c_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      const rowActionsMenu_r19 = \u0275\u0275reference(19);
      return \u0275\u0275resetView(ctx_r2.openDesktopRowMenu($event, rowActionsMenu_r19, c_r15));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function CommandeVenteListe_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 95);
    \u0275\u0275listener("click", function CommandeVenteListe_ng_template_26_Template_td_click_1_listener() {
      const c_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goDetail(c_r15.id));
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 96);
    \u0275\u0275element(4, "i", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 98)(6, "div", 99);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CommandeVenteListe_ng_template_26_Conditional_8_Template, 2, 0, "span", 100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275conditionalCreate(10, CommandeVenteListe_ng_template_26_Conditional_10_Template, 5, 2, "div")(11, CommandeVenteListe_ng_template_26_Conditional_11_Template, 2, 0, "span", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275declareLet(13);
    \u0275\u0275conditionalCreate(14, CommandeVenteListe_ng_template_26_Conditional_14_Template, 4, 3, "div")(15, CommandeVenteListe_ng_template_26_Conditional_15_Template, 2, 0, "span", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 102);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275conditionalCreate(19, CommandeVenteListe_ng_template_26_Conditional_19_Template, 6, 3, "div", 103)(20, CommandeVenteListe_ng_template_26_Conditional_20_Template, 2, 0, "span", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275conditionalCreate(22, CommandeVenteListe_ng_template_26_Conditional_22_Template, 2, 1)(23, CommandeVenteListe_ng_template_26_Conditional_23_Template, 2, 0, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 105);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td")(27, "div", 106)(28, "p-button", 107);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_26_Template_p_button_onClick_28_listener() {
      const c_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goDetail(c_r15.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, CommandeVenteListe_ng_template_26_Conditional_29_Template, 1, 2, "p-button", 108);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r2.isAnnulee(c_r15) ? "bg-red-100 text-red-500" : "bg-blue-100 text-blue-700");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.isAnnulee(c_r15) ? "pi pi-ban" : "pi pi-truck");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r15.reference);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isAnnulee(c_r15) ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r15.vehicule ? 10 : 11);
    \u0275\u0275advance(3);
    const livreur_r20 = \u0275\u0275storeLet((c_r15.vehicule == null ? null : c_r15.vehicule.livreurPrincipal) ?? (c_r15.vehicule == null ? null : c_r15.vehicule.livreur_principal));
    \u0275\u0275advance();
    \u0275\u0275conditional(livreur_r20 ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(c_r15.total_commande));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r15.facture ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(c_r15.commission ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(c_r15.created_at));
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.hasDesktopRowMenuActions(c_r15) ? 29 : -1);
  }
}
function CommandeVenteListe_ng_template_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 42);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_28_Conditional_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCreateDialog());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("text", true);
  }
}
function CommandeVenteListe_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 116)(2, "div", 117);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Aucune commande de vente");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CommandeVenteListe_ng_template_28_Conditional_6_Template, 1, 1, "p-button", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.canCreate ? 6 : -1);
  }
}
function CommandeVenteListe_ng_template_30_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "p-skeleton");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_ng_template_30_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, CommandeVenteListe_ng_template_30_For_1_For_2_Template, 2, 0, "td", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c6));
  }
}
function CommandeVenteListe_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CommandeVenteListe_ng_template_30_For_1_Template, 3, 1, "tr", null, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c5));
  }
}
function CommandeVenteListe_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commande-mobile-form", 118);
    \u0275\u0275listener("onSave", function CommandeVenteListe_Conditional_32_Template_app_commande_mobile_form_onSave_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSaveCommande());
    })("onClose", function CommandeVenteListe_Conditional_32_Template_app_commande_mobile_form_onClose_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    })("onAddLigne", function CommandeVenteListe_Conditional_32_Template_app_commande_mobile_form_onAddLigne_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addLigne());
    })("onRemoveLigne", function CommandeVenteListe_Conditional_32_Template_app_commande_mobile_form_onRemoveLigne_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeLigne($event));
    })("onProduitChange", function CommandeVenteListe_Conditional_32_Template_app_commande_mobile_form_onProduitChange_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProduitChange($event.i, $event.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("editMode", ctx_r2.editMode)("saving", ctx_r2.saving)("form", ctx_r2.createForm)("vehiculeOptions", ctx_r2.vehiculeOptions)("produitOptions", ctx_r2.produitOptions)("produitData", ctx_r2.produitData);
  }
}
function CommandeVenteListe_Conditional_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, "S\xE9lectionnez un v\xE9hicule.");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_33_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 33);
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_33_For_32_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 137);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_400_r25 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.getPrixUsine(\u0275$index_400_r25)));
  }
}
function CommandeVenteListe_Conditional_33_For_32_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_33_For_32_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_400_r25 = \u0275\u0275nextContext().$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.getTotalLigne(\u0275$index_400_r25)));
  }
}
function CommandeVenteListe_Conditional_33_For_32_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function CommandeVenteListe_Conditional_33_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 135)(2, "p-select", 136);
    \u0275\u0275listener("onChange", function CommandeVenteListe_Conditional_33_For_32_Template_p_select_onChange_2_listener($event) {
      const \u0275$index_400_r25 = \u0275\u0275restoreView(_r24).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onProduitChange(\u0275$index_400_r25, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CommandeVenteListe_Conditional_33_For_32_Conditional_3_Template, 2, 0, "small", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128);
    \u0275\u0275conditionalCreate(5, CommandeVenteListe_Conditional_33_For_32_Conditional_5_Template, 2, 1, "span", 137)(6, CommandeVenteListe_Conditional_33_For_32_Conditional_6_Template, 2, 0, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-inputNumber", 138)(8, "p-inputNumber", 139);
    \u0275\u0275elementStart(9, "div", 129);
    \u0275\u0275conditionalCreate(10, CommandeVenteListe_Conditional_33_For_32_Conditional_10_Template, 2, 1, "span", 140)(11, CommandeVenteListe_Conditional_33_For_32_Conditional_11_Template, 2, 0, "span", 141);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 142)(13, "p-button", 143);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_33_For_32_Template_p_button_onClick_13_listener() {
      const \u0275$index_400_r25 = \u0275\u0275restoreView(_r24).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeLigne(\u0275$index_400_r25));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const \u0275$index_400_r25 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_400_r25);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.produitOptions)("filter", true)("ngClass", \u0275\u0275pureFunction1(16, _c8, ctx_r2.isLigneInvalid(\u0275$index_400_r25, "produit_id")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isLigneInvalid(\u0275$index_400_r25, "produit_id") ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getPrixUsine(\u0275$index_400_r25) > 0 ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 0)("useGrouping", true)("ngClass", \u0275\u0275pureFunction1(18, _c8, ctx_r2.isLigneInvalid(\u0275$index_400_r25, "prix_vente")));
    \u0275\u0275advance();
    \u0275\u0275property("min", 1)("useGrouping", false)("ngClass", \u0275\u0275pureFunction1(20, _c8, ctx_r2.isLigneInvalid(\u0275$index_400_r25, "qte")));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.getTotalLigne(\u0275$index_400_r25) > 0 ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true)("disabled", ctx_r2.lignes.length === 1);
  }
}
function CommandeVenteListe_Conditional_33_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275element(1, "i", 144);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Une facture sera g\xE9n\xE9r\xE9e automatiquement \xE0 la cr\xE9ation de la commande.");
    \u0275\u0275elementEnd()();
  }
}
function CommandeVenteListe_Conditional_33_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-button", 145);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_33_ng_template_39_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSaveCommande());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r2.editMode ? "Enregistrer les modifications" : "Cr\xE9er la commande")("loading", ctx_r2.saving);
  }
}
function CommandeVenteListe_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 119);
    \u0275\u0275twoWayListener("visibleChange", function CommandeVenteListe_Conditional_33_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.dialogVisible, $event) || (ctx_r2.dialogVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "form", 120)(2, "div", 121)(3, "div", 31)(4, "label", 32);
    \u0275\u0275text(5, "V\xE9hicule ");
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-select", 122);
    \u0275\u0275conditionalCreate(9, CommandeVenteListe_Conditional_33_Conditional_9_Template, 2, 0, "small", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "p-divider", 123);
    \u0275\u0275elementStart(11, "div", 124)(12, "div", 125)(13, "span", 32);
    \u0275\u0275text(14, "Lignes de commande ");
    \u0275\u0275elementStart(15, "span", 33);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p-button", 126);
    \u0275\u0275listener("onClick", function CommandeVenteListe_Conditional_33_Template_p_button_onClick_17_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addLigne());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 127)(19, "span");
    \u0275\u0275text(20, "Produit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 128);
    \u0275\u0275text(22, "Prix usine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 128);
    \u0275\u0275text(24, "Prix vente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 128);
    \u0275\u0275text(26, "Qt\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 129);
    \u0275\u0275text(28, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 130);
    \u0275\u0275repeaterCreate(31, CommandeVenteListe_Conditional_33_For_32_Template, 14, 22, "div", 131, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 132)(34, "span", 32);
    \u0275\u0275text(35, "Total commande");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 133);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(38, CommandeVenteListe_Conditional_33_Conditional_38_Template, 4, 0, "div", 134);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, CommandeVenteListe_Conditional_33_ng_template_39_Template, 2, 2, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(15, _c7));
    \u0275\u0275property("header", ctx_r2.editMode ? "Modifier la commande" : "Nouvelle commande de vente");
    \u0275\u0275twoWayProperty("visible", ctx_r2.dialogVisible);
    \u0275\u0275property("modal", true)("draggable", false)("resizable", false);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.createForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("options", ctx_r2.vehiculeOptions)("filter", true)("ngClass", \u0275\u0275pureFunction1(16, _c8, ctx_r2.isInvalid("vehicule_id")));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isInvalid("vehicule_id") ? 9 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("text", true);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.lignes.controls);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatMontant(ctx_r2.totalDialog));
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.editMode ? 38 : -1);
  }
}
function CommandeVenteListe_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 146);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_51_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.annulationDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 147);
    \u0275\u0275listener("onClick", function CommandeVenteListe_ng_template_51_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmerAnnulation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("outlined", true)("disabled", ctx_r2.annulationLoading);
    \u0275\u0275advance();
    \u0275\u0275property("loading", ctx_r2.annulationLoading)("disabled", !ctx_r2.motifAnnulation.trim());
  }
}
function CommandeVenteListe_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commission-detail-dialog", 148);
    \u0275\u0275listener("visibleChange", function CommandeVenteListe_Conditional_53_Template_app_commission_detail_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commissionDetailVisible.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("commissionId", ctx_r2.selectedCommissionId())("visible", ctx_r2.commissionDetailVisible());
  }
}
var CommandeVenteListe = class _CommandeVenteListe {
  fb;
  commandeService;
  vehiculeService;
  produitService;
  authService;
  messageService;
  router;
  document;
  commandes = signal([], ...ngDevMode ? [{ debugName: "commandes" }] : []);
  isMobile = signal(typeof window !== "undefined" ? window.innerWidth < 768 : false, ...ngDevMode ? [{ debugName: "isMobile" }] : []);
  mobilePwaClass = "ventes-mobile-pwa";
  loading = false;
  saving = false;
  dialogVisible = false;
  editMode = false;
  editingId = null;
  // Annulation
  annulationDialogVisible = false;
  annulationLoading = false;
  commandeToAnnuler = null;
  motifAnnulation = "";
  // Filtre statut
  filtreStatut = signal("all", ...ngDevMode ? [{ debugName: "filtreStatut" }] : []);
  statutOptions = [
    { label: "Toutes", value: "all" },
    { label: "Impayees", value: "impayee" },
    { label: "Partielles", value: "partiel" },
    { label: "Payees", value: "payee" },
    { label: "Annulees", value: "annulee" }
  ];
  createForm;
  vehiculeOptions = [];
  produitOptions = [];
  get canCreate() {
    return this.authService.hasPermission("commandes.create");
  }
  get canUpdate() {
    return this.authService.hasPermission("commandes.update");
  }
  get canDelete() {
    return this.authService.hasPermission("commandes.delete");
  }
  // Commission detail dialog
  selectedCommissionId = signal(null, ...ngDevMode ? [{ debugName: "selectedCommissionId" }] : []);
  commissionDetailVisible = signal(false, ...ngDevMode ? [{ debugName: "commissionDetailVisible" }] : []);
  desktopRowMenuItems = [];
  produitData = /* @__PURE__ */ new Map();
  defaultProduitId = null;
  mobileSearchQuery = "";
  get commandesFiltreesParStatutFacture() {
    const statut = this.filtreStatut();
    if (statut === "all")
      return this.commandes();
    return this.commandes().filter((c) => c.facture?.statut_facture === statut);
  }
  get filteredCommandes() {
    const q = this.mobileSearchQuery.trim().toLowerCase();
    const base = this.commandesFiltreesParStatutFacture;
    if (!q)
      return base;
    return base.filter((c) => c.reference?.toLowerCase().includes(q) || c.vehicule?.nom_vehicule?.toLowerCase().includes(q) || c.vehicule?.immatriculation?.toLowerCase().includes(q));
  }
  get totalDialog() {
    if (!this.createForm)
      return 0;
    return this.lignes.controls.reduce((sum, ctrl) => {
      const qte = ctrl.get("qte")?.value ?? 0;
      const prixVente = ctrl.get("prix_vente")?.value ?? 0;
      return sum + prixVente * qte;
    }, 0);
  }
  getTotalLigne(i) {
    const ctrl = this.lignes.at(i);
    return (ctrl.get("prix_vente")?.value ?? 0) * (ctrl.get("qte")?.value ?? 0);
  }
  getPrixUsine(i) {
    const produitId = this.lignes.at(i).get("produit_id")?.value;
    return this.produitData.get(produitId)?.prixUsine ?? 0;
  }
  isAnnulee(c) {
    return c.statut === "annulee";
  }
  isLocked(c) {
    return this.isAnnulee(c) || (c.facture?.montant_encaisse ?? 0) > 0;
  }
  hasDesktopRowMenuActions(c) {
    return this.getDesktopRowMenuItems(c).length > 0;
  }
  getDesktopRowMenuItems(c) {
    const items = [];
    if (this.canUpdate) {
      items.push({
        label: "Modifier",
        icon: "pi pi-pen-to-square",
        disabled: this.isLocked(c),
        command: () => this.openEditDialog(c)
      });
    }
    if (this.canDelete) {
      items.push({
        label: "Annuler",
        icon: "pi pi-ban",
        disabled: this.isAnnulee(c),
        command: () => this.openAnnulationDialog(c)
      });
    }
    return items;
  }
  openDesktopRowMenu(event, menu, c) {
    event.stopPropagation();
    this.desktopRowMenuItems = this.getDesktopRowMenuItems(c);
    if (this.desktopRowMenuItems.length === 0)
      return;
    menu.toggle(event);
  }
  constructor(fb, commandeService, vehiculeService, produitService, authService, messageService, router, document) {
    this.fb = fb;
    this.commandeService = commandeService;
    this.vehiculeService = vehiculeService;
    this.produitService = produitService;
    this.authService = authService;
    this.messageService = messageService;
    this.router = router;
    this.document = document;
  }
  onWindowResize() {
    this.isMobile.set(window.innerWidth < 768);
    this.syncMobilePwaMode();
  }
  ngOnInit() {
    this.syncMobilePwaMode();
    this.initForm();
    this.loadCommandes();
    this.loadVehicules();
    this.loadProduits();
  }
  ngOnDestroy() {
    this.document.body.classList.remove(this.mobilePwaClass);
  }
  syncMobilePwaMode() {
    if (typeof window === "undefined")
      return;
    if (window.innerWidth <= 768) {
      this.document.body.classList.add(this.mobilePwaClass);
    } else {
      this.document.body.classList.remove(this.mobilePwaClass);
    }
  }
  initForm() {
    this.createForm = this.fb.group({
      vehicule_id: [null, Validators.required],
      lignes: this.fb.array([this.createLigneGroup()])
    });
  }
  createLigneGroup(data) {
    return this.fb.group({
      produit_id: [data?.produit_id ?? null, Validators.required],
      qte: [data?.qte ?? 1, [Validators.required, Validators.min(1)]],
      prix_vente: [data?.prix_vente ?? null, [Validators.required, Validators.min(0)]]
    });
  }
  get lignes() {
    return this.createForm.get("lignes");
  }
  addLigne() {
    if (this.defaultProduitId) {
      const existingIdx = this.lignes.controls.findIndex((ctrl) => ctrl.get("produit_id")?.value === this.defaultProduitId);
      if (existingIdx !== -1) {
        const ctrl = this.lignes.at(existingIdx);
        ctrl.patchValue({ qte: (ctrl.get("qte")?.value ?? 1) + 1 });
        return;
      }
    }
    this.lignes.push(this.createLigneGroup());
    if (this.defaultProduitId) {
      const i = this.lignes.length - 1;
      this.lignes.at(i).patchValue({ produit_id: this.defaultProduitId });
      this.onProduitChange(i, this.defaultProduitId);
    }
  }
  removeLigne(i) {
    if (this.lignes.length > 1)
      this.lignes.removeAt(i);
  }
  onProduitChange(i, produitId) {
    const data = this.produitData.get(produitId);
    if (data) {
      this.lignes.at(i).patchValue({ prix_vente: data.prixVente });
    }
    const duplicateIdx = this.lignes.controls.findIndex((ctrl, idx) => idx !== i && ctrl.get("produit_id")?.value === produitId);
    if (duplicateIdx !== -1) {
      const addedQte = this.lignes.at(i).get("qte")?.value ?? 1;
      const existingQte = this.lignes.at(duplicateIdx).get("qte")?.value ?? 1;
      this.lignes.at(duplicateIdx).patchValue({ qte: existingQte + addedQte });
      this.lignes.removeAt(i);
    }
  }
  openCreateDialog() {
    this.editMode = false;
    this.editingId = null;
    this.initForm();
    if (this.defaultProduitId) {
      this.lignes.at(0).patchValue({ produit_id: this.defaultProduitId });
      this.onProduitChange(0, this.defaultProduitId);
    }
    this.dialogVisible = true;
  }
  openEditDialog(c) {
    this.editMode = true;
    this.editingId = c.id;
    const lignesGroups = (c.lignes ?? []).map((l) => this.createLigneGroup({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente_snapshot }));
    this.createForm = this.fb.group({
      vehicule_id: [c.vehicule_id, Validators.required],
      lignes: this.fb.array(lignesGroups.length ? lignesGroups : [this.createLigneGroup()])
    });
    this.dialogVisible = true;
  }
  onMobileEditAction(event, c) {
    event.stopPropagation();
    this.openEditDialog(c);
  }
  onMobileAnnulationAction(event, c) {
    event.stopPropagation();
    this.openAnnulationDialog(c);
  }
  onSaveCommande() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid || this.saving)
      return;
    this.editMode ? this.doUpdateCommande() : this.doCreateCommande();
  }
  doCreateCommande() {
    const v = this.createForm.value;
    const dto = {
      vehicule_id: v.vehicule_id,
      lignes: v.lignes.map((l) => ({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente }))
    };
    this.saving = true;
    this.commandeService.createCommande(dto).subscribe({
      next: (resp) => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Commande cr\xE9\xE9e",
          detail: "La facture a \xE9t\xE9 g\xE9n\xE9r\xE9e automatiquement.",
          life: 4e3
        });
        if (resp.data?.id) {
          this.router.navigate(["/ventes/commandes", resp.data.id]);
        } else {
          this.loadCommandes();
        }
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "cr\xE9er la commande");
      }
    });
  }
  doUpdateCommande() {
    const v = this.createForm.value;
    const dto = {
      vehicule_id: v.vehicule_id,
      lignes: v.lignes.map((l) => ({ produit_id: l.produit_id, qte: l.qte, prix_vente: l.prix_vente }))
    };
    this.saving = true;
    this.commandeService.updateCommande(this.editingId, dto).subscribe({
      next: () => {
        this.saving = false;
        this.dialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Commande mise \xE0 jour",
          detail: "Les modifications ont \xE9t\xE9 enregistr\xE9es.",
          life: 4e3
        });
        this.loadCommandes();
      },
      error: (err) => {
        this.saving = false;
        this.showApiError(err, "modifier la commande");
      }
    });
  }
  openAnnulationDialog(c) {
    this.commandeToAnnuler = c;
    this.motifAnnulation = "";
    this.annulationDialogVisible = true;
  }
  confirmerAnnulation() {
    if (!this.commandeToAnnuler || this.annulationLoading || !this.motifAnnulation.trim())
      return;
    this.annulationLoading = true;
    this.commandeService.annulerCommande(this.commandeToAnnuler.id, { motif_annulation: this.motifAnnulation.trim() }).subscribe({
      next: () => {
        this.annulationLoading = false;
        this.annulationDialogVisible = false;
        this.messageService.add({
          severity: "success",
          summary: "Commande annul\xE9e",
          detail: "La commande a \xE9t\xE9 annul\xE9e et les stocks ont \xE9t\xE9 restaur\xE9s.",
          life: 4e3
        });
        this.loadCommandes();
      },
      error: (err) => {
        this.annulationLoading = false;
        this.showApiError(err, "annuler la commande");
      }
    });
  }
  setFiltreStatut(statut) {
    this.filtreStatut.set(statut);
  }
  loadCommandes() {
    this.loading = true;
    this.commandeService.getCommandes().subscribe({
      next: (resp) => {
        this.commandes.set(resp.data?.data ?? []);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.showApiError(err, "charger les commandes");
      }
    });
  }
  loadVehicules() {
    this.vehiculeService.getAll({ per_page: 200 }).subscribe({
      next: (resp) => {
        const raw = resp.data;
        const vehicules = raw?.data ?? (Array.isArray(raw) ? raw : []);
        this.vehiculeOptions = vehicules.map((v) => ({
          label: `${v.nom_vehicule} \u2014 ${v.immatriculation}`,
          value: v.id
        }));
      },
      error: () => {
        this.messageService.add({
          severity: "warn",
          summary: "V\xE9hicules non charg\xE9s",
          detail: "Impossible de r\xE9cup\xE9rer la liste des v\xE9hicules.",
          life: 4e3
        });
      }
    });
  }
  loadProduits() {
    this.produitService.getAllFiltered({ type: "fabricable" }).subscribe({
      next: (produits) => {
        this.produitData = new Map(produits.map((p) => [p.id, { prixUsine: p.prix_usine ?? 0, prixVente: p.prix_vente ?? 0, nom: p.nom }]));
        this.produitOptions = produits.map((p) => ({ label: p.nom, value: p.id }));
        const defProduit = produits.find((p) => p.nom.toLowerCase().includes("pack 30"));
        this.defaultProduitId = defProduit?.id ?? null;
      },
      error: () => {
        this.messageService.add({
          severity: "warn",
          summary: "Produits non charg\xE9s",
          detail: "Impossible de r\xE9cup\xE9rer la liste des produits.",
          life: 4e3
        });
      }
    });
  }
  openCommissionDetail(commissionId, event) {
    event.stopPropagation();
    this.selectedCommissionId.set(commissionId);
    this.commissionDetailVisible.set(true);
  }
  getCommissionLabel(s) {
    return STATUT_COMMISSION_LABELS[s] ?? s;
  }
  getCommissionSeverity(s) {
    return STATUT_COMMISSION_SEVERITY[s] ?? "info";
  }
  goBack() {
    this.router.navigate(["/"]);
  }
  goDetail(id) {
    this.router.navigate(["/ventes/commandes", id]);
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  isInvalid(name) {
    const c = this.createForm.get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  isLigneInvalid(i, name) {
    const c = this.lignes.at(i).get(name);
    return c.invalid && (c.dirty || c.touched);
  }
  getStatutLabel(s) {
    return STATUT_FACTURE_LABELS[s] ?? s;
  }
  getStatutDotClass(s) {
    const map = {
      impayee: "cv-status-dot--impayee",
      partiel: "cv-status-dot--partiel",
      payee: "cv-status-dot--payee",
      annulee: "cv-status-dot--annulee"
    };
    return map[s] ?? "cv-status-dot--annulee";
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
    return new Date(d).toLocaleDateString("fr-FR");
  }
  showApiError(err, action) {
    if (err.status === 422 && err.error?.errors) {
      const msgs = Object.values(err.error.errors).flat();
      msgs.forEach((m) => this.messageService.add({ severity: "error", summary: "Erreur de validation", detail: m, life: 5e3 }));
      return;
    }
    if (err.status === 422 && err.error?.message) {
      this.messageService.add({ severity: "warn", summary: "Action impossible", detail: err.error.message, life: 5e3 });
      return;
    }
    const summaryMap = {
      401: "Session expir\xE9e",
      403: "Acc\xE8s refus\xE9",
      404: "Introuvable",
      0: "Serveur inaccessible"
    };
    const detailMap = {
      401: "Votre session a expir\xE9. Veuillez vous reconnecter.",
      403: `Vous n'avez pas la permission de ${action}.`,
      404: "La ressource demand\xE9e est introuvable.",
      0: "Impossible de joindre le serveur. V\xE9rifiez votre connexion r\xE9seau."
    };
    this.messageService.add({
      severity: "error",
      summary: summaryMap[err.status] ?? `Erreur ${err.status || ""}`.trim(),
      detail: detailMap[err.status] ?? err.error?.message ?? `Une erreur est survenue (${action}).`,
      life: 5e3
    });
  }
  static \u0275fac = function CommandeVenteListe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommandeVenteListe)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(CommandeVenteService), \u0275\u0275directiveInject(VehiculeService), \u0275\u0275directiveInject(ProduitService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommandeVenteListe, selectors: [["app-commande-vente-liste"]], hostBindings: function CommandeVenteListe_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function CommandeVenteListe_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, \u0275\u0275resolveWindow);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 54, vars: 28, consts: [["rowActionsMenu", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], ["footer", ""], [1, "cv-liste-page-wrap"], [1, "cv-liste-mobile-header"], ["icon", "pi pi-arrow-left", "styleClass", "cv-mobile-back", 3, "onClick", "text", "rounded"], [1, "cv-liste-mobile-title"], ["icon", "pi pi-plus", "styleClass", "cv-mobile-create", 3, "text", "rounded"], [2, "width", "2.5rem"], [1, "cv-mobile-search"], [1, "w-full"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher une commande\u2026", 1, "w-full", 3, "input"], [1, "cv-mobile-scroll"], [1, "cv-commandes-mobile"], [1, "flex", "flex-col", "items-center", "gap-3", "py-12", "text-surface-500"], [1, "cv-tableau-desktop", "card"], ["appendTo", "body", 3, "model", "popup"], ["responsiveLayout", "scroll", "currentPageReportTemplate", "{first} / {last} de {totalRecords} commandes", 3, "value", "loading", "paginator", "rows", "rowsPerPageOptions", "globalFilterFields", "rowHover", "showCurrentPageReport"], [3, "editMode", "saving", "form", "vehiculeOptions", "produitOptions", "produitData"], ["styleClass", "cv-commande-dialog", 3, "header", "visible", "modal", "style", "draggable", "resizable"], ["header", "Annuler la commande", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "gap-4", "py-2"], [1, "flex", "items-start", "gap-3"], [1, "pi", "pi-ban", "text-red-500", "text-3xl", "flex-shrink-0", "mt-0.5"], [1, "m-0", "text-sm"], [1, "flex", "flex-col", "gap-2"], [1, "font-medium", "text-sm"], [1, "text-red-500"], ["rows", "3", "maxlength", "500", "placeholder", "Indiquez le motif de l'annulation...", 1, "w-full", "text-sm", 2, "border", "1px solid var(--p-surface-300)", "border-radius", "6px", "padding", "0.5rem", "resize", "none", "outline", "none", "font-family", "inherit", "background", "var(--p-surface-0)", "color", "var(--p-surface-900)", 3, "input", "value"], [1, "text-surface-400"], [3, "commissionId", "visible"], ["icon", "pi pi-plus", "styleClass", "cv-mobile-create", 3, "onClick", "text", "rounded"], [1, "cv-commande-card"], ["height", "5rem", "borderRadius", "8px"], [1, "pi", "pi-shopping-cart", "text-4xl"], ["label", "Cr\xE9er une commande", "icon", "pi pi-plus", 3, "text"], ["label", "Cr\xE9er une commande", "icon", "pi pi-plus", 3, "onClick", "text"], [1, "cv-commande-card", 3, "click"], [1, "cv-commande-card__top"], [1, "flex", "items-center", "gap-2", "min-w-0"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-blue-100", "text-blue-700", "flex-shrink-0"], [1, "pi", "pi-truck", "text-xs"], [1, "cv-commande-card__ref"], [1, "flex-shrink-0"], [1, "cv-status-inline", "cv-status-inline--sm"], [1, "text-xs", "text-surface-400"], [1, "flex", "flex-col", "gap-0.5"], [1, "cv-commande-card__vehicule"], [1, "cv-commande-card__livreur"], [1, "cv-commande-card__middle"], [1, "cv-amount-item"], [1, "cv-amount-label"], [1, "cv-amount-value"], [1, "cv-amount-value", 2, "font-size", "0.82rem", "font-weight", "500"], [1, "cv-commande-card__footer"], [1, "cv-lock-badge", 2, "background", "var(--p-red-100)", "color", "var(--p-red-700)"], [1, "cv-lock-badge"], [1, "cv-commande-card__actions"], ["icon", "pi pi-eye", "severity", "info", "size", "small", 3, "text", "rounded"], ["icon", "pi pi-pencil", "severity", "secondary", "size", "small", 3, "text", "rounded", "disabled"], ["icon", "pi pi-ban", "severity", "danger", "size", "small", "pTooltip", "Annuler la commande", "tooltipPosition", "top", 3, "text", "rounded", "disabled"], [1, "cv-status-dot", 3, "ngClass"], [1, "cv-status-text", "text-surface-900", "dark:text-surface-0"], [1, "pi", "pi-car", "text-xs", "mr-1", "text-surface-400"], [1, "cv-commande-card__immat", "ml-1"], [1, "pi", "pi-user", "text-xs"], [1, "pi", "pi-ban", "text-xs"], [1, "pi", "pi-lock", "text-xs"], ["icon", "pi pi-pencil", "severity", "secondary", "size", "small", 3, "onClick", "text", "rounded", "disabled"], ["icon", "pi pi-ban", "severity", "danger", "size", "small", "pTooltip", "Annuler la commande", "tooltipPosition", "top", 3, "onClick", "text", "rounded", "disabled"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80"], ["pInputText", "", "type", "text", "placeholder", "Rechercher une commande...", 1, "w-full", 3, "input"], [1, "flex", "flex-wrap", "gap-2", "items-center", "w-full", "sm:w-auto"], ["optionLabel", "label", "optionValue", "value", 3, "ngModelChange", "options", "ngModel"], ["label", "Nouvelle commande", "icon", "pi pi-plus", 3, "outlined"], ["label", "Nouvelle commande", "icon", "pi pi-plus", 3, "onClick", "outlined"], ["pSortableColumn", "reference", 1, "white-space-nowrap", 2, "width", "20%"], [1, "flex", "items-center", "gap-2"], ["field", "reference"], ["pSortableColumn", "vehicule.nom_vehicule", 1, "white-space-nowrap", 2, "width", "20%"], ["field", "vehicule.nom_vehicule"], [2, "width", "14%"], ["pSortableColumn", "total_commande", 1, "white-space-nowrap", 2, "width", "13%"], ["field", "total_commande"], [2, "width", "11%"], [2, "width", "10%"], ["pSortableColumn", "created_at", 1, "white-space-nowrap", 2, "width", "9%"], ["field", "created_at"], [1, "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "w-6", "h-10", "rounded-full", "flex-shrink-0", 3, "ngClass"], [1, "text-sm", 3, "ngClass"], [1, "flex", "flex-col"], [1, "font-semibold", "font-mono"], [1, "text-xs", "text-red-500", "font-medium"], [1, "text-surface-400", "text-sm"], [1, "font-semibold"], [1, "flex", "flex-col", "gap-1"], [1, "text-surface-300", "text-xs"], [1, "text-sm", "text-surface-500"], [1, "flex", "items-center", "gap-1"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "Voir le d\xE9tail", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["icon", "pi pi-ellipsis-v", "severity", "secondary", "pTooltip", "Plus d'actions", "tooltipPosition", "top", 3, "text", "rounded"], [1, "text-sm", "text-surface-500", "font-mono"], [1, "cv-status-inline"], [1, "text-xs", "text-surface-400", "flex", "items-center", "gap-1"], ["severity", "success", "value", "Vers\xE9e"], ["styleClass", "cursor-pointer", "pTooltip", "Voir la commission", "tooltipPosition", "top", 3, "value", "severity"], ["styleClass", "cursor-pointer", "pTooltip", "Voir la commission", "tooltipPosition", "top", 3, "click", "value", "severity"], ["icon", "pi pi-ellipsis-v", "severity", "secondary", "pTooltip", "Plus d'actions", "tooltipPosition", "top", 3, "onClick", "text", "rounded"], ["colspan", "8", 1, "text-center", "py-10"], [1, "flex", "flex-col", "items-center", "gap-3", "text-surface-500"], [3, "onSave", "onClose", "onAddLigne", "onRemoveLigne", "onProduitChange", "editMode", "saving", "form", "vehiculeOptions", "produitOptions", "produitData"], ["styleClass", "cv-commande-dialog", 3, "visibleChange", "header", "visible", "modal", "draggable", "resizable"], ["novalidate", "", 3, "formGroup"], [1, "flex", "flex-col", "gap-5"], ["formControlName", "vehicule_id", "optionLabel", "label", "optionValue", "value", "placeholder", "S\xE9lectionner un v\xE9hicule", "filterPlaceholder", "Rechercher\u2026", "styleClass", "w-full", 3, "options", "filter", "ngClass"], ["styleClass", "my-0"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "justify-between"], ["label", "Ajouter une ligne", "icon", "pi pi-plus", "size", "small", 3, "onClick", "text"], [1, "grid", "gap-2", "px-3", "text-xs", "font-semibold", "text-surface-400", "uppercase", "tracking-wide", 2, "grid-template-columns", "1fr 8rem 8rem 5rem 8rem 2.5rem"], [1, "text-center"], [1, "text-right"], ["formArrayName", "lignes", 1, "flex", "flex-col", "gap-2"], [1, "grid", "gap-2", "items-center", "px-3", "py-2", "surface-50", "border-round", "border-1", "surface-border", 2, "grid-template-columns", "1fr 8rem 8rem 5rem 8rem 2.5rem", 3, "formGroupName"], [1, "flex", "items-center", "justify-between", "px-3", "py-3", "border-round", 2, "background", "var(--p-primary-50, #eef2ff)", "border", "1px solid var(--p-primary-200, #c7d2fe)"], [1, "font-bold", "text-xl", "text-primary"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "surface-100", "border-round", "text-sm", "text-surface-400"], [1, "flex", "flex-col", "gap-1", "min-w-0"], ["formControlName", "produit_id", "optionLabel", "label", "optionValue", "value", "placeholder", "Choisir\u2026", "filterPlaceholder", "Rechercher\u2026", "styleClass", "w-full", 3, "onChange", "options", "filter", "ngClass"], [1, "text-xs", "text-surface-400", "font-mono"], ["formControlName", "prix_vente", "styleClass", "w-full", "inputStyleClass", "w-full text-right text-sm", 3, "min", "useGrouping", "ngClass"], ["formControlName", "qte", "styleClass", "w-full", "inputStyleClass", "w-full text-center text-sm", 3, "min", "useGrouping", "ngClass"], [1, "font-semibold", "text-sm", "text-primary"], [1, "text-surface-300", "text-sm"], [1, "flex", "justify-center"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", 3, "onClick", "text", "rounded", "disabled"], [1, "pi", "pi-info-circle", "flex-shrink-0"], ["icon", "pi pi-check", "fluid", "", 3, "onClick", "label", "loading"], ["label", "Retour", "severity", "secondary", 3, "onClick", "outlined", "disabled"], ["label", "Confirmer l'annulation", "icon", "pi pi-ban", "severity", "danger", 3, "onClick", "loading", "disabled"], [3, "visibleChange", "commissionId", "visible"]], template: function CommandeVenteListe_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "p-button", 10);
      \u0275\u0275listener("onClick", function CommandeVenteListe_Template_p_button_onClick_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.goBack());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 11);
      \u0275\u0275text(5, "Commandes");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, CommandeVenteListe_Conditional_6_Template, 1, 2, "p-button", 12)(7, CommandeVenteListe_Conditional_7_Template, 1, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 14)(9, "p-iconfield", 15);
      \u0275\u0275element(10, "p-inputicon", 16);
      \u0275\u0275elementStart(11, "input", 17);
      \u0275\u0275listener("input", function CommandeVenteListe_Template_input_input_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.mobileSearchQuery = $event.target.value);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 18)(13, "div", 19);
      \u0275\u0275conditionalCreate(14, CommandeVenteListe_Conditional_14_Template, 2, 1)(15, CommandeVenteListe_Conditional_15_Template, 5, 1, "div", 20)(16, CommandeVenteListe_Conditional_16_Template, 2, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 21);
      \u0275\u0275element(18, "p-menu", 22, 0);
      \u0275\u0275elementStart(20, "p-table", 23, 1);
      \u0275\u0275template(22, CommandeVenteListe_ng_template_22_Template, 7, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(24, CommandeVenteListe_ng_template_24_Template, 28, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(26, CommandeVenteListe_ng_template_26_Template, 30, 14, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(28, CommandeVenteListe_ng_template_28_Template, 7, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(30, CommandeVenteListe_ng_template_30_Template, 2, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(32, CommandeVenteListe_Conditional_32_Template, 1, 6, "app-commande-mobile-form", 24);
      \u0275\u0275conditionalCreate(33, CommandeVenteListe_Conditional_33_Template, 41, 18, "p-dialog", 25);
      \u0275\u0275elementStart(34, "p-dialog", 26);
      \u0275\u0275twoWayListener("visibleChange", function CommandeVenteListe_Template_p_dialog_visibleChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.annulationDialogVisible, $event) || (ctx.annulationDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(35, "div", 27)(36, "div", 28);
      \u0275\u0275element(37, "i", 29);
      \u0275\u0275elementStart(38, "p", 30);
      \u0275\u0275text(39, " Annuler la commande ");
      \u0275\u0275elementStart(40, "strong");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " ? Cette action est irr\xE9versible. Les stocks seront restaur\xE9s et la facture sera annul\xE9e. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 31)(44, "label", 32);
      \u0275\u0275text(45, "Motif d'annulation ");
      \u0275\u0275elementStart(46, "span", 33);
      \u0275\u0275text(47, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "textarea", 34);
      \u0275\u0275listener("input", function CommandeVenteListe_Template_textarea_input_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.motifAnnulation = $event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "small", 35);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, CommandeVenteListe_ng_template_51_Template, 2, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(53, CommandeVenteListe_Conditional_53_Template, 1, 2, "app-commission-detail-dialog", 36);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("text", true)("rounded", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.canCreate ? 6 : 7);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading ? 14 : ctx.filteredCommandes.length === 0 ? 15 : 16);
      \u0275\u0275advance(4);
      \u0275\u0275property("model", ctx.desktopRowMenuItems)("popup", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.commandesFiltreesParStatutFacture)("loading", ctx.loading)("paginator", true)("rows", 20)("rowsPerPageOptions", \u0275\u0275pureFunction0(25, _c02))("globalFilterFields", \u0275\u0275pureFunction0(26, _c1))("rowHover", true)("showCurrentPageReport", true);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.dialogVisible && ctx.isMobile() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isMobile() ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(27, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.annulationDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.commandeToAnnuler == null ? null : ctx.commandeToAnnuler.reference);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.motifAnnulation);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.motifAnnulation.length, "/500 caract\xE8res");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.selectedCommissionId() ? 53 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    ToastModule,
    Toast,
    ToolbarModule,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    TagModule,
    Tag,
    SkeletonModule,
    Skeleton,
    DialogModule,
    Dialog,
    SelectModule,
    Select,
    TooltipModule,
    Tooltip,
    InputIconModule,
    InputIcon,
    IconFieldModule,
    IconField,
    DividerModule,
    Divider,
    MenuModule,
    Menu,
    CommandeMobileForm,
    CommissionDetailDialog,
    PhoneFormatPipe
  ], styles: ["\n\n@media (max-width: 768px) {\n  .cv-liste-page-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n}\n@media (max-width: 768px) {\n  .cv-mobile-scroll[_ngcontent-%COMP%] {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem 0 1rem;\n  }\n}\n.cv-liste-mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n.cv-commandes-mobile[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .cv-liste-mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 0 0.75rem;\n    margin: 0 -0.875rem;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  .app-dark[_nghost-%COMP%]   .cv-liste-mobile-header[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-liste-mobile-header[_ngcontent-%COMP%] {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  [_nghost-%COMP%]     .cv-mobile-back.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  [_nghost-%COMP%]     .cv-mobile-create.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  .cv-liste-mobile-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    flex: 1;\n    text-align: center;\n  }\n  .app-dark[_nghost-%COMP%]   .cv-liste-mobile-title[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-liste-mobile-title[_ngcontent-%COMP%] {\n    color: var(--p-surface-0);\n  }\n  .cv-tableau-desktop[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .cv-commandes-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.cv-mobile-search[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .cv-mobile-search[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.75rem 0 0.25rem;\n    flex-shrink: 0;\n  }\n}\n.cv-commande-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n.cv-commande-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.cv-commande-card__ref[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: var(--p-surface-900);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cv-commande-card__vehicule[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--p-surface-700);\n  margin-top: 0.15rem;\n}\n.cv-commande-card__immat[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n  font-family: monospace;\n}\n.cv-commande-card__livreur[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.cv-commande-card__middle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.cv-amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.cv-amount-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  font-weight: 600;\n  color: var(--p-surface-400);\n}\n.cv-amount-value[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--p-surface-800);\n}\n.cv-commande-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.cv-commande-card__date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n}\n.cv-commande-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.2rem;\n}\n.cv-lock-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.68rem;\n  color: var(--p-surface-400);\n  margin-top: 0.15rem;\n}\n.cv-status-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cv-status-inline--sm[_ngcontent-%COMP%] {\n  gap: 0.4rem;\n}\n.cv-status-dot[_ngcontent-%COMP%] {\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 9999px;\n  flex-shrink: 0;\n}\n.cv-status-inline--sm[_ngcontent-%COMP%]   .cv-status-dot[_ngcontent-%COMP%] {\n  width: 0.55rem;\n  height: 0.55rem;\n}\n.cv-status-text[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1;\n}\n.cv-status-inline--sm[_ngcontent-%COMP%]   .cv-status-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.cv-status-dot--impayee[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.cv-status-dot--partiel[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.cv-status-dot--payee[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.cv-status-dot--annulee[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n@media (min-width: 769px) {\n  [_nghost-%COMP%]     .cv-tableau-desktop .p-datatable .p-datatable-tbody > tr > td {\n    vertical-align: top;\n  }\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card__ref[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card__ref[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card__vehicule[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card__vehicule[_ngcontent-%COMP%] {\n  color: var(--p-surface-200);\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card__immat[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card__immat[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card__livreur[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card__livreur[_ngcontent-%COMP%] {\n  color: var(--p-surface-400);\n}\n.app-dark[_nghost-%COMP%]   .cv-amount-value[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-amount-value[_ngcontent-%COMP%] {\n  color: var(--p-surface-100);\n}\n.app-dark[_nghost-%COMP%]   .cv-lock-badge[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-lock-badge[_ngcontent-%COMP%] {\n  color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .cv-commande-card__footer[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-commande-card__footer[_ngcontent-%COMP%] {\n  border-top-color: var(--p-surface-600);\n}\n@media (max-width: 768px) {\n  .app-dark[_nghost-%COMP%]   .cv-liste-page-wrap[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .cv-liste-page-wrap[_ngcontent-%COMP%] {\n    background: var(--p-surface-900);\n  }\n}\n@media (max-width: 640px) {\n  [_nghost-%COMP%]     .cv-commande-dialog.p-dialog {\n    width: 100vw !important;\n    max-width: 100vw !important;\n    max-height: 92dvh !important;\n    margin: auto 0 0 !important;\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n}\n/*# sourceMappingURL=commande-vente-liste.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommandeVenteListe, [{
    type: Component,
    args: [{ selector: "app-commande-vente-liste", standalone: true, imports: [
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
      TooltipModule,
      InputIconModule,
      IconFieldModule,
      DividerModule,
      MenuModule,
      CommandeMobileForm,
      PhoneFormatPipe,
      CommissionDetailDialog
    ], providers: [MessageService], template: `<p-toast />

<div class="cv-liste-page-wrap">

  <!-- \u2500\u2500 En-t\xEAte mobile sticky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cv-liste-mobile-header">
    <p-button [text]="true" [rounded]="true" icon="pi pi-arrow-left"
              styleClass="cv-mobile-back" (onClick)="goBack()" />
    <h1 class="cv-liste-mobile-title">Commandes</h1>
    @if (canCreate) {
      <p-button [text]="true" [rounded]="true" icon="pi pi-plus"
                styleClass="cv-mobile-create" (onClick)="openCreateDialog()" />
    } @else {
      <div style="width:2.5rem"></div>
    }
  </div>

  <!-- \u2500\u2500 Recherche mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cv-mobile-search">
    <p-iconfield class="w-full">
      <p-inputicon class="pi pi-search" />
      <input pInputText type="text" class="w-full"
             placeholder="Rechercher une commande\u2026"
             (input)="mobileSearchQuery = $any($event.target).value" />
    </p-iconfield>
  </div>

  <!-- \u2500\u2500 Zone scroll mobile \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cv-mobile-scroll">
    <div class="cv-commandes-mobile">

      @if (loading) {
        @for (_ of [1, 2, 3, 4]; track $index) {
          <div class="cv-commande-card">
            <p-skeleton height="5rem" borderRadius="8px" />
          </div>
        }
      } @else if (filteredCommandes.length === 0) {
        <div class="flex flex-col items-center gap-3 py-12 text-surface-500">
          <i class="pi pi-shopping-cart text-4xl"></i>
          <span>Aucune commande de vente</span>
          @if (canCreate) {
            <p-button label="Cr\xE9er une commande" icon="pi pi-plus" [text]="true"
                      (onClick)="openCreateDialog()" />
          }
        </div>
      } @else {
        @for (c of filteredCommandes; track c.id) {
          <div class="cv-commande-card" (click)="goDetail(c.id)">

            <!-- Ligne 1 : R\xE9f\xE9rence + Statut -->
            <div class="cv-commande-card__top">
              <div class="flex items-center gap-2 min-w-0">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex-shrink-0">
                  <i class="pi pi-truck text-xs"></i>
                </div>
                <span class="cv-commande-card__ref">{{ c.reference }}</span>
              </div>
              <div class="flex-shrink-0">
                @if (c.facture) {
                  <span class="cv-status-inline cv-status-inline--sm">
                    <span class="cv-status-dot" [ngClass]="getStatutDotClass(c.facture.statut_facture)"></span>
                    <span class="cv-status-text text-surface-900 dark:text-surface-0">{{ getStatutLabel(c.facture.statut_facture) }}</span>
                  </span>
                } @else {
                  <span class="text-xs text-surface-400">\u2014</span>
                }
              </div>
            </div>

            <!-- Ligne 2 : V\xE9hicule + Livreur -->
            <div class="flex flex-col gap-0.5">
              @if (c.vehicule) {
                <div class="cv-commande-card__vehicule">
                  <i class="pi pi-car text-xs mr-1 text-surface-400"></i>
                  {{ c.vehicule.nom_vehicule }}
                  <span class="cv-commande-card__immat ml-1">\xB7 {{ c.vehicule.immatriculation }}</span>
                </div>
              }
              @let livreur = c.vehicule?.livreurPrincipal ?? c.vehicule?.livreur_principal;
              @if (livreur) {
                <div class="cv-commande-card__livreur">
                  <i class="pi pi-user text-xs"></i>
                  {{ livreur.prenom }} {{ livreur.nom }}
                </div>
              }
            </div>

            <!-- Ligne 3 : Total + Verrouillage -->
            <div class="cv-commande-card__middle">
              <div class="cv-amount-item">
                <span class="cv-amount-label">Total</span>
                <span class="cv-amount-value">{{ formatMontant(c.total_commande) }}</span>
              </div>
              <div class="cv-amount-item">
                <span class="cv-amount-label">Date</span>
                <span class="cv-amount-value" style="font-size:0.82rem; font-weight:500">
                  {{ formatDate(c.created_at) }}
                </span>
              </div>
            </div>

            <!-- Footer : statut commande + actions -->
            <div class="cv-commande-card__footer">
              <div>
                @if (isAnnulee(c)) {
                  <span class="cv-lock-badge" style="background:var(--p-red-100);color:var(--p-red-700)">
                    <i class="pi pi-ban text-xs"></i> Annul\xE9e
                  </span>
                } @else if (isLocked(c)) {
                  <span class="cv-lock-badge">
                    <i class="pi pi-lock text-xs"></i> Verrouill\xE9e
                  </span>
                }
              </div>
              <div class="cv-commande-card__actions">
                <p-button icon="pi pi-eye" severity="info" [text]="true" [rounded]="true" size="small" />
                @if (canUpdate) {
                  <p-button icon="pi pi-pencil" severity="secondary" [text]="true" [rounded]="true" size="small"
                            [disabled]="isLocked(c)" (onClick)="onMobileEditAction($event, c)" />
                }
                @if (canDelete) {
                  <p-button icon="pi pi-ban" severity="danger" [text]="true" [rounded]="true" size="small"
                            pTooltip="Annuler la commande" tooltipPosition="top"
                            [disabled]="isAnnulee(c)" (onClick)="onMobileAnnulationAction($event, c)" />
                }
              </div>
            </div>

          </div>
        }
      }

    </div>
  </div><!-- /cv-mobile-scroll -->

  <!-- \u2500\u2500 Table desktop \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="cv-tableau-desktop card">
    <p-menu #rowActionsMenu [model]="desktopRowMenuItems" [popup]="true" appendTo="body"></p-menu>
    <p-table
      #dt
      [value]="commandesFiltreesParStatutFacture"
      [loading]="loading"
      [paginator]="true"
      [rows]="20"
      [rowsPerPageOptions]="[10, 20, 50]"
      [globalFilterFields]="['reference', 'vehicule.nom_vehicule', 'vehicule.immatriculation']"
      [rowHover]="true"
      responsiveLayout="scroll"
      currentPageReportTemplate="{first} / {last} de {totalRecords} commandes"
      [showCurrentPageReport]="true"
    >
      <ng-template #caption>
        <div class="flex flex-wrap gap-2 items-center justify-between">
          <p-iconfield class="w-full sm:w-80">
            <p-inputicon class="pi pi-search" />
            <input pInputText type="text" (input)="onGlobalFilter(dt, $event)"
                   placeholder="Rechercher une commande..." class="w-full" />
          </p-iconfield>
          <div class="flex flex-wrap gap-2 items-center w-full sm:w-auto">
            <p-select
              [options]="statutOptions"
              [ngModel]="filtreStatut()"
              (ngModelChange)="setFiltreStatut($event)"
              optionLabel="label"
              optionValue="value"
              [style]="{ 'min-width': '160px' }"
            />
            @if (canCreate) {
              <p-button label="Nouvelle commande" icon="pi pi-plus" [outlined]="true" (onClick)="openCreateDialog()" />
            }
          </div>
        </div>
      </ng-template>

      <ng-template #header>
        <tr>
          <th pSortableColumn="reference" class="white-space-nowrap" style="width:20%">
            <span class="flex items-center gap-2">Commande <p-sortIcon field="reference" /></span>
          </th>
          <th pSortableColumn="vehicule.nom_vehicule" class="white-space-nowrap" style="width:20%">
            <span class="flex items-center gap-2">V\xE9hicule <p-sortIcon field="vehicule.nom_vehicule" /></span>
          </th>
          <th style="width:14%"><span class="flex items-center gap-2">Livreur</span></th>
          <th pSortableColumn="total_commande" class="white-space-nowrap" style="width:13%">
            <span class="flex items-center gap-2">Total <p-sortIcon field="total_commande" /></span>
          </th>
          <th style="width:11%"><span class="flex items-center gap-2">Statut facture</span></th>
          <th style="width:10%"><span class="flex items-center gap-2">Commission</span></th>
          <th pSortableColumn="created_at" class="white-space-nowrap" style="width:9%">
            <span class="flex items-center gap-2">Date <p-sortIcon field="created_at" /></span>
          </th>
          <th style="width:10%">Actions</th>
        </tr>
      </ng-template>

      <ng-template #body let-c>
        <tr>
          <td (click)="goDetail(c.id)" class="cursor-pointer">
            <div class="flex items-start gap-3">
              <div class="flex items-center justify-center w-6 h-10 rounded-full flex-shrink-0"
                   [ngClass]="isAnnulee(c) ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-700'">
                <i class="text-sm" [ngClass]="isAnnulee(c) ? 'pi pi-ban' : 'pi pi-truck'"></i>
              </div>
              <div class="flex flex-col">
                <div class="font-semibold font-mono">{{ c.reference }}</div>
                @if (isAnnulee(c)) {
                  <span class="text-xs text-red-500 font-medium">Annul\xE9e</span>
                }
              </div>
            </div>
          </td>

          <td>
            @if (c.vehicule) {
              <div>
                <div class="font-semibold ">{{ c.vehicule.nom_vehicule }}</div>
                <code class="text-sm text-surface-500">{{ c.vehicule.immatriculation }}</code>
              </div>
            } @else {
              <span class="text-surface-400 text-sm">\u2014</span>
            }
          </td>

          <td>
            @let livreur = c.vehicule?.livreurPrincipal ?? c.vehicule?.livreur_principal;
            @if (livreur) {
              <div>
                <div class="font-semibold ">{{ livreur.prenom }} {{ livreur.nom }}</div>
                @if (livreur.phone) {
                  <div class="text-sm text-surface-500 font-mono">{{ livreur.phone | phoneFormat }}</div>
                }
              </div>
            } @else {
              <span class="text-surface-400 text-sm">\u2014</span>
            }
          </td>

          <td class="font-semibold">{{ formatMontant(c.total_commande) }}</td>

          <td>
            @if (c.facture) {
              <div class="flex flex-col gap-1">
                <span class="cv-status-inline">
                  <span class="cv-status-dot" [ngClass]="getStatutDotClass(c.facture.statut_facture)"></span>
                  <span class="cv-status-text text-surface-900 dark:text-surface-0">{{ getStatutLabel(c.facture.statut_facture) }}</span>
                </span>
                @if (isLocked(c)) {
                  <span class="text-xs text-surface-400 flex items-center gap-1">
                    <i class="pi pi-lock text-xs"></i> Verrouill\xE9e
                  </span>
                }
              </div>
            } @else {
              <span class="text-surface-400 text-sm">\u2014</span>
            }
          </td>

          <td>
            @if (c.commission) {
              @if (c.commission.statut === 'versee') {
                <p-tag severity="success" value="Vers\xE9e" />
              } @else {
                <p-tag
                  [value]="formatMontant(c.commission.montant_commission_total)"
                  [severity]="getCommissionSeverity(c.commission.statut)"
                  styleClass="cursor-pointer"
                  (click)="openCommissionDetail(c.commission.id, $event)"
                  pTooltip="Voir la commission"
                  tooltipPosition="top"
                />
              }
            } @else {
              <span class="text-surface-300 text-xs">\u2014</span>
            }
          </td>

          <td class="text-sm text-surface-500">{{ formatDate(c.created_at) }}</td>

          <td>
            <div class="flex items-center gap-1">
              <p-button icon="pi pi-eye" severity="info" [text]="true" [rounded]="true"
                        pTooltip="Voir le d\xE9tail" tooltipPosition="top" (onClick)="goDetail(c.id)" />
              @if (hasDesktopRowMenuActions(c)) {
                <p-button icon="pi pi-ellipsis-v" severity="secondary" [text]="true" [rounded]="true"
                          pTooltip="Plus d'actions" tooltipPosition="top"
                          (onClick)="openDesktopRowMenu($event, rowActionsMenu, c)" />
              }
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template #emptymessage>
        <tr>
          <td colspan="8" class="text-center py-10">
            <div class="flex flex-col items-center gap-3 text-surface-500">
              <i class="pi pi-shopping-cart text-4xl"></i>
              <span>Aucune commande de vente</span>
              @if (canCreate) {
                <p-button label="Cr\xE9er une commande" icon="pi pi-plus" [text]="true" (onClick)="openCreateDialog()" />
              }
            </div>
          </td>
        </tr>
      </ng-template>

      <ng-template #loadingbody>
        @for (_ of [1, 2, 3, 4, 5]; track $index) {
          <tr>@for (__ of [1, 2, 3, 4, 5, 6, 7, 8]; track $index) {<td><p-skeleton /></td>}</tr>
        }
      </ng-template>
    </p-table>
  </div><!-- /cv-tableau-desktop -->

</div><!-- /cv-liste-page-wrap -->

<!-- \u2500\u2500 Mobile : slideover plein \xE9cran \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (dialogVisible && isMobile()) {
  <app-commande-mobile-form
    [editMode]="editMode"
    [saving]="saving"
    [form]="createForm"
    [vehiculeOptions]="vehiculeOptions"
    [produitOptions]="produitOptions"
    [produitData]="produitData"
    (onSave)="onSaveCommande()"
    (onClose)="dialogVisible = false"
    (onAddLigne)="addLigne()"
    (onRemoveLigne)="removeLigne($event)"
    (onProduitChange)="onProduitChange($event.i, $event.id)"
  />
}

<!-- \u2500\u2500 Desktop : dialog classique \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (!isMobile()) {
<p-dialog
  [header]="editMode ? 'Modifier la commande' : 'Nouvelle commande de vente'"
  [(visible)]="dialogVisible"
  [modal]="true"
  styleClass="cv-commande-dialog"
  [style]="{ width: '58rem', maxWidth: '96vw' }"
  [draggable]="false"
  [resizable]="false"
>
  <form [formGroup]="createForm" novalidate>
    <div class="flex flex-col gap-5">

      <div class="flex flex-col gap-2">
        <label class="font-medium text-sm">V\xE9hicule <span class="text-red-500">*</span></label>
        <p-select formControlName="vehicule_id" [options]="vehiculeOptions" optionLabel="label" optionValue="value"
                  placeholder="S\xE9lectionner un v\xE9hicule" [filter]="true" filterPlaceholder="Rechercher\u2026"
                  styleClass="w-full" [ngClass]="{'ng-invalid ng-dirty': isInvalid('vehicule_id')}" />
        @if (isInvalid('vehicule_id')) { <small class="text-red-500">S\xE9lectionnez un v\xE9hicule.</small> }
      </div>

      <p-divider styleClass="my-0" />

      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <span class="font-medium text-sm">Lignes de commande <span class="text-red-500">*</span></span>
          <p-button label="Ajouter une ligne" icon="pi pi-plus" [text]="true" size="small" (onClick)="addLigne()" />
        </div>

        <div class="grid gap-2 px-3 text-xs font-semibold text-surface-400 uppercase tracking-wide"
             style="grid-template-columns: 1fr 8rem 8rem 5rem 8rem 2.5rem">
          <span>Produit</span>
          <span class="text-center">Prix usine</span>
          <span class="text-center">Prix vente</span>
          <span class="text-center">Qt\xE9</span>
          <span class="text-right">Total</span>
          <span></span>
        </div>

        <div formArrayName="lignes" class="flex flex-col gap-2">
          @for (ligne of lignes.controls; track $index; let i = $index) {
            <div [formGroupName]="i" class="grid gap-2 items-center px-3 py-2 surface-50 border-round border-1 surface-border"
                 style="grid-template-columns: 1fr 8rem 8rem 5rem 8rem 2.5rem">
              <div class="flex flex-col gap-1 min-w-0">
                <p-select formControlName="produit_id" [options]="produitOptions" optionLabel="label" optionValue="value"
                          placeholder="Choisir\u2026" [filter]="true" filterPlaceholder="Rechercher\u2026" styleClass="w-full"
                          [ngClass]="{'ng-invalid ng-dirty': isLigneInvalid(i, 'produit_id')}"
                          (onChange)="onProduitChange(i, $event.value)" />
                @if (isLigneInvalid(i, 'produit_id')) { <small class="text-red-500">Requis</small> }
              </div>

              <div class="text-center">
                @if (getPrixUsine(i) > 0) {
                  <span class="text-xs text-surface-400 font-mono">{{ formatMontant(getPrixUsine(i)) }}</span>
                } @else { <span class="text-surface-300 text-xs">\u2014</span> }
              </div>

              <p-inputNumber formControlName="prix_vente" [min]="0" [useGrouping]="true"
                             styleClass="w-full" inputStyleClass="w-full text-right text-sm"
                             [ngClass]="{'ng-invalid ng-dirty': isLigneInvalid(i, 'prix_vente')}" />

              <p-inputNumber formControlName="qte" [min]="1" [useGrouping]="false"
                             styleClass="w-full" inputStyleClass="w-full text-center text-sm"
                             [ngClass]="{'ng-invalid ng-dirty': isLigneInvalid(i, 'qte')}" />

              <div class="text-right">
                @if (getTotalLigne(i) > 0) {
                  <span class="font-semibold text-sm text-primary">{{ formatMontant(getTotalLigne(i)) }}</span>
                } @else { <span class="text-surface-300 text-sm">\u2014</span> }
              </div>

              <div class="flex justify-center">
                <p-button icon="pi pi-trash" severity="danger" [text]="true" [rounded]="true" size="small"
                          [disabled]="lignes.length === 1" (onClick)="removeLigne(i)" />
              </div>
            </div>
          }
        </div>

        <div class="flex items-center justify-between px-3 py-3 border-round"
             style="background: var(--p-primary-50, #eef2ff); border: 1px solid var(--p-primary-200, #c7d2fe)">
          <span class="font-medium text-sm">Total commande</span>
          <span class="font-bold text-xl text-primary">{{ formatMontant(totalDialog) }}</span>
        </div>
      </div>

      @if (!editMode) {
        <div class="flex items-center gap-2 px-3 py-2 surface-100 border-round text-sm text-surface-400">
          <i class="pi pi-info-circle flex-shrink-0"></i>
          <span>Une facture sera g\xE9n\xE9r\xE9e automatiquement \xE0 la cr\xE9ation de la commande.</span>
        </div>
      }

    </div>
  </form>

  <ng-template #footer>
    <div class="w-full">
      <p-button [label]="editMode ? 'Enregistrer les modifications' : 'Cr\xE9er la commande'"
                icon="pi pi-check" (onClick)="onSaveCommande()" [loading]="saving" fluid />
    </div>
  </ng-template>
</p-dialog>
}<!-- /!isMobile -->

<!-- \u2500\u2500 Dialog : Annulation commande \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<p-dialog
  header="Annuler la commande"
  [(visible)]="annulationDialogVisible"
  [modal]="true"
  [style]="{ width: '32rem' }"
  [draggable]="false"
>
  <div class="flex flex-col gap-4 py-2">
    <div class="flex items-start gap-3">
      <i class="pi pi-ban text-red-500 text-3xl flex-shrink-0 mt-0.5"></i>
      <p class="m-0 text-sm">
        Annuler la commande <strong>{{ commandeToAnnuler?.reference }}</strong> ?
        Cette action est irr\xE9versible. Les stocks seront restaur\xE9s et la facture sera annul\xE9e.
      </p>
    </div>
    <div class="flex flex-col gap-2">
      <label class="font-medium text-sm">Motif d'annulation <span class="text-red-500">*</span></label>
      <textarea
        rows="3"
        maxlength="500"
        placeholder="Indiquez le motif de l'annulation..."
        [value]="motifAnnulation"
        (input)="motifAnnulation = $any($event.target).value"
        class="w-full text-sm"
        style="border: 1px solid var(--p-surface-300); border-radius: 6px; padding: 0.5rem; resize: none; outline: none; font-family: inherit; background: var(--p-surface-0); color: var(--p-surface-900);"
      ></textarea>
      <small class="text-surface-400">{{ motifAnnulation.length }}/500 caract\xE8res</small>
    </div>
  </div>
  <ng-template #footer>
    <p-button label="Retour" severity="secondary" [outlined]="true"
              (onClick)="annulationDialogVisible = false" [disabled]="annulationLoading" />
    <p-button label="Confirmer l'annulation" icon="pi pi-ban" severity="danger"
              (onClick)="confirmerAnnulation()" [loading]="annulationLoading"
              [disabled]="!motifAnnulation.trim()" />
  </ng-template>
</p-dialog>

<!-- \u2500\u2500 Dialog : D\xE9tail commission \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
@if (selectedCommissionId()) {
  <app-commission-detail-dialog
    [commissionId]="selectedCommissionId()!"
    [visible]="commissionDetailVisible()"
    (visibleChange)="commissionDetailVisible.set($event)"
  />
}
`, styles: ["/* src/app/pages/ventes/commande-vente-liste/commande-vente-liste.scss */\n@media (max-width: 768px) {\n  .cv-liste-page-wrap {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    height: 100vh;\n    height: 100dvh;\n    overflow: hidden;\n    margin: calc(-0.25rem - env(safe-area-inset-top)) -0.875rem 0;\n    margin-bottom: calc(-0.875rem - env(safe-area-inset-bottom));\n    padding: 0 0.875rem calc(0.875rem + env(safe-area-inset-bottom));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    background: var(--p-surface-50);\n  }\n}\n@media (max-width: 768px) {\n  .cv-mobile-scroll {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    padding: 0.75rem 0 1rem;\n  }\n}\n.cv-liste-mobile-header {\n  display: none;\n}\n.cv-commandes-mobile {\n  display: none;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .cv-liste-mobile-header {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: calc(0.75rem + env(safe-area-inset-top)) 0 0.75rem;\n    margin: 0 -0.875rem;\n    margin-left: calc(-0.875rem - env(safe-area-inset-left));\n    margin-right: calc(-0.875rem - env(safe-area-inset-right));\n    padding-left: calc(0.875rem + env(safe-area-inset-left));\n    padding-right: calc(0.875rem + env(safe-area-inset-right));\n    flex-shrink: 0;\n    background: var(--p-surface-0);\n    border-bottom: 1px solid var(--p-surface-200);\n    position: sticky;\n    top: 0;\n    z-index: 25;\n  }\n  :host-context(.app-dark) .cv-liste-mobile-header {\n    background: var(--p-surface-800);\n    border-bottom-color: var(--p-surface-700);\n  }\n  :host ::ng-deep .cv-mobile-back.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  :host ::ng-deep .cv-mobile-create.p-button {\n    color: var(--p-primary-600) !important;\n  }\n  .cv-liste-mobile-title {\n    font-size: 1.1rem;\n    font-weight: 700;\n    margin: 0;\n    color: var(--p-surface-900);\n    flex: 1;\n    text-align: center;\n  }\n  :host-context(.app-dark) .cv-liste-mobile-title {\n    color: var(--p-surface-0);\n  }\n  .cv-tableau-desktop {\n    display: none !important;\n  }\n  .cv-commandes-mobile {\n    display: flex;\n  }\n}\n.cv-mobile-search {\n  display: none;\n}\n@media (max-width: 768px) {\n  .cv-mobile-search {\n    display: block;\n    padding: 0.75rem 0 0.25rem;\n    flex-shrink: 0;\n  }\n}\n.cv-commande-card {\n  background: var(--p-surface-0);\n  border: 1px solid var(--p-surface-200);\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n.cv-commande-card__top {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 0.75rem;\n}\n.cv-commande-card__ref {\n  font-weight: 700;\n  font-size: 0.88rem;\n  color: var(--p-surface-900);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cv-commande-card__vehicule {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--p-surface-700);\n  margin-top: 0.15rem;\n}\n.cv-commande-card__immat {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n  font-family: monospace;\n}\n.cv-commande-card__livreur {\n  font-size: 0.82rem;\n  color: var(--p-surface-500);\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.cv-commande-card__middle {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n}\n.cv-amount-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.cv-amount-label {\n  font-size: 0.68rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  font-weight: 600;\n  color: var(--p-surface-400);\n}\n.cv-amount-value {\n  font-size: 0.92rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  color: var(--p-surface-800);\n}\n.cv-commande-card__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid var(--p-surface-100);\n}\n.cv-commande-card__date {\n  font-size: 0.75rem;\n  color: var(--p-surface-400);\n}\n.cv-commande-card__actions {\n  display: flex;\n  gap: 0.2rem;\n}\n.cv-lock-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.68rem;\n  color: var(--p-surface-400);\n  margin-top: 0.15rem;\n}\n.cv-status-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cv-status-inline--sm {\n  gap: 0.4rem;\n}\n.cv-status-dot {\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 9999px;\n  flex-shrink: 0;\n}\n.cv-status-inline--sm .cv-status-dot {\n  width: 0.55rem;\n  height: 0.55rem;\n}\n.cv-status-text {\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1;\n}\n.cv-status-inline--sm .cv-status-text {\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.cv-status-dot--impayee {\n  background: #ef4444;\n}\n.cv-status-dot--partiel {\n  background: #f59e0b;\n}\n.cv-status-dot--payee {\n  background: #22c55e;\n}\n.cv-status-dot--annulee {\n  background: #94a3b8;\n}\n@media (min-width: 769px) {\n  :host ::ng-deep .cv-tableau-desktop .p-datatable .p-datatable-tbody > tr > td {\n    vertical-align: top;\n  }\n}\n:host-context(.app-dark) .cv-commande-card {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-600);\n}\n:host-context(.app-dark) .cv-commande-card__ref {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .cv-commande-card__vehicule {\n  color: var(--p-surface-200);\n}\n:host-context(.app-dark) .cv-commande-card__immat {\n  color: var(--p-surface-500);\n}\n:host-context(.app-dark) .cv-commande-card__livreur {\n  color: var(--p-surface-400);\n}\n:host-context(.app-dark) .cv-amount-value {\n  color: var(--p-surface-100);\n}\n:host-context(.app-dark) .cv-lock-badge {\n  color: var(--p-surface-500);\n}\n:host-context(.app-dark) .cv-commande-card__footer {\n  border-top-color: var(--p-surface-600);\n}\n@media (max-width: 768px) {\n  :host-context(.app-dark) .cv-liste-page-wrap {\n    background: var(--p-surface-900);\n  }\n}\n@media (max-width: 640px) {\n  :host ::ng-deep .cv-commande-dialog.p-dialog {\n    width: 100vw !important;\n    max-width: 100vw !important;\n    max-height: 92dvh !important;\n    margin: auto 0 0 !important;\n    border-bottom-left-radius: 0 !important;\n    border-bottom-right-radius: 0 !important;\n  }\n}\n/*# sourceMappingURL=commande-vente-liste.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: CommandeVenteService }, { type: VehiculeService }, { type: ProduitService }, { type: AuthService }, { type: MessageService }, { type: Router }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { onWindowResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommandeVenteListe, { className: "CommandeVenteListe", filePath: "src/app/pages/ventes/commande-vente-liste/commande-vente-liste.ts", lineNumber: 77 });
})();

// src/app/pages/ventes/ventes.routes.ts
var ventes_routes_default = [
  {
    path: "",
    redirectTo: "commandes",
    pathMatch: "full"
  },
  {
    path: "commandes",
    component: CommandeVenteListe,
    data: { breadcrumb: "commandes" }
  },
  {
    path: "commandes/:id",
    loadComponent: () => import("./chunk-NUV3WCQN.js").then((c) => c.CommandeVenteDetail2),
    data: { breadcrumb: "commandes" }
  },
  {
    path: "factures-vente-liste2",
    loadComponent: () => import("./chunk-C42HBPNL.js").then((c) => c.FactureVenteListe2),
    data: { breadcrumb: "factures-vente-liste2" }
  },
  {
    path: "factures-vente-detail2/:id",
    loadComponent: () => import("./chunk-UZ5GF6A4.js").then((c) => c.FactureVenteDetail2),
    data: { breadcrumb: "factures-vente-detail2" }
  },
  {
    path: "factures-vente-detail3/:id",
    loadComponent: () => import("./chunk-T5PGWVI5.js").then((c) => c.FactureVenteDetail3),
    data: { breadcrumb: "factures-vente-detail3" }
  },
  {
    path: "factures-vente-detail4/:id",
    loadComponent: () => import("./chunk-DEZJJD65.js").then((c) => c.FactureVenteDetail4),
    data: { breadcrumb: "factures-vente-detail2" }
  },
  {
    path: "factures-vente",
    loadComponent: () => import("./chunk-BQWEK34M.js").then((c) => c.FactureVenteListe),
    data: { breadcrumb: "factures-vente" }
  },
  {
    path: "factures",
    loadComponent: () => import("./chunk-BQWEK34M.js").then((c) => c.FactureVenteListe),
    data: { breadcrumb: "factures" }
  },
  {
    path: "factures/:id",
    loadComponent: () => import("./chunk-UYKGYLZC.js").then((c) => c.FactureVenteDetail),
    data: { breadcrumb: "factures" }
  },
  {
    path: "encaissements",
    loadComponent: () => import("./chunk-B43SUWKZ.js").then((c) => c.EncaissementVenteListe),
    data: { breadcrumb: "encaissements" }
  },
  {
    path: "commissions",
    loadComponent: () => import("./chunk-EKZ4AZX3.js").then((c) => c.CommissionVenteListe),
    data: { breadcrumb: "commissions" }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  ventes_routes_default as default
};
//# sourceMappingURL=chunk-BGS5YMMW.js.map
