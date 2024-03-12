import { NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
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
