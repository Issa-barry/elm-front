import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-DKB7AVIY.js";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionModule,
  AccordionPanel
} from "./chunk-DEHQQ4L4.js";
import {
  Divider,
  DividerModule
} from "./chunk-GUS3FLSY.js";
import {
  SplitButton,
  SplitButtonModule
} from "./chunk-DAPATMHW.js";
import "./chunk-AQ67SZNM.js";
import {
  Toolbar,
  ToolbarModule
} from "./chunk-GZ7D5YLH.js";
import {
  MenuModule
} from "./chunk-HBQ7KAGJ.js";
import "./chunk-FHW6CQ6W.js";
import "./chunk-MT6PN7RC.js";
import {
  MinusIcon
} from "./chunk-5KB4S2LF.js";
import "./chunk-TRKKYFQF.js";
import "./chunk-5ATNZ2IU.js";
import "./chunk-CJAMEXZR.js";
import "./chunk-CF4ML4KQ.js";
import "./chunk-46OYJGUM.js";
import {
  PlusIcon
} from "./chunk-TEXAILZL.js";
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
  FormsModule
} from "./chunk-VJUJTGB6.js";
import "./chunk-3ISV5J4X.js";
import "./chunk-R3LUQ3Y4.js";
import "./chunk-CJMBUE5J.js";
import "./chunk-IDACGSZU.js";
import {
  Button,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import {
  RippleModule
} from "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  C,
  Footer,
  P,
  PARENT_INSTANCE,
  PrimeTemplate,
  R,
  Rt,
  SharedModule,
  Tt,
  V,
  W,
  s2 as s,
  v
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-A6EA4TT7.js";
import {
  animate,
  state,
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
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/fieldset/index.mjs
var style2 = "\n    .p-fieldset {\n        background: dt('fieldset.background');\n        border: 1px solid dt('fieldset.border.color');\n        border-radius: dt('fieldset.border.radius');\n        color: dt('fieldset.color');\n        padding: dt('fieldset.padding');\n        margin: 0;\n    }\n\n    .p-fieldset-legend {\n        background: dt('fieldset.legend.background');\n        border-radius: dt('fieldset.legend.border.radius');\n        border-width: dt('fieldset.legend.border.width');\n        border-style: solid;\n        border-color: dt('fieldset.legend.border.color');\n        padding: dt('fieldset.legend.padding');\n        transition:\n            background dt('fieldset.transition.duration'),\n            color dt('fieldset.transition.duration'),\n            outline-color dt('fieldset.transition.duration'),\n            box-shadow dt('fieldset.transition.duration');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend {\n        padding: 0;\n    }\n\n    .p-fieldset-toggle-button {\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        display: flex;\n        gap: dt('fieldset.legend.gap');\n        align-items: center;\n        justify-content: center;\n        padding: dt('fieldset.legend.padding');\n        background: transparent;\n        border: 0 none;\n        border-radius: dt('fieldset.legend.border.radius');\n        transition:\n            background dt('fieldset.transition.duration'),\n            color dt('fieldset.transition.duration'),\n            outline-color dt('fieldset.transition.duration'),\n            box-shadow dt('fieldset.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-fieldset-legend-label {\n        font-weight: dt('fieldset.legend.font.weight');\n    }\n\n    .p-fieldset-toggle-button:focus-visible {\n        box-shadow: dt('fieldset.legend.focus.ring.shadow');\n        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');\n        outline-offset: dt('fieldset.legend.focus.ring.offset');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend:hover {\n        color: dt('fieldset.legend.hover.color');\n        background: dt('fieldset.legend.hover.background');\n    }\n\n    .p-fieldset-toggle-icon {\n        color: dt('fieldset.toggle.icon.color');\n        transition: color dt('fieldset.transition.duration');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {\n        color: dt('fieldset.toggle.icon.hover.color');\n    }\n\n    .p-fieldset .p-fieldset-content {\n        padding: dt('fieldset.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-fieldset.mjs
var _c0 = ["header"];
var _c1 = ["expandicon"];
var _c2 = ["collapseicon"];
var _c3 = ["content"];
var _c4 = ["*", [["p-header"]]];
var _c5 = ["*", "p-header"];
var _c6 = (a0) => ({
  transitionParams: a0,
  height: "0"
});
var _c7 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c8 = (a0) => ({
  transitionParams: a0,
  height: "*"
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
function Fieldset_ng_container_2_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.cx("toggleIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("toggleIcon"));
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.cx("toggleIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("toggleIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 8)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 4, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.expandIconTemplate && !ctx_r2._expandIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.cx("toggleIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("toggleIcon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r2.cx("toggleIcon"));
    \u0275\u0275property("pBind", ctx_r2.ptm("toggleIcon"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Fieldset_ng_container_2_ng_container_3__svg_svg_1_Template, 1, 4, "svg", 11)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 4, "span", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapseIconTemplate && !ctx_r2._collapseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 6);
    \u0275\u0275listener("click", function Fieldset_ng_container_2_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_button_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 7)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 7)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const legendContent_r4 = \u0275\u0275reference(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("toggleButton"));
    \u0275\u0275property("pBind", ctx_r2.ptm("toggleButton"));
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed)("aria-label", ctx_r2.buttonAriaLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", legendContent_r4);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("legendLabel"));
    \u0275\u0275property("pBind", ctx_r2.ptm("legendLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.legend);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-fieldset p-component", {
    "p-fieldset-toggleable": instance.toggleable,
    "p-fieldset-collapsed": instance.collapsed && instance.toggleable
  }],
  legend: "p-fieldset-legend",
  legendLabel: "p-fieldset-legend-label",
  toggleButton: "p-fieldset-toggle-button",
  toggleIcon: "p-fieldset-toggle-icon",
  contentContainer: "p-fieldset-content-container",
  content: "p-fieldset-content"
};
var FieldsetStyle = class _FieldsetStyle extends BaseStyle {
  name = "fieldset";
  style = style3;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FieldsetStyle_BaseFactory;
    return function FieldsetStyle_Factory(__ngFactoryType__) {
      return (\u0275FieldsetStyle_BaseFactory || (\u0275FieldsetStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FieldsetStyle)))(__ngFactoryType__ || _FieldsetStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FieldsetStyle,
    factory: _FieldsetStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetStyle, [{
    type: Injectable
  }], null, null);
})();
var FieldsetClasses;
(function(FieldsetClasses2) {
  FieldsetClasses2["root"] = "p-fieldset";
  FieldsetClasses2["legend"] = "p-fieldset-legend";
  FieldsetClasses2["legendLabel"] = "p-fieldset-legend-label";
  FieldsetClasses2["toggleIcon"] = "p-fieldset-toggle-icon";
  FieldsetClasses2["contentContainer"] = "p-fieldset-content-container";
  FieldsetClasses2["content"] = "p-fieldset-content";
})(FieldsetClasses || (FieldsetClasses = {}));
var FIELDSET_INSTANCE = new InjectionToken("FIELDSET_INSTANCE");
var Fieldset = class _Fieldset extends BaseComponent {
  $pcFieldset = inject(FIELDSET_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(FieldsetStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  get dataP() {
    return this.cn({
      toggleable: this.toggleable
    });
  }
  /**
   * Header text of the fieldset.
   * @group Props
   */
  legend;
  /**
   * When specified, content can toggled by clicking the legend.
   * @group Props
   * @defaultValue false
   */
  toggleable;
  /**
   * Defines the default visibility state of the content.
   * * @group Props
   */
  collapsed = false;
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
   * Transition options of the panel animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emits when the collapsed state changes.
   * @param {boolean} value - New value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  _id = s("pn_id_");
  get id() {
    return this._id;
  }
  get buttonAriaLabel() {
    return this.legend;
  }
  animating;
  /**
   * Defines the header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines the expandicon template.
   * @group Templates
   */
  expandIconTemplate;
  /**
   * Defines the collapseicon template.
   * @group Templates
   */
  collapseIconTemplate;
  /**
   * Defines the content template.
   * @group Templates
   */
  contentTemplate;
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    event.preventDefault();
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onToggleDone() {
    this.animating = false;
  }
  _headerTemplate;
  _expandIconTemplate;
  _collapseIconTemplate;
  _contentTemplate;
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "expandicon":
          this._expandIconTemplate = item.template;
          break;
        case "collapseicon":
          this._collapseIconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Fieldset_BaseFactory;
    return function Fieldset_Factory(__ngFactoryType__) {
      return (\u0275Fieldset_BaseFactory || (\u0275Fieldset_BaseFactory = \u0275\u0275getInheritedFactory(_Fieldset)))(__ngFactoryType__ || _Fieldset);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Fieldset,
    selectors: [["p-fieldset"]],
    contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, _c3, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expandIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapseIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      legend: "legend",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([FieldsetStyle, {
      provide: FIELDSET_INSTANCE,
      useExisting: _Fieldset
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Fieldset
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 9,
    vars: 30,
    consts: [["legendContent", ""], [3, "ngStyle", "pBind"], [3, "pBind"], [4, "ngIf", "ngIfElse"], ["role", "region", 3, "pBind"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "button", 3, "click", "keydown", "pBind"], [4, "ngIf"], ["data-p-icon", "plus", 3, "class", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "plus", 3, "pBind"], ["data-p-icon", "minus", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "minus", 3, "pBind"]],
    template: function Fieldset_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "fieldset", 1)(1, "legend", 2);
        \u0275\u0275template(2, Fieldset_ng_container_2_Template, 5, 10, "ng-container", 3)(3, Fieldset_ng_template_3_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275listener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone());
        });
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275projection(7);
        \u0275\u0275template(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const legendContent_r4 = \u0275\u0275reference(4);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        \u0275\u0275property("ngStyle", ctx.style)("pBind", ctx.ptm("root"));
        \u0275\u0275attribute("id", ctx.id)("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("legend"));
        \u0275\u0275property("pBind", ctx.ptm("legend"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.toggleable)("ngIfElse", legendContent_r4);
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.cx("contentContainer"));
        \u0275\u0275property("pBind", ctx.ptm("contentContainer"))("@fieldsetContent", ctx.collapsed ? \u0275\u0275pureFunction1(24, _c7, \u0275\u0275pureFunction1(22, _c6, ctx.transitionOptions)) : \u0275\u0275pureFunction1(28, _c9, \u0275\u0275pureFunction1(26, _c8, ctx.animating ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, MinusIcon, PlusIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fieldset, [{
    type: Component,
    args: [{
      selector: "p-fieldset",
      standalone: true,
      imports: [CommonModule, MinusIcon, PlusIcon, SharedModule, BindModule],
      template: `
        <fieldset [attr.id]="id" [ngStyle]="style" [class]="cn(cx('root'), styleClass)" [pBind]="ptm('root')" [attr.data-p]="dataP">
            <legend [class]="cx('legend')" [pBind]="ptm('legend')">
                <ng-container *ngIf="toggleable; else legendContent">
                    <button
                        [attr.id]="id + '_header'"
                        tabindex="0"
                        role="button"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        [attr.aria-label]="buttonAriaLabel"
                        (click)="toggle($event)"
                        (keydown)="onKeyDown($event)"
                        [class]="cx('toggleButton')"
                        [pBind]="ptm('toggleButton')"
                    >
                        <ng-container *ngIf="collapsed">
                            <svg data-p-icon="plus" *ngIf="!expandIconTemplate && !_expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="expandIconTemplate || _expandIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="expandIconTemplate || _expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <svg data-p-icon="minus" *ngIf="!collapseIconTemplate && !_collapseIconTemplate" [class]="cx('toggleIcon')" [attr.aria-hidden]="true" [pBind]="ptm('toggleIcon')" />
                            <span *ngIf="collapseIconTemplate || _collapseIconTemplate" [class]="cx('toggleIcon')" [pBind]="ptm('toggleIcon')">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate || _collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </button>
                </ng-container>
                <ng-template #legendContent>
                    <span [class]="cx('legendLabel')" [pBind]="ptm('legendLabel')">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                [class]="cx('contentContainer')"
                [pBind]="ptm('contentContainer')"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div [class]="cx('content')" [pBind]="ptm('content')">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
      animations: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FieldsetStyle, {
        provide: FIELDSET_INSTANCE,
        useExisting: Fieldset
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Fieldset
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsed: [{
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
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    expandIconTemplate: [{
      type: ContentChild,
      args: ["expandicon", {
        descendants: false
      }]
    }],
    collapseIconTemplate: [{
      type: ContentChild,
      args: ["collapseicon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FieldsetModule = class _FieldsetModule {
  static \u0275fac = function FieldsetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldsetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FieldsetModule,
    imports: [Fieldset, SharedModule, BindModule],
    exports: [Fieldset, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Fieldset, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetModule, [{
    type: NgModule,
    args: [{
      imports: [Fieldset, SharedModule, BindModule],
      exports: [Fieldset, SharedModule, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/panel/index.mjs
var style4 = "\n    .p-panel {\n        display: block;\n        border: 1px solid dt('panel.border.color');\n        border-radius: dt('panel.border.radius');\n        background: dt('panel.background');\n        color: dt('panel.color');\n    }\n\n    .p-panel-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('panel.header.padding');\n        background: dt('panel.header.background');\n        color: dt('panel.header.color');\n        border-style: solid;\n        border-width: dt('panel.header.border.width');\n        border-color: dt('panel.header.border.color');\n        border-radius: dt('panel.header.border.radius');\n    }\n\n    .p-panel-toggleable .p-panel-header {\n        padding: dt('panel.toggleable.header.padding');\n    }\n\n    .p-panel-title {\n        line-height: 1;\n        font-weight: dt('panel.title.font.weight');\n    }\n\n    .p-panel-content {\n        padding: dt('panel.content.padding');\n    }\n\n    .p-panel-footer {\n        padding: dt('panel.footer.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-panel.mjs
var _c02 = ["header"];
var _c12 = ["icons"];
var _c22 = ["content"];
var _c32 = ["footer"];
var _c42 = ["headericons"];
var _c52 = ["contentWrapper"];
var _c62 = ["*", [["p-header"]], [["p-footer"]]];
var _c72 = ["*", "p-header", "p-footer"];
var _c82 = (a0) => ({
  transitionParams: a0,
  height: "0",
  opacity: "0"
});
var _c92 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c10 = (a0) => ({
  transitionParams: a0,
  height: "*",
  opacity: "1"
});
var _c11 = (a0) => ({
  value: "visible",
  params: a0
});
var _c122 = (a0) => ({
  $implicit: a0
});
function Panel_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("title"));
    \u0275\u0275property("pBind", ctx_r2.ptm("title"));
    \u0275\u0275attribute("id", ctx_r2.id + "_header");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2._header);
  }
}
function Panel_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_0_5_ng_template_0_Template(rf, ctx) {
}
function Panel_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r2.ptm("pcToggleButton.icon"));
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(1, "svg", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("pBind", ctx_r2.ptm("pcToggleButton.icon"));
  }
}
function Panel_div_0_p_button_6_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 10)(2, Panel_div_0_p_button_6_ng_template_1_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.collapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.collapsed);
  }
}
function Panel_div_0_p_button_6_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function Panel_div_0_p_button_6_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_p_button_6_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Panel_div_0_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Panel_div_0_p_button_6_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 10)(1, Panel_div_0_p_button_6_ng_template_1_1_Template, 1, 0, null, 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r2.headerIconsTemplate && !ctx_r2._headerIconsTemplate && !(ctx_r2.toggleButtonProps == null ? null : ctx_r2.toggleButtonProps.icon));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerIconsTemplate || ctx_r2._headerIconsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c122, ctx_r2.collapsed));
  }
}
function Panel_div_0_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 9);
    \u0275\u0275listener("click", function Panel_div_0_p_button_6_Template_p_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onIconClick($event));
    })("keydown", function Panel_div_0_p_button_6_Template_p_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    });
    \u0275\u0275template(1, Panel_div_0_p_button_6_ng_template_1_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("text", true)("rounded", true)("styleClass", ctx_r2.cx("pcToggleButton"))("buttonProps", ctx_r2.toggleButtonProps)("pt", ctx_r2.ptm("pcToggleButton"));
    \u0275\u0275attribute("id", ctx_r2.id + "_header")("aria-label", ctx_r2.buttonAriaLabel)("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed);
  }
}
function Panel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function Panel_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onHeaderClick($event));
    });
    \u0275\u0275template(1, Panel_div_0_span_1_Template, 2, 5, "span", 6);
    \u0275\u0275projection(2, 1);
    \u0275\u0275template(3, Panel_div_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275template(5, Panel_div_0_5_Template, 1, 0, null, 5)(6, Panel_div_0_p_button_6_Template, 3, 9, "p-button", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("header"));
    \u0275\u0275property("pBind", ctx_r2.ptm("header"));
    \u0275\u0275attribute("id", ctx_r2.id + "-titlebar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2._header);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("headerActions"));
    \u0275\u0275property("pBind", ctx_r2.ptm("headerActions"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.iconTemplate || ctx_r2._iconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.toggleable);
  }
}
function Panel_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Panel_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Panel_div_6_ng_container_2_Template, 1, 0, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("footer"));
    \u0275\u0275property("pBind", ctx_r2.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
  }
}
var style5 = (
  /*css*/
  `
    ${style4}

    /* For PrimeNG */
    .p-panel-collapsed .p-panel-content-container,
    .p-panel-content-container.ng-animating {
        overflow: hidden !important;
    }

`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-panel p-component", {
    "p-panel-toggleable": instance.toggleable,
    "p-panel-expanded": !instance._collapsed && instance.toggleable,
    "p-panel-collapsed": instance._collapsed && instance.toggleable
  }],
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: ({
    instance
  }) => ["p-panel-header-actions", {
    "p-panel-icons-start": instance.iconPos === "start",
    "p-panel-icons-end": instance.iconPos === "end",
    "p-panel-icons-center": instance.iconPos === "center"
  }],
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = class _PanelStyle extends BaseStyle {
  name = "panel";
  style = style5;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PanelStyle_BaseFactory;
    return function PanelStyle_Factory(__ngFactoryType__) {
      return (\u0275PanelStyle_BaseFactory || (\u0275PanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_PanelStyle)))(__ngFactoryType__ || _PanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PanelStyle,
    factory: _PanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelStyle, [{
    type: Injectable
  }], null, null);
})();
var PanelClasses;
(function(PanelClasses2) {
  PanelClasses2["root"] = "p-panel";
  PanelClasses2["header"] = "p-panel-header";
  PanelClasses2["title"] = "p-panel-title";
  PanelClasses2["headerActions"] = "p-panel-header-actions";
  PanelClasses2["pcToggleButton"] = "p-panel-toggle-button";
  PanelClasses2["contentContainer"] = "p-panel-content-container";
  PanelClasses2["content"] = "p-panel-content";
  PanelClasses2["footer"] = "p-panel-footer";
})(PanelClasses || (PanelClasses = {}));
var PANEL_INSTANCE = new InjectionToken("PANEL_INSTANCE");
var Panel = class _Panel extends BaseComponent {
  $pcPanel = inject(PANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(PanelStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Id of the component.
   */
  id = s("pn_id_");
  /**
   * Defines if content of panel can be expanded and collapsed.
   * @group Props
   */
  toggleable;
  /**
   * Header text of the panel.
   * @group Props
   */
  _header;
  /**
   * Internal collapsed state
   */
  _collapsed;
  /**
   * Defines the initial state of panel content, supports one or two-way binding as well.
   * @group Props
   */
  get collapsed() {
    return this._collapsed;
  }
  set collapsed(value) {
    this._collapsed = value;
  }
  /**
   * Style class of the component.
   * @group Props
   * @deprecated since v20.0.0, use `class` instead.
   */
  styleClass;
  /**
   * Position of the icons.
   * @group Props
   */
  iconPos = "end";
  /**
   * Specifies if header of panel cannot be displayed.
   * @group Props
   */
  showHeader = true;
  /**
   * Specifies the toggler element to toggle the panel content.
   * @group Props
   */
  toggler = "icon";
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  toggleButtonProps;
  /**
   * Emitted when the collapsed changes.
   * @param {boolean} value - New Value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom panel toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  animating = signal(false, ...ngDevMode ? [{
    debugName: "animating"
  }] : []);
  footerFacet;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines template option for icon.
   * @example
   * ```html
   * <ng-template #icon> </ng-template>
   * ```
   * @group Templates
   */
  iconTemplate;
  /**
   * Defines template option for content.
   * @example
   * ```html
   * <ng-template #content> </ng-template>
   * ```
   * @group Templates
   */
  contentTemplate;
  /**
   * Defines template option for footer.
   * @example
   * ```html
   * <ng-template #footer> </ng-template>
   * ```
   * @group Templates
   */
  footerTemplate;
  /**
   * Defines template option for headerIcon.
   * @type {TemplateRef<PanelHeaderIconsTemplateContext>} context - context of the template.
   * @example
   * ```html
   * <ng-template #headericons let-collapsed> </ng-template>
   * ```
   * @see {@link PanelHeaderIconsTemplateContext}
   * @group Templates
   */
  headerIconsTemplate;
  _headerTemplate;
  _iconTemplate;
  _contentTemplate;
  _footerTemplate;
  _headerIconsTemplate;
  contentWrapperViewChild;
  get buttonAriaLabel() {
    return this._header;
  }
  onHeaderClick(event) {
    if (this.toggler === "header") {
      this.toggle(event);
    }
  }
  onIconClick(event) {
    if (this.toggler === "icon") {
      this.toggle(event);
    }
  }
  toggle(event) {
    if (this.animating()) {
      return false;
    }
    this.animating.set(true);
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.toggleable) {
      if (this.collapsed) this.expand();
      else this.collapse();
    }
    event.preventDefault();
  }
  expand() {
    this._collapsed = false;
    this.collapsedChange.emit(false);
    this.updateTabIndex();
  }
  collapse() {
    this._collapsed = true;
    this.collapsedChange.emit(true);
    this.updateTabIndex();
  }
  getBlockableElement() {
    return this.el.nativeElement;
  }
  updateTabIndex() {
    if (this.contentWrapperViewChild) {
      const focusableElements = this.contentWrapperViewChild.nativeElement.querySelectorAll("input, button, select, a, textarea, [tabindex]");
      focusableElements.forEach((element) => {
        if (this.collapsed) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  onToggleDone(event) {
    this.animating.set(false);
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "icons":
          this._iconTemplate = item.template;
          break;
        case "headericons":
          this._headerIconsTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  dataP() {
    return this.cn({
      toggleable: this.toggleable
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Panel_BaseFactory;
    return function Panel_Factory(__ngFactoryType__) {
      return (\u0275Panel_BaseFactory || (\u0275Panel_BaseFactory = \u0275\u0275getInheritedFactory(_Panel)))(__ngFactoryType__ || _Panel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Panel,
    selectors: [["p-panel"]],
    contentQueries: function Panel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerIconsTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Panel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c52, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentWrapperViewChild = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function Panel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("data-p", ctx.dataP());
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      id: "id",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      _header: [0, "header", "_header"],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      styleClass: "styleClass",
      iconPos: "iconPos",
      showHeader: [2, "showHeader", "showHeader", booleanAttribute],
      toggler: "toggler",
      transitionOptions: "transitionOptions",
      toggleButtonProps: "toggleButtonProps"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [\u0275\u0275ProvidersFeature([PanelStyle, {
      provide: PANEL_INSTANCE,
      useExisting: _Panel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Panel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c72,
    decls: 7,
    vars: 22,
    consts: [["contentWrapper", ""], ["icon", ""], [3, "pBind", "class", "click", 4, "ngIf"], ["role", "region", 3, "pBind", "id"], [3, "pBind"], [4, "ngTemplateOutlet"], [3, "pBind", "class", 4, "ngIf"], [3, "click", "pBind"], ["severity", "secondary", "type", "button", "role", "button", 3, "text", "rounded", "styleClass", "buttonProps", "pt", "click", "keydown", 4, "ngIf"], ["severity", "secondary", "type", "button", "role", "button", 3, "click", "keydown", "text", "rounded", "styleClass", "buttonProps", "pt"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "minus", 3, "pBind"], ["data-p-icon", "plus", 3, "pBind"]],
    template: function Panel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c62);
        \u0275\u0275template(0, Panel_div_0_Template, 7, 11, "div", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275listener("@panelContent.done", function Panel_Template_div_animation_panelContent_done_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onToggleDone($event));
        });
        \u0275\u0275elementStart(2, "div", 4, 0);
        \u0275\u0275projection(4);
        \u0275\u0275template(5, Panel_ng_container_5_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, Panel_div_6_Template, 3, 4, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.showHeader);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("contentContainer"));
        \u0275\u0275property("pBind", ctx.ptm("contentContainer"))("id", ctx.id + "_content")("@panelContent", ctx.collapsed ? \u0275\u0275pureFunction1(16, _c92, \u0275\u0275pureFunction1(14, _c82, ctx.animating() ? ctx.transitionOptions : "0ms")) : \u0275\u0275pureFunction1(20, _c11, \u0275\u0275pureFunction1(18, _c10, ctx.animating() ? ctx.transitionOptions : "0ms")));
        \u0275\u0275attribute("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("tabindex", ctx.collapsed ? "-1" : void 0);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, PlusIcon, MinusIcon, ButtonModule, Button, SharedModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Panel, [{
    type: Component,
    args: [{
      selector: "p-panel",
      standalone: true,
      imports: [CommonModule, PlusIcon, MinusIcon, ButtonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="showHeader" (click)="onHeaderClick($event)" [attr.id]="id + '-titlebar'">
            <span [pBind]="ptm('title')" [class]="cx('title')" *ngIf="_header" [attr.id]="id + '_header'">{{ _header }}</span>
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <div [pBind]="ptm('headerActions')" [class]="cx('headerActions')">
                <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
                <p-button
                    *ngIf="toggleable"
                    [attr.id]="id + '_header'"
                    severity="secondary"
                    [text]="true"
                    [rounded]="true"
                    type="button"
                    role="button"
                    [styleClass]="cx('pcToggleButton')"
                    [attr.aria-label]="buttonAriaLabel"
                    [attr.aria-controls]="id + '_content'"
                    [attr.aria-expanded]="!collapsed"
                    (click)="onIconClick($event)"
                    (keydown)="onKeyDown($event)"
                    [buttonProps]="toggleButtonProps"
                    [pt]="ptm('pcToggleButton')"
                >
                    <ng-template #icon>
                        <ng-container *ngIf="!headerIconsTemplate && !_headerIconsTemplate && !toggleButtonProps?.icon">
                            <ng-container *ngIf="!collapsed">
                                <svg data-p-icon="minus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>

                            <ng-container *ngIf="collapsed">
                                <svg data-p-icon="plus" [pBind]="ptm('pcToggleButton.icon')" />
                            </ng-container>
                        </ng-container>

                        <ng-template *ngTemplateOutlet="headerIconsTemplate || _headerIconsTemplate; context: { $implicit: collapsed }"></ng-template>
                    </ng-template>
                </p-button>
            </div>
        </div>
        <div
            [pBind]="ptm('contentContainer')"
            [class]="cx('contentContainer')"
            [id]="id + '_content'"
            role="region"
            [attr.aria-labelledby]="id + '_header'"
            [attr.aria-hidden]="collapsed"
            [attr.tabindex]="collapsed ? '-1' : undefined"
            [@panelContent]="
                collapsed
                    ? {
                          value: 'hidden',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '0',
                              opacity: '0'
                          }
                      }
                    : {
                          value: 'visible',
                          params: {
                              transitionParams: animating() ? transitionOptions : '0ms',
                              height: '*',
                              opacity: '1'
                          }
                      }
            "
            (@panelContent.done)="onToggleDone($event)"
        >
            <div [pBind]="ptm('content')" [class]="cx('content')" #contentWrapper>
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>

            <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("panelContent", [state("hidden", style({
        height: "0"
      })), state("void", style({
        height: "{{height}}"
      }), {
        params: {
          height: "0"
        }
      }), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => hidden", animate("{{transitionParams}}")), transition("void => visible", animate("{{transitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PanelStyle, {
        provide: PANEL_INSTANCE,
        useExisting: Panel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Panel
      }],
      host: {
        "[id]": "id",
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p]": "dataP()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    id: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _header: [{
      type: Input,
      args: ["header"]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    showHeader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    toggler: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    toggleButtonProps: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icons", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    headerIconsTemplate: [{
      type: ContentChild,
      args: ["headericons", {
        descendants: false
      }]
    }],
    contentWrapperViewChild: [{
      type: ViewChild,
      args: ["contentWrapper"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelModule = class _PanelModule {
  static \u0275fac = function PanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _PanelModule,
    imports: [Panel, SharedModule, BindModule],
    exports: [Panel, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Panel, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelModule, [{
    type: NgModule,
    args: [{
      imports: [Panel, SharedModule, BindModule],
      exports: [Panel, SharedModule, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/splitter/index.mjs
var style6 = "\n    .p-splitter {\n        display: flex;\n        flex-wrap: nowrap;\n        border: 1px solid dt('splitter.border.color');\n        background: dt('splitter.background');\n        border-radius: dt('border.radius.md');\n        color: dt('splitter.color');\n    }\n\n    .p-splitter-vertical {\n        flex-direction: column;\n    }\n\n    .p-splitter-gutter {\n        flex-grow: 0;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        background: dt('splitter.gutter.background');\n    }\n\n    .p-splitter-gutter-handle {\n        border-radius: dt('splitter.handle.border.radius');\n        background: dt('splitter.handle.background');\n        transition:\n            outline-color dt('splitter.transition.duration'),\n            box-shadow dt('splitter.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-splitter-gutter-handle:focus-visible {\n        box-shadow: dt('splitter.handle.focus.ring.shadow');\n        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');\n        outline-offset: dt('splitter.handle.focus.ring.offset');\n    }\n\n    .p-splitter-horizontal.p-splitter-resizing {\n        cursor: col-resize;\n        user-select: none;\n    }\n\n    .p-splitter-vertical.p-splitter-resizing {\n        cursor: row-resize;\n        user-select: none;\n    }\n\n    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n        height: dt('splitter.handle.size');\n        width: 100%;\n    }\n\n    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n        width: dt('splitter.handle.size');\n        height: 100%;\n    }\n\n    .p-splitter-horizontal > .p-splitter-gutter {\n        cursor: col-resize;\n    }\n\n    .p-splitter-vertical > .p-splitter-gutter {\n        cursor: row-resize;\n    }\n\n    .p-splitterpanel {\n        flex-grow: 1;\n        overflow: hidden;\n    }\n\n    .p-splitterpanel-nested {\n        display: flex;\n    }\n\n    .p-splitterpanel .p-splitter {\n        flex-grow: 1;\n        border: 0 none;\n    }\n";

// node_modules/primeng/fesm2022/primeng-splitter.mjs
var _c03 = ["panel"];
function Splitter_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Splitter_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275listener("mousedown", function Splitter_ng_template_0_div_2_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGutterMouseDown($event, i_r2));
    })("touchstart", function Splitter_ng_template_0_div_2_Template_div_touchstart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGutterTouchStart($event, i_r2));
    })("touchmove", function Splitter_ng_template_0_div_2_Template_div_touchmove_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onGutterTouchMove($event));
    })("touchend", function Splitter_ng_template_0_div_2_Template_div_touchend_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onGutterTouchEnd($event));
    });
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275listener("keyup", function Splitter_ng_template_0_div_2_Template_div_keyup_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onGutterKeyUp($event));
    })("keydown", function Splitter_ng_template_0_div_2_Template_div_keydown_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const i_r2 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGutterKeyDown($event, i_r2));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.cx("gutter"));
    \u0275\u0275property("pBind", ctx_r2.ptm("gutter"));
    \u0275\u0275attribute("data-p-gutter-resizing", false);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("gutterHandle"));
    \u0275\u0275property("pBind", ctx_r2.ptm("gutterHandle"))("ngStyle", ctx_r2.gutterStyle());
    \u0275\u0275attribute("aria-orientation", ctx_r2.layout)("aria-valuenow", ctx_r2.prevSize);
  }
}
function Splitter_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, Splitter_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, Splitter_ng_template_0_div_2_Template, 2, 10, "div", 3);
  }
  if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cn(ctx_r2.cx("panel"), ctx_r2.panelStyleClass));
    \u0275\u0275property("pBind", ctx_r2.ptm("panel"))("ngStyle", ctx_r2.panelStyle);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", panel_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r2 !== ctx_r2.panels.length - 1);
  }
}
var classes3 = {
  root: ({
    instance
  }) => ["p-splitter p-component", "p-splitter-" + instance.layout],
  panel: ({
    instance
  }) => ["p-splitterpanel", {
    "p-splitterpanel-nested": instance.nestedState()
  }],
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
};
var inlineStyles = {
  root: ({
    instance
  }) => [{
    display: "flex",
    "flex-wrap": "nowrap"
  }, instance.layout === "vertical" ? {
    "flex-direction": "column"
  } : ""]
};
var SplitterStyle = class _SplitterStyle extends BaseStyle {
  name = "splitter";
  style = style6;
  classes = classes3;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SplitterStyle_BaseFactory;
    return function SplitterStyle_Factory(__ngFactoryType__) {
      return (\u0275SplitterStyle_BaseFactory || (\u0275SplitterStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SplitterStyle)))(__ngFactoryType__ || _SplitterStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SplitterStyle,
    factory: _SplitterStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterStyle, [{
    type: Injectable
  }], null, null);
})();
var SplitterClasses;
(function(SplitterClasses2) {
  SplitterClasses2["root"] = "p-splitter";
  SplitterClasses2["gutter"] = "p-splitter-gutter";
  SplitterClasses2["gutterHandle"] = "p-splitter-gutter-handle";
})(SplitterClasses || (SplitterClasses = {}));
var SPLITTER_INSTANCE = new InjectionToken("SPLITTER_INSTANCE");
var Splitter = class _Splitter extends BaseComponent {
  $pcSplitter = inject(SPLITTER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20. Use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the panel.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the panel.
   * @group Props
   */
  panelStyle;
  /**
   * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
   * @group Props
   */
  stateStorage = "session";
  /**
   * Storage identifier of a stateful Splitter.
   * @group Props
   */
  stateKey = null;
  /**
   * Orientation of the panels. Valid values are 'horizontal' and 'vertical'.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Size of the divider in pixels.
   * @group Props
   */
  gutterSize = 4;
  /**
   * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  /**
   * Minimum size of the elements relative to 100%.
   * @group Props
   */
  minSizes = [];
  /**
   * Size of the elements relative to 100%.
   * @group Props
   */
  get panelSizes() {
    return this._panelSizes;
  }
  set panelSizes(val) {
    this._panelSizes = val;
    if (this.el && this.el.nativeElement && this.panels.length > 0) {
      let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
      let _panelSizes = [];
      this.panels.map((panel, i) => {
        let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
        let panelSize = panelInitialSize || 100 / this.panels.length;
        _panelSizes[i] = panelSize;
        children[i].style.flexBasis = "calc(" + panelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      });
    }
  }
  /**
   * Callback to invoke when resize ends.
   * @param {SplitterResizeEndEvent} event - Custom panel resize end event
   * @group Emits
   */
  onResizeEnd = new EventEmitter();
  /**
   * Callback to invoke when resize starts.
   * @param {SplitterResizeStartEvent} event - Custom panel resize start event
   * @group Emits
   */
  onResizeStart = new EventEmitter();
  templates;
  panelChildren;
  splitter = contentChild(forwardRef(() => _Splitter), ...ngDevMode ? [{
    debugName: "splitter"
  }] : []);
  nestedState = computed(() => this.splitter(), ...ngDevMode ? [{
    debugName: "nestedState"
  }] : []);
  panels = [];
  dragging = false;
  mouseMoveListener;
  mouseUpListener;
  touchMoveListener;
  touchEndListener;
  size;
  gutterElement;
  startPos;
  prevPanelElement;
  nextPanelElement;
  nextPanelSize;
  prevPanelSize;
  _panelSizes = [];
  prevPanelIndex;
  timer;
  prevSize;
  _componentStyle = inject(SplitterStyle);
  onAfterContentInit() {
    if (this.templates && this.templates.toArray().length > 0) {
      this.templates.forEach((item) => {
        switch (item.getType()) {
          case "panel":
            this.panels.push(item.template);
            break;
          default:
            this.panels.push(item.template);
            break;
        }
      });
    }
    if (this.panelChildren && this.panelChildren.toArray().length > 0) {
      this.panelChildren.forEach((item) => {
        this.panels.push(item);
      });
    }
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.panels && this.panels.length) {
        let initialized = false;
        if (this.isStateful()) {
          initialized = this.restoreState();
        }
        if (!initialized) {
          let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
          let _panelSizes = [];
          this.panels.map((panel, i) => {
            let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
            let panelSize = panelInitialSize || 100 / this.panels.length;
            _panelSizes[i] = panelSize;
            children[i].style.flexBasis = "calc(" + panelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
          });
          this._panelSizes = _panelSizes;
          this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
        }
      }
    }
  }
  resizeStart(event, index, isKeyDown) {
    this.gutterElement = event.currentTarget || event.target.parentElement;
    this.size = this.horizontal() ? Rt(this.el.nativeElement) : Tt(this.el.nativeElement);
    if (!isKeyDown) {
      this.dragging = true;
      this.startPos = this.horizontal() ? event instanceof MouseEvent ? event.pageX : event.changedTouches[0].pageX : event instanceof MouseEvent ? event.pageY : event.changedTouches[0].pageY;
    }
    this.prevPanelElement = this.gutterElement.previousElementSibling;
    this.nextPanelElement = this.gutterElement.nextElementSibling;
    if (isKeyDown) {
      this.prevPanelSize = this.horizontal() ? v(this.prevPanelElement, true) : C(this.prevPanelElement, true);
      this.nextPanelSize = this.horizontal() ? v(this.nextPanelElement, true) : C(this.nextPanelElement, true);
    } else {
      this.prevPanelSize = 100 * (this.horizontal() ? v(this.prevPanelElement, true) : C(this.prevPanelElement, true)) / this.size;
      this.nextPanelSize = 100 * (this.horizontal() ? v(this.nextPanelElement, true) : C(this.nextPanelElement, true)) / this.size;
    }
    this.prevPanelIndex = index;
    W(this.gutterElement, "p-splitter-gutter-resizing");
    this.gutterElement.setAttribute("data-p-gutter-resizing", "true");
    W(this.el.nativeElement, "p-splitter-resizing");
    this.el.nativeElement.setAttribute("data-p-resizing", "true");
    this.onResizeStart.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
  }
  onResize(event, step, isKeyDown) {
    let newPos, newPrevPanelSize, newNextPanelSize;
    if (isKeyDown) {
      if (this.horizontal()) {
        newPrevPanelSize = 100 * ((this.prevPanelSize ?? 0) + (step ?? 0)) / (this.size ?? 1);
        newNextPanelSize = 100 * ((this.nextPanelSize ?? 0) - (step ?? 0)) / (this.size ?? 1);
      } else {
        newPrevPanelSize = 100 * ((this.prevPanelSize ?? 0) - (step ?? 0)) / (this.size ?? 1);
        newNextPanelSize = 100 * ((this.nextPanelSize ?? 0) + (step ?? 0)) / (this.size ?? 1);
      }
    } else {
      if (this.horizontal()) {
        if (V(this.el.nativeElement)) {
          newPos = ((this.startPos ?? 0) - event.pageX) * 100 / (this.size ?? 1);
        } else {
          newPos = (event.pageX - (this.startPos ?? 0)) * 100 / (this.size ?? 1);
        }
      } else {
        newPos = (event.pageY - (this.startPos ?? 0)) * 100 / (this.size ?? 1);
      }
      newPrevPanelSize = this.prevPanelSize + newPos;
      newNextPanelSize = this.nextPanelSize - newPos;
    }
    this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
    if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
      this.prevPanelElement.style.flexBasis = "calc(" + newPrevPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this.nextPanelElement.style.flexBasis = "calc(" + newNextPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this._panelSizes[this.prevPanelIndex] = newPrevPanelSize;
      this._panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
    }
  }
  resizeEnd(event) {
    if (this.isStateful()) {
      this.saveState();
    }
    this.onResizeEnd.emit({
      originalEvent: event,
      sizes: this._panelSizes
    });
    P(this.gutterElement, "p-splitter-gutter-resizing");
    P(this.el.nativeElement, "p-splitter-resizing");
    this.clear();
  }
  onGutterMouseDown(event, index) {
    this.resizeStart(event, index);
    this.bindMouseListeners();
  }
  onGutterTouchStart(event, index) {
    if (event.cancelable) {
      this.resizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    }
  }
  onGutterTouchMove(event) {
    this.onResize(event);
    event.preventDefault();
  }
  onGutterTouchEnd(event) {
    this.resizeEnd(event);
    this.unbindTouchListeners();
    if (event.cancelable) event.preventDefault();
  }
  repeat(event, index, step) {
    this.resizeStart(event, index, true);
    this.onResize(event, step, true);
  }
  setTimer(event, index, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, index, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  onGutterKeyUp(event) {
    this.clearTimer();
    this.resizeEnd(event);
  }
  onGutterKeyDown(event, index) {
    switch (event.code) {
      case "ArrowLeft": {
        if (this.layout === "horizontal") {
          this.setTimer(event, index, this.step * -1);
        }
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        if (this.layout === "horizontal") {
          this.setTimer(event, index, this.step);
        }
        event.preventDefault();
        break;
      }
      case "ArrowDown": {
        if (this.layout === "vertical") {
          this.setTimer(event, index, this.step * -1);
        }
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (this.layout === "vertical") {
          this.setTimer(event, index, this.step);
        }
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  validateResize(newPrevPanelSize, newNextPanelSize) {
    if (this.minSizes.length >= 1 && this.minSizes[0] && this.minSizes[0] > newPrevPanelSize) {
      return false;
    }
    if (this.minSizes.length > 1 && this.minSizes[1] && this.minSizes[1] > newNextPanelSize) {
      return false;
    }
    return true;
  }
  bindMouseListeners() {
    if (!this.mouseMoveListener) {
      this.mouseMoveListener = this.renderer.listen(this.document, "mousemove", (event) => {
        this.onResize(event);
      });
    }
    if (!this.mouseUpListener) {
      this.mouseUpListener = this.renderer.listen(this.document, "mouseup", (event) => {
        this.resizeEnd(event);
        this.unbindMouseListeners();
      });
    }
  }
  bindTouchListeners() {
    if (!this.touchMoveListener) {
      this.touchMoveListener = this.renderer.listen(this.document, "touchmove", (event) => {
        this.onResize(event.changedTouches[0]);
      });
    }
    if (!this.touchEndListener) {
      this.touchEndListener = this.renderer.listen(this.document, "touchend", (event) => {
        this.resizeEnd(event);
        this.unbindTouchListeners();
      });
    }
  }
  unbindMouseListeners() {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
      this.mouseMoveListener = null;
    }
    if (this.mouseUpListener) {
      this.mouseUpListener();
      this.mouseUpListener = null;
    }
  }
  unbindTouchListeners() {
    if (this.touchMoveListener) {
      this.touchMoveListener();
      this.touchMoveListener = null;
    }
    if (this.touchEndListener) {
      this.touchEndListener();
      this.touchEndListener = null;
    }
  }
  clear() {
    this.dragging = false;
    this.size = null;
    this.startPos = null;
    this.prevPanelElement = null;
    this.nextPanelElement = null;
    this.prevPanelSize = null;
    this.nextPanelSize = null;
    this.gutterElement = null;
    this.prevPanelIndex = null;
  }
  isStateful() {
    return this.stateKey != null;
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return this.document.defaultView?.localStorage;
        case "session":
          return this.document.defaultView?.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Storage is not a available by default on the server.");
    }
  }
  saveState() {
    this.getStorage()?.setItem(this.stateKey, JSON.stringify(this._panelSizes));
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage?.getItem(this.stateKey);
    if (stateString) {
      this._panelSizes = JSON.parse(stateString);
      let children = [...this.el.nativeElement.children].filter((child) => R(child, "p-splitterpanel"));
      children.forEach((child, i) => {
        child.style.flexBasis = "calc(" + this._panelSizes[i] + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      });
      return true;
    }
    return false;
  }
  gutterStyle() {
    if (this.horizontal()) return {
      width: this.gutterSize + "px"
    };
    else return {
      height: this.gutterSize + "px"
    };
  }
  horizontal() {
    return this.layout === "horizontal";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Splitter_BaseFactory;
    return function Splitter_Factory(__ngFactoryType__) {
      return (\u0275Splitter_BaseFactory || (\u0275Splitter_BaseFactory = \u0275\u0275getInheritedFactory(_Splitter)))(__ngFactoryType__ || _Splitter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Splitter,
    selectors: [["p-splitter"]],
    contentQueries: function Splitter_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.splitter, _Splitter, 5);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panelChildren = _t);
      }
    },
    hostVars: 3,
    hostBindings: function Splitter_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-gutter-resizing", false);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      stateStorage: "stateStorage",
      stateKey: "stateKey",
      layout: "layout",
      gutterSize: [2, "gutterSize", "gutterSize", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      minSizes: "minSizes",
      panelSizes: "panelSizes"
    },
    outputs: {
      onResizeEnd: "onResizeEnd",
      onResizeStart: "onResizeStart"
    },
    features: [\u0275\u0275ProvidersFeature([SplitterStyle, {
      provide: SPLITTER_INSTANCE,
      useExisting: _Splitter
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Splitter
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], ["tabindex", "-1", 3, "pBind", "ngStyle"], [4, "ngTemplateOutlet"], ["role", "separator", "tabindex", "-1", 3, "pBind", "class", "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "-1", 3, "mousedown", "touchstart", "touchmove", "touchend", "pBind"], ["tabindex", "0", 3, "keyup", "keydown", "pBind", "ngStyle"]],
    template: function Splitter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Splitter_ng_template_0_Template, 3, 6, "ng-template", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.panels);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Splitter, [{
    type: Component,
    args: [{
      selector: "p-splitter",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <ng-template ngFor let-panel [ngForOf]="panels" let-i="index">
            <div [pBind]="ptm('panel')" [class]="cn(cx('panel'), panelStyleClass)" [ngStyle]="panelStyle" tabindex="-1">
                <ng-container *ngTemplateOutlet="panel"></ng-container>
            </div>
            <div
                *ngIf="i !== panels.length - 1"
                [pBind]="ptm('gutter')"
                [class]="cx('gutter')"
                role="separator"
                tabindex="-1"
                (mousedown)="onGutterMouseDown($event, i)"
                (touchstart)="onGutterTouchStart($event, i)"
                (touchmove)="onGutterTouchMove($event)"
                (touchend)="onGutterTouchEnd($event)"
                [attr.data-p-gutter-resizing]="false"
            >
                <div
                    [pBind]="ptm('gutterHandle')"
                    [class]="cx('gutterHandle')"
                    tabindex="0"
                    [ngStyle]="gutterStyle()"
                    [attr.aria-orientation]="layout"
                    [attr.aria-valuenow]="prevSize"
                    (keyup)="onGutterKeyUp($event)"
                    (keydown)="onGutterKeyDown($event, i)"
                ></div>
            </div>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-gutter-resizing]": "false"
      },
      providers: [SplitterStyle, {
        provide: SPLITTER_INSTANCE,
        useExisting: Splitter
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Splitter
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    gutterSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minSizes: [{
      type: Input
    }],
    panelSizes: [{
      type: Input
    }],
    onResizeEnd: [{
      type: Output
    }],
    onResizeStart: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    panelChildren: [{
      type: ContentChildren,
      args: ["panel", {
        descendants: false
      }]
    }],
    splitter: [{
      type: ContentChild,
      args: [forwardRef(() => Splitter), {
        isSignal: true
      }]
    }]
  });
})();
var SplitterModule = class _SplitterModule {
  static \u0275fac = function SplitterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SplitterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SplitterModule,
    imports: [Splitter, SharedModule, BindModule],
    exports: [Splitter, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Splitter, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitterModule, [{
    type: NgModule,
    args: [{
      imports: [Splitter, SharedModule, BindModule],
      exports: [Splitter, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/pages/uikit/panelsdemo.ts
var _c04 = () => ({ height: "300px" });
var _c13 = () => [20, 80];
var _c23 = () => [10, 0];
var _c33 = () => [50, 50];
function PanelsDemo_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-button", 32)(1, "p-button", 33)(2, "p-button", 34);
  }
}
function PanelsDemo_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-iconfield")(1, "p-inputicon");
    \u0275\u0275element(2, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 36);
    \u0275\u0275elementEnd();
  }
}
function PanelsDemo_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-splitbutton", 37);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("model", ctx_r0.items);
  }
}
function PanelsDemo_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Panel 1");
    \u0275\u0275elementEnd();
  }
}
function PanelsDemo_ng_template_99_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1, "Panel 2");
    \u0275\u0275elementEnd();
  }
}
function PanelsDemo_ng_template_99_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Panel 3");
    \u0275\u0275elementEnd();
  }
}
function PanelsDemo_ng_template_99_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1, "Panel 4");
    \u0275\u0275elementEnd();
  }
}
function PanelsDemo_ng_template_99_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-splitter", 41);
    \u0275\u0275template(1, PanelsDemo_ng_template_99_ng_template_3_ng_template_1_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, PanelsDemo_ng_template_99_ng_template_3_ng_template_3_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("panelSizes", \u0275\u0275pureFunction0(1, _c13));
  }
}
function PanelsDemo_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-splitter", 39);
    \u0275\u0275template(1, PanelsDemo_ng_template_99_ng_template_1_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(3, PanelsDemo_ng_template_99_ng_template_3_Template, 5, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("panelSizes", \u0275\u0275pureFunction0(1, _c33));
  }
}
var PanelsDemo = class _PanelsDemo {
  items = [
    {
      label: "Save",
      icon: "pi pi-check"
    },
    {
      label: "Update",
      icon: "pi pi-upload"
    },
    {
      label: "Delete",
      icon: "pi pi-trash"
    },
    {
      label: "Home Page",
      icon: "pi pi-home"
    }
  ];
  static \u0275fac = function PanelsDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PanelsDemo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelsDemo, selectors: [["app-panels-demo"]], decls: 101, vars: 9, consts: [["start", ""], ["center", ""], ["end", ""], ["panel", ""], [1, "flex", "flex-col"], [1, "card"], [1, "font-semibold", "text-xl", "mb-4"], [1, "flex", "flex-col", "md:flex-row", "gap-8"], [1, "md:w-1/2"], ["value", "0"], [1, "m-0"], ["value", "1"], ["value", "2"], [1, "md:w-1/2", "mt-6", "md:mt-0"], ["header", "Header", 3, "toggleable"], ["legend", "Legend", 3, "toggleable"], [1, "card", "mt-8"], [1, "flex", "flex-col", "md:flex-row"], [1, "w-full", "md:w-5/12", "flex", "flex-col", "items-center", "justify-center", "gap-4", "py-8"], [1, "flex", "flex-col", "gap-2"], ["for", "username"], ["pInputText", "", "id", "username", "type", "text"], ["for", "password"], ["pInputText", "", "id", "password", "type", "password"], [1, "flex"], ["label", "Login", "icon", "pi pi-user", 1, "w-full", "max-w-[17.35rem]", "mx-auto"], [1, "w-full", "md:w-2/12"], ["layout", "vertical", 1, "hidden!", "md:flex!"], ["layout", "horizontal", "align", "center", 1, "flex!", "md:hidden!"], [1, "w-full", "md:w-5/12", "flex", "items-center", "justify-center", "py-8"], ["label", "Sign Up", "icon", "pi pi-user-plus", "severity", "success", "styleClass", "w-full max-w-[17.35rem] mx-auto", 1, "w-full"], ["styleClass", "mb-20", 3, "panelSizes", "minSizes"], ["icon", "pi pi-plus", "severity", "secondary", "text", "", 1, "mr-2"], ["icon", "pi pi-print", "severity", "secondary", "text", "", 1, "mr-2"], ["icon", "pi pi-upload", "severity", "secondary", "text", ""], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Search"], ["label", "Save", 3, "model"], [1, "col", "flex", "items-center", "justify-center"], ["layout", "vertical", 3, "panelSizes"], [1, "flex", "items-center", "justify-center", 2, "grow", "1"], [3, "panelSizes"]], template: function PanelsDemo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275text(3, "Toolbar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p-toolbar");
      \u0275\u0275template(5, PanelsDemo_ng_template_5_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, PanelsDemo_ng_template_7_Template, 4, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, PanelsDemo_ng_template_9_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 5)(14, "div", 6);
      \u0275\u0275text(15, "Accordion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p-accordion", 9)(17, "p-accordion-panel", 9)(18, "p-accordion-header");
      \u0275\u0275text(19, "Header I");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p-accordion-content")(21, "p", 10);
      \u0275\u0275text(22, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "p-accordion-panel", 11)(24, "p-accordion-header");
      \u0275\u0275text(25, "Header II");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-accordion-content")(27, "p", 10);
      \u0275\u0275text(28, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "p-accordion-panel", 12)(30, "p-accordion-header");
      \u0275\u0275text(31, "Header III");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p-accordion-content")(33, "p", 10);
      \u0275\u0275text(34, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(35, "div", 5)(36, "div", 6);
      \u0275\u0275text(37, "Tabs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p-tabs", 9)(39, "p-tablist")(40, "p-tab", 9);
      \u0275\u0275text(41, "Header I");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p-tab", 11);
      \u0275\u0275text(43, "Header II");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p-tab", 12);
      \u0275\u0275text(45, "Header III");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "p-tabpanels")(47, "p-tabpanel", 9)(48, "p", 10);
      \u0275\u0275text(49, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "p-tabpanel", 11)(51, "p", 10);
      \u0275\u0275text(52, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "p-tabpanel", 12)(54, "p", 10);
      \u0275\u0275text(55, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(56, "div", 13)(57, "div", 5)(58, "div", 6);
      \u0275\u0275text(59, "Panel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p-panel", 14)(61, "p", 10);
      \u0275\u0275text(62, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 5)(64, "div", 6);
      \u0275\u0275text(65, "Fieldset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p-fieldset", 15)(67, "p", 10);
      \u0275\u0275text(68, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(69, "div", 16)(70, "div", 6);
      \u0275\u0275text(71, "Divider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 17)(73, "div", 18)(74, "div", 19)(75, "label", 20);
      \u0275\u0275text(76, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 19)(79, "label", 22);
      \u0275\u0275text(80, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(81, "input", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 24);
      \u0275\u0275element(83, "p-button", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 26)(85, "p-divider", 27)(86, "b");
      \u0275\u0275text(87, "OR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "p-divider", 28)(89, "b");
      \u0275\u0275text(90, "OR");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 29);
      \u0275\u0275element(92, "p-button", 30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "div", 5)(94, "div", 6);
      \u0275\u0275text(95, "Splitter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p-splitter", 31);
      \u0275\u0275template(97, PanelsDemo_ng_template_97_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(99, PanelsDemo_ng_template_99_Template, 5, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(60);
      \u0275\u0275property("toggleable", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("toggleable", true);
      \u0275\u0275advance(30);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c04));
      \u0275\u0275property("panelSizes", \u0275\u0275pureFunction0(7, _c13))("minSizes", \u0275\u0275pureFunction0(8, _c23));
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    Toolbar,
    ButtonModule,
    Button,
    RippleModule,
    SplitButtonModule,
    SplitButton,
    AccordionModule,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    FieldsetModule,
    Fieldset,
    MenuModule,
    InputTextModule,
    InputText,
    DividerModule,
    Divider,
    SplitterModule,
    Splitter,
    PanelModule,
    Panel,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelsDemo, [{
    type: Component,
    args: [{
      selector: "app-panels-demo",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        AccordionModule,
        FieldsetModule,
        MenuModule,
        InputTextModule,
        DividerModule,
        SplitterModule,
        PanelModule,
        TabsModule,
        IconFieldModule,
        InputIconModule
      ],
      template: `
        <div class="flex flex-col">
            <div class="card">
                <div class="font-semibold text-xl mb-4">Toolbar</div>
                <p-toolbar>
                    <ng-template #start>
                        <p-button icon="pi pi-plus" class="mr-2" severity="secondary" text />
                        <p-button icon="pi pi-print" class="mr-2" severity="secondary" text />
                        <p-button icon="pi pi-upload" severity="secondary" text />
                    </ng-template>

                    <ng-template #center>
                        <p-iconfield>
                            <p-inputicon>
                                <i class="pi pi-search"></i>
                            </p-inputicon>
                            <input pInputText placeholder="Search" />
                        </p-iconfield>
                    </ng-template>

                    <ng-template #end><p-splitbutton label="Save" [model]="items"></p-splitbutton></ng-template>
                </p-toolbar>
            </div>

            <div class="flex flex-col md:flex-row gap-8">
                <div class="md:w-1/2">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Accordion</div>
                        <p-accordion value="0">
                            <p-accordion-panel value="0">
                                <p-accordion-header>Header I</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="1">
                                <p-accordion-header>Header II</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                                        numquam eius modi.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>

                            <p-accordion-panel value="2">
                                <p-accordion-header>Header III</p-accordion-header>
                                <p-accordion-content>
                                    <p class="m-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                                        numquam eius modi.
                                    </p>
                                </p-accordion-content>
                            </p-accordion-panel>
                        </p-accordion>
                    </div>
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Tabs</div>
                        <p-tabs value="0">
                            <p-tablist>
                                <p-tab value="0">Header I</p-tab>
                                <p-tab value="1">Header II</p-tab>
                                <p-tab value="2">Header III</p-tab>
                            </p-tablist>
                            <p-tabpanels>
                                <p-tabpanel value="0">
                                    <p class="m-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </p>
                                </p-tabpanel>
                                <p-tabpanel value="1">
                                    <p class="m-0">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non
                                        numquam eius modi.
                                    </p>
                                </p-tabpanel>
                                <p-tabpanel value="2">
                                    <p class="m-0">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus.
                                    </p>
                                </p-tabpanel>
                            </p-tabpanels>
                        </p-tabs>
                    </div>
                </div>
                <div class="md:w-1/2 mt-6 md:mt-0">
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Panel</div>
                        <p-panel header="Header" [toggleable]="true">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </p-panel>
                    </div>
                    <div class="card">
                        <div class="font-semibold text-xl mb-4">Fieldset</div>
                        <p-fieldset legend="Legend" [toggleable]="true">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </p-fieldset>
                    </div>
                </div>
            </div>

            <div class="card mt-8">
                <div class="font-semibold text-xl mb-4">Divider</div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-8">
                        <div class="flex flex-col gap-2">
                            <label for="username">Username</label>
                            <input pInputText id="username" type="text" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="password">Password</label>
                            <input pInputText id="password" type="password" />
                        </div>
                        <div class="flex">
                            <p-button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></p-button>
                        </div>
                    </div>
                    <div class="w-full md:w-2/12">
                        <p-divider layout="vertical" class="hidden! md:flex!"><b>OR</b></p-divider>
                        <p-divider layout="horizontal" class="flex! md:hidden!" align="center"><b>OR</b></p-divider>
                    </div>
                    <div class="w-full md:w-5/12 flex items-center justify-center py-8">
                        <p-button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full" styleClass="w-full max-w-[17.35rem] mx-auto"></p-button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="font-semibold text-xl mb-4">Splitter</div>
                <p-splitter [style]="{ height: '300px' }" [panelSizes]="[20, 80]" [minSizes]="[10, 0]" styleClass="mb-20">
                    <ng-template #panel>
                        <div class="col flex items-center justify-center">Panel 1</div>
                    </ng-template>
                    <ng-template #panel>
                        <p-splitter layout="vertical" [panelSizes]="[50, 50]">
                            <ng-template #panel>
                                <div style="grow: 1;" class="flex items-center justify-center">Panel 2</div>
                            </ng-template>
                            <ng-template #panel>
                                <p-splitter [panelSizes]="[20, 80]">
                                    <ng-template #panel>
                                        <div class="col flex items-center justify-center">Panel 3</div>
                                    </ng-template>
                                    <ng-template #panel>
                                        <div class="col flex items-center justify-center">Panel 4</div>
                                    </ng-template>
                                </p-splitter>
                            </ng-template>
                        </p-splitter>
                    </ng-template>
                </p-splitter>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelsDemo, { className: "PanelsDemo", filePath: "src/app/pages/uikit/panelsdemo.ts", lineNumber: 216 });
})();
export {
  PanelsDemo
};
//# sourceMappingURL=chunk-JOE73X4T.js.map
