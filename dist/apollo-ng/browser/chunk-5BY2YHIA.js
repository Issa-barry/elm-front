import {
  MailService
} from "./chunk-5PVURSOH.js";
import {
  Avatar,
  AvatarModule
} from "./chunk-27IZNIO6.js";
import {
  Editor,
  EditorModule
} from "./chunk-TRIT2AYT.js";
import {
  Menu,
  MenuModule
} from "./chunk-HBQ7KAGJ.js";
import {
  Dialog,
  DialogModule
} from "./chunk-A2LLWIIX.js";
import {
  Router
} from "./chunk-FHW6CQ6W.js";
import {
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule
} from "./chunk-QPQPF4QG.js";
import {
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule
} from "./chunk-BXX2KJCE.js";
import {
  InputText,
  InputTextModule
} from "./chunk-VMVXPPNB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-VJUJTGB6.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-3ISV5J4X.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import {
  Ripple,
  RippleModule
} from "./chunk-WSCE5RX7.js";
import {
  MessageService
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-A6EA4TT7.js";
import {
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-FZZISKXM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail-reply.ts
var _c0 = () => ({ height: "250px" });
function MailReplyComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.content.message, \u0275\u0275sanitizeHtml);
  }
}
function MailReplyComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
    \u0275\u0275text(4, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-iconfield", 5);
    \u0275\u0275element(6, "p-inputicon", 6);
    \u0275\u0275elementStart(7, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function MailReplyComponent_div_0_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.content.from, $event) || (ctx_r1.content.from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 3)(9, "label", 8);
    \u0275\u0275text(10, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-iconfield", 5);
    \u0275\u0275element(12, "p-inputicon", 9);
    \u0275\u0275elementStart(13, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function MailReplyComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.content.title, $event) || (ctx_r1.content.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, MailReplyComponent_div_0_div_14_Template, 1, 1, "div", 11);
    \u0275\u0275elementStart(15, "div", 12)(16, "span", 13);
    \u0275\u0275listener("click", function MailReplyComponent_div_0_Template_span_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMessage());
    });
    \u0275\u0275element(17, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-editor", 15);
    \u0275\u0275twoWayListener("ngModelChange", function MailReplyComponent_div_0_Template_p_editor_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newMail.message, $event) || (ctx_r1.newMail.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275element(20, "button", 17)(21, "button", 18);
    \u0275\u0275elementStart(22, "button", 19);
    \u0275\u0275listener("click", function MailReplyComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendMail());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.content.from);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.content.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.displayMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", ctx_r1.displayMessage ? "Hide content" : "Show content");
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMail.message);
  }
}
var MailReplyComponent = class _MailReplyComponent {
  messageService;
  mailService;
  newMail = {
    id: "",
    to: "",
    email: "",
    image: "",
    title: "",
    message: "",
    date: "",
    important: false,
    starred: false,
    trash: false,
    spam: false,
    archived: false,
    sent: true
  };
  displayMessage = false;
  content = {};
  hide = new EventEmitter();
  constructor(messageService, mailService) {
    this.messageService = messageService;
    this.mailService = mailService;
  }
  sendMail() {
    let { image, from, title } = this.content;
    this.newMail = __spreadProps(__spreadValues({}, this.newMail), {
      to: from,
      title,
      image
    });
    this.mailService.onSend(this.newMail);
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Mail sent"
    });
    this.hide.emit();
  }
  toggleMessage() {
    this.displayMessage = !this.displayMessage;
  }
  static \u0275fac = function MailReplyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailReplyComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(MailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailReplyComponent, selectors: [["app-mail-reply"]], inputs: { content: "content" }, outputs: { hide: "hide" }, decls: 1, vars: 1, consts: [["class", "p-0 m-0", 4, "ngIf"], [1, "p-0", "m-0"], [1, "bg-surface-0", "dark:bg-surface-950", "grid", "grid-cols-12", "grid-nogutter", "flex-col", "md:flex-row", "gap-12", "p-8", "rounded"], [1, "col-span-6"], ["for", "to", 1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "mb-4"], ["styleClass", "w-full", 2, "height", "3.5rem"], ["styleClass", "pi pi-user", 2, "left", "1.5rem"], ["id", "to", "type", "text", "pInputText", "", 1, "w-full", "pl-16!", "text-surface-900", "dark:text-surface-0", "font-semibold", 2, "height", "3.5rem", 3, "ngModelChange", "ngModel"], ["for", "Subject", 1, "block", "text-surface-900", "dark:text-surface-0", "font-semibold", "mb-4"], ["styleClass", "pi pi-pencil", 2, "left", "1.5rem"], ["id", "subject", "type", "text", "pInputText", "", "placeholder", "Subject", 1, "w-full", "pl-16!", "text-surface-900", "dark:text-surface-0", "font-semibold", 2, "height", "3.5rem", 3, "ngModelChange", "ngModel"], ["class", "col-span-12", 3, "innerHTML", 4, "ngIf"], [1, "col-span-12"], [1, "bg-surface-50", "dark:bg-surface-950", "cursor-pointer", "rounded", "px-2", 3, "click", "pTooltip"], [1, "pi", "pi-ellipsis-h"], ["styleClass", "mt-4", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-x-4", "justify-end", "p-8", "border-t", "border-surface-200", "dark:border-surface-700"], ["pButton", "", "pRipple", "", "type", "button", "outlined", "", "icon", "pi pi-image"], ["pButton", "", "pRipple", "", "type", "button", "outlined", "", "icon", "pi pi-paperclip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-send", "label", "Send", 1, "h-12", 3, "click"], [1, "col-span-12", 3, "innerHTML"]], template: function MailReplyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MailReplyComponent_div_0_Template, 23, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.content);
    }
  }, dependencies: [CommonModule, NgIf, TooltipModule, Tooltip, ButtonModule, ButtonDirective, EditorModule, Editor, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IconFieldModule, IconField, InputIconModule, InputIcon, InputTextModule, InputText, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailReplyComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-reply",
      standalone: true,
      imports: [CommonModule, TooltipModule, ButtonModule, EditorModule, FormsModule, IconFieldModule, InputIconModule, InputTextModule, RippleModule],
      template: `<div *ngIf="content" class="p-0 m-0">
        <div class="bg-surface-0 dark:bg-surface-950 grid grid-cols-12 grid-nogutter flex-col md:flex-row gap-12 p-8 rounded">
            <div class="col-span-6">
                <label for="to" class="block text-surface-900 dark:text-surface-0 font-semibold mb-4">To</label>
                <p-iconfield styleClass="w-full" style="height: 3.5rem">
                    <p-inputicon styleClass="pi pi-user" style="left: 1.5rem" />
                    <input id="to" type="text" pInputText class="w-full pl-16! text-surface-900 dark:text-surface-0 font-semibold" style="height: 3.5rem" [(ngModel)]="content.from" />
                </p-iconfield>
            </div>
            <div class="col-span-6">
                <label for="Subject" class="block text-surface-900 dark:text-surface-0 font-semibold mb-4">Subject</label>
                <p-iconfield styleClass="w-full" style="height: 3.5rem">
                    <p-inputicon styleClass="pi pi-pencil" style="left: 1.5rem" />
                    <input id="subject" type="text" pInputText placeholder="Subject" class="w-full pl-16! text-surface-900 dark:text-surface-0 font-semibold" style="height: 3.5rem" [(ngModel)]="content.title" />
                </p-iconfield>
            </div>
            <div *ngIf="displayMessage" class="col-span-12" [innerHTML]="content.message"></div>
            <div class="col-span-12">
                <span class="bg-surface-50 dark:bg-surface-950 cursor-pointer rounded px-2" (click)="toggleMessage()" [pTooltip]="displayMessage ? 'Hide content' : 'Show content'"><i class="pi pi-ellipsis-h"></i></span>
                <p-editor [style]="{ height: '250px' }" styleClass="mt-4" [(ngModel)]="newMail.message"></p-editor>
            </div>
        </div>
        <div class="flex gap-x-4 justify-end p-8 border-t border-surface-200 dark:border-surface-700">
            <button pButton pRipple type="button" outlined icon="pi pi-image"></button>
            <button pButton pRipple type="button" outlined icon="pi pi-paperclip"></button>
            <button pButton pRipple type="button" class="h-12" icon="pi pi-send" label="Send" (click)="sendMail()"></button>
        </div>
    </div>`
    }]
  }], () => [{ type: MessageService }, { type: MailService }], { content: [{
    type: Input
  }], hide: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailReplyComponent, { className: "MailReplyComponent", filePath: "src/app/apps/mail/mail-reply.ts", lineNumber: 48 });
})();

