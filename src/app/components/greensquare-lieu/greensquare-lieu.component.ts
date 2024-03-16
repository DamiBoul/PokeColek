import { Component, Input } from '@angular/core';
import { Lieu } from '../lieu/lieu.component';
import { LIEUX } from '../mock-pokemon/mock-lieu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greensquare-lieu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greensquare-lieu.component.html',
  styleUrl: '../greensquare/greensquare.component.css'
})
export class GreensquareLieuComponent {
  @Input() couleur: string="";
  @Input() colonne: string="";
  @Input() id: string ="";

  lieu: Lieu = LIEUX[0] ;

  ngOnInit(): void {
    this.lieu = LIEUX[parseInt(this.id) - 1] ;
  }
}
