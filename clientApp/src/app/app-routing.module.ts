import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { SramComponentComponent } from './sram/sram-component/sram-component.component';

import { AboutComponentComponent } from './about/about-component/about-component.component';


const routes: Routes = [
  { path: 'service', component: AboutComponentComponent},
  { path: 'sign', component: SramComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
  { path: 'trainee', loadChildren: '../app/trainee/trainee.module#TraineeModule'},
{ path: 'trainer', loadChildren: '../app/trainer/trainer.module#TrainerModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
