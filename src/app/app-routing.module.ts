import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CurpFormComponent } from './components/registration/curp-form/curp-form.component';


const routes: Routes = [
  {
    path: '', component: CurpFormComponent,
  },
  {
    path: 'home', component: HomeScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
