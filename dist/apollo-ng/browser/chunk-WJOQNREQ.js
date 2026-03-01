import "./chunk-4MWRP73S.js";

// src/app/apps/apps.routes.ts
var apps_routes_default = [
  {
    path: "blog",
    loadChildren: () => import("./chunk-Z7AGYCI7.js"),
    data: { breadcrumb: "blog" }
  },
  {
    path: "chat",
    loadComponent: () => import("./chunk-PEDKQNLJ.js").then((c) => c.Chat),
    data: { breadcrumb: "chat" }
  },
  {
    path: "files",
    loadComponent: () => import("./chunk-AB23IUOZ.js").then((c) => c.Files),
    data: { breadcrumb: "files" }
  },
  {
    path: "mail",
    loadChildren: () => import("./chunk-4J33GF54.js"),
    data: { breadcrumb: "mail" }
  },
  {
    path: "tasklist",
    loadComponent: () => import("./chunk-GIWFD26V.js").then((c) => c.TaskList),
    data: { breadcrumb: "tasklist" }
  },
  {
    path: "kanban",
    loadComponent: () => import("./chunk-MHMKJPPJ.js").then((c) => c.Kanban),
    data: { breadcrumb: "kanban" }
  }
];
export {
  apps_routes_default as default
};
//# sourceMappingURL=chunk-WJOQNREQ.js.map
