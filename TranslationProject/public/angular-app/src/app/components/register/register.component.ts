import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this._formBuilder.group({
      name: ["", Validators.required],
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", Validators.required],
      passwordRepeat: ["", Validators.required]
    })
  }

  onSubmit(): void {
    console.log("Form Submitted");
    console.log("Form Username", this.registrationForm.value.username);
    console.log("values", this.registrationForm.value);
  }

}
