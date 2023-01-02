import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerHorizontalOverviewComponent } from './card-container-horizontal-overview.component';

describe('CardContainerHorizontalOverviewComponent', () => {
  let component: CardContainerHorizontalOverviewComponent;
  let fixture: ComponentFixture<CardContainerHorizontalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerHorizontalOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerHorizontalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
