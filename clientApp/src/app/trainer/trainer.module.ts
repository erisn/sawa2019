import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeComponentComponent } from './trainee-component/trainee-component.component';

@NgModule({
  declarations: [
    TraineeComponentComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    TraineeComponentComponent

  ]
})
export class TrainerModule { }
