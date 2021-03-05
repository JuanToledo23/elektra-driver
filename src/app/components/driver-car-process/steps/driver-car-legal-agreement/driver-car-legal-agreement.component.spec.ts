import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarLegalAgreementComponent } from './driver-car-legal-agreement.component';

describe('DriverCarLegalAgreementComponent', () => {
  let component: DriverCarLegalAgreementComponent;
  let fixture: ComponentFixture<DriverCarLegalAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarLegalAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarLegalAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
