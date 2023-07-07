import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MessagingComponent } from './messaging/messaging.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './auth/login/login.component';
// import { ChooseComponent } from './choose/choose.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChooseComponent } from './auth/choose/choose.component';
import { AddInfoComponent } from './complete-info/add-info/add-info.component';
import { AddEduComponent } from './complete-info/add-edu/add-edu.component';
import { AddExpComponent } from './complete-info/add-exp/add-exp.component';
import { AddLangComponent } from './complete-info/add-lang/add-lang.component';
import { AddSkillComponent } from './complete-info/add-skill/add-skill.component';
import { AddGoalComponent } from './complete-info/add-goal/add-goal.component';
import { VerifyEmailComponent } from './complete-info/verify-email/verify-email.component';
import { GetStartedComponent } from './complete-info/get-started/get-started.component';
import { AddTitleComponent } from './complete-info/add-title/add-title.component';
import { WorkPreferenceComponent } from './complete-info/work-preference/work-preference.component';
import { AddEmploymentComponent } from './complete-info/add-employment/add-employment.component';
import { ClientComponent } from './client/client/client.component';
import { FreelancerComponent } from './freelancer/freelancer/freelancer.component';
import { BioComponent } from './complete-info/bio/bio.component';
import { HeadlineComponent } from './complete-info/headline/headline.component';
import { SkillsComponent } from './complete-info/skills/skills.component';
import { ScopeComponent } from './complete-info/scope/scope.component';
import { BudgetComponent } from './complete-info/budget/budget.component';
import { RateComponent } from './complete-info/rate/rate.component';
import { ProfileComponent } from './complete-info/profile/profile.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'messaging', component: MessagingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'job/:id', component: JobComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'create-profile', component: AddInfoComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'create-profile/education', component: AddEduComponent },
  { path: 'create-profile/experience', component: AddExpComponent },
  { path: 'create-profile/languages', component: AddLangComponent },
  { path: 'create-profile/add-skills', component: AddSkillComponent },
  { path: 'create-profile/goal', component: AddGoalComponent },
  { path: 'create-profile/welcome', component: GetStartedComponent },
  { path: 'create-profile/title', component: AddTitleComponent },
  { path: 'create-profile/work-preference', component: WorkPreferenceComponent },
  { path: 'create-profile/employment', component: AddEmploymentComponent },
  { path: 'create-profile/bio', component: BioComponent },
  { path: 'create-profile/rate', component: RateComponent },
  { path: 'create-profile/profile', component: ProfileComponent },
  { path: 'create-profile/headline', component: HeadlineComponent },
  { path: 'create-profile/skills', component: SkillsComponent },
  { path: 'create-profile/scope', component: ScopeComponent },
  { path: 'create-profile/budget', component: BudgetComponent },
  { path: 'client', component: ClientComponent },
  { path: 'freelancer', component: FreelancerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
