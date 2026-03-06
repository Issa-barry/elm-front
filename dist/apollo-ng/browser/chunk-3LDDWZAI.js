import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-6PMMGTRJ.js"),
    data: { breadcrumb: "blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-W5SBMWAX.js").then((c) => c.Chat),
    data: { breadcrumb: "chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-LNTCNCCS.js").then((c) => c.Files),
    data: { breadcrumb: "files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-6HA3WUUQ.js"),
    data: { breadcrumb: "mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-AMGTHCAM.js").then((c) => c.TaskList),
    data: { breadcrumb: "tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-SRHRWTKO.js").then((c) => c.Kanban),
    data: { breadcrumb: "kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-3LDDWZAI.js.map
