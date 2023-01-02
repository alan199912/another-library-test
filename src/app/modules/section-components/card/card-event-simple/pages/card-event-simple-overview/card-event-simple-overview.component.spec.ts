import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventSimpleOverviewComponent } from './card-event-simple-overview.component';

describe('CardEventSimpleOverviewComponent', () => {
  let component: CardEventSimpleOverviewComponent;
  let fixture: ComponentFixture<CardEventSimpleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventSimpleOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventSimpleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
