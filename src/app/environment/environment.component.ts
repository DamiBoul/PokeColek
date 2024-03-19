import { Component } from '@angular/core';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css'
})
export const Environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};