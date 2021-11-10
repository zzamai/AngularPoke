import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatcherComponent } from './catcher/catcher.component';
import { AllofthemComponent } from './allofthem/allofthem.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: CatcherComponent },
  { path: 'allofthem', component: AllofthemComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
