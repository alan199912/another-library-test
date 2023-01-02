import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODropdownComponent } from './o-dropdown.component';

describe('ODropdownComponent', () => {
  let component: ODropdownComponent;
  let fixture: ComponentFixture<ODropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ODropdownComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ODropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
