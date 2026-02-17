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
    loadChildren: () => import("./chunk-XLDRVCGQ.js")
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-BM75XJ5X.js")
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-ZSWHYLDZ.js.map
