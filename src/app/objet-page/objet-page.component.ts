import { Component } from '@angular/core';
import { Objet } from '../components/objet/objet.component';
import { OBJETS } from '../components/mock-pokemon/mock-objet';

@Component({
  selector: 'app-objet-page',
  templateUrl: './objet-page.component.html',
  styleUrl: '../premiere-page/premiere-page.component.css'
})
export class ObjetPageComponent {


  nbGuess: number = 0 ;
  toFind: String = "";
  gagne: boolean = false ;
  perdu: boolean = false ;
  listeId: Array<String> = []; //Liste des objets déjà envoyés par l'utilisateur.

  /*Cherche un Objet dans l'API*/
  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    if (!this.gagne && !this.perdu){
            
      let baseRequest = "https://pokeapi.co/api/v2/item/"+name;

      let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
      let objet = await response.json(); //Extraction de la réponse en format json

      //Variable pour stocker le nom français de l'objet
      let fr: string = "";

      //Recherche du nom français du pokemon parmis toutes les langues
      objet.names.forEach((element: { language: { name: string; }; name: any; }) =>{
          if(element.language.name == "fr")
              fr = element.name;
      });

      /*Ajout du Pokémon dans la base de données*/
      let p = new Objet ;
      p.id = objet.id;
      p.name = fr;
      p.image = objet.sprites.default;

      p.cost = objet.cost ;
      p.flingpower = objet.fling_power ;

      //Recherche de la propriété 'tenu' de l'objet.
      p.holdable = false ;
      objet.attributes.forEach((element: { language: { name: string; }; name: any; }) =>{
        if(element.name == "holdable" || element.name == "holdable-active")
            p.holdable = true ;
      });

      p.categorie = objet.category.name ;

      p.hold_by = [] ;
      objet.held_by_pokemon.forEach((element: { pokemon: { name: string; }; name: any; }) =>{
        p.hold_by.push(element.pokemon.name);
      });
      console.log(p.hold_by);

      /*Vérification Objet déjà présent
      On ne vérifie pas l'indice 0 car c'est le Objet à deviner, il faut pouvoir le rentrer*/
      var i ;
      var nc : Boolean = false;
      for (i = 1 ; i < OBJETS.length ; i++){
        if (OBJETS[i].name == p.name){
          nc = true ;
        }
      }

      /*Si l'objet n'a pas été trouvé, on l'ajoute au json et à la liste d'id*/
      if (nc == false){
        OBJETS.push(p);
        this.listeId.unshift(String(OBJETS.length));
        this.nbGuess ++ ;
      }

      if (p.name == OBJETS[0].name){
        this.gagne = true ;
      }

      //Au bout du 7e essai, on perd.
      if (this.nbGuess == 20){
        this.perdu = true ;
      }
    }

    console.log(this.nbGuess, this.toFind, this.gagne, this.perdu);
  }

  /*Génère un objet à trouver*/
  async generateObjToFind(): Promise<Objet>{
    let p = new Objet();
    
    let baseRequest = "https://pokeapi.co/api/v2/item/?offset=0&limit=2110";

    let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
    let res = await response.json(); //Extraction de la réponse en format json
    console.log(res);
    
    //----------Utilisation du json----------

    //Sélection d'un objet aléatoire
    let objet;
    do{
      objet = res.results[Math.floor(Math.random() * res.results.length)];
      //Récupération du json de cet objet
      response = await fetch(objet.url);
      objet = await response.json();
    }while(!this.objIsInteresting(objet));

    console.log(objet);
    console.log(res.results.length);
    
    //Variable pour stocker le nom français de l'objet
    let fr: string = "";

    //Recherche du nom français du pokemon parmis toutes les langues
    objet.names.forEach((element: { language: { name: string; }; name: any; }) =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    //Ajout du Pokémon dans la base de données
    p.id = objet.id;
    p.name = fr;
    p.image = objet.sprites.default;

    p.hold_by = [] ;
    objet.held_by_pokemon.forEach((element: { language: { name: string; }; name: any; }) =>{
      p.hold_by.push(element.name);
    });

    p.cost = objet.cost ;
    p.flingpower = objet.fling_power ;

    //Recherche de la propriété 'tenu' de l'objet.
    p.holdable = false ;
    objet.attributes.forEach((element: { language: { name: string; }; name: any; }) =>{
      if(element.name == "holdable" || element.name == "holdable-active")
          p.holdable = true ;
    });

    p.categorie = objet.category.name ;

    OBJETS.unshift(p);
    this.toFind = p.name ;

    return (new Promise(resolve => {
      resolve(p);
    }));
  }

  /*Tri les objets pour enlever les objets trop durs à trouver ou inutiles*/
  objIsInteresting(objet: any){
    let category = objet.category.name;
    console.log(category);
    console.log(objet.name);

    return (!(category == "all-machines") &&
            !(category == "tm-materials") &&
            !(category == "sandwich-ingredients") &&
            !(category == "curry-ingredients") &&
            !(category == "picnic") &&
            !(category == "dynamax-crystals") &&
            !(category == "unused") &&
            !(category == "plot-advancement"));
  }

  /*A l'initialisation, on génère un pokemon*/
  ngOnInit(): void{
      this.generateObjToFind();
  }

}
