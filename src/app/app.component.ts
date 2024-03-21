import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/settings-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dateLastUpdate!: Date;

  constructor(public settingService: SettingService, private router: Router) {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.settingService.theme = theme as 'light' | 'dark';
      this.settingService.setTheme(theme as 'light' | 'dark');
    }
    const language = localStorage.getItem('language');
    if (language) {
      this.settingService.language = language as 'fr' | 'en';
    }
  }

  ngOnInit(){
    
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}