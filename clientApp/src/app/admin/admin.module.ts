import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentComponent } from './admin-component/admin-component.component';

@NgModule({
  declarations: [
    AdminComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponentComponent
  ]
})
export class AdminModule { }
