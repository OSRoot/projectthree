import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

const API = 'http://localhost:5106/api/Auth/'
const API0 = 'http://localhost:5106/api/'
const API1 = 'http://localhost:5106/api/Freelancer/AddLanExED'
// const API1 = 'http://localhost:5106/api/Freelancer/EditLanExED/id'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,

  ) { }




  // ##################################################################
  // ##################################################################
  // ##################################################################
  sign_freelancer(sign_form: any) {
    this.http.post(`${API}/register`, sign_form).pipe(take(1))
  }
  // ##################################################################
  // ##################################################################
  // ##################################################################

  sign_client(sign_form: any) {
    this.http.post(`${API}/register`, sign_form).pipe(take(1))
  }
  // ##################################################################
  // ##################################################################
  // ##################################################################

  login(login_form: any) {
    this.http.post(`${API}/login`, login_form).pipe(take(1))
  }
  // ##################################################################
  // ##################################################################
  // ##################################################################



}
