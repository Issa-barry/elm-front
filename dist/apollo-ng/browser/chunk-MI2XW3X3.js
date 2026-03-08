import {
  StyleClassModule
} from "./chunk-AL3XWU5G.js";
import {
  Select,
  SelectModule
} from "./chunk-QSEARSIQ.js";
import "./chunk-RZNPFGUI.js";
import "./chunk-6E4MQ4P5.js";
import "./chunk-LXNRGYDD.js";
import "./chunk-X57GOT3J.js";
import "./chunk-ZJMXLI5D.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-BF3NO5XV.js";
import "./chunk-YSXAGVDG.js";
import "./chunk-LSX5YOHQ.js";
import "./chunk-P6BGZM46.js";
import "./chunk-URYLESXH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-4A7IHHEF.js";
import {
  ButtonDirective,
  ButtonLabel,
  ButtonModule
} from "./chunk-VB3XNU3Q.js";
import "./chunk-BKCBW4AP.js";
import "./chunk-SCR42GDN.js";
import "./chunk-CBEWEUNZ.js";
import "./chunk-AGBUVBVL.js";
import {
  CommonModule
} from "./chunk-T6X6TYBW.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-HXF2V74O.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-detail2/facture-vente-detail2.ts
var _c0 = ["navigationRef"];
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteDetail2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "div", 21)(5, "div", 22)(6, "h3", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "p-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function FactureVenteDetail2_For_12_Template_p_select_ngModelChange_11_listener($event) {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.quantity, $event) || (product_r2.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 26)(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 27);
    \u0275\u0275listener("click", function FactureVenteDetail2_For_12_Template_a_click_15_listener() {
      const \u0275$index_20_r3 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeProduct(\u0275$index_20_r3));
    });
    \u0275\u0275text(16, "Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 28);
    \u0275\u0275element(18, "i", 29);
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20, " Livr\xE9 par ");
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22, " Hassan diallo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 28);
    \u0275\u0275element(24, "i", 31);
    \u0275\u0275elementStart(25, "span", 23);
    \u0275\u0275text(26, " V\xE9hicule : ");
    \u0275\u0275elementStart(27, "span", 30);
    \u0275\u0275text(28, "Nen dow");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const \u0275$index_20_r3 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/shoppingcart/full-width-" + (\u0275$index_20_r3 + 1) + ".jpg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r3.quantityOptions);
    \u0275\u0275twoWayProperty("ngModel", product_r2.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\\$", (product_r2.quantity * product_r2.price).toFixed(2));
  }
}
var FactureVenteDetail2 = class _FactureVenteDetail2 {
  navigationRef;
  navItems = signal([
    { label: "Women", hasSubmenu: true },
    { label: "Men", hasSubmenu: true },
    { label: "Sale", hasSubmenu: true }
  ], ...ngDevMode ? [{ debugName: "navItems" }] : []);
  activeDropdown = signal(null, ...ngDevMode ? [{ debugName: "activeDropdown" }] : []);
  mobileCategories = signal([
    {
      label: "Clothing",
      items: ["Shirts & Tops", "Sweatshirts", "Leggings", "Underwear", "Activewear", "Dresses"]
    },
    {
      label: "Shoes",
      items: ["Sneakers", "Boots", "Sandals", "Dress Shoes", "Athletic Shoes", "Slippers"]
    },
    {
      label: "Accessories",
      items: ["Bags & Backpacks", "Hats & Caps", "Belts", "Wallets", "Sunglasses", "Scarves"]
    }
  ], ...ngDevMode ? [{ debugName: "mobileCategories" }] : []);
  products = signal([
    {
      id: "0",
      name: "Pack de 30",
      description: " ",
      quantity: 1,
      price: 169
    }
    // {
    //     id: '1',
    //     name: 'Crystal Bow Stiletto Heels',
    //     description: 'EU 37 • Champagne Beige',
    //     quantity: 1,
    //     price: 144.0
    // }
  ], ...ngDevMode ? [{ debugName: "products" }] : []);
  quantityOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 }
  ];
  estimatedTax = signal(28.95, ...ngDevMode ? [{ debugName: "estimatedTax" }] : []);
  socialIcons = signal(["pinterest", "instagram"], ...ngDevMode ? [{ debugName: "socialIcons" }] : []);
  subtotal = computed(() => this.products().reduce((sum, product) => sum + product.quantity * product.price, 0), ...ngDevMode ? [{ debugName: "subtotal" }] : []);
  totalPrice = computed(() => this.subtotal() + this.estimatedTax(), ...ngDevMode ? [{ debugName: "totalPrice" }] : []);
  setActiveDropdown(item) {
    this.activeDropdown.set(item);
  }
  removeProduct(index) {
    const currentProducts = this.products();
    currentProducts.splice(index, 1);
    this.products.set([...currentProducts]);
  }
  static \u0275fac = function FactureVenteDetail2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteDetail2)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteDetail2, selectors: [["app-facture-vente-detail2"]], viewQuery: function FactureVenteDetail2_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.navigationRef = _t.first);
    }
  }, decls: 35, vars: 0, consts: [[1, "bg-surface-0", "dark:bg-surface-950", "px-6", "py-20", "md:px-12", "lg:px-20", "xl:px-80"], [1, "flex", "flex-col", "items-start", "mb-8"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "md:text-3xl", "font-semibold", "mb-4", "leading-tight"], [1, "text-surface-600", "dark:text-surface-200", "text-xl", "leading-tight", "mb-6"], ["pButton", "", "severity", "contrast", 1, "w-40"], ["pButtonLabel", ""], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mb-8"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "gap-6", "py-8"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mt-8", "mb-8"], [1, "flex", "flex-col", "gap-4", "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "leading-tight"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "mb-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-medium", "leading-tight"], [1, "flex", "justify-end", "pt-4"], [1, "w-50", "h-50", "shrink-0", "rounded-lg", 3, "src"], [1, "flex-auto", "flex", "flex-col", "justify-between"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-auto", "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "text-surface-600", "dark:text-surface-200", "leading-tight"], [1, "w-full", "md:w-56"], ["optionLabel", "label", "optionValue", "value", 1, "w-20", 3, "ngModelChange", "options", "ngModel"], [1, "flex", "flex-col", "items-end", "gap-4"], ["tabindex", "0", 1, "cursor-pointer", "text-surface-600", "dark:text-surface-200", "font-medium", "hover:text-primary", "transition-colors", "duration-300", 3, "click"], [1, "flex", "items-center", "gap-2", "mt-4"], [1, "pi", "pi-id-card", "text-surface-600", "dark:text-surface-200", "text-xl!", "leading-none!"], [1, "font-bold"], [1, "pi", "pi-truck", "text-surface-600", "dark:text-surface-200", "text-xl!", "leading-none!"]], template: function FactureVenteDetail2_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Total de commande = 150 000 FG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "N\xB0 #060326-001.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4)(7, "span", 5);
      \u0275\u0275text(8, "Impay\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(9, "div", 6);
      \u0275\u0275elementStart(10, "ul", 7);
      \u0275\u0275repeaterCreate(11, FactureVenteDetail2_For_12_Template, 29, 6, "li", 8, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "div", 9);
      \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "span", 12);
      \u0275\u0275text(17, "Statut");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "Impay\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "span", 12);
      \u0275\u0275text(22, "D\xE9j\xE0 encaiss\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 12);
      \u0275\u0275text(24, "0 FG");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(25, "div", 13);
      \u0275\u0275elementStart(26, "div", 14)(27, "span", 15);
      \u0275\u0275text(28, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 16);
      \u0275\u0275text(30, "150 000 GNF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 4)(33, "span", 5);
      \u0275\u0275text(34, "Encaisser");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.products());
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, ButtonDirective, ButtonLabel, StyleClassModule, SelectModule, Select], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteDetail2, [{
    type: Component,
    args: [{ selector: "app-facture-vente-detail2", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, SelectModule], template: ` \r
             \r
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 xl:px-80">\r
                <div class="flex flex-col items-start mb-8">\r
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl md:text-3xl font-semibold mb-4 leading-tight">Total de commande = 150 000 FG</h1>\r
                    <p class="text-surface-600 dark:text-surface-200 text-xl leading-tight mb-6">N\xB0 #060326-001.</p>\r
                    <button pButton severity="contrast" class="w-40">\r
                        <span pButtonLabel>Impay\xE9e</span>\r
                    </button>\r
                </div>\r
\r
                <div class="border-t border-surface-200 dark:border-surface-700 mb-8"></div>\r
\r
                <ul class="list-none p-0 m-0">\r
                    @for (product of products(); track product.id; let index = $index) {\r
                        <li class="flex flex-col md:flex-row gap-6 py-8">\r
                            <img [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/ecommerce/shoppingcart/full-width-' + (index + 1) + '.jpg'" class="w-50 h-50 shrink-0 rounded-lg" />\r
                            <div class="flex-auto flex flex-col justify-between">\r
                                <div class="flex flex-col md:flex-row gap-4">\r
                                    <div class="flex-auto flex flex-col gap-4">\r
                                        <div class="flex flex-col gap-2">\r
                                            <h3 class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">{{ product.name }}</h3>\r
                                            <p class="text-surface-600 dark:text-surface-200 leading-tight">{{ product.description }}</p>\r
                                        </div>\r
                                        <div class="w-full md:w-56">\r
                                            <p-select [options]="quantityOptions" optionLabel="label" optionValue="value" [(ngModel)]="product.quantity" class="w-20"></p-select>\r
                                        </div>\r
                                    </div>\r
                                    <div class="flex flex-col items-end gap-4">\r
                                        <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium leading-tight">\\\${{ (product.quantity * product.price).toFixed(2) }}</span>\r
                                        <a class="cursor-pointer text-surface-600 dark:text-surface-200 font-medium hover:text-primary transition-colors duration-300" tabindex="0" (click)="removeProduct(index)">Remove</a>\r
                                    </div>\r
                                </div>\r
                                <div class="flex items-center gap-2 mt-4">\r
                                    <i class="pi pi-id-card text-surface-600 dark:text-surface-200 text-xl! leading-none!"></i>\r
                                    <span class="text-surface-600 dark:text-surface-200 leading-tight"> Livr\xE9 par <span class="font-bold"> Hassan diallo</span> </span>\r
                                </div>\r
                                <div class="flex items-center gap-2 mt-4">\r
                                    <i class="pi pi-truck text-surface-600 dark:text-surface-200 text-xl! leading-none!"></i>\r
                                    <span class="text-surface-600 dark:text-surface-200 leading-tight"> V\xE9hicule : <span class="font-bold">Nen dow</span> </span>\r
                                </div>\r
                            </div>\r
                        </li>\r
                    }\r
                </ul>\r
\r
                <div class="border-t border-surface-200 dark:border-surface-700 mt-8 mb-8"></div>\r
\r
                <div class="flex flex-col gap-4 mb-8">\r
                    <div class="flex justify-between items-center">\r
                        <span class="text-surface-900 dark:text-surface-0 leading-tight">Statut</span>\r
                        <span class="text-surface-900 dark:text-surface-0 leading-tight">Impay\xE9e</span>\r
                    </div>\r
                    <div class="flex justify-between items-center">\r
                        <span class="text-surface-900 dark:text-surface-0 leading-tight">D\xE9j\xE0 encaiss\xE9</span>\r
                        <span class="text-surface-900 dark:text-surface-0 leading-tight">0 FG</span>\r
                    </div>\r
                    \r
                </div>\r
\r
                <div class="border-t border-surface-200 dark:border-surface-700 pt-6 mb-4"></div>\r
\r
                <div class="flex justify-between items-center mb-4">\r
                    <span class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight">Total</span>\r
                    <span class="text-surface-900 dark:text-surface-0 text-2xl font-medium leading-tight">150 000 GNF</span>\r
                </div>\r
\r
                <div class="flex justify-end pt-4">\r
                    <button pButton severity="contrast" class="w-40">\r
                        <span pButtonLabel>Encaisser</span>\r
                    </button>\r
                </div>\r
            </div>\r
             \r
            ` }]
  }], null, { navigationRef: [{
    type: ViewChild,
    args: ["navigationRef"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteDetail2, { className: "FactureVenteDetail2", filePath: "src/app/pages/ventes/facture-vente-detail2/facture-vente-detail2.ts", lineNumber: 38 });
})();
export {
  FactureVenteDetail2
};
//# sourceMappingURL=chunk-MI2XW3X3.js.map
