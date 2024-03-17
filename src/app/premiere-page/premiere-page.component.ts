import { Component } from '@angular/core';
import { Pokemon } from '../components/pokemon/pokemon.component';
import { POKEMONS } from '../components/mock-pokemon/mock-pokemon';
@Component({
  selector: 'app-premiere-page',

  templateUrl: './premiere-page.component.html',
  styleUrl: './premiere-page.component.css'
})
export class PremierePageComponent {

  title = 'Napoleon';
  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+name); // fetch(requete) permet d'appeler l'api
    let pokemon = await response.json(); // variable.json() met la requete au format 

    response = await fetch(pokemon.species.url);
    let espece = await response.json();

    //Variable pour stocker le nom français du pokemon
    var fr: string;
    fr = "";

    //Recherche du nom français du pokemon parmis toutes les langues
    espece.names.forEach((element: { language: { name: string; }; name: any; }) =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    let yes;

    //Variable pour stocker tous les types du pokemon
    var stringTypes = "";

    //Pour chaque type du pokemon
    for(let a of pokemon.types){
        //Récupération du json du type
        response = await fetch(a.type.url);
        yes = await response.json();

        //Recherche du type en français et concaténation dans la variable de stockage
        yes.names.forEach((element: { language: { name: string; }; name: string; }) =>{
            if(element.language.name == "fr")
                stringTypes = stringTypes.concat(element.name, " ");
        });
    }

    //Variable pour stocker tous les talents du pokemon
    var stringTalents = "";

    //Pour chaque talent du pokemon
    for(let a of pokemon.abilities){
        //Récupération du json du talent
        response = await fetch(a.ability.url);
        yes = await response.json();

        //Recherche du talent en français et concaténation dans la variable de stockage
        yes.names.forEach((element: { language: { name: string; }; name: string; }) =>{
            if(element.language.name == "fr"){
                stringTalents = stringTalents.concat(element.name, " ");
            }
        });
    }

    //Utilisation du json comme un objet
    document.getElementById('Nom')!.innerHTML = pokemon.name;
    document.getElementById('Types')!.innerHTML = stringTypes;
    document.body.querySelector("#Talents")!.innerHTML = stringTalents;

    //Affectation du src et de la caption de l'image de sprite
    var sprite: HTMLImageElement;
    sprite = document.body.querySelector("#Sprite")!;
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = sprite.alt.concat(fr);

    let p = new Pokemon();
    p.name = pokemon.name;

    POKEMONS.push(p);
  }
}
