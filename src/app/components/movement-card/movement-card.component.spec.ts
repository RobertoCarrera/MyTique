import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementCardComponent } from './movement-card.component';

describe('OutcomeCardComponent', () => {
  let component: MovementCardComponent;
  let fixture: ComponentFixture<MovementCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovementCardComponent]
    });
    fixture = TestBed.createComponent(MovementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
