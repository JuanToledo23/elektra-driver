import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { CurpFormComponent } from './components/registration/curp-form/curp-form.component';
import { EmailFormComponent } from './components/registration/email-form/email-form.component';
import { PhoneFormComponent } from './components/registration/phone-form/phone-form.component';


const routes: Routes = [
  {
    path: '', component: CurpFormComponent,
  },
  {
    path: 'email', component: EmailFormComponent,
  },
  {
    path: 'phone', component: PhoneFormComponent,
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
