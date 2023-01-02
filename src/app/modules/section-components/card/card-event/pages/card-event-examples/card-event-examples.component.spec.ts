import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventExamplesComponent } from './card-event-examples.component';

describe('CardEventExamplesComponent', () => {
  let component: CardEventExamplesComponent;
  let fixture: ComponentFixture<CardEventExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
