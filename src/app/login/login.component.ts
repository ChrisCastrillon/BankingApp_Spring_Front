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

  loginToApp() {
    
    let lt = new LoginTemplate();
    lt.username = this.username;
    lt.password = this.password;
    alert(JSON.stringify(lt))
    try{
      this.service.sendLogin(lt).subscribe(data => {
        // console.log("the data is : " + data)
        // this.user.userId = data.userID;
        // this.user.role = data.userRole;
        // this.user.firstname = data.firstname;
        // this.user.lastname = data.lastname;
        // this.user.username = data.username;
        // this.user.password = data.password;
        // this.user.email = data.email;
        this.data = data;
        sessionStorage.setItem('currentUser', JSON.stringify(this.data));
      })
    }catch(e){
      console.log(e);
      this.failedToLogIn();
    }
    console.log("the item is : " + sessionStorage.currentUser);
    this.currentUser = JSON.parse(sessionStorage.currentUser);
    console.log(this.currentUser.userRole);
    
    if (this.currentUser.userRole = "FinanceManager") {
      this.router.navigateByUrl("/finance-manager-portal");
    }
      this.router.navigateByUrl("/user-home"); 
  }
  failedToLogIn() {
    alert("failed to login");
    document.getElementById('failedToLogin').innerHTML+"Failed To Login";
  }
  ngOnInit(): void {
  }

}
