import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../apiServices/application-service.service';
import { AccountApplicationResponse } from '../apiServices/payloads/account-application-response';

@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit {

  constructor(private applicationService:ApplicationServiceService) { }

  getAllApplications() {
    this.applicationService.getAllApplications().subscribe((data:AccountApplicationResponse[])=>{
      this.applications = data;
      console.log("the appications are: " + JSON.stringify(this.applications));
    })
  }
  printApp(row) {
    console.log(row);
  }
  ngOnInit(): void {
    this.getAllApplications();
  }
  applications:AccountApplicationResponse[];
  selectedApplication:AccountApplicationResponse;
  index: number;



}
