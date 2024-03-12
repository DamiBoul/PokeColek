import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideClientHydration()]
};
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // Autres imports si nécessaire
  ],
  providers: [],
  // Autres configurations
})
export class AppRoutingModule { }
