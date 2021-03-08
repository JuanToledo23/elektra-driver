import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HelpService {

    messages = [
    ];

    constructor() { }

    getMessages() {
        return this.messages;
    }

}

