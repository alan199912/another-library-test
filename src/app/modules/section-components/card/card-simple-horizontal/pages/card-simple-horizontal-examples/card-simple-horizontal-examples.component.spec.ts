import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleHorizontalExamplesComponent } from './card-simple-horizontal-examples.component';

describe('CardSimpleHorizontalExamplesComponent', () => {
  let component: CardSimpleHorizontalExamplesComponent;
  let fixture: ComponentFixture<CardSimpleHorizontalExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleHorizontalExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleHorizontalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
