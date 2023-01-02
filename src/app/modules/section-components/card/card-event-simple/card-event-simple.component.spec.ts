import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventSimpleComponent } from './card-event-simple.component';

describe('CardEventSimpleComponent', () => {
  let component: CardEventSimpleComponent;
  let fixture: ComponentFixture<CardEventSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventSimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
