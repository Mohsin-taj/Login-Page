import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {

  useremail: string = '';
  userpassword: string = '';
  formSubmitted: boolean = false;
  isloginform: boolean = false;
  

  submitfroms() {
    this.formSubmitted = true;

    if (this.useremail && this.userpassword) {
      this.isloginform = true
    }
  }

  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/signup']);
  }

  
}
