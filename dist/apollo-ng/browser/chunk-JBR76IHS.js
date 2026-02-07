import {
  CustomerService
} from "./chunk-CC4A6CJQ.js";
import {
  MultiSelect,
  MultiSelectModule,
  Slider,
  SliderModule
} from "./chunk-KAXHYRHY.js";
import {
  ProductService
} from "./chunk-LSICPM5K.js";
import {
  Rating,
  RatingModule
} from "./chunk-55AEHZQ4.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-UXWH3647.js";
import "./chunk-IFPN5NGS.js";
import {
  ToastModule
} from "./chunk-ZG66MDSF.js";
import "./chunk-KZ2XEJBQ.js";
import {
  ColumnFilter,
  FrozenColumn,
  RowGroupHeader,
  RowToggler,
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
import {
  ToggleButton,
  ToggleButtonModule
} from "./chunk-KFLL2YOX.js";
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
import "./chunk-HZAHIETM.js";
import "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonDirective,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HURDVDQD.js";
import "./chunk-CUNICK74.js";
import {
  ConfirmationService,
  MessageService
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
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
import "./chunk-4MWRP73S.js";

// src/app/pages/uikit/tabledemo.ts
var _c0 = ["filter"];
var _c1 = () => ["name", "country.name", "representative.name", "status"];
var _c2 = () => ({ "min-width": "60rem" });
var _c3 = () => ({ "min-width": "12rem" });
var _c4 = () => ({ height: "0.5rem" });
var _c5 = (a0, a1) => ({ "text-green-500 pi-check-circle": a0, "text-red-500 pi-times-circle": a1 });
var _c6 = (a0) => ({ "font-bold": a0 });
function TableDemo_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function TableDemo_ng_template_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt1_r4 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(ctx_r2.clear(dt1_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield", 20)(3, "p-inputicon");
    \u0275\u0275element(4, "i", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 22);
    \u0275\u0275listener("input", function TableDemo_ng_template_5_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      const dt1_r4 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(ctx_r2.onGlobalFilter(dt1_r4, $event));
    });
    \u0275\u0275elementEnd()()();
  }
}
function TableDemo_ng_template_7_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 37);
    \u0275\u0275text(2, "Agent Picker");
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_7_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "img", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", option_r7.image), \u0275\u0275sanitizeUrl)("alt", option_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r7.name);
  }
}
function TableDemo_ng_template_7_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multi-select", 38);
    \u0275\u0275listener("onChange", function TableDemo_ng_template_7_ng_template_15_Template_p_multi_select_onChange_0_listener($event) {
      const filter_r6 = \u0275\u0275restoreView(_r5).filterCallback;
      return \u0275\u0275resetView(filter_r6($event.value));
    });
    \u0275\u0275template(1, TableDemo_ng_template_7_ng_template_15_ng_template_1_Template, 4, 4, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", value_r8)("options", ctx_r2.representatives);
  }
}
function TableDemo_ng_template_7_ng_template_29_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275classMap("customer-badge status-" + option_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r11.label);
  }
}
function TableDemo_ng_template_7_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 41);
    \u0275\u0275listener("onChange", function TableDemo_ng_template_7_ng_template_29_Template_p_select_onChange_0_listener($event) {
      const filter_r10 = \u0275\u0275restoreView(_r9).filterCallback;
      return \u0275\u0275resetView(filter_r10($event.value));
    });
    \u0275\u0275template(1, TableDemo_ng_template_7_ng_template_29_ng_template_1_Template, 2, 3, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275property("ngModel", value_r12)("options", ctx_r2.statuses);
  }
}
function TableDemo_ng_template_7_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-slider", 42);
    \u0275\u0275listener("onSlideEnd", function TableDemo_ng_template_7_ng_template_35_Template_p_slider_onSlideEnd_0_listener($event) {
      const filter_r14 = \u0275\u0275restoreView(_r13).filterCallback;
      return \u0275\u0275resetView(filter_r14($event.values));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 43)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c3));
    \u0275\u0275property("ngModel", ctx_r2.activityValues)("range", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.activityValues[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activityValues[1]);
  }
}
function TableDemo_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 23)(2, "div", 24);
    \u0275\u0275text(3, " Name ");
    \u0275\u0275element(4, "p-columnFilter", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 23)(6, "div", 24);
    \u0275\u0275text(7, " Country ");
    \u0275\u0275element(8, "p-columnFilter", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 27)(10, "div", 24);
    \u0275\u0275text(11, " Agent ");
    \u0275\u0275elementStart(12, "p-columnFilter", 28);
    \u0275\u0275template(13, TableDemo_ng_template_7_ng_template_13_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, TableDemo_ng_template_7_ng_template_15_Template, 3, 2, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "th", 29)(18, "div", 24);
    \u0275\u0275text(19, " Date ");
    \u0275\u0275element(20, "p-columnFilter", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 29)(22, "div", 24);
    \u0275\u0275text(23, " Balance ");
    \u0275\u0275element(24, "p-columnFilter", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "th", 23)(26, "div", 24);
    \u0275\u0275text(27, " Status ");
    \u0275\u0275elementStart(28, "p-columnFilter", 32);
    \u0275\u0275template(29, TableDemo_ng_template_7_ng_template_29_Template, 3, 5, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "th", 23)(32, "div", 24);
    \u0275\u0275text(33, " Activity ");
    \u0275\u0275elementStart(34, "p-columnFilter", 33);
    \u0275\u0275template(35, TableDemo_ng_template_7_ng_template_35_Template, 6, 7, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "th", 34)(38, "div", 24);
    \u0275\u0275text(39, " Verified ");
    \u0275\u0275element(40, "p-columnFilter", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("showMatchModes", false)("showOperator", false)("showAddButton", false);
    \u0275\u0275advance(22);
    \u0275\u0275property("showMatchModes", false)("showOperator", false)("showAddButton", false);
  }
}
function TableDemo_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 44);
    \u0275\u0275element(5, "img", 45);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td")(9, "div", 44);
    \u0275\u0275element(10, "img", 46);
    \u0275\u0275elementStart(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275element(22, "p-progressbar", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "span", 50);
    \u0275\u0275element(25, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customer_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", customer_r15.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("flag flag-" + customer_r15.country.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r15.country.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", customer_r15.representative.image), \u0275\u0275sanitizeUrl)("alt", customer_r15.representative.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r15.representative.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 17, customer_r15.date, "MM/dd/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(18, 20, customer_r15.balance, "USD", "symbol"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", customer_r15.status.toLowerCase())("severity", ctx_r2.getSeverity(customer_r15.status));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(24, _c4));
    \u0275\u0275property("value", customer_r15.activity)("showValue", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c5, customer_r15.verified, !customer_r15.verified));
  }
}
function TableDemo_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2, "No customers found.");
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2, "Loading customers data. Please wait.");
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 53);
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 54);
    \u0275\u0275text(4, "Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 55);
    \u0275\u0275text(6, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 55);
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 55);
    \u0275\u0275text(10, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 55);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 55);
    \u0275\u0275text(14, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 55);
    \u0275\u0275text(16, "Representative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 56);
    \u0275\u0275text(18, "Balance");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("frozen", ctx_r2.balanceFrozen)("ngClass", \u0275\u0275pureFunction1(2, _c6, ctx_r2.balanceFrozen));
  }
}
function TableDemo_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 58);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", customer_r16.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.activity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r16.representative.name);
    \u0275\u0275advance();
    \u0275\u0275property("frozen", ctx_r2.balanceFrozen)("ngClass", \u0275\u0275pureFunction1(11, _c6, ctx_r2.balanceFrozen));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatCurrency(customer_r16.balance), " ");
  }
}
function TableDemo_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "p-button", 60);
    \u0275\u0275listener("onClick", function TableDemo_ng_template_28_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandAll());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 61);
    \u0275\u0275listener("onClick", function TableDemo_ng_template_28_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.collapseAll());
    });
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 62);
    \u0275\u0275elementStart(2, "th", 63)(3, "span", 44);
    \u0275\u0275text(4, "Name ");
    \u0275\u0275element(5, "p-sortIcon", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 65)(9, "span", 44);
    \u0275\u0275text(10, "Price ");
    \u0275\u0275element(11, "p-sortIcon", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "th", 67)(13, "span", 44);
    \u0275\u0275text(14, "Category ");
    \u0275\u0275element(15, "p-sortIcon", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "th", 69)(17, "span", 44);
    \u0275\u0275text(18, "Reviews ");
    \u0275\u0275element(19, "p-sortIcon", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "th", 71)(21, "span", 44);
    \u0275\u0275text(22, "Status ");
    \u0275\u0275element(23, "p-sortIcon", 72);
    \u0275\u0275elementEnd()()();
  }
}
function TableDemo_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-button", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "img", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-rating", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "p-tag", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const expanded_r19 = ctx.expanded;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("pRowToggler", product_r18)("text", true)("rounded", true)("plain", true)("icon", expanded_r19 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "https://primefaces.org/cdn/primeng/images/demo/product/" + product_r18.image, \u0275\u0275sanitizeUrl)("alt", product_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 14, product_r18.price, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r18.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", product_r18.rating)("readonly", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", product_r18.inventoryStatus)("severity", ctx_r2.getSeverity(product_r18.inventoryStatus));
  }
}
function TableDemo_ng_template_34_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 79)(2, "span", 44);
    \u0275\u0275text(3, "Id ");
    \u0275\u0275element(4, "p-sortIcon", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 81)(6, "span", 44);
    \u0275\u0275text(7, "Customer ");
    \u0275\u0275element(8, "p-sortIcon", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 83)(10, "span", 44);
    \u0275\u0275text(11, "Date ");
    \u0275\u0275element(12, "p-sortIcon", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 85)(14, "span", 44);
    \u0275\u0275text(15, "Amount ");
    \u0275\u0275element(16, "p-sortIcon", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 87)(18, "span", 44);
    \u0275\u0275text(19, "Status ");
    \u0275\u0275element(20, "p-sortIcon", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "th", 89);
    \u0275\u0275elementEnd();
  }
}
function TableDemo_ng_template_34_ng_template_8_Template(rf, ctx) {
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
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-button", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r20.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r20.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r20.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, order_r20.amount, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", order_r20.status)("severity", ctx_r2.getSeverity(order_r20.status));
  }
}
function TableDemo_ng_template_34_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 91);
    \u0275\u0275text(2, "There are no order for this product yet.");
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 76)(2, "div", 77)(3, "h5");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-table", 78);
    \u0275\u0275template(6, TableDemo_ng_template_34_ng_template_6_Template, 22, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, TableDemo_ng_template_34_ng_template_8_Template, 14, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, TableDemo_ng_template_34_ng_template_10_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Orders for ", product_r21.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", product_r21.orders);
  }
}
function TableDemo_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Date");
    \u0275\u0275elementEnd()();
  }
}
function TableDemo_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 92)(1, "td", 93)(2, "div", 44);
    \u0275\u0275element(3, "img", 46);
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const customer_r22 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", customer_r22.representative.image), \u0275\u0275sanitizeUrl)("alt", customer_r22.representative.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r22.representative.name);
  }
}
function TableDemo_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Total Customers: ", ctx_r2.calculateCustomerTotal(customer_r23.representative.name), " ");
  }
}
function TableDemo_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 44);
    \u0275\u0275element(5, "img", 95);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", customer_r24.name, " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("flag flag-" + customer_r24.country.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r24.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", customer_r24.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", customer_r24.status)("severity", ctx_r2.getSeverity(customer_r24.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", customer_r24.date, " ");
  }
}
var TableDemo = class _TableDemo {
  customerService;
  productService;
  customers1 = [];
  customers2 = [];
  customers3 = [];
  representatives = [];
  statuses = [];
  products = [];
  rowGroupMetadata;
  expandedRows = {};
  activityValues = [0, 100];
  balanceFrozen = false;
  loading = true;
  filter;
  constructor(customerService, productService) {
    this.customerService = customerService;
    this.productService = productService;
  }
  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers1 = customers;
      this.loading = false;
      this.customers1.forEach((customer) => customer.date = new Date(customer.date));
    });
    this.customerService.getCustomersMedium().then((customers) => this.customers2 = customers);
    this.customerService.getCustomersLarge().then((customers) => this.customers3 = customers);
    this.productService.getProductsWithOrdersSmall().then((data) => this.products = data);
    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" }
    ];
    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" }
    ];
  }
  onSort() {
    this.updateRowGroupMetaData();
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || "";
        if (i === 0) {
          this.rowGroupMetadata[representativeName] = {
            index: 0,
            size: 1
          };
        } else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          } else {
            this.rowGroupMetadata[representativeName] = {
              index: i,
              size: 1
            };
          }
        }
      }
    }
  }
  formatCurrency(value) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  clear(table) {
    table.clear();
    this.filter.nativeElement.value = "";
  }
  getSeverity(status) {
    switch (status) {
      case "qualified":
      case "instock":
      case "INSTOCK":
      case "DELIVERED":
      case "delivered":
        return "success";
      case "negotiation":
      case "lowstock":
      case "LOWSTOCK":
      case "PENDING":
      case "pending":
        return "warn";
      case "unqualified":
      case "outofstock":
      case "OUTOFSTOCK":
      case "CANCELLED":
      case "cancelled":
        return "danger";
      default:
        return "info";
    }
  }
  calculateCustomerTotal(name) {
    let total = 0;
    if (this.customers2) {
      for (let customer of this.customers2) {
        if (customer.representative?.name === name) {
          total++;
        }
      }
    }
    return total;
  }
  expandAll() {
    this.expandedRows = this.products.reduce((acc, p) => {
      if (p.id) {
        acc[p.id] = true;
      }
      return acc;
    }, {});
  }
  collapseAll() {
    this.expandedRows = {};
  }
  static \u0275fac = function TableDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableDemo)(\u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(ProductService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableDemo, selectors: [["app-table-demo"]], viewQuery: function TableDemo_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.filter = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, CustomerService, ProductService])], decls: 48, vars: 21, consts: [["dt1", ""], ["caption", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["loadingbody", ""], ["expandedrow", ""], ["groupheader", ""], ["groupfooter", ""], ["filter", ""], ["item", ""], [1, "card"], [1, "font-semibold", "text-xl", "mb-4"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "showGridlines", "paginator", "globalFilterFields"], ["offIcon", "pi pi-lock-open", "offLabel", "Balance", 3, "ngModelChange", "ngModel", "onIcon", "onLabel"], ["scrollHeight", "400px", "styleClass", "mt-4", 3, "value", "scrollable"], ["dataKey", "id", 3, "value", "tableStyle", "expandedRowKeys"], ["sortField", "representative.name", "sortMode", "single", "scrollHeight", "400px", "rowGroupMode", "subheader", "groupRowsBy", "representative.name", 3, "value", "scrollable", "tableStyle"], [1, "flex", "justify-between", "items-center", "flex-col", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], ["iconPosition", "left", 1, "ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search keyword", 3, "input"], [2, "min-width", "12rem"], [1, "flex", "justify-between", "items-center"], ["type", "text", "field", "name", "display", "menu", "placeholder", "Search by name"], ["type", "text", "field", "country.name", "display", "menu", "placeholder", "Search by country"], [2, "min-width", "14rem"], ["field", "representative", "matchMode", "in", "display", "menu", 3, "showMatchModes", "showOperator", "showAddButton"], [2, "min-width", "10rem"], ["type", "date", "field", "date", "display", "menu", "placeholder", "mm/dd/yyyy"], ["type", "numeric", "field", "balance", "display", "menu", "currency", "USD"], ["field", "status", "matchMode", "equals", "display", "menu"], ["field", "activity", "matchMode", "between", "display", "menu", 3, "showMatchModes", "showOperator", "showAddButton"], [2, "min-width", "8rem"], ["type", "boolean", "field", "verified", "display", "menu"], [1, "px-4", "pt-4", "pb-0"], [1, "font-bold"], ["placeholder", "Any", "optionLabel", "name", "styleClass", "w-full", 3, "onChange", "ngModel", "options"], [1, "flex", "items-center", "gap-2", "w-44"], ["width", "32", 3, "alt", "src"], ["placeholder", "Any", 3, "onChange", "ngModel", "options"], ["styleClass", "m-4", 3, "onSlideEnd", "ngModel", "range"], [1, "flex", "items-center", "justify-between", "px-2"], [1, "flex", "items-center", "gap-2"], ["src", "https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png", "width", "30"], ["width", "32", 2, "vertical-align", "middle", 3, "alt", "src"], [1, "image-text"], [3, "value", "severity"], [3, "value", "showValue"], [1, "flex", "justify-center", "items-center"], [1, "pi", 3, "ngClass"], ["colspan", "8"], ["pFrozenColumn", "", 1, "font-bold", 2, "min-width", "200px"], [2, "min-width", "100px"], [2, "min-width", "200px"], ["alignFrozen", "right", "pFrozenColumn", "", 2, "min-width", "200px", 3, "frozen", "ngClass"], ["pFrozenColumn", "", 1, "font-bold"], ["alignFrozen", "right", "pFrozenColumn", "", 3, "frozen", "ngClass"], [1, "flex", "flex-wrap", "justify-end", "gap-2"], ["label", "Expand All", "icon", "pi pi-plus", "text", "", 3, "onClick"], ["label", "Collapse All", "icon", "pi pi-minus", "text", "", 3, "onClick"], [2, "width", "5rem"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "rating"], ["field", "rating"], ["pSortableColumn", "inventoryStatus"], ["field", "inventoryStatus"], ["type", "button", "pRipple", "", 3, "pRowToggler", "text", "rounded", "plain", "icon"], ["width", "50", 1, "shadow-lg", 3, "src", "alt"], [3, "ngModel", "readonly"], ["colspan", "7"], [1, "p-4"], ["dataKey", "id", 3, "value"], ["pSortableColumn", "id"], ["field", "id"], ["pSortableColumn", "customer"], ["field", "customer"], ["pSortableColumn", "date"], ["field", "date"], ["pSortableColumn", "amount"], ["field", "amount"], ["pSortableColumn", "status"], ["field", "status"], [2, "width", "4rem"], ["type", "button", "icon", "pi pi-search"], ["colspan", "6"], ["pRowGroupHeader", ""], ["colspan", "5"], ["colspan", "5", 1, "text-right", "font-bold", "pr-12"], ["src", "https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png", 2, "width", "20px"]], template: function TableDemo_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
      \u0275\u0275text(2, "Filtering");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-table", 13, 0);
      \u0275\u0275template(5, TableDemo_ng_template_5_Template, 6, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, TableDemo_ng_template_7_Template, 41, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, TableDemo_ng_template_9_Template, 26, 28, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, TableDemo_ng_template_11_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, TableDemo_ng_template_13_Template, 3, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
      \u0275\u0275text(17, "Frozen Columns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-togglebutton", 14);
      \u0275\u0275twoWayListener("ngModelChange", function TableDemo_Template_p_togglebutton_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.balanceFrozen, $event) || (ctx.balanceFrozen = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-table", 15);
      \u0275\u0275template(20, TableDemo_ng_template_20_Template, 19, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(22, TableDemo_ng_template_22_Template, 19, 13, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11)(25, "div", 12);
      \u0275\u0275text(26, "Row Expansion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p-table", 16);
      \u0275\u0275template(28, TableDemo_ng_template_28_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(30, TableDemo_ng_template_30_Template, 24, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(32, TableDemo_ng_template_32_Template, 16, 17, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(34, TableDemo_ng_template_34_Template, 12, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 11)(37, "div", 12);
      \u0275\u0275text(38, "Grouping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p-table", 17);
      \u0275\u0275template(40, TableDemo_ng_template_40_Template, 11, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(42, TableDemo_ng_template_42_Template, 6, 4, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(44, TableDemo_ng_template_44_Template, 3, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(46, TableDemo_ng_template_46_Template, 14, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.customers1)("rows", 10)("loading", ctx.loading)("rowHover", true)("showGridlines", true)("paginator", true)("globalFilterFields", \u0275\u0275pureFunction0(18, _c1));
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.balanceFrozen);
      \u0275\u0275property("onIcon", "pi pi-lock")("onLabel", "Balance");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.customers2)("scrollable", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.products)("tableStyle", \u0275\u0275pureFunction0(19, _c2))("expandedRowKeys", ctx.expandedRows);
      \u0275\u0275advance(12);
      \u0275\u0275property("value", ctx.customers3)("scrollable", true)("tableStyle", \u0275\u0275pureFunction0(20, _c2));
    }
  }, dependencies: [
    TableModule,
    Table,
    SortableColumn,
    FrozenColumn,
    RowGroupHeader,
    RowToggler,
    SortIcon,
    ColumnFilter,
    MultiSelectModule,
    MultiSelect,
    SelectModule,
    Select,
    InputIconModule,
    InputIcon,
    TagModule,
    Tag,
    InputTextModule,
    InputText,
    SliderModule,
    Slider,
    ProgressBarModule,
    ProgressBar,
    ToggleButtonModule,
    ToggleButton,
    ToastModule,
    CommonModule,
    NgClass,
    FormsModule,
    NgControlStatus,
    NgModel,
    ButtonModule,
    ButtonDirective,
    Button,
    RatingModule,
    Rating,
    RippleModule,
    Ripple,
    IconFieldModule,
    IconField,
    CurrencyPipe,
    DatePipe
  ], styles: ["\n\n.p-datatable-frozen-tbody[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.p-datatable-scrollable[_ngcontent-%COMP%]   .p-frozen-column[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=tabledemo.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableDemo, [{
    type: Component,
    args: [{ selector: "app-table-demo", standalone: true, imports: [
      TableModule,
      MultiSelectModule,
      SelectModule,
      InputIconModule,
      TagModule,
      InputTextModule,
      SliderModule,
      ProgressBarModule,
      ToggleButtonModule,
      ToastModule,
      CommonModule,
      FormsModule,
      ButtonModule,
      RatingModule,
      RippleModule,
      IconFieldModule
    ], template: ` <div class="card">
        <div class="font-semibold text-xl mb-4">Filtering</div>
        <p-table
            #dt1
            [value]="customers1"
            dataKey="id"
            [rows]="10"
            [loading]="loading"
            [rowHover]="true"
            [showGridlines]="true"
            [paginator]="true"
            [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
            responsiveLayout="scroll"
        >
            <ng-template #caption>
                <div class="flex justify-between items-center flex-col sm:flex-row">
                    <button pButton label="Clear" class="p-button-outlined mb-2" icon="pi pi-filter-slash" (click)="clear(dt1)"></button>
                    <p-iconfield iconPosition="left" class="ml-auto">
                        <p-inputicon>
                            <i class="pi pi-search"></i>
                        </p-inputicon>
                        <input pInputText type="text" (input)="onGlobalFilter(dt1, $event)" placeholder="Search keyword" />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="min-width: 12rem">
                        <div class="flex justify-between items-center">
                            Name
                            <p-columnFilter type="text" field="name" display="menu" placeholder="Search by name"></p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 12rem">
                        <div class="flex justify-between items-center">
                            Country
                            <p-columnFilter type="text" field="country.name" display="menu" placeholder="Search by country"></p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 14rem">
                        <div class="flex justify-between items-center">
                            Agent
                            <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                <ng-template #header>
                                    <div class="px-4 pt-4 pb-0">
                                        <span class="font-bold">Agent Picker</span>
                                    </div>
                                </ng-template>
                                <ng-template #filter let-value let-filter="filterCallback">
                                    <p-multi-select [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" styleClass="w-full">
                                        <ng-template let-option #item>
                                            <div class="flex items-center gap-2 w-44">
                                                <img [alt]="option.label" src="/demo/images/avatar/{{ option.image }}" width="32" />
                                                <span>{{ option.name }}</span>
                                            </div>
                                        </ng-template>
                                    </p-multi-select>
                                </ng-template>
                            </p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 10rem">
                        <div class="flex justify-between items-center">
                            Date
                            <p-columnFilter type="date" field="date" display="menu" placeholder="mm/dd/yyyy"></p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 10rem">
                        <div class="flex justify-between items-center">
                            Balance
                            <p-columnFilter type="numeric" field="balance" display="menu" currency="USD"></p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 12rem">
                        <div class="flex justify-between items-center">
                            Status
                            <p-columnFilter field="status" matchMode="equals" display="menu">
                                <ng-template #filter let-value let-filter="filterCallback">
                                    <p-select [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [style]="{ 'min-width': '12rem' }">
                                        <ng-template let-option #item>
                                            <span [class]="'customer-badge status-' + option.value">{{ option.label }}</span>
                                        </ng-template>
                                    </p-select>
                                </ng-template>
                            </p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 12rem">
                        <div class="flex justify-between items-center">
                            Activity
                            <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                                <ng-template #filter let-filter="filterCallback">
                                    <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-4" [style]="{ 'min-width': '12rem' }"></p-slider>
                                    <div class="flex items-center justify-between px-2">
                                        <span>{{ activityValues[0] }}</span>
                                        <span>{{ activityValues[1] }}</span>
                                    </div>
                                </ng-template>
                            </p-columnFilter>
                        </div>
                    </th>
                    <th style="min-width: 8rem">
                        <div class="flex justify-between items-center">
                            Verified
                            <p-columnFilter type="boolean" field="verified" display="menu"></p-columnFilter>
                        </div>
                    </th>
                </tr>
            </ng-template>
            <ng-template #body let-customer>
                <tr>
                    <td>
                        {{ customer.name }}
                    </td>
                    <td>
                        <div class="flex items-center gap-2">
                            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" width="30" />
                            <span>{{ customer.country.name }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="flex items-center gap-2">
                            <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                            <span class="image-text">{{ customer.representative.name }}</span>
                        </div>
                    </td>
                    <td>
                        {{ customer.date | date: 'MM/dd/yyyy' }}
                    </td>
                    <td>
                        {{ customer.balance | currency: 'USD' : 'symbol' }}
                    </td>
                    <td>
                        <p-tag [value]="customer.status.toLowerCase()" [severity]="getSeverity(customer.status)" />
                    </td>
                    <td>
                        <p-progressbar [value]="customer.activity" [showValue]="false" [style]="{ height: '0.5rem' }" />
                    </td>
                    <td>
                       <span class="flex justify-center items-center">
                                <i
                                    class="pi"
                                    [ngClass]="{
                                        'text-green-500 pi-check-circle': customer.verified,
                                        'text-red-500 pi-times-circle': !customer.verified
                                    }"
                                ></i>
                            </span>
                    </td>
                </tr>
            </ng-template>
            <ng-template #emptymessage>
                <tr>
                    <td colspan="8">No customers found.</td>
                </tr>
            </ng-template>
            <ng-template #loadingbody>
                <tr>
                    <td colspan="8">Loading customers data. Please wait.</td>
                </tr>
            </ng-template>
        </p-table>
    </div>

    <div class="card">
        <div class="font-semibold text-xl mb-4">Frozen Columns</div>
        <p-togglebutton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'Balance'" offLabel="Balance" />

        <p-table [value]="customers2" [scrollable]="true" scrollHeight="400px" styleClass="mt-4">
            <ng-template #header>
                <tr>
                    <th style="min-width:200px" pFrozenColumn class="font-bold">Name</th>
                    <th style="min-width:100px">Id</th>
                    <th style="min-width:200px">Country</th>
                    <th style="min-width:200px">Date</th>
                    <th style="min-width:200px">Company</th>
                    <th style="min-width:200px">Status</th>
                    <th style="min-width:200px">Activity</th>
                    <th style="min-width:200px">Representative</th>
                    <th style="min-width:200px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">Balance</th>
                </tr>
            </ng-template>
            <ng-template #body let-customer>
                <tr>
                    <td pFrozenColumn class="font-bold">
                        {{ customer.name }}
                    </td>
                    <td style="min-width:100px">{{ customer.id }}</td>
                    <td>{{ customer.country.name }}</td>
                    <td>{{ customer.date }}</td>
                    <td>{{ customer.company }}</td>
                    <td>{{ customer.status }}</td>
                    <td>{{ customer.activity }}</td>
                    <td>{{ customer.representative.name }}</td>
                    <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen" [ngClass]="{ 'font-bold': balanceFrozen }">
                        {{ formatCurrency(customer.balance) }}
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>

    <div class="card">
        <div class="font-semibold text-xl mb-4">Row Expansion</div>
        <p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '60rem' }" [expandedRowKeys]="expandedRows">
            <ng-template #caption>
                <div class="flex flex-wrap justify-end gap-2">
                    <p-button label="Expand All" icon="pi pi-plus" text (onClick)="expandAll()" />
                    <p-button label="Collapse All" icon="pi pi-minus" text (onClick)="collapseAll()" />
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th style="width: 5rem"></th>
                    <th pSortableColumn="name"><span class="flex items-center gap-2">Name <p-sortIcon field="name" /></span></th>
                    <th>Image</th>
                    <th pSortableColumn="price"><span class="flex items-center gap-2">Price <p-sortIcon field="price" /></span></th>
                    <th pSortableColumn="category"><span class="flex items-center gap-2">Category <p-sortIcon field="category" /></span></th>
                    <th pSortableColumn="rating"><span class="flex items-center gap-2">Reviews <p-sortIcon field="rating" /></span></th>
                    <th pSortableColumn="inventoryStatus"><span class="flex items-center gap-2">Status <p-sortIcon field="inventoryStatus" /></span></th>
                </tr>
            </ng-template>
            <ng-template #body let-product let-expanded="expanded">
                <tr>
                    <td>
                        <p-button type="button" pRipple [pRowToggler]="product" [text]="true" [rounded]="true" [plain]="true" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'" />
                    </td>
                    <td>{{ product.name }}</td>
                    <td>
                        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-lg" />
                    </td>
                    <td>{{ product.price | currency: 'USD' }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                        <p-rating [ngModel]="product.rating" [readonly]="true" />
                    </td>
                    <td>
                        <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
                    </td>
                </tr>
            </ng-template>
            <ng-template #expandedrow let-product>
                <tr>
                    <td colspan="7">
                        <div class="p-4">
                            <h5>Orders for {{ product.name }}</h5>
                            <p-table [value]="product.orders" dataKey="id">
                                <ng-template #header>
                                    <tr>
                                        <th pSortableColumn="id"><span class="flex items-center gap-2">Id <p-sortIcon field="id" /></span></th>
                                        <th pSortableColumn="customer">
                                            <span class="flex items-center gap-2">Customer
                                            <p-sortIcon field="customer" /></span>
                                        </th>
                                        <th pSortableColumn="date"><span class="flex items-center gap-2">Date <p-sortIcon field="date" /></span></th>
                                        <th pSortableColumn="amount">
                                            <span class="flex items-center gap-2">Amount
                                            <p-sortIcon field="amount" /></span>
                                        </th>
                                        <th pSortableColumn="status">
                                            <span class="flex items-center gap-2">Status
                                            <p-sortIcon field="status" /></span>
                                        </th>
                                        <th style="width: 4rem"></th>
                                    </tr>
                                </ng-template>
                                <ng-template #body let-order>
                                    <tr>
                                        <td>{{ order.id }}</td>
                                        <td>{{ order.customer }}</td>
                                        <td>{{ order.date }}</td>
                                        <td>
                                            {{ order.amount | currency: 'USD' }}
                                        </td>
                                        <td>
                                            <p-tag [value]="order.status" [severity]="getSeverity(order.status)" />
                                        </td>
                                        <td>
                                            <p-button type="button" icon="pi pi-search" />
                                        </td>
                                    </tr>
                                </ng-template>
                                <ng-template #emptymessage>
                                    <tr>
                                        <td colspan="6">There are no order for this product yet.</td>
                                    </tr>
                                </ng-template>
                            </p-table>
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>

    <div class="card">
        <div class="font-semibold text-xl mb-4">Grouping</div>
        <p-table [value]="customers3" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{ 'min-width': '60rem' }">
            <ng-template #header>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
            </ng-template>
            <ng-template #groupheader let-customer>
                <tr pRowGroupHeader>
                    <td colspan="5">
                        <div class="flex items-center gap-2">
                            <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                            <span class="font-bold">{{ customer.representative.name }}</span>
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template #groupfooter let-customer>
                <tr>
                    <td colspan="5" class="text-right font-bold pr-12">
                        Total Customers:
                        {{ calculateCustomerTotal(customer.representative.name) }}
                    </td>
                </tr>
            </ng-template>
            <ng-template #body let-customer let-rowIndex="rowIndex">
                <tr>
                    <td>
                        {{ customer.name }}
                    </td>
                    <td>
                        <div class="flex items-center gap-2">
                            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                            <span>{{ customer.country.name }}</span>
                        </div>
                    </td>
                    <td>
                        {{ customer.company }}
                    </td>
                    <td>
                        <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
                    </td>
                    <td>
                        {{ customer.date }}
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`, providers: [ConfirmationService, MessageService, CustomerService, ProductService], styles: ["/* angular:styles/component:scss;5a7bdf76836e7577fe1bc5637900bb0deba30de74fb14ca7d05e9fdae49c42e6;C:/laragon/www/FRONT/elm-front/src/app/pages/uikit/tabledemo.ts */\n.p-datatable-frozen-tbody {\n  font-weight: bold;\n}\n.p-datatable-scrollable .p-frozen-column {\n  font-weight: bold;\n}\n/*# sourceMappingURL=tabledemo.css.map */\n"] }]
  }], () => [{ type: CustomerService }, { type: ProductService }], { filter: [{
    type: ViewChild,
    args: ["filter"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableDemo, { className: "TableDemo", filePath: "src/app/pages/uikit/tabledemo.ts", lineNumber: 407 });
})();
export {
  TableDemo
};
//# sourceMappingURL=chunk-JBR76IHS.js.map
