import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EducationComponentComponent } from './education/education-component/education-component.component';
import { AboutComponentComponent } from './about/about-component/about-component.component';
import { ContactComponentComponent } from './contact/contact-component/contact-component.component';
import { SramComponentComponent } from './sram/sram-component/sram-component.component';
import { Edu1Component } from './education/edu1/edu1.component';
import { Edu2Component } from './education/edu2/edu2.component';
import { Edu3Component } from './education/edu3/edu3.component';
import { Us1Component } from './about/us1/us1.component';
import { Us2Component } from './about/us2/us2.component';
import { Us3Component } from './about/us3/us3.component';
import { Con1Component } from './contact/con1/con1.component';
import { Con2Component } from './contact/con2/con2.component';
import { Con3Component } from './contact/con3/con3.component';


const routes: Routes = [
  { path: 'education', component: EducationComponentComponent,
    children: [
      { path: 'edu1', component: Edu1Component},
      { path: 'edu2', component: Edu2Component},
      { path: 'edu3', component: Edu3Component},
    ]},
  { path: 'about', component: AboutComponentComponent,
    children: [
      { path: 'us1', component: Us1Component},
      { path: 'us2', component: Us2Component},
      { path: 'us3', component: Us3Component},
    ]},
  { path: 'contact', component: ContactComponentComponent,
    children: [
      { path: 'con1', component: Con1Component},
      { path: 'con2', component: Con2Component},
      { path: 'con3', component: Con3Component},
    ]},
  { path: 'service', component: AboutComponentComponent},
  { path: 'sign', component: SramComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
  { path: 'trainee', loadChildren: '../app/trainee/trainee.module#TraineeModule'},
{ path: 'trainer', loadChildren: '../app/trainer/trainer.module#TrainerModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
