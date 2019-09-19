import { EmailService } from 'src/app/services/email.service';
import { ScrollService } from './services/scroll.service';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EductationComponent } from './components/eductation/eductation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { WorksComponent } from './components/works/works.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    EductationComponent,
    ExperienceComponent,
    AbilitiesComponent,
    WorksComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxScrollspyModule.forRoot(),
    ScrollToModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ScrollService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
