import "./chunk-4MWRP73S.js";

// src/app/apps/blog/blog.routes.ts
var blog_routes_default = [
  {
    path: "list",
    loadComponent: () => import("./chunk-LPGWRKUN.js").then((c) => c.List),
    data: { breadcrumb: "List" }
  },
  {
    path: "detail",
    loadComponent: () => import("./chunk-CKDDT6GZ.js").then((c) => c.Detail),
    data: { breadcrumb: "Detail" }
  },
  {
    path: "edit",
    loadComponent: () => import("./chunk-Q7UCOZ3E.js").then((c) => c.Edit),
    data: { breadcrumb: "Edit" }
  }
];
export {
  blog_routes_default as default
};
//# sourceMappingURL=chunk-KIZVEINR.js.map
