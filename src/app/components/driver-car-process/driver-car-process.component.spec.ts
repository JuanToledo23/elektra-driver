import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarProcessComponent } from './driver-car-process.component';

describe('DriverCarProcessComponent', () => {
  let component: DriverCarProcessComponent;
  let fixture: ComponentFixture<DriverCarProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
