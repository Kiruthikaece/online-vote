import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdationComponent } from './form-updation.component';

describe('FormUpdationComponent', () => {
  let component: FormUpdationComponent;
  let fixture: ComponentFixture<FormUpdationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUpdationComponent]
    });
    fixture = TestBed.createComponent(FormUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
