import { Component } from '@angular/core';

@Component({
  selector: 'app-element-collek',
  standalone: true,
  imports: [],
  templateUrl: './element-collek.component.html',
  styleUrl: './element-collek.component.css'
})
export class ElementCollek {
  id!: Number; //numéro d'identification du collectionnable
  cat!: Number; /**indique à quelle catégorie l'objet appartient (
                                                                  1 - Pokémon
                                                                  2 - Objet
                                                                  3 - Capacité
                                                                  4 - Lieu
                                                                  ) 
    */
}
