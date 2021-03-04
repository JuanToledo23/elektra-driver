import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'}
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "ico-arrow-left",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/arrow_left.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-check",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/check_validation.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-error",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/error_validation.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-spinner",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/spinner.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-green-check",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/green_check.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-arrow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/arrow.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "icon-camera",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/btn-camera.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "icon-shutter-camera",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/shutter_camera.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logo-driver",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/logos/logo_driver.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logo-whatsapp",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/logos/whatsapp.svg")
    );
  }
}
