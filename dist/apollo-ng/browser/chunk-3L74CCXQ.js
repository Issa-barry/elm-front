import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-I2GFFVWY.js"),
    data: { breadcrumb: "Blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-H5BXA4IM.js").then((c) => c.Chat),
    data: { breadcrumb: "Chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-L3QBUT2V.js").then((c) => c.Files),
    data: { breadcrumb: "Files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-WI7E7PG6.js"),
    data: { breadcrumb: "Mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-ABKOPFAB.js").then((c) => c.TaskList),
    data: { breadcrumb: "Tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-YJDS4YPK.js").then((c) => c.Kanban),
    data: { breadcrumb: "Kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-3L74CCXQ.js.map
