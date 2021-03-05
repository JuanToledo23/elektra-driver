import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-legal-agreement',
  templateUrl: './driver-car-legal-agreement.component.html'
})
export class DriverCarLegalAgreementComponent implements OnInit {

  aceptedTerms: boolean = false;

  constructor(public headerService: HeaderService, public driverCarService: DriverCarService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: false, showHelp: true}
    }, 1);
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(0);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/driver-car-whatsapp-support']);
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }
}
