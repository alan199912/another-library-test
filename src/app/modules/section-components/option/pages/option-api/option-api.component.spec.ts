import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionApiComponent } from './option-api.component';

describe('OptionApiComponent', () => {
  let component: OptionApiComponent;
  let fixture: ComponentFixture<OptionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionApiComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
