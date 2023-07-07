import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {

  background = 'gray'
  active = false;
  choice!: string
  // ##################################################################
  // ##################################################################
  constructor(
    private route: Router,
  ) {

  }
  // ##################################################################
  // ##################################################################
  make_choice(event: any) {
    this.active = true
    this.background = '#5075d5'
    this.choice = event.target.value
    this.set_rolename()
  }
  // ##################################################################
  // ##################################################################

  set_rolename() {
    localStorage.setItem('roleName', this.choice);

  }
  // ##################################################################
  // ##################################################################
  open() {
    if (this.choice === 'Freelancer' || 'Client') {
      this.route.navigate(['/signup'])

    }
  }
  // ##################################################################
  // ##################################################################
}
