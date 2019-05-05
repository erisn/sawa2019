import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModuleComponent } from './nav-module.component';
import { TraineeRoutingModule } from '../trainee/trainee-routing.module';
import { TrainerRoutingModule } from '../trainer/trainer-routing.module';
import { ServiceRoutingModule } from '../services/Service-routing.module';
import { EducationRoutingModule } from '../education/education-routing.module';
import { AboutRoutingModule } from '../about/about-routing.module';
import { contactRoutingModule } from '../contact/contact-routing.module';
import { SramRoutingModule } from '../sram/sram-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Important! Import all available child routing modules
    TraineeRoutingModule,
    TrainerRoutingModule,
    ServiceRoutingModule,
    EducationRoutingModule,
    AboutRoutingModule,
    contactRoutingModule,
    SramRoutingModule
  ],
  exports: [
    NavModuleComponent
  ],
  declarations: [
    NavModuleComponent
  ]
})
export class NavModuleModule {


 }
