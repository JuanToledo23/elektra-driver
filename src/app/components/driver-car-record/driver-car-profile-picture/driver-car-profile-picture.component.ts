import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { CameraService } from 'src/app/shared/services/camera.service';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-profile-picture',
  templateUrl: './driver-car-profile-picture.component.html'
})
export class DriverCarProfilePictureComponent implements OnInit {

  constructor(public headerService: HeaderService, public driverCarService: DriverCarService, public dialog: MatDialog, private router: Router, public cameraService: CameraService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: false, showHelp: true}
    }, 1);
    if(this.cameraService.snapshots.firstSnapshot) {
      this.cameraService.profilePicture = this.cameraService.getImg().imageAsDataUrl;
      // this.validarIdentificacion();
    }
  }

  openCamera() {
      this.cameraService.snapshots.secodSnapshot = false;
      this.router.navigate(['/camera']);
      this.cameraService.snapshots.firstSnapshot = true;
  }

  processComplete() {
    this.driverCarService.count++;
    this.driverCarService.updateDriverCarProceedings(3);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // this.router.navigate(['/driver-car-profile-picture']);
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }

}
