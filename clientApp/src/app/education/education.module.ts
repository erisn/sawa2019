import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponentComponent } from './education-component/education-component.component';

@NgModule({
  declarations: [
    EducationComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationComponentComponent
  ]
})
export class EducationModule { }
