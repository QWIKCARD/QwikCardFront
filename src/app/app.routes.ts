import { Routes } from '@angular/router';
import { authGuard, authGuardActivate } from './system/core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'login',
        loadComponent:() =>import('./system/public/auth/auth.component')
    },
    {
        path:'register',
        canMatch:[],
        loadComponent:() =>import('./system/public/register/register.component')
    },
    
    {
        path:'admin',
       canActivate:[authGuard,authGuardActivate],
      loadComponent:()=> import("./system/private/panel.component"),
      children:[
        {
            path:'start',
           loadComponent:() =>import("./system/private/pages/start/start.component"),
        },
        {
            path:'users',
           loadComponent:() =>import("./system/private/pages/users/users.component"),
        },
        {
            path:'**',
            redirectTo:'start',
          },
      ]
    },
    {
        path:'**',
        redirectTo:'login'
    }
];
