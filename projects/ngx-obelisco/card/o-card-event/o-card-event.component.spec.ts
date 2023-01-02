import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardEventComponent } from './o-card-event.component';

describe('OCardEventComponent', () => {
  let component: OCardEventComponent;
  let fixture: ComponentFixture<OCardEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardEventComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
