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
import { VerifyEmailComponent } from './complete-info/verify-email/verify-email.component';
import { AddExpComponent } from './complete-info/add-exp/add-exp.component';
import { AddLangComponent } from './complete-info/add-lang/add-lang.component';
import { AddSkillComponent } from './complete-info/add-skill/add-skill.component';
import { AddGoalComponent } from './complete-info/add-goal/add-goal.component';
import { GetStartedComponent } from './complete-info/get-started/get-started.component';
import { AddTitleComponent } from './complete-info/add-title/add-title.component';
import { WorkPreferenceComponent } from './complete-info/work-preference/work-preference.component';
import { AddEmploymentComponent } from './complete-info/add-employment/add-employment.component';
import { BioComponent } from './complete-info/bio/bio.component';
import { ToastrModule } from 'ngx-toastr';
import { HeadlineComponent } from './complete-info/headline/headline.component';
import { SkillsComponent } from './complete-info/skills/skills.component';
import { ScopeComponent } from './complete-info/scope/scope.component';
import { BudgetComponent } from './complete-info/budget/budget.component';
import { ScopeLvlComponent } from './complete-info/scope-lvl/scope-lvl.component';
import { RateComponent } from './complete-info/rate/rate.component';
import { CategoriesComponent } from './complete-info/categories/categories.component';
import { ProfileComponent } from './complete-info/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

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
    VerifyEmailComponent,
    AddExpComponent,
    AddLangComponent,
    AddSkillComponent,
    AddGoalComponent,
    GetStartedComponent,
    AddTitleComponent,
    WorkPreferenceComponent,
    AddEmploymentComponent,
    BioComponent,
    HeadlineComponent,
    SkillsComponent,
    ScopeComponent,
    BudgetComponent,
    ScopeLvlComponent,
    RateComponent,
    CategoriesComponent,
    ProfileComponent,
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
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
