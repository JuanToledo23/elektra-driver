import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html'
})
export class ValidatorComponent implements OnInit {

  validating = true;

  constructor(public headerService: HeaderService, private router: Router) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.headerService.headerElements = {headerVisibility: false, title: '', showDriverIcon: false, showHelp: false}
    // }, 1);

    // setTimeout(() => {
    //   this.validating = false;
    //   setTimeout(() => {
    //     this.router.navigate(['/driver-car-interview-appointed']);
    //   }, 500);
    // }, 3000);
  }

  public optionsCarga: AnimationOptions = {
    path: 'assets/animations/Carga.json',
  };

  animationCreated(animationItem: AnimationItem): void {
  }

}
