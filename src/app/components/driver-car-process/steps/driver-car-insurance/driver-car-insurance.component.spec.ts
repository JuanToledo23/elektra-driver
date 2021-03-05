import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarInsuranceComponent } from './driver-car-insurance.component';

describe('DriverCarInsuranceComponent', () => {
  let component: DriverCarInsuranceComponent;
  let fixture: ComponentFixture<DriverCarInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
