import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string
  password!: string
  loginForm!: FormGroup
  // ##################################################################
  // ##################################################################

  constructor(
    private route: Router,
    private toaster: ToastrService,
    private auth_service: AuthService,

  ) { }
  // ##################################################################
  // ##################################################################
  ngOnInit(): void {
    this.get_login_info()
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  login() {
    let check_email = this.email
    let check_pass = this.password
    // ##################################################################
    if (check_email.length < 10) {
      this.show_error(`Invalid Email: Short`, 'Email');
      this.route.navigate(['/login'])
      return
    }
    // ##################################################################
    if (!check_email.includes('@') || !check_email.includes('.')) {
      this.show_error(`Invalid Email: ${check_email}, Email must include ('@'/'.') `, 'Email');
      this.route.navigate(['/login'])
      return
    }

    // ##################################################################
    if (check_pass.length < 8) {
      this.show_error(`Invalid Password: Short Password`, 'Password');
      this.route.navigate(['/login'])
      return
    }
    // ##################################################################
    this.set_login_info()



    // ##################################################################
    let login_form = this.loginForm.value
    this.auth_service.login(login_form)
  }
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
  // ##################################################################
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
  set_login_info() {
    let user = {
      email: this.email,
      password: this.password
    }
    localStorage.setItem('user_logged', JSON.stringify(user))
  }
  // ##################################################################
  // ##################################################################
  get_login_info() {
    let user: any = localStorage.getItem('user_logged');
    user = JSON.parse(user);

    this.email = user.email
    this.password = user.password

  }

}
