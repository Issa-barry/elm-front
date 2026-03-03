import { Routes } from '@angular/router';
import { Access } from './access';
 import { Error } from './error';
import { Register } from './register';
import { ForgotPassword } from './forgotpassword';
import { NewPassword } from './newpassword';
import { Verification } from './verification';
import { LockScreen } from './lockscreen';
import { Login } from './login/login';
import { Login2 } from './login2/login2';
import { Login3 } from './login3/login3';
import { Login4 } from './login4/login4';

export default [
    { path: 'access', component: Access, data: { breadcrumb: 'access' }},
    { path: 'error', component: Error, data: { breadcrumb: 'error' }},
    { path: 'login', component: Login, data: { breadcrumb: 'login' }},
    { path: 'login2', component: Login2, data: { breadcrumb: 'login2' }},
    { path: 'login3', component: Login3, data: { breadcrumb: 'login3' }},
     { path: 'login4', component: Login4, data: { breadcrumb: 'login4' }},
    { path: 'register', component: Register, data: { breadcrumb: 'register' }},
    { path: 'forgotpassword', component: ForgotPassword, data: { breadcrumb: 'forgotpassword' }},
    { path: 'newpassword', component: NewPassword, data: { breadcrumb: 'newpassword' }},
    { path: 'verification', component: Verification, data: { breadcrumb: 'verification' }},
    { path: 'lockscreen', component: LockScreen, data: { breadcrumb: 'lockscreen' }}
] as Routes;
