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
  private user = new User();
  username:string;
  password:string;




  constructor(private service: UserServiceService, private router: Router) {

  }

  loginToApp() {
    
    let lt = new LoginTemplate();
    lt.username = this.username;
    lt.password = this.password;
    alert(JSON.stringify(lt))
    try{
      this.service.sendLogin(lt).subscribe(data => {
        console.log(data)
        this.user.userId = data.userID;
        this.user.role = data.userRole;
        this.user.firstname = data.firstname;
        this.user.lastname = data.lastname;
        this.user.username = data.username;
        this.user.password = data.password;
        this.user.email = data.email;
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        alert(data.userRole);
        
        this.router.navigateByUrl("/user-home");
        // if (this.user.role = "Finance Manager") {
        //   this.router.navigateByUrl("/finance-manager-portal");
        // }
        // else {
        //   this.router.navigateByUrl("/user-home");
        // }
      })
    }catch(e){
      console.log(e);
    }
  }



  ngOnInit(): void {
  }

}
