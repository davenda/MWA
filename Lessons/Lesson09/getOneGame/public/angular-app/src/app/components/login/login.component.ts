import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userLoggedIn = true;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log("form.value", this.loginForm.value);
    let credentials: Credentials = new Credentials();
    credentials.username = this.loginForm.value.username;
    credentials.password = this.loginForm.value.password;
    this._httpClient.post<any>("http://localhost:3000/api/users/login", credentials).toPromise()
      .then(response => {
        localStorage.setItem("gamesToken", response.token);
        this.loginForm.reset();
        const token = localStorage.getItem("gamesToken");
        // this._jwt.decodeToken(response.token);
      })
      .catch(response => {
        console.log(response)
      })
  }

  onLogout(): void {
    console.log("Logout Called");
  }
}


class Credentials {
  username!: string;
  password!: string;
}