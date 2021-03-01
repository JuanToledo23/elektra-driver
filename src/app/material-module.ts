import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
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
      "ico-spinner",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icons/spinner.svg")
    );
  }
}
