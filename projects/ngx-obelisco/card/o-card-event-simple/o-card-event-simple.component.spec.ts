import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardEventSimpleComponent } from './o-card-event-simple.component';

describe('OCardEventSimpleComponent', () => {
  let component: OCardEventSimpleComponent;
  let fixture: ComponentFixture<OCardEventSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardEventSimpleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardEventSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
