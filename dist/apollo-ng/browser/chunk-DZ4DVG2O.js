import {
  ChartModule,
  UIChart
} from "./chunk-JZTX3IWC.js";
import {
  LayoutService
} from "./chunk-EAMFDLIX.js";
import {
  ProductService
} from "./chunk-HDCRFM5C.js";
import {
  Table,
  TableModule
} from "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import {
  InputNumber,
  InputNumberModule
} from "./chunk-3RHV3JZZ.js";
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
import "./chunk-BXX2KJCE.js";
import "./chunk-VMVXPPNB.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
import "./chunk-JRTE2WST.js";
import {
  isPlatformBrowser
} from "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  ChangeDetectorRef,
  Component,
  PLATFORM_ID,
  effect,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/dashboards/banking/headerwidget.ts
var HeaderWidget = class _HeaderWidget {
  static \u0275fac = function HeaderWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderWidget, selectors: [["app-header-widget"]], decls: 12, vars: 0, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-6"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "gap-4"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-f-1.png", 1, "w-16", "h-16", "shrink-0"], [1, "flex", "flex-col", "items-center", "sm:items-start"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-4xl"], [1, "text-surface-600", "dark:text-surface-200", "m-0"], [1, "flex", "gap-2", "sm:ml-auto"], ["pTooltip", "Exchange", "tooltipPosition", "bottom", "icon", "pi pi-arrows-h", "outlined", "", "rounded", ""], ["pTooltip", "Withdraw", "tooltipPosition", "bottom", "icon", "pi pi-download", "outlined", "", "rounded", ""], ["pTooltip", "Send", "tooltipPosition", "bottom", "icon", "pi pi-send", "rounded", ""]], template: function HeaderWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Welcome Isabel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Your last login was on 04/05/2022 at 10:24 am ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6);
      \u0275\u0275element(9, "p-button", 7)(10, "p-button", 8)(11, "p-button", 9);
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [ButtonModule, Button, TooltipModule, Tooltip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-header-widget",
      imports: [ButtonModule, TooltipModule],
      template: `
        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img
                    alt="avatar"
                    src="/demo/images/avatar/circle/avatar-f-1.png"
                    class="w-16 h-16 shrink-0"
                />
                <div class="flex flex-col items-center sm:items-start">
                    <span
                        class="text-surface-900 dark:text-surface-0 font-bold text-4xl"
                        >Welcome Isabel</span
                    >
                    <p class="text-surface-600 dark:text-surface-200 m-0">
                        Your last login was on 04/05/2022 at 10:24 am
                    </p>
                </div>
            </div>
            <div class="flex gap-2 sm:ml-auto">
                <p-button
                    pTooltip="Exchange"
                    tooltipPosition="bottom"
                    icon="pi pi-arrows-h"
                    outlined
                    rounded
                ></p-button>
                <p-button
                    pTooltip="Withdraw"
                    tooltipPosition="bottom"
                    icon="pi pi-download"
                    outlined
                    rounded
                ></p-button>
                <p-button
                    pTooltip="Send"
                    tooltipPosition="bottom"
                    icon="pi pi-send"
                    rounded
                ></p-button>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderWidget, { className: "HeaderWidget", filePath: "src/app/pages/dashboards/banking/headerwidget.ts", lineNumber: 52 });
})();

// src/app/pages/dashboards/banking/statsbankingwidget.ts
var StatsBankingWidget = class _StatsBankingWidget {
  static \u0275fac = function StatsBankingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsBankingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsBankingWidget, selectors: [["app-stats-banking-widget"]], hostVars: 2, hostBindings: function StatsBankingWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, decls: 46, vars: 0, consts: [[1, "col-span-12", "md:col-span-6", "xl:col-span-4"], [1, "card", "h-full", "relative", "overflow-hidden"], ["id", "visual", "viewBox", "0 0 900 600", "xmlns", "http://www.w3.org/2000/svg", "xmlnsXlink", "http://www.w3.org/1999/xlink", "version", "1.1", "preserveAspectRatio", "none", 1, "absolute", "left-0", "top-0", "h-full", "w-full"], ["x", "0", "y", "0", "width", "900", "height", "600", "fill", "var(--p-primary-600)"], ["d", "M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z", "fill", "var(--p-primary-500)", "strokeLinecap", "round", "strokeLinejoin", "miter"], [1, "z-20", "relative", "text-white"], [1, "text-xl", "font-semibold", "mb-4"], [1, "mb-1", "font-semibold"], [1, "text-2xl", "mb-8", "font-bold"], [1, "flex", "items-center", "justify-between"], [1, "text-lg"], [1, "font-medium", "text-lg"], [1, "card", "h-full"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], ["alt", "avatar", "src", "/demo/images/banking/visa.svg", 1, "h-4"], [1, "text-surface-600", "dark:text-surface-200", "mb-1", "font-semibold"], [1, "text-2xl", "text-primary", "mb-8", "font-bold"], [1, "text-surface-900", "dark:text-surface-0", "text-lg"], [1, "text-surface-600", "dark:text-surface-200", "font-medium", "text-lg"], [1, "col-span-12", "md:col-span-6", "xl:col-span-2"], [1, "card", "h-full", "flex", "flex-col", "items-center", "justify-center"], [1, "pi", "pi-dollar", "text-primary", "text-4xl!", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "mb-6", "font-medium"], [1, "text-2xl", "text-primary", "font-bold"], [1, "pi", "pi-euro", "text-primary", "text-4xl!", "mb-6"]], template: function StatsBankingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275domElement(3, "rect", 3)(4, "path", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275text(7, "Debit Card");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 7);
      \u0275\u0275text(9, "Balance");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "div", 8);
      \u0275\u0275text(11, "$2.000,00");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14, "**** **** **** 1412");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "span", 11);
      \u0275\u0275text(16, "12/26");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275domElementStart(17, "div", 0)(18, "div", 12)(19, "div", 13)(20, "div", 14);
      \u0275\u0275text(21, "Credit Card");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(22, "img", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 16);
      \u0275\u0275text(24, "Debt");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 17);
      \u0275\u0275text(26, "$1.500,00");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "div", 9)(28, "span", 18);
      \u0275\u0275text(29, "**** **** **** 1231");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "span", 19);
      \u0275\u0275text(31, "12/24");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(32, "div", 20)(33, "div", 21);
      \u0275\u0275domElement(34, "i", 22);
      \u0275\u0275domElementStart(35, "span", 23);
      \u0275\u0275text(36, "Primary");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "span", 24);
      \u0275\u0275text(38, "$24,345.21");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(39, "div", 20)(40, "div", 21);
      \u0275\u0275domElement(41, "i", 25);
      \u0275\u0275domElementStart(42, "span", 23);
      \u0275\u0275text(43, "Currency");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "span", 24);
      \u0275\u0275text(45, "$10,416.11");
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsBankingWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-stats-banking-widget",
      imports: [],
      template: `
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card h-full relative overflow-hidden">
                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" class="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none">
                    <rect x="0" y="0" width="900" height="600" fill="var(--p-primary-600)"></rect>
                    <path
                        d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
                        fill="var(--p-primary-500)"
                        strokeLinecap="round"
                        strokeLinejoin="miter"
                    ></path>
                </svg>
                <div class="z-20 relative text-white">
                    <div class="text-xl font-semibold mb-4">Debit Card</div>
                    <div class="mb-1 font-semibold">Balance</div>
                    <div class="text-2xl mb-8 font-bold">$2.000,00</div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg">**** **** **** 1412</span>
                        <span class="font-medium text-lg">12/26</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
            <div class="card h-full">
                <div class="flex items-center justify-between mb-4">
                    <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold">Credit Card</div>
                    <img alt="avatar" src="/demo/images/banking/visa.svg" class="h-4" />
                </div>
                <div class="text-surface-600 dark:text-surface-200 mb-1 font-semibold">Debt</div>
                <div class="text-2xl text-primary mb-8 font-bold">$1.500,00</div>
                <div class="flex items-center justify-between">
                    <span class="text-surface-900 dark:text-surface-0 text-lg">**** **** **** 1231</span>
                    <span class="text-surface-600 dark:text-surface-200 font-medium text-lg">12/24</span>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-2">
            <div class="card h-full flex flex-col items-center justify-center">
                <i class="pi pi-dollar text-primary text-4xl! mb-6"></i>
                <span class="text-surface-900 dark:text-surface-0 text-lg mb-6 font-medium">Primary</span>
                <span class="text-2xl text-primary font-bold">$24,345.21</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-2">
            <div class="card h-full flex flex-col items-center justify-center">
                <i class="pi pi-euro text-primary text-4xl! mb-6"></i>
                <span class="text-surface-900 dark:text-surface-0 text-lg mb-6 font-medium">Currency</span>
                <span class="text-2xl text-primary font-bold">$10,416.11</span>
            </div>
        </div>
    `,
      host: {
        "[style.display]": '"contents"'
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsBankingWidget, { className: "StatsBankingWidget", filePath: "src/app/pages/dashboards/banking/statsbankingwidget.ts", lineNumber: 63 });
})();

// src/app/pages/dashboards/banking/recenttransactionswidget.ts
var RecentTransactionsWidget = class _RecentTransactionsWidget {
  static \u0275fac = function RecentTransactionsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentTransactionsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentTransactionsWidget, selectors: [["app-recent-transactions-widget"]], decls: 49, vars: 0, consts: [[1, "card"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], [1, "list-none", "p-0", "m-0"], [1, "flex", "items-center", "p-4", "mb-4", "border-b", "border-surface-200", "dark:border-surface-700"], ["alt", "brands", "src", "/demo/images/banking/airbnb.png", 1, "w-12", "shrink-0", "mr-4"], [1, "flex", "flex-col"], [1, "text-xl", "font-medium", "text-surface-900", "dark:text-surface-0", "mb-1"], [1, "text-xl", "text-surface-900", "dark:text-surface-0", "ml-auto", "font-semibold"], ["alt", "brands", "src", "/demo/images/banking/amazon.png", 1, "w-12", "shrink-0", "mr-4"], ["alt", "brands", "src", "/demo/images/banking/nike.svg", 1, "w-12", "shrink-0", "mr-4", "rounded-full"], ["alt", "brands", "src", "/demo/images/banking/starbucks.svg", 1, "w-12", "shrink-0", "mr-4"], [1, "flex", "items-center", "p-4", "mb-4"]], template: function RecentTransactionsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Recent Transactions ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "ul", 2)(4, "li", 3);
      \u0275\u0275domElement(5, "img", 4);
      \u0275\u0275domElementStart(6, "div", 5)(7, "span", 6);
      \u0275\u0275text(8, "Airbnb");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span");
      \u0275\u0275text(10, "05/23/2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(11, "span", 7);
      \u0275\u0275text(12, "$250.00");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "li", 3);
      \u0275\u0275domElement(14, "img", 8);
      \u0275\u0275domElementStart(15, "div", 5)(16, "span", 6);
      \u0275\u0275text(17, "Amazon");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "span");
      \u0275\u0275text(19, "04/12/2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "span", 7);
      \u0275\u0275text(21, "$50.00");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(22, "li", 3);
      \u0275\u0275domElement(23, "img", 9);
      \u0275\u0275domElementStart(24, "div", 5)(25, "span", 6);
      \u0275\u0275text(26, "Nike Store");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(27, "span");
      \u0275\u0275text(28, "04/29/2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(29, "span", 7);
      \u0275\u0275text(30, "$60.00");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(31, "li", 3);
      \u0275\u0275domElement(32, "img", 10);
      \u0275\u0275domElementStart(33, "div", 5)(34, "span", 6);
      \u0275\u0275text(35, "Starbucks");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "span");
      \u0275\u0275text(37, "04/15/2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "span", 7);
      \u0275\u0275text(39, "$15.24");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "li", 11);
      \u0275\u0275domElement(41, "img", 8);
      \u0275\u0275domElementStart(42, "div", 5)(43, "span", 6);
      \u0275\u0275text(44, "Amazon");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "span");
      \u0275\u0275text(46, "04/12/2022");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "span", 7);
      \u0275\u0275text(48, "$12.50");
      \u0275\u0275domElementEnd()()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentTransactionsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-recent-transactions-widget",
      imports: [],
      template: `
        <div class="card">
            <div
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4"
            >
                Recent Transactions
            </div>
            <ul class="list-none p-0 m-0">
                <li
                    class="flex items-center p-4 mb-4 border-b border-surface-200 dark:border-surface-700"
                >
                    <img
                        alt="brands"
                        src="/demo/images/banking/airbnb.png"
                        class="w-12 shrink-0 mr-4"
                    />
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-1"
                            >Airbnb</span
                        >
                        <span>05/23/2022</span>
                    </div>
                    <span
                        class="text-xl text-surface-900 dark:text-surface-0 ml-auto font-semibold"
                        >$250.00</span
                    >
                </li>
                <li
                    class="flex items-center p-4 mb-4 border-b border-surface-200 dark:border-surface-700"
                >
                    <img
                        alt="brands"
                        src="/demo/images/banking/amazon.png"
                        class="w-12 shrink-0 mr-4"
                    />
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-1"
                            >Amazon</span
                        >
                        <span>04/12/2022</span>
                    </div>
                    <span
                        class="text-xl text-surface-900 dark:text-surface-0 ml-auto font-semibold"
                        >$50.00</span
                    >
                </li>
                <li
                    class="flex items-center p-4 mb-4 border-b border-surface-200 dark:border-surface-700"
                >
                    <img
                        alt="brands"
                        src="/demo/images/banking/nike.svg"
                        class="w-12 shrink-0 mr-4 rounded-full"
                    />
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-1"
                            >Nike Store</span
                        >
                        <span>04/29/2022</span>
                    </div>
                    <span
                        class="text-xl text-surface-900 dark:text-surface-0 ml-auto font-semibold"
                        >$60.00</span
                    >
                </li>
                <li
                    class="flex items-center p-4 mb-4 border-b border-surface-200 dark:border-surface-700"
                >
                    <img
                        alt="brands"
                        src="/demo/images/banking/starbucks.svg"
                        class="w-12 shrink-0 mr-4"
                    />
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-1"
                            >Starbucks</span
                        >
                        <span>04/15/2022</span>
                    </div>
                    <span
                        class="text-xl text-surface-900 dark:text-surface-0 ml-auto font-semibold"
                        >$15.24</span
                    >
                </li>
                <li class="flex items-center p-4 mb-4">
                    <img
                        alt="brands"
                        src="/demo/images/banking/amazon.png"
                        class="w-12 shrink-0 mr-4"
                    />
                    <div class="flex flex-col">
                        <span
                            class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-1"
                            >Amazon</span
                        >
                        <span>04/12/2022</span>
                    </div>
                    <span
                        class="text-xl text-surface-900 dark:text-surface-0 ml-auto font-semibold"
                        >$12.50</span
                    >
                </li>
            </ul>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentTransactionsWidget, { className: "RecentTransactionsWidget", filePath: "src/app/pages/dashboards/banking/recenttransactionswidget.ts", lineNumber: 117 });
})();

