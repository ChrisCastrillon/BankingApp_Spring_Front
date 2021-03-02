import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../apiServices/application-service.service';
import { BankAccountServiceService } from '../apiServices/bank-account-service.service';
import { AccountForUserResponse } from '../apiServices/payloads/account-for-user-response';
import { ApplicationTemplate } from '../templates/application-template';

@Component({
  selector: 'app-apply-for-new-account',
  templateUrl: './apply-for-new-account.component.html',
  styleUrls: ['./apply-for-new-account.component.css']
})
export class ApplyForNewAccountComponent implements OnInit {
  

  constructor(private applicationService: ApplicationServiceService) { }

  getAccountType() {
    alert(this.application.accountType)
    alert(JSON.stringify(this.application))
  }



  submitApplication() {
    try {
      this.applicationService.submitAccountApplication(this.application).subscribe((res: AccountForUserResponse[]) => {
        this.dataArray = res;
      })
    }catch(e) {
      console.log(this.dataArray[0]);
    }
  }
  ngOnInit(): void {

  }
  application: ApplicationTemplate = new ApplicationTemplate();
  dataArray:AccountForUserResponse[];
  accountType;
  


}
