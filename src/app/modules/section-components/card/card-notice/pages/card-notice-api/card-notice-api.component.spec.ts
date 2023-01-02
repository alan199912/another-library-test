import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeApiComponent } from './card-notice-api.component';

describe('CardNoticeApiComponent', () => {
  let component: CardNoticeApiComponent;
  let fixture: ComponentFixture<CardNoticeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNoticeApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
