import "./chunk-4MWRP73S.js";

// src/app/pages/contacts/contacts.routes.ts
var contacts_routes_default = [
  // {
  //     path: '',
  //     component: PrestateursListe,
  //     canActivate: [authorizationGuard],
  //     data: { permissions: ['prestataires.read'] },
  // },
  {
    path: "prestateurs",
    loadChildren: () => import("./chunk-G7RIR5IN.js")
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-W5QU5KKY.js")
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-E2FMUVZK.js.map
