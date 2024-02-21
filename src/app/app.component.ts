import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LigneDeReponseModule } from './components/ligne-de-reponse/ligne-de-reponse.module';
import { BadgeComponent } from './components/badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LigneDeReponseModule, BadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Napoleon';
}
