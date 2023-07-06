import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  roleName!: string
  signup_form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.get_roleName()
    this.signup_form = new FormGroup({
      username: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  logger() {
    console.log(this.username);
    console.log(this.firstname);
    console.log(this.signup_form.value);

  }

  signup_freelancer() {
    let form: any = this.signup_form.value
  }
  signup_client() { }

  get_roleName() {
    let role = localStorage.getItem('roleName');
    this.roleName = JSON.stringify(role)
    this.roleName = this.roleName.substring(1, this.roleName.length - 1)

  }
}
