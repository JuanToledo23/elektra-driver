import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-choose-driver',
  templateUrl: './choose-driver.component.html'
})
export class ChooseDriverComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '', showDriverIcon: true, showHelp: true}
    }, 1);
  }

}
