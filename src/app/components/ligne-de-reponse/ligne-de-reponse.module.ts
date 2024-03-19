import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LigneDeReponseComponent} from './ligne-de-reponse.component';
import { LogoComponent } from '../logo/logo.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../pokemon/pokemon.component';

@NgModule({
  declarations: [LigneDeReponseComponent, LogoComponent],
  imports: [
    CommonModule, FormsModule, Pokemon
  ],
  exports : [LigneDeReponseComponent, LogoComponent]
})

export class LigneDeReponseModule { }