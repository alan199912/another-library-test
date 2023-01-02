import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleOverviewComponent } from './card-simple-overview.component';

describe('CardSimpleOverviewComponent', () => {
  let component: CardSimpleOverviewComponent;
  let fixture: ComponentFixture<CardSimpleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
