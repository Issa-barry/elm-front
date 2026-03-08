import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "product-overview" },
    loadComponent: () => import("./chunk-QE5VCWWW.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "product-list" },
    loadComponent: () => import("./chunk-MPVJTATI.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "new-product" },
    loadComponent: () => import("./chunk-BHH62LPA.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "shopping-cart" },
    loadComponent: () => import("./chunk-5IPM4QHM.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "checkout-form" },
    loadComponent: () => import("./chunk-AYCJK47U.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "order-history" },
    loadComponent: () => import("./chunk-TDVU2T4U.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "order-summary" },
    loadComponent: () => import("./chunk-P375AWN2.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-PTUNQKAI.js.map
