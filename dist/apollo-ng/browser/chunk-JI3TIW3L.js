import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-U7V3PRKS.js"),
    data: { breadcrumb: "blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-SDYDINV7.js").then((c) => c.Chat),
    data: { breadcrumb: "chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-UACLOHF6.js").then((c) => c.Files),
    data: { breadcrumb: "files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-Z32XW7IF.js"),
    data: { breadcrumb: "mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-URK46PDJ.js").then((c) => c.TaskList),
    data: { breadcrumb: "tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-W7VTKCZQ.js").then((c) => c.Kanban),
    data: { breadcrumb: "kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-JI3TIW3L.js.map
