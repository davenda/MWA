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
      name: ["Jack", Validators.required],
      username: ["jack2021", [Validators.required, Validators.minLength(6)]],
      password: ["123", Validators.required],
      passwordRepeat: ["123", Validators.required]
    })
    // this.registrationForm = new FormGroup({
    //   name: new FormControl("Jack"),
    //   username: new FormControl("Jack2021"),
    //   password: new FormControl("123"),
    //   passwordRepeat: new FormControl("123"),
    // })
  }

  onSubmit(): void {
    console.log("Form Submitted");
    console.log("Form Username", this.registrationForm.value.username);
    console.log("values", this.registrationForm.value);
    
    
    
  }

}
