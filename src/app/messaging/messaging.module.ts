import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalrService } from '../services/signalr.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SignalrService]
})
export class MessagingModule { }
