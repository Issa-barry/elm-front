import {
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-XXM474KR.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonLabel,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-TGBATRWC.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  Pipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ZUORBSMF.js";

// src/app/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  transform(value, currency = "GNF", showSymbol = true) {
    if (value === null || value === void 0 || value === "") {
      return showSymbol ? "0 GNF" : "0";
    }
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num)) {
      return showSymbol ? "0 GNF" : "0";
    }
    const rounded = Math.round(num);
    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "  ");
    const symbol = currency === "EUR" ? "\u20AC" : "GNF";
    return showSymbol ? `${formatted} ${symbol}` : formatted;
  }
  static \u0275fac = function MoneyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyPipe, [{
    type: Pipe,
    args: [{
      name: "money",
      standalone: true,
      pure: true
    }]
  }], null, null);
})();

// src/app/models/packing.model.ts
var PACKING_STATUT_LABELS = {
  impayee: "Impay\xE9e",
  partielle: "Partielle",
  payee: "Pay\xE9e",
  annulee: "Annul\xE9e"
};
var PACKING_STATUT_SEVERITY = {
  impayee: "danger",
  partielle: "warn",
  payee: "success",
  annulee: "secondary"
};
var MODE_PAIEMENT_LABELS = {
  especes: "Esp\xE8ces",
  virement: "Virement bancaire",
  cheque: "Ch\xE8que",
  mobile_money: "Mobile Money"
};

