import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { CameraService } from '../services/camera.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html'
})
export class CameraComponent implements OnInit {

  constructor(public headerService: HeaderService , public cameraService: CameraService) { }

    public ngOnInit(): void {
        setTimeout(() => {
          this.headerService.headerElements = {headerVisibility: false, title: '', showDriverIcon: false, showHelp: true}
        }, 1);
    }
}
