import {
  ChartModule,
  UIChart
} from "./chunk-PMKJLHUI.js";
import {
  Knob,
  KnobModule
} from "./chunk-MICNJBMT.js";
import {
  LayoutService
} from "./chunk-ZELX54TV.js";
import {
  ProductService
} from "./chunk-LSICPM5K.js";
import {
  Rating,
  RatingModule
} from "./chunk-55AEHZQ4.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-VYTCGADS.js";
import "./chunk-HX6AAUEU.js";
import "./chunk-U3BOOR2A.js";
import "./chunk-ATTBT5LJ.js";
import "./chunk-M54353BN.js";
import "./chunk-S7EQZUZC.js";
import "./chunk-FT7WFYEI.js";
import "./chunk-H2TDPVQC.js";
import "./chunk-GM56SEQR.js";
import "./chunk-OYDBCBVT.js";
import {
  Select,
  SelectModule
} from "./chunk-ADT2GN44.js";
import "./chunk-X3MCY454.js";
import "./chunk-BICDQRLL.js";
import "./chunk-JPETFPPG.js";
import "./chunk-KG7RE235.js";
import "./chunk-UHMM7FE7.js";
import "./chunk-SUK52LSR.js";
import {
  Tag,
  TagModule
} from "./chunk-KX7MGO2E.js";
import "./chunk-3UGMWDW4.js";
import "./chunk-UONKXDMG.js";
import "./chunk-KFLL2YOX.js";
import "./chunk-WQC3TYUA.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-EXWZQDGS.js";
import {
  InputText,
  InputTextModule
} from "./chunk-YW263GEX.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HEGGX7RQ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-HZAHIETM.js";
import "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import {
  RippleModule
} from "./chunk-HURDVDQD.js";
import "./chunk-CUNICK74.js";
import {
  FilterMatchMode
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  debounceTime,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
} from "./chunk-5J4QQBGF.js";
import {
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/pages/dashboards/ecommerce/statswidget.ts
var _c0 = () => ({ strokeWidth: "2px", stroke: "var(--primary-color)" });
var _c1 = () => ({ strokeWidth: "1px", stroke: "var(--primary-color)" });
var _c2 = () => ({ strokeWidth: "1px", stroke: "var(--p-pink-500)" });
var StatsWidget = class _StatsWidget {
  knobValue = 80;
  static \u0275fac = function StatsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatsWidget, selectors: [["app-stats-widget"]], hostVars: 2, hostBindings: function StatsWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, decls: 59, vars: 12, consts: [[1, "col-span-12", "md:col-span-6", "xl:col-span-3"], [1, "card", "h-full"], [1, "font-semibold", "text-lg"], [1, "flex", "justify-between", "items-start", "mt-4"], [1, "w-6/12"], [1, "text-4xl", "font-bold", "text-surface-900", "dark:text-surface-0"], [1, "text-green-500"], [1, "font-medium"], [1, "pi", "pi-arrow-up", "text-xs", "ml-2"], ["width", "100%", "viewBox", "0 0 258 96", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827", "stroke", "10"], ["width", "100%", "viewBox", "0 0 115 41", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 35.6498L2.24444 32.4319C3.48889 29.214 5.97778 22.7782 8.46667 20.3627C10.9556 17.9473 13.4444 19.5522 15.9333 21.7663C18.4222 23.9803 20.9111 26.8035 23.4 30.6606C25.8889 34.5176 28.3778 39.4085 30.8667 37.2137C33.3556 35.0189 35.8444 25.7383 38.3333 26.3765C40.8222 27.0146 43.3111 37.5714 45.8 38.9013C48.2889 40.2311 50.7778 32.3341 53.2667 31.692C55.7556 31.0499 58.2444 37.6628 60.7333 39.4617C63.2222 41.2607 65.7111 38.2458 68.2 34.9205C70.6889 31.5953 73.1778 27.9597 75.6667 23.5955C78.1556 19.2313 80.6444 14.1385 83.1333 13.8875C85.6222 13.6365 88.1111 18.2272 90.6 20.2425C93.0889 22.2578 95.5778 21.6977 98.0667 18.8159C100.556 15.9341 103.044 10.7306 105.533 7.37432C108.022 4.01806 110.511 2.50903 111.756 1.75451L113 1"], [1, "text-pink-500"], [1, "pi", "pi-arrow-down", "text-xs", "ml-2"], ["d", "M1.5 1L2.74444 2.61495C3.98889 4.2299 6.47778 7.4598 8.96667 9.07151C11.4556 10.6832 13.9444 10.6767 16.4333 11.6127C18.9222 12.5487 21.4111 14.4271 23.9 16.6724C26.3889 18.9178 28.8778 21.5301 31.3667 20.1977C33.8556 18.8652 36.3444 13.5878 38.8333 11.3638C41.3222 9.13969 43.8111 9.96891 46.3 11.9894C48.7889 14.0099 51.2778 17.2217 53.7667 16.2045C56.2556 15.1873 58.7444 9.9412 61.2333 11.2783C63.7222 12.6155 66.2111 20.5359 68.7 21.4684C71.1889 22.401 73.6778 16.3458 76.1667 16.0009C78.6556 15.6561 81.1444 21.0217 83.6333 24.2684C86.1222 27.515 88.6111 28.6428 91.1 27.4369C93.5889 26.2311 96.0778 22.6916 98.5667 22.7117C101.056 22.7317 103.544 26.3112 106.033 29.7859C108.522 33.2605 111.011 36.6302 112.256 38.3151L113.5 40"], [1, "w-6/12", "text-right"], ["valueTemplate", "90%", "readonly", "", "styleClass", "-mt-8 ml-8", 3, "ngModelChange", "ngModel", "strokeWidth", "size"]], template: function StatsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
      \u0275\u0275text(7, "120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "span", 7);
      \u0275\u0275text(10, "+12%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 9);
      \u0275\u0275element(14, "path", 10);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "div", 0)(16, "div", 1)(17, "span", 2);
      \u0275\u0275text(18, "Revenue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 3)(20, "div", 4)(21, "span", 5);
      \u0275\u0275text(22, "$4500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 6)(24, "span", 7);
      \u0275\u0275text(25, "+20%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 11);
      \u0275\u0275element(29, "path", 12);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(30, "div", 0)(31, "div", 1)(32, "span", 2);
      \u0275\u0275text(33, "Visitors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 3)(35, "div", 4)(36, "span", 5);
      \u0275\u0275text(37, "360");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 13)(39, "span", 7);
      \u0275\u0275text(40, "+24%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "i", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 11);
      \u0275\u0275element(44, "path", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 0)(46, "div", 1)(47, "span", 2);
      \u0275\u0275text(48, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 3)(50, "div", 4)(51, "span", 5);
      \u0275\u0275text(52, "164");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 6)(54, "span", 7);
      \u0275\u0275text(55, "+30%");
      \u0275\u0275elementEnd();
      \u0275\u0275element(56, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 16)(58, "p-knob", 17);
      \u0275\u0275twoWayListener("ngModelChange", function StatsWidget_Template_p_knob_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.knobValue, $event) || (ctx.knobValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(15);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c1));
      \u0275\u0275advance(15);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(11, _c2));
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.knobValue);
      \u0275\u0275property("strokeWidth", 2)("size", 90);
    }
  }, dependencies: [CommonModule, KnobModule, Knob, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-stats-widget",
      imports: [CommonModule, KnobModule, FormsModule],
      template: ` <div class="col-span-12 md:col-span-6 xl:col-span-3">
            <div class="card h-full">
                <span class="font-semibold text-lg">Sales</span>
                <div class="flex justify-between items-start mt-4">
                    <div class="w-6/12">
                        <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">120</span>
                        <div class="text-green-500">
                            <span class="font-medium">+12%</span>
                            <i class="pi pi-arrow-up text-xs ml-2"></i>
                        </div>
                    </div>
                    <div class="w-6/12">
                        <svg width="100%" viewBox="0 0 258 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 93.9506L4.5641 94.3162C8.12821 94.6817 15.2564 95.4128 22.3846 89.6451C29.5128 83.8774 36.641 71.6109 43.7692 64.4063C50.8974 57.2018 58.0256 55.0592 65.1538 58.9268C72.2821 62.7945 79.4103 72.6725 86.5385 73.5441C93.6667 74.4157 100.795 66.2809 107.923 65.9287C115.051 65.5765 122.179 73.0068 129.308 66.8232C136.436 60.6396 143.564 40.8422 150.692 27.9257C157.821 15.0093 164.949 8.97393 172.077 6.43766C179.205 3.9014 186.333 4.86425 193.462 12.0629C200.59 19.2616 207.718 32.696 214.846 31.0487C221.974 29.4014 229.103 12.6723 236.231 5.64525C243.359 -1.38178 250.487 1.29325 254.051 2.63076L257.615 3.96827"
                                [style]="{
                                    strokeWidth: '2px',
                                    stroke: 'var(--primary-color)'
                                }"
                                stroke="10"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-3">
            <div class="card h-full">
                <span class="font-semibold text-lg">Revenue</span>
                <div class="flex justify-between items-start mt-4">
                    <div class="w-6/12">
                        <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">$4500</span>
                        <div class="text-green-500">
                            <span class="font-medium">+20%</span>
                            <i class="pi pi-arrow-up text-xs ml-2"></i>
                        </div>
                    </div>
                    <div class="w-6/12">
                        <svg width="100%" viewBox="0 0 115 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 35.6498L2.24444 32.4319C3.48889 29.214 5.97778 22.7782 8.46667 20.3627C10.9556 17.9473 13.4444 19.5522 15.9333 21.7663C18.4222 23.9803 20.9111 26.8035 23.4 30.6606C25.8889 34.5176 28.3778 39.4085 30.8667 37.2137C33.3556 35.0189 35.8444 25.7383 38.3333 26.3765C40.8222 27.0146 43.3111 37.5714 45.8 38.9013C48.2889 40.2311 50.7778 32.3341 53.2667 31.692C55.7556 31.0499 58.2444 37.6628 60.7333 39.4617C63.2222 41.2607 65.7111 38.2458 68.2 34.9205C70.6889 31.5953 73.1778 27.9597 75.6667 23.5955C78.1556 19.2313 80.6444 14.1385 83.1333 13.8875C85.6222 13.6365 88.1111 18.2272 90.6 20.2425C93.0889 22.2578 95.5778 21.6977 98.0667 18.8159C100.556 15.9341 103.044 10.7306 105.533 7.37432C108.022 4.01806 110.511 2.50903 111.756 1.75451L113 1"
                                [style]="{
                                    strokeWidth: '1px',
                                    stroke: 'var(--primary-color)'
                                }"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-3">
            <div class="card h-full">
                <span class="font-semibold text-lg">Visitors</span>
                <div class="flex justify-between items-start mt-4">
                    <div class="w-6/12">
                        <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">360</span>
                        <div class="text-pink-500">
                            <span class="font-medium">+24%</span>
                            <i class="pi pi-arrow-down text-xs ml-2"></i>
                        </div>
                    </div>
                    <div class="w-6/12">
                        <svg width="100%" viewBox="0 0 115 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 1L2.74444 2.61495C3.98889 4.2299 6.47778 7.4598 8.96667 9.07151C11.4556 10.6832 13.9444 10.6767 16.4333 11.6127C18.9222 12.5487 21.4111 14.4271 23.9 16.6724C26.3889 18.9178 28.8778 21.5301 31.3667 20.1977C33.8556 18.8652 36.3444 13.5878 38.8333 11.3638C41.3222 9.13969 43.8111 9.96891 46.3 11.9894C48.7889 14.0099 51.2778 17.2217 53.7667 16.2045C56.2556 15.1873 58.7444 9.9412 61.2333 11.2783C63.7222 12.6155 66.2111 20.5359 68.7 21.4684C71.1889 22.401 73.6778 16.3458 76.1667 16.0009C78.6556 15.6561 81.1444 21.0217 83.6333 24.2684C86.1222 27.515 88.6111 28.6428 91.1 27.4369C93.5889 26.2311 96.0778 22.6916 98.5667 22.7117C101.056 22.7317 103.544 26.3112 106.033 29.7859C108.522 33.2605 111.011 36.6302 112.256 38.3151L113.5 40"
                                [style]="{
                                    strokeWidth: '1px',
                                    stroke: 'var(--p-pink-500)'
                                }"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-3">
            <div class="card h-full">
                <span class="font-semibold text-lg">Stock</span>
                <div class="flex justify-between items-start mt-4">
                    <div class="w-6/12">
                        <span class="text-4xl font-bold text-surface-900 dark:text-surface-0">164</span>
                        <div class="text-green-500">
                            <span class="font-medium">+30%</span>
                            <i class="pi pi-arrow-up text-xs ml-2"></i>
                        </div>
                    </div>
                    <div class="w-6/12 text-right">
                        <p-knob [(ngModel)]="knobValue" valueTemplate="90%" readonly [strokeWidth]="2" [size]="90" styleClass="-mt-8 ml-8" />
                    </div>
                </div>
            </div>
        </div>`,
      host: {
        "[style.display]": '"contents"'
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatsWidget, { className: "StatsWidget", filePath: "src/app/pages/dashboards/ecommerce/statswidget.ts", lineNumber: 107 });
})();

