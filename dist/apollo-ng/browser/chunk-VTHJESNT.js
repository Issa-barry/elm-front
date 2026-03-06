import {
  StyleClassModule
} from "./chunk-KOFBRCUJ.js";
import {
  Select,
  SelectModule
} from "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import "./chunk-VA6E3YEN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-LK4MJDWN.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import {
  ButtonDirective,
  ButtonLabel,
  ButtonModule
} from "./chunk-ZB6W2VB3.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import "./chunk-EC5CTPX4.js";
import {
  CommonModule
} from "./chunk-TGBATRWC.js";
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
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ventes/facture-vente-detail4/facture-vente-detail4.ts
var _c0 = ["navigationRef"];
var _forTrack0 = ($index, $item) => $item.id;
function FactureVenteDetail4_For_12_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function FactureVenteDetail4_For_12_Template_p_select_ngModelChange_11_listener($event) {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.quantity, $event) || (product_r2.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 26)(13, "span", 16);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 27);
    \u0275\u0275listener("click", function FactureVenteDetail4_For_12_Template_a_click_15_listener() {
      const \u0275$index_20_r3 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeProduct(\u0275$index_20_r3));
    });
    \u0275\u0275text(16, "Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 28);
    \u0275\u0275element(18, "i", 29);
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20, " Delivery by ");
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22, "Jun 12.");
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
var FactureVenteDetail4 = class _FactureVenteDetail4 {
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
      name: "Crimson Double-Breasted Blazer",
      description: "Medium \u2022 Raspberry Red",
      quantity: 1,
      price: 169
    },
    {
      id: "1",
      name: "Crystal Bow Stiletto Heels",
      description: "EU 37 \u2022 Champagne Beige",
      quantity: 1,
      price: 144
    }
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
  static \u0275fac = function FactureVenteDetail4_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FactureVenteDetail4)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FactureVenteDetail4, selectors: [["app-facture-vente-detail4"]], viewQuery: function FactureVenteDetail4_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.navigationRef = _t.first);
    }
  }, decls: 35, vars: 0, consts: [[1, "bg-surface-0", "dark:bg-surface-950", "px-6", "py-20", "md:px-12", "lg:px-20", "xl:px-80"], [1, "flex", "flex-col", "items-start", "mb-8"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "md:text-3xl", "font-semibold", "mb-4", "leading-tight"], [1, "text-surface-600", "dark:text-surface-200", "text-xl", "leading-tight", "mb-6"], ["pButton", "", "severity", "contrast", 1, "w-40"], ["pButtonLabel", ""], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mb-8"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "gap-6", "py-8"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "mt-8", "mb-8"], [1, "flex", "flex-col", "gap-4", "mb-8"], [1, "flex", "justify-between", "items-center"], [1, "text-surface-900", "dark:text-surface-0", "leading-tight"], [1, "border-t", "border-surface-200", "dark:border-surface-700", "pt-6", "mb-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "leading-tight"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "font-medium", "leading-tight"], [1, "flex", "justify-end", "pt-4"], [1, "w-50", "h-50", "shrink-0", "rounded-lg", 3, "src"], [1, "flex-auto", "flex", "flex-col", "justify-between"], [1, "flex", "flex-col", "md:flex-row", "gap-4"], [1, "flex-auto", "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "text-surface-600", "dark:text-surface-200", "leading-tight"], [1, "w-full", "md:w-56"], ["optionLabel", "label", "optionValue", "value", 1, "w-20", 3, "ngModelChange", "options", "ngModel"], [1, "flex", "flex-col", "items-end", "gap-4"], ["tabindex", "0", 1, "cursor-pointer", "text-surface-600", "dark:text-surface-200", "font-medium", "hover:text-primary", "transition-colors", "duration-300", 3, "click"], [1, "flex", "items-center", "gap-2", "mt-4"], [1, "pi", "pi-truck", "text-surface-600", "dark:text-surface-200", "text-xl!", "leading-none!"], [1, "font-bold"]], template: function FactureVenteDetail4_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Total de commande = 150 000 FG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Free shipping and free returns.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4)(7, "span", 5);
      \u0275\u0275text(8, "Check Out");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(9, "div", 6);
      \u0275\u0275elementStart(10, "ul", 7);
      \u0275\u0275repeaterCreate(11, FactureVenteDetail4_For_12_Template, 23, 6, "li", 8, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureVenteDetail4, [{
    type: Component,
    args: [{ selector: "app-facture-vente-detail4", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, StyleClassModule, SelectModule], template: ` \r
             \r
            <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 xl:px-80">\r
                <div class="flex flex-col items-start mb-8">\r
                    <h1 class="text-surface-900 dark:text-surface-0 text-2xl md:text-3xl font-semibold mb-4 leading-tight">Total de commande = 150 000 FG</h1>\r
                    <p class="text-surface-600 dark:text-surface-200 text-xl leading-tight mb-6">Free shipping and free returns.</p>\r
                    <button pButton severity="contrast" class="w-40">\r
                        <span pButtonLabel>Check Out</span>\r
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
                                    <i class="pi pi-truck text-surface-600 dark:text-surface-200 text-xl! leading-none!"></i>\r
                                    <span class="text-surface-600 dark:text-surface-200 leading-tight"> Delivery by <span class="font-bold">Jun 12.</span> </span>\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FactureVenteDetail4, { className: "FactureVenteDetail4", filePath: "src/app/pages/ventes/facture-vente-detail4/facture-vente-detail4.ts", lineNumber: 38 });
})();
export {
  FactureVenteDetail4
};
//# sourceMappingURL=chunk-VTHJESNT.js.map
