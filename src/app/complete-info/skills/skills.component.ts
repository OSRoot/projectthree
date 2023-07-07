import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = ['html', 'Angular', 'React', 'Ionic', 'css', 'Mobile App', 'Microsoft Office'];

  constructor() { }


  logger(event: any) {
    console.log(event.target.value);
  }


}
