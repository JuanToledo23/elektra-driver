import { Injectable } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    constructor(public location: Location) { }

    typePicture: string = '';

    ineFront: string = '';
    ineBack: string = '';
    profilePicture: string = '';
    driverLicense: string = '';
    carInsurance: string = '';
    circulationCard: string = '';
    carTag: string = '';
    

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
        this.webcamImage = webcamImage;

        switch(this.typePicture){
            case 'ineFront': 
                this.ineFront = this.webcamImage._imageAsDataUrl;
            break;
            case 'ineBack': 
                this.ineBack = this.webcamImage._imageAsDataUrl;
            break;
            case 'profilePicture': 
                this.profilePicture = this.webcamImage._imageAsDataUrl;
            break;
            case 'driverLicense': 
                this.driverLicense = this.webcamImage._imageAsDataUrl;
            break;
            case 'carInsurance': 
                this.carInsurance = this.webcamImage._imageAsDataUrl;
            break;
            case 'circulationCard': 
                this.circulationCard = this.webcamImage._imageAsDataUrl;
            break;
            case 'carTag': 
                this.carTag = this.webcamImage._imageAsDataUrl;
            break;

        }
    }

    get getPictureIneFront() {
        return this.ineFront;
    }

    get getPictureIneBack() {
        return this.ineBack;
    }

    get getprofilePicture() {
        return this.profilePicture;
    }

    get getDriverLicense() {
        return this.driverLicense;
    }
    
    get getCarInsurance() {
        return this.carInsurance;
    }

    get getCirculationCard() {
        return this.circulationCard;
    }

    get getCarTag() {
        return this.carTag;
    }

    get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }

    get ineFrontPricture() {
        return this.ineFront;
    }

}

