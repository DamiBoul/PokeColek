import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-lieu',
  standalone: true,
  imports: [],
  templateUrl: '../pokemon/pokemon.component.css',
  styleUrl: '../pokemon/pokemon.component.css'
})
export class Lieu {

  id!: number;
  name!: string;
  region!: string;
  gen!: number;
  pokemon!: Array<Pokemon>;
  encounter!: Array<string>;

}
