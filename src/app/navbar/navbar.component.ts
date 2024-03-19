import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'Devinez !',
      icon: 'home',
      link: 'premiere-page',
      index: 0
    },
    {
      label: 'Collection',
      icon: 'work',
      link: 'deuxieme-page',
      index: 1
    },
    {
      label: 'Paramètres',
      icon: 'work',
      link: 'settings-page',
      index: 2
    },
    {
      label: 'Login',
      icon: 'work',
      link: 'login',
      index: 1
    }
  ];

  isExpanded: boolean = false;

  constructor(private router: Router) {}

  expandNavbar(): void {
    this.isExpanded = true;
  }

  collapseNavbar(): void {
    this.isExpanded = false;
  }

  navigate(link: string): void {
    this.router.navigateByUrl(link);
  }
}
