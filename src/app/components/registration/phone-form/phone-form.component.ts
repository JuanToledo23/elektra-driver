import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
    this.validatingCode = true;
    setTimeout(() => {
      this.validatingCode = false;

      if(this.code.length < 9) {
        this.validCode = false;
      } else {
        this.validCode = true;
      }
    }, 500);

/*     if(this.code.length < 9) {
      this.validCode = false;
    } else {
      this.validatingCode = true;
      setTimeout(() => {
        this.validatingCode = false;
      }, 2000);
    } */
    /* this.code = '1234-5678'; */
  }

}
