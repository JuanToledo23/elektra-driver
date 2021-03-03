import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-curp-form',
  templateUrl: './curp-form.component.html'
})
export class CurpFormComponent implements OnInit {

  validating: boolean = true;
  completedForm: boolean = false;
  correctForm: boolean = false;
  curp: string = 'VELJ910216HMCNPN00';
  aceptedTerms: boolean = false;
  continueButton: boolean = false;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.validateInput();
    this.headerService.headerElements = {title: 'Registro', showDriverIcon: false, showHelp: false}
  }


  validateInput() {
    if(this.curp.length < 18) {
      this.completedForm = false;
      this.validating = true;
      this.correctForm = false;
      this.continueButton = false;
      this.aceptedTerms = false;
    } else {
      this.completedForm = true;
      setTimeout(() => {
        this.validating = false;
        this.correctForm = true;
      }, 2000);
    }
  }

  validateTerms() {
    if(this.aceptedTerms && this.correctForm) {
      this.continueButton = true;
    } else {
      this.continueButton = false;
    }
  }

}
