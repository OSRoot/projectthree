import { Component } from '@angular/core';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent {


  skills = [];
  constructor() {
    this.get_skills()
  }

  get_skills() {
    let sks: any = localStorage.getItem('savedSkills')
    this.skills = JSON.parse(sks)
    console.log(this.skills);

  }

}
