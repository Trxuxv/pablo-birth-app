import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppLoginComponent {

  errorMessage: string;

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private service: LoginService, private router: Router) {
  }

  onSave() {
    this.service.login(this.loginForm.get("login").value, this.loginForm.get("password").value)
      .then(x => {
        this.errorMessage = x.toString();
        var isAuthenticated = localStorage.getItem("token");
        if (isAuthenticated !== null) {
          this.router.navigate(['/', 'home']);
        } else {
          this.router.navigate(['/', 'login']);
        }
      })
  }
}