import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerHorizontalExamplesComponent } from './card-container-horizontal-examples.component';

describe('CardContainerHorizontalExamplesComponent', () => {
  let component: CardContainerHorizontalExamplesComponent;
  let fixture: ComponentFixture<CardContainerHorizontalExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerHorizontalExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerHorizontalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
