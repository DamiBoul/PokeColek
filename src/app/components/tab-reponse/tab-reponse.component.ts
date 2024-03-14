import { Component, Input, OnInit } from '@angular/core';
import { GreensquareComponent } from '../greensquare/greensquare.component';
import { POKEMONS } from '../mock-pokemon/mock-pokemon';
import { Pokemon } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-tab-reponse',
  standalone: true,
  imports: [GreensquareComponent],
  templateUrl: './tab-reponse.component.html',
  styleUrl: './tab-reponse.component.css'
})
export class TabReponseComponent implements OnInit{
  @Input() pokemonid: string;

  id: number = null;

  ngOnInit(): void {
    this.id = parseInt(this.pokemonid) - 1;
  }
}
