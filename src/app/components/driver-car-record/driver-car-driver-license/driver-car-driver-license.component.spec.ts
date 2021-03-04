import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarDriverLicenseComponent } from './driver-car-driver-license.component';

describe('DriverCarDriverLicenseComponent', () => {
  let component: DriverCarDriverLicenseComponent;
  let fixture: ComponentFixture<DriverCarDriverLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarDriverLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarDriverLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
