import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickVoteComponent } from './pick-vote.component';

describe('PickVoteComponent', () => {
  let component: PickVoteComponent;
  let fixture: ComponentFixture<PickVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickVoteComponent]
    });
    fixture = TestBed.createComponent(PickVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
