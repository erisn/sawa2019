import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { Con1Component } from './con1/con1.component';
import { Con2Component } from './con2/con2.component';
import { Con3Component } from './con3/con3.component';






// Routes for contact Module and its Children
const contactRoutes: Routes = [
    { path: 'contact', component: ContactComponentComponent,
          children: [
        { path: 'con1', component: Con1Component},
        { path: 'con2', component: Con2Component},
        { path: 'con3', component: Con3Component}
         ]
     }
  ];

// All secondary modules Routes take the forChild method instead of forRoot method
@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]

})
export class contactRoutingModule { }
