import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {

  }

  onSave() {
    alert(this.loginForm.get("login").value)
    console.log(this.loginForm.get("login").value)
    console.log(this.loginForm.get("password").value)

    
    localStorage.setItem("token", "")
  }

}
