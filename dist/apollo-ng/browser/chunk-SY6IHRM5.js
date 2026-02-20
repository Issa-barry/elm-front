import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-UJSDGQXU.js";

// src/app/pipes/money.pipe.ts
var MoneyPipe = class _MoneyPipe {
  transform(value, currency = "GNF", showSymbol = true) {
    if (value === null || value === void 0 || value === "") {
      return showSymbol ? "0 GNF" : "0";
    }
    const num = typeof value === "string" ? parseFloat(value) : value;
    if (isNaN(num)) {
      return showSymbol ? "0 GNF" : "0";
    }
    const rounded = Math.round(num);
    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "  ");
    const symbol = currency === "EUR" ? "\u20AC" : "GNF";
    return showSymbol ? `${formatted} ${symbol}` : formatted;
  }
  static \u0275fac = function MoneyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MoneyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "money", type: _MoneyPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoneyPipe, [{
    type: Pipe,
    args: [{
      name: "money",
      standalone: true,
      pure: true
    }]
  }], null, null);
})();

export {
  MoneyPipe
};
//# sourceMappingURL=chunk-SY6IHRM5.js.map
