import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/settings-service.service';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

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
    /*const firebaseConfig = {
      apiKey: "AIzaSyDMQ9cDfkAtWnGz42KTE8R1ljkNR-w06Us",
      authDomain: "pocollection-c15f2.firebaseapp.com",
      projectId: "pocollection-c15f2",
      storageBucket: "pocollection-c15f2.appspot.com",
      messagingSenderId: "493665883497",
      appId: "1:493665883497:web:73b691664028a03b6399f8",
      measurementId: "G-9FYZLELYZ0"
    };
    firebase.initializeApp(firebaseConfig);*/
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}