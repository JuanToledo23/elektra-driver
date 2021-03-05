import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarInterviewComponent } from './driver-car-interview.component';

describe('DriverCarInterviewComponent', () => {
  let component: DriverCarInterviewComponent;
  let fixture: ComponentFixture<DriverCarInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
