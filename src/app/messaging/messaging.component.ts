import { Component } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {
  contact_active = false;
  contacts = [
    {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    }, {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    }, {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    }, {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    }, {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    }, {
      Name: 'Osroot',
      Message: 'Hello There, This is Osama From Jobful!',
      time: 'now'
    },
  ]



  current_contact = {
    Name: 'Osama Essayed',
    Message: ['Hello There! This Osroot from Jobful', 'How May I assist you Today?'],
    time: 'now'

  }
  constructor() {
    console.log('We are in the MMessaging');

  }




  activate_contact() {
    console.log('Activated Contact');
    this.contact_active = true
    let messages
  }


  get_current_contact() {

  }

}
