import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-component/home.component';



// Routes for Home Module and its Children
const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]

})
export class HomeRoutingModule { }
