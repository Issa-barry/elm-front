import {
  TabsModule
} from "./chunk-DKB7AVIY.js";
import {
  InputNumberModule
} from "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import "./chunk-YVCVOBBF.js";
import "./chunk-TRKKYFQF.js";
import "./chunk-5ATNZ2IU.js";
import "./chunk-YWX4RJZN.js";
import "./chunk-VMVXPPNB.js";
import {
  FormsModule
} from "./chunk-VJUJTGB6.js";
import "./chunk-SJAYAKU2.js";
import {
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgForOf,
  NgStyle
} from "./chunk-A6EA4TT7.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/productlist.ts
var _c0 = (a0) => ({ "box-shadow": a0 });
function ProductList_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "span", 13);
    \u0275\u0275text(9, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275element(11, "i", 14);
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "5.0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "p", 16);
    \u0275\u0275text(15, "Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 17);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(product_r1.price);
  }
}
function ProductList_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275element(4, "i", 21);
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6, "Add to Cart");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 23)(8, "span", 24);
    \u0275\u0275text(9, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 25);
    \u0275\u0275text(11, "$150.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 26)(13, "div", 27);
    \u0275\u0275listener("click", function ProductList_div_9_Template_div_click_13_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(product_r3.color = "Bluegray");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275listener("click", function ProductList_div_9_Template_div_click_14_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(product_r3.color = "Indigo");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 29);
    \u0275\u0275listener("click", function ProductList_div_9_Template_div_click_15_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(product_r3.color = "Purple");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30);
    \u0275\u0275listener("click", function ProductList_div_9_Template_div_click_16_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(product_r3.color = "Cyan");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r3.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c0, product_r3.color === "Bluegray" ? "0 0 0 0.2rem var(--p-gray-500)" : null));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(8, _c0, product_r3.color === "Indigo" ? "0 0 0 0.2rem var(--p-indigo-500)" : null));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(10, _c0, product_r3.color === "Purple" ? "0 0 0 0.2rem var(--p-purple-500)" : null));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c0, product_r3.color === "Cyan" ? "0 0 0 0.2rem var(--p-cyan-500)" : null));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.color);
  }
}
var ProductList = class _ProductList {
  color1 = "Bluegray";
  products = [
    {
      price: "$140.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-1.png"
    },
    {
      price: "$82.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-2.png"
    },
    {
      price: "$54.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-3.png"
    },
    {
      price: "$72.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-4.png"
    },
    {
      price: "$99.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-5.png"
    },
    {
      price: "$89.00",
      image: "/demo/images/ecommerce/product-list/product-list-4-6.png"
    }
  ];
  products2 = [
    {
      color: "Bluegray",
      image: "/demo/images/ecommerce/product-list/product-list-2-1.png"
    },
    {
      color: "Indigo",
      image: "/demo/images/ecommerce/product-list/product-list-2-2.png"
    },
    {
      color: "Purple",
      image: "/demo/images/ecommerce/product-list/product-list-2-3.png"
    },
    {
      color: "Cyan",
      image: "/demo/images/ecommerce/product-list/product-list-2-4.png"
    }
  ];
  static \u0275fac = function ProductList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductList, selectors: [["app-product-list"]], decls: 10, vars: 2, consts: [[1, "card"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-4xl", "mb-6"], [1, "mt-0", "p-0", "mb-8", "text-surface-700", "dark:text-surface-100", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "-mt-4", "-ml-4", "-mr-4"], ["class", "col-span-12 md:col-span-6 lg:col-span-4", 4, "ngFor", "ngForOf"], ["class", "col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0", 4, "ngFor", "ngForOf"], [1, "col-span-12", "md:col-span-6", "lg:col-span-4"], [1, "p-2"], [1, "shadow", "p-6", "bg-surface-0", "dark:bg-surface-900", "rounded"], [1, "relative", "mb-4"], [1, "bg-surface-0", "dark:bg-surface-900", "text-surface-900", "dark:text-surface-0", "shadow", "px-4", "py-2", "absolute", "rounded-3xl", 2, "left", "1rem", "top", "1rem"], [1, "w-full", 3, "src"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl"], [1, "pi", "pi-star-fill", "text-yellow-500", "mr-1"], [1, "font-medium"], [1, "mt-0", "mb-4", "text-surface-700", "dark:text-surface-100", "leading-normal"], [1, "text-primary", "text-xl", "font-medium"], [1, "col-span-12", "md:col-span-6", "lg:col-span-3", "mb-8", "lg:mb-0"], [1, "mb-4", "relative"], ["type", "button", "pRipple", "", 1, "border", "border-white!", "rounded", "py-2", "px-4", "absolute!", "bg-black/30!", "text-white!", "inline-flex", "items-center", "justify-center", "hover:bg-black/40", "transition-colors", "duration-300", "cursor-pointer", 2, "bottom", "1rem", "left", "1rem", "width", "calc(100% - 2rem)"], [1, "pi", "pi-shopping-cart", "mr-4", "text-base"], [1, "text-base"], [1, "flex", "flex-col", "items-center"], [1, "text-xl", "text-surface-900", "dark:text-surface-0", "font-medium", "mb-4"], [1, "text-xl", "text-surface-900", "dark:text-surface-0", "mb-4"], [1, "flex", "items-center", "mb-4"], [1, "w-8", "h-8", "shrink-0", "rounded-full", "bg-slate-500", "mr-4", "cursor-pointer", "border-2", "border-surface-200", "dark:border-surface-700", "transition-all", "duration-300", 3, "click", "ngStyle"], [1, "w-8", "h-8", "shrink-0", "rounded-full", "bg-indigo-500", "hover:border-indigo-500", "mr-4", "cursor-pointer", "border-2", "border-surface-200", "dark:border-surface-700", "transition-all", "duration-300", 3, "click", "ngStyle"], [1, "w-8", "h-8", "shrink-0", "rounded-full", "bg-purple-500", "hover:border-purple-500", "mr-4", "cursor-pointer", "border-2", "border-surface-200", "dark:border-surface-700", "transition-all", "duration-300", 3, "click", "ngStyle"], [1, "w-8", "h-8", "shrink-0", "rounded-full", "bg-cyan-500", "hover:border-cyan-500", "cursor-pointer", "border-2", "border-surface-200", "dark:border-surface-700", "transition-all", "duration-300", 3, "click", "ngStyle"], [1, "text-surface-700", "dark:text-surface-100"]], template: function ProductList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Popular Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Exclusive Selection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, ProductList_div_6_Template, 18, 2, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 0)(8, "div", 3);
      \u0275\u0275template(9, ProductList_div_9_Template, 19, 14, "div", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.products2);
    }
  }, dependencies: [CommonModule, NgForOf, NgStyle, FormsModule, InputNumberModule, ButtonModule, RippleModule, Ripple, TabsModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductList, [{
    type: Component,
    args: [{
      selector: "app-product-list",
      imports: [CommonModule, FormsModule, InputNumberModule, ButtonModule, RippleModule, TabsModule],
      template: `
        <div class="card">
            <div class="text-surface-900 dark:text-surface-0 font-medium text-4xl mb-6">Popular Products</div>
            <p class="mt-0 p-0 mb-8 text-surface-700 dark:text-surface-100 text-2xl">Exclusive Selection</p>
            <div class="grid grid-cols-12 gap-4 -mt-4 -ml-4 -mr-4">
                <div class="col-span-12 md:col-span-6 lg:col-span-4" *ngFor="let product of products">
                    <div class="p-2">
                        <div class="shadow p-6 bg-surface-0 dark:bg-surface-900 rounded">
                            <div class="relative mb-4">
                                <span class="bg-surface-0 dark:bg-surface-900 text-surface-900 dark:text-surface-0 shadow px-4 py-2 absolute rounded-3xl" style="left: 1rem; top: 1rem">Category</span>
                                <img [src]="product.image" class="w-full" />
                            </div>
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Product Name</span>
                                <span>
                                    <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                                    <span class="font-medium">5.0</span>
                                </span>
                            </div>
                            <p class="mt-0 mb-4 text-surface-700 dark:text-surface-100 leading-normal">Enim nec dui nunc mattis enim ut tellus. Tincidunt arcu.</p>
                            <span class="text-primary text-xl font-medium">{{ product.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="grid grid-cols-12 gap-4 -mt-4 -ml-4 -mr-4">
                <div class="col-span-12 md:col-span-6 lg:col-span-3 mb-8 lg:mb-0" *ngFor="let product of products2">
                    <div class="mb-4 relative">
                        <img [src]="product.image" class="w-full" />
                        <button
                            type="button"
                            pRipple
                            class="border border-white! rounded py-2 px-4 absolute! bg-black/30! text-white! inline-flex items-center justify-center hover:bg-black/40 transition-colors duration-300 cursor-pointer"
                            style="bottom: 1rem; left: 1rem; width: calc(100% - 2rem)"
                        >
                            <i class="pi pi-shopping-cart mr-4 text-base"></i>
                            <span class="text-base">Add to Cart</span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-medium mb-4">Product Name</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 mb-4">$150.00</span>
                        <div class="flex items-center mb-4">
                            <div
                                class="w-8 h-8 shrink-0 rounded-full bg-slate-500 mr-4 cursor-pointer border-2 border-surface-200 dark:border-surface-700 transition-all duration-300"
                                [ngStyle]="{
                                    'box-shadow': product.color === 'Bluegray' ? '0 0 0 0.2rem var(--p-gray-500)' : null
                                }"
                                (click)="product.color = 'Bluegray'"
                            ></div>
                            <div
                                class="w-8 h-8 shrink-0 rounded-full bg-indigo-500 hover:border-indigo-500 mr-4 cursor-pointer border-2 border-surface-200 dark:border-surface-700 transition-all duration-300"
                                [ngStyle]="{
                                    'box-shadow': product.color === 'Indigo' ? '0 0 0 0.2rem var(--p-indigo-500)' : null
                                }"
                                (click)="product.color = 'Indigo'"
                            ></div>
                            <div
                                class="w-8 h-8 shrink-0 rounded-full bg-purple-500 hover:border-purple-500 mr-4 cursor-pointer border-2 border-surface-200 dark:border-surface-700 transition-all duration-300"
                                [ngStyle]="{
                                    'box-shadow': product.color === 'Purple' ? '0 0 0 0.2rem var(--p-purple-500)' : null
                                }"
                                (click)="product.color = 'Purple'"
                            ></div>
                            <div
                                class="w-8 h-8 shrink-0 rounded-full bg-cyan-500 hover:border-cyan-500 cursor-pointer border-2 border-surface-200 dark:border-surface-700 transition-all duration-300"
                                [ngStyle]="{
                                    'box-shadow': product.color === 'Cyan' ? '0 0 0 0.2rem var(--p-cyan-500)' : null
                                }"
                                (click)="product.color = 'Cyan'"
                            ></div>
                        </div>
                        <span class="text-surface-700 dark:text-surface-100">{{ product.color }}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductList, { className: "ProductList", filePath: "src/app/pages/ecommerce/productlist.ts", lineNumber: 94 });
})();
export {
  ProductList
};
//# sourceMappingURL=chunk-BLXVKQBL.js.map
