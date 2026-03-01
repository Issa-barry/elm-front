import "./chunk-4MWRP73S.js";

// src/app/pages/contacts/contacts.routes.ts
var contacts_routes_default = [
  {
    path: "prestataires",
    loadChildren: () => import("./chunk-55PWXG2A.js"),
    data: { breadcrumb: "prestataires" }
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-C4QIAYN2.js"),
    data: { breadcrumb: "utilisateurs" }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-GG4WM7J7.js.map
