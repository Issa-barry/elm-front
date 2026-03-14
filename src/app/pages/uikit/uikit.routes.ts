import { Routes } from '@angular/router';

export default [
    { path: 'button', data: { breadcrumb: 'button' }, loadComponent: () => import('./buttondemo').then((c) => c.ButtonDemo) },
    { path: 'charts', data: { breadcrumb: 'charts' }, loadComponent: () => import('./chartdemo').then((c) => c.ChartDemo) },
    { path: 'file', data: { breadcrumb: 'file' }, loadComponent: () => import('./filedemo').then((c) => c.FileDemo) },
    { path: 'formlayout', data: { breadcrumb: 'formlayout' }, loadComponent: () => import('./formlayoutdemo').then((c) => c.FormLayoutDemo) },
    { path: 'input', data: { breadcrumb: 'input' }, loadComponent: () => import('./inputdemo').then((c) => c.InputDemo) },
    { path: 'list', data: { breadcrumb: 'list' }, loadComponent: () => import('./listdemo').then((c) => c.ListDemo) },
    { path: 'media', data: { breadcrumb: 'media' }, loadComponent: () => import('./mediademo').then((c) => c.MediaDemo) },
    { path: 'message', data: { breadcrumb: 'message' }, loadComponent: () => import('./messagesdemo').then((c) => c.MessagesDemo) },
    { path: 'misc', data: { breadcrumb: 'misc' }, loadComponent: () => import('./miscdemo').then((c) => c.MiscDemo) },
    { path: 'panel', data: { breadcrumb: 'panel' }, loadComponent: () => import('./panelsdemo').then((c) => c.PanelsDemo) },
    { path: 'timeline', data: { breadcrumb: 'timeline' }, loadComponent: () => import('./timelinedemo').then((c) => c.TimelineDemo) },
    { path: 'table', data: { breadcrumb: 'table' }, loadComponent: () => import('./tabledemo').then((c) => c.TableDemo) },
    { path: 'overlay', data: { breadcrumb: 'overlay' }, loadComponent: () => import('./overlaydemo').then((c) => c.OverlayDemo) },
    { path: 'tree', data: { breadcrumb: 'tree' }, loadComponent: () => import('./treedemo').then((c) => c.TreeDemo) },
    { path: 'menu', data: { breadcrumb: 'menu' }, loadComponent: () => import('./menudemo').then((c) => c.MenuDemo) },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
