import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { GreensquareComponent } from './components/greensquare/greensquare.component';
import { Pokemon } from './components/pokemon/pokemon.component';
import { POKEMONS } from './components/mock-pokemon/mock-pokemon';
import { BadgeComponent } from './components/badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LigneDeReponseModule, BadgeComponent, GreensquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Napoleon';
  spectre="";
  type = ["acier", "combat", "dragon", "eau", "electrik", "fee", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "tenebres", "vol"];

  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name); // fetch(requete) permet d'appeler l'api
    let pokemon = await response.json(); // variable.json() met la requete au format json

    //Utilisation du json comme un objet
    this.poke_caracteristics(pokemon);
  }

  async poke_caracteristics(poke: any): Promise<void>{
    let response = await fetch(poke.species.url);
    let espece = await response.json();

    let pokemon = new Pokemon();
    
    //Recherche du nom français du pokemon parmis toutes les langues
    espece.names.forEach(function(element: any) {
      if(element.language.name == "fr")
          pokemon.name = element.name;
    });

    pokemon.taille = poke.height * 10;
    pokemon.poids = poke.weight / 10;

    response = await fetch(poke.types[0]);
    let type = await response.json();

    type.names.forEach(function(element: any) {
      if(element.language.name == 'fr'){
        pokemon.type1 = element.name;
      }
    });

    if(poke.types.length == 2){
      response = await fetch(poke.types[1]);
      type = await response.json();

      type.names.forEach(function(element: any) {
        if(element.language.name == 'fr'){
          pokemon.type2 = element.name;
        }
      });
    }

    pokemon.image = poke.sprites.front_default;

    pokemon.id = poke.id;

    response = await fetch(espece.generation.url);
    let generation = await response.json();

    pokemon.gen = generation.id;

    let talent;

    for(let a of poke.abilities){
      response = await fetch(a.ability.url);
      talent = await response.json();

      talent.names.forEach(function(element: any) {
        if(element.language.name == 'fr')
          pokemon.talent.push(element.name);
      });
    }

    POKEMONS.push(pokemon);
  }
}
