import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseDriverComponent } from './components/choose-driver/choose-driver.component';
import { DriverCarCirculationCardComponent } from './components/driver-car-process/steps/driver-car-circulation-card/driver-car-circulation-card.component';
import { DriverCarDriverLicenseComponent } from './components/driver-car-process/steps/driver-car-driver-license/driver-car-driver-license.component';
import { DriverCarInsuranceComponent } from './components/driver-car-process/steps/driver-car-insurance/driver-car-insurance.component';
import { DriverCarInterviewComponent } from './components/driver-car-process/steps/driver-car-interview/driver-car-interview.component';
import { DriverCarLegalAgreementComponent } from './components/driver-car-process/steps/driver-car-legal-agreement/driver-car-legal-agreement.component';
import { DriverCarOficialIdentificationComponent } from './components/driver-car-process/steps/driver-car-oficial-identification/driver-car-oficial-identification.component';
import { DriverCarProcessComponent } from './components/driver-car-process/driver-car-process.component';
import { DriverCarProfilePictureComponent } from './components/driver-car-process/steps/driver-car-profile-picture/driver-car-profile-picture.component';
import { DriverCarTagComponent } from './components/driver-car-process/steps/driver-car-tag/driver-car-tag.component';
import { DriverCarWhatsappSupportComponent } from './components/driver-car-process/steps/driver-car-whatsapp-support/driver-car-whatsapp-support.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { AddressFormComponent } from './components/registration/address-form/address-form.component';
import { CurpFormComponent } from './components/registration/curp-form/curp-form.component';
import { EmailFormComponent } from './components/registration/email-form/email-form.component';
import { PasswordFormComponent } from './components/registration/password-form/password-form.component';
import { PhoneFormComponent } from './components/registration/phone-form/phone-form.component';
import { CameraComponent } from './shared/camera/camera.component';
import { ValidatorComponent } from './shared/validator/validator.component';
import { InterviewAppointedComponent } from './shared/interview-appointed/interview-appointed.component';


const routes: Routes = [
  {
    path: '', component: HomeScreenComponent,
  },
  {
    path: 'home', component: HomeScreenComponent,
  },
  {
    path: 'curp', component: CurpFormComponent,
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
    path: 'driver-car-oficial-identification', component: DriverCarOficialIdentificationComponent,
  },
  {
    path: 'driver-car-profile-picture', component: DriverCarProfilePictureComponent,
  },
  {
    path: 'driver-car-driver-license', component: DriverCarDriverLicenseComponent,
  },
  {
    path: 'driver-car-insurance', component: DriverCarInsuranceComponent,
  },
  {
    path: 'driver-car-circulation-card', component: DriverCarCirculationCardComponent,
  },
  {
    path: 'driver-car-tag', component: DriverCarTagComponent,
  },
  {
    path: 'driver-car-interview', component: DriverCarInterviewComponent,
  },
  {
    path: 'driver-car-interview-appointed', component: InterviewAppointedComponent,
  },
  {
    path: 'camera', component: CameraComponent,
  },
  {
    path: 'validator', component: ValidatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
