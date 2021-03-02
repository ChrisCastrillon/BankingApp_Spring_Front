import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationTemplate } from '../templates/application-template';
import { BankAccountServiceService } from './bank-account-service.service';
import { AccountForUserResponse } from './payloads/account-for-user-response';
import {AccountApplicationResponse} from './payloads/account-application-response';
@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private httpClient:HttpClient) { }

  getAllApplications(): Observable<AccountApplicationResponse[]> {
    return this.httpClient.get<AccountApplicationResponse[]>('http://localhost:8091/data/application/applications');
  }
  submitAccountApplication(application:ApplicationTemplate): Observable<AccountForUserResponse[]> {
    return this.httpClient.post<AccountForUserResponse[]>('http://localhost:8091/data/application/submit', {
    //if this doesnt work try JSON.stringify  
      "accountType":application.accountType,
      "salary":application.salary,
      "jobTitle":application.jobTitle,
      "firstname":application.firstname,
      "lastname":application.lastname,
      "ssn":application.ssn,
      "email":application.email
    }) 
  }
}
