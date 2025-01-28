import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './system/core/interceptors/error.interceptor';
import { tokenInterceptor } from './system/core/interceptors/token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
   //provideZoneChangeDetection({ eventCoalescing: true }), 
   provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(), withInterceptors([errorInterceptor,tokenInterceptor])), provideAnimationsAsync()
  ]
};
