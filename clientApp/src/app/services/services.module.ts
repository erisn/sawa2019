import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent } from './services-component/services.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { ServiceRoutingModule } from './Service-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    ServicesComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    LandingPageComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ],
  exports: [
    ServicesComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component
  ]
})
export class ServicesModule { }
