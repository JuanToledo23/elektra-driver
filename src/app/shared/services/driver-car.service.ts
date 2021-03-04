import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { threadId } from 'worker_threads';

@Injectable({
    providedIn: 'root'
})
export class DriverCarService {

    driverCarProceedings = [
        { id: 0, title: 'Acuerdo legal', nextStep: false, status: false, rute: '/driver-car-legal-agreement' },
        { id: 1, title: 'Soporte por WhatsApp', nextStep: false, status: false, rute: '/driver-car-whatsapp-support' },
        { id: 2, title: 'Identificación oficial vigente', nextStep: false, status: false, rute: '/driver-car-oficial-identification' },
        { id: 3, title: 'Foto de perfil', nextStep: false, status: false, rute: '/driver-car-profile-picture' },
        { id: 4, title: 'Licencia para conducir vigente', nextStep: false, status: false, rute: '/driver-car-driver-license' },
        { id: 5, title: 'Seguro de cobertura amplia vigente y que muestre las coberturas', nextStep: false, status: false, rute: '/driver-car-insurance' },
        { id: 6, title: 'Tarjeta de circulación vigente', nextStep: false, status: false, rute: '/driver-car-circulation-card' },
        { id: 7, title: 'TAG de Televía (no se acepta EcoTag)', nextStep: false, status: false, rute: '/driver-car-tag' },
        { id: 8, title: 'Agenda una entrevista', nextStep: false, status: false, rute: '/driver-car-interview' },
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
        const process = this.driverCarProceedings[id];
        process.status = true;
        process.nextStep = false;
        this.driverCarProceedingsComplete.push(process);
        this.driverCarProceedingsComplete = this.driverCarProceedingsComplete.filter(this.onlyUnique);
        let driverCarProceedingsLength = this.driverCarProceedings.length;
        for (let index = 0; index < driverCarProceedingsLength; index++) {
            const element = this.driverCarProceedings[index];
            if(element.status === false) {
                element.nextStep = true;
                break;
            }
            
        }
    }

    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

}

