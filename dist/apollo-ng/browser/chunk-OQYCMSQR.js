import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "Product Overview" },
    loadComponent: () => import("./chunk-RJECTWPU.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "Product List" },
    loadComponent: () => import("./chunk-JZK5H6II.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "New Product" },
    loadComponent: () => import("./chunk-5M5RBMVA.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "Shopping Cart" },
    loadComponent: () => import("./chunk-LIDM44JN.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "Checkout Form" },
    loadComponent: () => import("./chunk-FL43JAVT.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "Order History" },
    loadComponent: () => import("./chunk-ED4USTPD.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "Order Summary" },
    loadComponent: () => import("./chunk-Y3EGGKUA.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-OQYCMSQR.js.map
