import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponentComponent } from './education-component/education-component.component';
import { Edu1Component } from './edu1/edu1.component';
import { Edu2Component } from './edu2/edu2.component';
import { Edu3Component } from './edu3/edu3.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    EducationComponentComponent,
    Edu1Component,
    Edu2Component,
    Edu3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    EducationComponentComponent,
    Edu1Component,
    Edu2Component,
    Edu3Component
  ]
})
export class EducationModule { }
