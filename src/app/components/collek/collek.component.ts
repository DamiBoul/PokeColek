import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCollek } from '../element-collek/element-collek.component';
import { ELEMS } from '../mock-pokemon/mock-elem';

@Component({
  selector: 'collek',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collek.component.html',
  styleUrl: './collek.component.css'
})
export class CollekComponent {

  @Input() idUser: number=-1;

  userCollek!: ElementCollek[];

  ngOnInit(): void {
    this.userCollek = ELEMS; //ici on initialisera la collection je pense
  }

  divParX(i: number, x: number): boolean{
    return((i)%x == 0);
  }
}
