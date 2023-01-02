import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleHorizontalApiComponent } from './card-simple-horizontal-api.component';

describe('CardSimpleHorizontalApiComponent', () => {
  let component: CardSimpleHorizontalApiComponent;
  let fixture: ComponentFixture<CardSimpleHorizontalApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleHorizontalApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleHorizontalApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