// src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.ts
function ComptabilitePackingPaiement_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, "Versement packing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose.emit());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
    \u0275\u0275text(13, "Total packing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
    \u0275\u0275text(19, "Deja verse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "money");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 14);
    \u0275\u0275elementStart(24, "div", 10)(25, "div", 15);
    \u0275\u0275text(26, "Reste a payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "money");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17)(31, "div", 18);
    \u0275\u0275text(32, "Montant a verser");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p-inputnumber", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ComptabilitePackingPaiement_div_0_Template_p_inputnumber_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.montant, $event) || (ctx_r1.montant = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "div", 12);
    \u0275\u0275text(37, "Montant a payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 22);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23)(41, "div", 18);
    \u0275\u0275text(42, "Mode de paiement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 24)(44, "div", 25);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("especes"));
    });
    \u0275\u0275element(45, "i", 26);
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "Especes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 25);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("virement"));
    });
    \u0275\u0275element(49, "i", 27);
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "Virement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 25);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_div_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectMode("mobile_money"));
    });
    \u0275\u0275element(53, "i", 28);
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Mobile");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "button", 29);
    \u0275\u0275listener("click", function ComptabilitePackingPaiement_div_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmer());
    });
    \u0275\u0275element(57, "i", 30);
    \u0275\u0275elementStart(58, "span", 31);
    \u0275\u0275text(59, "Confirmer le paiement");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.packing.reference);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 19, ctx_r1.packing.montant, "GNF"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 22, ctx_r1.packing.montant_verse, "GNF"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 25, ctx_r1.packing.montant_restant, "GNF"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.montant);
    \u0275\u0275property("min", 1)("max", ctx_r1.packing.montant_restant)("useGrouping", true);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.montant ? ctx_r1.formatCurrency(ctx_r1.montant) : "0 GNF");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "especes");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "virement");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("slideover-mode--active", ctx_r1.selectedMode === "mobile_money");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving || !ctx_r1.montant)("loading", ctx_r1.saving);
  }
}
var ComptabilitePackingPaiement = class _ComptabilitePackingPaiement {
  packing = null;
  saving = false;
  onPay = new EventEmitter();
  onClose = new EventEmitter();
  montant = null;
  selectedMode = "especes";
  ngOnChanges() {
    if (this.packing) {
      this.montant = this.packing.montant_restant;
      this.selectedMode = "especes";
    }
  }
  selectMode(mode) {
    this.selectedMode = mode;
  }
  confirmer() {
    if (!this.montant || this.montant <= 0 || !this.packing)
      return;
    this.onPay.emit({
      montant: this.montant,
      mode_paiement: this.selectedMode
    });
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  static \u0275fac = function ComptabilitePackingPaiement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabilitePackingPaiement)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabilitePackingPaiement, selectors: [["app-comptabilite-packing-paiement"]], inputs: { packing: "packing", saving: "saving" }, outputs: { onPay: "onPay", onClose: "onClose" }, features: [\u0275\u0275NgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "paiement-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900", 4, "ngIf"], [1, "paiement-panel", "flex", "flex-col", "h-full", "bg-surface-0", "dark:bg-surface-900"], [1, "paiement-header", "w-full", "flex-shrink-0", "p-6", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "justify-start", "items-center"], [1, "flex-1"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-normal", "mt-1"], ["pButton", "", 1, "w-10", "h-10", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-times"], [1, "paiement-body", "flex-1", "min-h-0", "w-full", "p-6", "flex", "flex-col", "justify-start", "items-start", "gap-6", "overflow-y-auto"], [1, "w-full", "p-5", "bg-surface-50", "dark:bg-surface-800", "rounded-xl", "flex", "flex-col", "justify-start", "items-start", "gap-4"], [1, "w-full", "flex", "justify-start", "items-start", "gap-6"], [1, "flex-1", "text-surface-500", "dark:text-surface-400", "text-base", "font-normal", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium", "leading-tight"], [1, "text-base", "font-semibold", "leading-tight", 2, "color", "#059669"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "flex-1", "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold", "leading-tight"], [1, "text-lg", "font-bold", "leading-tight", 2, "color", "#d97706"], [1, "w-full", "flex", "flex-col", "gap-3"], [1, "text-surface-500", "dark:text-surface-400", "text-xs", "font-semibold", "uppercase", "tracking-wider"], ["suffix", " GNF", "locale", "fr-FR", "inputStyleClass", "w-full text-right text-xl font-bold py-4", "styleClass", "w-full", "placeholder", "0", 3, "ngModelChange", "ngModel", "min", "max", "useGrouping"], [1, "paiement-footer", "w-full", "border-t", "border-surface-200", "dark:border-surface-700", "p-6", "flex", "flex-col", "gap-4", "flex-shrink-0"], [1, "w-full", "flex", "justify-start", "items-center", "gap-4"], [1, "flex-1", "text-right", "text-surface-900", "dark:text-surface-0", "text-lg", "font-bold", "leading-tight"], [1, "w-full", "flex", "flex-col", "gap-2"], [1, "w-full", "flex", "gap-3", "paiement-modes"], [1, "slideover-mode", 3, "click"], [1, "pi", "pi-money-bill"], [1, "pi", "pi-building"], [1, "pi", "pi-mobile"], ["pButton", "", "severity", "primary", 1, "w-full", "py-3", 3, "click", "disabled", "loading"], ["pButtonIcon", "", 1, "pi", "pi-check", "mr-2"], ["pButtonLabel", ""]], template: function ComptabilitePackingPaiement_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ComptabilitePackingPaiement_div_0_Template, 60, 28, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.packing);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, ButtonLabel, ButtonIcon, StyleClassModule, InputNumberModule, InputNumber, MoneyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.paiement-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .paiement-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .paiement-footer[_ngcontent-%COMP%] {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.slideover-mode[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.75rem;\n  border-radius: 12px;\n  border: 1.5px solid var(--p-surface-200);\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: var(--p-surface-500);\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.slideover-mode[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.slideover-mode[_ngcontent-%COMP%]:hover {\n  border-color: var(--p-surface-300);\n  background: var(--p-surface-50);\n}\n.slideover-mode--active[_ngcontent-%COMP%] {\n  border-color: var(--p-primary-500);\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  font-weight: 600;\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%] {\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%]:hover, .app-dark   [_nghost-%COMP%]   .slideover-mode[_ngcontent-%COMP%]:hover {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-500);\n}\n.app-dark[_nghost-%COMP%]   .slideover-mode--active[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .slideover-mode--active[_ngcontent-%COMP%] {\n  border-color: var(--p-primary-500);\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--p-primary-400);\n}\n/*# sourceMappingURL=comptabilite-packing-paiement.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabilitePackingPaiement, [{
    type: Component,
    args: [{ selector: "app-comptabilite-packing-paiement", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, InputNumberModule, MoneyPipe], template: `<div class="paiement-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900" *ngIf="packing">
    <!-- Header -->
    <div class="paiement-header w-full flex-shrink-0 p-6 border-b border-surface-200 dark:border-surface-700 flex justify-start items-center">
        <div class="flex-1">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ packing.reference }}</div>
            <div class="text-surface-500 dark:text-surface-400 text-sm font-normal mt-1">Versement packing</div>
        </div>
        <button pButton [text]="true" [rounded]="true" class="w-10 h-10" (click)="onClose.emit()">
            <i pButtonIcon class="pi pi-times"></i>
        </button>
    </div>

    <!-- Body (scroll sur mobile, footer reste visible) -->
    <div class="paiement-body flex-1 min-h-0 w-full p-6 flex flex-col justify-start items-start gap-6 overflow-y-auto">
        <!-- Resume packing -->
        <div class="w-full p-5 bg-surface-50 dark:bg-surface-800 rounded-xl flex flex-col justify-start items-start gap-4">
            <div class="w-full flex justify-start items-start gap-6">
                <div class="flex-1 text-surface-500 dark:text-surface-400 text-base font-normal leading-tight">Total packing</div>
                <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">{{ packing.montant | money:'GNF' }}</div>
            </div>
            <div class="w-full flex justify-start items-start gap-6">
                <div class="flex-1 text-surface-500 dark:text-surface-400 text-base font-normal leading-tight">Deja verse</div>
                <div class="text-base font-semibold leading-tight" style="color: #059669">{{ packing.montant_verse | money:'GNF' }}</div>
            </div>

            <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>

            <div class="w-full flex justify-start items-start gap-6">
                <div class="flex-1 text-surface-900 dark:text-surface-0 text-base font-semibold leading-tight">Reste a payer</div>
                <div class="text-lg font-bold leading-tight" style="color: #d97706">{{ packing.montant_restant | money:'GNF' }}</div>
            </div>
        </div>

        <!-- Montant a verser -->
        <div class="w-full flex flex-col gap-3">
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Montant a verser</div>
            <p-inputnumber
                [(ngModel)]="montant"
                [min]="1"
                [max]="packing.montant_restant"
                suffix=" GNF"
                [useGrouping]="true"
                locale="fr-FR"
                inputStyleClass="w-full text-right text-xl font-bold py-4"
                styleClass="w-full"
                placeholder="0"
            ></p-inputnumber>
        </div>

    </div>

    <!-- Footer (toujours visible sur mobile) -->
    <div class="paiement-footer w-full border-t border-surface-200 dark:border-surface-700 p-6 flex flex-col gap-4 flex-shrink-0">
        <!-- Montant a payer -->
        <div class="w-full flex justify-start items-center gap-4">
            <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">Montant a payer</div>
            <div class="flex-1 text-right text-surface-900 dark:text-surface-0 text-lg font-bold leading-tight">{{ montant ? formatCurrency(montant) : '0 GNF' }}</div>
        </div>

        <!-- Mode de paiement -->
        <div class="w-full flex flex-col gap-2">
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider">Mode de paiement</div>
            <div class="w-full flex gap-3 paiement-modes">
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'especes'" (click)="selectMode('especes')">
                    <i class="pi pi-money-bill"></i>
                    <span>Especes</span>
                </div>
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'virement'" (click)="selectMode('virement')">
                    <i class="pi pi-building"></i>
                    <span>Virement</span>
                </div>
                <div class="slideover-mode" [class.slideover-mode--active]="selectedMode === 'mobile_money'" (click)="selectMode('mobile_money')">
                    <i class="pi pi-mobile"></i>
                    <span>Mobile</span>
                </div>
            </div>
        </div>

        <button pButton class="w-full py-3" severity="primary" (click)="confirmer()" [disabled]="saving || !montant" [loading]="saving">
            <i pButtonIcon class="pi pi-check mr-2"></i>
            <span pButtonLabel>Confirmer le paiement</span>
        </button>
    </div>
</div>
`, styles: ["/* src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.paiement-panel {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  :host {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .paiement-panel {\n    width: 100%;\n    max-width: 100%;\n  }\n  .paiement-footer {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.slideover-mode {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0.75rem;\n  border-radius: 12px;\n  border: 1.5px solid var(--p-surface-200);\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  color: var(--p-surface-500);\n  font-size: 0.82rem;\n  font-weight: 500;\n}\n.slideover-mode i {\n  font-size: 1.25rem;\n}\n.slideover-mode:hover {\n  border-color: var(--p-surface-300);\n  background: var(--p-surface-50);\n}\n.slideover-mode--active {\n  border-color: var(--p-primary-500);\n  background: var(--p-primary-50);\n  color: var(--p-primary-600);\n  font-weight: 600;\n}\n:host-context(.app-dark) .slideover-mode {\n  border-color: var(--p-surface-600);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .slideover-mode:hover {\n  background: var(--p-surface-800);\n  border-color: var(--p-surface-500);\n}\n:host-context(.app-dark) .slideover-mode--active {\n  border-color: var(--p-primary-500);\n  background: rgba(59, 130, 246, 0.12);\n  color: var(--p-primary-400);\n}\n/*# sourceMappingURL=comptabilite-packing-paiement.css.map */\n"] }]
  }], null, { packing: [{
    type: Input
  }], saving: [{
    type: Input
  }], onPay: [{
    type: Output
  }], onClose: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabilitePackingPaiement, { className: "ComptabilitePackingPaiement", filePath: "src/app/pages/comptabilite/components/comptabilite-packing-paiement/comptabilite-packing-paiement.ts", lineNumber: 22 });
})();

