import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerApiComponent } from './card-container-api.component';

describe('CardContainerApiComponent', () => {
  let component: CardContainerApiComponent;
  let fixture: ComponentFixture<CardContainerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
