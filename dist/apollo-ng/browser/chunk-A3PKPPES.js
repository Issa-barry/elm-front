import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-R4HAQLTC.js"),
    data: { breadcrumb: "blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-S6IHFILE.js").then((c) => c.Chat),
    data: { breadcrumb: "chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-2NRVBA2B.js").then((c) => c.Files),
    data: { breadcrumb: "files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-XKMQGNEP.js"),
    data: { breadcrumb: "mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-5LDD426Z.js").then((c) => c.TaskList),
    data: { breadcrumb: "tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-CE43UV7I.js").then((c) => c.Kanban),
    data: { breadcrumb: "kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-A3PKPPES.js.map
