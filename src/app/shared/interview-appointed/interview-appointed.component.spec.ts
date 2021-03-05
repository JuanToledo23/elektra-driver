import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAppointedComponent } from './interview-appointed.component';

describe('InterviewAppointedComponent', () => {
  let component: InterviewAppointedComponent;
  let fixture: ComponentFixture<InterviewAppointedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewAppointedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewAppointedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
