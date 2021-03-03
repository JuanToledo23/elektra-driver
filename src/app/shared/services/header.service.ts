import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    headerElements = {
        title: 'Registro',
        showDriverIcon: false,
        showHelp: false
    }

    constructor(
        public location: Location
    ) { }

    goBack() {
        this.location.back();
    }
}

