import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventSimpleApiComponent } from './card-event-simple-api.component';

describe('CardEventSimpleApiComponent', () => {
  let component: CardEventSimpleApiComponent;
  let fixture: ComponentFixture<CardEventSimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventSimpleApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventSimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