// src/app/apps/mail/mail-table.ts
var _c02 = () => ["from", "title", "message"];
var _c1 = () => [10, 20, 30];
var _c2 = (a0, a1) => ({ "pi-star-fill": a0, "pi-star": a1 });
var _c3 = (a0, a1) => ({ "pi-bookmark-fill": a0, "pi-bookmark": a1 });
function MailTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275element(2, "p-tableHeaderCheckbox")(3, "button", 11);
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_2_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const menu_r3 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(menu_r3.toggle($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-menu", 13, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-iconfield");
    \u0275\u0275element(8, "p-inputicon", 14);
    \u0275\u0275elementStart(9, "input", 15);
    \u0275\u0275listener("input", function MailTableComponent_ng_template_2_Template_input_input_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      const dt_r5 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r3.onGlobalFilter(dt_r5, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const dt_r5 = \u0275\u0275reference(1);
    \u0275\u0275advance(5);
    \u0275\u0275property("model", ctx_r3.menuItems)("appendTo", dt_r5)("popup", true);
  }
}
function MailTableComponent_ng_template_4_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "span", 34);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_td_3_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const mail_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onStar($event, mail_r9.id));
    })("touchend", function MailTableComponent_ng_template_4_td_3_Template_span_touchend_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const mail_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onStar($event, mail_r9.id));
    });
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mail_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c2, mail_r9.starred, !mail_r9.starred));
  }
}
function MailTableComponent_ng_template_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 33)(1, "span", 34);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_td_4_Template_span_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const mail_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBookmark($event, mail_r9.id));
    })("touchend", function MailTableComponent_ng_template_4_td_4_Template_span_touchend_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const mail_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBookmark($event, mail_r9.id));
    });
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mail_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c3, mail_r9.important, !mail_r9.important));
  }
}
function MailTableComponent_ng_template_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 21);
  }
  if (rf & 2) {
    const mail_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("image", mail_r9.image ? "/demo/images/avatar/" + mail_r9.image : "assets/layout/images/avatar.png");
  }
}
function MailTableComponent_ng_template_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-avatar", 22);
  }
}
function MailTableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 16);
    \u0275\u0275listener("mouseenter", function MailTableComponent_ng_template_4_Template_tr_mouseenter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const date_r7 = \u0275\u0275reference(16);
      const options_r8 = \u0275\u0275reference(19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleOptions($event, options_r8, date_r7));
    })("mouseleave", function MailTableComponent_ng_template_4_Template_tr_mouseleave_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const date_r7 = \u0275\u0275reference(16);
      const options_r8 = \u0275\u0275reference(19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleOptions($event, options_r8, date_r7));
    })("click", function MailTableComponent_ng_template_4_Template_tr_click_0_listener() {
      const mail_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onRowSelect(mail_r9.id));
    });
    \u0275\u0275elementStart(1, "td", 17)(2, "p-tableCheckbox", 18);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_Template_p_tableCheckbox_click_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    })("touchend", function MailTableComponent_ng_template_4_Template_p_tableCheckbox_touchend_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MailTableComponent_ng_template_4_td_3_Template, 3, 4, "td", 19)(4, MailTableComponent_ng_template_4_td_4_Template, 3, 4, "td", 19);
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275conditionalCreate(6, MailTableComponent_ng_template_4_Conditional_6_Template, 1, 1, "p-avatar", 21)(7, MailTableComponent_ng_template_4_Conditional_7_Template, 1, 0, "p-avatar", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 24)(11, "span", 25);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 26)(14, "div", 27)(15, "span", 28, 4);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 29, 5)(20, "button", 30);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_Template_button_click_20_listener($event) {
      const mail_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onArchive($event, mail_r9.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 31);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_Template_button_click_21_listener($event) {
      const mail_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onReply($event, mail_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 32);
    \u0275\u0275listener("click", function MailTableComponent_ng_template_4_Template_button_click_22_listener($event) {
      const mail_r9 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTrash($event, mail_r9));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const mail_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", mail_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mail_r9.trash && !mail_r9.spam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !mail_r9.trash && !mail_r9.spam);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(mail_r9.image ? 6 : 7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", mail_r9.from || mail_r9.to, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", mail_r9.title, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", mail_r9.date, " ");
  }
}
var MailTableComponent = class _MailTableComponent {
  router;
  mailService;
  messageService;
  mails;
  menuItems = [];
  selectedMails = [];
  mail = {};
  dialogVisible = false;
  constructor(router, mailService, messageService) {
    this.router = router;
    this.mailService = mailService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.menuItems = [
      {
        label: "Archive",
        icon: "pi pi-fw pi-file",
        command: () => this.onArchiveMultiple()
      },
      {
        label: "Spam",
        icon: "pi pi-fw pi-ban",
        command: () => this.onSpamMultiple()
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
        command: () => this.onDeleteMultiple()
      }
    ];
  }
  toggleOptions(event, opt, date) {
    if (event.type === "mouseenter") {
      opt.style.display = "flex";
      date.style.display = "none";
    } else {
      opt.style.display = "none";
      date.style.display = "flex";
    }
  }
  onRowSelect(id) {
    this.router.navigate(["/apps/mail/detail/", id]);
  }
  onStar(event, id) {
    event.stopPropagation();
    this.mailService.onStar(id);
  }
  onArchive(event, id) {
    event.stopPropagation();
    this.mailService.onArchive(id);
    this.messageService.add({
      severity: "info",
      summary: "Info",
      detail: "Mail archived",
      life: 3e3
    });
  }
  onBookmark(event, id) {
    event.stopPropagation();
    this.mailService.onBookmark(id);
  }
  onDelete(id) {
    this.mailService.onDelete(id);
    this.messageService.add({
      severity: "info",
      summary: "Info",
      detail: "Mail deleted",
      life: 3e3
    });
  }
  onDeleteMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onDeleteMultiple(this.selectedMails);
      this.messageService.add({
        severity: "info",
        summary: "Info",
        detail: "Mails deleted",
        life: 3e3
      });
    }
  }
  onSpamMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onSpamMultiple(this.selectedMails);
      this.messageService.add({
        severity: "info",
        summary: "Info",
        detail: "Moved to spam",
        life: 3e3
      });
    }
  }
  onArchiveMultiple() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.mailService.onArchiveMultiple(this.selectedMails);
      this.messageService.add({
        severity: "info",
        summary: "Info",
        detail: "Moved to archive",
        life: 3e3
      });
    }
  }
  onTrash(event, mail) {
    event.stopPropagation();
    if (mail.trash) {
      this.onDelete(mail.id);
    }
    this.mailService.onTrash(mail.id);
  }
  onReply(event, mail) {
    event.stopPropagation();
    this.mail = mail;
    this.dialogVisible = true;
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, "contains");
  }
  static \u0275fac = function MailTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MailTableComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MailService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MailTableComponent, selectors: [["app-mail-table"]], inputs: { mails: "mails" }, decls: 8, vars: 13, consts: [["dt", ""], ["caption", ""], ["body", ""], ["menu", ""], ["date", ""], ["options", ""], ["responsiveLayout", "scroll", "selectionMode", "multiple", "dataKey", "id", 3, "selectionChange", "value", "rows", "globalFilterFields", "paginator", "rowsPerPageOptions", "selection", "rowHover"], ["header", "New Message", "styleClass", "mx-4 sm:mx-0 sm:w-full md:w-8/12 lg:w-6/12", "contentStyleClass", "rounded-b border-t border-surface-200 dark:border-surface-700 p-0", 3, "visibleChange", "onHide", "visible", "closable", "modal"], [3, "hide", "content"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "flex", "gap-2", "items-center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", "rounded", "", "text", "", "plain", "", 1, "ml-4"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-ellipsis-v", "rounded", "", "text", "", "plain", "", 1, "ml-3", 3, "click"], [3, "model", "appendTo", "popup"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Mail", 1, "w-full", "sm:w-auto", 3, "input"], [1, "cursor-pointer", 3, "mouseenter", "mouseleave", "click"], [1, "pl-3", 2, "width", "4rem"], [3, "click", "touchend", "value"], ["style", "width: 4rem", 4, "ngIf"], [2, "min-width", "4rem"], [3, "image"], ["icon", "pi pi-user", "shape", "circle"], [1, "text-900", "font-semibold", 2, "min-width", "12rem"], [2, "min-width", "12rem"], [1, "font-medium", "white-space-nowrap", "overflow-hidden", "text-overflow-ellipsis", "block", 2, "max-width", "30rem"], [2, "width", "12rem"], [1, "flex", "justify-content-end", "w-full", "px-0"], [1, "text-700", "font-semibold", "white-space-nowrap"], [2, "display", "none"], ["pButton", "", "pRipple", "", "icon", "pi pi-inbox", "pTooltip", "Archive", "tooltipPosition", "top", "type", "button", 1, "h-8", "w-8", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-reply", "severity", "secondary", "pTooltip", "Reply", "tooltipPosition", "top", "type", "button", 1, "h-8", "w-8", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "severity", "danger", "pTooltip", "Trash", "tooltipPosition", "top", "type", "button", 1, "h-8", "w-8rem", 3, "click"], [2, "width", "4rem"], [1, "cursor-pointer", 3, "click", "touchend"], [1, "pi", "pi-fw", "text-xl", 3, "ngClass"]], template: function MailTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-table", 6, 0);
      \u0275\u0275twoWayListener("selectionChange", function MailTableComponent_Template_p_table_selectionChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedMails, $event) || (ctx.selectedMails = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(2, MailTableComponent_ng_template_2_Template, 10, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MailTableComponent_ng_template_4_Template, 23, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function MailTableComponent_Template_p_dialog_visibleChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function MailTableComponent_Template_p_dialog_onHide_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dialogVisible = false);
      });
      \u0275\u0275elementStart(7, "app-mail-reply", 8);
      \u0275\u0275listener("hide", function MailTableComponent_Template_app_mail_reply_hide_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dialogVisible = false);
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.mails)("rows", 10)("globalFilterFields", \u0275\u0275pureFunction0(11, _c02))("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(12, _c1));
      \u0275\u0275twoWayProperty("selection", ctx.selectedMails);
      \u0275\u0275property("rowHover", true);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("closable", true)("modal", true);
      \u0275\u0275advance();
      \u0275\u0275property("content", ctx.mail);
    }
  }, dependencies: [TableModule, Table, TableCheckbox, TableHeaderCheckbox, ButtonModule, ButtonDirective, CommonModule, NgClass, NgIf, DialogModule, Dialog, RippleModule, Ripple, AvatarModule, Avatar, MenuModule, Menu, MailReplyComponent, IconFieldModule, IconField, InputIconModule, InputIcon, InputTextModule, InputText, TooltipModule, Tooltip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MailTableComponent, [{
    type: Component,
    args: [{
      selector: "app-mail-table",
      standalone: true,
      imports: [TableModule, ButtonModule, CommonModule, DialogModule, RippleModule, AvatarModule, MenuModule, MailReplyComponent, IconFieldModule, InputIconModule, InputTextModule, TooltipModule],
      template: `<p-table
            #dt
            [value]="mails"
            responsiveLayout="scroll"
            [rows]="10"
            [globalFilterFields]="['from', 'title', 'message']"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [(selection)]="selectedMails"
            selectionMode="multiple"
            [rowHover]="true"
            dataKey="id"
        >
            <ng-template #caption>
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex gap-2 items-center">
                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                        <button pButton pRipple type="button" icon="pi pi-refresh" rounded text plain class="ml-4"></button>
                        <button pButton pRipple type="button" icon="pi pi-ellipsis-v" class="ml-3" rounded text plain (click)="menu.toggle($event)"></button>
                        <p-menu #menu [model]="menuItems" [appendTo]="dt" [popup]="true"></p-menu>
                    </div>
                    <p-iconfield>
                        <p-inputicon class="pi pi-search" />
                        <input pInputText type="text" (input)="onGlobalFilter(dt, $event)" placeholder="Search Mail" class="w-full sm:w-auto" />
                    </p-iconfield>
                </div>
            </ng-template>
            <ng-template #body let-mail>
                <tr (mouseenter)="toggleOptions($event, options, date)" (mouseleave)="toggleOptions($event, options, date)" (click)="onRowSelect(mail.id)" class="cursor-pointer">
                    <td style="width: 4rem" class="pl-3">
                        <p-tableCheckbox [value]="mail" (click)="$event.stopPropagation()" (touchend)="$event.stopPropagation()"></p-tableCheckbox>
                    </td>
                    <td *ngIf="!mail.trash && !mail.spam" style="width: 4rem">
                        <span (click)="onStar($event, mail.id)" (touchend)="onStar($event, mail.id)" class="cursor-pointer">
                            <i
                                class="pi pi-fw text-xl"
                                [ngClass]="{
                                    'pi-star-fill': mail.starred,
                                    'pi-star': !mail.starred
                                }"
                            ></i>
                        </span>
                    </td>
                    <td *ngIf="!mail.trash && !mail.spam" style="width: 4rem">
                        <span (click)="onBookmark($event, mail.id)" (touchend)="onBookmark($event, mail.id)" class="cursor-pointer">
                            <i
                                class="pi pi-fw text-xl"
                                [ngClass]="{
                                    'pi-bookmark-fill': mail.important,
                                    'pi-bookmark': !mail.important
                                }"
                            ></i>
                        </span>
                    </td>
                    <td style="min-width: 4rem">
                        @if(mail.image) {
                            <p-avatar [image]="mail.image ? '/demo/images/avatar/' + mail.image : 'assets/layout/images/avatar.png'"></p-avatar>
                        }@else {
                            <p-avatar icon="pi pi-user" shape="circle"></p-avatar>
                        }

                    </td>
                    <td style="min-width: 12rem" class="text-900 font-semibold">
                        {{ mail.from || mail.to }}
                    </td>
                    <td style="min-width: 12rem">
                        <span class="font-medium white-space-nowrap overflow-hidden text-overflow-ellipsis block" style="max-width: 30rem">
                            {{ mail.title }}
                        </span>
                    </td>
                    <td style="width: 12rem;">
                        <div class="flex justify-content-end w-full px-0">
                            <span #date class="text-700 font-semibold white-space-nowrap">
                                {{ mail.date }}
                            </span>
                            <div style="display: none" #options>
                                <button pButton pRipple icon="pi pi-inbox" class="h-8 w-8 mr-2" (click)="onArchive($event, mail.id)" pTooltip="Archive" tooltipPosition="top" type="button"></button>
                                <button pButton pRipple icon="pi pi-reply" class="h-8 w-8 mr-2" severity="secondary" (click)="onReply($event, mail)" pTooltip="Reply" tooltipPosition="top" type="button"></button>
                                <button pButton pRipple icon="pi pi-trash" class="h-8 w-8rem" severity="danger" (click)="onTrash($event, mail)" pTooltip="Trash" tooltipPosition="top" type="button"></button>
                            </div>
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>

        <p-dialog
            [(visible)]="dialogVisible"
            (onHide)="dialogVisible = false"
            [closable]="true"
            header="New Message"
            [modal]="true"
            styleClass="mx-4 sm:mx-0 sm:w-full md:w-8/12 lg:w-6/12"
            contentStyleClass="rounded-b border-t border-surface-200 dark:border-surface-700 p-0"
        >
            <app-mail-reply [content]="mail" (hide)="dialogVisible = false"></app-mail-reply>
        </p-dialog>`
    }]
  }], () => [{ type: Router }, { type: MailService }, { type: MessageService }], { mails: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MailTableComponent, { className: "MailTableComponent", filePath: "src/app/apps/mail/mail-table.ts", lineNumber: 121 });
})();

export {
  MailTableComponent
};
//# sourceMappingURL=chunk-5BY2YHIA.js.map
