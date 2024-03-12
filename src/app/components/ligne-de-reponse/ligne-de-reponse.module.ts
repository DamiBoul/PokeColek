import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LigneDeReponseComponent} from './ligne-de-reponse.component';
import { LogoComponent } from '../logo/logo.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [LigneDeReponseComponent, LogoComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports : [LigneDeReponseComponent, LogoComponent, SidebarComponent]
})

export class LigneDeReponseModule { }