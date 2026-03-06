import "./chunk-4MWRP73S.js";

// src/app/apps/blog/blog.routes.ts
var blog_routes_default = [
  {
    path: "list",
    loadComponent: () => import("./chunk-JXHSXNRM.js").then((c) => c.List),
    data: { breadcrumb: "list" }
  },
  {
    path: "detail",
    loadComponent: () => import("./chunk-2PAKAOZU.js").then((c) => c.Detail),
    data: { breadcrumb: "detail" }
  },
  {
    path: "edit",
    loadComponent: () => import("./chunk-3SQ6BDID.js").then((c) => c.Edit),
    data: { breadcrumb: "edit" }
  }
];
export {
  blog_routes_default as default
};
//# sourceMappingURL=chunk-6PMMGTRJ.js.map
