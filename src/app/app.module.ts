import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegleComponent } from './regle/regle.component';
import { RouterModule, Routes } from '@angular/router';
import { PremierePageComponent } from './premiere-page/premiere-page.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';
import { LoginComponent } from './login/login.component';
import { LigneDeReponseModule } from "./components/ligne-de-reponse/ligne-de-reponse.module";
import { GreensquareComponent } from "./components/greensquare/greensquare.component";
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TabReponseComponent } from './components/tab-reponse/tab-reponse.component';
import { ObjetPageComponent } from './objet-page/objet-page.component';
import { LieuPageComponent } from './lieu-page/lieu-page.component';
import { CapPageComponent } from './cap-page/cap-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CollekComponent } from './components/collek/collek.component';
import { SettingService } from './services/settings-service.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const appRoutes: Routes = [
  {path: '',
  redirectTo: '/premiere-page',
  pathMatch : 'full'},
  { path: 'premiere-page', component: PremierePageComponent },
  { path: 'deuxieme-page', component: DeuxiemePageComponent },
  { path: 'login', component: LoginComponent },
  { path:'settings-page', component:SettingsPageComponent},
  { path: 'objet-page', component: ObjetPageComponent},
  { path: 'lieu-page', component: LieuPageComponent},
  { path: 'cap-page', component: CapPageComponent},
  { path: 'regle', component: RegleComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsPageComponent,
        PremierePageComponent,
        DeuxiemePageComponent,
        LoginComponent,
        ObjetPageComponent,
        LieuPageComponent,
        CapPageComponent,
         RegleComponent,
        SidebarComponent
    ],
    providers: [SettingService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        LigneDeReponseModule,
        TabReponseComponent,
        GreensquareComponent,
        CollekComponent,
        MatButtonModule
    ]
})
export class AppModule { }