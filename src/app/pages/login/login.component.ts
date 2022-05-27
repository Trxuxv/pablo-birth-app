import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppLoginComponent {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: LoginService, private router: Router) {
  }

  onSave() {
    this.service.login(this.loginForm.get("login").value, this.loginForm.get("password").value)
      .then(() => {
        var isAuthenticated = localStorage.getItem("token");
        if (isAuthenticated !== null) {
          this.router.navigate(['/', 'home']);
        } else {
          this.router.navigate(['/', 'login']);
        }
      })
  }
}