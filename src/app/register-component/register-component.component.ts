import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})

export class RegisterComponent {
  email = '';
  password = '';

  constructor(private afAuth: AngularFireAuth) {}

  register() {this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        console.log('User registered successfully:', res);
        // Redirect the user to the login page or show a success message
      })
      .catch(err => {
        console.error('Error registering user:', err);
        // Show an error message
      });
  }
}