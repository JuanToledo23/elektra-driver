import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  messages: any;
  messageText: string = '';

  constructor(public headerService: HeaderService, public helpService: HelpService) {
    this.messages = this.helpService.getMessages();
    console.log(this.messages);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerService.headerElements = {headerVisibility: true, title: 'Ayuda en línea', showDriverIcon: false, showHelp: false}
    }, 1);
  }

  sendMessage() {
    if(this.messageText) {
      this.messages.push({
          id: this.messages.length, type: 'client', 
          message: this.messageText,
        });
        this.messageText = '';

        setTimeout(() => {
          this.messages.push({
            id: this.messages.length, type: 'server', 
            message: 'respuesta de ayuda',
          });
        }, 2000);
    }
    
  }

}
