import { Component } from '@angular/core';
import { Pokemon } from '../components/pokemon/pokemon.component';
import { POKEMONS } from '../components/mock-pokemon/mock-pokemon';

@Component({
  selector: 'app-cap-page',
  templateUrl: './cap-page.component.html',
  styleUrl: './cap-page.component.css'
})
export class CapPageComponent {

  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name); // fetch(requete) permet d'appeler l'api
    let pokemon = await response.json(); // variable.json() met la requete au format json

    //Utilisation du json comme un objet
    document.getElementById('Nom')!.innerHTML = pokemon.name;

    let p = new Pokemon();
    p.name = pokemon.name;

    POKEMONS.push(p);
  }
}
