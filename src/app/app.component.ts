import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashfront';
  spectre="";
  type = ["acier", "combat", "dragon", "eau", "electrik", "fee", "feu", "glace", "insecte", "normal", "plante", "poison", "psy", "roche", "sol", "spectre", "tenebres", "vol"];
}
