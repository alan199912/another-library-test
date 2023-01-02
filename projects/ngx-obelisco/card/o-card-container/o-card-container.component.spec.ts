import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCardContainerComponent } from './o-card-container.component';

describe('OCardContainerComponent', () => {
  let component: OCardContainerComponent;
  let fixture: ComponentFixture<OCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OCardContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
