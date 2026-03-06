import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-OJZOKJ53.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "inbox" },
        loadComponent: () => import("./chunk-CSVTL3TI.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "detail" },
        loadComponent: () => import("./chunk-Z764Z7DJ.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "compose" },
        loadComponent: () => import("./chunk-TZRI2UPD.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "archived" },
        loadComponent: () => import("./chunk-5EU5PO7X.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "important" },
        loadComponent: () => import("./chunk-J2QGXATZ.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "sent" },
        loadComponent: () => import("./chunk-6PT56LOK.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "spam" },
        loadComponent: () => import("./chunk-CBVYJSM5.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "starred" },
        loadComponent: () => import("./chunk-KUHL6TPZ.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "trash" },
        loadComponent: () => import("./chunk-L42HWEK4.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-YHQGJ2RX.js.map
