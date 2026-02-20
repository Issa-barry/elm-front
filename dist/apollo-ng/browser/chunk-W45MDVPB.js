import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "Product Overview" },
    loadComponent: () => import("./chunk-TP4GFGVO.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "Product List" },
    loadComponent: () => import("./chunk-UUNZ7NTN.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "New Product" },
    loadComponent: () => import("./chunk-LGV5OJLW.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "Shopping Cart" },
    loadComponent: () => import("./chunk-NT3RZFMO.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "Checkout Form" },
    loadComponent: () => import("./chunk-GP4N44QN.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "Order History" },
    loadComponent: () => import("./chunk-WFGDS3CQ.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "Order Summary" },
    loadComponent: () => import("./chunk-4ZGJRTWS.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-W45MDVPB.js.map
