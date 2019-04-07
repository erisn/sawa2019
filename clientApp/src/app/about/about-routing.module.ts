import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { Us1Component } from './us1/us1.component';
import { Us2Component } from './us2/us2.component';
import { Us3Component } from './us3/us3.component';



// Routes for about Module and its Children
const aboutRoutes: Routes = [
    { path: 'about', component: AboutComponentComponent,
          children: [
        { path: 'us1', component: Us1Component },
        { path: 'us2', component: Us2Component },
        { path: 'us3', component: Us3Component }

        ]
     }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]

})
export class AboutRoutingModule { }
