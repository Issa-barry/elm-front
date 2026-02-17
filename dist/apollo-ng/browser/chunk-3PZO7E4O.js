import {
  Button,
  ButtonModule
} from "./chunk-V2JIX33N.js";
import "./chunk-SRAUJRPD.js";
import "./chunk-WSCE5RX7.js";
import "./chunk-DHPXHGGE.js";
import {
  BaseComponent,
  BaseStyle,
  Bind,
  BindModule,
  Footer,
  Header,
  PARENT_INSTANCE,
  PrimeTemplate,
  SharedModule,
  k2 as k
} from "./chunk-JRTE2WST.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-A6EA4TT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FZZISKXM.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/timeline/index.mjs
var style = "\n    .p-timeline {\n        display: flex;\n        flex-grow: 1;\n        flex-direction: column;\n        direction: ltr;\n    }\n\n    .p-timeline-left .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-left .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-right .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical .p-timeline-event-opposite,\n    .p-timeline-vertical .p-timeline-event-content {\n        padding: dt('timeline.vertical.event.content.padding');\n    }\n\n    .p-timeline-vertical .p-timeline-event-connector {\n        width: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-event {\n        display: flex;\n        position: relative;\n        min-height: dt('timeline.event.min.height');\n    }\n\n    .p-timeline-event:last-child {\n        min-height: 0;\n    }\n\n    .p-timeline-event-opposite {\n        flex: 1;\n    }\n\n    .p-timeline-event-content {\n        flex: 1;\n    }\n\n    .p-timeline-event-separator {\n        flex: 0;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n    }\n\n    .p-timeline-event-marker {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        align-self: baseline;\n        border-width: dt('timeline.event.marker.border.width');\n        border-style: solid;\n        border-color: dt('timeline.event.marker.border.color');\n        border-radius: dt('timeline.event.marker.border.radius');\n        width: dt('timeline.event.marker.size');\n        height: dt('timeline.event.marker.size');\n        background: dt('timeline.event.marker.background');\n    }\n\n    .p-timeline-event-marker::before {\n        content: ' ';\n        border-radius: dt('timeline.event.marker.content.border.radius');\n        width: dt('timeline.event.marker.content.size');\n        height: dt('timeline.event.marker.content.size');\n        background: dt('timeline.event.marker.content.background');\n    }\n\n    .p-timeline-event-marker::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('timeline.event.marker.border.radius');\n        box-shadow: dt('timeline.event.marker.content.inset.shadow');\n    }\n\n    .p-timeline-event-connector {\n        flex-grow: 1;\n        background: dt('timeline.event.connector.color');\n    }\n\n    .p-timeline-horizontal {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event {\n        flex-direction: column;\n        flex: 1;\n    }\n\n    .p-timeline-horizontal .p-timeline-event:last-child {\n        flex: 0;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-separator {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-connector {\n        width: 100%;\n        height: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-horizontal .p-timeline-event-opposite,\n    .p-timeline-horizontal .p-timeline-event-content {\n        padding: dt('timeline.horizontal.event.content.padding');\n    }\n\n    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: column-reverse;\n    }\n\n    .p-timeline-bottom .p-timeline-event {\n        flex-direction: column-reverse;\n    }\n";

