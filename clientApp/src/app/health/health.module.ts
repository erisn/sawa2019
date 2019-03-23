import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponentComponent } from './health-component/health-component.component';

@NgModule({
  declarations: [
    HealthComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HealthComponentComponent
  ]
})
export class HealthModule { }
