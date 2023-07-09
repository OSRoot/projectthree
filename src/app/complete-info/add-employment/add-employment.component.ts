import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employment',
  templateUrl: './add-employment.component.html',
  styleUrls: ['./add-employment.component.scss']
})
export class AddEmploymentComponent {

  show_popup = 0;


  experience= [
    {
      "id": 0,
      "title": "string",
      "company": "string",
      "description": "stringstri",
      "region": "string",
      "country": "string",
      "workingInThisRole": true,
      "startDate": "string",
      "endDate": "string",
      "freelancerId": 0
    }]

  constructor() { }


  dismiss(){}
}
