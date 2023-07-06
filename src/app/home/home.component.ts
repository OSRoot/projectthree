import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  show_serviec_options = false;
  username!: string

  constructor() {
    console.log('We are in the Home');

  }


  show_options() {
    this.show_serviec_options != this.show_serviec_options
  }

  get_freelancer() {

  }
}
