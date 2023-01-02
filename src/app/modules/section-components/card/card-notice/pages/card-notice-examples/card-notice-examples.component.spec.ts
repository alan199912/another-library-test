import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeExamplesComponent } from './card-notice-examples.component';

describe('CardNoticeExamplesComponent', () => {
  let component: CardNoticeExamplesComponent;
  let fixture: ComponentFixture<CardNoticeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNoticeExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
