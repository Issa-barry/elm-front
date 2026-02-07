import {
  Editor,
  EditorModule
} from "./chunk-VJWB66UI.js";
import {
  FileUpload,
  FileUploadModule
} from "./chunk-R25QRJYT.js";
import "./chunk-W5XR2D6E.js";
import {
  ProgressBarModule
} from "./chunk-UXWH3647.js";
import {
  Chip,
  ChipModule
} from "./chunk-IFPN5NGS.js";
import "./chunk-KZ2XEJBQ.js";
import {
  Textarea,
  TextareaModule
} from "./chunk-SNWJRZDT.js";
import "./chunk-K745LLV4.js";
import "./chunk-U3BOOR2A.js";
import "./chunk-WQC3TYUA.js";
import {
  InputText,
  InputTextModule
} from "./chunk-YW263GEX.js";
import "./chunk-HEGGX7RQ.js";
import "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import {
  Button,
  ButtonModule
} from "./chunk-O7LMIZSN.js";
import "./chunk-BNKYD7VX.js";
import {
  Badge,
  BadgeModule
} from "./chunk-XLSVDIRK.js";
import "./chunk-HURDVDQD.js";
import {
  Fluid,
  FluidModule
} from "./chunk-CUNICK74.js";
import {
  MessageService,
  PrimeNG
} from "./chunk-6R3XSTEB.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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
} from "./chunk-5J4QQBGF.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/blog/edit.ts
var _c0 = () => ({ height: "320px" });
function Edit_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "p-button", 31);
    \u0275\u0275listener("onClick", function Edit_ng_template_7_Template_p_button_onClick_2_listener($event) {
      const chooseCallback_r3 = \u0275\u0275restoreView(_r2).chooseCallback;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.choose($event, chooseCallback_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-button", 32);
    \u0275\u0275listener("onClick", function Edit_ng_template_7_Template_p_button_onClick_3_listener() {
      const uploadCallback_r5 = \u0275\u0275restoreView(_r2).uploadCallback;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.uploadEvent(uploadCallback_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 33);
    \u0275\u0275listener("onClick", function Edit_ng_template_7_Template_p_button_onClick_4_listener() {
      const clearCallback_r6 = \u0275\u0275restoreView(_r2).clearCallback;
      return \u0275\u0275resetView(clearCallback_r6());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const files_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true)("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true)("disabled", !files_r7 || files_r7.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("outlined", true)("disabled", !files_r7 || files_r7.length === 0);
  }
}
function Edit_ng_template_9_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div");
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-badge", 41);
    \u0275\u0275elementStart(8, "p-button", 42);
    \u0275\u0275listener("click", function Edit_ng_template_9_div_1_div_2_Template_p_button_click_8_listener($event) {
      const ctx_r8 = \u0275\u0275restoreView(_r8);
      const file_r10 = ctx_r8.$implicit;
      const i_r11 = ctx_r8.index;
      const removeFileCallback_r12 = \u0275\u0275nextContext(2).removeFileCallback;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onRemoveTemplatingFile($event, file_r10, removeFileCallback_r12, i_r11));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", file_r10.name)("src", file_r10.objectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatSize(file_r10.size));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function Edit_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 36);
    \u0275\u0275template(2, Edit_ng_template_9_div_1_div_2_Template, 9, 6, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const files_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", files_r13);
  }
}
function Edit_ng_template_9_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div");
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "p-badge", 45);
    \u0275\u0275elementStart(8, "p-button", 46);
    \u0275\u0275listener("onClick", function Edit_ng_template_9_div_2_div_4_Template_p_button_onClick_8_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const removeUploadedFileCallback_r16 = \u0275\u0275nextContext(2).removeUploadedFileCallback;
      return \u0275\u0275resetView(removeUploadedFileCallback_r16(i_r15));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r17 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", file_r17.name)("src", file_r17.objectURL, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(file_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatSize(file_r17.size));
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true)("rounded", true);
  }
}
function Edit_ng_template_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h5");
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275template(4, Edit_ng_template_9_div_2_div_4_Template, 9, 6, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const uploadedFiles_r18 = \u0275\u0275nextContext().uploadedFiles;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", uploadedFiles_r18);
  }
}
function Edit_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, Edit_ng_template_9_div_1_Template, 3, 1, "div", 35)(2, Edit_ng_template_9_div_2_Template, 5, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const files_r13 = ctx.$implicit;
    const uploadedFiles_r18 = ctx.uploadedFiles;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (files_r13 == null ? null : files_r13.length) > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (uploadedFiles_r18 == null ? null : uploadedFiles_r18.length) > 0);
  }
}
function Edit_ng_template_11_Template(rf, ctx) {
}
function Edit_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function Edit_ng_template_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      \u0275\u0275nextContext();
      const uploader_r20 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(uploader_r20.choose());
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementStart(2, "p", 49);
    \u0275\u0275text(3, "Drag and drop files to here to upload.");
    \u0275\u0275elementEnd()();
  }
}
function Edit_p_chip_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-chip", 50);
  }
  if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    \u0275\u0275property("label", tag_r21);
    \u0275\u0275attribute("key", i_r22);
  }
}
var Edit = class _Edit {
  config;
  messageService;
  tags = ["Software", "Web"];
  files = [];
  totalSize = 0;
  totalSizePercent = 0;
  constructor(config, messageService) {
    this.config = config;
    this.messageService = messageService;
  }
  choose(event, callback) {
    callback();
  }
  onRemoveTemplatingFile(event, file, removeFileCallback, index) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }
  onTemplatedUpload() {
    this.messageService.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3e3 });
  }
  onSelectedFiles(event) {
    this.files = event.currentFiles;
    this.files.forEach((file) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;
  }
  uploadEvent(callback) {
    callback();
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation.fileSizeTypes;
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
    return `${formattedSize} ${sizes[i]}`;
  }
  static \u0275fac = function Edit_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Edit)(\u0275\u0275directiveInject(PrimeNG), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Edit, selectors: [["app-edit"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 56, vars: 5, consts: [["uploader", ""], ["header", ""], ["content", ""], ["file", ""], ["empty", ""], [1, "card"], [1, "block", "text-surface-900", "dark:text-surface-0", "font-bold", "text-xl", "mb-6"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "lg:col-span-8"], ["name", "myfile[]", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", "maxFileSize", "1000000", 3, "onUpload", "onSelect", "multiple"], [1, "flex", "flex-col"], [1, "mb-6", "mt-4"], ["pInputText", "", "type", "text", "placeholder", "Title"], [1, "mb-6"], ["pTextarea", "", "rows", "6", "placeholder", "Content", "autoResize", ""], [1, "col-span-12", "lg:col-span-4"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "block", "border-b", "border-surface-200", "dark:border-surface-700", "p-4"], [1, "p-4"], [1, "bg-surface-100", "dark:bg-surface-700", "p-4", "flex", "items-center", "rounded"], [1, "text-surface-900", "dark:text-surface-0", "font-semibold", "mr-4"], [1, "font-medium"], ["type", "button", "icon", "pi pi-fw pi-pencil", "text", "", "rounded", "", 1, "ml-auto"], [1, "p-4", "flex", "gap-2"], [3, "label", 4, "ngFor", "ngForOf"], ["pTextarea", "", "rows", "6", "placeholder", "Description", "autoResize", ""], [1, "flex", "justify-between", "gap-4"], ["styleClass", "w-full", "severity", "danger", "outlined", "", "label", "Discard", "icon", "pi pi-fw pi-trash", 1, "flex-1"], ["styleClass", "w-full", "label", "Publish", "icon", "pi pi-fw pi-check", 1, "flex-1"], [1, "flex", "flex-wrap", "justify-between", "items-center", "flex-1", "gap-4"], [1, "flex", "gap-2"], ["icon", "pi pi-images", 3, "onClick", "rounded", "outlined"], ["icon", "pi pi-cloud-upload", "severity", "success", 3, "onClick", "rounded", "outlined", "disabled"], ["icon", "pi pi-times", "severity", "danger", 3, "onClick", "rounded", "outlined", "disabled"], [1, "flex", "flex-col", "gap-8", "pt-4"], [4, "ngIf"], [1, "flex", "flex-wrap", "gap-4"], ["class", "p-8 rounded-border flex flex-col border border-surface items-center gap-4", 4, "ngFor", "ngForOf"], [1, "p-8", "rounded-border", "flex", "flex-col", "border", "border-surface", "items-center", "gap-4"], ["role", "presentation", "width", "100", "height", "50", 3, "alt", "src"], [1, "font-semibold", "text-ellipsis", "max-w-60", "whitespace-nowrap", "overflow-hidden"], ["value", "Pending", "severity", "warn"], ["icon", "pi pi-times", "severity", "danger", 3, "click", "outlined", "rounded"], ["class", "card m-0 px-12 flex flex-col border border-surface items-center gap-4", 4, "ngFor", "ngForOf"], [1, "card", "m-0", "px-12", "flex", "flex-col", "border", "border-surface", "items-center", "gap-4"], ["value", "Completed", "severity", "success", 1, "mt-4"], ["icon", "pi pi-times", "severity", "danger", 3, "onClick", "outlined", "rounded"], [1, "flex", "items-center", "justify-center", "flex-col", 3, "click"], [1, "pi", "pi-cloud-upload", "border-2!", "rounded-full!", "p-8!", "text-4xl!", "text-muted-color!"], [1, "mt-6", "mb-0"], [3, "label"]], template: function Edit_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
      \u0275\u0275text(2, "Create a new post");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "p-fileupload", 9, 0);
      \u0275\u0275listener("onUpload", function Edit_Template_p_fileupload_onUpload_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTemplatedUpload());
      })("onSelect", function Edit_Template_p_fileupload_onSelect_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectedFiles($event));
      });
      \u0275\u0275template(7, Edit_ng_template_7_Template, 5, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, Edit_ng_template_9_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, Edit_ng_template_11_Template, 0, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, Edit_ng_template_13_Template, 4, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-fluid", 10)(16, "div", 11);
      \u0275\u0275element(17, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 13);
      \u0275\u0275element(19, "textarea", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "p-editor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "span", 17);
      \u0275\u0275text(24, "Publish");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 18)(26, "div", 19)(27, "span", 20);
      \u0275\u0275text(28, "Status:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 21);
      \u0275\u0275text(30, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "p-button", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "span", 20);
      \u0275\u0275text(35, "Visibility:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 21);
      \u0275\u0275text(37, "Private");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "p-button", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 16)(40, "span", 17);
      \u0275\u0275text(41, "Tags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23);
      \u0275\u0275template(43, Edit_p_chip_43_Template, 1, 2, "p-chip", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p-fluid")(45, "div", 16)(46, "span", 17);
      \u0275\u0275text(47, "Meta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "div", 13);
      \u0275\u0275element(50, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div");
      \u0275\u0275element(52, "textarea", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "div", 26);
      \u0275\u0275element(54, "p-button", 27)(55, "p-button", 28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("multiple", true);
      \u0275\u0275advance(15);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c0));
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.tags);
    }
  }, dependencies: [FileUploadModule, FileUpload, ChipModule, Chip, InputTextModule, InputText, TextareaModule, Textarea, ButtonModule, Button, CommonModule, NgForOf, NgIf, FluidModule, Fluid, EditorModule, Editor, BadgeModule, Badge, ProgressBarModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Edit, [{
    type: Component,
    args: [{
      selector: "app-edit",
      standalone: true,
      imports: [FileUploadModule, ChipModule, InputTextModule, TextareaModule, ButtonModule, CommonModule, FluidModule, EditorModule, BadgeModule, ProgressBarModule],
      template: `<div class="card">
        <span class="block text-surface-900 dark:text-surface-0 font-bold text-xl mb-6">Create a new post</span>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-8">
                <p-fileupload #uploader name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000" (onUpload)="onTemplatedUpload()" (onSelect)="onSelectedFiles($event)">
                    <ng-template #header let-files let-chooseCallback="chooseCallback" let-clearCallback="clearCallback" let-uploadCallback="uploadCallback">
                        <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                            <div class="flex gap-2">
                                <p-button (onClick)="choose($event, chooseCallback)" icon="pi pi-images" [rounded]="true" [outlined]="true" />
                                <p-button (onClick)="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" [rounded]="true" [outlined]="true" severity="success" [disabled]="!files || files.length === 0" />
                                <p-button (onClick)="clearCallback()" icon="pi pi-times" [rounded]="true" [outlined]="true" severity="danger" [disabled]="!files || files.length === 0" />
                            </div>
                        </div>
                    </ng-template>
                    <ng-template #content let-files let-uploadedFiles="uploadedFiles" let-removeFileCallback="removeFileCallback" let-removeUploadedFileCallback="removeUploadedFileCallback">
                        <div class="flex flex-col gap-8 pt-4">
                            <div *ngIf="files?.length > 0">
                                <div class="flex flex-wrap gap-4">
                                    <div *ngFor="let file of files; let i = index" class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                                        <div>
                                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                                        </div>
                                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                                        <div>{{ formatSize(file.size) }}</div>
                                        <p-badge value="Pending" severity="warn" />
                                        <p-button icon="pi pi-times" (click)="onRemoveTemplatingFile($event, file, removeFileCallback, i)" [outlined]="true" [rounded]="true" severity="danger" />
                                    </div>
                                </div>
                            </div>
                            <div *ngIf="uploadedFiles?.length > 0">
                                <h5>Completed</h5>
                                <div class="flex flex-wrap gap-4">
                                    <div *ngFor="let file of uploadedFiles; let i = index" class="card m-0 px-12 flex flex-col border border-surface items-center gap-4">
                                        <div>
                                            <img role="presentation" [alt]="file.name" [src]="file.objectURL" width="100" height="50" />
                                        </div>
                                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{ file.name }}</span>
                                        <div>{{ formatSize(file.size) }}</div>
                                        <p-badge value="Completed" class="mt-4" severity="success" />
                                        <p-button icon="pi pi-times" (onClick)="removeUploadedFileCallback(i)" [outlined]="true" [rounded]="true" severity="danger" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ng-template>
                    <ng-template #file></ng-template>
                    <ng-template #empty>
                        <div class="flex items-center justify-center flex-col" (click)="uploader.choose()">
                            <i class="pi pi-cloud-upload border-2! rounded-full! p-8! text-4xl! text-muted-color!"></i>
                            <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
                        </div>
                    </ng-template>
                </p-fileupload>
                <p-fluid class="flex flex-col">
                    <div class="mb-6 mt-4">
                        <input pInputText type="text" placeholder="Title" />
                    </div>
                    <div class="mb-6">
                        <textarea pTextarea rows="6" placeholder="Content" autoResize></textarea>
                    </div>

                    <p-editor [style]="{ height: '320px' }"></p-editor>
                </p-fluid>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <div class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Publish</span>
                    <div class="p-4">
                        <div class="bg-surface-100 dark:bg-surface-700 p-4 flex items-center rounded">
                            <span class="text-surface-900 dark:text-surface-0 font-semibold mr-4">Status:</span>
                            <span class="font-medium">Draft</span>
                            <p-button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></p-button>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="bg-surface-100 dark:bg-surface-700 p-4 flex items-center rounded">
                            <span class="text-surface-900 dark:text-surface-0 font-semibold mr-4">Visibility:</span>
                            <span class="font-medium">Private</span>
                            <p-button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></p-button>
                        </div>
                    </div>
                </div>
                <div class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                    <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Tags</span>
                    <div class="p-4 flex gap-2">
                        <p-chip *ngFor="let tag of tags; let i = index" [label]="tag" [attr.key]="i"></p-chip>
                    </div>
                </div>
                <p-fluid>
                    <div class="border border-surface-200 dark:border-surface-700 rounded mb-6">
                        <span class="text-surface-900 dark:text-surface-0 font-bold block border-b border-surface-200 dark:border-surface-700 p-4">Meta</span>
                        <div class="p-4">
                            <div class="mb-6">
                                <input pInputText type="text" placeholder="Title" />
                            </div>
                            <div>
                                <textarea pTextarea rows="6" placeholder="Description" autoResize></textarea>
                            </div>
                        </div>
                    </div>
                </p-fluid>
                <div class="flex justify-between gap-4">
                    <p-button class="flex-1" styleClass="w-full" severity="danger" outlined label="Discard" icon="pi pi-fw pi-trash"></p-button>
                    <p-button class="flex-1" styleClass="w-full" label="Publish" icon="pi pi-fw pi-check"></p-button>
                </div>
            </div>
        </div>
    </div> `,
      providers: [MessageService]
    }]
  }], () => [{ type: PrimeNG }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Edit, { className: "Edit", filePath: "src/app/apps/blog/edit.ts", lineNumber: 129 });
})();
export {
  Edit
};
//# sourceMappingURL=chunk-Q7UCOZ3E.js.map
