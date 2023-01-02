import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownApiComponent } from './dropdown-api.component';

describe('DropdownApiComponent', () => {
  let component: DropdownApiComponent;
  let fixture: ComponentFixture<DropdownApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
