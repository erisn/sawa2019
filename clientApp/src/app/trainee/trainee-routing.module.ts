import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { GradeComponentComponent } from './grade-component/grade-component.component';
import { RequestComponentComponent } from './request-component/request-component.component';
import { FileComponentComponent } from './file-component/file-component.component';
import { MilitaryStatusComponentComponent } from './militaryStatus-component/militaryStatus-component.component';
import { TraineeComponent } from './trainee-component/trainee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Routes for Trainee Module and its Children
const traineeRoutes: Routes = [
    { path: 'trainee', component: TraineeComponent,
          children: [
        { path: 'profile', component: ProfileComponentComponent },
        { path: 'grade', component: GradeComponentComponent },
        { path: 'request', component: RequestComponentComponent },
        { path: 'upload', component: FileComponentComponent },
        { path: 'militaryStatus', component: MilitaryStatusComponentComponent },
        { path: '', component: LandingPageComponent },
        { path: '**', component: LandingPageComponent }
        ]
     }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(traineeRoutes)],
  exports: [RouterModule]

})
export class TraineeRoutingModule { }
