import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModuleComponent } from './nav-module.component';
import { TraineeRoutingModule } from '../trainee/trainee-routing.module';
import { TrainerRoutingModule } from '../trainer/trainer-routing.module';
import { ServiceRoutingModule } from '../services/Service-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Important! Import all available child routing modules
    TraineeRoutingModule,
    TrainerRoutingModule,
    ServiceRoutingModule
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
