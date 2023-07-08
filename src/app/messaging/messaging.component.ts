import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../services/signalr.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit  {
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


 public message!:string;
 public messages!:string[]
  constructor(
    private chat:SignalrService
  ) {

    chat.onMessageReceived(message => {
      this.messages.push(message);
    });
    console.log('We are in the MMessaging');

  }


  ngOnInit(): void {
    this.chat.addMessageListener();
    this.chat.getMessages().subscribe(message => {
      console.log(`Received message: ${message}`);
      this.messages.push(message);
    });
    console.log(this.messages);

  }
  public sendMessage(): void {
    this.chat.send_message(this.message);
    this.message = '';
  }


  activate_contact() {
    console.log('Activated Contact');
    this.contact_active = true
    let messages
  }


  get_current_contact() {

  }

}
