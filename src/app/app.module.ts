import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { CurpFormComponent } from './components/registration/curp-form/curp-form.component';
import { EmailFormComponent } from './components/registration/email-form/email-form.component';
import { PhoneFormComponent } from './components/registration/phone-form/phone-form.component';
import { AddressFormComponent } from './components/registration/address-form/address-form.component';
import { PasswordFormComponent } from './components/registration/password-form/password-form.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ChooseDriverComponent } from './components/choose-driver/choose-driver.component';
import { DriverCarProcessComponent } from './components/driver-car-record/driver-car-process/driver-car-process.component';
import { DriverCarLegalAgreementComponent } from './components/driver-car-record/driver-car-legal-agreement/driver-car-legal-agreement.component';
import { AlertDialog } from './shared/dialogs/alert-dialog/alert.dialog';
import { DriverCarWhatsappSupportComponent } from './components/driver-car-record/driver-car-whatsapp-support/driver-car-whatsapp-support.component';
import { AnimacionRegistrar } from './components/home-screen/animacion-registrar/animacion-registrar.component';
import { DriverCarOficialIdentificationComponent } from './components/driver-car-record/driver-car-oficial-identification/driver-car-oficial-identification.component';
export function playerFactory(){
  return player;
}

import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './shared/camera/camera.component';
import { DriverCarProfilePictureComponent } from './components/driver-car-record/driver-car-profile-picture/driver-car-profile-picture.component';
import { DriverCarDriverLicenseComponent } from './components/driver-car-record/driver-car-driver-license/driver-car-driver-license.component';
import { DriverCarInsuranceComponent } from './components/driver-car-record/driver-car-insurance/driver-car-insurance.component';
import { DriverCarCirculationCardComponent } from './components/driver-car-record/driver-car-circulation-card/driver-car-circulation-card.component';
import { DriverCarTagComponent } from './components/driver-car-record/driver-car-tag/driver-car-tag.component';
import { DriverCarInterviewComponent } from './components/driver-car-record/driver-car-interview/driver-car-interview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurpFormComponent,
    EmailFormComponent,
    PhoneFormComponent,
    AddressFormComponent,
    PasswordFormComponent,
    HomeScreenComponent,
    ChooseDriverComponent,
    DriverCarProcessComponent,
    DriverCarLegalAgreementComponent,
    AlertDialog,
    DriverCarWhatsappSupportComponent,
    AnimacionRegistrar,
    DriverCarOficialIdentificationComponent,
    CameraComponent,
    DriverCarProfilePictureComponent,
    DriverCarDriverLicenseComponent,
    DriverCarInsuranceComponent,
    DriverCarCirculationCardComponent,
    DriverCarTagComponent,
    DriverCarInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    LottieModule.forRoot({ 
      player: playerFactory,
      useCache: true
    }),
    WebcamModule
  ],
  entryComponents: [
    AlertDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
