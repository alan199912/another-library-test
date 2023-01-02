import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleApiComponent } from './card-simple-api.component';

describe('CardSimpleApiComponent', () => {
  let component: CardSimpleApiComponent;
  let fixture: ComponentFixture<CardSimpleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
