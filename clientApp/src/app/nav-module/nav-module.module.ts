import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModuleComponent } from './nav-module.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    // Important! Import AppRoutingModule from app-routing.module.ts
    AppRoutingModule,


  ],
  exports: [
    NavModuleComponent
  ],
  declarations: [
    NavModuleComponent
  ]
})
export class NavModuleModule {


 }
