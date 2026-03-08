import "./chunk-4MWRP73S.js";

// src/app/pages/contacts/contacts.routes.ts
var contacts_routes_default = [
  {
    path: "prestataires",
    loadChildren: () => import("./chunk-VGOISDDA.js"),
    data: { breadcrumb: "prestataires" }
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-6PYPWLP7.js"),
    data: { breadcrumb: "utilisateurs" }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-W46GYU5Q.js.map
