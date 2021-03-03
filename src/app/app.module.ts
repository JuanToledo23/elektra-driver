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
export function playerFactory(){
  return player;
}

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
    DriverCarWhatsappSupportComponent
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
  ],
  entryComponents: [
    AlertDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
