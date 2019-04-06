import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerComponent } from './trainer-component/trainer.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { LandingPageComponent } from '../trainer/landing-page/landing-page.component';


// All routes for Trainer module and its children
const trainerRoutes: Routes = [
  { path: 'trainer', component: TrainerComponent,
  children: [
    { path: 'profile', component: ProfileComponent},
    { path: 'messaging', component: MessagingComponent},
    { path: 'activities', component: ActivitiesComponent},
    { path: 'assignments', component: AssignmentsComponent},
    { path: '', component: LandingPageComponent},
    { path: '**', component: LandingPageComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(trainerRoutes)],
  exports: [RouterModule]

})
export class TrainerRoutingModule { }