// src/app/pages/dashboards/ecommerce/recentsaleswidget.ts
var _c02 = ["dt"];
var _c12 = () => ({ borderRadius: "2rem" });
var _c22 = () => ["name", "category", "price", "inventoryStatus"];
function RecentSalesWidget_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11)(2, "span", 12);
    \u0275\u0275text(3, "Name ");
    \u0275\u0275element(4, "p-sortIcon", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 14)(6, "span", 12);
    \u0275\u0275text(7, "Category ");
    \u0275\u0275element(8, "p-sortIcon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 16)(10, "span", 12);
    \u0275\u0275text(11, "Price ");
    \u0275\u0275element(12, "p-sortIcon", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 18)(14, "span", 12);
    \u0275\u0275text(15, "Status ");
    \u0275\u0275element(16, "p-sortIcon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "View");
    \u0275\u0275elementEnd()();
  }
}
function RecentSalesWidget_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 21)(9, "p-tag", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 23);
    \u0275\u0275element(12, "p-button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, product_r3.price, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("severity", ctx_r3.getBadgeSeverity(product_r3.inventoryStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r3.inventoryStatus);
  }
}
var RecentSalesWidget = class _RecentSalesWidget {
  productService;
  products;
  filterSalesTable = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  };
  cols;
  exportColumns;
  dt;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products = data);
    this.cols = [
      {
        field: "code",
        header: "Code",
        customExportHeader: "Product Code"
      },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "price", header: "Price" },
      { field: "inventoryStatus", header: "Inventory Status" }
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field
    }));
  }
  onFilterGlobal(event) {
    const target = event.target;
    if (target) {
      this.dt.filterGlobal(target.value, "contains");
    }
  }
  getBadgeSeverity(inventoryStatus) {
    switch (inventoryStatus.toLowerCase()) {
      case "instock":
        return "success";
      case "lowstock":
        return "warn";
      case "outofstock":
        return "danger";
      default:
        return "info";
    }
  }
  static \u0275fac = function RecentSalesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecentSalesWidget)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentSalesWidget, selectors: [["app-recent-sales-widget"]], viewQuery: function RecentSalesWidget_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 15, vars: 10, consts: [["dt", ""], ["header", ""], ["body", ""], [1, "card"], [1, "flex", "flex-col", "md:flex-row", "md:items-start", "md:justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4", "md:mb-0"], [1, "inline-flex", "items-center"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "w-full", 3, "input"], ["icon", "pi pi-upload", "rounded", "", "pTooltip", "Export", 1, "mx-4", "export-target-button", 3, "click"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows", "columns", "globalFilterFields", "exportHeader"], ["pSortableColumn", "name"], [1, "flex", "items-center", "gap-2"], ["field", "name"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "status"], ["field", "status"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [3, "severity"], [2, "width", "15%"], ["icon", "pi pi-search", "outlined", "", "rounded", ""]], template: function RecentSalesWidget_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
      \u0275\u0275text(3, " Recent Sales ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "p-iconfield");
      \u0275\u0275element(6, "p-inputicon", 7);
      \u0275\u0275elementStart(7, "input", 8);
      \u0275\u0275listener("input", function RecentSalesWidget_Template_input_input_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFilterGlobal($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p-button", 9);
      \u0275\u0275listener("click", function RecentSalesWidget_Template_p_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        const dt_r2 = \u0275\u0275reference(10);
        return \u0275\u0275resetView(dt_r2.exportCSV());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "p-table", 10, 0);
      \u0275\u0275template(11, RecentSalesWidget_ng_template_11_Template, 19, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, RecentSalesWidget_ng_template_13_Template, 13, 8, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c12));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.products)("paginator", true)("rows", 5)("columns", ctx.cols)("globalFilterFields", \u0275\u0275pureFunction0(9, _c22))("exportHeader", "customExportHeader");
    }
  }, dependencies: [
    CommonModule,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    ButtonModule,
    Button,
    RippleModule,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    InputTextModule,
    InputText,
    FormsModule,
    TooltipModule,
    Tooltip,
    TagModule,
    Tag,
    CurrencyPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecentSalesWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-recent-sales-widget",
      imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        RippleModule,
        IconFieldModule,
        InputIconModule,
        InputTextModule,
        FormsModule,
        TooltipModule,
        TagModule
      ],
      template: ` <div class="card">
        <div
            class="flex flex-col md:flex-row md:items-start md:justify-between mb-4"
        >
            <div
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4 md:mb-0"
            >
                Recent Sales
            </div>
            <div class="inline-flex items-center">
                <p-iconfield>
                    <p-inputicon class="pi pi-search" />
                    <input
                        pInputText
                        type="text"
                        (input)="onFilterGlobal($event)"
                        placeholder="Search"
                        [style]="{ borderRadius: '2rem' }"
                        class="w-full"
                    />
                </p-iconfield>
                <p-button
                    icon="pi pi-upload"
                    class="mx-4 export-target-button"
                    rounded
                    pTooltip="Export"
                    (click)="dt.exportCSV()"
                />
            </div>
        </div>
        <p-table
            #dt
            [value]="products"
            [paginator]="true"
            [rows]="5"
            [columns]="cols"
            responsiveLayout="scroll"
            [globalFilterFields]="[
                'name',
                'category',
                'price',
                'inventoryStatus',
            ]"
            [exportHeader]="'customExportHeader'"
        >
            <ng-template #header>
                <tr>
                    <th pSortableColumn="name">
                        <span class="flex items-center gap-2">Name <p-sortIcon field="name"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="category">
                        <span class="flex items-center gap-2">Category <p-sortIcon field="category"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="price">
                        <span class="flex items-center gap-2">Price <p-sortIcon field="price"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="status">
                        <span class="flex items-center gap-2">Status <p-sortIcon field="status"></p-sortIcon></span>
                    </th>
                    <th>View</th>
                </tr>
            </ng-template>
            <ng-template #body let-product>
                <tr>
                    <td style="width: 35%; min-width: 7rem;">
                        {{ product.name }}
                    </td>
                    <td style="width: 35%; min-width: 7rem;">
                        {{ product.category }}
                    </td>
                    <td style="width: 35%; min-width: 8rem;">
                        {{ product.price | currency: 'USD' }}
                    </td>
                    <td style="width: 35%; min-width: 8rem;">
                        <p-tag
                            [severity]="
                                getBadgeSeverity(product.inventoryStatus)
                            "
                            >{{ product.inventoryStatus }}</p-tag
                        >
                    </td>
                    <td style="width: 15%;">
                        <p-button icon="pi pi-search" outlined rounded />
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
      providers: [ProductService]
    }]
  }], () => [{ type: ProductService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentSalesWidget, { className: "RecentSalesWidget", filePath: "src/app/pages/dashboards/ecommerce/recentsaleswidget.ts", lineNumber: 131 });
})();

// src/app/pages/dashboards/ecommerce/revenueoverviewwidget.ts
var RevenueOverViewWidget = class _RevenueOverViewWidget {
  layoutService;
  weeks = [
    {
      label: "Last Week",
      value: 0,
      data: [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ]
    },
    {
      label: "This Week",
      value: 1,
      data: [
        [35, 19, 40, 61, 16, 55, 30],
        [48, 78, 10, 29, 76, 77, 10]
      ]
    }
  ];
  selectedWeek = this.weeks[0];
  barData;
  barOptions;
  subscription;
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.initChart();
    this.selectedWeek = this.weeks[0];
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    this.barData = {
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-500"),
          barThickness: 12,
          borderRadius: 12,
          data: this.selectedWeek?.data[0]
        },
        {
          label: "Profit",
          backgroundColor: documentStyle.getPropertyValue("--p-primary-200"),
          barThickness: 12,
          borderRadius: 12,
          data: this.selectedWeek?.data[1]
        }
      ]
    };
    this.barOptions = {
      animation: {
        duration: 0
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: {
              weight: 700
            },
            padding: 28
          },
          position: "bottom"
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
  onWeekChange() {
    let newBarData = __spreadValues({}, this.barData);
    newBarData.datasets[0].data = this.selectedWeek.data[0];
    newBarData.datasets[1].data = this.selectedWeek.data[1];
    this.barData = newBarData;
    this.initChart();
  }
  static \u0275fac = function RevenueOverViewWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevenueOverViewWidget)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RevenueOverViewWidget, selectors: [["app-revenue-overview-widget"]], decls: 6, vars: 4, consts: [[1, "card", "h-full"], [1, "flex", "items-start", "justify-between", "mb-12"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], ["optionLabel", "label", 1, "w-40", 3, "ngModelChange", "onChange", "options", "ngModel"], ["type", "bar", "height", "300", 3, "data", "options"]], template: function RevenueOverViewWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Revenue Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function RevenueOverViewWidget_Template_p_select_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedWeek, $event) || (ctx.selectedWeek = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function RevenueOverViewWidget_Template_p_select_onChange_4_listener() {
        return ctx.onWeekChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275element(5, "p-chart", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.weeks);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedWeek);
      \u0275\u0275advance();
      \u0275\u0275property("data", ctx.barData)("options", ctx.barOptions);
    }
  }, dependencies: [SelectModule, Select, ChartModule, UIChart, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevenueOverViewWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-revenue-overview-widget",
      imports: [SelectModule, ChartModule, FormsModule],
      template: ` <div class="card h-full">
        <div class="flex items-start justify-between mb-12">
            <span
                class="text-surface-900 dark:text-surface-0 text-xl font-semibold"
                >Revenue Overview</span
            >
            <p-select
                [options]="weeks"
                [(ngModel)]="selectedWeek"
                class="w-40"
                optionLabel="label"
                (onChange)="onWeekChange()"
            ></p-select>
        </div>
        <p-chart
            type="bar"
            height="300"
            [data]="barData"
            [options]="barOptions"
        ></p-chart>
    </div>`
    }]
  }], () => [{ type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RevenueOverViewWidget, { className: "RevenueOverViewWidget", filePath: "src/app/pages/dashboards/ecommerce/revenueoverviewwidget.ts", lineNumber: 40 });
})();

// src/app/pages/dashboards/ecommerce/salesbycategorywidget.ts
var SalesByCategoryWidget = class _SalesByCategoryWidget {
  layoutService;
  pieData;
  pieOptions;
  subscription;
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(50)).subscribe(() => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.initChart();
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    this.pieData = {
      labels: ["Electronics", "Fashion", "Household"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--p-primary-700"),
            documentStyle.getPropertyValue("--p-primary-400"),
            documentStyle.getPropertyValue("--p-primary-100")
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--p-primary-600"),
            documentStyle.getPropertyValue("--p-primary-300"),
            documentStyle.getPropertyValue("--p-primary-200")
          ]
        }
      ]
    };
    this.pieOptions = {
      animation: {
        duration: 0
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
            font: {
              weight: 700
            },
            padding: 28
          },
          position: "bottom"
        }
      }
    };
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function SalesByCategoryWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SalesByCategoryWidget)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesByCategoryWidget, selectors: [["app-sales-by-category-widget"]], decls: 4, vars: 2, consts: [[1, "card", "h-full"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-12"], ["type", "pie", "height", "300", 3, "data", "options"]], template: function SalesByCategoryWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Sales by Category ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p-chart", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("data", ctx.pieData)("options", ctx.pieOptions);
    }
  }, dependencies: [ChartModule, UIChart], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SalesByCategoryWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-sales-by-category-widget",
      imports: [ChartModule],
      template: ` <div class="card h-full">
        <div
            class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-12"
        >
            Sales by Category
        </div>
        <p-chart
            type="pie"
            [data]="pieData"
            height="300"
            [options]="pieOptions"
        ></p-chart>
    </div>`
    }]
  }], () => [{ type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesByCategoryWidget, { className: "SalesByCategoryWidget", filePath: "src/app/pages/dashboards/ecommerce/salesbycategorywidget.ts", lineNumber: 24 });
})();

// src/app/pages/dashboards/ecommerce/topproductswidget.ts
function TopProductsWidget_ng_container_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5)(1, "div", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementStart(3, "div", 8)(4, "span", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-rating", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TopProductsWidget_ng_container_4_li_1_Template_p_rating_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const product_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.rating, $event) || (product_r2.rating = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r2.image, \u0275\u0275sanitizeUrl)("alt", product_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", product_r2.rating);
    \u0275\u0275property("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(9, 6, product_r2.price, "USD", "symbol", "1.0-0"), " ");
  }
}
function TopProductsWidget_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TopProductsWidget_ng_container_4_li_1_Template, 10, 11, "li", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 < 6);
  }
}
var TopProductsWidget = class _TopProductsWidget {
  productService;
  products;
  constructor(productService) {
    this.productService = productService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((data) => this.products = data);
  }
  static \u0275fac = function TopProductsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopProductsWidget)(\u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopProductsWidget, selectors: [["app-top-products-widget"]], features: [\u0275\u0275ProvidersFeature([ProductService])], decls: 5, vars: 1, consts: [[1, "card", "h-full"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], [1, "list-none", "p-0", "m-0"], [4, "ngFor", "ngForOf"], ["class", "flex items-center justify-between p-4", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "p-4"], [1, "inline-flex", "items-center"], ["width", "75", 1, "shadow", "shrink-0", 3, "src", "alt"], [1, "flex", "flex-col", "ml-4"], [1, "font-medium", "text-lg", "mb-1"], [3, "ngModelChange", "ngModel", "readonly"], [1, "ml-auto", "font-semibold", "text-xl", "p-text-secondary"]], template: function TopProductsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, " Top Products ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 2);
      \u0275\u0275template(4, TopProductsWidget_ng_container_4_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.products);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RatingModule, Rating, FormsModule, NgControlStatus, NgModel, CurrencyPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopProductsWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-top-products-widget",
      imports: [CommonModule, RatingModule, FormsModule],
      template: `<div class="card h-full">
        <div
            class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4"
        >
            Top Products
        </div>
        <ul class="list-none p-0 m-0">
            <ng-container *ngFor="let product of products; let i = index">
                <li *ngIf="i < 6" class="flex items-center justify-between p-4">
                    <div class="inline-flex items-center">
                        <img
                  [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                            [alt]="product.name"
                            width="75"
                            class="shadow shrink-0"
                        />
                        <div class="flex flex-col ml-4">
                            <span class="font-medium text-lg mb-1">{{
                                product.name
                            }}</span>
                            <p-rating
                                [(ngModel)]="product.rating"
                                [readonly]="true"
                            ></p-rating>
                        </div>
                    </div>
                    <span
                        class="ml-auto font-semibold text-xl p-text-secondary"
                    >
                    {{ product.price | currency:'USD':'symbol':'1.0-0' }}
                    </span>
                </li>
            </ng-container>
        </ul>
    </div> `,
      providers: [ProductService]
    }]
  }], () => [{ type: ProductService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopProductsWidget, { className: "TopProductsWidget", filePath: "src/app/pages/dashboards/ecommerce/topproductswidget.ts", lineNumber: 48 });
})();

// src/app/pages/dashboards/ecommercedashboard.ts
var EcommerceDashboard = class _EcommerceDashboard {
  static \u0275fac = function EcommerceDashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EcommerceDashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EcommerceDashboard, selectors: [["app-ecommerce-dashboard"]], decls: 10, vars: 0, consts: [[1, "grid", "grid-cols-12", "gap-8"], [1, "col-span-12", "xl:col-span-9"], [1, "col-span-12", "xl:col-span-3"], [1, "col-span-12", "lg:col-span-7"], [1, "col-span-12", "lg:col-span-5"]], template: function EcommerceDashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-stats-widget");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-revenue-overview-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2);
      \u0275\u0275element(5, "app-sales-by-category-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275element(7, "app-recent-sales-widget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "app-top-products-widget");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [StatsWidget, RecentSalesWidget, RevenueOverViewWidget, SalesByCategoryWidget, TopProductsWidget], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EcommerceDashboard, [{
    type: Component,
    args: [{
      selector: "app-ecommerce-dashboard",
      standalone: true,
      imports: [StatsWidget, RecentSalesWidget, RevenueOverViewWidget, SalesByCategoryWidget, TopProductsWidget],
      template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget />
            <div class="col-span-12 xl:col-span-9">
            <app-revenue-overview-widget />
        </div>
        <div class="col-span-12 xl:col-span-3">
            <app-sales-by-category-widget />
        </div>
            <div class="col-span-12 lg:col-span-7">
                <app-recent-sales-widget />

            </div>
            <div class="col-span-12 lg:col-span-5">
            <app-top-products-widget />
        </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EcommerceDashboard, { className: "EcommerceDashboard", filePath: "src/app/pages/dashboards/ecommercedashboard.ts", lineNumber: 31 });
})();
export {
  EcommerceDashboard
};
//# sourceMappingURL=chunk-SZW7N74A.js.map
