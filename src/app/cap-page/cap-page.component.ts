import { Component, OnInit } from '@angular/core';
import { Cap } from '../components/cap/cap.component';
import { CAPS } from '../components/mock-pokemon/mock-cap';

@Component({
  selector: 'app-cap-page',
  templateUrl: './cap-page.component.html',
  styleUrl: '../premiere-page/premiere-page.component.css'
})
export class CapPageComponent {


  nbGuess: number = 0 ;
  toFind: String = "";
  gagne: boolean = false ;
  perdu: boolean = false ;
  listeId: Array<String> = []; //Liste des capacités déjà envoyées par l'utilisateur.

  /*Cherche un Capacité dans l'API*/
  async search(name: string): Promise<void> { // Fonction async pour pouvoir gérer l'attente des appels
    if (!this.gagne && !this.perdu){
            
      let baseRequest = "https://pokeapi.co/api/v2/move/"+name;

      let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
      let cap = await response.json(); //Extraction de la réponse en format json

      //Variable pour stocker le nom français de l'capacité
      let fr: string = "";
      let en: string = "";

      //Recherche du nom français du pokemon parmis toutes les langues
      cap.names.forEach((element: { language: { name: string; }; name: any; }) =>{
          if(element.language.name == "fr")
              fr = element.name;
          if(element.language.name == "en")
                en = element.name;
      });

      /*Ajout du Pokémon dans la base de données*/
      let p = new Cap ;
      p.id = cap.id;
      p.name = fr;
      p.image = "";

      //type de la capacité
      p.type = cap.type.name ;


      //categorie de la capacité
      p.categorie = cap.damage_class.name ;


      //précision de la capacité
      p.precision = cap.accuracy ;
      if(p.precision == null) p.precision = 100;


      //pouvoir de la capacité
      p.pouvoir = cap.power ;


     //génération d'introduction de la capacité
      response = await fetch(cap.generation.url); //Appel de la requête passée en paramètre
      let genrtn = await response.json(); //Extraction de la réponse en format json
      p.gen = genrtn.id;


      //type de la capacité pendant les concours
      if(p.gen < 5)
        p.concours = cap.contest_type.name ;


      //nb PP de la capacité
      p.PP = cap.pp ;
      
      /*Vérification capacité déjà présent
      On ne vérifie pas l'indice 0 car c'est le Capacité à deviner, il faut pouvoir le rentrer*/
      var i ;
      var nc : Boolean = false;
      for (i = 1 ; i < CAPS.length ; i++){
        if (CAPS[i].name == p.name){
          nc = true ;
        }
      }

      console.log(CAPS);
      /*Si l'capacité n'a pas été trouvé, on l'ajoute au json et à la liste d'id*/
      if (nc == false){
        CAPS.push(p);
        this.listeId.unshift(String(CAPS.length));
        this.nbGuess ++ ;
      }

      console.log(CAPS);
      if (p.name == CAPS[0].name){
        this.gagne = true ;
      }

      //Au bout du 7e essai, on perd.
      if (this.nbGuess == 20){
        this.perdu = true ;
      }
    }

    console.log(this.nbGuess, this.toFind, this.gagne, this.perdu);
  }

  /*Génère un capacité à trouver*/
  async generateCapToFind(): Promise<Cap>{
    let p = new Cap();
    
    let baseRequest = "https://pokeapi.co/api/v2/move/?offset=0&limit=1000";

    let response = await fetch(baseRequest); //Appel de la requête passée en paramètre
    let res = await response.json(); //Extraction de la réponse en format json
    console.log(res);
    
    //----------Utilisation du json----------

    //Sélection d'un capacité aléatoire
    let cap;
    cap = res.results[Math.floor(Math.random() * res.results.length)];
    //Récupération du json de cet capacité
    response = await fetch(cap.url);
    cap = await response.json();

    console.log(cap);
    console.log(res.results.length);
    
    //Variable pour stocker le nom français de l'capacité
    let fr: string = "";

    //Recherche du nom français du pokemon parmis toutes les langues
    cap.names.forEach((element: { language: { name: string; }; name: any; }) =>{
        if(element.language.name == "fr")
            fr = element.name;
    });

    /*Ajout du Pokémon dans la base de données*/
    p.id = cap.id;
    p.name = fr;
    p.image = "";

    //type de la capacité
    p.type = cap.type.name ;


    //categorie de la capacité
    p.categorie = cap.damage_class.name ;


    //précision de la capacité
    p.precision = cap.accuracy ;
    if(p.precision == null) p.precision = 100;


    //pouvoir de la capacité
    p.pouvoir = cap.power ;


    //génération d'introduction de la capacité
    response = await fetch(cap.generation.url); //Appel de la requête passée en paramètre
    let genrtn = await response.json(); //Extraction de la réponse en format json
    p.gen = genrtn.id


    //type de la capacité pendant les concours
    if(p.gen < 5)
      p.concours = cap.contest_type.name ;


    //nb PP de la capacité
    p.PP = cap.pp ;

    CAPS.unshift(p);
    this.toFind = p.name ;

    return (new Promise(resolve => {
      resolve(p);
    }));
  }

  ngOnInit(): void{
    this.generateCapToFind();
  }

}
