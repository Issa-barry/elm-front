import {
  CommonModule
} from "./chunk-VGWO7IEC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-UJSDGQXU.js";

// src/app/pages/documentation/documentation.ts
var Documentation = class _Documentation {
  static \u0275fac = function Documentation_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Documentation)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Documentation, selectors: [["app-documentation"]], decls: 76, vars: 0, consts: [[1, "card"], [1, "font-semibold", "text-2xl", "mb-4"], [1, "font-semibold", "text-xl", "mb-4"], [1, "text-lg", "mb-4"], [1, "app-code"], [1, "bg-highlight", "px-2", "py-1", "rounded-border", "not-italic", "text-base"], [1, "leading-normal", "list-disc", "pl-8", "text-lg", "mb-4"], [1, "text-primary", "font-medium"]], template: function Documentation_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Documentation");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2);
      \u0275\u0275text(4, "Get Started");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 3);
      \u0275\u0275text(6, " Apollo is an application template for Angular and is distributed as a CLI project. Current versions is Angular v20 with PrimeNG v20. In case CLI is not installed already, use the command below to set it up. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "pre", 4)(8, "code");
      \u0275\u0275text(9, "npm install -g @angular/cli");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "p", 3);
      \u0275\u0275text(11, ' Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment. ');
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "pre", 4)(13, "code");
      \u0275\u0275text(14, "npm install\nng serve");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "p", 3);
      \u0275\u0275text(16, " The application should run at ");
      \u0275\u0275domElementStart(17, "i", 5);
      \u0275\u0275text(18, "http://localhost:4200/");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(19, " to view the application in your local environment. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 2);
      \u0275\u0275text(21, "Structure");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "p", 3);
      \u0275\u0275text(23, " Templates consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary for your application. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "ul", 6)(25, "li")(26, "span", 7);
      \u0275\u0275text(27, "src/app/layout");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(28, ": Main layout files, required.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "li")(30, "span", 7);
      \u0275\u0275text(31, "src/app/pages");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(32, ": Demo pages like Dashboard, optional.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "li")(34, "span", 7);
      \u0275\u0275text(35, "public/demo/");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(36, ": Public asssets used in demos, optional.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "li")(38, "span", 7);
      \u0275\u0275text(39, "public/layout/");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(40, ": Public asssets used for the main layout, required.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "li")(42, "span", 7);
      \u0275\u0275text(43, "src/assets/demo");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(44, ": Resources used in demos, optional.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "li")(46, "span", 7);
      \u0275\u0275text(47, "src/assets/layout");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(48, ": Resources of the main layout, required.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(49, "div", 2);
      \u0275\u0275text(50, "Menu");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "p", 3);
      \u0275\u0275text(52, " Main menu is defined at ");
      \u0275\u0275domElementStart(53, "span", 5);
      \u0275\u0275text(54, "src/app/layout/components/app.menu.ts");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(55, " file. Update the ");
      \u0275\u0275domElementStart(56, "i", 5);
      \u0275\u0275text(57, "model");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(58, " property to define your own menu items. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "div", 2);
      \u0275\u0275text(60, "Layout Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(61, "p", 3)(62, "span", 5);
      \u0275\u0275text(63, "src/app/layout/service/layout.service.ts");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(64, " is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "div", 2);
      \u0275\u0275text(66, "Tailwind CSS");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "p", 3);
      \u0275\u0275text(68, " The demo pages are developed with Tailwind CSS however the core application shell mainly uses custom CSS. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(69, "div", 2);
      \u0275\u0275text(70, "Variables");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(71, "p", 3);
      \u0275\u0275text(72, " CSS variables used in the template are derived from the default theme. Customize them through the CSS variables in ");
      \u0275\u0275domElementStart(73, "span", 5);
      \u0275\u0275text(74, "src/assets/layout/variables");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(75, ". ");
      \u0275\u0275domElementEnd()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Documentation, [{
    type: Component,
    args: [{
      selector: "app-documentation",
      standalone: true,
      imports: [CommonModule],
      template: `
        <div class="card">
            <div class="font-semibold text-2xl mb-4">Documentation</div>
            <div class="font-semibold text-xl mb-4">Get Started</div>
            <p class="text-lg mb-4">
                Apollo is an application template for Angular and is distributed
                as a CLI project. Current versions is Angular v20 with PrimeNG
                v20. In case CLI is not installed already, use the command below
                to set it up.
            </p>
            <pre class="app-code">
<code>npm install -g &#64;angular/cli</code></pre>
            <p class="text-lg mb-4">
                Once CLI is ready in your system, extract the contents of the
                zip file distribution, cd to the directory, install the
                libraries from npm and then execute "ng serve" to run the
                application in your local environment.
            </p>
            <pre class="app-code">
<code>npm install
ng serve</code></pre>

            <p class="text-lg mb-4">
                The application should run at
                <i
                    class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
                    >http://localhost:4200/</i
                >
                to view the application in your local environment.
            </p>

            <div class="font-semibold text-xl mb-4">Structure</div>
            <p class="text-lg mb-4">
                Templates consists of a couple folders, demos and layout have
                been separated so that you can easily remove what is not
                necessary for your application.
            </p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">src/app/layout</span>: Main layout files, required.</li>
                <li><span class="text-primary font-medium">src/app/pages</span>: Demo pages like Dashboard, optional.</li>
                <li><span class="text-primary font-medium">public/demo/</span>: Public asssets used in demos, optional.</li>
                <li><span class="text-primary font-medium">public/layout/</span>: Public asssets used for the main layout, required.</li>
                <li><span class="text-primary font-medium">src/assets/demo</span>: Resources used in demos, optional.</li>
                <li><span class="text-primary font-medium">src/assets/layout</span>: Resources of the main layout, required.</li>
            </ul>

            <div class="font-semibold text-xl mb-4">Menu</div>
            <p class="text-lg mb-4">
                Main menu is defined at
                <span
                    class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
                    >src/app/layout/components/app.menu.ts</span
                >
                file. Update the
                <i
                    class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
                    >model</i
                >
                property to define your own menu items.
            </p>

            <div class="font-semibold text-xl mb-4">Layout Service</div>
            <p class="text-lg mb-4">
                <span
                    class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
                    >src/app/layout/service/layout.service.ts</span
                >
                is a service that manages layout state changes, including dark
                mode, PrimeNG theme, menu modes, and states.
            </p>

            <div class="font-semibold text-xl mb-4">Tailwind CSS</div>
            <p class="text-lg mb-4">
                The demo pages are developed with Tailwind CSS however the core
                application shell mainly uses custom CSS.
            </p>

            <div class="font-semibold text-xl mb-4">Variables</div>
            <p class="text-lg mb-4">
                CSS variables used in the template are derived from the default
                theme. Customize them through the CSS variables in
                <span
                    class="bg-highlight px-2 py-1 rounded-border not-italic text-base"
                    >src/assets/layout/variables</span
                >.
            </p>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Documentation, { className: "Documentation", filePath: "src/app/pages/documentation/documentation.ts", lineNumber: 97 });
})();

export {
  Documentation
};
//# sourceMappingURL=chunk-X7KLJUX5.js.map
