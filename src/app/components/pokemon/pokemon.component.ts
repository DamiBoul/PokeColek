import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})

/*La classe Pokémon représente un Pokémon. C'est un élément collectionnable.*/
export class Pokemon extends ElementCollek {
  override cat = "pokemon";
  idPok!: number;
  type1!: string;
  type2!: string;
  gen!: number;
  stade!: number;
  taille!: number;
  poids!: number;
  talent!: Array<string>;

}
