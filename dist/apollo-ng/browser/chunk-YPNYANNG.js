import "./chunk-4MWRP73S.js";

// src/app/pages/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "product-overview",
    data: { breadcrumb: "Product Overview" },
    loadComponent: () => import("./chunk-YKNKLU6K.js").then((c) => c.ProductOverview)
  },
  {
    path: "product-list",
    data: { breadcrumb: "Product List" },
    loadComponent: () => import("./chunk-BLXVKQBL.js").then((c) => c.ProductList)
  },
  {
    path: "new-product",
    data: { breadcrumb: "New Product" },
    loadComponent: () => import("./chunk-HHTCHVGP.js").then((c) => c.NewProduct)
  },
  {
    path: "shopping-cart",
    data: { breadcrumb: "Shopping Cart" },
    loadComponent: () => import("./chunk-4OVFHIVE.js").then((c) => c.ShoppingCart)
  },
  {
    path: "checkout-form",
    data: { breadcrumb: "Checkout Form" },
    loadComponent: () => import("./chunk-Z4ISKDH7.js").then((c) => c.CheckoutForm)
  },
  {
    path: "order-history",
    data: { breadcrumb: "Order History" },
    loadComponent: () => import("./chunk-WWUMJQ7P.js").then((c) => c.OrderHistory)
  },
  {
    path: "order-summary",
    data: { breadcrumb: "Order Summary" },
    loadComponent: () => import("./chunk-NMOTE7MK.js").then((c) => c.OrderSummary)
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-YPNYANNG.js.map
