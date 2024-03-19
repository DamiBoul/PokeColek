import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deuxieme-page',
  templateUrl: './deuxieme-page.component.html',
  styleUrls: ['./deuxieme-page.component.css']
})
export class DeuxiemePageComponent implements OnInit {
  pokemon: any;
  guessedPokemonName: string = '';
  showResult: boolean = false;
  correctGuess: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadDailyPokemon();
  }

  loadDailyPokemon(): void {
    this.apiService.getDailyPokemon().subscribe(
      (data) => {
        this.pokemon = data;
      },
      (error) => {
        console.error('Erreur lors du chargement du Pokémon quotidien :', error);
      }
    );
  }

  checkGuess(): void {
    this.showResult = true;
    if (this.guessedPokemonName.trim().toLowerCase() === this.pokemon.name.toLowerCase()) {
      this.correctGuess = true;
    } else {
      this.correctGuess = false;
    }
  }
}
