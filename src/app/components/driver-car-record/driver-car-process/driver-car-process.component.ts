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
    this.headerService.headerElements = {title: '', showDriverIcon: true, showHelp: true}
    this.driverCarProceedings = this.driverCarService.getDriverCarProceedings();
    this.driverCarProceedingsComplete = this.driverCarService.getDriverCarProceedingsComplete();
  }

}
