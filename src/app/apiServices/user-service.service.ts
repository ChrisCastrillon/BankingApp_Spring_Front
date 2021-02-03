import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLoginResponse} from './payloads/user-login-response';
import { Observable } from 'rxjs';
import {LoginTemplate} from 'src/app/templates/login-template'

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
}
