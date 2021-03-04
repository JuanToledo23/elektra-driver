import { Component } from '@angular/core';
import { HeaderService } from './shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ekt-driver';
  constructor(public headerService: HeaderService){}
}
