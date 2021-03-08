import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html'
})
export class PasswordFormComponent implements OnInit {

  passw1: string = '';
  validatingPassw1: boolean = false;
  passw2: string = '';
  validatingPassw2: boolean = false;

  passwEmpty1: boolean = true;
  passwEmpty2: boolean = true;

  correctForm: boolean = false;

  passwRe: RegExp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]).*$/;


  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '¡Bienvenido, Juan!', showDriverIcon: false, showHelp: false}
    }, 1);
  }

  validatePassw1() {
    /* this.validatePassw2(); */
    if(this.passw1) {
      this.passwEmpty1 = false;
      this.validatingPassw1 = this.passwRe.test(this.passw1);
    } else {
      this.validatingPassw1 = false;
      this.passwEmpty1 = true;
    }
  }

  validatePassw2() {
    if(this.passw2) {
      this.passwEmpty2 = false;
      if(this.passw1 === this.passw2 && this.passwRe.test(this.passw2)) {
        this.validatingPassw2 = true;
        this.correctForm = true;
      } else {
        this.validatingPassw2 = false;
        this.correctForm = false;
      }
    } else {
      this.passwEmpty2 = true;
    }
    
  }

}
