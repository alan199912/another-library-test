import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerExamplesComponent } from './card-container-examples.component';

describe('CardContainerExamplesComponent', () => {
  let component: CardContainerExamplesComponent;
  let fixture: ComponentFixture<CardContainerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
