import {
  MailTableComponent
} from "./chunk-CSWW5N7Z.js";
import {
  MailService
} from "./chunk-AS2WIBRP.js";
import "./chunk-T2U732SU.js";
import "./chunk-O4RS2AH2.js";
import "./chunk-MIZEJNDH.js";
import "./chunk-PZSC3TY3.js";
import "./chunk-2BDEB7LG.js";
import "./chunk-JKQZ5BV4.js";
import "./chunk-DPFCOBAB.js";
import "./chunk-XO5M4PM6.js";
import "./chunk-LQXVUL2Q.js";
import "./chunk-FF4N4CLH.js";
import "./chunk-XJQGXQLA.js";
import "./chunk-ARPTZP2S.js";
import "./chunk-ZU6Q6GY5.js";
import "./chunk-PNSSQ266.js";
import "./chunk-MTEYTWK3.js";
import "./chunk-GHZLKCNE.js";
import "./chunk-EAAVSGUN.js";
import "./chunk-IEELAHW7.js";
import "./chunk-XXM474KR.js";
import "./chunk-5ICIOC3M.js";
import "./chunk-EHW3ML5B.js";
import "./chunk-VG7UIPHA.js";
import "./chunk-K7KGEHY2.js";
import "./chunk-HMZDW5SQ.js";
import "./chunk-VSFYXY5S.js";
import "./chunk-ADI47BO7.js";
import "./chunk-2ASVPUFF.js";
import "./chunk-GNGM6ZBM.js";
import "./chunk-VA6E3YEN.js";
import "./chunk-LK4MJDWN.js";
import "./chunk-STJD6333.js";
import "./chunk-OKTFETPA.js";
import "./chunk-HDOAYFIF.js";
import "./chunk-K2CZRXIH.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-V6ACHPKV.js";
import "./chunk-ZB6W2VB3.js";
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
//# sourceMappingURL=chunk-5EU5PO7X.js.map
