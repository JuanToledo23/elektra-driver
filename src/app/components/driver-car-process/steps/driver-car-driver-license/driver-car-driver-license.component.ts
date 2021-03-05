import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { CameraService } from 'src/app/shared/services/camera.service';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-driver-license',
  templateUrl: './driver-car-driver-license.component.html'
})
export class DriverCarDriverLicenseComponent implements OnInit {

  driverLicense: string = '';

  constructor(
    public headerService: HeaderService, 
    public driverCarService: DriverCarService, 
    public dialog: MatDialog, 
    private router: Router, 
    public cameraService: CameraService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: false, showHelp: true}
    }, 1);
    this.driverLicense = this.cameraService.getDriverLicense;
  }

  openCamera() {
    this.cameraService.typePicture = 'driverLicense';
    this.router.navigate(['/camera']);
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(4);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/driver-car-insurance']);
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }

}
