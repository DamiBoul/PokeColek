import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.css'
})
export class Objet extends ElementCollek{
  override cat = "objet";
  idObj!: number;
  cost!: number ;
  flingpower !: number ;
  holdable !: boolean ;
  categorie !: string ;
  gen !: number ;
}
