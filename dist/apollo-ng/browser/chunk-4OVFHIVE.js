import {
  Select,
  SelectModule
} from "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import "./chunk-46OYJGUM.js";
import "./chunk-TITTMCJA.js";
import "./chunk-YWX4RJZN.js";
import "./chunk-BXX2KJCE.js";
import "./chunk-VMVXPPNB.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VJUJTGB6.js";
import "./chunk-3ISV5J4X.js";
import "./chunk-SJAYAKU2.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import "./chunk-JRTE2WST.js";
import "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/shoppingcart.ts
var ShoppingCart = class _ShoppingCart {
  quantityOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 }
  ];
  selectedQuantity1 = 1;
  selectedQuantity2 = 1;
  static \u0275fac = function ShoppingCart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShoppingCart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShoppingCart, selectors: [["app-shopping-cart"]], decls: 97, vars: 4, consts: [[1, "card"], [1, "flex", "flex-col", "items-center", "mb-12"], [1, "text-surface-900", "dark:text-surface-0", "text-4xl", "mb-6", "font-medium"], [1, "text-surface-700", "dark:text-surface-100", "font-medium", "text-xl", "mt-0", "mb-6"], ["pButton", "", "pRipple", "", "label", "Check Out"], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-col", "md:flex-row", "py-12", "border-t", "border-b", "border-surface-200", "dark:border-surface-700", "md:items-center"], ["src", "/demo/images/ecommerce/shopping-cart/shopping-cart-2-1.png", "alt", "shopping-cart-2-1", 1, "w-48", "shrink-0", "mx-auto", "md:mx-0"], [1, "flex-auto", "py-8", "md:pl-8"], [1, "flex", "flex-wrap", "items-start", "sm:items-center", "sm:flex-row", "sm:justify-between", "border-surface-200", "dark:border-surface-700", "pb-12"], [1, "w-full", "sm:w-6/12", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "mb-4"], [1, "text-surface-700", "dark:text-surface-100"], [1, "w-full", "sm:w-6/12", "flex", "items-start", "justify-between", "mt-4", "sm:mt-0"], [3, "ngModelChange", "options", "ngModel"], [1, "flex", "flex-col", "sm:items-end"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-medium", "mb-2", "sm:mb-4"], ["tabindex", "0", 1, "cursor-pointer", "text-pink-500", "font-medium", "text-sm", "hover:text-pink-600", "transition-colors", "duration-300"], [1, "flex", "flex-col"], [1, "inline-flex", "items-center", "mb-4"], [1, "pi", "pi-envelope", "text-surface-700", "dark:text-surface-100", "mr-2"], [1, "text-surface-700", "dark:text-surface-100", "mr-2"], [1, "pi", "pi-send", "text-surface-700", "dark:text-surface-100", "mr-2"], [1, "font-bold"], [1, "flex", "items-center"], [1, "pi", "pi-exclamation-triangle", "text-surface-700", "dark:text-surface-100", "mr-2"], ["src", "/demo/images/ecommerce/shopping-cart/shopping-cart-2-2.png", "alt", "shopping-cart-2-2", 1, "w-48", "shrink-0", "mx-auto", "md:mx-0"], [1, "flex"], [1, "w-48", "hidden", "md:block"], [1, "list-none", "py-0", "pr-0", "pl-0", "md:pl-8", "mt-12", "mx-0", "mb-0", "flex-auto"], [1, "flex", "justify-between", "mb-6"], [1, "text-xl", "text-surface-900", "dark:text-surface-0", "font-semibold"], [1, "text-xl", "text-surface-900", "dark:text-surface-0"], [1, "flex", "justify-between", "border-t", "border-surface-200", "dark:border-surface-700", "mb-6", "pt-6"], [1, "text-xl", "text-surface-900", "dark:text-surface-0", "font-bold", "text-3xl"], [1, "flex", "justify-end"]], template: function ShoppingCart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Your cart total is $82.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "FREE SHIPPING AND RETURN");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 5)(8, "li", 6);
      \u0275\u0275element(9, "img", 7);
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 12);
      \u0275\u0275text(16, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 13)(18, "div")(19, "p-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ShoppingCart_Template_p_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuantity1, $event) || (ctx.selectedQuantity1 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "span", 16);
      \u0275\u0275text(22, "$20.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 17);
      \u0275\u0275text(24, " Remove ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "div", 18)(26, "span", 19);
      \u0275\u0275element(27, "i", 20);
      \u0275\u0275elementStart(28, "span", 21);
      \u0275\u0275text(29, "Order today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "span", 19);
      \u0275\u0275element(31, "i", 22);
      \u0275\u0275elementStart(32, "span", 21);
      \u0275\u0275text(33, " Delivery by ");
      \u0275\u0275elementStart(34, "span", 23);
      \u0275\u0275text(35, "Dec 23.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "span", 24);
      \u0275\u0275element(37, "i", 25);
      \u0275\u0275elementStart(38, "span", 12);
      \u0275\u0275text(39, "Only 8 Available.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "li", 6);
      \u0275\u0275element(41, "img", 26);
      \u0275\u0275elementStart(42, "div", 8)(43, "div", 9)(44, "div", 10)(45, "span", 11);
      \u0275\u0275text(46, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 12);
      \u0275\u0275text(48, "Medium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 13)(50, "div")(51, "p-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ShoppingCart_Template_p_select_ngModelChange_51_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuantity2, $event) || (ctx.selectedQuantity2 = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 15)(53, "span", 16);
      \u0275\u0275text(54, "$62.00");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "a", 17);
      \u0275\u0275text(56, " Remove ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 18)(58, "span", 19);
      \u0275\u0275element(59, "i", 20);
      \u0275\u0275elementStart(60, "span", 21);
      \u0275\u0275text(61, "Order today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "span", 19);
      \u0275\u0275element(63, "i", 22);
      \u0275\u0275elementStart(64, "span", 21);
      \u0275\u0275text(65, " Delivery by ");
      \u0275\u0275elementStart(66, "span", 23);
      \u0275\u0275text(67, "Dec 23.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "span", 24);
      \u0275\u0275element(69, "i", 25);
      \u0275\u0275elementStart(70, "span", 12);
      \u0275\u0275text(71, "Only 2 Available.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(72, "div", 27);
      \u0275\u0275element(73, "div", 28);
      \u0275\u0275elementStart(74, "ul", 29)(75, "li", 30)(76, "span", 31);
      \u0275\u0275text(77, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 32);
      \u0275\u0275text(79, "$82.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "li", 30)(81, "span", 31);
      \u0275\u0275text(82, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 32);
      \u0275\u0275text(84, "Free");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li", 30)(86, "span", 31);
      \u0275\u0275text(87, "VAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 32);
      \u0275\u0275text(89, "$8.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "li", 33)(91, "span", 34);
      \u0275\u0275text(92, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span", 34);
      \u0275\u0275text(94, "$90.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "li", 35);
      \u0275\u0275element(96, "button", 4);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("options", ctx.quantityOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuantity1);
      \u0275\u0275advance(32);
      \u0275\u0275property("options", ctx.quantityOptions);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuantity2);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple, SelectModule, Select, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShoppingCart, [{
    type: Component,
    args: [{
      selector: "app-shopping-cart",
      imports: [ButtonModule, RippleModule, SelectModule, FormsModule],
      template: `
        <div class="card">
            <div class="flex flex-col items-center mb-12">
                <div class="text-surface-900 dark:text-surface-0 text-4xl mb-6 font-medium">Your cart total is $82.00</div>
                <p class="text-surface-700 dark:text-surface-100 font-medium text-xl mt-0 mb-6">FREE SHIPPING AND RETURN</p>
                <button pButton pRipple label="Check Out"></button>
            </div>
            <ul class="list-none p-0 m-0">
                <li class="flex flex-col md:flex-row py-12 border-t border-b border-surface-200 dark:border-surface-700 md:items-center">
                    <img src="/demo/images/ecommerce/shopping-cart/shopping-cart-2-1.png" class="w-48 shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-1" />
                    <div class="flex-auto py-8 md:pl-8">
                        <div class="flex flex-wrap items-start sm:items-center sm:flex-row sm:justify-between border-surface-200 dark:border-surface-700 pb-12">
                            <div class="w-full sm:w-6/12 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Product Name</span>
                                <span class="text-surface-700 dark:text-surface-100">Medium</span>
                            </div>
                            <div class="w-full sm:w-6/12 flex items-start justify-between mt-4 sm:mt-0">
                                <div>
                                    <p-select [options]="quantityOptions" [(ngModel)]="selectedQuantity1" ></p-select>
                                </div>
                                <div class="flex flex-col sm:items-end">
                                    <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-2 sm:mb-4">$20.00</span>
                                    <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors duration-300" tabindex="0"> Remove </a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-envelope text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100 mr-2">Order today.</span>
                            </span>
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-send text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100 mr-2">
                                    Delivery by
                                    <span class="font-bold">Dec 23.</span>
                                </span>
                            </span>
                            <span class="flex items-center">
                                <i class="pi pi-exclamation-triangle text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100">Only 8 Available.</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="flex flex-col md:flex-row py-12 border-t border-b border-surface-200 dark:border-surface-700 md:items-center">
                    <img src="/demo/images/ecommerce/shopping-cart/shopping-cart-2-2.png" class="w-48 shrink-0 mx-auto md:mx-0" alt="shopping-cart-2-2" />
                    <div class="flex-auto py-8 md:pl-8">
                        <div class="flex flex-wrap items-start sm:items-center sm:flex-row sm:justify-between border-surface-200 dark:border-surface-700 pb-12">
                            <div class="w-full sm:w-6/12 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-4">Product Name</span>
                                <span class="text-surface-700 dark:text-surface-100">Medium</span>
                            </div>
                            <div class="w-full sm:w-6/12 flex items-start justify-between mt-4 sm:mt-0">
                                <div>
                                    <p-select [options]="quantityOptions" [(ngModel)]="selectedQuantity2"></p-select>
                                </div>
                                <div class="flex flex-col sm:items-end">
                                    <span class="text-surface-900 dark:text-surface-0 text-xl font-medium mb-2 sm:mb-4">$62.00</span>
                                    <a class="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors duration-300" tabindex="0"> Remove </a>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-envelope text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100 mr-2">Order today.</span>
                            </span>
                            <span class="inline-flex items-center mb-4">
                                <i class="pi pi-send text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100 mr-2">
                                    Delivery by
                                    <span class="font-bold">Dec 23.</span>
                                </span>
                            </span>
                            <span class="flex items-center">
                                <i class="pi pi-exclamation-triangle text-surface-700 dark:text-surface-100 mr-2"></i>
                                <span class="text-surface-700 dark:text-surface-100">Only 2 Available.</span>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="flex">
                <div class="w-48 hidden md:block"></div>
                <ul class="list-none py-0 pr-0 pl-0 md:pl-8 mt-12 mx-0 mb-0 flex-auto">
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-semibold">Subtotal</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">$82.00</span>
                    </li>
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-semibold">Shipping</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">Free</span>
                    </li>
                    <li class="flex justify-between mb-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-semibold">VAT</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0">$8.00</span>
                    </li>
                    <li class="flex justify-between border-t border-surface-200 dark:border-surface-700 mb-6 pt-6">
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-bold text-3xl">Total</span>
                        <span class="text-xl text-surface-900 dark:text-surface-0 font-bold text-3xl">$90.00</span>
                    </li>
                    <li class="flex justify-end">
                        <button pButton pRipple label="Check Out"></button>
                    </li>
                </ul>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShoppingCart, { className: "ShoppingCart", filePath: "src/app/pages/ecommerce/shoppingcart.ts", lineNumber: 121 });
})();
export {
  ShoppingCart
};
//# sourceMappingURL=chunk-4OVFHIVE.js.map
