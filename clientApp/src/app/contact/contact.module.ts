import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { Con1Component } from './con1/con1.component';
import { Con2Component } from './con2/con2.component';
import { Con3Component } from './con3/con3.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ContactComponentComponent,
    Con1Component,
    Con2Component,
    Con3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ContactComponentComponent
  ]
})
export class ContactModule { }
