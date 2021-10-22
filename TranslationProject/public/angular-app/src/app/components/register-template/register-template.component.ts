import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styles: [
  ]
})
export class RegisterTemplateComponent implements OnInit {

  user!: User;
  // @ViewChild('registrationForm');
  registrationForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: "Jack",
      username: "jack2021",
      password: "123",
      passwordRepeat: "123"
    }
    // setTimeout(() => this.registrationForm.setValue(this.user));
  }

  onSubmit(): void {
    console.log("Values are", this.registrationForm.value);
  }

  onClear(): void {
    // form.resetForm();
    this.user.name = '';
    this.user.username = '';
    this.user.password = '';
    this.user.passwordRepeat = '';
  }
}

export class User {
  name!: string;
  username!: string;
  password!: string;
  passwordRepeat!: string;
}