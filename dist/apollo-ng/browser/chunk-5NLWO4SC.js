import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "product-overview" },
    loadComponent: () => import("./chunk-JI2TPOJZ.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "product-list" },
    loadComponent: () => import("./chunk-IZQGEOG2.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "new-product" },
    loadComponent: () => import("./chunk-RUXBTSVL.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "shopping-cart" },
    loadComponent: () => import("./chunk-FBP5HI6Z.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "checkout-form" },
    loadComponent: () => import("./chunk-NFEM7PPG.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "order-history" },
    loadComponent: () => import("./chunk-43LLTIL2.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "order-summary" },
    loadComponent: () => import("./chunk-JWAIGYK2.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-5NLWO4SC.js.map
