import { Component } from '@angular/core';

@Component({
  selector: 'app-objet',
  standalone: true,
  imports: [],
  templateUrl: './objet.component.html',
  styleUrl: './objet.component.css'
})
export class Objet {
  id!: number;
  name!: string;
  image!: string;
  cost!: number ;
  flingpower !: number ;
  holdable !: boolean ;
  categorie !: string ;
  gen !: number ;
}
