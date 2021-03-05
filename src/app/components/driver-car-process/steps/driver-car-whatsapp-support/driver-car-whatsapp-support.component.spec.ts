import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarWhatsappSupportComponent } from './driver-car-whatsapp-support.component';

describe('DriverCarWhatsappSupportComponent', () => {
  let component: DriverCarWhatsappSupportComponent;
  let fixture: ComponentFixture<DriverCarWhatsappSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarWhatsappSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarWhatsappSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
