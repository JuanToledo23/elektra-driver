import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-whatsapp-support',
  templateUrl: './driver-car-whatsapp-support.component.html'
})
export class DriverCarWhatsappSupportComponent implements OnInit {

  constructor(public headerService: HeaderService, public driverCarService: DriverCarService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.headerService.headerElements = {title: '', showDriverIcon: false, showHelp: true}
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(1);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        /* this.router.navigate(['/driver-car-whatsapp-support']); */
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }

}
