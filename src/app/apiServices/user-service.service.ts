import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginResponse} from './payloads/user-login-response';
import { Observable } from 'rxjs';
import {LoginTemplate} from 'src/app/templates/login-template'
import { RegistrationFormTemplate } from '../templates/registration-form-template';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) {
  }
  //send a post request to the login controller
  sendLogin(loginForm:LoginTemplate): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>('http://localhost:8091/data/user/login', {
      "username":loginForm.username,
      "password":loginForm.password
    })
  }

  submitUserRegistration(userRegistrationForm: RegistrationFormTemplate) : Observable<UserLoginResponse>{
    return this.httpClient.post<UserLoginResponse>('http://localhost:8091/data/user/register', {
      "firstname":userRegistrationForm.firstname,
      "lastname": userRegistrationForm.lastname,
      "username": userRegistrationForm.username,
      "password": userRegistrationForm.password,
      "email": userRegistrationForm.email
    })
  }

  async submitLogin(loginForm:LoginTemplate) {
    const loginData = JSON.stringify({"username":loginForm.username, "password": loginForm.password});
    try {
      let response = await fetch("http://localhost:8091/data/user/login",{
        body: loginData,
        method:'POST',
        // headers: {"Content-Type": "application/json"},
        // credentials:'include'
      });
      return response;
    } catch (error) {
      console.log(error);
    }
   
  }
}
