import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { BadgeComponent } from './components/badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LigneDeReponseModule, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  type = ["acier", "combat", "dragon", "eau", "electrik", "fee", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "tenebres", "vol"];
  constructor() { }

  ngOnInit(): void {
  }
}
