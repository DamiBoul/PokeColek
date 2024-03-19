import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

/*La sidebar affiche le menu horizontal pour choisir entre Pkmn/cap/lieu/objet*/
export class SidebarComponent {

  /*Différents liens*/
  navLinks = [
    {
      label: 'Pokémon',
      icon: 'home',
      link: 'premiere-page',
      index: 0
    },
    {
      label: 'Objet',
      icon: 'work',
      link: 'objet-page',
      index: 1
    },
    {
      label: 'Capacité',
      icon: 'home',
      link: 'cap-page',
      index: 2
    },
    {
      label: 'Lieu',
      icon: 'work',
      link: 'lieu-page',
      index: 3
    }
  ];

  constructor(private router: Router) {}
  
  //Change de page
  navigate(link: string): void {
    this.router.navigateByUrl(link);
  }
}
