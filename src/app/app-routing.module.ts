import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { SkillsComponent} from './skills/skills.component';
import { ProjectsComponent} from './projects/projects.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
   path: '',
   component: HomeComponent,
  },
  {
   path: 'Skills',
   component: SkillsComponent,
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
  },
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
