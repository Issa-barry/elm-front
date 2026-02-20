import {
  ChartModule,
  UIChart
} from "./chunk-6IBAPE7A.js";
import {
  LayoutService
} from "./chunk-IVCSPZOZ.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-IYNJAXBT.js";
import "./chunk-KNRZ2YDN.js";
import "./chunk-DYSP5HHB.js";
import {
  Menu,
  MenuModule
} from "./chunk-6KOCBW73.js";
import "./chunk-A2YYJMVO.js";
import {
  Toast,
  ToastModule
} from "./chunk-DDVPM47O.js";
import "./chunk-W6Z6YB3V.js";
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
import "./chunk-4FEBDTY4.js";
import "./chunk-HRYAYFE5.js";
import "./chunk-ZKJ2HA6V.js";
import "./chunk-UAOBMGYN.js";
import "./chunk-WYX2NFLP.js";
import "./chunk-XQENNRGE.js";
import "./chunk-XXGDCOFX.js";
import "./chunk-EM6TITBQ.js";
import "./chunk-Y4KHKEE6.js";
import "./chunk-2E3FVCR6.js";
import "./chunk-7V5JC3MC.js";
import {
  HttpClient
} from "./chunk-PPMOL7YY.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import {
  ButtonDirective,
  ButtonIcon,
  ButtonModule
} from "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import {
  Ripple
} from "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import {
  MessageService,
  PrimeTemplate
} from "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-VGWO7IEC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  Injectable,
  ViewChildren,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵviewQuery
} from "./chunk-UJSDGQXU.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/files/service/file.service.ts
var FileAppService = class _FileAppService {
  http;
  constructor(http) {
    this.http = http;
  }
  getFiles() {
    return this.http.get("/demo/data/file-management.json").toPromise().then((res) => res.files).then((data) => data);
  }
  getMetrics() {
    return this.http.get("/demo/data/file-management.json").toPromise().then((res) => res.metrics).then((data) => data);
  }
  getFoldersSmall() {
    return this.http.get("/demo/data/file-management.json").toPromise().then((res) => res.folders_small).then((data) => data);
  }
  getFoldersLarge() {
    return this.http.get("/demo/data/file-management.json").toPromise().then((res) => res.folders_large).then((data) => data);
  }
  static \u0275fac = function FileAppService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileAppService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileAppService, factory: _FileAppService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileAppService, [{
    type: Injectable
  }], () => [{ type: HttpClient }], null);
})();

