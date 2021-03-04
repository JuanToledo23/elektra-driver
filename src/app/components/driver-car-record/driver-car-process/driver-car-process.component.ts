import { Component, OnInit } from '@angular/core';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-process',
  templateUrl: './driver-car-process.component.html'
})
export class DriverCarProcessComponent implements OnInit {

  driverCarProceedings: any;
  driverCarProceedingsComplete: any;

  constructor(public headerService: HeaderService, public driverCarService: DriverCarService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: true, showHelp: true}
    }, 1);
    this.driverCarProceedings = this.driverCarService.getDriverCarProceedings();
    this.driverCarProceedingsComplete = this.driverCarService.getDriverCarProceedingsComplete();
    if(this.driverCarService.count === 0) {
      this.driverCarService.driverCarProceedings[0].nextStep = true;
    }
  }

}
