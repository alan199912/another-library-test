import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNoticeComponent } from './card-notice.component';

describe('CardNoticeComponent', () => {
  let component: CardNoticeComponent;
  let fixture: ComponentFixture<CardNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNoticeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
