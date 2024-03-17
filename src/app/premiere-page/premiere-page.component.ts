import { Component } from '@angular/core';
import { Pokemon } from '../components/pokemon/pokemon.component';
import { POKEMONS } from '../components/mock-pokemon/mock-pokemon';
@Component({
  selector: 'app-premiere-page',

  templateUrl: './premiere-page.component.html',
  styleUrl: './premiere-page.component.css'
})
export class PremierePageComponent {

  listeId: Array<String> = [];

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
    var listTypes: Array<string> = [];

    //Pour chaque type du pokemon
    for(let a of pokemon.types){
        //Récupération du json du type
        response = await fetch(a.type.url);
        yes = await response.json();

        //Recherche du type en français et concaténation dans la variable de stockage
        yes.names.forEach((element: { language: { name: string; }; name: string; }) =>{
            if(element.language.name == "fr"){
                stringTypes = stringTypes.concat(element.name, " ");
                listTypes.push(element.name);
              }
        });
    }

    //Variable pour stocker tous les talents du pokemon
    var stringTalents = "";
    var listTalents: Array<string> = [];

    //Pour chaque talent du pokemon
    for(let a of pokemon.abilities){
        //Récupération du json du talent
        response = await fetch(a.ability.url);
        yes = await response.json();

        //Recherche du talent en français et concaténation dans la variable de stockage
        yes.names.forEach((element: { language: { name: string; }; name: string; }) =>{
            if(element.language.name == "fr"){
                stringTalents = stringTalents.concat(element.name, " ");
                listTalents.push(element.name);
            }
        });
    }

    //Utilisation du json comme un objet
    document.getElementById('Nom')!.innerHTML = fr;
    document.getElementById('Types')!.innerHTML = stringTypes;
    document.body.querySelector("#Talents")!.innerHTML = stringTalents;

    //Affectation du src et de la caption de l'image de sprite
    var sprite: HTMLImageElement;
    sprite = document.body.querySelector("#Sprite")!;
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = sprite.alt.concat(fr);

    /**
      stade: 1,
      talent: ["Engrais", "Chlorophylle"]
  */

    //ajout du pokémon dans la liste pour affichage
    let p = new Pokemon();
    p.id = pokemon.id;
    p.name = fr;
    p.image = pokemon.sprites.front_default;
    p.type1 = listTypes[0];
    if(listTypes.length>0){
      p.type2 = listTypes[1];
    }
    else{
      p.type2 = "null";
    }

    response = await fetch(espece.generation.url);
    let generation = await response.json();

    p.gen = generation.id;

    p.stade = 0; //TODO

    p.taille = pokemon.height;
    p.poids = pokemon.weight;

    p.talent = listTalents;


    POKEMONS.push(p);

    console.log(POKEMONS);

    //mise à jour du tableau
    this.listeId.push(String(POKEMONS.length));

    console.log(this.listeId);
  }
}
