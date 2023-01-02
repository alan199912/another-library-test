import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventApiComponent } from './card-event-api.component';

describe('CardEventApiComponent', () => {
  let component: CardEventApiComponent;
  let fixture: ComponentFixture<CardEventApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
