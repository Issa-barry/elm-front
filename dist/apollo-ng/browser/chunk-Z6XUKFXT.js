import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "Product Overview" },
    loadComponent: () => import("./chunk-RC5PQ3Q4.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "Product List" },
    loadComponent: () => import("./chunk-FW5GAQDB.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "New Product" },
    loadComponent: () => import("./chunk-UPRB52H3.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "Shopping Cart" },
    loadComponent: () => import("./chunk-HMAJC4MF.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "Checkout Form" },
    loadComponent: () => import("./chunk-XJ74NOUX.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "Order History" },
    loadComponent: () => import("./chunk-6D6NKWCK.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "Order Summary" },
    loadComponent: () => import("./chunk-HWSADZCP.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-Z6XUKFXT.js.map
