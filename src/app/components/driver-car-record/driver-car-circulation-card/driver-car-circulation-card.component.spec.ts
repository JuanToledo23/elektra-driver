import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarCirculationCardComponent } from './driver-car-circulation-card.component';

describe('DriverCarCirculationCardComponent', () => {
  let component: DriverCarCirculationCardComponent;
  let fixture: ComponentFixture<DriverCarCirculationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarCirculationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarCirculationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
