import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  headerDriver: boolean

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
