import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventOverviewComponent } from './card-event-overview.component';

describe('CardEventOverviewComponent', () => {
  let component: CardEventOverviewComponent;
  let fixture: ComponentFixture<CardEventOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
