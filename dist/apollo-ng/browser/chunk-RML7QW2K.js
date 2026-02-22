import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZJK6EMCL.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "Inbox" },
        loadComponent: () => import("./chunk-XTXT26Q5.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "Detail" },
        loadComponent: () => import("./chunk-EX6B3WUQ.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "Compose" },
        loadComponent: () => import("./chunk-Z3RPDRCO.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "Archived" },
        loadComponent: () => import("./chunk-4EQU5CQX.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "Important" },
        loadComponent: () => import("./chunk-54PICLHE.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "Sent" },
        loadComponent: () => import("./chunk-Q5IJOTNW.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "Spam" },
        loadComponent: () => import("./chunk-N2FPRBRE.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "Starred" },
        loadComponent: () => import("./chunk-GMLLBSXL.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "Trash" },
        loadComponent: () => import("./chunk-QIU256XM.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-RML7QW2K.js.map
