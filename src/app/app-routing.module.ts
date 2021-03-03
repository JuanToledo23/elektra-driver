import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseDriverComponent } from './components/choose-driver/choose-driver.component';
import { DriverCarLegalAgreementComponent } from './components/driver-car-record/driver-car-legal-agreement/driver-car-legal-agreement.component';
import { DriverCarProcessComponent } from './components/driver-car-record/driver-car-process/driver-car-process.component';
import { DriverCarWhatsappSupportComponent } from './components/driver-car-record/driver-car-whatsapp-support/driver-car-whatsapp-support.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AddressFormComponent } from './components/registration/address-form/address-form.component';
import { CurpFormComponent } from './components/registration/curp-form/curp-form.component';
import { EmailFormComponent } from './components/registration/email-form/email-form.component';
import { PasswordFormComponent } from './components/registration/password-form/password-form.component';
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
    path: 'adress', component: AddressFormComponent,
  },
  {
    path: 'password', component: PasswordFormComponent,
  },
  {
    path: 'driver', component: ChooseDriverComponent,
  },
  {
    path: 'driver-car-process', component: DriverCarProcessComponent,
  },
  {
    path: 'driver-car-legal-agreement', component: DriverCarLegalAgreementComponent,
  },
  {
    path: 'driver-car-whatsapp-support', component: DriverCarWhatsappSupportComponent,
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
