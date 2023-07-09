import { Component } from '@angular/core';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.scss']
})
export class AddEduComponent {
  show_popup=0
  educations= [
    {
      // "id": 0,
      "school": "string",
      "degree": "string",
      "feildOfStudy": "string",
      "dateFrom": "string",
      "dateTo": "string",
      "description": "stringstringstringst",
      // "freelancerId": 0
    }]
}
