import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-YKOQNNDA.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "Inbox" },
        loadComponent: () => import("./chunk-PGGY77DR.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "Detail" },
        loadComponent: () => import("./chunk-MKGS7NJY.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "Compose" },
        loadComponent: () => import("./chunk-HRGSMY5H.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "Archived" },
        loadComponent: () => import("./chunk-VE56G7CG.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "Important" },
        loadComponent: () => import("./chunk-MUVS2AY6.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "Sent" },
        loadComponent: () => import("./chunk-COTZCZIV.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "Spam" },
        loadComponent: () => import("./chunk-6MRCIN4K.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "Starred" },
        loadComponent: () => import("./chunk-6X4ZDJQD.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "Trash" },
        loadComponent: () => import("./chunk-OR3LKQ6L.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-WI7E7PG6.js.map
