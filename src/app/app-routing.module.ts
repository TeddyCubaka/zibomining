import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { P404Component } from './pages/p404/p404.component';
import { ServicesComponent } from './pages/services/services.component';
import { ValuesComponent } from './pages/values/values.component';

const routes: Routes = [
  {
    path : "", component : HomeComponent
  },
  {
    path : "", component : PageLayoutComponent,
    children : [
      {
        path : "about-us", component : AboutUsComponent
      },
      {
        path : "contact-us", component : ContactUsComponent
      },
      
      {
        path : "services", component : ServicesComponent
      },
      {
        path : "values", component : ValuesComponent
      }
    ]
  },{
     path : "**", component : P404Component
  }
];

@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA, ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
