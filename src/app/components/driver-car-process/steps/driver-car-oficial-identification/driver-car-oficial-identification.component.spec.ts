import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarOficialIdentificationComponent } from './driver-car-oficial-identification.component';

describe('DriverCarOficialIdentificationComponent', () => {
  let component: DriverCarOficialIdentificationComponent;
  let fixture: ComponentFixture<DriverCarOficialIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarOficialIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarOficialIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
