import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-ANDF7WAC.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "inbox" },
        loadComponent: () => import("./chunk-OZCRXJF6.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "detail" },
        loadComponent: () => import("./chunk-EL4AJCPS.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "compose" },
        loadComponent: () => import("./chunk-AYANY7RG.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "archived" },
        loadComponent: () => import("./chunk-BUGNTIBD.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "important" },
        loadComponent: () => import("./chunk-UDEDVK3B.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "sent" },
        loadComponent: () => import("./chunk-D6NOUOGP.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "spam" },
        loadComponent: () => import("./chunk-P73TU6YD.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "starred" },
        loadComponent: () => import("./chunk-2YP5I3ZU.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "trash" },
        loadComponent: () => import("./chunk-BXYJLEQ5.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-GR6SYDGZ.js.map
