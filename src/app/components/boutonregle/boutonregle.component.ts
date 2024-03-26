import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boutonregle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boutonregle.component.html',
  styleUrl: './boutonregle.component.css'
})
export class BoutonregleComponent {
  navLinks = [
    {
      label: 'Règles du jeu',
      icon: 'home',
      link: 'regle',
      index: 0
    }
  ];

  constructor(private router: Router) {}
  
  navigate(link: string): void {
    this.router.navigateByUrl(link);
  }

}
