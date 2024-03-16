import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCollek } from '../element-collek/element-collek.component';

@Component({
  selector: 'collek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collek.component.html',
  styleUrl: './collek.component.css'
})
export class CollekComponent {

  @Input() idUser: Number=-1;

  userCollek!: ElementCollek[];

  ngOnInit(): void {
    this.userCollek = []; //ici on initialisera la collection je pense
  }
}
