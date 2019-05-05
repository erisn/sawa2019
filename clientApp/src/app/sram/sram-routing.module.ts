import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SramComponentComponent } from './sram-component/sram-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



// Routes for Trainee Module and its Children
const sramRoutes: Routes = [
    { path: 'sign', component: SramComponentComponent,
          children: [
        { path: 'sign-in', component: SignInComponent },
        { path: 'sign-up', component: SignUpComponent },
        { path: '', component: LandingPageComponent },
        { path: '**', component: LandingPageComponent }
        ]
     }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(sramRoutes)],
  exports: [RouterModule]

})
export class SramRoutingModule { }