// src/app/pages/dashboards/banking/overviewwidget.ts
var OverviewWidget = class _OverviewWidget {
  cd;
  chartData;
  chartOptions;
  platformId = inject(PLATFORM_ID);
  layoutService = inject(LayoutService);
  constructor(cd) {
    this.cd = cd;
  }
  themeEffect = effect(() => {
    if (this.layoutService.transitionComplete()) {
      this.initChart();
    }
  }, ...ngDevMode ? [{ debugName: "themeEffect" }] : []);
  ngOnInit() {
    this.initChart();
  }
  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue("--text-color");
      const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
      const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
      this.chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Income",
            data: [6500, 5900, 8e3, 8100, 5600, 5500, 4e3],
            fill: false,
            tension: 0.4,
            borderColor: documentStyle.getPropertyValue("--p-green-500")
          },
          {
            label: "Expenses",
            data: [1200, 5100, 6200, 3300, 2100, 6200, 4500],
            fill: true,
            borderColor: "#6366f1",
            tension: 0.4,
            backgroundColor: "rgba(99,102,220,0.2)"
          }
        ]
      };
      this.chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.65,
        animation: {
          duration: 0
        },
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(context.parsed.y);
                }
                return label;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
      this.cd.markForCheck();
    }
  }
  static \u0275fac = function OverviewWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverviewWidget)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewWidget, selectors: [["app-overview-widget"]], decls: 4, vars: 2, consts: [[1, "card", "h-full"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], ["type", "line", 3, "data", "options"]], template: function OverviewWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p-chart", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.chartData)("options", ctx.chartOptions);
    }
  }, dependencies: [ChartModule, UIChart], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverviewWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-overview-widget",
      imports: [ChartModule],
      template: `
        <div class="card h-full">
            <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Overview</div>
            <p-chart type="line" [data]="chartData" [options]="chartOptions"></p-chart>
        </div>
    `
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewWidget, { className: "OverviewWidget", filePath: "src/app/pages/dashboards/banking/overviewwidget.ts", lineNumber: 17 });
})();

