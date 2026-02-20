import {
  CustomerService
} from "./chunk-ANDL3QTQ.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-IYNJAXBT.js";
import "./chunk-KNRZ2YDN.js";
import {
  ProgressBar,
  ProgressBarModule
} from "./chunk-DYSP5HHB.js";
import {
  InputGroupAddon
} from "./chunk-5UHNKDW3.js";
import {
  InputGroup,
  InputGroupModule
} from "./chunk-5QBM2BNE.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-WUI3EQCC.js";
import {
  Router
} from "./chunk-A2YYJMVO.js";
import "./chunk-AQI53E5O.js";
import {
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-CIZBK6XP.js";
import "./chunk-VA3Y7VIO.js";
import "./chunk-WU6WPBW3.js";
import "./chunk-FTF3KF6H.js";
import "./chunk-MIB2WPFC.js";
import "./chunk-KAQFDGVD.js";
import "./chunk-E7RV6XBL.js";
import "./chunk-Q5EYRR7G.js";
import "./chunk-RDWTOL5W.js";
import "./chunk-C3YC4CEN.js";
import "./chunk-ZAZO6DRK.js";
import "./chunk-C3YEZQJT.js";
import "./chunk-4KPSRL25.js";
import "./chunk-QUM6YXNO.js";
import "./chunk-A6MEIVSB.js";
import {
  Select
} from "./chunk-4FEBDTY4.js";
import "./chunk-HRYAYFE5.js";
import "./chunk-ZKJ2HA6V.js";
import "./chunk-UAOBMGYN.js";
import {
  IconField,
  InputIcon
} from "./chunk-WYX2NFLP.js";
import {
  InputText,
  InputTextModule
} from "./chunk-XQENNRGE.js";
import "./chunk-XXGDCOFX.js";
import "./chunk-EM6TITBQ.js";
import "./chunk-Y4KHKEE6.js";
import "./chunk-2E3FVCR6.js";
import "./chunk-7V5JC3MC.js";
import "./chunk-PPMOL7YY.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import {
  Ripple,
  RippleModule
} from "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  DatePipe
} from "./chunk-VGWO7IEC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UJSDGQXU.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/usermanagement/userlist.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ["name", "country.name", "representative.name"];
var _c2 = () => ({ height: ".5rem" });
function UserList_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "p-icon-field", 7);
    \u0275\u0275element(2, "p-inputicon", 8);
    \u0275\u0275elementStart(3, "input", 9);
    \u0275\u0275listener("input", function UserList_ng_template_3_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const dt_r3 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(ctx_r1.onGlobalFilter(dt_r3, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function UserList_ng_template_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToCreateUser());
    });
    \u0275\u0275elementEnd()();
  }
}
function UserList_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 11)(2, "span", 12);
    \u0275\u0275text(3, "Name ");
    \u0275\u0275element(4, "p-sortIcon", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 14)(6, "span", 12);
    \u0275\u0275text(7, "Country ");
    \u0275\u0275element(8, "p-sortIcon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 16)(10, "span", 12);
    \u0275\u0275text(11, "Join Date ");
    \u0275\u0275element(12, "p-sortIcon", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "th", 18)(14, "span", 12);
    \u0275\u0275text(15, "Created By ");
    \u0275\u0275element(16, "p-sortIcon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "th", 20)(18, "span", 12);
    \u0275\u0275text(19, "Activity ");
    \u0275\u0275element(20, "p-sortIcon", 21);
    \u0275\u0275elementEnd()()();
  }
}
function UserList_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 12);
    \u0275\u0275element(5, "img", 22);
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 24);
    \u0275\u0275element(13, "img", 25);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275element(17, "p-progressBar", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("flag flag-" + customer_r4.country.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r4.country.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, customer_r4.date, "MM/dd/yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate1("/demo/images/avatar/", customer_r4.representative.image), \u0275\u0275sanitizeUrl)("alt", customer_r4.representative.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r4.representative.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c2));
    \u0275\u0275property("value", customer_r4.activity)("showValue", false);
  }
}
var UserList = class _UserList {
  customerService;
  router;
  customers = [];
  constructor(customerService, router) {
    this.customerService = customerService;
    this.router = router;
  }
  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => this.customers = customers);
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  navigateToCreateUser() {
    this.router.navigate(["profile/create"]);
  }
  static \u0275fac = function UserList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserList)(\u0275\u0275directiveInject(CustomerService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserList, selectors: [["user-list"]], features: [\u0275\u0275ProvidersFeature([CustomerService])], decls: 9, vars: 8, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], [1, "card"], ["paginatorDropdownAppendTo", "body", "responsiveLayout", "scroll", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "paginator", "rows", "showCurrentPageReport", "rowsPerPageOptions", "globalFilterFields"], [1, "flex", "flex-wrap", "gap-2", "items-center", "justify-between"], [1, "w-full", "sm:w-80", "order-1", "sm:order-0"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Global Search", 1, "w-full", 3, "input"], ["pButton", "", "outlined", "", "icon", "pi pi-user-plus", "label", "Add New", 1, "w-full", "sm:w-auto", "flex-order-0", "sm:flex-order-1", 3, "click"], ["pSortableColumn", "name", 1, "white-space-nowrap", 2, "width", "23%"], [1, "flex", "items-center", "gap-2"], ["field", "name"], ["pSortableColumn", "country.name", 1, "white-space-nowrap", 2, "width", "23%"], ["field", "country.name"], ["pSortableColumn", "date", 1, "white-space-nowrap", 2, "width", "23%"], ["field", "date"], ["pSortableColumn", "representative.name", 1, "white-space-nowrap", 2, "width", "23%"], ["field", "representative.name"], ["pSortableColumn", "activity", 1, "white-space-nowrap"], ["field", "activity"], ["src", "https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png", 1, "mr-2"], [1, "image-text"], [1, "inline-flex", "items-center"], [1, "w-8", "mr-2", 3, "alt", "src"], [3, "value", "showValue"]], template: function UserList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "p-table", 5, 0);
      \u0275\u0275template(3, UserList_ng_template_3_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, UserList_ng_template_5_Template, 21, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(7, UserList_ng_template_7_Template, 18, 17, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.customers)("paginator", true)("rows", 10)("showCurrentPageReport", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(6, _c0))("globalFilterFields", \u0275\u0275pureFunction0(7, _c1));
    }
  }, dependencies: [CommonModule, TableModule, Table, SortableColumn, SortIcon, InputTextModule, InputText, ProgressBarModule, ProgressBar, ButtonModule, ButtonDirective, IconField, InputIcon, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserList, [{
    type: Component,
    args: [{
      selector: "user-list",
      standalone: true,
      imports: [CommonModule, TableModule, InputTextModule, ProgressBarModule, ButtonModule, IconField, InputIcon],
      template: `<div class="card">
        <p-table
            #dt
            [value]="customers"
            [paginator]="true"
            paginatorDropdownAppendTo="body"
            [rows]="10"
            [showCurrentPageReport]="true"
            responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            [rowsPerPageOptions]="[10, 25, 50]"
            [globalFilterFields]="['name', 'country.name', 'representative.name']"
        >
            <ng-template #caption>
                <div class="flex flex-wrap gap-2 items-center justify-between">
                    <p-icon-field class="w-full sm:w-80 order-1 sm:order-0">
                        <p-inputicon class="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Global Search" class="w-full" />
                    </p-icon-field>
                    <button (click)="navigateToCreateUser()" pButton outlined class="w-full sm:w-auto flex-order-0 sm:flex-order-1" icon="pi pi-user-plus" label="Add New"></button>
                </div>
            </ng-template>
            <ng-template #header>
                <tr>
                    <th pSortableColumn="name" class="white-space-nowrap" style="width:23%"><span class="flex items-center gap-2">Name <p-sortIcon field="name"></p-sortIcon></span></th>
                    <th pSortableColumn="country.name" class="white-space-nowrap" style="width:23%"><span class="flex items-center gap-2">Country <p-sortIcon field="country.name"></p-sortIcon></span></th>
                    <th pSortableColumn="date" class="white-space-nowrap" style="width:23%"><span class="flex items-center gap-2">Join Date <p-sortIcon field="date"></p-sortIcon></span></th>
                    <th pSortableColumn="representative.name" class="white-space-nowrap" style="width:23%">
                        <span class="flex items-center gap-2">Created By
                        <p-sortIcon field="representative.name"></p-sortIcon></span>
                    </th>
                    <th pSortableColumn="activity" class="white-space-nowrap"><span class="flex items-center gap-2">Activity <p-sortIcon field="activity"></p-sortIcon></span></th>
                </tr>
            </ng-template>
            <ng-template #body let-customer>
                <tr>
                    <td>{{ customer.name }}</td>
                    <td>
                        <div class="flex items-center gap-2">
                            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" class="mr-2" />
                            <span class="image-text">{{ customer.country.name }}</span>
                        </div>
                    </td>
                    <td>{{ customer.date | date: 'MM/dd/yyyy' }}</td>
                    <td>
                        <div class="inline-flex items-center">
                            <img [alt]="customer.representative.name" src="/demo/images/avatar/{{ customer.representative.image }}" class="w-8 mr-2" />
                            <span>{{ customer.representative.name }}</span>
                        </div>
                    </td>
                    <td>
                        <p-progressBar [value]="customer.activity" [showValue]="false" [style]="{ height: '.5rem' }"></p-progressBar>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
      providers: [CustomerService]
    }]
  }], () => [{ type: CustomerService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserList, { className: "UserList", filePath: "src/app/pages/usermanagement/userlist.ts", lineNumber: 76 });
})();

// src/app/pages/usermanagement/usercreate.ts
function UserCreate_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const country_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("mr-2 flag flag-" + country_r1.code.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r1.name);
  }
}
var UserCreate = class _UserCreate {
  countries = [];
  ngOnInit() {
    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];
  }
  static \u0275fac = function UserCreate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserCreate)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserCreate, selectors: [["user-create"]], decls: 51, vars: 5, consts: [["item", ""], [1, "card"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-bold", "mb-6", "block"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-2"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", "mb-4"], [1, "m-0", "p-0", "text-surface-600", "dark:text-surface-200", "leading-normal", "mr-4"], [1, "col-span-12", "lg:col-span-10"], [1, "mb-6", "col-span-12"], ["for", "nickname", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "nickname", "type", "text", "pInputText", "", "fluid", ""], [1, "mb-6", "col-span-12", "flex", "flex-col", "items-start"], ["for", "avatar", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["mode", "basic", "name", "avatar", "url", "./upload.php", "accept", "image/*", "styleClass", "p-button-outlined p-button-plain", "chooseLabel", "Upload Image", 3, "maxFileSize"], ["for", "bio", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["pTextarea", "", "id", "bio", "type", "text", "rows", "5", "fluid", "", 3, "autoResize"], [1, "mb-6", "col-span-12", "md:col-span-6"], ["for", "email", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "email", "type", "text", "pInputText", "", "fluid", ""], ["for", "country", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["inputId", "country", "optionLabel", "name", "fluid", "", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], ["for", "city", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "city", "type", "text", "pInputText", "", "fluid", ""], ["for", "state", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "state", "type", "text", "pInputText", "", "fluid", ""], ["for", "website", 1, "font-medium", "text-surface-900", "dark:text-surface-0", "mb-2", "block"], ["id", "website", "type", "text", "pInputText", "", "fluid", ""], [1, "col-span-12"], ["pButton", "", "pRipple", "", "label", "Create User", 1, "w-auto", "mt-3"], [1, "flex", "items-center"], ["src", "https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png", 2, "width", "18px"]], template: function UserCreate_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
      \u0275\u0275text(2, "Create User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Odio euismod lacinia at quis risus sed vulputate odio.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 3)(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, " Nickname ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 11)(16, "label", 12);
      \u0275\u0275text(17, "Avatar");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-fileupload", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 8)(20, "label", 14);
      \u0275\u0275text(21, " Bio ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 16)(24, "label", 17);
      \u0275\u0275text(25, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16)(28, "label", 19);
      \u0275\u0275text(29, " Country ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p-select", 20);
      \u0275\u0275template(31, UserCreate_ng_template_31_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "label", 21);
      \u0275\u0275text(35, " City ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16)(38, "label", 23);
      \u0275\u0275text(39, " State ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 8)(42, "label", 25);
      \u0275\u0275text(43, " Website ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p-inputgroup")(45, "p-inputgroup-addon")(46, "span");
      \u0275\u0275text(47, "www");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "input", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 27);
      \u0275\u0275element(50, "button", 28);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275property("maxFileSize", 1e6);
      \u0275\u0275advance(4);
      \u0275\u0275property("autoResize", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("options", ctx.countries)("filter", true)("showClear", true);
    }
  }, dependencies: [Select, InputText, TextareaModule, Textarea, FileUploadModule, FileUpload, InputGroupAddon, ButtonModule, ButtonDirective, InputGroupModule, InputGroup, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserCreate, [{
    type: Component,
    args: [{
      selector: "user-create",
      standalone: true,
      imports: [Select, InputText, TextareaModule, FileUploadModule, InputGroupAddon, ButtonModule, InputGroupModule, RippleModule],
      template: `<div class="card">
        <span class="text-surface-900 dark:text-surface-0 text-xl font-bold mb-6 block">Create User</span>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-2">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl mb-4">Profile</div>
                <p class="m-0 p-0 text-surface-600 dark:text-surface-200 leading-normal mr-4">Odio euismod lacinia at quis risus sed vulputate odio.</p>
            </div>
            <div class="col-span-12 lg:col-span-10">
                <div class="grid grid-cols-12 gap-4">
                    <div class="mb-6 col-span-12">
                        <label for="nickname" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Nickname </label>
                        <input id="nickname" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 flex flex-col items-start">
                        <label for="avatar" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block">Avatar</label>
                        <p-fileupload mode="basic" name="avatar" url="./upload.php" accept="image/*" [maxFileSize]="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image"></p-fileupload>
                    </div>
                    <div class="mb-6 col-span-12">
                        <label for="bio" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Bio </label>
                        <input pTextarea id="bio" type="text" rows="5" [autoResize]="true" fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="email" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Email </label>
                        <input id="email" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="country" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Country </label>
                        <p-select inputId="country" [options]="countries" optionLabel="name" fluid [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                            <ng-template let-country #item>
                                <div class="flex items-center">
                                    <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px" />
                                    <div>{{ country.name }}</div>
                                </div>
                            </ng-template>
                        </p-select>
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="city" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> City </label>
                        <input id="city" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12 md:col-span-6">
                        <label for="state" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> State </label>
                        <input id="state" type="text" pInputText fluid />
                    </div>
                    <div class="mb-6 col-span-12">
                        <label for="website" class="font-medium text-surface-900 dark:text-surface-0 mb-2 block"> Website </label>
                        <p-inputgroup>
                            <p-inputgroup-addon>
                                <span>www</span>
                            </p-inputgroup-addon>
                            <input id="website" type="text" pInputText fluid />
                        </p-inputgroup>
                    </div>
                    <div class="col-span-12">
                        <button pButton pRipple label="Create User" class="w-auto mt-3"></button>
                    </div>
                </div>
            </div>
        </div>
    </div> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserCreate, { className: "UserCreate", filePath: "src/app/pages/usermanagement/usercreate.ts", lineNumber: 76 });
})();

// src/app/pages/usermanagement/usermanagement.routes.ts
var usermanagement_routes_default = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", data: { breadcrumb: "List" }, component: UserList },
  { path: "create", data: { breadcrumb: "Create" }, component: UserCreate }
];
export {
  usermanagement_routes_default as default
};
//# sourceMappingURL=chunk-LR4DJRVO.js.map
