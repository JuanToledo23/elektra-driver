import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarTagComponent } from './driver-car-tag.component';

describe('DriverCarTagComponent', () => {
  let component: DriverCarTagComponent;
  let fixture: ComponentFixture<DriverCarTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
