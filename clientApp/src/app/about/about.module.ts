import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponentComponent } from './about-component/about-component.component';
import { Us1Component } from './us1/us1.component';
import { Us2Component } from './us2/us2.component';
import { Us3Component } from './us3/us3.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AboutComponentComponent,
    Us1Component,
    Us2Component,
    Us3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AboutComponentComponent
  ]
})
export class AboutModule { }
