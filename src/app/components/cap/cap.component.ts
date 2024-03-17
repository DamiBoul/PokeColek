import { Component } from '@angular/core';

@Component({
  selector: 'app-cap',
  standalone: true,
  imports: [],
  templateUrl: '../pokemon/pokemon.component.css',
  styleUrl: '../pokemon/pokemon.component.css'
})
export class Cap {
  id!: number;
  name!: string ;
  type!: string;
  categorie!: string;
  precision!: number;
  pouvoir !: number;
  concours!: string;
  gen !: number;
  PP !: number;
}
