import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationTemplate } from '../templates/application-template';
import { AccountForUserResponse } from './payloads/account-for-user-response';

@Injectable({
  providedIn: 'root'
})
export class BankAccountServiceService {

  constructor(private httpClient:HttpClient) { }
  
  getAllAccountsForUser(user_id: string): Observable<AccountForUserResponse[]> {
    return this.httpClient.get<AccountForUserResponse[]>(`http://localhost:8091/data/accounts/${user_id}`)
  }
  transferFunds(fromAccountNumber: number, toAccountNumber:number, transferAmount: number ): Observable<AccountForUserResponse[]>{
    return this.httpClient.put<AccountForUserResponse[]>('http://localhost:8091/data/accounts/transfer', {
      "fromAccountNumber": fromAccountNumber,
      "toAccountNumber":toAccountNumber,
      "transferAmount":transferAmount
    })
  }

}
