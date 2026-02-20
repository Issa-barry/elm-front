import {
  TimesIcon
} from "./chunk-7V5JC3MC.js";
import {
  Ripple
} from "./chunk-UDEA5BJ3.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule
} from "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VGWO7IEC.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-WWG27WRZ.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UJSDGQXU.js";

// node_modules/@primeuix/styles/dist/message/index.mjs
var style2 = "\n    .p-message {\n        border-radius: dt('message.border.radius');\n        outline-width: dt('message.border.width');\n        outline-style: solid;\n    }\n\n    .p-message-content {\n        display: flex;\n        align-items: center;\n        padding: dt('message.content.padding');\n        gap: dt('message.content.gap');\n        height: 100%;\n    }\n\n    .p-message-icon {\n        flex-shrink: 0;\n    }\n\n    .p-message-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        margin-inline-start: auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('message.close.button.width');\n        height: dt('message.close.button.height');\n        border-radius: dt('message.close.button.border.radius');\n        background: transparent;\n        transition:\n            background dt('message.transition.duration'),\n            color dt('message.transition.duration'),\n            outline-color dt('message.transition.duration'),\n            box-shadow dt('message.transition.duration'),\n            opacity 0.3s;\n        outline-color: transparent;\n        color: inherit;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-message-close-icon {\n        font-size: dt('message.close.icon.size');\n        width: dt('message.close.icon.size');\n        height: dt('message.close.icon.size');\n    }\n\n    .p-message-close-button:focus-visible {\n        outline-width: dt('message.close.button.focus.ring.width');\n        outline-style: dt('message.close.button.focus.ring.style');\n        outline-offset: dt('message.close.button.focus.ring.offset');\n    }\n\n    .p-message-info {\n        background: dt('message.info.background');\n        outline-color: dt('message.info.border.color');\n        color: dt('message.info.color');\n        box-shadow: dt('message.info.shadow');\n    }\n\n    .p-message-info .p-message-close-button:focus-visible {\n        outline-color: dt('message.info.close.button.focus.ring.color');\n        box-shadow: dt('message.info.close.button.focus.ring.shadow');\n    }\n\n    .p-message-info .p-message-close-button:hover {\n        background: dt('message.info.close.button.hover.background');\n    }\n\n    .p-message-info.p-message-outlined {\n        color: dt('message.info.outlined.color');\n        outline-color: dt('message.info.outlined.border.color');\n    }\n\n    .p-message-info.p-message-simple {\n        color: dt('message.info.simple.color');\n    }\n\n    .p-message-success {\n        background: dt('message.success.background');\n        outline-color: dt('message.success.border.color');\n        color: dt('message.success.color');\n        box-shadow: dt('message.success.shadow');\n    }\n\n    .p-message-success .p-message-close-button:focus-visible {\n        outline-color: dt('message.success.close.button.focus.ring.color');\n        box-shadow: dt('message.success.close.button.focus.ring.shadow');\n    }\n\n    .p-message-success .p-message-close-button:hover {\n        background: dt('message.success.close.button.hover.background');\n    }\n\n    .p-message-success.p-message-outlined {\n        color: dt('message.success.outlined.color');\n        outline-color: dt('message.success.outlined.border.color');\n    }\n\n    .p-message-success.p-message-simple {\n        color: dt('message.success.simple.color');\n    }\n\n    .p-message-warn {\n        background: dt('message.warn.background');\n        outline-color: dt('message.warn.border.color');\n        color: dt('message.warn.color');\n        box-shadow: dt('message.warn.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:focus-visible {\n        outline-color: dt('message.warn.close.button.focus.ring.color');\n        box-shadow: dt('message.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:hover {\n        background: dt('message.warn.close.button.hover.background');\n    }\n\n    .p-message-warn.p-message-outlined {\n        color: dt('message.warn.outlined.color');\n        outline-color: dt('message.warn.outlined.border.color');\n    }\n\n    .p-message-warn.p-message-simple {\n        color: dt('message.warn.simple.color');\n    }\n\n    .p-message-error {\n        background: dt('message.error.background');\n        outline-color: dt('message.error.border.color');\n        color: dt('message.error.color');\n        box-shadow: dt('message.error.shadow');\n    }\n\n    .p-message-error .p-message-close-button:focus-visible {\n        outline-color: dt('message.error.close.button.focus.ring.color');\n        box-shadow: dt('message.error.close.button.focus.ring.shadow');\n    }\n\n    .p-message-error .p-message-close-button:hover {\n        background: dt('message.error.close.button.hover.background');\n    }\n\n    .p-message-error.p-message-outlined {\n        color: dt('message.error.outlined.color');\n        outline-color: dt('message.error.outlined.border.color');\n    }\n\n    .p-message-error.p-message-simple {\n        color: dt('message.error.simple.color');\n    }\n\n    .p-message-secondary {\n        background: dt('message.secondary.background');\n        outline-color: dt('message.secondary.border.color');\n        color: dt('message.secondary.color');\n        box-shadow: dt('message.secondary.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:focus-visible {\n        outline-color: dt('message.secondary.close.button.focus.ring.color');\n        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:hover {\n        background: dt('message.secondary.close.button.hover.background');\n    }\n\n    .p-message-secondary.p-message-outlined {\n        color: dt('message.secondary.outlined.color');\n        outline-color: dt('message.secondary.outlined.border.color');\n    }\n\n    .p-message-secondary.p-message-simple {\n        color: dt('message.secondary.simple.color');\n    }\n\n    .p-message-contrast {\n        background: dt('message.contrast.background');\n        outline-color: dt('message.contrast.border.color');\n        color: dt('message.contrast.color');\n        box-shadow: dt('message.contrast.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:focus-visible {\n        outline-color: dt('message.contrast.close.button.focus.ring.color');\n        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:hover {\n        background: dt('message.contrast.close.button.hover.background');\n    }\n\n    .p-message-contrast.p-message-outlined {\n        color: dt('message.contrast.outlined.color');\n        outline-color: dt('message.contrast.outlined.border.color');\n    }\n\n    .p-message-contrast.p-message-simple {\n        color: dt('message.contrast.simple.color');\n    }\n\n    .p-message-text {\n        font-size: dt('message.text.font.size');\n        font-weight: dt('message.text.font.weight');\n    }\n\n    .p-message-icon {\n        font-size: dt('message.icon.size');\n        width: dt('message.icon.size');\n        height: dt('message.icon.size');\n    }\n\n    .p-message-enter-from {\n        opacity: 0;\n    }\n\n    .p-message-enter-active {\n        transition: opacity 0.3s;\n    }\n\n    .p-message.p-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-message.p-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin: 0;\n    }\n\n    .p-message-leave-active {\n        overflow: hidden;\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin 0.3s;\n    }\n\n    .p-message-leave-active .p-message-close-button {\n        opacity: 0;\n    }\n\n    .p-message-sm .p-message-content {\n        padding: dt('message.content.sm.padding');\n    }\n\n    .p-message-sm .p-message-text {\n        font-size: dt('message.text.sm.font.size');\n    }\n\n    .p-message-sm .p-message-icon {\n        font-size: dt('message.icon.sm.size');\n        width: dt('message.icon.sm.size');\n        height: dt('message.icon.sm.size');\n    }\n\n    .p-message-sm .p-message-close-icon {\n        font-size: dt('message.close.icon.sm.size');\n        width: dt('message.close.icon.sm.size');\n        height: dt('message.close.icon.sm.size');\n    }\n\n    .p-message-lg .p-message-content {\n        padding: dt('message.content.lg.padding');\n    }\n\n    .p-message-lg .p-message-text {\n        font-size: dt('message.text.lg.font.size');\n    }\n\n    .p-message-lg .p-message-icon {\n        font-size: dt('message.icon.lg.size');\n        width: dt('message.icon.lg.size');\n        height: dt('message.icon.lg.size');\n    }\n\n    .p-message-lg .p-message-close-icon {\n        font-size: dt('message.close.icon.lg.size');\n        width: dt('message.close.icon.lg.size');\n        height: dt('message.close.icon.lg.size');\n    }\n\n    .p-message-outlined {\n        background: transparent;\n        outline-width: dt('message.outlined.border.width');\n    }\n\n    .p-message-simple {\n        background: transparent;\n        outline-color: transparent;\n        box-shadow: none;\n    }\n\n    .p-message-simple .p-message-content {\n        padding: dt('message.simple.content.padding');\n    }\n\n    .p-message-outlined .p-message-close-button:hover,\n    .p-message-simple .p-message-close-button:hover {\n        background: transparent;\n    }\n";

