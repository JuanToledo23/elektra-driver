import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDriverComponent } from './choose-driver.component';

describe('ChooseDriverComponent', () => {
  let component: ChooseDriverComponent;
  let fixture: ComponentFixture<ChooseDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
