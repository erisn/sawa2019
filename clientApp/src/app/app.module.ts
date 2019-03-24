import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import {  NavModuleModule } from './nav-module/nav-module.module';
import { AppRoutingModule } from './app-routing.module';
import { TraineeModule } from './trainee/trainee.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrainerModule } from './trainer/trainer.module';
import { HealthModule } from './health/health.module';
import { MilitaryModule } from './military/military.module';
import { AdminModule } from './admin/admin.module';
import { EducationModule } from './education/education.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { SramModule } from './sram/sram.module';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent



   ],
   imports: [
      BrowserModule,
      NavModuleModule,
      TraineeModule,
      TrainerModule,
      HealthModule,
      MilitaryModule,
      AdminModule,
      EducationModule,
      AboutModule,
      ContactModule,
      SramModule,
      AppRoutingModule,
      FormsModule

   ],

   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
