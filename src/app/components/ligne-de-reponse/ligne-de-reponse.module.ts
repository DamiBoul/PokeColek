import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LigneDeReponseComponent} from './ligne-de-reponse.component';



@NgModule({
  declarations: [LigneDeReponseComponent],
  imports: [
    CommonModule
  ],
  exports : [LigneDeReponseComponent]
})
export class LigneDeReponseModule { }
