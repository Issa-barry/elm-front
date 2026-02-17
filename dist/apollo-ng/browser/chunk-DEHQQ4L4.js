import {
  ChevronUpIcon
} from "./chunk-CJAMEXZR.js";
import {
  ChevronDownIcon
} from "./chunk-46OYJGUM.js";
import {
  transformToBoolean
} from "./chunk-CJMBUE5J.js";
import {
  Ripple
} from "./chunk-WSCE5RX7.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  Q,
  SharedModule,
  bt,
  s2 as s,
  z
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgIf,
  NgTemplateOutlet
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
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  computed,
  forwardRef,
  inject,
  input,
  model,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-FZZISKXM.js";

// node_modules/@primeuix/styles/dist/accordion/index.mjs
var style2 = "\n    .p-accordionpanel {\n        display: flex;\n        flex-direction: column;\n        border-style: solid;\n        border-width: dt('accordion.panel.border.width');\n        border-color: dt('accordion.panel.border.color');\n    }\n\n    .p-accordionheader {\n        all: unset;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('accordion.header.padding');\n        color: dt('accordion.header.color');\n        background: dt('accordion.header.background');\n        border-style: solid;\n        border-width: dt('accordion.header.border.width');\n        border-color: dt('accordion.header.border.color');\n        font-weight: dt('accordion.header.font.weight');\n        border-radius: dt('accordion.header.border.radius');\n        transition:\n            background dt('accordion.transition.duration'),\n            color dt('accordion.transition.duration'),\n            outline-color dt('accordion.transition.duration'),\n            box-shadow dt('accordion.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-accordionpanel:first-child > .p-accordionheader {\n        border-width: dt('accordion.header.first.border.width');\n        border-start-start-radius: dt('accordion.header.first.top.border.radius');\n        border-start-end-radius: dt('accordion.header.first.top.border.radius');\n    }\n\n    .p-accordionpanel:last-child > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');\n    }\n\n    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {\n        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');\n        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');\n    }\n\n    .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n        box-shadow: dt('accordion.header.focus.ring.shadow');\n        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');\n        outline-offset: dt('accordion.header.focus.ring.offset');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {\n        background: dt('accordion.header.hover.background');\n        color: dt('accordion.header.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {\n        background: dt('accordion.header.active.background');\n        color: dt('accordion.header.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {\n        background: dt('accordion.header.active.hover.background');\n        color: dt('accordion.header.active.hover.color');\n    }\n\n    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {\n        color: dt('accordion.header.toggle.icon.active.hover.color');\n    }\n\n    .p-accordioncontent-content {\n        border-style: solid;\n        border-width: dt('accordion.content.border.width');\n        border-color: dt('accordion.content.border.color');\n        background-color: dt('accordion.content.background');\n        color: dt('accordion.content.color');\n        padding: dt('accordion.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-accordion.mjs
var _c0 = ["*"];
var _c1 = ["toggleicon"];
var _c2 = (a0) => ({
  active: a0
});
function AccordionHeader_Conditional_1_0_ng_template_0_Template(rf, ctx) {
}
function AccordionHeader_Conditional_1_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionHeader_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_1_0_Template, 1, 0, null, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.toggleicon)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.active()));
  }
}
function AccordionHeader_Conditional_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.collapseIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("toggleicon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_0_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_0__svg_svg_2_Template, 1, 4, "svg", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.collapseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.collapseIcon);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("toggleicon"), ctx_r0.pcAccordion.expandIcon));
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pBind", ctx_r0.ptm("toggleicon"));
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function AccordionHeader_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AccordionHeader_Conditional_2_ng_container_1_span_1_Template, 1, 4, "span", 2)(2, AccordionHeader_Conditional_2_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pcAccordion.expandIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pcAccordion.expandIcon);
  }
}
function AccordionHeader_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AccordionHeader_Conditional_2_ng_container_0_Template, 3, 2, "ng-container", 1)(1, AccordionHeader_Conditional_2_ng_container_1_Template, 3, 2, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.active());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.active());
  }
}
var _c3 = (a0) => ({
  transitionParams: a0
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  value: "hidden",
  params: a0
});
var style3 = (
  /*css*/
  `
    ${style2}

    /*For PrimeNG*/
    .p-accordionpanel:not(.p-accordionpanel-active) > .p-accordioncontent,
    .p-accordioncontent-content.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader-toggle-icon.icon-start {
        order: -1;
    }

    .p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
        justify-content: flex-start;
        gap: dt('accordion.header.padding');
    }

    .p-accordioncontent.ng-animating {
        overflow: hidden;
    }

    .p-accordionheader.p-ripple {
        overflow: hidden;
        position: relative;
    }
`
);
var classes = {
  root: "p-accordion p-component",
  panel: ({
    instance
  }) => ["p-accordionpanel", {
    "p-accordionpanel-active": instance.active(),
    "p-disabled": instance.disabled()
  }],
  header: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon",
  contentContainer: "p-accordioncontent",
  content: "p-accordioncontent-content"
};
var AccordionStyle = class _AccordionStyle extends BaseStyle {
  name = "accordion";
  style = style3;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionStyle_BaseFactory;
    return function AccordionStyle_Factory(__ngFactoryType__) {
      return (\u0275AccordionStyle_BaseFactory || (\u0275AccordionStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionStyle)))(__ngFactoryType__ || _AccordionStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AccordionStyle,
    factory: _AccordionStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionStyle, [{
    type: Injectable
  }], null, null);
})();
var AccordionClasses;
(function(AccordionClasses2) {
  AccordionClasses2["root"] = "p-accordion";
  AccordionClasses2["contentwrapper"] = "p-accordioncontent";
  AccordionClasses2["content"] = "p-accordioncontent-content";
  AccordionClasses2["header"] = "p-accordionheader";
  AccordionClasses2["toggleicon"] = "p-accordionheader-toggle-icon";
  AccordionClasses2["panel"] = "p-accordionpanel";
})(AccordionClasses || (AccordionClasses = {}));
var ACCORDION_PANEL_INSTANCE = new InjectionToken("ACCORDION_PANEL_INSTANCE");
var ACCORDION_HEADER_INSTANCE = new InjectionToken("ACCORDION_HEADER_INSTANCE");
var ACCORDION_CONTENT_INSTANCE = new InjectionToken("ACCORDION_CONTENT_INSTANCE");
var ACCORDION_INSTANCE = new InjectionToken("ACCORDION_INSTANCE");
var AccordionPanel = class _AccordionPanel extends BaseComponent {
  $pcAccordionPanel = inject(ACCORDION_PANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * Disables the tab when enabled.
   * @defaultValue false
   * @group Props
   */
  disabled = input(false, ...ngDevMode ? [{
    debugName: "disabled",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  active = computed(() => this.pcAccordion.multiple() ? this.valueEquals(this.pcAccordion.value(), this.value()) : this.pcAccordion.value() === this.value(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  valueEquals(currentValue, value) {
    if (Array.isArray(currentValue)) {
      return currentValue.includes(value);
    }
    return currentValue === value;
  }
  _componentStyle = inject(AccordionStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionPanel_BaseFactory;
    return function AccordionPanel_Factory(__ngFactoryType__) {
      return (\u0275AccordionPanel_BaseFactory || (\u0275AccordionPanel_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionPanel)))(__ngFactoryType__ || _AccordionPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionPanel,
    selectors: [["p-accordion-panel"], ["p-accordionpanel"]],
    hostVars: 4,
    hostBindings: function AccordionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-disabled", ctx.disabled())("data-p-active", ctx.active());
        \u0275\u0275classMap(ctx.cx("panel"));
      }
    },
    inputs: {
      value: [1, "value"],
      disabled: [1, "disabled"]
    },
    outputs: {
      value: "valueChange"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_PANEL_INSTANCE,
      useExisting: _AccordionPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AccordionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionPanel, [{
    type: Component,
    args: [{
      selector: "p-accordion-panel, p-accordionpanel",
      imports: [CommonModule, BindModule],
      standalone: true,
      template: `<ng-content />`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("panel")',
        "[attr.data-p-disabled]": "disabled()",
        "[attr.data-p-active]": "active()"
      },
      hostDirectives: [Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_PANEL_INSTANCE,
        useExisting: AccordionPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionPanel
      }]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }]
  });
})();
var AccordionHeader = class _AccordionHeader extends BaseComponent {
  $pcAccordionHeader = inject(ACCORDION_HEADER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  id = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  disabled = computed(() => this.pcAccordionPanel.disabled(), ...ngDevMode ? [{
    debugName: "disabled"
  }] : []);
  ariaControls = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaControls"
  }] : []);
  /**
   * Toggle icon template.
   * @type {TemplateRef<AccordionToggleIconTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #toggleicon let-active="active"> </ng-template>
   * ```
   * @see {@link AccordionToggleIconTemplateContext}
   * @group Templates
   */
  toggleicon;
  onClick(event) {
    if (this.disabled()) {
      return;
    }
    const wasActive = this.active();
    this.changeActiveValue();
    const isActive = this.active();
    const index = this.pcAccordionPanel.value();
    if (!wasActive && isActive) {
      this.pcAccordion.onOpen.emit({
        originalEvent: event,
        index
      });
    } else if (wasActive && !isActive) {
      this.pcAccordion.onClose.emit({
        originalEvent: event,
        index
      });
    }
  }
  onFocus() {
    if (!this.disabled() && this.pcAccordion.selectOnFocus()) {
      this.changeActiveValue();
    }
  }
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.arrowDownKey(event);
        break;
      case "ArrowUp":
        this.arrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      default:
        break;
    }
  }
  _componentStyle = inject(AccordionStyle);
  changeActiveValue() {
    this.pcAccordion.updateValue(this.pcAccordionPanel.value());
  }
  findPanel(headerElement) {
    return headerElement?.closest('[data-pc-name="accordionpanel"]');
  }
  findHeader(panelElement) {
    return z(panelElement, '[data-pc-name="accordionheader"]');
  }
  findNextPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.nextElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
  }
  findPrevPanel(panelElement, selfCheck = false) {
    const element = selfCheck ? panelElement : panelElement.previousElementSibling;
    return element ? Q(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
  }
  findFirstPanel() {
    return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild, true);
  }
  findLastPanel() {
    return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild, true);
  }
  changeFocusedPanel(event, element) {
    bt(element);
  }
  arrowDownKey(event) {
    const nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
    nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
    event.preventDefault();
  }
  arrowUpKey(event) {
    const prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
    prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
    event.preventDefault();
  }
  onHomeKey(event) {
    const firstPanel = this.findFirstPanel();
    this.changeFocusedPanel(event, firstPanel);
    event.preventDefault();
  }
  onEndKey(event) {
    const lastPanel = this.findLastPanel();
    this.changeFocusedPanel(event, lastPanel);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (!this.disabled()) {
      this.changeActiveValue();
    }
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionHeader_BaseFactory;
    return function AccordionHeader_Factory(__ngFactoryType__) {
      return (\u0275AccordionHeader_BaseFactory || (\u0275AccordionHeader_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionHeader)))(__ngFactoryType__ || _AccordionHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionHeader,
    selectors: [["p-accordion-header"], ["p-accordionheader"]],
    contentQueries: function AccordionHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toggleicon = _t.first);
      }
    },
    hostVars: 12,
    hostBindings: function AccordionHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AccordionHeader_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("focus", function AccordionHeader_focus_HostBindingHandler($event) {
          return ctx.onFocus($event);
        })("keydown", function AccordionHeader_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("aria-expanded", ctx.active())("aria-controls", ctx.ariaControls())("aria-disabled", ctx.disabled())("role", "button")("tabindex", ctx.disabled() ? "-1" : "0")("data-p-active", ctx.active())("data-p-disabled", ctx.disabled());
        \u0275\u0275classMap(ctx.cx("header"));
        \u0275\u0275styleProp("user-select", "none");
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_HEADER_INSTANCE,
      useExisting: _AccordionHeader
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionHeader
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"]],
    template: function AccordionHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275conditionalCreate(1, AccordionHeader_Conditional_1_Template, 1, 4)(2, AccordionHeader_Conditional_2_Template, 2, 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggleicon ? 1 : 2);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, ChevronDownIcon, ChevronUpIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionHeader, [{
    type: Component,
    args: [{
      selector: "p-accordion-header, p-accordionheader",
      imports: [CommonModule, ChevronDownIcon, ChevronUpIcon, BindModule],
      standalone: true,
      template: `
        <ng-content />
        @if (toggleicon) {
            <ng-template *ngTemplateOutlet="toggleicon; context: { active: active() }"></ng-template>
        } @else {
            <ng-container *ngIf="active()">
                <span *ngIf="pcAccordion.collapseIcon" [class]="cn(cx('toggleicon'), pcAccordion.collapseIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-up" *ngIf="!pcAccordion.collapseIcon" [class]="cx('toggleicon')" [pBind]="ptm('toggleicon')" [attr.aria-hidden]="true" />
            </ng-container>
            <ng-container *ngIf="!active()">
                <span *ngIf="pcAccordion.expandIcon" [class]="cn(cx('toggleicon'), pcAccordion.expandIcon)" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')"></span>
                <svg data-p-icon="chevron-down" *ngIf="!pcAccordion.expandIcon" [attr.aria-hidden]="true" [pBind]="ptm('toggleicon')" />
            </ng-container>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('header')",
        "[attr.id]": "id()",
        "[attr.aria-expanded]": "active()",
        "[attr.aria-controls]": "ariaControls()",
        "[attr.aria-disabled]": "disabled()",
        "[attr.role]": '"button"',
        "[attr.tabindex]": 'disabled()?"-1":"0"',
        "[attr.data-p-active]": "active()",
        "[attr.data-p-disabled]": "disabled()",
        "[style.user-select]": '"none"'
      },
      hostDirectives: [Ripple, Bind],
      providers: [AccordionStyle, {
        provide: ACCORDION_HEADER_INSTANCE,
        useExisting: AccordionHeader
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionHeader
      }]
    }]
  }], null, {
    toggleicon: [{
      type: ContentChild,
      args: ["toggleicon"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus", ["$event"]]
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionContent = class _AccordionContent extends BaseComponent {
  $pcAccordionContent = inject(ACCORDION_CONTENT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  pcAccordion = inject(forwardRef(() => Accordion));
  pcAccordionPanel = inject(forwardRef(() => AccordionPanel));
  active = computed(() => this.pcAccordionPanel.active(), ...ngDevMode ? [{
    debugName: "active"
  }] : []);
  ariaLabelledby = computed(() => `${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "ariaLabelledby"
  }] : []);
  id = computed(() => `${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  ptParams = computed(() => ({
    context: this.active()
  }), ...ngDevMode ? [{
    debugName: "ptParams"
  }] : []);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AccordionContent_BaseFactory;
    return function AccordionContent_Factory(__ngFactoryType__) {
      return (\u0275AccordionContent_BaseFactory || (\u0275AccordionContent_BaseFactory = \u0275\u0275getInheritedFactory(_AccordionContent)))(__ngFactoryType__ || _AccordionContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AccordionContent,
    selectors: [["p-accordion-content"], ["p-accordioncontent"]],
    hostVars: 6,
    hostBindings: function AccordionContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id())("role", "region")("data-p-active", ctx.active())("aria-labelledby", ctx.ariaLabelledby());
        \u0275\u0275classMap(ctx.cx("contentContainer"));
      }
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_CONTENT_INSTANCE,
      useExisting: _AccordionContent
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AccordionContent
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 12,
    consts: [[3, "pBind"]],
    template: function AccordionContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("@content", ctx.active() ? \u0275\u0275pureFunction1(6, _c4, \u0275\u0275pureFunction1(4, _c3, ctx.pcAccordion.transitionOptions)) : \u0275\u0275pureFunction1(10, _c5, \u0275\u0275pureFunction1(8, _c3, ctx.pcAccordion.transitionOptions)))("pBind", ctx.ptm("content", ctx.ptParams()));
      }
    },
    dependencies: [CommonModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("content", [state("hidden", style({
        height: "0",
        // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        borderBlockStartWidth: "0",
        borderBlockEndWidth: "0",
        //
        visibility: "hidden"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionContent, [{
    type: Component,
    args: [{
      selector: "p-accordion-content, p-accordioncontent",
      imports: [CommonModule, BindModule],
      standalone: true,
      template: `<div
        [class]="cx('content')"
        [@content]="active() ? { value: 'visible', params: { transitionParams: pcAccordion.transitionOptions } } : { value: 'hidden', params: { transitionParams: pcAccordion.transitionOptions } }"
        [pBind]="ptm('content', ptParams())"
    >
        <ng-content />
    </div>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": 'cx("contentContainer")',
        "[attr.id]": "id()",
        "[attr.role]": '"region"',
        "[attr.data-p-active]": "active()",
        "[attr.aria-labelledby]": "ariaLabelledby()"
      },
      hostDirectives: [Bind],
      animations: [trigger("content", [state("hidden", style({
        height: "0",
        // To prevent memory leak, Angular issue. https://github.com/primefaces/primeng/issues/18546
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        borderBlockStartWidth: "0",
        borderBlockEndWidth: "0",
        //
        visibility: "hidden"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      providers: [AccordionStyle, {
        provide: ACCORDION_CONTENT_INSTANCE,
        useExisting: AccordionContent
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AccordionContent
      }]
    }]
  }], null, null);
})();
var Accordion = class _Accordion extends BaseComponent {
  $pcAccordion = inject(ACCORDION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("root"));
  }
  /**
   * Value of the active tab.
   * @defaultValue undefined
   * @group Props
   */
  value = model(void 0, ...ngDevMode ? [{
    debugName: "value"
  }] : []);
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   * @group Props
   */
  multiple = input(false, ...ngDevMode ? [{
    debugName: "multiple",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Icon of a collapsed tab.
   * @group Props
   */
  expandIcon;
  /**
   * Icon of an expanded tab.
   * @group Props
   */
  collapseIcon;
  /**
   * When enabled, the focused tab is activated.
   * @defaultValue false
   * @group Props
   */
  selectOnFocus = input(false, ...ngDevMode ? [{
    debugName: "selectOnFocus",
    transform: (v) => transformToBoolean(v)
  }] : [{
    transform: (v) => transformToBoolean(v)
  }]);
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   * @group Emits
   */
  onOpen = new EventEmitter();
  id = signal(s("pn_id_"), ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  _componentStyle = inject(AccordionStyle);
  onKeydown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onTabArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onTabArrowUpKey(event);
        break;
      case "Home":
        if (!event.shiftKey) {
          this.onTabHomeKey(event);
        }
        break;
      case "End":
        if (!event.shiftKey) {
          this.onTabEndKey(event);
        }
        break;
    }
  }
  onTabArrowDownKey(event) {
    const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
    nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
    event.preventDefault();
  }
  onTabArrowUpKey(event) {
    const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
    prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
    event.preventDefault();
  }
  onTabHomeKey(event) {
    const firstHeaderAction = this.findFirstHeaderAction();
    this.changeFocusedTab(firstHeaderAction);
    event.preventDefault();
  }
  changeFocusedTab(element) {
    if (element) {
      bt(element);
    }
  }
  findNextHeaderAction(tabElement, selfCheck = false) {
    const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
    const headerElement = z(nextTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findPrevHeaderAction(tabElement, selfCheck = false) {
    const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
    const headerElement = z(prevTabElement, '[data-pc-section="accordionheader"]');
    return headerElement ? Q(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : z(headerElement.parentElement, '[data-pc-section="accordionheader"]') : null;
  }
  findFirstHeaderAction() {
    const firstEl = this.el.nativeElement.firstElementChild;
    return this.findNextHeaderAction(firstEl, true);
  }
  findLastHeaderAction() {
    const lastEl = this.el.nativeElement.lastElementChild;
    return this.findPrevHeaderAction(lastEl, true);
  }
  onTabEndKey(event) {
    const lastHeaderAction = this.findLastHeaderAction();
    this.changeFocusedTab(lastHeaderAction);
    event.preventDefault();
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  updateValue(value) {
    const currentValue = this.value();
    if (this.multiple()) {
      const newValue = Array.isArray(currentValue) ? [...currentValue] : [];
      const index = newValue.indexOf(value);
      if (index !== -1) {
        newValue.splice(index, 1);
      } else {
        newValue.push(value);
      }
      this.value.set(newValue);
    } else {
      if (currentValue === value) {
        this.value.set(void 0);
      } else {
        this.value.set(value);
      }
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Accordion_BaseFactory;
    return function Accordion_Factory(__ngFactoryType__) {
      return (\u0275Accordion_BaseFactory || (\u0275Accordion_BaseFactory = \u0275\u0275getInheritedFactory(_Accordion)))(__ngFactoryType__ || _Accordion);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Accordion,
    selectors: [["p-accordion"]],
    hostVars: 2,
    hostBindings: function Accordion_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function Accordion_keydown_HostBindingHandler($event) {
          return ctx.onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [1, "value"],
      multiple: [1, "multiple"],
      styleClass: "styleClass",
      expandIcon: "expandIcon",
      collapseIcon: "collapseIcon",
      selectOnFocus: [1, "selectOnFocus"],
      transitionOptions: "transitionOptions"
    },
    outputs: {
      value: "valueChange",
      onClose: "onClose",
      onOpen: "onOpen"
    },
    features: [\u0275\u0275ProvidersFeature([AccordionStyle, {
      provide: ACCORDION_INSTANCE,
      useExisting: _Accordion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Accordion
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Accordion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Accordion, [{
    type: Component,
    args: [{
      selector: "p-accordion",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: ` <ng-content /> `,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [AccordionStyle, {
        provide: ACCORDION_INSTANCE,
        useExisting: Accordion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Accordion
      }]
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: Output,
      args: ["valueChange"]
    }],
    multiple: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "multiple",
        required: false
      }]
    }],
    styleClass: [{
      type: Input
    }],
    expandIcon: [{
      type: Input
    }],
    collapseIcon: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "selectOnFocus",
        required: false
      }]
    }],
    transitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    onOpen: [{
      type: Output
    }],
    onKeydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AccordionModule = class _AccordionModule {
  static \u0275fac = function AccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AccordionModule,
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
    exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule],
      exports: [Accordion, SharedModule, AccordionPanel, AccordionHeader, AccordionContent, BindModule]
    }]
  }], null, null);
})();

export {
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Accordion,
  AccordionModule
};
//# sourceMappingURL=chunk-DEHQQ4L4.js.map
