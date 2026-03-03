import {Routes} from '@angular/router';

export default [
    {
        path: 'product-overview',
        data: { breadcrumb: 'product-overview' },
        loadComponent: () => import('./productoverview').then((c) => c.ProductOverview)
    },
    {
        path: 'product-list',
        data: { breadcrumb: 'product-list' },
        loadComponent: () => import('./productlist').then((c) => c.ProductList)
    },
    {
        path: 'new-product',
        data: { breadcrumb: 'new-product' },
        loadComponent: () => import('./newproduct').then((c) => c.NewProduct)
    },
    {
        path: 'shopping-cart',
        data: { breadcrumb: 'shopping-cart' },
        loadComponent: () => import('./shoppingcart').then((c) => c.ShoppingCart)
    },
    {
        path: 'checkout-form',
        data: { breadcrumb: 'checkout-form' },
        loadComponent: () => import('./checkoutform').then((c) => c.CheckoutForm)
    },
    {
        path: 'order-history',
        data: { breadcrumb: 'order-history' },
        loadComponent: () => import('./orderhistory').then((c) => c.OrderHistory)
    },
    {
        path: 'order-summary',
        data: { breadcrumb: 'order-summary' },
        loadComponent: () => import('./ordersummary').then((c) => c.OrderSummary)
    }
] as Routes;
