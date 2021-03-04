import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverCarService } from 'src/app/shared/services/driver-car.service';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-driver-car-interview',
  templateUrl: './driver-car-interview.component.html'
})
export class DriverCarInterviewComponent implements OnInit {

  constructor(
    public headerService: HeaderService, 
    public driverCarService: DriverCarService,  
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: false, showHelp: true}
    }, 1);
  }

  processComplete() {
    this.driverCarService.updateDriverCarProceedings(8);
    this.router.navigate(['/validator']);
  }

}
