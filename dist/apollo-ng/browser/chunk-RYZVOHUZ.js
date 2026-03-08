import {
  Skeleton,
  SkeletonModule
} from "./chunk-WA64UDJV.js";
import {
  CommonModule,
  DecimalPipe
} from "./chunk-T6X6TYBW.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HXF2V74O.js";

// src/app/pages/dashboards/finance/widgets/statcardwidget.ts
function StatCardWidget_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 7);
  }
}
function StatCardWidget_Conditional_1_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.value, "1.0-0"), " ");
  }
}
function StatCardWidget_Conditional_1_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.value ?? 0, " ");
  }
}
function StatCardWidget_Conditional_1_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.suffix);
  }
}
function StatCardWidget_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, StatCardWidget_Conditional_1_Conditional_8_Conditional_1_Template, 2, 4)(2, StatCardWidget_Conditional_1_Conditional_8_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, StatCardWidget_Conditional_1_Conditional_8_Conditional_3_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.format === "number" && typeof ctx_r0.value === "number" ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.suffix ? 3 : -1);
  }
}
function StatCardWidget_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "rect", 3)(3, "path", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div", 5)(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StatCardWidget_Conditional_1_Conditional_7_Template, 1, 0, "p-skeleton", 7)(8, StatCardWidget_Conditional_1_Conditional_8_Template, 4, 2, "div", 8);
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function StatCardWidget_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-skeleton", 12);
  }
}
function StatCardWidget_Conditional_2_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.value, "1.0-0"), " ");
  }
}
function StatCardWidget_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.value ?? 0, " ");
  }
}
function StatCardWidget_Conditional_2_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.suffix);
  }
}
function StatCardWidget_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275conditionalCreate(1, StatCardWidget_Conditional_2_Conditional_4_Conditional_1_Template, 2, 4)(2, StatCardWidget_Conditional_2_Conditional_4_Conditional_2_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, StatCardWidget_Conditional_2_Conditional_4_Conditional_3_Template, 2, 1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.format === "number" && typeof ctx_r0.value === "number" ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.suffix ? 3 : -1);
  }
}
function StatCardWidget_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StatCardWidget_Conditional_2_Conditional_3_Template, 1, 0, "p-skeleton", 12)(4, StatCardWidget_Conditional_2_Conditional_4_Template, 4, 2, "span", 13);
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
var StatCardWidget = class _StatCardWidget {
  title = "";
  value = 0;
  subtitle = "";
  loading = false;
  suffix = "GNF";
  format = "number";
  variant = "default";
  columnClass = "col-span-12 md:col-span-6 xl:col-span-4";
  static \u0275fac = function StatCardWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatCardWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatCardWidget, selectors: [["app-stat-card-widget"]], hostVars: 2, hostBindings: function StatCardWidget_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("display", "contents");
    }
  }, inputs: { title: "title", value: "value", subtitle: "subtitle", loading: "loading", suffix: "suffix", format: "format", variant: "variant", columnClass: "columnClass" }, decls: 3, vars: 3, consts: [[1, "card", "h-full", "relative", "overflow-hidden"], [1, "card", "h-full", "flex", "flex-col", "items-center", "justify-center", "text-center"], ["viewBox", "0 0 900 600", "xmlns", "http://www.w3.org/2000/svg", "xmlnsXlink", "http://www.w3.org/1999/xlink", "version", "1.1", "preserveAspectRatio", "none", 1, "absolute", "left-0", "top-0", "h-full", "w-full"], ["x", "0", "y", "0", "width", "900", "height", "600", "fill", "var(--p-primary-600)"], ["d", "M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z", "fill", "var(--p-primary-500)", "strokeLinecap", "round", "strokeLinejoin", "miter"], [1, "z-20", "relative", "text-white"], [1, "text-xl", "font-semibold", "mb-6"], ["width", "12rem", "height", "2.1rem", "borderRadius", "6px"], [1, "text-2xl", "mb-3", "mt-4", "font-bold"], [1, "text-sm", "opacity-90"], [1, "ml-1"], [1, "text-surface-900", "dark:text-surface-0", "text-lg", "font-medium", "mb-6"], ["width", "16rem", "height", "2.1rem", "borderRadius", "6px"], [1, "text-2xl", "text-primary", "font-bold"], [1, "text-sm", "text-surface-500", "dark:text-surface-300", "mt-3"]], template: function StatCardWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275conditionalCreate(1, StatCardWidget_Conditional_1_Template, 11, 3, "div", 0)(2, StatCardWidget_Conditional_2_Template, 7, 3, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.columnClass);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.variant === "primary" ? 1 : 2);
    }
  }, dependencies: [CommonModule, SkeletonModule, Skeleton, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatCardWidget, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-stat-card-widget",
      imports: [CommonModule, SkeletonModule],
      host: {
        "[style.display]": '"contents"'
      },
      template: `
        <div [class]="columnClass">
            @if (variant === 'primary') {
                <div class="card h-full relative overflow-hidden">
                    <svg
                        viewBox="0 0 900 600"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        class="absolute left-0 top-0 h-full w-full"
                        preserveAspectRatio="none"
                    >
                        <rect x="0" y="0" width="900" height="600" fill="var(--p-primary-600)"></rect>
                        <path
                            d="M0 400L30 386.5C60 373 120 346 180 334.8C240 323.7 300 328.3 360 345.2C420 362 480 391 540 392C600 393 660 366 720 355.2C780 344.3 840 349.7 870 352.3L900 355L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
                            fill="var(--p-primary-500)"
                            strokeLinecap="round"
                            strokeLinejoin="miter"
                        ></path>
                    </svg>
                    <div class="z-20 relative text-white">
                        <div class="text-xl font-semibold mb-6">{{ title }}</div>
                        @if (loading) {
                            <p-skeleton width="12rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                        } @else {
                            <div class="text-2xl mb-3 mt-4 font-bold">
                                @if (format === 'number' && typeof value === 'number') {
                                    {{ value | number: '1.0-0' }}
                                } @else {
                                    {{ value ?? 0 }}
                                }
                                @if (suffix) {
                                    <span class="ml-1">{{ suffix }}</span>
                                }
                            </div>
                        }
                        <div class="text-sm opacity-90">{{ subtitle }}</div>
                    </div>
                </div>
            } @else {
                <div class="card h-full flex flex-col items-center justify-center text-center">
                    <span class="text-surface-900 dark:text-surface-0 text-lg font-medium mb-6">{{ title }}</span>
                    @if (loading) {
                        <p-skeleton width="16rem" height="2.1rem" borderRadius="6px"></p-skeleton>
                    } @else {
                        <span class="text-2xl text-primary font-bold">
                            @if (format === 'number' && typeof value === 'number') {
                                {{ value | number: '1.0-0' }}
                            } @else {
                                {{ value ?? 0 }}
                            }
                            @if (suffix) {
                                <span class="ml-1">{{ suffix }}</span>
                            }
                        </span>
                    }
                    <span class="text-sm text-surface-500 dark:text-surface-300 mt-3">{{ subtitle }}</span>
                </div>
            }
        </div>
    `
    }]
  }], null, { title: [{
    type: Input
  }], value: [{
    type: Input
  }], subtitle: [{
    type: Input
  }], loading: [{
    type: Input
  }], suffix: [{
    type: Input
  }], format: [{
    type: Input
  }], variant: [{
    type: Input
  }], columnClass: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatCardWidget, { className: "StatCardWidget", filePath: "src/app/pages/dashboards/finance/widgets/statcardwidget.ts", lineNumber: 77 });
})();

export {
  StatCardWidget
};
//# sourceMappingURL=chunk-RYZVOHUZ.js.map
