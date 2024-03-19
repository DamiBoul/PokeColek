import { Component, Input } from '@angular/core';
import { Lieu } from '../lieu/lieu.component';
import { LIEUX } from '../mock-pokemon/mock-lieu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greensquare-lieu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greensquare-lieu.component.html',
  styleUrl: '../greensquare/greensquare.component.css'
})

/*GreensquareLieu est le composant qui affiche un carré coloré dans les réponses du programme à l'entrée d'un lieu.
Il prend en paramètre sa couleur, sur quelle colonne il s'affiche, s'il affiche que la valeur est +/- grande ainsi que l'id du lieu à afficher*/
export class GreensquareLieuComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() id: string ="";

  lieu: Lieu = LIEUX[0] ;

  //Récupération des informations sur le lieu à afficher
  ngOnInit(): void {
    this.lieu = LIEUX[parseInt(this.id) - 1] ;
  }
}
