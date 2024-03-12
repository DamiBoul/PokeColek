import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { BadgeComponent } from './components/badge/badge.component';
const appRoutes: Routes = [
  {path: '',
  redirectTo: '/app.component',
  pathMatch : 'full'},
  { path: 'premiere-page', component: AppComponent },
  { path: 'deuxieme-page', component: DeuxiemePageComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    NavbarComponent,
   PremierePageComponent,
   DeuxiemePageComponent,
   LoginComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterOutlet, LigneDeReponseModule, BadgeComponent,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }