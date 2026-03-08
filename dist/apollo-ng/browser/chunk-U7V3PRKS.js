import "./chunk-4MWRP73S.js";

// src/app/apps/blog/blog.routes.ts
var blog_routes_default = [
  {
    path: "list",
    loadComponent: () => import("./chunk-MNQENBKR.js").then((c) => c.List),
    data: { breadcrumb: "list" }
  },
  {
    path: "detail",
    loadComponent: () => import("./chunk-QEHFXIII.js").then((c) => c.Detail),
    data: { breadcrumb: "detail" }
  },
  {
    path: "edit",
    loadComponent: () => import("./chunk-3LDLTKR5.js").then((c) => c.Edit),
    data: { breadcrumb: "edit" }
  }
];
export {
  blog_routes_default as default
};
//# sourceMappingURL=chunk-U7V3PRKS.js.map
