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
export class GreensquareObjetComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() valeurSupInf: string="";
  @Input() id: string ="";

  obj: Objet = OBJETS[0] ;

  ngOnInit(): void {
    this.obj = OBJETS[parseInt(this.id) - 1] ;
  }
}
