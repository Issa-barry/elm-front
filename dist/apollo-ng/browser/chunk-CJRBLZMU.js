import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-JRTE2WST.js";
import {
  Component,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-FZZISKXM.js";

// node_modules/@primeuix/styles/dist/inputgroup/index.mjs
var style = "\n    .p-inputgroup,\n    .p-inputgroup .p-iconfield,\n    .p-inputgroup .p-floatlabel,\n    .p-inputgroup .p-iftalabel {\n        display: flex;\n        align-items: stretch;\n        width: 100%;\n    }\n\n    .p-inputgroup .p-inputtext,\n    .p-inputgroup .p-inputwrapper {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-inputgroupaddon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: dt('inputgroup.addon.padding');\n        background: dt('inputgroup.addon.background');\n        color: dt('inputgroup.addon.color');\n        border-block-start: 1px solid dt('inputgroup.addon.border.color');\n        border-block-end: 1px solid dt('inputgroup.addon.border.color');\n        min-width: dt('inputgroup.addon.min.width');\n    }\n\n    .p-inputgroupaddon:first-child,\n    .p-inputgroupaddon + .p-inputgroupaddon {\n        border-inline-start: 1px solid dt('inputgroup.addon.border.color');\n    }\n\n    .p-inputgroupaddon:last-child {\n        border-inline-end: 1px solid dt('inputgroup.addon.border.color');\n    }\n\n    .p-inputgroupaddon:has(.p-button) {\n        padding: 0;\n        overflow: hidden;\n    }\n\n    .p-inputgroupaddon .p-button {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-component,\n    .p-inputgroup > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iconfield > .p-component,\n    .p-inputgroup > .p-floatlabel > .p-component,\n    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel > .p-component,\n    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {\n        border-radius: 0;\n        margin: 0;\n    }\n\n    .p-inputgroupaddon:first-child,\n    .p-inputgroup > .p-component:first-child,\n    .p-inputgroup > .p-inputwrapper:first-child > .p-component,\n    .p-inputgroup > .p-iconfield:first-child > .p-component,\n    .p-inputgroup > .p-floatlabel:first-child > .p-component,\n    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel:first-child > .p-component,\n    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {\n        border-start-start-radius: dt('inputgroup.addon.border.radius');\n        border-end-start-radius: dt('inputgroup.addon.border.radius');\n    }\n\n    .p-inputgroupaddon:last-child,\n    .p-inputgroup > .p-component:last-child,\n    .p-inputgroup > .p-inputwrapper:last-child > .p-component,\n    .p-inputgroup > .p-iconfield:last-child > .p-component,\n    .p-inputgroup > .p-floatlabel:last-child > .p-component,\n    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,\n    .p-inputgroup > .p-iftalabel:last-child > .p-component,\n    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {\n        border-start-end-radius: dt('inputgroup.addon.border.radius');\n        border-end-end-radius: dt('inputgroup.addon.border.radius');\n    }\n\n    .p-inputgroup .p-component:focus,\n    .p-inputgroup .p-component.p-focus,\n    .p-inputgroup .p-inputwrapper-focus,\n    .p-inputgroup .p-component:focus ~ label,\n    .p-inputgroup .p-component.p-focus ~ label,\n    .p-inputgroup .p-inputwrapper-focus ~ label {\n        z-index: 1;\n    }\n\n    .p-inputgroup > .p-button:not(.p-button-icon-only) {\n        width: auto;\n    }\n\n    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {\n        border-inline-start: 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputgroup.mjs
var _c0 = ["*"];
var style2 = (
  /*css*/
  `
    ${style}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-inputgroup", {
    "p-inputgroup-fluid": instance.fluid
  }]
};
var InputGroupStyle = class _InputGroupStyle extends BaseStyle {
  name = "inputgroup";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupStyle_BaseFactory;
    return function InputGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupStyle_BaseFactory || (\u0275InputGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupStyle)))(__ngFactoryType__ || _InputGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupStyle,
    factory: _InputGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var InputGroupClasses;
(function(InputGroupClasses2) {
  InputGroupClasses2["root"] = "p-inputgroup";
})(InputGroupClasses || (InputGroupClasses = {}));
var INPUTGROUP_INSTANCE = new InjectionToken("INPUTGROUP_INSTANCE");
var InputGroup = class _InputGroup extends BaseComponent {
  _componentStyle = inject(InputGroupStyle);
  $pcInputGroup = inject(INPUTGROUP_INSTANCE, {
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
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroup_BaseFactory;
    return function InputGroup_Factory(__ngFactoryType__) {
      return (\u0275InputGroup_BaseFactory || (\u0275InputGroup_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroup)))(__ngFactoryType__ || _InputGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroup,
    selectors: [["p-inputgroup"], ["p-inputGroup"], ["p-input-group"]],
    hostVars: 2,
    hostBindings: function InputGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupStyle, {
      provide: INPUTGROUP_INSTANCE,
      useExisting: _InputGroup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputGroup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InputGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroup, [{
    type: Component,
    args: [{
      selector: "p-inputgroup, p-inputGroup, p-input-group",
      standalone: true,
      imports: [BindModule],
      template: ` <ng-content></ng-content> `,
      providers: [InputGroupStyle, {
        provide: INPUTGROUP_INSTANCE,
        useExisting: InputGroup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputGroup
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }]
  });
})();
var InputGroupModule = class _InputGroupModule {
  static \u0275fac = function InputGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupModule,
    imports: [InputGroup, SharedModule],
    exports: [InputGroup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroup, SharedModule],
      exports: [InputGroup, SharedModule]
    }]
  }], null, null);
})();

export {
  InputGroup,
  InputGroupModule
};
//# sourceMappingURL=chunk-CJRBLZMU.js.map
