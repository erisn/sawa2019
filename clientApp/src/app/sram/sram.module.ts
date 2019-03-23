import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SramComponentComponent } from './sram-component/sram-component.component';

@NgModule({
  declarations: [
    SramComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SramComponentComponent
  ]
})
export class SramModule { }
