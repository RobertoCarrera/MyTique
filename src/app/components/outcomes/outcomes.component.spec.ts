import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomesComponent } from './outcomes.component';

describe('OutcomesComponent', () => {
  let component: OutcomesComponent;
  let fixture: ComponentFixture<OutcomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutcomesComponent]
    });
    fixture = TestBed.createComponent(OutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
