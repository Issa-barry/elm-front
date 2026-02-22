import "./chunk-4MWRP73S.js";

// src/app/apps/blog/blog.routes.ts
var blog_routes_default = [
  {
    path: "list",
    loadComponent: () => import("./chunk-QRDT2VYC.js").then((c) => c.List),
    data: { breadcrumb: "List" }
  },
  {
    path: "detail",
    loadComponent: () => import("./chunk-YGZZWVRA.js").then((c) => c.Detail),
    data: { breadcrumb: "Detail" }
  },
  {
    path: "edit",
    loadComponent: () => import("./chunk-SCIS7QQ7.js").then((c) => c.Edit),
    data: { breadcrumb: "Edit" }
  }
];
export {
  blog_routes_default as default
};
//# sourceMappingURL=chunk-FFKHWDRL.js.map
