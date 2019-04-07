import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationComponentComponent } from './education-component/education-component.component';
import { Edu1Component } from './edu1/edu1.component';
import { Edu2Component } from './edu2/edu2.component';
import { Edu3Component } from './edu3/edu3.component';
import { LandingPageComponent } from './landing-page/landing-page.component';







// Routes for Education Module and its Children
const educationRoutes: Routes = [
    { path: 'education', component: EducationComponentComponent,
          children: [
        { path: 'edu1', component: Edu1Component},
        { path: 'edu2', component: Edu2Component},
        { path: 'edu3', component: Edu3Component},
        { path: '', component: LandingPageComponent}
         ]
     }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(educationRoutes)],
  exports: [RouterModule]

})
export class EducationRoutingModule { }
