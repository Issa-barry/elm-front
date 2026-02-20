import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-VUCQCG3R.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "Inbox" },
        loadComponent: () => import("./chunk-NBMGBTJF.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "Detail" },
        loadComponent: () => import("./chunk-LVQK3MWO.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "Compose" },
        loadComponent: () => import("./chunk-2Z3ODJKK.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "Archived" },
        loadComponent: () => import("./chunk-MUSEFWRT.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "Important" },
        loadComponent: () => import("./chunk-AN5GZKXS.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "Sent" },
        loadComponent: () => import("./chunk-QZBMWZC5.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "Spam" },
        loadComponent: () => import("./chunk-6ULO5E6I.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "Starred" },
        loadComponent: () => import("./chunk-G3XH5GSD.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "Trash" },
        loadComponent: () => import("./chunk-7OB3WHJU.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-W43I3YI5.js.map
