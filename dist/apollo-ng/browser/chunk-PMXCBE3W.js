import {
  FileUpload,
  FileUploadModule
} from "./chunk-PXXCZHHU.js";
import "./chunk-FAXGIH27.js";
import "./chunk-LY2SL74U.js";
import {
  Toast,
  ToastModule
} from "./chunk-MIKKBFN3.js";
import "./chunk-IAPVHBD4.js";
import "./chunk-MT6PN7RC.js";
import "./chunk-TITTMCJA.js";
import "./chunk-TEXAILZL.js";
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
import {
  MessageService
} from "./chunk-JRTE2WST.js";
import {
  CommonModule
} from "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/pages/uikit/filedemo.ts
function FileDemo_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "Drag and drop files to here to upload.");
    \u0275\u0275elementEnd();
  }
}
var FileDemo = class _FileDemo {
  messageService;
  uploadedFiles = [];
  basicUploadedFiles = [];
  constructor(messageService) {
    this.messageService = messageService;
  }
  onUpload(event, arg) {
    if (arg === "basic") {
      for (const file of event.files) {
        this.basicUploadedFiles.push(file);
      }
    } else {
      for (const file of event.files) {
        this.uploadedFiles.push(file);
      }
    }
    this.messageService.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded"
    });
  }
  onBasicUpload() {
    this.messageService.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded with Basic Mode"
    });
  }
  static \u0275fac = function FileDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileDemo)(\u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileDemo, selectors: [["app-file-demo"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 17, vars: 1, consts: [["empty", ""], ["fu", ""], [1, "grid", "grid-cols-12", "gap-8"], [1, "col-span-full", "lg:col-span-6"], [1, "card"], [1, "font-semibold", "text-xl", "mb-6"], ["name", "demo1[]", "accept", "image/*", "maxFileSize", "1000000", "mode", "advanced", "url", "https://www.primefaces.org/cdn/api/upload.php", 3, "onUpload", "multiple"], [1, "flex", "flex-col", "gap-6", "items-center", "justify-center"], ["mode", "basic", "chooseLabel", "Choose", "chooseIcon", "pi pi-upload", "name", "demo2[]", "url", "https://www.primefaces.org/cdn/api/upload.php", "accept", "image/*", "maxFileSize", "1000000", 3, "onUpload"], ["label", "Upload", "severity", "secondary", 3, "onClick"]], template: function FileDemo_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
      \u0275\u0275text(5, "Advanced");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-fileupload", 6);
      \u0275\u0275listener("onUpload", function FileDemo_Template_p_fileupload_onUpload_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpload($event, "advanced"));
      });
      \u0275\u0275template(7, FileDemo_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5);
      \u0275\u0275text(12, "Basic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 7)(14, "p-fileupload", 8, 1);
      \u0275\u0275listener("onUpload", function FileDemo_Template_p_fileupload_onUpload_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUpload($event, "basic"));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-button", 9);
      \u0275\u0275listener("onClick", function FileDemo_Template_p_button_onClick_16_listener() {
        \u0275\u0275restoreView(_r1);
        const fu_r2 = \u0275\u0275reference(15);
        return \u0275\u0275resetView(fu_r2.upload());
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("multiple", true);
    }
  }, dependencies: [CommonModule, FileUploadModule, FileUpload, ToastModule, Toast, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileDemo, [{
    type: Component,
    args: [{
      selector: "app-file-demo",
      standalone: true,
      imports: [CommonModule, FileUploadModule, ToastModule, ButtonModule],
      template: `<p-toast />
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-full lg:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-6">Advanced</div>
                    <p-fileupload name="demo1[]" (onUpload)="onUpload($event, 'advanced')" [multiple]="true" accept="image/*" maxFileSize="1000000" mode="advanced" url="https://www.primefaces.org/cdn/api/upload.php">
                        <ng-template #empty>
                            <div>Drag and drop files to here to upload.</div>
                        </ng-template>
                    </p-fileupload>
                </div>
            </div>
            <div class="col-span-full lg:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-6">Basic</div>
                    <div class="flex flex-col gap-6 items-center justify-center">
                        <p-fileupload #fu mode="basic" chooseLabel="Choose" chooseIcon="pi pi-upload" name="demo2[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event, 'basic')" />
                        <p-button label="Upload" (onClick)="fu.upload()" severity="secondary" />
                    </div>
                </div>
            </div>
        </div>`,
      providers: [MessageService]
    }]
  }], () => [{ type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileDemo, { className: "FileDemo", filePath: "src/app/pages/uikit/filedemo.ts", lineNumber: 36 });
})();
export {
  FileDemo
};
//# sourceMappingURL=chunk-PMXCBE3W.js.map
