import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home-component/home.component';
import {TraineeComponent} from './trainee/trainee-component/trainee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'trainee', component: TraineeComponent},

  { path: '**', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
