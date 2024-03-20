import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ligne-de-reponse',
  //standalone: true,
  //imports: [],
  templateUrl: './ligne-de-reponse.component.html',
  styleUrl: './ligne-de-reponse.component.css'
})

/*Ligne de réponse affiche la barre de réponse et envoie le Pokémon entré à la page qui l'appelle*/
export class LigneDeReponseComponent {
  @Output() poke = new EventEmitter<string>();
  name = '';

  printValue() : void {
    this.poke.emit(this.name);
  }
}

