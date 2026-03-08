import {
  MailTableComponent
} from "./chunk-73IW7ZCW.js";
import {
  MailService
} from "./chunk-VOG6UGHM.js";
import "./chunk-ZGHF2UEP.js";
import "./chunk-7JELPVHZ.js";
import "./chunk-DQ6PDXZL.js";
import "./chunk-V3RXVO6V.js";
import "./chunk-H7UPSY5A.js";
import "./chunk-5M76Y6O2.js";
import "./chunk-B555S3BB.js";
import "./chunk-YIRPSO3A.js";
import "./chunk-TK4BOLNL.js";
import "./chunk-IVTZJVRN.js";
import "./chunk-WYPIUMEN.js";
import "./chunk-LFNR57IJ.js";
import "./chunk-CVJBRNAF.js";
import "./chunk-SW4MZC6Q.js";
import "./chunk-25MJSVSI.js";
import "./chunk-QBTCSFIV.js";
import "./chunk-QRW46MGS.js";
import "./chunk-OWOPR7KK.js";
import "./chunk-LPYK5F7X.js";
import "./chunk-T2TIS5GO.js";
import "./chunk-YTLGTLNQ.js";
import "./chunk-PTG476NB.js";
import "./chunk-OP4G3N4V.js";
import "./chunk-QSEARSIQ.js";
import "./chunk-RZNPFGUI.js";
import "./chunk-6E4MQ4P5.js";
import "./chunk-LXNRGYDD.js";
import "./chunk-X57GOT3J.js";
import "./chunk-ZJMXLI5D.js";
import "./chunk-BF3NO5XV.js";
import "./chunk-YSXAGVDG.js";
import "./chunk-LSX5YOHQ.js";
import "./chunk-P6BGZM46.js";
import "./chunk-URYLESXH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-4A7IHHEF.js";
import "./chunk-VB3XNU3Q.js";
import "./chunk-BKCBW4AP.js";
import "./chunk-SCR42GDN.js";
import "./chunk-CBEWEUNZ.js";
import "./chunk-AGBUVBVL.js";
import "./chunk-T6X6TYBW.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-HXF2V74O.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-archive.ts
var MailArchiveComponent = class _MailArchiveComponent {
  mailService;
  archivedMails = [];
  subscription;
  constructor(mailService) {
    this.mailService = mailService;
    this.subscription = this.mailService.mails$.subscribe((data) => {
      this.archivedMails = data.filter((d) => d.archived);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function MailArchiveComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailArchiveComponent)(\u0275\u0275directiveInject(MailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailArchiveComponent, selectors: [["app-mail-archive"]], decls: 1, vars: 1, consts: [[3, "mails"]], template: function MailArchiveComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-mail-table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("mails", ctx.archivedMails);
    }
  }, dependencies: [MailTableComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailArchiveComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-archive",
      standalone: true,
      imports: [MailTableComponent],
      template: `<app-mail-table [mails]="archivedMails"></app-mail-table>`
    }]
  }], () => [{ type: MailService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailArchiveComponent, { className: "MailArchiveComponent", filePath: "src/app/apps/mail/mail-archive.ts", lineNumber: 13 });
})();
export {
  MailArchiveComponent
};
//# sourceMappingURL=chunk-CYO6RKW3.js.map
