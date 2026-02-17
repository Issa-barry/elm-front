import {
  MailTableComponent
} from "./chunk-5BY2YHIA.js";
import {
  MailService
} from "./chunk-5PVURSOH.js";
import "./chunk-27IZNIO6.js";
import "./chunk-TRIT2AYT.js";
import "./chunk-HBQ7KAGJ.js";
import "./chunk-A2LLWIIX.js";
import "./chunk-RTHJZPEL.js";
import {
  Router
} from "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import "./chunk-QPQPF4QG.js";
import "./chunk-5SLVYV4D.js";
import "./chunk-3C4VBMIP.js";
import "./chunk-XSYQJ4W6.js";
import "./chunk-XMHI6SP7.js";
import "./chunk-3RHV3JZZ.js";
import "./chunk-M77IAYSM.js";
import "./chunk-F2DIVMZG.js";
import "./chunk-JMIE4XN5.js";
import "./chunk-YVCVOBBF.js";
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
import "./chunk-VJUJTGB6.js";
import "./chunk-3ISV5J4X.js";
import "./chunk-SJAYAKU2.js";
import "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import "./chunk-JRTE2WST.js";
import "./chunk-A6EA4TT7.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-inbox.ts
var MailInboxComponent = class _MailInboxComponent {
  mailService;
  router;
  mails = [];
  subscription;
  constructor(mailService, router) {
    this.mailService = mailService;
    this.router = router;
    this.subscription = this.mailService.mails$.subscribe((data) => {
      this.mails = data.filter((d) => !d.archived && !d.spam && !d.trash && !d.hasOwnProperty("sent"));
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function MailInboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailInboxComponent)(\u0275\u0275directiveInject(MailService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailInboxComponent, selectors: [["app-mail-inbox"]], decls: 1, vars: 1, consts: [[3, "mails"]], template: function MailInboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-mail-table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("mails", ctx.mails);
    }
  }, dependencies: [MailTableComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailInboxComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-inbox",
      standalone: true,
      imports: [MailTableComponent],
      template: `<app-mail-table [mails]="mails"></app-mail-table>`
    }]
  }], () => [{ type: MailService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailInboxComponent, { className: "MailInboxComponent", filePath: "src/app/apps/mail/mail-inbox.ts", lineNumber: 14 });
})();
export {
  MailInboxComponent
};
//# sourceMappingURL=chunk-PGGY77DR.js.map
