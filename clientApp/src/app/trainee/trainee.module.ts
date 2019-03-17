import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TraineeComponent} from './trainee-component/trainee.component';

@NgModule({
  declarations: [TraineeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TraineeComponent
  ]
})
export class TraineeModule { }
