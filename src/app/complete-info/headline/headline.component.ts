import { Component } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {

  headline!: string


  constructor() {
    this.get_headline()
  }



  set_headline() {
    localStorage.setItem('headline', this.headline)
  }
  get_headline() {
    let headline = localStorage.getItem('headline')
    this.headline = JSON.stringify(headline);
    this.headline = this.headline.substring(1, this.headline.length - 1);
    if(this.headline =='ul' || this.headline =='null'){
      this.headline = ''
    }
  }
}
