import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html'
})
export class EmailFormComponent implements OnInit {

  email1: string = '';
  validatingEmail1: boolean = false;
  email2: string = '';
  validatingEmail2: boolean = false;

  emailEmpty1: boolean = true;
  emailEmpty2: boolean = true;

  correctForm: boolean = false;

  emailRe: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { }

  ngOnInit(): void {
  }

  validateEmail1() {
    this.validateEmail2();
    if(this.email1) {
      this.emailEmpty1 = false;
      this.validatingEmail1 = this.emailRe.test(String(this.email1).toLowerCase());
    } else {
      this.validatingEmail1 = false;
      this.emailEmpty1 = true;
    }
  }

  validateEmail2() {
    if(this.email2) {
      this.emailEmpty2 = false;
      if(this.email1 === this.email2 && this.emailRe.test(String(this.email2).toLowerCase())) {
        this.validatingEmail2 = true;
        this.correctForm = true;
      } else {
        this.validatingEmail2 = false;
        this.correctForm = false;
      }
    } else {
      this.emailEmpty2 = true;
    }
    
  }
}
