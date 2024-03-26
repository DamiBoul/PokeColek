import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.css'
})

/*La classe objet représente un objet*/
export class Objet extends ElementCollek{
  override cat = "objet";
  idObj!: number;
  cost!: number ; //coût de l'objet en boutique
  flingpower !: number ; //Pouvoir avec dégommage
  holdable !: boolean ; //Peut être tenu par un pkmn
  categorie !: string ; //Type d'objet : standard-ball, special-ball, etc.
  hold_by !: boolean ; //Nom des pokémons qui tiennent l'objet naturellement
}