// node_modules/primeng/fesm2022/primeng-timeline.mjs
var _c0 = ["content"];
var _c1 = ["opposite"];
var _c2 = ["marker"];
var _c3 = (a0) => ({
  $implicit: a0
});
function Timeline_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Timeline_div_0_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, event_r1));
  }
}
function Timeline_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("eventMarker"));
    \u0275\u0275property("pBind", ctx_r1.ptm("eventMarker"));
  }
}
function Timeline_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("eventConnector"));
    \u0275\u0275property("pBind", ctx_r1.ptm("eventConnector"));
  }
}
function Timeline_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Timeline_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 2);
    \u0275\u0275template(2, Timeline_div_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275template(4, Timeline_div_0_ng_container_4_Template, 2, 4, "ng-container", 4)(5, Timeline_div_0_ng_template_5_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, Timeline_div_0_div_7_Template, 1, 3, "div", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 2);
    \u0275\u0275template(9, Timeline_div_0_ng_container_9_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cx("event"));
    \u0275\u0275property("pBind", ctx_r1.ptm("event"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventOpposite"));
    \u0275\u0275property("pBind", ctx_r1.ptm("eventOpposite"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.oppositeTemplate || ctx_r1._oppositeTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c3, event_r1));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventSeparator"));
    \u0275\u0275property("pBind", ctx_r1.ptm("eventSeparator"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngIfElse", marker_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !last_r3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("eventContent"));
    \u0275\u0275property("pBind", ctx_r1.ptm("eventContent"));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(21, _c3, event_r1));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-timeline p-component", "p-timeline-" + instance.align, "p-timeline-" + instance.layout],
  event: "p-timeline-event",
  eventOpposite: "p-timeline-event-opposite",
  eventSeparator: "p-timeline-event-separator",
  eventMarker: "p-timeline-event-marker",
  eventConnector: "p-timeline-event-connector",
  eventContent: "p-timeline-event-content"
};
var TimelineStyle = class _TimelineStyle extends BaseStyle {
  name = "timeline";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TimelineStyle_BaseFactory;
    return function TimelineStyle_Factory(__ngFactoryType__) {
      return (\u0275TimelineStyle_BaseFactory || (\u0275TimelineStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TimelineStyle)))(__ngFactoryType__ || _TimelineStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TimelineStyle,
    factory: _TimelineStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineStyle, [{
    type: Injectable
  }], null, null);
})();
var TimelineClasses;
(function(TimelineClasses2) {
  TimelineClasses2["root"] = "p-timeline";
  TimelineClasses2["event"] = "p-timeline-event";
  TimelineClasses2["eventOpposite"] = "p-timeline-event-opposite";
  TimelineClasses2["eventSeparator"] = "p-timeline-event-separator";
  TimelineClasses2["eventMarker"] = "p-timeline-event-marker";
  TimelineClasses2["eventConnector"] = "p-timeline-event-connector";
  TimelineClasses2["eventContent"] = "p-timeline-event-content";
})(TimelineClasses || (TimelineClasses = {}));
var TIMELINE_INSTANCE = new InjectionToken("TIMELINE_INSTANCE");
var Timeline = class _Timeline extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcTimeline = inject(TIMELINE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * An array of events to display.
   * @group Props
   */
  value;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
   * @group Props
   */
  align = "left";
  /**
   * Orientation of the timeline.
   * @group Props
   */
  layout = "vertical";
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Custom opposite item template.
   * @group Templates
   */
  oppositeTemplate;
  /**
   * Custom marker template.
   * @group Templates
   */
  markerTemplate;
  templates;
  _contentTemplate;
  _oppositeTemplate;
  _markerTemplate;
  _componentStyle = inject(TimelineStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "opposite":
          this._oppositeTemplate = item.template;
          break;
        case "marker":
          this._markerTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Timeline_BaseFactory;
    return function Timeline_Factory(__ngFactoryType__) {
      return (\u0275Timeline_BaseFactory || (\u0275Timeline_BaseFactory = \u0275\u0275getInheritedFactory(_Timeline)))(__ngFactoryType__ || _Timeline);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Timeline,
    selectors: [["p-timeline"]],
    contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, _c2, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.oppositeTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.markerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 2,
    hostBindings: function Timeline_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    features: [\u0275\u0275ProvidersFeature([TimelineStyle, {
      provide: TIMELINE_INSTANCE,
      useExisting: _Timeline
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Timeline
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["marker", ""], [3, "pBind", "class", 4, "ngFor", "ngForOf"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "pBind", "class", 4, "ngIf"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Timeline_div_0_Template, 10, 23, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.value);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <div [pBind]="ptm('event')" *ngFor="let event of value; let last = last" [class]="cx('event')">
            <div [pBind]="ptm('eventOpposite')" [class]="cx('eventOpposite')">
                <ng-container *ngTemplateOutlet="oppositeTemplate || _oppositeTemplate; context: { $implicit: event }"></ng-container>
            </div>
            <div [pBind]="ptm('eventSeparator')" [class]="cx('eventSeparator')">
                <ng-container *ngIf="markerTemplate || _markerTemplate; else marker">
                    <ng-container *ngTemplateOutlet="markerTemplate || _markerTemplate; context: { $implicit: event }"></ng-container>
                </ng-container>
                <ng-template #marker>
                    <div [pBind]="ptm('eventMarker')" [class]="cx('eventMarker')"></div>
                </ng-template>
                <div [pBind]="ptm('eventConnector')" *ngIf="!last" [class]="cx('eventConnector')"></div>
            </div>
            <div [pBind]="ptm('eventContent')" [class]="cx('eventContent')">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: event }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TimelineStyle, {
        provide: TIMELINE_INSTANCE,
        useExisting: Timeline
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Timeline
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    oppositeTemplate: [{
      type: ContentChild,
      args: ["opposite", {
        descendants: false
      }]
    }],
    markerTemplate: [{
      type: ContentChild,
      args: ["marker", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static \u0275fac = function TimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TimelineModule,
    imports: [Timeline, SharedModule],
    exports: [Timeline, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Timeline, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [Timeline, SharedModule],
      exports: [Timeline, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/card/index.mjs
var style2 = "\n    .p-card {\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c02 = ["header"];
var _c12 = ["title"];
var _c22 = ["subtitle"];
var _c32 = ["content"];
var _c4 = ["footer"];
var _c5 = ["*", [["p-header"]], [["p-footer"]]];
var _c6 = ["*", "p-header", "p-footer"];
function Card_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275projection(1, 1);
    \u0275\u0275template(2, Card_div_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("header"));
    \u0275\u0275property("pBind", ctx_r0.ptm("header"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Card_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.header);
  }
}
function Card_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, Card_div_2_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Card_div_2_ng_container_2_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("title"));
    \u0275\u0275property("pBind", ctx_r0.ptm("title"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.header && !ctx_r0._titleTemplate && !ctx_r0.titleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.titleTemplate || ctx_r0._titleTemplate);
  }
}
function Card_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subheader);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, Card_div_3_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("subtitle"));
    \u0275\u0275property("pBind", ctx_r0.ptm("subtitle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subheader && !ctx_r0._subtitleTemplate && !ctx_r0.subtitleTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.subtitleTemplate || ctx_r0._subtitleTemplate);
  }
}
function Card_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Card_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, Card_div_7_ng_container_2_Template, 1, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cx("footer"));
    \u0275\u0275property("pBind", ctx_r0.ptm("footer"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    .p-card {
        display: block;
    }
`
);
var classes2 = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = class _CardStyle extends BaseStyle {
  name = "card";
  style = style3;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CardStyle_BaseFactory;
    return function CardStyle_Factory(__ngFactoryType__) {
      return (\u0275CardStyle_BaseFactory || (\u0275CardStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CardStyle)))(__ngFactoryType__ || _CardStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CardStyle,
    factory: _CardStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardStyle, [{
    type: Injectable
  }], null, null);
})();
var CardClasses;
(function(CardClasses2) {
  CardClasses2["root"] = "p-card";
  CardClasses2["header"] = "p-card-header";
  CardClasses2["body"] = "p-card-body";
  CardClasses2["caption"] = "p-card-caption";
  CardClasses2["title"] = "p-card-title";
  CardClasses2["subtitle"] = "p-card-subtitle";
  CardClasses2["content"] = "p-card-content";
  CardClasses2["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var CARD_INSTANCE = new InjectionToken("CARD_INSTANCE");
var Card = class _Card extends BaseComponent {
  $pcCard = inject(CARD_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(CardStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!k(this._style(), value)) {
      this._style.set(value);
      if (this.el?.nativeElement) {
        if (value) {
          Object.keys(value).forEach((key) => {
            this.el.nativeElement.style[key] = value[key];
          });
        }
      }
    }
  }
  get style() {
    return this._style();
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _headerTemplate;
  _titleTemplate;
  _subtitleTemplate;
  _contentTemplate;
  _footerTemplate;
  _style = signal(null, ...ngDevMode ? [{
    debugName: "_style"
  }] : []);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "title":
          this._titleTemplate = item.template;
          break;
        case "subtitle":
          this._subtitleTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Card_BaseFactory;
    return function Card_Factory(__ngFactoryType__) {
      return (\u0275Card_BaseFactory || (\u0275Card_BaseFactory = \u0275\u0275getInheritedFactory(_Card)))(__ngFactoryType__ || _Card);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, Header, 5);
        \u0275\u0275contentQuery(dirIndex, Footer, 5);
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, _c12, 4);
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerFacet = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.subtitleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Card_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleMap(ctx._style());
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    features: [\u0275\u0275ProvidersFeature([CardStyle, {
      provide: CARD_INSTANCE,
      useExisting: _Card
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Card
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c6,
    decls: 8,
    vars: 11,
    consts: [[3, "pBind", "class", 4, "ngIf"], [3, "pBind"], [4, "ngTemplateOutlet"], [4, "ngIf"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c5);
        \u0275\u0275template(0, Card_div_0_Template, 3, 4, "div", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275template(2, Card_div_2_Template, 3, 5, "div", 0)(3, Card_div_3_Template, 3, 5, "div", 0);
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275projection(5);
        \u0275\u0275template(6, Card_ng_container_6_Template, 1, 0, "ng-container", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, Card_div_7_Template, 3, 4, "div", 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.headerFacet || ctx.headerTemplate || ctx._headerTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("body"));
        \u0275\u0275property("pBind", ctx.ptm("body"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.header || ctx.titleTemplate || ctx._titleTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subheader || ctx.subtitleTemplate || ctx._subtitleTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [pBind]="ptm('body')" [class]="cx('body')">
            <div [pBind]="ptm('title')" [class]="cx('title')" *ngIf="header || titleTemplate || _titleTemplate">
                <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('subtitle')" [class]="cx('subtitle')" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('content')" [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CardStyle, {
        provide: CARD_INSTANCE,
        useExisting: Card
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Card
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "_style()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
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
    titleTemplate: [{
      type: ContentChild,
      args: ["title", {
        descendants: false
      }]
    }],
    subtitleTemplate: [{
      type: ContentChild,
      args: ["subtitle", {
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
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static \u0275fac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CardModule,
    imports: [Card, SharedModule, BindModule],
    exports: [Card, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Card, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [Card, SharedModule, BindModule],
      exports: [Card, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/pages/uikit/timelinedemo.ts
var _c03 = (a0) => ({ "background-color": a0 });
function TimelineDemo_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r1.status, " ");
  }
}
function TimelineDemo_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r2.status, " ");
  }
}
function TimelineDemo_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r3.status, " ");
  }
}
function TimelineDemo_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r4.date);
  }
}
function TimelineDemo_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r5.status, " ");
  }
}
function TimelineDemo_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    \u0275\u0275styleMap(\u0275\u0275pureFunction1(4, _c03, event_r6.color));
    \u0275\u0275advance();
    \u0275\u0275classMap(event_r6.icon);
  }
}
function TimelineDemo_ng_template_38_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 22);
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "/images/product/" + event_r7.image, \u0275\u0275sanitizeUrl)("alt", event_r7.name);
  }
}
function TimelineDemo_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 19);
    \u0275\u0275template(1, TimelineDemo_ng_template_38_img_1_Template, 1, 2, "img", 20);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-button", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    \u0275\u0275property("header", event_r7.status)("subheader", event_r7.date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.image);
    \u0275\u0275advance(3);
    \u0275\u0275property("text", true);
  }
}
function TimelineDemo_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r8, " ");
  }
}
function TimelineDemo_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r9, " ");
  }
}
function TimelineDemo_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", event_r10, " ");
  }
}
function TimelineDemo_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0");
  }
}
var TimelineDemo = class _TimelineDemo {
  events1 = [];
  events2 = [];
  ngOnInit() {
    this.events1 = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: "pi pi-shopping-cart",
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: "pi pi-cog",
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: "pi pi-envelope",
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: "pi pi-check",
        color: "#607D8B"
      }
    ];
    this.events2 = ["2020", "2021", "2022", "2023"];
  }
  static \u0275fac = function TimelineDemo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineDemo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineDemo, selectors: [["app-timeline-demo"]], decls: 61, vars: 8, consts: [["content", ""], ["opposite", ""], ["marker", ""], [1, "grid", "grid-cols-12", "gap-8"], [1, "col-span-12", "sm:col-span-6"], [1, "card"], [1, "font-semibold", "text-xl", "mb-4"], [3, "value"], ["align", "right", 3, "value"], ["align", "alternate", 3, "value"], [1, "col-span-full"], ["align", "alternate", "styleClass", "customized-timeline", 3, "value"], [1, "font-semibold", "mb-2"], ["layout", "horizontal", "align", "top", 3, "value"], [1, "font-semibold", "mt-4", "mb-2"], ["layout", "horizontal", "align", "bottom", 3, "value"], ["layout", "horizontal", "align", "alternate", 3, "value"], [1, "p-text-secondary"], [1, "flex", "w-8", "h-8", "items-center", "justify-center", "text-white", "rounded-full", "z-10", "shadow-sm"], [3, "header", "subheader"], ["width", "200", "class", "shadow", 3, "src", "alt", 4, "ngIf"], ["label", "Read more", 3, "text"], ["width", "200", 1, "shadow", 3, "src", "alt"]], template: function TimelineDemo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275text(4, "Left Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-timeline", 7);
      \u0275\u0275template(6, TimelineDemo_ng_template_6_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6);
      \u0275\u0275text(11, "Right Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p-timeline", 8);
      \u0275\u0275template(13, TimelineDemo_ng_template_13_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 4)(16, "div", 5)(17, "div", 6);
      \u0275\u0275text(18, "Alternate Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-timeline", 9);
      \u0275\u0275template(20, TimelineDemo_ng_template_20_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 4)(23, "div", 5)(24, "div", 6);
      \u0275\u0275text(25, "Opposite Content");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p-timeline", 7);
      \u0275\u0275template(27, TimelineDemo_ng_template_27_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(29, TimelineDemo_ng_template_29_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 10)(32, "div", 5)(33, "div", 6);
      \u0275\u0275text(34, "Templating");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p-timeline", 11);
      \u0275\u0275template(36, TimelineDemo_ng_template_36_Template, 2, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(38, TimelineDemo_ng_template_38_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 10)(41, "div", 5)(42, "div", 6);
      \u0275\u0275text(43, "Horizontal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 12);
      \u0275\u0275text(45, "Top Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p-timeline", 13);
      \u0275\u0275template(47, TimelineDemo_ng_template_47_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 14);
      \u0275\u0275text(50, "Bottom Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p-timeline", 15);
      \u0275\u0275template(52, TimelineDemo_ng_template_52_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 14);
      \u0275\u0275text(55, "Alternate Align");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p-timeline", 16);
      \u0275\u0275template(57, TimelineDemo_ng_template_57_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(59, TimelineDemo_ng_template_59_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.events1);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.events1);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.events1);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.events1);
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.events1);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.events2);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.events2);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.events2);
    }
  }, dependencies: [CommonModule, NgIf, TimelineModule, Timeline, ButtonModule, Button, CardModule, Card], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineDemo, [{
    type: Component,
    args: [{
      selector: "app-timeline-demo",
      standalone: true,
      imports: [CommonModule, TimelineModule, ButtonModule, CardModule],
      template: `
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 sm:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Left Align</div>
                    <p-timeline [value]="events1">
                        <ng-template #content let-event>
                            {{ event.status }}
                        </ng-template>
                    </p-timeline>
                </div>
            </div>
            <div class="col-span-12 sm:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Right Align</div>
                    <p-timeline [value]="events1" align="right">
                        <ng-template #content let-event>
                            {{ event.status }}
                        </ng-template>
                    </p-timeline>
                </div>
            </div>
            <div class="col-span-12 sm:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Alternate Align</div>
                    <p-timeline [value]="events1" align="alternate">
                        <ng-template #content let-event>
                            {{ event.status }}
                        </ng-template>
                    </p-timeline>
                </div>
            </div>
            <div class="col-span-12 sm:col-span-6">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Opposite Content</div>
                    <p-timeline [value]="events1">
                        <ng-template #content let-event>
                            <small class="p-text-secondary">{{ event.date }}</small>
                        </ng-template>
                        <ng-template #opposite let-event>
                            {{ event.status }}
                        </ng-template>
                    </p-timeline>
                </div>
            </div>
            <div class="col-span-full">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Templating</div>
                    <p-timeline [value]="events1" align="alternate" styleClass="customized-timeline">
                        <ng-template #marker let-event>
                        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
                              [style]="{ 'background-color': event.color }">
                            <i [class]="event.icon"></i>
                        </span>
                        </ng-template>
                        <ng-template #content let-event>
                            <p-card [header]="event.status" [subheader]="event.date">
                                <img *ngIf="event.image" [src]="'/images/product/' + event.image" [alt]="event.name"
                                     width="200" class="shadow"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
                                    error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
                                    nobis, culpa ratione quam perferendis esse,
                                    cupiditate neque quas!
                                </p>
                                <p-button label="Read more" [text]="true"/>
                            </p-card>
                        </ng-template>
                    </p-timeline>
                </div>
            </div>
            <div class="col-span-full">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Horizontal</div>
                    <div class="font-semibold mb-2">Top Align</div>
                    <p-timeline [value]="events2" layout="horizontal" align="top">
                        <ng-template #content let-event>
                            {{ event }}
                        </ng-template>
                    </p-timeline>

                    <div class="font-semibold mt-4 mb-2">Bottom Align</div>
                    <p-timeline [value]="events2" layout="horizontal" align="bottom">
                        <ng-template #content let-event>
                            {{ event }}
                        </ng-template>
                    </p-timeline>

                    <div class="font-semibold mt-4 mb-2">Alternate Align</div>
                    <p-timeline [value]="events2" layout="horizontal" align="alternate">
                        <ng-template #content let-event>
                            {{ event }}
                        </ng-template>
                        <ng-template #opposite let-event> &nbsp;</ng-template>
                    </p-timeline>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineDemo, { className: "TimelineDemo", filePath: "src/app/pages/uikit/timelinedemo.ts", lineNumber: 110 });
})();
export {
  TimelineDemo
};
//# sourceMappingURL=chunk-3PZO7E4O.js.map
