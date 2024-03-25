import { Component } from '@angular/core';
import { Lieu } from '../components/lieu/lieu.component';
import { LIEUX } from '../components/mock-pokemon/mock-lieu';

@Component({
  selector: 'app-lieu-page',
  templateUrl: './lieu-page.component.html',
  styleUrl: '../premiere-page/premiere-page.component.css'
})

export class LieuPageComponent {


  nbGuess: number = 0 ;
  toFind: String = "";
  gagne: boolean = false ;
  perdu: boolean = false ;
  listeId: Array<String> = []; //Liste des pokémons déjà envoyés par l'utilisateur.

  /*Cherche un lieu dans l'API*/
  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    if (!this.gagne && !this.perdu){
            
      let baseRequest = "https://pokeapi.co/api/v2/location/"+name;

      let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
      let lieu = await response.json(); //Extraction de la réponse en format json

      //Variable pour stocker le nom français de l'lieu
      let fr: string = "";
      let en: string = "";

      //Recherche du nom français du pokemon parmis toutes les langues
      lieu.names.forEach((element: { language: { name: string; }; name: any; }) =>{
          if(element.language.name == "fr")
              fr = element.name;
          if(element.language.name == "en")
              en = element.name;
      });



      /*Ajout du Pokémon dans la base de données*/
      let p = new Lieu ;
      p.id = lieu.id;
      p.name = lieu.name;
      if(en != "") p.name = en;
      if(fr != "") p.name = fr;
      p.image = "";

      //région du lieu
    p.region = "Pas de région"
    if(lieu.region != null)
      p.region = lieu.region.name ;

      //type du lieu
      const rExpCity : RegExp = /[Cc]ity/;
      const rExpCave1 : RegExp = /[Cc]ave/;
      const rExpCave2 : RegExp = /[Gg]rot/;
      const rExpBay : RegExp = /[Bb]ay/;
      const rExpMt1 : RegExp = /[Mm]t/;
      const rExpMt2 : RegExp = /[Mm]ountain/;
      const rExpMt3 : RegExp = /[Mm]ount/;
      const rExpRd1 : RegExp = /[Rr]d/;
      const rExpRd2 : RegExp = /[Rr]oad/;
      const rExpRd3 : RegExp = /[Rr]oute/;
      const rExpLeague : RegExp = /[Ll]eague/;
      const rExpWood1 : RegExp = /[Ww]ood/;
      const rExpWood2 : RegExp = /[Ff]orest/;
      const rExpIsland : RegExp = /[Ii]sland/;
      const rExpRuin : RegExp = /[Rr]uin/;
      const rExpDesert : RegExp = /[Dd]esert/;

      p.type = "Indéfini"
      if(en == "") en = lieu.name;
      if(rExpCity.test(en)) p.type = "Ville" ;
      if(rExpCave1.test(en) || rExpCave2.test(en)) p.type = "Grotte" ;
      if(rExpBay.test(en)) p.type = "Baie" ;
      if(rExpMt1.test(en) || rExpMt2.test(en) || rExpMt3.test(en)) p.type = "Montagne" ;
      if(rExpRd1.test(en) || rExpRd2.test(en) || rExpRd3.test(en)) p.type = "Route" ;
      if(rExpLeague.test(en)) p.type = "Grotte" ;
      if(rExpWood1.test(en) || rExpWood2.test(en)) p.type = "Forêt" ;
      if(rExpIsland.test(en)) p.type = "Île" ;
      if(rExpRuin.test(en)) p.type = "Ruines" ;
      if(rExpDesert.test(en)) p.type = "Desert" ;

      //Recherche de la propriété 'tenu' de l'lieu.
      p.pokemon = [] ;
      lieu.areas.forEach(function (element: any){
        if(element.pokemon_encounters != null)
        element.pokemon_encounters.forEach(function (poke: any){
          p.pokemon.push(poke.pokemon.name);
        })
      });

      console.log(p.pokemon);

      p.encounter = [] ;
      lieu.areas.forEach(function (element: any){
        if(element.encounter_method_rates != null)
        element.encounter_method_rates.forEach(function (method: any){
          p.encounter.push(method.encounter_method.name);
        })
      });

      /*Vérification lieu déjà présent
      On ne vérifie pas l'indice 0 car c'est le lieu à deviner, il faut pouvoir le rentrer*/
      var i ;
      var nc : Boolean = false;
      for (i = 1 ; i < LIEUX.length ; i++){
        if (LIEUX[i].name == p.name){
          nc = true ;
        }
      }

      /*Si le lieu n'a pas été trouvé, on l'ajoute au json et à la liste d'id*/
      if (nc == false){
        LIEUX.push(p);
        this.listeId.unshift(String(LIEUX.length));
        this.nbGuess ++ ;
      }

      if (p.name == LIEUX[0].name){
        this.gagne = true ;
      }

      //Au bout du 30e essai, on perd.
      if (this.nbGuess == 30){
        this.perdu = true ;
      }

      
    console.log(p);
    }

