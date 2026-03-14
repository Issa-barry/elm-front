import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => import('.').then((c) => c.MailAppComponent),
        children: [
            { path: '', redirectTo: 'inbox', pathMatch: 'full' },
            {
                path: 'inbox',
                data: { breadcrumb: 'inbox' },
                loadComponent: () => import('./mail-inbox').then((c) => c.MailInboxComponent)
            },
            {
                path: 'detail/:id',
                data: { breadcrumb: 'detail' },
                loadComponent: () => import('./mail-detail').then((c) => c.MailDetailComponent)
            },
            {
                path: 'compose',
                data: { breadcrumb: 'compose' },
                loadComponent: () => import('./mail-compose').then((c) => c.MailComposeComponent)
            },
            {
                path: 'archived',
                data: { breadcrumb: 'archived' },
                loadComponent: () => import('./mail-archive').then((c) => c.MailArchiveComponent)
            },
            {
                path: 'important',
                data: { breadcrumb: 'important' },
                loadComponent: () => import('./mail-important').then((c) => c.MailImportantComponent)
            },
            {
                path: 'sent',
                data: { breadcrumb: 'sent' },
                loadComponent: () => import('./mail-sent').then((c) => c.MailSentComponent)
            },
            {
                path: 'spam',
                data: { breadcrumb: 'spam' },
                loadComponent: () => import('./mail-spam').then((c) => c.MailSpamComponent)
            },
            {
                path: 'starred',
                data: { breadcrumb: 'starred' },
                loadComponent: () => import('./mail-starred').then((c) => c.MailStarredComponent)
            },
            {
                path: 'trash',
                data: { breadcrumb: 'trash' },
                loadComponent: () => import('./mail-trash').then((c) => c.MailTrashComponent)
            }
        ]
    }
] as Routes;
