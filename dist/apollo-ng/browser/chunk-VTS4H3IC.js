import {
  Popover,
  PopoverModule
} from "./chunk-MK6WWJ4D.js";
import {
  Drawer,
  DrawerModule
} from "./chunk-2PHEEELV.js";
import {
  ProductService
} from "./chunk-6AOPR46D.js";
import {
  Dialog,
  DialogModule
} from "./chunk-63LERGF7.js";
import {
  FocusTrap
} from "./chunk-SX3K2HBE.js";
import {
  Toast,
  ToastModule
} from "./chunk-DDVPM47O.js";
import "./chunk-W6Z6YB3V.js";
import {
  SelectableRow,
  SortIcon,
  SortableColumn,
  Table,
  TableModule
} from "./chunk-CIZBK6XP.js";
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
import {
  InputText,
  InputTextModule
} from "./chunk-XQENNRGE.js";
import {
  FormsModule
} from "./chunk-XXGDCOFX.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-EM6TITBQ.js";
import "./chunk-Y4KHKEE6.js";
import "./chunk-2E3FVCR6.js";
import "./chunk-7V5JC3MC.js";
import "./chunk-PPMOL7YY.js";
import {
  zindexutils
} from "./chunk-CJMBUE5J.js";
import "./chunk-3TBUG5CD.js";
import {
  Button,
  ButtonModule
} from "./chunk-WJ3ZXJZC.js";
import "./chunk-ALX4IA4A.js";
import {
  ConnectedOverlayScrollHandler
} from "./chunk-UDEA5BJ3.js";
import "./chunk-GWUQTRWC.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  ConfirmationService,
  D,
  K,
  MessageService,
  OverlayService,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  Ut,
  W,
  Yt,
  bt
} from "./chunk-65XIZQ4E.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VGWO7IEC.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-WWG27WRZ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Renderer2,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UJSDGQXU.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/confirmpopup/index.mjs
var style2 = "\n    .p-confirmpopup {\n        position: absolute;\n        margin-top: dt('confirmpopup.gutter');\n        top: 0;\n        left: 0;\n        background: dt('confirmpopup.background');\n        color: dt('confirmpopup.color');\n        border: 1px solid dt('confirmpopup.border.color');\n        border-radius: dt('confirmpopup.border.radius');\n        box-shadow: dt('confirmpopup.shadow');\n    }\n\n    .p-confirmpopup-content {\n        display: flex;\n        align-items: center;\n        padding: dt('confirmpopup.content.padding');\n        gap: dt('confirmpopup.content.gap');\n    }\n\n    .p-confirmpopup-icon {\n        font-size: dt('confirmpopup.icon.size');\n        width: dt('confirmpopup.icon.size');\n        height: dt('confirmpopup.icon.size');\n        color: dt('confirmpopup.icon.color');\n    }\n\n    .p-confirmpopup-footer {\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('confirmpopup.footer.gap');\n        padding: dt('confirmpopup.footer.padding');\n    }\n\n    .p-confirmpopup-footer button {\n        width: auto;\n    }\n\n    .p-confirmpopup-footer button:last-child {\n        margin: 0;\n    }\n\n    .p-confirmpopup-flipped {\n        margin-block-start: calc(dt('confirmpopup.gutter') * -1);\n        margin-block-end: dt('confirmpopup.gutter');\n    }\n\n    .p-confirmpopup-enter-from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n\n    .p-confirmpopup-leave-to {\n        opacity: 0;\n    }\n\n    .p-confirmpopup-enter-active {\n        transition:\n            transform 0.12s cubic-bezier(0, 0, 0.2, 1),\n            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-confirmpopup-leave-active {\n        transition: opacity 0.1s linear;\n    }\n\n    .p-confirmpopup:after,\n    .p-confirmpopup:before {\n        bottom: 100%;\n        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));\n        content: ' ';\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n    }\n\n    .p-confirmpopup:after {\n        border-width: calc(dt('confirmpopup.gutter') - 2px);\n        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('confirmpopup.background');\n    }\n\n    .p-confirmpopup:before {\n        border-width: dt('confirmpopup.gutter');\n        margin-left: calc(-1 * dt('confirmpopup.gutter'));\n        border-style: solid;\n        border-color: transparent;\n        border-bottom-color: dt('confirmpopup.border.color');\n    }\n\n    .p-confirmpopup-flipped:after,\n    .p-confirmpopup-flipped:before {\n        bottom: auto;\n        top: 100%;\n    }\n\n    .p-confirmpopup-flipped:after {\n        border-bottom-color: transparent;\n        border-top-color: dt('confirmpopup.background');\n    }\n\n    .p-confirmpopup-flipped:before {\n        border-bottom-color: transparent;\n        border-top-color: dt('confirmpopup.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-confirmpopup.mjs
var _c0 = ["content"];
var _c1 = ["accepticon"];
var _c2 = ["rejecticon"];
var _c3 = ["headless"];
var _c4 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c5 = (a0) => ({
  value: "open",
  params: a0
});
var _c6 = (a0) => ({
  $implicit: a0
});
function ConfirmPopup_div_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c6, ctx_r1.confirmation));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("icon"));
    \u0275\u0275property("pBind", ctx_r1.ptm("icon"));
  }
}
function ConfirmPopup_div_0_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_ng_template_3_i_0_Template, 1, 3, "i", 13);
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.icon);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("message"));
    \u0275\u0275property("pBind", ctx_r1.ptm("message"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.message);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_i_0_Template, 1, 2, "i", 15)(1, ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_1_Template, 2, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectIcon)("ngIfElse", ctx_r1.rejecticon);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.rejectIconTemplate || ctx_r1._rejectIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 14);
    \u0275\u0275listener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_p_button_6_ng_template_1_Template, 2, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("pcRejectButton"));
    \u0275\u0275property("label", ctx_r1.rejectButtonLabel)("pt", ctx_r1.ptm("pcRejectButton"))("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonStyleClass)("size", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.size) || "small")("text", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectButtonProps == null ? null : ctx_r1.confirmation.rejectButtonProps.text) || false)("buttonProps", ctx_r1.getRejectButtonProps())("autofocus", ctx_r1.autoFocusReject);
    \u0275\u0275attribute("aria-label", ctx_r1.rejectButtonLabel);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_i_0_Template, 1, 2, "i", 15)(1, ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_1_Template, 2, 0, null, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptIcon)("ngIfElse", ctx_r1.accepticontemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.acceptIconTemplate || ctx_r1._acceptIconTemplate);
  }
}
function ConfirmPopup_div_0_ng_template_2_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 17);
    \u0275\u0275listener("onClick", function ConfirmPopup_div_0_ng_template_2_p_button_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAccept());
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_template_2_p_button_7_ng_template_1_Template, 2, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("pcAcceptButton"));
    \u0275\u0275property("label", ctx_r1.acceptButtonLabel)("pt", ctx_r1.ptm("pcAcceptButton"))("styleClass", ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonStyleClass)("size", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptButtonProps == null ? null : ctx_r1.confirmation.acceptButtonProps.size) || "small")("buttonProps", ctx_r1.getAcceptButtonProps())("autofocus", ctx_r1.autoFocusAccept);
    \u0275\u0275attribute("aria-label", ctx_r1.acceptButtonLabel);
  }
}
function ConfirmPopup_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10, 1);
    \u0275\u0275template(2, ConfirmPopup_div_0_ng_template_2_ng_container_2_Template, 2, 4, "ng-container", 8)(3, ConfirmPopup_div_0_ng_template_2_ng_template_3_Template, 3, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275template(6, ConfirmPopup_div_0_ng_template_2_p_button_6_Template, 3, 10, "p-button", 11)(7, ConfirmPopup_div_0_ng_template_2_p_button_7_Template, 3, 9, "p-button", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const withoutContentTemplate_r5 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275property("pBind", ctx_r1.ptm("content"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngIfElse", withoutContentTemplate_r5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.cx("footer"));
    \u0275\u0275property("pBind", ctx_r1.ptm("footer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.rejectVisible) !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.confirmation == null ? null : ctx_r1.confirmation.acceptVisible) !== false);
  }
}
function ConfirmPopup_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function ConfirmPopup_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEnd($event));
    });
    \u0275\u0275template(1, ConfirmPopup_div_0_ng_container_1_Template, 2, 4, "ng-container", 8)(2, ConfirmPopup_div_0_ng_template_2_Template, 8, 10, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notHeadless_r6 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("pBind", ctx_r1.ptm("root"))("ngStyle", ctx_r1.style)("@animation", \u0275\u0275pureFunction1(10, _c5, \u0275\u0275pureFunction2(7, _c4, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate)("ngIfElse", notHeadless_r6);
  }
}
var classes = {
  root: () => ["p-confirmpopup p-component"],
  content: "p-confirmpopup-content",
  icon: ({
    instance
  }) => ["p-confirmpopup-icon", instance.confirmation?.icon],
  message: "p-confirmpopup-message",
  footer: "p-confirmpopup-footer",
  pcRejectButton: "p-confirmpopup-reject-button",
  pcAcceptButton: "p-confirmpopup-accept-button"
};
var ConfirmPopupStyle = class _ConfirmPopupStyle extends BaseStyle {
  name = "confirmpopup";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ConfirmPopupStyle_BaseFactory;
    return function ConfirmPopupStyle_Factory(__ngFactoryType__) {
      return (\u0275ConfirmPopupStyle_BaseFactory || (\u0275ConfirmPopupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ConfirmPopupStyle)))(__ngFactoryType__ || _ConfirmPopupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ConfirmPopupStyle,
    factory: _ConfirmPopupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupStyle, [{
    type: Injectable
  }], null, null);
})();
var ConfirmPopupClasses;
(function(ConfirmPopupClasses2) {
  ConfirmPopupClasses2["root"] = "p-confirmpopup";
  ConfirmPopupClasses2["content"] = "p-confirmpopup-content";
  ConfirmPopupClasses2["icon"] = "p-confirmpopup-icon";
  ConfirmPopupClasses2["message"] = "p-confirmpopup-message";
  ConfirmPopupClasses2["footer"] = "p-confirmpopup-footer";
  ConfirmPopupClasses2["pcRejectButton"] = "p-confirmpopup-reject-button";
  ConfirmPopupClasses2["pcAcceptButton"] = "p-confirmpopup-accept-button";
})(ConfirmPopupClasses || (ConfirmPopupClasses = {}));
var CONFIRMPOPUP_INSTANCE = new InjectionToken("CONFIRMPOPUP_INSTANCE");
var ConfirmPopup = class _ConfirmPopup extends BaseComponent {
  el;
  confirmationService;
  renderer;
  cd;
  overlayService;
  document;
  $pcConfirmPopup = inject(CONFIRMPOPUP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Element to receive the focus when the popup gets visible, valid values are "accept", "reject", and "none".
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
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
   * Defines if the component is visible.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    this.cd.markForCheck();
  }
  container;
  subscription;
  confirmation;
  autoFocusAccept = false;
  autoFocusReject = false;
  contentTemplate;
  acceptIconTemplate;
  rejectIconTemplate;
  headlessTemplate;
  _contentTemplate;
  _acceptIconTemplate;
  _rejectIconTemplate;
  _headlessTemplate;
  _visible;
  documentClickListener;
  documentResizeListener;
  scrollHandler;
  window;
  _componentStyle = inject(ConfirmPopupStyle);
  constructor(el, confirmationService, renderer, cd, overlayService, document) {
    super();
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.overlayService = overlayService;
    this.document = document;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        const keys = Object.keys(confirmation);
        keys.forEach((key) => {
          this[key] = confirmation[key];
        });
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  templates;
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "rejecticon":
          this._rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this._acceptIconTemplate = item.template;
          break;
        case "headless":
          this._headlessTemplate = item.template;
          break;
      }
    });
  }
  option(name, k) {
    const source = this;
    if (source.hasOwnProperty(name)) {
      if (k) {
        return source[k];
      }
      return source[name];
    }
    return void 0;
  }
  onEscapeKeydown(event) {
    if (this.confirmation && this.confirmation.closeOnEscape !== false) {
      this.onReject();
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.renderer.appendChild(this.document.body, this.container);
      this.align();
      this.bindListeners();
      this.autoFocusAccept = this.defaultFocus === void 0 || this.defaultFocus === "accept" ? true : false;
      this.autoFocusReject = this.defaultFocus === "reject" ? true : false;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onContainerDestroy();
        break;
    }
  }
  getAcceptButtonProps() {
    return this.option("acceptButtonProps");
  }
  getRejectButtonProps() {
    return this.option("rejectButtonProps");
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.config.zIndex.overlay);
    }
    if (!this.confirmation || !this.confirmation.target) {
      return;
    }
    D(this.container, this.confirmation?.target, false);
    const containerOffset = K(this.container);
    const targetOffset = K(this.confirmation?.target);
    let arrowLeft = 0;
    if (containerOffset && targetOffset && containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    if (this.container) {
      this.container.style.setProperty("--p-confirmpopup-arrow-left", `${arrowLeft}px`);
    }
    if (containerOffset && targetOffset && containerOffset.top < targetOffset.top) {
      W(this.container, "p-confirm-popup-flipped");
    }
  }
  hide() {
    this.visible = false;
  }
  onAccept() {
    if (this.confirmation?.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
    bt(this.confirmation?.target);
  }
  onReject() {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
    bt(this.confirmation?.target);
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = Ut() ? "touchstart" : "click";
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
        if (this.confirmation && this.confirmation.dismissableMask !== false) {
          let targetElement = this.confirmation.target;
          if (this.container !== event.target && !this.container?.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
            this.hide();
          }
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.visible && !Yt()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.confirmation?.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.confirmation = null;
    this.container = null;
  }
  restoreAppend() {
    if (this.container) {
      this.renderer.removeChild(this.document.body, this.container);
    }
    this.onContainerDestroy();
  }
  get acceptButtonLabel() {
    return this.confirmation?.acceptLabel || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.confirmation?.rejectLabel || this.config.getTranslation(TranslationKeys.REJECT);
  }
  onDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function ConfirmPopup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopup)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(OverlayService), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ConfirmPopup,
    selectors: [["p-confirmpopup"]],
    contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.acceptIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rejectIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headlessTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostBindings: function ConfirmPopup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.Escape", function ConfirmPopup_keydown_Escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      key: "key",
      defaultFocus: "defaultFocus",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      style: "style",
      styleClass: "styleClass",
      visible: "visible"
    },
    features: [\u0275\u0275ProvidersFeature([ConfirmPopupStyle, {
      provide: CONFIRMPOPUP_INSTANCE,
      useExisting: _ConfirmPopup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ConfirmPopup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["notHeadless", ""], ["content", ""], ["withoutContentTemplate", ""], ["icon", ""], ["rejecticon", ""], ["accepticontemplate", ""], ["pFocusTrap", "", "role", "alertdialog", 3, "pBind", "class", "ngStyle", "click", 4, "ngIf"], ["pFocusTrap", "", "role", "alertdialog", 3, "click", "pBind", "ngStyle"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "pBind"], ["type", "button", 3, "label", "pt", "class", "styleClass", "size", "text", "buttonProps", "autofocus", "onClick", 4, "ngIf"], ["type", "button", 3, "label", "pt", "class", "styleClass", "size", "buttonProps", "autofocus", "onClick", 4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["type", "button", 3, "onClick", "label", "pt", "styleClass", "size", "text", "buttonProps", "autofocus"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["type", "button", 3, "onClick", "label", "pt", "styleClass", "size", "buttonProps", "autofocus"]],
    template: function ConfirmPopup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmPopup_div_0_Template, 4, 12, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visible);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule, ButtonModule, Button, FocusTrap, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopup, [{
    type: Component,
    args: [{
      selector: "p-confirmpopup",
      standalone: true,
      imports: [CommonModule, SharedModule, ButtonModule, FocusTrap, Bind],
      providers: [ConfirmPopupStyle, {
        provide: CONFIRMPOPUP_INSTANCE,
        useExisting: ConfirmPopup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ConfirmPopup
      }],
      hostDirectives: [Bind],
      template: `
        <div
            *ngIf="visible"
            pFocusTrap
            [pBind]="ptm('root')"
            [class]="cn(cx('root'), styleClass)"
            [ngStyle]="style"
            role="alertdialog"
            (click)="onOverlayClick($event)"
            [@animation]="{
                value: 'open',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <ng-container *ngIf="headlessTemplate || _headlessTemplate; else notHeadless">
                <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate; context: { $implicit: confirmation }"></ng-container>
            </ng-container>
            <ng-template #notHeadless>
                <div #content [pBind]="ptm('content')" [class]="cx('content')">
                    <ng-container *ngIf="contentTemplate || _contentTemplate; else withoutContentTemplate">
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: confirmation }"></ng-container>
                    </ng-container>
                    <ng-template #withoutContentTemplate>
                        <i [pBind]="ptm('icon')" [class]="cx('icon')" *ngIf="confirmation?.icon"></i>
                        <span [pBind]="ptm('message')" [class]="cx('message')">{{ confirmation?.message }}</span>
                    </ng-template>
                </div>
                <div [pBind]="ptm('footer')" [class]="cx('footer')">
                    <p-button
                        type="button"
                        [label]="rejectButtonLabel"
                        (onClick)="onReject()"
                        [pt]="ptm('pcRejectButton')"
                        [class]="cx('pcRejectButton')"
                        [styleClass]="confirmation?.rejectButtonStyleClass"
                        [size]="confirmation?.rejectButtonProps?.size || 'small'"
                        [text]="confirmation?.rejectButtonProps?.text || false"
                        *ngIf="confirmation?.rejectVisible !== false"
                        [attr.aria-label]="rejectButtonLabel"
                        [buttonProps]="getRejectButtonProps()"
                        [autofocus]="autoFocusReject"
                    >
                        <ng-template #icon>
                            <i [class]="confirmation?.rejectIcon" *ngIf="confirmation?.rejectIcon; else rejecticon"></i>
                            <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate || _rejectIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <p-button
                        type="button"
                        [label]="acceptButtonLabel"
                        (onClick)="onAccept()"
                        [pt]="ptm('pcAcceptButton')"
                        [class]="cx('pcAcceptButton')"
                        [styleClass]="confirmation?.acceptButtonStyleClass"
                        [size]="confirmation?.acceptButtonProps?.size || 'small'"
                        *ngIf="confirmation?.acceptVisible !== false"
                        [attr.aria-label]="acceptButtonLabel"
                        [buttonProps]="getAcceptButtonProps()"
                        [autofocus]="autoFocusAccept"
                    >
                        <ng-template #icon>
                            <i [class]="confirmation?.acceptIcon" *ngIf="confirmation?.acceptIcon; else accepticontemplate"></i>
                            <ng-template #accepticontemplate *ngTemplateOutlet="acceptIconTemplate || _acceptIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </ng-template>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => void", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ConfirmationService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: OverlayService
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    key: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    acceptIconTemplate: [{
      type: ContentChild,
      args: ["accepticon", {
        descendants: false
      }]
    }],
    rejectIconTemplate: [{
      type: ContentChild,
      args: ["rejecticon", {
        descendants: false
      }]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.Escape", ["$event"]]
    }]
  });
})();
var ConfirmPopupModule = class _ConfirmPopupModule {
  static \u0275fac = function ConfirmPopupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmPopupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ConfirmPopupModule,
    imports: [ConfirmPopup, SharedModule],
    exports: [ConfirmPopup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ConfirmPopup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmPopupModule, [{
    type: NgModule,
    args: [{
      imports: [ConfirmPopup, SharedModule],
      exports: [ConfirmPopup, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/uikit/overlaydemo.ts
var _c02 = () => ({ width: "30vw" });
var _c12 = () => ({ "960px": "75vw" });
var _c22 = () => ({ width: "auto" });
var _c32 = () => ({ width: "450px" });
var _c42 = () => ({ marginRight: "0.25em" });
var _c52 = () => ({ width: "350px" });
function OverlayDemo_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 35);
    \u0275\u0275listener("click", function OverlayDemo_ng_template_8_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementEnd();
  }
}
function OverlayDemo_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 36)(2, "span", 37);
    \u0275\u0275text(3, "Name ");
    \u0275\u0275element(4, "p-sortIcon", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "th", 39);
    \u0275\u0275text(6, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 40)(8, "span", 37);
    \u0275\u0275text(9, " Price ");
    \u0275\u0275element(10, "p-sortIcon", 41);
    \u0275\u0275elementEnd()()();
  }
}
function OverlayDemo_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 42)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "img", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275property("pSelectableRow", product_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "/demo/images/product/" + product_r5.image, \u0275\u0275sanitizeUrl)("alt", product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.price);
  }
}
function OverlayDemo_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 44);
    \u0275\u0275listener("click", function OverlayDemo_ng_template_69_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 45);
    \u0275\u0275listener("click", function OverlayDemo_ng_template_69_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeConfirmation());
    });
    \u0275\u0275elementEnd();
  }
}
var OverlayDemo = class _OverlayDemo {
  productService;
  confirmationService;
  messageService;
  display = false;
  products = [];
  visibleLeft = false;
  visibleRight = false;
  visibleTop = false;
  visibleBottom = false;
  visibleFull = false;
  displayConfirmation = false;
  selectedProduct;
  constructor(productService, confirmationService, messageService) {
    this.productService = productService;
    this.confirmationService = confirmationService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.productService.getProductsSmall().then((products) => this.products = products);
  }
  confirm(event) {
    this.confirmationService.confirm({
      key: "confirm2",
      target: event.target || new EventTarget(),
      message: "Are you sure that you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      rejectButtonProps: {
        label: "Cancel",
        severity: "secondary",
        outlined: true
      },
      acceptButtonProps: {
        label: "Save"
      },
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have accepted"
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected"
        });
      }
    });
  }
  open() {
    this.display = true;
  }
  close() {
    this.display = false;
  }
  toggleDataTable(op, event) {
    op.toggle(event);
  }
  onProductSelect(op, event) {
    op.hide();
    this.messageService.add({
      severity: "info",
      summary: "Product Selected",
      detail: event?.data.name,
      life: 3e3
    });
  }
  openConfirmation() {
    this.displayConfirmation = true;
  }
  closeConfirmation() {
    this.displayConfirmation = false;
  }
  static \u0275fac = function OverlayDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayDemo)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverlayDemo, selectors: [["app-overlay-demo"]], features: [\u0275\u0275ProvidersFeature([ConfirmationService, MessageService, ProductService])], decls: 71, vars: 42, consts: [["footer", ""], ["op2", ""], ["header", ""], ["body", ""], ["popup", ""], [1, "flex", "flex-col", "md:flex-row", "gap-8"], [1, "md:w-1/2"], [1, "card"], [1, "font-semibold", "text-xl", "mb-4"], ["header", "Dialog", 3, "visibleChange", "visible", "breakpoints", "modal"], [1, "leading-normal", "m-0"], ["label", "Show", 3, "click"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "label", "Show", 3, "click"], ["id", "overlay_panel"], ["selectionMode", "single", "dataKey", "id", 3, "selectionChange", "onRowSelect", "value", "selection", "rows", "paginator"], [1, "inline-flex", "gap-4"], ["pInputText", "", "type", "text", "placeholder", "Username", "pTooltip", "Your username"], ["type", "button", "label", "Save", "pTooltip", "Click to proceed"], ["header", "Drawer", 3, "visibleChange", "visible"], ["header", "Drawer", "position", "right", 3, "visibleChange", "visible"], ["header", "Drawer", "position", "top", 3, "visibleChange", "visible"], ["header", "Drawer", "position", "bottom", 3, "visibleChange", "visible"], ["header", "Drawer", "position", "full", 3, "visibleChange", "visible"], ["icon", "pi pi-arrow-right", 3, "click"], ["icon", "pi pi-arrow-left", 3, "click"], ["icon", "pi pi-arrow-down", 3, "click"], ["icon", "pi pi-arrow-up", 3, "click"], ["icon", "pi pi-external-link", 3, "click"], ["key", "confirm2"], ["icon", "pi pi-check", "label", "Confirm", 1, "mr-2", 3, "click"], ["label", "Delete", "icon", "pi pi-trash", "severity", "danger", 3, "click"], ["header", "Confirmation", 3, "visibleChange", "visible", "modal"], [1, "flex", "items-center", "justify-center"], [1, "pi", "pi-exclamation-triangle", "mr-6", 2, "font-size", "2rem"], ["label", "Save", 3, "click"], ["pSortableColumn", "name", 2, "width", "33%"], [1, "flex", "items-center", "gap-2"], ["field", "name"], [2, "width", "33%"], ["pSortableColumn", "price", 2, "width", "33%"], ["field", "price"], [3, "pSelectableRow"], [1, "w-16", "shadow-sm", 3, "src", "alt"], ["label", "No", "icon", "pi pi-times", "text", "", "severity", "secondary", 3, "click"], ["label", "Yes", "icon", "pi pi-check", "severity", "danger", "outlined", "", "autofocus", "", 3, "click"]], template: function OverlayDemo_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8);
      \u0275\u0275text(4, "Dialog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-dialog", 9);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_dialog_visibleChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.display, $event) || (ctx.display = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(6, "p", 10);
      \u0275\u0275text(7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, OverlayDemo_ng_template_8_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p-button", 11);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.open());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8);
      \u0275\u0275text(13, "Popover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 12)(15, "p-button", 13);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        const op2_r4 = \u0275\u0275reference(17);
        return \u0275\u0275resetView(ctx.toggleDataTable(op2_r4, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-popover", 14, 1)(18, "p-table", 15);
      \u0275\u0275twoWayListener("selectionChange", function OverlayDemo_Template_p_table_selectionChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedProduct, $event) || (ctx.selectedProduct = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onRowSelect", function OverlayDemo_Template_p_table_onRowSelect_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        const op2_r4 = \u0275\u0275reference(17);
        return \u0275\u0275resetView(ctx.onProductSelect(op2_r4, $event));
      });
      \u0275\u0275template(19, OverlayDemo_ng_template_19_Template, 11, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(21, OverlayDemo_ng_template_21_Template, 7, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "p-toast");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
      \u0275\u0275text(26, "Tooltip");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 16);
      \u0275\u0275element(28, "input", 17)(29, "p-button", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 6)(31, "div", 7)(32, "div", 8);
      \u0275\u0275text(33, "Drawer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-drawer", 19);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_drawer_visibleChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visibleLeft, $event) || (ctx.visibleLeft = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "p-drawer", 20);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_drawer_visibleChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visibleRight, $event) || (ctx.visibleRight = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p-drawer", 21);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_drawer_visibleChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visibleTop, $event) || (ctx.visibleTop = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p-drawer", 22);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_drawer_visibleChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visibleBottom, $event) || (ctx.visibleBottom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "p-drawer", 23);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_drawer_visibleChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visibleFull, $event) || (ctx.visibleFull = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "p-button", 24);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleLeft = true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p-button", 25);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_50_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleRight = true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p-button", 26);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleTop = true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p-button", 27);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleBottom = true);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p-button", 28);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_53_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleFull = true);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 7)(55, "div", 8);
      \u0275\u0275text(56, "ConfirmPopup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "p-confirmpopup", 29);
      \u0275\u0275elementStart(58, "p-button", 30, 4);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.confirm($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 7)(61, "div", 8);
      \u0275\u0275text(62, "ConfirmDialog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p-button", 31);
      \u0275\u0275listener("click", function OverlayDemo_Template_p_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openConfirmation());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p-dialog", 32);
      \u0275\u0275twoWayListener("visibleChange", function OverlayDemo_Template_p_dialog_visibleChange_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.displayConfirmation, $event) || (ctx.displayConfirmation = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(65, "div", 33);
      \u0275\u0275element(66, "i", 34);
      \u0275\u0275elementStart(67, "span");
      \u0275\u0275text(68, "Are you sure you want to proceed?");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, OverlayDemo_ng_template_69_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(32, _c02));
      \u0275\u0275twoWayProperty("visible", ctx.display);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(33, _c12))("modal", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(34, _c22));
      \u0275\u0275advance(6);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(35, _c32));
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.products);
      \u0275\u0275twoWayProperty("selection", ctx.selectedProduct);
      \u0275\u0275property("rows", 5)("paginator", true);
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("visible", ctx.visibleLeft);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("visible", ctx.visibleRight);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("visible", ctx.visibleTop);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("visible", ctx.visibleBottom);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("visible", ctx.visibleFull);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c42));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(37, _c42));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c42));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(39, _c42));
      \u0275\u0275advance(11);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(40, _c22));
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c52));
      \u0275\u0275twoWayProperty("visible", ctx.displayConfirmation);
      \u0275\u0275property("modal", true);
    }
  }, dependencies: [ToastModule, Toast, DialogModule, Dialog, ButtonModule, Button, DrawerModule, Drawer, PopoverModule, Popover, ConfirmPopupModule, ConfirmPopup, InputTextModule, InputText, FormsModule, TooltipModule, Tooltip, TableModule, Table, SortableColumn, SelectableRow, SortIcon], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayDemo, [{
    type: Component,
    args: [{
      selector: "app-overlay-demo",
      standalone: true,
      imports: [ToastModule, DialogModule, ButtonModule, DrawerModule, PopoverModule, ConfirmPopupModule, InputTextModule, FormsModule, TooltipModule, TableModule, ToastModule],
      template: `<div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Dialog</div>
                <p-dialog header="Dialog" [(visible)]="display" [breakpoints]="{ '960px': '75vw' }" [style]="{ width: '30vw' }" [modal]="true">
                    <p class="leading-normal m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ng-template #footer>
                        <p-button label="Save" (click)="close()" />
                    </ng-template>
                </p-dialog>
                <p-button label="Show" [style]="{ width: 'auto' }" (click)="open()" />
            </div>

            <div class="card">
                <div class="font-semibold text-xl mb-4">Popover</div>
                <div class="flex flex-wrap gap-2">
                    <p-button type="button" label="Show" (click)="toggleDataTable(op2, $event)" />
                    <p-popover #op2 id="overlay_panel" [style]="{ width: '450px' }">
                        <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="id" [rows]="5" [paginator]="true" (onRowSelect)="onProductSelect(op2, $event)">
                            <ng-template #header>
                                <tr>
                                    <th pSortableColumn="name" style="width: 33%;">
                                        <span class="flex items-center gap-2">Name
                                        <p-sortIcon field="name" /></span>
                                    </th>
                                    <th style="width: 33%;">Image</th>
                                    <th pSortableColumn="price" style="width: 33%;">
                                        <span class="flex items-center gap-2"> Price
                                        <p-sortIcon field="price" /></span>
                                    </th>
                                </tr>
                            </ng-template>
                            <ng-template #body let-product>
                                <tr [pSelectableRow]="product">
                                    <td>{{ product.name }}</td>
                                    <td>
                                        <img [src]="'/demo/images/product/' + product.image" [alt]="product.name" class="w-16 shadow-sm" />
                                    </td>
                                    <td>{{ product.price }}</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </p-popover>
                    <p-toast />
                </div>
            </div>

            <div class="card">
                <div class="font-semibold text-xl mb-4">Tooltip</div>
                <div class="inline-flex gap-4">
                    <input pInputText type="text" placeholder="Username" pTooltip="Your username" />
                    <p-button type="button" label="Save" pTooltip="Click to proceed" />
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Drawer</div>
                <p-drawer [(visible)]="visibleLeft" header="Drawer">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </p-drawer>

                <p-drawer [(visible)]="visibleRight" header="Drawer" position="right">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </p-drawer>

                <p-drawer [(visible)]="visibleTop" header="Drawer" position="top">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </p-drawer>

                <p-drawer [(visible)]="visibleBottom" header="Drawer" position="bottom">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </p-drawer>

                <p-drawer [(visible)]="visibleFull" header="Drawer" position="full">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </p-drawer>

                <p-button icon="pi pi-arrow-right" (click)="visibleLeft = true" [style]="{ marginRight: '0.25em' }" />
                <p-button icon="pi pi-arrow-left" (click)="visibleRight = true" [style]="{ marginRight: '0.25em' }" />
                <p-button icon="pi pi-arrow-down" (click)="visibleTop = true" [style]="{ marginRight: '0.25em' }" />
                <p-button icon="pi pi-arrow-up" (click)="visibleBottom = true" [style]="{ marginRight: '0.25em' }" />
                <p-button icon="pi pi-external-link" (click)="visibleFull = true" />
            </div>

            <div class="card">
                <div class="font-semibold text-xl mb-4">ConfirmPopup</div>
                <p-confirmpopup key="confirm2"></p-confirmpopup>
                <p-button #popup (click)="confirm($event)" icon="pi pi-check" label="Confirm" class="mr-2"></p-button>
            </div>

            <div class="card">
                <div class="font-semibold text-xl mb-4">ConfirmDialog</div>
                <p-button label="Delete" icon="pi pi-trash" severity="danger" [style]="{ width: 'auto' }" (click)="openConfirmation()" />
                <p-dialog header="Confirmation" [(visible)]="displayConfirmation" [style]="{ width: '350px' }" [modal]="true">
                    <div class="flex items-center justify-center">
                        <i class="pi pi-exclamation-triangle mr-6" style="font-size: 2rem"> </i>
                        <span>Are you sure you want to proceed?</span>
                    </div>
                    <ng-template #footer>
                        <p-button label="No" icon="pi pi-times" (click)="closeConfirmation()" text severity="secondary" />
                        <p-button label="Yes" icon="pi pi-check" (click)="closeConfirmation()" severity="danger" outlined autofocus />
                    </ng-template>
                </p-dialog>
            </div>
        </div>
    </div>`,
      providers: [ConfirmationService, MessageService, ProductService]
    }]
  }], () => [{ type: ProductService }, { type: ConfirmationService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverlayDemo, { className: "OverlayDemo", filePath: "src/app/pages/uikit/overlaydemo.ts", lineNumber: 146 });
})();
export {
  OverlayDemo
};
//# sourceMappingURL=chunk-VTS4H3IC.js.map
