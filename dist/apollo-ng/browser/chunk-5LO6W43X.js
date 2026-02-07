import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-KIZVEINR.js"),
    data: { breadcrumb: "Blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-NV4MWZ4G.js").then((c) => c.Chat),
    data: { breadcrumb: "Chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-6K4SKDEF.js").then((c) => c.Files),
    data: { breadcrumb: "Files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-3UZJR4RC.js"),
    data: { breadcrumb: "Mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-TMFZA65W.js").then((c) => c.TaskList),
    data: { breadcrumb: "Tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-BSX6KJ7H.js").then((c) => c.Kanban),
    data: { breadcrumb: "Kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-5LO6W43X.js.map
