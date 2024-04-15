import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonValidateComponent } from './button-validate.component';

describe('ButtonValidateComponent', () => {
  let component: ButtonValidateComponent;
  let fixture: ComponentFixture<ButtonValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
