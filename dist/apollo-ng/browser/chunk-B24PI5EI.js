import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "product-overview" },
    loadComponent: () => import("./chunk-M4DDIN2S.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "product-list" },
    loadComponent: () => import("./chunk-XY5SUE6T.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "new-product" },
    loadComponent: () => import("./chunk-NJEDLY6K.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "shopping-cart" },
    loadComponent: () => import("./chunk-QAI44E64.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "checkout-form" },
    loadComponent: () => import("./chunk-EHOPXDVU.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "order-history" },
    loadComponent: () => import("./chunk-V2OJBRRC.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "order-summary" },
    loadComponent: () => import("./chunk-PVSKZ33V.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-B24PI5EI.js.map
