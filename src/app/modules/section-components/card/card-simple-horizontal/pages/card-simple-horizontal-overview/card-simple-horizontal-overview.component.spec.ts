import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleHorizontalOverviewComponent } from './card-simple-horizontal-overview.component';

describe('CardSimpleHorizontalOverviewComponent', () => {
  let component: CardSimpleHorizontalOverviewComponent;
  let fixture: ComponentFixture<CardSimpleHorizontalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleHorizontalOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleHorizontalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
