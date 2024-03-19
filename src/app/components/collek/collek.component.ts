import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCollek } from '../element-collek/element-collek.component';
import { ELEMS } from '../mock-pokemon/mock-elem';
import { Pokemon } from '../pokemon/pokemon.component';

@Component({
  selector: 'collek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collek.component.html',
  styleUrl: './collek.component.css'
})

/*Ce composant s'occupe d'afficher les items présents dans la collection du joueur. On lui passe en paramètre quel genre d'item on souhaite voir afficher (pkmn, objet, ...)*/
export class CollekComponent {

  @Input() idUser: number=-1;
  @Input() type: String ="";

  userCollek!: ElementCollek[];

  ngOnInit(): void {
    this.userCollek = ELEMS; //ici on initialisera la collection je pense
  }

  divParX(i: number, x: number): boolean{
    return((i)%x == 0);
  }

}
