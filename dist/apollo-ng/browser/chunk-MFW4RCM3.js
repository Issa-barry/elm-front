// src/app/models/country.model.ts
function buildCountry(name, code, dialCode) {
  return {
    name,
    code,
    dialCode,
    flag: `https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`
  };
}
var COUNTRIES = [
  // Afrique de l'Ouest (Union du Fleuve Mano)
  buildCountry("Guin\xE9e", "GN", "+224"),
  buildCountry("Sierra Leone", "SL", "+232"),
  buildCountry("Liberia", "LR", "+231"),
  buildCountry("C\xF4te d'Ivoire", "CI", "+225"),
  // Autres pays de l'Afrique de l'Ouest
  buildCountry("S\xE9n\xE9gal", "SN", "+221"),
  buildCountry("Mali", "ML", "+223"),
  buildCountry("Burkina Faso", "BF", "+226"),
  buildCountry("Niger", "NE", "+227"),
  buildCountry("Togo", "TG", "+228"),
  buildCountry("B\xE9nin", "BJ", "+229"),
  buildCountry("Ghana", "GH", "+233"),
  buildCountry("Nigeria", "NG", "+234"),
  buildCountry("Gambie", "GM", "+220"),
  buildCountry("Guin\xE9e-Bissau", "GW", "+245"),
  buildCountry("Cap-Vert", "CV", "+238"),
  buildCountry("Mauritanie", "MR", "+222"),
  // Europe
  buildCountry("France", "FR", "+33"),
  buildCountry("Belgique", "BE", "+32"),
  buildCountry("Suisse", "CH", "+41"),
  buildCountry("Luxembourg", "LU", "+352"),
  // Amérique du Nord
  buildCountry("Canada", "CA", "+1"),
  buildCountry("\xC9tats-Unis", "US", "+1")
];

export {
  COUNTRIES
};
//# sourceMappingURL=chunk-MFW4RCM3.js.map
