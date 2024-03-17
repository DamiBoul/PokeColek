import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-cap',
  standalone: true,
  imports: [],
  templateUrl: '../pokemon/pokemon.component.css',
  styleUrl: '../pokemon/pokemon.component.css'
})
export class Cap extends ElementCollek {
  idCap!: number;
  override cat = "capacite";
  type!: string;
  categorie!: string;
  precision!: number;
  pouvoir !: number;
  concours!: string;
  gen !: number;
  PP !: number;
}
