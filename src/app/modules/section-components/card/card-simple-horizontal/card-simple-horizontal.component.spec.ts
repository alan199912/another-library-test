import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleHorizontalComponent } from './card-simple-horizontal.component';

describe('CardSimpleHorizontalComponent', () => {
  let component: CardSimpleHorizontalComponent;
  let fixture: ComponentFixture<CardSimpleHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSimpleHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSimpleHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
