import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
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
    // Vérifiez s'il existe un Pokémon enregistré dans le localStorage pour aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    let dailyPokemon = localStorage.getItem(`dailyPokemon-${today}`);

    if (dailyPokemon) {
      // S'il existe, renvoyez-le
      return of(JSON.parse(dailyPokemon));
} else {
      // Sinon, générez-en un nouveau
      const randomIndex = Math.floor(Math.random() * this.dailyPokemonList.length);
      const randomPokemon = this.dailyPokemonList[randomIndex];
      return this.getPokemonByName(randomPokemon).pipe(
        tap(pokemon => {
          if (pokemon) {
            // Lorsque vous obtenez le Pokémon, enregistrez-le dans le localStorage
            localStorage.setItem(`dailyPokemon-${today}`, JSON.stringify(pokemon));
          }
        })
      );
    }
  }
}