import {
  MailTableComponent
} from "./chunk-QZHVZLCM.js";
import {
  MailService
} from "./chunk-ATIUGIIW.js";
import "./chunk-ZIMY6V3U.js";
import "./chunk-XS7CMRW3.js";
import "./chunk-6UUT5PLM.js";
import "./chunk-CUNTOMMK.js";
import "./chunk-ZDDMG6HG.js";
import "./chunk-RDWQPZ6C.js";
import "./chunk-5BMWV7F3.js";
import "./chunk-YUBBUZ6W.js";
import "./chunk-GUP2PCS6.js";
import "./chunk-ZFKFGXE3.js";
import "./chunk-Z7ZKYBW2.js";
import "./chunk-QWVYTRV2.js";
import "./chunk-75CKZPHG.js";
import "./chunk-VT4FEFQM.js";
import "./chunk-L5ZX63AX.js";
import "./chunk-ZAIBSTL5.js";
import "./chunk-V6PRFSIJ.js";
import "./chunk-WVMZKPPT.js";
import "./chunk-YCFI2AFC.js";
import "./chunk-4J4YC6YG.js";
import "./chunk-AGLSA46G.js";
import "./chunk-3JVPVW6A.js";
import "./chunk-VCYPUXCC.js";
import "./chunk-7JWM7J45.js";
import "./chunk-5IJ6RLG6.js";
import "./chunk-DN6EAZ7J.js";
import "./chunk-7PC7QT7C.js";
import "./chunk-L3QYT2V6.js";
import "./chunk-2HP6QM3D.js";
import "./chunk-2UXUSHFD.js";
import "./chunk-T4T6HQ4A.js";
import "./chunk-QFHQ36EE.js";
import "./chunk-F6SKB3CY.js";
import "./chunk-JYS7P26Z.js";
import "./chunk-WEMW4IDS.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-US7FFCOY.js";
import "./chunk-N5SOATWJ.js";
import "./chunk-QAAAVCDU.js";
import "./chunk-QXL6UX2T.js";
import "./chunk-CNYAMY4G.js";
import "./chunk-BBWBDWCR.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-GLCXFY3U.js";
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
//# sourceMappingURL=chunk-N2FPRBRE.js.map
