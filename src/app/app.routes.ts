import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/premiere-page', pathMatch: 'full' },
  { path: 'premiere-page', component: PremierePageComponent },
  { path: 'deuxieme-page', component: DeuxiemePageComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
