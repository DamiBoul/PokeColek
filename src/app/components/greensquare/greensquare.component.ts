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
export class GreensquareComponent implements OnInit {

  @Input() couleur: string="";
  @Input() colonne: string="";

  pokemon: Pokemon = null ;

  ngOnInit(): void {
    this.pokemon = POKEMONS[0] ;
  }


}
