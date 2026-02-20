import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-65XIZQ4E.js";
import {
  Component,
  HostBinding,
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
  ɵɵprojectionDef,
  ɵɵstyleMap
} from "./chunk-UJSDGQXU.js";

// node_modules/primeng/fesm2022/primeng-inputgroupaddon.mjs
var _c0 = ["*"];
var classes = {
  root: "p-inputgroupaddon"
};
var InputGroupAddonStyle = class _InputGroupAddonStyle extends BaseStyle {
  name = "inputgroupaddon";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddonStyle_BaseFactory;
    return function InputGroupAddonStyle_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddonStyle_BaseFactory || (\u0275InputGroupAddonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddonStyle)))(__ngFactoryType__ || _InputGroupAddonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputGroupAddonStyle,
    factory: _InputGroupAddonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonStyle, [{
    type: Injectable
  }], null, null);
})();
var INPUTGROUPADDON_INSTANCE = new InjectionToken("INPUTGROUPADDON_INSTANCE");
var InputGroupAddon = class _InputGroupAddon extends BaseComponent {
  _componentStyle = inject(InputGroupAddonStyle);
  $pcInputGroupAddon = inject(INPUTGROUPADDON_INSTANCE, {
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
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  get hostStyle() {
    return this.style;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275InputGroupAddon_BaseFactory;
    return function InputGroupAddon_Factory(__ngFactoryType__) {
      return (\u0275InputGroupAddon_BaseFactory || (\u0275InputGroupAddon_BaseFactory = \u0275\u0275getInheritedFactory(_InputGroupAddon)))(__ngFactoryType__ || _InputGroupAddon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _InputGroupAddon,
    selectors: [["p-inputgroup-addon"], ["p-inputGroupAddon"]],
    hostVars: 4,
    hostBindings: function InputGroupAddon_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([InputGroupAddonStyle, {
      provide: INPUTGROUPADDON_INSTANCE,
      useExisting: _InputGroupAddon
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputGroupAddon
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function InputGroupAddon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddon, [{
    type: Component,
    args: [{
      selector: "p-inputgroup-addon, p-inputGroupAddon",
      template: ` <ng-content></ng-content> `,
      standalone: true,
      imports: [BindModule],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      providers: [InputGroupAddonStyle, {
        provide: INPUTGROUPADDON_INSTANCE,
        useExisting: InputGroupAddon
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputGroupAddon
      }],
      hostDirectives: [Bind]
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var InputGroupAddonModule = class _InputGroupAddonModule {
  static \u0275fac = function InputGroupAddonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputGroupAddonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _InputGroupAddonModule,
    imports: [InputGroupAddon, SharedModule],
    exports: [InputGroupAddon, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [InputGroupAddon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputGroupAddonModule, [{
    type: NgModule,
    args: [{
      imports: [InputGroupAddon, SharedModule],
      exports: [InputGroupAddon, SharedModule]
    }]
  }], null, null);
})();

export {
  InputGroupAddon,
  InputGroupAddonModule
};
//# sourceMappingURL=chunk-5UHNKDW3.js.map
