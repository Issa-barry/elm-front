import {
  InputGroup,
  InputGroupModule
} from "./chunk-CJRBLZMU.js";
import {
  Checkbox,
  CheckboxModule
} from "./chunk-XMHI6SP7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import {
  Select,
  SelectModule
} from "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
import "./chunk-5KB4S2LF.js";
import "./chunk-46OYJGUM.js";
import "./chunk-TITTMCJA.js";
import "./chunk-YWX4RJZN.js";
import "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
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

// src/app/pages/ecommerce/checkoutform.ts
var CheckoutForm = class _CheckoutForm {
  quantities = [1, 1, 1];
  value = "";
  checked = true;
  checked2 = true;
  cities = [
    { name: "USA / New York", code: "NY" },
    { name: "Italy / Rome", code: "RM" },
    { name: "United Kingdoom / London", code: "LDN" },
    { name: "Turkey / Istanbul", code: "IST" },
    { name: "France / Paris", code: "PRS" }
  ];
  selectedCity = "";
  static \u0275fac = function CheckoutForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutForm)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutForm, selectors: [["app-checkout-form"]], decls: 92, vars: 12, consts: [[1, "card"], [1, "grid", "grid-cols-12", "gap-4", "grid-nogutter"], [1, "col-span-12", "px-6", "mt-6", "md:mt-12", "md:px-12"], [1, "text-surface-900", "dark:text-surface-0", "block", "font-bold", "text-xl"], [1, "col-span-12", "lg:col-span-6", "h-full", "px-6", "py-6", "md:px-12"], [1, "flex", "list-none", "flex-wrap", "p-0", "mb-12"], [1, "flex", "items-center", "text-primary", "mr-2"], [1, "pi", "pi-chevron-right", "text-surface-500", "dark:text-surface-300", "text-xs", "ml-2"], [1, "flex", "items-center", "text-surface-500", "dark:text-surface-300", "mr-2"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "mb-12"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "block", "font-medium", "mb-8"], ["id", "email", "placeholder", "Email", "type", "text", 1, "p-inputtext", "w-full", "mb-6"], [1, "flex", "items-center"], ["name", "checkbox-1", "inputId", "id", 3, "ngModelChange", "ngModel", "binary"], ["for", "checkbox-1", 1, "ml-2"], [1, "col-span-12", "mb-6"], ["placeholder", "Country / City", "optionLabel", "name", "styleClass", "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], [1, "col-span-12", "lg:col-span-6", "mb-6"], ["id", "name", "placeholder", "Name", "type", "text", 1, "p-inputtext", "w-full"], ["id", "lastname", "placeholder", "Last Name", "type", "text", 1, "p-inputtext", "w-full"], ["id", "address", "placeholder", "Address", "type", "text", 1, "p-inputtext", "w-full"], ["id", "address2", "placeholder", "Apartment, suite, etc", "type", "text", 1, "p-inputtext", "w-full"], ["id", "pc", "placeholder", "Postal Code", "type", "text", 1, "p-inputtext", "w-full"], ["id", "city", "placeholder", "City", "type", "text", 1, "p-inputtext", "w-full"], ["name", "checkbox-2", "inputId", "id", 3, "ngModelChange", "ngModel", "binary"], ["for", "checkbox-2", 1, "ml-2"], [1, "col-span-12", "flex", "flex-col", "lg:flex-row", "justify-center", "items-center", "lg:justify-end", "my-12"], ["pButton", "", "pRipple", "", "severity", "secondary", "label", "Return to Cart", "icon", "pi pi-fw pi-arrow-left", 1, "mt-4", "lg:mt-0", "w-full", "lg:w-auto", "order-2", "lg:order-1", "lg:mr-6"], ["pButton", "", "pRipple", "", "label", "Continue to Shipping", "icon", "pi pi-fw pi-check", 1, "w-full", "lg:w-auto", "order-1", "lg:order-2"], [1, "col-span-12", "lg:col-span-6", "px-6", "py-6", "md:px-12"], [1, "pb-4", "border-surface-200", "dark:border-surface-700"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl"], [1, "flex", "flex-col", "lg:flex-row", "flex-wrap", "lg:items-center", "py-2", "mt-4", "border-surface-200", "dark:border-surface-700"], ["src", "/demo/images/ecommerce/shop/shop-1.png", "alt", "product", 1, "w-32", "h-32", "shrink-0", "mb-4"], [1, "flex-auto", "lg:ml-4"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-bold"], [1, "text-surface-600", "dark:text-surface-200", "text-sm", "mb-4"], [1, "flex", "flex-auto", "justify-between", "items-center"], ["buttonLayout", "horizontal", "inputStyleClass", "w-10! text-center border-transparent outline-0 shadow-none", "styleClass", "border border-surface-200 dark:border-surface-700 rounded", "decrementButtonClass", "p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1", "incrementButtonClass", "p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", 3, "ngModelChange", "showButtons", "min", "ngModel"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "text", "", "rounded", ""], [1, "py-2", "mt-4", "border-surface-200", "dark:border-surface-700"], [1, "mt-4"], ["type", "text", "pInputText", "", "placeholder", "Promo code", 1, "w-full", 3, "ngModelChange", "ngModel"], ["type", "button", "pButton", "", "pRipple", "", "label", "Apply", 3, "disabled"], [1, "py-2", "mt-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "font-medium"], [1, "text-surface-900", "dark:text-surface-0"], [1, "text-primary", "font-bold"], [1, "py-2", "mt-4", "bg-yellow-100", "flex", "items-center", "justify-center", "rounded"], ["src", "/demo/images/ecommerce/shop/flag.png", "alt", "Country Flag", 1, "mr-2"], [1, "text-black/90", "font-medium"]], template: function CheckoutForm_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Checkout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4)(6, "ul", 5)(7, "li", 6);
      \u0275\u0275text(8, " Cart ");
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "li", 8);
      \u0275\u0275text(11, "Information");
      \u0275\u0275element(12, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li", 8);
      \u0275\u0275text(14, "Shipping");
      \u0275\u0275element(15, "i", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li", 8);
      \u0275\u0275text(17, "Payment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "span", 11);
      \u0275\u0275text(21, "Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 12);
      \u0275\u0275elementStart(23, "div", 13)(24, "p-checkbox", 14);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutForm_Template_p_checkbox_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "label", 15);
      \u0275\u0275text(26, "Email me with news and offers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16)(28, "span", 11);
      \u0275\u0275text(29, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p-select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutForm_Template_p_select_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCity, $event) || (ctx.selectedCity = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18);
      \u0275\u0275element(32, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18);
      \u0275\u0275element(34, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 16);
      \u0275\u0275element(36, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16);
      \u0275\u0275element(38, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 18);
      \u0275\u0275element(40, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 18);
      \u0275\u0275element(42, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 18)(44, "div", 13)(45, "p-checkbox", 25);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutForm_Template_p_checkbox_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.checked2, $event) || (ctx.checked2 = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "label", 26);
      \u0275\u0275text(47, "Save for next purchase");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 27);
      \u0275\u0275element(49, "button", 28)(50, "button", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 30)(52, "div", 31)(53, "span", 32);
      \u0275\u0275text(54, "Your Cart");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 33);
      \u0275\u0275element(56, "img", 34);
      \u0275\u0275elementStart(57, "div", 35)(58, "div", 36)(59, "span", 37);
      \u0275\u0275text(60, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 37);
      \u0275\u0275text(62, "$123.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 38);
      \u0275\u0275text(64, "Black | Large");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 39)(66, "p-inputNumber", 40);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutForm_Template_p_inputNumber_ngModelChange_66_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quantities[0], $event) || (ctx.quantities[0] = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "button", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "div", 42)(69, "p-inputGroup", 43)(70, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function CheckoutForm_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "button", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 46)(73, "div", 47)(74, "span", 48);
      \u0275\u0275text(75, "Subtotal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 49);
      \u0275\u0275text(77, "$123.00");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 47)(79, "span", 48);
      \u0275\u0275text(80, "Shipping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 50);
      \u0275\u0275text(82, "Free");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 47)(84, "span", 37);
      \u0275\u0275text(85, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span", 32);
      \u0275\u0275text(87, "$123.00");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 51);
      \u0275\u0275element(89, "img", 52);
      \u0275\u0275elementStart(90, "span", 53);
      \u0275\u0275text(91, "No additional duties or taxes.");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.checked);
      \u0275\u0275property("binary", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("options", ctx.cities);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCity);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.checked2);
      \u0275\u0275property("binary", true);
      \u0275\u0275advance(21);
      \u0275\u0275property("showButtons", true)("min", 0);
      \u0275\u0275twoWayProperty("ngModel", ctx.quantities[0]);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.value);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.value);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple, SelectModule, Select, CheckboxModule, Checkbox, InputTextModule, InputText, InputNumberModule, InputNumber, InputGroupModule, InputGroup, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutForm, [{
    type: Component,
    args: [{
      selector: "app-checkout-form",
      imports: [ButtonModule, RippleModule, SelectModule, CheckboxModule, InputTextModule, InputNumberModule, InputGroupModule, CheckboxModule, FormsModule],
      template: `
        <div class="card">
            <div class="grid grid-cols-12 gap-4 grid-nogutter">
                <div class="col-span-12 px-6 mt-6 md:mt-12 md:px-12">
                    <span class="text-surface-900 dark:text-surface-0 block font-bold text-xl">Checkout</span>
                </div>
                <div class="col-span-12 lg:col-span-6 h-full px-6 py-6 md:px-12">
                    <ul class="flex list-none flex-wrap p-0 mb-12">
                        <li class="flex items-center text-primary mr-2">
                            Cart
                            <i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i>
                        </li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Information<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Shipping<i class="pi pi-chevron-right text-surface-500 dark:text-surface-300 text-xs ml-2"></i></li>
                        <li class="flex items-center text-surface-500 dark:text-surface-300 mr-2">Payment</li>
                    </ul>
                    <div class="grid grid-cols-12 gap-4">
                        <div class="col-span-12 mb-12">
                            <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Contact Information</span>
                            <input id="email" placeholder="Email" type="text" class="p-inputtext w-full mb-6" />
                            <div class="flex items-center">
                                <p-checkbox name="checkbox-1" [(ngModel)]="checked" [binary]="true" inputId="id"></p-checkbox>
                                <label class="ml-2" for="checkbox-1">Email me with news and offers</label>
                            </div>
                        </div>
                        <div class="col-span-12 mb-6">
                            <span class="text-surface-900 dark:text-surface-0 text-2xl block font-medium mb-8">Shipping</span>
                            <p-select [options]="cities" [(ngModel)]="selectedCity" placeholder="Country / City" optionLabel="name" [showClear]="true" styleClass="w-full"></p-select>
                        </div>
                        <div class="col-span-12 lg:col-span-6 mb-6">
                            <input id="name" placeholder="Name" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 mb-6">
                            <input id="lastname" placeholder="Last Name" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 mb-6">
                            <input id="address" placeholder="Address" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 mb-6">
                            <input id="address2" placeholder="Apartment, suite, etc" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 mb-6">
                            <input id="pc" placeholder="Postal Code" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 mb-6">
                            <input id="city" placeholder="City" type="text" class="p-inputtext w-full" />
                        </div>
                        <div class="col-span-12 lg:col-span-6 mb-6">
                            <div class="flex items-center">
                                <p-checkbox name="checkbox-2" [(ngModel)]="checked2" [binary]="true" inputId="id"></p-checkbox>
                                <label class="ml-2" for="checkbox-2">Save for next purchase</label>
                            </div>
                        </div>
                        <div class="col-span-12 flex flex-col lg:flex-row justify-center items-center lg:justify-end my-12">
                            <button pButton pRipple class="mt-4 lg:mt-0 w-full lg:w-auto order-2 lg:order-1 lg:mr-6" severity="secondary" label="Return to Cart" icon="pi pi-fw pi-arrow-left"></button>
                            <button pButton pRipple class="w-full lg:w-auto order-1 lg:order-2" label="Continue to Shipping" icon="pi pi-fw pi-check"></button>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-6 px-6 py-6 md:px-12">
                    <div class="pb-4 border-surface-200 dark:border-surface-700">
                        <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">Your Cart</span>
                    </div>
                    <div class="flex flex-col lg:flex-row flex-wrap lg:items-center py-2 mt-4 border-surface-200 dark:border-surface-700">
                        <img src="/demo/images/ecommerce/shop/shop-1.png" class="w-32 h-32 shrink-0 mb-4" alt="product" />
                        <div class="flex-auto lg:ml-4">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-surface-900 dark:text-surface-0 font-bold">Product Name</span>
                                <span class="text-surface-900 dark:text-surface-0 font-bold">$123.00</span>
                            </div>
                            <div class="text-surface-600 dark:text-surface-200 text-sm mb-4">Black | Large</div>
                            <div class="flex flex-auto justify-between items-center">
                                <p-inputNumber
                                    [showButtons]="true"
                                    buttonLayout="horizontal"
                                    [min]="0"
                                    inputStyleClass="w-10! text-center border-transparent outline-0 shadow-none"
                                    [(ngModel)]="quantities[0]"
                                    styleClass="border border-surface-200 dark:border-surface-700 rounded"
                                    decrementButtonClass="p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1"
                                    incrementButtonClass="p-button-text text-surface-600 dark:text-surface-200 hover:text-primary py-1 px-1"
                                    incrementButtonIcon="pi pi-plus"
                                    decrementButtonIcon="pi pi-minus"
                                ></p-inputNumber>
                                <button pButton pRipple icon="pi pi-trash" text rounded></button>
                            </div>
                        </div>
                    </div>
                    <div class="py-2 mt-4 border-surface-200 dark:border-surface-700">
                        <p-inputGroup class="mt-4">
                            <input type="text" [(ngModel)]="value" pInputText placeholder="Promo code" class="w-full" />
                            <button type="button" pButton pRipple label="Apply" [disabled]="!value"></button>
                        </p-inputGroup>
                    </div>
                    <div class="py-2 mt-4">
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Subtotal</span>
                            <span class="text-surface-900 dark:text-surface-0">$123.00</span>
                        </div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-medium">Shipping</span>
                            <span class="text-primary font-bold">Free</span>
                        </div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-surface-900 dark:text-surface-0 font-bold">Total</span>
                            <span class="text-surface-900 dark:text-surface-0 font-medium text-xl">$123.00</span>
                        </div>
                    </div>
                    <div class="py-2 mt-4 bg-yellow-100 flex items-center justify-center rounded">
                        <img src="/demo/images/ecommerce/shop/flag.png" class="mr-2" alt="Country Flag" />
                        <span class="text-black/90 font-medium">No additional duties or taxes.</span>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutForm, { className: "CheckoutForm", filePath: "src/app/pages/ecommerce/checkoutform.ts", lineNumber: 131 });
})();
export {
  CheckoutForm
};
//# sourceMappingURL=chunk-Z4ISKDH7.js.map
