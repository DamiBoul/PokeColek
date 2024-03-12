import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';
import { LoginComponent } from './login/login.component';

import { AppModule } from './app.module';

export const routes: Routes = [
  { path: '', redirectTo: '/app.module', pathMatch: 'full' },
  { path: 'premiere-page', component: AppModule },
  { path: 'deuxieme-page', component: DeuxiemePageComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
