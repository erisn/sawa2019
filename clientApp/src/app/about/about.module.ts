import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentComponent } from './about-component/about-component.component';

@NgModule({
  declarations: [
    AboutComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponentComponent
  ]
})
export class AboutModule { }
