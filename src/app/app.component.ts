import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { GreensquareComponent } from './components/greensquare/greensquare.component';
import { Pokemon } from './components/pokemon/pokemon.component';
import { POKEMONS } from './components/mock-pokemon/mock-pokemon';
import { BadgeComponent } from './components/badge/badge.component';
import { TabReponseComponent } from './components/tab-reponse/tab-reponse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LigneDeReponseModule, BadgeComponent, GreensquareComponent, TabReponseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Napoleon';

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