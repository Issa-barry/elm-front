import {
  MailTableComponent
} from "./chunk-6RUIM7YV.js";
import {
  MailService
} from "./chunk-3CBWNH3F.js";
import "./chunk-UT5RTLTV.js";
import "./chunk-IMEEYTRL.js";
import "./chunk-PBCUKRJ4.js";
import "./chunk-P3S4PXJW.js";
import "./chunk-N3I2MPIX.js";
import "./chunk-4WV22ZEZ.js";
import "./chunk-C5GRAO6X.js";
import "./chunk-TECCOVZK.js";
import "./chunk-ANXFJYSG.js";
import "./chunk-GTKNBISE.js";
import "./chunk-LDZPSMHJ.js";
import "./chunk-XMFE765I.js";
import "./chunk-VFC4ZGOV.js";
import "./chunk-DS6WDG7G.js";
import "./chunk-DBXKSYQP.js";
import "./chunk-D4DB7G5Q.js";
import "./chunk-UQFVREV6.js";
import "./chunk-J7PQPFQ2.js";
import "./chunk-JDFDUAZW.js";
import "./chunk-GNS5B2OF.js";
import "./chunk-HXWKNUGV.js";
import "./chunk-NGVVFXIQ.js";
import "./chunk-7U237DEN.js";
import "./chunk-2UOA5RIX.js";
import "./chunk-GSLAPXC6.js";
import "./chunk-RNBHJ3IS.js";
import "./chunk-XCVSS3ID.js";
import "./chunk-URQMWJE6.js";
import "./chunk-DQKWWXZT.js";
import "./chunk-FGSFU6DI.js";
import "./chunk-55R5VFNU.js";
import "./chunk-4WKDSNIY.js";
import "./chunk-KWGIJUAU.js";
import "./chunk-ORG54PNZ.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3DMR3ILK.js";
import "./chunk-73OLBEDX.js";
import "./chunk-U4SWEEQT.js";
import "./chunk-WLMAONDN.js";
import "./chunk-CUJZFPFM.js";
import "./chunk-MGF35FP6.js";
import "./chunk-AR53T6NL.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-SKXAAURP.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-starred.ts
var MailStarredComponent = class _MailStarredComponent {
  mailService;
  starredMails = [];
  subscription;
  constructor(mailService) {
    this.mailService = mailService;
    this.subscription = this.mailService.mails$.subscribe((data) => {
      this.starredMails = data.filter((d) => d.starred && !d.archived && !d.trash);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function MailStarredComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailStarredComponent)(\u0275\u0275directiveInject(MailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailStarredComponent, selectors: [["app-mail-starred"]], decls: 1, vars: 1, consts: [[3, "mails"]], template: function MailStarredComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-mail-table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("mails", ctx.starredMails);
    }
  }, dependencies: [MailTableComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailStarredComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-starred",
      standalone: true,
      imports: [MailTableComponent],
      template: `<app-mail-table [mails]="starredMails"></app-mail-table>`
    }]
  }], () => [{ type: MailService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailStarredComponent, { className: "MailStarredComponent", filePath: "src/app/apps/mail/mail-starred.ts", lineNumber: 14 });
})();
export {
  MailStarredComponent
};
//# sourceMappingURL=chunk-LFOFKWGK.js.map
