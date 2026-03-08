import {
  MailTableComponent
} from "./chunk-K3X5KNMX.js";
import {
  MailService
} from "./chunk-HVFNXIMA.js";
import "./chunk-XEHI5WIX.js";
import "./chunk-CABW6YAI.js";
import "./chunk-YK5I6R27.js";
import "./chunk-Y2EGS7AG.js";
import "./chunk-WEV7CZZY.js";
import {
  Router
} from "./chunk-6PLIE4IB.js";
import "./chunk-UK6LIBRF.js";
import "./chunk-NJSYAAHU.js";
import "./chunk-XQFWCWDH.js";
import "./chunk-EXEPX633.js";
import "./chunk-3FL5D7QG.js";
import "./chunk-FQFMKS2Q.js";
import "./chunk-XNYJW7BL.js";
import "./chunk-L3HXWUUO.js";
import "./chunk-LFMBOSV6.js";
import "./chunk-WBWDQQZU.js";
import "./chunk-F3L5EVFN.js";
import "./chunk-6MLBYEBX.js";
import "./chunk-IQKSNOBA.js";
import "./chunk-YPIU6GBB.js";
import "./chunk-V5XSXX3V.js";
import "./chunk-4NB56M3I.js";
import "./chunk-NGYBJXCA.js";
import "./chunk-7FPBHFED.js";
import "./chunk-WZGVHVRY.js";
import "./chunk-YZHJ5FSA.js";
import "./chunk-5OSG7M3V.js";
import "./chunk-YHSSX73X.js";
import "./chunk-52XP6VLB.js";
import "./chunk-ZPTU3HTV.js";
import "./chunk-CZVP2Z6G.js";
import "./chunk-6FDWWH3U.js";
import "./chunk-3MAO4O33.js";
import "./chunk-U7PUKEXO.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-5YV6R2XG.js";
import "./chunk-DU54A2AA.js";
import "./chunk-2LRC5QRK.js";
import "./chunk-GZRFJIKZ.js";
import "./chunk-4SQYV2UP.js";
import "./chunk-6E6G4HCZ.js";
import "./chunk-SHRV3VYN.js";
import "./chunk-WWG27WRZ.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-DSAAE4AM.js";
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
//# sourceMappingURL=chunk-YKL42XOO.js.map
