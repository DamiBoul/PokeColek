import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deuxieme-page',
  templateUrl: './deuxieme-page.component.html',
  styleUrls: ['./deuxieme-page.component.css']
})

/*Collection Pokémon*/
export class DeuxiemePageComponent {
  pokemon: any;
  guessedPokemonName: string = '';
  showResult: boolean = false;
  correctGuess: boolean = false;

}
