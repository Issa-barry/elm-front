import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-RTGD5OM6.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "inbox" },
        loadComponent: () => import("./chunk-YKL42XOO.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "detail" },
        loadComponent: () => import("./chunk-GZDHEK6F.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "compose" },
        loadComponent: () => import("./chunk-IWXEGYL3.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "archived" },
        loadComponent: () => import("./chunk-HOGWQBHA.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "important" },
        loadComponent: () => import("./chunk-O56UJJNW.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "sent" },
        loadComponent: () => import("./chunk-6DXWCDQ7.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "spam" },
        loadComponent: () => import("./chunk-C5YNRR77.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "starred" },
        loadComponent: () => import("./chunk-XJ7HAUEC.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "trash" },
        loadComponent: () => import("./chunk-7B5EFKGC.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-Z32XW7IF.js.map
