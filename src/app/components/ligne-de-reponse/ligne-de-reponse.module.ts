import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LigneDeReponseComponent} from './ligne-de-reponse.component';
import { LogoComponent } from '../logo/logo.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@NgModule({
  declarations: [LigneDeReponseComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports : [LigneDeReponseComponent, LogoComponent]
})

export class LigneDeReponseModule { }