import { Component } from '@angular/core';

@Component({
  selector: 'app-traduction',
  standalone: true,
  imports: [],
  templateUrl: '../../objet/objet.component.html',
  styleUrl: '../../objet/objet.component.css'
})
export class Traduction {
  name!: string;
  id !: number ; 
}
