import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { POKEMONS } from '../mock-pokemon/mock-pokemon';
import { OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon.component';


@Component({
  selector: 'app-greensquare',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './greensquare.component.html',
  styleUrl: './greensquare.component.css'
})

/*Greensquare est le composant qui affiche un carré coloré dans les réponses du programme à l'entrée d'un Pokémon.
Il prend en paramètre sa couleur, sur quelle colonne il s'affiche, s'il affiche que la valeur est +/- grande ainsi que l'id du Pokemon à afficher*/
export class GreensquareComponent implements OnInit {

  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() valeurSupInf: string="";
  @Input() id: string ="";

  pokemon: Pokemon = POKEMONS[0] ;

  //Récupération des données du Pokémon.
  ngOnInit(): void {
    this.pokemon = POKEMONS[parseInt(this.id) - 1] ;
  }


}
