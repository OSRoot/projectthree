import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private connection:signalR.HubConnection
  private messageSubject = new Subject<string>();
  constructor(
  ) {
    this.connection = new HubConnectionBuilder().withUrl('http://localhost:5106/chatHub').configureLogging(signalR.LogLevel.Information).build()
    this.connection.start().then(()=>{
      console.log('Connection established');

    }).catch(err=>{
       console.log(err)
      })
  }

  send_message(message:any){
    let clientID =1;
    let freelancerID =1;
    let messagee=message
    this.connection.invoke("SendClientMessage", clientID, freelancerID, messagee).then((res)=>{
      console.log(res);

      console.log(`Massage: ${messagee}`);

    })

  }

  addMessageListener(): void {
    this.connection.on('MessageReceived', (message: string) => {
      console.log(`Received message: ${message}`);
      this.messageSubject.next(message);
    });
  }

  getMessages(): Subject<string> {
    return this.messageSubject;
  }

  public onMessageReceived(callback: (message: string) => void): void {
    this.connection.on('MessageReceived', callback)
  }
}