// src/app/apps/files/uploader/uploader.ts
var _c0 = ["buttonEl"];
var _c1 = () => ({ cursor: "copy" });
var _c2 = () => ({ padding: "1px" });
function UploaderComponent_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3, "Upload Files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 12);
    \u0275\u0275text(5, "Drop or select files");
    \u0275\u0275elementEnd()();
  }
}
function UploaderComponent_ng_template_4_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("mouseenter", function UploaderComponent_ng_template_4_div_2_div_1_Template_div_mouseenter_0_listener() {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.onImageMouseOver(file_r5));
    })("mouseleave", function UploaderComponent_ng_template_4_div_2_div_1_Template_div_mouseleave_0_listener() {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.onImageMouseLeave(file_r5));
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275element(2, "img", 17);
    \u0275\u0275elementStart(3, "button", 18, 2);
    \u0275\u0275listener("click", function UploaderComponent_ng_template_4_div_2_div_1_Template_button_click_3_listener($event) {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r5.removeImage($event, file_r5));
    });
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("src", file_r5.objectURL, \u0275\u0275sanitizeUrl)("alt", file_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("id", file_r5.name);
  }
}
function UploaderComponent_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, UploaderComponent_ng_template_4_div_2_div_1_Template, 6, 6, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r5.uploadedFiles);
  }
}
function UploaderComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function UploaderComponent_ng_template_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const fileUploader_r3 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fileUploader_r3.advancedFileInput.nativeElement.click());
    });
    \u0275\u0275template(1, UploaderComponent_ng_template_4_div_1_Template, 6, 0, "div", 7)(2, UploaderComponent_ng_template_4_div_2_Template, 2, 4, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r5.uploadedFiles.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.uploadedFiles.length);
  }
}
var UploaderComponent = class _UploaderComponent {
  messageService;
  uploadedFiles = [];
  buttonEl;
  constructor(messageService) {
    this.messageService = messageService;
  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "File uploaded successfully"
    });
  }
  onImageMouseOver(file) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = "flex" : null;
    });
  }
  onImageMouseLeave(file) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = "none" : null;
    });
  }
  removeImage(event, file) {
    event.stopPropagation();
    this.uploadedFiles = this.uploadedFiles.filter((i) => i !== file);
  }
  static \u0275fac = function UploaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploaderComponent)(\u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploaderComponent, selectors: [["app-file-uploader"]], viewQuery: function UploaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.buttonEl = _t);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 6, vars: 5, consts: [["fileUploader", ""], ["content", ""], ["buttonEl", ""], ["key", "fu"], [1, "card"], ["name", "demo[]", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", 1, "upload-button-hidden", "w-full", 3, "onUpload", "onSelect", "customUpload", "multiple", "showUploadButton", "showCancelButton", "auto"], [1, "w-full", "py-4", 2, "cursor", "copy", 3, "click"], ["class", "h-full flex flex-col justify-center items-center", 4, "ngIf"], ["class", "w-full py-4", 3, "style", 4, "ngIf"], [1, "h-full", "flex", "flex-col", "justify-center", "items-center"], [1, "pi", "pi-upload", "text-surface-900", "dark:text-surface-0", "text-2xl", "mb-4"], [1, "font-bold", "text-surface-900", "dark:text-surface-0", "text-xl", "mb-4"], [1, "font-medium", "text-surface-600", "dark:text-surface-200", "text-md", "text-center"], [1, "w-full", "py-4"], ["class", "flex flex-wrap gap-8", "style", "padding: 1px;", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "gap-8", 2, "padding", "1px", 3, "mouseenter", "mouseleave"], [1, "remove-file-wrapper", "relative", "w-28", "h-28", "border-4", "border-transparent", "rounded", "hover:bg-primary", "hover:text-primary-contrast", "duration-100", "cursor-auto"], [1, "w-full", "h-full", "rounded", "shadow", 3, "src", "alt"], ["pButton", "", "pRipple", "", "rounded", "", "type", "button", 1, "remove-button", "text-sm", "absolute", "justify-center", "items-center", "cursor-pointer", 2, "top", "-10px", "right", "-10px", "display", "none", 3, "click", "id"], ["pButtonIcon", "", 1, "pi", "pi-times"]], template: function UploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast", 3);
      \u0275\u0275elementStart(1, "div", 4)(2, "p-fileupload", 5, 0);
      \u0275\u0275listener("onUpload", function UploaderComponent_Template_p_fileupload_onUpload_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpload($event));
      })("onSelect", function UploaderComponent_Template_p_fileupload_onSelect_2_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpload($event));
      });
      \u0275\u0275template(4, UploaderComponent_ng_template_4_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("customUpload", true)("multiple", true)("showUploadButton", true)("showCancelButton", false)("auto", true);
    }
  }, dependencies: [ToastModule, Toast, FileUploadModule, FileUpload, CommonModule, NgForOf, NgIf, ButtonDirective, Ripple, ButtonIcon], styles: ["\n\n[_nghost-%COMP%]     .p-fileupload-header {\n  display: none;\n}\n[_nghost-%COMP%]     .p-fileupload {\n  border: none;\n}\n[_nghost-%COMP%]     .p-fileupload-file-list {\n  display: none;\n}\n/*# sourceMappingURL=uploader.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploaderComponent, [{
    type: Component,
    args: [{ selector: "app-file-uploader", standalone: true, imports: [ToastModule, FileUploadModule, CommonModule, ButtonDirective, Ripple, ButtonIcon], template: `<p-toast key="fu"></p-toast>
        <div class="card">
            <p-fileupload
                #fileUploader
                name="demo[]"
                url="https://www.primefaces.org/cdn/api/upload.php"
                accept="image/*"
                (onUpload)="onUpload($event)"
                [customUpload]="true"
                [multiple]="true"
                (onSelect)="onUpload($event)"
                [showUploadButton]="true"
                [showCancelButton]="false"
                [auto]="true"
                class="upload-button-hidden w-full"
            >
                <ng-template #content>
                    <div class="w-full py-4" style="cursor: copy" (click)="fileUploader.advancedFileInput.nativeElement.click()">
                        <div *ngIf="!uploadedFiles.length" class="h-full flex flex-col justify-center items-center">
                            <i class="pi pi-upload text-surface-900 dark:text-surface-0 text-2xl mb-4"></i>
                            <span class="font-bold text-surface-900 dark:text-surface-0 text-xl mb-4">Upload Files</span>
                            <span class="font-medium text-surface-600 dark:text-surface-200 text-md text-center">Drop or select files</span>
                        </div>
                        <div class="w-full py-4" *ngIf="uploadedFiles.length" [style]="{ cursor: 'copy' }">
                            <div *ngFor="let file of uploadedFiles; let i = index" class="flex flex-wrap gap-8" (mouseenter)="onImageMouseOver(file)" (mouseleave)="onImageMouseLeave(file)" style="padding: 1px;">
                                <div class="remove-file-wrapper relative w-28 h-28 border-4 border-transparent rounded hover:bg-primary hover:text-primary-contrast duration-100 cursor-auto" [style]="{ padding: '1px' }">
                                    <img [src]="file.objectURL" [alt]="file.name" class="w-full h-full rounded shadow" />
                                    <button
                                        [id]="file.name"
                                        #buttonEl
                                        pButton
                                        pRipple
                                        rounded
                                        type="button"
                                        class="remove-button text-sm absolute justify-center items-center cursor-pointer"
                                        style="top: -10px; right: -10px; display: none;"
                                        (click)="removeImage($event, file)"
                                    >
                                        <i pButtonIcon class="pi pi-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-template>
            </p-fileupload>
        </div>`, providers: [MessageService], styles: ["/* angular:styles/component:scss;743871b090c8ea9a310af2c921aea320aafd2e83150e9439f80a0fa5ff1ee750;C:/laragon/www/FRONT/elm-front/src/app/apps/files/uploader/uploader.ts */\n:host ::ng-deep .p-fileupload-header {\n  display: none;\n}\n:host ::ng-deep .p-fileupload {\n  border: none;\n}\n:host ::ng-deep .p-fileupload-file-list {\n  display: none;\n}\n/*# sourceMappingURL=uploader.css.map */\n"] }]
  }], () => [{ type: MessageService }], { buttonEl: [{
    type: ViewChildren,
    args: ["buttonEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploaderComponent, { className: "UploaderComponent", filePath: "src/app/apps/files/uploader/uploader.ts", lineNumber: 80 });
})();

// src/app/apps/files/index.ts
var _c02 = () => ({ width: "200px" });
function Files_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "button", 32);
    \u0275\u0275listener("click", function Files_div_1_Template_button_click_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const menu_r2 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(menu_r2.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-menu", 33, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "div", 34);
    \u0275\u0275element(11, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 36)(13, "span", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(metric_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", metric_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275property("popup", true)("model", ctx_r3.menuitems);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", metric_r3.color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", metric_r3.fieldColor);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r3.files);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r3.fileSize);
  }
}
function Files_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 14);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const folder_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", folder_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(folder_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(folder_r5.size);
  }
}
function Files_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 43)(2, "span", 44);
    \u0275\u0275text(3, "Name ");
    \u0275\u0275element(4, "p-sortIcon", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 46)(6, "span", 44);
    \u0275\u0275text(7, "Date ");
    \u0275\u0275element(8, "p-sortIcon", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "th", 48)(10, "span", 44);
    \u0275\u0275text(11, "File Size ");
    \u0275\u0275element(12, "p-sortIcon", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "th", 50);
    \u0275\u0275elementEnd();
  }
}
function Files_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 14);
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td")(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 51);
    \u0275\u0275element(13, "button", 52)(14, "button", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275classMap("text-xl text-primary mr-2 " + file_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r6.date);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r6.fileSize);
  }
}
var Files = class _Files {
  fileService;
  layoutService;
  fileChart;
  fileChartOptions;
  chartPlugins;
  files = [];
  metrics = [];
  folders = [];
  menuitems = [];
  subscription;
  constructor(fileService, layoutService) {
    this.fileService = fileService;
    this.layoutService = layoutService;
    this.subscription = this.layoutService.configUpdate$.subscribe((config) => {
      this.initChart();
    });
  }
  ngOnInit() {
    this.fileService.getFiles().then((data) => this.files = data);
    this.fileService.getMetrics().then((data) => this.metrics = data);
    this.fileService.getFoldersLarge().then((data) => this.folders = data);
    this.initChart();
    this.menuitems = [
      { label: "View", icon: "pi pi-search" },
      { label: "Refresh", icon: "pi pi-refresh" }
    ];
  }
  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    this.chartPlugins = [
      {
        beforeDraw: function(chart) {
          let ctx = chart.ctx;
          let width = chart.width;
          let height = chart.height;
          let fontSize = 1.5;
          let oldFill = ctx.fillStyle;
          ctx.restore();
          ctx.font = fontSize + "rem sans-serif";
          ctx.textBaseline = "middle";
          let text = "Free Space";
          let text2 = "50GB / 80GB";
          let textX = Math.round((width - ctx.measureText(text).width) / 2);
          let textY = (height + chart.chartArea.top) / 2.25;
          let text2X = Math.round((width - ctx.measureText(text).width) / 2.1);
          let text2Y = (height + chart.chartArea.top) / 1.75;
          ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
          ctx.fillText(text, textX, textY);
          ctx.fillText(text2, text2X, text2Y);
          ctx.fillStyle = oldFill;
          ctx.save();
        }
      }
    ];
    this.fileChart = {
      datasets: [
        {
          data: [300, 100],
          backgroundColor: [documentStyle.getPropertyValue("--p-primary-600"), documentStyle.getPropertyValue("--p-primary-100")],
          hoverBackgroundColor: [documentStyle.getPropertyValue("--p-primary-700"), documentStyle.getPropertyValue("--p-primary-200")],
          borderColor: "transparent",
          fill: true
        }
      ]
    };
    this.fileChartOptions = {
      animation: {
        duration: 0
      },
      cutout: "90%",
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
  static \u0275fac = function Files_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Files)(\u0275\u0275directiveInject(FileAppService), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Files, selectors: [["app-files"]], features: [\u0275\u0275ProvidersFeature([FileAppService])], decls: 51, vars: 11, consts: [["dt", ""], ["menu", ""], [1, "grid", "grid-cols-12", "gap-4"], ["class", "col-span-12 md:col-span-6 lg:col-span-3", 4, "ngFor", "ngForOf"], [1, "col-span-12", "md:col-span-5", "xl:col-span-3"], [1, "card"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold", "mb-4"], [1, "flex", "flex-row", "justify-center", 2, "height", "200px"], ["type", "doughnut", "id", "country-chart", 3, "plugins", "data", "options"], [1, "mt-8", "flex", "gap-4"], ["pButton", "", "pRipple", "", "icon", "pi pi-search", "outlined", "", "label", "Details", 1, "flex-1"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", "label", "Upgrade", 1, "flex-1"], [1, "list-none", "p-0", "m-0"], [1, "p-4", "mb-4", "flex", "items-center", "justify-between", "cursor-pointer", "rounded", "bg-indigo-50", "text-indigo-900"], [1, "flex", "items-center"], [1, "pi", "pi-image", "text-2xl", "mr-4"], [1, "text-lg", "font-medium"], [1, "text-lg", "font-bold"], [1, "p-4", "mb-4", "flex", "items-center", "justify-between", "cursor-pointer", "rounded", "bg-purple-50", "text-purple-900"], [1, "pi", "pi-file", "text-2xl", "mr-4"], [1, "p-4", "flex", "items-center", "justify-between", "cursor-pointer", "rounded", "bg-teal-50", "text-teal-900"], [1, "pi", "pi-video", "text-2xl", "mr-4"], [1, "card", "p-0!"], [1, "col-span-12", "md:col-span-7", "xl:col-span-9"], ["class", "col-span-12 md:col-span-6 xl:col-span-4", 4, "ngFor", "ngForOf"], ["responsiveLayout", "scroll", 3, "value", "rows", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "col-span-12", "md:col-span-6", "lg:col-span-3"], [1, "card", "h-full"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], ["pButton", "", "pRipple", "", "text", "", "rounded", "", "size", "small", 3, "click", "icon"], ["appendTo", "body", 3, "popup", "model"], [1, "rounded", 2, "height", "6px", 3, "ngClass"], [1, "h-full!", "rounded", 2, "width", "34%", 3, "ngClass"], [1, "flex", "align-item-center", "justify-between"], [1, "text-surface-900", "dark:text-surface-0", "mt-4", "text-md", "font-medium"], [1, "col-span-12", "md:col-span-6", "xl:col-span-4"], [1, "p-4", "border", "border-surface-200", "dark:border-surface-700", "flex", "items-center", "justify-between", "hover:bg-surface-100", "dark:hover:bg-surface-700", "cursor-pointer", "rounded"], [1, "text-2xl", "mr-4", 3, "ngClass"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium"], [1, "text-surface-600", "dark:text-surface-200", "text-lg", "font-semibold"], ["pSortableColumn", "name", 1, "white-space-nowrap", 2, "min-width", "12rem"], [1, "flex", "items-center", "gap-2"], ["field", "name"], ["pSortableColumn", "date", 1, "white-space-nowrap", 2, "min-width", "12rem"], ["field", "date"], ["pSortableColumn", "fileSize", 1, "white-space-nowrap", 2, "min-width", "12rem"], ["field", "fileSize"], [2, "width", "10rem"], [1, "text-center"], ["pButton", "", "pRipple", "", "text", "", "rounded", "", "icon", "pi pi-times", "severity", "danger", 1, "mr-2"], ["pButton", "", "pRipple", "", "text", "", "rounded", "", "icon", "pi pi-search"]], template: function Files_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, Files_div_1_Template, 17, 8, "div", 3);
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6);
      \u0275\u0275text(5, "Account Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7);
      \u0275\u0275element(7, "p-chart", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 9);
      \u0275\u0275element(9, "button", 10)(10, "button", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
      \u0275\u0275text(13, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul", 12)(15, "li", 13)(16, "div", 14);
      \u0275\u0275element(17, "i", 15);
      \u0275\u0275elementStart(18, "span", 16);
      \u0275\u0275text(19, "Images");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "span", 17);
      \u0275\u0275text(21, "85");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "li", 18)(23, "div", 14);
      \u0275\u0275element(24, "i", 19);
      \u0275\u0275elementStart(25, "span", 16);
      \u0275\u0275text(26, "Documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "span", 17);
      \u0275\u0275text(28, "231");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li", 20)(30, "div", 14);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275elementStart(32, "span", 16);
      \u0275\u0275text(33, "Videos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "span", 17);
      \u0275\u0275text(35, "40");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "div", 22);
      \u0275\u0275element(37, "app-file-uploader");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 23)(39, "div", 5)(40, "div", 6);
      \u0275\u0275text(41, "Folders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 2);
      \u0275\u0275template(43, Files_div_43_Template, 8, 3, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 5)(45, "div", 6);
      \u0275\u0275text(46, "Recent Uploads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p-table", 25, 0);
      \u0275\u0275template(49, Files_ng_template_49_Template, 14, 0, "ng-template", 26)(50, Files_ng_template_50_Template, 15, 5, "ng-template", 27);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.metrics);
      \u0275\u0275advance(6);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(10, _c02));
      \u0275\u0275property("plugins", ctx.chartPlugins)("data", ctx.fileChart)("options", ctx.fileChartOptions);
      \u0275\u0275advance(36);
      \u0275\u0275property("ngForOf", ctx.folders);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.files)("rows", 8)("paginator", true);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, MenuModule, Menu, PrimeTemplate, ButtonModule, ButtonDirective, ChartModule, UIChart, TableModule, Table, SortableColumn, SortIcon, UploaderComponent, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Files, [{
    type: Component,
    args: [{
      selector: "app-files",
      standalone: true,
      imports: [CommonModule, MenuModule, ButtonModule, ChartModule, TableModule, UploaderComponent, Ripple],
      template: `<div class="grid grid-cols-12 gap-4">
        <div *ngFor="let metric of metrics" class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="card h-full">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-surface-900 dark:text-surface-0 text-xl font-semibold">{{ metric.title }}</span>
                    <div>
                        <button pButton pRipple [icon]="metric.icon" text rounded size="small" (click)="menu.toggle($event)"></button>
                        <p-menu #menu [popup]="true" appendTo="body" [model]="menuitems"></p-menu>
                    </div>
                </div>
                <div>
                    <div [ngClass]="metric.color" class="rounded" style="height: 6px">
                        <div [ngClass]="metric.fieldColor" class="h-full! rounded" style="width:34%"></div>
                    </div>
                    <div class="flex align-item-center justify-between">
                        <span class="text-surface-900 dark:text-surface-0 mt-4 text-md font-medium">{{ metric.files }}</span>
                        <span class="text-surface-900 dark:text-surface-0 mt-4 text-md font-medium">{{ metric.fileSize }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 md:col-span-5 xl:col-span-3">
            <div class="card">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Account Storage</div>
                <div class="flex flex-row justify-center" style="height: 200px">
                    <p-chart type="doughnut" [plugins]="chartPlugins" id="country-chart" [data]="fileChart" [options]="fileChartOptions" [style]="{ width: '200px' }"></p-chart>
                </div>

                <div class="mt-8 flex gap-4">
                    <button pButton pRipple icon="pi pi-search" outlined class="flex-1" label="Details"></button>
                    <button pButton pRipple icon="pi pi-upload" class="flex-1" label="Upgrade"></button>
                </div>
            </div>

            <div class="card">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Categories</div>
                <ul class="list-none p-0 m-0">
                    <li class="p-4 mb-4 flex items-center justify-between cursor-pointer rounded bg-indigo-50 text-indigo-900">
                        <div class="flex items-center">
                            <i class="pi pi-image text-2xl mr-4"></i>
                            <span class="text-lg font-medium">Images</span>
                        </div>
                        <span class="text-lg font-bold">85</span>
                    </li>
                    <li class="p-4 mb-4 flex items-center justify-between cursor-pointer rounded bg-purple-50 text-purple-900">
                        <div class="flex items-center">
                            <i class="pi pi-file text-2xl mr-4"></i>
                            <span class="text-lg font-medium">Documents</span>
                        </div>
                        <span class="text-lg font-bold">231</span>
                    </li>
                    <li class="p-4 flex items-center justify-between cursor-pointer rounded bg-teal-50 text-teal-900">
                        <div class="flex items-center">
                            <i class="pi pi-video text-2xl mr-4"></i>
                            <span class="text-lg font-medium">Videos</span>
                        </div>
                        <span class="text-lg font-bold">40</span>
                    </li>
                </ul>
            </div>

            <div class="card p-0!">
                <app-file-uploader></app-file-uploader>
            </div>
        </div>
        <div class="col-span-12 md:col-span-7 xl:col-span-9">
            <div class="card">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Folders</div>
                <div class="grid grid-cols-12 gap-4">
                    <div *ngFor="let folder of folders" class="col-span-12 md:col-span-6 xl:col-span-4">
                        <div class="p-4 border border-surface-200 dark:border-surface-700 flex items-center justify-between hover:bg-surface-100 dark:hover:bg-surface-700 cursor-pointer rounded">
                            <div class="flex items-center">
                                <i [ngClass]="folder.icon" class="text-2xl mr-4"></i>
                                <span class="text-surface-900 dark:text-surface-0 text-lg font-medium">{{ folder.name }}</span>
                            </div>
                            <span class="text-surface-600 dark:text-surface-200 text-lg font-semibold">{{ folder.size }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="text-surface-900 dark:text-surface-0 text-xl font-semibold mb-4">Recent Uploads</div>
                <p-table responsiveLayout="scroll" #dt [value]="files" [rows]="8" [paginator]="true">
                    <ng-template pTemplate="header">
                        <tr>
                            <th pSortableColumn="name" style="min-width:12rem" class="white-space-nowrap"><span class="flex items-center gap-2">Name <p-sortIcon field="name"></p-sortIcon></span></th>
                            <th pSortableColumn="date" style="min-width:12rem" class="white-space-nowrap"><span class="flex items-center gap-2">Date <p-sortIcon field="date"></p-sortIcon></span></th>
                            <th pSortableColumn="fileSize" style="min-width:12rem" class="white-space-nowrap">
                                <span class="flex items-center gap-2">File Size
                                    <p-sortIcon field="fileSize"></p-sortIcon></span>
                            </th>
                            <th style="width:10rem"></th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-file>
                        <tr>
                            <td>
                                <div class="flex items-center">
                                    <i [class]="'text-xl text-primary mr-2 ' + file.icon"></i>
                                    <span>{{ file.name }}</span>
                                </div>
                            </td>
                            <td>
                                <span>{{ file.date }}</span>
                            </td>
                            <td>
                                <span>{{ file.fileSize }}</span>
                            </td>
                            <td class="text-center">
                                <button pButton pRipple text rounded icon="pi pi-times" severity="danger" class="mr-2"></button>
                                <button pButton pRipple text rounded icon="pi pi-search"></button>
                            </td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </div>
    </div> `,
      providers: [FileAppService]
    }]
  }], () => [{ type: FileAppService }, { type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Files, { className: "Files", filePath: "src/app/apps/files/index.ts", lineNumber: 138 });
})();
export {
  Files
};
//# sourceMappingURL=chunk-ZV7NW2X2.js.map
