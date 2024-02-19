import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LigneDeReponseComponent} from './ligne-de-reponse.component';
import { GreensquareComponent } from '../../greensquare/greensquare.component';
import { LogoComponent } from '../../logo/logo.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@NgModule({
  declarations: [LigneDeReponseComponent, GreensquareComponent, LogoComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports : [LigneDeReponseComponent, GreensquareComponent, LogoComponent, SidebarComponent]
})

export class LigneDeReponseModule { }