// node_modules/primeng/fesm2022/primeng-message.mjs
var _c0 = ["container"];
var _c1 = ["icon"];
var _c2 = ["closeicon"];
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c5 = (a0) => ({
  value: "visible()",
  params: a0
});
var _c6 = (a0) => ({
  closeCallback: a0
});
function Message_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate);
  }
}
function Message_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
  }
}
function Message_Conditional_0_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.containerTemplate || ctx_r0._containerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r0.closeCallback));
  }
}
function Message_Conditional_0_Conditional_5_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"))("innerHTML", ctx_r0.text, \u0275\u0275sanitizeHtml);
  }
}
function Message_Conditional_0_Conditional_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Message_Conditional_0_Conditional_5_div_0_span_1_Template, 1, 3, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.escape);
  }
}
function Message_Conditional_0_Conditional_5_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.text);
  }
}
function Message_Conditional_0_Conditional_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_5_ng_template_1_span_0_Template, 2, 3, "span", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r0.escape && ctx_r0.text);
  }
}
function Message_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_5_div_0_Template, 2, 1, "div", 6)(1, Message_Conditional_0_Conditional_5_ng_template_1_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275projection(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const escapeOut_r2 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r0.escape)("ngIfElse", escapeOut_r2);
    \u0275\u0275advance(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("text"))("ngClass", ctx_r0.cx("text"));
  }
}
function Message_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.closeIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"))("ngClass", ctx_r0.closeIcon);
  }
}
function Message_Conditional_0_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Message_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Message_Conditional_0_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate);
  }
}
function Message_Conditional_0_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("closeIcon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeIcon"));
  }
}
function Message_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function Message_Conditional_0_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.close($event));
    });
    \u0275\u0275conditionalCreate(1, Message_Conditional_0_Conditional_6_Conditional_1_Template, 1, 4, "i", 12);
    \u0275\u0275conditionalCreate(2, Message_Conditional_0_Conditional_6_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275conditionalCreate(3, Message_Conditional_0_Conditional_6_Conditional_3_Template, 1, 3, ":svg:svg", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("closeButton"));
    \u0275\u0275property("pBind", ctx_r0.ptm("closeButton"));
    \u0275\u0275attribute("aria-label", ctx_r0.closeAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.closeIconTemplate || ctx_r0._closeIconTemplate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.closeIconTemplate && !ctx_r0._closeIconTemplate && !ctx_r0.closeIcon ? 3 : -1);
  }
}
function Message_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 2);
    \u0275\u0275conditionalCreate(2, Message_Conditional_0_Conditional_2_Template, 1, 1, "ng-container");
    \u0275\u0275conditionalCreate(3, Message_Conditional_0_Conditional_3_Template, 1, 3, "i", 1);
    \u0275\u0275conditionalCreate(4, Message_Conditional_0_Conditional_4_Template, 1, 4, "ng-container")(5, Message_Conditional_0_Conditional_5_Template, 5, 4);
    \u0275\u0275conditionalCreate(6, Message_Conditional_0_Conditional_6_Template, 4, 7, "button", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("root"), ctx_r0.styleClass));
    \u0275\u0275property("pBind", ctx_r0.ptm("root"))("@messageAnimation", \u0275\u0275pureFunction1(16, _c5, \u0275\u0275pureFunction2(13, _c4, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    \u0275\u0275attribute("aria-live", "polite")("role", "alert");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("content"));
    \u0275\u0275property("pBind", ctx_r0.ptm("content"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.iconTemplate || ctx_r0._iconTemplate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.icon ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.containerTemplate || ctx_r0._containerTemplate ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.closable ? 6 : -1);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-message p-component p-message-" + instance.severity, "p-message-" + instance.variant, {
    "p-message-sm": instance.size === "small",
    "p-message-lg": instance.size === "large"
  }],
  content: "p-message-content",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close-button",
  closeIcon: "p-message-close-icon"
};
var MessageStyle = class _MessageStyle extends BaseStyle {
  name = "message";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MessageStyle_BaseFactory;
    return function MessageStyle_Factory(__ngFactoryType__) {
      return (\u0275MessageStyle_BaseFactory || (\u0275MessageStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MessageStyle)))(__ngFactoryType__ || _MessageStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MessageStyle,
    factory: _MessageStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageStyle, [{
    type: Injectable
  }], null, null);
})();
var MessageClasses;
(function(MessageClasses2) {
  MessageClasses2["root"] = "p-message";
  MessageClasses2["content"] = "p-message-content";
  MessageClasses2["icon"] = "p-message-icon";
  MessageClasses2["text"] = "p-message-text";
  MessageClasses2["closeButton"] = "p-message-close-button";
  MessageClasses2["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));
var MESSAGE_INSTANCE = new InjectionToken("MESSAGE_INSTANCE");
var Message = class _Message extends BaseComponent {
  _componentStyle = inject(MessageStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcMessage = inject(MESSAGE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Severity level of the message.
   * @defaultValue 'info'
   * @group Props
   */
  severity = "info";
  /**
   * Text content.
   * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
   * @group Props
   */
  text;
  /**
   * Whether displaying messages would be escaped or not.
   * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
   * @group Props
   */
  escape = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether the message can be closed manually using the close icon.
   * @group Props
   * @defaultValue false
   */
  closable = false;
  /**
   * Icon to display in the message.
   * @group Props
   * @defaultValue undefined
   */
  icon;
  /**
   * Icon to display in the message close button.
   * @group Props
   * @defaultValue undefined
   */
  closeIcon;
  /**
   * Delay in milliseconds to close the message automatically.
   * @defaultValue undefined
   */
  life;
  /**
   * Transition options of the show animation.
   * @defaultValue '300ms ease-out'
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @defaultValue '200ms cubic-bezier(0.86, 0, 0.07, 1)'
   * @group Props
   */
  hideTransitionOptions = "200ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant;
  /**
   * Emits when the message is closed.
   * @param {{ originalEvent: Event }} event - The event object containing the original event.
   * @group Emits
   */
  onClose = new EventEmitter();
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  visible = signal(true, ...ngDevMode ? [{
    debugName: "visible"
  }] : []);
  /**
   * Custom template of the message container.
   * @group Templates
   */
  containerTemplate;
  /**
   * Custom template of the message icon.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom template of the close icon.
   * @group Templates
   */
  closeIconTemplate;
  templates;
  _containerTemplate;
  _iconTemplate;
  _closeIconTemplate;
  closeCallback = (event) => {
    this.close(event);
  };
  onInit() {
    if (this.life) {
      setTimeout(() => {
        this.visible.set(false);
      }, this.life);
    }
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "container":
          this._containerTemplate = item.template;
          break;
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "closeicon":
          this._closeIconTemplate = item.template;
          break;
      }
    });
  }
  /**
   * Closes the message.
   * @param {Event} event - Browser event.
   * @group Method
   */
  close(event) {
    this.visible.set(false);
    this.onClose.emit({
      originalEvent: event
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Message_BaseFactory;
    return function Message_Factory(__ngFactoryType__) {
      return (\u0275Message_BaseFactory || (\u0275Message_BaseFactory = \u0275\u0275getInheritedFactory(_Message)))(__ngFactoryType__ || _Message);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Message,
    selectors: [["p-message"]],
    contentQueries: function Message_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.closeIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      severity: "severity",
      text: "text",
      escape: [2, "escape", "escape", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      closable: [2, "closable", "closable", booleanAttribute],
      icon: "icon",
      closeIcon: "closeIcon",
      life: "life",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      size: "size",
      variant: "variant"
    },
    outputs: {
      onClose: "onClose"
    },
    features: [\u0275\u0275ProvidersFeature([MessageStyle, {
      provide: MESSAGE_INSTANCE,
      useExisting: _Message
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Message
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 1,
    consts: [["escapeOut", ""], [3, "pBind", "class"], [3, "pBind"], ["pRipple", "", "type", "button", 3, "pBind", "class"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "pBind", "ngClass"], [3, "pBind", "ngClass", "innerHTML", 4, "ngIf"], [3, "pBind", "ngClass", "innerHTML"], [3, "pBind", "ngClass", 4, "ngIf"], ["pRipple", "", "type", "button", 3, "click", "pBind"], [3, "pBind", "class", "ngClass"], ["data-p-icon", "times", 3, "pBind", "class"], ["data-p-icon", "times", 3, "pBind"]],
    template: function Message_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, Message_Conditional_0_Template, 7, 18, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.visible() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, TimesIcon, Ripple, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Message, [{
    type: Component,
    args: [{
      selector: "p-message",
      standalone: true,
      imports: [CommonModule, TimesIcon, Ripple, SharedModule, Bind],
      template: `
        @if (visible()) {
            <div
                [pBind]="ptm('root')"
                [attr.aria-live]="'polite'"
                [class]="cn(cx('root'), styleClass)"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div [pBind]="ptm('content')" [class]="cx('content')">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon)"></i>
                    }

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || _containerTemplate; context: { closeCallback: closeCallback }"></ng-container>
                    } @else {
                        <div *ngIf="!escape; else escapeOut">
                            <span [pBind]="ptm('text')" *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                        </div>

                        <ng-template #escapeOut>
                            <span [pBind]="ptm('text')" *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                        </ng-template>

                        <span [pBind]="ptm('text')" [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MessageStyle, {
        provide: MESSAGE_INSTANCE,
        useExisting: Message
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Message
      }],
      hostDirectives: [Bind],
      animations: [trigger("messageAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "translateY(-25%)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        opacity: 0
      }))])])]
    }]
  }], null, {
    severity: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    closable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerTemplate: [{
      type: ContentChild,
      args: ["container", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MessageModule = class _MessageModule {
  static \u0275fac = function MessageModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MessageModule,
    imports: [Message, SharedModule],
    exports: [Message, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Message, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [Message, SharedModule],
      exports: [Message, SharedModule]
    }]
  }], null, null);
})();

export {
  Message,
  MessageModule
};
//# sourceMappingURL=chunk-KNRZ2YDN.js.map
