import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
    providedIn: 'root'
})
export class DriverCarService {

    driverCarProceedings = [
        { id: 0, title: 'Acuerdo legal', nextStep: false, status: false, rute: '/driver-car-legal-agreement' },
        { id: 1, title: 'Soporte por WhatsApp', nextStep: false, status: false, rute: '/driver-car-whatsapp-support' },
        { id: 2, title: 'Identificación oficial vigente', nextStep: false, status: false, rute: '/driver-car-oficial-identification' },
        { id: 3, title: 'Foto de perfil', nextStep: false, status: false, rute: '/driver-car-profile-picture' },
        { id: 4, title: 'Licencia para conducir vigente', nextStep: false, status: false, rute: '' },
        { id: 5, title: 'Seguro de cobertura amplia vigente y que muestre las coberturas', nextStep: false, status: false, rute: '' },
        { id: 6, title: 'Tarjeta de circulación vigente', nextStep: false, status: false, rute: '' },
        { id: 7, title: 'TAG de Televía (no se acepta EcoTag)', nextStep: false, status: false, rute: '' },
        { id: 8, title: 'Agenda una entrevista', nextStep: false, status: false, rute: '' },
    ];

    count: number = 0;

    driverCarProceedingsComplete = [];

    getDriverCarProceedings() {
        return this.driverCarProceedings;
    }

    getDriverCarProceedingsComplete() {
        return this.driverCarProceedingsComplete;
    }

    updateDriverCarProceedings(id: number) {
        // this.count = 0;
        const process = this.driverCarProceedings.find(element => element.id === id);
        // this.driverCarProceedings.forEach(element => {
        //     if(element.status) {
        //         this.count++;
        //     }
        // });
        console.log(this.count);
        process.status = true;
        process.nextStep = false;
        this.driverCarProceedingsComplete.push(process);
        if(id < 8) {
            this.driverCarProceedings.find(element => element.id === this.count).nextStep = true;
        }
    }

}

