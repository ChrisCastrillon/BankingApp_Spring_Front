import { Component, OnInit } from '@angular/core';
import { BankAccountServiceService } from '../apiServices/bank-account-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  dataArray = [];
  constructor(private service: BankAccountServiceService) {


  }

  public getAllAccounts() {
    //you need to get the id from the session storage
    let u = JSON.parse(sessionStorage.getItem('currentUser'));
    try {
      this.service.getAllAccountsForUser("1").subscribe((res: any[]) =>
        {
          this.dataArray = res;
          console.log(this.dataArray[0]);
        })

    }catch(e) {
      console.log(e);
    }
    
  }
 

  ngOnInit(): void {
    this.getAllAccounts();
  }

}
