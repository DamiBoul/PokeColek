import { Component, Input, OnInit } from '@angular/core';
import { GreensquareComponent } from '../greensquare/greensquare.component';
import { POKEMONS } from '../mock-pokemon/mock-pokemon';
import { Pokemon } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-tab-reponse',
  standalone: true,
  imports: [GreensquareComponent],
  templateUrl: './tab-reponse.component.html',
  styleUrl: './tab-reponse.component.css'
})
export class TabReponseComponent implements OnInit{
  @Input() pokemonid: string;

  submission: Pokemon = null;
  toFind: Pokemon = null;

  check (){
    console.log("izofihze");
  }
  

  ngOnInit(): void {
    this.submission = POKEMONS[parseInt(this.pokemonid) - 1];
    this.toFind = POKEMONS[0];
  }


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
    t.sort();
    this.toFind.talent.sort();
    var cpt = 0 ;

    for (var i = 0 ; i < t.length ; i ++ ){
      //console.log (t[i], this.toFind.talent[i]);
      if (this.toFind.talent.includes(t[i])){
        cpt = cpt + 1 ;
      }
    }
    
    //console.log(i, cpt);
    if (cpt == i){
      return "vert";
    }
    if (cpt != 0){
      return "orange" ;
    }

    return "rouge" ;
  }

}
