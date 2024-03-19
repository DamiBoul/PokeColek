import { Component } from '@angular/core';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'app-cap',
  standalone: true,
  imports: [],
  templateUrl: '../pokemon/pokemon.component.css',
  styleUrl: '../pokemon/pokemon.component.css'
})

/*La classe Cap représente les capacités.*/
export class Cap extends ElementCollek {
  idCap!: number;
  override cat = "capacite";
  type!: string; //Type de l'attaque
  categorie!: string; //Special, status ou physique
  precision!: number; //Nombre /100
  pouvoir !: number; //Puissance de l'attaque
  concours!: string; //Type de l'attaque en concours : Beauté, robustesse, etc.
  gen !: number; //Génération d'apparition
  PP !: number; //Nombre de PP
}
