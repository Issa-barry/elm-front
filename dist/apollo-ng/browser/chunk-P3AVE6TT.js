import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-2LWAAVX4.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "inbox" },
        loadComponent: () => import("./chunk-ALHKY7DV.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "detail" },
        loadComponent: () => import("./chunk-BSV7J62R.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "compose" },
        loadComponent: () => import("./chunk-OPW2AAH5.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "archived" },
        loadComponent: () => import("./chunk-CYO6RKW3.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "important" },
        loadComponent: () => import("./chunk-QG5P767M.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "sent" },
        loadComponent: () => import("./chunk-6BADFS6C.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "spam" },
        loadComponent: () => import("./chunk-7PYE6EBZ.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "starred" },
        loadComponent: () => import("./chunk-FYIPUU65.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "trash" },
        loadComponent: () => import("./chunk-QUZ2X2WX.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-P3AVE6TT.js.map
