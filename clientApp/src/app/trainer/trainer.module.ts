import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerComponent } from './trainer-component/trainer.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { TrainerRoutingModule } from './trainer-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    TrainerComponent,
    ProfileComponent,
    MessagingComponent,
    ActivitiesComponent,
    AssignmentsComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    TrainerRoutingModule

  ],
  exports: [
    TrainerComponent

  ]
})
export class TrainerModule { }
