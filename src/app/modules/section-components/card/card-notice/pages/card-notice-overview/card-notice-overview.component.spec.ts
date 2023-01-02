import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeOverviewComponent } from './card-notice-overview.component';

describe('CardNoticeOverviewComponent', () => {
  let component: CardNoticeOverviewComponent;
  let fixture: ComponentFixture<CardNoticeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNoticeOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
