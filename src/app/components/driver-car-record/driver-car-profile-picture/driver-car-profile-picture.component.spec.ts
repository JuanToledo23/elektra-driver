import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCarProfilePictureComponent } from './driver-car-profile-picture.component';

describe('DriverCarProfilePictureComponent', () => {
  let component: DriverCarProfilePictureComponent;
  let fixture: ComponentFixture<DriverCarProfilePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCarProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCarProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
