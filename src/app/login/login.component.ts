import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../apiServices/user-service.service';
import { User } from '../models/user';
import { LoginTemplate } from '../templates/login-template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  currentUser;
  data;

  constructor(private service: UserServiceService, private router: Router) {

  }
  //this can be in a service (?)
  loginToApp() {
    
    let lt = new LoginTemplate();
    lt.username = this.username;
    lt.password = this.password;
    alert(JSON.stringify(lt))
    try{
      this.service.sendLogin(lt).subscribe(data => {
        this.data = data; 
      })
    }catch(e){
      console.log(e);
      this.failedToLogIn();
    }

    setTimeout(()=> {
      sessionStorage.setItem('currentUser', JSON.stringify(this.data));
      console.log("the item is : " + sessionStorage.currentUser);
      this.currentUser = JSON.parse(sessionStorage.currentUser);
      console.log(this.currentUser.userRole);
      alert("The role is: " + this.currentUser.userRole);
      if (this.currentUser.userRole == "FinanceManager") {
        this.router.navigateByUrl("/finance-manager-portal");
      }
      else {
        this.router.navigateByUrl("/user-home"); 
      }
    },3000);
    
  
  }
  failedToLogIn() {
    alert("failed to login");
    document.getElementById('failedToLogin').innerHTML+"Failed To Login";
  }
  
  ngOnInit(): void {
  }

}
