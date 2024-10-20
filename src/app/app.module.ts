import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverAboutComponent } from './components/over-about/over-about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';
import { LocationZoneComponent } from './components/location-zone/location-zone.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { SupportUsComponent } from './components/support-us/support-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GuidePrincipalesComponent } from './components/guide-principales/guide-principales.component';
import { WhatExpectingComponent } from './components/what-expecting/what-expecting.component';
import { QualityServiceComponent } from './components/quality-service/quality-service.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { P404Component } from './pages/p404/p404.component';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { ValuesComponent } from './pages/values/values.component';
import { HealthAndSafeComponent } from './pages/values/health-and-safe/health-and-safe.component';
import { ResponsibleProductionComponent } from './pages/values/responsible-production/responsible-production.component';
import { IndigenousComponent } from './pages/values/indigenous/indigenous.component';
import { CommunityComponent } from './pages/values/community/community.component';
import { TrailingComponent } from './pages/values/trailing/trailing.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeFR);
@NgModule({
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    OverAboutComponent,
    ContactUsComponent,
    PageLayoutComponent,
    LocationZoneComponent,
    OurTeamComponent,
    SupportUsComponent,
    AboutUsComponent,
    GuidePrincipalesComponent,
    WhatExpectingComponent,
    QualityServiceComponent,
    ProductsComponent,
    ServicesComponent,
    P404Component,
    ValuesComponent,
    HealthAndSafeComponent,
    ResponsibleProductionComponent,
    IndigenousComponent,
    CommunityComponent,
    TrailingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
