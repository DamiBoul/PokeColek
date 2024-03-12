import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'lieux',
      icon: 'home',
      link: 'premiere-page',
      index: 0
    },
    {
      label: 'pokemon',
      icon: 'work',
      link: 'deuxieme-page',
      index: 1
    },
  

  ];
  constructor() {}

  }