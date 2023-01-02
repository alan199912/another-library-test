import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOptionComponent } from './o-option.component';

describe('OOptionsComponent', () => {
  let component: OOptionComponent;
  let fixture: ComponentFixture<OOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OOptionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
