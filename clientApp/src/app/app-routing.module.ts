import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TraineeComponent} from './trainee/trainee-component/trainee.component';
import { TraineeComponentComponent } from './trainer/trainee-component/trainee-component.component';
import { HealthComponentComponent } from './health/health-component/health-component.component';
import { MilitaryComponentComponent } from './military/military-component/military-component.component';
import { AdminComponentComponent } from './admin/admin-component/admin-component.component';
import { EducationComponentComponent } from './education/education-component/education-component.component';
import { AboutComponentComponent } from './about/about-component/about-component.component';
import { ContactComponentComponent } from './contact/contact-component/contact-component.component';
import { SramComponentComponent } from './sram/sram-component/sram-component.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'trainee', component: TraineeComponent},
  { path: 'trainer', component: TraineeComponentComponent},
  { path: 'health', component: HealthComponentComponent},
  { path: 'military', component: MilitaryComponentComponent},
  { path: 'admin', component: AdminComponentComponent},
  { path: 'education', component: EducationComponentComponent},
  { path: 'about', component: AboutComponentComponent},
  { path: 'contact', component: ContactComponentComponent},
  { path: 'service', component: AboutComponentComponent},
  { path: 'sign', component: SramComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
