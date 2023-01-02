import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerOverviewComponent } from './card-container-overview.component';

describe('CardContainerOverviewComponent', () => {
  let component: CardContainerOverviewComponent;
  let fixture: ComponentFixture<CardContainerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
