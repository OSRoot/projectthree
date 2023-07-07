import { Component } from '@angular/core';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.scss']
})
export class AddExpComponent {

  checked = false
  level = ''
  new = false
  experienced = false
  expert = false
  constructor() {
    this.get_level()
  }


  check_choice(event: any) {
    this.checked = true
    let level = event.target.value;
    localStorage.setItem('level', level)
  }

  get_level() {
    let level = localStorage.getItem('level');
    this.level = JSON.stringify(level);
    this.level = this.level.substring(1, this.level.length - 1)
    // if (this.level === )
  }

}
