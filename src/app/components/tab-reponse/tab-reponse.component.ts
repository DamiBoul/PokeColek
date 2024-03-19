import { Component, Input, OnInit } from '@angular/core';
import { GreensquareComponent } from '../greensquare/greensquare.component';
import { GreensquareObjetComponent } from '../greensquare-objet/greensquare-objet.component';
import { GreensquareLieuComponent } from '../greensquare-lieu/greensquare-lieu.component';
import { GreensquareCapComponent } from '../greensquare-cap/greensquare-cap.component';
import { POKEMONS } from '../mock-pokemon/mock-pokemon';
import { Pokemon } from '../pokemon/pokemon.component';
import { OBJETS } from '../mock-pokemon/mock-objet';
import { Objet } from '../objet/objet.component';
import { Lieu } from '../lieu/lieu.component';
import { LIEUX } from '../mock-pokemon/mock-lieu' ;
import { Cap } from '../cap/cap.component';
import { CAPS } from '../mock-pokemon/mock-cap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-reponse',
  standalone: true,
  imports: [GreensquareComponent, GreensquareCapComponent, GreensquareLieuComponent, GreensquareObjetComponent, CommonModule],
  templateUrl: './tab-reponse.component.html',
  styleUrl: './tab-reponse.component.css'
})
export class TabReponseComponent implements OnInit{
  @Input() pokemonid: string = "";
  @Input() typedonnees: string ="";

  /* toFind est la valeur à trouver.
     submission est la valeur envoyée par le joueur */

  submission: Pokemon = POKEMONS[0];
  toFind: Pokemon = POKEMONS[0];

  submissionO : Objet = OBJETS[0];
  toFindO: Objet = OBJETS[0];

  submissionL : Lieu = LIEUX[0];
  toFindL: Lieu = LIEUX[0];

  submissionC : Cap = CAPS[0];
  toFindC: Cap = CAPS[0];

  ngOnInit(): void {
    //console.log(POKEMONS[parseInt(this.pokemonid) - 1]);

    this.submission = POKEMONS[parseInt(this.pokemonid) - 1];
    this.toFind = POKEMONS[0];

    this.submissionO = OBJETS[parseInt(this.pokemonid) - 1];
    this.toFindO = OBJETS[0];

    this.submissionL = LIEUX[parseInt(this.pokemonid) - 1];
    this.toFindL = LIEUX[0];

    this.submissionC = CAPS[parseInt(this.pokemonid) - 1];
    this.toFindC = CAPS[0];
  }

/************************** CAPACITE ================*/

/*Valeur numérique*/

  compareGenC(cost:number){
    if (cost > this.toFindC.gen){
      return "-" ;
    }
    if (cost < this.toFindC.gen){
      return "+" ;
    }
    return "";    
  }

  comparePouvoirC(cost:number){
    if (cost > this.toFindC.pouvoir){
      return "-" ;
    }
    if (cost < this.toFindC.pouvoir){
      return "+" ;
    }
    return "";    
  }

  comparePPC(cost:number){
    if (cost > this.toFindC.PP){
      return "-" ;
    }
    if (cost < this.toFindC.PP){
      return "+" ;
    }
    return "";    
  }

