import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html'
})
export class AddressFormComponent implements OnInit {

  continueButton:boolean = false;

  form = {
    codigoPostal: '',
    colonia: '',
    calle: '',
    exterior: '',
    interior: '',
    alcaldia: '',
    estadoCiudad: '',
    pais:''
  };

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: '¡Bienvenido, Juan!', showDriverIcon: false, showHelp: false}
    }, 1);
  }

  validateForm() {
    Object.values(this.form).forEach(element => {
      this.continueButton = true;
      if(!Object.values(this.form)[4]){
        if(!element) {
          this.continueButton = false;
        }
      }
      
    });
  }

}
