import "./chunk-4MWRP73S.js";

// src/app/pages/contacts/contacts.routes.ts
var contacts_routes_default = [
  {
    path: "prestataires",
    loadChildren: () => import("./chunk-GAGQH6MJ.js"),
    data: { breadcrumb: "prestataires" }
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-INRVKYKQ.js"),
    data: { breadcrumb: "utilisateurs" }
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-V4SNEDHB.js.map
