import {
  MailTableComponent
} from "./chunk-TOWBEXT5.js";
import {
  MailService
} from "./chunk-UTEQBENV.js";
import "./chunk-2GJLLVBV.js";
import "./chunk-JSOL5EHL.js";
import "./chunk-VJWB66UI.js";
import "./chunk-GU6CNOKS.js";
import "./chunk-VYPJWBQM.js";
import "./chunk-K745LLV4.js";
import "./chunk-QM3EJKHT.js";
import "./chunk-VYTCGADS.js";
import "./chunk-HX6AAUEU.js";
import "./chunk-U3BOOR2A.js";
import "./chunk-ATTBT5LJ.js";
import "./chunk-M54353BN.js";
import "./chunk-S7EQZUZC.js";
import "./chunk-FT7WFYEI.js";
import "./chunk-H2TDPVQC.js";
import "./chunk-GM56SEQR.js";
import "./chunk-OYDBCBVT.js";
import "./chunk-ADT2GN44.js";
import "./chunk-X3MCY454.js";
import "./chunk-BICDQRLL.js";
import "./chunk-JPETFPPG.js";
import "./chunk-KG7RE235.js";
import "./chunk-UHMM7FE7.js";
import "./chunk-SUK52LSR.js";
import "./chunk-3UGMWDW4.js";
import "./chunk-UONKXDMG.js";
import "./chunk-KFLL2YOX.js";
import "./chunk-WQC3TYUA.js";
import "./chunk-EXWZQDGS.js";
import "./chunk-YW263GEX.js";
import "./chunk-HEGGX7RQ.js";
import "./chunk-HZAHIETM.js";
import "./chunk-UXOAS4MB.js";
import "./chunk-BVWUZ6O2.js";
import "./chunk-O7LMIZSN.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-BNKYD7VX.js";
import "./chunk-XLSVDIRK.js";
import "./chunk-HURDVDQD.js";
import "./chunk-CUNICK74.js";
import "./chunk-6R3XSTEB.js";
import "./chunk-KASXF2RH.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-5J4QQBGF.js";
import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-spam.ts
var MailSpamComponent = class _MailSpamComponent {
  mailService;
  spamMails;
  subscription;
  constructor(mailService) {
    this.mailService = mailService;
    this.subscription = this.mailService.mails$.subscribe((data) => {
      this.spamMails = data.filter((d) => d.spam && !d.archived && !d.trash && !d.hasOwnProperty("sent"));
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static \u0275fac = function MailSpamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailSpamComponent)(\u0275\u0275directiveInject(MailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailSpamComponent, selectors: [["app-mail-spam"]], decls: 1, vars: 1, consts: [[3, "mails"]], template: function MailSpamComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-mail-table", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("mails", ctx.spamMails);
    }
  }, dependencies: [MailTableComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailSpamComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-spam",
      standalone: true,
      imports: [MailTableComponent],
      template: `<app-mail-table [mails]="spamMails"></app-mail-table> `
    }]
  }], () => [{ type: MailService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailSpamComponent, { className: "MailSpamComponent", filePath: "src/app/apps/mail/mail-spam.ts", lineNumber: 13 });
})();
export {
  MailSpamComponent
};
//# sourceMappingURL=chunk-4K35Z5SO.js.map
