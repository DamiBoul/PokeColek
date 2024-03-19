import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';
import { LoginComponent } from './login/login.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { ObjetPageComponent } from './objet-page/objet-page.component';
import { LieuPageComponent } from './lieu-page/lieu-page.component';
import { CapPageComponent } from './cap-page/cap-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/premiere-page', pathMatch: 'full' },
  { path: 'premiere-page', component: PremierePageComponent },
  { path: 'deuxieme-page', component: DeuxiemePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings-page', component: SettingsPageComponent },
  { path: 'objet-page', component: ObjetPageComponent},
  { path: 'lieu-page', component: LieuPageComponent},
  { path: 'cap-page', component: CapPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
