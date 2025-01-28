import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:() =>import('./system/public/auth/auth.component')
    },
    {
        path:'register',
        loadComponent:() =>import('./system/public/register/register.component')
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