    console.log(this.nbGuess, this.toFind, this.gagne, this.perdu);
  }
  
  /*Génère un objet à trouver*/
  async generateLieuToFind(): Promise<Lieu>{
    let p = new Lieu();
    
    let baseRequest = "https://pokeapi.co/api/v2/location/?offset=0&limit=2036";

    let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
    let res = await response.json(); //Extraction de la réponse en format json
    console.log("res :",res);
    console.log("taille :",res.results.length);
    
    //----------Utilisation du json----------

    //Sélection d'un lieu aléatoire
    let lieu = res.results[Math.floor(Math.random() * res.results.length)];
    
    //Récupération du json de cet lieu
    response = await fetch(lieu.url);
    lieu = await response.json();

    //Variable pour stocker le nom français de l'lieu
    let fr: string = "";
    let en: string = "";

    //Recherche du nom français du pokemon parmis toutes les langues
    lieu.names.forEach((element: { language: { name: string; }; name: any; }) =>{
        if(element.language.name == "fr")
            fr = element.name;
        if(element.language.name == "en")
            en = element.name;
    });

    /*Ajout du Pokémon dans la base de données*/
    p.id = lieu.id;
    if(fr != "") p.name = fr;
    p.image = "";

    //région du lieu
    p.region = "Pas de région"
    if(lieu.region != null)
      p.region = lieu.region.name ;

      //type du lieu
      const rExpCity : RegExp = /[Cc]ity/;
      const rExpCave1 : RegExp = /[Cc]ave/;
      const rExpCave2 : RegExp = /[Gg]rot/;
      const rExpBay : RegExp = /[Bb]ay/;
      const rExpMt1 : RegExp = /[Mm]t/;
      const rExpMt2 : RegExp = /[Mm]ountain/;
      const rExpMt3 : RegExp = /[Mm]ount/;
      const rExpRd1 : RegExp = /[Rr]d/;
      const rExpRd2 : RegExp = /[Rr]oad/;
      const rExpRd3 : RegExp = /[Rr]oute/;
      const rExpLeague : RegExp = /[Ll]eague/;
      const rExpWood1 : RegExp = /[Ww]ood/;
      const rExpWood2 : RegExp = /[Ff]orest/;
      const rExpIsland : RegExp = /[Ii]sland/;
      const rExpRuin : RegExp = /[Rr]uin/;
      const rExpDesert : RegExp = /[Dd]esert/;

      p.type = "Indéfini"
      if(en == "") en = lieu.name;
      if(rExpCity.test(en)) p.type = "Ville" ;
      if(rExpCave1.test(en) || rExpCave2.test(en)) p.type = "Grotte" ;
      if(rExpBay.test(en)) p.type = "Baie" ;
      if(rExpMt1.test(en) || rExpMt2.test(en) || rExpMt3.test(en)) p.type = "Montagne" ;
      if(rExpRd1.test(en) || rExpRd2.test(en) || rExpRd3.test(en)) p.type = "Route" ;
      if(rExpLeague.test(en)) p.type = "Grotte" ;
      if(rExpWood1.test(en) || rExpWood2.test(en)) p.type = "Forêt" ;
      if(rExpIsland.test(en)) p.type = "Île" ;
      if(rExpRuin.test(en)) p.type = "Ruines" ;
      if(rExpDesert.test(en)) p.type = "Desert" ;

    //Recherche de la propriété 'tenu' de l'lieu.
    p.pokemon = [] ;
    console.log("lieu + :",lieu);
    lieu.areas.forEach(function (element: any){
      console.log("area :",element);
      if(element.pokemon_encounters != null)
      element.pokemon_encounters.forEach(function (poke: any){
        p.pokemon.push(poke.pokemon.name);
      })
    });

    console.log("pokemon :",p.pokemon);

    p.encounter = [] ;
    lieu.areas.forEach(function (element: any){
      if(element.encounter_method_rates != null)
      element.encounter_method_rates.forEach(function (method: any){
        p.encounter.push(method.encounter_method.name);
      })
    });

    LIEUX.unshift(p);
    this.toFind = p.name ;

    return (new Promise(resolve => {
      resolve(p);
    }));
  }

  /*A l'initialisation, on génère un pokemon*/
  ngOnInit(): void{
      this.generateLieuToFind();
  }

}
