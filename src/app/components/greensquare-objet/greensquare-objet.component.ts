import { Component, Input } from '@angular/core';
import { Objet } from '../objet/objet.component';
import { OBJETS } from '../mock-pokemon/mock-objet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greensquare-objet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greensquare-objet.component.html',
  styleUrl: '../greensquare/greensquare.component.css'
})

/*GreensquareObjet est le composant qui affiche un carré coloré dans les réponses du programme à l'entrée d'un Pokémon.
Il prend en paramètre sa couleur, sur quelle colonne il s'affiche, s'il affiche que la valeur est +/- grande ainsi que l'id de l'objet à afficher*/

export class GreensquareObjetComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() valeurSupInf: string="";
  @Input() id: string ="";

  obj: Objet = OBJETS[0] ;

  //Récupération de l'objet à afficher
  ngOnInit(): void {
    this.obj = OBJETS[parseInt(this.id) - 1] ;
  }
}
