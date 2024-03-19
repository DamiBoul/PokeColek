import { Component , OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

/*La sidebar affiche le menu horizontal pour choisir entre Pkmn/cap/lieu/objet*/
export class SidebarComponent  implements OnInit{

  activeLinkIndex: number = -1;

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
  selectedUser: number = -1; // Initialize the selectedUser to -1 (no row selected)

  onSelect(index: number): void {
    this.selectedUser = index; // Set the selectedUser to the index of the selected row
  }
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLinkIndex();
      }
    });
    this.updateActiveLinkIndex();
  }

  updateActiveLinkIndex(): void {
    this.navLinks.forEach((link, index) => {
      if (this.router.isActive(link.link, true)) {
        this.activeLinkIndex = index;
      }
    });
  }
  //Change de page
  navigate(index: number): void {
    this.router.navigateByUrl(this.navLinks[index].link);
    this.activeLinkIndex =index;
  }
}
