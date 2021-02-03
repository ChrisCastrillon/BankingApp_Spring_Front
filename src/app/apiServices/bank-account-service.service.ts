import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountServiceService {

  constructor(private httpClient:HttpClient) { }
  
  getAllAccountsForUser(user_id: string): Observable<AccountForUserResponse[]> {
    return this.httpClient.get<AccountForUserResponse[]>(`http://localhost:8091/data/user/accounts/=${user_id}`)
  }
}
