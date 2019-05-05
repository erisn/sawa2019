import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SramComponentComponent } from './sram-component/sram-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SramRoutingModule } from './sram-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SramComponentComponent,
    LandingPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SramRoutingModule,
    FormsModule
  ],
  exports: [
    SramComponentComponent
  ]
})
export class SramModule { }
