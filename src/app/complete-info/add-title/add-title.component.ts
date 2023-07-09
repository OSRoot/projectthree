import { Component } from '@angular/core';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent {

  title: string = '';
  constructor() {
    this.get_title();
  }

  get_title() {
    let title = localStorage.getItem('Title');
    this.title = JSON.stringify(title)
    this.title = this.title.substring(1, this.title.length - 1)
    if (this.title=='null' || this.title =='ul'){
      this.title = 'Developer'
    }
    this.set_title()

  }
  set_title() {
    localStorage.setItem('Title', this.title)
  }


}
