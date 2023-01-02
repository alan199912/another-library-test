import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventSimpleExamplesComponent } from './card-event-simple-examples.component';

describe('CardEventSimpleExamplesComponent', () => {
  let component: CardEventSimpleExamplesComponent;
  let fixture: ComponentFixture<CardEventSimpleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardEventSimpleExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardEventSimpleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