// src/app/pages/dashboards/banking/recenttransactionstwowidget.ts
var RecentTransactionsTwoWidget = class _RecentTransactionsTwoWidget {
  price = 0;
  static \u0275fac = function RecentTransactionsTwoWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentTransactionsTwoWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentTransactionsTwoWidget, selectors: [["app-recent-transactions-two-widget"]], decls: 36, vars: 1, consts: [[1, "card", "h-full"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], ["type", "button", "icon", "pi pi-plus", "label", "Add New", "size", "small", "outlined", ""], [1, "flex", "flex-col", "gap-y-4"], [1, "flex", "flex-col", "lg:flex-row", "gap-4"], [1, "w-full", "lg:w-6/12", "p-4", "border", "rounded", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "hover:bg-surface-100", "dark:hover:bg-surface-700", "cursor-pointer", "border-radius"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-f-1.png", 1, "w-8", "shrink-0", "mr-2"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-f-2.png", 1, "w-8", "shrink-0", "mr-2"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-m-1.png", 1, "w-8", "shrink-0", "mr-2"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-f-3.png", 1, "w-8", "shrink-0", "mr-2"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-m-2.png", 1, "w-8", "shrink-0", "mr-2"], [1, "w-full", "lg:w-6/12", "p-4", "border", "rounded", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "hover:bg-surface-100", "dark:hover:bg-surface-700", "cursor-pointer"], ["alt", "avatar", "src", "/demo/images/avatar/circle/avatar-f-4.png", 1, "w-8", "shrink-0", "mr-2"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "mt-8"], ["type", "text", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["type", "button", "label", "Send"]], template: function RecentTransactionsTwoWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, " Recent Transactions ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "p-button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "img", 7);
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Aisha Williams");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 6);
      \u0275\u0275element(12, "img", 9);
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "Jane Watson");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 5)(16, "div", 6);
      \u0275\u0275element(17, "img", 10);
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19, "Brad Curry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 6);
      \u0275\u0275element(21, "img", 11);
      \u0275\u0275elementStart(22, "span", 8);
      \u0275\u0275text(23, "Claire Dunphy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 5)(25, "div", 6);
      \u0275\u0275element(26, "img", 12);
      \u0275\u0275elementStart(27, "span", 8);
      \u0275\u0275text(28, "Kevin James");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275element(30, "img", 14);
      \u0275\u0275elementStart(31, "span", 8);
      \u0275\u0275text(32, "Sarah McTamish");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 15)(34, "p-inputnumber", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RecentTransactionsTwoWidget_Template_p_inputnumber_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.price, $event) || (ctx.price = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "p-button", 17);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(34);
      \u0275\u0275twoWayProperty("ngModel", ctx.price);
    }
  }, dependencies: [FormsModule, NgControlStatus, NgModel, InputNumberModule, InputNumber, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentTransactionsTwoWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-recent-transactions-two-widget",
      imports: [FormsModule, InputNumberModule, ButtonModule],
      template: `
        <div class="card h-full">
            <div class="flex items-center justify-between mb-4">
                <div
                    class="text-surface-900 dark:text-surface-0 text-xl font-semibold"
                >
                    Recent Transactions
                </div>
                <p-button
                    type="button"
                    icon="pi pi-plus"
                    label="Add New"
                    size="small"
                    outlined
                ></p-button>
            </div>
            <div class="flex flex-col gap-y-4">
                <div class="flex flex-col lg:flex-row gap-4">
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer border-radius"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-f-1.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Aisha Williams</span
                        >
                    </div>
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer border-radius"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-f-2.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Jane Watson</span
                        >
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-4">
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer border-radius"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-m-1.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Brad Curry</span
                        >
                    </div>
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer border-radius"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-f-3.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Claire Dunphy</span
                        >
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-4">
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer border-radius"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-m-2.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Kevin James</span
                        >
                    </div>
                    <div
                        class="w-full lg:w-6/12 p-4 border rounded border-surface-200 dark:border-surface-700 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer"
                    >
                        <img
                            alt="avatar"
                            src="/demo/images/avatar/circle/avatar-f-4.png"
                            class="w-8 shrink-0 mr-2"
                        />
                        <span
                            class="text-surface-900 dark:text-surface-0 text-lg font-medium"
                            >Sarah McTamish</span
                        >
                    </div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-8">
                <p-inputnumber 
                    type="text"
                    [(ngModel)]="price"
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    fluid
                ></p-inputnumber>
                <p-button type="button" label="Send"></p-button>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentTransactionsTwoWidget, { className: "RecentTransactionsTwoWidget", filePath: "src/app/pages/dashboards/banking/recenttransactionstwowidget.ts", lineNumber: 127 });
})();

// src/app/pages/dashboards/banking/monthlypaymentswidget.ts
function MonthlyPaymentsWidget_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd()();
  }
}
function MonthlyPaymentsWidget_ng_template_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 5);
  }
}
function MonthlyPaymentsWidget_ng_template_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 6);
  }
}
function MonthlyPaymentsWidget_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275conditionalCreate(8, MonthlyPaymentsWidget_ng_template_6_Conditional_8_Template, 1, 0, "p-tag", 5)(9, MonthlyPaymentsWidget_ng_template_6_Conditional_9_Template, 1, 0, "p-tag", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r1.paid ? 8 : 9);
  }
}
var MonthlyPaymentsWidget = class _MonthlyPaymentsWidget {
  payments;
  ngOnInit() {
    this.payments = [
      {
        name: "Electric Bill",
        amount: 75.6,
        paid: true,
        date: "06/04/2022"
      },
      {
        name: "Water Bill",
        amount: 45.5,
        paid: true,
        date: "07/04/2022"
      },
      { name: "Gas Bill", amount: 45.2, paid: false, date: "12/04/2022" },
      {
        name: "Internet Bill",
        amount: 25.9,
        paid: true,
        date: "17/04/2022"
      },
      {
        name: "Streaming",
        amount: 40.9,
        paid: false,
        date: "20/04/2022"
      }
    ];
  }
  static \u0275fac = function MonthlyPaymentsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MonthlyPaymentsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MonthlyPaymentsWidget, selectors: [["app-monthly-payments-widget"]], decls: 8, vars: 2, consts: [["header", ""], ["body", ""], [1, "card"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], ["dataKey", "id", 3, "value", "rows"], ["value", "COMPLETED", "severity", "success"], ["value", "PENDING", "severity", "warn"]], template: function MonthlyPaymentsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275text(2, " Monthly Payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-table", 4);
      \u0275\u0275template(4, MonthlyPaymentsWidget_ng_template_4_Template, 9, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, MonthlyPaymentsWidget_ng_template_6_Template, 10, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.payments)("rows", 5);
    }
  }, dependencies: [TableModule, Table, TagModule, Tag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthlyPaymentsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-monthly-payments-widget",
      imports: [TableModule, TagModule],
      template: `
        <div class="card">
            <div
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4"
            >
                Monthly Payments
            </div>

            <p-table [value]="payments" [rows]="5" dataKey="id">
                <ng-template #header>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </ng-template>
                <ng-template #body let-product>
                    <tr>
                        <td>{{ product.name }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.date }}</td>
                        <td>
                            @if (product.paid) {
                                <p-tag
                                    value="COMPLETED"
                                    severity="success"
                                ></p-tag>
                            } @else {
                                <p-tag value="PENDING" severity="warn"></p-tag>
                            }
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MonthlyPaymentsWidget, { className: "MonthlyPaymentsWidget", filePath: "src/app/pages/dashboards/banking/monthlypaymentswidget.ts", lineNumber: 54 });
})();

