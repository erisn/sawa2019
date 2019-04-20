import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




import {TraineeComponent} from './trainee-component/trainee.component';
import { FileComponentComponent } from './file-component/file-component.component';
import { GradeComponentComponent } from './grade-component/grade-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { RequestComponentComponent } from './request-component/request-component.component';
import { MilitaryStatusComponentComponent } from './militaryStatus-component/militaryStatus-component.component';
import { TraineeRoutingModule } from './trainee-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    TraineeComponent,
    FileComponentComponent,
    GradeComponentComponent,
    MilitaryStatusComponentComponent,
    ProfileComponentComponent,
    RequestComponentComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TraineeRoutingModule

  ],
  exports: [
    TraineeComponent,
    FileComponentComponent,
    GradeComponentComponent,
    ProfileComponentComponent,
    RequestComponentComponent,
    MilitaryStatusComponentComponent

  ]
})
export class TraineeModule { }
