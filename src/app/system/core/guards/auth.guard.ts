import { isPlatformBrowser } from "@angular/common";
import { PLATFORM_ID, inject } from "@angular/core";
import { CanActivate, CanActivateFn, CanMatch, CanMatchFn, GuardResult,MaybeAsync, Router } from "@angular/router";




export const authGuard: CanMatchFn = (route, segments) => {
    const platform = inject(PLATFORM_ID);
    const router = inject(Router);
  
    // Verifica si está en el navegador
    if (isPlatformBrowser(platform)) {
      const isLoggedIn = localStorage.getItem("login");
  
      if (isLoggedIn) {
        return true; // Usuario autenticado
      } else {
        return router.createUrlTree(['/login']); // Redirigir al login
      }
    }
  
    // Si no es en el navegador, redirigir al login
    return router.createUrlTree(['/login']);
  };
  export const authGuardActivate: CanActivateFn = (route, state) => {
    const platform = inject(PLATFORM_ID);
    const router = inject(Router);
  
    if (isPlatformBrowser(platform)) {
      const isLoggedIn = localStorage.getItem("login");
  
      if (isLoggedIn) {
        return true; // Permite el acceso
      } else {
        return router.createUrlTree(['/login']); // Redirige al login
      }
    }
  
    return router.createUrlTree(['/login']); // En caso de SSR, deniega el acceso
  };