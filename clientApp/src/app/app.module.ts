import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { NavModuleModule } from './nav-module/nav-module.module';
import { TraineeModule } from './trainee/trainee.module';
import { TrainerModule } from './trainer/trainer.module';
import { HealthModule } from './health/health.module';
import { MilitaryModule } from './military/military.module';
import { AdminModule } from './admin/admin.module';
import { EducationModule } from './education/education.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { SramModule } from './sram/sram.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
   declarations: [
      AppComponent

   ],
   imports: [
      BrowserModule,
      NavModuleModule,
      HomeModule,
      TraineeModule,
      TrainerModule,
      HealthModule,
      MilitaryModule,
      AdminModule,
      EducationModule,
      AboutModule,
      ContactModule,
      SramModule,
      ServicesModule,
      AppRoutingModule

   ],

   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
