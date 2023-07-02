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
import { FreelancerComponent } from './freelancer/freelancer.component';
import { ClientComponent } from './client/client.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProposalsComponent } from './proposals/proposals.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    NotificationsComponent,
    MessagingComponent,
    FreelancerComponent,
    ClientComponent,
    ProposalsComponent,
    // WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
