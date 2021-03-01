import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html'
})
export class HomeScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public optionsCaminar: AnimationOptions = {
    path: 'assets/animations/splash.json',
  };


  animationCreated(animationItem: AnimationItem): void {
  }

}
