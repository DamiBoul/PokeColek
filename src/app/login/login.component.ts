import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})


  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect';
    }
  }

  export class LoginComponent {
    email = '';
    password = '';
  
    constructor(private afAuth: AngularFireAuth) {}
  
    login() {
      this.afAuth.signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          console.log('User logged in successfully:', res);
          // Redirect the user to the home page or show a success message
        })
        .catch(err => {
          console.error('Error logging in:', err);
          // Show an error message
        });
    }
  logout() {
    this.auth.logout();
    this.message = 'Vous êtes déconnecté';
  }
  }

  


