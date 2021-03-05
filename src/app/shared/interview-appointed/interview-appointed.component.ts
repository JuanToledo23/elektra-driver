import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-interview-appointed',
  templateUrl: './interview-appointed.component.html'
})
export class InterviewAppointedComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: false, title: '', showDriverIcon: false, showHelp: false}
    }, 1);
  }

}
