import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilitaryComponentComponent } from './military-component/military-component.component';

@NgModule({
  declarations: [
    MilitaryComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MilitaryComponentComponent
  ]
})
export class MilitaryModule { }
