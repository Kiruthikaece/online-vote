import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessVoteComponent } from './success-vote.component';

describe('SuccessVoteComponent', () => {
  let component: SuccessVoteComponent;
  let fixture: ComponentFixture<SuccessVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessVoteComponent]
    });
    fixture = TestBed.createComponent(SuccessVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
