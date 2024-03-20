import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon.component';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-lieu',
  standalone: true,
  imports: [],
  templateUrl: '../pokemon/pokemon.component.css',
  styleUrl: '../pokemon/pokemon.component.css'
})

/*La classe lieu représente un lieu*/
export class Lieu extends ElementCollek {

  idLieu!: number;
  override cat = "lieu";
  region!: string; //Région où se trouve le lieu
  type!: string; //Type de lieu (ville, route, ...)
  pokemon!: Array<Pokemon>; //Liste des Pokémons que l'on peut trouver dans ce lieu
  encounter!: Array<string>; //Moyen de rencontrer des Pokémons (cannes, herbes, ...)

}
