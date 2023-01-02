import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OStatusBarComponent } from './o-status-bar.component';

describe('OStatusBarComponent', () => {
  let component: OStatusBarComponent;
  let fixture: ComponentFixture<OStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OStatusBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
