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
    loadChildren: () => import("./chunk-D43N34BR.js")
  },
  {
    path: "utilisateurs",
    loadChildren: () => import("./chunk-75VIMYQU.js")
  },
  { path: "**", redirectTo: "/notfound" }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-VPBQTUCP.js.map
