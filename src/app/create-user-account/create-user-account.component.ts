import { Component, OnInit } from '@angular/core';
import { UserLoginResponse } from '../apiServices/payloads/user-login-response';
import { UserServiceService } from '../apiServices/user-service.service';
import { User } from '../models/user';

import { RegistrationFormTemplate } from '../templates/registration-form-template';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {

  constructor(private userService: UserServiceService) { }





  registerUser() {
  
    try {
    this.userService.submitUserRegistration(this.userRegistrationForm).subscribe((res: UserLoginResponse) => {
      this.user = res;
    }
    )  
  }catch(e) {
    console.log(e)
    alert("Could Not Submit User Registration Form!");
  }
   
  }
  ngOnInit(): void {
  }

  userRegistrationForm: RegistrationFormTemplate = new RegistrationFormTemplate();
  user;

}

