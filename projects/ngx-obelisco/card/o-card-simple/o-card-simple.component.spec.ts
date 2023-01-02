import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardSimpleComponent } from './o-card-simple.component';

describe('OCardSimpleComponent', () => {
  let component: OCardSimpleComponent;
  let fixture: ComponentFixture<OCardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardSimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
