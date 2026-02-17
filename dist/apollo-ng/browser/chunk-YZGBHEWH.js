import {
  BaseComponent,
  BaseStyle,
  Bind,
  PARENT_INSTANCE,
  SharedModule
} from "./chunk-JRTE2WST.js";
import {
  CommonModule
} from "./chunk-A6EA4TT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
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
} from "./chunk-FZZISKXM.js";

// node_modules/primeng/fesm2022/primeng-avatargroup.mjs
var _c0 = ["*"];
var classes = {
  root: "p-avatar-group p-component"
};
var AvatarGroupStyle = class _AvatarGroupStyle extends BaseStyle {
  name = "avatargroup";
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarGroupStyle_BaseFactory;
    return function AvatarGroupStyle_Factory(__ngFactoryType__) {
      return (\u0275AvatarGroupStyle_BaseFactory || (\u0275AvatarGroupStyle_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarGroupStyle)))(__ngFactoryType__ || _AvatarGroupStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AvatarGroupStyle,
    factory: _AvatarGroupStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarGroupClasses;
(function(AvatarGroupClasses2) {
  AvatarGroupClasses2["root"] = "p-avatar-group";
})(AvatarGroupClasses || (AvatarGroupClasses = {}));
var AVATARGROUP_INSTANCE = new InjectionToken("AVATARGROUP_INSTANCE");
var AvatarGroup = class _AvatarGroup extends BaseComponent {
  $pcAvatarGroup = inject(AVATARGROUP_INSTANCE, {
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
   * Style class of the component
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  get hostStyle() {
    return this.style;
  }
  _componentStyle = inject(AvatarGroupStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AvatarGroup_BaseFactory;
    return function AvatarGroup_Factory(__ngFactoryType__) {
      return (\u0275AvatarGroup_BaseFactory || (\u0275AvatarGroup_BaseFactory = \u0275\u0275getInheritedFactory(_AvatarGroup)))(__ngFactoryType__ || _AvatarGroup);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _AvatarGroup,
    selectors: [["p-avatarGroup"], ["p-avatar-group"], ["p-avatargroup"]],
    hostVars: 4,
    hostBindings: function AvatarGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.hostStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      style: "style"
    },
    features: [\u0275\u0275ProvidersFeature([AvatarGroupStyle, {
      provide: AVATARGROUP_INSTANCE,
      useExisting: _AvatarGroup
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _AvatarGroup
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function AvatarGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    dependencies: [CommonModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroup, [{
    type: Component,
    args: [{
      selector: "p-avatarGroup, p-avatar-group, p-avatargroup",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [AvatarGroupStyle, {
        provide: AVATARGROUP_INSTANCE,
        useExisting: AvatarGroup
      }, {
        provide: PARENT_INSTANCE,
        useExisting: AvatarGroup
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    hostStyle: [{
      type: HostBinding,
      args: ["style"]
    }]
  });
})();
var AvatarGroupModule = class _AvatarGroupModule {
  static \u0275fac = function AvatarGroupModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarGroupModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _AvatarGroupModule,
    imports: [AvatarGroup, SharedModule],
    exports: [AvatarGroup, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [AvatarGroup, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarGroupModule, [{
    type: NgModule,
    args: [{
      imports: [AvatarGroup, SharedModule],
      exports: [AvatarGroup, SharedModule]
    }]
  }], null, null);
})();

export {
  AvatarGroup,
  AvatarGroupModule
};
//# sourceMappingURL=chunk-YZGBHEWH.js.map
