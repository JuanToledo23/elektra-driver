import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { CameraService } from 'src/app/shared/services/camera.service';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-oficial-identification',
  templateUrl: './driver-car-oficial-identification.component.html'
})
export class DriverCarOficialIdentificationComponent implements OnInit {

  activarButtonContinuar:boolean=false;
  ineFront: string = '';
  ineBack: string = '';
  constructor(public headerService: HeaderService, public driverCarService: DriverCarService, public dialog: MatDialog, private router: Router, public cameraService: CameraService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: false, showHelp: true}
    }, 1);
    this.ineFront = this.cameraService.getPictureIneFront;
    this.ineBack = this.cameraService.getPictureIneBack;
    this.validarIdentificacion()

  }

  validarIdentificacion(){
    if(this.cameraService.ineFront === '' || this.cameraService.ineBack === ''){
        this.activarButtonContinuar=false;
    }else {
        this.activarButtonContinuar=true;
    }
  }

  openCamera(snapshot) {
    if(snapshot === 1) {
      this.cameraService.typePicture = 'ineFront';
      this.router.navigate(['/camera']);
    }
    if(snapshot === 2) {
      this.cameraService.typePicture = 'ineBack';
      this.router.navigate(['/camera']);
    }
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(2);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/driver-car-profile-picture']);
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }

}
