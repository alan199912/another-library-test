import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleExamplesComponent } from './card-simple-examples.component';

describe('CardSimpleExamplesComponent', () => {
  let component: CardSimpleExamplesComponent;
  let fixture: ComponentFixture<CardSimpleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
