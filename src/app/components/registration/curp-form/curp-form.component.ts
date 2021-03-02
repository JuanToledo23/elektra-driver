import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curp-form',
  templateUrl: './curp-form.component.html'
})
export class CurpFormComponent implements OnInit {

  validating: boolean = true;
  completedForm: boolean = false;
  correctForm: boolean = false;
  curp: string = 'VELJ910216HMCNPN00';

  constructor() { }

  ngOnInit(): void {
    this.validateInput();
  }


  validateInput() {
    if(this.curp.length < 18) {
      this.completedForm = false;
      this.validating = true;
      this.correctForm = false;
    } else {
      this.completedForm = true;
      setTimeout(() => {
        this.validating = false;
        this.correctForm = true;
      }, 2000);
    }
  }

}
