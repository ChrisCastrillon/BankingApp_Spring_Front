import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { assertPlatform, Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { BankAccountServiceService } from '../apiServices/bank-account-service.service';
import { AccountForUserResponse } from '../apiServices/payloads/account-for-user-response';

@Component({
  selector: 'app-manage-transfers',
  templateUrl: './manage-transfers.component.html',
  styleUrls: ['./manage-transfers.component.css']
})
export class ManageTransfersComponent implements OnInit {
  currentUser;
  accounts=[];
  transferAmount;
  fromAccount:AccountForUserResponse;
  toAccount:AccountForUserResponse;
  time = new Date();

  constructor(private bankAccountService: BankAccountServiceService) {
 
  }
  submitTransfer(fromAccount, toAccount, transferAmount) {
    try {
      this.bankAccountService.transferFunds(fromAccount.accountNumber, toAccount.accountNumber, transferAmount).subscribe(data => {
        this.accounts = data;
      })
    }catch(e) {
      alert("could not complete transfer" + e);
    }
  }

  getAllAccounts() {

    this.currentUser = JSON.parse(sessionStorage.currentUser);
    try {
      this.bankAccountService.getAllAccountsForUser(this.currentUser.userId).subscribe((res:any[])=> {
      this.accounts = res;
    }
    )
    }catch(e) {
      console.log(e);
      alert("Cannot retrieve accounts");
  }
  
  }

  ngOnInit(): void {
    this.getAllAccounts();
  }

}
