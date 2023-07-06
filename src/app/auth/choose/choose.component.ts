import { Component } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {

  background = 'gray'
  active = false;
  choice!: string
  constructor() {

  }

  make_choice(event: any) {
    this.active = true
    this.background = '#5075d5'
    this.choice = event.target.value
    this.set_rolename()
  }

  set_rolename() {
    localStorage.setItem('roleName', this.choice)
  }
}
