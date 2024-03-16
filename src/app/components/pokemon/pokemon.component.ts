import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class Pokemon extends ElementCollek {
  override cat = "pokemon";
  idPok!: number;
  image!: string;
  type1!: string;
  type2!: string;
  gen!: number;
  stade!: number;
  taille!: number;
  poids!: number;
  talent!: Array<string>;

}
