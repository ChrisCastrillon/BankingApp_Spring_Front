import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { BankAccountServiceService } from '../apiServices/bank-account-service.service';

@Component({
  selector: 'app-manage-transfers',
  templateUrl: './manage-transfers.component.html',
  styleUrls: ['./manage-transfers.component.css']
})
export class ManageTransfersComponent implements OnInit {
  
  currentUser;
  form: FormGroup;
  accounts = [];
  
  fromAccountID;
  toAccountID;

  constructor(private formBuilder: FormBuilder, private bankAccountService: BankAccountServiceService) {
    this.form = this.formBuilder.group({

    accounts:['']});
    try {
      this.currentUser = JSON.parse(sessionStorage.currentUser);
      this.bankAccountService.getAllAccountsForUser(this.currentUser.userId).subscribe((res: any[]) =>
        
      {
          this.accounts = res;
          console.log(this.accounts);
        })

    }catch(e) {
      console.log(e);
    }
  }


  submit() {
    console.log(this.form.value);
  }


  ngOnInit(): void {
    
    console.log(this.currentUser.userId);
  }

}
