import { Component, Input } from '@angular/core';
import { Cap } from '../cap/cap.component';
import { CAPS } from '../mock-pokemon/mock-cap';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-greensquare-cap',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './greensquare-cap.component.html',
  styleUrl: '../greensquare/greensquare.component.css'
})

/*GreensquareCap est le composant qui affiche un carré coloré dans les réponses du programme à l'entrée d'une capacité.
Il prend en paramètre sa couleur, sur quelle colonne il s'affiche, s'il affiche que la valeur est +/- grande ainsi que l'id de la capacité à afficher*/
export class GreensquareCapComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() valeurSupInf: string="";
  @Input() id: string ="";

  capacite: Cap = CAPS[0] ;

  /*Récupération des données de la capacité*/
  ngOnInit(): void {
    this.capacite = CAPS[parseInt(this.id) - 1] ;
  }

}
