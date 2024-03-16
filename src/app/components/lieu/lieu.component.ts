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
export class Lieu extends ElementCollek {

  idLieu!: number;
  override cat = "lieu";
  region!: string;
  gen!: number;
  pokemon!: Array<Pokemon>;
  encounter!: Array<string>;

}
