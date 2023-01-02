import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerHorizontalApiComponent } from './card-container-horizontal-api.component';

describe('CardContainerHorizontalApiComponent', () => {
  let component: CardContainerHorizontalApiComponent;
  let fixture: ComponentFixture<CardContainerHorizontalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerHorizontalApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerHorizontalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
