import {
  MailTableComponent
} from "./chunk-IH7ZJXLS.js";
import {
  MailService
} from "./chunk-RXXZWDVF.js";
import "./chunk-52EX6RZS.js";
import "./chunk-ZN34QKXD.js";
import "./chunk-6KOCBW73.js";
import "./chunk-63LERGF7.js";
import "./chunk-SX3K2HBE.js";
import "./chunk-A2YYJMVO.js";
import "./chunk-AQI53E5O.js";
import "./chunk-CIZBK6XP.js";
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
import "./chunk-PPMOL7YY.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import "./chunk-65XIZQ4E.js";
import "./chunk-VGWO7IEC.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-UJSDGQXU.js";
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
//# sourceMappingURL=chunk-6ULO5E6I.js.map
