import {
  Divider,
  DividerModule
} from "./chunk-GUS3FLSY.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-BXX2KJCE.js";
import "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgForOf,
  NgIf
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/orderhistory.ts
function OrderHistory_div_10_div_20_p_divider_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider", 38);
  }
}
function OrderHistory_div_10_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275element(2, "img", 27);
    \u0275\u0275elementStart(3, "div", 28)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 31);
    \u0275\u0275text(9, "Buy Again ");
    \u0275\u0275elementStart(10, "span", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 33)(13, "span", 34);
    \u0275\u0275element(14, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, OrderHistory_div_10_div_20_p_divider_17_Template, 1, 0, "p-divider", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const order_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", product_r1.color, " | ", product_r1.size);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("| ", product_r1.price);
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-radius", "2.5rem");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r1.deliveryDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 !== order_r3.products.length - 1);
  }
}
function OrderHistory_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "span", 12);
    \u0275\u0275text(4, "Order Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "p-divider", 14);
    \u0275\u0275elementStart(8, "div", 11)(9, "span", 12);
    \u0275\u0275text(10, "Order Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "p-divider", 14);
    \u0275\u0275elementStart(14, "div", 11)(15, "span", 12);
    \u0275\u0275text(16, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 13);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275template(20, OrderHistory_div_10_div_20_Template, 18, 9, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "a", 18);
    \u0275\u0275element(23, "i", 19);
    \u0275\u0275text(24, "Archive Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "a", 20);
    \u0275\u0275element(26, "i", 21);
    \u0275\u0275text(27, "Return");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 20);
    \u0275\u0275element(29, "i", 22);
    \u0275\u0275text(30, "View Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 23);
    \u0275\u0275element(32, "i", 24);
    \u0275\u0275text(33, "Write a Review");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r3.orderNumber);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r3.orderDate);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r3.amount);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", order_r3.products);
  }
}
var OrderHistory = class _OrderHistory {
  orders = [
    {
      orderNumber: "45123",
      orderDate: "7 February 2023",
      amount: "$123.00",
      products: [
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$50",
          deliveryDate: "Delivered on 7 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-1.png"
        },
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$50",
          deliveryDate: "Delivered on 7 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-2.png"
        },
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$63",
          deliveryDate: "Delivered on 7 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-3.png"
        }
      ]
    },
    {
      orderNumber: "45126",
      orderDate: "9 February 2023",
      amount: "$250.00",
      products: [
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$80",
          deliveryDate: "Delivered on 9 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-4.png"
        },
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$20",
          deliveryDate: "Delivered on 9 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-5.png"
        },
        {
          name: "Product Name Placeholder A Little Bit Long One",
          color: "White",
          size: "Small",
          price: "$150",
          deliveryDate: "Delivered on 9 February 2023",
          image: "/demo/images/ecommerce/order-history/orderhistory-6.png"
        }
      ]
    }
  ];
  static \u0275fac = function OrderHistory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderHistory)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderHistory, selectors: [["app-order-history"]], decls: 11, vars: 1, consts: [[1, "card"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "mb-6"], [1, "flex", "flex-col", "text-center", "md:text-left"], [1, "text-surface-900", "dark:text-surface-0", "text-2xl", "mb-2"], [1, "text-surface-600", "dark:text-surface-200", "text-lg"], [1, "mt-8", "mb-2", "md:mt-0", "md:mb-0", "w-full", "lg:w-100"], [1, "pi", "pi-search", "text-gray-400"], ["type", "text", "placeholder", "Search", 1, "p-inputtext", "w-full", "lg:w-100", "bg-surface-50", "dark:bg-surface-800"], ["class", "bg-surface-0 dark:bg-surface-900 grid grid-cols-12 gap-4 grid-nogutter rounded shadow mb-12", 4, "ngFor", "ngForOf"], [1, "bg-surface-0", "dark:bg-surface-900", "grid", "grid-cols-12", "gap-4", "grid-nogutter", "rounded", "shadow", "mb-12"], [1, "col-span-12", "flex", "p-2", "bg-surface-100", "dark:bg-surface-700", "rounded-t"], [1, "p-2", "flex-auto", "text-center", "md:text-left"], [1, "text-surface-700", "dark:text-surface-100", "block"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "block", "mt-2"], ["align", "center", "layout", "vertical", "styleClass", "h-full mx-0 lg:mx-4 border-surface-200 dark:border-surface-700"], [1, "col-span-12"], ["class", "p-2 my-6 flex flex-col lg:flex-row justify-between items-center", 4, "ngFor", "ngForOf"], [1, "col-span-12", "p-0", "flex", "border-t", "border-surface-200", "dark:border-surface-700"], ["tabindex", "0", 1, "cursor-pointer", "py-6", "flex", "flex-col", "md:flex-row", "text-center", "justify-center", "items-center", "text-primary", "hover:bg-primary", "hover:text-primary-contrast", "dark:hover:text-surface-900", "duration-150", "w-full", 2, "border-bottom-left-radius", "6px"], [1, "pi", "pi-folder", "mr-2", "mb-2", "md:mb-1"], ["tabindex", "0", 1, "cursor-pointer", "py-6", "flex", "flex-col", "md:flex-row", "text-center", "justify-center", "items-center", "text-primary", "hover:bg-primary", "hover:text-primary-contrast", "dark:hover:text-surface-900", "duration-150", "w-full"], [1, "pi", "pi-refresh", "mr-2", "mb-2", "md:mb-1"], [1, "pi", "pi-file", "mr-2", "mb-2", "md:mb-1"], ["tabindex", "0", 1, "cursor-pointer", "py-6", "flex", "flex-col", "md:flex-row", "text-center", "justify-center", "items-center", "text-primary", "hover:bg-primary", "hover:text-primary-contrast", "dark:hover:text-surface-900", "duration-150", "w-full", 2, "border-bottom-right-radius", "6px"], [1, "pi", "pi-comment", "mr-2", "mb-2", "md:mb-1"], [1, "p-2", "my-6", "flex", "flex-col", "lg:flex-row", "justify-between", "items-center"], [1, "flex", "flex-col", "lg:flex-row", "justify-center", "items-center", "px-2"], ["alt", "product", 1, "w-32", "h-32", "mr-4", "shrink-0", 3, "src"], [1, "flex", "flex-col", "my-auto", "text-center", "md:text-left"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "mb-4", "mt-4", "lg:mt-0"], [1, "text-surface-700", "dark:text-surface-100", "text-sm", "mb-4"], ["pRipple", "", "tabindex", "0", 1, "p-2", "select-none", "cursor-pointer", "w-40", "mx-auto", "lg:mx-0", "rounded", "font-medium", "text-center", "border", "border-primary", "text-primary", "duration-150"], [1, "font-light"], [1, "mr-0", "lg:mr-4", "mt-6", "lg:mt-0", "p-2", "flex", "items-center", 2, "background-color", "rgba(76, 175, 80,.1)"], [1, "bg-green-500", "text-white", "flex", "items-center", "justify-center", "rounded-full", "mr-2", 2, "min-width", "2rem", "min-height", "2rem"], [1, "pi", "pi-check"], [1, "text-green-500"], ["class", "w-full block! lg:hidden! border-surface-200 dark:border-surface-700", 4, "ngIf"], [1, "w-full", "block!", "lg:hidden!", "border-surface-200", "dark:border-surface-700"]], template: function OrderHistory_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "My Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Dignissim diam quis enim lobortis.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "p-iconfield", 5);
      \u0275\u0275element(8, "p-inputicon", 6)(9, "input", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, OrderHistory_div_10_Template, 34, 4, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.orders);
    }
  }, dependencies: [DividerModule, Divider, IconFieldModule, IconField, InputIconModule, InputIcon, CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistory, [{
    type: Component,
    args: [{
      selector: "app-order-history",
      imports: [DividerModule, IconFieldModule, InputIconModule, CommonModule],
      template: `
        <div class="card">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                <div class="flex flex-col text-center md:text-left">
                    <span class="text-surface-900 dark:text-surface-0 text-2xl mb-2">My Orders</span>
                    <span class="text-surface-600 dark:text-surface-200 text-lg">Dignissim diam quis enim lobortis.</span>
                </div>
                <p-iconfield class="mt-8 mb-2 md:mt-0 md:mb-0 w-full lg:w-100">
                    <p-inputicon class="pi pi-search text-gray-400" />
                    <input type="text" class="p-inputtext w-full lg:w-100 bg-surface-50 dark:bg-surface-800" placeholder="Search" />
                </p-iconfield>
            </div>
            <div class="bg-surface-0 dark:bg-surface-900 grid grid-cols-12 gap-4 grid-nogutter rounded shadow mb-12" *ngFor="let order of orders">
                <div class="col-span-12 flex p-2 bg-surface-100 dark:bg-surface-700 rounded-t">
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Number</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">{{ order.orderNumber }}</span>
                    </div>
                    <p-divider align="center" layout="vertical" styleClass="h-full mx-0 lg:mx-4 border-surface-200 dark:border-surface-700"></p-divider>
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Order Date</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">{{ order.orderDate }}</span>
                    </div>
                    <p-divider align="center" layout="vertical" styleClass="h-full mx-0 lg:mx-4 border-surface-200 dark:border-surface-700"></p-divider>
                    <div class="p-2 flex-auto text-center md:text-left">
                        <span class="text-surface-700 dark:text-surface-100 block">Total Amount</span>
                        <span class="text-surface-900 dark:text-surface-0 font-medium block mt-2">{{ order.amount }}</span>
                    </div>
                </div>
                <div class="col-span-12">
                    <div class="p-2 my-6 flex flex-col lg:flex-row justify-between items-center" *ngFor="let product of order.products; let i = index">
                        <div class="flex flex-col lg:flex-row justify-center items-center px-2">
                            <img [src]="product.image" alt="product" class="w-32 h-32 mr-4 shrink-0" />
                            <div class="flex flex-col my-auto text-center md:text-left">
                                <span class="text-surface-900 dark:text-surface-0 font-medium mb-4 mt-4 lg:mt-0">{{ product.name }}</span>
                                <span class="text-surface-700 dark:text-surface-100 text-sm mb-4">{{ product.color }} | {{ product.size }}</span>
                                <a pRipple tabindex="0" class="p-2 select-none cursor-pointer w-40 mx-auto lg:mx-0 rounded font-medium text-center border border-primary text-primary duration-150"
                                    >Buy Again <span class="font-light">| {{ product.price }}</span></a
                                >
                            </div>
                        </div>
                        <div class="mr-0 lg:mr-4 mt-6 lg:mt-0 p-2 flex items-center" style="background-color: rgba(76, 175, 80,.1);" [style.border-radius]="'2.5rem'">
                            <span class="bg-green-500 text-white flex items-center justify-center rounded-full mr-2" style="min-width:2rem; min-height: 2rem">
                                <i class="pi pi-check"></i>
                            </span>
                            <span class="text-green-500">{{ product.deliveryDate }}</span>
                        </div>
                        <p-divider *ngIf="i !== order.products.length - 1" class="w-full block! lg:hidden! border-surface-200 dark:border-surface-700"></p-divider>
                    </div>
                </div>
                <div class="col-span-12 p-0 flex border-t border-surface-200 dark:border-surface-700">
                    <a
                        tabindex="0"
                        class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center text-primary hover:bg-primary hover:text-primary-contrast dark:hover:text-surface-900 duration-150 w-full"
                        style="border-bottom-left-radius: 6px;"
                        ><i class="pi pi-folder mr-2 mb-2 md:mb-1"></i>Archive Order</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center text-primary hover:bg-primary hover:text-primary-contrast dark:hover:text-surface-900 duration-150 w-full">
                        <i class="pi pi-refresh mr-2 mb-2 md:mb-1"></i>Return</a
                    >
                    <a tabindex="0" class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center text-primary hover:bg-primary hover:text-primary-contrast dark:hover:text-surface-900 duration-150 w-full">
                        <i class="pi pi-file mr-2 mb-2 md:mb-1"></i>View Invoice</a
                    >
                    <a
                        tabindex="0"
                        class="cursor-pointer py-6 flex flex-col md:flex-row text-center justify-center items-center text-primary hover:bg-primary hover:text-primary-contrast dark:hover:text-surface-900 duration-150 w-full"
                        style="border-bottom-right-radius: 6px;"
                        ><i class="pi pi-comment mr-2 mb-2 md:mb-1"></i>Write a Review</a
                    >
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderHistory, { className: "OrderHistory", filePath: "src/app/pages/ecommerce/orderhistory.ts", lineNumber: 84 });
})();
export {
  OrderHistory
};
//# sourceMappingURL=chunk-WWUMJQ7P.js.map
