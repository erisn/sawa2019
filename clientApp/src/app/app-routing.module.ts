import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
{ path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
{ path: 'trainee', loadChildren: '../app/trainee/trainee.module#TraineeModule'},
{ path: 'trainer', loadChildren: '../app/trainer/trainer.module#TrainerModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
