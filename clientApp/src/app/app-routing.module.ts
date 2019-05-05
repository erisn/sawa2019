import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [

  { path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
  { path: 'trainee', loadChildren: '../app/trainee/trainee.module#TraineeModule'},
  { path: 'trainer', loadChildren: '../app/trainer/trainer.module#TrainerModule'},
  { path: 'sram', loadChildren: '../app/sram/sram.module#SramModule'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
