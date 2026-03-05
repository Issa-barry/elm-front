import "./chunk-4MWRP73S.js";

// src/app/apps/mail/mail.routes.ts
var mail_routes_default = [
  {
    path: "",
    loadComponent: () => import("./chunk-BWMDNKS5.js").then((c) => c.MailAppComponent),
    children: [
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      {
        path: "inbox",
        data: { breadcrumb: "inbox" },
        loadComponent: () => import("./chunk-MDZSYIEF.js").then((c) => c.MailInboxComponent)
      },
      {
        path: "detail/:id",
        data: { breadcrumb: "detail" },
        loadComponent: () => import("./chunk-R3VP3HLV.js").then((c) => c.MailDetailComponent)
      },
      {
        path: "compose",
        data: { breadcrumb: "compose" },
        loadComponent: () => import("./chunk-PCCTL6WV.js").then((c) => c.MailComposeComponent)
      },
      {
        path: "archived",
        data: { breadcrumb: "archived" },
        loadComponent: () => import("./chunk-RUXM5MGF.js").then((c) => c.MailArchiveComponent)
      },
      {
        path: "important",
        data: { breadcrumb: "important" },
        loadComponent: () => import("./chunk-E27NJF7M.js").then((c) => c.MailImportantComponent)
      },
      {
        path: "sent",
        data: { breadcrumb: "sent" },
        loadComponent: () => import("./chunk-6C5XT5NB.js").then((c) => c.MailSentComponent)
      },
      {
        path: "spam",
        data: { breadcrumb: "spam" },
        loadComponent: () => import("./chunk-NXET7PCM.js").then((c) => c.MailSpamComponent)
      },
      {
        path: "starred",
        data: { breadcrumb: "starred" },
        loadComponent: () => import("./chunk-CXOMWNEI.js").then((c) => c.MailStarredComponent)
      },
      {
        path: "trash",
        data: { breadcrumb: "trash" },
        loadComponent: () => import("./chunk-S52N6MXL.js").then((c) => c.MailTrashComponent)
      }
    ]
  }
];
export {
  mail_routes_default as default
};
//# sourceMappingURL=chunk-33VWJGH2.js.map
