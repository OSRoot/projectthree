import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import * as bcrypt from 'bcrypt'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email_word!: string
  username!: string;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  roleName!: string;
  signup_form!: FormGroup;

  // ##################################################################
  // ##################################################################
  constructor(
    private route: Router,
    private toaster: ToastrService
  ) { }
  // ##################################################################
  // ##################################################################
  ngOnInit(): void {
    this.get_roleName()
    this.show_toaster()
    this.set_role()
    this.signup_form = new FormGroup({
      username: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  // ##################################################################
  // ##################################################################
  show_toaster() {
    this.toaster.info(`Signup as ${this.roleName}`, 'Welcome', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
      // closeButton: true
      newestOnTop: true,
      // easeTime: 0
      // toastClass: ''
    })

  }


  // ##################################################################
  // ##################################################################
  set_role() {
    if (this.roleName === 'Freelancer') {
      this.email_word = 'Email address'
      console.log(this.roleName);

      return
    }
    else {
      this.email_word = 'Company Email'
    }
  }
  // ##################################################################
  // ##################################################################

  if_freeelancer() {
    console.log(this.roleName);

    if (this.roleName === 'Freelancer') {
      this.route.navigate(['/create-profile/welcome'])
    }
    else if (this.roleName === 'Client') {
      this.route.navigate(['/create-profile/headline'])

    }
  }
  // ##################################################################
  // ##################################################################
  logger() {
    console.log(this.username);
    console.log(this.firstname);
    console.log(this.signup_form.value);

  }

  // ##################################################################
  // ##################################################################
  signup_freelancer() {
    let form: any = this.signup_form.value
  }

  // ##################################################################
  // ##################################################################
  signup_client() { }

  // ##################################################################
  // ##################################################################
  get_roleName() {
    let role = localStorage.getItem('roleName');
    this.roleName = JSON.stringify(role)
    this.roleName = this.roleName.substring(1, this.roleName.length - 1)

  }

  // ##################################################################
  // ##################################################################
  set_signup_info() {
    let user = {
      username: this.username,
      fName: this.firstname,
      lName: this.lastname,
      email: this.email,
      password: this.password
    };
    localStorage.setItem('user_signed', JSON.stringify(user))
  }
}
