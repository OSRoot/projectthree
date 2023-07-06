import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeModule } from './welcome/welcome.module';

import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProposalsComponent } from './proposals/proposals.component';
import { FreelancerComponent } from './freelancer/freelancer/freelancer.component';
import { ClientComponent } from './client/client/client.component';
import { JobComponent } from './job/job.component';
import { ChooseComponent } from './auth/choose/choose.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ServicesComponent } from './client/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddInfoComponent } from './complete-info/add-info/add-info.component';
import { AddEduComponent } from './complete-info/add-edu/add-edu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    NotificationsComponent,
    MessagingComponent,
    ProposalsComponent,
    FreelancerComponent,
    ClientComponent,
    JobComponent,
    ChooseComponent,
    SignupComponent,
    LoginComponent,
    ServicesComponent,
    AddInfoComponent,
    AddEduComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