  comparePrecisionC(cost:number){
    if (cost > this.toFindC.precision){
      return "-" ;
    }
    if (cost < this.toFindC.precision){
      return "+" ;
    }
    return "";    
  }

/*Couleur*/
  couleurNameC(value:string){
    if (value == this.toFindC.name) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurTypeC (t1: string){
    if (t1 == this.toFindC.type) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurCategC(value:string){
    if (value == this.toFindC.categorie) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurConcoursC(value:string){
    if (value == this.toFindC.concours) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurPouvoirC(value:number){
    if (value == this.toFindC.pouvoir) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurPrecisionC(value:number){
    if (value == this.toFindC.precision) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurPPC(value:number){
    if (value == this.toFindC.PP) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurGenC(value:number){
    if (value == this.toFindC.gen) {
      return "vert" ;
    }
    return "rouge" ;
  }
/**************************LIEU =============*/

  couleurNameL(value:string){
    if (value == this.toFindL.name) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurRegionL(value:string){
    if (value == this.toFindL.region) {
      return "vert" ;
    }
    return "rouge" ;
  }
  
  couleurTypeL(value:string){
    if (value == this.toFindL.type) {
      return "vert" ;
    }
    return "rouge" ;
  }
  
  couleurFindableL(t:Array<Pokemon>){
    var cpt = 0 ;

    for (var i = 0 ; i < t.length ; i ++ ){
      //console.log (t[i], this.toFind.talent[i]);
      if (this.toFindL.pokemon.includes(t[i])){
        cpt = cpt + 1 ;
      }
    }
    
    //console.log(i, cpt);
    if (cpt == i && cpt == this.toFindL.pokemon.length){
      return "vert";
    }
    if (cpt != 0){
      return "orange" ;
    }

    return "rouge" ;
  }

  couleurEncounterL(t:Array<string>){
    var cpt = 0 ;

    for (var i = 0 ; i < t.length ; i ++ ){
      //console.log (t[i], this.toFind.talent[i]);
      if (this.toFindL.encounter.includes(t[i])){
        cpt = cpt + 1 ;
      }
    }
    
    //console.log(i, cpt);
    if (cpt == i && cpt == this.toFindL.pokemon.length){
      return "vert";
    }
    if (cpt != 0){
      return "orange" ;
    }

    return "rouge" ;
  }

  

/**************************OBJET ================== */

  /*FONCTIONS COMPARANT LES VALEURS NUMERIQUES*/

  compareFlingO(power:number){
    if (power > this.toFindO.flingpower){
      return "-" ;
    }
    if (power < this.toFindO.flingpower){
      return "+" ;
    }
    return "";
  }

  compareCostO(cost:number){
    if (cost > this.toFindO.cost){
      return "-" ;
    }
    if (cost < this.toFindO.cost){
      return "+" ;
    }
    return "";    
  }
  
  compareGenO(cost:number){
    if (cost > this.toFindO.gen){
      return "-" ;
    }
    if (cost < this.toFindO.gen){
      return "+" ;
    }
    return "";    
  }

  /* FONCTION COMPARANT LES COULEURS */

  couleurNameO(value:string){
    if (value == this.toFindO.name) {
      return "vert" ;
    }
    return "rouge" ;
  }    
  
  couleurCoutO(value:number){
    if (value == this.toFindO.cost) {
      return "vert" ;
    }
    return "rouge" ;
  } 

  couleurFlingO(value:number){
    if (value == this.toFindO.flingpower) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurTenuO(value:boolean){
    if (value == this.toFindO.holdable) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurCatO(value:string){
    if (value == this.toFindO.categorie) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurGenO(value:number){
    if (value == this.toFindO.gen) {
      return "vert" ;
    }
    return "rouge" ;
  }

/**** POKEMON ============================================= */
  /*FONCTIONS COMPARANT LES VALEURS NUMERIQUES*/

  compareGen(value: number){
    if (value > this.toFind.gen){
      return "-" ;
    }
    if (value < this.toFind.gen){
      return "+" ;
    }
    return "";
  }

  compareStade(value: number){
    if (value > this.toFind.stade){
      return "-" ;
    }
    if (value < this.toFind.stade){
      return "+" ;
    }
    return "";
  }

  comparePoids(value: number){
    if (value > this.toFind.poids){
      return "-" ;
    }
    if (value < this.toFind.poids){
      return "+" ;
    }
    return "";
  }

  compareTaille(value: number){
    if (value > this.toFind.taille){
      return "-" ;
    }
    if (value < this.toFind.taille){
      return "+" ;
    }
    return "";
  }



  /*FONCTIONS PERMETTANT DE DETERMINER LA COULEUR DES CARRES*/
  couleurName (nom: string){
    if (nom == this.toFind.name) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurType (t1: string, t2: string){
    if (t1 == this.toFind.type1 && t2 == this.toFind.type2) {
      return "vert" ;
    }
    else if (t1 == this.toFind.type1 || t2 == this.toFind.type2 || t1 == this.toFind.type2 || t2 == this.toFind.type1) {
      return "orange" ;
    }
    return "rouge" ;
  }

  couleurGen (gen: number){
    if (gen == this.toFind.gen) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurStade (evo: number){
    if (evo == this.toFind.stade) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurTaille (t: number){
    if (t == this.toFind.taille) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurPoids (p: number){
    if (p == this.toFind.poids) {
      return "vert" ;
    }
    return "rouge" ;
  }

  couleurTalents (t: Array<string>){
    var cpt = 0 ;

    for (var i = 0 ; i < t.length ; i ++ ){
      //console.log (t[i], this.toFind.talent[i]);
      if (this.toFind.talent.includes(t[i])){
        cpt = cpt + 1 ;
      }
    }
    
    //console.log(i, cpt);
    if (cpt == i && cpt == this.toFind.talent.length){
      return "vert";
    }
    if (cpt != 0){
      return "orange" ;
    }

    return "rouge" ;
  }

}
