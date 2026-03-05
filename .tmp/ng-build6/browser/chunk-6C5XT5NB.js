import {
  MailTableComponent
} from "./chunk-XN2W7H2S.js";
import {
  MailService
} from "./chunk-AS2WIBRP.js";
import "./chunk-T2U732SU.js";
import "./chunk-O4RS2AH2.js";
import "./chunk-MIZEJNDH.js";
import "./chunk-DQ4T5ATO.js";
import "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-2BDEB7LG.js";
import "./chunk-5YYGCZZ3.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-36C26MQ6.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import "./chunk-DB24SVBI.js";
import "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-IEELAHW7.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import "./chunk-K7KGEHY2.js";
import "./chunk-MHHPFZ62.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-VA6E3YEN.js";
import "./chunk-LK4MJDWN.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-ZB6W2VB3.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-IRKOPIT4.js";
import "./chunk-6MK22ZAB.js";
import "./chunk-37IESOSH.js";
import "./chunk-EC5CTPX4.js";
import "./chunk-TGBATRWC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-ZUORBSMF.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-sent.ts
var MailSentComponent = class _MailSentComponent {
  mailService;
  sentMails = [];
  subscription;
  constructor(mailService) {
    this.mailService = mailService;
    this.subscription = this.mailService.mails$.subscribe((data) => {
      this.sentMails = data.filter((d) => d.sent && !d.trash && !d.archived);
    });
  }
  static \u0275fac = function MailSentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailSentComponent)(\u0275\u0275directiveInject(MailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailSentComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "mails"]], template: function MailSentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-mail-table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("mails", ctx.sentMails);
    }
  }, dependencies: [MailTableComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailSentComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [MailTableComponent],
      template: `<app-mail-table [mails]="sentMails"></app-mail-table>`
    }]
  }], () => [{ type: MailService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailSentComponent, { className: "MailSentComponent", filePath: "src/app/apps/mail/mail-sent.ts", lineNumber: 12 });
})();
export {
  MailSentComponent
};
//# sourceMappingURL=chunk-6C5XT5NB.js.map
