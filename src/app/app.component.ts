import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { GreensquareComponent } from './components/greensquare/greensquare.component';
import { BadgeComponent } from './components/badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LigneDeReponseModule, BadgeComponent, GreensquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashfront';
}
