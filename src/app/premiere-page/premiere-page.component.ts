import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../components/pokemon/pokemon.component';
import { POKEMONS } from '../components/mock-pokemon/mock-pokemon';

@Component({
  selector: 'app-premiere-page',

  templateUrl: './premiere-page.component.html',
  styleUrl: './premiere-page.component.css'
})

/*La première page est la page d'accueil. C'est celle où l'on doit deviner un Pokémon.*/
export class PremierePageComponent implements OnInit{

  nbGuess: number = 0 ;
  toFind: String = "";
  gagne: boolean = false ;
  perdu: boolean = false ;
  listeId: Array<String> = []; //Liste des pokémons déjà envoyés par l'utilisateur.

  /*Cherche un Pokémon dans l'API*/
  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    if (!this.gagne && !this.perdu){
    
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
        p.type2 = "Null";
      }

      response = await fetch(espece.generation.url);
      let generation = await response.json();

      p.gen = generation.id;

      //Ligne d'evolution
      response = await fetch(espece.evolution_chain.url);
      let ligneEvo = await response.json();

      var chaineEvo = ligneEvo.chain;
      
      p.stade = 0;

      if(chaineEvo.species.name == espece.name){
        p.stade = 1;
      }
      else{
        var listeEvo = chaineEvo.evolves_to;
        var listeEvo2: any[] = [];
        listeEvo.forEach((element: { evolves_to: any; }) =>{
          listeEvo2.concat(element.evolves_to);
      });

      console.log(listeEvo2);

        listeEvo.forEach((element: { species: { name: any; }; }) =>{
          if(element.species.name == espece.name) p.stade = 2;
      });
      listeEvo2.forEach((element) =>{
        console.log(element);
        if(element.species.name == espece.name) p.stade = 3;
      });

      }

      if(p.stade == 0){
        p.stade = 3;
      }
      //----------

      p.taille = parseFloat((pokemon.height * 0.1).toFixed(2)) ;
      p.poids = parseFloat((pokemon.weight * 0.1).toFixed(2)) ;

      p.talent = listTalents;

      /*Vérification Pokémon déjà présent
      On ne vérifie pas l'indice 0 car c'est le Pokémon à devinir, il faut pouvoir le rentrer*/
      var i ;
      var nc : Boolean = false;
      for (i = 1 ; i < POKEMONS.length ; i++){
        if (POKEMONS[i].name == p.name){
          nc = true ;
        }
      }

      /*Si le Pokémon n'a pas été trouvé, on l'ajoute au json et à la liste d'id*/
      if (nc == false){
        POKEMONS.push(p);
        this.listeId.unshift(String(POKEMONS.length));
        this.nbGuess ++ ;
      }

      if (p.name == POKEMONS[0].name){
        this.gagne = true ;
      }

      //Au bout du 7e essai, on perd.
      if (this.nbGuess == 7){
        this.perdu = true ;
      }
    }

    console.log(this.nbGuess, this.toFind, this.gagne, this.perdu);
  }

  /*Génère un Pokémon à trouver*/
  async generatePkmnToFind(): Promise<Pokemon>{
    let p = new Pokemon();
    
    let baseRequest = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000";

    let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
    let res = await response.json(); //Extraction de la réponse en format json

    //----------Utilisation du json----------

    //Sélection d'un pokemon aléatoire
    let pokemon = res.results[Math.floor(Math.random() * res.results.length)];

    //Récupération du json de ce pokemon
    response = await fetch(pokemon.url);
    pokemon = await response.json();

    //Récupération du json de l'espèce de ce pokemon
    response = await fetch(pokemon.species.url);
    let espece = await response.json();

    //Variable pour stocker le nom français du pokemon
    let fr: string = "";

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

    /*Ajout du Pokémon dans la base de données*/
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

    //Stade d'évolution
    response = await fetch(espece.evolution_chain.url);
    let ligneEvo = await response.json();

    var chaineEvo = ligneEvo.chain;
    
    p.stade = 0;

    if(chaineEvo.species.name == espece.name){
      p.stade = 1;
    }
    else{
      var listeEvo = chaineEvo.evolves_to;
      var listeEvo2: any[] = [];
      listeEvo.forEach((element: { evolves_to: any; }) =>{
        listeEvo2.concat(element.evolves_to);
      });

      listeEvo.forEach((element: { species: { name: any; }; }) =>{
          if(element.species.name == espece.name) p.stade = 2;
      });
      listeEvo2.forEach((element) =>{
        console.log(element);
        if(element.species.name == espece.name) p.stade = 3;
      });

    }

    if(p.stade == 0){
      p.stade = 3;
    }
    //------

    p.taille = parseFloat((pokemon.height * 0.1).toFixed(2)) ;
    p.poids = parseFloat((pokemon.weight * 0.1).toFixed(2)) ;

    p.talent = listTalents;

    POKEMONS.unshift(p);
    this.toFind = p.name ;

    return (new Promise(resolve => {
      resolve(p);
    }));
  }

  /*A l'initialisation, on génère un pokemon*/
  ngOnInit(): void{
      this.generatePkmnToFind();
  }

}
