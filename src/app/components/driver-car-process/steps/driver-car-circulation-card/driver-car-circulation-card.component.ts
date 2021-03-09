import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertDialog } from 'src/app/shared/dialogs/alert-dialog/alert.dialog';
import { CameraService } from 'src/app/shared/services/camera.service';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-circulation-card',
  templateUrl: './driver-car-circulation-card.component.html'
})
export class DriverCarCirculationCardComponent implements OnInit {

  circulationCard: string = '';

  continueButton: boolean = false;
  
  form = {
    nombrePropietario: '',
    marca: '',
    linea: '',
    placas: '',
    numeroTarjeta: ''
  };

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
    this.circulationCard = this.cameraService.getCirculationCard;
  }

  openCamera() {
    this.cameraService.typePicture = 'circulationCard';
    this.router.navigate(['/camera']);
  }

  validateForm() {
    console.log( Object.values(this.form));
    Object.values(this.form).forEach(element => {
      if(element === '') {
        this.continueButton = false;
      } else {
        this.continueButton = true;
      }
    });
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(6);
    const dialogRef = this.dialog.open(AlertDialog, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/driver-car-tag']);
      } else {
        this.router.navigate(['/driver-car-process']);
      }
    });
  }

}
