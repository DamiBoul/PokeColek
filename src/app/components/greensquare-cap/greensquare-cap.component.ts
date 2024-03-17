import { Component, Input } from '@angular/core';
import { Cap } from '../cap/cap.component';
import { CAPS } from '../mock-pokemon/mock-cap';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-greensquare-cap',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './greensquare-cap.component.html',
  styleUrl: '../greensquare/greensquare.component.css'
})
export class GreensquareCapComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() valeurSupInf: string="";
  @Input() id: string ="";

  capacite: Cap = CAPS[0] ;

  ngOnInit(): void {
    this.capacite = CAPS[parseInt(this.id) - 1] ;
  }

}
