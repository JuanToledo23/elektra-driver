import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html'
})
export class PhoneFormComponent implements OnInit {

  phone: string = '';
  code: string = '';

  showCodeInput: boolean = false;
  codeSent: boolean = false;

  validCode: boolean = false;

  validatingCode:boolean = true;

  continueButton: boolean = false;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.headerElements = {title: '¡Bienvenido, Juan!', showDriverIcon: false, showHelp: false}
  }

  validatePhone() {
    if(this.phone.length === 2) {
      this.phone += ' ';
    }
    if(this.phone.length === 7) {
      this.phone += ' ';
    }
  }

  sendCode() {
    this.showCodeInput = true;
    this.codeSent = true;
  }

  validateCode() {
    if(this.code.length <= 9) {
      if(this.code.length === 4) {
        this.code += '-';
      }
      this.validCode = true;
      this.validatingCode = true;
      setTimeout(() => {
        this.validatingCode = false;
        if(this.code.length < 9) {
          this.validCode = false;
          this.continueButton = false;
        } else {
          this.validCode = true;
          this.continueButton = true;
        }
      }, 500);
    }
  }

}
