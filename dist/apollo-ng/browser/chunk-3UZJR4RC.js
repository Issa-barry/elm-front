import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-G5O3FVGH.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "Inbox" },
        loadComponent: () => import("./chunk-YEI6CKD3.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "Detail" },
        loadComponent: () => import("./chunk-T3F3B6X4.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "Compose" },
        loadComponent: () => import("./chunk-HVRZMP2I.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "Archived" },
        loadComponent: () => import("./chunk-GLINDYUJ.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "Important" },
        loadComponent: () => import("./chunk-O3FQVL75.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "Sent" },
        loadComponent: () => import("./chunk-QH62N7XT.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "Spam" },
        loadComponent: () => import("./chunk-4K35Z5SO.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "Starred" },
        loadComponent: () => import("./chunk-ZVACWF2Y.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "Trash" },
        loadComponent: () => import("./chunk-ZQEOC76J.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-3UZJR4RC.js.map
