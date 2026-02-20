import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-UJSDGQXU.js";

// src/app/pipes/phone-format.pipe.ts
var PhoneFormatPipe = class _PhoneFormatPipe {
  transform(value, country = "GN") {
    if (!value)
      return "";
    let cleaned = value.replace(/\D/g, "");
    switch (country) {
      /* ======================
         🇬🇳 GUINÉE
         +224 XX XX XX XX
      ======================*/
      case "GN":
        if (cleaned.startsWith("224")) {
          cleaned = "+" + cleaned;
        } else if (cleaned.length === 9) {
          cleaned = "+224" + cleaned;
        }
        return cleaned.replace(/(\+224)(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      /* ======================
         🇫🇷 FRANCE
         0X XX XX XX XX
      ======================*/
      case "FR":
        if (cleaned.startsWith("33")) {
          cleaned = "0" + cleaned.substring(2);
        }
        return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      /* ======================
         🇸🇱 SIERRA LEONE
         +232 XX XXX XXX
      ======================*/
      case "SL":
        if (cleaned.startsWith("232")) {
          cleaned = "+" + cleaned;
        } else if (cleaned.length === 8) {
          cleaned = "+232" + cleaned;
        }
        return cleaned.replace(/(\+232)(\d{2})(\d{3})(\d{3})/, "$1 $2 $3 $4");
      /* ======================
         🇸🇳 SÉNÉGAL
         +221 XX XXX XX XX
      ======================*/
      case "SN":
        if (cleaned.startsWith("221")) {
          cleaned = "+" + cleaned;
        } else if (cleaned.length === 9) {
          cleaned = "+221" + cleaned;
        }
        return cleaned.replace(/(\+221)(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      /* ======================
         🇨🇮 CÔTE D'IVOIRE
         +225 XX XX XX XX XX
         (10 chiffres nationaux)
      ======================*/
      case "CI":
        if (cleaned.startsWith("225")) {
          cleaned = "+" + cleaned;
        } else if (cleaned.length === 10) {
          cleaned = "+225" + cleaned;
        }
        return cleaned.replace(/(\+225)(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5 $6");
      /* ======================
         🌍 INTERNATIONAL
      ======================*/
      case "INT":
        if (!cleaned.startsWith("+")) {
          cleaned = "+" + cleaned;
        }
        return cleaned.replace(/(\+\d{1,3})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
      default:
        return value;
    }
  }
  static \u0275fac = function PhoneFormatPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneFormatPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "phoneFormat", type: _PhoneFormatPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneFormatPipe, [{
    type: Pipe,
    args: [{
      name: "phoneFormat",
      standalone: true
    }]
  }], null, null);
})();

export {
  PhoneFormatPipe
};
//# sourceMappingURL=chunk-BW7WZ6GP.js.map
