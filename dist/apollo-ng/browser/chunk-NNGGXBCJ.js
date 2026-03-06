import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-TU2LQ4CX.js"),
    data: { breadcrumb: "blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-6X3XGQAH.js").then((c) => c.Chat),
    data: { breadcrumb: "chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-AVO4LE44.js").then((c) => c.Files),
    data: { breadcrumb: "files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-YHQGJ2RX.js"),
    data: { breadcrumb: "mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-2ZLLLJBP.js").then((c) => c.TaskList),
    data: { breadcrumb: "tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-KMIE2FF3.js").then((c) => c.Kanban),
    data: { breadcrumb: "kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-NNGGXBCJ.js.map
