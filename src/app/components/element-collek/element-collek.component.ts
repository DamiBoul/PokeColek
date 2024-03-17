import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'element-collek',
  standalone: true,
  imports: [],
  templateUrl: './element-collek.component.html',
  styleUrl: './element-collek.component.css'
})
export class ElementCollek {
  id!: number; //numéro d'identification du collectionnable
  cat!: string; //indique à quelle catégorie l'objet appartient (pokemon, objet, capacite, lieu) 
  name!: string;
  image! :string;
}
