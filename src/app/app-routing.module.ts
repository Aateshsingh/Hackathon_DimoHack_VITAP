import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HackathonPageComponent } from './hackathon-page/hackathon-page.component';
import { IdeathonPageComponent } from './ideathon-page/ideathon-page.component';
import { QuizComponent } from './quiz/quiz.component';
import { ProjectComponent } from './project/project.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate:[AuthGuard],children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'hackathon-page', component: HackathonPageComponent
      },
      {
        path: 'ideathon-page', component: IdeathonPageComponent
      },
      {
        path: 'quiz', component: QuizComponent
      },
      {
        path: 'project', component: ProjectComponent
      },
      {
        path: 'contact-page', component: ContactPageComponent
      }
    ],
  },
  {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