// src/app/pages/dashboards/bankingdashboard.ts
var BankingDashboard = class _BankingDashboard {
  static \u0275fac = function BankingDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BankingDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BankingDashboard, selectors: [["app-banking-dashboard"]], features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 11, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-8"], [1, "col-span-12"], [1, "col-span-12", "xl:col-span-4"], [1, "col-span-12", "xl:col-span-8"], [1, "col-span-12", "lg:col-span-6"]], template: function BankingDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header-widget", 1)(2, "app-stats-banking-widget");
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275element(4, "app-recent-transactions-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275element(6, "app-overview-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4);
      \u0275\u0275element(8, "app-recent-transactions-two-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275element(10, "app-monthly-payments-widget");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [
    HeaderWidget,
    StatsBankingWidget,
    RecentTransactionsWidget,
    OverviewWidget,
    RecentTransactionsTwoWidget,
    MonthlyPaymentsWidget
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BankingDashboard, [{
    type: Component,
    args: [{
      selector: "app-banking-dashboard",
      standalone: true,
      imports: [
        HeaderWidget,
        StatsBankingWidget,
        RecentTransactionsWidget,
        OverviewWidget,
        RecentTransactionsTwoWidget,
        MonthlyPaymentsWidget
      ],
      providers: [ProductService],
      template: `
        <div class="grid grid-cols-12 gap-8">
            <app-header-widget class="col-span-12" />
            <app-stats-banking-widget />

            <div class="col-span-12 xl:col-span-4">
                <app-recent-transactions-widget />
            </div>
            <div class="col-span-12 xl:col-span-8">
                <app-overview-widget />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <app-recent-transactions-two-widget />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <app-monthly-payments-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BankingDashboard, { className: "BankingDashboard", filePath: "src/app/pages/dashboards/bankingdashboard.ts", lineNumber: 42 });
})();
export {
  BankingDashboard
};
//# sourceMappingURL=chunk-DZ4DVG2O.js.map
