import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MessagingComponent } from './messaging/messaging.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'messaging', component: MessagingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'proposals', component: ProposalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
