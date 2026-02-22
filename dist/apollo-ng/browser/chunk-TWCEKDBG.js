import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-FFKHWDRL.js"),
    data: { breadcrumb: "Blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-XVOVLXU3.js").then((c) => c.Chat),
    data: { breadcrumb: "Chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-QU3AZ6O4.js").then((c) => c.Files),
    data: { breadcrumb: "Files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-RML7QW2K.js"),
    data: { breadcrumb: "Mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-E2TYQDAH.js").then((c) => c.TaskList),
    data: { breadcrumb: "Tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-KMXY4NJF.js").then((c) => c.Kanban),
    data: { breadcrumb: "Kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-TWCEKDBG.js.map
