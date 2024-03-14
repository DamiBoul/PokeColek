import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ligne-de-reponse',
  //standalone: true,
  //imports: [],
  templateUrl: './ligne-de-reponse.component.html',
  styleUrl: './ligne-de-reponse.component.css'
})
export class LigneDeReponseComponent {
  @Output() poke = new EventEmitter<string>();

  searchPoke(value: string){
    this.poke.emit(value);
  }
}