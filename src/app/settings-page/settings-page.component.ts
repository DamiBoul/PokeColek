import { Component } from '@angular/core';
import { SettingService } from '../services/settings-service.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  constructor(public settingsService: SettingService) { }

  
  toggleTheme() {
    if (this.settingsService.theme === 'light') {
      this.settingsService.theme = 'dark';
    } else {
      this.settingsService.theme = 'light';

    }
    // Sauvegarder le thème dans le stockage local
    localStorage.setItem('theme', this.settingsService.theme);
  }

  setLanguage(event: any) { // Modifier le type du paramètre pour être 'any'
    if (this.settingsService) {
      const language = event.target.value;
      this.settingsService.language = language;
      localStorage.setItem('language', language);
    }
  }
}
