import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardSimpleHorizontalComponent } from './o-card-simple-horizontal.component';

describe('OCardSimpleHorizontalComponent', () => {
  let component: OCardSimpleHorizontalComponent;
  let fixture: ComponentFixture<OCardSimpleHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardSimpleHorizontalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardSimpleHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
