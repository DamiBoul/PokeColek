import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  theme: 'light' | 'dark' = 'light'; // Par défaut, le thème est défini sur light
  language: 'fr' | 'en' = 'fr'; // Par défaut, la langue est définie sur français

  constructor() { }

  setLanguage(language: string) {
    // Vérifier si la valeur de la langue est valide
    if (language === 'fr' || language === 'en') {
      this.language = language as 'fr' | 'en';
    } else {
      console.error('Language is not valid');
    }
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    // Ajouter ou retirer les classes CSS pour le thème
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
  }
}
