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
    this.set_role()
    this.get_roleName()
    this.show_toaster()
    this.get_signup_info()
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
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  signup_freelancer() {

    let check_username = this.username
    let check_fName = this.firstname
    let check_lName = this.lastname
    let check_email = this.email
    let check_pass = this.password
    // ##################################################################
    if (check_username.length < 3 || check_username.length > 15) {
      this.show_error('Invalid username', 'Username');
      this.route.navigate(['/signup'])
      return
    }
    // ##################################################################
    if (check_fName.length < 3 || check_fName.length > 15) {
      this.show_error(`Invalid Name: ${check_fName}, please enter a valid name`, 'First Name');
      this.route.navigate(['/signup'])
      return
    }
    // ##################################################################
    if (check_lName.length < 3 || check_lName.length > 15) {
      this.show_error(`Invalid Name: ${check_lName}, please enter a valid name`, 'Last Name');
      this.route.navigate(['/signup'])
      return
    }
    // ##################################################################
    if (check_email.length < 10 || !check_email.includes('@') || !check_email.includes('.')) {
      this.show_error(`Invalid Email: Short email, Note: email must include ('@'/'.') `, 'Email');
      this.route.navigate(['/signup'])
      return
    }
    // ##################################################################
    if (check_pass.length < 8) {
      this.show_error(`Invalid Password: Short Password`, 'Password');
      this.route.navigate(['/signup'])
      return
    }
    // ##################################################################
    let form: any = this.signup_form.value
    if (this.roleName === 'Freelancer') {
      this.route.navigate(['/create-profile/welcome'])
    }
    else if (this.roleName === 'Client') {
      this.route.navigate(['/create-profile/headline'])

    }
    this.set_signup_info()
  }

  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
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

  // ##################################################################
  // ##################################################################

  get_signup_info() {
    if (localStorage.getItem('user_signed')){
      let user: any = localStorage.getItem('user_signed')||null;
      let u = JSON.parse(user);
      this.username = u.username ||null
      this.firstname = u.fName||null
      this.lastname = u.lName||null
      this.email = u.email||null
      this.password = u.password||null
     return
    }
    console.log(this.username);

  }

  // ##################################################################
  // ##################################################################
  check_form() {

  }

  // ##################################################################
  // ##################################################################
  show_error(message: any, tiltle: any) {
    this.toaster.error(message, tiltle, {
      timeOut: 3000,
      positionClass: 'toast-top-left'
    })
  }

  // ##################################################################
  // ##################################################################
}
