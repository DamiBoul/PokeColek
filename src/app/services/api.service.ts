import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2';
  private readonly dailyPokemonList: string[] = [
    'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', // Ajoutez plus de Pokémon si nécessaire
    // Assurez-vous que la liste contient une sélection variée de Pokémon
  ];

  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des données du Pokémon:', error);
        return of(null);
      })
    );
  }

  getDailyPokemon(): Observable<any> {
    const randomIndex = Math.floor(Math.random() * this.dailyPokemonList.length);
    const randomPokemon = this.dailyPokemonList[randomIndex];
    return this.getPokemonByName(randomPokemon);
  }
}
