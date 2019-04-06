import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services-component/services.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// All routes for Service module and its children
const serviceRoutes: Routes = [
  { path: 'service', component: ServicesComponent,
  children: [
    { path: 'service1', component: Service1Component},
    { path: 'service2', component: Service2Component},
    { path: 'service3', component: Service3Component},
    { path: 'service4', component: Service4Component},
    { path: '', component: LandingPageComponent},
    { path: '**', component: LandingPageComponent}


  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(serviceRoutes)],
  exports: [RouterModule]

})
export class ServiceRoutingModule { }
