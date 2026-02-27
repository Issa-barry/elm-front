import { Routes } from '@angular/router';

export default [
    {
        path: 'blog',
        loadChildren: () => import('./blog/blog.routes'),
        data: { breadcrumb: 'blog' }
    },
    {
        path: 'chat',
        loadComponent: () => import('./chat').then((c) => c.Chat),
        data: { breadcrumb: 'chat' }
    },
    {
        path: 'files',
        loadComponent: () => import('./files').then((c) => c.Files),
        data: { breadcrumb: 'files' }
    },
    {
        path: 'mail',
        loadChildren: () => import('./mail/mail.routes'),
        data: { breadcrumb: 'mail' }
    },
    {
        path: 'tasklist',
        loadComponent: () => import('./tasklist').then((c) => c.TaskList),
        data: { breadcrumb: 'tasklist' }
    },
    {
        path: 'kanban',
        loadComponent: () => import('./kanban').then((c) => c.Kanban),
        data: { breadcrumb: 'kanban' }
    }
] as Routes;
