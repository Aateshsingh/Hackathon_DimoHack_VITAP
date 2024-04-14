import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HackathonPageComponent } from './hackathon-page/hackathon-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IdeathonPageComponent } from './ideathon-page/ideathon-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProjectComponent } from './project/project.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HackathonPageComponent,
    NavbarComponent,
    HomeComponent,
    IdeathonPageComponent,
    QuizComponent,
    ProjectComponent,
    ContactPageComponent,
    LoginComponent,
    LayoutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterOutlet
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
