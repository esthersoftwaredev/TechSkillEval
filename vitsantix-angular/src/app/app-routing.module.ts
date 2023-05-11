import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assessments', component: AssessmentsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
