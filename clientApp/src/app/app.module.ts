import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  NavModuleModule } from './nav-module/nav-module.module';

import { AppRoutingModule } from './app-routing.module';
import {TraineeModule} from './trainee/trainee.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NavModuleModule,
      TraineeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
