import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardNoticeComponent } from './o-card-notice.component';

describe('OCardNoticeComponent', () => {
  let component: OCardNoticeComponent;
  let fixture: ComponentFixture<OCardNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardNoticeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
