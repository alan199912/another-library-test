import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionExamplesComponent } from './option-examples.component';

describe('OptionExamplesComponent', () => {
  let component: OptionExamplesComponent;
  let fixture: ComponentFixture<OptionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionExamplesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
