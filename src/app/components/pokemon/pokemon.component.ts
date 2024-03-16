import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class Pokemon  {

  id!: number;
  name!: string;
  image!: string;
  type1!: string;
  type2!: string;
  gen!: number;
  stade!: number;
  taille!: number;
  poids!: number;
  talent!: Array<string>;

}