// src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.ts
function ComptabiliteHistoriqueVersements_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275element(1, "i", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versement_r3.creator.nom_complet, " ");
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", versement_r3.notes, " ");
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const versement_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onDeleteVersement.emit(versement_r3));
    });
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("text", true)("rounded", true);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34)(7, "span", 35);
    \u0275\u0275element(8, "i", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_span_10_Template, 3, 1, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_11_Template, 2, 1, "div", 38)(12, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_div_12_Template, 3, 2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const versement_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatCurrency(versement_r3.montant), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", versement_r3.mode_paiement_label, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(versement_r3.date_versement), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", versement_r3.creator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", versement_r3.notes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canDelete);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ComptabiliteHistoriqueVersements_div_0_div_29_div_3_Template, 13, 6, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.data.versements.length, " versement", ctx_r1.data.versements.length > 1 ? "s" : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.data.versements);
  }
}
function ComptabiliteHistoriqueVersements_div_0_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "i", 46);
    \u0275\u0275elementStart(2, "span", 47);
    \u0275\u0275text(3, "Aucun versement enregistre");
    \u0275\u0275elementEnd()();
  }
}
function ComptabiliteHistoriqueVersements_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6, "Historique des versements");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function ComptabiliteHistoriqueVersements_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose.emit());
    });
    \u0275\u0275element(8, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "span", 12);
    \u0275\u0275text(14, "Total packing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "span", 12);
    \u0275\u0275text(19, "Deja verse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 15);
    \u0275\u0275elementStart(23, "div", 11)(24, "span", 16);
    \u0275\u0275text(25, "Reste a payer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 17);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(28, ComptabiliteHistoriqueVersements_div_0_div_28_Template, 2, 0, "div", 18)(29, ComptabiliteHistoriqueVersements_div_0_div_29_Template, 4, 3, "div", 19)(30, ComptabiliteHistoriqueVersements_div_0_div_30_Template, 4, 0, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 21)(32, "div", 22)(33, "span", 23);
    \u0275\u0275text(34, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 24);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data.packing.reference);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true)("rounded", true);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.packing.montant));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.packing.montant_verse));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.data.packing.montant_restant));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.data.versements.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loading && ctx_r1.data.versements.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("historique-statut-badge--success", ctx_r1.data.packing.statut === "payee")("historique-statut-badge--warn", ctx_r1.data.packing.statut !== "payee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.packing.statut === "payee" ? "Solde" : "En cours", " ");
  }
}
var ComptabiliteHistoriqueVersements = class _ComptabiliteHistoriqueVersements {
  data = null;
  loading = false;
  canDelete = false;
  onClose = new EventEmitter();
  onDeleteVersement = new EventEmitter();
  formatCurrency(value) {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      minimumFractionDigits: 0
    }).format(value) + " GNF";
  }
  formatDate(dateStr) {
    if (!dateStr)
      return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR");
  }
  static \u0275fac = function ComptabiliteHistoriqueVersements_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComptabiliteHistoriqueVersements)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComptabiliteHistoriqueVersements, selectors: [["app-comptabilite-historique-versements"]], inputs: { data: "data", loading: "loading", canDelete: "canDelete" }, outputs: { onClose: "onClose", onDeleteVersement: "onDeleteVersement" }, decls: 1, vars: 1, consts: [["class", "historique-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900", 4, "ngIf"], [1, "historique-panel", "flex", "flex-col", "h-full", "bg-surface-0", "dark:bg-surface-900"], [1, "historique-header", "w-full", "flex-shrink-0", "p-6", "border-b", "border-surface-200", "dark:border-surface-700", "flex", "items-center"], [1, "flex-1", "min-w-0"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-normal", "mt-1"], ["pButton", "", 1, "w-10", "h-10", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-times"], [1, "historique-body", "flex-1", "min-h-0", "w-full", "overflow-y-auto"], [1, "p-6", "border-b", "border-surface-200", "dark:border-surface-700"], [1, "w-full", "p-5", "bg-surface-50", "dark:bg-surface-800", "rounded-xl", "flex", "flex-col", "gap-4"], [1, "w-full", "flex", "justify-between", "items-center"], [1, "text-surface-500", "dark:text-surface-400", "text-base"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-medium"], [1, "text-base", "font-semibold", 2, "color", "#059669"], [1, "w-full", "h-px", "bg-surface-200", "dark:bg-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-semibold"], [1, "text-lg", "font-bold", 2, "color", "#d97706"], ["class", "flex items-center justify-center p-12", 4, "ngIf"], ["class", "p-6 flex flex-col gap-3", 4, "ngIf"], ["class", "flex flex-col items-center justify-center gap-3 py-16 text-surface-300 dark:text-surface-500", 4, "ngIf"], [1, "historique-footer", "w-full", "border-t", "border-surface-200", "dark:border-surface-700", "p-6", "flex-shrink-0"], [1, "flex", "items-center", "justify-between"], [1, "text-surface-500", "dark:text-surface-400", "text-sm", "font-medium"], [1, "historique-statut-badge", "text-sm", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "flex", "items-center", "justify-center", "p-12"], [1, "pi", "pi-spin", "pi-spinner", "text-3xl", "text-surface-300"], [1, "p-6", "flex", "flex-col", "gap-3"], [1, "text-surface-500", "dark:text-surface-400", "text-xs", "font-semibold", "uppercase", "tracking-wider", "mb-1"], ["class", "versement-card p-4 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2", 4, "ngFor", "ngForOf"], [1, "versement-card", "p-4", "rounded-xl", "border", "border-surface-200", "dark:border-surface-700", "flex", "flex-col", "gap-2"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "text-base", "font-bold", 2, "color", "#059669"], [1, "versement-mode-badge", "text-xs", "font-semibold", "px-2", "py-1", "rounded-full"], [1, "flex", "items-center", "gap-4", "text-sm", "text-surface-500", "dark:text-surface-400"], [1, "flex", "items-center", "gap-1"], [1, "pi", "pi-calendar", "text-xs"], ["class", "flex items-center gap-1", 4, "ngIf"], ["class", "text-sm text-surface-400 dark:text-surface-500 italic", 4, "ngIf"], ["class", "flex justify-end pt-1", 4, "ngIf"], [1, "pi", "pi-user", "text-xs"], [1, "text-sm", "text-surface-400", "dark:text-surface-500", "italic"], [1, "flex", "justify-end", "pt-1"], ["pButton", "", "severity", "danger", 1, "w-8", "h-8", 3, "click", "text", "rounded"], ["pButtonIcon", "", 1, "pi", "pi-trash", "text-sm"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-3", "py-16", "text-surface-300", "dark:text-surface-500"], [1, "pi", "pi-inbox", "text-4xl"], [1, "text-sm"]], template: function ComptabiliteHistoriqueVersements_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ComptabiliteHistoriqueVersements_div_0_Template, 37, 14, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ButtonModule, ButtonDirective, ButtonIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.historique-panel[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .historique-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .historique-footer[_ngcontent-%COMP%] {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.versement-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-0);\n  transition: background 0.15s ease;\n}\n.versement-mode-badge[_ngcontent-%COMP%] {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.historique-statut-badge--success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.historique-statut-badge--warn[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n}\n.app-dark[_nghost-%COMP%]   .versement-card[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .versement-card[_ngcontent-%COMP%] {\n  background: var(--p-surface-800);\n}\n.app-dark[_nghost-%COMP%]   .versement-mode-badge[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .versement-mode-badge[_ngcontent-%COMP%] {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n.app-dark[_nghost-%COMP%]   .historique-statut-badge--success[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .historique-statut-badge--success[_ngcontent-%COMP%] {\n  background: rgba(5, 150, 105, 0.12);\n  color: #34d399;\n}\n.app-dark[_nghost-%COMP%]   .historique-statut-badge--warn[_ngcontent-%COMP%], .app-dark   [_nghost-%COMP%]   .historique-statut-badge--warn[_ngcontent-%COMP%] {\n  background: rgba(217, 119, 6, 0.12);\n  color: #fbbf24;\n}\n/*# sourceMappingURL=comptabilite-historique-versements.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComptabiliteHistoriqueVersements, [{
    type: Component,
    args: [{ selector: "app-comptabilite-historique-versements", standalone: true, imports: [CommonModule, ButtonModule], template: `<div class="historique-panel flex flex-col h-full bg-surface-0 dark:bg-surface-900" *ngIf="data">
    <!-- Header -->
    <div class="historique-header w-full flex-shrink-0 p-6 border-b border-surface-200 dark:border-surface-700 flex items-center">
        <div class="flex-1 min-w-0">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ data.packing.reference }}</div>
            <div class="text-surface-500 dark:text-surface-400 text-sm font-normal mt-1">Historique des versements</div>
        </div>
        <button pButton [text]="true" [rounded]="true" class="w-10 h-10" (click)="onClose.emit()">
            <i pButtonIcon class="pi pi-times"></i>
        </button>
    </div>

    <!-- Body (scrollable) -->
    <div class="historique-body flex-1 min-h-0 w-full overflow-y-auto">
        <!-- Resume packing -->
        <div class="p-6 border-b border-surface-200 dark:border-surface-700">
            <div class="w-full p-5 bg-surface-50 dark:bg-surface-800 rounded-xl flex flex-col gap-4">
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-500 dark:text-surface-400 text-base">Total packing</span>
                    <span class="text-surface-900 dark:text-surface-0 text-base font-medium">{{ formatCurrency(data.packing.montant) }}</span>
                </div>
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-500 dark:text-surface-400 text-base">Deja verse</span>
                    <span class="text-base font-semibold" style="color: #059669">{{ formatCurrency(data.packing.montant_verse) }}</span>
                </div>
                <div class="w-full h-px bg-surface-200 dark:bg-surface-700"></div>
                <div class="w-full flex justify-between items-center">
                    <span class="text-surface-900 dark:text-surface-0 text-base font-semibold">Reste a payer</span>
                    <span class="text-lg font-bold" style="color: #d97706">{{ formatCurrency(data.packing.montant_restant) }}</span>
                </div>
            </div>
        </div>

        <!-- Loading -->
        <div *ngIf="loading" class="flex items-center justify-center p-12">
            <i class="pi pi-spin pi-spinner text-3xl text-surface-300"></i>
        </div>

        <!-- Liste des versements -->
        <div *ngIf="!loading && data.versements.length > 0" class="p-6 flex flex-col gap-3">
            <div class="text-surface-500 dark:text-surface-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {{ data.versements.length }} versement{{ data.versements.length > 1 ? 's' : '' }}
            </div>

            <div
                *ngFor="let versement of data.versements"
                class="versement-card p-4 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2"
            >
                <div class="flex justify-between items-center">
                    <span class="text-surface-900 dark:text-surface-0 text-base font-bold" style="color: #059669">
                        {{ formatCurrency(versement.montant) }}
                    </span>
                    <span class="versement-mode-badge text-xs font-semibold px-2 py-1 rounded-full">
                        {{ versement.mode_paiement_label }}
                    </span>
                </div>

                <div class="flex items-center gap-4 text-sm text-surface-500 dark:text-surface-400">
                    <span class="flex items-center gap-1">
                        <i class="pi pi-calendar text-xs"></i>
                        {{ formatDate(versement.date_versement) }}
                    </span>
                    <span *ngIf="versement.creator" class="flex items-center gap-1">
                        <i class="pi pi-user text-xs"></i>
                        {{ versement.creator.nom_complet }}
                    </span>
                </div>

                <div *ngIf="versement.notes" class="text-sm text-surface-400 dark:text-surface-500 italic">
                    {{ versement.notes }}
                </div>

                <div *ngIf="canDelete" class="flex justify-end pt-1">
                    <button
                        pButton
                        [text]="true"
                        [rounded]="true"
                        severity="danger"
                        class="w-8 h-8"
                        (click)="onDeleteVersement.emit(versement)"
                    >
                        <i pButtonIcon class="pi pi-trash text-sm"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div *ngIf="!loading && data.versements.length === 0" class="flex flex-col items-center justify-center gap-3 py-16 text-surface-300 dark:text-surface-500">
            <i class="pi pi-inbox text-4xl"></i>
            <span class="text-sm">Aucun versement enregistre</span>
        </div>
    </div>

    <!-- Footer -->
    <div class="historique-footer w-full border-t border-surface-200 dark:border-surface-700 p-6 flex-shrink-0">
        <div class="flex items-center justify-between">
            <span class="text-surface-500 dark:text-surface-400 text-sm font-medium">Statut</span>
            <span
                class="historique-statut-badge text-sm font-semibold px-3 py-1 rounded-full"
                [class.historique-statut-badge--success]="data.packing.statut === 'payee'"
                [class.historique-statut-badge--warn]="data.packing.statut !== 'payee'"
            >
                {{ data.packing.statut === 'payee' ? 'Solde' : 'En cours' }}
            </span>
        </div>
    </div>
</div>
`, styles: ["/* src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n.historique-panel {\n  min-height: 0;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  :host {\n    width: 100%;\n    max-width: 100%;\n    overflow: hidden;\n  }\n  .historique-panel {\n    width: 100%;\n    max-width: 100%;\n  }\n  .historique-footer {\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));\n  }\n}\n.versement-card {\n  background: var(--p-surface-0);\n  transition: background 0.15s ease;\n}\n.versement-mode-badge {\n  background: var(--p-surface-100);\n  color: var(--p-surface-600);\n}\n.historique-statut-badge--success {\n  background: #ecfdf5;\n  color: #059669;\n}\n.historique-statut-badge--warn {\n  background: #fffbeb;\n  color: #d97706;\n}\n:host-context(.app-dark) .versement-card {\n  background: var(--p-surface-800);\n}\n:host-context(.app-dark) .versement-mode-badge {\n  background: var(--p-surface-700);\n  color: var(--p-surface-300);\n}\n:host-context(.app-dark) .historique-statut-badge--success {\n  background: rgba(5, 150, 105, 0.12);\n  color: #34d399;\n}\n:host-context(.app-dark) .historique-statut-badge--warn {\n  background: rgba(217, 119, 6, 0.12);\n  color: #fbbf24;\n}\n/*# sourceMappingURL=comptabilite-historique-versements.css.map */\n"] }]
  }], null, { data: [{
    type: Input
  }], loading: [{
    type: Input
  }], canDelete: [{
    type: Input
  }], onClose: [{
    type: Output
  }], onDeleteVersement: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComptabiliteHistoriqueVersements, { className: "ComptabiliteHistoriqueVersements", filePath: "src/app/pages/comptabilite/components/comptabilite-historique-versements/comptabilite-historique-versements.ts", lineNumber: 13 });
})();

export {
  MoneyPipe,
  PACKING_STATUT_LABELS,
  PACKING_STATUT_SEVERITY,
  MODE_PAIEMENT_LABELS,
  ComptabilitePackingPaiement,
  ComptabiliteHistoriqueVersements
};
//# sourceMappingURL=chunk-C4EL44YM.js.map
