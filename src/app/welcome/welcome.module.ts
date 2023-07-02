import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class WelcomeModule { }
