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
/*  public async login(u: string, p: string): Promise<boolean> {
    try {
      const user: Promise<User> = this.http.post<User>(environment.API_URL + '/user/login', {
        username: u,
        password: p
      }, {
        withCredentials: true
      }).toPromise();
      if (user != null) {
        this.setUser(await user);
        console.log(this.getUser);
        console.log(user);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  */
