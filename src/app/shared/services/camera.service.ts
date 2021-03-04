import { Injectable } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    constructor(public location: Location) { }

    ineFront: string = '';
    ineBack: string = '';
    profilePicture: string = '';
    
    snapshots = {
        firstSnapshot: false,
        secodSnapshot: false,
    };

    // showWebcam = true;
    allowCameraSwitch = true;
    // deviceId: string;
    // videoOptions: MediaTrackConstraints = {
    //   // width: {ideal: 1024},
    //   // height: {ideal: 576}
    // };
    errors: WebcamInitError[] = [];

    // latest snapshot
    webcamImage: any = null;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    ngOnInit(): void {
    }

    triggerSnapshot(): void {
        this.trigger.next();
        this.location.back();
    }

    handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    handleImage(webcamImage: any): void {
        console.log(webcamImage);
        this.webcamImage = webcamImage;
    }

    getImg() {;
        return this.webcamImage;
    }

    get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }

}

