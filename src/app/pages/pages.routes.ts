import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { Invoice } from './invoice/invoice';
import { AboutUs } from './aboutus/aboutus';
import { Help } from './help/help';
import { Faq } from './faq/faq';
import { ContactUs } from './contactus/contactus';

export default [
    { path: 'documentation', component: Documentation, data: { breadcrumb: 'documentation' }},
    { path: 'crud', component: Crud, data: { breadcrumb: 'crud' }},
    { path: 'empty', component: Empty, data: { breadcrumb: 'empty' }},
    { path: 'invoice', component: Invoice, data: { breadcrumb: 'invoice' }},
    { path: 'aboutus', component: AboutUs, data: { breadcrumb: 'aboutus' }},
    { path: 'help', component: Help, data: { breadcrumb: 'help' }},
    { path: 'faq', component: Faq, data: { breadcrumb: 'faq' }},
    { path: 'contact', component: ContactUs, data: { breadcrumb: 'contact' }},
    { path: '**', redirectTo: '/notfound' }
] as Routes;
