import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerHorizontalComponent } from './card-container-horizontal.component';

describe('CardContainerHorizontalComponent', () => {
  let component: CardContainerHorizontalComponent;
  let fixture: ComponentFixture<CardContainerHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardContainerHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CardContainerHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
